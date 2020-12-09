const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
const usersRouter = require('./routers/users.router.js')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/users', usersRouter)

app.listen(port, () => {
    console.log(`Server is working on http://localhost:${port}`);
});