const { response } = require('express')

const usersGet = (req, res = response) => {
    //OBTENER QUERYS
    const { q, nombre = 'no name', page, limit='10' } = req.query
    res.json({
        msg:'get API - controller',
        q,
        nombre,
        page,
        limit
    })
}
const usersPost = (req, res = response) => {
    const {body} = req
    //DE ESTA MANERA SOLO UTILIZAMOS LO QUE QUEREMOS X MAS QUE NOS MANDEN OTRAS COSAS
    const { nombre, edad } = body
    res.status(201).json({
        msg:'post API - controller',
        nombre,
        edad
    })
}

const usersPut =(req, res = response) => {
    const {id} = req.params
    res.json({
        msg:'put API - controller',
        id
    })
}

const usersPutNoId =(req, res = response) => {
    res.status(400).json({
        msg:'Para actualizar se necesita un id',
    })
}

const usersPatch =  (req, res = response) => {
    res.json({
        msg:'patch API - controller'
    })
}

const usersDelete =(req, res = response) => {
    res.json({
        msg:'delete API - controller'
    })
}
module.exports={
    usersGet,
    usersPost,
    usersPut,
    usersPutNoId,
    usersPatch,
    usersDelete
}