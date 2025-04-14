const { IncidentService } = require('../services/incident.service')
const incidentService = new IncidentService()
class IncidentController {
  async create(req, res) {
    const { tipo_error, dni, asegurado, contratante, clinica, detalles } = req.body;
    const fecha = new Date(); 
    const day = String(fecha.getDate()).padStart(2, '0');
    const month = String(fecha.getMonth() + 1).padStart(2, '0');
    const year = fecha.getFullYear();

    const date_formated = `${day}/${month}/${year}`;
    const text = `
    DNI: ${dni}
    Asegurado: ${asegurado}
    Contratante: ${contratante}
    Clínica: ${clinica}
    Tipo error: ${tipo_error}
    Detalles del error: ${detalles}`;

    await incidentService.create([date_formated,tipo_error, dni, asegurado, contratante, clinica, detalles,date_formated])
    res.send('ok')
  }
}

module.exports = { IncidentController }