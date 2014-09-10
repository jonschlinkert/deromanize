/*!
 * deromanize <https://github.com/jonschlinkert/deromanize>
 * Based on http://bit.ly/1weeOfY
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

module.exports = function(roman) {
  roman = roman.toUpperCase().split('');
  var num = 0;
  var val = 0;

  var lookup = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  while (roman.length) {
    val = lookup[roman.shift()];
    num += val * (val < lookup[roman[0]] ? -1 : 1);
  }

  return num;
};