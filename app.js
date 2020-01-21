const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { pool } = require('./config')
const routerjs  = require('./route');
const path = require('path');
const app = express()

app.use('/', routerjs);
app.use(cors())

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

// Start server
app.listen(process.env.PORT || 8080, () => {
  console.log(`Server listening`)
})