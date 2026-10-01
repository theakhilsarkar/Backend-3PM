// import http from "http";

// // req -> client send ->
// // api -> server
// // server -> req handle, result ready, res return - 24x7 on, internet with electricity
// // res -> server send -> result

// // req - what client has sent..
// // res - what server want to send
// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.writeHead(200, { "content-type": "text/plain" });
//     res.end("This is main page...");
//   } else if (req.url == "/about") {
//     res.writeHead(200, { "content-type": "text/plain" });
//     res.end("This is about page...");
//   } else if (req.url === "/html") {
//     res.writeHead(200, { "content-type": "text/html" });
//     res.end(`<h1 style="color: purple;">Welcome Boss!</h1>
//     <p>This page is served using Node.js</p>`);
//   } else {
//     res.writeHead(404, { "content-type": "text/plain" });
//     res.end("Page Not Found !");
//   }
// });

// server.listen(3000, () => {
//   console.log("server started successfully !");
// });

// // status code -> it show current status of api calling
// // 200,201,202... -> success
// // 400,401,402... -> client side error
// // 500,501,503... -> server side error

// // website code -> server
// // localhost:3000 --> amazon.in ->

import http from "http";
import fs from "fs";
import path from "path";

// const filename = path.basename(import.meta.url);
// const dirname = path.dirname(import.meta.url);
// const filepath = path.join(dirname, "index.html");
// console.log(filename);
// console.log(dirname);
// console.log(filepath);

const server = http.createServer((req, res) => {
  fs.readFile("index.html", (err, data) => {
    if (err) {
      res.writeHead(500, { "content-type": "text/plain" });
      res.end("Internal server error !");
    } else {
      res.writeHead(200, { "content-type": "text/html" });
      res.end(data);
    }
  });
});

server.listen(4000, () => {
  console.log("server started successfully !");
});
