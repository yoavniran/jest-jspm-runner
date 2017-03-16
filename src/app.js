"use strict";

import consts from "./consts";
import logger from "common/logger";
import {addDaysToNow, formatTime} from "helpers/dateHelper";
import {getCamel, isString} from "helpers/stringHelper";

export default () =>{

	logger.debug("starting...");

	const timeStr = formatTime(addDaysToNow(consts.DAYS_TO_ADD), consts.TIME_FORMAT);

	const helloStr = isString("bla") ? getCamel("hello world") : "good bye";

	logger.debug("...finished");

	return `${timeStr}: ${helloStr}`;
};

