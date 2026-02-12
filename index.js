const express = require("express"); // import statement in CommonJS
const app = express();
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

let tasks = []; // in-memory storage
let idCounter = 1;

// app.METHOD(PATH, HANDLER) - structure
app.get("/", (req, res) => { 
    res.status(200).json({
        message:"Welcome to Task Manager API"
    });
});

// In REST APIs, URL -> Resource, HTTP Method -> Action
app.get("/tasks", (req, res) => {
    res.status(200).json({
        success: true,
        data: tasks
    });
});