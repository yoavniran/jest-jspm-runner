"use strict";
import warning from "warning";

const doLog = ()=>warning("haha haha!");

export default {
	log:doLog,
	debug: doLog,
	error: doLog,
	warn: doLog
}