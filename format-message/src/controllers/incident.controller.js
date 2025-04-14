const { IncidentService } = require('../services/incident.service')
const incidentService = new IncidentService()
class IncidentController {
  async create(req, res) {
    const { tipo_error, dni, asegurado, contratante, clinica, detalles } = req.body;
    await incidentService.create([(new Date()).toLocaleDateString(),tipo_error, dni, asegurado, contratante, clinica, detalles])
    res.send('ok')
  }
}

module.exports = { IncidentController }