const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

const inputFile = path.join(__dirname, 'input_countries.csv');
const canadaFile = path.join(__dirname, 'canada.txt');
const usaFile = path.join(__dirname, 'usa.txt');


[canadaFile, usaFile].forEach(file => {
    if (fs.existsSync(file)) {
        fs.unlinkSync(file);
        console.log(`${path.basename(file)} deleted`);
    }
});


const canadaStream = fs.createWriteStream(canadaFile, { flags: 'a' });
const usaStream = fs.createWriteStream(usaFile, { flags: 'a' });

/* write headers */
canadaStream.write('country,year,population\n');
usaStream.write('country,year,population\n');


fs.createReadStream(inputFile)
    .pipe(csv())
    .on('data', (row) => {
        const country = row.country.toLowerCase();

        const line = `${row.country},${row.year},${row.population}\n`;

        if (country === 'canada') {
            canadaStream.write(line);
        } else if (country === 'united states' || country === 'usa') {
            usaStream.write(line);
        }
    })
    .on('end', () => {
        canadaStream.end();
        usaStream.end();
        console.log('Files created: canada.txt and usa.txt');
    })
    .on('error', (err) => {
        console.error('Error reading CSV:', err);
    });
