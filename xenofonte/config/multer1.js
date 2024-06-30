const multer = require('multer');
const path = require('path');

const SQL = require("../../common/db/SQL");

module.exports = {
  dest: path.resolve(__dirname, '..', 'public', 'images', 'posts'),
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, '..', 'public', 'images', 'posts'))
    },
    filename: (req, file, cb) => {
      let ext = file.originalname.split(".")[1];
      req.body.ext = ext;
      cb(null, SQL.getUUID("Posts", req.body) + "." + ext);
    }
  }),
  limits: {
    fileSize: 10 * 1024 * 1024
  },
  fileFilter: (req, file, cb) => {
    const allowedMimes = ['image/png', 'image/jpeg', 'image/webp']
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true)
    } else {
      cb(new Error('Invalid file type.'))
    }
  }
}
