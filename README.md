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

Create or update the `.eslintrc` file in the root of your directory and extend `cratebind`. You can omit the `eslint-config-` prefix:

```json
{
    "extends": ["cratebind"]
}
```

Then overwrite rules as needed:

```js
{
    "extends": ["cratebind"],
    "rules": {
        // 0 is ignore, 1 is warning, 2 is error
        "react/prop-types": 0
    }
}
```

## NPM Script

It's recommended to add a `lint` script to your NPM scripts:

```js
{
    "scripts": {
        // --cache flag improves performance, --fix will autofix fixable issues
        "lint": "eslint --cache \"**/*.js\" --fix"
    }
}
```

## Git Hooks

It's also highly recommended to use [Husky](https://github.com/typicode/husky) and [Lint Staged](https://github.com/okonet/lint-staged) to lint your code before committing:

1. Install Husky and Lint Staged
```bash
yarn add -D husky lint-staged
```

2. Add these to your `package.json`
```json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.+(js|ts|tsx)": [
      "eslint --cache --fix --quiet",
      "git add"
    ]
  }
}
```

This combination is