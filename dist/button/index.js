"use strict";
var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent")),
    _classNames2 = _interopRequireDefault(require("../helpers/classNames"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}

function _defineProperty(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
} (0, _baseComponent.default)({
    properties: {
        prefixCls: {
            type: String,
            value: "wux-button"
        },
        type: {
            type: String,
            value: "stable"
        },
        clear: {
            type: Boolean,
            value: !1
        },
        block: {
            type: Boolean,
            value: !1
        },
        full: {
            type: Boolean,
            value: !1
        },
        outline: {
            type: Boolean,
            value: !1
        },
        bordered: {
            type: Boolean,
            value: !0
        },
        size: {
            type: String,
            value: "default"
        },
        disabled: {
            type: Boolean,
            value: !1
        },
        loading: {
            type: Boolean,
            value: !1
        },
        formType: {
            type: String,
            value: ""
        },
        openType: {
            type: String,
            value: ""
        },
        hoverClass: {
            type: String,
            value: "default"
        },
        hoverStopPropagation: {
            type: Boolean,
            value: !1
        },
        hoverStartTime: {
            type: Number,
            value: 20
        },
        hoverStayTime: {
            type: Number,
            value: 70
        },
        lang: {
            type: String,
            value: "en"
        },
        sessionFrom: {
            type: String,
            value: ""
        },
        sendMessageTitle: {
            type: String,
            value: ""
        },
        sendMessagePath: {
            type: String,
            value: ""
        },
        sendMessageImg: {
            type: String,
            value: ""
        },
        showMessageCard: {
            type: Boolean,
            value: !1
        },
        appParameter: {
            type: String,
            value: ""
        }
    },
    computed: {
        classes: ["prefixCls, hoverClass, type, size, block, full, clear, outline, bordered, disabled", function (e, t, n, r, a, o, i, l, u, s) {
            var p;
            return {
                wrap: (0, _classNames2.default)(e, (_defineProperty(p = {}, "".concat(e, "--").concat(n), n), _defineProperty(p, "".concat(e, "--").concat(r), r), _defineProperty(p, "".concat(e, "--block"), a), _defineProperty(p, "".concat(e, "--full"), o), _defineProperty(p, "".concat(e, "--clear"), i), _defineProperty(p, "".concat(e, "--outline"), l), _defineProperty(p, "".concat(e, "--bordered"), u), _defineProperty(p, "".concat(e, "--disabled"), s), p)),
                hover: t && "default" !== t ? t : "".concat(e, "--hover")
            }
        }]
    },
    methods: {
        onTap: function () {
            this.data.disabled || this.data.loading || this.triggerEvent("click")
        },
        bindgetuserinfo: function (e) {
            this.triggerEvent("getuserinfo", e.detail)
        },
        bindcontact: function (e) {
            this.triggerEvent("contact", e.detail)
        },
        bindgetphonenumber: function (e) {
            this.triggerEvent("getphonenumber", e.detail)
        },
        bindopensetting: function (e) {
            this.triggerEvent("opensetting", e.detail)
        },
        onError: function (e) {
            this.triggerEvent("error", e.detail)
        }
    }
});