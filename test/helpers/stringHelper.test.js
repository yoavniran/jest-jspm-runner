describe("string helper tests",()=>{

	it("should return true for string", ()=>{

		const helper = require("../../src/helpers/stringHelper");

		expect(helper.isString("")).toBeTruthy();
		expect(helper.isString([1,2,3].join(","))).toBeTruthy();
	});
});
