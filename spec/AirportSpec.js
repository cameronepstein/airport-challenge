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
});
