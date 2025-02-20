const express = require('express');
require('dotenv').config();
const morgan = require('morgan')
const dbConnection = require('./config/db');
const CategoryRoute = require('./Routes/CategoryRoute');
const http_status = require('./utils/http_status');
const AppError = require('./utils/AppError');
const GlobalError = require('./middlewares/ErrorMiddleware');

const app = express();

// Middlewares
app.use(express.json());


// Connect to the database
dbConnection();

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev')); 
    console.log('Morgan enabled');
}

// Routes
app.use('/api/category', CategoryRoute);


// Route not found Middleware
app.all('*', (req, res, next) => {
    return next(new AppError(`Can't find ${req.originalUrl} on this server`, 404, http_status.ERROR));
});

// Global Error handler Middleware
app.use(GlobalError);



// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});   