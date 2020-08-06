! function(e) {
    var t = {};

    function n(o) {
        if (t[o]) return t[o].exports;
        var r = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) n.d(o, r, function(t) {
                return e[t]
            }.bind(null, r));
        return o
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "/static/", n(n.s = 0)
}([function(e, t, n) {
    e.exports = n(1)
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            },
            r = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n(3));
        window.__paperform_inc = window.__paperform_inc || 1;
        var i = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
            a = (function(e) {
                for (var t = 0, n = 0; n < e.length; n++) t += e.charCodeAt(n);
                return t
            }(window.location.host) + 9) % 100 < 101;

        function p(e) {
            return Array.prototype.slice.apply(e)
        }[Element.prototype, CharacterData.prototype, DocumentType.prototype].forEach((function(e) {
            e.hasOwnProperty("remove") || Object.defineProperty(e, "remove", {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                value: function() {
                    this.parentNode.removeChild(this)
                }
            })
        }));
        var l = {
            popup: function e(t) {
                var n, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    a = "__paperform_cb" + ++g,
                    p = "";
                if (o.onSubmit && ("function" == typeof o.onSubmit ? (l[a] = o.onSubmit, p = "Paperform." + a) : "string" == typeof o.onSubmit && (p = o.onSubmit)), o.spinner = !0, !r) {
                    var c = document.createElement("button");
                    return c.setAttribute("data-popup-button", 1), c.setAttribute("data-paperform-id", t), c.setAttribute("data-onsubmit", o.onsubmit || ""), c.setAttribute("data-dev", o.dev || ""), c.setAttribute("data-prefill", x(o.prefill)), c.setAttribute("data-prefill-inherit", o.prefillInherit || ""), c.style.opacity = 0, c.style.position = "absolute", c.style.zIndex = -1, document.body.appendChild(c), d(c), e(t, o, c, !0)
                }
                var u = function(e) {
                    return document.querySelector("#" + e)
                }(r.contentId);
                n = r;
                var s = u.querySelector("iframe");
                if (u.removeAttribute("style"), u.style.opacity = 0, setTimeout((function() {
                        u.className += " Paperform__popupwrapper--active", u.removeAttribute("style"), u.style.minHeight = "200px"
                    }), 60), function(e, t, n, o) {
                        n && e.setAttribute("data-onsubmit", n), n && e.setAttribute("data-dev", o.dev), e.setAttribute("data-spinner", 1), o.prefill && e.setAttribute("data-prefill", x(o.prefill)), o.prefillInherit && e.setAttribute("data-prefill-inherit", 1), o.iframeTitle && (t.title = o.iframeTitle)
                    }(n, s, p, o), b("popup", s, r, (function() {
                        (function(e) {
                            e.querySelector(".Paperform__popupclose").onclick = function() {
                                w(e)
                            }, document.onkeydown = function(t) {
                                ("key" in (t = t || window.event) ? "Escape" == t.key || "Esc" == t.key : 27 == t.keyCode) && w(e)
                            }
                        })(u), window.scrollTo(0, 0), document.body.scrollTop = 0, document.body.className += " Paperform--locked", setTimeout((function() {
                            s.removeAttribute("style"), s.style.minHeight = "200px", u.className += " Paperform__popupwrapper--loaded"
                        }), 50)
                    })), i && r) try {
                    r.parentElement.removeChild(r)
                } catch (t) {}
                return {
                    el: u,
                    close: function() {
                        w(u, i)
                    }
                }
            }
        };

        function c() {
            var e = document.querySelectorAll("[paperform-id],[data-paperform-id]");
            for (var t in e) d(e[t])
        }

        function d(e, t) {
            if (function(e) {
                    return !e || !e.getAttribute || e.loaded
                }(e)) return null;
            e.loaded = 1;
            var n = u(e),
                o = n.id,
                r = n.showSpinner;
            if (!o) return null;
            var a = y(e),
                p = function(e) {
                    return !(!e.getAttribute("data-paperform-id") || y(e) || function(e) {
                        return !(!e.getAttribute("data-popup") && !e.getAttribute("popup"))
                    }(e) || h(e))
                }(e),
                l = h(e),
                c = function(e, t) {
                    var n = t.title,
                        o = t.onload,
                        r = document.createElement("iframe");
                    return r.frameBorder = 0, r.width = "100%", r.addEventListener("load", (function(t) {
                        "function" == typeof e && e(t), "function" == typeof window[o] && window[o](t)
                    })), r.allowPaymentRequest = !0, r.allowFullScreen = !0, r.setAttribute("allow", "geolocation *;camera *;microphone *;"), r.title = n || "Embedded form", r
                }(t, {
                    title: n.iframeTitle,
                    onload: n.onload
                });
            return a ? function(e, t, n) {
                var o = document.querySelector("meta[name=viewport]");
                if (o) o.setAttribute("content", "width=device-width, user-scalable=no");
                else {
                    var r = document.createElement("meta");
                    r.name = "viewport", r.content = "width=device-width, user-scalable=no", document.getElementsByTagName("head")[0].appendChild(r)
                }
                var a = document.createElement("div");
                a.style.overflow = "auto", a.style.WebkitOverflowScrolling = "touch", e.style.height = "100%", e.style.width = "100%", e.style.top = 0, e.style.left = 0, e.style.bottom = 0, e.style.right = 0, e.style.margin = 0, e.style.zIndex = 1e6, a.style.top = 0, a.style.left = 0, a.style.bottom = 0, a.style.right = 0, a.style.margin = 0, a.style.position = "relative", a.style.minHeight = "100%", a.style.zIndex = 1e6, document.body.scrollTop = 0, document.body.style.margin = 0, document.body.style.padding = 0, document.body.style.height = "100%", document.body.innerHTML = "", setTimeout((function() {
                    return document.body.scrollTop = 0
                }), 1e3), i ? (e.style.minHeight = "100vh", document.body.style.WebkitTransform = "translate3d(0, 0, 0)", document.body.style.height = "auto", a.style.WebkitOverflowScrolling = "none", a.style.overflow = "visible", a.appendChild(e), n && v(a), document.body.appendChild(a)) : (document.body.style.overflow = "hidden", document.body.style.height = "100%", e.style.position = "fixed", document.body.appendChild(e), n && v(document.body));
                var p = document.createElement("style");
                p.innerHTML = "html { height: 100%; overflow-x: initial; } ;", document.body.appendChild(p), b("takeover", e, t)
            }(c, e, r) : p ? function(e, t, n) {
                e.style.minHeight = "200px",
                    function(e, t) {
                        var n = t.querySelector("a");
                        n ? t.insertBefore(e, n) : t.appendChild(e)
                    }(e, t), n && v(t), b("inline", e, t)
            }(c, e, r) : l && function(e, t, n, o, r) {
                t.contentId || (t.contentId = function(e, t, n) {
                    var o = document.createElement("div"),
                        r = "__pp" + Date.now();
                    o.id = r, o.setAttribute("data-paperform-popup-content", t), o.className = "Paperform__popupwrapper", o.innerHTML = '\n    <div class="Paperform__popupoverlay"></div>\n    <div class="Paperform__popupclose">\n      <div class="Paperform__popupclose1"></div>\n      <div class="Paperform__popupclose2"></div>\n    </div>\n  ';
                    var i = document.createElement("div");
                    return i.className = "Paperform__popupcontent", i.appendChild(e), n && v(i), o.appendChild(i), o.style.opacity = 0, o.style.zIndex = -1, o.style.pointerEvents = "none", o.style.position = "absolute", document.body.appendChild(o), r
                }(e, o, n)), b("popup", e, t)
            }(c, e, r, o), null
        }

        function u(e) {
            return {
                qs: e.getAttribute("data-prefill") || "",
                id: e.getAttribute("paperform-id") || e.getAttribute("data-paperform-id"),
                onSubmit: e.getAttribute("data-onsubmit") || "",
                onPageChange: e.getAttribute("data-onpagechange") || "",
                direct: e.getAttribute("data-direct") || "",
                inherited: e.getAttribute("data-prefill-inherit") || "",
                scrollOffset: e.getAttribute("data-scroll-offset") || "",
                noScroll: e.getAttribute("data-no-scroll") || "",
                dev: !!e.getAttribute("data-dev"),
                showSpinner: e.getAttribute("data-spinner") || "",
                iframeTitle: e.getAttribute("data-title") || "",
                onload: e.getAttribute("data-onload") || ""
            }
        }

        function s(e, t, n, o, r, i) {
            if ("inline" === e) {
                var l = m(e, n);
                !l && o && a && function(e, t, n, o) {
                    p(n.querySelectorAll("a")).forEach((function(e) {
                        return n.removeChild(e)
                    }));
                    var r = document.createElement("a");
                    r.className = "Paperform__link", r.href = "https://paperform.co", r.target = "_blank", r.innerText = o.trim(), "takeover" === e ? (r.className += " Paperform__link--takeover", document.body.appendChild(r)) : (n.appendChild(r), f(t, "brandingAdded"))
                }(e, t, n, r), l && o && f(t, "brandingAdded"), l && !o && function(e, t, n) {
                    p(n.querySelectorAll("a")).forEach((function(e) {
                        return n.removeChild(e)
                    }))
                }(0, 0, n), m(e, n) && function(e, t) {
                    "takeover" === e && (document.body.querySelector("a[href].Paperform__link").style.opacity = 1), p(t.querySelectorAll("a")).forEach((function(e) {
                        return e.style.opacity = 1
                    }))
                }(e, n)
            }
        }

        function f(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            e.messageSrc.postMessage("paperform:" + JSON.stringify(o({
                action: t
            }, n)), "*")
        }

        function m(e, t) {
            var n = t.querySelector("a");
            return "takeover" === e && (n = document.body.querySelector("a[href].Paperform__link")), n && -1 !== n.href.indexOf("paperform.co") && n.innerText.trim() && function(e) {
                return ("" === e.style.opacity || e.style.opacity > .1) && "hidden" !== e.style.visibility && "none" !== e.style.display
            }(n)
        }

        function b(t, n, o, p) {
            var l = u(o),
                c = l.showSpinner,
                d = l.id,
                f = l.direct,
                m = l.qs,
                b = l.inherited,
                y = l.dev,
                h = "https://paperform.co",
                v = window.__paperform_inc;
            m = function(e, t) {
                return t && (e = e ? location.search + "&" + e : location.search), e && "?" === e[0] && (e = e.replace("?", "")), e && (e = "&" + e), e
            }(m, b);
            var g = "takeover" === t,
                w = "popup" === t;
            return h = f && h && -1 !== h.indexOf("paperform.co") ? h.replace("://", "://" + d + ".") : h + "/form/" + d, y && (h = (h = h.replace("paperform.co", "dev.paperform.co")).replace("https:", "http:")), w && (n.style.visibility = "hidden", n.style.height = 0, n.style.overflow = "hidden"), h = h + "?embed=1&takeover=" + (g ? 1 : 0) + "&inline=" + (g || w ? 0 : 1) + "&popup=" + (w ? 1 : 0) + "&_d=" + encodeURIComponent(location.host) + "&_in=" + (a ? 1 : 0) + m, window.addEventListener("message", (function(e) {
                ! function(e, t, n, o, a, p, l) {
                    var c = u(a),
                        d = c.onSubmit,
                        f = c.onPageChange,
                        m = c.scrollOffset,
                        b = "takeover" === t,
                        y = "popup" === t,
                        h = c.noScroll;
                    m = m && !isNaN(Number(m)) ? Number(m) : 0, a = y ? document.querySelector('div[data-paperform-popup-content="' + n + '"]') : a, o.messageSrc = e.source;
                    var v = e.data;
                    if (v && v.indexOf && -1 !== v.indexOf("paperform:")) {
                        if (!(e = JSON.parse(v.replace("paperform:", "")))) return;
                        if (l != e.embed_id && e.embed_id) return;
                        var g = void 0;
                        switch (e.action) {
                            case "resize":
                                p && (function(e) {
                                    var t = e.querySelector(".Paperform__spinner");
                                    e.className = e.className.replace("Paperform__spinner--visible", ""), t && t.remove()
                                }(o.parentElement), p = !1), b || (o.height = e.height);
                                break;
                            case "link":
                                var w = e.url,
                                    _ = 0 !== w.toLowerCase().indexOf("http") ? "http://" + w : w;
                                window.top.location.href = _;
                                break;
                            case "pageChange":
                                if (f) try {
                                    g = {
                                        form_id: n,
                                        currentPage: e.currentPage,
                                        totalPages: e.totalPages
                                    };
                                    var k = new r.default("PaperformPageChange", {
                                        detail: g,
                                        bubbles: !0
                                    });
                                    a.dispatchEvent(k), A(f)(g)
                                } catch (e) {
                                    setTimeout((function() {
                                        throw e
                                    }))
                                }
                                break;
                            case "submission":
                                (g = e.details || {}).form_id = n;
                                var x = new r.default("PaperformSubmission", {
                                        detail: g,
                                        bubbles: !0
                                    }),
                                    P = new r.default("PaperformSubmssion", {
                                        detail: g,
                                        bubbles: !0
                                    });
                                if (a.dispatchEvent(x), a.dispatchEvent(P), d) try {
                                    A(d)(g)
                                } catch (e) {
                                    setTimeout((function() {
                                        throw e
                                    }))
                                }
                                y && i && window.scrollTo(0, 0);
                                break;
                            case "analytics":
                                (g = e.details || {}).form_id = n;
                                var S = new r.default("PaperformAnalytics", {
                                    detail: g,
                                    bubble: !0
                                });
                                a.dispatchEvent(S);
                                break;
                            case "setBranding":
                                s(t, o, a, e.enabled, e.text, e.url);
                                break;
                            case "scrollTo":
                                if (b && !i || h) return;
                                window.scrollTo(0, Math.max(0, a.getBoundingClientRect().top - m + Math.max(0, e.y) + (b ? 0 : window.pageYOffset)))
                        }
                    }
                }(e, t, d, n, o, c, v)
            }), !1), o._currentIframeSrc !== h ? (n.onload = function(e) {
                p && p(e), n.onload = void 0
            }, o._currentIframeSrc = h, h = h + "&_embed_id=" + (v = e.__paperform_inc++), n.src = h) : p && p(), n
        }

        function y(e) {
            return !(!e.getAttribute("takeover") && !e.getAttribute("data-takeover"))
        }

        function h(e) {
            return !!e.getAttribute("data-paperform-id") && !!e.getAttribute("data-popup-button")
        }

        function v(e) {
            if (!e.querySelector(".sk-folding-cube")) {
                var t = document.createElement("div");
                t.className = "Paperform__spinner", t.innerHTML = '\n  <div class="sk-folding-cube">\n    <div class="sk-cube1 sk-cube"></div>\n    <div class="sk-cube2 sk-cube"></div>\n    <div class="sk-cube4 sk-cube"></div>\n    <div class="sk-cube3 sk-cube"></div>\n  </div>\n', e.className += " Paperform__spinner--visible", e.appendChild(t)
            }
        }
        e.Paperform || (e.Paperform = l, c(), document.addEventListener("click", (function(e) {
            var t = function(e) {
                if (e.hasAttribute("data-popup-button")) return e;
                if (e.hasAttribute("href") && _(e.getAttribute("href"))) return k(e), e;
                for (; e.parentElement;) {
                    if ((e = e.parentElement).hasAttribute("data-popup-button")) return e;
                    if (e.hasAttribute("href") && _(e.getAttribute("href"))) return k(e), e
                }
                return !1
            }(e.target);
            t && (e.preventDefault(), l.popup(t.getAttribute("data-paperform-id"), {
                prefill: function(e) {
                    if (!e || "string" != typeof e) return e;
                    var t = {},
                        n = e.split("&");
                    for (var o in n)
                        if ("string" == typeof n[o]) {
                            var r = n[o].split("=");
                            t[r[0]] && "string" == typeof t[r[0]] && (t[r[0]] = [t[r[0]]]), t[r[0]] ? t[r[0]].push(decodeURIComponent(r[1] || "")) : t[r[0]] = decodeURIComponent(r[1] || "")
                        }
                    return t
                }(t.getAttribute("data-prefill")),
                prefillInherit: t.getAttribute("data-prefill-inherit")
            }, t))
        })), function() {
            var e = "\n  [data-paperform-id] {\n    position: relative;\n  }\n\n  a.Paperform__link {\n    display: block;\n    left: 0;\n    bottom: 4px;\n    right: 0;\n    text-decoration: none;\n    font-style: initial;\n    text-align: center;\n    position: absolute;\n    color: rgba(0,0,0,0.3);\n    text-transform: none;\n    padding: 2px;\n    line-height: 17px;\n    font-family: Lato, Verdana;\n    text-decoration: none;\n    font-weight: 400;\n    font-size: 11px;\n    color: #bbb;\n    opacity: .4;\n    transition: color .2s;\n  }\n  a.Paperform__link:hover {\n    color: #79a4ca;\n  }\n\n  a.Paperform__link--takeover {\n    background-color: #f8f8f8;\n    text-transform: uppercase;\n    bottom: 0;\n  }\n\n  .Paperform__popupwrapper {\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n      \n        z-index: 9434723232;\n        padding: 0 30px;\n       \n        align-items: center;\n      }\n\n      .Paperform__spinner--visible {\n        position: relative;\n      }\n\n      .Paperform__spinner {\n        position: absolute;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        top: 0;\n        z-index: 1;\n      }\n\n       .Paperform__popupoverlay {\n          background-color: rgba(250,250,250,.6);\n          opacity: 0;\n          transition: opacity .7s;\n          position: fixed;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom:  0;\n          z-index: -1;\n       }\n\n      .Paperform__popupwrapper--active .Paperform__popupoverlay {\n        opacity: 1;\n      }\n\n      .Paperform__popupclose {\n        position: fixed;\n        top: 42px;\n        right: 45px;\n        width: 30px;\n        height: 30px;\n        line-height: 30px;\n        text-align: center;\n        font-family: Arial;\n        font-weight: 400;\n        font-size: 30px;\n        color: #333;\n        cursor: pointer;\n        z-index: 10000;\n        opacity: .7;\n        transition: opacity .3s;\n      }\n\n      .Paperform__popupclose2 {\n        border-bottom: 2px solid #333;\n        -webkit-transform: rotate(-45deg);\n        transform: rotate(-45deg);\n        position: absolute;\n        left: 0;\n        top: 0;\n        width: 100%;\n        margin-top: 13px;\n     }\n\n     .Paperform__popupclose1 {\n        border-bottom: 2px solid #333;\n        -webkit-transform: rotate(45deg);\n        transform: rotate(45deg);\n        position: absolute;\n        left: 0;\n        top: 0;\n        margin-top: 13px;\n        width: 100%;\n      }\n\n      .Paperform__popupclose:hover {\n        opacity: 1;\n      }\n\n      .Paperform__popupcontent {\n        background-color: #FFF;\n        background-size: 100px;\n        margin: 30px auto;\n        width: 100%;\n        max-width: 1024px;\n        box-shadow: 0px 25px 100px -20px rgba(0,0,0,.4);\n  \n        -webkit-overflow-scrolling: touch;\n      }\n\n      .Paperform__popupcontent iframe {\n        opacity: 0;\n        position: relative;\n        z-index: 2;\n        display: block;\n      }\n\n      @media screen and (max-width: " + (i ? 1e4 : 600) + "px) {\n        .Paperform__popupwrapper {\n          bottom: initial;\n          min-height: 100vh;\n          overflow: initial;\n        }\n\n        .Paperform--locked > *:not(.Paperform__popupwrapper) {\n          display: none !important;\n        }\n\n        .Paperform__popupcontent iframe {\n          min-height: 100% !important;\n        }\n\n        .Paperform__popupcontent {\n          margin: 0;\n          min-height: 100vh;\n          max-height: 100%;\n          height: 100%;\n        }\n        .Paperform__popupwrapper {\n          padding: 0;\n        }\n        .Paperform__popupclose {\n          right: 15px;\n          top: 15px;\n        }\n      }\n\n      @media screen and (min-width: " + (i ? 1e4 : 1100) + "px) {\n        .Paperform__popupclose {\n          right: 15px;\n          top: 15px;\n        }\n      }\n\n      .Paperform__popupwrapper:not(.Paperform__popupwrapper--loaded) iframe {\n        height: 200px;\n      }\n\n      .Paperform__popupwrapper--loaded .Paperform__popupcontent iframe {\n        opacity: 1;\n      }\n    \n\n      .Paperform--locked {\n        min-height: 100vh;\n        height: initial;\n         " + (i ? "overflow-x: initial;\n          overflow-y: initial;" : "") + "\n      }\n\n      .sk-folding-cube {\n        position: absolute;\n        left: 50%;\n        top: 50%;\n        width: 50px;\n        height: 50px;\n        margin-top: -25px;\n        margin-left: -25px;\n        opacity: 1;\n        transition: all .3s;\n        transform: rotate(45deg);\n    }\n\n      .Paperform__popupwrapper--loaded .sk-folding-cube {\n          opacity: 0;\n      }\n\n      .sk-folding-cube .sk-cube {\n        float: left;\n        width: 50%;\n        height: 50%;\n        position: relative;\n        -webkit-transform: scale(1.1);\n            -ms-transform: scale(1.1);\n                transform: scale(1.1); \n      }\n      .sk-folding-cube .sk-cube:before {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background-color: #f0f2ff;\n        -webkit-animation: sk-foldCubeAngle 2.4s infinite linear both;\n                animation: sk-foldCubeAngle 2.4s infinite linear both;\n        -webkit-transform-origin: 100% 100%;\n            -ms-transform-origin: 100% 100%;\n                transform-origin: 100% 100%;\n      }\n      .sk-folding-cube .sk-cube2 {\n        -webkit-transform: scale(1.1) rotateZ(90deg);\n                transform: scale(1.1) rotateZ(90deg);\n      }\n      .sk-folding-cube .sk-cube3 {\n        -webkit-transform: scale(1.1) rotateZ(180deg);\n                transform: scale(1.1) rotateZ(180deg);\n      }\n      .sk-folding-cube .sk-cube4 {\n        -webkit-transform: scale(1.1) rotateZ(270deg);\n                transform: scale(1.1) rotateZ(270deg);\n      }\n      .sk-folding-cube .sk-cube2:before {\n        -webkit-animation-delay: 0.3s;\n                animation-delay: 0.3s;\n      }\n      .sk-folding-cube .sk-cube3:before {\n        -webkit-animation-delay: 0.6s;\n                animation-delay: 0.6s; \n      }\n      .sk-folding-cube .sk-cube4:before {\n        -webkit-animation-delay: 0.9s;\n                animation-delay: 0.9s;\n      }\n      @-webkit-keyframes sk-foldCubeAngle {\n        0%, 10% {\n          -webkit-transform: perspective(140px) rotateX(-180deg);\n                  transform: perspective(140px) rotateX(-180deg);\n          opacity: 0; \n        } 25%, 75% {\n          -webkit-transform: perspective(140px) rotateX(0deg);\n                  transform: perspective(140px) rotateX(0deg);\n          opacity: 1; \n        } 90%, 100% {\n          -webkit-transform: perspective(140px) rotateY(180deg);\n                  transform: perspective(140px) rotateY(180deg);\n          opacity: 0; \n        } \n      }\n\n      @keyframes sk-foldCubeAngle {\n        0%, 10% {\n          -webkit-transform: perspective(140px) rotateX(-180deg);\n                  transform: perspective(140px) rotateX(-180deg);\n          opacity: 0; \n        } 25%, 75% {\n          -webkit-transform: perspective(140px) rotateX(0deg);\n                  transform: perspective(140px) rotateX(0deg);\n          opacity: 1; \n        } 90%, 100% {\n          -webkit-transform: perspective(140px) rotateY(180deg);\n                  transform: perspective(140px) rotateY(180deg);\n          opacity: 0; \n        }\n    }\n",
                t = document.createElement("style");
            t.innerHTML = e, document.head.appendChild(t)
        }()), e.paypal || e.Paperform || function() {
            var e = document.createElement("script");
            e.async = !0, e.src = "https://www.paypalobjects.com/api/checkout.min.js", e.setAttribute("data-version-4", ""), document.body ? document.body.appendChild(e) : document.addEventListener("DOMContentLoaded", (function() {
                document.body.appendChild(e)
            }))
        }(), c(), setInterval(c, 50);
        var g = 0;

        function w(e, t) {
            t ? e.parentElement.removeChild(e) : (e.style.opacity = 0, e.style.zIndex = -1, e.style.pointerEvents = "none", setTimeout((function() {
                e.className = "Paperform__popupwrapper"
            }), 500)), document.body.className = document.body.className.replace("Paperform--locked", ""), document.onkeydown = null
        }

        function _(e) {
            return (e = e || "").replace(/javascript:Paperform.popup/gi, "").length !== e.length
        }

        function k(e) {
            var t = (e.getAttribute("href") || "").replace(/javascript:Paperform.popup\(/gi, "");
            t = t.replace(/\)/g, "");
            var n = new Function("\n        return (function(form, data) {\n          return {form: form, data: data};\n        })(" + t + ")\n    ")();
            if (n.form && (e.setAttribute("data-paperform-id", n.form), e.setAttribute("data-popup-button", "1")), n.data && n.data.prefill) {
                var o = x(n.data.prefill);
                e.setAttribute("data-prefill", o)
            }
        }

        function x(e) {
            if ("object" !== (void 0 === e ? "undefined" : t(e))) return "";
            var n = [],
                o = function(t) {
                    var o = e[t];
                    Array.isArray(o) ? o.forEach((function(e) {
                        n.push(t + "=" + encodeURIComponent(e))
                    })) : n.push(t + "=" + encodeURIComponent(o))
                };
            for (var r in e) o(r);
            return n.join("&")
        }

        function P() {}

        function A(e) {
            var t = e.split(".").reduce((function(e, t) {
                return e[t]
            }), window);
            return "function" == typeof t ? t : P
        }
    }).call(this, n(2))
}, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function() {
            if ("function" == typeof window.CustomEvent) return !1;

            function e(e, t) {
                t = t || {
                    bubbles: !1,
                    cancelable: !1,
                    detail: void 0
                };
                var n = document.createEvent("CustomEvent");
                return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
            }
            e.prototype = window.Event.prototype, window.CustomEvent = e
        }(), t.default = window.CustomEvent
}]);