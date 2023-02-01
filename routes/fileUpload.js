const express = require('express');
const fileUploader = require('../app/controllers/fileUploader');
const router = express.Router();

const multer = require("multer");
const path = require("path");


// File upload folder
const UPLOADS_FOLDER = "./storage";

// define the storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, UPLOADS_FOLDER);
    },
    filename: (req, file, cb) => {
        const fileExt = path.extname(file.originalname);
        const fileName =
            file.originalname
                .replace(fileExt, "")
                .toLowerCase()
                .split(" ")
                .join("-") +
            "-" +
            Date.now();

        cb(null, fileName + fileExt);
    },
});

// preapre the final multer upload object
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 2000000, // 2MB
    }
    // fileFilter: (req, file, cb) => {
    //     if (file.fieldname === "uploaded_file") {
    //         if (file.mimetype === "application/pdf") {
    //             cb(null, true);
    //         } else {
    //             cb(new Error("Only .pdf format allowed!"));
    //         }
    //     } else {
    //         cb(new Error("There was an unknown error!"));
    //     }
    // },
});


router.get("/", (req, res) => {
    res.send("api")
});

router.post("/fileUpload", upload.single("uploaded_file"), fileUploader.fileUpload)
router.get("/showfile/storage/:fileName", fileUploader.showFile)

module.exports = router;


// file:///C:/Users/Singularity%20Ltd/OneDrive/Documents/file-upload-with-multer/storage/resume/local_media616122903575815885-1675248703992.pdf

// file:///C:/Users/Singularity%20Ltd/OneDrive/Documents/file-upload-with-multer/storage/local_media616122903575815885-1675248703992.pdf