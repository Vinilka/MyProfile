/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/background.png":
/*!********************************!*\
  !*** ./src/img/background.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "5550b875973682fb4d8c8ca51846fe14.png");

/***/ }),

/***/ "./src/img/dialogueBoxRight.png":
/*!**************************************!*\
  !*** ./src/img/dialogueBoxRight.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e468a3296783b2e926f8fb3d18d677a5.png");

/***/ }),

/***/ "./src/img/hills.png":
/*!***************************!*\
  !*** ./src/img/hills.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "681a974cae093c13c6c7e79b82eaeece.png");

/***/ }),

/***/ "./src/img/platform.png":
/*!******************************!*\
  !*** ./src/img/platform.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "892f334b75f0532aae9a72a0aa6f0cdd.png");

/***/ }),

/***/ "./src/img/platformSmallTall.png":
/*!***************************************!*\
  !*** ./src/img/platformSmallTall.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d2028702c47bd74db31eeff3bc00ea73.png");

/***/ }),

/***/ "./src/img/playerJumpLeft.png":
/*!************************************!*\
  !*** ./src/img/playerJumpLeft.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0378d0c2ccd1158f5bd0ace77aeec799.png");

/***/ }),

/***/ "./src/img/playerJumpRight.png":
/*!*************************************!*\
  !*** ./src/img/playerJumpRight.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "bd49afb545f44e42eac0c98a92b51f37.png");

/***/ }),

/***/ "./src/img/playerMoveLeft.png":
/*!************************************!*\
  !*** ./src/img/playerMoveLeft.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "63d4193bf8894178713d320b38918a76.png");

/***/ }),

/***/ "./src/img/playerMoveRight.png":
/*!*************************************!*\
  !*** ./src/img/playerMoveRight.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "de0b967b46f6365a5b5a4dcb693ef2fb.png");

/***/ }),

/***/ "./src/img/playerStandLeft.png":
/*!*************************************!*\
  !*** ./src/img/playerStandLeft.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "4ae46e67f8bfa26c0a69ad9815b06332.png");

/***/ }),

/***/ "./src/img/playerStandRight.png":
/*!**************************************!*\
  !*** ./src/img/playerStandRight.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "8eb99ca36093454aedf5fea97184f685.png");

/***/ }),

/***/ "./src/js/DialogueBubble.js":
/*!**********************************!*\
  !*** ./src/js/DialogueBubble.js ***!
  \**********************************/
/*! exports provided: DialogueBubble */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogueBubble", function() { return DialogueBubble; });
/* harmony import */ var _createImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createImage */ "./src/js/createImage.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var DialogueBubble = /*#__PURE__*/function () {
  function DialogueBubble(imageSrc, x, y, context) {
    _classCallCheck(this, DialogueBubble);

    this.context = context;
    this.image = Object(_createImage__WEBPACK_IMPORTED_MODULE_0__["createImage"])(imageSrc);
    this.x = x;
    this.y = y;
    this.width = 280;
    this.height = 180;
    this.padding = 10;
    this.horizontalPadding = 26;
    this.messageText = "";
    this.messageIndex = 0;
    this.messageVisible = false;
    this.typingSpeed = 50;
  }

  _createClass(DialogueBubble, [{
    key: "showMessage",
    value: function showMessage(text) {
      this.messageText = text;
      this.messageIndex = 0;
      this.messageVisible = true;
      this.typeMessage();
    }
  }, {
    key: "typeMessage",
    value: function typeMessage() {
      var _this = this;

      if (this.messageIndex < this.messageText.length) {
        this.messageIndex++;
        setTimeout(function () {
          return _this.typeMessage();
        }, this.typingSpeed);
      }
    }
  }, {
    key: "draw",
    value: function draw() {
      if (this.messageVisible) {
        this.context.drawImage(this.image, this.x, this.y, this.width, this.height);
        this.context.fillStyle = "#1d6c7a";
        this.context.font = "18px PatrickHand";
        this.wrapText(this.messageText.slice(0, this.messageIndex), this.x + this.horizontalPadding, this.y + this.padding, this.width - this.horizontalPadding * 2, 20);
      }
    }
  }, {
    key: "wrapText",
    value: function wrapText(text, x, y, maxWidth, lineHeight) {
      var words = text.split(' ');
      var line = '';
      var lines = [];
      var testLine = '';
      var metrics = null;
      var testWidth = 0;

      for (var i = 0; i < words.length; i++) {
        testLine = line + words[i] + ' ';
        metrics = this.context.measureText(testLine);
        testWidth = metrics.width;

        if (testWidth > maxWidth && i > 0) {
          lines.push(line);
          line = words[i] + ' ';
        } else {
          line = testLine;
        }
      }

      lines.push(line);
      var totalHeight = lines.length * lineHeight;
      var offsetY = y + (this.height - totalHeight) / 2 + lineHeight;

      for (var _i = 0; _i < lines.length; _i++) {
        this.context.fillText(lines[_i], x, offsetY);
        offsetY += lineHeight;
      }
    }
  }]);

  return DialogueBubble;
}();

