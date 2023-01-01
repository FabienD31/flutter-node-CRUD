const express = require('express');
const app = express();
const mongoose = require('mongoose');
const {MONGO_DB_CONFIG} = require('./config/app.config');
const errors = require('./middlewares/errors');
const port = process.env.port || 4000;

mongoose.Promise = global.Promise;

mongoose.connect(MONGO_DB_CONFIG.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).then(() => {
    console.log('Successfully connected to the database');
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/uploads', express.static('uploads'));
app.use('/api', require('./routes/app.routes'));

app.use(errors.errorsHandler);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

