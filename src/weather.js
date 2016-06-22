var Weather = function() {

};

Weather.prototype = {
  current: function() {
    if (getRandomInt(0,3) < 2) {
      return 'sunny';
    } else {
      return 'stormy';
    }
  }
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
