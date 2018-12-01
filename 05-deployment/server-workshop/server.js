'use strict';

// dependencies
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// allows us to serve static files - like an html file
app.use(express.static('./public'));

// home route for serving our index.html
app.get('/home', function(req, res) {
  res.sendFile(`${__dirname}/public/index.html`);
});

// test route for sending back a txt response
app.get('/test', function(req, res) {
  res.status(200).send('msg from the server');
});

// json route to send back json
app.get('/json', function(req, res) {
  let course = {
    date: Date.now(),
    title: 'Code 301',
    instructor: 'Brian',
    studentCount: 20
  }
  res.status(200).json(course);
})

// starts our server on a specific port
app.listen(PORT, function() {
  console.log('listening on port', PORT);
});
