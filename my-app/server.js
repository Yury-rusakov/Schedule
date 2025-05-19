"use strict";
const express = require("express");
const compression = require('compression');

// config
const port = process.env['PORT'] || 3000;
const app_folder = "./";
const options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['html', 'js', 'scss', 'css'],
  index: false,
  maxAge: '1y',
  redirect: true,
}

// create app
const app = express();
app.use(compression());
app.use(express.static(app_folder, options));

// serve angular paths
app.all('/', (req, res) => {
    res.status(200).sendFile(`/`, 
        {root: app_folder});
});

app.get('/getTasks', (req, res) => {
  res.status(200);
  res.end(JSON.stringify(
    [
      { id: 1, name: 'Commit changes', isComplete:false },
      { id: 2, name: 'Do my homework', isComplete:false },
      { id: 3, name: 'Prepare presentation', isComplete:false },
      { id: 4, name: 'Send email', isComplete:false },
      { id: 5, name: 'Buy products', isComplete:false },
      { id: 6, name: 'Lunch with Mom', isComplete:true },
      { id: 7, name: 'Start learning Angular',  isComplete:false },
      { id: 9, name: 'Feed my dog', isComplete:false }
    ]));
  }
);

// start listening
app.listen(port, () => {
    console.log("Node Express server for " + app.name + " listening on http://localhost:" + port);
});