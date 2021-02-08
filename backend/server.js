const express = require('express');
const requests = require('./routes/requests');

const mongoose = require('mongoose');

const app = express();

app.use(express.json());

//home page
app.get('/', (req, res) => {
    res.send('home page');
});

//details page
app.use('/details', requests);

mongoose.connect(
    'mongodb+srv://quiz:Edgxcxwd4dTj3GfD@cluster0.hqba7.mongodb.net/quiz?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('DB connected...')
);

app.listen(5000, console.log('Server running on port 5000'));
