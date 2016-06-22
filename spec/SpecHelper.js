beforeEach(function () {
  plane = new Plane;
  weather = new Weather;
  airport = new Airport(weather);

  /*
  airportSpy allows us to create a 'fake' plane object which does nothing
  other than knowing its an object. We then pass 'setLanded' to the spy, informing
  it that 'setLanded' is a valid method call and should be tracked.
  */

  planeSpy = jasmine.createSpyObj('planeSpy', ['setLanded', 'takeOff']);
  weatherSpy = jasmine.createSpyObj('weatherSpy', ['current']);
  spyAirport = new Airport(weatherSpy);
  spyOn(weather, 'current').and.returnValue('sunny')
});
