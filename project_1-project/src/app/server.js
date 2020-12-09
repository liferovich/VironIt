const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "Это стартовая страница нашего приложения" });
});

app.listen(port, () => {
    console.log(`Сервер запущен на ${port} порту`);
});