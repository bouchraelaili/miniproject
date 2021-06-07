const express = require('express');
const app = express();
require('./models/dbConfig');
const ProductRoutes = require('./routes/ProductController');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.set('useFindAndModify', false);

app.use(bodyParser.json());
app.use(cors());
app.use('/Product', ProductRoutes);

app.listen(5000, () => console.log('Server started: 5000'));