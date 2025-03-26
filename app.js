const express = require('express');

const app = express();

const port = 3000;

app.listen(port, () => {
    console.log('sono un server attivo sulla porta' + port);
})

app.get('/', (req,res) => {
    console.log('Server del mio blog');
    res.send('Server del mio blog');
})