const express = require("express");
const router = express.Router();
const greeting = require("../logic/greeting");
const gameboard = require("../logic/gameboard");

router.get("/", (req, res) => {
  res.status(405).send({ error: "GET method not allowed, try OPTIONS." });
});

router.options("/", (req, res) => {
  const options = {
    options: { get: ["/api/greeting", "/api/greeting/{NAME}"] }
  };
  res.status(200).send(options);
});

router.get("/greeting/:name", (req, res) => {
  res.status(200).send({ greeting: greeting(req.params.name) });
});

router.get("/game/gameboard/status", (req, res) => {
    res.status(200).send(gameboard.boardStatus());
});

module.exports = router;
