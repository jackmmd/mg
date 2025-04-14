const { _appendGoogleSheet, _getGoogleSheetClient } = require("../config/google-sheets");
const { ResponseMessageDto } = require("../dto/error-dto");
const sheetId = process.env.SHEET_ID
const tabModelOnData = 'Casos SITEDS'
class IncidentService {
    async create(incident){
        const response = new ResponseMessageDto()
        const googleSheetClient = await _getGoogleSheetClient();
        await _appendGoogleSheet(googleSheetClient, sheetId, tabModelOnData, incident);
        return response
    }
}


module.exports = { IncidentService}