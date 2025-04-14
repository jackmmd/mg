const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser');
require('dotenv').config()
const app = express();
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
