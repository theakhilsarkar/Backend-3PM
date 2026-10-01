import http from "http"; // we import http to create and start server
import path from "path"; // we import path to create paths.
import fs from "fs"; // to handle(write and read) files
import { fileURLToPath } from "url"; // filepath -> normal path

const filepath = fileURLToPath(import.meta.url); // filepath -->> normal
const dirpath = path.dirname(filepath); ////

const homepath = path.join(dirpath, "home", "index.html");
const aboutpath = path.join(dirpath, "about", "index.html");

const serverHandler = (req, res) => {
  if (req.url == "/") {
    fs.readFile(homepath, (err, data) => {
      if (err) {
        res.writeHead(500, { "content-type": "text/plain" });
        res.end(err.message);
        return;
      }
      res.writeHead(200, { "content-type": "text/html" });
      res.end(data.toString());
    });
  } else if (req.url == "/about") {
    fs.readFile(aboutpath, (err, data) => {
      if (err) {
        res.writeHead(500, { "content-type": "text/plain" });
        res.end(err.message);
        return;
      }
      res.writeHead(200, { "content-type": "text/html" });
      res.end(data.toString());
    });
  } else if (req.url == "/method" && req.method == "GET") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(
      JSON.stringify({
        id: 1,
        name: "Om",
        std: 12,
      }),
    );
  } else if (req.url == "/method" && req.method == "POST") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("POST Request received !");
  } else {
    res.writeHead(404, { "content-type": "plain/text" });
    res.end("404 Page not found !");
  }
};

const server = http.createServer(serverHandler);

server.listen(4000, () => {
  console.log("server started successfully !");
});

// localhost == http://127.0.0.1/

// API GET,post,put,delete - api request method = which type of request is sent
// GET -> we want data from the server
// POST -> we want to send data to the server
// PUT -> we want to update data in to the server
// PATCH -> we want to update partial data in to the server.
// DELETE -> we want to delete data from the server.

// we can make url more reuseable

// postman / thunder client

// HTTP
// monday - create a http server to handle GET,POST,PUT,DELETE request and request from diffrent routes. every request should be enter in a saprate file name log.txt.

// ex. http://localhost:4000/about POST 10:08 AM

// /about POST 04/09/2026 10:08 AM
// /profile GET 04/09/2026 10:15 AM

// Date.now()

// http -> express js

// JS
// server(backend - node js) and client(react js)
//

// backend = server(api handling) + database(store and manage data in systematic way)

// JS - Express JS, MongoDB,

// Database ? - digital information
// way of storing data

// 1. relational database - SQL Database, Structured Query Language - like excel
// 2. non-relational database - NoSQL Database - key : value

// Schema - structure/format of database

// CRUD ->

// SQL - DB Browser - install run

// Qurery - is command to interact with database.
// to create table - CREATE TABLE....
// to insert value into table - INSERT INTO ....
// to update value from table - UPDATE .... 
// to fetch value from table - SELECT....
// to remove value from table - DELETE

// col - feild name - col name

// Queries
// 5 QUERIES - EXAMPLE
// give me CRET.... queries for students table.