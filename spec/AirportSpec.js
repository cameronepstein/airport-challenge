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
    it('makes a call to the weather before landing planes', function() {
      spyAirport.land(planeSpy);
      expect(weatherSpy.current).toHaveBeenCalled();
    });
    it('raises error when weather is stormy', function() {
      weather.current = null;
      spyOn(weather, 'current').and.returnValue('stormy');
      expect(function() {airport.land(planeSpy)}).toThrowError('Too stormy');
    });
    it('raises error when full', function() {
      for(var i = 0; i < 10; i++){
        airport.land(planeSpy);
      }
      expect(function() {airport.land(planeSpy)}).toThrowError('Airport full');
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
    it('makes a call to the weather before taking off planes', function() {
      spyAirport.land(planeSpy);
      spyAirport.takeOff(planeSpy);
      expect(weatherSpy.current).toHaveBeenCalled();
    });
    it('raises error when weather is stormy', function() {
      airport.land(planeSpy);
      weather.current = null;
      spyOn(weather, 'current').and.returnValue('stormy');
      expect(function() {airport.takeOff(planeSpy)}).toThrowError('Too stormy');
    });
  });
  describe('Set capacity', function() {
    it('allows default to change', function() {
      airport.setCapacity(100);
      expect(airport._capacity).toEqual(100);
    });
  });
});
