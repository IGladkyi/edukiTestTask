module.exports = {
  root: true,
  extends: '@react-native-community',
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      rules: {
        'no-shadow': 'off',
        'no-undef': 'off',
        'prettier/prettier': 1,
        'import/no-unresolved': 0,
        'react/jsx-filename-extension': [
          'warn',
          {
            extensions: ['.jsx'],
          },
        ],
        'import/extensions': 0,
        'import/no-extraneous-dependencies': 0,
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        'react-hooks/exhaustive-deps': 'off',
        '@typescript-eslint/indent': ['off'],
      },
    },
  ],
};
