// Process Object
    // Dalam ilmu komputer, process adalah sebuah program yang dijalankan pada satu atau lebih thread


//mendapatkan informasi tentang penggunaan memory ketika proses berjalan
const memoryInformation = process.memoryUsage(); 
console.log(memoryInformation);


// process.argv. Properti ini dapat menampung nilai baris perintah dalam bentuk array ketika menjalankan proses

// contoh perintah cmd : node app.js "harry" "potter"
    // Elemen pertama : Alamat (path) lengkap dari lokasi node yang menjalankan prosesnya. 
    // Element kedua : Alamat (path) berkas JavaScript yang dieksekusi (app.js)
    // Element ketiga : “harry”
    // Element keempat : “potter”
const firstName = process.argv[2]
const lastName = process.argv[3]

console.log(`hello ${firstName} ${lastName}`)