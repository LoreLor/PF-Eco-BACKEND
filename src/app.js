var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const multer = require('multer');
const uuid = require('uuid')

//require('./db.js');
const dotenv = require("dotenv")
dotenv.config()

var indexRouter = require('./routes/index');

var app = express();

app.name = "API"

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req,res,next)=>{
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
})

/* const storage = multer.diskStorage({
   destination:(req,file,cb)=>{path.join(__dirname,'./public/uploads')},
   filename: (req,file,cb)=>{
      cb(null, uuid.v4() + path.extname(file.originalname))
   }

}) */

/* app.use(multer({
  storage,
  dest  : path.join(__dirname,'public/uploads'),
  limits: {fileSize:3000000},
  fileFilter:(req,file,cb)=>{
    const filetypes= /jpg|jpeg|png/
    const mimetype = filetypes.test(file.mimetype)
    const extname = filetypes.test(path.extname(file.originalname))
    if(mimetype && extname){
      return cb(null,true)
    }
    cb("El archivo debe ser una imagen")
  }
}).single('file')) */

app.use('/', indexRouter);



// Para manejar errores con next(error)
app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
  });

module.exports = app;
