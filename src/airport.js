var Airport = function() {
  this.planes = [];
};

Airport.prototype = {
  land: function(plane) {
    plane.setLanded();
    this.planes.push(plane);
  },
  takeOff: function(plane) {
    plane.takeOff();
    this.planes.pop();
  }
};
