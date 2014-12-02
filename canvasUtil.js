(function() {
  var CanvasGraphics, colorAdd, dec2hex,
    __slice = [].slice;

  dec2hex = function() {
    var c, decs, result, _i, _len;
    decs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    result = [];
    for (_i = 0, _len = decs.length; _i < _len; _i++) {
      c = decs[_i];
      if (typeof c === 'number' && (0 <= c && c <= 255)) {
        result.push(parseInt(c)).toString(16);
      }
    }
    if (result.length === 1) {
      return result[0];
    }
    return result;
  };

  colorAdd = function(_colors1, _colors2) {
    var alpha, c, c1, c2, i, resultColor, _i, _ref;
    if ((_colors1.length === (_ref = _colors2.length) && _ref === 4)) {
      resultColor = [];
      alpha = _colors2[3] / 255;
      for (i = _i = 0; _i <= 2; i = ++_i) {
        c1 = _colors1[i];
        c2 = _colors2[i];
        c = c1 * (1 - alpha) + c2 * alpha;
        resultColor.push(parseInt(c));
      }
    }
    if (resultColor) {
      resultColor.push(255);
    }
    return resultColor;
  };

  CanvasGraphics = (function() {
    function CanvasGraphics(name) {
      this.name = name;
    }

    CanvasGraphics.prototype.gradualToWhite = function(_imageData, _cb) {
      var alpha, num, numMax, originData, resultData, speed, task;
      alpha = 5;
      num = 1;
      numMax = 51;
      speed = parseInt(1000 / numMax);
      originData = _imageData.data;
      resultData = cx.createImageData(imgW, imgH);
      task = function() {
        var a, b, coverColor, g, i, originColor, r, resultColor, _i, _ref;
        if (num <= numMax) {
          coverColor = [255, 255, 255, alpha * num];
          for (i = _i = 0, _ref = originData.length; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
            if ((i + 1) % 4 === 0) {
              r = originData[i - 3];
              g = originData[i - 2];
              b = originData[i - 1];
              a = originData[i];
              if (r || g || b) {
                originColor = [r, g, b, a];
                resultColor = colorAdd(originColor, coverColor);
                resultData.data[i - 3] = resultColor[0];
                resultData.data[i - 2] = resultColor[1];
                resultData.data[i - 1] = resultColor[2];
                resultData.data[i] = resultColor[3];
              }
            }
          }
          num++;
          if (_cb) {
            _cb(resultData, num, numMax);
          }
          return setTimeout(task, speed);
        }
      };
      return task();
    };

    return CanvasGraphics;

  })();

  window.canvasGraphics = new CanvasGraphics('graphics');

}).call(this);
