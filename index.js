module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: [
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsdoc/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/babel',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'standard-with-typescript',
  ],
  overrides: [
    {
      files: ['**.js', '**.json', '**.ts', '**.tsx', '**.jsx'],
      rules: {
        'jsdoc/require-returns': 'off',
        'sort-keys-fix/sort-keys-fix': 'error',
      },
    },
    {
      files: ['*.ts', '*.tsx'], // Your TypeScript files extension
      parserOptions: {
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'babel',
    'prettier',
    'import',
    'jsdoc',
    'only-error',
    'sort-keys-fix',
    '@typescript-eslint',
  ],
  rules: {
    '@typescript-eslint/consistent-type-definitions': 0,
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/member-delimiter-style': [
      2,
      {
        multiline: {
          delimiter: 'none',
          requireLast: false,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
    '@typescript-eslint/no-unused-vars-experimental': 0,
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/strict-boolean-expressions': 0,
    'comma-dangle': 'off',
    'import/order': [
      'error',
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
        groups: [
          'external',
          'builtin',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always-and-inside-groups',
        pathGroups: [
          {
            group: 'internal',
            pattern: '@/**',
          },
          {
            group: 'builtin',
            pattern: '~/**',
          },
        ],
      },
    ],
    'no-console': 'error',
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false,
      },
    ],
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
      },
    ],
  },
  settings: {
    'import/resolver': {
      alias: {
        extensions: ['.ts', 'tsx', '.graphql', '.js', '.jsx', '.json', '.vue'],
        map: [
          ['@', './src'],
          ['~', './'],
        ],
      },
    },
  },
}
