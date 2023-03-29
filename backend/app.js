const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use((req,res,next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-type, Accept");
  res.setHeader("Access-Control-Allow-Methds", "GET, POST, PATCH, DELETE, OPTIONS");
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: 'Post added successfully'
  });
});

app.use("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: "fasd123",
      title: "First Server side post",
      content: "This is content from the server",
    },
    {
      id: "asfa123",
      title: "Second Server side post",
      content: "This is content from the server also",
    },
  ];
  res.status(200).json({
    message: 'Posts fetched successfully!',
    posts: posts
  });
});

module.exports = app;
