const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Homepage'
        }
    }, 
    {
        method: '*', //* mean seluruh method
        path: '/',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan emthod tersebut'
        }
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About page'
        }
    },
    {
        method: '*',
        path: '/about',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan emthod tersebut'
        }
    },
    {  
        method: 'GET',
        path: '/hallo/{name?}', //path parameter bersifat opsional dengan ?
        handler: (request, h) => {
            const {name = "stranger"} = request.params //path parameter
            const { lang } = request.query //querry parameter

            if (lang === 'id') {
                return `hai ${name}`
            }
            return `hello ${name}`
        }
    },
    { //Hapi secara default akan mengubah payload JSON menjadi objek JavaScript. Dengan begitu, Anda tak lagi berurusan dengan JSON.parse()
        method: 'POST',
        path: '/login',
        handler: (request, h) => {
            const {username, password} = request.payload //mendapatkan body request di Hapi
            return `Welcome ${username}`
        }
    },
    { //response toolkit
        method: 'POST',
        path: '/users',
        handler: (request, h) => {
            return h.response('succes')
                .type('text/plain')
                .header('Custom-Header', 'some-value')
                .code(201)
        }
    },
    {
        method: '*',
        path: '/{any*}', //path yang belum ditentukan                                
        handler: (request, h) => {
            return 'Halaman tidak ditemukan'
        }
    }
]

module.exports = routes