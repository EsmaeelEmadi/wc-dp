module.exports = {
     extends: [
    'eslint:recommended',
    'plugin:eslint-plugin/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    ],
    rules: {
        "no-shadow": "off",
        "no-shadow-restricted-names": 'off'
    }
}