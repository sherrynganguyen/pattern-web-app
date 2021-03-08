require('dotenv').config();

const PORT = 8080;
const express = require("express");
const app = express();

app.use("/", (req,res) => {
  res.send("Welcome")
});

app.listen(PORT, () =>{
  console.log(`Pattern Website App is running on port ${PORT}`)
});