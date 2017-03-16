"use strict";
import moment from "moment";

export const addDaysToNow = (days) =>
	moment().add(days, "days");

export const formatTime = (time, format) =>
	moment(time).format(format);
