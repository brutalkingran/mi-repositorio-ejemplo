import fs from 'fs';

// leer de manera asincrona
fs.readFile('./data/example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(`Contenido del archivo: ${data}`);
});

// escribir nuevo archivo
fs.writeFile('./data/newfile.txt', 'Contenido Nuevo', (err) => {
    if (err) throw err;
    console.log(`Archivo creado y escrito!`);
});

// renombrar
fs.rename('./data/newfile.txt', './data/renamedfile.txt', (err) => {
    if (err) throw err;
    console.log(`Archivo renombrado`);
});
