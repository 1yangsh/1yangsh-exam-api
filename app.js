const express = require('express')
const app = express();
const port = process.env.PORT || 3000;
// http://127.0.0.1:3000/
app.get('/', (req, res) => res.send('Hello, Nodejs! and Heroku!'))
// http://127.0.0.1:3000/welcome?name=seunghyeon
app.get('/welcome', (req, res) => {
    var user_name = req.param('name')
    res.send('Hi, there. Welcome to the Nodejs service. [' + user_name + ']');
});


app.listen(port, () => console.log('Example app listening on port 3000'))