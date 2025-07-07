const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/submit', (req, res) => {
  const { name, email } = req.body;
  
  console.log(`Полученные данные: имя - ${name}, email - ${email}`);
  
  res.status(200).json({ message: 'Данные успешно получены!' });
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
