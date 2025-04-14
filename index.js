const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser');
require('dotenv').config()
const app = express();
const whitelist = [
    '*'
  ];
  
  app.use((req, res, next) => {
    const origin = req.get('referer');
    const isWhitelisted = whitelist.find((w) => origin && origin.includes(w));
    if (isWhitelisted) {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,Authorization');
      res.setHeader('Access-Control-Allow-Credentials', true);
    }
    // Pass to next layer of middleware
    if (req.method === 'OPTIONS') res.sendStatus(200);
    else next();
  });
  
  const setContext = (req, res, next) => {
    if (!req.context) req.context = {};
    next();
  };
app.use(setContext);

app.use(cors()); 
const path = require('path');
const { IncidentController } = require('./controllers/incident.controller');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
const incidentController = new IncidentController()
app.get('/',async(req,res)=>{
    res.render('pages/index')
})
app.post('/incident/create',incidentController.create)
const port = process.env.PORT || 8000
app.listen(port,()=>{
    console.log(`server on port ${port}`)
})
