require('dotenv').config() 
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const path = require('path');

const userRoutes = require('./server/routes/user');
const postsRoutes = require('./server/routes/post');

mongoose.connect(process.env.dbURL)
  .then(console.log("DB Connected!!"))
  .catch(error => console.log(error));

app.use(express.json());

app.use(express.static(__dirname + "/client/build"));
app.get('/*', (req, res) => {
  let url = path.join(__dirname, '../client/build', 'index.html');
  if (!url.startsWith('/app/')) // we're on local windows
    url = url.substring(1);
  res.sendFile(url);
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");  
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");  
  next();
});
 
app.use('/user', userRoutes);
app.use('/post', postsRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>  console.log(`Server started on port ${PORT}!`));