'use strict';

describe('Airport', function() {
  describe('Land', function() {
    it('calls isLanded on plane', function() {
      airport.land(planeSpy);
      expect(planeSpy.setLanded).toHaveBeenCalled();
    });
    it('adds the plane to the array', function() {
      airport.land(planeSpy);
      expect(airport.planes).toContain(planeSpy);
    });
  });
  describe('Take off', function() {
    it('calls takeOff on a plane', function() {
      airport.land(planeSpy);
      airport.takeOff(planeSpy);
      expect(planeSpy.takeOff).toHaveBeenCalled();
    });
    it('removes the plane from the array', function() {
      airport.land(planeSpy);
      airport.takeOff(planeSpy);
      expect(airport.planes).not.toContain(planeSpy);
    });
  });
});
