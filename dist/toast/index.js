"use strict";
var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent")),
    _classNames2 = _interopRequireDefault(require("../helpers/classNames")), _index = require("../index");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {default: e}
}

function ownKeys(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(t);
        e && (s = s.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        })), n.push.apply(n, s)
    }
    return n
}

function _objectSpread(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2 ? ownKeys(n, !0).forEach(function (e) {
            _defineProperty(t, e, n[e])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ownKeys(n).forEach(function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        })
    }
    return t
}

function _defineProperty(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

var defaults = {
    prefixCls: "wux-toast",
    classNames: "wux-animate--fadeIn",
    type: "default",
    duration: 1500,
    color: "#fff",
    text: "",
    icon: "",
    mask: !0,
    transparent: !0,
    success: function () {
    }
}, iconTypes = {
    success: "ios-checkmark-circle-outline",
    cancel: "ios-close-circle-outline",
    forbidden: "ios-alert",
    text: "",
    default: ""
}, _toast = null;
(0, _baseComponent.default)({
    useFunc: !0, data: defaults, computed: {
        classes: ["prefixCls, icon", function (e, t) {
            return {
                wrap: (0, _classNames2.default)(e),
                content: (0, _classNames2.default)("".concat(e, "__content"), _defineProperty({}, "".concat(e, "__content--has-icon"), t)),
                icon: "".concat(e, "__icon"),
                text: "".concat(e, "__text")
            }
        }]
    }, methods: {
        hide: function () {
            if (this.removed) return !1;
            this.removed = !0, _toast && (clearTimeout(_toast.timeout), _toast = null), this.$$setData({in: !1}), this.$wuxBackdrop && this.$wuxBackdrop.release(), "function" == typeof this.fns.success && this.fns.success()
        }, show: function (s, e) {
            var r = this;
            "string" == typeof s && (s = Object.assign({}, {text: arguments[0]}, e));

            function t() {
                _toast && _toast.hide.call(r)
            }

            var n = new Promise(function (e) {
                var t = r.$$mergeOptionsAndBindMethods(Object.assign({}, defaults, s)), n = iconTypes[t.type] || t.icon;
                t.icon = n, r.removed = !1, r.$$setData(_objectSpread({in: !0}, t)), r.$wuxBackdrop && r.$wuxBackdrop.retain(), _toast && (clearTimeout(_toast.timeout), _toast = null), (_toast = {hide: r.hide}).timeout = setTimeout(function () {
                    return r.hide(), e(!0)
                }, Math.max(0, t.duration))
            });
            return t.then = function (e, t) {
                return n.then(e, t)
            }, t.promise = n, t
        }, success: function (e, t) {
            return "string" == typeof e && (e = Object.assign({}, {text: arguments[0]}, t)), this.show(Object.assign({type: "success"}, e))
        }, warning: function (e, t) {
            return "string" == typeof e && (e = Object.assign({}, {text: arguments[0]}, t)), this.show(Object.assign({type: "forbidden"}, e))
        }, error: function (e, t) {
            return "string" == typeof e && (e = Object.assign({}, {text: arguments[0]}, t)), this.show(Object.assign({type: "cancel"}, e))
        }, info: function (e, t) {
            return "string" == typeof e && (e = Object.assign({}, {text: arguments[0]}, t)), this.show(Object.assign({type: "text"}, e))
        }
    }, created: function () {
        this.data.mask && (this.$wuxBackdrop = (0, _index.$wuxBackdrop)("#wux-backdrop", this))
    }
});