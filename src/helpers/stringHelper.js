"use strict";
import voca from "voca";

export const getCamel = (str) =>
voca.camelCase(str);

export const isString = (str) =>
	voca.isString(str);