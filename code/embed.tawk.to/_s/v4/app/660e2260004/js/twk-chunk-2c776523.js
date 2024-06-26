(window.tawkJsonp = window.tawkJsonp || []).push([
    ["chunk-2c776523"], {
        "5a60": function(t, e, o) {
            "use strict";
            var n = o("bd42").a,
                r = o("2877"),
                a = Object(r.a)(n, void 0, void 0, !1, null, null, null);
            e.a = a.exports
        },
        bd42: function(t, e, o) {
            "use strict";
            (function(t) {
                var n = o("2b0e"),
                    r = o("f0b0");

                function a(t, e) {
                    return function(t) {
                        if (Array.isArray(t)) return t
                    }(t) || function(t, e) {
                        var o = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                        if (null != o) {
                            var n, r, a, i, s = [],
                                l = !0,
                                c = !1;
                            try {
                                if (a = (o = o.call(t)).next, 0 === e) {
                                    if (Object(o) !== o) return;
                                    l = !1
                                } else
                                    for (; !(l = (n = a.call(o)).done) && (s.push(n.value), s.length !== e); l = !0);
                            } catch (t) {
                                c = !0, r = t
                            } finally {
                                try {
                                    if (!l && null != o.return && (i = o.return(), Object(i) !== i)) return
                                } finally {
                                    if (c) throw r
                                }
                            }
                            return s
                        }
                    }(t, e) || function(t, e) {
                        if (t) {
                            if ("string" == typeof t) return i(t, e);
                            var o = Object.prototype.toString.call(t).slice(8, -1);
                            return "Object" === o && t.constructor && (o = t.constructor.name), "Map" === o || "Set" === o ? Array.from(t) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? i(t, e) : void 0
                        }
                    }(t, e) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function i(t, e) {
                    (null == e || e > t.length) && (e = t.length);
                    for (var o = 0, n = new Array(e); o < e; o++) n[o] = t[o];
                    return n
                }
                e.a = n.a.component("i-frame", {
                    props: {
                        width: {
                            type: String,
                            default: null
                        },
                        height: {
                            type: String,
                            default: null
                        },
                        cssLink: {
                            type: String,
                            default: null
                        },
                        styleObject: {
                            type: [Object, Array]
                        },
                        classString: {
                            type: String,
                            default: ""
                        }
                    },
                    data: function() {
                        return {
                            id: r.Helper.generateUUID()
                        }
                    },
                    render: function(t) {
                        return t("iframe", {
                            on: {
                                load: this.renderChildren
                            },
                            attrs: {
                                src: "about:blank",
                                frameborder: "0",
                                scrolling: "no",
                                width: this.width,
                                height: this.height,
                                style: Object.entries(this.styleObject).map((function(t) {
                                    var e = a(t, 2);
                                    return e[0] + e[1]
                                })).join(" "),
                                id: this.id,
                                class: this.classString,
                                title: "chat widget"
                            }
                        })
                    },
                    beforeUpdate: function() {
                        this.iApp && (this.iApp.children = Object.freeze(this.$slots.default))
                    },
                    mounted: function() {
                        var e = this;
                        t.Tawk_Window.eventBus.$on("updateWidgetSettings", (function() {
                            e.reInjectCSSGlobalVariables()
                        }))
                    },
                    methods: {
                        renderChildren: function() {
                            var e = this.$slots.default,
                                o = this.$el.contentDocument.documentElement,
                                r = this.$el.contentDocument.body,
                                a = this.$el.contentDocument.head,
                                i = document.createElement("div"),
                                s = document.createElement("link"),
                                l = document.createElement("link"),
                                c = new n.a({
                                    name: "iApp",
                                    data: {
                                        children: Object.freeze(e)
                                    },
                                    render: function(t) {
                                        return t("div", {
                                            attrs: {
                                                style: "width: 100%; height: 100%;"
                                            }
                                        }, this.children)
                                    },
                                    store: this.$store,
                                    mounted: function() {
                                        this.children.length && this.children[0] && this.children[0].context && "function" == typeof this.children[0].context.loaded && this.children[0].context.loaded()
                                    }
                                });
                            s.href = this.cssLink, s.rel = "stylesheet", l.href = "https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i&subset=latin-ext", r.appendChild(i), r.classList.add("font-lato");
                            var d = "1rem",
                                h = "0";
                            if (this.$store.getters["widget/isRTL"] && r.classList.add("tawk-rtl"), this.$store.getters["browserData/mobileBrowserName"]) {
                                var m;
                                o.classList.add("tawk-mobile"), r.classList.add("tawk-mobile");
                                var g = null === (m = t.Tawk_Window.jsApi) || void 0 === m || null === (m = m.local_API) || void 0 === m || null === (m = m.customStyle) || void 0 === m ? void 0 : m.visibility;
                                g && g.mobile && g.mobile.maximized && (g.mobile.maximized.paddingTop && (d = "".concat(g.mobile.maximized.paddingTop, "px")), g.mobile.maximized.paddingBottom && (h = "".concat(g.mobile.maximized.paddingBottom, "px")))
                            }
                            this.$store.getters["widget/language"] && o.setAttribute("lang", this.$store.getters["widget/language"]);
                            var p = document.createElement("meta");
                            p["http-equiv"] = "Content-Type", p.content = "text/html; charset=utf-8";
                            var u = document.createElement("meta");
                            u.name = "viewport", u.content = "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no", a.appendChild(p), a.appendChild(u);
                            var w = document.createElement("style");
                            w.type = "text/css", w.classList.add("tawk-global-variables");
                            var b = ":root {\n\t\t\t\t\t--tawk-header-background-color: ".concat(this.$store.getters["widget/headerBgColor"], " !important;\n\t\t\t\t\t--tawk-header-background-color-alpha: ").concat(this.$store.getters["widget/headerBgColor"], "50 !important;\n\t\t\t\t\t--tawk-header-text-color: ").concat(this.$store.getters["widget/headerTxtColor"], " !important;\n\t\t\t\t\t--tawk-header-override-padding-top: ").concat(d, " !important;\n\t\t\t\t\t--tawk-footer-override-padding-bottom: ").concat(h, " !important;\n\t\t\t\t}");
                            b += ".tawk-visitor-chat-bubble {\n\t\t\t\tbackground :  ".concat(this.$store.getters["widget/visitorBgColor"], " !important;\n\t\t\t\tcolor :  ").concat(this.$store.getters["widget/visitorTxtColor"], " !important;\n\t\t\t}"), b += ".tawk-agent-chat-bubble {\n\t\t\t\tbackground :  ".concat(this.$store.getters["widget/agentBgColor"], " !important;\n\t\t\t\tcolor :  ").concat(this.$store.getters["widget/agentTxtColor"], " !important;\n\t\t\t}"), b += ".tawk-agent-chat-bubble-dots {\n\t\t\t\tbackground :  ".concat(this.$store.getters["widget/agentBgColor"], " !important;\n\t\t\t}"), this.$store.getters["browserData/isIE"] && this.$store.getters["browserData/version"] <= 11 && (b += ".tawk-custom-color-inverse {\n\t\t\t\t\tbackground-color: ".concat(this.$store.getters["widget/headerTxtColor"], " !important;\n\t\t\t\t\tcolor: ").concat(this.$store.getters["widget/headerBgColor"], " !important;\n\t\t\t\t}\n\t\t\t\t.tawk-custom-border-color {\n\t\t\t\t\tborder-color: ").concat(this.$store.getters["widget/headerBgColor"], " !important;\n\t\t\t\t}\n\t\t\t\t.tawk-custom-border-left {\n\t\t\t\t\tborder-left: 5px solid ").concat(this.$store.getters["widget/headerBgColor"], " !important;\n\t\t\t\t}\n\t\t\t\t.tawk-custom-color {\n\t\t\t\t\tbackground-color: ").concat(this.$store.getters["widget/headerBgColor"], " !important;\n\t\t\t\t\tcolor: ").concat(this.$store.getters["widget/headerTxtColor"], " !important;\n\t\t\t\t}\n\t\t\t\t.tawk-custom-text-color {\n\t\t\t\t\tcolor: ").concat(this.$store.getters["widget/headerBgColor"], " !important;\n\t\t\t\t}\n\t\t\t\t.tawk-custom-text-color-inverse {\n\t\t\t\t\tcolor: ").concat(this.$store.getters["widget/headerTxtColor"], " !important;\n\t\t\t\t}\n\t\t\t\t.tawk-custom-image .tawk-image {\n\t\t\t\t\tmax-height: 250px;\n\t\t\t\t}\n\t\t\t\t.tawk-timeago {\n\t\t\t\t\tfont-size: .75rem !important;\n\t\t\t\t\tfont-family: 'Lato', sans-serif !important;\n\t\t\t\t}\n\t\t\t\t.tawk-main-panel .tawk-chat-panel {\n\t\t\t\t\theight: 100%;\n\t\t\t\t}\n\t\t\t\t.tawk-tooltip-hover  {\n\t\t\t\t\tmax-width: 120px;\n\t\t\t\t}\n\t\t\t\t.card-container:first-child::before {\n\t\t\t\t\tbackground-color: ").concat(this.$store.getters["widget/headerBgColor"], " !important;\n\t\t\t\t}\n\t\t\t\t.tawk-form-wrapper .tawk-input:-ms-input-placeholder,\n\t\t\t\t.tawk-form-wrapper .tawk-textarea:-ms-input-placeholder {\n\t\t\t\t\topacity: 1 !important;\n\t\t\t\t}\n\t\t\t\t.tawk-home-list-chat-content {\n\t\t\t\t\t-ms-flex-grow:1;\n\t\t\t\t\t-ms-flex: 1;\n\t\t\t\t\twidth: auto;\n\t\t\t\t}\n\t\t\t\t.tawk-home-list-chat-content .tawk-custom-chat-left {\n\t\t\t\t\tflex: 0 0 50%;\n\t\t\t\t\tmax-width: 50%;\n\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t}\n\t\t\t\t.tawk-home-list-chat-content .tawk-custom-chat-right {\n\t\t\t\t\tflex: 0 0 40%;\n\t\t\t\t\tmax-width: 40%;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t}\n\t\t\t\t.tawk-home-list-chat-content .tawk-custom-chat-right .tawk-timeago {\n\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\tword-wrap: break-word;\n\t\t\t\t\tword-break: all;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t}")), this.$store.getters["browserData/isIE"] && this.$store.getters["browserData/version"] <= 10 && (b += "\n\t\t\t\t\t.tawk-custom-flex-1 {\n\t\t\t\t\t\tflex: 0 0 auto !important;\n\t\t\t\t\t}\n\t\t\t\t\t.tawk-input, .tawk-select, .tawk-textarea, .tawk-chatinput-editor, .tawk-form-label {\n\t\t\t\t\t\tfont-size: .812rem !important;\n\t\t\t\t\t\tfont-family: 'Lato', sans-serif !important;\n\t\t\t\t\t}\n\t\t\t\t"), w.appendChild(document.createTextNode(b)), t.Tawk_Window.jsApi.local_API.disableWidgetFont || a.appendChild(l), a.appendChild(s), s.onload = function() {
                                c.$mount(i)
                            }, a.appendChild(w), this.iApp = c
                        },
                        reInjectCSSGlobalVariables: function() {
                            var e = this.$el.contentDocument.head,
                                o = e.querySelector(".tawk-global-variables");
                            o && o.parentNode.removeChild(o);
                            var n = "1rem",
                                r = "0";
                            if (this.$store.getters["browserData/mobileBrowserName"]) {
                                var a, i = null === (a = t.Tawk_Window.jsApi) || void 0 === a || null === (a = a.local_API) || void 0 === a || null === (a = a.customStyle) || void 0 === a ? void 0 : a.visibility;
                                i && i.mobile && i.mobile.maximized && (i.mobile.maximized.paddingTop && (n = "".concat(i.mobile.maximized.paddingTop, "px")), i.mobile.maximized.paddingBottom && (r = "".concat(i.mobile.maximized.paddingBottom, "px")))
                            }
                            var s = document.createElement("style");
                            s.type = "text/css", s.classList.add("tawk-global-variables");
                            var l = ":root {\n\t\t\t\t\t--tawk-header-background-color: ".concat(this.$store.getters["widget/headerBgColor"], " !important;\n\t\t\t\t\t--tawk-header-background-color-alpha: ").concat(this.$store.getters["widget/headerBgColor"], "50 !important;\n\t\t\t\t\t--tawk-header-text-color: ").concat(this.$store.getters["widget/headerTxtColor"], " !important;\n\t\t\t\t\t--tawk-header-override-padding-top: ").concat(n, " !important;\n\t\t\t\t\t--tawk-footer-override-padding-bottom: ").concat(r, " !important;\n\t\t\t\t}");
                            l += ".tawk-visitor-chat-bubble {\n\t\t\t\tbackground :  ".concat(this.$store.getters["widget/visitorBgColor"], " !important;\n\t\t\t\tcolor :  ").concat(this.$store.getters["widget/visitorTxtColor"], " !important;\n\t\t\t}"), l += ".tawk-agent-chat-bubble {\n\t\t\t\tbackground :  ".concat(this.$store.getters["widget/agentBgColor"], " !important;\n\t\t\t\tcolor :  ").concat(this.$store.getters["widget/agentTxtColor"], " !important;\n\t\t\t}"), l += ".tawk-agent-chat-bubble-dots {\n\t\t\t\tbackground :  ".concat(this.$store.getters["widget/agentBgColor"], " !important;\n\t\t\t}"), s.appendChild(document.createTextNode(l)), e.appendChild(s)
                        }
                    }
                })
            }).call(this, o("c8ba"))
        }
    }
]);