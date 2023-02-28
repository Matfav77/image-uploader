const cloudinary = require('cloudinary').v2;
const express = require('express');
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const upload = multer({ storage });
require('dotenv').config();

const app = express();

// Configuration 
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: "imageUploader",
        allowedFormats: ["jpeg", "png", "jpg", "webp"]
    }
});

app.post('/upload', () => {

})

app.listen(8080);