var Airport = function(weather = new Weather) {
  this.planes = [];
  this.weather = weather;
  this._capacity = 10;
};

Airport.prototype = {
  land: function(plane) {
    if(this.planes.length === this._capacity) {throw new Error('Airport full')}
    if(this.weather.current() === 'stormy') {
      throw new Error('Too stormy')
    } else {
      plane.setLanded();
      this.planes.push(plane);
    }
  },

  takeOff: function(plane) {
    if(this.weather.current() === 'stormy') {
      throw new Error('Too stormy')
    } else {
      plane.takeOff();
      this.planes.pop()
    }
  },

  setCapacity: function(number) {
    this._capacity = number;
  }
}
