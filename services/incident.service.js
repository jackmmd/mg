const { _appendGoogleSheet, _getGoogleSheetClient } = require("../config/google-sheets");
const { SHEET_ID } = require("../constants/global-constants");
const { ResponseMessageDto } = require("../dto/error-dto");
const sheetId = SHEET_ID
const tabName = 'Casos SITEDS'
class IncidentService {
    async create(incident,text){
        const response = new ResponseMessageDto()
        const googleSheetClient = await _getGoogleSheetClient();
        await _appendGoogleSheet(googleSheetClient, sheetId, tabName, incident);
        return response
    }
}


module.exports = { IncidentService}