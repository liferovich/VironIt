const express = require('express');
const app = express();
const port = 3000;
const usersRouter = require('./routers/users.router.js')

app.use('/users', usersRouter);
app.listen(port, () => {
    console.log(`Server is working on http://localhost:${port}`);
});