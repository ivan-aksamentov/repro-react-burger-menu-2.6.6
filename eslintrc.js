const path = require('path')

module.exports = {
  root: true,
  extends: [
    'react-app',
    'plugin:prettier/recommended',
    'prettier/react',
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  plugins: ['prettier', 'react', 'react-hooks'],
  rules: {
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    'prettier/prettier': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  parserOptions: {
    sourceType: 'module',
    babelOptions: {
      configFile: path.resolve(__dirname, './babel.config.js'),
    },
  },
}
