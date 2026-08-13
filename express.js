const express = require("express");

const app = express();


app.get("/", (req, res) => {
    res.send("Hello Everyone! Welcome to my server.");
});

app.use("/abhishek-dev", (req, res) => {
    res.send("Welcome to my Development World");
});

app.use("/", (req, res) => {
    res.send("Hello I am The second Server");
});

// Start server
app.listen(2004, () => {
    console.log("Server running at http://localhost:2004");
});