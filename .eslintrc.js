module.exports = {
  'env': {
    'es2021': true,
    'node': true,
    'jest': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'universe',
    'universe/native',
  ],
  'overrides': [
    {
      'env': {
        'node': true
      },
      'files': [
        '.eslintrc.{js,cjs}'
      ],
      'parserOptions': {
        'sourceType': 'script'
      }
    }
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
    'projetct': 'tsconfig.json'
  },
  'plugins': [
    '@typescript-eslint',
    'react',
    '@typescript-eslint',
    'prettier',
    'import',
  ],
  'rules': {
    'prettier/prettier': 'error',
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'import/order': 0,
    'react-native/no-inline-styles': 0,
    'import/namespace': 0,
    'no-duplicate-imports': 'error',
  },
  "settings": {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts"],
    },
    "import/internal-regex": "^@",
    "import/resolver": {
      "alias": {
        "map": ["@", "./src"],
        "extensions": [".ts", ".tsx"],
      }
    }
  },
};
