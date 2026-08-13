const express = require("express");
const app = express();

app.use("/user", (req,res) => {
    console.log("1st Route is called...");
    res.send("Route Handler-1");
})

app.listen(7777, () => {
    console.log("Server running at http://localhost:7777");
});
