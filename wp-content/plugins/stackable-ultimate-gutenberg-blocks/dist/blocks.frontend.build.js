var main =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/**
 * Specify a function to execute when the DOM is fully loaded.
 *
 * @param {Function} callback A function to execute after the DOM is ready.
 *
 * @returns {void}
 */
var domReady = function domReady(callback) {
  if (document.readyState === 'complete') {
    return callback();
  }

  document.addEventListener('DOMContentLoaded', callback);
};

/* harmony default export */ __webpack_exports__["default"] = (domReady);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
__webpack_require__(4);
__webpack_require__(5);
module.exports = __webpack_require__(6);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _domReady = __webpack_require__(0);

var _domReady2 = _interopRequireDefault(_domReady);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _domReady2.default)(function () {
	__webpack_require__(3);
	var elems = document.querySelectorAll('.ugb-countup .ugb-counter');
	elems.forEach(function (el) {
		// initCountUp( el )
		el.classList.add('ugb-countup-hide');
		new Waypoint({
			element: el,
			handler: function handler() {
				initCountUp(el);
				el.classList.remove('ugb-countup-hide');
				this.destroy();
			},
			offset: 'bottom-in-view'
		});
	});
});

var stopCountUp = function stopCountUp(el) {
	clearTimeout(el.countUpTimeout);
	if (el._countUpOrigInnerHTML) {
		el.innerHTML = el._countUpOrigInnerHTML;
		el._countUpOrigInnerHTML = undefined;
	}
	el.style.visibility = '';
};
var initCountUp = function initCountUp(el) {

	var lang, time, delay, divisions, splitValues, nums, k, i, num, isComma;
	var isFloat, decimalPlaces, val, newNum, _output;

	stopCountUp(el);

	// If no number, don't do anything.
	if (!/[0-9]/.test(el.innerHTML)) {
		return;
	}

	// Remember the element.
	el._countUpOrigInnerHTML = el.innerHTML;

	// Check location language.
	lang = document.querySelector('html').getAttribute('lang') || undefined;

	// Get the given time and delay by their attributes.
	time = el.getAttribute('data-duration');
	delay = el.getAttribute('data-delay');

	// Number of times the number will change.
	divisions = time / delay;

	// Split numbers and html tags.
	splitValues = el.innerHTML.split(/(<[^>]+>|[0-9.][,.0-9]*[0-9]*)/);

	// Contains all numbers to be displayed.
	nums = [];

	// Set blank strings to ready the split values.
	for (k = 0; k < divisions; k++) {
		nums.push('');
	}

	// Loop through all numbers and html tags.
	for (i = 0; i < splitValues.length; i++) {

		// If number split it into smaller numbers and insert it to nums.
		if (/([0-9.][,.0-9]*[0-9]*)/.test(splitValues[i]) && !/<[^>]+>/.test(splitValues[i])) {
			num = splitValues[i];

			// Test if numbers have comma.
			isComma = /[0-9]+,[0-9]+/.test(num);

			// Remove comma for computation purposes.
			num = num.replace(/,/g, '');

			// Test if values have point.
			isFloat = /^[0-9]+\.[0-9]+$/.test(num);

			// Check number of decimals places.
			decimalPlaces = isFloat ? (num.split('.')[1] || []).length : 0;

			// Start adding numbers from the end.
			k = nums.length - 1;

			// Create small numbers
			for (val = divisions; val >= 1; val--) {
				newNum = parseInt(num / divisions * val, 10);

				// If has decimal point, add it again.
				if (isFloat) {
					newNum = parseFloat(num / divisions * val).toFixed(decimalPlaces);
					newNum = parseFloat(newNum).toLocaleString(lang);
				}

				// If has comma, add it again.
				if (isComma) {
					newNum = newNum.toLocaleString(lang);
				}

				// Insert all small numbers.
				nums[k--] += newNum;
			}
		} else {

			// Insert all non-numbers in the same place.
			for (k = 0; k < divisions; k++) {
				nums[k] += splitValues[i];
			}
		}
	}

	// The last value of the element should be the original one.
	nums[nums.length] = el.innerHTML;

	el.innerHTML = nums[0];
	el.style.visibility = 'visible';

	// Function for displaying output with the set time and delay.
	_output = function output() {
		el.innerHTML = nums.shift();
		if (nums.length) {
			clearTimeout(el.countUpTimeout);
			el.countUpTimeout = setTimeout(_output, delay);
		} else {
			el._countUpOrigInnerHTML = undefined;
		}
	};
	el.countUpTimeout = setTimeout(_output, delay);
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
(function() {
  'use strict'

  var keyCounter = 0
  var allWaypoints = {}

  /* http://imakewebthings.com/waypoints/api/waypoint */
  function Waypoint(options) {
    if (!options) {
      throw new Error('No options passed to Waypoint constructor')
    }
    if (!options.element) {
      throw new Error('No element option passed to Waypoint constructor')
    }
    if (!options.handler) {
      throw new Error('No handler option passed to Waypoint constructor')
    }

    this.key = 'waypoint-' + keyCounter
    this.options = Waypoint.Adapter.extend({}, Waypoint.defaults, options)
    this.element = this.options.element
    this.adapter = new Waypoint.Adapter(this.element)
    this.callback = options.handler
    this.axis = this.options.horizontal ? 'horizontal' : 'vertical'
    this.enabled = this.options.enabled
    this.triggerPoint = null
    this.group = Waypoint.Group.findOrCreate({
      name: this.options.group,
      axis: this.axis
    })
    this.context = Waypoint.Context.findOrCreateByElement(this.options.context)

    if (Waypoint.offsetAliases[this.options.offset]) {
      this.options.offset = Waypoint.offsetAliases[this.options.offset]
    }
    this.group.add(this)
    this.context.add(this)
    allWaypoints[this.key] = this
    keyCounter += 1
  }

  /* Private */
  Waypoint.prototype.queueTrigger = function(direction) {
    this.group.queueTrigger(this, direction)
  }

  /* Private */
  Waypoint.prototype.trigger = function(args) {
    if (!this.enabled) {
      return
    }
    if (this.callback) {
      this.callback.apply(this, args)
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/destroy */
  Waypoint.prototype.destroy = function() {
    this.context.remove(this)
    this.group.remove(this)
    delete allWaypoints[this.key]
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/disable */
  Waypoint.prototype.disable = function() {
    this.enabled = false
    return this
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/enable */
  Waypoint.prototype.enable = function() {
    this.context.refresh()
    this.enabled = true
    return this
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/next */
  Waypoint.prototype.next = function() {
    return this.group.next(this)
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/previous */
  Waypoint.prototype.previous = function() {
    return this.group.previous(this)
  }

  /* Private */
  Waypoint.invokeAll = function(method) {
    var allWaypointsArray = []
    for (var waypointKey in allWaypoints) {
      allWaypointsArray.push(allWaypoints[waypointKey])
    }
    for (var i = 0, end = allWaypointsArray.length; i < end; i++) {
      allWaypointsArray[i][method]()
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/destroy-all */
  Waypoint.destroyAll = function() {
    Waypoint.invokeAll('destroy')
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/disable-all */
  Waypoint.disableAll = function() {
    Waypoint.invokeAll('disable')
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/enable-all */
  Waypoint.enableAll = function() {
    Waypoint.Context.refreshAll()
    for (var waypointKey in allWaypoints) {
      allWaypoints[waypointKey].enabled = true
    }
    return this
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/refresh-all */
  Waypoint.refreshAll = function() {
    Waypoint.Context.refreshAll()
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/viewport-height */
  Waypoint.viewportHeight = function() {
    return window.innerHeight || document.documentElement.clientHeight
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/viewport-width */
  Waypoint.viewportWidth = function() {
    return document.documentElement.clientWidth
  }

  Waypoint.adapters = []

  Waypoint.defaults = {
    context: window,
    continuous: true,
    enabled: true,
    group: 'default',
    horizontal: false,
    offset: 0
  }

  Waypoint.offsetAliases = {
    'bottom-in-view': function() {
      return this.context.innerHeight() - this.adapter.outerHeight()
    },
    'right-in-view': function() {
      return this.context.innerWidth() - this.adapter.outerWidth()
    }
  }

  window.Waypoint = Waypoint
}())
;(function() {
  'use strict'

  function requestAnimationFrameShim(callback) {
    window.setTimeout(callback, 1000 / 60)
  }

  var keyCounter = 0
  var contexts = {}
  var Waypoint = window.Waypoint
  var oldWindowLoad = window.onload

  /* http://imakewebthings.com/waypoints/api/context */
  function Context(element) {
    this.element = element
    this.Adapter = Waypoint.Adapter
    this.adapter = new this.Adapter(element)
    this.key = 'waypoint-context-' + keyCounter
    this.didScroll = false
    this.didResize = false
    this.oldScroll = {
      x: this.adapter.scrollLeft(),
      y: this.adapter.scrollTop()
    }
    this.waypoints = {
      vertical: {},
      horizontal: {}
    }

    element.waypointContextKey = this.key
    contexts[element.waypointContextKey] = this
    keyCounter += 1
    if (!Waypoint.windowContext) {
      Waypoint.windowContext = true
      Waypoint.windowContext = new Context(window)
    }

    this.createThrottledScrollHandler()
    this.createThrottledResizeHandler()
  }

  /* Private */
  Context.prototype.add = function(waypoint) {
    var axis = waypoint.options.horizontal ? 'horizontal' : 'vertical'
    this.waypoints[axis][waypoint.key] = waypoint
    this.refresh()
  }

  /* Private */
  Context.prototype.checkEmpty = function() {
    var horizontalEmpty = this.Adapter.isEmptyObject(this.waypoints.horizontal)
    var verticalEmpty = this.Adapter.isEmptyObject(this.waypoints.vertical)
    var isWindow = this.element == this.element.window
    if (horizontalEmpty && verticalEmpty && !isWindow) {
      this.adapter.off('.waypoints')
      delete contexts[this.key]
    }
  }

  /* Private */
  Context.prototype.createThrottledResizeHandler = function() {
    var self = this

    function resizeHandler() {
      self.handleResize()
      self.didResize = false
    }

    this.adapter.on('resize.waypoints', function() {
      if (!self.didResize) {
        self.didResize = true
        Waypoint.requestAnimationFrame(resizeHandler)
      }
    })
  }

  /* Private */
  Context.prototype.createThrottledScrollHandler = function() {
    var self = this
    function scrollHandler() {
      self.handleScroll()
      self.didScroll = false
    }

    this.adapter.on('scroll.waypoints', function() {
      if (!self.didScroll || Waypoint.isTouch) {
        self.didScroll = true
        Waypoint.requestAnimationFrame(scrollHandler)
      }
    })
  }

  /* Private */
  Context.prototype.handleResize = function() {
    Waypoint.Context.refreshAll()
  }

  /* Private */
  Context.prototype.handleScroll = function() {
    var triggeredGroups = {}
    var axes = {
      horizontal: {
        newScroll: this.adapter.scrollLeft(),
        oldScroll: this.oldScroll.x,
        forward: 'right',
        backward: 'left'
      },
      vertical: {
        newScroll: this.adapter.scrollTop(),
        oldScroll: this.oldScroll.y,
        forward: 'down',
        backward: 'up'
      }
    }

    for (var axisKey in axes) {
      var axis = axes[axisKey]
      var isForward = axis.newScroll > axis.oldScroll
      var direction = isForward ? axis.forward : axis.backward

      for (var waypointKey in this.waypoints[axisKey]) {
        var waypoint = this.waypoints[axisKey][waypointKey]
        if (waypoint.triggerPoint === null) {
          continue
        }
        var wasBeforeTriggerPoint = axis.oldScroll < waypoint.triggerPoint
        var nowAfterTriggerPoint = axis.newScroll >= waypoint.triggerPoint
        var crossedForward = wasBeforeTriggerPoint && nowAfterTriggerPoint
        var crossedBackward = !wasBeforeTriggerPoint && !nowAfterTriggerPoint
        if (crossedForward || crossedBackward) {
          waypoint.queueTrigger(direction)
          triggeredGroups[waypoint.group.id] = waypoint.group
        }
      }
    }

    for (var groupKey in triggeredGroups) {
      triggeredGroups[groupKey].flushTriggers()
    }

    this.oldScroll = {
      x: axes.horizontal.newScroll,
      y: axes.vertical.newScroll
    }
  }

  /* Private */
  Context.prototype.innerHeight = function() {
    /*eslint-disable eqeqeq */
    if (this.element == this.element.window) {
      return Waypoint.viewportHeight()
    }
    /*eslint-enable eqeqeq */
    return this.adapter.innerHeight()
  }

  /* Private */
  Context.prototype.remove = function(waypoint) {
    delete this.waypoints[waypoint.axis][waypoint.key]
    this.checkEmpty()
  }

  /* Private */
  Context.prototype.innerWidth = function() {
    /*eslint-disable eqeqeq */
    if (this.element == this.element.window) {
      return Waypoint.viewportWidth()
    }
    /*eslint-enable eqeqeq */
    return this.adapter.innerWidth()
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/context-destroy */
  Context.prototype.destroy = function() {
    var allWaypoints = []
    for (var axis in this.waypoints) {
      for (var waypointKey in this.waypoints[axis]) {
        allWaypoints.push(this.waypoints[axis][waypointKey])
      }
    }
    for (var i = 0, end = allWaypoints.length; i < end; i++) {
      allWaypoints[i].destroy()
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/context-refresh */
  Context.prototype.refresh = function() {
    /*eslint-disable eqeqeq */
    var isWindow = this.element == this.element.window
    /*eslint-enable eqeqeq */
    var contextOffset = isWindow ? undefined : this.adapter.offset()
    var triggeredGroups = {}
    var axes

    this.handleScroll()
    axes = {
      horizontal: {
        contextOffset: isWindow ? 0 : contextOffset.left,
        contextScroll: isWindow ? 0 : this.oldScroll.x,
        contextDimension: this.innerWidth(),
        oldScroll: this.oldScroll.x,
        forward: 'right',
        backward: 'left',
        offsetProp: 'left'
      },
      vertical: {
        contextOffset: isWindow ? 0 : contextOffset.top,
        contextScroll: isWindow ? 0 : this.oldScroll.y,
        contextDimension: this.innerHeight(),
        oldScroll: this.oldScroll.y,
        forward: 'down',
        backward: 'up',
        offsetProp: 'top'
      }
    }

    for (var axisKey in axes) {
      var axis = axes[axisKey]
      for (var waypointKey in this.waypoints[axisKey]) {
        var waypoint = this.waypoints[axisKey][waypointKey]
        var adjustment = waypoint.options.offset
        var oldTriggerPoint = waypoint.triggerPoint
        var elementOffset = 0
        var freshWaypoint = oldTriggerPoint == null
        var contextModifier, wasBeforeScroll, nowAfterScroll
        var triggeredBackward, triggeredForward

        if (waypoint.element !== waypoint.element.window) {
          elementOffset = waypoint.adapter.offset()[axis.offsetProp]
        }

        if (typeof adjustment === 'function') {
          adjustment = adjustment.apply(waypoint)
        }
        else if (typeof adjustment === 'string') {
          adjustment = parseFloat(adjustment)
          if (waypoint.options.offset.indexOf('%') > - 1) {
            adjustment = Math.ceil(axis.contextDimension * adjustment / 100)
          }
        }

        contextModifier = axis.contextScroll - axis.contextOffset
        waypoint.triggerPoint = Math.floor(elementOffset + contextModifier - adjustment)
        wasBeforeScroll = oldTriggerPoint < axis.oldScroll
        nowAfterScroll = waypoint.triggerPoint >= axis.oldScroll
        triggeredBackward = wasBeforeScroll && nowAfterScroll
        triggeredForward = !wasBeforeScroll && !nowAfterScroll

        if (!freshWaypoint && triggeredBackward) {
          waypoint.queueTrigger(axis.backward)
          triggeredGroups[waypoint.group.id] = waypoint.group
        }
        else if (!freshWaypoint && triggeredForward) {
          waypoint.queueTrigger(axis.forward)
          triggeredGroups[waypoint.group.id] = waypoint.group
        }
        else if (freshWaypoint && axis.oldScroll >= waypoint.triggerPoint) {
          waypoint.queueTrigger(axis.forward)
          triggeredGroups[waypoint.group.id] = waypoint.group
        }
      }
    }

    Waypoint.requestAnimationFrame(function() {
      for (var groupKey in triggeredGroups) {
        triggeredGroups[groupKey].flushTriggers()
      }
    })

    return this
  }

  /* Private */
  Context.findOrCreateByElement = function(element) {
    return Context.findByElement(element) || new Context(element)
  }

  /* Private */
  Context.refreshAll = function() {
    for (var contextId in contexts) {
      contexts[contextId].refresh()
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/context-find-by-element */
  Context.findByElement = function(element) {
    return contexts[element.waypointContextKey]
  }

  window.onload = function() {
    if (oldWindowLoad) {
      oldWindowLoad()
    }
    Context.refreshAll()
  }


  Waypoint.requestAnimationFrame = function(callback) {
    var requestFn = window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      requestAnimationFrameShim
    requestFn.call(window, callback)
  }
  Waypoint.Context = Context
}())
;(function() {
  'use strict'

  function byTriggerPoint(a, b) {
    return a.triggerPoint - b.triggerPoint
  }

  function byReverseTriggerPoint(a, b) {
    return b.triggerPoint - a.triggerPoint
  }

  var groups = {
    vertical: {},
    horizontal: {}
  }
  var Waypoint = window.Waypoint

  /* http://imakewebthings.com/waypoints/api/group */
  function Group(options) {
    this.name = options.name
    this.axis = options.axis
    this.id = this.name + '-' + this.axis
    this.waypoints = []
    this.clearTriggerQueues()
    groups[this.axis][this.name] = this
  }

  /* Private */
  Group.prototype.add = function(waypoint) {
    this.waypoints.push(waypoint)
  }

  /* Private */
  Group.prototype.clearTriggerQueues = function() {
    this.triggerQueues = {
      up: [],
      down: [],
      left: [],
      right: []
    }
  }

  /* Private */
  Group.prototype.flushTriggers = function() {
    for (var direction in this.triggerQueues) {
      var waypoints = this.triggerQueues[direction]
      var reverse = direction === 'up' || direction === 'left'
      waypoints.sort(reverse ? byReverseTriggerPoint : byTriggerPoint)
      for (var i = 0, end = waypoints.length; i < end; i += 1) {
        var waypoint = waypoints[i]
        if (waypoint.options.continuous || i === waypoints.length - 1) {
          waypoint.trigger([direction])
        }
      }
    }
    this.clearTriggerQueues()
  }

  /* Private */
  Group.prototype.next = function(waypoint) {
    this.waypoints.sort(byTriggerPoint)
    var index = Waypoint.Adapter.inArray(waypoint, this.waypoints)
    var isLast = index === this.waypoints.length - 1
    return isLast ? null : this.waypoints[index + 1]
  }

  /* Private */
  Group.prototype.previous = function(waypoint) {
    this.waypoints.sort(byTriggerPoint)
    var index = Waypoint.Adapter.inArray(waypoint, this.waypoints)
    return index ? this.waypoints[index - 1] : null
  }

  /* Private */
  Group.prototype.queueTrigger = function(waypoint, direction) {
    this.triggerQueues[direction].push(waypoint)
  }

  /* Private */
  Group.prototype.remove = function(waypoint) {
    var index = Waypoint.Adapter.inArray(waypoint, this.waypoints)
    if (index > -1) {
      this.waypoints.splice(index, 1)
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/first */
  Group.prototype.first = function() {
    return this.waypoints[0]
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/last */
  Group.prototype.last = function() {
    return this.waypoints[this.waypoints.length - 1]
  }

  /* Private */
  Group.findOrCreate = function(options) {
    return groups[options.axis][options.name] || new Group(options)
  }

  Waypoint.Group = Group
}())
;(function() {
  'use strict'

  var Waypoint = window.Waypoint

  function isWindow(element) {
    return element === element.window
  }

  function getWindow(element) {
    if (isWindow(element)) {
      return element
    }
    return element.defaultView
  }

  function NoFrameworkAdapter(element) {
    this.element = element
    this.handlers = {}
  }

  NoFrameworkAdapter.prototype.innerHeight = function() {
    var isWin = isWindow(this.element)
    return isWin ? this.element.innerHeight : this.element.clientHeight
  }

  NoFrameworkAdapter.prototype.innerWidth = function() {
    var isWin = isWindow(this.element)
    return isWin ? this.element.innerWidth : this.element.clientWidth
  }

  NoFrameworkAdapter.prototype.off = function(event, handler) {
    function removeListeners(element, listeners, handler) {
      for (var i = 0, end = listeners.length - 1; i < end; i++) {
        var listener = listeners[i]
        if (!handler || handler === listener) {
          element.removeEventListener(listener)
        }
      }
    }

    var eventParts = event.split('.')
    var eventType = eventParts[0]
    var namespace = eventParts[1]
    var element = this.element

    if (namespace && this.handlers[namespace] && eventType) {
      removeListeners(element, this.handlers[namespace][eventType], handler)
      this.handlers[namespace][eventType] = []
    }
    else if (eventType) {
      for (var ns in this.handlers) {
        removeListeners(element, this.handlers[ns][eventType] || [], handler)
        this.handlers[ns][eventType] = []
      }
    }
    else if (namespace && this.handlers[namespace]) {
      for (var type in this.handlers[namespace]) {
        removeListeners(element, this.handlers[namespace][type], handler)
      }
      this.handlers[namespace] = {}
    }
  }

  /* Adapted from jQuery 1.x offset() */
  NoFrameworkAdapter.prototype.offset = function() {
    if (!this.element.ownerDocument) {
      return null
    }

    var documentElement = this.element.ownerDocument.documentElement
    var win = getWindow(this.element.ownerDocument)
    var rect = {
      top: 0,
      left: 0
    }

    if (this.element.getBoundingClientRect) {
      rect = this.element.getBoundingClientRect()
    }

    return {
      top: rect.top + win.pageYOffset - documentElement.clientTop,
      left: rect.left + win.pageXOffset - documentElement.clientLeft
    }
  }

  NoFrameworkAdapter.prototype.on = function(event, handler) {
    var eventParts = event.split('.')
    var eventType = eventParts[0]
    var namespace = eventParts[1] || '__default'
    var nsHandlers = this.handlers[namespace] = this.handlers[namespace] || {}
    var nsTypeList = nsHandlers[eventType] = nsHandlers[eventType] || []

    nsTypeList.push(handler)
    this.element.addEventListener(eventType, handler)
  }

  NoFrameworkAdapter.prototype.outerHeight = function(includeMargin) {
    var height = this.innerHeight()
    var computedStyle

    if (includeMargin && !isWindow(this.element)) {
      computedStyle = window.getComputedStyle(this.element)
      height += parseInt(computedStyle.marginTop, 10)
      height += parseInt(computedStyle.marginBottom, 10)
    }

    return height
  }

  NoFrameworkAdapter.prototype.outerWidth = function(includeMargin) {
    var width = this.innerWidth()
    var computedStyle

    if (includeMargin && !isWindow(this.element)) {
      computedStyle = window.getComputedStyle(this.element)
      width += parseInt(computedStyle.marginLeft, 10)
      width += parseInt(computedStyle.marginRight, 10)
    }

    return width
  }

  NoFrameworkAdapter.prototype.scrollLeft = function() {
    var win = getWindow(this.element)
    return win ? win.pageXOffset : this.element.scrollLeft
  }

  NoFrameworkAdapter.prototype.scrollTop = function() {
    var win = getWindow(this.element)
    return win ? win.pageYOffset : this.element.scrollTop
  }

  NoFrameworkAdapter.extend = function() {
    var args = Array.prototype.slice.call(arguments)

    function merge(target, obj) {
      if (typeof target === 'object' && typeof obj === 'object') {
        for (var key in obj) {
          if (obj.hasOwnProperty(key)) {
            target[key] = obj[key]
          }
        }
      }

      return target
    }

    for (var i = 1, end = args.length; i < end; i++) {
      merge(args[0], args[i])
    }
    return args[0]
  }

  NoFrameworkAdapter.inArray = function(element, array, i) {
    return array == null ? -1 : array.indexOf(element, i)
  }

  NoFrameworkAdapter.isEmptyObject = function(obj) {
    /* eslint no-unused-vars: 0 */
    for (var name in obj) {
      return false
    }
    return true
  }

  Waypoint.adapters.push({
    name: 'noframework',
    Adapter: NoFrameworkAdapter
  })
  Waypoint.Adapter = NoFrameworkAdapter
}())
;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _domReady = __webpack_require__(0);

var _domReady2 = _interopRequireDefault(_domReady);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Permanently hide the dismissible notification if clicked.
 */
(0, _domReady2.default)(function () {
	var elems = document.querySelectorAll('.wp-block-ugb-expand');
	elems.forEach(function (el) {
		var btn = el.querySelector('.ugb-expand-button');
		var clickHandler = function clickHandler(e) {
			el.classList.toggle('ugb-more');
			e.preventDefault();
		};
		if (btn) {
			btn.addEventListener('click', clickHandler);
			btn.addEventListener('tapEnd', clickHandler);
		}
	});
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _domReady = __webpack_require__(0);

var _domReady2 = _interopRequireDefault(_domReady);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Permanently hide the dismissible notification if clicked.
 */
(0, _domReady2.default)(function () {
	var elems = document.querySelectorAll('.ugb-notification.dismissible-true[data-uid]');
	elems.forEach(function (el) {
		var uid = el.getAttribute('data-uid');
		if (!localStorage.getItem('stckbl-notif-' + uid)) {
			el.style.display = 'block';
		}
		el.querySelector('.close-button').addEventListener('click', function () {
			localStorage.setItem('stckbl-notif-' + uid, 1);
			el.style.display = '';
		});
	});
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _domReady = __webpack_require__(0);

var _domReady2 = _interopRequireDefault(_domReady);

var _bigpicture = __webpack_require__(7);

var _bigpicture2 = _interopRequireDefault(_bigpicture);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _domReady2.default)(function () {
	var elems = document.querySelectorAll('.ugb-video-popup');
	var openVideo = function openVideo(el) {
		if (_bigpicture2.default) {
			var videoID = el.getAttribute('data-video');
			var args = {
				el: el,
				noLoader: true
			};
			if (videoID.match(/^\d+$/g)) {
				args['vimeoSrc'] = videoID;
			} else if (videoID.match(/^https?:\/\//g)) {
				args['vidSrc'] = videoID;
			} else {
				args['ytSrc'] = videoID;
			}
			(0, _bigpicture2.default)(args);
		}
	};
	elems.forEach(function (el) {
		var a = el.querySelector('a');
		a.addEventListener('click', function (ev) {
			ev.preventDefault();
			openVideo(el);
		});
		a.addEventListener('touchend', function (ev) {
			ev.preventDefault();
			openVideo(el);
		});
	});
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// BigPicture.js | license MIT | henrygd.me/bigpicture
(function() {
	var // assign window object to variable
		global = window,
		// trigger element used to open popup
		el,
		// set to true after first interaction
		initialized,
		// container element holding html needed for script
		container,
		// currently active display element (image, video, youtube / vimeo iframe container)
		displayElement,
		// popup image element
		displayImage,
		// popup video element
		displayVideo,
		// container element to hold youtube / vimeo iframe
		iframeContainer,
		// iframe to hold youtube / vimeo player
		iframeSiteVid,
		// store requested image source
		imgSrc,
		// button that closes the container
		closeButton,
		// youtube / vimeo video id
		siteVidID,
		// keeps track of loading icon display state
		isLoading,
		// timeout to check video status while loading
		checkVidTimeout,
		// loading icon element
		loadingIcon,
		// caption element
		caption,
		// caption content element
		captionText,
		// store caption content
		captionContent,
		// hide caption button element
		captionHideButton,
		// open state for container element
		isOpen,
		// gallery open state
		galleryOpen,
		// used during close animation to avoid triggering timeout twice
		isClosing,
		// array of prev viewed image urls to check if cached before showing loading icon
		imgCache = [],
		// store whether image requested is remote or local
		remoteImage,
		// store animation opening callbacks
		animationStart,
		animationEnd,
		// gallery left / right icons
		rightArrowBtn,
		leftArrowBtn,
		// position of gallery
		galleryPosition,
		// hold active gallery els / image src
		galleryEls,
		// counter element
		galleryCounter,
		// store images in gallery that are being loaded
		preloadedImages = {},
		// whether device supports touch events
		supportsTouch,
		// set to true if user wants to hide loading icon
		noLoader,
		// Save bytes in the minified version
		doc = document,
		appendEl = 'appendChild',
		createEl = 'createElement',
		removeEl = 'removeChild',
		htmlInner = 'innerHTML',
		pointerEventsAuto = 'pointer-events:auto',
		cHeight = 'clientHeight',
		cWidth = 'clientWidth',
		listenFor = 'addEventListener',
		timeout = global.setTimeout,
		clearTimeout = global.clearTimeout

	module.exports = function(options) {
		// initialize called on initial open to create elements / style / event handlers
		initialized || initialize()

		// clear currently loading stuff
		if (isLoading) {
			clearTimeout(checkVidTimeout)
			removeContainer()
		}

		// store video id if youtube / vimeo video is requested
		siteVidID = options.ytSrc || options.vimeoSrc

		// store optional callbacks
		animationStart = options.animationStart
		animationEnd = options.animationEnd

		// store whether user requests to hide loading icon
		noLoader = options.noLoader

		// set trigger element
		el = options.el

		// wipe existing remoteImage state
		remoteImage = false

		// set caption if provided
		captionContent = el.getAttribute('caption')

		if (options.gallery) {
			makeGallery(options.gallery)
		} else if (siteVidID) {
			// if vimeo or youtube video
			toggleLoadingIcon(true)
			displayElement = iframeContainer
			createIframe(!!options.ytSrc)
		} else if (options.imgSrc) {
			// if remote image
			remoteImage = true
			imgSrc = options.imgSrc
			!~imgCache.indexOf(imgSrc) && toggleLoadingIcon(true)
			displayElement = displayImage
			displayElement.src = imgSrc
		} else if (options.vidSrc) {
			// if direct video link
			toggleLoadingIcon(true)
			displayElement = displayVideo
			displayElement.src = options.vidSrc
			checkVid()
		} else {
			// local image / background image already loaded on page
			displayElement = displayImage
			// get img source or element background image
			displayElement.src =
				el.tagName === 'IMG'
					? el.src
					: global
						.getComputedStyle(el)
						.backgroundImage.replace(/^url|[(|)|'|"]/g, '')
		}

		// add container to page
		container[appendEl](displayElement)
		doc.body[appendEl](container)
	}

	// create all needed methods / store dom elements on first use
	function initialize() {
		var startX
		// return close button elements
		function createCloseButton() {
			var el = doc[createEl]('button')
			el.className = 'bp-x'
			el[htmlInner] = '&#215;'
			return el
		}

		function createArrowSymbol(direction, style) {
			var el = doc[createEl]('button')
			el.className = 'bp-lr'
			el[htmlInner] =
				'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" height="75" fill="#fff"><path d="M88.6 121.3c.8.8 1.8 1.2 2.9 1.2s2.1-.4 2.9-1.2a4.1 4.1 0 0 0 0-5.8l-51-51 51-51a4.1 4.1 0 0 0-5.8-5.8l-54 53.9a4.1 4.1 0 0 0 0 5.8l54 53.9z"/></svg>'
			changeCSS(el, style)
			el.onclick = function(e) {
				e.stopPropagation()
				updateGallery(direction)
			}
			return el
		}

		// add style - if you want to tweak, run through beautifier
		var style = doc[createEl]('STYLE')
		style[htmlInner] =
			'.bp-lr,.bp-x:active{outline:0}#bp_caption,#bp_container{bottom:0;left:0;right:0;position:fixed;opacity:0;backface-visibility:hidden}#bp_container>*,#bp_loader,.bp-x{position:absolute;right:0;z-index:10}#bp_container{top:0;z-index:9999;background:rgba(0,0,0,.7);opacity:0;pointer-events:none;transition:opacity .35s}#bp_loader{top:0;left:0;bottom:0;display:-webkit-flex;display:flex;margin:0;cursor:wait;z-index:9}#bp_count,.bp-lr,.bp-x{cursor:pointer;color:#fff}#bp_loader svg{width:50%;max-height:50%;margin:auto}#bp_container img,#bp_sv,#bp_vid{user-select:none;max-height:96%;max-width:96%;top:0;bottom:0;left:0;margin:auto;box-shadow:0 0 3em rgba(0,0,0,.4);z-index:-1}#bp_sv{width:171vh}#bp_caption{font-size:.9em;padding:1.3em;background:rgba(15,15,15,.94);color:#fff;text-align:center;transition:opacity .3s}#bp_count,.bp-x{top:0;opacity:.8;font-size:3em;padding:0 .3em;background:0 0;border:0;text-shadow:0 0 2px rgba(0,0,0,.6)}#bp_caption .bp-x{left:2%;top:auto;right:auto;bottom:100%;padding:0 .6em;background:#d74040;border-radius:2px 2px 0 0;font-size:2.3em;text-shadow:none}.bp-x:focus,.bp-x:hover{opacity:1}@media (max-aspect-ratio:9/5){#bp_sv{height:53vw}}.bp-lr{top:50%;top:calc(50% - 138px);padding:99px 1vw;background:0 0;border:0;opacity:.4;transition:opacity .1s}.bp-lr:focus,.bp-lr:hover{opacity:.8}@media (max-width:600px){.bp-lr{font-size:15vw}}#bp_count{left:0;display:table;padding:14px;color:#fff;font-size:22px;opacity:.7;cursor:default;right:auto}'
		doc.head[appendEl](style)

		// create container element
		container = doc[createEl]('DIV')
		container.id = 'bp_container'
		container.onclick = close
		closeButton = createCloseButton()
		container[appendEl](closeButton)
		// gallery swipe listeners
		if ('ontouchstart' in global) {
			supportsTouch = true
			container.ontouchstart = function(e) {
				startX = e.changedTouches[0].pageX
			}
			container.ontouchmove = function(e) {
				e.preventDefault()
			}
			container.ontouchend = function(e) {
				if (!galleryOpen) {
					return
				}
				var touchobj = e.changedTouches[0]
				var distX = touchobj.pageX - startX
				// swipe right
				distX < -30 && updateGallery(1)
				// swipe left
				distX > 30 && updateGallery(-1)
			}
		}

		// create display image element
		displayImage = doc[createEl]('IMG')

		// create display video element
		displayVideo = doc[createEl]('VIDEO')
		displayVideo.id = 'bp_vid'
		displayVideo.autoplay = true
		displayVideo.setAttribute('playsinline', true)
		displayVideo.controls = true
		displayVideo.loop = true

		// create gallery counter
		galleryCounter = doc[createEl]('span')
		galleryCounter.id = 'bp_count'

		// create caption elements
		caption = doc[createEl]('DIV')
		caption.id = 'bp_caption'
		captionHideButton = createCloseButton()
		captionHideButton.onclick = toggleCaption.bind(null, false)
		caption[appendEl](captionHideButton)
		captionText = doc[createEl]('SPAN')
		caption[appendEl](captionText)
		container[appendEl](caption)

		// left / right arrow icons
		rightArrowBtn = createArrowSymbol(1, webkitify('transform:', 'scalex(-1);'))
		leftArrowBtn = createArrowSymbol(-1, 'left:0;right:auto')

		// create loading icon element
		loadingIcon = doc[createEl]('DIV')
		loadingIcon.id = 'bp_loader'
		loadingIcon[htmlInner] =
			'<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 32 32" fill="#fff" opacity=".8"><path d="M16 0a16 16 0 0 0 0 32 16 16 0 0 0 0-32m0 4a12 12 0 0 1 0 24 12 12 0 0 1 0-24" fill="#000" opacity=".5"/><path d="M16 0a16 16 0 0 1 16 16h-4A12 12 0 0 0 16 4z"><animateTransform attributeName="transform" dur="1s" from="0 16 16" repeatCount="indefinite" to="360 16 16" type="rotate"/></path></svg>'

		// create youtube / vimeo container
		iframeContainer = doc[createEl]('DIV')
		iframeContainer.id = 'bp_sv'

		// create iframe to hold youtube / vimeo player
		iframeSiteVid = doc[createEl]('IFRAME')
		iframeSiteVid.allowFullscreen = true
		iframeSiteVid.onload = open
		changeCSS(iframeSiteVid, 'border:0px;height:100%;width:100%')
		iframeContainer[appendEl](iframeSiteVid)

		// display image bindings for image load and error
		displayImage.onload = open
		displayImage.onerror = open.bind(null, 'image')

		// adjust loader position on window resize
		global[listenFor]('resize', function() {
			galleryOpen || (isLoading && toggleLoadingIcon(true))
		})

		// close container on escape key press and arrow buttons for gallery
		doc[listenFor]('keyup', function(e) {
			var key = e.keyCode
			key === 27 && isOpen && close(container)
			if (galleryOpen) {
				key === 39 && updateGallery(1)
				key === 37 && updateGallery(-1)
				key === 38 && updateGallery(10)
				key === 40 && updateGallery(-10)
			}
		})
		// prevent scrolling with arrow keys if gallery open
		doc[listenFor]('keydown', function(e) {
			var usedKeys = [37, 38, 39, 40]
			if (galleryOpen && ~usedKeys.indexOf(e.keyCode)) {
				e.preventDefault()
			}
		})

		// trap focus within conainer while open
		doc[listenFor](
			'focus',
			function(e) {
				if (isOpen && !container.contains(e.target)) {
					e.stopPropagation()
					closeButton.focus()
				}
			},
			true
		)

		// all done
		initialized = true
	}

	// return transform style to make full size display el match trigger el size
	function getRect() {
		var rect = el.getBoundingClientRect()
		var leftOffset = rect.left - (container[cWidth] - rect.width) / 2
		var centerTop = rect.top - (container[cHeight] - rect.height) / 2
		var scaleWidth = el[cWidth] / displayElement[cWidth]
		var scaleHeight = el[cHeight] / displayElement[cHeight]
		return webkitify(
			'transform:',
			'translate3D(' +
				leftOffset +
				'px, ' +
				centerTop +
				'px, 0) scale3D(' +
				scaleWidth +
				', ' +
				scaleHeight +
				', 0);'
		)
	}

	function makeGallery(gallery) {
		if (Array.isArray(gallery)) {
			// is array of images
			galleryPosition = 0
			galleryEls = gallery
			captionContent = gallery[0].caption
		} else {
			// is element selector
			galleryEls = [].slice.call(doc.querySelectorAll(gallery + ' [data-bp]'))
			// find initial gallery position
			var elIndex = galleryEls.indexOf(el)
			galleryPosition = elIndex !== -1 ? elIndex : 0
			// make gallery object w/ els / src / caption
			galleryEls = galleryEls.map(function(el) {
				return {
					el: el,
					src: el.getAttribute('data-bp'),
					caption: el.getAttribute('caption')
				}
			})
		}
		// show loading icon if needed
		remoteImage = true
		// set initial src to imgSrc so it will be cached in open func
		imgSrc = galleryEls[galleryPosition].src
		!~imgCache.indexOf(imgSrc) && toggleLoadingIcon(true)
		if (galleryEls.length > 1) {
			// if length is greater than one, add gallery stuff
			container[appendEl](galleryCounter)
			galleryCounter[htmlInner] = galleryPosition + 1 + '/' + galleryEls.length
			if (!supportsTouch) {
				// add arrows if device doesn't support touch
				container[appendEl](rightArrowBtn)
				container[appendEl](leftArrowBtn)
			}
		} else {
			// gallery is one, just show without clutter
			galleryEls = false
		}
		displayElement = displayImage
		// set initial image src
		displayElement.src = imgSrc
	}

	function updateGallery(movement) {
		var galleryLength = galleryEls.length - 1
		// normalize position
		galleryPosition = Math.max(
			0,
			Math.min(galleryPosition + movement, galleryLength)
		)

		// load images before and after for quicker scrolling through pictures
		;[galleryPosition - 1, galleryPosition, galleryPosition + 1].forEach(
			function(position) {
				// normalize position
				position = Math.max(0, Math.min(position, galleryLength))
				// cancel if image has already been preloaded
				if (!!preloadedImages[position]) return
				var src = galleryEls[position].src
				// create image for preloadedImages
				var img = doc[createEl]('IMG')
				img[listenFor]('load', addToImgCache.bind(null, src))
				img.src = src
				preloadedImages[position] = img
			}
		)
		// if image is loaded, show it
		if (preloadedImages[galleryPosition].complete) {
			return changeGalleryImage()
		}
		// if not, show loading icon and change when loaded
		isLoading = true
		changeCSS(loadingIcon, 'opacity:.4;')
		container[appendEl](loadingIcon)
		preloadedImages[galleryPosition].onload = function() {
			galleryOpen && changeGalleryImage()
		}
		// if error, store error object in el array
		preloadedImages[galleryPosition].onerror = function() {
			galleryEls[galleryPosition] = {
				error: 'Error loading image'
			}
			galleryOpen && changeGalleryImage()
		}
	}

	function changeGalleryImage() {
		if (isLoading) {
			container[removeEl](loadingIcon)
			isLoading = false
		}
		var activeEl = galleryEls[galleryPosition]
		if (activeEl.error) {
			// show alert if error
			alert(activeEl.error)
		} else {
			var newSrc = activeEl.src
			displayImage.src = newSrc
			if (activeEl.el) {
				el = activeEl.el
			}
		}
		galleryCounter[htmlInner] = galleryPosition + 1 + '/' + galleryEls.length
	}

	// create youtube / vimeo video iframe
	function createIframe(isYoutube) {
		// create appropriate url for youtube or vimeo
		var url = isYoutube
			? 'www.youtube.com/embed/' +
			  siteVidID +
			  '?html5=1&rel=0&showinfo=0&playsinline=1&'
			: 'player.vimeo.com/video/' + siteVidID + '?'

		// set iframe src to url
		iframeSiteVid.src = 'https://' + url + 'autoplay=1'
	}

	// timeout to check video status while loading
	// onloadeddata event doesn't seem to fire in less up-to-date browsers like midori & epiphany
	function checkVid() {
		if (displayElement.readyState === 4) open()
		else if (displayVideo.error) open('video')
		else checkVidTimeout = timeout(checkVid, 35)
	}

	// hide / show loading icon
	function toggleLoadingIcon(bool) {
		// don't show loading icon if noLoader is specified
		if (noLoader) return
		// bool is true if we want to show icon, false if we want to remove
		// change style to match trigger element dimensions if we want to show
		bool &&
			changeCSS(
				loadingIcon,
				'top:' +
					el.offsetTop +
					'px;left:' +
					el.offsetLeft +
					'px;height:' +
					el[cHeight] +
					'px;width:' +
					el[cWidth] +
					'px'
			)
		// add or remove loader from DOM
		el.parentElement[bool ? appendEl : removeEl](loadingIcon)
		isLoading = bool
	}

	// hide & show caption
	function toggleCaption(captionContent) {
		if (captionContent) {
			captionText[htmlInner] = captionContent
		}
		changeCSS(
			caption,
			'opacity:' + (captionContent ? '1;' + pointerEventsAuto : '0')
		)
	}

	function addToImgCache(url) {
		!~imgCache.indexOf(url) && imgCache.push(url)
	}

	// animate open of image / video; display caption if needed
	function open(err) {
		// hide loading spinner
		isLoading && toggleLoadingIcon()

		// execute animationStart callback
		animationStart && animationStart()

		// check if we have an error string instead of normal event
		if (typeof err === 'string') {
			removeContainer()
			return alert('Error: The requested ' + err + ' could not be loaded.')
		}

		// if remote image is loaded, add url to imgCache array
		remoteImage && addToImgCache(imgSrc)

		if (galleryOpen) {
			return toggleCaption(galleryEls[galleryPosition].caption)
			// return
		}

		// transform displayEl to match trigger el
		changeCSS(displayElement, getRect())

		// fade in container
		changeCSS(container, 'opacity:1;' + pointerEventsAuto)

		// set animationEnd callback to run after animation ends (cleared if container closed)
		animationEnd = timeout(animationEnd, 410)

		isOpen = true

		galleryOpen = !!galleryEls

		// enlarge displayEl, fade in caption if hasCaption
		timeout(function() {
			changeCSS(
				displayElement,
				webkitify('transition:', 'transform .35s;') +
					webkitify('transform:', 'none;')
			)
			captionContent && timeout(toggleCaption.bind(null, captionContent), 250)
		}, 60)
	}

	// close active display element
	function close(e) {
		var target = e.target
		var clickEls = [
			caption,
			captionHideButton,
			displayVideo,
			captionText,
			leftArrowBtn,
			rightArrowBtn,
			loadingIcon
		]

		// blur to hide close button focus style
		target && target.blur()

		// don't close if one of the clickEls was clicked or container is already closing
		if (isClosing || ~clickEls.indexOf(target)) {
			return
		}

		// animate closing
		displayElement.style.cssText += getRect()
		changeCSS(container, pointerEventsAuto)

		// timeout to remove els from dom; use variable to avoid calling more than once
		timeout(removeContainer, 350)

		// clear animationEnd timeout
		clearTimeout(animationEnd)

		isOpen = false
		isClosing = true
	}

	// remove container / display element from the DOM
	function removeContainer() {
		// remove container from DOM & clear inline style
		doc.body[removeEl](container)
		container[removeEl](displayElement)
		changeCSS(container, '')

		// clear src of displayElement (or iframe if display el is iframe container)
		;(displayElement === iframeContainer
			? iframeSiteVid
			: displayElement
		).removeAttribute('src')

		// remove caption
		toggleCaption(false)

		if (galleryOpen) {
			isLoading && container[removeEl](loadingIcon)
			container[removeEl](galleryCounter)
			galleryOpen = galleryEls = false
			preloadedImages = {}
			supportsTouch || container[removeEl](rightArrowBtn)
			supportsTouch || container[removeEl](leftArrowBtn)
		}

		isClosing = isLoading = false
	}

	// style helper functions
	function changeCSS(element, newStyle) {
		element.style.cssText = newStyle
	}
	function webkitify(prop, val) {
		var webkit = '-webkit-'
		var propVal = prop + val
		return webkit + propVal + prop + webkit + val + propVal
	}
})()


/***/ })
/******/ ]);