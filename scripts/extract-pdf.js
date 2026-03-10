import fs from 'fs';
import path from 'path';
import pdfParse from 'pdf-parse';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetPdf = '표준이력서_안성진_2026.2.27.pdf';
const rootDir = path.resolve(__dirname, '..');

// Using fs.readdirSync to find the file ignoring exact unicode normalization issues if any
const files = fs.readdirSync(rootDir);
const pdfFile = files.find(f => f.includes('pdf'));

if (!pdfFile) {
    console.error("PDF file not found in the root directory.");
    process.exit(1);
}

const pdfPath = path.join(rootDir, pdfFile);

const dataBuffer = fs.readFileSync(pdfPath);

pdfParse(dataBuffer).then(function (data) {
    const textOutput = data.text;
    const outputPath = path.join(rootDir, 'resume_extracted.txt');
    fs.writeFileSync(outputPath, textOutput);
    console.log(`Successfully extracted PDF content to ${outputPath}`);
}).catch(function (error) {
    console.error("Error extracting PDF:", error);
});
