    const EventEmitter = require('events');
    const myEmitter = new EventEmitter();

    const emitterA = new EventEmitter();
    const emitterB = new EventEmitter();

    emitterA.on('data', () => console.log('Data from A'));
    emitterB.on('data', () => console.log('Data from B'));

    emitterA.emit('data'); // Outputs: "Data from A"
    emitterB.emit('data'); // Outputs: "Data from B"