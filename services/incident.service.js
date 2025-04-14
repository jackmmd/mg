const { _appendGoogleSheet, _getGoogleSheetClient } = require("../config/google-sheets");
const { ResponseMessageDto } = require("../dto/error-dto");
const sheetId = process.env.SHEET_ID
const tabModelOnData = 'Casos SITEDS'
const tabModelOnData2= 'Mensajes respondidos'
class IncidentService {
    async create(incident,text){
        const response = new ResponseMessageDto()
        const googleSheetClient = await _getGoogleSheetClient();
        await _appendGoogleSheet(googleSheetClient, sheetId, tabModelOnData, incident);
        await _appendGoogleSheet(googleSheetClient, sheetId, tabModelOnData2, text);
        return response
    }
}


module.exports = { IncidentService}