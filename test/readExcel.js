const readFileSync = require("fs").readFileSync;
const XLSX = require("xlsx");
const path = require("path");
const buf = readFileSync(path.join(__dirname + '/trip.xlsx'));
const workbook = XLSX.read(buf);
const worksheet = workbook.Sheets["Hoja 1"];
const excelData = XLSX.utils.sheet_to_json(worksheet);

const tripOptions = excelData.reduce((accumulator, currentValue) => {
    accumulator.push(currentValue.Trip)
  
    return accumulator
  }, [])
  
  const dateOptions = excelData.reduce((accumulator, currentValue) => {
    accumulator.push(currentValue.Data)
  
    return accumulator
  }, [])

  const typeOptions = excelData.reduce((accumulator, currentValue) => {
    accumulator.push(currentValue.Type)
  
    return accumulator
  }, [])

module.exports = {tripOptions, dateOptions, typeOptions}