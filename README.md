# deromanize [![NPM version](https://badge.fury.io/js/deromanize.svg)](http://badge.fury.io/js/deromanize)

> Convert roman numerals to arabic numbers (useful for books, outlines, documentation, slide decks, etc)

Based on this [blog post](http://blog.stevenlevithan.com/archives/javascript-roman-numeral-converter) by [Steven Levithan](https://github.com/slevithan).

## Install
#### Install with [npm](npmjs.org):

```bash
npm i deromanize --save-dev
```

## Run tests

Tests [from 1 to 2100](./test.js)

```bash
npm test
```

## Usage

```js
var deromanize = require('deromanize');
console.log(deromanize('LVIII'));
//=> 58
```

## Author

**Jon Schlinkert**
 
+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert) 

## License
Copyright (c) 2014 Jon Schlinkert, contributors.  
Released under the MIT license

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on September 10, 2014._