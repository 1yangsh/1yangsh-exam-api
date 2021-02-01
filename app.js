const express = require('express')
const app = express();
const port = process.env.PORT || 3000;
// http://127.0.0.1:3000/
app.get('/', (req, res) => res.send('Hello, Nodejs!'))
app.get('/welcome', (req, res) => res.send('Hi, there. Welcome to the Nodejs service.'))
app.get('/check', (req, res) => res.send('Example app listening on port 3000'))

app.listen(port, () => console.log('Example app listening on port 3000'))