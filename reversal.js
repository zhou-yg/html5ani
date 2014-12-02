(function() {
  var fillARect, getImgData, imgData, imgRa;

  window.imgX = window.imgY = 100;

  window.imgW = 100;

  window.imgH = 95;

  imgData = [];

  box.onclick = function(_e) {
    var c, colorDec, currentColorSpan, i, imagedata, x, y, _i, _len, _ref;
    currentColorSpan = document.getElementById('currentColor');
    x = _e.pageX - boxLeft;
    y = _e.pageY - boxTop;
    colorDec = '';
    imagedata = cx.getImageData(x, y, 1, 1);
    _ref = imagedata.data;
    for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
      c = _ref[i];
      colorDec = colorDec + (i === 0 ? c : '-' + c);
    }
    return currentColorSpan.innerHTML = colorDec;
  };

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

  getImgData = function() {
    imgData = cx.getImageData(0, 0, imgW, imgH);
    return imgData;
  };

  imgRa = new Image();

  imgRa.src = 'images/ra.png';

  imgRa.onload = function() {
    var imageData;
    cx.drawImage(imgRa, 0, 0, imgW, imgH);
    imageData = getImgData();
    cx.translate(2 * imgX, 2 * imgY);
    return canvasGraphics.gradualToWhite(imageData, function(_resultData, i, max) {
      rotateCx.putImageData(_resultData, 0, 0);
      cx.clearRect(-imgX, -imgY, 2 * imgW, 2 * imgH);
      cx.save();
      cx.rotate(3 * i / max * Math.PI);
      cx.drawImage(rotateBox, -imgW / 2, -imgH / 2);
      return cx.restore();
    });
  };

  window.upDown = function() {
    return console.log('upDown');
  };

}).call(this);
