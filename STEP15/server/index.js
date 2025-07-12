const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongodb = require("mongodb");

const app = express();
const port = 3200;
const client = mongodb.MongoClient;
const url = "mongodb://localhost:27017/";

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello world using nodemon");
});

app.post("/saveData", (req, res) => {
  client.connect(url, (err, client) => {
    const db = client.db("intellipaat");
    const collection = db.collection("students");
    collection.insert(req.body);
    var cursor = collection.fing({});
    cursor.forEach(
      (doc) => {
        console.log(doc);
      },
      (err) => {
        console.log(err);
        client.close();
      }
    );
  });

  console.log(req.body);
  res.send(JSON.stringify(req.body));
});

app.listen(port, () => {
  console.log("listen at port no " + port);
});
