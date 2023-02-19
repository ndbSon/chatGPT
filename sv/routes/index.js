var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  let messageCount = 0;
  const maxMessages = Math.floor(Math.random() * 21) + 10;
  const dataGenerator = () => {
    const randomLength = Math.floor(Math.random() * 15) + 5;
    let randomData = "";
    const possibleChars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < randomLength; i++) {
      const randomIndex = Math.floor(Math.random() * possibleChars.length);
      randomData += possibleChars.charAt(randomIndex);
    }

    return `data: ${randomData}\n\n`;
  };
  const intervalId = setInterval(function () {
    const randomData = dataGenerator();
    res.write(randomData); //data: ${new Date().toLocaleTimeString()}\n\n
    messageCount++;
    if (messageCount >= maxMessages) {
      clearInterval(intervalId);
      res.end();
    }
  }, 100);
});

module.exports = router;
