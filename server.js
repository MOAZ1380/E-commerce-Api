const express = require('express');
require('dotenv').config();
const morgan = require('morgan')
const dbConnection = require('./config/db');
const CategoryRoute = require('./Routes/CategoryRoute');

const app = express();
app.use(express.json());


// Connect to the database
dbConnection();




if (process.env.NODE_ENV === 'development') {
    app.use(morgan("dev")); 
    console.log('Morgan enabled');
}

// Routes
app.use('/api/category', CategoryRoute);



// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});   