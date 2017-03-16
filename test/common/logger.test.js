describe("logger tests", () => {
	"use strict";

	const mockWarning = jest.fn();

	beforeAll(()=>{
		jest.mock("warning", () => mockWarning);
	});

	it("should be using warning",()=>{

		const logger = require("../../src/common/logger").default;

		logger.debug("test");
		logger.log("test");
		logger.warn("test");
		logger.error("test");

		expect(mockWarning).toHaveBeenCalledTimes(4);
	});
});