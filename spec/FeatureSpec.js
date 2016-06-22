'use strict';

describe('Feature Test:', function(){
  it('airports can instruct a plane to land', function(){
    airport.land(plane);
    expect(airport.planes).toContain(plane);
    expect(plane.isLanded()).toEqual(true);
  });
});
