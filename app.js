const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const Article = require('./models/article');

mongoose.connect('mongodb://ashot:ashot@ds127375.mlab.com:27375/picsart_react', {
    useMongoClient: true
});
mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.once('open', () => {
    console.log('Connected to MongoDB');
});

db.on('error', err => {
    console.log(err);
});

app.use('/static', express.static(`${__dirname}/public`));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('*', (req, res) => {
    res.render('index');
});

app.get('/api/articles', (req, res) => {
   Article.find({})
       .then(articles => {
           return res.send({
               status: 'success',
               articles
           })
       })
       .catch(err => {
           return res.send({
               status: 'error',
               message: err.message
           });
       });
});

app.get('/api/articles/:id', (req, res) => {
    Article.findById(req.params.id)
        .then(article => res.send({ status: 'success', article }))
        .catch(err => res.send({ status: 'error', message: err.message }));
});

app.post('/api/articles/add', (req, res) => {
    if (!req.body.title || !req.body.author || !req.body.body) {
        return res.send({
            status: 'error',
            message: 'Title, Author and Body fields are required'
        });
    }
   let article = new Article({
       title: req.body.title,
       author: req.body.author,
       body: req.body.body
   });

   return article.save()
       .then(() => res.send({status: 'success', article}))
       .catch(err => res.send({status: 'error', message: err.message}));
});

app.put('/api/articles/:id', (req, res) => {
    if (!req.body.title || !req.body.author || !req.body.body) {
        return res.send({
            status: 'error',
            message: 'Title, Author and Body fields are required'
        });
    }
    Article.findOne({_id: req.params.id})
        .then(article => {
            article.title = req.body.title;
            article.author = req.body.author;
            article.body = req.body.body;

            return article.save()
                .then(() => res.send({status: 'success', article}))
                .catch(err => res.send({status: 'error', message: err.message}))
        });
});

app.delete('/api/articles/:id', (req, res) => {
    Article.findByIdAndRemove(req.params.id)
        .then(() => res.send({staatus: 'success'}))
        .catch(err => res.send({status: 'error', message: err.message}))
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});