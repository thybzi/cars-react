module.exports = {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-idiomatic-order',
    ],
    plugins: [
        'stylelint-order',
    ],
    rules: {
        'alpha-value-notation': 'number',
        'color-function-notation': 'legacy',
        'color-hex-length': 'long',
        'custom-property-pattern': null,
        'function-url-quotes': 'never',
        'selector-class-pattern': null,
    },
};
