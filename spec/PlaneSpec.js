'use strict';

describe('Plane', function() {
  describe('#setLanded', function() {
    it('sets landed to true', function() {
      plane.setLanded();
      expect(plane.isLanded()).toEqual(true);
    });
  });
  describe('#isLanded', function() {
    it('returns false by default', function() {
      expect(plane.isLanded()).toEqual(false);
    });
  });
  describe('#takeOff', function() {
    it('sets landed to false', function() {
      plane.setLanded();
      plane.takeOff();
      expect(plane.isLanded()).toEqual(false);
    });
  });
});
