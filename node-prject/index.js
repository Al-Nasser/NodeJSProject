const path = require('path');
 
const express = require('express');
 
const app = new express();

const mongoose = require('mongoose');

app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/node-blog', { useNewUrlParser: true })
    .then(() => 'You are now connected to Mongo!')
    .catch(err => console.error('Something went wrong', err))
 
app.get('/index.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/index.html'));
});

app.get('/posts/new', (req, res) => {
    res.render('create')
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
 
app.listen(4000, () => {
    console.log('App listening on port 4000')
});
