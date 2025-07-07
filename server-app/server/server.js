const express = require('express');
const bodyParser = require('body-parser');
//const cors = require('cors');


const appcfg = require('./appcfg')
const app = express();
const PORT = 5000;

//app.use(cors());
app.use(bodyParser.json());

app.use('/', express.static(appcfg.Project_Root));
app.use('/static', express.static(appcfg.Project_Root + '/static'));


// serve react paths
app.all('/', (req, res) => {
    res.status(200).sendFile(`/`, 
        {root: './'});
});


app.post('/api/submit', (req, res) => {
  const { name, email } = req.body;
  
  console.log(`Полученные данные: имя - ${name}, email - ${email}`);
  
  res.status(200).json({ message: 'Данные успешно получены!' });
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});