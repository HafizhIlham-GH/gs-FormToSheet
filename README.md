# gs-FormToSheet

A small `.gs` script used to automate formatting google forms response into a formatted google sheets document

## How it works

Runs automatically on form submission. matches responses to the correct row/column and populate the cell with the file user submitted via the form (Google Drive URL)

## Setup

1. Configure `NAME_COLUMN`, `STARTNG_COLUMN`, `FORM_ID`, `SPREADSHEET_ID` (line 1 through 4) for the desired use case
2. Go into your forms click the 3 dots on top right of page select **Apps Script**
3. Paste the script into the editor
4. Open the trigger menu configure set event source to *From form* and event type *On form submit* 

