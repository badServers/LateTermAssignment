const express = require("express");
const router = express.Router();
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

router.get("/game/gameboard/updateBoard/:tile", (req, res) => {
    res.status(200).send(gameboard.updateBoard(req.params.tile));
});

router.get("/game/gameboard/resetBoard", (req, res) => {
    res.status(200).send(gameboard.resetBoard());
});

router.get("/game/gameboard/updateMessage", (req, res) => {
    res.status(200).send(gameboard.updateMessage());
});

module.exports = router;
