var express = require('express');
var cors = require('cors');
var upload = require("express-fileupload")
require('dotenv').config()

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));
app.use(upload());

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

app.post("/api/fileanalyse", (req, res) => {
  const uploadedFile = req.files.upfile;
  console.log(uploadedFile);
  const uploadedFileName = uploadedFile.name;
  const uploadedFileType = uploadedFile.mimetype;
  const uploadedFileSize = uploadedFile.size;
  console.log("the file name is ", uploadedFileName);
  console.log("the file type is ", uploadedFileType);
  console.log("the file size is ", uploadedFileSize);
  res.json({
    "name": uploadedFileName,
    "type": uploadedFileType,
    "size": uploadedFileSize
  })


});


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
