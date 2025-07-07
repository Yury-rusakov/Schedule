const appcfg = require('.appcfg/')
const express = require("express")
const port = appcfg.webServerPortc
// создаем объект класса приложения express (веб-сервера)
const app = express()
const app_folder = "./"
app.use('/',express.static('C:\\Users\\user\\MyApp\\todo\\dist\\todo\\browser'))
// Обслуживаем корневую директорию по всем типам запросов
app.all('/', (req, res) => {
    res.status(200).sendFile('/',
        {root: app_folder})
})
app.listen(port, () => {
    console.log("Node Express server is listening on http://localhost:" + port)
})
