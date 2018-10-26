const turnFunctions = require('./playerturn');

describe("Change player", () => {
	it("Should return the O player", () => {
	     expect(turnFunctions.changePlayer("X")).toBe("O");
	});
	it("Should return the X player", () => {
	     expect(turnFunctions.changePlayer('O')).toBe("X");
	});
});
