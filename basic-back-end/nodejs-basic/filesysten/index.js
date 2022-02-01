const fs = require('fs');
const { resolve } = require('path');

const fileReadeCallback = (err, data) => {
    if (err) console.log('Gagal membaca berkas');
    console.log(data);
}

fs.readFile(resolve(__dirname, 'notes.txt'), 'UTF-8', fileReadeCallback);

console.log('End')