const { google } = require('googleapis'); 
// const serviceAccountKeyFile = path.join(__dirname,"key-ea854a5e42d4.json"); 
const serviceAccount = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON);
async function _getGoogleSheetClient() {
  const auth = new google.auth.GoogleAuth({
    credentials: serviceAccount,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  const authClient = await auth.getClient();
  return google.sheets({
    version: 'v4',
    auth: authClient,
  });
}

async function _readGoogleSheet(googleSheetClient, sheetId, tabName, range) {
  const res = await googleSheetClient.spreadsheets.values.get({
    spreadsheetId: sheetId,
    range: `${tabName}!${range}`,
  });

  return res.data.values;
}

async function _appendGoogleSheet(
    googleSheetClient,
    sheetId,
    tabName,
    values 
  ) {
    try {
      await googleSheetClient.spreadsheets.values.append({
        spreadsheetId: sheetId,
        range: tabName,
        valueInputOption: 'USER_ENTERED',
        insertDataOption: 'INSERT_ROWS',
        resource: {
          values: [values]
        },
      });
      console.log("Fila agregada correctamente.");
    } catch (error) {
      console.error("Error al agregar fila:", error);
    }
  }
  

module.exports = {_readGoogleSheet,_getGoogleSheetClient,_appendGoogleSheet}