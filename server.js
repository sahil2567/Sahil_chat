var express = require("express");
const { default: chat } = require("./controllers/chat");

const app = express();
const http = require("http").createServer(app);
app.get("/api", (req, res) => {
  res.json({
    data: "hello from node js api",
  });
});
http.listen(8800, () => console.log("server is running on 8800"));
chat(http);
