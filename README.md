# eslint-config-cratebind

Cratebind ES Lint Config

## Installation

1. Install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
# OR
$ yarn add eslint
```

2. Install `eslint-config-cratebind`:

```
$ npm install eslint-config-cratebind --save-dev
# OR
$ yarn add eslint-config-cratebind
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-config-cratebind` globally.

## Usage

Extend `cratebind` in your `.eslintrc` configuration file. You can omit the `eslint-config-` prefix:

```json
{
    "extends": ["cratebind"]
}
```

Then overwrite rules as needed:

```json
{
    "extends": ["cratebind"],
    "rules": {
        "cratebind/rule-name": 2
    }
}
```

To lint your project, just run:

```bash
# NPX runs the eslint in your ./node_modules/.bin
npx eslint 'src/**/*.{js,jsx}' # Replace this path with the path you want to lint

yarn eslint 'src/**/*.{js,jsx}'
```

## What's Included

```json
{
  "extends": [
    "airbnb",
    "prettier",
    "prettier/react"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 8,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "impliedStrict": true,
      "classes": true
    }
  },
  "env": {
    "browser": true,
    "node": true,
    "jquery": true,
    "jest": true
  },
  "rules": {
    "no-debugger": 0,
    "no-alert": 0,
    "no-unused-vars": [
      1,
      {
        "argsIgnorePattern": "res|next|^err"
      }
    ],
    "prefer-const": [
      "error",
      {
        "destructuring": "all"
      }
    ],
    "arrow-body-style": [
      2,
      "as-needed"
    ],
    "no-unused-expressions": [
      2,
      {
        "allowTaggedTemplates": true
      }
    ],
    "no-param-reassign": [
      2,
      {
        "props": false
      }
    ],
    "no-console": 0,
    "import/prefer-default-export": 0,
    "import": 0,
    "func-names": 0,
    "space-before-function-paren": 0,
    "comma-dangle": 0,
    "max-len": 0,
    "import/extensions": 0,
    "no-underscore-dangle": 0,
    "consistent-return": 0,
    "react/display-name": 1,
    "react/no-array-index-key": 0,
    "react/react-in-jsx-scope": 0,
    "react/prefer-stateless-function": 0,
    "react/forbid-prop-types": 0,
    "react/no-unescaped-entities": 0,
    "jsx-a11y/accessible-emoji": 0,
    "react/require-default-props": 0,
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ],
    "radix": 0,
    "no-shadow": [
      2,
      {
        "hoist": "all",
        "allow": [
          "resolve",
          "reject",
          "done",
          "next",
          "err",
          "error"
        ]
      }
    ],
    "quotes": [
      2,
      "single",
      {
        "avoidEscape": true,
        "allowTemplateLiterals": true
      }
    ],
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 80
      }
    ],
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/anchor-is-valid": [
      "warn",
      {
        "aspects": [
          "invalidHref"
        ]
      }
    ]
  },
  "plugins": [
    "prettier"
  ]
}
```