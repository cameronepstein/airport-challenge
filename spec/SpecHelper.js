beforeEach(function () {
  plane = new Plane;
  airport = new Airport;

  /*
  airportSpy allows us to create a 'fake' plane object which does nothing
  other than knowing its an object. We then pass 'setLanded' to the spy, informing
  it that 'setLanded' is a valid method call and should be tracked.
  */

  planeSpy = jasmine.createSpyObj('planeSpy', ['setLanded', 'takeOff']);
});