/***/ }),

/***/ "./src/js/GenericObject.js":
/*!*********************************!*\
  !*** ./src/js/GenericObject.js ***!
  \*********************************/
/*! exports provided: GenericObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericObject", function() { return GenericObject; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GenericObject = /*#__PURE__*/function () {
  function GenericObject(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image,
        context = _ref.context;

    _classCallCheck(this, GenericObject);

    this.context = context;
    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(GenericObject, [{
    key: "draw",
    value: function draw() {
      this.context.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return GenericObject;
}();

/***/ }),

/***/ "./src/js/Platform.js":
/*!****************************!*\
  !*** ./src/js/Platform.js ***!
  \****************************/
/*! exports provided: Platform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Platform", function() { return Platform; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image,
        context = _ref.context;

    _classCallCheck(this, Platform);

    this.context = context;
    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      this.context.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return Platform;
}();

/***/ }),

/***/ "./src/js/Player.js":
/*!**************************!*\
  !*** ./src/js/Player.js ***!
  \**************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony import */ var _createImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createImage */ "./src/js/createImage.js");
/* harmony import */ var _img_playerStandRight_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/playerStandRight.png */ "./src/img/playerStandRight.png");
/* harmony import */ var _img_playerStandLeft_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/playerStandLeft.png */ "./src/img/playerStandLeft.png");
/* harmony import */ var _img_playerMoveRight_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/playerMoveRight.png */ "./src/img/playerMoveRight.png");
/* harmony import */ var _img_playerMoveLeft_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/playerMoveLeft.png */ "./src/img/playerMoveLeft.png");
/* harmony import */ var _img_playerJumpRight_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/playerJumpRight.png */ "./src/img/playerJumpRight.png");
/* harmony import */ var _img_playerJumpLeft_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/playerJumpLeft.png */ "./src/img/playerJumpLeft.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var Player = /*#__PURE__*/function () {
  function Player(_ref) {
    var canvas = _ref.canvas,
        context = _ref.context,
        gravity = _ref.gravity;

    _classCallCheck(this, Player);

    this.canvas = canvas;
    this.context = context;
    this.speed = 10;
    this.gravity = gravity;
    this.position = {
      x: 100,
      y: 100
    };
    this.velocity = {
      x: 0,
      y: 1
    };
    this.width = 134;
    this.height = 150;
    this.jumpCount = 0;
    this.image = Object(_createImage__WEBPACK_IMPORTED_MODULE_0__["createImage"])(_img_playerStandRight_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
    this.frames = 0;
    this.sprites = {
      stand: {
        right: Object(_createImage__WEBPACK_IMPORTED_MODULE_0__["createImage"])(_img_playerStandRight_png__WEBPACK_IMPORTED_MODULE_1__["default"]),
        left: Object(_createImage__WEBPACK_IMPORTED_MODULE_0__["createImage"])(_img_playerStandLeft_png__WEBPACK_IMPORTED_MODULE_2__["default"]),
        cropWidth: 387.375
      },
      run: {
        right: Object(_createImage__WEBPACK_IMPORTED_MODULE_0__["createImage"])(_img_playerMoveRight_png__WEBPACK_IMPORTED_MODULE_3__["default"]),
        left: Object(_createImage__WEBPACK_IMPORTED_MODULE_0__["createImage"])(_img_playerMoveLeft_png__WEBPACK_IMPORTED_MODULE_4__["default"]),
        cropWidth: 395
      },
      jump: {
        right: Object(_createImage__WEBPACK_IMPORTED_MODULE_0__["createImage"])(_img_playerJumpRight_png__WEBPACK_IMPORTED_MODULE_5__["default"]),
        left: Object(_createImage__WEBPACK_IMPORTED_MODULE_0__["createImage"])(_img_playerJumpLeft_png__WEBPACK_IMPORTED_MODULE_6__["default"]),
        cropWidth: 395
      }
    };
    this.currentSprite = this.sprites.stand.right;
    this.currentCropWidth = this.sprites.stand.cropWidth;
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      this.context.drawImage(this.currentSprite, this.currentCropWidth * this.frames, -5, this.currentCropWidth, 454, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "updatePlayerFrame",
    value: function updatePlayerFrame() {
      this.frames++;

      if (this.frames >= 16 && (this.currentSprite === this.sprites.stand.right || this.currentSprite === this.sprites.stand.left)) {
        this.frames = 0;
      } else if (this.frames >= 20 && (this.currentSprite === this.sprites.run.right || this.currentSprite === this.sprites.run.left)) {
        this.frames = 0;
      } else if (this.frames >= 30 && (this.currentSprite === this.sprites.jump.right || this.currentSprite === this.sprites.jump.left)) {
        this.frames = 0;
      }
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;

      if (this.position.y + this.height + this.velocity.y <= this.canvas.height) {
        this.velocity.y += this.gravity;
      } else {
        this.velocity.y = 0;
      }
    }
  }]);

  return Player;
}();

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ "./src/js/Player.js");
/* harmony import */ var _DialogueBubble__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DialogueBubble */ "./src/js/DialogueBubble.js");
/* harmony import */ var _Platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Platform */ "./src/js/Platform.js");
/* harmony import */ var _GenericObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GenericObject */ "./src/js/GenericObject.js");
/* harmony import */ var _createImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createImage */ "./src/js/createImage.js");
/* harmony import */ var _img_platform_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/platform.png */ "./src/img/platform.png");
/* harmony import */ var _img_hills_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/hills.png */ "./src/img/hills.png");
/* harmony import */ var _img_background_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/background.png */ "./src/img/background.png");
/* harmony import */ var _img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/platformSmallTall.png */ "./src/img/platformSmallTall.png");
/* harmony import */ var _img_dialogueBoxRight_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/dialogueBoxRight.png */ "./src/img/dialogueBoxRight.png");










