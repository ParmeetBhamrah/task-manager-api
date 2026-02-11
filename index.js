const express = require("express"); // import statement in CommonJS
const app = express();
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// app.METHOD(PATH, HANDLER) - structure
app.get("/", (req, res) => { 
    res.send("Welcome to Task Manager API")
})