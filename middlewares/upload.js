const { error } = require('console');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }

});

const fileFilter = (req, file, cb) => {
    const validExt = ['.jpg', '.jpeg', '.png'];

    if(validExt.includes(Path.extname(file.originalname).toLowerCase())) {
        return callBack(new Error('Invalid file type'));
    };

    const fileSize = parseInt(req.headers['content-length']);
    if(fileSize > 1024 * 1024) {
        return callBack(new Error('File size is too large'));
    }

};
