// fs yang dapat mempermudah kita dalam mengakses filesystem. Setiap method yang ada di module fs tersedia dalam dua versi, yakni versi asynchronous (default) dan versi synchronous. 
// tiga argumen yakni: lokasi berkas, encoding, dan callback

    const fs = require('fs')

    const fileReadCallback = (err, data) => {
        if (err) {
            console.log('Gagal membaca berkas')
            return
        }
        console.log(data)
    }

    fs.readFile('./5filesystem/notes.txt', 'utf8', fileReadCallback)
