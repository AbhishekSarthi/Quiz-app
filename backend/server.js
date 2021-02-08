const express = require('express');
const requests = require('./routes/requests');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv/config');

const app = express();

app.use(express.json());

//home page
app.get('/', (req, res) => {
    res.send('home page');
});

//details page
app.use('/details', requests);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')));

    app.get('*', (req, res) => {
        res.sendFile(
            path.resolve(__dirname, 'frontend', 'build', 'index.html')
        );
    });
} else {
    app.listen(5000, console.log('Server running on port 5000'));
}

mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('DB connected...')
);
// const __dirname = path.resolve();
