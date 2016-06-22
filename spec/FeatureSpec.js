'use strict';

describe('Feature Test:', function(){
  it('airports can instruct a plane to land', function(){
    airport.land(plane);
    expect(airport.planes).toContain(plane);
    expect(plane.isLanded()).toEqual(true);
  });
  it('airports can instruct a plane to take off', function(){
    airport.land(plane);
    airport.takeOff(plane);
    expect(airport.planes).not.toContain(plane);
    expect(plane.isLanded()).toEqual(false);
  });
});
