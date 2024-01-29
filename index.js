const express = require("express");
const app = express();
const test = require("./middleware");
const path = require('path')

// app.get("/", (req, res) => {
//   res.render("HomePage");
// });

// app.use(express.json());
// app.get("/api", test, function (req, res) {
//   res.send("hello world");
// });
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.get("/Home",test, (req, res) => {
  res.render("HomePage");
});
app.get("/services",test, (req, res) => {
  res.render("OurServices");
});
app.get("/contact",test, (req, res) => {
  res.render("ContactUs");
});

// app.post("/api", function (req, res) {
//   console.log(req.body);
//   res.json({ message: "hello" + req.body.name });
// });
app.listen(3000, function () {
  console.log("server is running on port 3000");
});
