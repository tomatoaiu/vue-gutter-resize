'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('assert');

var MAX_DRAG_RANGE = 100;
var MIN_DRAG_RANGE = 0;

var script = {
  data: function data() {
    return {
      target: undefined,
      areaSize: [],
      gutterComponent: {
        width: 0,
        height: 0,
        offsetX: 0,
        offsetY: 0
      }
    };
  },
  created: function created() {
    this.divideArea();
  },
  mounted: function mounted() {
    this.setPlaygroundRect();
  },

  methods: {
    isArrayContains: function isArrayContains(array) {
      return array && array.length && array.length > 0;
    },
    draggingGutter: function draggingGutter(e, mousePosition, index, gutterSize) {
      var gutterSum = this.getGutterSum(index, this.gutterSize, this.gutterSizes);
      if (this.isDraggingGutter(e)) {
        var oneTopSize = (mousePosition + gutterSum) / gutterSize * 100;
        if (this.isGutterInRange(oneTopSize)) {
          var before = 0;
          for (var i = 0; i < index; i++) {
            before += this.areaSize[i];
          }
          var sum = this.areaSize[index] + this.areaSize[index + 1];
          if (oneTopSize - before >= 0 && before + sum - oneTopSize >= 0) {
            this.areaSize.splice(index, 1, oneTopSize - before);
            this.areaSize.splice(index + 1, 1, before + sum - oneTopSize);
          }
        }
      }
    },
    specifyDivideArea: function specifyDivideArea(sizes) {
      var _this = this;

      var sum = sizes.reduce(function (prev, current) {
        return prev + current;
      });
      if (sum > 100) throw console.error('Please total area size is 100 or less.');
      sizes.forEach(function (size) {
        var raio = 100 / sum;
        _this.areaSize.push(size * raio);
      });
    },
    generalDivideArea: function generalDivideArea() {
      for (var i = 0; i < this.row; i++) {
        this.areaSize.push(100 / this.row);
      }
    },
    dragstart: function dragstart(e, index) {
      if (this.target && this.target.classList) {
        this.target.classList.remove('active');
      }
      e.target.classList.add('active');
      this.target = e.target;
    },
    setPlaygroundRect: function setPlaygroundRect() {
      var clientRect = this.$refs.gutter.getBoundingClientRect();
      this.gutterComponent.width = clientRect.width;
      this.gutterComponent.height = clientRect.height;
      this.gutterComponent.offsetX = window.pageXOffset + clientRect.left;
      this.gutterComponent.offsetY = window.pageYOffset + clientRect.top;
    },
    isDraggingGutter: function isDraggingGutter(e) {
      return e && e.clientX > 0 && e.clientY > 0;
    },
    isGutterInRange: function isGutterInRange(size) {
      return size < MAX_DRAG_RANGE && size > MIN_DRAG_RANGE;
    },
    getCurrentMousePosition: function getCurrentMousePosition(e) {
      return { mouseX: e.clientX - this.gutterComponent.offsetX, mouseY: e.clientY - this.gutterComponent.offsetY };
    },
    getGutterSum: function getGutterSum(index, gutterSize, gutterSizes) {
      var gutterSum = 0;
      if (this.isArrayContains(this.gutterSizes)) {
        for (var i = 0; i < index; i++) {
          gutterSum += this.gutterSizes[i].match(/-?[0-9]+\.?[0-9]*/g).pop() | 0;
        }
        gutterSum += (this.gutterSizes[index].match(/-?[0-9]+\.?[0-9]*/g).pop() | 0) / 2;
      } else {
        for (var _i = 0; _i < index; _i++) {
          gutterSum += this.gutterSize.match(/-?[0-9]+\.?[0-9]*/g).pop() | 0;
        }
        gutterSum += (this.gutterSize.match(/-?[0-9]+\.?[0-9]*/g).pop() | 0) / 2;
      }
      return gutterSum;
    }
  }
};

