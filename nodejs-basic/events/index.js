const EventEmiter = require('events')

const birthdayEventListener = ({ name }) => {
    console.log(`Happy birthday ${name}`);
}

const myEmitter = new EventEmiter()

myEmitter.on('birthday', birthdayEventListener)

myEmitter.emit('birthday', { name: 'johar' })