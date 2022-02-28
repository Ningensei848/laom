module.exports = {
    // cf. https://eslint.org/docs/user-guide/configuring/configuration-files#cascading-and-hierarchy
    root: true,
    // cf. https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/parser
    parser: '@typescript-eslint/parser',
    // Linting with Type Information | cf. https://typescript-eslint.io/docs/linting/type-linting
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: "latest",
        sourceType: "module"
    },
    env: {
        "browser": true,
        "es2021": true
    },
    plugins: [
        "react",
        // cf. https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin
        '@typescript-eslint',
    ],
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        'plugin:react-hooks/recommended',
        "plugin:@typescript-eslint/recommended",
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'prettier'

    ],
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx']
        },
    },
    rules: {
    }
}
