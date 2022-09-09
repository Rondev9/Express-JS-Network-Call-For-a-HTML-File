const express = require("express");
const app = express();

const api = app.get("/gadgets", (request, response) => {
  response.sendFile("./gadgets.html", { root: __dirname });
});
app.listen(3000);
module.exports = api;
