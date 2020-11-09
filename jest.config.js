module.exports = {
	rootDir: __dirname,
	collectCoverageFrom: ["packages/reakit/src/**/*.{js,ts,tsx}", "!**/*-test.{js,ts,tsx}"],
	projects: ["<rootDir>/packages/*/jest.config.js"],
	moduleNameMapper: {
		"\\.css$": "<rootDir>/jest.mock.js"
	},
	setupFilesAfterEnv: ["raf/polyfill", "@wordpress/jest-console", "<rootDir>/jest.setup.js"]
};
