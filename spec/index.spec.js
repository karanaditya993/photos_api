const { reverseString } = require("../index");

describe("reverseString", () => {
	it("should properly reverse a string", () => {
		const input = "Hello my name is Karan";
		const expectedOutput = "naraK si eman ym olleH";
		expect(reverseString(input)).toEqual(expectedOutput);
	});
});
