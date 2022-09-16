const express = require('express');
const cors = require('cors')
const { petRouter } = require('./routes/pet.routes');
const app = express();
const port = 8000;
require('./config/mongoose.config');

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use('/', petRouter);

app.listen(port, () => console.log(`Listening on port: ${port}`) );



