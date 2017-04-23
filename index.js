/*!
 * deromanize <https://github.com/jonschlinkert/deromanize>
 * Inspired by http://bit.ly/1weeOfY
 *
 * Copyright (c) 2014, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

var numerals = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

module.exports = function(roman) {
  roman = roman.toUpperCase().split('');
  var num = 0;
  var val = 0;

  while (roman.length) {
    val = numerals[roman.shift()];
    num += val * (val < numerals[roman[0]] ? -1 : 1);
  }
  return num;
};
