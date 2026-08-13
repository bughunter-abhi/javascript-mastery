const http = require("node:http");

const server = http.createServer(function (req, res) {
    if (req.url === "/getSecretData") {
        res.end("I'm Abhishek & Welcome to my new world");
    } else {
        res.end("Welcome to your own HTTP Server...");
    }
});

server.listen(2004);