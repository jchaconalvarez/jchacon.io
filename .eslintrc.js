module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  extends: ['react'],
  plugins: ['react', 'jsx-a11y', 'import'],
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    quotes: [1, 'single', { 'allowTemplateLiterals': true }],
    semi: ['error', 'never'],
    indent: ['error', 2],
  },
}
