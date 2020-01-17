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
        // 0 is ignore, 1 is warning, 2 is error
        "react/prop-types": 0
    }
}
```

To lint your project, just run:

```bash
# NPX runs the eslint in your ./node_modules/.bin
npx eslint 'src/**/*.{js,jsx}' # Replace this path with the path you want to lint

yarn eslint 'src/**/*.{js,jsx}'
```