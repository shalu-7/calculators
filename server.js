const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    let file = "/index.html";

    if (req.url === "/style.css") {
        file = "/style.css";
    }

    if (req.url === "/script.js") {
        file = "/script.js";
    }

    fs.readFile(__dirname + file, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end("File not found");
            return;
        }

        res.writeHead(200);
        res.end(data);
    });
});

server.listen(5000, "0.0.0.0", () => {
    console.log("Server running on port 5000");
});
