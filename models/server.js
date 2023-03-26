
const express = require('express')
const cors = require('cors')
class Server{
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.usersRoutesPath = '/api/users'
        //MIDDLEWARES
        this.middlewares()
        this.routes()
    }
    middlewares(){
        //CORS
        this.app.use(cors())
        //LECTURA Y PARSEO DEL BODY
        this.app.use( express.json() )
        //DIRECTORIO PUBICO
        this.app.use( express.static('public') )
    }
    routes(){
        this.app.use(this.usersRoutesPath, require('../routes/users.routes'))
    }
    listen(){
        this.app.listen( this.port, ()=>{
            console.log('SERVIDOR', this.port)
        })
    }
}
module.exports = Server;