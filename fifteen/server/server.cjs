const express = require('express');
const bodyParser = require('body-parser');
//const cors = require('cors');
const executeQuery = require('./dbdriver');

const app = express();
const port = 3306;

//app.use(cors());
app.use(bodyParser.json());

app.post('/api/submit', async (req, res) => {
  try {
    const { inpt1, inpt2 } = req.body;

    if (!inpt1 || !inpt2) {
      return res.status(400).json({ error: 'Имя и фамилия обязательны.' });
    }

    const query = "INSERT INTO test1 (name, surname) VALUES (?, ?)";
    const values = [inpt1, inpt2];
    const result = await executeQuery(query, values);

    console.log("Data inserted:", result);
    res.status(200).json({ message: 'Данные успешно сохранены!' });

  } catch (error) {
    console.error("Error inserting data:", error);
    res.status(500).json({ error: 'Ошибка при сохранении данных.' });
  }
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
