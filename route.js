const express = require('express')
const bodyParser = require('body-parser')
const { pool } = require('./config')
const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

/* GET books listing. */
router.get('/books', function(req, res) {
  pool.query('SELECT * FROM books', (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
});

/* POST add books to listing. */
router.post('/books', function(req, res) {
    //console.log(req.body)
    const book = req.body

    pool.query('INSERT INTO books (author, title) VALUES ($1, $2)', [book.author, book.title], error => {
    if (error) {
        throw error
    }
    res.status(201).json(book)
    })
});

module.exports = router;

