module.exports = {
	content: [
		"./src/*.html",
		"./src/**/*.html",
		"./src/*.pug",
		"./src/**/*.pug",
		"./src/**/*.js",
	],
	theme: {
		container: {
			center: true,
			padding: "2rem",
		},
		extend: {
			//- Add custom color palette here
			colors: {
				white: "#ffffff",
				"pallete-primary": {
					"1": "#0D1B2A",
					"2": "#1B263B",
					"3": "#415A77",
					"4": "#778DA9",
					"5": "#E0E1DD",
				}
			},
			screens: {
				smallMobile: '475px',
			},
		},
	},
	variants: {},
	corePlugins: {},
	future: {
		purgeLayersByDefault: process.env.NODE_ENV === "production",
	},
};
