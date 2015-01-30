var assert = require('assert');
var hslRegex = require('..');

var hslStrings = [
  'hsl(111, 12.343%, 0.9%)',
  'hsl(123, 45%, 67%)',
  'hsl(1, 1.111%, 1.1111%)',
  'hsl(1, .111%, .1111%)'
];

var invalidHslStrings= [
  'hsl(,,,)',
  'hsl(12,,)',
  'hsl(1, 1.111%, 1.1111%) ',
  '   hsl(1, 1.111%, 1.1111%)'
];

describe('hsl-regex', function() {

  describe('exact: true', function() {

    it('should return a regex that matches exact hsl strings', function() {
      hslStrings.forEach(function(hsl) {
        assert.ok(hslRegex({ exact: true }).test(hsl));
      });
    });

    it('should return a regex that does not matche invalid hsl strings', function() {
      invalidHslStrings.forEach(function(invalidHsl) {
        assert.ok(!hslRegex({ exact: true }).test(invalidHsl));
      });
    });
  });
});
