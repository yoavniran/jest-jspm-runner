describe("app tests", () => {

	const dateStr = "date",
		camelStr = "camel",
		mockLoggerDebug = jest.fn(() => {
		}),
		mockDateAdd = jest.fn(() => ""),
		mockDateFormat = jest.fn(() => dateStr),
		mockGetCamel = jest.fn(() => camelStr),
		mockIsString = jest.fn(() => true);

	beforeAll(() => {

		jest
			.mock("../src/helpers/dateHelper", () => ({
				addDaysToNow: mockDateAdd,
				formatTime: mockDateFormat
			}))
			.mock("../src/helpers/stringHelper", () => ({
				getCamel: mockGetCamel,
				isString: mockIsString
			}))
			.mock("../src/common/logger", () => ({
				debug: mockLoggerDebug
			}))
	});

	it("should return date and hello", () => {

		const app = require("../src/app").default;

		const result = app();


		expect(result).toMatch(`${dateStr}: ${camelStr}`);

	});
});