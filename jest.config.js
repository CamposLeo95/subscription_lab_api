// import { createDefaultPreset } from "ts-jest";

const { createDefaultPreset } = require("ts-jest");

/** @type {import('jest').Config} */
const config = {
	testEnvironment: "node",
	transform: {
		...createDefaultPreset().transform,
	},
	testMatch: ["**/*.spec.ts", "**/*.test.ts"],
};

module.exports = config;
