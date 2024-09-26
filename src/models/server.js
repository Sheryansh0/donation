// server.js
const express = require('express');
const mongoose = require('mongoose');
const { Charity } = require('./index'); // Import the Charity model

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB Connection
const mongoURI = 'mongodb://localhost:27017/donation/users'; // Replace with your database name
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(express.json());

// Define a route to create a new charity
app.post('/charities', async (req, res) => {
    try {
        const charityData = req.body; // The charity data should be sent in the request body
        const newCharity = new Charity(charityData);
        await newCharity.save();
        res.status(201).json(newCharity);
    } catch (error) {
        res.status(500).json({ message: 'Error creating charity', error });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
