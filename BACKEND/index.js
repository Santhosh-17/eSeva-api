const mongoose = require('mongoose');
const joi = require('joi');
const plan = require('./routes/plans');
const fullPlan = require('./routes/fullPlans');
const express = require('express');
const app = express();

mongoose.connect('mongodb://localhost:27017/mini-project',{useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('Connected to MongoDb...'))
.catch(() => console.log('Unable to Connect to mongoDb...',err));

app.use(express.json());
app.use('/api/plans',plan);
app.use('/api/full-plans',fullPlan);

const port = process.env.PORT || 3000 
app.listen(port, async() => {
    console.log(`Listening on port ${port}...`);
    // await fullModel.insertMany(data);
}
);