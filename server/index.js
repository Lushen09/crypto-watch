require('dotenv').config();

const express = require('express');


// Express app
const app = express();
const routes = require('./routes/routes');
const mongoose = require('mongoose');
const cors = require('cors');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cors({ origin: 'http://localhost:3000' })); 

// Routes

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use('/api', routes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Server is running on port 3005 and connected to MongoDB");
        });
    })
    .catch((err) => console.log(err));
