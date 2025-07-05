const exprees = require("express");
const cors = require("cors");

const app = exprees();
var corsOption = {
  origin: "http://localhost:4200",
};
app.use(cors(corsOption));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/data/data.json");
});

app.listen(5050, "localhost", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Loclhost: 5050");
  }
});
