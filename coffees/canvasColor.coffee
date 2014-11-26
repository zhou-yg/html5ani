rectX = rectY = 0
rectW = rectH = 100

colorRed = '#ff0000'
colorRed2 = '#ff7070'
colorGreen = '#00ff00'
colorGreen = '#70ff70'
colorBlue = '#0000ff'
colorBlue2 = '#7070ff'

box.onclick = (_e)->
  currentColorSpan = document.getElementById('currentColor')
  x = _e.pageX-boxLeft
  y = _e.pageY-boxTop

  colorDec = ''
  imagedata = cx.getImageData(x,y,1,1)
  for c,i in imagedata.data
      colorDec =  colorDec + if i is 0 then c else '-'+c

  currentColorSpan.innerHTML = colorDec

colorArr = [colorRed,colorGreen,colorBlue]

drawRect = (_x=0,_y=0,_color='#000000',_alpha=1)->
  cx.save()
  cx.globalAlpha = _alpha
  cx.fillStyle = _color
  cx.fillRect(_x,_y,rectW,rectH)
  cx.stroke()
  cx.restore()

drawRect(0,0,colorRed)
drawRect(rectW/2,0,'#ffffff',0.5)

drawRect(0,rectW,colorRed2)
drawRect(rectW/2,rectW,'#ffffff',0.5)


drawRect(0,rectW*2,colorGreen)
drawRect(rectW/2,rectW*2,'#ffffff',0.5)

drawRect(0,rectW*3,colorBlue)
drawRect(rectW/2,rectW*3,'#ffffff',0.5)

drawRect(0,rectW*4,colorBlue2)
drawRect(rectW/2,rectW*4,'#ffffff',0.5)