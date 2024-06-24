const express = require("express");
const app = express();
   
//Load config from env File
require("dotenv").config();
const PORT = process.env.PORT || 3001;

// Server start
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

// Middle to parse json request body
app.use(express.json());

//import routes for TODO API
const todoRoutes = require("./routes/todos");

//mount the TODO API with it
app.use("/api/todos", todoRoutes);

// Define Home Page
app.get('/', (req, res) => {
    res.send("Welcome to TODO API");
})

// Import Database from config
const dbConnect = require("./config/database");

// Database Connection
dbConnect();