var __vue_script__ = script;

/* template */

var __vue_template__ = typeof __vue_render__ !== 'undefined' ? { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ } : {};
/* style */
var __vue_inject_styles__ = undefined;
/* scoped */
var __vue_scope_id__ = undefined;
/* module identifier */
var __vue_module_identifier__ = undefined;
/* functional template */
var __vue_is_functional_template__ = undefined;
/* component normalizer */
function __vue_normalize__(template, style, script$$1, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

  {
    component.__file = "/Users/tobashunsuke/development/vue-gutter-resize/src/mixins/gutter.vue";
  }

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */
function __vue_create_injector__() {
  var head = document.head || document.getElementsByTagName('head')[0];
  var styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
  var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

  return function addStyle(id, css) {
    if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return; // SSR styles are present.

    var group = isOldIE ? css.media || 'default' : id;
    var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

    if (!style.ids.includes(id)) {
      var code = css.source;
      var index = style.ids.length;

      style.ids.push(id);

      if (isOldIE) {
        style.element = style.element || document.querySelector('style[data-group=' + group + ']');
      }

      if (!style.element) {
        var el = style.element = document.createElement('style');
        el.type = 'text/css';

        if (css.media) el.setAttribute('media', css.media);
        if (isOldIE) {
          el.setAttribute('data-group', group);
          el.setAttribute('data-next-index', '0');
        }

        head.appendChild(el);
      }

      if (isOldIE) {
        index = parseInt(style.element.getAttribute('data-next-index'));
        style.element.setAttribute('data-next-index', index + 1);
      }

      if (style.element.styleSheet) {
        style.parts.push(code);
        style.element.styleSheet.cssText = style.parts.filter(Boolean).join('\n');
      } else {
        var textNode = document.createTextNode(code);
        var nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  };
}
/* style inject SSR */

var gutter = __vue_normalize__(__vue_template__, __vue_inject_styles__, typeof __vue_script__ === 'undefined' ? {} : __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, typeof __vue_create_injector__ !== 'undefined' ? __vue_create_injector__ : function () {}, typeof __vue_create_injector_ssr__ !== 'undefined' ? __vue_create_injector_ssr__ : function () {});

//

var script$1 = {
  name: 'columnGutter',
  mixins: [gutter],
  props: {
    width: {
      type: String,
      required: true,
      default: '500px'
    },
    height: {
      type: String,
      required: true,
      default: '500px'
    },
    gutterSize: {
      type: String
    },
    gutterSizes: {
      type: Array
    },
    color: {
      type: String
    },
    colors: {
      type: Array
    },
    column: {
      type: Number,
      required: true,
      default: 2
    },
    columnSizes: {
      type: Array
    }
  },
  created: function created() {
    if (this.isArrayContains(this.columnSizes)) {
      if (this.column !== this.columnSizes.length) throw console.error('Please column equal columnSizes.length\ncolumn: ' + this.column + ', columnSizes.length: ' + this.columnSizes.length);
    }
    if (this.isArrayContains(this.colors)) {
      if (this.column - 1 !== this.colors.length) throw console.error('Please (column - 1) equal colors.length\n(column - 1): ' + (this.column - 1) + ', colors.length: ' + this.colors.length);
    }
  },

  methods: {
    divideArea: function divideArea() {
      if (this.isArrayContains(this.columnSizes)) {
        this.specifyDivideArea(this.columnSizes);
      } else {
        this.generalDivideArea();
      }
    },
    drag: function drag(e, index) {
      var _getCurrentMousePosit = this.getCurrentMousePosition(e),
          mouseX = _getCurrentMousePosit.mouseX;

      this.draggingGutter(e, mouseX, index, this.gutterComponent.width);
      this.$emit('resize', { col: this.areaSize });
    }
  }
};

var __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("section", {
    ref: "gutter",
    style: "width: " + _vm.width + "; height: " + _vm.height + ";"
  }, [_c("div", {
    staticClass: "pane pane-v left",
    style: "width: calc(" + _vm.areaSize[0] + "% - " + (_vm.gutterSize || _vm.gutterSizes[0]) + ");"
  }, [_vm._t("col-" + 0)], 2), _vm._v(" "), _vm._l(_vm.column - 1, function (n) {
    return _c("div", {
      key: n,
      staticClass: "afterCol",
      style: "width: calc(" + _vm.areaSize[n] + "% - " + (_vm.gutterSize || _vm.gutterSizes[n - 1]) + ");"
    }, [_c("div", {
      staticClass: "gutter gutter-v",
      style: "width: " + (_vm.gutterSize || _vm.gutterSizes[n - 1]) + "; height: " + _vm.height + "; background-color: " + (_vm.color || _vm.colors[n - 1]) + ";",
      attrs: { draggable: "true" },
      on: {
        drag: function drag(e) {
          _vm.drag(e, n - 1);
        },
        dragstart: function dragstart($event) {
          _vm.dragstart($event, n - 1);
        }
      }
    }), _vm._v(" "), n !== _vm.column - 1 ? _c("div", {
      staticClass: "pane pane-v",
      style: "width: calc(" + 100 + "% - " + (_vm.gutterSize || _vm.gutterSizes[n - 1])
    }, [_vm._t("col-" + n)], 2) : _c("div", {
      staticClass: "pane pane-v",
      style: "width: calc(" + 100 + "%}"
    }, [_vm._t("col-" + n)], 2)]);
  })], 2);
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

var __vue_template__$1 = typeof __vue_render__$1 !== 'undefined' ? { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 } : {};
/* style */
var __vue_inject_styles__$1 = function (inject) {
  if (!inject) return;
  inject("data-v-2f5ba3b4_0", { source: "\n.pane-v[data-v-2f5ba3b4] {\n  float: left;\n  height: 100%;\n}\n.afterCol[data-v-2f5ba3b4] {\n  height: 100%;\n  display: inline-block;\n}\n.gutter[data-v-2f5ba3b4] {\n  background: #ccc;\n  overflow: hidden;\n  position: relative;\n}\n.active[data-v-2f5ba3b4] {\n  z-index: 1;\n}\n.gutter-v[data-v-2f5ba3b4] {\n  float: left;\n  width: 2px;\n  height: 100%;\n  cursor: ew-resize;\n}\n", map: undefined, media: undefined });
};
/* scoped */
var __vue_scope_id__$1 = "data-v-2f5ba3b4";
/* module identifier */
var __vue_module_identifier__$1 = undefined;
/* functional template */
var __vue_is_functional_template__$1 = false;
/* component normalizer */
function __vue_normalize__$1(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  {
    component.__file = "/Users/tobashunsuke/development/vue-gutter-resize/src/components/column-gutter.vue";
  }

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  {
    var hook = void 0;
    if (style) {
      hook = function hook(context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook !== undefined) {
      if (component.functional) {
        // register for functional component in vue file
        var originalRender = component.render;
        component.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        var existing = component.beforeCreate;
        component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
  }

  return component;
}
/* style inject */
function __vue_create_injector__$1() {
  var head = document.head || document.getElementsByTagName('head')[0];
  var styles = __vue_create_injector__$1.styles || (__vue_create_injector__$1.styles = {});
  var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

  return function addStyle(id, css) {
    if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return; // SSR styles are present.

    var group = isOldIE ? css.media || 'default' : id;
    var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

    if (!style.ids.includes(id)) {
      var code = css.source;
      var index = style.ids.length;

      style.ids.push(id);

      if (isOldIE) {
        style.element = style.element || document.querySelector('style[data-group=' + group + ']');
      }

      if (!style.element) {
        var el = style.element = document.createElement('style');
        el.type = 'text/css';

        if (css.media) el.setAttribute('media', css.media);
        if (isOldIE) {
          el.setAttribute('data-group', group);
          el.setAttribute('data-next-index', '0');
        }

        head.appendChild(el);
      }

      if (isOldIE) {
        index = parseInt(style.element.getAttribute('data-next-index'));
        style.element.setAttribute('data-next-index', index + 1);
      }

      if (style.element.styleSheet) {
        style.parts.push(code);
        style.element.styleSheet.cssText = style.parts.filter(Boolean).join('\n');
      } else {
        var textNode = document.createTextNode(code);
        var nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  };
}
/* style inject SSR */

var columnGutter = __vue_normalize__$1(__vue_template__$1, __vue_inject_styles__$1, typeof __vue_script__$1 === 'undefined' ? {} : __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, typeof __vue_create_injector__$1 !== 'undefined' ? __vue_create_injector__$1 : function () {}, typeof __vue_create_injector_ssr__ !== 'undefined' ? __vue_create_injector_ssr__ : function () {});

//

var script$2 = {
  name: 'rowGutter',
  mixins: [gutter],
  props: {
    width: {
      type: String,
      required: true,
      default: '500px'
    },
    height: {
      type: String,
      required: true,
      default: '500px'
    },
    gutterSize: {
      type: String
    },
    gutterSizes: {
      type: Array
    },
    color: {
      type: String
    },
    colors: {
      type: Array
    },
    row: {
      type: Number,
      required: true,
      default: 2
    },
    rowSizes: {
      type: Array
    }
  },
  created: function created() {
    if (this.isArrayContains(this.rowSizes)) {
      if (this.row !== this.rowSizes.length) throw console.error('Please row equal rowSizes.length\nrow: ' + this.row + ', rowSizes.length: ' + this.rowSizes.length);
    }
    if (this.isArrayContains(this.colors)) {
      if (this.row - 1 !== this.colors.length) throw console.error('Please (row - 1) equal colors.length\n(row - 1): ' + (this.row - 1) + ', colors.length: ' + this.colors.length);
    }
  },

  methods: {
    divideArea: function divideArea() {
      if (this.isArrayContains(this.rowSizes)) {
        this.specifyDivideArea(this.rowSizes);
      } else {
        this.generalDivideArea();
      }
    },
    drag: function drag(e, index) {
      var _getCurrentMousePosit = this.getCurrentMousePosition(e),
          mouseY = _getCurrentMousePosit.mouseY;

      this.draggingGutter(e, mouseY, index, this.gutterComponent.height);
      this.$emit('resize', { row: this.areaSize });
    }
  }
};

var __vue_script__$2 = script$2;

/* template */
var __vue_render__$2 = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("section", {
    ref: "gutter",
    style: "width: " + _vm.width + "; height: " + _vm.height + ";"
  }, [_c("div", { style: "height: calc(" + _vm.areaSize[0] + "%);" }, [_vm._t("row-0")], 2), _vm._v(" "), _vm._l(_vm.row - 1, function (n) {
    return _c("div", {
      key: n,
      style: "height: calc(" + _vm.areaSize[n] + "% - " + (_vm.gutterSize || _vm.gutterSizes[n - 1]) + ");"
    }, [_c("div", {
      staticClass: "gutter gutter-h",
      style: "height: " + (_vm.gutterSize || _vm.gutterSizes[n - 1]) + "; width: " + _vm.width + "; background-color: " + (_vm.color || _vm.colors[n - 1]) + ";",
      attrs: { draggable: "true" },
      on: {
        drag: function drag(e) {
          _vm.drag(e, n - 1);
        },
        dragstart: function dragstart($event) {
          _vm.dragstart($event, n - 1);
        }
      }
    }), _vm._v(" "), n !== _vm.row - 1 ? _c("div", {
      staticClass: "pane pane-h",
      style: "height: calc(" + 100 + "% - " + (_vm.gutterSize || _vm.gutterSizes[n - 1]) + ");"
    }, [_vm._t("row-" + n)], 2) : _c("div", {
      staticClass: "pane pane-h",
      style: "height: calc(" + 100 + "%});"
    }, [_vm._t("row-" + n)], 2)]);
  })], 2);
};
var __vue_staticRenderFns__$2 = [];
__vue_render__$2._withStripped = true;

var __vue_template__$2 = typeof __vue_render__$2 !== 'undefined' ? { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 } : {};
/* style */
var __vue_inject_styles__$2 = function (inject) {
  if (!inject) return;
  inject("data-v-7a7a92d9_0", { source: "\n.pane[data-v-7a7a92d9] {\n  height: 100%;\n}\n.pane-v[data-v-7a7a92d9] {\n  float: left;\n}\n.gutter[data-v-7a7a92d9] {\n  background: #ccc;\n  overflow: hidden;\n  position: relative;\n}\n.active[data-v-7a7a92d9] {\n  z-index: 1;\n}\n.gutter-h[data-v-7a7a92d9] {\n  width: 100%;\n  height: 2px;\n  cursor: ns-resize;\n}\n", map: undefined, media: undefined });
};
/* scoped */
var __vue_scope_id__$2 = "data-v-7a7a92d9";
/* module identifier */
var __vue_module_identifier__$2 = undefined;
/* functional template */
var __vue_is_functional_template__$2 = false;
/* component normalizer */
function __vue_normalize__$2(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  {
    component.__file = "/Users/tobashunsuke/development/vue-gutter-resize/src/components/row-gutter.vue";
  }

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  {
    var hook = void 0;
    if (style) {
      hook = function hook(context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook !== undefined) {
      if (component.functional) {
        // register for functional component in vue file
        var originalRender = component.render;
        component.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        var existing = component.beforeCreate;
        component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
  }

  return component;
}
/* style inject */
function __vue_create_injector__$2() {
  var head = document.head || document.getElementsByTagName('head')[0];
  var styles = __vue_create_injector__$2.styles || (__vue_create_injector__$2.styles = {});
  var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

  return function addStyle(id, css) {
    if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return; // SSR styles are present.

    var group = isOldIE ? css.media || 'default' : id;
    var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

    if (!style.ids.includes(id)) {
      var code = css.source;
      var index = style.ids.length;

      style.ids.push(id);

      if (isOldIE) {
        style.element = style.element || document.querySelector('style[data-group=' + group + ']');
      }

      if (!style.element) {
        var el = style.element = document.createElement('style');
        el.type = 'text/css';

        if (css.media) el.setAttribute('media', css.media);
        if (isOldIE) {
          el.setAttribute('data-group', group);
          el.setAttribute('data-next-index', '0');
        }

        head.appendChild(el);
      }

      if (isOldIE) {
        index = parseInt(style.element.getAttribute('data-next-index'));
        style.element.setAttribute('data-next-index', index + 1);
      }

      if (style.element.styleSheet) {
        style.parts.push(code);
        style.element.styleSheet.cssText = style.parts.filter(Boolean).join('\n');
      } else {
        var textNode = document.createTextNode(code);
        var nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  };
}
/* style inject SSR */

var rowGutter = __vue_normalize__$2(__vue_template__$2, __vue_inject_styles__$2, typeof __vue_script__$2 === 'undefined' ? {} : __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, typeof __vue_create_injector__$2 !== 'undefined' ? __vue_create_injector__$2 : function () {}, typeof __vue_create_injector_ssr__ !== 'undefined' ? __vue_create_injector_ssr__ : function () {});

var Components = {
  columnGutter: columnGutter,
  rowGutter: rowGutter
};

function install(Vue) {
  Object.keys(Components).forEach(function (name) {
    Vue.component(name, Components[name]);
  });
}

// Make it available as vue plugin
var index = {
  install: install
};

exports.columnGutter = columnGutter;
exports.rowGutter = rowGutter;
exports.default = index;
