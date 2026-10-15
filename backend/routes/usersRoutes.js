const express = require('express')
const router = express.Router()

router.post('/login', login)
router.post('/register', register)

router.get('/data', data)

module.exports = router

