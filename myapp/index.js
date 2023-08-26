const express = require("express");
const app = express();
app.listen(3010, () => {
  console.log("server is running at 3010 port");
});

app.get("/", (request, response) => {
  response.send("Hello world");
});

const getResponseData = async () => {
  const response = await fetch("https://api.wazirx.com/api/v2/tickers");
  const data = await response.json();
  const top10Data = Object.values(data).slice(0, 10);
  console.log(top10Data);
};

getResponseData();
