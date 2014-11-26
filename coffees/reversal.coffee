imgX = imgY = 100
imgW = 100
imgH = 95
imgData = []

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


aniToWhite = (_percent)->
  console.log _percent
  if _percent>1
    return

  allDots = imgW * imgH * 4

  for i in [0..allDots]

    if (i+1)%4 is 0
      r = imgData.data[i-3]
      g = imgData.data[i-2]
      b = imgData.data[i-1]
      a = imgData.data[i]

      if r || g || b
        imgData.data[i-3] = 255
        imgData.data[i-2] = 255
        imgData.data[i-1] = 255

  cx.save()
  cx.globalAlpha = 0.5
  cx.putImageData imgData,imgX*2,imgY
  cx.restore()


getImgData = ->
  imgData = cx.getImageData imgX,imgY,imgW,imgH

  aniToWhite 0

imgRa = new Image()
imgRa.src = 'images/ra.png'
imgRa.onload = ->
  cx.drawImage imgRa,imgX,imgY,imgW,imgH

  getImgData()

  fillARect()

window.upDown = ->
  console.log 'upDown'