var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d'); //canvas.width = 1024
//canvas.height = 576

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
var gravity = 1;
var platformImage = Object(_createImage__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_platform_png__WEBPACK_IMPORTED_MODULE_5__["default"]);
var platformSmallTallImage = Object(_createImage__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_8__["default"]);
var player = new _Player__WEBPACK_IMPORTED_MODULE_0__["Player"]({
  canvas: canvas,
  context: c,
  gravity: gravity
});
var platforms = [];
var genericObject = [];
var lastKey;
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  },
  up: {
    pressed: false
  }
};
var scrollPlatform = 0; // Create an instance of MessageBubble

var dialogueBubble = new _DialogueBubble__WEBPACK_IMPORTED_MODULE_1__["DialogueBubble"](_img_dialogueBoxRight_png__WEBPACK_IMPORTED_MODULE_9__["default"], 100, 100, c);
var messageShown = false; // function after dying//

function init() {
  platformImage = Object(_createImage__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_platform_png__WEBPACK_IMPORTED_MODULE_5__["default"]);
  player = new _Player__WEBPACK_IMPORTED_MODULE_0__["Player"]({
    canvas: canvas,
    context: c,
    gravity: gravity
  });
  platforms = [new _Platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]({
    x: platformImage.width * 4 + 250,
    y: 270,
    image: platformSmallTallImage,
    context: c
  }), new _Platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]({
    x: -1,
    y: 470,
    image: platformImage,
    context: c
  }), new _Platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]({
    x: platformImage.width - 1,
    y: 470,
    image: platformImage,
    context: c
  }), new _Platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]({
    x: platformImage.width * 2 + 100,
    y: 470,
    image: platformImage,
    context: c
  }), new _Platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]({
    x: platformImage.width * 3,
    y: 470,
    image: platformImage,
    context: c
  }), new _Platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]({
    x: platformImage.width * 4,
    y: 470,
    image: platformImage,
    context: c
  }), new _Platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]({
    x: platformImage.width * 5 + 600,
    y: 470,
    image: platformImage,
    context: c
  })];
  genericObject = [new _GenericObject__WEBPACK_IMPORTED_MODULE_3__["GenericObject"]({
    x: 0,
    y: 0,
    image: Object(_createImage__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_background_png__WEBPACK_IMPORTED_MODULE_7__["default"]),
    context: c
  }), new _GenericObject__WEBPACK_IMPORTED_MODULE_3__["GenericObject"]({
    x: 0,
    y: 0,
    image: Object(_createImage__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_hills_png__WEBPACK_IMPORTED_MODULE_6__["default"]),
    context: c
  })];
  scrollPlatform = 0;
}

