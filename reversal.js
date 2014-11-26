(function() {
  var aniToWhite, fillARect, getImgData, imgData, imgH, imgRa, imgW, imgX, imgY;

  imgX = imgY = 100;

  imgW = 100;

  imgH = 95;

  imgData = [];

  fillARect = function() {
    var th, tw, tx, ty;
    tx = ty = 0;
    tw = th = 75;
    cx.save();
    cx.globalAlpha = 0.5;
    cx.fillStyle = '#ffffff';
    cx.fillRect(imgX, imgY, tw, th);
    cx.stroke();
    return cx.restore();
  };

  aniToWhite = function(_percent) {
    var a, allDots, b, g, i, r, _i;
    console.log(_percent);
    if (_percent > 1) {
      return;
    }
    allDots = imgW * imgH * 4;
    for (i = _i = 0; 0 <= allDots ? _i <= allDots : _i >= allDots; i = 0 <= allDots ? ++_i : --_i) {
      if ((i + 1) % 4 === 0) {
        r = imgData.data[i - 3];
        g = imgData.data[i - 2];
        b = imgData.data[i - 1];
        a = imgData.data[i];
        if (r || g || b) {
          imgData.data[i - 3] = 255;
          imgData.data[i - 2] = 255;
          imgData.data[i - 1] = 255;
        }
      }
    }
    cx.save();
    cx.globalAlpha = 0.5;
    cx.putImageData(imgData, imgX * 2, imgY);
    return cx.restore();
  };

  getImgData = function() {
    imgData = cx.getImageData(imgX, imgY, imgW, imgH);
    return aniToWhite(0);
  };

  imgRa = new Image();

  imgRa.src = 'images/ra.png';

  imgRa.onload = function() {
    cx.drawImage(imgRa, imgX, imgY, imgW, imgH);
    getImgData();
    return fillARect();
  };

  window.upDown = function() {
    return console.log('upDown');
  };

}).call(this);
