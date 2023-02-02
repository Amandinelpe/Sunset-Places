const multer = require("multer");

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "public/uploads/medias");
  },
  filename: (req, file, callBack) => {
    callBack(null, file.originalname);
  },
});

// const upload = multer({ dest: "public/uploads"})
const upload = multer({ storage });

module.exports = { upload };
