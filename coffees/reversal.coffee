window.imgX = window.imgY = 100
window.imgW = 100
window.imgH = 95
imgData = []

box.onclick = (_e)->
  currentColorSpan = document.getElementById('currentColor')
  x = _e.pageX-boxLeft
  y = _e.pageY-boxTop

  colorDec = ''
  imagedata = cx.getImageData(x,y,1,1)

  for c,i in imagedata.data
    colorDec =  colorDec + if i is 0 then c else '-'+c
  currentColorSpan.innerHTML = colorDec

fillARect = ->

  tx = ty = 0
  tw = th = 75

  cx.save()
  cx.globalAlpha = 0.5
  cx.fillStyle ='#ffffff'
  cx.fillRect(imgX,imgY,tw,th)
  cx.stroke()
  cx.restore()

  #get rect


getImgData = ->
  imgData = cx.getImageData 0,0,imgW,imgH
  #aniToWhite 0
  return imgData

imgRa = new Image()
imgRa.src = 'images/ra.png'
imgRa.onload = ->
  cx.drawImage imgRa,0,0,imgW,imgH

  imageData = getImgData()

  cx.translate 2*imgX,2*imgY
  canvasGraphics.gradualToWhite imageData,(_resultData,i,max)->
    rotateCx.putImageData _resultData,0,0
    cx.clearRect -imgX, -imgY, 2*imgW, 2*imgH
    cx.save()
    cx.rotate 3*i/max*Math.PI
    cx.drawImage rotateBox, -imgW/2, -imgH/2
    cx.restore()

window.upDown = ->
  console.log 'upDown'