const express = require('express')
const router = express.Router()
const multer = require('multer')
const feedControllers = require('../Controllers/Feed')

// router.get('/',feedControllers.getAllFeeds)


//----------------------FOR STORING IMAGE OR FILE INTO DB---------------------------
const Storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './Images');
    },
    filename: (req, file, cb) => {
        console.log(file)
        const fileName = file.originalname
        cb(null, fileName)
    }
});

//--------------------------------TO UPLOAD FILE USING MULTER--------------------
const upload = multer({
    storage:Storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
})

router.post('/postFeed',upload.single('photo'),feedControllers.postFeed)


module.exports = router
