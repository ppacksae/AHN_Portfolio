const fs = require('fs');
const pdfParse = require('pdf-parse');

let dataBuffer = fs.readFileSync('Multi-agent설계.pdf');

pdfParse(dataBuffer).then(function(data) {
    console.log("=== PDF TEXT ===");
    console.log(data.text);
}).catch(err => {
    console.error("PDF Parsing Error:", err);
});
