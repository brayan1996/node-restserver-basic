const { Router } = require('express')
const { usersGet, usersPost, usersPut, usersPatch, usersDelete, usersPutNoId } = require('../controllers/users.controller')

const router = Router()

router.get('/', usersGet )
router.put('/:id', usersPut  )
router.put('/', usersPutNoId  )
router.post('/', usersPost )
router.patch('/', usersPatch)
router.delete('/', usersDelete )

module.exports = router