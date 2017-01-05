# parse-plain-qs [![Build Status](https://travis-ci.org/SoftBind/parse-plain-qs.svg?branch=master)](https://travis-ci.org/SoftBind/parse-plain-qs)

> Parse plain querystring

## Install

```
$ npm install --save parse-plain-qs
```


## Usage

```js
const parseURI = require('replace-string');

const hash = '?foo=bar&bar=foo';

parseURI(hash);
//=> { foo: 'bar', bar: 'foo' }
```

## License

MIT © [Soft Bind](https://soft-bind.com)
