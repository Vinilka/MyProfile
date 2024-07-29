import { Player } from './Player';
import { DialogueBubble } from './DialogueBubble';
import { Platform } from './Platform';
import { GenericObject } from './GenericObject';
import { createImage } from './createImage';

import platform from '../img/platform.png'
import hills from '../img/hills.png'
import background from '../img/background.png'
import platformSmallTall from '../img/platformSmallTall.png'
import dialogueBoxRight from '../img/dialogueBoxRight.png'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

//canvas.width = 1024
//canvas.height = 576
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;


const gravity = 1.1

let platformImage = createImage(platform)
let platformSmallTallImage = createImage(platformSmallTall)
  
let player = new Player({ canvas,context: c, gravity })
let platforms = []

let genericObject = []

let lastKey
const keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  },
  up: {
    pressed: false
  }
}

let scrollPlatform = 0
  
// Create an instance of MessageBubble
let dialogueBubble = new DialogueBubble(dialogueBoxRight, 200, 60, c);
let messageShown = false;


// function after dying//
function init() {

  platformImage = createImage(platform)
  
  player = new Player({ canvas, context: c, gravity })
  platforms = [
    new Platform({
    x: platformImage.width * 4 + 250,
    y: 270,
      image: platformSmallTallImage,
      context:c
  }),
    new Platform({
    x: -1,
    y: 470,
      image: platformImage,
      context:c
  }),
  new Platform({
    x: platformImage.width - 1,
    y: 470,
    image: platformImage,
    context:c
  }),
  new Platform({
    x: platformImage.width * 2 + 100,
    y: 470,
    image: platformImage,
    context:c
  }),
    new Platform({
    x: platformImage.width * 3,
    y: 470,
      image: platformImage,
      context:c
    }),
  new Platform({
    x: platformImage.width * 4,
    y: 470,
    image: platformImage,
    context:c
  }),
  new Platform({
    x: platformImage.width * 5 + 600,
    y: 470,
    image: platformImage,
    context:c
  })
  ]


genericObject = [
  new GenericObject({
    x: 0,
    y: 0,
    image: createImage(background),
    context:c
  }),
  new GenericObject({
    x: 0,
    y: 0,
    image: createImage(hills),
    context:c
  })
]
scrollPlatform = 0
}

function animate() {
  requestAnimationFrame(animate)
  c.fillStyle = 'white'
  c.fillRect(0, 0, canvas.width, canvas.height)


  genericObject.forEach(genericObject => {
    genericObject.draw()
  })
  
  dialogueBubble.draw(); // draw the message bubble

  platforms.forEach(platform => {
    platform.draw()
  })

  player.updatePlayerFrame()
  player.update()

  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = player.speed
  }
  else if ((keys.left.pressed && player.position.x > 100) || (keys.left.pressed && scrollPlatform === 0 && player.position.x > 0)) {
    player.velocity.x = -player.speed
  }
  else {
    player.velocity.x = 0
    if (keys.right.pressed) {
      scrollPlatform += player.speed
      platforms.forEach(platform => {
        platform.position.x -= player.speed
      })
      genericObject.forEach(genericObject => {
      genericObject.position.x -= player.speed * .66
      })
    } else if (keys.left.pressed && scrollPlatform > 0) {
      scrollPlatform -= player.speed
      platforms.forEach(platform => {
        platform.position.x += player.speed
      })
      genericObject.forEach(genericObject => {
        genericObject.position.x += player.speed * .66
        })
    }
  }


  // platfrom collision //
  platforms.forEach(platform => {
    if (player.position.y + player.height <= platform.position.y
    && player.position.y + player.height + player.velocity.y >= platform.position.y
    && player.position.x + player.width >= platform.position.x
    && player.position.x <= platform.position.x + platform.width) {
    player.velocity.y = 0
    player.jumpCount = 0;
    }
  })


  // sprite switch //
  if (keys.up.pressed) {
     player.frames = 1;
    if (lastKey === 'right') {
      player.currentSprite = player.sprites.jump.right;
      player.currentCropWidth = player.sprites.jump.cropWidth;
    } else if (lastKey === 'left') {
      player.currentSprite = player.sprites.jump.left;
      player.currentCropWidth = player.sprites.jump.cropWidth;
    }
  } else if (
    keys.right.pressed &&
    lastKey === 'right' && player.currentSprite !== player.sprites.run.right) {
    player.frames = 1
    player.currentSprite = player.sprites.run.right
    player.currentCropWidth = player.sprites.run.cropWidth
  } else if (
    keys.left.pressed &&
    lastKey === 'left' && player.currentSprite !== player.sprites.run.left) {
    player.frames = 1
    player.currentSprite = player.sprites.run.left
    player.currentCropWidth = player.sprites.run.cropWidth
  } else if (
    !keys.left.pressed &&
    lastKey === 'left' && player.currentSprite !== player.sprites.stand.left) {
    player.frames = 1
    player.currentSprite = player.sprites.stand.left
    player.currentCropWidth = player.sprites.stand.cropWidth
  } else if (
    !keys.right.pressed &&
    lastKey === 'right' && player.currentSprite !== player.sprites.stand.right) {
    player.frames = 1
    player.currentSprite = player.sprites.stand.right
    player.currentCropWidth = player.sprites.stand.cropWidth
  }

  if (player.position.x > 200 && !messageShown) {
    dialogueBubble.showMessage("Hello there! I'm Anastasia. Welcome to my game!");
    messageShown = true;
  }



// win condition //
  if (scrollPlatform > platformImage.width * 5 + 300) {
    console.log('you win')
  }
  
// lose condition //
  if (player.position.y > canvas.width) {
    init()
  }
}

init()
animate()

addEventListener('keydown', ({key}) => {
  switch (key) {

    case 'a':
    case 'ArrowLeft':
      keys.left.pressed = true
      lastKey = 'left'
      break
    
    case 's':
    case 'ArrowDown':
      break
    
    case 'd':
    case 'ArrowRight':
      keys.right.pressed = true
      lastKey = 'right'
      break
    
    case 'w':
    case 'ArrowUp':
      if (player.jumpCount < 2) {
        player.jumpCount++;
        keys.up.pressed = true
        player.velocity.y -= 18
        break
      }
    
  }
})

addEventListener('keyup', ({key}) => {
  switch (key) {

    case 'a':
    case 'ArrowLeft':
      keys.left.pressed = false
      break
    
    case 's':
    case 'ArrowDown':
      break
    
    case 'd':
    case 'ArrowRight':
      keys.right.pressed = false
      break
    
    case 'w':
    case 'ArrowUp':
      keys.up.pressed = false
      break
    
  }
})
