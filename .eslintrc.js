module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'airbnb-base',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [
                '.eslintrc.{js,cjs}',
            ],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    settings: {
        react: {
            createClass: 'createReactClass', // Regex for Component Factory to use,
            // default to "createReactClass"
            pragma: 'React', // Pragma to use, default to "React"
            fragment: 'Fragment', // Fragment to use (may be a property of <pragma>), default to "Fragment"
            version: 'detect', // React version. "detect" automatically picks the version you have installed.
            // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
            // It will default to "latest" and warn if missing, and to "detect" in the future
            flowVersion: '0.53', // Flow version
        },
    },
    rules: {
        'indent': ['error', 4, {ignoredNodes: ['TemplateLiteral *']}],
        'no-multiple-empty-lines': ['error', {max: 2, maxEOF: 0}],
        'no-param-reassign': ['error', {props: false}],
        'no-restricted-syntax': 'off',
        'no-underscore-dangle': 'off',
        'no-use-before-define': ['error', {functions: false}],
        'object-curly-spacing': ['error', 'never'],
        'quote-props': ['error', 'consistent-as-needed'],
        'import/no-default-export': 'error',
        'import/prefer-default-export': 'off',
        // @TODO разобраться с этими настройками
        'no-unused-vars': 'off',
        'react/prop-types': 'off',
    },
};
