const StyleLintPlugin = require("stylelint-webpack-plugin");

module.exports = {
	plugins: [
		new StyleLintPlugin({
			configFile: ".stylelintrc",
			files: "**/*.css",
			fix: true,
		}),
	],
};
