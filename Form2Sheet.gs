const NAME_COLUMN = NAME_COLUMN;
const STARTING_COLUMN = STARTING_COLUMN;
const FORM_ID = "FORM_ID";
const SPREADSHEET_ID = "SPREADSHEET_ID";
const CELL_COLOR = "";
// #00ff00 = green, #ffff00 = yellow

function main() {

  // Store Form and Spreadsheet object as variable
  formResponses = FormApp.openById(FORM_ID).getResponses();
  targetSheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheets()[0];
  // targetPublicSheet = SpreadsheetApp.openById(PUBLICSPREADSHEET_ID).getSheets()[0];
  
  // Iterate through formResponses
  for (formResponse of formResponses) {
    // Get individual item from response.
    itemResponse = formResponse.getItemResponses();
    
    // Get data from form.
    const submitterNIM =  itemResponse[0].getResponse().replace(/\s+$/, '');
    // const modulNumber = Number(itemResponse[2].getResponse());
    const submitterFileLink = itemResponse[2].getResponse();

    // Get row and column.
    // submitterNIM, is arbitrary, can be NULL.
    if ((nimCheck = targetSheet.createTextFinder(submitterNIM).findNext()) == null) {
      console.log(`submitterNIM not found for ${submitterNIM}`);
    }
    else {
      row = nimCheck.getRow();
    }
    const col = 14 + (STARTING_COLUMN - 1);

    targetSheet.getRange(row, col).setValue(`https://drive.google.com/file/d/${submitterFileLink}/`).setBackground(CELL_COLOR);
    // targetPublicSheet.getRange(row, col - 1).setBackground(CELL_COLOR);
    
  }
}
