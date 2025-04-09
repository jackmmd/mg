const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser');
const app = express();
app.use(cors()); 
const path = require('path');
const { createFile } = require('./lib/functions/create-file');
const { readFile } = require('./lib/functions/generics');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/',async(req,res)=>{
    res.render('pages/index')
})

let data_csv = ""
let data_res = ""
const incidentes_file = "incidentes.csv"
const incidentes_file_res = "incidentes_res.txt"
app.post('/submit', async (req, res) => {
    const { tipo_error, dni, asegurado, contratante, clinica, detalles } = req.body;
    data_csv = ""
    data_res = ""
    const incidentes_data_file = await readFile(incidentes_file)
    data_csv+=incidentes_data_file
    const incidentes_data_file_res = await readFile(incidentes_file_res)
    data_res+=incidentes_data_file_res
    data_csv +=`${tipo_error}|${dni}|${asegurado}|${contratante}|${clinica}|${detalles}\n`
    data_res +=`DNI: ${dni}\nAsegurado: ${asegurado}\nContratante: ${contratante}\nClínica: ${clinica}\nTipo error: ${tipo_error}\nDetalles del error: ${detalles}\n\n`
    createFile(incidentes_file,"")
    createFile(incidentes_file_res,"")
    createFile(incidentes_file,data_csv)
    createFile(incidentes_file_res,data_res)
    res.send('ok')
  });

app.listen(3000,()=>{
    console.log('server on port 3000')
})