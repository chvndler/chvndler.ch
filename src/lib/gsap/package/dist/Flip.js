(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = global || self, factory(global.window = global.window || {}));
}(this, (function (exports) { 'use strict';

	var _doc,
	    _win,
	    _docElement,
	    _body,
	    _divContainer,
	    _svgContainer,
	    _identityMatrix,
	    _gEl,
	    _transformProp = "transform",
	    _transformOriginProp = _transformProp + "Origin",
	    _hasOffsetBug,
	    _setDoc = function _setDoc(element) {
	  var doc = element.ownerDocument || element;

	  if (!(_transformProp in element.style) && "msTransform" in element.style) {
	    _transformProp = "msTransform";
	    _transformOriginProp = _transformProp + "Origin";
	  }

	  while (doc.parentNode && (doc = doc.parentNode)) {}

	  _win = window;
	  _identityMatrix = new Matrix2D();

	  if (doc) {
	    _doc = doc;
	    _docElement = doc.documentElement;
	    _body = doc.body;
	    _gEl = _doc.createElementNS("http://www.w3.org/2000/svg", "g");
	    _gEl.style.transform = "none";
	    var d1 = doc.createElement("div"),
	        d2 = doc.createElement("div");

	    _body.appendChild(d1);

	    d1.appendChild(d2);
	    d1.style.position = "static";
	    d1.style[_transformProp] = "translate3d(0,0,1px)";
	    _hasOffsetBug = d2.offsetParent !== d1;

	    _body.removeChild(d1);
	  }

	  return doc;
	},
	    _forceNonZeroScale = function _forceNonZeroScale(e) {
	  var a, cache;

	  while (e && e !== _body) {
	    cache = e._gsap;
	    cache && cache.uncache && cache.get(e, "x");

	    if (cache && !cache.scaleX && !cache.scaleY && cache.renderTransform) {
	      cache.scaleX = cache.scaleY = 1e-4;
	      cache.renderTransform(1, cache);
	      a ? a.push(cache) : a = [cache];
	    }

	    e = e.parentNode;
	  }

	  return a;
	},
	    _svgTemps = [],
	    _divTemps = [],
	    _getDocScrollTop = function _getDocScrollTop() {
	  return _win.pageYOffset || _doc.scrollTop || _docElement.scrollTop || _body.scrollTop || 0;
	},
	    _getDocScrollLeft = function _getDocScrollLeft() {
	  return _win.pageXOffset || _doc.scrollLeft || _docElement.scrollLeft || _body.scrollLeft || 0;
	},
	    _svgOwner = function _svgOwner(element) {
	  return element.ownerSVGElement || ((element.tagName + "").toLowerCase() === "svg" ? element : null);
	},
	    _isFixed = function _isFixed(element) {
	  if (_win.getComputedStyle(element).position === "fixed") {
	    return true;
	  }

	  element = element.parentNode;

	  if (element && element.nodeType === 1) {
	    return _isFixed(element);
	  }
	},
	    _createSibling = function _createSibling(element, i) {
	  if (element.parentNode && (_doc || _setDoc(element))) {
	    var svg = _svgOwner(element),
	        ns = svg ? svg.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml",
	        type = svg ? i ? "rect" : "g" : "div",
	        x = i !== 2 ? 0 : 100,
	        y = i === 3 ? 100 : 0,
	        css = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
	        e = _doc.createElementNS ? _doc.createElementNS(ns.replace(/^https/, "http"), type) : _doc.createElement(type);

	    if (i) {
	      if (!svg) {
	        if (!_divContainer) {
	          _divContainer = _createSibling(element);
	          _divContainer.style.cssText = css;
	        }

	        e.style.cssText = css + "width:0.1px;height:0.1px;top:" + y + "px;left:" + x + "px";

	        _divContainer.appendChild(e);
	      } else {
	        _svgContainer || (_svgContainer = _createSibling(element));
	        e.setAttribute("width", 0.01);
	        e.setAttribute("height", 0.01);
	        e.setAttribute("transform", "translate(" + x + "," + y + ")");

	        _svgContainer.appendChild(e);
	      }
	    }

	    return e;
	  }

	  throw "Need document and parent.";
	},
	    _consolidate = function _consolidate(m) {
	  var c = new Matrix2D(),
	      i = 0;

	  for (; i < m.numberOfItems; i++) {
	    c.multiply(m.getItem(i).matrix);
	  }

	  return c;
	},
	    _getCTM = function _getCTM(svg) {
	  var m = svg.getCTM(),
	      transform;

	  if (!m) {
	    transform = svg.style[_transformProp];
	    svg.style[_transformProp] = "none";
	    svg.appendChild(_gEl);
	    m = _gEl.getCTM();
	    svg.removeChild(_gEl);
	    transform ? svg.style[_transformProp] = transform : svg.style.removeProperty(_transformProp.replace(/([A-Z])/g, "-$1").toLowerCase());
	  }

	  return m;
	},
	    _placeSiblings = function _placeSiblings(element, adjustGOffset) {
	  var svg = _svgOwner(element),
	      isRootSVG = element === svg,
	      siblings = svg ? _svgTemps : _divTemps,
	      parent = element.parentNode,
	      container,
	      m,
	      b,
	      x,
	      y,
	      cs;

	  if (element === _win) {
	    return element;
	  }

	  siblings.length || siblings.push(_createSibling(element, 1), _createSibling(element, 2), _createSibling(element, 3));
	  container = svg ? _svgContainer : _divContainer;

	  if (svg) {
	    if (isRootSVG) {
	      b = _getCTM(element);
	      x = -b.e / b.a;
	      y = -b.f / b.d;
	      m = _identityMatrix;
	    } else {
	      b = element.getBBox();
	      m = element.transform ? element.transform.baseVal : {};
	      m = !m.numberOfItems ? _identityMatrix : m.numberOfItems > 1 ? _consolidate(m) : m.getItem(0).matrix;
	      x = m.a * b.x + m.c * b.y;
	      y = m.b * b.x + m.d * b.y;
	    }

	    if (adjustGOffset && element.tagName.toLowerCase() === "g") {
	      x = y = 0;
	    }

	    (isRootSVG ? svg : parent).appendChild(container);
	    container.setAttribute("transform", "matrix(" + m.a + "," + m.b + "," + m.c + "," + m.d + "," + (m.e + x) + "," + (m.f + y) + ")");
	  } else {
	    x = y = 0;

	    if (_hasOffsetBug) {
	      m = element.offsetParent;
	      b = element;

	      while (b && (b = b.parentNode) && b !== m && b.parentNode) {
	        if ((_win.getComputedStyle(b)[_transformProp] + "").length > 4) {
	          x = b.offsetLeft;
	          y = b.offsetTop;
	          b = 0;
	        }
	      }
	    }

	    cs = _win.getComputedStyle(element);

	    if (cs.position !== "absolute" && cs.position !== "fixed") {
	      m = element.offsetParent;

	      while (parent && parent !== m) {
	        x += parent.scrollLeft || 0;
	        y += parent.scrollTop || 0;
	        parent = parent.parentNode;
	      }
	    }

	    b = container.style;
	    b.top = element.offsetTop - y + "px";
	    b.left = element.offsetLeft - x + "px";
	    b[_transformProp] = cs[_transformProp];
	    b[_transformOriginProp] = cs[_transformOriginProp];
	    b.position = cs.position === "fixed" ? "fixed" : "absolute";
	    element.parentNode.appendChild(container);
	  }

	  return container;
	},
	    _setMatrix = function _setMatrix(m, a, b, c, d, e, f) {
	  m.a = a;
	  m.b = b;
	  m.c = c;
	  m.d = d;
	  m.e = e;
	  m.f = f;
	  return m;
	};

	var Matrix2D = function () {
	  function Matrix2D(a, b, c, d, e, f) {
	    if (a === void 0) {
	      a = 1;
	    }

	    if (b === void 0) {
	      b = 0;
	    }

	    if (c === void 0) {
	      c = 0;
	    }

	    if (d === void 0) {
	      d = 1;
	    }

	    if (e === void 0) {
	      e = 0;
	    }

	    if (f === void 0) {
	      f = 0;
	    }

	    _setMatrix(this, a, b, c, d, e, f);
	  }

	  var _proto = Matrix2D.prototype;

	  _proto.inverse = function inverse() {
	    var a = this.a,
	        b = this.b,
	        c = this.c,
	        d = this.d,
	        e = this.e,
	        f = this.f,
	        determinant = a * d - b * c || 1e-10;
	    return _setMatrix(this, d / determinant, -b / determinant, -c / determinant, a / determinant, (c * f - d * e) / determinant, -(a * f - b * e) / determinant);
	  };

	  _proto.multiply = function multiply(matrix) {
	    var a = this.a,
	        b = this.b,
	        c = this.c,
	        d = this.d,
	        e = this.e,
	        f = this.f,
	        a2 = matrix.a,
	        b2 = matrix.c,
	        c2 = matrix.b,
	        d2 = matrix.d,
	        e2 = matrix.e,
	        f2 = matrix.f;
	    return _setMatrix(this, a2 * a + c2 * c, a2 * b + c2 * d, b2 * a + d2 * c, b2 * b + d2 * d, e + e2 * a + f2 * c, f + e2 * b + f2 * d);
	  };

	  _proto.clone = function clone() {
	    return new Matrix2D(this.a, this.b, this.c, this.d, this.e, this.f);
	  };

	  _proto.equals = function equals(matrix) {
	    var a = this.a,
	        b = this.b,
	        c = this.c,
	        d = this.d,
	        e = this.e,
	        f = this.f;
	    return a === matrix.a && b === matrix.b && c === matrix.c && d === matrix.d && e === matrix.e && f === matrix.f;
	  };

	  _proto.apply = function apply(point, decoratee) {
	    if (decoratee === void 0) {
	      decoratee = {};
	    }

	    var x = point.x,
	        y = point.y,
	        a = this.a,
	        b = this.b,
	        c = this.c,
	        d = this.d,
	        e = this.e,
	        f = this.f;
	    decoratee.x = x * a + y * c + e || 0;
	    decoratee.y = x * b + y * d + f || 0;
	    return decoratee;
	  };

	  return Matrix2D;
	}();
	function getGlobalMatrix(element, inverse, adjustGOffset, includeScrollInFixed) {
	  if (!element || !element.parentNode || (_doc || _setDoc(element)).documentElement === element) {
	    return new Matrix2D();
	  }

	  var zeroScales = _forceNonZeroScale(element),
	      svg = _svgOwner(element),
	      temps = svg ? _svgTemps : _divTemps,
	      container = _placeSiblings(element, adjustGOffset),
	      b1 = temps[0].getBoundingClientRect(),
	      b2 = temps[1].getBoundingClientRect(),
	      b3 = temps[2].getBoundingClientRect(),
	      parent = container.parentNode,
	      isFixed = !includeScrollInFixed && _isFixed(element),
	      m = new Matrix2D((b2.left - b1.left) / 100, (b2.top - b1.top) / 100, (b3.left - b1.left) / 100, (b3.top - b1.top) / 100, b1.left + (isFixed ? 0 : _getDocScrollLeft()), b1.top + (isFixed ? 0 : _getDocScrollTop()));

	  parent.removeChild(container);

	  if (zeroScales) {
	    b1 = zeroScales.length;

	    while (b1--) {
	      b2 = zeroScales[b1];
	      b2.scaleX = b2.scaleY = 0;
	      b2.renderTransform(1, b2);
	    }
	  }

	  return inverse ? m.inverse() : m;
	}

	/*!
	 * Flip 3.7.1
	 * https://greensock.com
	 *
	 * @license Copyright 2008-2021, GreenSock. All rights reserved.
	 * Subject to the terms at https://greensock.com/standard-license or for
	 * Club GreenSock members, the agreement issued with that membership.
	 * @author: Jack Doyle, jack@greensock.com
	*/

	var _id = 1,
	    _toArray,
	    gsap,
	    _RAD2DEG = 180 / Math.PI,
	    _DEG2RAD = Math.PI / 180,
	    _emptyObj = {},
	    _dashedNameLookup = {},
	    _memoizedRemoveProps = {},
	    _callbacks = "onStart,onUpdate,onComplete,onReverseComplete,onInterrupt".split(","),
	    _removeProps = "transform,transformOrigin,width,height,position,top,left,opacity,zIndex".split(","),
	    _getEl = function _getEl(target) {
	  return _toArray(target)[0] || console.warn("Element not found:", target);
	},
	    _round = function _round(value) {
	  return Math.round(value * 10000) / 10000 || 0;
	},
	    _toggleClass = function _toggleClass(targets, className, action) {
	  return targets.forEach(function (el) {
	    return el.classList[action](className);
	  });
	},
	    _reserved = {
	  zIndex: 1,
	  clear: 1,
	  simple: 1,
	  spin: 1,
	  clearProps: 1,
	  targets: 1,
	  toggleClass: 1,
	  onComplete: 1,
	  onUpdate: 1,
	  onInterrupt: 1,
	  onStart: 1,
	  delay: 1,
	  repeat: 1,
	  repeatDelay: 1,
	  yoyo: 1,
	  scale: 1,
	  fade: 1,
	  absolute: 1,
	  props: 1,
	  onEnter: 1,
	  onLeave: 1,
	  custom: 1,
	  paused: 1,
	  nested: 1
	},
	    _fitReserved = {
	  zIndex: 1,
	  simple: 1,
	  clearProps: 1,
	  scale: 1,
	  absolute: 1,
	  fitChild: 1,
	  getVars: 1,
	  props: 1
	},
	    _camelToDashed = function _camelToDashed(p) {
	  return p.replace(/([A-Z])/g, "-$1").toLowerCase();
	},
	    _listToArray = function _listToArray(list) {
	  return typeof list === "string" ? list.split(" ").join("").split(",") : list;
	},
	    _closestTenth,
	    _copy = function _copy(obj, exclude) {
	  var result = {},
	      p;

	  for (p in obj) {
	    exclude[p] || (result[p] = obj[p]);
	  }

	  return result;
	},
	    _memoizedProps = {},
	    _memoizeProps = function _memoizeProps(props) {
	  var p = _memoizedProps[props] = _listToArray(props);

	  _memoizedRemoveProps[props] = p.concat(_removeProps);
	  return p;
	},
	    _getInverseGlobalMatrix = function _getInverseGlobalMatrix(el) {
	  var cache = el._gsap || gsap.core.getCache(el);

	  if (cache.gmCache === gsap.ticker.frame) {
	    return cache.gMatrix;
	  }

	  cache.gmCache = gsap.ticker.frame;
	  return cache.gMatrix = getGlobalMatrix(el, true, false, true);
	},
	    _getDOMDepth = function _getDOMDepth(el, invert, level) {
	  if (level === void 0) {
	    level = 0;
	  }

	  var parent = el.parentNode,
	      inc = 1000 * Math.pow(10, level) * (invert ? -1 : 1),
	      l = invert ? -inc * 900 : 0;

	  while (el) {
	    l += inc;
	    el = el.previousSibling;
	  }

	  return parent ? l + _getDOMDepth(parent, invert, level + 1) : l;
	},
	    _orderByDOMDepth = function _orderByDOMDepth(comps, invert, isElStates) {
	  comps.forEach(function (comp) {
	    return comp.d = _getDOMDepth(isElStates ? comp.element : comp.t, invert);
	  });
	  comps.sort(function (c1, c2) {
	    return c1.d - c2.d;
	  });
	  return comps;
	},
	    _recordInlineStyles = function _recordInlineStyles(elState, props) {
	  var style = elState.element.style,
	      a = elState.css = elState.css || [],
	      i = props.length,
	      p,
	      v;

	  while (i--) {
	    p = props[i];
	    v = style[p] || style.getPropertyValue(p);
	    a.push(v ? p : _dashedNameLookup[p] || (_dashedNameLookup[p] = _camelToDashed(p)), v);
	  }

	  return style;
	},
	    _applyInlineStyles = function _applyInlineStyles(state) {
	  var css = state.css,
	      style = state.element.style,
	      i = 0;
	  state.cache.uncache = 1;

	  for (; i < css.length; i += 2) {
	    css[i + 1] ? style[css[i]] = css[i + 1] : style.removeProperty(css[i]);
	  }
	},
	    _setFinalStates = function _setFinalStates(comps, onlyTransforms) {
	  var i = comps.length,
	      comp;

	  while (i--) {
	    comp = comps[i];
	    comp.a.cache.uncache = 1;
	  }

	  onlyTransforms || comps.finalStates.forEach(_applyInlineStyles);
	},
	    _makeAbsolute = function _makeAbsolute(elState, fallbackNode) {
	  var element = elState.element,
	      width = elState.width,
	      height = elState.height,
	      uncache = elState.uncache,
	      getProp = elState.getProp,
	      style = element.style,
	      result,
	      displayIsNone;
	  typeof fallbackNode !== "object" && (fallbackNode = elState);

	  if (getProp("position") !== "absolute") {
	    displayIsNone = getProp("display") === "none";

	    if (!elState.isVisible || displayIsNone) {
	      displayIsNone && (_recordInlineStyles(elState, ["display"]).display = fallbackNode.display);
	      elState.matrix = fallbackNode.matrix;
	      elState.width = width = elState.width || fallbackNode.width;
	      elState.height = height = elState.height || fallbackNode.height;
	    }

	    style.position = "absolute";
	    style.width = width + "px";
	    style.height = height + "px";
	    style.top || (style.top = "0px");
	    style.left || (style.left = "0px");

	    if (uncache) {
	      result = new ElementState(element);
	    } else {
	      result = _copy(elState, _emptyObj);
	      result.position = "absolute";

	      if (elState.simple) {
	        var bounds = element.getBoundingClientRect();
	        result.matrix = new Matrix2D(1, 0, 0, 1, bounds.left + _getDocScrollLeft(), bounds.top + _getDocScrollTop());
	      } else {
	        result.matrix = getGlobalMatrix(element, false, false, true);
	      }
	    }

	    result = _fit(result, elState, true);
	    elState.x = parseFloat(result.x);
	    elState.y = parseFloat(result.y);
	  }

	  return element;
	},
	    _findElStateInState = function _findElStateInState(state, other) {
	  return other && state.idLookup[_parseElementState(other).id] || state.elementStates[0];
	},
	    _parseElementState = function _parseElementState(elOrNode, props, simple, other) {
	  return elOrNode instanceof ElementState ? elOrNode : elOrNode instanceof FlipState ? _findElStateInState(elOrNode, other) : new ElementState(typeof elOrNode === "string" ? _getEl(elOrNode) || console.warn(elOrNode + " not found") : elOrNode, props, simple);
	},
	    _recordProps = function _recordProps(elState, props) {
	  var getProp = gsap.getProperty(elState.element, null, "native"),
	      obj = elState.props = {},
	      i = props.length;

	  while (i--) {
	    obj[props[i]] = (getProp(props[i]) + "").trim();
	  }

	  obj.zIndex && (obj.zIndex = parseFloat(obj.zIndex) || 0);
	  return elState;
	},
	    _applyProps = function _applyProps(element, props) {
	  var style = element.style || element,
	      p;

	  for (p in props) {
	    style[p] = props[p];
	  }
	},
	    _getID = function _getID(el) {
	  var id = el.getAttribute("data-flip-id");
	  id || el.setAttribute("data-flip-id", id = "auto-" + _id++);
	  return id;
	},
	    _getCTMInverse = function _getCTMInverse(el) {
	  return el.getCTM && el.nodeName.toLowerCase() === "svg" && _getCTM(el).inverse();
	},
	    _elementsFromElementStates = function _elementsFromElementStates(elStates) {
	  return elStates.map(function (elState) {
	    return elState.element;
	  });
	},
	    _handleCallback = function _handleCallback(callback, elStates, tl) {
	  return callback && elStates.length && tl.add(callback(_elementsFromElementStates(elStates), tl, new FlipState(elStates, 0, true)), 0);
	},
	    _fit = function _fit(fromState, toState, scale, applyProps, fitChild, vars) {
	  var element = fromState.element,
	      cache = fromState.cache,
	      parent = fromState.parent,
	      x = fromState.x,
	      y = fromState.y,
	      width = toState.width,
	      height = toState.height,
	      scaleX = toState.scaleX,
	      scaleY = toState.scaleY,
	      rotation = toState.rotation,
	      cssText = vars && element.style.cssText,
	      transform = vars && element.getBBox && element.getAttribute("transform"),
	      dimensionState = fromState,
	      _toState$matrix = toState.matrix,
	      e = _toState$matrix.e,
	      f = _toState$matrix.f,
	      deep = fromState.width !== width || fromState.height !== height || fromState.scaleX !== scaleX || fromState.scaleY !== scaleY || fromState.rotation !== rotation,
	      simple = !deep && fromState.simple && toState.simple && !fitChild,
	      skewX,
	      fromPoint,
	      toPoint,
	      getProp,
	      parentMatrix,
	      matrix,
	      bbox;

	  if (simple) {
	    scaleX = scaleY = 1;
	    rotation = skewX = 0;
	  } else {
	    parentMatrix = _getInverseGlobalMatrix(parent);
	    matrix = parentMatrix.clone().multiply(toState.ctm ? toState.matrix.clone().multiply(toState.ctm) : toState.matrix);
	    rotation = _round(Math.atan2(matrix.b, matrix.a) * _RAD2DEG);
	    skewX = _round(Math.atan2(matrix.c, matrix.d) * _RAD2DEG + rotation) % 360;
	    scaleX = Math.sqrt(Math.pow(matrix.a, 2) + Math.pow(matrix.b, 2));
	    scaleY = Math.sqrt(Math.pow(matrix.c, 2) + Math.pow(matrix.d, 2)) * Math.cos(skewX * _DEG2RAD);

	    if (fitChild) {
	      fitChild = _toArray(fitChild)[0];
	      getProp = gsap.getProperty(fitChild);
	      bbox = fitChild.getBBox && typeof fitChild.getBBox === "function" && fitChild.getBBox();
	      dimensionState = {
	        scaleX: getProp("scaleX"),
	        scaleY: getProp("scaleY"),
	        width: bbox ? bbox.width : Math.ceil(parseFloat(getProp("width", "px"))),
	        height: bbox ? bbox.height : parseFloat(getProp("height", "px"))
	      };
	    }

	    cache.rotation = rotation + "deg";
	    cache.skewX = skewX + "deg";
	  }

	  if (scale) {
	    scaleX *= width / (dimensionState.width || 1e-9);
	    scaleY *= height / (dimensionState.height || 1e-9);
	    cache.scaleX = scaleX;
	    cache.scaleY = scaleY;
	  } else {
	    width *= scaleX / dimensionState.scaleX;
	    height *= scaleY / dimensionState.scaleY;
	    element.style.width = width + "px";
	    element.style.height = height + "px";
	  }

	  if (fromState.isFixed) {
	    e -= _getDocScrollLeft();
	    f -= _getDocScrollTop();
	  }

	  applyProps && _applyProps(element, toState.props);

	  if (simple) {
	    x += e - fromState.matrix.e;
	    y += f - fromState.matrix.f;
	  } else if (deep || parent !== toState.parent) {
	    cache.renderTransform(1, cache);
	    matrix = getGlobalMatrix(fitChild || element);
	    fromPoint = parentMatrix.apply({
	      x: matrix.e,
	      y: matrix.f
	    });
	    toPoint = parentMatrix.apply({
	      x: e,
	      y: f
	    });
	    x += _round(toPoint.x - fromPoint.x);
	    y += _round(toPoint.y - fromPoint.y);
	  } else {
	    parentMatrix.e = parentMatrix.f = 0;
	    toPoint = parentMatrix.apply({
	      x: e - fromState.matrix.e,
	      y: f - fromState.matrix.f
	    });
	    x += _round(toPoint.x);
	    y += _round(toPoint.y);
	  }

	  if (vars && !(vars instanceof ElementState)) {
	    element.style.cssText = cssText;
	    element.getBBox && element.setAttribute("transform", transform || "");
	    cache.uncache = 1;
	  } else {
	    cache.x = x + "px";
	    cache.y = y + "px";
	    cache.renderTransform(1, cache);
	  }

	  if (vars) {
	    vars.x = x;
	    vars.y = y;
	    vars.rotation = rotation;
	    vars.skewX = skewX;

	    if (scale) {
	      vars.scaleX = scaleX;
	      vars.scaleY = scaleY;
	    } else {
	      vars.width = width;
	      vars.height = height;
	    }
	  }

	  return vars || cache;
	},
	    _parseState = function _parseState(targetsOrState, vars) {
	  return targetsOrState instanceof FlipState ? targetsOrState : new FlipState(targetsOrState, vars);
	},
	    _getChangingElState = function _getChangingElState(toState, fromState, id) {
	  var to1 = toState.idLookup[id],
	      to2 = toState.alt[id];
	  return to2.isVisible && (!(fromState.getElementState(to2.element) || to2).isVisible || !to1.isVisible) ? to2 : to1;
	},
	    _fromTo = function _fromTo(fromState, toState, vars, relative) {

	  fromState instanceof FlipState && toState instanceof FlipState || console.warn("Not a valid state object.");
	  vars = vars || {};

	  var _vars = vars,
	      clearProps = _vars.clearProps,
	      onEnter = _vars.onEnter,
	      onLeave = _vars.onLeave,
	      absolute = _vars.absolute,
	      custom = _vars.custom,
	      delay = _vars.delay,
	      paused = _vars.paused,
	      repeat = _vars.repeat,
	      repeatDelay = _vars.repeatDelay,
	      yoyo = _vars.yoyo,
	      toggleClass = _vars.toggleClass,
	      nested = _vars.nested,
	      _zIndex = _vars.zIndex,
	      scale = _vars.scale,
	      fade = _vars.fade,
	      stagger = _vars.stagger,
	      spin = _vars.spin,
	      props = ("props" in vars ? vars : fromState).props,
	      tweenVars = _copy(vars, _reserved),
	      animation = gsap.timeline({
	    delay: delay,
	    paused: paused,
	    repeat: repeat,
	    repeatDelay: repeatDelay,
	    yoyo: yoyo
	  }),
	      remainingProps = tweenVars,
	      entering = [],
	      leaving = [],
	      comps = [],
	      swapOutTargets = [],
	      spinNum = spin === true ? 1 : spin || 0,
	      spinFunc = typeof spin === "function" ? spin : function () {
	    return spinNum;
	  },
	      interrupted = fromState.interrupted || toState.interrupted,
	      addFunc = animation[relative !== 1 ? "to" : "from"],
	      v,
	      p,
	      endTime,
	      i,
	      el,
	      comp,
	      state,
	      targets,
	      finalStates,
	      fromNode,
	      toNode;

	  relative || (toState = new FlipState(toState.targets, props).fit(toState, scale));

	  for (p in toState.idLookup) {
	    toNode = !toState.alt[p] ? toState.idLookup[p] : _getChangingElState(toState, fromState, p);
	    el = toNode.element;
	    fromNode = fromState.idLookup[p];
	    fromState.alt[p] && el === fromNode.element && (fromNode = fromState.alt[p]);

	    if (fromNode) {
	      comp = {
	        t: el,
	        b: fromNode,
	        a: toNode,
	        sd: fromNode.element === el ? 0 : toNode.isVisible ? 1 : -1
	      };
	      comps.push(comp);

	      if (comp.sd) {
	        if (comp.sd < 0) {
	          comp.b = toNode;
	          comp.a = fromNode;
	        }

	        fade && comps.push(comp.swap = {
	          t: fromNode.element,
	          b: comp.b,
	          a: comp.a,
	          sd: comp.sd * -1,
	          swap: comp
	        });
	      }

	      el._flip = fromNode.element._flip = animation;
	    } else if (toNode.isVisible) {
	      comps.push({
	        t: el,
	        b: _copy(toNode, {
	          isVisible: 1
	        }),
	        a: toNode,
	        sd: 0
	      });
	      el._flip = animation;
	    }
	  }

	  props && (_memoizedProps[props] || _memoizeProps(props)).forEach(function (p) {
	    return tweenVars[p] = function (i) {
	      return comps[i].a.props[p];
	    };
	  });
	  comps.finalStates = finalStates = [];
	  absolute && _orderByDOMDepth(comps, true).forEach(function (c) {
	    return (c.a.isVisible || c.b.isVisible) && _makeAbsolute(c.sd < 0 ? c.b : c.a, c.b);
	  });

	  _orderByDOMDepth(comps);

	  for (i = 0; i < comps.length; i++) {
	    comp = comps[i];
	    el = comp.t;
	    nested && !(comp.sd < 0) && (comp.a.matrix = getGlobalMatrix(el, false, false, true));

	    if (comp.sd || comp.b.isVisible && comp.a.isVisible) {
	      if (comp.sd < 0) {
	        state = new ElementState(el, props, fromState.simple);

	        _fit(state, comp.a, scale, 0, 0, state);

	        state.matrix = getGlobalMatrix(el, false, false, true);
	        state.css = comp.b.css;
	        comp.a = state;
	        fade && (el.style.opacity = interrupted ? comp.b.opacity : comp.a.opacity);
	        stagger && swapOutTargets.push(el);
	      } else if (comp.sd > 0 && fade) {
	        el.style.opacity = interrupted ? comp.a.opacity - comp.b.opacity : "0";
	      }

	      _fit(comp.a, comp.b, scale, props);
	    } else {
	      if (!comp.b.isVisible) {
	        comp.a.isVisible && entering.push(comp.a);
	        comps.splice(i--, 1);
	      } else if (!comp.a.isVisible) {
	        comp.b.css = comp.a.css;
	        leaving.push(comp.b);
	        comps.splice(i--, 1);
	        absolute && nested && _fit(comp.a, comp.b, scale, props);
	      }
	    }

	    finalStates.push(comp.a);
	  }

	  if (scale) {
	    tweenVars.scaleX = function (i) {
	      return comps[i].a.scaleX;
	    };

	    tweenVars.scaleY = function (i) {
	      return comps[i].a.scaleY;
	    };
	  } else {
	    tweenVars.width = function (i) {
	      return comps[i].a.width + "px";
	    };

	    tweenVars.height = function (i) {
	      return comps[i].a.height + "px";
	    };

	    tweenVars.autoRound = vars.autoRound || false;
	  }

	  tweenVars.x = function (i) {
	    return comps[i].a.x + "px";
	  };

	  tweenVars.y = function (i) {
	    return comps[i].a.y + "px";
	  };

	  tweenVars.rotation = function (i) {
	    return comps[i].a.rotation + (spin ? spinFunc(i, targets[i], targets) * 360 : 0);
	  };

	  tweenVars.skewX = function (i) {
	    return comps[i].a.skewX;
	  };

	  targets = comps.map(function (c) {
	    return c.t;
	  });

	  if (_zIndex || _zIndex === 0) {
	    tweenVars.modifiers = {
	      zIndex: function zIndex() {
	        return _zIndex;
	      }
	    };
	    tweenVars.zIndex = _zIndex;
	    tweenVars.immediateRender = vars.immediateRender !== false;
	  }

	  fade && (tweenVars.opacity = function (i) {
	    return comps[i].sd < 0 ? 0 : comps[i].sd > 0 ? comps[i].a.opacity : "+=0";
	  });

	  if (swapOutTargets.length) {
	    stagger = gsap.utils.distribute(stagger);
	    var dummyArray = targets.slice(swapOutTargets.length);

	    tweenVars.stagger = function (i, el) {
	      return stagger(~swapOutTargets.indexOf(el) ? targets.indexOf(comps[i].swap.t) : i, el, dummyArray);
	    };
	  }

	  _callbacks.forEach(function (name) {
	    return vars[name] && animation.eventCallback(name, vars[name], vars[name + "Params"]);
	  });

	  if (custom && targets.length) {
	    remainingProps = _copy(tweenVars, _reserved);

	    if ("scale" in custom) {
	      custom.scaleX = custom.scaleY = custom.scale;
	      delete custom.scale;
	    }

	    for (p in custom) {
	      v = _copy(custom[p], _fitReserved);
	      v[p] = tweenVars[p];
	      !("duration" in v) && "duration" in tweenVars && (v.duration = tweenVars.duration);
	      v.stagger = tweenVars.stagger;
	      addFunc.call(animation, targets, v, 0);
	      delete remainingProps[p];
	    }
	  }

	  if (targets.length || leaving.length || entering.length) {
	    toggleClass && animation.add(function () {
	      return _toggleClass(targets, toggleClass, animation._zTime < 0 ? "remove" : "add");
	    }, 0) && !paused && _toggleClass(targets, toggleClass, "add");
	    targets.length && addFunc.call(animation, targets, remainingProps, 0);
	  }

	  _handleCallback(onEnter, entering, animation);

	  _handleCallback(onLeave, leaving, animation);

	  endTime = animation.duration();
	  animation.call(function () {
	    var forward = animation.time() >= endTime;
	    forward && _setFinalStates(comps, !clearProps);
	    toggleClass && _toggleClass(targets, toggleClass, forward ? "remove" : "add");
	  });
	  return animation;
	},
	    _createLookup = function _createLookup(state) {
	  var lookup = state.idLookup = {},
	      alt = state.alt = {},
	      elStates = state.elementStates,
	      i = elStates.length,
	      elState;

	  while (i--) {
	    elState = elStates[i];
	    lookup[elState.id] ? alt[elState.id] = elState : lookup[elState.id] = elState;
	  }
	};

	var FlipState = function () {
	  function FlipState(targets, vars, targetsAreElementStates) {
	    this.props = vars && vars.props;
	    this.simple = !!(vars && vars.simple);

	    if (targetsAreElementStates) {
	      this.targets = _elementsFromElementStates(targets);
	      this.elementStates = targets;

	      _createLookup(this);
	    } else {
	      this.targets = _toArray(targets);
	      this.update(!vars || vars.clear !== false);
	    }
	  }

	  var _proto = FlipState.prototype;

	  _proto.update = function update(clear) {
	    var _this = this;

	    this.elementStates = this.targets.map(function (el) {
	      return new ElementState(el, _this.props, _this.simple);
	    });

	    _createLookup(this);

	    this.killFlips(clear);
	    this.recordInlineStyles();
	    return this;
	  };

	  _proto.fit = function fit(state, scale, nested) {
	    var elStatesInOrder = _orderByDOMDepth(this.elementStates.slice(0), false, true),
	        toElStates = (state || this).idLookup,
	        i = 0,
	        fromNode,
	        toNode;

	    for (; i < elStatesInOrder.length; i++) {
	      fromNode = elStatesInOrder[i];
	      nested && (fromNode.matrix = getGlobalMatrix(fromNode.element, false, false, true));
	      toNode = toElStates[fromNode.id];
	      toNode && _fit(fromNode, toNode, scale, true, 0, fromNode);
	      fromNode.matrix = getGlobalMatrix(fromNode.element, false, false, true);
	    }

	    return this;
	  };

	  _proto.getProperty = function getProperty(element, property) {
	    var es = this.getElementState(element) || _emptyObj;

	    return property in es ? es[property] : (es.props || _emptyObj)[property];
	  };

	  _proto.recordInlineStyles = function recordInlineStyles() {
	    var props = _memoizedRemoveProps[this.props] || _removeProps,
	        i = this.elementStates.length;

	    while (i--) {
	      _recordInlineStyles(this.elementStates[i], props);
	    }
	  };

	  _proto.killFlips = function killFlips(clear) {
	    var found;
	    this.targets.forEach(function (tl) {
	      tl = tl._flip;

	      if (tl && tl.progress() < 1 && !tl.paused()) {
	        found = 1;
	        tl.vars.onInterrupt && tl.vars.onInterrupt.apply(tl, tl.vars.onInterruptParams || []);
	        clear && tl.progress(1);
	        tl.kill();
	      }
	    });

	    if (found && clear) {
	      this.elementStates.forEach(function (es) {
	        var b = es.element.getBoundingClientRect();
	        es.isVisible = b.width || b.height || b.top || b.left;
	        es.uncache = 1;
	      });
	    }

	    this.interrupted = !!found;
	  };

	  _proto.getElementState = function getElementState(element) {
	    return this.elementStates[this.targets.indexOf(_getEl(element))];
	  };

	  _proto.makeAbsolute = function makeAbsolute() {
	    return _orderByDOMDepth(this.elementStates.slice(0), true, true).map(_makeAbsolute);
	  };

	  return FlipState;
	}();

	var ElementState = function () {
	  function ElementState(element, props, simple) {
	    this.element = element;
	    this.update(props, simple);
	  }

	  var _proto2 = ElementState.prototype;

	  _proto2.update = function update(props, simple) {
	    var element = this.element,
	        getProp = gsap.getProperty(element),
	        cache = gsap.core.getCache(element),
	        bounds = element.getBoundingClientRect(),
	        bbox = element.getBBox && typeof element.getBBox === "function" && element.nodeName.toLowerCase() !== "svg" && element.getBBox(),
	        m = simple ? new Matrix2D(1, 0, 0, 1, bounds.left + _getDocScrollLeft(), bounds.top + _getDocScrollTop()) : getGlobalMatrix(element, false, false, true);
	    this.getProp = getProp;
	    this.element = element;
	    this.id = _getID(element);
	    this.matrix = m;
	    this.cache = cache;
	    this.bounds = bounds;
	    this.isVisible = !!(bounds.width || bounds.height || bounds.left || bounds.top);
	    this.display = getProp("display");
	    this.position = getProp("position");
	    this.isFixed = _isFixed(element);
	    this.parent = element.parentNode;
	    this.x = getProp("x");
	    this.y = getProp("y");
	    this.scaleX = cache.scaleX;
	    this.scaleY = cache.scaleY;
	    this.rotation = getProp("rotation");
	    this.skewX = getProp("skewX");
	    this.opacity = getProp("opacity");
	    this.width = bbox ? bbox.width : _closestTenth(parseFloat(getProp("width", "px")) + 0.04);
	    this.height = bbox ? bbox.height : parseFloat(getProp("height", "px"));
	    props && _recordProps(this, _memoizedProps[props] || _memoizeProps(props));
	    this.ctm = _getCTMInverse(element);
	    this.simple = simple || _round(m.a) === 1 && !_round(m.b) && !_round(m.c) && _round(m.d) === 1;
	    this.uncache = 0;
	  };

	  return ElementState;
	}();

	var Flip = function () {
	  function Flip() {}

	  Flip.getState = function getState(targets, vars) {
	    return _parseState(targets, typeof vars === "string" ? {
	      props: vars
	    } : vars);
	  };

	  Flip.from = function from(state, vars) {
	    vars = vars || {};
	    "clearProps" in vars || (vars.clearProps = true);
	    return _fromTo(state, _parseState(vars.targets || state.targets, {
	      props: vars.props || state.props,
	      simple: vars.simple,
	      clear: !!vars.clear
	    }), vars, -1);
	  };

	  Flip.to = function to(state, vars) {
	    return _fromTo(state, _parseState(vars.targets || state.targets, {
	      props: vars.props || state.props,
	      simple: vars.simple,
	      clear: !!vars.clear
	    }), vars, 1);
	  };

	  Flip.fromTo = function fromTo(fromState, toState, vars) {
	    return _fromTo(fromState, toState, vars);
	  };

	  Flip.fit = function fit(fromEl, toEl, vars) {

	    var v = vars ? _copy(vars, _fitReserved) : {},
	        _ref = vars || v,
	        absolute = _ref.absolute,
	        scale = _ref.scale,
	        getVars = _ref.getVars,
	        props = _ref.props,
	        runBackwards = _ref.runBackwards,
	        onComplete = _ref.onComplete,
	        simple = _ref.simple,
	        fitChild = vars && vars.fitChild && _getEl(vars.fitChild),
	        before = _parseElementState(toEl, props, simple, fromEl),
	        after = _parseElementState(fromEl, 0, simple, before),
	        inlineProps = props ? _memoizedRemoveProps[props] : _removeProps;

	    props && _applyProps(v, before.props);

	    if (runBackwards) {
	      _recordInlineStyles(after, inlineProps);

	      "immediateRender" in v || (v.immediateRender = true);

	      v.onComplete = function () {
	        _applyInlineStyles(after);

	        onComplete && onComplete.apply(this, arguments);
	      };
	    }

	    absolute && _makeAbsolute(after, before);
	    v = _fit(after, before, scale || fitChild, props, fitChild, v.duration || getVars ? v : 0);
	    return getVars ? v : v.duration ? gsap.to(after.element, v) : null;
	  };

	  Flip.makeAbsolute = function makeAbsolute(targetsOrStates, vars) {
	    return (targetsOrStates instanceof FlipState ? targetsOrStates : new FlipState(targetsOrStates, vars)).makeAbsolute();
	  };

	  Flip.isFlipping = function isFlipping(target) {
	    var f = Flip.getByTarget(target);
	    return !!f && f.isActive();
	  };

	  Flip.getByTarget = function getByTarget(target) {
	    return (_getEl(target) || _emptyObj)._flip;
	  };

	  Flip.getElementState = function getElementState(target, props) {
	    return new ElementState(_getEl(target), props);
	  };

	  Flip.convertCoordinates = function convertCoordinates(fromElement, toElement, point) {
	    var m = getGlobalMatrix(toElement, true, true).multiply(getGlobalMatrix(fromElement));
	    return point ? m.apply(point) : m;
	  };

	  Flip.register = function register(core) {
	    gsap = core;

	    _setDoc(document.body || document.documentElement);

	    _toArray = gsap.utils.toArray;
	    _closestTenth = gsap.utils.snap(0.1);
	  };

	  return Flip;
	}();
	Flip.version = "3.7.1";
	typeof window !== "undefined" && window.gsap && window.gsap.registerPlugin(Flip);

	exports.Flip = Flip;
	exports.default = Flip;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