function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = 'white';
  c.fillRect(0, 0, canvas.width, canvas.height);
  genericObject.forEach(function (genericObject) {
    genericObject.draw();
  });
  platforms.forEach(function (platform) {
    platform.draw();
  });
  player.updatePlayerFrame();
  player.update();

  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = player.speed;
  } else if (keys.left.pressed && player.position.x > 100 || keys.left.pressed && scrollPlatform === 0 && player.position.x > 0) {
    player.velocity.x = -player.speed;
  } else {
    player.velocity.x = 0;

    if (keys.right.pressed) {
      scrollPlatform += player.speed;
      platforms.forEach(function (platform) {
        platform.position.x -= player.speed;
      });
      genericObject.forEach(function (genericObject) {
        genericObject.position.x -= player.speed * .66;
      });
    } else if (keys.left.pressed && scrollPlatform > 0) {
      scrollPlatform -= player.speed;
      platforms.forEach(function (platform) {
        platform.position.x += player.speed;
      });
      genericObject.forEach(function (genericObject) {
        genericObject.position.x += player.speed * .66;
      });
    }
  } // platfrom collision //


  platforms.forEach(function (platform) {
    if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
      player.velocity.y = 0;
      player.jumpCount = 0;
    }
  }); // sprite switch //

  if (keys.up.pressed) {
    player.frames = 1;

    if (lastKey === 'right') {
      player.currentSprite = player.sprites.jump.right;
      player.currentCropWidth = player.sprites.jump.cropWidth;
    } else if (lastKey === 'left') {
      player.currentSprite = player.sprites.jump.left;
      player.currentCropWidth = player.sprites.jump.cropWidth;
    }
  } else if (keys.right.pressed && lastKey === 'right' && player.currentSprite !== player.sprites.run.right) {
    player.frames = 1;
    player.currentSprite = player.sprites.run.right;
    player.currentCropWidth = player.sprites.run.cropWidth;
  } else if (keys.left.pressed && lastKey === 'left' && player.currentSprite !== player.sprites.run.left) {
    player.frames = 1;
    player.currentSprite = player.sprites.run.left;
    player.currentCropWidth = player.sprites.run.cropWidth;
  } else if (!keys.left.pressed && lastKey === 'left' && player.currentSprite !== player.sprites.stand.left) {
    player.frames = 1;
    player.currentSprite = player.sprites.stand.left;
    player.currentCropWidth = player.sprites.stand.cropWidth;
  } else if (!keys.right.pressed && lastKey === 'right' && player.currentSprite !== player.sprites.stand.right) {
    player.frames = 1;
    player.currentSprite = player.sprites.stand.right;
    player.currentCropWidth = player.sprites.stand.cropWidth;
  }

  if (player.position.x > 200 && !messageShown) {
    dialogueBubble.showMessage("Hello there! I'm Anastasia. Welcome to my game!");
    messageShown = true;
  }

  dialogueBubble.draw(); // draw the message bubble
  // win condition //

  if (scrollPlatform > platformImage.width * 5 + 300) {
    console.log('you win');
  } // lose condition //


  if (player.position.y > canvas.width) {
    init();
  }
}

init();
animate();
addEventListener('keydown', function (_ref) {
  var key = _ref.key;

  switch (key) {
    case 'a':
    case 'ArrowLeft':
      keys.left.pressed = true;
      lastKey = 'left';
      break;

    case 's':
    case 'ArrowDown':
      break;

    case 'd':
    case 'ArrowRight':
      keys.right.pressed = true;
      lastKey = 'right';
      break;

    case 'w':
    case 'ArrowUp':
      if (player.jumpCount < 2) {
        player.jumpCount++;
        keys.up.pressed = true;
        player.velocity.y -= 18;
        break;
      }

  }
});
addEventListener('keyup', function (_ref2) {
  var key = _ref2.key;

  switch (key) {
    case 'a':
    case 'ArrowLeft':
      keys.left.pressed = false;
      break;

    case 's':
    case 'ArrowDown':
      break;

    case 'd':
    case 'ArrowRight':
      keys.right.pressed = false;
      break;

    case 'w':
    case 'ArrowUp':
      keys.up.pressed = false;
      break;
  }
});

/***/ }),

/***/ "./src/js/createImage.js":
/*!*******************************!*\
  !*** ./src/js/createImage.js ***!
  \*******************************/
/*! exports provided: createImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createImage", function() { return createImage; });
function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
}

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map