// 1. Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/task.routes'); // You'll create this soon

// 2. Create Express App
const app = express();

// 3. Middleware
app.use(bodyParser.json()); // Parse JSON request bodies

// 4. Connect to MongoDB (Modify with your database credentials)
const dbURI = 'mongodb://localhost:27017/task_management_db';
// Replace with your connection string
mongoose.connect(dbURI,  { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB: ', err));

// 5. Routes
app.use('/tasks', taskRoutes);

// 6. Start the Server
const port = 3000; // You can change the port if needed
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
