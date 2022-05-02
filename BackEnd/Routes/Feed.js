const express = require('express')
const router = express.Router()
const upload = require('../middleware/multer')
const feedControllers = require('../Controllers/Feed')


router.post('/postFeed',upload.single('photo'),feedControllers.postFeed)
router.get('/getAllFeeds',feedControllers.getAllFeeds)
// router.put('/comments/')

module.exports = router
