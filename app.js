const express = require('express')
const app = express();
const port = process.env.PORT || 3000;
// http://127.0.0.1:3000/
app.get('/', (req, res) => res.send('This system is running.'))
// http://127.0.0.1:3000/service?status=on
app.get('/service', (req, res) => {
    var status = req.param('status')
    res.send('This system is running [Status : ' + status + ']');
});


app.listen(port, () => console.log('Example app listening on port 3000'))