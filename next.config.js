const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

module.exports = withNextIntl({
	trailingSlash: false,
	env: {
		_next_intl_trailing_slash: "off",
	},
});
