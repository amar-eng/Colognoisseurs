const express = require("express");
const router = express.Router();
const fs = require("fs");


function readTopFile() {
    const topFileRead = fs.readFileSync("./data/top.json");
    const topFileParse = JSON.parse(topFileRead);
  
    return topFileParse;
  }

router.get("/", (req, res) => {
    const topData = readTopFile();
  
    if (!topData) {
      res.status(404).send("ERROR: Could not retrieve data!");
    } else {
      res.status(200).json(topData);
    }
});

module.exports = router; 