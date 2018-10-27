const request = require("supertest");
const app = require("../../app");

describe("GET /api/game/gameboard/status", () => {
    it("Should return a 200 status code", async () => {
        const res = await request(app).get("/api/game/gameboard/status");
        expect(res.status).toBe(200);
    });
});

describe("GET /api/game/gameboard/updateBoard/:tile", () => {
    it("Should return a 200 status code", async () => {
        const res = await request(app).get("/api/game/gameboard/updateBoard/0");
        expect(res.status).toBe(200);
    });
});

describe("GET /api/game/gameboard/resetBoard", () => {
    it("Should return a 200 status code", async () => {
        const res = await request(app).get("/api/game/gameboard/resetBoard");
        expect(res.status).toBe(200);
    });
});

describe("GET /api/game/gameboard/updateMessage", () => {
    it("Should return a 200 status code", async () => {
        const res = await request(app).get("/api/game/gameboard/updateMessage");
        expect(res.status).toBe(200);
    });
});
