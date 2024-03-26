module.exports = {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-rational-order',
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
