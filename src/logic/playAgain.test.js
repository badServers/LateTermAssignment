const playAgainButton = require('./playAgain');
global.window = window
global.$ = require('jquery');
describe("Resest game", () => {
	it("Should return player = X", () => {
		expect(playAgainButton.playAgain(5, 2, 'O', 3)).toBe("X");
	});
});
