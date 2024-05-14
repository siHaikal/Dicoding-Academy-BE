const http = require("http"); //Node.js menyediakan core modules http untuk membangun web server.
const port = 5000;
const host = "localhost";

const requestListener = (req, res) => { 
    res.setHeader("Content-type", "application/json") //response header
    res.setHeader("Powered-By", "Node.js") //response header
    const { method, url } = req;

    if (url === "/") {
        if (method === "GET") {
            res.statusCode = 200;
            res.end(JSON.stringify({
                message: "Ini adalah homepage"
            }))
        } else {
            res.statusCode = 400;
            res.end(JSON.stringify({
                message: `Halaman tidak bisa di akses melalui ${method}`
            }))
        }
    } else if (url === "/about") {
        if (method === "GET") {
            res.statusCode = 200;
            res.end(JSON.stringify({
                message: "Ini adalah halaman about"
            }))
        } else if (method === "POST") {
            let data = [];
            req.on("data", (chunk) => { // mendapatkan chunk (potongan data)
                data.push(chunk);
            });

            req.on("end", () => {
                const { name } = JSON.parse(Buffer.concat(data).toString());
                res.statusCode = 200;
                res.end(JSON.stringify({
                    message: `Halo ${name}!`
                }))
            });
        } else {
            res.statusCode = 400;
            res.end(JSON.stringify({
                message: `Halaman tidak bisa di akses melalui ${method}`
            }))
        }
    } else {
        res.statusCode = 400;
        res.end(JSON.stringify({
            message: `Halaman tidak ditemukan`
        }))
    }
}; // Lalu tulis di terminal curl -X GET http://localhost:5000

const server = http.createServer(requestListener); //method ini berfungsi untuk membuat HTTP server yang merupakan instance dari http.server

// Setiap instance dari http.server juga memiliki method listen()
    // Method inilah yang membuat http.server selalu standby untuk menangani permintaan yang masuk dari client
        // Method listen() dapat menerima 4 parameter, berikut detailnya:
        // port (number) : jalur yang digunakan untuk mengakses HTTP server.
        // hostname (string) : nama domain yang digunakan oleh HTTP server.
        // backlog (number) : maksimal koneksi yang dapat ditunda (pending) pada HTTP server.
        // listeningListener (function) : callback yang akan terpanggil ketika HTTP server sedang bekerja (listening).
server.listen(port, host, () => {
  console.log(`sever berjalan pada http://${host}:${port}`);
});
