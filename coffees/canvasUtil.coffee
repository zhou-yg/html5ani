#translate dec to hex
#10进制转16
dec2hex = (decs...)->
  result = []
  for c in decs
    if typeof c is 'number' and 0<=c<=255
      result.push parseInt c
      .toString 16
  if result.length is 1
    return result[0]
  return result

#color2 覆盖 color1 的叠加算法
colorAdd = (_colors1,_colors2) ->
  if _colors1.length is _colors2.length == 4
    resultColor = []
    alpha = _colors2[3] / 255
    for i in [0..2]
      c1 = _colors1[i]
      c2 = _colors2[i]
      c = c1 * (1-alpha) + c2 * alpha
      resultColor.push parseInt c

  if resultColor then resultColor.push 255

  return resultColor

class CanvasGraphics
  constructor:(@name)->

  #有色部分将渐变至白色
  #255 == 17*5*3 == 51*5 == 17*15(S)
  gradualToWhite:(_imageData,_cb) ->
    alpha = 5
    num   = 1
    #1000/17帧
    numMax = 51
    speed = parseInt 1000/numMax
    originData = _imageData.data
    resultData = cx.createImageData imgW,imgH
    task = ->
      if num <= numMax
        coverColor = [255,255,255,alpha*num]

        for i in [0..originData.length]
          if (i+1)%4 is 0

            r = originData[i-3]
            g = originData[i-2]
            b = originData[i-1]
            a = originData[i]

            if r || g || b
              originColor = [r,g,b,a]
              resultColor = colorAdd originColor,coverColor

              resultData.data[i-3] = resultColor[0]
              resultData.data[i-2] = resultColor[1]
              resultData.data[i-1] = resultColor[2]
              resultData.data[i]   = resultColor[3]

        num++
        if _cb
          _cb resultData,num,numMax
        setTimeout task,speed

    task()

window.canvasGraphics = new CanvasGraphics('graphics')