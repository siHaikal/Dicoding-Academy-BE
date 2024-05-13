// impor variable
const { EventEmitter } = require('events')

const myEventEmitter = new EventEmitter()

// fungsi yang akan dijalankan ketika event birthday terjadi
const birtdayEventLitener = ({name}) => {
    console.log(`Happy Birthday ${name}`)
}
const hariUltah = ({hari}) => {
    console.log(`Hari ini adalah ${hari}, dan hari ini ultahmu`)
}

//  mendaftarkan fungsi makeCoffee sebagai listener event birthday
myEventEmitter.on('birthday', birtdayEventLitener)
myEventEmitter.on('birthday', hariUltah)

// memicu event birthday terjadi
    // myEventEmitter.emit('birthday', {name : 'haikal'})
    
// atau bisa sekaligus
myEventEmitter.emit('birthday', {name : 'haikal', hari : 'selasa'})

