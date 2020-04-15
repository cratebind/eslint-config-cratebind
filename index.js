const restrictedGlobals = require('confusing-browser-globals');

module.exports = {
  root: true,
  extends: ['prettier', 'prettier/react', 'plugin:cypress/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      impliedStrict: true,
      classes: true,
      jsx: true,
    },
  },
  plugins: [
    'prettier',
    'eslint-plugin-cypress',
    'import',
    'jsx-a11y',
    'react',
    'react-hooks',
    'unicorn',
  ],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    jquery: true,
    node: true,
    'cypress/globals': true
  },
  globals: {
    cy: 'writable',
    location: 'writable',
    context: 'writable',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },

  /**
   * Maybe use if we start using typescript
   */
  // overrides: [
  //   {
  //     files: ['**/*.ts?(x)'],
  //     parser: '@typescript-eslint/parser',
  //     parserOptions: {
  //       ecmaVersion: 2018,
  //       sourceType: 'module',
  //       ecmaFeatures: {
  //         jsx: true,
  //       },

  //       // typescript-eslint specific options
  //       warnOnUnsupportedTypeScriptVersion: true,
  //     },
  //     plugins: ['@typescript-eslint'],
  //     // If adding a typescript-eslint version of an existing ESLint rule,
  //     // make sure to disable the ESLint rule here.
  //     rules: {
  //       // TypeScript's `noFallthroughCasesInSwitch` option is more robust (#6906)
  //       'default-case': 'off',
  //       // 'tsc' already handles this (https://github.com/typescript-eslint/typescript-eslint/issues/291)
  //       'no-dupe-class-members': 'off',
  //       // 'tsc' already handles this (https://github.com/typescript-eslint/typescript-eslint/issues/477)
  //       'no-undef': 'off',

  //       // Add TypeScript specific rules (and turn off ESLint equivalents)
  //       '@typescript-eslint/consistent-type-assertions': 'warn',
  //       'no-array-constructor': 'off',
  //       '@typescript-eslint/no-array-constructor': 'warn',
  //       'no-use-before-define': 'off',
  //       '@typescript-eslint/no-use-before-define': [
  //         'warn',
  //         {
  //           functions: false,
  //           classes: false,
  //           variables: false,
  //           typedefs: false,
  //         },
  //       ],
  //       'no-unused-expressions': 'off',
  //       '@typescript-eslint/no-unused-expressions': [
  //         'error',
  //         {
  //           allowShortCircuit: true,
  //           allowTernary: true,
  //           allowTaggedTemplates: true,
  //         },
  //       ],
  //       'no-unused-vars': 'off',
  //       '@typescript-eslint/no-unused-vars': [
  //         'warn',
  //         {
  //           args: 'none',
  //           ignoreRestSiblings: true,
  //         },
  //       ],
  //       'no-useless-constructor': 'off',
  //       '@typescript-eslint/no-useless-constructor': 'warn',
  //     },
  //   },
  // ],

  rules: {
    // http://eslint.org/docs/rules/
    'array-callback-return': 'warn',
    'default-case': ['warn', { commentPattern: '^no default$' }],
    'dot-location': ['warn', 'property'],
    eqeqeq: ['warn', 'smart'],
    'new-parens': 'warn',
    'no-array-constructor': 'warn',
    'no-caller': 'warn',
    'no-cond-assign': ['warn', 'except-parens'],
    'no-const-assign': 'warn',
    'no-control-regex': 'warn',
    'no-delete-var': 'warn',
    'no-dupe-args': 'warn',
    'no-dupe-class-members': 'warn',
    'no-dupe-keys': 'warn',
    'no-duplicate-case': 'warn',
    'no-empty-character-class': 'warn',
    'no-empty-pattern': 'warn',
    'no-eval': 'warn',
    'no-ex-assign': 'warn',
    'no-extend-native': 'warn',
    'no-extra-bind': 'warn',
    'no-extra-label': 'warn',
    'no-fallthrough': 'warn',
    'no-func-assign': 'warn',
    'no-implied-eval': 'warn',
    'no-invalid-regexp': 'warn',
    'no-iterator': 'warn',
    'no-label-var': 'warn',
    'no-labels': ['warn', { allowLoop: true, allowSwitch: false }],
    'no-lone-blocks': 'warn',
    'no-loop-func': 'warn',
    'no-mixed-operators': [
      'warn',
      {
        groups: [
          ['&', '|', '^', '~', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof'],
        ],
        allowSamePrecedence: false,
      },
    ],
    'no-multi-str': 'warn',
    'no-native-reassign': 'warn',
    'no-negated-in-lhs': 'warn',
    'no-new-func': 'warn',
    'no-new-object': 'warn',
    'no-new-symbol': 'warn',
    'no-new-wrappers': 'warn',
    'no-obj-calls': 'warn',
    'no-octal': 'warn',
    'no-octal-escape': 'warn',
    // TODO: Remove this option in the next major release of CRA.
    // https://eslint.org/docs/user-guide/migrating-to-6.0.0#-the-no-redeclare-rule-is-now-more-strict-by-default
    'no-redeclare': ['warn', { builtinGlobals: false }],
    'no-regex-spaces': 'warn',
    'no-restricted-syntax': ['warn', 'WithStatement'],
    'no-script-url': 'warn',
    'no-self-assign': 'warn',
    'no-self-compare': 'warn',
    'no-sequences': 'warn',
    'no-shadow-restricted-names': 'warn',
    'no-sparse-arrays': 'warn',
    'no-template-curly-in-string': 'warn',
    'no-this-before-super': 'warn',
    'no-throw-literal': 'warn',
    'no-undef': 'error',
    'no-restricted-globals': ['error'].concat(restrictedGlobals),
    'no-unreachable': 'warn',
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    'no-unused-labels': 'warn',
    'no-unused-vars': [
      'error',
      {
        args: 'none',
        ignoreRestSiblings: true,
      },
    ],
    'no-use-before-define': [
      'warn',
      {
        functions: false,
        classes: false,
        variables: false,
      },
    ],
    'no-useless-computed-key': 'warn',
    'no-useless-concat': 'warn',
    'no-useless-constructor': 'warn',
    'no-useless-escape': 'warn',
    'no-useless-rename': [
      'warn',
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false,
      },
    ],
    'no-with': 'warn',
    'no-whitespace-before-property': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'require-yield': 'warn',
    'rest-spread-spacing': ['warn', 'never'],
    strict: ['warn', 'never'],
    'unicode-bom': ['warn', 'never'],
    'use-isnan': 'warn',
    'valid-typeof': 'warn',
    'no-restricted-properties': [
      'error',
      {
        object: 'require',
        property: 'ensure',
        message:
          'Please use import() instead. More info: https://facebook.github.io/create-react-app/docs/code-splitting',
      },
      {
        object: 'System',
        property: 'import',
        message:
          'Please use import() instead. More info: https://facebook.github.io/create-react-app/docs/code-splitting',
      },
    ],
    'getter-return': 'warn',
    "prefer-const": "error",
    "no-var": "error",

    // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
    'import/first': 'error',
    'import/no-amd': 'error',
    'import/no-webpack-loader-syntax': 'error',
    // make sure to avoid linux vs macos issues with case sensitive files
    "import/no-unresolved": [2, {
      "caseSensitive": true
    }],
    "import/no-unused-modules": [2, { "unusedExports": true }],

    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
    'react/forbid-foreign-prop-types': ['warn', { allowInPropTypes: true }],
    'react/jsx-no-comment-textnodes': 'warn',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-pascal-case': [
      'error',
      {
        allowAllCaps: true,
        ignore: [],
      },
    ],
    'react/jsx-uses-react': 'warn',
    'react/jsx-uses-vars': 'warn',
    'react/no-danger-with-children': 'warn',
    // Disabled because of undesirable warnings
    // See https://github.com/facebook/create-react-app/issues/5204 for
    // blockers until its re-enabled
    // 'react/no-deprecated': 'warn',
    'react/no-direct-mutation-state': 'error',
    'react/no-is-mounted': 'warn',
    'react/no-typos': 'error',
    'react/react-in-jsx-scope': 'error',
    'react/require-render-return': 'error',
    'react/style-prop-object': 'error',
    // require display names to improve debugging experience for other developers
    'react/display-name': 'error',
    "react/self-closing-comp": 'error',

    // enforce consistent event handler names
    "react/jsx-handler-names": 'warn',

    'react/no-children-prop': 'error',
    'react/jsx-no-useless-fragment': 'error',
    // 'react/function-component-definition': 'error',


    // https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules
    'jsx-a11y/accessible-emoji': 'warn',
    'jsx-a11y/alt-text': 'warn',
    'jsx-a11y/anchor-has-content': 'warn',

    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: ['noHref', 'invalidHref'],
      },
    ],
    'jsx-a11y/aria-activedescendant-has-tabindex': 'warn',
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/aria-proptypes': 'warn',
    'jsx-a11y/aria-role': ['warn', { ignoreNonDOM: true }],
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'jsx-a11y/heading-has-content': 'warn',
    'jsx-a11y/iframe-has-title': 'warn',
    'jsx-a11y/img-redundant-alt': 'warn',
    'jsx-a11y/no-access-key': 'warn',
    'jsx-a11y/no-distracting-elements': 'warn',
    'jsx-a11y/no-redundant-roles': 'warn',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn',
    'jsx-a11y/scope': 'warn',

    // https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks
    'react-hooks/rules-of-hooks': 'error',

    'unicorn/custom-error-definition': 'error',
    'unicorn/error-message': 'error',
    'unicorn/escape-case': 'error',
    'unicorn/filename-case': 0,
    'unicorn/import-index': 'error',
    'unicorn/new-for-builtins': 'error',
    'unicorn/no-array-instanceof': 'error',
    'unicorn/no-console-spaces': 0,
    'unicorn/no-fn-reference-in-iterator': 'error',
    'unicorn/no-for-loop': 'error',
    'unicorn/no-hex-escape': 'error',
    'unicorn/no-keyword-prefix': 'off',
    'unicorn/no-new-buffer': 'error',
    'unicorn/no-process-exit': 'error',
    'unicorn/no-unreadable-array-destructuring': 'error',
    'unicorn/no-unsafe-regex': 'error',
    'unicorn/no-unused-properties': 'error',
    'unicorn/no-zero-fractions': 'error',
    'unicorn/number-literal-case': 'error',
    'unicorn/prefer-add-event-listener': 'error',
    'unicorn/prefer-event-key': 'error',
    'unicorn/prefer-exponentiation-operator': 'error',
    'unicorn/prefer-flat-map': 'error',
    'unicorn/prefer-includes': 'error',
    'unicorn/prefer-node-append': 'error',
    'unicorn/prefer-node-remove': 'error',
    'unicorn/prefer-query-selector': 'error',
    'unicorn/prefer-spread': 'error',
    'unicorn/prefer-starts-ends-with': 'error',
    'unicorn/prefer-text-content': 'error',
    'unicorn/prefer-type-error': 'error',
    'unicorn/prevent-abbreviations': 0,
    'unicorn/regex-shorthand': 'error',
    'unicorn/throw-new-error': 'error',

    // custom rules
    'no-warning-comments': [2, { terms: ['@fixme'], location: 'anywhere' }],
    'no-console': ['error', { allow: ['warn', 'error'] }],

    // prettier-specific rules
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        singleQuote: true,
        printWidth: 80,
      },
    ],
  },
};
