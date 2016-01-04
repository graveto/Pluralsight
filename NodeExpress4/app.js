(function () {
    'use strict';

    var express = require('express'),
        handlebars = require('express-handlebars'),
        app = express(),
        port = process.env.port || 5000,
        bookRouter = express.Router(),
        books = [{
            title: 'Something',
            author: 'Someone',
            read: false
        }, {
            title: 'Something2',
            author: 'Someone2',
            read: false
        }, {
            title: 'Something3',
            author: 'Someone3',
            read: false
        }];

    app.use(express.static('public'));
    app.set('views', 'src/views');

    // use the following code when using handlebars
    //    app.engine('.hbs', handlebars({
    //        extname: '.hbs'
    //    }));

    app.set('view engine', '.ejs'); //for jade use .jade; for handlebars use .hbs

    bookRouter.route('/')
        .get(function (req, res) {
            res.render('books', {
                title: 'Hello from render',
                nav: [{
                    Link: '/books',
                    Text: 'Books'
                }, {
                    Link: '/authors',
                    Text: 'Authors'
                }],
                books: books
            });
        });

    bookRouter.route('/single')
        .get(function (req, res) {
            res.send('Hello single book');
        });

    app.use('/books', bookRouter);

    app.get('/', function (req, res) {
        res.render('index', {
            title: 'Hello from render',
            nav: [{
                Link: '/books',
                Text: 'Books'
            }, {
                Link: '/authors',
                Text: 'Authors'
            }]
        });
    });

    app.listen(port, function (err) {
        console.log('running server on port - ' + port);
    });
}());