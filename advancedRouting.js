const express = require("express");
const app = express();

//req.query--- [Property of express request (req) object];
app.get("/user", (req, res) => {
    console.log(req.query);
    res.send("User Information or Details... by (req.query)");
}); //user?name=Abhishek&age=22  --> Put in Api

//req.param--- [Property of express request (req) object];
app.get("/user/:name/:role", (req, res) => {
    console.log(req.params);
    res.send(`Name: ${req.params.name}, role: ${req.params.role}`);
}); //http://localhost:4444/user/Abhishek/softwareDeveloper

app.get("/ab?c", (req, res) => {  // Its work on (/abc) abd (ac), Becuase of this(?)... 
    res.send({firstName : "Abhishek", lastName : "Bhandari", Role: "Software Developer"});
})

app.get("/ab+c", (req, res) => {  // Its work on (/abc) abd (abbbbbbbbbbbbbbbbbbbbbbbbc), Becuase of this(+)...
    res.send({firstName : "Prayag", lastName : "Bhardwaj", Role: "Software Engineer"});
})

app.get("/a(bc)*d", (req, res) => {  // Its work on (/abcd) abd (abcbcbcbcbcbcd), Becuase of this(*)...
    res.send({firstName : "Bhaskar", lastName : "Bhandari", Role: "MERN Stack Developer"});
})

// Regex: contains "a"
app.get(/a/, (req, res) => {
    res.send("Hey, it's a Regex [/a/].");
});

// Regex: ends with "fly"
app.get(/.*fly$/, (req, res) => {
    res.send("Hey, it's a Regex [/.*fly$/].");
});

app.get(/^\/a(bc)*d$/, (req, res) => {
    res.send({
        firstName: "Bhaskar",
        lastName: "Bhandari",
        Role: "MERN Stack Developer"
    });
});

app.listen(4444, () => {
    console.log("Server running at http://localhost:4444");
});