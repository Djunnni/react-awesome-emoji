module.exports = {
  ignorePatterns: ['node_modules/'],
	env: {
		browser: true,
	},
	extends: ['airbnb', 'plugin:prettier/recommended'],
	overrides: [
		{
			files: ['**/*.stories.*'],
			rules: {
				'import/no-anonymous-default-export': 'off',
			},
		},
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['react', 'prettier'],
	rules: {
    'react/jsx-props-no-spreading': 0,
  },
};
