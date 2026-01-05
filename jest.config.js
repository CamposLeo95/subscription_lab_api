import { createDefaultPreset } from "ts-jest";

/** @type {import('jest').Config} */
const config = {
	testEnvironment: "node",
	transform: {
		...createDefaultPreset().transform,
	},
	testMatch: ["**/*.spec.ts", "**/*.test.ts"],
};

export default config;
