module.exports = {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-idiomatic-order',
    ],
    plugins: [
        'stylelint-order',
        'stylelint-scss',
    ],
    rules: {
        'alpha-value-notation': 'number',
        'color-function-notation': 'legacy',
        'color-hex-length': 'long',
        'custom-property-pattern': null,
        'function-url-quotes': 'never',
        'selector-class-pattern': null,
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': true,
        'scss/selector-no-redundant-nesting-selector': true,
    },
};
