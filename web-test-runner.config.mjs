import cfg from '@neovici/cfg/web/test-runner.mjs';

export default {
	...cfg,
	files: 'test/**/*.test.(j|t)s',
	testFramework: { config: { ui: 'bdd' } },
	coverageConfig: {
		...cfg.coverageConfig,
		threshold: {
			statements: 60,
			branches: 70,
			functions: 40,
			lines: 60,
		},
	},
};
