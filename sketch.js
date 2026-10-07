let images = []
let imageCount = 6

let topCurrentImage
let middleCurrentImage
let bottomCurrentImage

async function setup() {
  createCanvas(windowWidth, windowHeight);

  images[0] = await loadImage('image1.jpg')
  images[1] = await loadImage('image2.jpg')
  images[2] = await loadImage('image3.jpg')
  images[3] = await loadImage('image4.jpg')
  images[4] = await loadImage('image5.jpg')
  images[5] = await loadImage('image6.jpg')

  for(let i = 0; i < imageCount; i ++) {
    images[i].resize(width, height)
  }

  topCurrentImage = images[0]
  middleCurrentImage = images[0]
  bottomCurrentImage = images[0]
}

function draw() {
  // background(220);

  let top = topCurrentImage.get(0, 0, width , height / 3)
  let middle = middleCurrentImage.get(0, height / 3, width, height / 3)
  let bottom = bottomCurrentImage.get(0, height - height / 3, width , height / 3)
  
  image(top, 0, 0)
  image(middle, 0, height / 3)
  image(bottom, 0, height - height / 3)
}

function changeImage(target) {
  let currentIndex = images.indexOf(target)
  
  if(mouseX > width / 2) {
    if(currentIndex != imageCount - 1) {
      target = images[currentIndex + 1]     
    } else {
      target = images[0]
    }
  } else {
    if(currentIndex != 0) {
      target = images[currentIndex - 1]
    } else {
      target = images[imageCount - 1]
    }
  }

  return target
}

function mousePressed() {
  if(mouseY < height / 3) {
    topCurrentImage = changeImage(topCurrentImage)
  } else if (mouseY > height / 3 && mouseY < height - height / 3) {
    middleCurrentImage = changeImage(middleCurrentImage)
  } else {
    bottomCurrentImage = changeImage(bottomCurrentImage)
  }
}
