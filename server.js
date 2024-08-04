const express = require('express')
const dotenv = require('dotenv').config()

const app = express();

app.use('/api/contacts' , require('./routes/contactRoutes'))

const PORT = process.env.PORT || 4000

app.listen(4000 , () => {
    console.log(`Port 4000 has started`)
});

