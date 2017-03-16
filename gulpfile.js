"use strict";

const fs = require("fs"),
	gulp = require("gulp"),
	gulpJestJspm = require("gulp-jest-jspm");

gulp.task("test", () =>
	gulp.src("test")
		.pipe(gulpJestJspm({
			jestConfig: {
				"roots": ["./test"]
			}
		})));


gulp.task("jestjspm", () => {

	const jestJspm = require("jest-jspm");

	const config = jestJspm(fs.realpathSync("."), {
		jestConfig: {
			"roots": ["./test"]
		}
	});

	console.log("config !!!!!!", config);
});