import path, { extname } from 'path';

// definir ruta de archivo de ej
const filePath = './data/example.txt';

// obtener directorio base
const dirName = path.dirname(filePath);
console.log(`Directorio base: ${dirName}`);

// obtener nombre del archivo sin extension
const baseName = path.basename(filePath, '.txt');
console.log(`Nombre del Archivo: ${baseName}`);

// obtener extension del archivo
const extName = path.extname(filePath);
console.log(`Extension del archivo: ${extName}`);

// crear ruta unida
const newPath = path.join('/user', 'docs', 'newfile.txt');
console.log(`Nueva ruta: ${newPath}`);

