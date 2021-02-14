const path = require('path');
const expressEdge = require('express-edge');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Post = require('./database/models/Post');

const app = new express();

app.use(express.static('public'));
app.use(expressEdge.engine);

mongoose.connect('mongodb://blog:blog@localhost:27017/blog', { useNewUrlParser: true, useUnifiedTopology: true  })
    .then(() => 'You are now connected to Mongo!')
    .catch(err => console.error('Something went wrong', err))
 
    app.set('views', __dirname + '/views');
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({
        extended: true
    }));



app.get('/index.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/index.html'));
});

app.get('/about.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/about.html'));
});
 
app.get('/contact.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/contact.html'));
});
 
app.get('/post.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/post.html'));
});

app.get('/posts/new', (req, res) => {
    res.render('create')
});
 
app.post('/posts/store', (req, res) => {
    Post.create(req.body, (error, post) => {
        res.redirect('/index.html')
    })
});

app.listen(4000, () => {
    console.log('App listening on port 4000')
});
