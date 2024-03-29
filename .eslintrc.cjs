/* eslint-env node */

module.exports = {
  env: { browser: true, es2020: true, jest: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'airbnb',
    'prettier',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'prettier', 'import', 'jest'],
  rules: {
    'react-refresh/only-export-components': ['off'],
    'prettier/prettier': ['error'],
    'react/jsx-props-no-spreading': 0,
    'react/jsx-filename-extension': 0,
    'import/prefer-default-export': 0,
    'react/require-default-props': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/forbid-prop-types': 0,
    'react/no-array-index-key': 0,
    'import/no-cycle': 0,
    'consistent-return': 0,
    'array-callback-return': 0,
    'no-unused-expressions': 0,
    'no-return-assign': 0,
    'react/no-this-in-fc': 0,
    'no-plusplus': 'off',
    'react/jsx-indent': 'off',
    'react/no-danger': 'off',
    'import/no-unresolved': 'off',
    'no-param-reassign': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'default-param-last': 'off',
    'import/no-extraneous-dependencies': 'off',
    'default-case': 'off',
    'arrow-body-style': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'react/no-unknown-property': 'off',
    'react/prop-types': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
  },
};
