// Keep the CSS minifier from downleveling light-dark() (vite 8 minifies with
// lightningcss, whose default targets predate light-dark support).
const lightDarkFloor = ['chrome123', 'edge123', 'firefox120', 'safari17.5'];

export default {
	stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
	addons: ['@storybook/addon-docs'],
	framework: '@storybook/web-components-vite',
	async viteFinal(config) {
		config.build = { ...config.build, cssTarget: lightDarkFloor };
		return config;
	},
};
