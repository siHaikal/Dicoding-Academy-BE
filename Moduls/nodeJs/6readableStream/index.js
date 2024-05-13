// teknik stream. 
    // Teknik ini tidak membaca berkas secara sekaligus, tapi dengan mengirim bagian demi bagian.

const fs = require('fs')

const readableSteam = fs.createReadStream('./6readableStream/article.txt', {
    highWaterMark: 10
})

readableSteam.on('readable', () => {
    try {
        process.stdout.write(`[${readableSteam.read()}]`)
        console.log(`[${readableSteam.read()}]`)
    } catch(err) {
        console.log('eror')
    }
})

readableSteam.on('end', ()=> {
    console.log('Done')
})