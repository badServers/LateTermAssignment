const turnFunctions = require('./playerturn');

describe("Change player", () => {
	it("Should return opposite player", () => {
		expect(turnFunctions.changePlayer("X")).toBe("O");
	});
});
