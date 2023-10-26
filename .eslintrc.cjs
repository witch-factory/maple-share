module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: true,
    tsconfigRootDir: __dirname,
  },
  plugins: ['react-refresh', 'unused-imports'],
  rules: {
    'react/prop-types': 'off',
    'react/jsx-filename-extension': [
      'warn',
      {
        'extensions': [
          '.js',
          '.ts',
          '.jsx',
          '.tsx'
        ] // 확장자로 js와 jsx ts tsx 허용
      }
    ],
    'react/no-unescaped-entities': 'warn',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-boolean-value': 'off',
    'react/jsx-no-bind': 'off',
    'react/require-default-props': 'off',
    'react/self-closing-comp': 'warn', // 셀프 클로징 태그 가능하면 적용
    'react/no-array-index-key': 'off',
    'react-hooks/exhaustive-deps': ['warn'], // hooks의 의존성배열이 충분하지 않을때 강제로 의존성을 추가하는 규칙을 완화
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'jsx-a11y/heading-has-content': 'off', // h1~h6 태그는 반드시 내용을 가져야 한다는 규칙을 완화
    'jsx-a11y/click-events-have-key-events': 'off', // onClick 사용하기 위해서 onKeyUp,onKeyDown,onKeyPress 하나 이상 사용
    'indent':[
      'error',
      2
    ],
    'import/no-extraneous-dependencies': 'off',
    'import/no-named-as-default': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'import/order': [
      'warn',
      {
        'alphabetize': {
          'order': 'asc',
          'caseInsensitive': true
        },
        'groups': [
          'builtin',
          'external',
          [
            'parent',
            'internal'
          ],
          'sibling',
          [
            'unknown',
            'index',
            'object'
          ]
        ],
        'pathGroups': [
          {
            'pattern': '~/**',
            'group': 'internal'
          }
        ],
        'newlines-between': 'always'
      }
    ],
    'arrow-parens': ['warn', 'as-needed'], // 화살표 함수의 파라미터가 하나일때 괄호 생략
    'no-console': ['off'], // 콘솔을 쓰면 에러가 나던 규칙 해제
    'no-alert': ['off'], // alert를 쓰면 에러가 나던 규칙 해제
    'jsx-quotes': [
      'error',
      'prefer-single'
    ],
    'keyword-spacing': 'error',
    'quotes': [
      'error',
      'single',
      {
        'avoidEscape': true
      }
    ],
    'no-console': [
      'warn',
      {
        'allow': [
          'warn',
          'error'
        ]
      }
    ],
    'no-extra-semi': 'error',
    'semi': 'off',
    'space-before-blocks': 'error',
    'no-shadow': 'off',
    'unused-imports/no-unused-imports': 'error',
    '@typescript-eslint/no-shadow': [
      'error'
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/semi': [
      'error'
    ],
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        'checksVoidReturn': false
      }
    ],
    '@typescript-eslint/type-annotation-spacing': [
      'error',
      {
        'before': false,
        'after': true,
        'overrides': {
          'colon': {
            'before': false,
            'after': true
          },
          'arrow': {
            'before': true,
            'after': true
          }
        }
      }
    ]
  },
}
