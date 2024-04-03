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
        {
            files: ['*.ts', '*.tsx'],
            extends: [
                'plugin:@typescript-eslint/eslint-recommended',
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
            ],
            parser: '@typescript-eslint/parser',
            plugins: ['@typescript-eslint'],
            rules: {
                '@typescript-eslint/consistent-type-imports': 'error',
            },
            parserOptions: {
                project: ['./tsconfig.json'],
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    settings: {
        'react': {
            createClass: 'createReactClass', // Regex for Component Factory to use,
            // default to "createReactClass"
            pragma: 'React', // Pragma to use, default to "React"
            fragment: 'Fragment', // Fragment to use (may be a property of <pragma>), default to "Fragment"
            version: 'detect', // React version. "detect" automatically picks the version you have installed.
            // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
            // It will default to "latest" and warn if missing, and to "detect" in the future
            flowVersion: '0.53', // Flow version
        },
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
    rules: {
        'indent': ['error', 4, {ignoredNodes: ['TemplateLiteral *'], SwitchCase: 1}],
        'import/extensions': ['error', 'ignorePackages', {
            js: 'never', jsx: 'never', ts: 'never', tsx: 'never',
        }],
        'no-multiple-empty-lines': ['error', {max: 2, maxEOF: 0}],
        'no-param-reassign': ['error', {props: false}],
        'no-restricted-syntax': 'off',
        'no-underscore-dangle': 'off',
        'no-use-before-define': ['error', {functions: false}],
        'no-void': 'off',
        'object-curly-spacing': ['error', 'never'],
        'quote-props': ['error', 'consistent-as-needed'],
        'import/no-default-export': 'error',
        'import/prefer-default-export': 'off',
        // disable this option as we make typechecks using TypeScript
        'react/prop-types': 'off',
    },
};
