var Airport = function() {
  this.planes = [];
};

Airport.prototype = {
  land: function(plane) {
    plane.setLanded();
    this.planes.push(plane);
  }
};
