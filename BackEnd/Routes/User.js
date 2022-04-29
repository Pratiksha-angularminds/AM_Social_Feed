const express = require('express')
const router = express.Router()

const userControllers = require('../Controllers/User')

router.post('/sign-up',userControllers.signup)
router.post('/login',userControllers.login)

module.exports = router 