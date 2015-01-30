'use strict';

module.exports = function hslRegex(options) {
  options = options || {};

  return options.exact ?
    /hsl\(\s*(\d+)\s*,\s*(\d+(?:\.\d+)?%)\s*,\s*(\d+(?:\.\d+)?%)\)/ :
    /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g;
}
