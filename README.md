# eslint-plugin-cratebind

Cratebind ES Lint Config

## Installation

1. Install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
# OR
$ yarn add eslint
```

Next, install `eslint-config-cratebind`:

```
$ npm install eslint-config-cratebind --save-dev
# OR
$ yarn add eslint-config-cratebind
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-cratebind` globally.

## Usage

Add `cratebind` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "extends": [
        "cratebind"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "cratebind/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





