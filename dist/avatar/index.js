"use strict";
var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent")),
    _classNames2 = _interopRequireDefault(require("../helpers/classNames")),
    _styleToCssString = _interopRequireDefault(require("../helpers/styleToCssString"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {default: e}
}

function _slicedToArray(e, t) {
    return _arrayWithHoles(e) || _iterableToArrayLimit(e, t) || _nonIterableRest()
}

function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance")
}

function _iterableToArrayLimit(e, t) {
    var r = [], n = !0, a = !1, i = void 0;
    try {
        for (var l, o = e[Symbol.iterator](); !(n = (l = o.next()).done) && (r.push(l.value), !t || r.length !== t); n = !0) ;
    } catch (e) {
        a = !0, i = e
    } finally {
        try {
            n || null == o.return || o.return()
        } finally {
            if (a) throw i
        }
    }
    return r
}

function _arrayWithHoles(e) {
    if (Array.isArray(e)) return e
}

function _defineProperty(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

(0, _baseComponent.default)({
    properties: {
        prefixCls: {type: String, value: "wux-avatar"},
        shape: {type: String, value: "circle"},
        size: {type: String, value: "default"},
        src: {type: String, value: ""},
        bodyStyle: {
            type: [String, Object], value: "", observer: function (e) {
                this.setData({extStyle: (0, _styleToCssString.default)(e)})
            }
        },
        scale: {type: Boolean, value: !1}
    },
    data: {extStyle: "", childrenStyle: ""},
    computed: {
        classes: ["prefixCls, shape, size, src", function (e, t, r, n) {
            var a;
            return {
                wrap: (0, _classNames2.default)(e, (_defineProperty(a = {}, "".concat(e, "--").concat(t), t), _defineProperty(a, "".concat(e, "--").concat(r), r), _defineProperty(a, "".concat(e, "--thumb"), n), a)),
                string: "".concat(e, "__string")
            }
        }]
    },
    methods: {
        setScale: function () {
            var l = this, e = this.data.prefixCls, t = wx.createSelectorQuery().in(this);
            t.select(".".concat(e)).boundingClientRect(), t.select(".".concat(e, "__string")).boundingClientRect(), t.exec(function (e) {
                if (!e.filter(function (e) {
                    return !e
                }).length) {
                    var t = _slicedToArray(e, 2), r = t[0], n = t[1],
                        a = r.width - 8 < n.width ? (r.width - 8) / n.width : 1,
                        i = 1 != a ? "position: absolute; display: inline-block; transform: scale(".concat(a, "); left: calc(50% - ").concat(Math.round(n.width / 2), "px)") : "";
                    l.setData({childrenStyle: i})
                }
            })
        }
    },
    ready: function () {
        !this.data.src && this.data.scale && this.setScale()
    }
});