


const{GoogleSpreadsheet}= require('google-spreadsheet');

const fs = require('fs');

const RESPONSES_SHEET_ID = '1wcBdI87RPjxfiX5XNeXvGtGASLJ-a_HapzIrH00YSjM'

const doc = new GoogleSpreadsheet(RESPONSES_SHEET_ID);

const CREDENTIALS = JSON.parse(fs.readFileSync('sheets-nodejs-test-a00813fa7405.json'));

var age=[];
var teams = [];


const GetRow = async () => {
  await doc.useServiceAccountAuth({
    client_email: CREDENTIALS.client_email,
    private_key: CREDENTIALS.private_key
  });

  await doc.loadInfo();

  let sheet = doc.sheetsByIndex[0];

  let rows = await sheet.getRows();

  for (let index = 0; index < rows.length; index++) {
    const row = rows[index];

    if (row.Name == 'Joseph') {
        return 10;
    }
  }
}
//GetRow();

const addRow = async (rows) => {

    // use service account creds
    await doc.useServiceAccountAuth({
        client_email: CREDENTIALS.client_email,
        private_key: CREDENTIALS.private_key
    });

    await doc.loadInfo();

    // Index of the sheet
    let sheet = doc.sheetsByIndex[0];

    for (let index = 0; index < rows.length; index++) {
        const row = rows[index];
        await sheet.addRow(row);
    }
};

let rows = [{
    email: 'email@email.com',
    user_name: 'ramesh',
    password: 'abcd@1234'
}, {
    email: 'email@gmail.com',
    user_name: 'dilip',
    password: 'abcd@1234'
}];

//addRow(rows);

const updateRow = async (keyValue, oldValue, newValue) => {

    // use service account creds
    await doc.useServiceAccountAuth({
        client_email: CREDENTIALS.client_email,
        private_key: CREDENTIALS.private_key
    });

    await doc.loadInfo();

    // Index of the sheet
    let sheet = doc.sheetsByIndex[0];

    let rows = await sheet.getRows();

    for (let index = 0; index < rows.length; index++) {
        const row = rows[index];
        if (row[keyValue] === oldValue) {
            rows[index][keyValue] = newValue;
            await rows[index].save();
            break; 
        }
    };
};

// updateRow('email', 'email@gmail.com', 'ramesh@ramesh.com')

const deleteRow = async (keyValue, thisValue) => {

    // use service account creds
    await doc.useServiceAccountAuth({
        client_email: CREDENTIALS.client_email,
        private_key: CREDENTIALS.private_key
    });

    await doc.loadInfo();

    // Index of the sheet
    let sheet = doc.sheetsByIndex[0];

    let rows = await sheet.getRows();

    for (let index = 0; index < rows.length; index++) {
        const row = rows[index];
        if (row[keyValue] === thisValue) {
            await rows[index].delete();
            break; 
        }
    };
};

//deleteRow('email', 'ramesh@ramesh.com')