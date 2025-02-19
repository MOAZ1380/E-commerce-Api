const mongoose = require('mongoose');


const URL = process.env.MONGO_URL; // URL is the connection string to the database

const dbConnection = () => {
    mongoose
        .connect(URL)
        .then(() => {
            console.log('Connected!')
        })
        .catch((err) => {
            console.log('Error', err);
            process.exit(1);
        });
};

module.exports = dbConnection;