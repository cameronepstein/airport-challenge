var Plane = function() {
  this._landed = false;
};

Plane.prototype = {
  setLanded: function() {
    this._landed = true;
  },
  isLanded: function() {
    return this._landed;
  }
};
