// Generated by CoffeeScript 1.8.0
(function() {
  var getImgData, imgH, imgRa, imgW, imgX, imgY;

  imgX = imgY = 100;

  imgW = 100;

  imgH = 95;

  getImgData = function() {
    var imgData;
    imgData = cx.getImageData(imgX, imgY, imgW, imgH);
    return console.log(imgData);
  };

  imgRa = new Image();

  imgRa.src = 'images/ra.png';

  imgRa.onload = function() {
    cx.drawImage(imgRa, imgX, imgY, imgW, imgH);
    return getImageData();
  };

  window.upDown = function() {
    return console.log('upDown');
  };

}).call(this);

//# sourceMappingURL=reversal.js.map
