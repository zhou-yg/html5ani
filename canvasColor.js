(function() {
  var colorArr, colorBlue, colorBlue2, colorGreen, colorRed, colorRed2, drawRect, rectH, rectW, rectX, rectY;

  rectX = rectY = 0;

  rectW = rectH = 100;

  colorRed = '#ff0000';

  colorRed2 = '#ff7070';

  colorGreen = '#00ff00';

  colorGreen = '#70ff70';

  colorBlue = '#0000ff';

  colorBlue2 = '#7070ff';

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

  colorArr = [colorRed, colorGreen, colorBlue];

  drawRect = function(_x, _y, _color, _alpha) {
    if (_x == null) {
      _x = 0;
    }
    if (_y == null) {
      _y = 0;
    }
    if (_color == null) {
      _color = '#000000';
    }
    if (_alpha == null) {
      _alpha = 1;
    }
    cx.save();
    cx.globalAlpha = _alpha;
    cx.fillStyle = _color;
    cx.fillRect(_x, _y, rectW, rectH);
    cx.stroke();
    return cx.restore();
  };

  drawRect(0, 0, colorRed);

  drawRect(rectW / 2, 0, '#ff00ff', 0.5);

  drawRect(0, rectW, colorRed2);

  drawRect(rectW / 2, rectW, '#ffffff', 0.5);

  drawRect(0, rectW * 2, colorGreen);

  drawRect(rectW / 2, rectW * 2, '#ff0000', 0.5);

  drawRect(0, rectW * 3, colorBlue);

  drawRect(rectW / 2, rectW * 3, '#ffffff', 0.5);

  drawRect(0, rectW * 4, colorBlue2);

  drawRect(rectW / 2, rectW * 4, '#ffffff', 0.5);

}).call(this);
