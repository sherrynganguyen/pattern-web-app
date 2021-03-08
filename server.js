require('dotenv').config();

const PORT = process.env.PORT || 8080;
const express = require("express");
const app = express();
const path = require('path')

app.use(express.static(path.join(__dirname, "public")));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(PORT, () =>{
  console.log(`Pattern Website App is running on port ${PORT}`)
});