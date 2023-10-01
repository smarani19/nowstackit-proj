function doGet() {
  return HtmlService.createHtmlOutputFromFile("index.html");
}

function importCSV(csvData) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var csvDataArray = Utilities.parseCsv(csvData);
  sheet
    .getRange(1, 1, csvDataArray.length, csvDataArray[0].length)
    .setValues(csvDataArray);
}
