import { EventEmitter } from 'events';

// crear instancia 
const emisor = new EventEmitter();

// definir evento personalizado
emisor.on('saludo', (nombre) => {
    console.log(`¡Hola, ${nombre}!`);
});

// emitir evento 'saludo'
emisor.emit('saludo', 'James');
