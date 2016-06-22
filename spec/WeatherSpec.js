'use strict';

describe('Weather', function() {
  var weather2 = new Weather;
  describe('Current', function() {
    it('returns sunny', function() {
      spyOn(Math, 'random').and.returnValue(0);
      expect(weather2.current()).toEqual('sunny');
    });
    it('returns stormy', function() {
      spyOn(Math, 'random').and.returnValue(1);
      expect(weather2.current()).toEqual('stormy');
    });
  });
});
