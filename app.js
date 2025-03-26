const express = require('express');

const app = express();

const port = 3000;

const posts = [
    {
        title: 'Ciambellone',
        content: 'content',
        image: 'images/ciambellone.jpeg',
        tags: ['a','b']
    },
    {
        title: 'Cracker Barbabietola',
        content: 'content',
        image: 'images/cracker_barbabietola.jpeg',
        tags: ['a','b']
    },
    {
        title: 'Pane fritto dolce',
        content: 'content',
        image: 'images/pane_fritto_dolce.jpeg',
        tags: ['a','b']
    },
    {
        title: 'Pasta alla barbabietola',
        content: 'content',
        image: 'images/pasta_barbabietola.jpeg',
        tags: ['a','b']
    },
    {
        title: 'torta paesana',
        content: 'content',
        image: 'images/torta_paesana.jpeg',
        tags: ['a','b']
    },
]

app.use(express.static('public'));

app.get('/', (req,res) => {
    console.log('Server del mio blog');
    res.send('<h1>Server del mio blog</h1>');
})

app.get('/bacheca', (req,res) => {
    console.log('Bacheca del mio blog');
    // res.send('<img src="images/ciambellone.jpeg" alt="ciambellone">');
    // immagine di prova per vedere se funziona
    res.json(posts);

})

app.listen(port, () => {
    console.log('sono un server attivo sulla porta ' + port);
})



