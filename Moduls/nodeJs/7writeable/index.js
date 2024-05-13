// writable stream.
    // digunakan untuk menulis berkas

const fs = require('fs')

const read = fs.createReadStream('./7writeable/input.txt', {
    highWaterMark: 15
})

const write = fs.createWriteStream('./7writeable/output.txt')

read.on('readable', () => {
    try {
        write.write(`${read.read()} \n`)
    } catch (err) {
        console.log('eror')
    }
})

