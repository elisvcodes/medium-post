const express = require('express');
const cors = require('cors');
const app = express();
require('./db/db');
app.use(express.json());
app.use(cors());

app.use('/posts', require('./routes/posts'));


app.listen(8000)