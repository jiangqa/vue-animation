module.exports = {
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser', // Specifies the ESLint parser
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {
        '@typescript-eslint/no-explicit-any': ['off'],
        'vue/multi-word-component-names': [
            'error',
            {
                ignores: ['Home', 'Login']
            }
        ]
    },
    extends: [
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:prettier/recommended'
    ]
}
