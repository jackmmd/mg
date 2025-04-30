const { IncidentService } = require('../services/incident.service')
const incidentService = new IncidentService()
class IncidentController {
  async create(req, res) {
    const { tipo_error, dni, asegurado, contratante, clinica, respuesta } = req.body;
    const fecha = new Date(); 
    const day = String(fecha.getDate()).padStart(2, '0');
    const month = String(fecha.getMonth() + 1).padStart(2, '0');
    const year = fecha.getFullYear();
    const date_formated = `${day}/${month}/${year}`;

    const response = await incidentService.create([date_formated,tipo_error, dni, asegurado, contratante, clinica, respuesta,date_formated])
    res.json(response)
  }
}

module.exports = { IncidentController }