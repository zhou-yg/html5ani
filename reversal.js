(function() {
  var imgRa;

  window.upDown = function() {
    return console.log('upDown');
  };

  imgRa = new Image();

  imgRa.src = 'images/ra.png';

  imgRa.onload = function() {
    return cx.drawImage(imgRa, 100, 100, 100, 95);
  };

}).call(this);
