const express = require("express");
const router = express.Router();
const gameboard = require("../logic/gameboard");

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

router.get("/game/gameboard/updateScores", (req, res) => {
    res.status(200).send(gameboard.updateScores());
});

router.get("/game/gameboard/gameOverYet", (req, res) => {
    res.status(200).send(gameboard.gameOverYet());
});

module.exports = router;
