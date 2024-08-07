const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const connectDb = require('./config/dbConnection');
const dotenv = require('dotenv').config()

connectDb();
const app = express();

app.use(express.json())
app.use('/api/contacts', require('./routes/contactRoutes'))
app.use('/api/users' , require('./routes/userRoutes'))
app.use(errorHandler)

const PORT = process.env.PORT || 4000

app.listen(4000, () => {
    console.log(`Port 4000 has started`)
});

