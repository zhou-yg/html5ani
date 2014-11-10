imgX = imgY = 100
imgW = 100
imgH = 95

getImgData = ->
  imgData = cx.getImageData imgX,imgY,imgW,imgH
  console.log imgData

imgRa = new Image()
imgRa.src = 'images/ra.png'
imgRa.onload = ->
  cx.drawImage imgRa,imgX,imgY,imgW,imgH

  do getImageData


window.upDown = ->
  console.log 'upDown'