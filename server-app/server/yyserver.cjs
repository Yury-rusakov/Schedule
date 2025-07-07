"use strict"
/* MY CONFIGURATIONS */

const appcfg = require('./appcfg');

// config
const port = 3322;
const options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['html', 'js', 'css'],
  index: false,
  maxAge: '1y',
  redirect: true,
}

/* WEB APPLICATION */
const express = require("express")
const bodyParser = require('body-parser')
const app = express()
//const compression = require('compression');
// app.use(compression());
app.use('/', express.static(appcfg.Project_Root));
app.use('/assets', express.static(appcfg.Project_Root + '/assets'));

app.use(express.static('./', options));
//app.use(express.json());
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

// serve react paths
app.all('/', (req, res) => {
    res.status(200).sendFile(`/`, 
        {root: './'});
});

/* app.get('/records', (req, res) => {
  res.status(200);
  res.end(JSON.stringify(
    [
      {}
    ]));
  }
); */

/* POSTGRESQL */

const Pool = require('pg').Pool;
const pool = new Pool(appcfg.pg_cfg);

app.get('/records', (req, res) => {
    console.log('Request.BODY: ', req.body);
    res.status(200);
    console.log('Пошёл запрос к БД');
    pool.query(
    'SELECT length from snake',
    (error, results) => {
        if (error) {
            console.log(error)
        }
        console.log('......', results.rows, '............')
        console.log(
            'Пришёл ответ из БД: ',
            results.rows);
        res.setHeader(
            'Content-Type',
            'application/json');
            res.end(JSON.stringify(
                results.rows));
    });
    console.log('А сервер не ждёт!');
});


app.post('/calc', (req, res) => {
    console.log('Request.BODY: ', req.body)
    res.status(200)
    res.setHeader('Content-Type',   'application/json')
    let result = {'itis': 50}
    res.end(JSON.stringify(result));
});


// start listening
app.listen(port, () => {
    console.log("Node Express server for " + app.name + " listening on http://localhost:" + port);
});
