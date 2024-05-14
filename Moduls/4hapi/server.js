const Hapi = require('@hapi/hapi') //modul framework hapi
const routes = require('./routes')

const init = async () => {
    const server = Hapi.server({ //objek yang menampung konfigurasi
        port : 5000,
        host : 'localhost',
    })

    server.route(routes) //route configuration

    await server.start()
    console.log(`Server berjalan pada ${server.info.uri}`)
}

init()  