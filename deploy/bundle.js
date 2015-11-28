(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function doIt(e){(0,_promise2["default"])(arr).then((0,_fn.map)(addTwo())).then((0,_fn.filter)((0,_fn.evens)())).done(e)}var _promise=require("./lib/promise"),_promise2=_interopRequireDefault(_promise),_fn=require("./lib/fn"),arr=[1,2,3,4,5,6,7,8,9,10],addTwo=(0,_fn.adder)(2);doIt(function(e){console.log("Output:",e)});
},{"./lib/fn":2,"./lib/promise":3}],2:[function(require,module,exports){
"use strict";function evens(){return function(e){return e%2===0}}function map(e){return function(r){return r.map(e)}}function adder(e){return function(){return function(r){return r+e}}}function filter(e){return function(r){return r.filter(e)}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.evens=evens,exports.map=map,exports.adder=adder,exports.filter=filter;
},{}],3:[function(require,module,exports){
"use strict";function promise(e){var t=e;return{done:function(e){e(t)},then:function(e){return t=e(t),this}}}Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=promise;
},{}]},{},[1])


//# sourceMappingURL=bundle.map