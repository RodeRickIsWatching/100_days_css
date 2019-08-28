(function (e, t) {
    function H(e) {
        var t = e.length, n = w.type(e);
        return w.isWindow(e) ? !1 : e.nodeType === 1 && t ? !0 : n === "array" || n !== "function" && (t === 0 || typeof t == "number" && t > 0 && t - 1 in e)
    }

    function j(e) {
        var t = B[e] = {};
        return w.each(e.match(S) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function q(e, n, r, i) {
        if (!w.acceptData(e)) return;
        var s, o, u = w.expando, a = e.nodeType, f = a ? w.cache : e, l = a ? e[u] : e[u] && u;
        if ((!l || !f[l] || !i && !f[l].data) && r === t && typeof n == "string") return;
        l || (a ? l = e[u] = c.pop() || w.guid++ : l = u), f[l] || (f[l] = a ? {} : {toJSON: w.noop});
        if (typeof n == "object" || typeof n == "function") i ? f[l] = w.extend(f[l], n) : f[l].data = w.extend(f[l].data, n);
        return o = f[l], i || (o.data || (o.data = {}), o = o.data), r !== t && (o[w.camelCase(n)] = r), typeof n == "string" ? (s = o[n], s == null && (s = o[w.camelCase(n)])) : s = o, s
    }

    function R(e, t, n) {
        if (!w.acceptData(e)) return;
        var r, i, s = e.nodeType, o = s ? w.cache : e, u = s ? e[w.expando] : w.expando;
        if (!o[u]) return;
        if (t) {
            r = n ? o[u] : o[u].data;
            if (r) {
                w.isArray(t) ? t = t.concat(w.map(t, w.camelCase)) : t in r ? t = [t] : (t = w.camelCase(t), t in r ? t = [t] : t = t.split(" ")), i = t.length;
                while (i--) delete r[t[i]];
                if (n ? !z(r) : !w.isEmptyObject(r)) return
            }
        }
        if (!n) {
            delete o[u].data;
            if (!z(o[u])) return
        }
        s ? w.cleanData([e], !0) : w.support.deleteExpando || o != o.window ? delete o[u] : o[u] = null
    }

    function U(e, n, r) {
        if (r === t && e.nodeType === 1) {
            var i = "data-" + n.replace(I, "-$1").toLowerCase();
            r = e.getAttribute(i);
            if (typeof r == "string") {
                try {
                    r = r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : +r + "" === r ? +r : F.test(r) ? w.parseJSON(r) : r
                } catch (s) {
                }
                w.data(e, n, r)
            } else r = t
        }
        return r
    }

    function z(e) {
        var t;
        for (t in e) {
            if (t === "data" && w.isEmptyObject(e[t])) continue;
            if (t !== "toJSON") return !1
        }
        return !0
    }

    function it() {
        return !0
    }

    function st() {
        return !1
    }

    function ot() {
        try {
            return o.activeElement
        } catch (e) {
        }
    }

    function ct(e, t) {
        do e = e[t]; while (e && e.nodeType !== 1);
        return e
    }

    function ht(e, t, n) {
        if (w.isFunction(t)) return w.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return w.grep(e, function (e) {
            return e === t !== n
        });
        if (typeof t == "string") {
            if (ut.test(t)) return w.filter(t, e, n);
            t = w.filter(t, e)
        }
        return w.grep(e, function (e) {
            return w.inArray(e, t) >= 0 !== n
        })
    }

    function pt(e) {
        var t = dt.split("|"), n = e.createDocumentFragment();
        if (n.createElement) while (t.length) n.createElement(t.pop());
        return n
    }

    function Mt(e, t) {
        return w.nodeName(e, "table") && w.nodeName(t.nodeType === 1 ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function _t(e) {
        return e.type = (w.find.attr(e, "type") !== null) + "/" + e.type, e
    }

    function Dt(e) {
        var t = Ct.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function Pt(e, t) {
        var n, r = 0;
        for (; (n = e[r]) != null; r++) w._data(n, "globalEval", !t || w._data(t[r], "globalEval"))
    }

    function Ht(e, t) {
        if (t.nodeType !== 1 || !w.hasData(e)) return;
        var n, r, i, s = w._data(e), o = w._data(t, s), u = s.events;
        if (u) {
            delete o.handle, o.events = {};
            for (n in u) for (r = 0, i = u[n].length; r < i; r++) w.event.add(t, n, u[n][r])
        }
        o.data && (o.data = w.extend({}, o.data))
    }

    function Bt(e, t) {
        var n, r, i;
        if (t.nodeType !== 1) return;
        n = t.nodeName.toLowerCase();
        if (!w.support.noCloneEvent && t[w.expando]) {
            i = w._data(t);
            for (r in i.events) w.removeEvent(t, r, i.handle);
            t.removeAttribute(w.expando)
        }
        if (n === "script" && t.text !== e.text) _t(t).text = e.text, Dt(t); else if (n === "object") t.parentNode && (t.outerHTML = e.outerHTML), w.support.html5Clone && e.innerHTML && !w.trim(t.innerHTML) && (t.innerHTML = e.innerHTML); else if (n === "input" && xt.test(e.type)) t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value); else if (n === "option") t.defaultSelected = t.selected = e.defaultSelected; else if (n === "input" || n === "textarea") t.defaultValue = e.defaultValue
    }

    function jt(e, n) {
        var r, s, o = 0,
            u = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
        if (!u) for (u = [], r = e.childNodes || e; (s = r[o]) != null; o++) !n || w.nodeName(s, n) ? u.push(s) : w.merge(u, jt(s, n));
        return n === t || n && w.nodeName(e, n) ? w.merge([e], u) : u
    }

    function Ft(e) {
        xt.test(e.type) && (e.defaultChecked = e.checked)
    }

    function tn(e, t) {
        if (t in e) return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = en.length;
        while (i--) {
            t = en[i] + n;
            if (t in e) return t
        }
        return r
    }

    function nn(e, t) {
        return e = t || e, w.css(e, "display") === "none" || !w.contains(e.ownerDocument, e)
    }

    function rn(e, t) {
        var n, r, i, s = [], o = 0, u = e.length;
        for (; o < u; o++) {
            r = e[o];
            if (!r.style) continue;
            s[o] = w._data(r, "olddisplay"), n = r.style.display, t ? (!s[o] && n === "none" && (r.style.display = ""), r.style.display === "" && nn(r) && (s[o] = w._data(r, "olddisplay", an(r.nodeName)))) : s[o] || (i = nn(r), (n && n !== "none" || !i) && w._data(r, "olddisplay", i ? n : w.css(r, "display")))
        }
        for (o = 0; o < u; o++) {
            r = e[o];
            if (!r.style) continue;
            if (!t || r.style.display === "none" || r.style.display === "") r.style.display = t ? s[o] || "" : "none"
        }
        return e
    }

    function sn(e, t, n) {
        var r = $t.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function on(e, t, n, r, i) {
        var s = n === (r ? "border" : "content") ? 4 : t === "width" ? 1 : 0, o = 0;
        for (; s < 4; s += 2) n === "margin" && (o += w.css(e, n + Zt[s], !0, i)), r ? (n === "content" && (o -= w.css(e, "padding" + Zt[s], !0, i)), n !== "margin" && (o -= w.css(e, "border" + Zt[s] + "Width", !0, i))) : (o += w.css(e, "padding" + Zt[s], !0, i), n !== "padding" && (o += w.css(e, "border" + Zt[s] + "Width", !0, i)));
        return o
    }

    function un(e, t, n) {
        var r = !0, i = t === "width" ? e.offsetWidth : e.offsetHeight, s = qt(e),
            o = w.support.boxSizing && w.css(e, "boxSizing", !1, s) === "border-box";
        if (i <= 0 || i == null) {
            i = Rt(e, t, s);
            if (i < 0 || i == null) i = e.style[t];
            if (Jt.test(i)) return i;
            r = o && (w.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + on(e, t, n || (o ? "border" : "content"), r, s) + "px"
    }

    function an(e) {
        var t = o, n = Qt[e];
        if (!n) {
            n = fn(e, t);
            if (n === "none" || !n) It = (It || w("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (It[0].contentWindow || It[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = fn(e, t), It.detach();
            Qt[e] = n
        }
        return n
    }

    function fn(e, t) {
        var n = w(t.createElement(e)).appendTo(t.body), r = w.css(n[0], "display");
        return n.remove(), r
    }

    function vn(e, t, n, r) {
        var i;
        if (w.isArray(t)) w.each(t, function (t, i) {
            n || cn.test(e) ? r(e, i) : vn(e + "[" + (typeof i == "object" ? t : "") + "]", i, n, r)
        }); else if (!n && w.type(t) === "object") for (i in t) vn(e + "[" + i + "]", t[i], n, r); else r(e, t)
    }

    function _n(e) {
        return function (t, n) {
            typeof t != "string" && (n = t, t = "*");
            var r, i = 0, s = t.toLowerCase().match(S) || [];
            if (w.isFunction(n)) while (r = s[i++]) r[0] === "+" ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function Dn(e, t, n, r) {
        function o(u) {
            var a;
            return i[u] = !0, w.each(e[u] || [], function (e, u) {
                var f = u(t, n, r);
                if (typeof f == "string" && !s && !i[f]) return t.dataTypes.unshift(f), o(f), !1;
                if (s) return !(a = f)
            }), a
        }

        var i = {}, s = e === An;
        return o(t.dataTypes[0]) || !i["*"] && o("*")
    }

    function Pn(e, n) {
        var r, i, s = w.ajaxSettings.flatOptions || {};
        for (i in n) n[i] !== t && ((s[i] ? e : r || (r = {}))[i] = n[i]);
        return r && w.extend(!0, e, r), e
    }

    function Hn(e, n, r) {
        var i, s, o, u, a = e.contents, f = e.dataTypes;
        while (f[0] === "*") f.shift(), s === t && (s = e.mimeType || n.getResponseHeader("Content-Type"));
        if (s) for (u in a) if (a[u] && a[u].test(s)) {
            f.unshift(u);
            break
        }
        if (f[0] in r) o = f[0]; else {
            for (u in r) {
                if (!f[0] || e.converters[u + " " + f[0]]) {
                    o = u;
                    break
                }
                i || (i = u)
            }
            o = o || i
        }
        if (o) return o !== f[0] && f.unshift(o), r[o]
    }

    function Bn(e, t, n, r) {
        var i, s, o, u, a, f = {}, l = e.dataTypes.slice();
        if (l[1]) for (o in e.converters) f[o.toLowerCase()] = e.converters[o];
        s = l.shift();
        while (s) {
            e.responseFields[s] && (n[e.responseFields[s]] = t), !a && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), a = s, s = l.shift();
            if (s) if (s === "*") s = a; else if (a !== "*" && a !== s) {
                o = f[a + " " + s] || f["* " + s];
                if (!o) for (i in f) {
                    u = i.split(" ");
                    if (u[1] === s) {
                        o = f[a + " " + u[0]] || f["* " + u[0]];
                        if (o) {
                            o === !0 ? o = f[i] : f[i] !== !0 && (s = u[0], l.unshift(u[1]));
                            break
                        }
                    }
                }
                if (o !== !0) if (o && e["throws"]) t = o(t); else try {
                    t = o(t)
                } catch (c) {
                    return {state: "parsererror", error: o ? c : "No conversion from " + a + " to " + s}
                }
            }
        }
        return {state: "success", data: t}
    }

    function zn() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {
        }
    }

    function Wn() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {
        }
    }

    function Yn() {
        return setTimeout(function () {
            Xn = t
        }), Xn = w.now()
    }

    function Zn(e, t, n) {
        var r, i = (Gn[t] || []).concat(Gn["*"]), s = 0, o = i.length;
        for (; s < o; s++) if (r = i[s].call(n, t, e)) return r
    }

    function er(e, t, n) {
        var r, i, s = 0, o = Qn.length, u = w.Deferred().always(function () {
            delete a.elem
        }), a = function () {
            if (i) return !1;
            var t = Xn || Yn(), n = Math.max(0, f.startTime + f.duration - t), r = n / f.duration || 0, s = 1 - r,
                o = 0, a = f.tweens.length;
            for (; o < a; o++) f.tweens[o].run(s);
            return u.notifyWith(e, [f, s, n]), s < 1 && a ? n : (u.resolveWith(e, [f]), !1)
        }, f = u.promise({
            elem: e,
            props: w.extend({}, t),
            opts: w.extend(!0, {specialEasing: {}}, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Xn || Yn(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
                var r = w.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
                return f.tweens.push(r), r
            },
            stop: function (t) {
                var n = 0, r = t ? f.tweens.length : 0;
                if (i) return this;
                i = !0;
                for (; n < r; n++) f.tweens[n].run(1);
                return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]), this
            }
        }), l = f.props;
        tr(l, f.opts.specialEasing);
        for (; s < o; s++) {
            r = Qn[s].call(f, e, l, f.opts);
            if (r) return r
        }
        return w.map(l, Zn, f), w.isFunction(f.opts.start) && f.opts.start.call(e, f), w.fx.timer(w.extend(a, {
            elem: e,
            anim: f,
            queue: f.opts.queue
        })), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
    }

    function tr(e, t) {
        var n, r, i, s, o;
        for (n in e) {
            r = w.camelCase(n), i = t[r], s = e[n], w.isArray(s) && (i = s[1], s = e[n] = s[0]), n !== r && (e[r] = s, delete e[n]), o = w.cssHooks[r];
            if (o && "expand" in o) {
                s = o.expand(s), delete e[r];
                for (n in s) n in e || (e[n] = s[n], t[n] = i)
            } else t[r] = i
        }
    }

    function nr(e, t, n) {
        var r, i, s, o, u, a, f = this, l = {}, c = e.style, h = e.nodeType && nn(e), p = w._data(e, "fxshow");
        n.queue || (u = w._queueHooks(e, "fx"), u.unqueued == null && (u.unqueued = 0, a = u.empty.fire, u.empty.fire = function () {
            u.unqueued || a()
        }), u.unqueued++, f.always(function () {
            f.always(function () {
                u.unqueued--, w.queue(e, "fx").length || u.empty.fire()
            })
        })), e.nodeType === 1 && ("height" in t || "width" in t) && (n.overflow = [c.overflow, c.overflowX, c.overflowY], w.css(e, "display") === "inline" && w.css(e, "float") === "none" && (!w.support.inlineBlockNeedsLayout || an(e.nodeName) === "inline" ? c.display = "inline-block" : c.zoom = 1)), n.overflow && (c.overflow = "hidden", w.support.shrinkWrapBlocks || f.always(function () {
            c.overflow = n.overflow[0], c.overflowX = n.overflow[1], c.overflowY = n.overflow[2]
        }));
        for (r in t) {
            i = t[r];
            if ($n.exec(i)) {
                delete t[r], s = s || i === "toggle";
                if (i === (h ? "hide" : "show")) continue;
                l[r] = p && p[r] || w.style(e, r)
            }
        }
        if (!w.isEmptyObject(l)) {
            p ? "hidden" in p && (h = p.hidden) : p = w._data(e, "fxshow", {}), s && (p.hidden = !h), h ? w(e).show() : f.done(function () {
                w(e).hide()
            }), f.done(function () {
                var t;
                w._removeData(e, "fxshow");
                for (t in l) w.style(e, t, l[t])
            });
            for (r in l) o = Zn(h ? p[r] : 0, r, f), r in p || (p[r] = o.start, h && (o.end = o.start, o.start = r === "width" || r === "height" ? 1 : 0))
        }
    }

    function rr(e, t, n, r, i) {
        return new rr.prototype.init(e, t, n, r, i)
    }

    function ir(e, t) {
        var n, r = {height: e}, i = 0;
        t = t ? 1 : 0;
        for (; i < 4; i += 2 - t) n = Zt[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function sr(e) {
        return w.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1
    }

    var n, r, i = typeof t, s = e.location, o = e.document, u = o.documentElement, a = e.jQuery, f = e.$, l = {},
        c = [], h = "1.10.2", p = c.concat, d = c.push, v = c.slice, m = c.indexOf, g = l.toString,
        y = l.hasOwnProperty, b = h.trim, w = function (e, t) {
            return new w.fn.init(e, t, r)
        }, E = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, S = /\S+/g, x = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        T = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, N = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, C = /^[\],:{}\s]*$/,
        k = /(?:^|:|,)(?:\s*\[)+/g, L = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        A = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, O = /^-ms-/, M = /-([\da-z])/gi,
        _ = function (e, t) {
            return t.toUpperCase()
        }, D = function (e) {
            if (o.addEventListener || e.type === "load" || o.readyState === "complete") P(), w.ready()
        }, P = function () {
            o.addEventListener ? (o.removeEventListener("DOMContentLoaded", D, !1), e.removeEventListener("load", D, !1)) : (o.detachEvent("onreadystatechange", D), e.detachEvent("onload", D))
        };
    w.fn = w.prototype = {
        jquery: h, constructor: w, init: function (e, n, r) {
            var i, s;
            if (!e) return this;
            if (typeof e == "string") {
                e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3 ? i = [null, e, null] : i = T.exec(e);
                if (i && (i[1] || !n)) {
                    if (i[1]) {
                        n = n instanceof w ? n[0] : n, w.merge(this, w.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : o, !0));
                        if (N.test(i[1]) && w.isPlainObject(n)) for (i in n) w.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                        return this
                    }
                    s = o.getElementById(i[2]);
                    if (s && s.parentNode) {
                        if (s.id !== i[2]) return r.find(e);
                        this.length = 1, this[0] = s
                    }
                    return this.context = o, this.selector = e, this
                }
                return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e)
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : w.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), w.makeArray(e, this))
        }, selector: "", length: 0, toArray: function () {
            return v.call(this)
        }, get: function (e) {
            return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
        }, pushStack: function (e) {
            var t = w.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        }, each: function (e, t) {
            return w.each(this, e, t)
        }, ready: function (e) {
            return w.ready.promise().done(e), this
        }, slice: function () {
            return this.pushStack(v.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        }, map: function (e) {
            return this.pushStack(w.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: d, sort: [].sort, splice: [].splice
    }, w.fn.init.prototype = w.fn, w.extend = w.fn.extend = function () {
        var e, n, r, i, s, o, u = arguments[0] || {}, a = 1, f = arguments.length, l = !1;
        typeof u == "boolean" && (l = u, u = arguments[1] || {}, a = 2), typeof u != "object" && !w.isFunction(u) && (u = {}), f === a && (u = this, --a);
        for (; a < f; a++) if ((s = arguments[a]) != null) for (i in s) {
            e = u[i], r = s[i];
            if (u === r) continue;
            l && r && (w.isPlainObject(r) || (n = w.isArray(r))) ? (n ? (n = !1, o = e && w.isArray(e) ? e : []) : o = e && w.isPlainObject(e) ? e : {}, u[i] = w.extend(l, o, r)) : r !== t && (u[i] = r)
        }
        return u
    }, w.extend({
        expando: "jQuery" + (h + Math.random()).replace(/\D/g, ""), noConflict: function (t) {
            return e.$ === w && (e.$ = f), t && e.jQuery === w && (e.jQuery = a), w
        }, isReady: !1, readyWait: 1, holdReady: function (e) {
            e ? w.readyWait++ : w.ready(!0)
        }, ready: function (e) {
            if (e === !0 ? --w.readyWait : w.isReady) return;
            if (!o.body) return setTimeout(w.ready);
            w.isReady = !0;
            if (e !== !0 && --w.readyWait > 0) return;
            n.resolveWith(o, [w]), w.fn.trigger && w(o).trigger("ready").off("ready")
        }, isFunction: function (e) {
            return w.type(e) === "function"
        }, isArray: Array.isArray || function (e) {
            return w.type(e) === "array"
        }, isWindow: function (e) {
            return e != null && e == e.window
        }, isNumeric: function (e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        }, type: function (e) {
            return e == null ? String(e) : typeof e == "object" || typeof e == "function" ? l[g.call(e)] || "object" : typeof e
        }, isPlainObject: function (e) {
            var n;
            if (!e || w.type(e) !== "object" || e.nodeType || w.isWindow(e)) return !1;
            try {
                if (e.constructor && !y.call(e, "constructor") && !y.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (r) {
                return !1
            }
            if (w.support.ownLast) for (n in e) return y.call(e, n);
            for (n in e) ;
            return n === t || y.call(e, n)
        }, isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        }, error: function (e) {
            throw new Error(e)
        }, parseHTML: function (e, t, n) {
            if (!e || typeof e != "string") return null;
            typeof t == "boolean" && (n = t, t = !1), t = t || o;
            var r = N.exec(e), i = !n && [];
            return r ? [t.createElement(r[1])] : (r = w.buildFragment([e], t, i), i && w(i).remove(), w.merge([], r.childNodes))
        }, parseJSON: function (t) {
            if (e.JSON && e.JSON.parse) return e.JSON.parse(t);
            if (t === null) return t;
            if (typeof t == "string") {
                t = w.trim(t);
                if (t && C.test(t.replace(L, "@").replace(A, "]").replace(k, ""))) return (new Function("return " + t))()
            }
            w.error("Invalid JSON: " + t)
        }, parseXML: function (n) {
            var r, i;
            if (!n || typeof n != "string") return null;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch (s) {
                r = t
            }
            return (!r || !r.documentElement || r.getElementsByTagName("parsererror").length) && w.error("Invalid XML: " + n), r
        }, noop: function () {
        }, globalEval: function (t) {
            t && w.trim(t) && (e.execScript || function (t) {
                e.eval.call(e, t)
            })(t)
        }, camelCase: function (e) {
            return e.replace(O, "ms-").replace(M, _)
        }, nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, each: function (e, t, n) {
            var r, i = 0, s = e.length, o = H(e);
            if (n) if (o) for (; i < s; i++) {
                r = t.apply(e[i], n);
                if (r === !1) break
            } else for (i in e) {
                r = t.apply(e[i], n);
                if (r === !1) break
            } else if (o) for (; i < s; i++) {
                r = t.call(e[i], i, e[i]);
                if (r === !1) break
            } else for (i in e) {
                r = t.call(e[i], i, e[i]);
                if (r === !1) break
            }
            return e
        }, trim: b && !b.call("﻿ ") ? function (e) {
            return e == null ? "" : b.call(e)
        } : function (e) {
            return e == null ? "" : (e + "").replace(x, "")
        }, makeArray: function (e, t) {
            var n = t || [];
            return e != null && (H(Object(e)) ? w.merge(n, typeof e == "string" ? [e] : e) : d.call(n, e)), n
        }, inArray: function (e, t, n) {
            var r;
            if (t) {
                if (m) return m.call(t, e, n);
                r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0;
                for (; n < r; n++) if (n in t && t[n] === e) return n
            }
            return -1
        }, merge: function (e, n) {
            var r = n.length, i = e.length, s = 0;
            if (typeof r == "number") for (; s < r; s++) e[i++] = n[s]; else while (n[s] !== t) e[i++] = n[s++];
            return e.length = i, e
        }, grep: function (e, t, n) {
            var r, i = [], s = 0, o = e.length;
            n = !!n;
            for (; s < o; s++) r = !!t(e[s], s), n !== r && i.push(e[s]);
            return i
        }, map: function (e, t, n) {
            var r, i = 0, s = e.length, o = H(e), u = [];
            if (o) for (; i < s; i++) r = t(e[i], i, n), r != null && (u[u.length] = r); else for (i in e) r = t(e[i], i, n), r != null && (u[u.length] = r);
            return p.apply([], u)
        }, guid: 1, proxy: function (e, n) {
            var r, i, s;
            return typeof n == "string" && (s = e[n], n = e, e = s), w.isFunction(e) ? (r = v.call(arguments, 2), i = function () {
                return e.apply(n || this, r.concat(v.call(arguments)))
            }, i.guid = e.guid = e.guid || w.guid++, i) : t
        }, access: function (e, n, r, i, s, o, u) {
            var a = 0, f = e.length, l = r == null;
            if (w.type(r) === "object") {
                s = !0;
                for (a in r) w.access(e, n, a, r[a], !0, o, u)
            } else if (i !== t) {
                s = !0, w.isFunction(i) || (u = !0), l && (u ? (n.call(e, i), n = null) : (l = n, n = function (e, t, n) {
                    return l.call(w(e), n)
                }));
                if (n) for (; a < f; a++) n(e[a], r, u ? i : i.call(e[a], a, n(e[a], r)))
            }
            return s ? e : l ? n.call(e) : f ? n(e[0], r) : o
        }, now: function () {
            return (new Date).getTime()
        }, swap: function (e, t, n, r) {
            var i, s, o = {};
            for (s in t) o[s] = e.style[s], e.style[s] = t[s];
            i = n.apply(e, r || []);
            for (s in t) e.style[s] = o[s];
            return i
        }
    }), w.ready.promise = function (t) {
        if (!n) {
            n = w.Deferred();
            if (o.readyState === "complete") setTimeout(w.ready); else if (o.addEventListener) o.addEventListener("DOMContentLoaded", D, !1), e.addEventListener("load", D, !1); else {
                o.attachEvent("onreadystatechange", D), e.attachEvent("onload", D);
                var r = !1;
                try {
                    r = e.frameElement == null && o.documentElement
                } catch (i) {
                }
                r && r.doScroll && function s() {
                    if (!w.isReady) {
                        try {
                            r.doScroll("left")
                        } catch (e) {
                            return setTimeout(s, 50)
                        }
                        P(), w.ready()
                    }
                }()
            }
        }
        return n.promise(t)
    }, w.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    }), r = w(o), function (e, t) {
        function ot(e, t, n, i) {
            var s, o, u, a, f, l, p, m, g, w;
            (t ? t.ownerDocument || t : E) !== h && c(t), t = t || h, n = n || [];
            if (!e || typeof e != "string") return n;
            if ((a = t.nodeType) !== 1 && a !== 9) return [];
            if (d && !i) {
                if (s = Z.exec(e)) if (u = s[1]) {
                    if (a === 9) {
                        o = t.getElementById(u);
                        if (!o || !o.parentNode) return n;
                        if (o.id === u) return n.push(o), n
                    } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(u)) && y(t, o) && o.id === u) return n.push(o), n
                } else {
                    if (s[2]) return H.apply(n, t.getElementsByTagName(e)), n;
                    if ((u = s[3]) && r.getElementsByClassName && t.getElementsByClassName) return H.apply(n, t.getElementsByClassName(u)), n
                }
                if (r.qsa && (!v || !v.test(e))) {
                    m = p = b, g = t, w = a === 9 && e;
                    if (a === 1 && t.nodeName.toLowerCase() !== "object") {
                        l = mt(e), (p = t.getAttribute("id")) ? m = p.replace(nt, "\\$&") : t.setAttribute("id", m), m = "[id='" + m + "'] ", f = l.length;
                        while (f--) l[f] = m + gt(l[f]);
                        g = $.test(e) && t.parentNode || t, w = l.join(",")
                    }
                    if (w) try {
                        return H.apply(n, g.querySelectorAll(w)), n
                    } catch (S) {
                    } finally {
                        p || t.removeAttribute("id")
                    }
                }
            }
            return Nt(e.replace(W, "$1"), t, n, i)
        }

        function ut() {
            function t(n, r) {
                return e.push(n += " ") > s.cacheLength && delete t[e.shift()], t[n] = r
            }

            var e = [];
            return t
        }

        function at(e) {
            return e[b] = !0, e
        }

        function ft(e) {
            var t = h.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function lt(e, t) {
            var n = e.split("|"), r = e.length;
            while (r--) s.attrHandle[n[r]] = t
        }

        function ct(e, t) {
            var n = t && e,
                r = n && e.nodeType === 1 && t.nodeType === 1 && (~t.sourceIndex || O) - (~e.sourceIndex || O);
            if (r) return r;
            if (n) while (n = n.nextSibling) if (n === t) return -1;
            return e ? 1 : -1
        }

        function ht(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return n === "input" && t.type === e
            }
        }

        function pt(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return (n === "input" || n === "button") && t.type === e
            }
        }

        function dt(e) {
            return at(function (t) {
                return t = +t, at(function (n, r) {
                    var i, s = e([], n.length, t), o = s.length;
                    while (o--) n[i = s[o]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function vt() {
        }

        function mt(e, t) {
            var n, r, i, o, u, a, f, l = N[e + " "];
            if (l) return t ? 0 : l.slice(0);
            u = e, a = [], f = s.preFilter;
            while (u) {
                if (!n || (r = X.exec(u))) r && (u = u.slice(r[0].length) || u), a.push(i = []);
                n = !1;
                if (r = V.exec(u)) n = r.shift(), i.push({value: n, type: r[0].replace(W, " ")}), u = u.slice(n.length);
                for (o in s.filter) (r = G[o].exec(u)) && (!f[o] || (r = f[o](r))) && (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), u = u.slice(n.length));
                if (!n) break
            }
            return t ? u.length : u ? ot.error(e) : N(e, a).slice(0)
        }

        function gt(e) {
            var t = 0, n = e.length, r = "";
            for (; t < n; t++) r += e[t].value;
            return r
        }

        function yt(e, t, n) {
            var r = t.dir, s = n && r === "parentNode", o = x++;
            return t.first ? function (t, n, i) {
                while (t = t[r]) if (t.nodeType === 1 || s) return e(t, n, i)
            } : function (t, n, u) {
                var a, f, l, c = S + " " + o;
                if (u) {
                    while (t = t[r]) if (t.nodeType === 1 || s) if (e(t, n, u)) return !0
                } else while (t = t[r]) if (t.nodeType === 1 || s) {
                    l = t[b] || (t[b] = {});
                    if ((f = l[r]) && f[0] === c) {
                        if ((a = f[1]) === !0 || a === i) return a === !0
                    } else {
                        f = l[r] = [c], f[1] = e(t, n, u) || i;
                        if (f[1] === !0) return !0
                    }
                }
            }
        }

        function bt(e) {
            return e.length > 1 ? function (t, n, r) {
                var i = e.length;
                while (i--) if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function wt(e, t, n, r, i) {
            var s, o = [], u = 0, a = e.length, f = t != null;
            for (; u < a; u++) if (s = e[u]) if (!n || n(s, r, i)) o.push(s), f && t.push(u);
            return o
        }

        function Et(e, t, n, r, i, s) {
            return r && !r[b] && (r = Et(r)), i && !i[b] && (i = Et(i, s)), at(function (s, o, u, a) {
                var f, l, c, h = [], p = [], d = o.length, v = s || Tt(t || "*", u.nodeType ? [u] : u, []),
                    m = e && (s || !t) ? wt(v, h, e, u, a) : v, g = n ? i || (s ? e : d || r) ? [] : o : m;
                n && n(m, g, u, a);
                if (r) {
                    f = wt(g, p), r(f, [], u, a), l = f.length;
                    while (l--) if (c = f[l]) g[p[l]] = !(m[p[l]] = c)
                }
                if (s) {
                    if (i || e) {
                        if (i) {
                            f = [], l = g.length;
                            while (l--) (c = g[l]) && f.push(m[l] = c);
                            i(null, g = [], f, a)
                        }
                        l = g.length;
                        while (l--) (c = g[l]) && (f = i ? j.call(s, c) : h[l]) > -1 && (s[f] = !(o[f] = c))
                    }
                } else g = wt(g === o ? g.splice(d, g.length) : g), i ? i(null, o, g, a) : H.apply(o, g)
            })
        }

        function St(e) {
            var t, n, r, i = e.length, o = s.relative[e[0].type], u = o || s.relative[" "], a = o ? 1 : 0,
                l = yt(function (e) {
                    return e === t
                }, u, !0), c = yt(function (e) {
                    return j.call(t, e) > -1
                }, u, !0), h = [function (e, n, r) {
                    return !o && (r || n !== f) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r))
                }];
            for (; a < i; a++) if (n = s.relative[e[a].type]) h = [yt(bt(h), n)]; else {
                n = s.filter[e[a].type].apply(null, e[a].matches);
                if (n[b]) {
                    r = ++a;
                    for (; r < i; r++) if (s.relative[e[r].type]) break;
                    return Et(a > 1 && bt(h), a > 1 && gt(e.slice(0, a - 1).concat({value: e[a - 2].type === " " ? "*" : ""})).replace(W, "$1"), n, a < r && St(e.slice(a, r)), r < i && St(e = e.slice(r)), r < i && gt(e))
                }
                h.push(n)
            }
            return bt(h)
        }

        function xt(e, t) {
            var n = 0, r = t.length > 0, o = e.length > 0, u = function (u, a, l, c, p) {
                var d, v, m, g = [], y = 0, b = "0", w = u && [], E = p != null, x = f,
                    T = u || o && s.find.TAG("*", p && a.parentNode || a), N = S += x == null ? 1 : Math.random() || .1;
                E && (f = a !== h && a, i = n);
                for (; (d = T[b]) != null; b++) {
                    if (o && d) {
                        v = 0;
                        while (m = e[v++]) if (m(d, a, l)) {
                            c.push(d);
                            break
                        }
                        E && (S = N, i = ++n)
                    }
                    r && ((d = !m && d) && y--, u && w.push(d))
                }
                y += b;
                if (r && b !== y) {
                    v = 0;
                    while (m = t[v++]) m(w, g, a, l);
                    if (u) {
                        if (y > 0) while (b--) !w[b] && !g[b] && (g[b] = D.call(c));
                        g = wt(g)
                    }
                    H.apply(c, g), E && !u && g.length > 0 && y + t.length > 1 && ot.uniqueSort(c)
                }
                return E && (S = N, f = x), w
            };
            return r ? at(u) : u
        }

        function Tt(e, t, n) {
            var r = 0, i = t.length;
            for (; r < i; r++) ot(e, t[r], n);
            return n
        }

        function Nt(e, t, n, i) {
            var o, u, f, l, c, h = mt(e);
            if (!i && h.length === 1) {
                u = h[0] = h[0].slice(0);
                if (u.length > 2 && (f = u[0]).type === "ID" && r.getById && t.nodeType === 9 && d && s.relative[u[1].type]) {
                    t = (s.find.ID(f.matches[0].replace(rt, it), t) || [])[0];
                    if (!t) return n;
                    e = e.slice(u.shift().value.length)
                }
                o = G.needsContext.test(e) ? 0 : u.length;
                while (o--) {
                    f = u[o];
                    if (s.relative[l = f.type]) break;
                    if (c = s.find[l]) if (i = c(f.matches[0].replace(rt, it), $.test(u[0].type) && t.parentNode || t)) {
                        u.splice(o, 1), e = i.length && gt(u);
                        if (!e) return H.apply(n, i), n;
                        break
                    }
                }
            }
            return a(e, h)(i, t, !d, n, $.test(e)), n
        }

        var n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b = "sizzle" + -(new Date), E = e.document, S = 0, x = 0,
            T = ut(), N = ut(), C = ut(), k = !1, L = function (e, t) {
                return e === t ? (k = !0, 0) : 0
            }, A = typeof t, O = 1 << 31, M = {}.hasOwnProperty, _ = [], D = _.pop, P = _.push, H = _.push, B = _.slice,
            j = _.indexOf || function (e) {
                var t = 0, n = this.length;
                for (; t < n; t++) if (this[t] === e) return t;
                return -1
            },
            F = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            I = "[\\x20\\t\\r\\n\\f]", q = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", R = q.replace("w", "w#"),
            U = "\\[" + I + "*(" + q + ")" + I + "*(?:([*^$|!~]?=)" + I + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + R + ")|)|)" + I + "*\\]",
            z = ":(" + q + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + U.replace(3, 8) + ")*)|.*)\\)|)",
            W = new RegExp("^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$", "g"),
            X = new RegExp("^" + I + "*," + I + "*"), V = new RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"),
            $ = new RegExp(I + "*[+~]"), J = new RegExp("=" + I + "*([^\\]'\"]*)" + I + "*\\]", "g"), K = new RegExp(z),
            Q = new RegExp("^" + R + "$"), G = {
                ID: new RegExp("^#(" + q + ")"),
                CLASS: new RegExp("^\\.(" + q + ")"),
                TAG: new RegExp("^(" + q.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + U),
                PSEUDO: new RegExp("^" + z),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + I + "*(even|odd|(([+-]|)(\\d*)n|)" + I + "*(?:([+-]|)" + I + "*(\\d+)|))" + I + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + F + ")$", "i"),
                needsContext: new RegExp("^" + I + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + I + "*((?:-\\d)?\\d*)" + I + "*\\)|)(?=[^-]|$)", "i")
            }, Y = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            et = /^(?:input|select|textarea|button)$/i, tt = /^h\d$/i, nt = /'|\\/g,
            rt = new RegExp("\\\\([\\da-f]{1,6}" + I + "?|(" + I + ")|.)", "ig"), it = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320)
            };
        try {
            H.apply(_ = B.call(E.childNodes), E.childNodes), _[E.childNodes.length].nodeType
        } catch (st) {
            H = {
                apply: _.length ? function (e, t) {
                    P.apply(e, B.call(t))
                } : function (e, t) {
                    var n = e.length, r = 0;
                    while (e[n++] = t[r++]) ;
                    e.length = n - 1
                }
            }
        }
        u = ot.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? t.nodeName !== "HTML" : !1
        }, r = ot.support = {}, c = ot.setDocument = function (e) {
            var t = e ? e.ownerDocument || e : E, n = t.defaultView;
            if (t === h || t.nodeType !== 9 || !t.documentElement) return h;
            h = t, p = t.documentElement, d = !u(t), n && n.attachEvent && n !== n.top && n.attachEvent("onbeforeunload", function () {
                c()
            }), r.attributes = ft(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), r.getElementsByTagName = ft(function (e) {
                return e.appendChild(t.createComment("")), !e.getElementsByTagName("*").length
            }), r.getElementsByClassName = ft(function (e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", e.getElementsByClassName("i").length === 2
            }), r.getById = ft(function (e) {
                return p.appendChild(e).id = b, !t.getElementsByName || !t.getElementsByName(b).length
            }), r.getById ? (s.find.ID = function (e, t) {
                if (typeof t.getElementById !== A && d) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, s.filter.ID = function (e) {
                var t = e.replace(rt, it);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete s.find.ID, s.filter.ID = function (e) {
                var t = e.replace(rt, it);
                return function (e) {
                    var n = typeof e.getAttributeNode !== A && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), s.find.TAG = r.getElementsByTagName ? function (e, t) {
                if (typeof t.getElementsByTagName !== A) return t.getElementsByTagName(e)
            } : function (e, t) {
                var n, r = [], i = 0, s = t.getElementsByTagName(e);
                if (e === "*") {
                    while (n = s[i++]) n.nodeType === 1 && r.push(n);
                    return r
                }
                return s
            }, s.find.CLASS = r.getElementsByClassName && function (e, t) {
                if (typeof t.getElementsByClassName !== A && d) return t.getElementsByClassName(e)
            }, m = [], v = [];
            if (r.qsa = Y.test(t.querySelectorAll)) ft(function (e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || v.push("\\[" + I + "*(?:value|" + F + ")"), e.querySelectorAll(":checked").length || v.push(":checked")
            }), ft(function (e) {
                var n = t.createElement("input");
                n.setAttribute("type", "hidden"), e.appendChild(n).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && v.push("[*^$]=" + I + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
            });
            return (r.matchesSelector = Y.test(g = p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && ft(function (e) {
                r.disconnectedMatch = g.call(e, "div"), g.call(e, "[s!='']:x"), m.push("!=", z)
            }), v = v.length && new RegExp(v.join("|")), m = m.length && new RegExp(m.join("|")), y = Y.test(p.contains) || p.compareDocumentPosition ? function (e, t) {
                var n = e.nodeType === 9 ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !!r && r.nodeType === 1 && !!(n.contains ? n.contains(r) : e.compareDocumentPosition && e.compareDocumentPosition(r) & 16)
            } : function (e, t) {
                if (t) while (t = t.parentNode) if (t === e) return !0;
                return !1
            }, L = p.compareDocumentPosition ? function (e, n) {
                if (e === n) return k = !0, 0;
                var i = n.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(n);
                if (i) return i & 1 || !r.sortDetached && n.compareDocumentPosition(e) === i ? e === t || y(E, e) ? -1 : n === t || y(E, n) ? 1 : l ? j.call(l, e) - j.call(l, n) : 0 : i & 4 ? -1 : 1;
                return e.compareDocumentPosition ? -1 : 1
            } : function (e, n) {
                var r, i = 0, s = e.parentNode, o = n.parentNode, u = [e], a = [n];
                if (e === n) return k = !0, 0;
                if (!s || !o) return e === t ? -1 : n === t ? 1 : s ? -1 : o ? 1 : l ? j.call(l, e) - j.call(l, n) : 0;
                if (s === o) return ct(e, n);
                r = e;
                while (r = r.parentNode) u.unshift(r);
                r = n;
                while (r = r.parentNode) a.unshift(r);
                while (u[i] === a[i]) i++;
                return i ? ct(u[i], a[i]) : u[i] === E ? -1 : a[i] === E ? 1 : 0
            }, t
        }, ot.matches = function (e, t) {
            return ot(e, null, null, t)
        }, ot.matchesSelector = function (e, t) {
            (e.ownerDocument || e) !== h && c(e), t = t.replace(J, "='$1']");
            if (r.matchesSelector && d && (!m || !m.test(t)) && (!v || !v.test(t))) try {
                var n = g.call(e, t);
                if (n || r.disconnectedMatch || e.document && e.document.nodeType !== 11) return n
            } catch (i) {
            }
            return ot(t, h, null, [e]).length > 0
        }, ot.contains = function (e, t) {
            return (e.ownerDocument || e) !== h && c(e), y(e, t)
        }, ot.attr = function (e, n) {
            (e.ownerDocument || e) !== h && c(e);
            var i = s.attrHandle[n.toLowerCase()], o = i && M.call(s.attrHandle, n.toLowerCase()) ? i(e, n, !d) : t;
            return o === t ? r.attributes || !d ? e.getAttribute(n) : (o = e.getAttributeNode(n)) && o.specified ? o.value : null : o
        }, ot.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, ot.uniqueSort = function (e) {
            var t, n = [], i = 0, s = 0;
            k = !r.detectDuplicates, l = !r.sortStable && e.slice(0), e.sort(L);
            if (k) {
                while (t = e[s++]) t === e[s] && (i = n.push(s));
                while (i--) e.splice(n[i], 1)
            }
            return e
        }, o = ot.getText = function (e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (!i) for (; t = e[r]; r++) n += o(t); else if (i === 1 || i === 9 || i === 11) {
                if (typeof e.textContent == "string") return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
            } else if (i === 3 || i === 4) return e.nodeValue;
            return n
        }, s = ot.selectors = {
            cacheLength: 50,
            createPseudo: at,
            match: G,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(rt, it), e[3] = (e[4] || e[5] || "").replace(rt, it), e[2] === "~=" && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), e[1].slice(0, 3) === "nth" ? (e[3] || ot.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd")), e[5] = +(e[7] + e[8] || e[3] === "odd")) : e[3] && ot.error(e[0]), e
                }, PSEUDO: function (e) {
                    var n, r = !e[5] && e[2];
                    return G.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && K.test(r) && (n = mt(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(rt, it).toLowerCase();
                    return e === "*" ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = T[e + " "];
                    return t || (t = new RegExp("(^|" + I + ")" + e + "(" + I + "|$)")) && T(e, function (e) {
                        return t.test(typeof e.className == "string" && e.className || typeof e.getAttribute !== A && e.getAttribute("class") || "")
                    })
                }, ATTR: function (e, t, n) {
                    return function (r) {
                        var i = ot.attr(r, e);
                        return i == null ? t === "!=" : t ? (i += "", t === "=" ? i === n : t === "!=" ? i !== n : t === "^=" ? n && i.indexOf(n) === 0 : t === "*=" ? n && i.indexOf(n) > -1 : t === "$=" ? n && i.slice(-n.length) === n : t === "~=" ? (" " + i + " ").indexOf(n) > -1 : t === "|=" ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                }, CHILD: function (e, t, n, r, i) {
                    var s = e.slice(0, 3) !== "nth", o = e.slice(-4) !== "last", u = t === "of-type";
                    return r === 1 && i === 0 ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, a) {
                        var f, l, c, h, p, d, v = s !== o ? "nextSibling" : "previousSibling", m = t.parentNode,
                            g = u && t.nodeName.toLowerCase(), y = !a && !u;
                        if (m) {
                            if (s) {
                                while (v) {
                                    c = t;
                                    while (c = c[v]) if (u ? c.nodeName.toLowerCase() === g : c.nodeType === 1) return !1;
                                    d = v = e === "only" && !d && "nextSibling"
                                }
                                return !0
                            }
                            d = [o ? m.firstChild : m.lastChild];
                            if (o && y) {
                                l = m[b] || (m[b] = {}), f = l[e] || [], p = f[0] === S && f[1], h = f[0] === S && f[2], c = p && m.childNodes[p];
                                while (c = ++p && c && c[v] || (h = p = 0) || d.pop()) if (c.nodeType === 1 && ++h && c === t) {
                                    l[e] = [S, p, h];
                                    break
                                }
                            } else if (y && (f = (t[b] || (t[b] = {}))[e]) && f[0] === S) h = f[1]; else while (c = ++p && c && c[v] || (h = p = 0) || d.pop()) if ((u ? c.nodeName.toLowerCase() === g : c.nodeType === 1) && ++h) {
                                y && ((c[b] || (c[b] = {}))[e] = [S, h]);
                                if (c === t) break
                            }
                            return h -= i, h === r || h % r === 0 && h / r >= 0
                        }
                    }
                }, PSEUDO: function (e, t) {
                    var n, r = s.pseudos[e] || s.setFilters[e.toLowerCase()] || ot.error("unsupported pseudo: " + e);
                    return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t], s.setFilters.hasOwnProperty(e.toLowerCase()) ? at(function (e, n) {
                        var i, s = r(e, t), o = s.length;
                        while (o--) i = j.call(e, s[o]), e[i] = !(n[i] = s[o])
                    }) : function (e) {
                        return r(e, 0, n)
                    }) : r
                }
            },
            pseudos: {
                not: at(function (e) {
                    var t = [], n = [], r = a(e.replace(W, "$1"));
                    return r[b] ? at(function (e, t, n, i) {
                        var s, o = r(e, null, i, []), u = e.length;
                        while (u--) if (s = o[u]) e[u] = !(t[u] = s)
                    }) : function (e, i, s) {
                        return t[0] = e, r(t, null, s, n), !n.pop()
                    }
                }), has: at(function (e) {
                    return function (t) {
                        return ot(e, t).length > 0
                    }
                }), contains: at(function (e) {
                    return function (t) {
                        return (t.textContent || t.innerText || o(t)).indexOf(e) > -1
                    }
                }), lang: at(function (e) {
                    return Q.test(e || "") || ot.error("unsupported lang: " + e), e = e.replace(rt, it).toLowerCase(), function (t) {
                        var n;
                        do if (n = d ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || n.indexOf(e + "-") === 0; while ((t = t.parentNode) && t.nodeType === 1);
                        return !1
                    }
                }), target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                }, root: function (e) {
                    return e === p
                }, focus: function (e) {
                    return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: function (e) {
                    return e.disabled === !1
                }, disabled: function (e) {
                    return e.disabled === !0
                }, checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && !!e.checked || t === "option" && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeName > "@" || e.nodeType === 3 || e.nodeType === 4) return !1;
                    return !0
                }, parent: function (e) {
                    return !s.pseudos.empty(e)
                }, header: function (e) {
                    return tt.test(e.nodeName)
                }, input: function (e) {
                    return et.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && e.type === "button" || t === "button"
                }, text: function (e) {
                    var t;
                    return e.nodeName.toLowerCase() === "input" && e.type === "text" && ((t = e.getAttribute("type")) == null || t.toLowerCase() === e.type)
                }, first: dt(function () {
                    return [0]
                }), last: dt(function (e, t) {
                    return [t - 1]
                }), eq: dt(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }), even: dt(function (e, t) {
                    var n = 0;
                    for (; n < t; n += 2) e.push(n);
                    return e
                }), odd: dt(function (e, t) {
                    var n = 1;
                    for (; n < t; n += 2) e.push(n);
                    return e
                }), lt: dt(function (e, t, n) {
                    var r = n < 0 ? n + t : n;
                    for (; --r >= 0;) e.push(r);
                    return e
                }), gt: dt(function (e, t, n) {
                    var r = n < 0 ? n + t : n;
                    for (; ++r < t;) e.push(r);
                    return e
                })
            }
        }, s.pseudos.nth = s.pseudos.eq;
        for (n in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) s.pseudos[n] = ht(n);
        for (n in{submit: !0, reset: !0}) s.pseudos[n] = pt(n);
        vt.prototype = s.filters = s.pseudos, s.setFilters = new vt, a = ot.compile = function (e, t) {
            var n, r = [], i = [], s = C[e + " "];
            if (!s) {
                t || (t = mt(e)), n = t.length;
                while (n--) s = St(t[n]), s[b] ? r.push(s) : i.push(s);
                s = C(e, xt(i, r))
            }
            return s
        }, r.sortStable = b.split("").sort(L).join("") === b, r.detectDuplicates = k, c(), r.sortDetached = ft(function (e) {
            return e.compareDocumentPosition(h.createElement("div")) & 1
        }), ft(function (e) {
            return e.innerHTML = "<a href='#'></a>", e.firstChild.getAttribute("href") === "#"
        }) || lt("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, t.toLowerCase() === "type" ? 1 : 2)
        }), (!r.attributes || !ft(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), e.firstChild.getAttribute("value") === ""
        })) && lt("value", function (e, t, n) {
            if (!n && e.nodeName.toLowerCase() === "input") return e.defaultValue
        }), ft(function (e) {
            return e.getAttribute("disabled") == null
        }) || lt(F, function (e, t, n) {
            var r;
            if (!n) return (r = e.getAttributeNode(t)) && r.specified ? r.value : e[t] === !0 ? t.toLowerCase() : null
        }), w.find = ot, w.expr = ot.selectors, w.expr[":"] = w.expr.pseudos, w.unique = ot.uniqueSort, w.text = ot.getText, w.isXMLDoc = ot.isXML, w.contains = ot.contains
    }(e);
    var B = {};
    w.Callbacks = function (e) {
        e = typeof e == "string" ? B[e] || j(e) : w.extend({}, e);
        var n, r, i, s, o, u, a = [], f = !e.once && [], l = function (t) {
            r = e.memory && t, i = !0, o = u || 0, u = 0, s = a.length, n = !0;
            for (; a && o < s; o++) if (a[o].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                r = !1;
                break
            }
            n = !1, a && (f ? f.length && l(f.shift()) : r ? a = [] : c.disable())
        }, c = {
            add: function () {
                if (a) {
                    var t = a.length;
                    (function i(t) {
                        w.each(t, function (t, n) {
                            var r = w.type(n);
                            r === "function" ? (!e.unique || !c.has(n)) && a.push(n) : n && n.length && r !== "string" && i(n)
                        })
                    })(arguments), n ? s = a.length : r && (u = t, l(r))
                }
                return this
            }, remove: function () {
                return a && w.each(arguments, function (e, t) {
                    var r;
                    while ((r = w.inArray(t, a, r)) > -1) a.splice(r, 1), n && (r <= s && s--, r <= o && o--)
                }), this
            }, has: function (e) {
                return e ? w.inArray(e, a) > -1 : !!a && !!a.length
            }, empty: function () {
                return a = [], s = 0, this
            }, disable: function () {
                return a = f = r = t, this
            }, disabled: function () {
                return !a
            }, lock: function () {
                return f = t, r || c.disable(), this
            }, locked: function () {
                return !f
            }, fireWith: function (e, t) {
                return a && (!i || f) && (t = t || [], t = [e, t.slice ? t.slice() : t], n ? f.push(t) : l(t)), this
            }, fire: function () {
                return c.fireWith(this, arguments), this
            }, fired: function () {
                return !!i
            }
        };
        return c
    }, w.extend({
        Deferred: function (e) {
            var t = [["resolve", "done", w.Callbacks("once memory"), "resolved"], ["reject", "fail", w.Callbacks("once memory"), "rejected"], ["notify", "progress", w.Callbacks("memory")]],
                n = "pending", r = {
                    state: function () {
                        return n
                    }, always: function () {
                        return i.done(arguments).fail(arguments), this
                    }, then: function () {
                        var e = arguments;
                        return w.Deferred(function (n) {
                            w.each(t, function (t, s) {
                                var o = s[0], u = w.isFunction(e[t]) && e[t];
                                i[s[1]](function () {
                                    var e = u && u.apply(this, arguments);
                                    e && w.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o + "With"](this === r ? n.promise() : this, u ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    }, promise: function (e) {
                        return e != null ? w.extend(e, r) : r
                    }
                }, i = {};
            return r.pipe = r.then, w.each(t, function (e, s) {
                var o = s[2], u = s[3];
                r[s[1]] = o.add, u && o.add(function () {
                    n = u
                }, t[e ^ 1][2].disable, t[2][2].lock), i[s[0]] = function () {
                    return i[s[0] + "With"](this === i ? r : this, arguments), this
                }, i[s[0] + "With"] = o.fireWith
            }), r.promise(i), e && e.call(i, i), i
        }, when: function (e) {
            var t = 0, n = v.call(arguments), r = n.length, i = r !== 1 || e && w.isFunction(e.promise) ? r : 0,
                s = i === 1 ? e : w.Deferred(), o = function (e, t, n) {
                    return function (r) {
                        t[e] = this, n[e] = arguments.length > 1 ? v.call(arguments) : r, n === u ? s.notifyWith(t, n) : --i || s.resolveWith(t, n)
                    }
                }, u, a, f;
            if (r > 1) {
                u = new Array(r), a = new Array(r), f = new Array(r);
                for (; t < r; t++) n[t] && w.isFunction(n[t].promise) ? n[t].promise().done(o(t, f, n)).fail(s.reject).progress(o(t, a, u)) : --i
            }
            return i || s.resolveWith(f, n), s.promise()
        }
    }), w.support = function (t) {
        var n, r, s, u, a, f, l, c, h, p = o.createElement("div");
        p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = p.getElementsByTagName("*") || [], r = p.getElementsByTagName("a")[0];
        if (!r || !r.style || !n.length) return t;
        u = o.createElement("select"), f = u.appendChild(o.createElement("option")), s = p.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = p.className !== "t", t.leadingWhitespace = p.firstChild.nodeType === 3, t.tbody = !p.getElementsByTagName("tbody").length, t.htmlSerialize = !!p.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), t.hrefNormalized = r.getAttribute("href") === "/a", t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !!r.style.cssFloat, t.checkOn = !!s.value, t.optSelected = f.selected, t.enctype = !!o.createElement("form").enctype, t.html5Clone = o.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>", t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, s.checked = !0, t.noCloneChecked = s.cloneNode(!0).checked, u.disabled = !0, t.optDisabled = !f.disabled;
        try {
            delete p.test
        } catch (d) {
            t.deleteExpando = !1
        }
        s = o.createElement("input"), s.setAttribute("value", ""), t.input = s.getAttribute("value") === "", s.value = "t", s.setAttribute("type", "radio"), t.radioValue = s.value === "t", s.setAttribute("checked", "t"), s.setAttribute("name", "t"), a = o.createDocumentFragment(), a.appendChild(s), t.appendChecked = s.checked, t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, p.attachEvent && (p.attachEvent("onclick", function () {
            t.noCloneEvent = !1
        }), p.cloneNode(!0).click());
        for (h in{
            submit: !0,
            change: !0,
            focusin: !0
        }) p.setAttribute(l = "on" + h, "t"), t[h + "Bubbles"] = l in e || p.attributes[l].expando === !1;
        p.style.backgroundClip = "content-box", p.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = p.style.backgroundClip === "content-box";
        for (h in w(t)) break;
        return t.ownLast = h !== "0", w(function () {
            var n, r, s,
                u = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                a = o.getElementsByTagName("body")[0];
            if (!a) return;
            n = o.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(p), p.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", s = p.getElementsByTagName("td"), s[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = s[0].offsetHeight === 0, s[0].style.display = "", s[1].style.display = "none", t.reliableHiddenOffsets = c && s[0].offsetHeight === 0, p.innerHTML = "", p.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", w.swap(a, a.style.zoom != null ? {zoom: 1} : {}, function () {
                t.boxSizing = p.offsetWidth === 4
            }), e.getComputedStyle && (t.pixelPosition = (e.getComputedStyle(p, null) || {}).top !== "1%", t.boxSizingReliable = (e.getComputedStyle(p, null) || {width: "4px"}).width === "4px", r = p.appendChild(o.createElement("div")), r.style.cssText = p.style.cssText = u, r.style.marginRight = r.style.width = "0", p.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof p.style.zoom !== i && (p.innerHTML = "", p.style.cssText = u + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = p.offsetWidth === 3, p.style.display = "block", p.innerHTML = "<div></div>", p.firstChild.style.width = "5px", t.shrinkWrapBlocks = p.offsetWidth !== 3, t.inlineBlockNeedsLayout && (a.style.zoom = 1)), a.removeChild(n), n = p = s = r = null
        }), n = u = a = f = r = s = null, t
    }({});
    var F = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, I = /([A-Z])/g;
    w.extend({
        cache: {},
        noData: {applet: !0, embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
        hasData: function (e) {
            return e = e.nodeType ? w.cache[e[w.expando]] : e[w.expando], !!e && !z(e)
        },
        data: function (e, t, n) {
            return q(e, t, n)
        },
        removeData: function (e, t) {
            return R(e, t)
        },
        _data: function (e, t, n) {
            return q(e, t, n, !0)
        },
        _removeData: function (e, t) {
            return R(e, t, !0)
        },
        acceptData: function (e) {
            if (e.nodeType && e.nodeType !== 1 && e.nodeType !== 9) return !1;
            var t = e.nodeName && w.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), w.fn.extend({
        data: function (e, n) {
            var r, i, s = null, o = 0, u = this[0];
            if (e === t) {
                if (this.length) {
                    s = w.data(u);
                    if (u.nodeType === 1 && !w._data(u, "parsedAttrs")) {
                        r = u.attributes;
                        for (; o < r.length; o++) i = r[o].name, i.indexOf("data-") === 0 && (i = w.camelCase(i.slice(5)), U(u, i, s[i]));
                        w._data(u, "parsedAttrs", !0)
                    }
                }
                return s
            }
            return typeof e == "object" ? this.each(function () {
                w.data(this, e)
            }) : arguments.length > 1 ? this.each(function () {
                w.data(this, e, n)
            }) : u ? U(u, e, w.data(u, e)) : null
        }, removeData: function (e) {
            return this.each(function () {
                w.removeData(this, e)
            })
        }
    }), w.extend({
        queue: function (e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = w._data(e, t), n && (!r || w.isArray(n) ? r = w._data(e, t, w.makeArray(n)) : r.push(n)), r || []
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = w.queue(e, t), r = n.length, i = n.shift(), s = w._queueHooks(e, t), o = function () {
                w.dequeue(e, t)
            };
            i === "inprogress" && (i = n.shift(), r--), i && (t === "fx" && n.unshift("inprogress"), delete s.stop, i.call(e, o, s)), !r && s && s.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return w._data(e, n) || w._data(e, n, {
                empty: w.Callbacks("once memory").add(function () {
                    w._removeData(e, t + "queue"), w._removeData(e, n)
                })
            })
        }
    }), w.fn.extend({
        queue: function (e, n) {
            var r = 2;
            return typeof e != "string" && (n = e, e = "fx", r--), arguments.length < r ? w.queue(this[0], e) : n === t ? this : this.each(function () {
                var t = w.queue(this, e, n);
                w._queueHooks(this, e), e === "fx" && t[0] !== "inprogress" && w.dequeue(this, e)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                w.dequeue(this, e)
            })
        }, delay: function (e, t) {
            return e = w.fx ? w.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                var r = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(r)
                }
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, n) {
            var r, i = 1, s = w.Deferred(), o = this, u = this.length, a = function () {
                --i || s.resolveWith(o, [o])
            };
            typeof e != "string" && (n = e, e = t), e = e || "fx";
            while (u--) r = w._data(o[u], e + "queueHooks"), r && r.empty && (i++, r.empty.add(a));
            return a(), s.promise(n)
        }
    });
    var W, X, V = /[\t\r\n\f]/g, $ = /\r/g, J = /^(?:input|select|textarea|button|object)$/i, K = /^(?:a|area)$/i,
        Q = /^(?:checked|selected)$/i, G = w.support.getSetAttribute, Y = w.support.input;
    w.fn.extend({
        attr: function (e, t) {
            return w.access(this, w.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                w.removeAttr(this, e)
            })
        }, prop: function (e, t) {
            return w.access(this, w.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
            return e = w.propFix[e] || e, this.each(function () {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {
                }
            })
        }, addClass: function (e) {
            var t, n, r, i, s, o = 0, u = this.length, a = typeof e == "string" && e;
            if (w.isFunction(e)) return this.each(function (t) {
                w(this).addClass(e.call(this, t, this.className))
            });
            if (a) {
                t = (e || "").match(S) || [];
                for (; o < u; o++) {
                    n = this[o], r = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(V, " ") : " ");
                    if (r) {
                        s = 0;
                        while (i = t[s++]) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        n.className = w.trim(r)
                    }
                }
            }
            return this
        }, removeClass: function (e) {
            var t, n, r, i, s, o = 0, u = this.length, a = arguments.length === 0 || typeof e == "string" && e;
            if (w.isFunction(e)) return this.each(function (t) {
                w(this).removeClass(e.call(this, t, this.className))
            });
            if (a) {
                t = (e || "").match(S) || [];
                for (; o < u; o++) {
                    n = this[o], r = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(V, " ") : "");
                    if (r) {
                        s = 0;
                        while (i = t[s++]) while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
                        n.className = e ? w.trim(r) : ""
                    }
                }
            }
            return this
        }, toggleClass: function (e, t) {
            var n = typeof e;
            return typeof t == "boolean" && n === "string" ? t ? this.addClass(e) : this.removeClass(e) : w.isFunction(e) ? this.each(function (n) {
                w(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function () {
                if (n === "string") {
                    var t, r = 0, s = w(this), o = e.match(S) || [];
                    while (t = o[r++]) s.hasClass(t) ? s.removeClass(t) : s.addClass(t)
                } else if (n === i || n === "boolean") this.className && w._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : w._data(this, "__className__") || ""
            })
        }, hasClass: function (e) {
            var t = " " + e + " ", n = 0, r = this.length;
            for (; n < r; n++) if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(V, " ").indexOf(t) >= 0) return !0;
            return !1
        }, val: function (e) {
            var n, r, i, s = this[0];
            if (!arguments.length) {
                if (s) return r = w.valHooks[s.type] || w.valHooks[s.nodeName.toLowerCase()], r && "get" in r && (n = r.get(s, "value")) !== t ? n : (n = s.value, typeof n == "string" ? n.replace($, "") : n == null ? "" : n);
                return
            }
            return i = w.isFunction(e), this.each(function (n) {
                var s;
                if (this.nodeType !== 1) return;
                i ? s = e.call(this, n, w(this).val()) : s = e, s == null ? s = "" : typeof s == "number" ? s += "" : w.isArray(s) && (s = w.map(s, function (e) {
                    return e == null ? "" : e + ""
                })), r = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()];
                if (!r || !("set" in r) || r.set(this, s, "value") === t) this.value = s
            })
        }
    }), w.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = w.find.attr(e, "value");
                    return t != null ? t : e.text
                }
            }, select: {
                get: function (e) {
                    var t, n, r = e.options, i = e.selectedIndex, s = e.type === "select-one" || i < 0,
                        o = s ? null : [], u = s ? i + 1 : r.length, a = i < 0 ? u : s ? i : 0;
                    for (; a < u; a++) {
                        n = r[a];
                        if ((n.selected || a === i) && (w.support.optDisabled ? !n.disabled : n.getAttribute("disabled") === null) && (!n.parentNode.disabled || !w.nodeName(n.parentNode, "optgroup"))) {
                            t = w(n).val();
                            if (s) return t;
                            o.push(t)
                        }
                    }
                    return o
                }, set: function (e, t) {
                    var n, r, i = e.options, s = w.makeArray(t), o = i.length;
                    while (o--) {
                        r = i[o];
                        if (r.selected = w.inArray(w(r).val(), s) >= 0) n = !0
                    }
                    return n || (e.selectedIndex = -1), s
                }
            }
        }, attr: function (e, n, r) {
            var s, o, u = e.nodeType;
            if (!e || u === 3 || u === 8 || u === 2) return;
            if (typeof e.getAttribute === i) return w.prop(e, n, r);
            if (u !== 1 || !w.isXMLDoc(e)) n = n.toLowerCase(), s = w.attrHooks[n] || (w.expr.match.bool.test(n) ? X : W);
            if (r === t) return s && "get" in s && (o = s.get(e, n)) !== null ? o : (o = w.find.attr(e, n), o == null ? t : o);
            if (r !== null) return s && "set" in s && (o = s.set(e, r, n)) !== t ? o : (e.setAttribute(n, r + ""), r);
            w.removeAttr(e, n)
        }, removeAttr: function (e, t) {
            var n, r, i = 0, s = t && t.match(S);
            if (s && e.nodeType === 1) while (n = s[i++]) r = w.propFix[n] || n, w.expr.match.bool.test(n) ? Y && G || !Q.test(n) ? e[r] = !1 : e[w.camelCase("default-" + n)] = e[r] = !1 : w.attr(e, n, ""), e.removeAttribute(G ? n : r)
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!w.support.radioValue && t === "radio" && w.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }, propFix: {"for": "htmlFor", "class": "className"}, prop: function (e, n, r) {
            var i, s, o, u = e.nodeType;
            if (!e || u === 3 || u === 8 || u === 2) return;
            return o = u !== 1 || !w.isXMLDoc(e), o && (n = w.propFix[n] || n, s = w.propHooks[n]), r !== t ? s && "set" in s && (i = s.set(e, r, n)) !== t ? i : e[n] = r : s && "get" in s && (i = s.get(e, n)) !== null ? i : e[n]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = w.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : J.test(e.nodeName) || K.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), X = {
        set: function (e, t, n) {
            return t === !1 ? w.removeAttr(e, n) : Y && G || !Q.test(n) ? e.setAttribute(!G && w.propFix[n] || n, n) : e[w.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, w.each(w.expr.match.bool.source.match(/\w+/g), function (e, n) {
        var r = w.expr.attrHandle[n] || w.find.attr;
        w.expr.attrHandle[n] = Y && G || !Q.test(n) ? function (e, n, i) {
            var s = w.expr.attrHandle[n], o = i ? t : (w.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
            return w.expr.attrHandle[n] = s, o
        } : function (e, n, r) {
            return r ? t : e[w.camelCase("default-" + n)] ? n.toLowerCase() : null
        }
    });
    if (!Y || !G) w.attrHooks.value = {
        set: function (e, t, n) {
            if (!w.nodeName(e, "input")) return W && W.set(e, t, n);
            e.defaultValue = t
        }
    };
    G || (W = {
        set: function (e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", r === "value" || n === e.getAttribute(r) ? n : t
        }
    }, w.expr.attrHandle.id = w.expr.attrHandle.name = w.expr.attrHandle.coords = function (e, n, r) {
        var i;
        return r ? t : (i = e.getAttributeNode(n)) && i.value !== "" ? i.value : null
    }, w.valHooks.button = {
        get: function (e, n) {
            var r = e.getAttributeNode(n);
            return r && r.specified ? r.value : t
        }, set: W.set
    }, w.attrHooks.contenteditable = {
        set: function (e, t, n) {
            W.set(e, t === "" ? !1 : t, n)
        }
    }, w.each(["width", "height"], function (e, t) {
        w.attrHooks[t] = {
            set: function (e, n) {
                if (n === "") return e.setAttribute(t, "auto"), n
            }
        }
    })), w.support.hrefNormalized || w.each(["href", "src"], function (e, t) {
        w.propHooks[t] = {
            get: function (e) {
                return e.getAttribute(t, 4)
            }
        }
    }), w.support.style || (w.attrHooks.style = {
        get: function (e) {
            return e.style.cssText || t
        }, set: function (e, t) {
            return e.style.cssText = t + ""
        }
    }), w.support.optSelected || (w.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        w.propFix[this.toLowerCase()] = this
    }), w.support.enctype || (w.propFix.enctype = "encoding"), w.each(["radio", "checkbox"], function () {
        w.valHooks[this] = {
            set: function (e, t) {
                if (w.isArray(t)) return e.checked = w.inArray(w(e).val(), t) >= 0
            }
        }, w.support.checkOn || (w.valHooks[this].get = function (e) {
            return e.getAttribute("value") === null ? "on" : e.value
        })
    });
    var Z = /^(?:input|select|textarea)$/i, et = /^key/, tt = /^(?:mouse|contextmenu)|click/,
        nt = /^(?:focusinfocus|focusoutblur)$/, rt = /^([^.]*)(?:\.(.+)|)$/;
    w.event = {
        global: {},
        add: function (e, n, r, s, o) {
            var u, a, f, l, c, h, p, d, v, m, g, y = w._data(e);
            if (!y) return;
            r.handler && (l = r, r = l.handler, o = l.selector), r.guid || (r.guid = w.guid++), (a = y.events) || (a = y.events = {}), (h = y.handle) || (h = y.handle = function (e) {
                return typeof w === i || !!e && w.event.triggered === e.type ? t : w.event.dispatch.apply(h.elem, arguments)
            }, h.elem = e), n = (n || "").match(S) || [""], f = n.length;
            while (f--) {
                u = rt.exec(n[f]) || [], v = g = u[1], m = (u[2] || "").split(".").sort();
                if (!v) continue;
                c = w.event.special[v] || {}, v = (o ? c.delegateType : c.bindType) || v, c = w.event.special[v] || {}, p = w.extend({
                    type: v,
                    origType: g,
                    data: s,
                    handler: r,
                    guid: r.guid,
                    selector: o,
                    needsContext: o && w.expr.match.needsContext.test(o),
                    namespace: m.join(".")
                }, l);
                if (!(d = a[v])) {
                    d = a[v] = [], d.delegateCount = 0;
                    if (!c.setup || c.setup.call(e, s, m, h) === !1) e.addEventListener ? e.addEventListener(v, h, !1) : e.attachEvent && e.attachEvent("on" + v, h)
                }
                c.add && (c.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), o ? d.splice(d.delegateCount++, 0, p) : d.push(p), w.event.global[v] = !0
            }
            e = null
        },
        remove: function (e, t, n, r, i) {
            var s, o, u, a, f, l, c, h, p, d, v, m = w.hasData(e) && w._data(e);
            if (!m || !(l = m.events)) return;
            t = (t || "").match(S) || [""], f = t.length;
            while (f--) {
                u = rt.exec(t[f]) || [], p = v = u[1], d = (u[2] || "").split(".").sort();
                if (!p) {
                    for (p in l) w.event.remove(e, p + t[f], n, r, !0);
                    continue
                }
                c = w.event.special[p] || {}, p = (r ? c.delegateType : c.bindType) || p, h = l[p] || [], u = u[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = s = h.length;
                while (s--) o = h[s], (i || v === o.origType) && (!n || n.guid === o.guid) && (!u || u.test(o.namespace)) && (!r || r === o.selector || r === "**" && o.selector) && (h.splice(s, 1), o.selector && h.delegateCount--, c.remove && c.remove.call(e, o));
                a && !h.length && ((!c.teardown || c.teardown.call(e, d, m.handle) === !1) && w.removeEvent(e, p, m.handle), delete l[p])
            }
            w.isEmptyObject(l) && (delete m.handle, w._removeData(e, "events"))
        },
        trigger: function (n, r, i, s) {
            var u, a, f, l, c, h, p, d = [i || o], v = y.call(n, "type") ? n.type : n,
                m = y.call(n, "namespace") ? n.namespace.split(".") : [];
            f = h = i = i || o;
            if (i.nodeType === 3 || i.nodeType === 8) return;
            if (nt.test(v + w.event.triggered)) return;
            v.indexOf(".") >= 0 && (m = v.split("."), v = m.shift(), m.sort()), a = v.indexOf(":") < 0 && "on" + v, n = n[w.expando] ? n : new w.Event(v, typeof n == "object" && n), n.isTrigger = s ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = r == null ? [n] : w.makeArray(r, [n]), c = w.event.special[v] || {};
            if (!s && c.trigger && c.trigger.apply(i, r) === !1) return;
            if (!s && !c.noBubble && !w.isWindow(i)) {
                l = c.delegateType || v, nt.test(l + v) || (f = f.parentNode);
                for (; f; f = f.parentNode) d.push(f), h = f;
                h === (i.ownerDocument || o) && d.push(h.defaultView || h.parentWindow || e)
            }
            p = 0;
            while ((f = d[p++]) && !n.isPropagationStopped()) n.type = p > 1 ? l : c.bindType || v, u = (w._data(f, "events") || {})[n.type] && w._data(f, "handle"), u && u.apply(f, r), u = a && f[a], u && w.acceptData(f) && u.apply && u.apply(f, r) === !1 && n.preventDefault();
            n.type = v;
            if (!s && !n.isDefaultPrevented() && (!c._default || c._default.apply(d.pop(), r) === !1) && w.acceptData(i) && a && i[v] && !w.isWindow(i)) {
                h = i[a], h && (i[a] = null), w.event.triggered = v;
                try {
                    i[v]()
                } catch (g) {
                }
                w.event.triggered = t, h && (i[a] = h)
            }
            return n.result
        },
        dispatch: function (e) {
            e = w.event.fix(e);
            var n, r, i, s, o, u = [], a = v.call(arguments), f = (w._data(this, "events") || {})[e.type] || [],
                l = w.event.special[e.type] || {};
            a[0] = e, e.delegateTarget = this;
            if (l.preDispatch && l.preDispatch.call(this, e) === !1) return;
            u = w.event.handlers.call(this, e, f), n = 0;
            while ((s = u[n++]) && !e.isPropagationStopped()) {
                e.currentTarget = s.elem, o = 0;
                while ((i = s.handlers[o++]) && !e.isImmediatePropagationStopped()) if (!e.namespace_re || e.namespace_re.test(i.namespace)) e.handleObj = i, e.data = i.data, r = ((w.event.special[i.origType] || {}).handle || i.handler).apply(s.elem, a), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation())
            }
            return l.postDispatch && l.postDispatch.call(this, e), e.result
        },
        handlers: function (e, n) {
            var r, i, s, o, u = [], a = n.delegateCount, f = e.target;
            if (a && f.nodeType && (!e.button || e.type !== "click")) for (; f != this; f = f.parentNode || this) if (f.nodeType === 1 && (f.disabled !== !0 || e.type !== "click")) {
                s = [];
                for (o = 0; o < a; o++) i = n[o], r = i.selector + " ", s[r] === t && (s[r] = i.needsContext ? w(r, this).index(f) >= 0 : w.find(r, this, null, [f]).length), s[r] && s.push(i);
                s.length && u.push({elem: f, handlers: s})
            }
            return a < n.length && u.push({elem: this, handlers: n.slice(a)}), u
        },
        fix: function (e) {
            if (e[w.expando]) return e;
            var t, n, r, i = e.type, s = e, u = this.fixHooks[i];
            u || (this.fixHooks[i] = u = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = u.props ? this.props.concat(u.props) : this.props, e = new w.Event(s), t = r.length;
            while (t--) n = r[t], e[n] = s[n];
            return e.target || (e.target = s.srcElement || o), e.target.nodeType === 3 && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, u.filter ? u.filter(e, s) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, n) {
                var r, i, s, u = n.button, a = n.fromElement;
                return e.pageX == null && n.clientX != null && (i = e.target.ownerDocument || o, s = i.documentElement, r = i.body, e.pageX = n.clientX + (s && s.scrollLeft || r && r.scrollLeft || 0) - (s && s.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (s && s.scrollTop || r && r.scrollTop || 0) - (s && s.clientTop || r && r.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a), !e.which && u !== t && (e.which = u & 1 ? 1 : u & 2 ? 3 : u & 4 ? 2 : 0), e
            }
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== ot() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {
                    }
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === ot() && this.blur) return this.blur(), !1
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if (w.nodeName(this, "input") && this.type === "checkbox" && this.click) return this.click(), !1
                }, _default: function (e) {
                    return w.nodeName(e.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n, r) {
            var i = w.extend(new w.Event, n, {type: e, isSimulated: !0, originalEvent: {}});
            r ? w.event.trigger(i, null, t) : w.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, w.removeEvent = o.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function (e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n))
    }, w.Event = function (e, t) {
        if (!(this instanceof w.Event)) return new w.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : st) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || w.now(), this[w.expando] = !0
    }, w.Event.prototype = {
        isDefaultPrevented: st,
        isPropagationStopped: st,
        isImmediatePropagationStopped: st,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = it;
            if (!e) return;
            e.preventDefault ? e.preventDefault() : e.returnValue = !1
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = it;
            if (!e) return;
            e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = it, this.stopPropagation()
        }
    }, w.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (e, t) {
        w.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var n, r = this, i = e.relatedTarget, s = e.handleObj;
                if (!i || i !== r && !w.contains(r, i)) e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t;
                return n
            }
        }
    }), w.support.submitBubbles || (w.event.special.submit = {
        setup: function () {
            if (w.nodeName(this, "form")) return !1;
            w.event.add(this, "click._submit keypress._submit", function (e) {
                var n = e.target, r = w.nodeName(n, "input") || w.nodeName(n, "button") ? n.form : t;
                r && !w._data(r, "submitBubbles") && (w.event.add(r, "submit._submit", function (e) {
                    e._submit_bubble = !0
                }), w._data(r, "submitBubbles", !0))
            })
        }, postDispatch: function (e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && w.event.simulate("submit", this.parentNode, e, !0))
        }, teardown: function () {
            if (w.nodeName(this, "form")) return !1;
            w.event.remove(this, "._submit")
        }
    }), w.support.changeBubbles || (w.event.special.change = {
        setup: function () {
            if (Z.test(this.nodeName)) {
                if (this.type === "checkbox" || this.type === "radio") w.event.add(this, "propertychange._change", function (e) {
                    e.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                }), w.event.add(this, "click._change", function (e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1), w.event.simulate("change", this, e, !0)
                });
                return !1
            }
            w.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                Z.test(t.nodeName) && !w._data(t, "changeBubbles") && (w.event.add(t, "change._change", function (e) {
                    this.parentNode && !e.isSimulated && !e.isTrigger && w.event.simulate("change", this.parentNode, e, !0)
                }), w._data(t, "changeBubbles", !0))
            })
        }, handle: function (e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox") return e.handleObj.handler.apply(this, arguments)
        }, teardown: function () {
            return w.event.remove(this, "._change"), !Z.test(this.nodeName)
        }
    }), w.support.focusinBubbles || w.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var n = 0, r = function (e) {
            w.event.simulate(t, e.target, w.event.fix(e), !0)
        };
        w.event.special[t] = {
            setup: function () {
                n++ === 0 && o.addEventListener(e, r, !0)
            }, teardown: function () {
                --n === 0 && o.removeEventListener(e, r, !0)
            }
        }
    }), w.fn.extend({
        on: function (e, n, r, i, s) {
            var o, u;
            if (typeof e == "object") {
                typeof n != "string" && (r = r || n, n = t);
                for (o in e) this.on(o, n, r, e[o], s);
                return this
            }
            r == null && i == null ? (i = n, r = n = t) : i == null && (typeof n == "string" ? (i = r, r = t) : (i = r, r = n, n = t));
            if (i === !1) i = st; else if (!i) return this;
            return s === 1 && (u = i, i = function (e) {
                return w().off(e), u.apply(this, arguments)
            }, i.guid = u.guid || (u.guid = w.guid++)), this.each(function () {
                w.event.add(this, e, i, r, n)
            })
        }, one: function (e, t, n, r) {
            return this.on(e, t, n, r, 1)
        }, off: function (e, n, r) {
            var i, s;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, w(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if (typeof e == "object") {
                for (s in e) this.off(s, n, e[s]);
                return this
            }
            if (n === !1 || typeof n == "function") r = n, n = t;
            return r === !1 && (r = st), this.each(function () {
                w.event.remove(this, e, r, n)
            })
        }, trigger: function (e, t) {
            return this.each(function () {
                w.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return w.event.trigger(e, t, n, !0)
        }
    });
    var ut = /^.[^:#\[\.,]*$/, at = /^(?:parents|prev(?:Until|All))/, ft = w.expr.match.needsContext,
        lt = {children: !0, contents: !0, next: !0, prev: !0};
    w.fn.extend({
        find: function (e) {
            var t, n = [], r = this, i = r.length;
            if (typeof e != "string") return this.pushStack(w(e).filter(function () {
                for (t = 0; t < i; t++) if (w.contains(r[t], this)) return !0
            }));
            for (t = 0; t < i; t++) w.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? w.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        }, has: function (e) {
            var t, n = w(e, this), r = n.length;
            return this.filter(function () {
                for (t = 0; t < r; t++) if (w.contains(this, n[t])) return !0
            })
        }, not: function (e) {
            return this.pushStack(ht(this, e || [], !0))
        }, filter: function (e) {
            return this.pushStack(ht(this, e || [], !1))
        }, is: function (e) {
            return !!ht(this, typeof e == "string" && ft.test(e) ? w(e) : e || [], !1).length
        }, closest: function (e, t) {
            var n, r = 0, i = this.length, s = [], o = ft.test(e) || typeof e != "string" ? w(e, t || this.context) : 0;
            for (; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (o ? o.index(n) > -1 : n.nodeType === 1 && w.find.matchesSelector(n, e))) {
                n = s.push(n);
                break
            }
            return this.pushStack(s.length > 1 ? w.unique(s) : s)
        }, index: function (e) {
            return e ? typeof e == "string" ? w.inArray(this[0], w(e)) : w.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            var n = typeof e == "string" ? w(e, t) : w.makeArray(e && e.nodeType ? [e] : e), r = w.merge(this.get(), n);
            return this.pushStack(w.unique(r))
        }, addBack: function (e) {
            return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
        }
    }), w.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && t.nodeType !== 11 ? t : null
        }, parents: function (e) {
            return w.dir(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return w.dir(e, "parentNode", n)
        }, next: function (e) {
            return ct(e, "nextSibling")
        }, prev: function (e) {
            return ct(e, "previousSibling")
        }, nextAll: function (e) {
            return w.dir(e, "nextSibling")
        }, prevAll: function (e) {
            return w.dir(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return w.dir(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return w.dir(e, "previousSibling", n)
        }, siblings: function (e) {
            return w.sibling((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return w.sibling(e.firstChild)
        }, contents: function (e) {
            return w.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : w.merge([], e.childNodes)
        }
    }, function (e, t) {
        w.fn[e] = function (n, r) {
            var i = w.map(this, t, n);
            return e.slice(-5) !== "Until" && (r = n), r && typeof r == "string" && (i = w.filter(r, i)), this.length > 1 && (lt[e] || (i = w.unique(i)), at.test(e) && (i = i.reverse())), this.pushStack(i)
        }
    }), w.extend({
        filter: function (e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), t.length === 1 && r.nodeType === 1 ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function (e) {
                return e.nodeType === 1
            }))
        }, dir: function (e, n, r) {
            var i = [], s = e[n];
            while (s && s.nodeType !== 9 && (r === t || s.nodeType !== 1 || !w(s).is(r))) s.nodeType === 1 && i.push(s), s = s[n];
            return i
        }, sibling: function (e, t) {
            var n = [];
            for (; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);
            return n
        }
    });
    var dt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        vt = / jQuery\d+="(?:null|\d+)"/g, mt = new RegExp("<(?:" + dt + ")[\\s/>]", "i"), gt = /^\s+/,
        yt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, bt = /<([\w:]+)/,
        wt = /<tbody/i, Et = /<|&#?\w+;/, St = /<(?:script|style|link)/i, xt = /^(?:checkbox|radio)$/i,
        Tt = /checked\s*(?:[^=]|=\s*.checked.)/i, Nt = /^$|\/(?:java|ecma)script/i, Ct = /^true\/(.*)/,
        kt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Lt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: w.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        }, At = pt(o), Ot = At.appendChild(o.createElement("div"));
    Lt.optgroup = Lt.option, Lt.tbody = Lt.tfoot = Lt.colgroup = Lt.caption = Lt.thead, Lt.th = Lt.td, w.fn.extend({
        text: function (e) {
            return w.access(this, function (e) {
                return e === t ? w.text(this) : this.empty().append((this[0] && this[0].ownerDocument || o).createTextNode(e))
            }, null, e, arguments.length)
        }, append: function () {
            return this.domManip(arguments, function (e) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = Mt(this, e);
                    t.appendChild(e)
                }
            })
        }, prepend: function () {
            return this.domManip(arguments, function (e) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = Mt(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, remove: function (e, t) {
            var n, r = e ? w.filter(e, this) : this, i = 0;
            for (; (n = r[i]) != null; i++) !t && n.nodeType === 1 && w.cleanData(jt(n)), n.parentNode && (t && w.contains(n.ownerDocument, n) && Pt(jt(n, "script")), n.parentNode.removeChild(n));
            return this
        }, empty: function () {
            var e, t = 0;
            for (; (e = this[t]) != null; t++) {
                e.nodeType === 1 && w.cleanData(jt(e, !1));
                while (e.firstChild) e.removeChild(e.firstChild);
                e.options && w.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        }, clone: function (e, t) {
            return e = e == null ? !1 : e, t = t == null ? e : t, this.map(function () {
                return w.clone(this, e, t)
            })
        }, html: function (e) {
            return w.access(this, function (e) {
                var n = this[0] || {}, r = 0, i = this.length;
                if (e === t) return n.nodeType === 1 ? n.innerHTML.replace(vt, "") : t;
                if (typeof e == "string" && !St.test(e) && (w.support.htmlSerialize || !mt.test(e)) && (w.support.leadingWhitespace || !gt.test(e)) && !Lt[(bt.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(yt, "<$1></$2>");
                    try {
                        for (; r < i; r++) n = this[r] || {}, n.nodeType === 1 && (w.cleanData(jt(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch (s) {
                    }
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var e = w.map(this, function (e) {
                return [e.nextSibling, e.parentNode]
            }), t = 0;
            return this.domManip(arguments, function (n) {
                var r = e[t++], i = e[t++];
                i && (r && r.parentNode !== i && (r = this.nextSibling), w(this).remove(), i.insertBefore(n, r))
            }, !0), t ? this : this.remove()
        }, detach: function (e) {
            return this.remove(e, !0)
        }, domManip: function (e, t, n) {
            e = p.apply([], e);
            var r, i, s, o, u, a, f = 0, l = this.length, c = this, h = l - 1, d = e[0], v = w.isFunction(d);
            if (v || !(l <= 1 || typeof d != "string" || w.support.checkClone || !Tt.test(d))) return this.each(function (r) {
                var i = c.eq(r);
                v && (e[0] = d.call(this, r, i.html())), i.domManip(e, t, n)
            });
            if (l) {
                a = w.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = a.firstChild, a.childNodes.length === 1 && (a = r);
                if (r) {
                    o = w.map(jt(a, "script"), _t), s = o.length;
                    for (; f < l; f++) i = a, f !== h && (i = w.clone(i, !0, !0), s && w.merge(o, jt(i, "script"))), t.call(this[f], i, f);
                    if (s) {
                        u = o[o.length - 1].ownerDocument, w.map(o, Dt);
                        for (f = 0; f < s; f++) i = o[f], Nt.test(i.type || "") && !w._data(i, "globalEval") && w.contains(u, i) && (i.src ? w._evalUrl(i.src) : w.globalEval((i.text || i.textContent || i.innerHTML || "").replace(kt, "")))
                    }
                    a = r = null
                }
            }
            return this
        }
    }), w.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        w.fn[e] = function (e) {
            var n, r = 0, i = [], s = w(e), o = s.length - 1;
            for (; r <= o; r++) n = r === o ? this : this.clone(!0), w(s[r])[t](n), d.apply(i, n.get());
            return this.pushStack(i)
        }
    }), w.extend({
        clone: function (e, t, n) {
            var r, i, s, o, u, a = w.contains(e.ownerDocument, e);
            w.support.html5Clone || w.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (Ot.innerHTML = e.outerHTML, Ot.removeChild(s = Ot.firstChild));
            if ((!w.support.noCloneEvent || !w.support.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !w.isXMLDoc(e)) {
                r = jt(s), u = jt(e);
                for (o = 0; (i = u[o]) != null; ++o) r[o] && Bt(i, r[o])
            }
            if (t) if (n) {
                u = u || jt(e), r = r || jt(s);
                for (o = 0; (i = u[o]) != null; o++) Ht(i, r[o])
            } else Ht(e, s);
            return r = jt(s, "script"), r.length > 0 && Pt(r, !a && jt(e, "script")), r = u = i = null, s
        }, buildFragment: function (e, t, n, r) {
            var i, s, o, u, a, f, l, c = e.length, h = pt(t), p = [], d = 0;
            for (; d < c; d++) {
                s = e[d];
                if (s || s === 0) if (w.type(s) === "object") w.merge(p, s.nodeType ? [s] : s); else if (!Et.test(s)) p.push(t.createTextNode(s)); else {
                    u = u || h.appendChild(t.createElement("div")), a = (bt.exec(s) || ["", ""])[1].toLowerCase(), l = Lt[a] || Lt._default, u.innerHTML = l[1] + s.replace(yt, "<$1></$2>") + l[2], i = l[0];
                    while (i--) u = u.lastChild;
                    !w.support.leadingWhitespace && gt.test(s) && p.push(t.createTextNode(gt.exec(s)[0]));
                    if (!w.support.tbody) {
                        s = a === "table" && !wt.test(s) ? u.firstChild : l[1] === "<table>" && !wt.test(s) ? u : 0, i = s && s.childNodes.length;
                        while (i--) w.nodeName(f = s.childNodes[i], "tbody") && !f.childNodes.length && s.removeChild(f)
                    }
                    w.merge(p, u.childNodes), u.textContent = "";
                    while (u.firstChild) u.removeChild(u.firstChild);
                    u = h.lastChild
                }
            }
            u && h.removeChild(u), w.support.appendChecked || w.grep(jt(p, "input"), Ft), d = 0;
            while (s = p[d++]) {
                if (r && w.inArray(s, r) !== -1) continue;
                o = w.contains(s.ownerDocument, s), u = jt(h.appendChild(s), "script"), o && Pt(u);
                if (n) {
                    i = 0;
                    while (s = u[i++]) Nt.test(s.type || "") && n.push(s)
                }
            }
            return u = null, h
        }, cleanData: function (e, t) {
            var n, r, s, o, u = 0, a = w.expando, f = w.cache, l = w.support.deleteExpando, h = w.event.special;
            for (; (n = e[u]) != null; u++) if (t || w.acceptData(n)) {
                s = n[a], o = s && f[s];
                if (o) {
                    if (o.events) for (r in o.events) h[r] ? w.event.remove(n, r) : w.removeEvent(n, r, o.handle);
                    f[s] && (delete f[s], l ? delete n[a] : typeof n.removeAttribute !== i ? n.removeAttribute(a) : n[a] = null, c.push(s))
                }
            }
        }, _evalUrl: function (e) {
            return w.ajax({url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
        }
    }), w.fn.extend({
        wrapAll: function (e) {
            if (w.isFunction(e)) return this.each(function (t) {
                w(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = w(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    var e = this;
                    while (e.firstChild && e.firstChild.nodeType === 1) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        }, wrapInner: function (e) {
            return w.isFunction(e) ? this.each(function (t) {
                w(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = w(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        }, wrap: function (e) {
            var t = w.isFunction(e);
            return this.each(function (n) {
                w(this).wrapAll(t ? e.call(this, n) : e)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                w.nodeName(this, "body") || w(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var It, qt, Rt, Ut = /alpha\([^)]*\)/i, zt = /opacity\s*=\s*([^)]*)/, Wt = /^(top|right|bottom|left)$/,
        Xt = /^(none|table(?!-c[ea]).+)/, Vt = /^margin/, $t = new RegExp("^(" + E + ")(.*)$", "i"),
        Jt = new RegExp("^(" + E + ")(?!px)[a-z%]+$", "i"), Kt = new RegExp("^([+-])=(" + E + ")", "i"),
        Qt = {BODY: "block"}, Gt = {position: "absolute", visibility: "hidden", display: "block"},
        Yt = {letterSpacing: 0, fontWeight: 400}, Zt = ["Top", "Right", "Bottom", "Left"],
        en = ["Webkit", "O", "Moz", "ms"];
    w.fn.extend({
        css: function (e, n) {
            return w.access(this, function (e, n, r) {
                var i, s, o = {}, u = 0;
                if (w.isArray(n)) {
                    s = qt(e), i = n.length;
                    for (; u < i; u++) o[n[u]] = w.css(e, n[u], !1, s);
                    return o
                }
                return r !== t ? w.style(e, n, r) : w.css(e, n)
            }, e, n, arguments.length > 1)
        }, show: function () {
            return rn(this, !0)
        }, hide: function () {
            return rn(this)
        }, toggle: function (e) {
            return typeof e == "boolean" ? e ? this.show() : this.hide() : this.each(function () {
                nn(this) ? w(this).show() : w(this).hide()
            })
        }
    }), w.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Rt(e, "opacity");
                        return n === "" ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": w.support.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (e, n, r, i) {
            if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) return;
            var s, o, u, a = w.camelCase(n), f = e.style;
            n = w.cssProps[a] || (w.cssProps[a] = tn(f, a)), u = w.cssHooks[n] || w.cssHooks[a];
            if (r === t) return u && "get" in u && (s = u.get(e, !1, i)) !== t ? s : f[n];
            o = typeof r, o === "string" && (s = Kt.exec(r)) && (r = (s[1] + 1) * s[2] + parseFloat(w.css(e, n)), o = "number");
            if (r == null || o === "number" && isNaN(r)) return;
            o === "number" && !w.cssNumber[a] && (r += "px"), !w.support.clearCloneStyle && r === "" && n.indexOf("background") === 0 && (f[n] = "inherit");
            if (!u || !("set" in u) || (r = u.set(e, r, i)) !== t) try {
                f[n] = r
            } catch (l) {
            }
        },
        css: function (e, n, r, i) {
            var s, o, u, a = w.camelCase(n);
            return n = w.cssProps[a] || (w.cssProps[a] = tn(e.style, a)), u = w.cssHooks[n] || w.cssHooks[a], u && "get" in u && (o = u.get(e, !0, r)), o === t && (o = Rt(e, n, i)), o === "normal" && n in Yt && (o = Yt[n]), r === "" || r ? (s = parseFloat(o), r === !0 || w.isNumeric(s) ? s || 0 : o) : o
        }
    }), e.getComputedStyle ? (qt = function (t) {
        return e.getComputedStyle(t, null)
    }, Rt = function (e, n, r) {
        var i, s, o, u = r || qt(e), a = u ? u.getPropertyValue(n) || u[n] : t, f = e.style;
        return u && (a === "" && !w.contains(e.ownerDocument, e) && (a = w.style(e, n)), Jt.test(a) && Vt.test(n) && (i = f.width, s = f.minWidth, o = f.maxWidth, f.minWidth = f.maxWidth = f.width = a, a = u.width, f.width = i, f.minWidth = s, f.maxWidth = o)), a
    }) : o.documentElement.currentStyle && (qt = function (e) {
        return e.currentStyle
    }, Rt = function (e, n, r) {
        var i, s, o, u = r || qt(e), a = u ? u[n] : t, f = e.style;
        return a == null && f && f[n] && (a = f[n]), Jt.test(a) && !Wt.test(n) && (i = f.left, s = e.runtimeStyle, o = s && s.left, o && (s.left = e.currentStyle.left), f.left = n === "fontSize" ? "1em" : a, a = f.pixelLeft + "px", f.left = i, o && (s.left = o)), a === "" ? "auto" : a
    }), w.each(["height", "width"], function (e, t) {
        w.cssHooks[t] = {
            get: function (e, n, r) {
                if (n) return e.offsetWidth === 0 && Xt.test(w.css(e, "display")) ? w.swap(e, Gt, function () {
                    return un(e, t, r)
                }) : un(e, t, r)
            }, set: function (e, n, r) {
                var i = r && qt(e);
                return sn(e, n, r ? on(e, t, r, w.support.boxSizing && w.css(e, "boxSizing", !1, i) === "border-box", i) : 0)
            }
        }
    }), w.support.opacity || (w.cssHooks.opacity = {
        get: function (e, t) {
            return zt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        }, set: function (e, t) {
            var n = e.style, r = e.currentStyle, i = w.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "",
                s = r && r.filter || n.filter || "";
            n.zoom = 1;
            if ((t >= 1 || t === "") && w.trim(s.replace(Ut, "")) === "" && n.removeAttribute) {
                n.removeAttribute("filter");
                if (t === "" || r && !r.filter) return
            }
            n.filter = Ut.test(s) ? s.replace(Ut, i) : s + " " + i
        }
    }), w(function () {
        w.support.reliableMarginRight || (w.cssHooks.marginRight = {
            get: function (e, t) {
                if (t) return w.swap(e, {display: "inline-block"}, Rt, [e, "marginRight"])
            }
        }), !w.support.pixelPosition && w.fn.position && w.each(["top", "left"], function (e, t) {
            w.cssHooks[t] = {
                get: function (e, n) {
                    if (n) return n = Rt(e, t), Jt.test(n) ? w(e).position()[t] + "px" : n
                }
            }
        })
    }), w.expr && w.expr.filters && (w.expr.filters.hidden = function (e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !w.support.reliableHiddenOffsets && (e.style && e.style.display || w.css(e, "display")) === "none"
    }, w.expr.filters.visible = function (e) {
        return !w.expr.filters.hidden(e)
    }), w.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        w.cssHooks[e + t] = {
            expand: function (n) {
                var r = 0, i = {}, s = typeof n == "string" ? n.split(" ") : [n];
                for (; r < 4; r++) i[e + Zt[r] + t] = s[r] || s[r - 2] || s[0];
                return i
            }
        }, Vt.test(e) || (w.cssHooks[e + t].set = sn)
    });
    var ln = /%20/g, cn = /\[\]$/, hn = /\r?\n/g, pn = /^(?:submit|button|image|reset|file)$/i,
        dn = /^(?:input|select|textarea|keygen)/i;
    w.fn.extend({
        serialize: function () {
            return w.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = w.prop(this, "elements");
                return e ? w.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !w(this).is(":disabled") && dn.test(this.nodeName) && !pn.test(e) && (this.checked || !xt.test(e))
            }).map(function (e, t) {
                var n = w(this).val();
                return n == null ? null : w.isArray(n) ? w.map(n, function (e) {
                    return {name: t.name, value: e.replace(hn, "\r\n")}
                }) : {name: t.name, value: n.replace(hn, "\r\n")}
            }).get()
        }
    }), w.param = function (e, n) {
        var r, i = [], s = function (e, t) {
            t = w.isFunction(t) ? t() : t == null ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        n === t && (n = w.ajaxSettings && w.ajaxSettings.traditional);
        if (w.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function () {
            s(this.name, this.value)
        }); else for (r in e) vn(r, e[r], n, s);
        return i.join("&").replace(ln, "+")
    }, w.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        w.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), w.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }, bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        }, undelegate: function (e, t, n) {
            return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var mn, gn, yn = w.now(), bn = /\?/, wn = /#.*$/, En = /([?&])_=[^&]*/, Sn = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        xn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Tn = /^(?:GET|HEAD)$/, Nn = /^\/\//,
        Cn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, kn = w.fn.load, Ln = {}, An = {}, On = "*/".concat("*");
    try {
        gn = s.href
    } catch (Mn) {
        gn = o.createElement("a"), gn.href = "", gn = gn.href
    }
    mn = Cn.exec(gn.toLowerCase()) || [], w.fn.load = function (e, n, r) {
        if (typeof e != "string" && kn) return kn.apply(this, arguments);
        var i, s, o, u = this, a = e.indexOf(" ");
        return a >= 0 && (i = e.slice(a, e.length), e = e.slice(0, a)), w.isFunction(n) ? (r = n, n = t) : n && typeof n == "object" && (o = "POST"), u.length > 0 && w.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: n
        }).done(function (e) {
            s = arguments, u.html(i ? w("<div>").append(w.parseHTML(e)).find(i) : e)
        }).complete(r && function (e, t) {
            u.each(r, s || [e.responseText, t, e])
        }), this
    }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        w.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: gn,
            type: "GET",
            isLocal: xn.test(mn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": On,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": w.parseJSON, "text xml": w.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? Pn(Pn(e, w.ajaxSettings), t) : Pn(w.ajaxSettings, e)
        },
        ajaxPrefilter: _n(Ln),
        ajaxTransport: _n(An),
        ajax: function (e, n) {
            function N(e, n, r, i) {
                var l, g, y, E, S, T = n;
                if (b === 2) return;
                b = 2, u && clearTimeout(u), f = t, o = i || "", x.readyState = e > 0 ? 4 : 0, l = e >= 200 && e < 300 || e === 304, r && (E = Hn(c, x, r)), E = Bn(c, E, x, l);
                if (l) c.ifModified && (S = x.getResponseHeader("Last-Modified"), S && (w.lastModified[s] = S), S = x.getResponseHeader("etag"), S && (w.etag[s] = S)), e === 204 || c.type === "HEAD" ? T = "nocontent" : e === 304 ? T = "notmodified" : (T = E.state, g = E.data, y = E.error, l = !y); else {
                    y = T;
                    if (e || !T) T = "error", e < 0 && (e = 0)
                }
                x.status = e, x.statusText = (n || T) + "", l ? d.resolveWith(h, [g, T, x]) : d.rejectWith(h, [x, T, y]), x.statusCode(m), m = t, a && p.trigger(l ? "ajaxSuccess" : "ajaxError", [x, c, l ? g : y]), v.fireWith(h, [x, T]), a && (p.trigger("ajaxComplete", [x, c]), --w.active || w.event.trigger("ajaxStop"))
            }

            typeof e == "object" && (n = e, e = t), n = n || {};
            var r, i, s, o, u, a, f, l, c = w.ajaxSetup({}, n), h = c.context || c,
                p = c.context && (h.nodeType || h.jquery) ? w(h) : w.event, d = w.Deferred(),
                v = w.Callbacks("once memory"), m = c.statusCode || {}, g = {}, y = {}, b = 0, E = "canceled", x = {
                    readyState: 0, getResponseHeader: function (e) {
                        var t;
                        if (b === 2) {
                            if (!l) {
                                l = {};
                                while (t = Sn.exec(o)) l[t[1].toLowerCase()] = t[2]
                            }
                            t = l[e.toLowerCase()]
                        }
                        return t == null ? null : t
                    }, getAllResponseHeaders: function () {
                        return b === 2 ? o : null
                    }, setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return b || (e = y[n] = y[n] || e, g[e] = t), this
                    }, overrideMimeType: function (e) {
                        return b || (c.mimeType = e), this
                    }, statusCode: function (e) {
                        var t;
                        if (e) if (b < 2) for (t in e) m[t] = [m[t], e[t]]; else x.always(e[x.status]);
                        return this
                    }, abort: function (e) {
                        var t = e || E;
                        return f && f.abort(t), N(0, t), this
                    }
                };
            d.promise(x).complete = v.add, x.success = x.done, x.error = x.fail, c.url = ((e || c.url || gn) + "").replace(wn, "").replace(Nn, mn[1] + "//"), c.type = n.method || n.type || c.method || c.type, c.dataTypes = w.trim(c.dataType || "*").toLowerCase().match(S) || [""], c.crossDomain == null && (r = Cn.exec(c.url.toLowerCase()), c.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || (r[1] === "http:" ? "80" : "443")) === (mn[3] || (mn[1] === "http:" ? "80" : "443")))), c.data && c.processData && typeof c.data != "string" && (c.data = w.param(c.data, c.traditional)), Dn(Ln, c, n, x);
            if (b === 2) return x;
            a = c.global, a && w.active++ === 0 && w.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !Tn.test(c.type), s = c.url, c.hasContent || (c.data && (s = c.url += (bn.test(s) ? "&" : "?") + c.data, delete c.data), c.cache === !1 && (c.url = En.test(s) ? s.replace(En, "$1_=" + yn++) : s + (bn.test(s) ? "&" : "?") + "_=" + yn++)), c.ifModified && (w.lastModified[s] && x.setRequestHeader("If-Modified-Since", w.lastModified[s]), w.etag[s] && x.setRequestHeader("If-None-Match", w.etag[s])), (c.data && c.hasContent && c.contentType !== !1 || n.contentType) && x.setRequestHeader("Content-Type", c.contentType), x.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + (c.dataTypes[0] !== "*" ? ", " + On + "; q=0.01" : "") : c.accepts["*"]);
            for (i in c.headers) x.setRequestHeader(i, c.headers[i]);
            if (!c.beforeSend || c.beforeSend.call(h, x, c) !== !1 && b !== 2) {
                E = "abort";
                for (i in{success: 1, error: 1, complete: 1}) x[i](c[i]);
                f = Dn(An, c, n, x);
                if (!f) N(-1, "No Transport"); else {
                    x.readyState = 1, a && p.trigger("ajaxSend", [x, c]), c.async && c.timeout > 0 && (u = setTimeout(function () {
                        x.abort("timeout")
                    }, c.timeout));
                    try {
                        b = 1, f.send(g, N)
                    } catch (T) {
                        if (!(b < 2)) throw T;
                        N(-1, T)
                    }
                }
                return x
            }
            return x.abort()
        },
        getJSON: function (e, t, n) {
            return w.get(e, t, n, "json")
        },
        getScript: function (e, n) {
            return w.get(e, t, n, "script")
        }
    }), w.each(["get", "post"], function (e, n) {
        w[n] = function (e, r, i, s) {
            return w.isFunction(r) && (s = s || i, i = r, r = t), w.ajax({
                url: e,
                type: n,
                dataType: s,
                data: r,
                success: i
            })
        }
    }), w.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (e) {
                return w.globalEval(e), e
            }
        }
    }), w.ajaxPrefilter("script", function (e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), w.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var n, r = o.head || w("head")[0] || o.documentElement;
            return {
                send: function (t, i) {
                    n = o.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) {
                        if (t || !n.readyState || /loaded|complete/.test(n.readyState)) n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success")
                    }, r.insertBefore(n, r.firstChild)
                }, abort: function () {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var jn = [], Fn = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = jn.pop() || w.expando + "_" + yn++;
            return this[e] = !0, e
        }
    }), w.ajaxPrefilter("json jsonp", function (n, r, i) {
        var s, o, u,
            a = n.jsonp !== !1 && (Fn.test(n.url) ? "url" : typeof n.data == "string" && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Fn.test(n.data) && "data");
        if (a || n.dataTypes[0] === "jsonp") return s = n.jsonpCallback = w.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, a ? n[a] = n[a].replace(Fn, "$1" + s) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + s), n.converters["script json"] = function () {
            return u || w.error(s + " was not called"), u[0]
        }, n.dataTypes[0] = "json", o = e[s], e[s] = function () {
            u = arguments
        }, i.always(function () {
            e[s] = o, n[s] && (n.jsonpCallback = r.jsonpCallback, jn.push(s)), u && w.isFunction(o) && o(u[0]), u = o = t
        }), "script"
    });
    var In, qn, Rn = 0, Un = e.ActiveXObject && function () {
        var e;
        for (e in In) In[e](t, !0)
    };
    w.ajaxSettings.xhr = e.ActiveXObject ? function () {
        return !this.isLocal && zn() || Wn()
    } : zn, qn = w.ajaxSettings.xhr(), w.support.cors = !!qn && "withCredentials" in qn, qn = w.support.ajax = !!qn, qn && w.ajaxTransport(function (n) {
        if (!n.crossDomain || w.support.cors) {
            var r;
            return {
                send: function (i, s) {
                    var o, u, a = n.xhr();
                    n.username ? a.open(n.type, n.url, n.async, n.username, n.password) : a.open(n.type, n.url, n.async);
                    if (n.xhrFields) for (u in n.xhrFields) a[u] = n.xhrFields[u];
                    n.mimeType && a.overrideMimeType && a.overrideMimeType(n.mimeType), !n.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (u in i) a.setRequestHeader(u, i[u])
                    } catch (f) {
                    }
                    a.send(n.hasContent && n.data || null), r = function (e, i) {
                        var u, f, l, c;
                        try {
                            if (r && (i || a.readyState === 4)) {
                                r = t, o && (a.onreadystatechange = w.noop, Un && delete In[o]);
                                if (i) a.readyState !== 4 && a.abort(); else {
                                    c = {}, u = a.status, f = a.getAllResponseHeaders(), typeof a.responseText == "string" && (c.text = a.responseText);
                                    try {
                                        l = a.statusText
                                    } catch (h) {
                                        l = ""
                                    }
                                    !u && n.isLocal && !n.crossDomain ? u = c.text ? 200 : 404 : u === 1223 && (u = 204)
                                }
                            }
                        } catch (p) {
                            i || s(-1, p)
                        }
                        c && s(u, l, c, f)
                    }, n.async ? a.readyState === 4 ? setTimeout(r) : (o = ++Rn, Un && (In || (In = {}, w(e).unload(Un)), In[o] = r), a.onreadystatechange = r) : r()
                }, abort: function () {
                    r && r(t, !0)
                }
            }
        }
    });
    var Xn, Vn, $n = /^(?:toggle|show|hide)$/, Jn = new RegExp("^(?:([+-])=|)(" + E + ")([a-z%]*)$", "i"),
        Kn = /queueHooks$/, Qn = [nr], Gn = {
            "*": [function (e, t) {
                var n = this.createTween(e, t), r = n.cur(), i = Jn.exec(t), s = i && i[3] || (w.cssNumber[e] ? "" : "px"),
                    o = (w.cssNumber[e] || s !== "px" && +r) && Jn.exec(w.css(n.elem, e)), u = 1, a = 20;
                if (o && o[3] !== s) {
                    s = s || o[3], i = i || [], o = +r || 1;
                    do u = u || ".5", o /= u, w.style(n.elem, e, o + s); while (u !== (u = n.cur() / r) && u !== 1 && --a)
                }
                return i && (o = n.start = +o || +r || 0, n.unit = s, n.end = i[1] ? o + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };
    w.Animation = w.extend(er, {
        tweener: function (e, t) {
            w.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            var n, r = 0, i = e.length;
            for (; r < i; r++) n = e[r], Gn[n] = Gn[n] || [], Gn[n].unshift(t)
        }, prefilter: function (e, t) {
            t ? Qn.unshift(e) : Qn.push(e)
        }
    }), w.Tween = rr, rr.prototype = {
        constructor: rr, init: function (e, t, n, r, i, s) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = s || (w.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = rr.propHooks[this.prop];
            return e && e.get ? e.get(this) : rr.propHooks._default.get(this)
        }, run: function (e) {
            var t, n = rr.propHooks[this.prop];
            return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this
        }
    }, rr.prototype.init.prototype = rr.prototype, rr.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return e.elem[e.prop] == null || !!e.elem.style && e.elem.style[e.prop] != null ? (t = w.css(e.elem, e.prop, ""), !t || t === "auto" ? 0 : t) : e.elem[e.prop]
            }, set: function (e) {
                w.fx.step[e.prop] ? w.fx.step[e.prop](e) : e.elem.style && (e.elem.style[w.cssProps[e.prop]] != null || w.cssHooks[e.prop]) ? w.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, w.each(["toggle", "show", "hide"], function (e, t) {
        var n = w.fn[t];
        w.fn[t] = function (e, r, i) {
            return e == null || typeof e == "boolean" ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
        }
    }), w.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(nn).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
        }, animate: function (e, t, n, r) {
            var i = w.isEmptyObject(e), s = w.speed(t, n, r), o = function () {
                var t = er(this, w.extend({}, e), s);
                (i || w._data(this, "finish")) && t.stop(!0)
            };
            return o.finish = o, i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
        }, stop: function (e, n, r) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return typeof e != "string" && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0, n = e != null && e + "queueHooks", s = w.timers, o = w._data(this);
                if (n) o[n] && o[n].stop && i(o[n]); else for (n in o) o[n] && o[n].stop && Kn.test(n) && i(o[n]);
                for (n = s.length; n--;) s[n].elem === this && (e == null || s[n].queue === e) && (s[n].anim.stop(r), t = !1, s.splice(n, 1));
                (t || !r) && w.dequeue(this, e)
            })
        }, finish: function (e) {
            return e !== !1 && (e = e || "fx"), this.each(function () {
                var t, n = w._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], s = w.timers,
                    o = r ? r.length : 0;
                n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0);
                for (t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                for (t = 0; t < o; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), w.each({
        slideDown: ir("show"),
        slideUp: ir("hide"),
        slideToggle: ir("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
        w.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), w.speed = function (e, t, n) {
        var r = e && typeof e == "object" ? w.extend({}, e) : {
            complete: n || !n && t || w.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !w.isFunction(t) && t
        };
        r.duration = w.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in w.fx.speeds ? w.fx.speeds[r.duration] : w.fx.speeds._default;
        if (r.queue == null || r.queue === !0) r.queue = "fx";
        return r.old = r.complete, r.complete = function () {
            w.isFunction(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue)
        }, r
    }, w.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, w.timers = [], w.fx = rr.prototype.init, w.fx.tick = function () {
        var e, n = w.timers, r = 0;
        Xn = w.now();
        for (; r < n.length; r++) e = n[r], !e() && n[r] === e && n.splice(r--, 1);
        n.length || w.fx.stop(), Xn = t
    }, w.fx.timer = function (e) {
        e() && w.timers.push(e) && w.fx.start()
    }, w.fx.interval = 13, w.fx.start = function () {
        Vn || (Vn = setInterval(w.fx.tick, w.fx.interval))
    }, w.fx.stop = function () {
        clearInterval(Vn), Vn = null
    }, w.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, w.fx.step = {}, w.expr && w.expr.filters && (w.expr.filters.animated = function (e) {
        return w.grep(w.timers, function (t) {
            return e === t.elem
        }).length
    }), w.fn.offset = function (e) {
        if (arguments.length) return e === t ? this : this.each(function (t) {
            w.offset.setOffset(this, e, t)
        });
        var n, r, s = {top: 0, left: 0}, o = this[0], u = o && o.ownerDocument;
        if (!u) return;
        return n = u.documentElement, w.contains(n, o) ? (typeof o.getBoundingClientRect !== i && (s = o.getBoundingClientRect()), r = sr(u), {
            top: s.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: s.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : s
    }, w.offset = {
        setOffset: function (e, t, n) {
            var r = w.css(e, "position");
            r === "static" && (e.style.position = "relative");
            var i = w(e), s = i.offset(), o = w.css(e, "top"), u = w.css(e, "left"),
                a = (r === "absolute" || r === "fixed") && w.inArray("auto", [o, u]) > -1, f = {}, l = {}, c, h;
            a ? (l = i.position(), c = l.top, h = l.left) : (c = parseFloat(o) || 0, h = parseFloat(u) || 0), w.isFunction(t) && (t = t.call(e, n, s)), t.top != null && (f.top = t.top - s.top + c), t.left != null && (f.left = t.left - s.left + h), "using" in t ? t.using.call(e, f) : i.css(f)
        }
    }, w.fn.extend({
        position: function () {
            if (!this[0]) return;
            var e, t, n = {top: 0, left: 0}, r = this[0];
            return w.css(r, "position") === "fixed" ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), w.nodeName(e[0], "html") || (n = e.offset()), n.top += w.css(e[0], "borderTopWidth", !0), n.left += w.css(e[0], "borderLeftWidth", !0)), {
                top: t.top - n.top - w.css(r, "marginTop", !0),
                left: t.left - n.left - w.css(r, "marginLeft", !0)
            }
        }, offsetParent: function () {
            return this.map(function () {
                var e = this.offsetParent || u;
                while (e && !w.nodeName(e, "html") && w.css(e, "position") === "static") e = e.offsetParent;
                return e || u
            })
        }
    }), w.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, n) {
        var r = /Y/.test(n);
        w.fn[e] = function (i) {
            return w.access(this, function (e, i, s) {
                var o = sr(e);
                if (s === t) return o ? n in o ? o[n] : o.document.documentElement[i] : e[i];
                o ? o.scrollTo(r ? w(o).scrollLeft() : s, r ? s : w(o).scrollTop()) : e[i] = s
            }, e, i, arguments.length, null)
        }
    }), w.each({Height: "height", Width: "width"}, function (e, n) {
        w.each({padding: "inner" + e, content: n, "": "outer" + e}, function (r, i) {
            w.fn[i] = function (i, s) {
                var o = arguments.length && (r || typeof i != "boolean"),
                    u = r || (i === !0 || s === !0 ? "margin" : "border");
                return w.access(this, function (n, r, i) {
                    var s;
                    return w.isWindow(n) ? n.document.documentElement["client" + e] : n.nodeType === 9 ? (s = n.documentElement, Math.max(n.body["scroll" + e], s["scroll" + e], n.body["offset" + e], s["offset" + e], s["client" + e])) : i === t ? w.css(n, r, u) : w.style(n, r, i, u)
                }, n, o ? i : t, o, null)
            }
        })
    }), w.fn.size = function () {
        return this.length
    }, w.fn.andSelf = w.fn.addBack, typeof module == "object" && module && typeof module.exports == "object" ? module.exports = w : (e.jQuery = e.$ = w, typeof define == "function" && define.amd && define("jquery", [], function () {
        return w
    }))
})(window), function () {
    var e = this, t = e._, n = {}, r = Array.prototype, i = Object.prototype, s = Function.prototype, o = r.push,
        u = r.slice, a = r.concat, f = i.toString, l = i.hasOwnProperty, c = r.forEach, h = r.map, p = r.reduce,
        d = r.reduceRight, v = r.filter, m = r.every, g = r.some, y = r.indexOf, b = r.lastIndexOf, w = Array.isArray,
        E = Object.keys, S = s.bind, x = function (e) {
            if (e instanceof x) return e;
            if (!(this instanceof x)) return new x(e);
            this._wrapped = e
        };
    typeof exports != "undefined" ? (typeof module != "undefined" && module.exports && (exports = module.exports = x), exports._ = x) : e._ = x, x.VERSION = "1.5.2";
    var T = x.each = x.forEach = function (e, t, r) {
        if (e == null) return;
        if (c && e.forEach === c) e.forEach(t, r); else if (e.length === +e.length) {
            for (var i = 0, s = e.length; i < s; i++) if (t.call(r, e[i], i, e) === n) return
        } else {
            var o = x.keys(e);
            for (var i = 0, s = o.length; i < s; i++) if (t.call(r, e[o[i]], o[i], e) === n) return
        }
    };
    x.map = x.collect = function (e, t, n) {
        var r = [];
        return e == null ? r : h && e.map === h ? e.map(t, n) : (T(e, function (e, i, s) {
            r.push(t.call(n, e, i, s))
        }), r)
    };
    var N = "Reduce of empty array with no initial value";
    x.reduce = x.foldl = x.inject = function (e, t, n, r) {
        var i = arguments.length > 2;
        e == null && (e = []);
        if (p && e.reduce === p) return r && (t = x.bind(t, r)), i ? e.reduce(t, n) : e.reduce(t);
        T(e, function (e, s, o) {
            i ? n = t.call(r, n, e, s, o) : (n = e, i = !0)
        });
        if (!i) throw new TypeError(N);
        return n
    }, x.reduceRight = x.foldr = function (e, t, n, r) {
        var i = arguments.length > 2;
        e == null && (e = []);
        if (d && e.reduceRight === d) return r && (t = x.bind(t, r)), i ? e.reduceRight(t, n) : e.reduceRight(t);
        var s = e.length;
        if (s !== +s) {
            var o = x.keys(e);
            s = o.length
        }
        T(e, function (u, a, f) {
            a = o ? o[--s] : --s, i ? n = t.call(r, n, e[a], a, f) : (n = e[a], i = !0)
        });
        if (!i) throw new TypeError(N);
        return n
    }, x.find = x.detect = function (e, t, n) {
        var r;
        return C(e, function (e, i, s) {
            if (t.call(n, e, i, s)) return r = e, !0
        }), r
    }, x.filter = x.select = function (e, t, n) {
        var r = [];
        return e == null ? r : v && e.filter === v ? e.filter(t, n) : (T(e, function (e, i, s) {
            t.call(n, e, i, s) && r.push(e)
        }), r)
    }, x.reject = function (e, t, n) {
        return x.filter(e, function (e, r, i) {
            return !t.call(n, e, r, i)
        }, n)
    }, x.every = x.all = function (e, t, r) {
        t || (t = x.identity);
        var i = !0;
        return e == null ? i : m && e.every === m ? e.every(t, r) : (T(e, function (e, s, o) {
            if (!(i = i && t.call(r, e, s, o))) return n
        }), !!i)
    };
    var C = x.some = x.any = function (e, t, r) {
        t || (t = x.identity);
        var i = !1;
        return e == null ? i : g && e.some === g ? e.some(t, r) : (T(e, function (e, s, o) {
            if (i || (i = t.call(r, e, s, o))) return n
        }), !!i)
    };
    x.contains = x.include = function (e, t) {
        return e == null ? !1 : y && e.indexOf === y ? e.indexOf(t) != -1 : C(e, function (e) {
            return e === t
        })
    }, x.invoke = function (e, t) {
        var n = u.call(arguments, 2), r = x.isFunction(t);
        return x.map(e, function (e) {
            return (r ? t : e[t]).apply(e, n)
        })
    }, x.pluck = function (e, t) {
        return x.map(e, function (e) {
            return e[t]
        })
    }, x.where = function (e, t, n) {
        return x.isEmpty(t) ? n ? void 0 : [] : x[n ? "find" : "filter"](e, function (e) {
            for (var n in t) if (t[n] !== e[n]) return !1;
            return !0
        })
    }, x.findWhere = function (e, t) {
        return x.where(e, t, !0)
    }, x.max = function (e, t, n) {
        if (!t && x.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.max.apply(Math, e);
        if (!t && x.isEmpty(e)) return -Infinity;
        var r = {computed: -Infinity, value: -Infinity};
        return T(e, function (e, i, s) {
            var o = t ? t.call(n, e, i, s) : e;
            o > r.computed && (r = {value: e, computed: o})
        }), r.value
    }, x.min = function (e, t, n) {
        if (!t && x.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.min.apply(Math, e);
        if (!t && x.isEmpty(e)) return Infinity;
        var r = {computed: Infinity, value: Infinity};
        return T(e, function (e, i, s) {
            var o = t ? t.call(n, e, i, s) : e;
            o < r.computed && (r = {value: e, computed: o})
        }), r.value
    }, x.shuffle = function (e) {
        var t, n = 0, r = [];
        return T(e, function (e) {
            t = x.random(n++), r[n - 1] = r[t], r[t] = e
        }), r
    }, x.sample = function (e, t, n) {
        return arguments.length < 2 || n ? e[x.random(e.length - 1)] : x.shuffle(e).slice(0, Math.max(0, t))
    };
    var k = function (e) {
        return x.isFunction(e) ? e : function (t) {
            return t[e]
        }
    };
    x.sortBy = function (e, t, n) {
        var r = k(t);
        return x.pluck(x.map(e, function (e, t, i) {
            return {value: e, index: t, criteria: r.call(n, e, t, i)}
        }).sort(function (e, t) {
            var n = e.criteria, r = t.criteria;
            if (n !== r) {
                if (n > r || n === void 0) return 1;
                if (n < r || r === void 0) return -1
            }
            return e.index - t.index
        }), "value")
    };
    var L = function (e) {
        return function (t, n, r) {
            var i = {}, s = n == null ? x.identity : k(n);
            return T(t, function (n, o) {
                var u = s.call(r, n, o, t);
                e(i, u, n)
            }), i
        }
    };
    x.groupBy = L(function (e, t, n) {
        (x.has(e, t) ? e[t] : e[t] = []).push(n)
    }), x.indexBy = L(function (e, t, n) {
        e[t] = n
    }), x.countBy = L(function (e, t) {
        x.has(e, t) ? e[t]++ : e[t] = 1
    }), x.sortedIndex = function (e, t, n, r) {
        n = n == null ? x.identity : k(n);
        var i = n.call(r, t), s = 0, o = e.length;
        while (s < o) {
            var u = s + o >>> 1;
            n.call(r, e[u]) < i ? s = u + 1 : o = u
        }
        return s
    }, x.toArray = function (e) {
        return e ? x.isArray(e) ? u.call(e) : e.length === +e.length ? x.map(e, x.identity) : x.values(e) : []
    }, x.size = function (e) {
        return e == null ? 0 : e.length === +e.length ? e.length : x.keys(e).length
    }, x.first = x.head = x.take = function (e, t, n) {
        return e == null ? void 0 : t == null || n ? e[0] : u.call(e, 0, t)
    }, x.initial = function (e, t, n) {
        return u.call(e, 0, e.length - (t == null || n ? 1 : t))
    }, x.last = function (e, t, n) {
        return e == null ? void 0 : t == null || n ? e[e.length - 1] : u.call(e, Math.max(e.length - t, 0))
    }, x.rest = x.tail = x.drop = function (e, t, n) {
        return u.call(e, t == null || n ? 1 : t)
    }, x.compact = function (e) {
        return x.filter(e, x.identity)
    };
    var A = function (e, t, n) {
        return t && x.every(e, x.isArray) ? a.apply(n, e) : (T(e, function (e) {
            x.isArray(e) || x.isArguments(e) ? t ? o.apply(n, e) : A(e, t, n) : n.push(e)
        }), n)
    };
    x.flatten = function (e, t) {
        return A(e, t, [])
    }, x.without = function (e) {
        return x.difference(e, u.call(arguments, 1))
    }, x.uniq = x.unique = function (e, t, n, r) {
        x.isFunction(t) && (r = n, n = t, t = !1);
        var i = n ? x.map(e, n, r) : e, s = [], o = [];
        return T(i, function (n, r) {
            if (t ? !r || o[o.length - 1] !== n : !x.contains(o, n)) o.push(n), s.push(e[r])
        }), s
    }, x.union = function () {
        return x.uniq(x.flatten(arguments, !0))
    }, x.intersection = function (e) {
        var t = u.call(arguments, 1);
        return x.filter(x.uniq(e), function (e) {
            return x.every(t, function (t) {
                return x.indexOf(t, e) >= 0
            })
        })
    }, x.difference = function (e) {
        var t = a.apply(r, u.call(arguments, 1));
        return x.filter(e, function (e) {
            return !x.contains(t, e)
        })
    }, x.zip = function () {
        var e = x.max(x.pluck(arguments, "length").concat(0)), t = new Array(e);
        for (var n = 0; n < e; n++) t[n] = x.pluck(arguments, "" + n);
        return t
    }, x.object = function (e, t) {
        if (e == null) return {};
        var n = {};
        for (var r = 0, i = e.length; r < i; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
        return n
    }, x.indexOf = function (e, t, n) {
        if (e == null) return -1;
        var r = 0, i = e.length;
        if (n) {
            if (typeof n != "number") return r = x.sortedIndex(e, t), e[r] === t ? r : -1;
            r = n < 0 ? Math.max(0, i + n) : n
        }
        if (y && e.indexOf === y) return e.indexOf(t, n);
        for (; r < i; r++) if (e[r] === t) return r;
        return -1
    }, x.lastIndexOf = function (e, t, n) {
        if (e == null) return -1;
        var r = n != null;
        if (b && e.lastIndexOf === b) return r ? e.lastIndexOf(t, n) : e.lastIndexOf(t);
        var i = r ? n : e.length;
        while (i--) if (e[i] === t) return i;
        return -1
    }, x.range = function (e, t, n) {
        arguments.length <= 1 && (t = e || 0, e = 0), n = arguments[2] || 1;
        var r = Math.max(Math.ceil((t - e) / n), 0), i = 0, s = new Array(r);
        while (i < r) s[i++] = e, e += n;
        return s
    };
    var O = function () {
    };
    x.bind = function (e, t) {
        var n, r;
        if (S && e.bind === S) return S.apply(e, u.call(arguments, 1));
        if (!x.isFunction(e)) throw new TypeError;
        return n = u.call(arguments, 2), r = function () {
            if (this instanceof r) {
                O.prototype = e.prototype;
                var i = new O;
                O.prototype = null;
                var s = e.apply(i, n.concat(u.call(arguments)));
                return Object(s) === s ? s : i
            }
            return e.apply(t, n.concat(u.call(arguments)))
        }
    }, x.partial = function (e) {
        var t = u.call(arguments, 1);
        return function () {
            return e.apply(this, t.concat(u.call(arguments)))
        }
    }, x.bindAll = function (e) {
        var t = u.call(arguments, 1);
        if (t.length === 0) throw new Error("bindAll must be passed function names");
        return T(t, function (t) {
            e[t] = x.bind(e[t], e)
        }), e
    }, x.memoize = function (e, t) {
        var n = {};
        return t || (t = x.identity), function () {
            var r = t.apply(this, arguments);
            return x.has(n, r) ? n[r] : n[r] = e.apply(this, arguments)
        }
    }, x.delay = function (e, t) {
        var n = u.call(arguments, 2);
        return setTimeout(function () {
            return e.apply(null, n)
        }, t)
    }, x.defer = function (e) {
        return x.delay.apply(x, [e, 1].concat(u.call(arguments, 1)))
    }, x.throttle = function (e, t, n) {
        var r, i, s, o = null, u = 0;
        n || (n = {});
        var a = function () {
            u = n.leading === !1 ? 0 : new Date, o = null, s = e.apply(r, i)
        };
        return function () {
            var f = new Date;
            !u && n.leading === !1 && (u = f);
            var l = t - (f - u);
            return r = this, i = arguments, l <= 0 ? (clearTimeout(o), o = null, u = f, s = e.apply(r, i)) : !o && n.trailing !== !1 && (o = setTimeout(a, l)), s
        }
    }, x.debounce = function (e, t, n) {
        var r, i, s, o, u;
        return function () {
            s = this, i = arguments, o = new Date;
            var a = function () {
                var f = new Date - o;
                f < t ? r = setTimeout(a, t - f) : (r = null, n || (u = e.apply(s, i)))
            }, f = n && !r;
            return r || (r = setTimeout(a, t)), f && (u = e.apply(s, i)), u
        }
    }, x.once = function (e) {
        var t = !1, n;
        return function () {
            return t ? n : (t = !0, n = e.apply(this, arguments), e = null, n)
        }
    }, x.wrap = function (e, t) {
        return function () {
            var n = [e];
            return o.apply(n, arguments), t.apply(this, n)
        }
    }, x.compose = function () {
        var e = arguments;
        return function () {
            var t = arguments;
            for (var n = e.length - 1; n >= 0; n--) t = [e[n].apply(this, t)];
            return t[0]
        }
    }, x.after = function (e, t) {
        return function () {
            if (--e < 1) return t.apply(this, arguments)
        }
    }, x.keys = E || function (e) {
        if (e !== Object(e)) throw new TypeError("Invalid object");
        var t = [];
        for (var n in e) x.has(e, n) && t.push(n);
        return t
    }, x.values = function (e) {
        var t = x.keys(e), n = t.length, r = new Array(n);
        for (var i = 0; i < n; i++) r[i] = e[t[i]];
        return r
    }, x.pairs = function (e) {
        var t = x.keys(e), n = t.length, r = new Array(n);
        for (var i = 0; i < n; i++) r[i] = [t[i], e[t[i]]];
        return r
    }, x.invert = function (e) {
        var t = {}, n = x.keys(e);
        for (var r = 0, i = n.length; r < i; r++) t[e[n[r]]] = n[r];
        return t
    }, x.functions = x.methods = function (e) {
        var t = [];
        for (var n in e) x.isFunction(e[n]) && t.push(n);
        return t.sort()
    }, x.extend = function (e) {
        return T(u.call(arguments, 1), function (t) {
            if (t) for (var n in t) e[n] = t[n]
        }), e
    }, x.pick = function (e) {
        var t = {}, n = a.apply(r, u.call(arguments, 1));
        return T(n, function (n) {
            n in e && (t[n] = e[n])
        }), t
    }, x.omit = function (e) {
        var t = {}, n = a.apply(r, u.call(arguments, 1));
        for (var i in e) x.contains(n, i) || (t[i] = e[i]);
        return t
    }, x.defaults = function (e) {
        return T(u.call(arguments, 1), function (t) {
            if (t) for (var n in t) e[n] === void 0 && (e[n] = t[n])
        }), e
    }, x.clone = function (e) {
        return x.isObject(e) ? x.isArray(e) ? e.slice() : x.extend({}, e) : e
    }, x.tap = function (e, t) {
        return t(e), e
    };
    var M = function (e, t, n, r) {
        if (e === t) return e !== 0 || 1 / e == 1 / t;
        if (e == null || t == null) return e === t;
        e instanceof x && (e = e._wrapped), t instanceof x && (t = t._wrapped);
        var i = f.call(e);
        if (i != f.call(t)) return !1;
        switch (i) {
            case"[object String]":
                return e == String(t);
            case"[object Number]":
                return e != +e ? t != +t : e == 0 ? 1 / e == 1 / t : e == +t;
            case"[object Date]":
            case"[object Boolean]":
                return +e == +t;
            case"[object RegExp]":
                return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
        }
        if (typeof e != "object" || typeof t != "object") return !1;
        var s = n.length;
        while (s--) if (n[s] == e) return r[s] == t;
        var o = e.constructor, u = t.constructor;
        if (o !== u && !(x.isFunction(o) && o instanceof o && x.isFunction(u) && u instanceof u)) return !1;
        n.push(e), r.push(t);
        var a = 0, l = !0;
        if (i == "[object Array]") {
            a = e.length, l = a == t.length;
            if (l) while (a--) if (!(l = M(e[a], t[a], n, r))) break
        } else {
            for (var c in e) if (x.has(e, c)) {
                a++;
                if (!(l = x.has(t, c) && M(e[c], t[c], n, r))) break
            }
            if (l) {
                for (c in t) if (x.has(t, c) && !(a--)) break;
                l = !a
            }
        }
        return n.pop(), r.pop(), l
    };
    x.isEqual = function (e, t) {
        return M(e, t, [], [])
    }, x.isEmpty = function (e) {
        if (e == null) return !0;
        if (x.isArray(e) || x.isString(e)) return e.length === 0;
        for (var t in e) if (x.has(e, t)) return !1;
        return !0
    }, x.isElement = function (e) {
        return !!e && e.nodeType === 1
    }, x.isArray = w || function (e) {
        return f.call(e) == "[object Array]"
    }, x.isObject = function (e) {
        return e === Object(e)
    }, T(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (e) {
        x["is" + e] = function (t) {
            return f.call(t) == "[object " + e + "]"
        }
    }), x.isArguments(arguments) || (x.isArguments = function (e) {
        return !!e && !!x.has(e, "callee")
    }), typeof /./ != "function" && (x.isFunction = function (e) {
        return typeof e == "function"
    }), x.isFinite = function (e) {
        return isFinite(e) && !isNaN(parseFloat(e))
    }, x.isNaN = function (e) {
        return x.isNumber(e) && e != +e
    }, x.isBoolean = function (e) {
        return e === !0 || e === !1 || f.call(e) == "[object Boolean]"
    }, x.isNull = function (e) {
        return e === null
    }, x.isUndefined = function (e) {
        return e === void 0
    }, x.has = function (e, t) {
        return l.call(e, t)
    }, x.noConflict = function () {
        return e._ = t, this
    }, x.identity = function (e) {
        return e
    }, x.times = function (e, t, n) {
        var r = Array(Math.max(0, e));
        for (var i = 0; i < e; i++) r[i] = t.call(n, i);
        return r
    }, x.random = function (e, t) {
        return t == null && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
    };
    var _ = {escape: {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;"}};
    _.unescape = x.invert(_.escape);
    var D = {
        escape: new RegExp("[" + x.keys(_.escape).join("") + "]", "g"),
        unescape: new RegExp("(" + x.keys(_.unescape).join("|") + ")", "g")
    };
    x.each(["escape", "unescape"], function (e) {
        x[e] = function (t) {
            return t == null ? "" : ("" + t).replace(D[e], function (t) {
                return _[e][t]
            })
        }
    }), x.result = function (e, t) {
        if (e == null) return void 0;
        var n = e[t];
        return x.isFunction(n) ? n.call(e) : n
    }, x.mixin = function (e) {
        T(x.functions(e), function (t) {
            var n = x[t] = e[t];
            x.prototype[t] = function () {
                var e = [this._wrapped];
                return o.apply(e, arguments), F.call(this, n.apply(x, e))
            }
        })
    };
    var P = 0;
    x.uniqueId = function (e) {
        var t = ++P + "";
        return e ? e + t : t
    }, x.templateSettings = {evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g};
    var H = /(.)^/, B = {"'": "'", "\\": "\\", "\r": "r", "\n": "n", "	": "t", "\u2028": "u2028", "\u2029": "u2029"},
        j = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    x.template = function (e, t, n) {
        var r;
        n = x.defaults({}, n, x.templateSettings);
        var i = new RegExp([(n.escape || H).source, (n.interpolate || H).source, (n.evaluate || H).source].join("|") + "|$", "g"),
            s = 0, o = "__p+='";
        e.replace(i, function (t, n, r, i, u) {
            return o += e.slice(s, u).replace(j, function (e) {
                return "\\" + B[e]
            }), n && (o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), r && (o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'"), i && (o += "';\n" + i + "\n__p+='"), s = u + t.length, t
        }), o += "';\n", n.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
        try {
            r = new Function(n.variable || "obj", "_", o)
        } catch (u) {
            throw u.source = o, u
        }
        if (t) return r(t, x);
        var a = function (e) {
            return r.call(this, e, x)
        };
        return a.source = "function(" + (n.variable || "obj") + "){\n" + o + "}", a
    }, x.chain = function (e) {
        return x(e).chain()
    };
    var F = function (e) {
        return this._chain ? x(e).chain() : e
    };
    x.mixin(x), T(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (e) {
        var t = r[e];
        x.prototype[e] = function () {
            var n = this._wrapped;
            return t.apply(n, arguments), (e == "shift" || e == "splice") && n.length === 0 && delete n[0], F.call(this, n)
        }
    }), T(["concat", "join", "slice"], function (e) {
        var t = r[e];
        x.prototype[e] = function () {
            return F.call(this, t.apply(this._wrapped, arguments))
        }
    }), x.extend(x.prototype, {
        chain: function () {
            return this._chain = !0, this
        }, value: function () {
            return this._wrapped
        }
    })
}.call(this), define("underscore", function (e) {
    return function () {
        var t, n;
        return t || e._
    }
}(this)), function () {
    var e = this, t = e.Backbone, n = [], r = n.push, i = n.slice, s = n.splice, o;
    typeof exports != "undefined" ? o = exports : o = e.Backbone = {}, o.VERSION = "1.1.0";
    var u = e._;
    !u && typeof require != "undefined" && (u = require("underscore")), o.$ = e.jQuery || e.Zepto || e.ender || e.$, o.noConflict = function () {
        return e.Backbone = t, this
    }, o.emulateHTTP = !1, o.emulateJSON = !1;
    var a = o.Events = {
        on: function (e, t, n) {
            if (!l(this, "on", e, [t, n]) || !t) return this;
            this._events || (this._events = {});
            var r = this._events[e] || (this._events[e] = []);
            return r.push({callback: t, context: n, ctx: n || this}), this
        }, once: function (e, t, n) {
            if (!l(this, "once", e, [t, n]) || !t) return this;
            var r = this, i = u.once(function () {
                r.off(e, i), t.apply(this, arguments)
            });
            return i._callback = t, this.on(e, i, n)
        }, off: function (e, t, n) {
            var r, i, s, o, a, f, c, h;
            if (!this._events || !l(this, "off", e, [t, n])) return this;
            if (!e && !t && !n) return this._events = {}, this;
            o = e ? [e] : u.keys(this._events);
            for (a = 0, f = o.length; a < f; a++) {
                e = o[a];
                if (s = this._events[e]) {
                    this._events[e] = r = [];
                    if (t || n) for (c = 0, h = s.length; c < h; c++) i = s[c], (t && t !== i.callback && t !== i.callback._callback || n && n !== i.context) && r.push(i);
                    r.length || delete this._events[e]
                }
            }
            return this
        }, trigger: function (e) {
            if (!this._events) return this;
            var t = i.call(arguments, 1);
            if (!l(this, "trigger", e, t)) return this;
            var n = this._events[e], r = this._events.all;
            return n && c(n, t), r && c(r, arguments), this
        }, stopListening: function (e, t, n) {
            var r = this._listeningTo;
            if (!r) return this;
            var i = !t && !n;
            !n && typeof t == "object" && (n = this), e && ((r = {})[e._listenId] = e);
            for (var s in r) e = r[s], e.off(t, n, this), (i || u.isEmpty(e._events)) && delete this._listeningTo[s];
            return this
        }
    }, f = /\s+/, l = function (e, t, n, r) {
        if (!n) return !0;
        if (typeof n == "object") {
            for (var i in n) e[t].apply(e, [i, n[i]].concat(r));
            return !1
        }
        if (f.test(n)) {
            var s = n.split(f);
            for (var o = 0, u = s.length; o < u; o++) e[t].apply(e, [s[o]].concat(r));
            return !1
        }
        return !0
    }, c = function (e, t) {
        var n, r = -1, i = e.length, s = t[0], o = t[1], u = t[2];
        switch (t.length) {
            case 0:
                while (++r < i) (n = e[r]).callback.call(n.ctx);
                return;
            case 1:
                while (++r < i) (n = e[r]).callback.call(n.ctx, s);
                return;
            case 2:
                while (++r < i) (n = e[r]).callback.call(n.ctx, s, o);
                return;
            case 3:
                while (++r < i) (n = e[r]).callback.call(n.ctx, s, o, u);
                return;
            default:
                while (++r < i) (n = e[r]).callback.apply(n.ctx, t)
        }
    }, h = {listenTo: "on", listenToOnce: "once"};
    u.each(h, function (e, t) {
        a[t] = function (t, n, r) {
            var i = this._listeningTo || (this._listeningTo = {}), s = t._listenId || (t._listenId = u.uniqueId("l"));
            return i[s] = t, !r && typeof n == "object" && (r = this), t[e](n, r, this), this
        }
    }), a.bind = a.on, a.unbind = a.off, u.extend(o, a);
    var p = o.Model = function (e, t) {
        var n = e || {};
        t || (t = {}), this.cid = u.uniqueId("c"), this.attributes = {}, t.collection && (this.collection = t.collection), t.parse && (n = this.parse(n, t) || {}), n = u.defaults({}, n, u.result(this, "defaults")), this.set(n, t), this.changed = {}, this.initialize.apply(this, arguments)
    };
    u.extend(p.prototype, a, {
        changed: null, validationError: null, idAttribute: "id", initialize: function () {
        }, toJSON: function (e) {
            return u.clone(this.attributes)
        }, sync: function () {
            return o.sync.apply(this, arguments)
        }, get: function (e) {
            return this.attributes[e]
        }, escape: function (e) {
            return u.escape(this.get(e))
        }, has: function (e) {
            return this.get(e) != null
        }, set: function (e, t, n) {
            var r, i, s, o, a, f, l, c;
            if (e == null) return this;
            typeof e == "object" ? (i = e, n = t) : (i = {})[e] = t, n || (n = {});
            if (!this._validate(i, n)) return !1;
            s = n.unset, a = n.silent, o = [], f = this._changing, this._changing = !0, f || (this._previousAttributes = u.clone(this.attributes), this.changed = {}), c = this.attributes, l = this._previousAttributes, this.idAttribute in i && (this.id = i[this.idAttribute]);
            for (r in i) t = i[r], u.isEqual(c[r], t) || o.push(r), u.isEqual(l[r], t) ? delete this.changed[r] : this.changed[r] = t, s ? delete c[r] : c[r] = t;
            if (!a) {
                o.length && (this._pending = !0);
                for (var h = 0, p = o.length; h < p; h++) this.trigger("change:" + o[h], this, c[o[h]], n)
            }
            if (f) return this;
            if (!a) while (this._pending) this._pending = !1, this.trigger("change", this, n);
            return this._pending = !1, this._changing = !1, this
        }, unset: function (e, t) {
            return this.set(e, void 0, u.extend({}, t, {unset: !0}))
        }, clear: function (e) {
            var t = {};
            for (var n in this.attributes) t[n] = void 0;
            return this.set(t, u.extend({}, e, {unset: !0}))
        }, hasChanged: function (e) {
            return e == null ? !u.isEmpty(this.changed) : u.has(this.changed, e)
        }, changedAttributes: function (e) {
            if (!e) return this.hasChanged() ? u.clone(this.changed) : !1;
            var t, n = !1, r = this._changing ? this._previousAttributes : this.attributes;
            for (var i in e) {
                if (u.isEqual(r[i], t = e[i])) continue;
                (n || (n = {}))[i] = t
            }
            return n
        }, previous: function (e) {
            return e == null || !this._previousAttributes ? null : this._previousAttributes[e]
        }, previousAttributes: function () {
            return u.clone(this._previousAttributes)
        }, fetch: function (e) {
            e = e ? u.clone(e) : {}, e.parse === void 0 && (e.parse = !0);
            var t = this, n = e.success;
            return e.success = function (r) {
                if (!t.set(t.parse(r, e), e)) return !1;
                n && n(t, r, e), t.trigger("sync", t, r, e)
            }, F(this, e), this.sync("read", this, e)
        }, save: function (e, t, n) {
            var r, i, s, o = this.attributes;
            e == null || typeof e == "object" ? (r = e, n = t) : (r = {})[e] = t, n = u.extend({validate: !0}, n);
            if (r && !n.wait) {
                if (!this.set(r, n)) return !1
            } else if (!this._validate(r, n)) return !1;
            r && n.wait && (this.attributes = u.extend({}, o, r)), n.parse === void 0 && (n.parse = !0);
            var a = this, f = n.success;
            return n.success = function (e) {
                a.attributes = o;
                var t = a.parse(e, n);
                n.wait && (t = u.extend(r || {}, t));
                if (u.isObject(t) && !a.set(t, n)) return !1;
                f && f(a, e, n), a.trigger("sync", a, e, n)
            }, F(this, n), i = this.isNew() ? "create" : n.patch ? "patch" : "update", i === "patch" && (n.attrs = r), s = this.sync(i, this, n), r && n.wait && (this.attributes = o), s
        }, destroy: function (e) {
            e = e ? u.clone(e) : {};
            var t = this, n = e.success, r = function () {
                t.trigger("destroy", t, t.collection, e)
            };
            e.success = function (i) {
                (e.wait || t.isNew()) && r(), n && n(t, i, e), t.isNew() || t.trigger("sync", t, i, e)
            };
            if (this.isNew()) return e.success(), !1;
            F(this, e);
            var i = this.sync("delete", this, e);
            return e.wait || r(), i
        }, url: function () {
            var e = u.result(this, "urlRoot") || u.result(this.collection, "url") || j();
            return this.isNew() ? e : e + (e.charAt(e.length - 1) === "/" ? "" : "/") + encodeURIComponent(this.id)
        }, parse: function (e, t) {
            return e
        }, clone: function () {
            return new this.constructor(this.attributes)
        }, isNew: function () {
            return this.id == null
        }, isValid: function (e) {
            return this._validate({}, u.extend(e || {}, {validate: !0}))
        }, _validate: function (e, t) {
            if (!t.validate || !this.validate) return !0;
            e = u.extend({}, this.attributes, e);
            var n = this.validationError = this.validate(e, t) || null;
            return n ? (this.trigger("invalid", this, n, u.extend(t, {validationError: n})), !1) : !0
        }
    });
    var d = ["keys", "values", "pairs", "invert", "pick", "omit"];
    u.each(d, function (e) {
        p.prototype[e] = function () {
            var t = i.call(arguments);
            return t.unshift(this.attributes), u[e].apply(u, t)
        }
    });
    var v = o.Collection = function (e, t) {
        t || (t = {}), t.model && (this.model = t.model), t.comparator !== void 0 && (this.comparator = t.comparator), this._reset(), this.initialize.apply(this, arguments), e && this.reset(e, u.extend({silent: !0}, t))
    }, m = {add: !0, remove: !0, merge: !0}, g = {add: !0, remove: !1};
    u.extend(v.prototype, a, {
        model: p, initialize: function () {
        }, toJSON: function (e) {
            return this.map(function (t) {
                return t.toJSON(e)
            })
        }, sync: function () {
            return o.sync.apply(this, arguments)
        }, add: function (e, t) {
            return this.set(e, u.extend({merge: !1}, t, g))
        }, remove: function (e, t) {
            var n = !u.isArray(e);
            e = n ? [e] : u.clone(e), t || (t = {});
            var r, i, s, o;
            for (r = 0, i = e.length; r < i; r++) {
                o = e[r] = this.get(e[r]);
                if (!o) continue;
                delete this._byId[o.id], delete this._byId[o.cid], s = this.indexOf(o), this.models.splice(s, 1), this.length--, t.silent || (t.index = s, o.trigger("remove", o, this, t)), this._removeReference(o)
            }
            return n ? e[0] : e
        }, set: function (e, t) {
            t = u.defaults({}, t, m), t.parse && (e = this.parse(e, t));
            var n = !u.isArray(e);
            e = n ? e ? [e] : [] : u.clone(e);
            var r, i, s, o, a, f, l, c = t.at, h = this.model, d = this.comparator && c == null && t.sort !== !1,
                v = u.isString(this.comparator) ? this.comparator : null, g = [], y = [], b = {}, w = t.add,
                E = t.merge, S = t.remove, x = !d && w && S ? [] : !1;
            for (r = 0, i = e.length; r < i; r++) {
                a = e[r], a instanceof p ? s = o = a : s = a[h.prototype.idAttribute];
                if (f = this.get(s)) S && (b[f.cid] = !0), E && (a = a === o ? o.attributes : a, t.parse && (a = f.parse(a, t)), f.set(a, t), d && !l && f.hasChanged(v) && (l = !0)), e[r] = f; else if (w) {
                    o = e[r] = this._prepareModel(a, t);
                    if (!o) continue;
                    g.push(o), o.on("all", this._onModelEvent, this), this._byId[o.cid] = o, o.id != null && (this._byId[o.id] = o)
                }
                x && x.push(f || o)
            }
            if (S) {
                for (r = 0, i = this.length; r < i; ++r) b[(o = this.models[r]).cid] || y.push(o);
                y.length && this.remove(y, t)
            }
            if (g.length || x && x.length) {
                d && (l = !0), this.length += g.length;
                if (c != null) for (r = 0, i = g.length; r < i; r++) this.models.splice(c + r, 0, g[r]); else {
                    x && (this.models.length = 0);
                    var T = x || g;
                    for (r = 0, i = T.length; r < i; r++) this.models.push(T[r])
                }
            }
            l && this.sort({silent: !0});
            if (!t.silent) {
                for (r = 0, i = g.length; r < i; r++) (o = g[r]).trigger("add", o, this, t);
                (l || x && x.length) && this.trigger("sort", this, t)
            }
            return n ? e[0] : e
        }, reset: function (e, t) {
            t || (t = {});
            for (var n = 0, r = this.models.length; n < r; n++) this._removeReference(this.models[n]);
            return t.previousModels = this.models, this._reset(), e = this.add(e, u.extend({silent: !0}, t)), t.silent || this.trigger("reset", this, t), e
        }, push: function (e, t) {
            return this.add(e, u.extend({at: this.length}, t))
        }, pop: function (e) {
            var t = this.at(this.length - 1);
            return this.remove(t, e), t
        }, unshift: function (e, t) {
            return this.add(e, u.extend({at: 0}, t))
        }, shift: function (e) {
            var t = this.at(0);
            return this.remove(t, e), t
        }, slice: function () {
            return i.apply(this.models, arguments)
        }, get: function (e) {
            return e == null ? void 0 : this._byId[e.id] || this._byId[e.cid] || this._byId[e]
        }, at: function (e) {
            return this.models[e]
        }, where: function (e, t) {
            return u.isEmpty(e) ? t ? void 0 : [] : this[t ? "find" : "filter"](function (t) {
                for (var n in e) if (e[n] !== t.get(n)) return !1;
                return !0
            })
        }, findWhere: function (e) {
            return this.where(e, !0)
        }, sort: function (e) {
            if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
            return e || (e = {}), u.isString(this.comparator) || this.comparator.length === 1 ? this.models = this.sortBy(this.comparator, this) : this.models.sort(u.bind(this.comparator, this)), e.silent || this.trigger("sort", this, e), this
        }, pluck: function (e) {
            return u.invoke(this.models, "get", e)
        }, fetch: function (e) {
            e = e ? u.clone(e) : {}, e.parse === void 0 && (e.parse = !0);
            var t = e.success, n = this;
            return e.success = function (r) {
                var i = e.reset ? "reset" : "set";
                n[i](r, e), t && t(n, r, e), n.trigger("sync", n, r, e)
            }, F(this, e), this.sync("read", this, e)
        }, create: function (e, t) {
            t = t ? u.clone(t) : {};
            if (!(e = this._prepareModel(e, t))) return !1;
            t.wait || this.add(e, t);
            var n = this, r = t.success;
            return t.success = function (e, t, i) {
                i.wait && n.add(e, i), r && r(e, t, i)
            }, e.save(null, t), e
        }, parse: function (e, t) {
            return e
        }, clone: function () {
            return new this.constructor(this.models)
        }, _reset: function () {
            this.length = 0, this.models = [], this._byId = {}
        }, _prepareModel: function (e, t) {
            if (e instanceof p) return e.collection || (e.collection = this), e;
            t = t ? u.clone(t) : {}, t.collection = this;
            var n = new this.model(e, t);
            return n.validationError ? (this.trigger("invalid", this, n.validationError, t), !1) : n
        }, _removeReference: function (e) {
            this === e.collection && delete e.collection, e.off("all", this._onModelEvent, this)
        }, _onModelEvent: function (e, t, n, r) {
            if ((e === "add" || e === "remove") && n !== this) return;
            e === "destroy" && this.remove(t, r), t && e === "change:" + t.idAttribute && (delete this._byId[t.previous(t.idAttribute)], t.id != null && (this._byId[t.id] = t)), this.trigger.apply(this, arguments)
        }
    });
    var y = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain"];
    u.each(y, function (e) {
        v.prototype[e] = function () {
            var t = i.call(arguments);
            return t.unshift(this.models), u[e].apply(u, t)
        }
    });
    var b = ["groupBy", "countBy", "sortBy"];
    u.each(b, function (e) {
        v.prototype[e] = function (t, n) {
            var r = u.isFunction(t) ? t : function (e) {
                return e.get(t)
            };
            return u[e](this.models, r, n)
        }
    });
    var w = o.View = function (e) {
        this.cid = u.uniqueId("view"), e || (e = {}), u.extend(this, u.pick(e, S)), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
    }, E = /^(\S+)\s*(.*)$/, S = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
    u.extend(w.prototype, a, {
        tagName: "div", $: function (e) {
            return this.$el.find(e)
        }, initialize: function () {
        }, render: function () {
            return this
        }, remove: function () {
            return this.$el.remove(), this.stopListening(), this
        }, setElement: function (e, t) {
            return this.$el && this.undelegateEvents(), this.$el = e instanceof o.$ ? e : o.$(e), this.el = this.$el[0], t !== !1 && this.delegateEvents(), this
        }, delegateEvents: function (e) {
            if (!e && !(e = u.result(this, "events"))) return this;
            this.undelegateEvents();
            for (var t in e) {
                var n = e[t];
                u.isFunction(n) || (n = this[e[t]]);
                if (!n) continue;
                var r = t.match(E), i = r[1], s = r[2];
                n = u.bind(n, this), i += ".delegateEvents" + this.cid, s === "" ? this.$el.on(i, n) : this.$el.on(i, s, n)
            }
            return this
        }, undelegateEvents: function () {
            return this.$el.off(".delegateEvents" + this.cid), this
        }, _ensureElement: function () {
            if (!this.el) {
                var e = u.extend({}, u.result(this, "attributes"));
                this.id && (e.id = u.result(this, "id")), this.className && (e["class"] = u.result(this, "className"));
                var t = o.$("<" + u.result(this, "tagName") + ">").attr(e);
                this.setElement(t, !1)
            } else this.setElement(u.result(this, "el"), !1)
        }
    }), o.sync = function (e, t, n) {
        var r = T[e];
        u.defaults(n || (n = {}), {emulateHTTP: o.emulateHTTP, emulateJSON: o.emulateJSON});
        var i = {type: r, dataType: "json"};
        n.url || (i.url = u.result(t, "url") || j()), n.data == null && t && (e === "create" || e === "update" || e === "patch") && (i.contentType = "application/json", i.data = JSON.stringify(n.attrs || t.toJSON(n))), n.emulateJSON && (i.contentType = "application/x-www-form-urlencoded", i.data = i.data ? {model: i.data} : {});
        if (n.emulateHTTP && (r === "PUT" || r === "DELETE" || r === "PATCH")) {
            i.type = "POST", n.emulateJSON && (i.data._method = r);
            var s = n.beforeSend;
            n.beforeSend = function (e) {
                e.setRequestHeader("X-HTTP-Method-Override", r);
                if (s) return s.apply(this, arguments)
            }
        }
        i.type !== "GET" && !n.emulateJSON && (i.processData = !1), i.type === "PATCH" && x && (i.xhr = function () {
            return new ActiveXObject("Microsoft.XMLHTTP")
        });
        var a = n.xhr = o.ajax(u.extend(i, n));
        return t.trigger("request", t, a, n), a
    };
    var x = typeof window != "undefined" && !!window.ActiveXObject && (!window.XMLHttpRequest || !(new XMLHttpRequest).dispatchEvent),
        T = {create: "POST", update: "PUT", patch: "PATCH", "delete": "DELETE", read: "GET"};
    o.ajax = function () {
        return o.$.ajax.apply(o.$, arguments)
    };
    var N = o.Router = function (e) {
        e || (e = {}), e.routes && (this.routes = e.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
    }, C = /\((.*?)\)/g, k = /(\(\?)?:\w+/g, L = /\*\w+/g, A = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    u.extend(N.prototype, a, {
        initialize: function () {
        }, route: function (e, t, n) {
            u.isRegExp(e) || (e = this._routeToRegExp(e)), u.isFunction(t) && (n = t, t = ""), n || (n = this[t]);
            var r = this;
            return o.history.route(e, function (i) {
                var s = r._extractParameters(e, i);
                n && n.apply(r, s), r.trigger.apply(r, ["route:" + t].concat(s)), r.trigger("route", t, s), o.history.trigger("route", r, t, s)
            }), this
        }, navigate: function (e, t) {
            return o.history.navigate(e, t), this
        }, _bindRoutes: function () {
            if (!this.routes) return;
            this.routes = u.result(this, "routes");
            var e, t = u.keys(this.routes);
            while ((e = t.pop()) != null) this.route(e, this.routes[e])
        }, _routeToRegExp: function (e) {
            return e = e.replace(A, "\\$&").replace(C, "(?:$1)?").replace(k, function (e, t) {
                return t ? e : "([^/]+)"
            }).replace(L, "(.*?)"), new RegExp("^" + e + "$")
        }, _extractParameters: function (e, t) {
            var n = e.exec(t).slice(1);
            return u.map(n, function (e) {
                return e ? decodeURIComponent(e) : null
            })
        }
    });
    var O = o.History = function () {
        this.handlers = [], u.bindAll(this, "checkUrl"), typeof window != "undefined" && (this.location = window.location, this.history = window.history)
    }, M = /^[#\/]|\s+$/g, _ = /^\/+|\/+$/g, D = /msie [\w.]+/, P = /\/$/, H = /[?#].*$/;
    O.started = !1, u.extend(O.prototype, a, {
        interval: 50, getHash: function (e) {
            var t = (e || this).location.href.match(/#(.*)$/);
            return t ? t[1] : ""
        }, getFragment: function (e, t) {
            if (e == null) if (this._hasPushState || !this._wantsHashChange || t) {
                e = this.location.pathname;
                var n = this.root.replace(P, "");
                e.indexOf(n) || (e = e.slice(n.length))
            } else e = this.getHash();
            return e.replace(M, "")
        }, start: function (e) {
            if (O.started) throw new Error("Backbone.history has already been started");
            O.started = !0, this.options = u.extend({root: "/"}, this.options, e), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
            var t = this.getFragment(), n = document.documentMode,
                r = D.exec(navigator.userAgent.toLowerCase()) && (!n || n <= 7);
            this.root = ("/" + this.root + "/").replace(_, "/"), r && this._wantsHashChange && (this.iframe = o.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, this.navigate(t)), this._hasPushState ? o.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !r ? o.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = t;
            var i = this.location, s = i.pathname.replace(/[^\/]$/, "$&/") === this.root;
            if (this._wantsHashChange && this._wantsPushState) {
                if (!this._hasPushState && !s) return this.fragment = this.getFragment(null, !0), this.location.replace(this.root + this.location.search + "#" + this.fragment), !0;
                this._hasPushState && s && i.hash && (this.fragment = this.getHash().replace(M, ""), this.history.replaceState({}, document.title, this.root + this.fragment + i.search))
            }
            if (!this.options.silent) return this.loadUrl()
        }, stop: function () {
            o.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), clearInterval(this._checkUrlInterval), O.started = !1
        }, route: function (e, t) {
            this.handlers.unshift({route: e, callback: t})
        }, checkUrl: function (e) {
            var t = this.getFragment();
            t === this.fragment && this.iframe && (t = this.getFragment(this.getHash(this.iframe)));
            if (t === this.fragment) return !1;
            this.iframe && this.navigate(t), this.loadUrl()
        }, loadUrl: function (e) {
            return e = this.fragment = this.getFragment(e), u.any(this.handlers, function (t) {
                if (t.route.test(e)) return t.callback(e), !0
            })
        }, navigate: function (e, t) {
            if (!O.started) return !1;
            if (!t || t === !0) t = {trigger: !!t};
            var n = this.root + (e = this.getFragment(e || ""));
            e = e.replace(H, "");
            if (this.fragment === e) return;
            this.fragment = e, e === "" && n !== "/" && (n = n.slice(0, -1));
            if (this._hasPushState) this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, n); else {
                if (!this._wantsHashChange) return this.location.assign(n);
                this._updateHash(this.location, e, t.replace), this.iframe && e !== this.getFragment(this.getHash(this.iframe)) && (t.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, e, t.replace))
            }
            if (t.trigger) return this.loadUrl(e)
        }, _updateHash: function (e, t, n) {
            if (n) {
                var r = e.href.replace(/(javascript:|#).*$/, "");
                e.replace(r + "#" + t)
            } else e.hash = "#" + t
        }
    }), o.history = new O;
    var B = function (e, t) {
        var n = this, r;
        e && u.has(e, "constructor") ? r = e.constructor : r = function () {
            return n.apply(this, arguments)
        }, u.extend(r, n, t);
        var i = function () {
            this.constructor = r
        };
        return i.prototype = n.prototype, r.prototype = new i, e && u.extend(r.prototype, e), r.__super__ = n.prototype, r
    };
    p.extend = v.extend = N.extend = w.extend = O.extend = B;
    var j = function () {
        throw new Error('A "url" property or function must be specified')
    }, F = function (e, t) {
        var n = t.error;
        t.error = function (r) {
            n && n(e, r, t), e.trigger("error", e, r, t)
        }
    }
}.call(this), define("backbone", ["underscore", "jquery"], function (e) {
    return function () {
        var t, n;
        return t || e.Backbone
    }
}(this)), function () {
    "use strict";
    var bind = function (e, t, n) {
        var r = Array.prototype.slice.call(arguments, 2);
        return function () {
            var n = r.concat(Array.prototype.slice.call(arguments, 0));
            e.apply(t, n)
        }
    };
    window.console || (window.console = {});
    var console = window.console;
    if (!console.log) if (window.log4javascript) {
        var log = log4javascript.getDefaultLogger();
        console.log = bind(log.info, log), console.debug = bind(log.debug, log), console.info = bind(log.info, log), console.warn = bind(log.warn, log), console.error = bind(log.error, log)
    } else console.log = function (e) {
    };
    console.debug || (console.debug = console.log), console.info || (console.info = console.log), console.warn || (console.warn = console.log), console.error || (console.error = console.log);
    if (window["__consoleShimTest__"] != null || eval("/*@cc_on @_jscript_version <= 9@*/")) {
        var wrap = function (e) {
            var t, n, r, i;
            e = Array.prototype.slice.call(arguments, 0), i = e.shift(), n = e.length;
            if (n > 1 && window.__consoleShimTest__ !== !1) {
                typeof e[0] != "string" && (e.unshift("%o"), n += 1), r = e[0].match(/%[a-z]/g);
                for (t = r ? r.length + 1 : 1; t < n; t += 1) e[0] += " %o"
            }
            Function.apply.call(i, console, e)
        };
        console.log = bind(wrap, window, console.log), console.debug = bind(wrap, window, console.debug), console.info = bind(wrap, window, console.info), console.warn = bind(wrap, window, console.warn), console.error = bind(wrap, window, console.error)
    }
    console.assert || (console.assert = function () {
        var e = Array.prototype.slice.call(arguments, 0), t = e.shift();
        t || (e[0] = "Assertion failed: " + e[0], console.error.apply(console, e))
    }), console.dir || (console.dir = console.log), console.dirxml || (console.dirxml = console.log), console.exception || (console.exception = console.error);
    if (!console.time || !console.timeEnd) {
        var timers = {};
        console.time = function (e) {
            timers[e] = (new Date).getTime()
        }, console.timeEnd = function (e) {
            var t = timers[e];
            t && (console.log(e + ": " + ((new Date).getTime() - t) + "ms"), delete timers[e])
        }
    }
    console.table || (console.table = function (e, t) {
        var n, r, i, s, o, u;
        if (!e || !(e instanceof Array) || !e.length) return;
        if (!t || !(t instanceof Array)) {
            t = [];
            for (u in e[0]) {
                if (!e[0].hasOwnProperty(u)) continue;
                t.push(u)
            }
        }
        for (n = 0, r = e.length; n < r; n += 1) {
            i = [];
            for (s = 0, o = t.length; s < o; s += 1) i.push(e[n][t[s]]);
            Function.apply.call(console.log, console, i)
        }
    }), console.clear || (console.clear = function () {
    }), console.trace || (console.trace = function () {
    }), console.group || (console.group = function () {
    }), console.groupCollapsed || (console.groupCollapsed = function () {
    }), console.groupEnd || (console.groupEnd = function () {
    }), console.timeStamp || (console.timeStamp = function () {
    }), console.profile || (console.profile = function () {
    }), console.profileEnd || (console.profileEnd = function () {
    }), console.count || (console.count = function () {
    })
}(), define("console", function (e) {
    return function () {
        var t, n;
        return t || e.console
    }
}(this)), define("config", ["jquery", "console"], function (e) {
    var t = {
        SITE_URL: "http://",
        CDN: "./CDN_PATH",
        NAVIGATION_CHARACTER: "/#",
        ROUTERBASE: "/",
        TOUCH: !1,
        TABLET: !1,
        MOBILE: !1,
        APIPATH: "/api",
        ROUTERPATH: "",
        ABSPATH: "/",
        DISTPATH: "dist",
        URL: "http://verticalparis.com",
        ORANGE: "#F2532A",
        MOBILE_WIDTH: 640,
        IS_FIREFOX: navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
        getVendorPrefix: function () {
            var e = window.getComputedStyle(document.documentElement, ""),
                t = (Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/) || e.OLink === "" && ["", "o"])[1],
                n = "WebKit|Moz|MS|O".match(new RegExp("(" + t + ")", "i"))[1];
            return {dom: n, lowercase: t, css: "-" + t + "-", js: t[0].toUpperCase() + t.substr(1)}
        },
        getIEversion: function () {
            var t = !!navigator.userAgent.match(/Trident\/7\./);
            if (!e.browser.msie && !t) return -1;
            if (e.browser.version === "6.0") return 6;
            if (e.browser.version === "7.0") return 7;
            if (e.browser.version === "8.0") return 8;
            if (e.browser.version === "9.0") return 9;
            if (e.browser.version === "10.0") return 10;
            if (e.browser.version === "11.0") return 11
        }
    };
    return e("html").hasClass("tablet") ? (t.TABLET = !0, t.TOUCH = !0) : e("html").hasClass("mobile") && (t.MOBILE = !0, t.TOUCH = !0), t.BASE_URL = window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/") + 1), t
}), define("router", ["backbone", "underscore", "config"], function (e, t, n) {
    var r = e.Router.extend({
        page: null, pageOptions: null, authCheck: null, pageList: null, initialize: function (e) {
            e && (this.authCheck = e.authCheck), this.pageList = []
        }, start: function () {
            e.history.start({pushState: !0, root: n.ROUTERPATH})
        }, setRoutes: function (n) {
            t.each(n, function (e) {
                this.route(e[0], e[1])
            }, this), e.history.on("route", this.onRoute, this)
        }, getPreviousPage: function () {
            return this.pageList.length > 1 ? this.pageList[this.pageList.length - 2] : "HOME"
        }, onRoute: function (e, t, n) {
            if (this.authCheck && !this.authCheck.call(this, {page: t})) return !1;
            this.setPage(t, n)
        }, setAuthCallBack: function (e) {
            this.authCheck = e
        }, setPage: function (e, t) {
            this.pageList.push(e), this.page = e, this.pageOptions = t, this.trigger("page", e, t)
        }, navigate: function (t, n) {
            return n = n === !1 ? !1 : !0, this.authCheck && !this.authCheck.call(this, t) ? !1 : e.Router.prototype.navigate.call(this, t, n)
        }, back: function () {
            history.back()
        }
    });
    return new r
}), define("model/common/navigation_model", ["backbone", "router"], function (e, t) {
    var n = e.Model.extend({
        pages: null, createNavigation: function (e) {
            this.pages = e
        }, getAllRoutes: function () {
            var e = {};
            for (var n in this.pages) e[n] = this.pages[n].URL;
            return e.BACK = this.pages[t.getPreviousPage()].URL, e
        }, getModelForPage: function (e) {
            return this.pages[e].MODEL
        }, getViewForPage: function (e) {
            return this.pages[e].VIEW
        }
    });
    return n
}), define("model/common/loader_model", ["backbone"], function (e) {
    var t = e.Model.extend({
        load_list: null,
        image_list: null,
        ON_ITEM_LOADED: "LOADER_MODEL:ON_ITEM_LOADED",
        setItem: function (e) {
            this.load_list || this.createLoadList(), this.image_list || (this.image_list = []), this.load_list[e.item.id] = e.result, e.item.type === "image" && this.image_list.push(e.result), this.trigger(this.ON_ITEM_LOADED)
        },
        getItemByID: function (e) {
            return this.load_list[e]
        },
        createLoadList: function () {
            this.load_list = []
        },
        getContent: function () {
            return this.getItemByID("/data/content_data.json")[0]
        },
        getImages: function () {
            return this.image_list
        }
    });
    return t
}), define("model/modules/letter_sizes_model", ["backbone"], function (e) {
    var t = e.Model.extend({
        defaults: {}, initialize: function () {
        }
    });
    return t
}), define("model/common/language_model", ["backbone"], function (e) {
    var t = e.Model.extend({
        defaults: {index: 0}, initialize: function () {
        }
    });
    return t
}), define("model/app_model", ["backbone", "model/common/navigation_model", "model/common/loader_model", "model/modules/letter_sizes_model", "model/common/language_model"], function (e, t, n, r, i) {
    var s = e.Model.extend({
        dontCheck: !1,
        defaults: {click: !0, hoverOutDistance: 50, deviceAlpha: 0},
        communityitems: null,
        initialize: function () {
            this.create()
        },
        create: function () {
            this.loaderModel = new n, this.navigationModel = new t, this.languageModel = new i, this.letterSizesModel = new r, this.communityitems = [], this.collectionitems = [], this.customizeritems = [], this.quotes = [], this.hoverItems = [], this.menuRows = []
        },
        getLoaderModel: function () {
            return this.loaderModel
        },
        getGridModel: function () {
            return this.gridModel
        },
        getFilterModel: function () {
            return this.filterModel
        },
        getNavigationModel: function () {
            return this.navigationModel
        },
        getPageModel: function () {
            return this.navigationModel.getModelForPage(this.get("page"))
        },
        getPageView: function () {
            return this.navigationModel.getViewForPage(this.get("page"))
        },
        addHoverItem: function (e) {
            this.hoverItems.push(e)
        },
        getHoverItems: function () {
            return this.hoverItems
        },
        addMenuRow: function (e) {
            this.menuRows.push(e)
        },
        getMenuRows: function () {
            return this.menuRows
        },
        addCommunityItem: function (e) {
            this.communityitems.push(e)
        },
        getCommunityItems: function () {
            return this.communityitems
        },
        getCommunityModel: function (e) {
            for (var t = 0; t < this.communityitems.length; t++) if (this.communityitems[t].get("url") === e) return this.communityitems[t]
        },
        getNextCommunityModel: function (e) {
            var t = this.communityitems.indexOf(e), n = -1;
            return t + 1 < this.communityitems.length ? n = t + 1 : n = 0, this.communityitems[n]
        },
        addCollectionModel: function (e) {
            this.collectionitems.push(e)
        },
        getCollectionModel: function (e) {
            for (var t = 0; t < this.collectionitems.length; t++) if (this.collectionitems[t].get("url") === e) return this.collectionitems[t]
        },
        getCollectionModels: function () {
            return this.collectionitems
        },
        getNextCollectionModel: function (e) {
            var t = this.collectionitems.indexOf(e), n = -1;
            return t + 1 < this.collectionitems.length ? n = t + 1 : n = 0, this.collectionitems[n]
        },
        getPrevCollectionModel: function (e) {
            var t = this.collectionitems.indexOf(e), n = -1;
            return t - 1 >= 0 ? n = t - 1 : n = this.collectionitems.length - 1, this.collectionitems[n]
        },
        getCollectionItemDir: function (e, t) {
            for (var n = 0; n < this.collectionitems.length; n++) if (this.collectionitems[n].get("url") === e) {
                var r = this.getNextCollectionModel(this.collectionitems[n]);
                if (r.get("url") === t) return 1;
                var i = this.getPrevCollectionModel(this.collectionitems[n]);
                if (i.get("url") === t) return -1
            }
        },
        addCustomizerModel: function (e) {
            this.customizeritems.push(e)
        },
        getCustomizerModel: function (e) {
            for (var t = 0; t < this.customizeritems.length; t++) if (this.customizeritems[t].get("url") === e) return this.customizeritems[t]
        },
        addQuote: function (e, t) {
            this.quotes.push([e, t])
        },
        getQuotes: function () {
            return this.quotes
        },
        getQuoteForSection: function (e) {
            for (var t = 0; t < this.quotes.length; t++) if (this.quotes[t][1] === e) return this.quotes[t]
        },
        getLanguageModel: function () {
            return this.languageModel
        },
        getLetterSizesModel: function () {
            return this.letterSizesModel
        }
    });
    return new s
}), this.createjs = this.createjs || {}, function () {
    "use strict";
    var e = createjs.PreloadJS = createjs.PreloadJS || {};
    e.version = "0.6.0", e.buildDate = "Thu, 11 Dec 2014 23:32:09 GMT"
}(), this.createjs = this.createjs || {}, createjs.extend = function (e, t) {
    "use strict";

    function n() {
        this.constructor = e
    }

    return n.prototype = t.prototype, e.prototype = new n
}, this.createjs = this.createjs || {}, createjs.promote = function (e, t) {
    "use strict";
    var n = e.prototype, r = Object.getPrototypeOf && Object.getPrototypeOf(n) || n.__proto__;
    if (r) {
        n[(t += "_") + "constructor"] = r.constructor;
        for (var i in r) n.hasOwnProperty(i) && typeof r[i] == "function" && (n[t + i] = r[i])
    }
    return e
}, this.createjs = this.createjs || {}, createjs.indexOf = function (e, t) {
    "use strict";
    for (var n = 0, r = e.length; n < r; n++) if (t === e[n]) return n;
    return -1
}, this.createjs = this.createjs || {}, function () {
    "use strict";
    createjs.proxy = function (e, t) {
        var n = Array.prototype.slice.call(arguments, 2);
        return function () {
            return e.apply(t, Array.prototype.slice.call(arguments, 0).concat(n))
        }
    }
}(), this.createjs = this.createjs || {}, function () {
    "use strict";

    function e() {
        throw"BrowserDetect cannot be instantiated"
    }

    var t = e.agent = window.navigator.userAgent;
    e.isWindowPhone = t.indexOf("IEMobile") > -1 || t.indexOf("Windows Phone") > -1, e.isFirefox = t.indexOf("Firefox") > -1, e.isOpera = window.opera != null, e.isChrome = t.indexOf("Chrome") > -1, e.isIOS = (t.indexOf("iPod") > -1 || t.indexOf("iPhone") > -1 || t.indexOf("iPad") > -1) && !e.isWindowPhone, e.isAndroid = t.indexOf("Android") > -1 && !e.isWindowPhone, e.isBlackberry = t.indexOf("Blackberry") > -1, createjs.BrowserDetect = e
}(), this.createjs = this.createjs || {}, function () {
    "use strict";

    function e(e, t, n) {
        this.type = e, this.target = null, this.currentTarget = null, this.eventPhase = 0, this.bubbles = !!t, this.cancelable = !!n, this.timeStamp = (new Date).getTime(), this.defaultPrevented = !1, this.propagationStopped = !1, this.immediatePropagationStopped = !1, this.removed = !1
    }

    var t = e.prototype;
    t.preventDefault = function () {
        this.defaultPrevented = this.cancelable && !0
    }, t.stopPropagation = function () {
        this.propagationStopped = !0
    }, t.stopImmediatePropagation = function () {
        this.immediatePropagationStopped = this.propagationStopped = !0
    }, t.remove = function () {
        this.removed = !0
    }, t.clone = function () {
        return new e(this.type, this.bubbles, this.cancelable)
    }, t.set = function (e) {
        for (var t in e) this[t] = e[t];
        return this
    }, t.toString = function () {
        return "[Event (type=" + this.type + ")]"
    }, createjs.Event = e
}(), this.createjs = this.createjs || {}, function () {
    "use strict";

    function e(e, t, n) {
        this.Event_constructor("error"), this.title = e, this.message = t, this.data = n
    }

    var t = createjs.extend(e, createjs.Event);
    t.clone = function () {
        return new createjs.ErrorEvent(this.title, this.message, this.data)
    }, createjs.ErrorEvent = createjs.promote(e, "Event")
}(), this.createjs = this.createjs || {}, function () {
    "use strict";

    function e() {
        this._listeners = null, this._captureListeners = null
    }

    var t = e.prototype;
    e.initialize = function (e) {
        e.addEventListener = t.addEventListener, e.on = t.on, e.removeEventListener = e.off = t.removeEventListener, e.removeAllEventListeners = t.removeAllEventListeners, e.hasEventListener = t.hasEventListener, e.dispatchEvent = t.dispatchEvent, e._dispatchEvent = t._dispatchEvent, e.willTrigger = t.willTrigger
    }, t.addEventListener = function (e, t, n) {
        var r;
        n ? r = this._captureListeners = this._captureListeners || {} : r = this._listeners = this._listeners || {};
        var i = r[e];
        return i && this.removeEventListener(e, t, n), i = r[e], i ? i.push(t) : r[e] = [t], t
    }, t.on = function (e, t, n, r, i, s) {
        return t.handleEvent && (n = n || t, t = t.handleEvent), n = n || this, this.addEventListener(e, function (e) {
            t.call(n, e, i), r && e.remove()
        }, s)
    }, t.removeEventListener = function (e, t, n) {
        var r = n ? this._captureListeners : this._listeners;
        if (!r) return;
        var i = r[e];
        if (!i) return;
        for (var s = 0, o = i.length; s < o; s++) if (i[s] == t) {
            o == 1 ? delete r[e] : i.splice(s, 1);
            break
        }
    }, t.off = t.removeEventListener, t.removeAllEventListeners = function (e) {
        e ? (this._listeners && delete this._listeners[e], this._captureListeners && delete this._captureListeners[e]) : this._listeners = this._captureListeners = null
    }, t.dispatchEvent = function (e) {
        if (typeof e == "string") {
            var t = this._listeners;
            if (!t || !t[e]) return !1;
            e = new createjs.Event(e)
        } else e.target && e.clone && (e = e.clone());
        try {
            e.target = this
        } catch (n) {
        }
        if (!e.bubbles || !this.parent) this._dispatchEvent(e, 2); else {
            var r = this, i = [r];
            while (r.parent) i.push(r = r.parent);
            var s, o = i.length;
            for (s = o - 1; s >= 0 && !e.propagationStopped; s--) i[s]._dispatchEvent(e, 1 + (s == 0));
            for (s = 1; s < o && !e.propagationStopped; s++) i[s]._dispatchEvent(e, 3)
        }
        return e.defaultPrevented
    }, t.hasEventListener = function (e) {
        var t = this._listeners, n = this._captureListeners;
        return !!(t && t[e] || n && n[e])
    }, t.willTrigger = function (e) {
        var t = this;
        while (t) {
            if (t.hasEventListener(e)) return !0;
            t = t.parent
        }
        return !1
    }, t.toString = function () {
        return "[EventDispatcher]"
    }, t._dispatchEvent = function (e, t) {
        var n, r = t == 1 ? this._captureListeners : this._listeners;
        if (e && r) {
            var i = r[e.type];
            if (!i || !(n = i.length)) return;
            try {
                e.currentTarget = this
            } catch (s) {
            }
            try {
                e.eventPhase = t
            } catch (s) {
            }
            e.removed = !1, i = i.slice();
            for (var o = 0; o < n && !e.immediatePropagationStopped; o++) {
                var u = i[o];
                u.handleEvent ? u.handleEvent(e) : u(e), e.removed && (this.off(e.type, u, t == 1), e.removed = !1)
            }
        }
    }, createjs.EventDispatcher = e
}(), this.createjs = this.createjs || {}, function (e) {
    "use strict";

    function t(e, t) {
        this.Event_constructor("progress"), this.loaded = e, this.total = t == null ? 1 : t, this.progress = t == 0 ? 0 : this.loaded / this.total
    }

    var n = createjs.extend(t, createjs.Event);
    n.clone = function () {
        return new createjs.ProgressEvent(this.loaded, this.total)
    }, createjs.ProgressEvent = createjs.promote(t, "Event")
}(window), function () {
    function s(e, n) {
        function w(e) {
            if (w[e] !== g) return w[e];
            var t;
            if (e == "bug-string-char-index") t = "a"[0] != "a"; else if (e == "json") t = w("json-stringify") && w("json-parse"); else {
                var r, s = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                if (e == "json-stringify") {
                    var u = n.stringify, f = typeof u == "function" && y;
                    if (f) {
                        (r = function () {
                            return 1
                        }).toJSON = r;
                        try {
                            f = u(0) === "0" && u(new i) === "0" && u(new o) == '""' && u(d) === g && u(g) === g && u() === g && u(r) === "1" && u([r]) == "[1]" && u([g]) == "[null]" && u(null) == "null" && u([g, d, null]) == "[null,null,null]" && u({a: [r, true, false, null, "\0\b\n\f\r	"]}) == s && u(null, r) === "1" && u([1, 2], null, 1) == "[\n 1,\n 2\n]" && u(new a(-864e13)) == '"-271821-04-20T00:00:00.000Z"' && u(new a(864e13)) == '"+275760-09-13T00:00:00.000Z"' && u(new a(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"' && u(new a(-1)) == '"1969-12-31T23:59:59.999Z"'
                        } catch (l) {
                            f = !1
                        }
                    }
                    t = f
                }
                if (e == "json-parse") {
                    var c = n.parse;
                    if (typeof c == "function") try {
                        if (c("0") === 0 && !c(!1)) {
                            r = c(s);
                            var h = r["a"].length == 5 && r.a[0] === 1;
                            if (h) {
                                try {
                                    h = !c('"	"')
                                } catch (l) {
                                }
                                if (h) try {
                                    h = c("01") !== 1
                                } catch (l) {
                                }
                                if (h) try {
                                    h = c("1.") !== 1
                                } catch (l) {
                                }
                            }
                        }
                    } catch (l) {
                        h = !1
                    }
                    t = h
                }
            }
            return w[e] = !!t
        }

        e || (e = r.Object()), n || (n = r.Object());
        var i = e.Number || r.Number, o = e.String || r.String, u = e.Object || r.Object, a = e.Date || r.Date,
            f = e.SyntaxError || r.SyntaxError, l = e.TypeError || r.TypeError, c = e.Math || r.Math,
            h = e.JSON || r.JSON;
        typeof h == "object" && h && (n.stringify = h.stringify, n.parse = h.parse);
        var p = u.prototype, d = p.toString, v, m, g, y = new a(-0xc782b5b800cec);
        try {
            y = y.getUTCFullYear() == -109252 && y.getUTCMonth() === 0 && y.getUTCDate() === 1 && y.getUTCHours() == 10 && y.getUTCMinutes() == 37 && y.getUTCSeconds() == 6 && y.getUTCMilliseconds() == 708
        } catch (b) {
        }
        if (!w("json")) {
            var E = "[object Function]", S = "[object Date]", x = "[object Number]", T = "[object String]",
                N = "[object Array]", C = "[object Boolean]", k = w("bug-string-char-index");
            if (!y) var L = c.floor, A = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], O = function (e, t) {
                return A[t] + 365 * (e - 1970) + L((e - 1969 + (t = +(t > 1))) / 4) - L((e - 1901 + t) / 100) + L((e - 1601 + t) / 400)
            };
            (v = p.hasOwnProperty) || (v = function (e) {
                var t = {}, n;
                return (t.__proto__ = null, t.__proto__ = {toString: 1}, t).toString != d ? v = function (e) {
                    var t = this.__proto__, n = e in (this.__proto__ = null, this);
                    return this.__proto__ = t, n
                } : (n = t.constructor, v = function (e) {
                    var t = (this.constructor || n).prototype;
                    return e in this && !(e in t && this[e] === t[e])
                }), t = null, v.call(this, e)
            }), m = function (e, n) {
                var r = 0, i, s, o;
                (i = function () {
                    this.valueOf = 0
                }).prototype.valueOf = 0, s = new i;
                for (o in s) v.call(s, o) && r++;
                return i = s = null, r ? r == 2 ? m = function (e, t) {
                    var n = {}, r = d.call(e) == E, i;
                    for (i in e) (!r || i != "prototype") && !v.call(n, i) && (n[i] = 1) && v.call(e, i) && t(i)
                } : m = function (e, t) {
                    var n = d.call(e) == E, r, i;
                    for (r in e) (!n || r != "prototype") && v.call(e, r) && !(i = r === "constructor") && t(r);
                    (i || v.call(e, r = "constructor")) && t(r)
                } : (s = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"], m = function (e, n) {
                    var r = d.call(e) == E, i, o,
                        u = !r && typeof e.constructor != "function" && t[typeof e.hasOwnProperty] && e.hasOwnProperty || v;
                    for (i in e) (!r || i != "prototype") && u.call(e, i) && n(i);
                    for (o = s.length; i = s[--o]; u.call(e, i) && n(i)) ;
                }), m(e, n)
            };
            if (!w("json-stringify")) {
                var M = {92: "\\\\", 34: '\\"', 8: "\\b", 12: "\\f", 10: "\\n", 13: "\\r", 9: "\\t"}, _ = "000000",
                    D = function (e, t) {
                        return (_ + (t || 0)).slice(-e)
                    }, P = "\\u00", H = function (e) {
                        var t = '"', n = 0, r = e.length, i = !k || r > 10, s = i && (k ? e.split("") : e);
                        for (; n < r; n++) {
                            var o = e.charCodeAt(n);
                            switch (o) {
                                case 8:
                                case 9:
                                case 10:
                                case 12:
                                case 13:
                                case 34:
                                case 92:
                                    t += M[o];
                                    break;
                                default:
                                    if (o < 32) {
                                        t += P + D(2, o.toString(16));
                                        break
                                    }
                                    t += i ? s[n] : e.charAt(n)
                            }
                        }
                        return t + '"'
                    }, B = function (e, t, n, r, i, s, o) {
                        var u, a, f, c, h, p, y, b, w, E, k, A, M, _, P, j;
                        try {
                            u = t[e]
                        } catch (F) {
                        }
                        if (typeof u == "object" && u) {
                            a = d.call(u);
                            if (a == S && !v.call(u, "toJSON")) if (u > -1 / 0 && u < 1 / 0) {
                                if (O) {
                                    h = L(u / 864e5);
                                    for (f = L(h / 365.2425) + 1970 - 1; O(f + 1, 0) <= h; f++) ;
                                    for (c = L((h - O(f, 0)) / 30.42); O(f, c + 1) <= h; c++) ;
                                    h = 1 + h - O(f, c), p = (u % 864e5 + 864e5) % 864e5, y = L(p / 36e5) % 24, b = L(p / 6e4) % 60, w = L(p / 1e3) % 60, E = p % 1e3
                                } else f = u.getUTCFullYear(), c = u.getUTCMonth(), h = u.getUTCDate(), y = u.getUTCHours(), b = u.getUTCMinutes(), w = u.getUTCSeconds(), E = u.getUTCMilliseconds();
                                u = (f <= 0 || f >= 1e4 ? (f < 0 ? "-" : "+") + D(6, f < 0 ? -f : f) : D(4, f)) + "-" + D(2, c + 1) + "-" + D(2, h) + "T" + D(2, y) + ":" + D(2, b) + ":" + D(2, w) + "." + D(3, E) + "Z"
                            } else u = null; else typeof u.toJSON == "function" && (a != x && a != T && a != N || v.call(u, "toJSON")) && (u = u.toJSON(e))
                        }
                        n && (u = n.call(t, e, u));
                        if (u === null) return "null";
                        a = d.call(u);
                        if (a == C) return "" + u;
                        if (a == x) return u > -1 / 0 && u < 1 / 0 ? "" + u : "null";
                        if (a == T) return H("" + u);
                        if (typeof u == "object") {
                            for (_ = o.length; _--;) if (o[_] === u) throw l();
                            o.push(u), k = [], P = s, s += i;
                            if (a == N) {
                                for (M = 0, _ = u.length; M < _; M++) A = B(M, u, n, r, i, s, o), k.push(A === g ? "null" : A);
                                j = k.length ? i ? "[\n" + s + k.join(",\n" + s) + "\n" + P + "]" : "[" + k.join(",") + "]" : "[]"
                            } else m(r || u, function (e) {
                                var t = B(e, u, n, r, i, s, o);
                                t !== g && k.push(H(e) + ":" + (i ? " " : "") + t)
                            }), j = k.length ? i ? "{\n" + s + k.join(",\n" + s) + "\n" + P + "}" : "{" + k.join(",") + "}" : "{}";
                            return o.pop(), j
                        }
                    };
                n.stringify = function (e, n, r) {
                    var i, s, o, u;
                    if (t[typeof n] && n) if ((u = d.call(n)) == E) s = n; else if (u == N) {
                        o = {};
                        for (var a = 0, f = n.length, l; a < f; l = n[a++], (u = d.call(l), u == T || u == x) && (o[l] = 1)) ;
                    }
                    if (r) if ((u = d.call(r)) == x) {
                        if ((r -= r % 1) > 0) for (i = "", r > 10 && (r = 10); i.length < r; i += " ") ;
                    } else u == T && (i = r.length <= 10 ? r : r.slice(0, 10));
                    return B("", (l = {}, l[""] = e, l), s, o, i, "", [])
                }
            }
            if (!w("json-parse")) {
                var j = o.fromCharCode,
                    F = {92: "\\", 34: '"', 47: "/", 98: "\b", 116: "	", 110: "\n", 102: "\f", 114: "\r"}, I, q,
                    R = function () {
                        throw I = q = null, f()
                    }, U = function () {
                        var e = q, t = e.length, n, r, i, s, o;
                        while (I < t) {
                            o = e.charCodeAt(I);
                            switch (o) {
                                case 9:
                                case 10:
                                case 13:
                                case 32:
                                    I++;
                                    break;
                                case 123:
                                case 125:
                                case 91:
                                case 93:
                                case 58:
                                case 44:
                                    return n = k ? e.charAt(I) : e[I], I++, n;
                                case 34:
                                    for (n = "@", I++; I < t;) {
                                        o = e.charCodeAt(I);
                                        if (o < 32) R(); else if (o == 92) {
                                            o = e.charCodeAt(++I);
                                            switch (o) {
                                                case 92:
                                                case 34:
                                                case 47:
                                                case 98:
                                                case 116:
                                                case 110:
                                                case 102:
                                                case 114:
                                                    n += F[o], I++;
                                                    break;
                                                case 117:
                                                    r = ++I;
                                                    for (i = I + 4; I < i; I++) o = e.charCodeAt(I), o >= 48 && o <= 57 || o >= 97 && o <= 102 || o >= 65 && o <= 70 || R();
                                                    n += j("0x" + e.slice(r, I));
                                                    break;
                                                default:
                                                    R()
                                            }
                                        } else {
                                            if (o == 34) break;
                                            o = e.charCodeAt(I), r = I;
                                            while (o >= 32 && o != 92 && o != 34) o = e.charCodeAt(++I);
                                            n += e.slice(r, I)
                                        }
                                    }
                                    if (e.charCodeAt(I) == 34) return I++, n;
                                    R();
                                default:
                                    r = I, o == 45 && (s = !0, o = e.charCodeAt(++I));
                                    if (o >= 48 && o <= 57) {
                                        o == 48 && (o = e.charCodeAt(I + 1), o >= 48 && o <= 57) && R(), s = !1;
                                        for (; I < t && (o = e.charCodeAt(I), o >= 48 && o <= 57); I++) ;
                                        if (e.charCodeAt(I) == 46) {
                                            i = ++I;
                                            for (; i < t && (o = e.charCodeAt(i), o >= 48 && o <= 57); i++) ;
                                            i == I && R(), I = i
                                        }
                                        o = e.charCodeAt(I);
                                        if (o == 101 || o == 69) {
                                            o = e.charCodeAt(++I), (o == 43 || o == 45) && I++;
                                            for (i = I; i < t && (o = e.charCodeAt(i), o >= 48 && o <= 57); i++) ;
                                            i == I && R(), I = i
                                        }
                                        return +e.slice(r, I)
                                    }
                                    s && R();
                                    if (e.slice(I, I + 4) == "true") return I += 4, !0;
                                    if (e.slice(I, I + 5) == "false") return I += 5, !1;
                                    if (e.slice(I, I + 4) == "null") return I += 4, null;
                                    R()
                            }
                        }
                        return "$"
                    }, z = function (e) {
                        var t, n;
                        e == "$" && R();
                        if (typeof e == "string") {
                            if ((k ? e.charAt(0) : e[0]) == "@") return e.slice(1);
                            if (e == "[") {
                                t = [];
                                for (; ; n || (n = !0)) {
                                    e = U();
                                    if (e == "]") break;
                                    n && (e == "," ? (e = U(), e == "]" && R()) : R()), e == "," && R(), t.push(z(e))
                                }
                                return t
                            }
                            if (e == "{") {
                                t = {};
                                for (; ; n || (n = !0)) {
                                    e = U();
                                    if (e == "}") break;
                                    n && (e == "," ? (e = U(), e == "}" && R()) : R()), (e == "," || typeof e != "string" || (k ? e.charAt(0) : e[0]) != "@" || U() != ":") && R(), t[e.slice(1)] = z(U())
                                }
                                return t
                            }
                            R()
                        }
                        return e
                    }, W = function (e, t, n) {
                        var r = X(e, t, n);
                        r === g ? delete e[t] : e[t] = r
                    }, X = function (e, t, n) {
                        var r = e[t], i;
                        if (typeof r == "object" && r) if (d.call(r) == N) for (i = r.length; i--;) W(r, i, n); else m(r, function (e) {
                            W(r, e, n)
                        });
                        return n.call(e, t, r)
                    };
                n.parse = function (e, t) {
                    var n, r;
                    return I = 0, q = "" + e, n = z(U()), U() != "$" && R(), I = q = null, t && d.call(t) == E ? X((r = {}, r[""] = n, r), "", t) : n
                }
            }
        }
        return n.runInContext = s, n
    }

    var e = typeof define == "function" && define.amd, t = {"function": !0, object: !0},
        n = t[typeof exports] && exports && !exports.nodeType && exports, r = t[typeof window] && window || this,
        i = n && t[typeof module] && module && !module.nodeType && typeof global == "object" && global;
    i && (i.global === i || i.window === i || i.self === i) && (r = i);
    if (n && !e) s(r, n); else {
        var o = r.JSON, u = r.JSON3, a = !1, f = s(r, r.JSON3 = {
            noConflict: function () {
                return a || (a = !0, r.JSON = o, r.JSON3 = u, o = u = null), f
            }
        });
        r.JSON = {parse: f.parse, stringify: f.stringify}
    }
    e && define("libs/createjs/preloadjs", [], function () {
        return f
    })
}.call(this), function () {
    var e = {};
    e.parseXML = function (e, t) {
        var n = null;
        try {
            if (window.DOMParser) {
                var r = new DOMParser;
                n = r.parseFromString(e, t)
            } else n = new ActiveXObject("Microsoft.XMLDOM"), n.async = !1, n.loadXML(e)
        } catch (i) {
        }
        return n
    }, e.parseJSON = function (e) {
        if (e == null) return null;
        try {
            return JSON.parse(e)
        } catch (t) {
            throw t
        }
    }, createjs.DataUtils = e
}(), this.createjs = this.createjs || {}, function () {
    "use strict";

    function e() {
        this.src = null, this.type = null, this.id = null, this.maintainOrder = !1, this.callback = null, this.data = null, this.method = createjs.LoadItem.GET, this.values = null, this.headers = null, this.withCredentials = !1, this.mimeType = null, this.crossOrigin = null, this.loadTimeout = 8e3
    }

    var t = e.prototype = {}, n = e;
    n.create = function (t) {
        if (typeof t == "string") {
            var r = new e;
            return r.src = t, r
        }
        if (t instanceof n) return t;
        if (t instanceof Object) return t;
        throw new Error("Type not recognized.")
    }, t.set = function (e) {
        for (var t in e) this[t] = e[t];
        return this
    }, createjs.LoadItem = n
}(), function () {
    var e = {};
    e.ABSOLUTE_PATT = /^(?:\w+:)?\/{2}/i, e.RELATIVE_PATT = /^[./]*?\//i, e.EXTENSION_PATT = /\/?[^/]+\.(\w{1,5})$/i, e.parseURI = function (t) {
        var n = {absolute: !1, relative: !1};
        if (t == null) return n;
        var r = t.indexOf("?");
        r > -1 && (t = t.substr(0, r));
        var i;
        e.ABSOLUTE_PATT.test(t) ? n.absolute = !0 : e.RELATIVE_PATT.test(t) && (n.relative = !0);
        if (i = t.match(e.EXTENSION_PATT)) n.extension = i[1].toLowerCase();
        return n
    }, e.formatQueryString = function (e, t) {
        if (e == null) throw new Error("You must specify data.");
        var n = [];
        for (var r in e) n.push(r + "=" + escape(e[r]));
        return t && (n = n.concat(t)), n.join("&")
    }, e.buildPath = function (e, t) {
        if (t == null) return e;
        var n = [], r = e.indexOf("?");
        if (r != -1) {
            var i = e.slice(r + 1);
            n = n.concat(i.split("&"))
        }
        return r != -1 ? e.slice(0, r) + "?" + this._formatQueryString(t, n) : e + "?" + this._formatQueryString(t, n)
    }, e.isCrossDomain = function (e) {
        var t = document.createElement("a");
        t.href = e.src;
        var n = document.createElement("a");
        n.href = location.href;
        var r = t.hostname != "" && (t.port != n.port || t.protocol != n.protocol || t.hostname != n.hostname);
        return r
    }, e.isLocal = function (e) {
        var t = document.createElement("a");
        return t.href = e.src, t.hostname == "" && t.protocol == "file:"
    }, e.isBinary = function (e) {
        switch (e) {
            case createjs.AbstractLoader.IMAGE:
            case createjs.AbstractLoader.BINARY:
                return !0;
            default:
                return !1
        }
    }, e.isImageTag = function (e) {
        return e instanceof HTMLImageElement
    }, e.isAudioTag = function (e) {
        return window.HTMLAudioElement ? e instanceof HTMLAudioElement : !1
    }, e.isVideoTag = function (e) {
        if (window.HTMLVideoElement) return e instanceof HTMLVideoElement;
        !1
    }, e.isText = function (e) {
        switch (e) {
            case createjs.AbstractLoader.TEXT:
            case createjs.AbstractLoader.JSON:
            case createjs.AbstractLoader.MANIFEST:
            case createjs.AbstractLoader.XML:
            case createjs.AbstractLoader.CSS:
            case createjs.AbstractLoader.SVG:
            case createjs.AbstractLoader.JAVASCRIPT:
                return !0;
            default:
                return !1
        }
    }, e.getTypeByExtension = function (e) {
        if (e == null) return createjs.AbstractLoader.TEXT;
        switch (e.toLowerCase()) {
            case"jpeg":
            case"jpg":
            case"gif":
            case"png":
            case"webp":
            case"bmp":
                return createjs.AbstractLoader.IMAGE;
            case"ogg":
            case"mp3":
            case"webm":
                return createjs.AbstractLoader.SOUND;
            case"mp4":
            case"webm":
            case"ts":
                return createjs.AbstractLoader.VIDEO;
            case"json":
                return createjs.AbstractLoader.JSON;
            case"xml":
                return createjs.AbstractLoader.XML;
            case"css":
                return createjs.AbstractLoader.CSS;
            case"js":
                return createjs.AbstractLoader.JAVASCRIPT;
            case"svg":
                return createjs.AbstractLoader.SVG;
            default:
                return createjs.AbstractLoader.TEXT
        }
    }, createjs.RequestUtils = e
}(), this.createjs = this.createjs || {}, function () {
    "use strict";

    function e(e, t, n) {
        this.EventDispatcher_constructor(), this.loaded = !1, this.canceled = !1, this.progress = 0, this.type = n, this.resultFormatter = null, e ? this._item = createjs.LoadItem.create(e) : this._item = null, this._preferXHR = t, this._result = null, this._rawResult = null, this._loadedItems = null, this._tagSrcAttribute = null, this._tag = null
    }

    var t = createjs.extend(e, createjs.EventDispatcher), n = e;
    n.POST = "POST", n.GET = "GET", n.BINARY = "binary", n.CSS = "css", n.IMAGE = "image", n.JAVASCRIPT = "javascript", n.JSON = "json", n.JSONP = "jsonp", n.MANIFEST = "manifest", n.SOUND = "sound", n.VIDEO = "video", n.SPRITESHEET = "spritesheet", n.SVG = "svg", n.TEXT = "text", n.XML = "xml", t.getItem = function () {
        return this._item
    }, t.getResult = function (e) {
        return e ? this._rawResult : this._result
    }, t.getTag = function () {
        return this._tag
    }, t.setTag = function (e) {
        this._tag = e
    }, t.load = function () {
        this._createRequest(), this._request.on("complete", this, this), this._request.on("progress", this, this), this._request.on("loadStart", this, this), this._request.on("abort", this, this), this._request.on("timeout", this, this), this._request.on("error", this, this);
        var e = new createjs.Event("initialize");
        e.loader = this._request, this.dispatchEvent(e), this._request.load()
    }, t.cancel = function () {
        this.canceled = !0, this.destroy()
    }, t.destroy = function () {
        this._request && (this._request.removeAllEventListeners(), this._request.destroy()), this._request = null, this._item = null, this._rawResult = null, this._result = null, this._loadItems = null, this.removeAllEventListeners()
    }, t.getLoadedItems = function () {
        return this._loadedItems
    }, t._createRequest = function () {
        this._preferXHR ? this._request = new createjs.XHRRequest(this._item) : this._request = new createjs.TagRequest(this._item, this._tag || this._createTag(), this._tagSrcAttribute)
    }, t._createTag = function (e) {
        return null
    }, t._sendLoadStart = function () {
        if (this._isCanceled()) return;
        this.dispatchEvent("loadstart")
    }, t._sendProgress = function (e) {
        if (this._isCanceled()) return;
        var t = null;
        if (typeof e == "number") this.progress = e, t = new createjs.ProgressEvent(this.progress); else {
            t = e, this.progress = e.loaded / e.total, t.progress = this.progress;
            if (isNaN(this.progress) || this.progress == Infinity) this.progress = 0
        }
        this.hasEventListener("progress") && this.dispatchEvent(t)
    }, t._sendComplete = function () {
        if (this._isCanceled()) return;
        this.loaded = !0;
        var e = new createjs.Event("complete");
        e.rawResult = this._rawResult, this._result != null && (e.result = this._result), this.dispatchEvent(e)
    }, t._sendError = function (e) {
        if (this._isCanceled() || !this.hasEventListener("error")) return;
        e == null && (e = new createjs.ErrorEvent("PRELOAD_ERROR_EMPTY")), this.dispatchEvent(e)
    }, t._isCanceled = function () {
        return window.createjs == null || this.canceled ? !0 : !1
    }, t.resultFormatter = null, t.handleEvent = function (e) {
        switch (e.type) {
            case"complete":
                this._rawResult = e.target._response;
                var t = this.resultFormatter && this.resultFormatter(this), n = this;
                t instanceof Function ? t(function (e) {
                    n._result = e, n._sendComplete()
                }) : (this._result = t || this._rawResult, this._sendComplete());
                break;
            case"progress":
                this._sendProgress(e);
                break;
            case"error":
                this._sendError(e);
                break;
            case"loadstart":
                this._sendLoadStart();
                break;
            case"abort":
            case"timeout":
                this._isCanceled() || this.dispatchEvent(e.type)
        }
    }, t.buildPath = function (e, t) {
        return createjs.RequestUtils.buildPath(e, t)
    }, t.toString = function () {
        return "[PreloadJS AbstractLoader]"
    }, createjs.AbstractLoader = createjs.promote(e, "EventDispatcher")
}(), this.createjs = this.createjs || {}, function () {
    "use strict";

    function e(e, t, n) {
        this.AbstractLoader_constructor(e, t, n), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "src"
    }

    var t = createjs.extend(e, createjs.AbstractLoader);
    t.load = function () {
        this._tag || (this._tag = this._createTag(this._item.src)), this._tag.preload = "auto", this._tag.load(), this.AbstractLoader_load()
    }, t._createTag = function () {
    }, t._createRequest = function () {
        this._preferXHR ? this._request = new createjs.XHRRequest(this._item) : this._request = new createjs.MediaTagRequest(this._item, this._tag || this._createTag(), this._tagSrcAttribute)
    }, t._formatResult = function (e) {
        return this._tag.removeEventListener && this._tag.removeEventListener("canplaythrough", this._loadedHandler), this._tag.onstalled = null, this._preferXHR && (e.getTag().src = e.getResult(!0)), e.getTag()
    }, createjs.AbstractMediaLoader = createjs.promote(e, "AbstractLoader")
}(), this.createjs = this.createjs || {}, function () {
    "use strict";
    var e = function (e) {
        this._item = e
    }, t = createjs.extend(e, createjs.EventDispatcher);
    t.load = function () {
    }, t.destroy = function () {
    }, t.cancel = function () {
    }, createjs.AbstractRequest = createjs.promote(e, "EventDispatcher")
}(), this.createjs = this.createjs || {}, function () {
    "use strict";

    function e(e, t, n) {
        this.AbstractRequest_constructor(e), this._tag = t, this._tagSrcAttribute = n, this._loadedHandler = createjs.proxy(this._handleTagComplete, this), this._addedToDOM = !1, this._startTagVisibility = null
    }

    var t = createjs.extend(e, createjs.AbstractRequest);
    t.load = function () {
        this._tag.parentNode == null && (window.document.body.appendChild(this._tag), this._addedToDOM = !0), this._tag.onload = createjs.proxy(this._handleTagComplete, this), this._tag.onreadystatechange = createjs.proxy(this._handleReadyStateChange, this);
        var e = new createjs.Event("initialize");
        e.loader = this._tag, this.dispatchEvent(e), this._hideTag(), this._tag[this._tagSrcAttribute] = this._item.src
    }, t.destroy = function () {
        this._clean(), this._tag = null, this.AbstractRequest_destroy()
    }, t._handleReadyStateChange = function () {
        clearTimeout(this._loadTimeout);
        var e = this._tag;
        (e.readyState == "loaded" || e.readyState == "complete") && this._handleTagComplete()
    }, t._handleTagComplete = function () {
        this._rawResult = this._tag, this._result = this.resultFormatter && this.resultFormatter(this) || this._rawResult, this._clean(), this._showTag(), this.dispatchEvent("complete")
    }, t._clean = function () {
        this._tag.onload = null, this._tag.onreadystatechange = null, this._addedToDOM && this._tag.parentNode != null && this._tag.parentNode.removeChild(this._tag)
    }, t._hideTag = function () {
        this._startTagVisibility = this._tag.style.visibility, this._tag.style.visibility = "hidden"
    }, t._showTag = function () {
        this._tag.style.visibility = this._startTagVisibility
    }, t._handleStalled = function () {
    }, createjs.TagRequest = createjs.promote(e, "AbstractRequest")
}(), this.createjs = this.createjs || {}, function () {
    "use strict";

    function e(e, t, n) {
        this.AbstractRequest_constructor(e), this._tag = t, this._tagSrcAttribute = n, this._loadedHandler = createjs.proxy(this._handleTagComplete, this)
    }

    var t = createjs.extend(e, createjs.TagRequest), n = e;
    t.load = function () {
        this._tag.onstalled = createjs.proxy(this._handleStalled, this), this._tag.onprogress = createjs.proxy(this._handleProgress, this), this._tag.addEventListener && this._tag.addEventListener("canplaythrough", this._loadedHandler, !1), this.TagRequest_load()
    }, t._handleReadyStateChange = function () {
        clearTimeout(this._loadTimeout);
        var e = this._tag;
        (e.readyState == "loaded" || e.readyState == "complete") && this._handleTagComplete()
    }, t._handleStalled = function () {
    }, t._handleProgress = function (e) {
        if (!e || e.loaded > 0 && e.total == 0) return;
        var t = new createjs.ProgressEvent(e.loaded, e.total);
        this.dispatchEvent(t)
    }, t._clean = function () {
        this._tag.removeEventListener && this._tag.removeEventListener("canplaythrough", this._loadedHandler), this._tag.onstalled = null, this._tag.onprogress = null, this.TagRequest__clean()
    }, createjs.MediaTagRequest = createjs.promote(e, "TagRequest")
}(), this.createjs = this.createjs || {}, function () {
    "use strict";

    function e(e) {
        this.AbstractRequest_constructor(e), this._request = null, this._loadTimeout = null, this._xhrLevel = 1, this._response = null, this._rawResponse = null, this._canceled = !1, this._handleLoadStartProxy = createjs.proxy(this._handleLoadStart, this), this._handleProgressProxy = createjs.proxy(this._handleProgress, this), this._handleAbortProxy = createjs.proxy(this._handleAbort, this), this._handleErrorProxy = createjs.proxy(this._handleError, this), this._handleTimeoutProxy = createjs.proxy(this._handleTimeout, this), this._handleLoadProxy = createjs.proxy(this._handleLoad, this), this._handleReadyStateChangeProxy = createjs.proxy(this._handleReadyStateChange, this), !this._createXHR(e)
    }

    var t = createjs.extend(e, createjs.AbstractRequest);
    e.ACTIVEX_VERSIONS = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.5.0", "Msxml2.XMLHTTP.4.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], t.getResult = function (e) {
        return e && this._rawResponse ? this._rawResponse : this._response
    }, t.cancel = function () {
        this.canceled = !0, this._clean(), this._request.abort()
    }, t.load = function () {
        if (this._request == null) {
            this._handleError();
            return
        }
        this._request.addEventListener("loadstart", this._handleLoadStartProxy, !1), this._request.addEventListener("progress", this._handleProgressProxy, !1), this._request.addEventListener("abort", this._handleAbortProxy, !1), this._request.addEventListener("error", this._handleErrorProxy, !1), this._request.addEventListener("timeout", this._handleTimeoutProxy, !1), this._request.addEventListener("load", this._handleLoadProxy, !1), this._request.addEventListener("readystatechange", this._handleReadyStateChangeProxy, !1), this._xhrLevel == 1 && (this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout));
        try {
            !this._item.values || this._item.method == createjs.AbstractLoader.GET ? this._request.send() : this._item.method == createjs.AbstractLoader.POST && this._request.send(createjs.RequestUtils.formatQueryString(this._item.values))
        } catch (e) {
            this.dispatchEvent(new createjs.ErrorEvent("XHR_SEND", null, e))
        }
    }, t.setResponseType = function (e) {
        this._request.responseType = e
    }, t.getAllResponseHeaders = function () {
        return this._request.getAllResponseHeaders instanceof Function ? this._request.getAllResponseHeaders() : null
    }, t.getResponseHeader = function (e) {
        return this._request.getResponseHeader instanceof Function ? this._request.getResponseHeader(e) : null
    }, t._handleProgress = function (e) {
        if (!e || e.loaded > 0 && e.total == 0) return;
        var t = new createjs.ProgressEvent(e.loaded, e.total);
        this.dispatchEvent(t)
    }, t._handleLoadStart = function (e) {
        clearTimeout(this._loadTimeout), this.dispatchEvent("loadstart")
    }, t._handleAbort = function (e) {
        this._clean(), this.dispatchEvent(new createjs.ErrorEvent("XHR_ABORTED", null, e))
    }, t._handleError = function (e) {
        this._clean(), this.dispatchEvent(new createjs.ErrorEvent(e.message))
    }, t._handleReadyStateChange = function (e) {
        this._request.readyState == 4 && this._handleLoad()
    }, t._handleLoad = function (e) {
        if (this.loaded) return;
        this.loaded = !0;
        var t = this._checkError();
        if (t) {
            this._handleError(t);
            return
        }
        this._response = this._getResponse(), this._clean(), this.dispatchEvent(new createjs.Event("complete"))
    }, t._handleTimeout = function (e) {
        this._clean(), this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_TIMEOUT", null, e))
    }, t._checkError = function () {
        var e = parseInt(this._request.status);
        switch (e) {
            case 404:
            case 0:
                return new Error(e)
        }
        return null
    }, t._getResponse = function () {
        if (this._response != null) return this._response;
        if (this._request.response != null) return this._request.response;
        try {
            if (this._request.responseText != null) return this._request.responseText
        } catch (e) {
        }
        try {
            if (this._request.responseXML != null) return this._request.responseXML
        } catch (e) {
        }
        return null
    }, t._createXHR = function (e) {
        var t = createjs.RequestUtils.isCrossDomain(e), n = {}, r = null;
        if (window.XMLHttpRequest) r = new XMLHttpRequest, t && r.withCredentials === undefined && window.XDomainRequest && (r = new XDomainRequest); else {
            for (var i = 0, o = s.ACTIVEX_VERSIONS.length; i < o; i++) {
                var u = s.ACTIVEX_VERSIONS[i];
                try {
                    r = new ActiveXObject(axVersions);
                    break
                } catch (a) {
                }
            }
            if (r == null) return !1
        }
        e.mimeType && r.overrideMimeType && r.overrideMimeType(e.mimeType), this._xhrLevel = typeof r.responseType == "string" ? 2 : 1;
        var f = null;
        e.method == createjs.AbstractLoader.GET ? f = createjs.RequestUtils.buildPath(e.src, e.values) : f = e.src, r.open(e.method || createjs.AbstractLoader.GET, f, !0), t && r instanceof XMLHttpRequest && this._xhrLevel == 1 && (n.Origin = location.origin), e.values && e.method == createjs.AbstractLoader.POST && (n["Content-Type"] = "application/x-www-form-urlencoded"), !t && !n["X-Requested-With"] && (n["X-Requested-With"] = "XMLHttpRequest");
        if (e.headers) for (var l in e.headers) n[l] = e.headers[l];
        for (l in n) r.setRequestHeader(l, n[l]);
        return r instanceof XMLHttpRequest && e.withCredentials !== undefined && (r.withCredentials = e.withCredentials), this._request = r, !0
    }, t._clean = function () {
        clearTimeout(this._loadTimeout), this._request.removeEventListener("loadstart", this._handleLoadStartProxy), this._request.removeEventListener("progress", this._handleProgressProxy), this._request.removeEventListener("abort", this._handleAbortProxy), this._request.removeEventListener("error", this._handleErrorProxy), this._request.removeEventListener("timeout", this._handleTimeoutProxy), this._request.removeEventListener("load", this._handleLoadProxy), this._request.removeEventListener("readystatechange", this._handleReadyStateChangeProxy)
    }, t.toString = function () {
        return "[PreloadJS XHRRequest]"
    }, createjs.XHRRequest = createjs.promote(e, "AbstractRequest")
}(), this.createjs = this.createjs || {}, function () {
    "use strict";

    function e(e, t, n) {
        this.AbstractLoader_constructor(), this.init(e, t, n)
    }

    var t = createjs.extend(e, createjs.AbstractLoader), n = e;
    t.init = function (e, t, n) {
        this.useXHR = !0, this.preferXHR = !0, this._preferXHR = !0, this.setPreferXHR(e), this.stopOnError = !1, this.maintainScriptOrder = !0, this.next = null, this._paused = !1, this._basePath = t, this._crossOrigin = n, this._typeCallbacks = {}, this._extensionCallbacks = {}, this._loadStartWasDispatched = !1, this._maxConnections = 1, this._currentlyLoadingScript = null, this._currentLoads = [], this._loadQueue = [], this._loadQueueBackup = [], this._loadItemsById = {}, this._loadItemsBySrc = {}, this._loadedResults = {}, this._loadedRawResults = {}, this._numItems = 0, this._numItemsLoaded = 0, this._scriptOrder = [], this._loadedScripts = [], this._lastProgress = NaN, this._availableLoaders = [createjs.ImageLoader, createjs.JavaScriptLoader, createjs.CSSLoader, createjs.JSONLoader, createjs.JSONPLoader, createjs.SoundLoader, createjs.ManifestLoader, createjs.SpriteSheetLoader, createjs.XMLLoader, createjs.SVGLoader, createjs.BinaryLoader, createjs.VideoLoader, createjs.TextLoader], this._defaultLoaderLength = this._availableLoaders.length
    }, n.loadTimeout = 8e3, n.LOAD_TIMEOUT = 0, n.BINARY = createjs.AbstractLoader.BINARY, n.CSS = createjs.AbstractLoader.CSS, n.IMAGE = createjs.AbstractLoader.IMAGE, n.JAVASCRIPT = createjs.AbstractLoader.JAVASCRIPT, n.JSON = createjs.AbstractLoader.JSON, n.JSONP = createjs.AbstractLoader.JSONP, n.MANIFEST = createjs.AbstractLoader.MANIFEST, n.SOUND = createjs.AbstractLoader.SOUND, n.VIDEO = createjs.AbstractLoader.VIDEO, n.SVG = createjs.AbstractLoader.SVG, n.TEXT = createjs.AbstractLoader.TEXT, n.XML = createjs.AbstractLoader.XML, n.POST = createjs.AbstractLoader.POST, n.GET = createjs.AbstractLoader.GET, t.registerLoader = function (e) {
        if (!e || !e.canLoadItem) throw new Error("loader is of an incorrect type.");
        if (this._availableLoaders.indexOf(e) != -1) throw new Error("loader already exists.");
        this._availableLoaders.unshift(e)
    }, t.unregisterLoader = function (e) {
        var t = this._availableLoaders.indexOf(e);
        t != -1 && t < this._defaultLoaderLength - 1 && this._availableLoaders.splice(t, 1)
    }, t.setUseXHR = function (e) {
        return this.setPreferXHR(e)
    }, t.setPreferXHR = function (e) {
        return this.preferXHR = e != 0 && window.XMLHttpRequest != null, this.preferXHR
    }, t.removeAll = function () {
        this.remove()
    }, t.remove = function (e) {
        var t = null;
        if (!e || e instanceof Array) {
            if (e) t = e; else if (arguments.length > 0) return
        } else t = [e];
        var n = !1;
        if (!t) {
            this.close();
            for (var r in this._loadItemsById) this._disposeItem(this._loadItemsById[r]);
            this.init(this.preferXHR, this._basePath)
        } else {
            while (t.length) {
                var i = t.pop(), s = this.getResult(i);
                for (o = this._loadQueue.length - 1; o >= 0; o--) {
                    u = this._loadQueue[o].getItem();
                    if (u.id == i || u.src == i) {
                        this._loadQueue.splice(o, 1)[0].cancel();
                        break
                    }
                }
                for (o = this._loadQueueBackup.length - 1; o >= 0; o--) {
                    u = this._loadQueueBackup[o].getItem();
                    if (u.id == i || u.src == i) {
                        this._loadQueueBackup.splice(o, 1)[0].cancel();
                        break
                    }
                }
                if (s) delete this._loadItemsById[s.id], delete this._loadItemsBySrc[s.src], this._disposeItem(s); else for (var o = this._currentLoads.length - 1; o >= 0; o--) {
                    var u = this._currentLoads[o].getItem();
                    if (u.id == i || u.src == i) {
                        this._currentLoads.splice(o, 1)[0].cancel(), n = !0;
                        break
                    }
                }
            }
            n && this._loadNext()
        }
    }, t.reset = function () {
        this.close();
        for (var e in this._loadItemsById) this._disposeItem(this._loadItemsById[e]);
        var t = [];
        for (var n = 0, r = this._loadQueueBackup.length; n < r; n++) t.push(this._loadQueueBackup[n].getItem());
        this.loadManifest(t, !1)
    }, t.installPlugin = function (e) {
        if (e == null) return;
        if (e.getPreloadHandlers != null) {
            var t = e.getPreloadHandlers();
            t.scope = e;
            if (t.types != null) for (var n = 0, r = t.types.length; n < r; n++) this._typeCallbacks[t.types[n]] = t;
            if (t.extensions != null) for (n = 0, r = t.extensions.length; n < r; n++) this._extensionCallbacks[t.extensions[n]] = t
        }
    }, t.setMaxConnections = function (e) {
        this._maxConnections = e, !this._paused && this._loadQueue.length > 0 && this._loadNext()
    }, t.loadFile = function (e, t, n) {
        if (e == null) {
            var r = new createjs.ErrorEvent("PRELOAD_NO_FILE");
            this._sendError(r);
            return
        }
        this._addItem(e, null, n), t !== !1 ? this.setPaused(!1) : this.setPaused(!0)
    }, t.loadManifest = function (e, t, r) {
        var i = null, o = null;
        if (e instanceof Array) {
            if (e.length == 0) {
                var u = new createjs.ErrorEvent("PRELOAD_MANIFEST_EMPTY");
                this._sendError(u);
                return
            }
            i = e
        } else if (typeof e == "string") i = [{src: e, type: n.MANIFEST}]; else {
            if (typeof e != "object") {
                var u = new createjs.ErrorEvent("PRELOAD_MANIFEST_NULL");
                this._sendError(u);
                return
            }
            if (e.src !== undefined) {
                if (e.type == null) e.type = n.MANIFEST; else if (e.type != n.MANIFEST) {
                    var u = new createjs.ErrorEvent("PRELOAD_MANIFEST_TYPE");
                    this._sendError(u)
                }
                i = [e]
            } else e.manifest !== undefined && (i = e.manifest, o = e.path)
        }
        for (var a = 0, f = i.length; a < f; a++) this._addItem(i[a], o, r);
        t !== !1 ? this.setPaused(!1) : this.setPaused(!0)
    }, t.load = function () {
        this.setPaused(!1)
    }, t.getItem = function (e) {
        return this._loadItemsById[e] || this._loadItemsBySrc[e]
    }, t.getResult = function (e, t) {
        var n = this._loadItemsById[e] || this._loadItemsBySrc[e];
        if (n == null) return null;
        var r = n.id;
        return t && this._loadedRawResults[r] ? this._loadedRawResults[r] : this._loadedResults[r]
    }, t.getItems = function (e) {
        var t = [];
        for (var n = 0, r = this._loadQueueBackup.length; n < r; n++) {
            var i = this._loadQueueBackup[n], s = i.getItem();
            if (e === !0 && !i.loaded) continue;
            t.push({item: s, result: this.getResult(s.id), rawResult: this.getResult(s.id, !0)})
        }
        return t
    }, t.setPaused = function (e) {
        this._paused = e, this._paused || this._loadNext()
    }, t.close = function () {
        while (this._currentLoads.length) this._currentLoads.pop().cancel();
        this._scriptOrder.length = 0, this._loadedScripts.length = 0, this.loadStartWasDispatched = !1, this._itemCount = 0, this._lastProgress = NaN
    }, t._addItem = function (e, t, n) {
        var r = this._createLoadItem(e, t, n);
        if (r == null) return;
        var i = this._createLoader(r);
        if (i != null) {
            r._loader = i, this._loadQueue.push(i), this._loadQueueBackup.push(i), this._numItems++, this._updateProgress();
            if (this.maintainScriptOrder && r.type == createjs.LoadQueue.JAVASCRIPT || r.maintainOrder === !0) this._scriptOrder.push(r), this._loadedScripts.push(null)
        }
    }, t._createLoadItem = function (e, t, r) {
        var i = createjs.LoadItem.create(e);
        if (i == null) return null;
        var o = createjs.RequestUtils.parseURI(i.src);
        o.extension && (i.ext = o.extension), i.type == null && (i.type = createjs.RequestUtils.getTypeByExtension(i.ext));
        var u = "", a = r || this._basePath, f = i.src;
        if (!o.absolute && !o.relative) if (t) {
            u = t;
            var l = createjs.RequestUtils.parseURI(t);
            f = t + f, a != null && !l.absolute && !l.relative && (u = a + u)
        } else a != null && (u = a);
        i.src = u + i.src, i.path = u;
        if (i.id === undefined || i.id === null || i.id === "") i.id = f;
        var c = this._typeCallbacks[i.type] || this._extensionCallbacks[i.ext];
        if (c) {
            var h = c.callback.call(c.scope, i, this);
            if (h === !1) return null;
            h !== !0 && h != null && (i._loader = h), o = createjs.RequestUtils.parseURI(i.src), o.extension != null && (i.ext = o.extension)
        }
        return this._loadItemsById[i.id] = i, this._loadItemsBySrc[i.src] = i, i.loadTimeout == null && (i.loadTimeout = n.loadTimeout), i.crossOrigin == null && (i.crossOrigin = this._crossOrigin), i
    }, t._createLoader = function (e) {
        if (e._loader != null) return e._loader;
        var t = this.preferXHR;
        for (var n = 0; n < this._availableLoaders.length; n++) {
            var r = this._availableLoaders[n];
            if (r && r.canLoadItem(e)) return new r(e, t)
        }
        return null
    }, t._loadNext = function () {
        if (this._paused) return;
        this._loadStartWasDispatched || (this._sendLoadStart(), this._loadStartWasDispatched = !0), this._numItems == this._numItemsLoaded ? (this.loaded = !0, this._sendComplete(), this.next && this.next.load && this.next.load()) : this.loaded = !1;
        for (var e = 0; e < this._loadQueue.length; e++) {
            if (this._currentLoads.length >= this._maxConnections) break;
            var t = this._loadQueue[e];
            if (!this._canStartLoad(t)) continue;
            this._loadQueue.splice(e, 1), e--, this._loadItem(t)
        }
    }, t._loadItem = function (e) {
        e.on("fileload", this._handleFileLoad, this), e.on("progress", this._handleProgress, this), e.on("complete", this._handleFileComplete, this), e.on("error", this._handleError, this), e.on("fileerror", this._handleFileError, this), this._currentLoads.push(e), this._sendFileStart(e.getItem()), e.load()
    }, t._handleFileLoad = function (e) {
        e.target = null, this.dispatchEvent(e)
    }, t._handleFileError = function (e) {
        var t = new createjs.ErrorEvent("FILE_LOAD_ERROR", null, e.item);
        this._sendError(t)
    }, t._handleError = function (e) {
        var t = e.target;
        this._numItemsLoaded++, this._finishOrderedItem(t, !0), this._updateProgress();
        var n = new createjs.ErrorEvent("FILE_LOAD_ERROR", null, t.getItem());
        this._sendError(n), this.stopOnError || (this._removeLoadItem(t), this._loadNext())
    }, t._handleFileComplete = function (e) {
        var t = e.target, n = t.getItem(), r = t.getResult();
        this._loadedResults[n.id] = r;
        var i = t.getResult(!0);
        i != null && i !== r && (this._loadedRawResults[n.id] = i), this._saveLoadedItems(t), this._removeLoadItem(t), this._finishOrderedItem(t) || this._processFinishedLoad(n, t)
    }, t._saveLoadedItems = function (e) {
        var t = e.getLoadedItems();
        if (t === null) return;
        for (var n = 0; n < t.length; n++) {
            var r = t[n].item;
            this._loadItemsBySrc[r.src] = r, this._loadItemsById[r.id] = r, this._loadedResults[r.id] = t[n].result, this._loadedRawResults[r.id] = t[n].rawResult
        }
    }, t._finishOrderedItem = function (e, t) {
        var n = e.getItem();
        if (this.maintainScriptOrder && n.type == createjs.LoadQueue.JAVASCRIPT || n.maintainOrder) {
            e instanceof createjs.JavaScriptLoader && (this._currentlyLoadingScript = !1);
            var r = createjs.indexOf(this._scriptOrder, n);
            return r == -1 ? !1 : (this._loadedScripts[r] = t === !0 ? !0 : n, this._checkScriptLoadOrder(), !0)
        }
        return !1
    }, t._checkScriptLoadOrder = function () {
        var e = this._loadedScripts.length;
        for (var t = 0; t < e; t++) {
            var n = this._loadedScripts[t];
            if (n === null) break;
            if (n === !0) continue;
            var r = this._loadedResults[n.id];
            n.type == createjs.LoadQueue.JAVASCRIPT && (document.body || document.getElementsByTagName("body")[0]).appendChild(r);
            var i = n._loader;
            this._processFinishedLoad(n, i), this._loadedScripts[t] = !0
        }
    }, t._processFinishedLoad = function (e, t) {
        this._numItemsLoaded++, this._updateProgress(), this._sendFileComplete(e, t), this._loadNext()
    }, t._canStartLoad = function (e) {
        if (!this.maintainScriptOrder || e.preferXHR) return !0;
        var t = e.getItem();
        if (t.type != createjs.LoadQueue.JAVASCRIPT) return !0;
        if (this._currentlyLoadingScript) return !1;
        var n = this._scriptOrder.indexOf(t), r = 0;
        while (r < n) {
            var i = this._loadedScripts[r];
            if (i == null) return !1;
            r++
        }
        return this._currentlyLoadingScript = !0, !0
    }, t._removeLoadItem = function (e) {
        var t = e.getItem();
        delete t._loader;
        var n = this._currentLoads.length;
        for (var r = 0; r < n; r++) if (this._currentLoads[r] == e) {
            this._currentLoads.splice(r, 1);
            break
        }
    }, t._handleProgress = function (e) {
        var t = e.target;
        this._sendFileProgress(t.getItem(), t.progress), this._updateProgress()
    }, t._updateProgress = function () {
        var e = this._numItemsLoaded / this._numItems, t = this._numItems - this._numItemsLoaded;
        if (t > 0) {
            var n = 0;
            for (var r = 0, i = this._currentLoads.length; r < i; r++) n += this._currentLoads[r].progress;
            e += n / t * (t / this._numItems)
        }
        this._lastProgress != e && (this._sendProgress(e), this._lastProgress = e)
    }, t._disposeItem = function (e) {
        delete this._loadedResults[e.id], delete this._loadedRawResults[e.id], delete this._loadItemsById[e.id], delete this._loadItemsBySrc[e.src]
    }, t._sendFileProgress = function (e, t) {
        if (this._isCanceled()) {
            this._cleanUp();
            return
        }
        if (!this.hasEventListener("fileprogress")) return;
        var n = new createjs.Event("fileprogress");
        n.progress = t, n.loaded = t, n.total = 1, n.item = e, this.dispatchEvent(n)
    }, t._sendFileComplete = function (e, t) {
        if (this._isCanceled()) return;
        var n = new createjs.Event("fileload");
        n.loader = t, n.item = e, n.result = this._loadedResults[e.id], n.rawResult = this._loadedRawResults[e.id], e.completeHandler && e.completeHandler(n), this.hasEventListener("fileload") && this.dispatchEvent(n)
    }, t._sendFileStart = function (e) {
        var t = new createjs.Event("filestart");
        t.item = e, this.hasEventListener("filestart") && this.dispatchEvent(t)
    }, t.toString = function () {
        return "[PreloadJS LoadQueue]"
    }, createjs.LoadQueue = createjs.promote(e, "AbstractLoader")
}(), this.createjs = this.createjs || {}, function () {
    "use strict";

    function e(e) {
        this.AbstractLoader_constructor(e, !0, createjs.AbstractLoader.TEXT)
    }

    var t = createjs.extend(e, createjs.AbstractLoader), n = e;
    n.canLoadItem = function (e) {
        return e.type == createjs.AbstractLoader.TEXT
    }, createjs.TextLoader = createjs.promote(e, "AbstractLoader")
}(), this.createjs = this.createjs || {}, function () {
    "use strict";

    function e(e) {
        this.AbstractLoader_constructor(e, !0, createjs.AbstractLoader.BINARY), this.on("initialize", this._updateXHR, this)
    }

    var t = createjs.extend(e, createjs.AbstractLoader), n = e;
    n.canLoadItem = function (e) {
        return e.type == createjs.AbstractLoader.BINARY
    }, t._updateXHR = function (e) {
        e.loader.setResponseType("arraybuffer")
    }, createjs.BinaryLoader = createjs.promote(e, "AbstractLoader")
}(), this.createjs = this.createjs || {}, function () {
    "use strict";

    function e(e, t) {
        this.AbstractLoader_constructor(e, t, createjs.AbstractLoader.CSS), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "href", t ? this._tag = document.createElement("style") : this._tag = document.createElement("link"), this._tag.rel = "stylesheet", this._tag.type = "text/css"
    }

    var t = createjs.extend(e, createjs.AbstractLoader), n = e;
    n.canLoadItem = function (e) {
        return e.type == createjs.AbstractLoader.CSS
    }, t._formatResult = function (e) {
        if (this._preferXHR) {
            var t = e.getTag(), n = document.getElementsByTagName("head")[0];
            n.appendChild(t);
            if (t.styleSheet) t.styleSheet.cssText = e.getResult(!0); else {
                var r = document.createTextNode(e.getResult(!0));
                t.appendChild(r)
            }
        } else t = this._tag;
        return t
    }, createjs.CSSLoader = createjs.promote(e, "AbstractLoader")
}(), this.createjs = this.createjs || {}, function () {
    "use strict";

    function e(e, t) {
        this.AbstractLoader_constructor(e, t, createjs.AbstractLoader.IMAGE), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "src", createjs.RequestUtils.isImageTag(e) ? this._tag = e : createjs.RequestUtils.isImageTag(e.src) ? this._tag = e.src : createjs.RequestUtils.isImageTag(e.tag) && (this._tag = e.tag), this._tag != null ? this._preferXHR = !1 : this._tag = document.createElement("img"), this.on("initialize", this._updateXHR, this)
    }

    var t = createjs.extend(e, createjs.AbstractLoader), n = e;
    n.canLoadItem = function (e) {
        return e.type == createjs.AbstractLoader.IMAGE
    }, t.load = function () {
        if (this._tag.src != "" && this._tag.complete) {
            this._sendComplete();
            return
        }
        var e = this._item.crossOrigin;
        e == 1 && (e = "Anonymous"), e != null && !createjs.RequestUtils.isLocal(this._item.src) && (this._tag.crossOrigin = e), this.AbstractLoader_load()
    }, t._updateXHR = function (e) {
        e.loader.mimeType = "text/plain; charset=x-user-defined-binary", e.loader.setResponseType && e.loader.setResponseType("blob")
    }, t._formatResult = function (e) {
        var t = this;
        return function (n) {
            var r = t._tag, i = window.URL || window.webkitURL;
            if (!!t._preferXHR) if (i) {
                var s = i.createObjectURL(e.getResult(!0));
                r.src = s, r.onload = function () {
                    i.revokeObjectURL(t.src)
                }
            } else r.src = e.getItem().src;
            r.complete ? n(r) : r.onload = function () {
                n(this)
            }
        }
    }, createjs.ImageLoader = createjs.promote(e, "AbstractLoader")
}(), this.createjs = this.createjs || {}, function () {
    "use strict";

    function e(e, t) {
        this.AbstractLoader_constructor(e, t, createjs.AbstractLoader.JAVASCRIPT), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "src", this.setTag(document.createElement("script"))
    }

    var t = createjs.extend(e, createjs.AbstractLoader), n = e;
    n.canLoadItem = function (e) {
        return e.type == createjs.AbstractLoader.JAVASCRIPT
    }, t._formatResult = function (e) {
        var t = e.getTag();
        return this._preferXHR && (t.text = e.getResult(!0)), t
    }, createjs.JavaScriptLoader = createjs.promote(e, "AbstractLoader")
}(), this.createjs = this.createjs || {}, function () {
    "use strict";

    function e(e) {
        this.AbstractLoader_constructor(e, !0, createjs.AbstractLoader.JSON), this.resultFormatter = this._formatResult
    }

    var t = createjs.extend(e, createjs.AbstractLoader), n = e;
    n.canLoadItem = function (e) {
        return e.type == createjs.AbstractLoader.JSON && !e._loadAsJSONP
    }, t._formatResult = function (e) {
        var t = null;
        try {
            t = createjs.DataUtils.parseJSON(e.getResult(!0))
        } catch (n) {
            var r = new createjs.ErrorEvent("JSON_FORMAT", null, n);
            return this._sendError(r), n
        }
        return t
    }, createjs.JSONLoader = createjs.promote(e, "AbstractLoader")
}(), this.createjs = this.createjs || {}, function () {
    "use strict";

    function e(e) {
        this.AbstractLoader_constructor(e, !1, createjs.AbstractLoader.JSONP), this.setTag(document.createElement("script")), this.getTag().type = "text/javascript"
    }

    var t = createjs.extend(e, createjs.AbstractLoader), n = e;
    n.canLoadItem = function (e) {
        return e.type == createjs.AbstractLoader.JSONP || e._loadAsJSONP
    }, t.cancel = function () {
        this.AbstractLoader_cancel(), this._dispose()
    }, t.load = function () {
        if (this._item.callback == null) throw new Error("callback is required for loading JSONP requests.");
        if (window[this._item.callback] != null) throw new Error("JSONP callback '" + this._item.callback + "' already exists on window. You need to specify a different callback or re-name the current one.");
        window[this._item.callback] = createjs.proxy(this._handleLoad, this), window.document.body.appendChild(this._tag), this._tag.src = this._item.src
    }, t._handleLoad = function (e) {
        this._result = this._rawResult = e, this._sendComplete(), this._dispose()
    }, t._dispose = function () {
        window.document.body.removeChild(this._tag), delete window[this._item.callback]
    }, createjs.JSONPLoader = createjs.promote(e, "AbstractLoader")
}(), this.createjs = this.createjs || {}, function () {
    "use strict";

    function e(e) {
        this.AbstractLoader_constructor(e, null, createjs.AbstractLoader.MANIFEST), this._manifestQueue = null
    }

    var t = createjs.extend(e, createjs.AbstractLoader), n = e;
    n.MANIFEST_PROGRESS = .25, n.canLoadItem = function (e) {
        return e.type == createjs.AbstractLoader.MANIFEST
    }, t.load = function () {
        this.AbstractLoader_load()
    }, t._createRequest = function () {
        var e = this._item.callback;
        e != null ? this._request = new createjs.JSONPLoader(this._item) : this._request = new createjs.JSONLoader(this._item)
    }, t.handleEvent = function (e) {
        switch (e.type) {
            case"complete":
                this._rawResult = e.target.getResult(!0), this._result = e.target.getResult(), this._sendProgress(n.MANIFEST_PROGRESS), this._loadManifest(this._result);
                return;
            case"progress":
                e.loaded *= n.MANIFEST_PROGRESS, this.progress = e.loaded / e.total;
                if (isNaN(this.progress) || this.progress == Infinity) this.progress = 0;
                this._sendProgress(e);
                return
        }
        this.AbstractLoader_handleEvent(e)
    }, t.destroy = function () {
        this.AbstractLoader_destroy(), this._manifestQueue.close()
    }, t._loadManifest = function (e) {
        if (e && e.manifest) {
            var t = this._manifestQueue = new createjs.LoadQueue;
            t.on("fileload", this._handleManifestFileLoad, this), t.on("progress", this._handleManifestProgress, this), t.on("complete", this._handleManifestComplete, this, !0), t.on("error", this._handleManifestError, this, !0), t.loadManifest(e)
        } else this._sendComplete()
    }, t._handleManifestFileLoad = function (e) {
        e.target = null, this.dispatchEvent(e)
    }, t._handleManifestComplete = function (e) {
        this._loadedItems = this._manifestQueue.getItems(!0), this._sendComplete()
    }, t._handleManifestProgress = function (e) {
        this.progress = e.progress * (1 - n.MANIFEST_PROGRESS) + n.MANIFEST_PROGRESS, this._sendProgress(this.progress)
    }, t._handleManifestError = function (e) {
        var t = new createjs.Event("fileerror");
        t.item = e.data, this.dispatchEvent(t)
    }, createjs.ManifestLoader = createjs.promote(e, "AbstractLoader")
}(), this.createjs = this.createjs || {}, function () {
    "use strict";

    function e(e, t) {
        this.AbstractMediaLoader_constructor(e, t, createjs.AbstractLoader.SOUND), createjs.RequestUtils.isAudioTag(e) ? this._tag = e : createjs.RequestUtils.isAudioTag(e.src) ? this._tag = e : createjs.RequestUtils.isAudioTag(e.tag) && (this._tag = createjs.RequestUtils.isAudioTag(e) ? e : e.src), this._tag != null && (this._preferXHR = !1)
    }

    var t = createjs.extend(e, createjs.AbstractMediaLoader), n = e;
    n.canLoadItem = function (e) {
        return e.type == createjs.AbstractLoader.SOUND
    }, t._createTag = function (e) {
        var t = document.createElement("audio");
        return t.autoplay = !1, t.preload = "none", t.src = e, t
    }, createjs.SoundLoader = createjs.promote(e, "AbstractMediaLoader")
}(), this.createjs = this.createjs || {}, function () {
    "use strict";

    function e(e, t) {
        this.AbstractMediaLoader_constructor(e, t, createjs.AbstractLoader.VIDEO), createjs.RequestUtils.isVideoTag(e) || createjs.RequestUtils.isVideoTag(e.src) ? (this.setTag(createjs.RequestUtils.isVideoTag(e) ? e : e.src), this._preferXHR = !1) : this.setTag(this._createTag())
    }

    var t = createjs.extend(e, createjs.AbstractMediaLoader), n = e;
    t._createTag = function () {
        return document.createElement("video")
    }, n.canLoadItem = function (e) {
        return e.type == createjs.AbstractLoader.VIDEO
    }, createjs.VideoLoader = createjs.promote(e, "AbstractMediaLoader")
}(), this.createjs = this.createjs || {}, function () {
    "use strict";

    function e(e) {
        this.AbstractLoader_constructor(e, null, createjs.AbstractLoader.SPRITESHEET), this._manifestQueue = null
    }

    var t = createjs.extend(e, createjs.AbstractLoader), n = e;
    n.SPRITESHEET_PROGRESS = .25, n.canLoadItem = function (e) {
        return e.type == createjs.AbstractLoader.SPRITESHEET
    }, t.destroy = function () {
        this.AbstractLoader_destroy, this._manifestQueue.close()
    }, t._createRequest = function () {
        var e = this._item.callback;
        e != null && e instanceof Function ? this._request = new createjs.JSONPLoader(this._item) : this._request = new createjs.JSONLoader(this._item)
    }, t.handleEvent = function (e) {
        switch (e.type) {
            case"complete":
                this._rawResult = e.target.getResult(!0), this._result = e.target.getResult(), this._sendProgress(n.SPRITESHEET_PROGRESS), this._loadManifest(this._result);
                return;
            case"progress":
                e.loaded *= n.SPRITESHEET_PROGRESS, this.progress = e.loaded / e.total;
                if (isNaN(this.progress) || this.progress == Infinity) this.progress = 0;
                this._sendProgress(e);
                return
        }
        this.AbstractLoader_handleEvent(e)
    }, t._loadManifest = function (e) {
        if (e && e.images) {
            var t = this._manifestQueue = new createjs.LoadQueue;
            t.on("complete", this._handleManifestComplete, this, !0), t.on("fileload", this._handleManifestFileLoad, this), t.on("progress", this._handleManifestProgress, this), t.on("error", this._handleManifestError, this, !0), t.loadManifest(e.images)
        }
    }, t._handleManifestFileLoad = function (e) {
        var t = e.result;
        if (t != null) {
            var n = this.getResult().images, r = n.indexOf(e.item.src);
            n[r] = t
        }
    }, t._handleManifestComplete = function (e) {
        this._result = new createjs.SpriteSheet(this._result), this._loadedItems = this._manifestQueue.getItems(!0), this._sendComplete()
    }, t._handleManifestProgress = function (e) {
        this.progress = e.progress * (1 - n.SPRITESHEET_PROGRESS) + n.SPRITESHEET_PROGRESS, this._sendProgress(this.progress)
    }, t._handleManifestError = function (e) {
        var t = new createjs.Event("fileerror");
        t.item = e.data, this.dispatchEvent(t)
    }, createjs.SpriteSheetLoader = createjs.promote(e, "AbstractLoader")
}(), this.createjs = this.createjs || {}, function () {
    "use strict";

    function e(e, t) {
        this.AbstractLoader_constructor(e, t, createjs.AbstractLoader.SVG), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "data", t ? this.setTag(document.createElement("svg")) : (this.setTag(document.createElement("object")), this.getTag().type = "image/svg+xml"), this.getTag().style.visibility = "hidden"
    }

    var t = createjs.extend(e, createjs.AbstractLoader), n = e;
    n.canLoadItem = function (e) {
        return e.type == createjs.AbstractLoader.SVG
    }, t._formatResult = function (e) {
        var t = createjs.DataUtils.parseXML(e.getResult(!0), "text/xml"), n = e.getTag();
        return !this._preferXHR && document.body.contains(n) && document.body.removeChild(n), t.documentElement != null ? (n.appendChild(t.documentElement), n.style.visibility = "visible", n) : t
    }, createjs.SVGLoader = createjs.promote(e, "AbstractLoader")
}(), this.createjs = this.createjs || {}, function () {
    "use strict";

    function e(e) {
        this.AbstractLoader_constructor(e, !0, createjs.AbstractLoader.XML), this.resultFormatter = this._formatResult
    }

    var t = createjs.extend(e, createjs.AbstractLoader), n = e;
    n.canLoadItem = function (e) {
        return e.type == createjs.AbstractLoader.XML
    }, t._formatResult = function (e) {
        return createjs.DataUtils.parseXML(e.getResult(!0), "text/xml")
    }, createjs.XMLLoader = createjs.promote(e, "AbstractLoader")
}(), define("data/app_data", ["jquery", "libs/createjs/preloadjs", "config"], function (e, t, n) {
    var r = {PAGES: {}};
    return r.INITIAL_LOAD = [{
        src: n.ABSPATH + "assets/" + n.DISTPATH + "/./CDN_PATH/css/all.css",
        group: "initial",
        id: "/css/all.css",
        type: t.CSS
    }], r
}), this.createjs = this.createjs || {}, function () {
    var e = createjs.SoundJS = createjs.SoundJS || {};
    e.version = "0.6.0", e.buildDate = "Thu, 11 Dec 2014 23:32:09 GMT"
}(), this.createjs = this.createjs || {}, createjs.extend = function (e, t) {
    "use strict";

    function n() {
        this.constructor = e
    }

    return n.prototype = t.prototype, e.prototype = new n
}, this.createjs = this.createjs || {}, createjs.promote = function (e, t) {
    "use strict";
    var n = e.prototype, r = Object.getPrototypeOf && Object.getPrototypeOf(n) || n.__proto__;
    if (r) {
        n[(t += "_") + "constructor"] = r.constructor;
        for (var i in r) n.hasOwnProperty(i) && "function" == typeof r[i] && (n[t + i] = r[i])
    }
    return e
}, this.createjs = this.createjs || {}, createjs.indexOf = function (e, t) {
    "use strict";
    for (var n = 0, r = e.length; r > n; n++) if (t === e[n]) return n;
    return -1
}, this.createjs = this.createjs || {}, function () {
    "use strict";
    createjs.proxy = function (e, t) {
        var n = Array.prototype.slice.call(arguments, 2);
        return function () {
            return e.apply(t, Array.prototype.slice.call(arguments, 0).concat(n))
        }
    }
}(), this.createjs = this.createjs || {}, function () {
    "use strict";
    var e = Object.defineProperty ? !0 : !1, t = {};
    try {
        Object.defineProperty(t, "bar", {
            get: function () {
                return this._bar
            }, set: function (e) {
                this._bar = e
            }
        })
    } catch (n) {
        e = !1
    }
    createjs.definePropertySupported = e
}(), this.createjs = this.createjs || {}, function () {
    "use strict";

    function e() {
        throw"BrowserDetect cannot be instantiated"
    }

    var t = e.agent = window.navigator.userAgent;
    e.isWindowPhone = t.indexOf("IEMobile") > -1 || t.indexOf("Windows Phone") > -1, e.isFirefox = t.indexOf("Firefox") > -1, e.isOpera = null != window.opera, e.isChrome = t.indexOf("Chrome") > -1, e.isIOS = (t.indexOf("iPod") > -1 || t.indexOf("iPhone") > -1 || t.indexOf("iPad") > -1) && !e.isWindowPhone, e.isAndroid = t.indexOf("Android") > -1 && !e.isWindowPhone, e.isBlackberry = t.indexOf("Blackberry") > -1, createjs.BrowserDetect = e
}(), this.createjs = this.createjs || {}, function () {
    "use strict";

    function e() {
        this._listeners = null, this._captureListeners = null
    }

    var t = e.prototype;
    e.initialize = function (e) {
        e.addEventListener = t.addEventListener, e.on = t.on, e.removeEventListener = e.off = t.removeEventListener, e.removeAllEventListeners = t.removeAllEventListeners, e.hasEventListener = t.hasEventListener, e.dispatchEvent = t.dispatchEvent, e._dispatchEvent = t._dispatchEvent, e.willTrigger = t.willTrigger
    }, t.addEventListener = function (e, t, n) {
        var r;
        r = n ? this._captureListeners = this._captureListeners || {} : this._listeners = this._listeners || {};
        var i = r[e];
        return i && this.removeEventListener(e, t, n), i = r[e], i ? i.push(t) : r[e] = [t], t
    }, t.on = function (e, t, n, r, i, s) {
        return t.handleEvent && (n = n || t, t = t.handleEvent), n = n || this, this.addEventListener(e, function (e) {
            t.call(n, e, i), r && e.remove()
        }, s)
    }, t.removeEventListener = function (e, t, n) {
        var r = n ? this._captureListeners : this._listeners;
        if (r) {
            var i = r[e];
            if (i) for (var s = 0, o = i.length; o > s; s++) if (i[s] == t) {
                1 == o ? delete r[e] : i.splice(s, 1);
                break
            }
        }
    }, t.off = t.removeEventListener, t.removeAllEventListeners = function (e) {
        e ? (this._listeners && delete this._listeners[e], this._captureListeners && delete this._captureListeners[e]) : this._listeners = this._captureListeners = null
    }, t.dispatchEvent = function (e) {
        if ("string" == typeof e) {
            var t = this._listeners;
            if (!t || !t[e]) return !1;
            e = new createjs.Event(e)
        } else e.target && e.clone && (e = e.clone());
        try {
            e.target = this
        } catch (n) {
        }
        if (e.bubbles && this.parent) {
            for (var r = this, i = [r]; r.parent;) i.push(r = r.parent);
            var s, o = i.length;
            for (s = o - 1; s >= 0 && !e.propagationStopped; s--) i[s]._dispatchEvent(e, 1 + (0 == s));
            for (s = 1; o > s && !e.propagationStopped; s++) i[s]._dispatchEvent(e, 3)
        } else this._dispatchEvent(e, 2);
        return e.defaultPrevented
    }, t.hasEventListener = function (e) {
        var t = this._listeners, n = this._captureListeners;
        return !!(t && t[e] || n && n[e])
    }, t.willTrigger = function (e) {
        for (var t = this; t;) {
            if (t.hasEventListener(e)) return !0;
            t = t.parent
        }
        return !1
    }, t.toString = function () {
        return "[EventDispatcher]"
    }, t._dispatchEvent = function (e, t) {
        var n, r = 1 == t ? this._captureListeners : this._listeners;
        if (e && r) {
            var i = r[e.type];
            if (!i || !(n = i.length)) return;
            try {
                e.currentTarget = this
            } catch (s) {
            }
            try {
                e.eventPhase = t
            } catch (s) {
            }
            e.removed = !1, i = i.slice();
            for (var o = 0; n > o && !e.immediatePropagationStopped; o++) {
                var u = i[o];
                u.handleEvent ? u.handleEvent(e) : u(e), e.removed && (this.off(e.type, u, 1 == t), e.removed = !1)
            }
        }
    }, createjs.EventDispatcher = e
}(), this.createjs = this.createjs || {}, function () {
    "use strict";

    function e(e, t, n) {
        this.type = e, this.target = null, this.currentTarget = null, this.eventPhase = 0, this.bubbles = !!t, this.cancelable = !!n, this.timeStamp = (new Date).getTime(), this.defaultPrevented = !1, this.propagationStopped = !1, this.immediatePropagationStopped = !1, this.removed = !1
    }

    var t = e.prototype;
    t.preventDefault = function () {
        this.defaultPrevented = this.cancelable && !0
    }, t.stopPropagation = function () {
        this.propagationStopped = !0
    }, t.stopImmediatePropagation = function () {
        this.immediatePropagationStopped = this.propagationStopped = !0
    }, t.remove = function () {
        this.removed = !0
    }, t.clone = function () {
        return new e(this.type, this.bubbles, this.cancelable)
    }, t.set = function (e) {
        for (var t in e) this[t] = e[t];
        return this
    }, t.toString = function () {
        return "[Event (type=" + this.type + ")]"
    }, createjs.Event = e
}(), this.createjs = this.createjs || {}, function () {
    "use strict";

    function e(e, t, n) {
        this.Event_constructor("error"), this.title = e, this.message = t, this.data = n
    }

    var t = createjs.extend(e, createjs.Event);
    t.clone = function () {
        return new createjs.ErrorEvent(this.title, this.message, this.data)
    }, createjs.ErrorEvent = createjs.promote(e, "Event")
}(), this.createjs = this.createjs || {},function () {
    "use strict";

    function e(e, t) {
        this.Event_constructor("progress"), this.loaded = e, this.total = null == t ? 1 : t, this.progress = 0 == t ? 0 : this.loaded / this.total
    }

    var t = createjs.extend(e, createjs.Event);
    t.clone = function () {
        return new createjs.ProgressEvent(this.loaded, this.total)
    }, createjs.ProgressEvent = createjs.promote(e, "Event")
}(window),this.createjs = this.createjs || {},function () {
    "use strict";

    function e() {
        this.src = null, this.type = null, this.id = null, this.maintainOrder = !1, this.callback = null, this.data = null, this.method = createjs.LoadItem.GET, this.values = null, this.headers = null, this.withCredentials = !1, this.mimeType = null, this.crossOrigin = "Anonymous", this.loadTimeout = 8e3
    }

    var t = e.prototype = {}, n = e;
    n.create = function (t) {
        if ("string" == typeof t) {
            var r = new e;
            return r.src = t, r
        }
        if (t instanceof n) return t;
        if (t instanceof Object) return t;
        throw new Error("Type not recognized.")
    }, t.set = function (e) {
        for (var t in e) this[t] = e[t];
        return this
    }, createjs.LoadItem = n
}(),function () {
    var e = {};
    e.ABSOLUTE_PATT = /^(?:\w+:)?\/{2}/i, e.RELATIVE_PATT = /^[./]*?\//i, e.EXTENSION_PATT = /\/?[^/]+\.(\w{1,5})$/i, e.parseURI = function (t) {
        var n = {absolute: !1, relative: !1};
        if (null == t) return n;
        var r = t.indexOf("?");
        r > -1 && (t = t.substr(0, r));
        var i;
        return e.ABSOLUTE_PATT.test(t) ? n.absolute = !0 : e.RELATIVE_PATT.test(t) && (n.relative = !0), (i = t.match(e.EXTENSION_PATT)) && (n.extension = i[1].toLowerCase()), n
    }, e.formatQueryString = function (e, t) {
        if (null == e) throw new Error("You must specify data.");
        var n = [];
        for (var r in e) n.push(r + "=" + escape(e[r]));
        return t && (n = n.concat(t)), n.join("&")
    }, e.buildPath = function (e, t) {
        if (null == t) return e;
        var n = [], r = e.indexOf("?");
        if (-1 != r) {
            var i = e.slice(r + 1);
            n = n.concat(i.split("&"))
        }
        return -1 != r ? e.slice(0, r) + "?" + this._formatQueryString(t, n) : e + "?" + this._formatQueryString(t, n)
    }, e.isCrossDomain = function (e) {
        var t = document.createElement("a");
        t.href = e.src;
        var n = document.createElement("a");
        n.href = location.href;
        var r = "" != t.hostname && (t.port != n.port || t.protocol != n.protocol || t.hostname != n.hostname);
        return r
    }, e.isLocal = function (e) {
        var t = document.createElement("a");
        return t.href = e.src, "" == t.hostname && "file:" == t.protocol
    }, e.isBinary = function (e) {
        switch (e) {
            case createjs.AbstractLoader.IMAGE:
            case createjs.AbstractLoader.BINARY:
                return !0;
            default:
                return !1
        }
    }, e.isImageTag = function (e) {
        return e instanceof HTMLImageElement
    }, e.isAudioTag = function (e) {
        return window.HTMLAudioElement ? e instanceof HTMLAudioElement : !1
    }, e.isVideoTag = function (e) {
        return window.HTMLVideoElement ? e instanceof HTMLVideoElement : void 0
    }, e.isText = function (e) {
        switch (e) {
            case createjs.AbstractLoader.TEXT:
            case createjs.AbstractLoader.JSON:
            case createjs.AbstractLoader.MANIFEST:
            case createjs.AbstractLoader.XML:
            case createjs.AbstractLoader.CSS:
            case createjs.AbstractLoader.SVG:
            case createjs.AbstractLoader.JAVASCRIPT:
                return !0;
            default:
                return !1
        }
    }, e.getTypeByExtension = function (e) {
        if (null == e) return createjs.AbstractLoader.TEXT;
        switch (e.toLowerCase()) {
            case"jpeg":
            case"jpg":
            case"gif":
            case"png":
            case"webp":
            case"bmp":
                return createjs.AbstractLoader.IMAGE;
            case"ogg":
            case"mp3":
            case"webm":
                return createjs.AbstractLoader.SOUND;
            case"mp4":
            case"webm":
            case"ts":
                return createjs.AbstractLoader.VIDEO;
            case"json":
                return createjs.AbstractLoader.JSON;
            case"xml":
                return createjs.AbstractLoader.XML;
            case"css":
                return createjs.AbstractLoader.CSS;
            case"js":
                return createjs.AbstractLoader.JAVASCRIPT;
            case"svg":
                return createjs.AbstractLoader.SVG;
            default:
                return createjs.AbstractLoader.TEXT
        }
    }, createjs.RequestUtils = e
}(),this.createjs = this.createjs || {},function () {
    "use strict";

    function e(e, t, n) {
        this.EventDispatcher_constructor(), this.loaded = !1, this.canceled = !1, this.progress = 0, this.type = n, this.resultFormatter = null, this._item = e ? createjs.LoadItem.create(e) : null, this._preferXHR = t, this._result = null, this._rawResult = null, this._loadedItems = null, this._tagSrcAttribute = null, this._tag = null
    }

    var t = createjs.extend(e, createjs.EventDispatcher), n = e;
    n.POST = "POST", n.GET = "GET", n.BINARY = "binary", n.CSS = "css", n.IMAGE = "image", n.JAVASCRIPT = "javascript", n.JSON = "json", n.JSONP = "jsonp", n.MANIFEST = "manifest", n.SOUND = "sound", n.VIDEO = "video", n.SPRITESHEET = "spritesheet", n.SVG = "svg", n.TEXT = "text", n.XML = "xml", t.getItem = function () {
        return this._item
    }, t.getResult = function (e) {
        return e ? this._rawResult : this._result
    }, t.getTag = function () {
        return this._tag
    }, t.setTag = function (e) {
        this._tag = e
    }, t.load = function () {
        this._createRequest(), this._request.on("complete", this, this), this._request.on("progress", this, this), this._request.on("loadStart", this, this), this._request.on("abort", this, this), this._request.on("timeout", this, this), this._request.on("error", this, this);
        var e = new createjs.Event("initialize");
        e.loader = this._request, this.dispatchEvent(e), this._request.load()
    }, t.cancel = function () {
        this.canceled = !0, this.destroy()
    }, t.destroy = function () {
        this._request && (this._request.removeAllEventListeners(), this._request.destroy()), this._request = null, this._item = null, this._rawResult = null, this._result = null, this._loadItems = null, this.removeAllEventListeners()
    }, t.getLoadedItems = function () {
        return this._loadedItems
    }, t._createRequest = function () {
        this._request = this._preferXHR ? new createjs.XHRRequest(this._item) : new createjs.TagRequest(this._item, this._tag || this._createTag(), this._tagSrcAttribute)
    }, t._createTag = function () {
        return null
    }, t._sendLoadStart = function () {
        this._isCanceled() || this.dispatchEvent("loadstart")
    }, t._sendProgress = function (e) {
        if (!this._isCanceled()) {
            var t = null;
            "number" == typeof e ? (this.progress = e, t = new createjs.ProgressEvent(this.progress)) : (t = e, this.progress = e.loaded / e.total, t.progress = this.progress, (isNaN(this.progress) || 1 / 0 == this.progress) && (this.progress = 0)), this.hasEventListener("progress") && this.dispatchEvent(t)
        }
    }, t._sendComplete = function () {
        if (!this._isCanceled()) {
            this.loaded = !0;
            var e = new createjs.Event("complete");
            e.rawResult = this._rawResult, null != this._result && (e.result = this._result), this.dispatchEvent(e)
        }
    }, t._sendError = function (e) {
        !this._isCanceled() && this.hasEventListener("error") && (null == e && (e = new createjs.ErrorEvent("PRELOAD_ERROR_EMPTY")), this.dispatchEvent(e))
    }, t._isCanceled = function () {
        return null == window.createjs || this.canceled ? !0 : !1
    }, t.resultFormatter = null, t.handleEvent = function (e) {
        switch (e.type) {
            case"complete":
                this._rawResult = e.target._response;
                var t = this.resultFormatter && this.resultFormatter(this), n = this;
                t instanceof Function ? t(function (e) {
                    n._result = e, n._sendComplete()
                }) : (this._result = t || this._rawResult, this._sendComplete());
                break;
            case"progress":
                this._sendProgress(e);
                break;
            case"error":
                this._sendError(e);
                break;
            case"loadstart":
                this._sendLoadStart();
                break;
            case"abort":
            case"timeout":
                this._isCanceled() || this.dispatchEvent(e.type)
        }
    }, t.buildPath = function (e, t) {
        return createjs.RequestUtils.buildPath(e, t)
    }, t.toString = function () {
        return "[PreloadJS AbstractLoader]"
    }, createjs.AbstractLoader = createjs.promote(e, "EventDispatcher")
}(),this.createjs = this.createjs || {},function () {
    "use strict";

    function e(e, t, n) {
        this.AbstractLoader_constructor(e, t, n), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "src"
    }

    var t = createjs.extend(e, createjs.AbstractLoader);
    t.load = function () {
        this._tag || (this._tag = this._createTag(this._item.src)), this._tag.preload = "auto", this._tag.load(), this.AbstractLoader_load()
    }, t._createTag = function () {
    }, t._createRequest = function () {
        this._request = this._preferXHR ? new createjs.XHRRequest(this._item) : new createjs.MediaTagRequest(this._item, this._tag || this._createTag(), this._tagSrcAttribute)
    }, t._formatResult = function (e) {
        return this._tag.removeEventListener && this._tag.removeEventListener("canplaythrough", this._loadedHandler), this._tag.onstalled = null, this._preferXHR && (e.getTag().src = e.getResult(!0)), e.getTag()
    }, createjs.AbstractMediaLoader = createjs.promote(e, "AbstractLoader")
}(),this.createjs = this.createjs || {},function () {
    "use strict";
    var e = function (e) {
        this._item = e
    }, t = createjs.extend(e, createjs.EventDispatcher);
    t.load = function () {
    }, t.destroy = function () {
    }, t.cancel = function () {
    }, createjs.AbstractRequest = createjs.promote(e, "EventDispatcher")
}(),this.createjs = this.createjs || {},function () {
    "use strict";

    function e(e, t, n) {
        this.AbstractRequest_constructor(e), this._tag = t, this._tagSrcAttribute = n, this._loadedHandler = createjs.proxy(this._handleTagComplete, this), this._addedToDOM = !1, this._startTagVisibility = null
    }

    var t = createjs.extend(e, createjs.AbstractRequest);
    t.load = function () {
        null == this._tag.parentNode && (window.document.body.appendChild(this._tag), this._addedToDOM = !0), this._tag.onload = createjs.proxy(this._handleTagComplete, this), this._tag.onreadystatechange = createjs.proxy(this._handleReadyStateChange, this);
        var e = new createjs.Event("initialize");
        e.loader = this._tag, this.dispatchEvent(e), this._hideTag(), this._tag[this._tagSrcAttribute] = this._item.src
    }, t.destroy = function () {
        this._clean(), this._tag = null, this.AbstractRequest_destroy()
    }, t._handleReadyStateChange = function () {
        clearTimeout(this._loadTimeout);
        var e = this._tag;
        ("loaded" == e.readyState || "complete" == e.readyState) && this._handleTagComplete()
    }, t._handleTagComplete = function () {
        this._rawResult = this._tag, this._result = this.resultFormatter && this.resultFormatter(this) || this._rawResult, this._clean(), this._showTag(), this.dispatchEvent("complete")
    }, t._clean = function () {
        this._tag.onload = null, this._tag.onreadystatechange = null, this._addedToDOM && null != this._tag.parentNode && this._tag.parentNode.removeChild(this._tag)
    }, t._hideTag = function () {
        this._startTagVisibility = this._tag.style.visibility, this._tag.style.visibility = "hidden"
    }, t._showTag = function () {
        this._tag.style.visibility = this._startTagVisibility
    }, t._handleStalled = function () {
    }, createjs.TagRequest = createjs.promote(e, "AbstractRequest")
}(),this.createjs = this.createjs || {},function () {
    "use strict";

    function e(e, t, n) {
        this.AbstractRequest_constructor(e), this._tag = t, this._tagSrcAttribute = n, this._loadedHandler = createjs.proxy(this._handleTagComplete, this)
    }

    var t = createjs.extend(e, createjs.TagRequest);
    t.load = function () {
        this._tag.onstalled = createjs.proxy(this._handleStalled, this), this._tag.onprogress = createjs.proxy(this._handleProgress, this), this._tag.addEventListener && this._tag.addEventListener("canplaythrough", this._loadedHandler, !1), this.TagRequest_load()
    }, t._handleReadyStateChange = function () {
        clearTimeout(this._loadTimeout);
        var e = this._tag;
        ("loaded" == e.readyState || "complete" == e.readyState) && this._handleTagComplete()
    }, t._handleStalled = function () {
    }, t._handleProgress = function (e) {
        if (e && !(e.loaded > 0 && 0 == e.total)) {
            var t = new createjs.ProgressEvent(e.loaded, e.total);
            this.dispatchEvent(t)
        }
    }, t._clean = function () {
        this._tag.removeEventListener && this._tag.removeEventListener("canplaythrough", this._loadedHandler), this._tag.onstalled = null, this._tag.onprogress = null, this.TagRequest__clean()
    }, createjs.MediaTagRequest = createjs.promote(e, "TagRequest")
}(),this.createjs = this.createjs || {},function () {
    "use strict";

    function e(e) {
        this.AbstractRequest_constructor(e), this._request = null, this._loadTimeout = null, this._xhrLevel = 1, this._response = null, this._rawResponse = null, this._canceled = !1, this._handleLoadStartProxy = createjs.proxy(this._handleLoadStart, this), this._handleProgressProxy = createjs.proxy(this._handleProgress, this), this._handleAbortProxy = createjs.proxy(this._handleAbort, this), this._handleErrorProxy = createjs.proxy(this._handleError, this), this._handleTimeoutProxy = createjs.proxy(this._handleTimeout, this), this._handleLoadProxy = createjs.proxy(this._handleLoad, this), this._handleReadyStateChangeProxy = createjs.proxy(this._handleReadyStateChange, this), !this._createXHR(e)
    }

    var t = createjs.extend(e, createjs.AbstractRequest);
    e.ACTIVEX_VERSIONS = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.5.0", "Msxml2.XMLHTTP.4.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], t.getResult = function (e) {
        return e && this._rawResponse ? this._rawResponse : this._response
    }, t.cancel = function () {
        this.canceled = !0, this._clean(), this._request.abort()
    }, t.load = function () {
        if (null == this._request) return void this._handleError();
        this._request.addEventListener("loadstart", this._handleLoadStartProxy, !1), this._request.addEventListener("progress", this._handleProgressProxy, !1), this._request.addEventListener("abort", this._handleAbortProxy, !1), this._request.addEventListener("error", this._handleErrorProxy, !1), this._request.addEventListener("timeout", this._handleTimeoutProxy, !1), this._request.addEventListener("load", this._handleLoadProxy, !1), this._request.addEventListener("readystatechange", this._handleReadyStateChangeProxy, !1), 1 == this._xhrLevel && (this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout));
        try {
            this._item.values && this._item.method != createjs.AbstractLoader.GET ? this._item.method == createjs.AbstractLoader.POST && this._request.send(createjs.RequestUtils.formatQueryString(this._item.values)) : this._request.send()
        } catch (e) {
            this.dispatchEvent(new createjs.ErrorEvent("XHR_SEND", null, e))
        }
    }, t.setResponseType = function (e) {
        this._request.responseType = e
    }, t.getAllResponseHeaders = function () {
        return this._request.getAllResponseHeaders instanceof Function ? this._request.getAllResponseHeaders() : null
    }, t.getResponseHeader = function (e) {
        return this._request.getResponseHeader instanceof Function ? this._request.getResponseHeader(e) : null
    }, t._handleProgress = function (e) {
        if (e && !(e.loaded > 0 && 0 == e.total)) {
            var t = new createjs.ProgressEvent(e.loaded, e.total);
            this.dispatchEvent(t)
        }
    }, t._handleLoadStart = function () {
        clearTimeout(this._loadTimeout), this.dispatchEvent("loadstart")
    }, t._handleAbort = function (e) {
        this._clean(), this.dispatchEvent(new createjs.ErrorEvent("XHR_ABORTED", null, e))
    }, t._handleError = function (e) {
        this._clean(), this.dispatchEvent(new createjs.ErrorEvent(e.message))
    }, t._handleReadyStateChange = function () {
        4 == this._request.readyState && this._handleLoad()
    }, t._handleLoad = function () {
        if (!this.loaded) {
            this.loaded = !0;
            var e = this._checkError();
            if (e) return void this._handleError(e);
            this._response = this._getResponse(), this._clean(), this.dispatchEvent(new createjs.Event("complete"))
        }
    }, t._handleTimeout = function (e) {
        this._clean(), this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_TIMEOUT", null, e))
    }, t._checkError = function () {
        var e = parseInt(this._request.status);
        switch (e) {
            case 404:
            case 0:
                return new Error(e)
        }
        return null
    }, t._getResponse = function () {
        if (null != this._response) return this._response;
        if (null != this._request.response) return this._request.response;
        try {
            if (null != this._request.responseText) return this._request.responseText
        } catch (e) {
        }
        try {
            if (null != this._request.responseXML) return this._request.responseXML
        } catch (e) {
        }
        return null
    }, t._createXHR = function (e) {
        var t = createjs.RequestUtils.isCrossDomain(e), n = {}, r = null;
        if (window.XMLHttpRequest) r = new XMLHttpRequest, t && void 0 === r.withCredentials && window.XDomainRequest && (r = new XDomainRequest); else {
            for (var i = 0, o = s.ACTIVEX_VERSIONS.length; o > i; i++) {
                s.ACTIVEX_VERSIONS[i];
                try {
                    r = new ActiveXObject(axVersions);
                    break
                } catch (u) {
                }
            }
            if (null == r) return !1
        }
        e.mimeType && r.overrideMimeType && r.overrideMimeType(e.mimeType), this._xhrLevel = "string" == typeof r.responseType ? 2 : 1;
        var a = null;
        if (a = e.method == createjs.AbstractLoader.GET ? createjs.RequestUtils.buildPath(e.src, e.values) : e.src, r.open(e.method || createjs.AbstractLoader.GET, a, !0), t && r instanceof XMLHttpRequest && 1 == this._xhrLevel && (n.Origin = location.origin), e.values && e.method == createjs.AbstractLoader.POST && (n["Content-Type"] = "application/x-www-form-urlencoded"), t || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest"), e.headers) for (var f in e.headers) n[f] = e.headers[f];
        for (f in n) r.setRequestHeader(f, n[f]);
        return r instanceof XMLHttpRequest && void 0 !== e.withCredentials && (r.withCredentials = e.withCredentials), this._request = r, !0
    }, t._clean = function () {
        clearTimeout(this._loadTimeout), this._request.removeEventListener("loadstart", this._handleLoadStartProxy), this._request.removeEventListener("progress", this._handleProgressProxy), this._request.removeEventListener("abort", this._handleAbortProxy), this._request.removeEventListener("error", this._handleErrorProxy), this._request.removeEventListener("timeout", this._handleTimeoutProxy), this._request.removeEventListener("load", this._handleLoadProxy), this._request.removeEventListener("readystatechange", this._handleReadyStateChangeProxy)
    }, t.toString = function () {
        return "[PreloadJS XHRRequest]"
    }, createjs.XHRRequest = createjs.promote(e, "AbstractRequest")
}(),this.createjs = this.createjs || {},function () {
    "use strict";

    function e(e, t) {
        this.AbstractMediaLoader_constructor(e, t, createjs.AbstractLoader.SOUND), createjs.RequestUtils.isAudioTag(e) ? this._tag = e : createjs.RequestUtils.isAudioTag(e.src) ? this._tag = e : createjs.RequestUtils.isAudioTag(e.tag) && (this._tag = createjs.RequestUtils.isAudioTag(e) ? e : e.src), null != this._tag && (this._preferXHR = !1)
    }

    var t = createjs.extend(e, createjs.AbstractMediaLoader), n = e;
    n.canLoadItem = function (e) {
        return e.type == createjs.AbstractLoader.SOUND
    }, t._createTag = function (e) {
        var t = document.createElement("audio");
        return t.autoplay = !1, t.preload = "none", t.src = e, t
    }, createjs.SoundLoader = createjs.promote(e, "AbstractMediaLoader")
}(),this.createjs = this.createjs || {},function () {
    "use strict";

    function e() {
        throw"Sound cannot be instantiated"
    }

    function t(e, t) {
        this.init(e, t)
    }

    var n = e;
    n.INTERRUPT_ANY = "any", n.INTERRUPT_EARLY = "early", n.INTERRUPT_LATE = "late", n.INTERRUPT_NONE = "none", n.PLAY_INITED = "playInited", n.PLAY_SUCCEEDED = "playSucceeded", n.PLAY_INTERRUPTED = "playInterrupted", n.PLAY_FINISHED = "playFinished", n.PLAY_FAILED = "playFailed", n.SUPPORTED_EXTENSIONS = ["mp3", "ogg", "mpeg", "wav", "m4a", "mp4", "aiff", "wma", "mid"], n.EXTENSION_MAP = {m4a: "mp4"}, n.FILE_PATTERN = /^(?:(\w+:)\/{2}(\w+(?:\.\w+)*\/?))?([/.]*?(?:[^?]+)?\/)?((?:[^/?]+)\.(\w+))(?:\?(\S+)?)?$/, n.defaultInterruptBehavior = n.INTERRUPT_NONE, n.alternateExtensions = [], n.activePlugin = null, n._pluginsRegistered = !1, n._lastID = 0, n._masterVolume = 1, n._masterMute = !1, n._instances = [], n._idHash = {}, n._preloadHash = {}, n.addEventListener = null, n.removeEventListener = null, n.removeAllEventListeners = null, n.dispatchEvent = null, n.hasEventListener = null, n._listeners = null, createjs.EventDispatcher.initialize(n), n.getPreloadHandlers = function () {
        return {callback: createjs.proxy(n.initLoad, n), types: ["sound"], extensions: n.SUPPORTED_EXTENSIONS}
    }, n._handleLoadComplete = function (e) {
        var t = e.target.getItem().src;
        if (n._preloadHash[t]) for (var r = 0, i = n._preloadHash[t].length; i > r; r++) {
            var s = n._preloadHash[t][r];
            if (n._preloadHash[t][r] = !0, n.hasEventListener("fileload")) {
                var e = new createjs.Event("fileload");
                e.src = s.src, e.id = s.id, e.data = s.data, e.sprite = s.sprite, n.dispatchEvent(e)
            }
        }
    }, n._handleLoadError = function (e) {
        var t = e.target.getItem().src;
        if (n._preloadHash[t]) for (var r = 0, i = n._preloadHash[t].length; i > r; r++) {
            var s = n._preloadHash[t][r];
            if (n._preloadHash[t][r] = !1, n.hasEventListener("fileerror")) {
                var e = new createjs.Event("fileerror");
                e.src = s.src, e.id = s.id, e.data = s.data, e.sprite = s.sprite, n.dispatchEvent(e)
            }
        }
    }, n._registerPlugin = function (e) {
        return e.isSupported() ? (n.activePlugin = new e, !0) : !1
    }, n.registerPlugins = function (e) {
        n._pluginsRegistered = !0;
        for (var t = 0, r = e.length; r > t; t++) if (n._registerPlugin(e[t])) return !0;
        return !1
    }, n.initializeDefaultPlugins = function () {
        return null != n.activePlugin ? !0 : n._pluginsRegistered ? !1 : n.registerPlugins([createjs.WebAudioPlugin, createjs.HTMLAudioPlugin]) ? !0 : !1
    }, n.isReady = function () {
        return null != n.activePlugin
    }, n.getCapabilities = function () {
        return null == n.activePlugin ? null : n.activePlugin._capabilities
    }, n.getCapability = function (e) {
        return null == n.activePlugin ? null : n.activePlugin._capabilities[e]
    }, n.initLoad = function (e) {
        return n._registerSound(e)
    }, n._registerSound = function (e) {
        if (!n.initializeDefaultPlugins()) return !1;
        var r = n._parsePath(e.src);
        if (null == r) return !1;
        e.src = r.src, e.type = "sound";
        var i = e.data, s = n.activePlugin.defaultNumChannels || null;
        if (null != i && (isNaN(i.channels) ? isNaN(i) || (s = parseInt(i)) : s = parseInt(i.channels), i.audioSprite)) for (var o, u = i.audioSprite.length; u--;) o = i.audioSprite[u], n._idHash[o.id] = {
            src: e.src,
            startTime: parseInt(o.startTime),
            duration: parseInt(o.duration)
        };
        null != e.id && (n._idHash[e.id] = {src: e.src});
        var a = n.activePlugin.register(e, s);
        return t.create(e.src, s), null != i && isNaN(i) ? e.data.channels = s || t.maxPerChannel() : e.data = s || t.maxPerChannel(), a.type && (e.type = a.type), a
    }, n.registerSound = function (e, t, r, i) {
        var s = {src: e, id: t, data: r};
        e instanceof Object && (i = t, s = e), s = createjs.LoadItem.create(s), null != i && (s.src = i + e);
        var o = n._registerSound(s);
        if (!o) return !1;
        if (n._preloadHash[s.src] || (n._preloadHash[s.src] = []), n._preloadHash[s.src].push(s), 1 == n._preloadHash[s.src].length) o.on("complete", createjs.proxy(this._handleLoadComplete, this)), o.on("error", createjs.proxy(this._handleLoadError, this)), n.activePlugin.preload(o); else if (1 == n._preloadHash[s.src][0]) return !0;
        return s
    }, n.registerSounds = function (e, t) {
        var n = [];
        e.path && (t ? t += e.path : t = e.path);
        for (var r = 0, i = e.length; i > r; r++) n[r] = createjs.Sound.registerSound(e[r].src, e[r].id, e[r].data, t);
        return n
    }, n.registerManifest = function (e, t) {
        try {
            console.log("createjs.Sound.registerManifest is deprecated, please use createjs.Sound.registerSounds.")
        } catch (n) {
        }
        return this.registerSounds(e, t)
    }, n.removeSound = function (e, r) {
        if (null == n.activePlugin) return !1;
        e instanceof Object && (e = e.src), e = n._getSrcById(e).src, null != r && (e = r + e);
        var i = n._parsePath(e);
        if (null == i) return !1;
        e = i.src;
        for (var s in n._idHash) n._idHash[s].src == e && delete n._idHash[s];
        return t.removeSrc(e), delete n._preloadHash[e], n.activePlugin.removeSound(e), !0
    }, n.removeSounds = function (e, t) {
        var n = [];
        e.path && (t ? t += e.path : t = e.path);
        for (var r = 0, i = e.length; i > r; r++) n[r] = createjs.Sound.removeSound(e[r].src, t);
        return n
    }, n.removeManifest = function (e, t) {
        try {
            console.log("createjs.Sound.removeManifest is deprecated, please use createjs.Sound.removeSounds.")
        } catch (r) {
        }
        return n.removeSounds(e, t)
    }, n.removeAllSounds = function () {
        n._idHash = {}, n._preloadHash = {}, t.removeAll(), n.activePlugin && n.activePlugin.removeAllSounds()
    }, n.loadComplete = function (e) {
        if (!n.isReady()) return !1;
        var t = n._parsePath(e);
        return e = t ? n._getSrcById(t.src).src : n._getSrcById(e).src, 1 == n._preloadHash[e][0]
    }, n._parsePath = function (e) {
        "string" != typeof e && (e = e.toString());
        var t = e.match(n.FILE_PATTERN);
        if (null == t) return !1;
        for (var r = t[4], i = t[5], s = n.getCapabilities(), o = 0; !s[i];) if (i = n.alternateExtensions[o++], o > n.alternateExtensions.length) return null;
        e = e.replace("." + t[5], "." + i);
        var u = {name: r, src: e, extension: i};
        return u
    }, n.play = function (e, t, r, i, s, o, u, a, f) {
        t instanceof Object && (r = t.delay, i = t.offset, s = t.loop, o = t.volume, u = t.pan, a = t.startTime, f = t.duration, t = t.interrupt);
        var l = n.createInstance(e, a, f), h = n._playInstance(l, t, r, i, s, o, u);
        return h || l._playFailed(), l
    }, n.createInstance = function (e, r, i) {
        if (!n.initializeDefaultPlugins()) return new createjs.DefaultSoundInstance(e, r, i);
        e = n._getSrcById(e);
        var s = n._parsePath(e.src), o = null;
        return null != s && null != s.src ? (t.create(s.src), null == r && (r = e.startTime), o = n.activePlugin.create(s.src, r, i || e.duration)) : o = new createjs.DefaultSoundInstance(e, r, i), o.uniqueId = n._lastID++, o
    }, n.setVolume = function (e) {
        if (null == Number(e)) return !1;
        if (e = Math.max(0, Math.min(1, e)), n._masterVolume = e, !this.activePlugin || !this.activePlugin.setVolume || !this.activePlugin.setVolume(e)) for (var t = this._instances, r = 0, i = t.length; i > r; r++) t[r].setMasterVolume(e)
    }, n.getVolume = function () {
        return n._masterVolume
    }, n.setMute = function (e) {
        if (null == e) return !1;
        if (this._masterMute = e, !this.activePlugin || !this.activePlugin.setMute || !this.activePlugin.setMute(e)) for (var t = this._instances, n = 0, r = t.length; r > n; n++) t[n].setMasterMute(e);
        return !0
    }, n.getMute = function () {
        return this._masterMute
    }, n.stop = function () {
        for (var e = this._instances, t = e.length; t--;) e[t].stop()
    }, n._playInstance = function (e, t, r, i, s, o, u) {
        if (t instanceof Object && (r = t.delay, i = t.offset, s = t.loop, o = t.volume, u = t.pan, t = t.interrupt), t = t || n.defaultInterruptBehavior, null == r && (r = 0), null == i && (i = e.getPosition()), null == s && (s = e.loop), null == o && (o = e.volume), null == u && (u = e.pan), 0 == r) {
            var a = n._beginPlaying(e, t, i, s, o, u);
            if (!a) return !1
        } else {
            var f = setTimeout(function () {
                n._beginPlaying(e, t, i, s, o, u)
            }, r);
            e.delayTimeoutId = f
        }
        return this._instances.push(e), !0
    }, n._beginPlaying = function (e, n, r, i, s, o) {
        if (!t.add(e, n)) return !1;
        var u = e._beginPlaying(r, i, s, o);
        if (!u) {
            var a = createjs.indexOf(this._instances, e);
            return a > -1 && this._instances.splice(a, 1), !1
        }
        return !0
    }, n._getSrcById = function (e) {
        return n._idHash[e] || {src: e}
    }, n._playFinished = function (e) {
        t.remove(e);
        var n = createjs.indexOf(this._instances, e);
        n > -1 && this._instances.splice(n, 1)
    }, createjs.Sound = e, t.channels = {}, t.create = function (e, n) {
        var r = t.get(e);
        return null == r ? (t.channels[e] = new t(e, n), !0) : !1
    }, t.removeSrc = function (e) {
        var n = t.get(e);
        return null == n ? !1 : (n._removeAll(), delete t.channels[e], !0)
    }, t.removeAll = function () {
        for (var e in t.channels) t.channels[e]._removeAll();
        t.channels = {}
    }, t.add = function (e, n) {
        var r = t.get(e.src);
        return null == r ? !1 : r._add(e, n)
    }, t.remove = function (e) {
        var n = t.get(e.src);
        return null == n ? !1 : (n._remove(e), !0)
    }, t.maxPerChannel = function () {
        return r.maxDefault
    }, t.get = function (e) {
        return t.channels[e]
    };
    var r = t.prototype;
    r.constructor = t, r.src = null, r.max = null, r.maxDefault = 100, r.length = 0, r.init = function (e, t) {
        this.src = e, this.max = t || this.maxDefault, -1 == this.max && (this.max = this.maxDefault), this._instances = []
    }, r._get = function (e) {
        return this._instances[e]
    }, r._add = function (e, t) {
        return this._getSlot(t, e) ? (this._instances.push(e), this.length++, !0) : !1
    }, r._remove = function (e) {
        var t = createjs.indexOf(this._instances, e);
        return -1 == t ? !1 : (this._instances.splice(t, 1), this.length--, !0)
    }, r._removeAll = function () {
        for (var e = this.length - 1; e >= 0; e--) this._instances[e].stop()
    }, r._getSlot = function (t) {
        var n, r;
        if (t != e.INTERRUPT_NONE && (r = this._get(0), null == r)) return !0;
        for (var i = 0, s = this.max; s > i; i++) {
            if (n = this._get(i), null == n) return !0;
            if (n.playState == e.PLAY_FINISHED || n.playState == e.PLAY_INTERRUPTED || n.playState == e.PLAY_FAILED) {
                r = n;
                break
            }
            t != e.INTERRUPT_NONE && (t == e.INTERRUPT_EARLY && n.getPosition() < r.getPosition() || t == e.INTERRUPT_LATE && n.getPosition() > r.getPosition()) && (r = n)
        }
        return null != r ? (r._interrupt(), this._remove(r), !0) : !1
    }, r.toString = function () {
        return "[Sound SoundChannel]"
    }
}(),this.createjs = this.createjs || {},function () {
    "use strict";
    var e = function (e, t, n, r) {
        this.EventDispatcher_constructor(), this.src = e, this.uniqueId = -1, this.playState = null, this.delayTimeoutId = null, this._startTime = Math.max(0, t || 0), this._volume = 1, createjs.definePropertySupported && Object.defineProperty(this, "volume", {
            get: this.getVolume,
            set: this.setVolume
        }), this._pan = 0, createjs.definePropertySupported && Object.defineProperty(this, "pan", {
            get: this.getPan,
            set: this.setPan
        }), this._duration = Math.max(0, n || 0), createjs.definePropertySupported && Object.defineProperty(this, "duration", {
            get: this.getDuration,
            set: this.setDuration
        }), this._playbackResource = null, createjs.definePropertySupported && Object.defineProperty(this, "playbackResource", {
            get: this.getPlaybackResource,
            set: this.setPlaybackResource
        }), r !== !1 && r !== !0 && this.setPlaybackResource(r), this._position = 0, createjs.definePropertySupported && Object.defineProperty(this, "position", {
            get: this.getPosition,
            set: this.setPosition
        }), this._loop = 0, createjs.definePropertySupported && Object.defineProperty(this, "loop", {
            get: this.getLoop,
            set: this.setLoop
        }), this._muted = !1, createjs.definePropertySupported && Object.defineProperty(this, "muted", {
            get: this.getMuted,
            set: this.setMuted
        }), this._paused = !1, createjs.definePropertySupported && Object.defineProperty(this, "paused", {
            get: this.getPaused,
            set: this.setPaused
        })
    }, t = createjs.extend(e, createjs.EventDispatcher);
    t.play = function (e, t, n, r, i, s) {
        return this.playState == createjs.Sound.PLAY_SUCCEEDED ? (e instanceof Object && (n = e.offset, r = e.loop, i = e.volume, s = e.pan), null != n && this.setPosition(n), null != r && this.setLoop(r), null != i && this.setVolume(i), null != s && this.setPan(s), void (this._paused && this.setPaused(!1))) : (this._cleanUp(), createjs.Sound._playInstance(this, e, t, n, r, i, s), this)
    }, t.pause = function () {
        return this._paused || this.playState != createjs.Sound.PLAY_SUCCEEDED ? !1 : (this.setPaused(!0), !0)
    }, t.resume = function () {
        return this._paused ? (this.setPaused(!1), !0) : !1
    }, t.stop = function () {
        return this._position = 0, this._paused = !1, this._handleStop(), this._cleanUp(), this.playState = createjs.Sound.PLAY_FINISHED, this
    }, t.destroy = function () {
        this._cleanUp(), this.src = null, this.playbackResource = null, this.removeAllEventListeners()
    }, t.toString = function () {
        return "[AbstractSoundInstance]"
    }, t.getPaused = function () {
        return this._paused
    }, t.setPaused = function (e) {
        return e !== !0 && e !== !1 || this._paused == e || 1 == e && this.playState != createjs.Sound.PLAY_SUCCEEDED ? void 0 : (this._paused = e, e ? this._pause() : this._resume(), clearTimeout(this.delayTimeoutId), this)
    }, t.setVolume = function (e) {
        return e == this._volume ? this : (this._volume = Math.max(0, Math.min(1, e)), this._muted || this._updateVolume(), this)
    }, t.getVolume = function () {
        return this._volume
    }, t.setMute = function (e) {
        this.setMuted(e)
    }, t.getMute = function () {
        return this._muted
    }, t.setMuted = function (e) {
        return e === !0 || e === !1 ? (this._muted = e, this._updateVolume(), this) : void 0
    }, t.getMuted = function () {
        return this._muted
    }, t.setPan = function (e) {
        return e == this._pan ? this : (this._pan = Math.max(-1, Math.min(1, e)), this._updatePan(), this)
    }, t.getPan = function () {
        return this._pan
    }, t.getPosition = function () {
        return this._paused || this.playState != createjs.Sound.PLAY_SUCCEEDED ? this._position : this._calculateCurrentPosition()
    }, t.setPosition = function (e) {
        return this._position = Math.max(0, e), this.playState == createjs.Sound.PLAY_SUCCEEDED && this._updatePosition(), this
    }, t.getDuration = function () {
        return this._duration
    }, t.setDuration = function (e) {
        return e == this._duration ? this : (this._duration = Math.max(0, e || 0), this._updateDuration(), this)
    }, t.setPlaybackResource = function (e) {
        return this._playbackResource = e, 0 == this._duration && this._setDurationFromSource(), this
    }, t.getPlaybackResource = function () {
        return this._playbackResource
    }, t.getLoop = function () {
        return this._loop
    }, t.setLoop = function (e) {
        null != this._playbackResource && (0 != this._loop && 0 == e && this._removeLooping(e), 0 == this._loop && 0 != e && this._addLooping(e)), this._loop = e
    }, t._sendEvent = function (e) {
        var t = new createjs.Event(e);
        this.dispatchEvent(t)
    }, t._cleanUp = function () {
        clearTimeout(this.delayTimeoutId), this._handleCleanUp(), this._paused = !1, createjs.Sound._playFinished(this)
    }, t._interrupt = function () {
        this._cleanUp(), this.playState = createjs.Sound.PLAY_INTERRUPTED, this._sendEvent("interrupted")
    }, t._beginPlaying = function (e, t, n, r) {
        return this.setPosition(e), this.setLoop(t), this.setVolume(n), this.setPan(r), null != this._playbackResource && this._position < this._duration ? (this._paused = !1, this._handleSoundReady(), this.playState = createjs.Sound.PLAY_SUCCEEDED, this._sendEvent("succeeded"), !0) : (this._playFailed(), !1)
    }, t._playFailed = function () {
        this._cleanUp(), this.playState = createjs.Sound.PLAY_FAILED, this._sendEvent("failed")
    }, t._handleSoundComplete = function () {
        return this._position = 0, 0 != this._loop ? (this._loop--, this._handleLoop(), void this._sendEvent("loop")) : (this._cleanUp(), this.playState = createjs.Sound.PLAY_FINISHED, void this._sendEvent("complete"))
    }, t._handleSoundReady = function () {
    }, t._updateVolume = function () {
    }, t._updatePan = function () {
    }, t._updateDuration = function () {
    }, t._setDurationFromSource = function () {
    }, t._calculateCurrentPosition = function () {
    }, t._updatePosition = function () {
    }, t._removeLooping = function () {
    }, t._addLooping = function () {
    }, t._pause = function () {
    }, t._resume = function () {
    }, t._handleStop = function () {
    }, t._handleCleanUp = function () {
    }, t._handleLoop = function () {
    }, createjs.AbstractSoundInstance = createjs.promote(e, "EventDispatcher"), createjs.DefaultSoundInstance = createjs.AbstractSoundInstance
}(),this.createjs = this.createjs || {},function () {
    "use strict";
    var e = function () {
        this._capabilities = null, this._loaders = {}, this._audioSources = {}, this._soundInstances = {}, this._loaderClass, this._soundInstanceClass
    }, t = e.prototype;
    e._capabilities = null, e.isSupported = function () {
        return !0
    }, t.register = function (e) {
        if (this._audioSources[e.src] = !0, this._soundInstances[e.src] = [], this._loaders[e.src]) return this._loaders[e.src];
        var t = new this._loaderClass(e);
        return t.on("complete", createjs.proxy(this._handlePreloadComplete, this)), this._loaders[e.src] = t, t
    }, t.preload = function (e) {
        e.on("error", createjs.proxy(this._handlePreloadError, this)), e.load()
    }, t.isPreloadStarted = function (e) {
        return null != this._audioSources[e]
    }, t.isPreloadComplete = function (e) {
        return null != this._audioSources[e] && 1 != this._audioSources[e]
    }, t.removeSound = function (e) {
        if (this._soundInstances[e]) {
            for (var t = this._soundInstances[e].length; t--;) {
                var n = this._soundInstances[e][t];
                n.destroy()
            }
            delete this._soundInstances[e], delete this._audioSources[e], this._loaders[e] && this._loaders[e].destroy(), delete this._loaders[e]
        }
    }, t.removeAllSounds = function () {
        for (var e in this._audioSources) this.removeSound(e)
    }, t.create = function (e, t, n) {
        this.isPreloadStarted(e) || this.preload(this.register(e));
        var r = new this._soundInstanceClass(e, t, n, this._audioSources[e]);
        return this._soundInstances[e].push(r), r
    }, t.setVolume = function (e) {
        return this._volume = e, this._updateVolume(), !0
    }, t.getVolume = function () {
        return this._volume
    }, t.setMute = function () {
        return this._updateVolume(), !0
    }, t.toString = function () {
        return "[AbstractPlugin]"
    }, t._handlePreloadComplete = function (e) {
        var t = e.target.getItem().src;
        this._audioSources[t] = e.result;
        for (var n = 0, r = this._soundInstances[t].length; r > n; n++) {
            var i = this._soundInstances[t][n];
            i.setPlaybackResource(this._audioSources[t])
        }
    }, t._handlePreloadError = function () {
    }, t._updateVolume = function () {
    }, createjs.AbstractPlugin = e
}(),this.createjs = this.createjs || {},function () {
    "use strict";

    function e(e) {
        this.AbstractLoader_constructor(e, !0, createjs.AbstractLoader.SOUND)
    }

    var t = createjs.extend(e, createjs.AbstractLoader);
    e.context = null, t.toString = function () {
        return "[WebAudioLoader]"
    }, t._createRequest = function () {
        this._request = new createjs.XHRRequest(this._item, !1), this._request.setResponseType("arraybuffer")
    }, t._sendComplete = function () {
        e.context.decodeAudioData(this._rawResult, createjs.proxy(this._handleAudioDecoded, this), createjs.proxy(this._handleError, this))
    }, t._handleAudioDecoded = function (e) {
        this._result = e, this.AbstractLoader__sendComplete()
    }, createjs.WebAudioLoader = createjs.promote(e, "AbstractLoader")
}(),this.createjs = this.createjs || {},function () {
    "use strict";

    function e(e, t, r, i) {
        this.AbstractSoundInstance_constructor(e, t, r, i), this.gainNode = n.context.createGain(), this.panNode = n.context.createPanner(), this.panNode.panningModel = n._panningModel, this.panNode.connect(this.gainNode), this.sourceNode = null, this._soundCompleteTimeout = null, this._sourceNodeNext = null, this._playbackStartTime = 0, this._endedHandler = createjs.proxy(this._handleSoundComplete, this)
    }

    var t = createjs.extend(e, createjs.AbstractSoundInstance), n = e;
    n.context = null, n.destinationNode = null, n._panningModel = "equalpower", t.destroy = function () {
        this.AbstractSoundInstance_destroy(), this.panNode.disconnect(0), this.panNode = null, this.gainNode.disconnect(0), this.gainNode = null
    }, t.toString = function () {
        return "[WebAudioSoundInstance]"
    }, t._updatePan = function () {
        this.panNode.setPosition(this._pan, 0, -0.5)
    }, t._removeLooping = function () {
        this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext)
    }, t._addLooping = function () {
        this.playState == createjs.Sound.PLAY_SUCCEEDED && (this._sourceNodeNext = this._createAndPlayAudioNode(this._playbackStartTime, 0))
    }, t._setDurationFromSource = function () {
        this._duration = 1e3 * this.playbackResource.duration
    }, t._handleCleanUp = function () {
        this.sourceNode && this.playState == createjs.Sound.PLAY_SUCCEEDED && (this.sourceNode = this._cleanUpAudioNode(this.sourceNode), this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext)), 0 != this.gainNode.numberOfOutputs && this.gainNode.disconnect(0), clearTimeout(this._soundCompleteTimeout), this._playbackStartTime = 0
    }, t._cleanUpAudioNode = function (e) {
        return e && (e.stop(0), e.disconnect(0), e = null), e
    }, t._handleSoundReady = function () {
        this.gainNode.connect(n.destinationNode);
        var e = .001 * this._duration, t = .001 * this._position;
        this.sourceNode = this._createAndPlayAudioNode(n.context.currentTime - e, t), this._playbackStartTime = this.sourceNode.startTime - t, this._soundCompleteTimeout = setTimeout(this._endedHandler, 1e3 * (e - t)), 0 != this._loop && (this._sourceNodeNext = this._createAndPlayAudioNode(this._playbackStartTime, 0))
    }, t._createAndPlayAudioNode = function (e, t) {
        var r = n.context.createBufferSource();
        r.buffer = this.playbackResource, r.connect(this.panNode);
        var i = .001 * this._duration;
        return r.startTime = e + i, r.start(r.startTime, t + .001 * this._startTime, i - t), r
    }, t._pause = function () {
        this._position = 1e3 * (n.context.currentTime - this._playbackStartTime), this.sourceNode = this._cleanUpAudioNode(this.sourceNode), this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext), 0 != this.gainNode.numberOfOutputs && this.gainNode.disconnect(0), clearTimeout(this._soundCompleteTimeout)
    }, t._resume = function () {
        this._handleSoundReady()
    }, t._updateVolume = function () {
        var e = this._muted ? 0 : this._volume;
        e != this.gainNode.gain.value && (this.gainNode.gain.value = e)
    }, t._calculateCurrentPosition = function () {
        return 1e3 * (n.context.currentTime - this._playbackStartTime)
    }, t._updatePosition = function () {
        this.sourceNode = this._cleanUpAudioNode(this.sourceNode), this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext), clearTimeout(this._soundCompleteTimeout), this._paused || this._handleSoundReady()
    }, t._handleLoop = function () {
        this._cleanUpAudioNode(this.sourceNode), this.sourceNode = this._sourceNodeNext, this._playbackStartTime = this.sourceNode.startTime, this._sourceNodeNext = this._createAndPlayAudioNode(this._playbackStartTime, 0), this._soundCompleteTimeout = setTimeout(this._endedHandler, this._duration)
    }, t._updateDuration = function () {
        this._pause(), this._resume()
    }, createjs.WebAudioSoundInstance = createjs.promote(e, "AbstractSoundInstance")
}(),this.createjs = this.createjs || {},function () {
    "use strict";

    function e() {
        this.AbstractPlugin_constructor(), this._panningModel = n._panningModel, this._volume = 1, this.context = n.context, this.dynamicsCompressorNode = this.context.createDynamicsCompressor(), this.dynamicsCompressorNode.connect(this.context.destination), this.gainNode = this.context.createGain(), this.gainNode.connect(this.dynamicsCompressorNode), createjs.WebAudioSoundInstance.destinationNode = this.gainNode, this._capabilities = n._capabilities, this._loaderClass = createjs.WebAudioLoader, this._soundInstanceClass = createjs.WebAudioSoundInstance, this._addPropsToClasses()
    }

    var t = createjs.extend(e, createjs.AbstractPlugin), n = e;
    n._capabilities = null, n._panningModel = "equalpower", n.context = null, n.isSupported = function () {
        var e = createjs.BrowserDetect.isIOS || createjs.BrowserDetect.isAndroid || createjs.BrowserDetect.isBlackberry;
        return "file:" != location.protocol || e || this._isFileXHRSupported() ? (n._generateCapabilities(), null == n.context ? !1 : !0) : !1
    }, n.playEmptySound = function () {
        var e = n.context.createBufferSource();
        e.buffer = n.context.createBuffer(1, 1, 22050), e.connect(n.context.destination), e.start(0, 0, 0)
    }, n._isFileXHRSupported = function () {
        var e = !0, t = new XMLHttpRequest;
        try {
            t.open("GET", "WebAudioPluginTest.fail", !1)
        } catch (n) {
            return e = !1
        }
        t.onerror = function () {
            e = !1
        }, t.onload = function () {
            e = 404 == this.status || 200 == this.status || 0 == this.status && "" != this.response
        };
        try {
            t.send()
        } catch (n) {
            e = !1
        }
        return e
    }, n._generateCapabilities = function () {
        if (null == n._capabilities) {
            var e = document.createElement("audio");
            if (null == e.canPlayType) return null;
            if (null == n.context) if (window.AudioContext) n.context = new AudioContext; else {
                if (!window.webkitAudioContext) return null;
                n.context = new webkitAudioContext
            }
            n._compatibilitySetUp(), n.playEmptySound(), n._capabilities = {panning: !0, volume: !0, tracks: -1};
            for (var t = createjs.Sound.SUPPORTED_EXTENSIONS, r = createjs.Sound.EXTENSION_MAP, i = 0, s = t.length; s > i; i++) {
                var o = t[i], u = r[o] || o;
                n._capabilities[o] = "no" != e.canPlayType("audio/" + o) && "" != e.canPlayType("audio/" + o) || "no" != e.canPlayType("audio/" + u) && "" != e.canPlayType("audio/" + u)
            }
            n.context.destination.numberOfChannels < 2 && (n._capabilities.panning = !1)
        }
    }, n._compatibilitySetUp = function () {
        if (n._panningModel = "equalpower", !n.context.createGain) {
            n.context.createGain = n.context.createGainNode;
            var e = n.context.createBufferSource();
            e.__proto__.start = e.__proto__.noteGrainOn, e.__proto__.stop = e.__proto__.noteOff, n._panningModel = 0
        }
    }, t.toString = function () {
        return "[WebAudioPlugin]"
    }, t._addPropsToClasses = function () {
        var e = this._soundInstanceClass;
        e.context = this.context, e.destinationNode = this.gainNode, e._panningModel = this._panningModel, this._loaderClass.context = this.context
    }, t._updateVolume = function () {
        var e = createjs.Sound._masterMute ? 0 : this._volume;
        e != this.gainNode.gain.value && (this.gainNode.gain.value = e)
    }, createjs.WebAudioPlugin = createjs.promote(e, "AbstractPlugin")
}(),this.createjs = this.createjs || {},function () {
    "use strict";

    function e(e) {
        this.src = e, this.length = 0, this.available = 0, this.tags = [], this.duration = 0
    }

    var t = e.prototype;
    t.constructor = e;
    var n = e;
    n.tags = {}, n.get = function (t) {
        var r = n.tags[t];
        return null == r && (r = n.tags[t] = new e(t)), r
    }, n.remove = function (e) {
        var t = n.tags[e];
        return null == t ? !1 : (t.removeAll(), delete n.tags[e], !0)
    }, n.getInstance = function (e) {
        var t = n.tags[e];
        return null == t ? null : t.get()
    }, n.setInstance = function (e, t) {
        var r = n.tags[e];
        return null == r ? null : r.set(t)
    }, n.getDuration = function (e) {
        var t = n.tags[e];
        return null == t ? 0 : t.getDuration()
    }, t.add = function (e) {
        this.tags.push(e), this.length++, this.available++
    }, t.removeAll = function () {
        for (var e; this.length--;) e = this.tags[this.length], e.parentNode && e.parentNode.removeChild(e), delete this.tags[this.length];
        this.src = null, this.tags.length = 0
    }, t.get = function () {
        if (0 == this.tags.length) return null;
        this.available = this.tags.length;
        var e = this.tags.pop();
        return null == e.parentNode && document.body.appendChild(e), e
    }, t.set = function (e) {
        var t = createjs.indexOf(this.tags, e);
        -1 == t && this.tags.push(e), this.available = this.tags.length
    }, t.getDuration = function () {
        return this.duration || (this.duration = 1e3 * this.tags[this.tags.length - 1].duration), this.duration
    }, t.toString = function () {
        return "[HTMLAudioTagPool]"
    }, createjs.HTMLAudioTagPool = e
}(),this.createjs = this.createjs || {},function () {
    "use strict";

    function e(e, t, n, r) {
        this.AbstractSoundInstance_constructor(e, t, n, r), this._audioSpriteStopTime = null, this._delayTimeoutId = null, this._endedHandler = createjs.proxy(this._handleSoundComplete, this), this._readyHandler = createjs.proxy(this._handleTagReady, this), this._stalledHandler = createjs.proxy(this.playFailed, this), this._audioSpriteEndHandler = createjs.proxy(this._handleAudioSpriteLoop, this), this._loopHandler = createjs.proxy(this._handleSoundComplete, this), n ? this._audioSpriteStopTime = .001 * (t + n) : this._duration = createjs.HTMLAudioTagPool.getDuration(this.src)
    }

    var t = createjs.extend(e, createjs.AbstractSoundInstance);
    t.setMasterVolume = function () {
        this._updateVolume()
    }, t.setMasterMute = function () {
        this._updateVolume()
    }, t.toString = function () {
        return "[HTMLAudioSoundInstance]"
    }, t._removeLooping = function () {
        null != this._playbackResource && (this._playbackResource.loop = !1, this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1))
    }, t._addLooping = function () {
        null == this._playbackResource || this._audioSpriteStopTime || (this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1), this._playbackResource.loop = !0)
    }, t._handleCleanUp = function () {
        var e = this._playbackResource;
        if (null != e) {
            e.pause(), e.loop = !1, e.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, !1), e.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, !1), e.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED, this._stalledHandler, !1), e.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1), e.removeEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, !1);
            try {
                e.currentTime = this._startTime
            } catch (t) {
            }
            createjs.HTMLAudioTagPool.setInstance(this.src, e), this._playbackResource = null
        }
    }, t._beginPlaying = function (e, t, n, r) {
        return this._playbackResource = createjs.HTMLAudioTagPool.getInstance(this.src), this.AbstractSoundInstance__beginPlaying(e, t, n, r)
    }, t._handleSoundReady = function () {
        if (4 !== this._playbackResource.readyState) {
            var e = this._playbackResource;
            return e.addEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, !1), e.addEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED, this._stalledHandler, !1), e.preload = "auto", void e.load()
        }
        this._updateVolume(), this._playbackResource.currentTime = .001 * (this._startTime + this._position), this._audioSpriteStopTime ? this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, !1) : (this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, !1), 0 != this._loop && (this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1), this._playbackResource.loop = !0)), this._playbackResource.play()
    }, t._handleTagReady = function () {
        this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, !1), this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED, this._stalledHandler, !1), this._handleSoundReady()
    }, t._pause = function () {
        this._playbackResource.pause()
    }, t._resume = function () {
        this._playbackResource.play()
    }, t._updateVolume = function () {
        if (null != this._playbackResource) {
            var e = this._muted || createjs.Sound._masterMute ? 0 : this._volume * createjs.Sound._masterVolume;
            e != this._playbackResource.volume && (this._playbackResource.volume = e)
        }
    }, t._calculateCurrentPosition = function () {
        return 1e3 * this._playbackResource.currentTime - this._startTime
    }, t._updatePosition = function () {
        this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1), this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._handleSetPositionSeek, !1);
        try {
            this._playbackResource.currentTime = .001 * (this._position + this._startTime)
        } catch (e) {
            this._handleSetPositionSeek(null)
        }
    }, t._handleSetPositionSeek = function () {
        null != this._playbackResource && (this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._handleSetPositionSeek, !1), this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1))
    }, t._handleAudioSpriteLoop = function () {
        this._playbackResource.currentTime <= this._audioSpriteStopTime || (this._playbackResource.pause(), 0 == this._loop ? this._handleSoundComplete(null) : (this._position = 0, this._loop--, this._playbackResource.currentTime = .001 * this._startTime, this._paused || this._playbackResource.play(), this._sendEvent("loop")))
    }, t._handleLoop = function () {
        0 == this._loop && (this._playbackResource.loop = !1, this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1))
    }, t._updateDuration = function () {
        this._audioSpriteStopTime = .001 * (startTime + duration), this.playState == createjs.Sound.PLAY_SUCCEEDED && (this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, !1), this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, !1))
    }, createjs.HTMLAudioSoundInstance = createjs.promote(e, "AbstractSoundInstance")
}(),this.createjs = this.createjs || {},function () {
    "use strict";

    function e() {
        this.AbstractPlugin_constructor(), this.defaultNumChannels = 2, this._capabilities = n._capabilities, this._loaderClass = createjs.SoundLoader, this._soundInstanceClass = createjs.HTMLAudioSoundInstance
    }

    var t = createjs.extend(e, createjs.AbstractPlugin), n = e;
    n.MAX_INSTANCES = 30, n._AUDIO_READY = "canplaythrough", n._AUDIO_ENDED = "ended", n._AUDIO_SEEKED = "seeked", n._AUDIO_STALLED = "stalled", n._TIME_UPDATE = "timeupdate", n._capabilities = null, n.enableIOS = !1, n.isSupported = function () {
        return n._generateCapabilities(), null == n._capabilities ? !1 : !0
    }, n._generateCapabilities = function () {
        if (null == n._capabilities) {
            var e = document.createElement("audio");
            if (null == e.canPlayType) return null;
            n._capabilities = {panning: !0, volume: !0, tracks: -1};
            for (var t = createjs.Sound.SUPPORTED_EXTENSIONS, r = createjs.Sound.EXTENSION_MAP, i = 0, s = t.length; s > i; i++) {
                var o = t[i], u = r[o] || o;
                n._capabilities[o] = "no" != e.canPlayType("audio/" + o) && "" != e.canPlayType("audio/" + o) || "no" != e.canPlayType("audio/" + u) && "" != e.canPlayType("audio/" + u)
            }
        }
    }, t.register = function (e, t) {
        for (var n = createjs.HTMLAudioTagPool.get(e.src), r = null, i = 0; t > i; i++) r = this._createTag(e.src), n.add(r);
        var s = this.AbstractPlugin_register(e, t);
        return s.setTag(r), s
    }, t.removeSound = function (e) {
        this.AbstractPlugin_removeSound(e), createjs.HTMLAudioTagPool.remove(e)
    }, t.create = function (e, t, n) {
        var r = this.AbstractPlugin_create(e, t, n);
        return r.setPlaybackResource(null), r
    }, t.toString = function () {
        return "[HTMLAudioPlugin]"
    }, t.setVolume = t.getVolume = t.setMute = null, t._createTag = function (e) {
        var t = document.createElement("audio");
        return t.autoplay = !1, t.preload = "none", t.src = e, t
    }, createjs.HTMLAudioPlugin = createjs.promote(e, "AbstractPlugin")
}(),define("libs/createjs/soundjs", function () {
}),define("createjs", ["libs/createjs/preloadjs", "libs/createjs/soundjs"], function (e, t) {
    "use strict";
    return window.createjs
}),define("model/loader_collection", ["console", "underscore", "jquery", "backbone", "config", "createjs"], function (e, t, n, r, i, s) {
    "use strict";
    var o = r.Collection.extend({
        loadDone: !1, loaders: {}, initialize: function () {
            this.on("add", this.onAdded, this), this.on("change:loaded", this.onLoaded, this)
        }, createLoader: function (e) {
            if (!this.loaders[e]) {
                var n = new s.LoadQueue(!1);
                n.setMaxConnections(1), n.maintainScriptOrder = !0, n.addEventListener("fileload", t.bind(this.onFileLoaded, this)), n.addEventListener("complete", t.bind(this.onComplete, this)), n.addEventListener("progress", t.bind(this.onProgress, this)), n.addEventListener("error", t.bind(this.onError, this)), this.loaders[e] = n
            }
            return this.loaders[e]
        }, onLoaded: function (e, t) {
            if (!t) throw new Error("Load set to false")
        }, onProgress: function (e) {
            this.trigger("progress", e)
        }, onAdded: function (e, n, r) {
            e.has("id") || e.set({id: e.get("src")}), e.has("loadTimeout ") || e.set({loadTimeout: 6e5}), t.isUndefined(r.group) || e.set({group: r.group}), e.has("group") || e.set({group: "main"}), e.set({loaded: !1}, {silent: !0});
            var i = this.getLoader(e.get("group"));
            i || (i = this.createLoader(e.get("group")));
            var o = e.toJSON(), u = (new s.LoadItem).set(o);
            i.loadFile(o, !1)
        }, getLoader: function (e) {
            return this.loaders[e]
        }, onFileLoaded: function (e) {
            this.get(e.item.id).set(t.extend(e.item, {loaded: !0}));
            var n;
            t.each(this.loaders, function (t, r) {
                t === e.target && (n = r)
            }, this), n && t.extend(e, {group: n}), this.trigger("loaded", e)
        }, onComplete: function (e) {
            this.loadDone = !0;
            var n;
            t.each(this.loaders, function (t, r) {
                t === e.target && (n = r)
            }, this), n && t.extend(e, {group: n}), this.trigger("complete", e)
        }, setPaused: function (e, n) {
            t.isUndefined(n) && (n = "main");
            var r = this.getLoader(n);
            r && r.setPaused(e)
        }, stop: function (e) {
            t.isUndefined(e) && (e = "main");
            var n = this.getLoader(e);
            n && (n.close(), n.reset())
        }, clear: function (e) {
            t.isUndefined(e) && (e = "main");
            var n = this.getLoader(e);
            n && (n.removeAll(), n.close())
        }, start: function (e) {
            t.isUndefined(e) && (e = "main");
            var n = this.getLoader(e);
            n ? n.load() : this.onComplete({})
        }, hasLoaded: function (e) {
            var t = !0;
            return e && this.loaders[e] ? t = this.loaders[e].loaded : n.each(this.loaders, function (e, n) {
                var r = n.loaded;
                r || (t = !1)
            }), t
        }, getResult: function (e) {
            var t;
            return n.each(this.loaders, function (n, r) {
                var i = r.getResult(e);
                i && (t = i)
            }), t
        }, onError: function (t) {
            e.error(t), this.get(t.item.id).set({loaded: !0, error: !0}), this.trigger("load_error", t)
        }
    });
    return new o
}),define("controller/app_controller", ["config", "jquery", "underscore", "backbone", "router", "model/app_model", "data/app_data", "model/loader_collection", "libs/createjs/preloadjs"], function (e, t, n, r, i, s, o, u, a) {
    var f = function () {
    };
    return n.extend(f.prototype, r.Events), n.extend(f.prototype, {
        loaderController: null,
        appHasStarted: !1,
        jsonLoaded: !1,
        firstPage: !0,
        init: function () {
            i.setRoutes([["en", "en"], ["en/", "en"], ["en/:sub", "en"], ["en/:sub/:sub", "en"], ["fr", "fr"], ["fr/", "fr"], ["fr/:sub", "fr"], ["fr/:sub/:sub", "fr"], [/^([0-9]+)\/([0-9]+)$/, "default 2"]]), i.setAuthCallBack(n.bind(this.onSecurityCheck, this)), i.on("page", this.onRouterPage, this), i.on("change:page", this.onRouterPageChange, this);
            for (var e = 0; e < o.INITIAL_LOAD.length; e++) u.add(o.INITIAL_LOAD[e]);
            u.on("complete", this.appReady, this), u.start("initial")
        },
        onSecurityCheck: function (e) {
            return !0
        },
        fileLoad: function (e) {
        },
        appReady: function () {
            this.appHasStarted || (this.appHasStarted = !0, t("head").append(u.getResult("/css/all.css")), this.checkLoad())
        },
        checkLoad: function () {
            this.appHasStarted && this.trigger("AppController:ready")
        },
        onRouterPage: function (e, t) {
            s.set("prevPageOptions", s.get("pageOptions")), s.set({page: e, pageOptions: t})
        },
        onRouterPageChange: function (e) {
        }
    }), f
}),(window._gsQueue || (window._gsQueue = [])).push(function () {
    "use strict";
    window._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (e, t, n) {
        var r = [].slice, i = function (e, t, r) {
            n.call(this, e, t, r), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = i.prototype.render
        }, s = 1e-10, o = n._internals.isSelector, u = n._internals.isArray, a = i.prototype = n.to({}, .1, {}), f = [];
        i.version = "1.11.1", a.constructor = i, a.kill()._gc = !1, i.killTweensOf = i.killDelayedCallsTo = n.killTweensOf, i.getTweensOf = n.getTweensOf, i.ticker = n.ticker, a.invalidate = function () {
            return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), n.prototype.invalidate.call(this)
        }, a.updateTo = function (e, t) {
            var r = this.ratio, i;
            t && this.timeline && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
            for (i in e) this.vars[i] = e[i];
            if (this._initted) if (t) this._initted = !1; else {
                this._notifyPluginsOfEnabled && this._firstPT && n._onPluginEvent("_onDisable", this);
                if (this._time / this._duration > .998) {
                    var s = this._time;
                    this.render(0, !0, !1), this._initted = !1, this.render(s, !0, !1)
                } else if (this._time > 0) {
                    this._initted = !1, this._init();
                    var o = 1 / (1 - r), u = this._firstPT, a;
                    while (u) a = u.s + u.c, u.c *= o, u.s = a - u.c, u = u._next
                }
            }
            return this
        }, a.render = function (e, t, n) {
            this._initted || this._duration === 0 && this.vars.repeat && this.invalidate();
            var r = this._dirty ? this.totalDuration() : this._totalDuration, i = this._time, o = this._totalTime,
                u = this._cycle, a = this._duration, l, c, h, p, d, v, m, g;
            if (e >= r) this._totalTime = r, this._cycle = this._repeat, this._yoyo && (this._cycle & 1) !== 0 ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = a, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (l = !0, c = "onComplete"), a === 0 && (g = this._rawPrevTime, (e === 0 || g < 0 || g === s) && g !== e && (n = !0, g > s && (c = "onReverseComplete")), this._rawPrevTime = g = !t || e ? e : s); else if (e < 1e-7) {
                this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
                if (o !== 0 || a === 0 && this._rawPrevTime > s) c = "onReverseComplete", l = this._reversed;
                e < 0 ? (this._active = !1, a === 0 && (this._rawPrevTime >= 0 && (n = !0), this._rawPrevTime = g = !t || e ? e : s)) : this._initted || (n = !0)
            } else {
                this._totalTime = this._time = e, this._repeat !== 0 && (p = a + this._repeatDelay, this._cycle = this._totalTime / p >> 0, this._cycle !== 0 && this._cycle === this._totalTime / p && this._cycle--, this._time = this._totalTime - this._cycle * p, this._yoyo && (this._cycle & 1) !== 0 && (this._time = a - this._time), this._time > a ? this._time = a : this._time < 0 && (this._time = 0));
                if (this._easeType) {
                    d = this._time / a, v = this._easeType, m = this._easePower;
                    if (v === 1 || v === 3 && d >= .5) d = 1 - d;
                    v === 3 && (d *= 2), m === 1 ? d *= d : m === 2 ? d *= d * d : m === 3 ? d *= d * d * d : m === 4 && (d *= d * d * d * d), v === 1 ? this.ratio = 1 - d : v === 2 ? this.ratio = d : this._time / a < .5 ? this.ratio = d / 2 : this.ratio = 1 - d / 2
                } else this.ratio = this._ease.getRatio(this._time / a)
            }
            if (i === this._time && !n && u === this._cycle) {
                o !== this._totalTime && this._onUpdate && (t || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || f));
                return
            }
            if (!this._initted) {
                this._init();
                if (!this._initted || this._gc) return;
                this._time && !l ? this.ratio = this._ease.getRatio(this._time / a) : l && this._ease._calcEnd && (this.ratio = this._ease.getRatio(this._time === 0 ? 0 : 1))
            }
            this._active || !this._paused && this._time !== i && e >= 0 && (this._active = !0), o === 0 && (this._startAt && (e >= 0 ? this._startAt.render(e, t, n) : c || (c = "_dummyGS")), this.vars.onStart && (this._totalTime !== 0 || a === 0) && (t || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || f))), h = this._firstPT;
            while (h) h.f ? h.t[h.p](h.c * this.ratio + h.s) : h.t[h.p] = h.c * this.ratio + h.s, h = h._next;
            this._onUpdate && (e < 0 && this._startAt && this._startTime && this._startAt.render(e, t, n), t || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || f)), this._cycle !== u && (t || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || f)), c && (this._gc || (e < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(e, t, n), l && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[c] && this.vars[c].apply(this.vars[c + "Scope"] || this, this.vars[c + "Params"] || f), a === 0 && this._rawPrevTime === s && g !== s && (this._rawPrevTime = 0)))
        }, i.to = function (e, t, n) {
            return new i(e, t, n)
        }, i.from = function (e, t, n) {
            return n.runBackwards = !0, n.immediateRender = n.immediateRender != 0, new i(e, t, n)
        }, i.fromTo = function (e, t, n, r) {
            return r.startAt = n, r.immediateRender = r.immediateRender != 0 && n.immediateRender != 0, new i(e, t, r)
        }, i.staggerTo = i.allTo = function (e, t, s, a, l, c, h) {
            a = a || 0;
            var p = s.delay || 0, d = [], v = function () {
                s.onComplete && s.onComplete.apply(s.onCompleteScope || this, arguments), l.apply(h || this, c || f)
            }, m, g, y, b;
            u(e) || (typeof e == "string" && (e = n.selector(e) || e), o(e) && (e = r.call(e, 0))), m = e.length;
            for (y = 0; y < m; y++) {
                g = {};
                for (b in s) g[b] = s[b];
                g.delay = p, y === m - 1 && l && (g.onComplete = v), d[y] = new i(e[y], t, g), p += a
            }
            return d
        }, i.staggerFrom = i.allFrom = function (e, t, n, r, s, o, u) {
            return n.runBackwards = !0, n.immediateRender = n.immediateRender != 0, i.staggerTo(e, t, n, r, s, o, u)
        }, i.staggerFromTo = i.allFromTo = function (e, t, n, r, s, o, u, a) {
            return r.startAt = n, r.immediateRender = r.immediateRender != 0 && n.immediateRender != 0, i.staggerTo(e, t, r, s, o, u, a)
        }, i.delayedCall = function (e, t, n, r, s) {
            return new i(t, 0, {
                delay: e,
                onComplete: t,
                onCompleteParams: n,
                onCompleteScope: r,
                onReverseComplete: t,
                onReverseCompleteParams: n,
                onReverseCompleteScope: r,
                immediateRender: !1,
                useFrames: s,
                overwrite: 0
            })
        }, i.set = function (e, t) {
            return new i(e, 0, t)
        }, i.isTweening = function (e) {
            return n.getTweensOf(e, !0).length > 0
        };
        var l = function (e, t) {
            var r = [], i = 0, s = e._first;
            while (s) s instanceof n ? r[i++] = s : (t && (r[i++] = s), r = r.concat(l(s, t)), i = r.length), s = s._next;
            return r
        }, c = i.getAllTweens = function (t) {
            return l(e._rootTimeline, t).concat(l(e._rootFramesTimeline, t))
        };
        i.killAll = function (e, n, r, i) {
            n == null && (n = !0), r == null && (r = !0);
            var s = c(i != 0), o = s.length, u = n && r && i, a, f, l;
            for (l = 0; l < o; l++) {
                f = s[l];
                if (u || f instanceof t || (a = f.target === f.vars.onComplete) && r || n && !a) e ? f.totalTime(f.totalDuration()) : f._enabled(!1, !1)
            }
        }, i.killChildTweensOf = function (e, t) {
            if (e == null) return;
            var s = n._tweenLookup, a, f, l, c, h;
            typeof e == "string" && (e = n.selector(e) || e), o(e) && (e = r(e, 0));
            if (u(e)) {
                c = e.length;
                while (--c > -1) i.killChildTweensOf(e[c], t);
                return
            }
            a = [];
            for (l in s) {
                f = s[l].target.parentNode;
                while (f) f === e && (a = a.concat(s[l].tweens)), f = f.parentNode
            }
            h = a.length;
            for (c = 0; c < h; c++) t && a[c].totalTime(a[c].totalDuration()), a[c]._enabled(!1, !1)
        };
        var h = function (e, n, r, i) {
            n = n !== !1, r = r !== !1, i = i !== !1;
            var s = c(i), o = n && r && i, u = s.length, a, f;
            while (--u > -1) f = s[u], (o || f instanceof t || (a = f.target === f.vars.onComplete) && r || n && !a) && f.paused(e)
        };
        return i.pauseAll = function (e, t, n) {
            h(!0, e, t, n)
        }, i.resumeAll = function (e, t, n) {
            h(!1, e, t, n)
        }, i.globalTimeScale = function (t) {
            var r = e._rootTimeline, i = n.ticker.time;
            return arguments.length ? (t = t || s, r._startTime = i - (i - r._startTime) * r._timeScale / t, r = e._rootFramesTimeline, i = n.ticker.frame, r._startTime = i - (i - r._startTime) * r._timeScale / t, r._timeScale = e._rootTimeline._timeScale = t, t) : r._timeScale
        }, a.progress = function (e) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && (this._cycle & 1) !== 0 ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
        }, a.totalProgress = function (e) {
            return arguments.length ? this.totalTime(this.totalDuration() * e, !1) : this._totalTime / this.totalDuration()
        }, a.time = function (e, t) {
            return arguments.length ? (this._dirty && this.totalDuration(), e > this._duration && (e = this._duration), this._yoyo && (this._cycle & 1) !== 0 ? e = this._duration - e + this._cycle * (this._duration + this._repeatDelay) : this._repeat !== 0 && (e += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(e, t)) : this._time
        }, a.duration = function (t) {
            return arguments.length ? e.prototype.duration.call(this, t) : this._duration
        }, a.totalDuration = function (e) {
            return arguments.length ? this._repeat === -1 ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = this._repeat === -1 ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
        }, a.repeat = function (e) {
            return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
        }, a.repeatDelay = function (e) {
            return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
        }, a.yoyo = function (e) {
            return arguments.length ? (this._yoyo = e, this) : this._yoyo
        }, i
    }, !0), window._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (e, t, n) {
        var r = function (e) {
            t.call(this, e), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
            var n = this.vars, r, i;
            for (i in n) r = n[i], o(r) && r.join("").indexOf("{self}") !== -1 && (n[i] = this._swapSelfInParams(r));
            o(n.tweens) && this.add(n.tweens, 0, n.align, n.stagger)
        }, i = 1e-10, s = n._internals.isSelector, o = n._internals.isArray, u = [], a = function (e) {
            var t = {}, n;
            for (n in e) t[n] = e[n];
            return t
        }, f = function (e, t, n, r) {
            e._timeline.pause(e._startTime), t && t.apply(r || e._timeline, n || u)
        }, l = u.slice, c = r.prototype = new t;
        return r.version = "1.11.0", c.constructor = r, c.kill()._gc = !1, c.to = function (e, t, r, i) {
            return t ? this.add(new n(e, t, r), i) : this.set(e, r, i)
        }, c.from = function (e, t, r, i) {
            return this.add(n.from(e, t, r), i)
        }, c.fromTo = function (e, t, r, i, s) {
            return t ? this.add(n.fromTo(e, t, r, i), s) : this.set(e, i, s)
        }, c.staggerTo = function (e, t, i, o, u, f, c, h) {
            var p = new r({onComplete: f, onCompleteParams: c, onCompleteScope: h}), d;
            typeof e == "string" && (e = n.selector(e) || e), s(e) && (e = l.call(e, 0)), o = o || 0;
            for (d = 0; d < e.length; d++) i.startAt && (i.startAt = a(i.startAt)), p.to(e[d], t, a(i), d * o);
            return this.add(p, u)
        }, c.staggerFrom = function (e, t, n, r, i, s, o, u) {
            return n.immediateRender = n.immediateRender != 0, n.runBackwards = !0, this.staggerTo(e, t, n, r, i, s, o, u)
        }, c.staggerFromTo = function (e, t, n, r, i, s, o, u, a) {
            return r.startAt = n, r.immediateRender = r.immediateRender != 0 && n.immediateRender != 0, this.staggerTo(e, t, r, i, s, o, u, a)
        }, c.call = function (e, t, r, i) {
            return this.add(n.delayedCall(0, e, t, r), i)
        }, c.set = function (e, t, r) {
            return r = this._parseTimeOrLabel(r, 0, !0), t.immediateRender == null && (t.immediateRender = r === this._time && !this._paused), this.add(new n(e, 0, t), r)
        }, r.exportRoot = function (e, t) {
            e = e || {}, e.smoothChildTiming == null && (e.smoothChildTiming = !0);
            var i = new r(e), s = i._timeline, o, u;
            t == null && (t = !0), s._remove(i, !0), i._startTime = 0, i._rawPrevTime = i._time = i._totalTime = s._time, o = s._first;
            while (o) u = o._next, (!t || !(o instanceof n && o.target === o.vars.onComplete)) && i.add(o, o._startTime - o._delay), o = u;
            return s.add(i, 0), i
        }, c.add = function (i, s, u, a) {
            var f, l, c, h, p, d;
            typeof s != "number" && (s = this._parseTimeOrLabel(s, 0, !0, i));
            if (!(i instanceof e)) {
                if (i instanceof Array || i && i.push && o(i)) {
                    u = u || "normal", a = a || 0, f = s, l = i.length;
                    for (c = 0; c < l; c++) o(h = i[c]) && (h = new r({tweens: h})), this.add(h, f), typeof h != "string" && typeof h != "function" && (u === "sequence" ? f = h._startTime + h.totalDuration() / h._timeScale : u === "start" && (h._startTime -= h.delay())), f += a;
                    return this._uncache(!0)
                }
                if (typeof i == "string") return this.addLabel(i, s);
                if (typeof i != "function") throw"Cannot add " + i + " into the timeline; it is not a tween, timeline, function, or string.";
                i = n.delayedCall(0, i)
            }
            t.prototype.add.call(this, i, s);
            if (this._gc && !this._paused && this._duration < this.duration()) {
                p = this, d = p.rawTime() > i._startTime;
                while (p._gc && p._timeline) p._timeline.smoothChildTiming && d ? p.totalTime(p._totalTime, !0) : p._enabled(!0, !1), p = p._timeline
            }
            return this
        }, c.remove = function (t) {
            if (t instanceof e) return this._remove(t, !1);
            if (t instanceof Array || t && t.push && o(t)) {
                var n = t.length;
                while (--n > -1) this.remove(t[n]);
                return this
            }
            return typeof t == "string" ? this.removeLabel(t) : this.kill(null, t)
        }, c._remove = function (e, n) {
            t.prototype._remove.call(this, e, n);
            var r = this._last;
            return r ? this._time > r._startTime + r._totalDuration / r._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = 0, this
        }, c.append = function (e, t) {
            return this.add(e, this._parseTimeOrLabel(null, t, !0, e))
        }, c.insert = c.insertMultiple = function (e, t, n, r) {
            return this.add(e, t || 0, n, r)
        }, c.appendMultiple = function (e, t, n, r) {
            return this.add(e, this._parseTimeOrLabel(null, t, !0, e), n, r)
        }, c.addLabel = function (e, t) {
            return this._labels[e] = this._parseTimeOrLabel(t), this
        }, c.addPause = function (e, t, n, r) {
            return this.call(f, ["{self}", t, n, r], this, e)
        }, c.removeLabel = function (e) {
            return delete this._labels[e], this
        }, c.getLabelTime = function (e) {
            return this._labels[e] != null ? this._labels[e] : -1
        }, c._parseTimeOrLabel = function (t, n, r, i) {
            var s;
            if (i instanceof e && i.timeline === this) this.remove(i); else if (i && (i instanceof Array || i.push && o(i))) {
                s = i.length;
                while (--s > -1) i[s] instanceof e && i[s].timeline === this && this.remove(i[s])
            }
            if (typeof n == "string") return this._parseTimeOrLabel(n, r && typeof t == "number" && this._labels[n] == null ? t - this.duration() : 0, r);
            n = n || 0;
            if (typeof t != "string" || !isNaN(t) && this._labels[t] == null) t == null && (t = this.duration()); else {
                s = t.indexOf("=");
                if (s === -1) return this._labels[t] == null ? r ? this._labels[t] = this.duration() + n : n : this._labels[t] + n;
                n = parseInt(t.charAt(s - 1) + "1", 10) * Number(t.substr(s + 1)), t = s > 1 ? this._parseTimeOrLabel(t.substr(0, s - 1), 0, r) : this.duration()
            }
            return Number(t) + n
        }, c.seek = function (e, t) {
            return this.totalTime(typeof e == "number" ? e : this._parseTimeOrLabel(e), t !== !1)
        }, c.stop = function () {
            return this.paused(!0)
        }, c.gotoAndPlay = function (e, t) {
            return this.play(e, t)
        }, c.gotoAndStop = function (e, t) {
            return this.pause(e, t)
        }, c.render = function (e, t, n) {
            this._gc && this._enabled(!0, !1);
            var r = this._dirty ? this.totalDuration() : this._totalDuration, s = this._time, o = this._startTime,
                a = this._timeScale, f = this._paused, l, c, h, p, d;
            if (e >= r) this._totalTime = this._time = r, this._reversed || this._hasPausedChild() || (c = !0, p = "onComplete", this._duration === 0 && (e === 0 || this._rawPrevTime < 0 || this._rawPrevTime === i) && this._rawPrevTime !== e && this._first && (d = !0, this._rawPrevTime > i && (p = "onReverseComplete"))), this._rawPrevTime = this._duration || !t || e ? e : i, e = r + 1e-6; else if (e < 1e-7) {
                this._totalTime = this._time = 0;
                if (s !== 0 || this._duration === 0 && (this._rawPrevTime > i || e < 0 && this._rawPrevTime >= 0)) p = "onReverseComplete", c = this._reversed;
                e < 0 ? (this._active = !1, this._duration === 0 && this._rawPrevTime >= 0 && this._first && (d = !0), this._rawPrevTime = e) : (this._rawPrevTime = this._duration || !t || e ? e : i, e = 0, this._initted || (d = !0))
            } else this._totalTime = this._time = this._rawPrevTime = e;
            if ((this._time === s || !this._first) && !n && !d) return;
            this._initted || (this._initted = !0), this._active || !this._paused && this._time !== s && e > 0 && (this._active = !0), s === 0 && this.vars.onStart && this._time !== 0 && (t || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || u));
            if (this._time >= s) {
                l = this._first;
                while (l) {
                    h = l._next;
                    if (this._paused && !f) break;
                    if (l._active || l._startTime <= this._time && !l._paused && !l._gc) l._reversed ? l.render((l._dirty ? l.totalDuration() : l._totalDuration) - (e - l._startTime) * l._timeScale, t, n) : l.render((e - l._startTime) * l._timeScale, t, n);
                    l = h
                }
            } else {
                l = this._last;
                while (l) {
                    h = l._prev;
                    if (this._paused && !f) break;
                    if (l._active || l._startTime <= s && !l._paused && !l._gc) l._reversed ? l.render((l._dirty ? l.totalDuration() : l._totalDuration) - (e - l._startTime) * l._timeScale, t, n) : l.render((e - l._startTime) * l._timeScale, t, n);
                    l = h
                }
            }
            this._onUpdate && (t || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || u)), p && !this._gc && (o === this._startTime || a !== this._timeScale) && (this._time === 0 || r >= this.totalDuration()) && (c && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[p] && this.vars[p].apply(this.vars[p + "Scope"] || this, this.vars[p + "Params"] || u))
        }, c._hasPausedChild = function () {
            var e = this._first;
            while (e) {
                if (e._paused || e instanceof r && e._hasPausedChild()) return !0;
                e = e._next
            }
            return !1
        }, c.getChildren = function (e, t, r, i) {
            i = i || -9999999999;
            var s = [], o = this._first, u = 0;
            while (o) o._startTime < i || (o instanceof n ? t !== !1 && (s[u++] = o) : (r !== !1 && (s[u++] = o), e !== !1 && (s = s.concat(o.getChildren(!0, t, r)), u = s.length))), o = o._next;
            return s
        }, c.getTweensOf = function (e, t) {
            var r = n.getTweensOf(e), i = r.length, s = [], o = 0;
            while (--i > -1) if (r[i].timeline === this || t && this._contains(r[i])) s[o++] = r[i];
            return s
        }, c._contains = function (e) {
            var t = e.timeline;
            while (t) {
                if (t === this) return !0;
                t = t.timeline
            }
            return !1
        }, c.shiftChildren = function (e, t, n) {
            n = n || 0;
            var r = this._first, i = this._labels, s;
            while (r) r._startTime >= n && (r._startTime += e), r = r._next;
            if (t) for (s in i) i[s] >= n && (i[s] += e);
            return this._uncache(!0)
        }, c._kill = function (e, t) {
            if (!e && !t) return this._enabled(!1, !1);
            var n = t ? this.getTweensOf(t) : this.getChildren(!0, !0, !1), r = n.length, i = !1;
            while (--r > -1) n[r]._kill(e, t) && (i = !0);
            return i
        }, c.clear = function (e) {
            var t = this.getChildren(!1, !0, !0), n = t.length;
            this._time = this._totalTime = 0;
            while (--n > -1) t[n]._enabled(!1, !1);
            return e !== !1 && (this._labels = {}), this._uncache(!0)
        }, c.invalidate = function () {
            var e = this._first;
            while (e) e.invalidate(), e = e._next;
            return this
        }, c._enabled = function (e, n) {
            if (e === this._gc) {
                var r = this._first;
                while (r) r._enabled(e, !0), r = r._next
            }
            return t.prototype._enabled.call(this, e, n)
        }, c.duration = function (e) {
            return arguments.length ? (this.duration() !== 0 && e !== 0 && this.timeScale(this._duration / e), this) : (this._dirty && this.totalDuration(), this._duration)
        }, c.totalDuration = function (e) {
            if (!arguments.length) {
                if (this._dirty) {
                    var t = 0, n = this._last, r = 999999999999, i, s;
                    while (n) i = n._prev, n._dirty && n.totalDuration(), n._startTime > r && this._sortChildren && !n._paused ? this.add(n, n._startTime - n._delay) : r = n._startTime, n._startTime < 0 && !n._paused && (t -= n._startTime, this._timeline.smoothChildTiming && (this._startTime += n._startTime / this._timeScale), this.shiftChildren(-n._startTime, !1, -9999999999), r = 0), s = n._startTime + n._totalDuration / n._timeScale, s > t && (t = s), n = i;
                    this._duration = this._totalDuration = t, this._dirty = !1
                }
                return this._totalDuration
            }
            return this.totalDuration() !== 0 && e !== 0 && this.timeScale(this._totalDuration / e), this
        }, c.usesFrames = function () {
            var t = this._timeline;
            while (t._timeline) t = t._timeline;
            return t === e._rootFramesTimeline
        }, c.rawTime = function () {
            return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
        }, r
    }, !0), window._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (e, t, n) {
        var r = function (t) {
            e.call(this, t), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
        }, i = 1e-10, s = [], o = new n(null, null, 1, 0), u = r.prototype = new e;
        return u.constructor = r, u.kill()._gc = !1, r.version = "1.11.0", u.invalidate = function () {
            return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), e.prototype.invalidate.call(this)
        }, u.addCallback = function (e, n, r, i) {
            return this.add(t.delayedCall(0, e, r, i), n)
        }, u.removeCallback = function (e, t) {
            if (e) if (t == null) this._kill(null, e); else {
                var n = this.getTweensOf(e, !1), r = n.length, i = this._parseTimeOrLabel(t);
                while (--r > -1) n[r]._startTime === i && n[r]._enabled(!1, !1)
            }
            return this
        }, u.tweenTo = function (e, n) {
            n = n || {};
            var r = {ease: o, overwrite: 2, useFrames: this.usesFrames(), immediateRender: !1}, i, u;
            for (i in n) r[i] = n[i];
            return r.time = this._parseTimeOrLabel(e), u = new t(this, Math.abs(Number(r.time) - this._time) / this._timeScale || .001, r), r.onStart = function () {
                u.target.paused(!0), u.vars.time !== u.target.time() && u.duration(Math.abs(u.vars.time - u.target.time()) / u.target._timeScale), n.onStart && n.onStart.apply(n.onStartScope || u, n.onStartParams || s)
            }, u
        }, u.tweenFromTo = function (e, t, n) {
            n = n || {}, e = this._parseTimeOrLabel(e), n.startAt = {
                onComplete: this.seek,
                onCompleteParams: [e],
                onCompleteScope: this
            }, n.immediateRender = n.immediateRender !== !1;
            var r = this.tweenTo(t, n);
            return r.duration(Math.abs(r.vars.time - e) / this._timeScale || .001)
        }, u.render = function (e, t, n) {
            this._gc && this._enabled(!0, !1);
            var r = this._dirty ? this.totalDuration() : this._totalDuration, o = this._duration, u = this._time,
                a = this._totalTime, f = this._startTime, l = this._timeScale, c = this._rawPrevTime, h = this._paused,
                p = this._cycle, d, v, m, g, y, b;
            if (e >= r) this._locked || (this._totalTime = r, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (v = !0, g = "onComplete", this._duration === 0 && (e === 0 || c < 0 || c === i) && c !== e && this._first && (y = !0, c > i && (g = "onReverseComplete"))), this._rawPrevTime = this._duration || !t || e ? e : i, this._yoyo && (this._cycle & 1) !== 0 ? this._time = e = 0 : (this._time = o, e = o + 1e-6); else if (e < 1e-7) {
                this._locked || (this._totalTime = this._cycle = 0), this._time = 0;
                if (u !== 0 || o === 0 && (c > i || e < 0 && c >= 0) && !this._locked) g = "onReverseComplete", v = this._reversed;
                e < 0 ? (this._active = !1, o === 0 && c >= 0 && this._first && (y = !0), this._rawPrevTime = e) : (this._rawPrevTime = o || !t || e ? e : i, e = 0, this._initted || (y = !0))
            } else o === 0 && c < 0 && (y = !0), this._time = this._rawPrevTime = e, this._locked || (this._totalTime = e, this._repeat !== 0 && (b = o + this._repeatDelay, this._cycle = this._totalTime / b >> 0, this._cycle !== 0 && this._cycle === this._totalTime / b && this._cycle--, this._time = this._totalTime - this._cycle * b, this._yoyo && (this._cycle & 1) !== 0 && (this._time = o - this._time), this._time > o ? (this._time = o, e = o + 1e-6) : this._time < 0 ? this._time = e = 0 : e = this._time));
            if (this._cycle !== p && !this._locked) {
                var w = this._yoyo && (p & 1) !== 0, E = w === (this._yoyo && (this._cycle & 1) !== 0),
                    S = this._totalTime, x = this._cycle, T = this._rawPrevTime, N = this._time;
                this._totalTime = p * o, this._cycle < p ? w = !w : this._totalTime += o, this._time = u, this._rawPrevTime = o === 0 ? c - 1e-5 : c, this._cycle = p, this._locked = !0, u = w ? 0 : o, this.render(u, t, o === 0), t || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || s), E && (u = w ? o + 1e-6 : -0.000001, this.render(u, !0, !1)), this._locked = !1;
                if (this._paused && !h) return;
                this._time = N, this._totalTime = S, this._cycle = x, this._rawPrevTime = T
            }
            if ((this._time === u || !this._first) && !n && !y) {
                a !== this._totalTime && this._onUpdate && (t || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || s));
                return
            }
            this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== a && e > 0 && (this._active = !0), a === 0 && this.vars.onStart && this._totalTime !== 0 && (t || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || s));
            if (this._time >= u) {
                d = this._first;
                while (d) {
                    m = d._next;
                    if (this._paused && !h) break;
                    if (d._active || d._startTime <= this._time && !d._paused && !d._gc) d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (e - d._startTime) * d._timeScale, t, n) : d.render((e - d._startTime) * d._timeScale, t, n);
                    d = m
                }
            } else {
                d = this._last;
                while (d) {
                    m = d._prev;
                    if (this._paused && !h) break;
                    if (d._active || d._startTime <= u && !d._paused && !d._gc) d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (e - d._startTime) * d._timeScale, t, n) : d.render((e - d._startTime) * d._timeScale, t, n);
                    d = m
                }
            }
            this._onUpdate && (t || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || s)), g && (this._locked || !this._gc && (f === this._startTime || l !== this._timeScale) && (this._time === 0 || r >= this.totalDuration()) && (v && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[g] && this.vars[g].apply(this.vars[g + "Scope"] || this, this.vars[g + "Params"] || s)))
        }, u.getActive = function (e, t, n) {
            e == null && (e = !0), t == null && (t = !0), n == null && (n = !1);
            var r = [], i = this.getChildren(e, t, n), s = 0, o = i.length, u, a;
            for (u = 0; u < o; u++) a = i[u], a.isActive() && (r[s++] = a);
            return r
        }, u.getLabelAfter = function (e) {
            e || e !== 0 && (e = this._time);
            var t = this.getLabelsArray(), n = t.length, r;
            for (r = 0; r < n; r++) if (t[r].time > e) return t[r].name;
            return null
        }, u.getLabelBefore = function (e) {
            e == null && (e = this._time);
            var t = this.getLabelsArray(), n = t.length;
            while (--n > -1) if (t[n].time < e) return t[n].name;
            return null
        }, u.getLabelsArray = function () {
            var e = [], t = 0, n;
            for (n in this._labels) e[t++] = {time: this._labels[n], name: n};
            return e.sort(function (e, t) {
                return e.time - t.time
            }), e
        }, u.progress = function (e) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && (this._cycle & 1) !== 0 ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
        }, u.totalProgress = function (e) {
            return arguments.length ? this.totalTime(this.totalDuration() * e, !1) : this._totalTime / this.totalDuration()
        }, u.totalDuration = function (t) {
            return arguments.length ? this._repeat === -1 ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (e.prototype.totalDuration.call(this), this._totalDuration = this._repeat === -1 ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
        }, u.time = function (e, t) {
            return arguments.length ? (this._dirty && this.totalDuration(), e > this._duration && (e = this._duration), this._yoyo && (this._cycle & 1) !== 0 ? e = this._duration - e + this._cycle * (this._duration + this._repeatDelay) : this._repeat !== 0 && (e += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(e, t)) : this._time
        }, u.repeat = function (e) {
            return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
        }, u.repeatDelay = function (e) {
            return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
        }, u.yoyo = function (e) {
            return arguments.length ? (this._yoyo = e, this) : this._yoyo
        }, u.currentLabel = function (e) {
            return arguments.length ? this.seek(e, !0) : this.getLabelBefore(this._time + 1e-8)
        }, r
    }, !0), function () {
        var e = 180 / Math.PI, t = [], n = [], r = [], i = {}, s = function (e, t, n, r) {
                this.a = e, this.b = t, this.c = n, this.d = r, this.da = r - e, this.ca = n - e, this.ba = t - e
            },
            o = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
            u = function (e, t, n, r) {
                var i = {a: e}, s = {}, o = {}, u = {c: r}, a = (e + t) / 2, f = (t + n) / 2, l = (n + r) / 2,
                    c = (a + f) / 2, h = (f + l) / 2, p = (h - c) / 8;
                return i.b = a + (e - a) / 4, s.b = c + p, i.c = s.a = (i.b + s.b) / 2, s.c = o.a = (c + h) / 2, o.b = h - p, u.b = l + (r - l) / 4, o.c = u.a = (o.b + u.b) / 2, [i, s, o, u]
            }, a = function (e, i, s, o, a) {
                var f = e.length - 1, l = 0, c = e[0].a, h, p, d, v, m, g, y, b, w, E, S, x, T;
                for (h = 0; h < f; h++) m = e[l], p = m.a, d = m.d, v = e[l + 1].d, a ? (S = t[h], x = n[h], T = (x + S) * i * .25 / (o ? .5 : r[h] || .5), g = d - (d - p) * (o ? i * .5 : S !== 0 ? T / S : 0), y = d + (v - d) * (o ? i * .5 : x !== 0 ? T / x : 0), b = d - (g + ((y - g) * (S * 3 / (S + x) + .5) / 4 || 0))) : (g = d - (d - p) * i * .5, y = d + (v - d) * i * .5, b = d - (g + y) / 2), g += b, y += b, m.c = w = g, h !== 0 ? m.b = c : m.b = c = m.a + (m.c - m.a) * .6, m.da = d - p, m.ca = w - p, m.ba = c - p, s ? (E = u(p, c, w, d), e.splice(l, 1, E[0], E[1], E[2], E[3]), l += 4) : l++, c = y;
                m = e[l], m.b = c, m.c = c + (m.d - c) * .4, m.da = m.d - m.a, m.ca = m.c - m.a, m.ba = c - m.a, s && (E = u(m.a, c, m.c, m.d), e.splice(l, 1, E[0], E[1], E[2], E[3]))
            }, f = function (e, r, i, o) {
                var u = [], a, f, l, c, h, p;
                if (o) {
                    e = [o].concat(e), f = e.length;
                    while (--f > -1) typeof (p = e[f][r]) == "string" && p.charAt(1) === "=" && (e[f][r] = o[r] + Number(p.charAt(0) + p.substr(2)))
                }
                a = e.length - 2;
                if (a < 0) return u[0] = new s(e[0][r], 0, 0, e[a < -1 ? 0 : 1][r]), u;
                for (f = 0; f < a; f++) l = e[f][r], c = e[f + 1][r], u[f] = new s(l, 0, 0, c), i && (h = e[f + 2][r], t[f] = (t[f] || 0) + (c - l) * (c - l), n[f] = (n[f] || 0) + (h - c) * (h - c));
                return u[f] = new s(e[f][r], 0, 0, e[f + 1][r]), u
            }, l = function (e, s, u, l, c, h) {
                var p = {}, d = [], v = h || e[0], m, g, y, b, w, E, S, x;
                c = typeof c == "string" ? "," + c + "," : o, s == null && (s = 1);
                for (g in e[0]) d.push(g);
                if (e.length > 1) {
                    x = e[e.length - 1], S = !0, m = d.length;
                    while (--m > -1) {
                        g = d[m];
                        if (Math.abs(v[g] - x[g]) > .05) {
                            S = !1;
                            break
                        }
                    }
                    S && (e = e.concat(), h && e.unshift(h), e.push(e[1]), h = e[e.length - 3])
                }
                t.length = n.length = r.length = 0, m = d.length;
                while (--m > -1) g = d[m], i[g] = c.indexOf("," + g + ",") !== -1, p[g] = f(e, g, i[g], h);
                m = t.length;
                while (--m > -1) t[m] = Math.sqrt(t[m]), n[m] = Math.sqrt(n[m]);
                if (!l) {
                    m = d.length;
                    while (--m > -1) if (i[g]) {
                        y = p[d[m]], E = y.length - 1;
                        for (b = 0; b < E; b++) w = y[b + 1].da / n[b] + y[b].da / t[b], r[b] = (r[b] || 0) + w * w
                    }
                    m = r.length;
                    while (--m > -1) r[m] = Math.sqrt(r[m])
                }
                m = d.length, b = u ? 4 : 1;
                while (--m > -1) g = d[m], y = p[g], a(y, s, u, l, i[g]), S && (y.splice(0, b), y.splice(y.length - b, b));
                return p
            }, c = function (e, t, n) {
                t = t || "soft";
                var r = {}, i = t === "cubic" ? 3 : 2, o = t === "soft", u = [], a, f, l, c, h, p, d, v, m, g, y;
                o && n && (e = [n].concat(e));
                if (e == null || e.length < i + 1) throw"invalid Bezier data";
                for (m in e[0]) u.push(m);
                p = u.length;
                while (--p > -1) {
                    m = u[p], r[m] = h = [], g = 0, v = e.length;
                    for (d = 0; d < v; d++) a = n == null ? e[d][m] : typeof (y = e[d][m]) == "string" && y.charAt(1) === "=" ? n[m] + Number(y.charAt(0) + y.substr(2)) : Number(y), o && d > 1 && d < v - 1 && (h[g++] = (a + h[g - 2]) / 2), h[g++] = a;
                    v = g - i + 1, g = 0;
                    for (d = 0; d < v; d += i) a = h[d], f = h[d + 1], l = h[d + 2], c = i === 2 ? 0 : h[d + 3], h[g++] = y = i === 3 ? new s(a, f, l, c) : new s(a, (2 * f + a) / 3, (2 * f + l) / 3, l);
                    h.length = g
                }
                return r
            }, h = function (e, t, n) {
                var r = 1 / n, i = e.length, s, o, u, a, f, l, c, h, p, d, v;
                while (--i > -1) {
                    d = e[i], u = d.a, a = d.d - u, f = d.c - u, l = d.b - u, s = o = 0;
                    for (h = 1; h <= n; h++) c = r * h, p = 1 - c, s = o - (o = (c * c * a + 3 * p * (c * f + p * l)) * c), v = i * n + h - 1, t[v] = (t[v] || 0) + s * s
                }
            }, p = function (e, t) {
                t = t >> 0 || 6;
                var n = [], r = [], i = 0, s = 0, o = t - 1, u = [], a = [], f, l, c, p;
                for (f in e) h(e[f], n, t);
                c = n.length;
                for (l = 0; l < c; l++) i += Math.sqrt(n[l]), p = l % t, a[p] = i, p === o && (s += i, p = l / t >> 0, u[p] = a, r[p] = s, i = 0, a = []);
                return {length: s, lengths: r, segments: u}
            }, d = window._gsDefine.plugin({
                propName: "bezier", priority: -1, API: 2, global: !0, init: function (e, t, n) {
                    this._target = e, t instanceof Array && (t = {values: t}), this._func = {}, this._round = {}, this._props = [], this._timeRes = t.timeResolution == null ? 6 : parseInt(t.timeResolution, 10);
                    var r = t.values || [], i = {}, s = r[0], o = t.autoRotate || n.vars.orientToBezier, u, a, f, h, d;
                    this._autoRotate = o ? o instanceof Array ? o : [["x", "y", "rotation", o === !0 ? 0 : Number(o) || 0]] : null;
                    for (u in s) this._props.push(u);
                    f = this._props.length;
                    while (--f > -1) u = this._props[f], this._overwriteProps.push(u), a = this._func[u] = typeof e[u] == "function", i[u] = a ? e[u.indexOf("set") || typeof e["get" + u.substr(3)] != "function" ? u : "get" + u.substr(3)]() : parseFloat(e[u]), d || i[u] !== r[0][u] && (d = i);
                    this._beziers = t.type !== "cubic" && t.type !== "quadratic" && t.type !== "soft" ? l(r, isNaN(t.curviness) ? 1 : t.curviness, !1, t.type === "thruBasic", t.correlate, d) : c(r, t.type, i), this._segCount = this._beziers[u].length;
                    if (this._timeRes) {
                        var v = p(this._beziers, this._timeRes);
                        this._length = v.length, this._lengths = v.lengths, this._segments = v.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                    }
                    if (o = this._autoRotate) {
                        o[0] instanceof Array || (this._autoRotate = o = [o]), f = o.length;
                        while (--f > -1) for (h = 0; h < 3; h++) u = o[f][h], this._func[u] = typeof e[u] == "function" ? e[u.indexOf("set") || typeof e["get" + u.substr(3)] != "function" ? u : "get" + u.substr(3)] : !1
                    }
                    return !0
                }, set: function (t) {
                    var n = this._segCount, r = this._func, i = this._target, s, o, u, a, f, l, c, h, p, d;
                    if (!this._timeRes) s = t < 0 ? 0 : t >= 1 ? n - 1 : n * t >> 0, l = (t - s * (1 / n)) * n; else {
                        p = this._lengths, d = this._curSeg, t *= this._length, u = this._li;
                        if (t > this._l2 && u < n - 1) {
                            h = n - 1;
                            while (u < h && (this._l2 = p[++u]) <= t) ;
                            this._l1 = p[u - 1], this._li = u, this._curSeg = d = this._segments[u], this._s2 = d[this._s1 = this._si = 0]
                        } else if (t < this._l1 && u > 0) {
                            while (u > 0 && (this._l1 = p[--u]) >= t) ;
                            u === 0 && t < this._l1 ? this._l1 = 0 : u++, this._l2 = p[u], this._li = u, this._curSeg = d = this._segments[u], this._s1 = d[(this._si = d.length - 1) - 1] || 0, this._s2 = d[this._si]
                        }
                        s = u, t -= this._l1, u = this._si;
                        if (t > this._s2 && u < d.length - 1) {
                            h = d.length - 1;
                            while (u < h && (this._s2 = d[++u]) <= t) ;
                            this._s1 = d[u - 1], this._si = u
                        } else if (t < this._s1 && u > 0) {
                            while (u > 0 && (this._s1 = d[--u]) >= t) ;
                            u === 0 && t < this._s1 ? this._s1 = 0 : u++, this._s2 = d[u], this._si = u
                        }
                        l = (u + (t - this._s1) / (this._s2 - this._s1)) * this._prec
                    }
                    o = 1 - l, u = this._props.length;
                    while (--u > -1) a = this._props[u], f = this._beziers[a][s], c = (l * l * f.da + 3 * o * (l * f.ca + o * f.ba)) * l + f.a, this._round[a] && (c = c + (c > 0 ? .5 : -0.5) >> 0), r[a] ? i[a](c) : i[a] = c;
                    if (this._autoRotate) {
                        var v = this._autoRotate, m, g, y, b, w, E, S;
                        u = v.length;
                        while (--u > -1) a = v[u][2], E = v[u][3] || 0, S = v[u][4] === !0 ? 1 : e, f = this._beziers[v[u][0]], m = this._beziers[v[u][1]], f && m && (f = f[s], m = m[s], g = f.a + (f.b - f.a) * l, b = f.b + (f.c - f.b) * l, g += (b - g) * l, b += (f.c + (f.d - f.c) * l - b) * l, y = m.a + (m.b - m.a) * l, w = m.b + (m.c - m.b) * l, y += (w - y) * l, w += (m.c + (m.d - m.c) * l - w) * l, c = Math.atan2(w - y, b - g) * S + E, r[a] ? i[a](c) : i[a] = c)
                    }
                }
            }), v = d.prototype;
        d.bezierThrough = l, d.cubicToQuadratic = u, d._autoCSS = !0, d.quadraticToCubic = function (e, t, n) {
            return new s(e, (2 * t + e) / 3, (2 * t + n) / 3, n)
        }, d._cssRegister = function () {
            var e = window._gsDefine.globals.CSSPlugin;
            if (!e) return;
            var t = e._internals, n = t._parseToProxy, r = t._setPluginRatio, i = t.CSSPropTween;
            t._registerComplexSpecialProp("bezier", {
                parser: function (e, t, s, o, u, a) {
                    t instanceof Array && (t = {values: t}), a = new d;
                    var f = t.values, l = f.length - 1, c = [], h = {}, p, v, m;
                    if (l < 0) return u;
                    for (p = 0; p <= l; p++) m = n(e, f[p], o, u, a, l !== p), c[p] = m.end;
                    for (v in t) h[v] = t[v];
                    return h.values = c, u = new i(e, "bezier", 0, 0, m.pt, 2), u.data = m, u.plugin = a, u.setRatio = r, h.autoRotate === 0 && (h.autoRotate = !0), h.autoRotate && !(h.autoRotate instanceof Array) && (p = h.autoRotate === !0 ? 0 : Number(h.autoRotate), h.autoRotate = m.end.left != null ? [["left", "top", "rotation", p, !1]] : m.end.x != null ? [["x", "y", "rotation", p, !1]] : !1), h.autoRotate && (o._transform || o._enableTransforms(!1), m.autoRotate = o._target._gsTransform), a._onInitTween(m.proxy, h, o._tween), u
                }
            })
        }, v._roundProps = function (e, t) {
            var n = this._overwriteProps, r = n.length;
            while (--r > -1) if (e[n[r]] || e.bezier || e.bezierThrough) this._round[n[r]] = t
        }, v._kill = function (e) {
            var t = this._props, n, r;
            for (n in this._beziers) if (n in e) {
                delete this._beziers[n], delete this._func[n], r = t.length;
                while (--r > -1) t[r] === n && t.splice(r, 1)
            }
            return this._super._kill.call(this, e)
        }
    }(), window._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (e, t) {
        var n = function () {
            e.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = n.prototype.setRatio
        }, r, i, s, o, u = {}, a = n.prototype = new e("css");
        a.constructor = n, n.version = "1.11.0", n.API = 2, n.defaultTransformPerspective = 0, a = "px", n.suffixMap = {
            top: a,
            right: a,
            bottom: a,
            left: a,
            width: a,
            height: a,
            fontSize: a,
            padding: a,
            margin: a,
            perspective: a
        };
        var f = /(?:\d|\-\d|\.\d|\-\.\d)+/g, l = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
            c = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, h = /[^\d\-\.]/g, p = /(?:\d|\-|\+|=|#|\.)*/g,
            d = /opacity *= *([^)]*)/, v = /opacity:([^;]*)/, m = /alpha\(opacity *=.+?\)/i, g = /^(rgb|hsl)/,
            y = /([A-Z])/g, b = /-([a-z])/gi, w = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, E = function (e, t) {
                return t.toUpperCase()
            }, S = /(?:Left|Right|Width)/i, x = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
            T = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, N = /,(?=[^\)]*(?:\(|$))/gi, C = Math.PI / 180,
            k = 180 / Math.PI, L = {}, A = document, O = A.createElement("div"), M = A.createElement("img"),
            _ = n._internals = {_specialProps: u}, D = navigator.userAgent, P, H, B, j, F, I, q = function () {
                var e = D.indexOf("Android"), t = A.createElement("div"), n;
                return B = D.indexOf("Safari") !== -1 && D.indexOf("Chrome") === -1 && (e === -1 || Number(D.substr(e + 8, 1)) > 3), F = B && Number(D.substr(D.indexOf("Version/") + 8, 1)) < 6, j = D.indexOf("Firefox") !== -1, /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(D), I = parseFloat(RegExp.$1), t.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>", n = t.getElementsByTagName("a")[0], n ? /^0.55/.test(n.style.opacity) : !1
            }(), R = function (e) {
                return d.test(typeof e == "string" ? e : (e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
            }, U = function (e) {
                window.console && console.log(e)
            }, z = "", W = "", X = function (e, t) {
                t = t || O;
                var n = t.style, r, i;
                if (n[e] !== undefined) return e;
                e = e.charAt(0).toUpperCase() + e.substr(1), r = ["O", "Moz", "ms", "Ms", "Webkit"], i = 5;
                while (--i > -1 && n[r[i] + e] === undefined) ;
                return i >= 0 ? (W = i === 3 ? "ms" : r[i], z = "-" + W.toLowerCase() + "-", W + e) : null
            }, V = A.defaultView ? A.defaultView.getComputedStyle : function () {
            }, $ = n.getStyle = function (e, t, n, r, i) {
                var s;
                return !q && t === "opacity" ? R(e) : (!r && e.style[t] ? s = e.style[t] : (n = n || V(e, null)) ? (e = n.getPropertyValue(t.replace(y, "-$1").toLowerCase()), s = e || n.length ? e : n[t]) : e.currentStyle && (s = e.currentStyle[t]), i == null || !!s && s !== "none" && s !== "auto" && s !== "auto auto" ? s : i)
            }, J = function (e, t, n, r, i) {
                if (r === "px" || !r) return n;
                if (r === "auto" || !n) return 0;
                var s = S.test(t), o = e, u = O.style, a = n < 0, f;
                return a && (n = -n), r === "%" && t.indexOf("border") !== -1 ? f = n / 100 * (s ? e.clientWidth : e.clientHeight) : (u.cssText = "border-style:solid;border-width:0;position:absolute;line-height:0;", r === "%" || !o.appendChild ? (o = e.parentNode || A.body, u[s ? "width" : "height"] = n + r) : u[s ? "borderLeftWidth" : "borderTopWidth"] = n + r, o.appendChild(O), f = parseFloat(O[s ? "offsetWidth" : "offsetHeight"]), o.removeChild(O), f === 0 && !i && (f = J(e, t, n, r, !0))), a ? -f : f
            }, K = function (e, t, n) {
                if ($(e, "position", n) !== "absolute") return 0;
                var r = t === "left" ? "Left" : "Top", i = $(e, "margin" + r, n);
                return e["offset" + r] - (J(e, t, parseFloat(i), i.replace(p, "")) || 0)
            }, Q = function (e, t) {
                var n = {}, r, i;
                if (t = t || V(e, null)) if (r = t.length) while (--r > -1) n[t[r].replace(b, E)] = t.getPropertyValue(t[r]); else for (r in t) n[r] = t[r]; else if (t = e.currentStyle || e.style) for (r in t) typeof r == "string" && n[r] !== undefined && (n[r.replace(b, E)] = t[r]);
                return q || (n.opacity = R(e)), i = Nt(e, t, !1), n.rotation = i.rotation, n.skewX = i.skewX, n.scaleX = i.scaleX, n.scaleY = i.scaleY, n.x = i.x, n.y = i.y, Tt && (n.z = i.z, n.rotationX = i.rotationX, n.rotationY = i.rotationY, n.scaleZ = i.scaleZ), n.filters && delete n.filters, n
            }, G = function (e, t, n, r, i) {
                var s = {}, o = e.style, u, a, f;
                for (a in n) a !== "cssText" && a !== "length" && isNaN(a) && (t[a] !== (u = n[a]) || i && i[a]) && a.indexOf("Origin") === -1 && (typeof u == "number" || typeof u == "string") && (s[a] = u !== "auto" || a !== "left" && a !== "top" ? u !== "" && u !== "auto" && u !== "none" || typeof t[a] != "string" || t[a].replace(h, "") === "" ? u : 0 : K(e, a), o[a] !== undefined && (f = new ht(o, a, o[a], f)));
                if (r) for (a in r) a !== "className" && (s[a] = r[a]);
                return {difs: s, firstMPT: f}
            }, Y = {width: ["Left", "Right"], height: ["Top", "Bottom"]},
            Z = ["marginLeft", "marginRight", "marginTop", "marginBottom"], et = function (e, t, n) {
                var r = parseFloat(t === "width" ? e.offsetWidth : e.offsetHeight), i = Y[t], s = i.length;
                n = n || V(e, null);
                while (--s > -1) r -= parseFloat($(e, "padding" + i[s], n, !0)) || 0, r -= parseFloat($(e, "border" + i[s] + "Width", n, !0)) || 0;
                return r
            }, tt = function (e, t) {
                if (e == null || e === "" || e === "auto" || e === "auto auto") e = "0 0";
                var n = e.split(" "), r = e.indexOf("left") !== -1 ? "0%" : e.indexOf("right") !== -1 ? "100%" : n[0],
                    i = e.indexOf("top") !== -1 ? "0%" : e.indexOf("bottom") !== -1 ? "100%" : n[1];
                i == null ? i = "0" : i === "center" && (i = "50%");
                if (r === "center" || isNaN(parseFloat(r)) && (r + "").indexOf("=") === -1) r = "50%";
                return t && (t.oxp = r.indexOf("%") !== -1, t.oyp = i.indexOf("%") !== -1, t.oxr = r.charAt(1) === "=", t.oyr = i.charAt(1) === "=", t.ox = parseFloat(r.replace(h, "")), t.oy = parseFloat(i.replace(h, ""))), r + " " + i + (n.length > 2 ? " " + n[2] : "")
            }, nt = function (e, t) {
                return typeof e == "string" && e.charAt(1) === "=" ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : parseFloat(e) - parseFloat(t)
            }, rt = function (e, t) {
                return e == null ? t : typeof e == "string" && e.charAt(1) === "=" ? parseInt(e.charAt(0) + "1", 10) * Number(e.substr(2)) + t : parseFloat(e)
            }, it = function (e, t, n, r) {
                var i = 1e-6, s, o, u, a;
                return e == null ? a = t : typeof e == "number" ? a = e : (s = 360, o = e.split("_"), u = Number(o[0].replace(h, "")) * (e.indexOf("rad") === -1 ? 1 : k) - (e.charAt(1) === "=" ? 0 : t), o.length && (r && (r[n] = t + u), e.indexOf("short") !== -1 && (u %= s, u !== u % (s / 2) && (u = u < 0 ? u + s : u - s)), e.indexOf("_cw") !== -1 && u < 0 ? u = (u + s * 9999999999) % s - (u / s | 0) * s : e.indexOf("ccw") !== -1 && u > 0 && (u = (u - s * 9999999999) % s - (u / s | 0) * s)), a = t + u), a < i && a > -i && (a = 0), a
            }, st = {
                aqua: [0, 255, 255],
                lime: [0, 255, 0],
                silver: [192, 192, 192],
                black: [0, 0, 0],
                maroon: [128, 0, 0],
                teal: [0, 128, 128],
                blue: [0, 0, 255],
                navy: [0, 0, 128],
                white: [255, 255, 255],
                fuchsia: [255, 0, 255],
                olive: [128, 128, 0],
                yellow: [255, 255, 0],
                orange: [255, 165, 0],
                gray: [128, 128, 128],
                purple: [128, 0, 128],
                green: [0, 128, 0],
                red: [255, 0, 0],
                pink: [255, 192, 203],
                cyan: [0, 255, 255],
                transparent: [255, 255, 255, 0]
            }, ot = function (e, t, n) {
                return e = e < 0 ? e + 1 : e > 1 ? e - 1 : e, (e * 6 < 1 ? t + (n - t) * e * 6 : e < .5 ? n : e * 3 < 2 ? t + (n - t) * (2 / 3 - e) * 6 : t) * 255 + .5 | 0
            }, ut = function (e) {
                var t, n, r, i, s, o;
                return !e || e === "" ? st.black : typeof e == "number" ? [e >> 16, e >> 8 & 255, e & 255] : (e.charAt(e.length - 1) === "," && (e = e.substr(0, e.length - 1)), st[e] ? st[e] : e.charAt(0) === "#" ? (e.length === 4 && (t = e.charAt(1), n = e.charAt(2), r = e.charAt(3), e = "#" + t + t + n + n + r + r), e = parseInt(e.substr(1), 16), [e >> 16, e >> 8 & 255, e & 255]) : e.substr(0, 3) === "hsl" ? (e = e.match(f), i = Number(e[0]) % 360 / 360, s = Number(e[1]) / 100, o = Number(e[2]) / 100, n = o <= .5 ? o * (s + 1) : o + s - o * s, t = o * 2 - n, e.length > 3 && (e[3] = Number(e[3])), e[0] = ot(i + 1 / 3, t, n), e[1] = ot(i, t, n), e[2] = ot(i - 1 / 3, t, n), e) : (e = e.match(f) || st.transparent, e[0] = Number(e[0]), e[1] = Number(e[1]), e[2] = Number(e[2]), e.length > 3 && (e[3] = Number(e[3])), e))
            }, at = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
        for (a in st) at += "|" + a + "\\b";
        at = new RegExp(at + ")", "gi");
        var ft = function (e, t, n, r) {
            if (e == null) return function (e) {
                return e
            };
            var i = t ? (e.match(at) || [""])[0] : "", s = e.split(i).join("").match(c) || [],
                o = e.substr(0, e.indexOf(s[0])), u = e.charAt(e.length - 1) === ")" ? ")" : "",
                a = e.indexOf(" ") !== -1 ? " " : ",", l = s.length, h = l > 0 ? s[0].replace(f, "") : "", p;
            return l ? t ? (p = function (e) {
                var t, f, d, v;
                if (typeof e == "number") e += h; else if (r && N.test(e)) {
                    v = e.replace(N, "|").split("|");
                    for (d = 0; d < v.length; d++) v[d] = p(v[d]);
                    return v.join(",")
                }
                t = (e.match(at) || [i])[0], f = e.split(t).join("").match(c) || [], d = f.length;
                if (l > d--) while (++d < l) f[d] = n ? f[(d - 1) / 2 | 0] : s[d];
                return o + f.join(a) + a + t + u + (e.indexOf("inset") !== -1 ? " inset" : "")
            }, p) : (p = function (e) {
                var t, i, f;
                if (typeof e == "number") e += h; else if (r && N.test(e)) {
                    i = e.replace(N, "|").split("|");
                    for (f = 0; f < i.length; f++) i[f] = p(i[f]);
                    return i.join(",")
                }
                t = e.match(c) || [], f = t.length;
                if (l > f--) while (++f < l) t[f] = n ? t[(f - 1) / 2 | 0] : s[f];
                return o + t.join(a) + u
            }, p) : function (e) {
                return e
            }
        }, lt = function (e) {
            return e = e.split(","), function (t, n, r, i, s, o, u) {
                var a = (n + "").split(" "), f;
                u = {};
                for (f = 0; f < 4; f++) u[e[f]] = a[f] = a[f] || a[(f - 1) / 2 >> 0];
                return i.parse(t, u, s, o)
            }
        }, ct = _._setPluginRatio = function (e) {
            this.plugin.setRatio(e);
            var t = this.data, n = t.proxy, r = t.firstMPT, i = 1e-6, s, o, u, a;
            while (r) s = n[r.v], r.r ? s = s > 0 ? s + .5 | 0 : s - .5 | 0 : s < i && s > -i && (s = 0), r.t[r.p] = s, r = r._next;
            t.autoRotate && (t.autoRotate.rotation = n.rotation);
            if (e === 1) {
                r = t.firstMPT;
                while (r) {
                    o = r.t;
                    if (!o.type) o.e = o.s + o.xs0; else if (o.type === 1) {
                        a = o.xs0 + o.s + o.xs1;
                        for (u = 1; u < o.l; u++) a += o["xn" + u] + o["xs" + (u + 1)];
                        o.e = a
                    }
                    r = r._next
                }
            }
        }, ht = function (e, t, n, r, i) {
            this.t = e, this.p = t, this.v = n, this.r = i, r && (r._prev = this, this._next = r)
        }, pt = _._parseToProxy = function (e, t, n, r, i, s) {
            var o = r, u = {}, a = {}, f = n._transform, l = L, c, h, p, d, v;
            n._transform = null, L = t, r = v = n.parse(e, t, r, i), L = l, s && (n._transform = f, o && (o._prev = null, o._prev && (o._prev._next = null)));
            while (r && r !== o) {
                if (r.type <= 1) {
                    h = r.p, a[h] = r.s + r.c, u[h] = r.s, s || (d = new ht(r, "s", h, d, r.r), r.c = 0);
                    if (r.type === 1) {
                        c = r.l;
                        while (--c > 0) p = "xn" + c, h = r.p + "_" + p, a[h] = r.data[p], u[h] = r[p], s || (d = new ht(r, p, h, d, r.rxp[p]))
                    }
                }
                r = r._next
            }
            return {proxy: u, end: a, firstMPT: d, pt: v}
        }, dt = _.CSSPropTween = function (e, t, n, i, s, u, a, f, l, c, h) {
            this.t = e, this.p = t, this.s = n, this.c = i, this.n = a || t, e instanceof dt || o.push(this.n), this.r = f, this.type = u || 0, l && (this.pr = l, r = !0), this.b = c === undefined ? n : c, this.e = h === undefined ? n + i : h, s && (this._next = s, s._prev = this)
        }, vt = n.parseComplex = function (e, t, n, r, i, s, o, u, a, c) {
            n = n || s || "", o = new dt(e, t, 0, 0, o, c ? 2 : 1, null, !1, u, n, r), r += "";
            var h = n.split(", ").join(",").split(" "), p = r.split(", ").join(",").split(" "), d = h.length,
                v = P !== !1, m, y, b, w, E, S, x, T, C, k, L, A;
            if (r.indexOf(",") !== -1 || n.indexOf(",") !== -1) h = h.join(" ").replace(N, ", ").split(" "), p = p.join(" ").replace(N, ", ").split(" "), d = h.length;
            d !== p.length && (h = (s || "").split(" "), d = h.length), o.plugin = a, o.setRatio = c;
            for (m = 0; m < d; m++) {
                w = h[m], E = p[m], T = parseFloat(w);
                if (T || T === 0) o.appendXtra("", T, nt(E, T), E.replace(l, ""), v && E.indexOf("px") !== -1, !0); else if (i && (w.charAt(0) === "#" || st[w] || g.test(w))) A = E.charAt(E.length - 1) === "," ? ")," : ")", w = ut(w), E = ut(E), C = w.length + E.length > 6, C && !q && E[3] === 0 ? (o["xs" + o.l] += o.l ? " transparent" : "transparent", o.e = o.e.split(p[m]).join("transparent")) : (q || (C = !1), o.appendXtra(C ? "rgba(" : "rgb(", w[0], E[0] - w[0], ",", !0, !0).appendXtra("", w[1], E[1] - w[1], ",", !0).appendXtra("", w[2], E[2] - w[2], C ? "," : A, !0), C && (w = w.length < 4 ? 1 : w[3], o.appendXtra("", w, (E.length < 4 ? 1 : E[3]) - w, A, !1))); else {
                    S = w.match(f);
                    if (!S) o["xs" + o.l] += o.l ? " " + w : w; else {
                        x = E.match(l);
                        if (!x || x.length !== S.length) return o;
                        b = 0;
                        for (y = 0; y < S.length; y++) L = S[y], k = w.indexOf(L, b), o.appendXtra(w.substr(b, k - b), Number(L), nt(x[y], L), "", v && w.substr(k + L.length, 2) === "px", y === 0), b = k + L.length;
                        o["xs" + o.l] += w.substr(b)
                    }
                }
            }
            if (r.indexOf("=") !== -1 && o.data) {
                A = o.xs0 + o.data.s;
                for (m = 1; m < o.l; m++) A += o["xs" + m] + o.data["xn" + m];
                o.e = A + o["xs" + m]
            }
            return o.l || (o.type = -1, o.xs0 = o.e), o.xfirst || o
        }, mt = 9;
        a = dt.prototype, a.l = a.pr = 0;
        while (--mt > 0) a["xn" + mt] = 0, a["xs" + mt] = "";
        a.xs0 = "", a._next = a._prev = a.xfirst = a.data = a.plugin = a.setRatio = a.rxp = null, a.appendXtra = function (e, t, n, r, i, s) {
            var o = this, u = o.l;
            return o["xs" + u] += s && u ? " " + e : e || "", !n && u !== 0 && !o.plugin ? (o["xs" + u] += t + (r || ""), o) : (o.l++, o.type = o.setRatio ? 2 : 1, o["xs" + o.l] = r || "", u > 0 ? (o.data["xn" + u] = t + n, o.rxp["xn" + u] = i, o["xn" + u] = t, o.plugin || (o.xfirst = new dt(o, "xn" + u, t, n, o.xfirst || o, 0, o.n, i, o.pr), o.xfirst.xs0 = 0), o) : (o.data = {s: t + n}, o.rxp = {}, o.s = t, o.c = n, o.r = i, o))
        };
        var gt = function (e, t) {
            t = t || {}, this.p = t.prefix ? X(e) || e : e, u[e] = u[this.p] = this, this.format = t.formatter || ft(t.defaultValue, t.color, t.collapsible, t.multi), t.parser && (this.parse = t.parser), this.clrs = t.color, this.multi = t.multi, this.keyword = t.keyword, this.dflt = t.defaultValue, this.pr = t.priority || 0
        }, yt = _._registerComplexSpecialProp = function (e, t, n) {
            typeof t != "object" && (t = {parser: n});
            var r = e.split(","), i = t.defaultValue, s, o;
            n = n || [i];
            for (s = 0; s < r.length; s++) t.prefix = s === 0 && t.prefix, t.defaultValue = n[s] || i, o = new gt(r[s], t)
        }, bt = function (e) {
            if (!u[e]) {
                var t = e.charAt(0).toUpperCase() + e.substr(1) + "Plugin";
                yt(e, {
                    parser: function (e, n, r, i, s, o, a) {
                        var f = (window.GreenSockGlobals || window).com.greensock.plugins[t];
                        return f ? (f._cssRegister(), u[r].parse(e, n, r, i, s, o, a)) : (U("Error: " + t + " js file not loaded."), s)
                    }
                })
            }
        };
        a = gt.prototype, a.parseComplex = function (e, t, n, r, i, s) {
            var o = this.keyword, u, a, f, l, c, h;
            this.multi && (N.test(n) || N.test(t) ? (a = t.replace(N, "|").split("|"), f = n.replace(N, "|").split("|")) : o && (a = [t], f = [n]));
            if (f) {
                l = f.length > a.length ? f.length : a.length;
                for (u = 0; u < l; u++) t = a[u] = a[u] || this.dflt, n = f[u] = f[u] || this.dflt, o && (c = t.indexOf(o), h = n.indexOf(o), c !== h && (n = h === -1 ? f : a, n[u] += " " + o));
                t = a.join(", "), n = f.join(", ")
            }
            return vt(e, this.p, t, n, this.clrs, this.dflt, r, this.pr, i, s)
        }, a.parse = function (e, t, n, r, i, o, u) {
            return this.parseComplex(e.style, this.format($(e, this.p, s, !1, this.dflt)), this.format(t), i, o)
        }, n.registerSpecialProp = function (e, t, n) {
            yt(e, {
                parser: function (e, r, i, s, o, u, a) {
                    var f = new dt(e, i, 0, 0, o, 2, i, !1, n);
                    return f.plugin = u, f.setRatio = t(e, r, s._tween, i), f
                }, priority: n
            })
        };
        var wt = "scaleX,scaleY,scaleZ,x,y,z,skewX,rotation,rotationX,rotationY,perspective".split(","),
            Et = X("transform"), St = z + "transform", xt = X("transformOrigin"), Tt = X("perspective") !== null,
            Nt = function (e, t, r, i) {
                if (e._gsTransform && r && !i) return e._gsTransform;
                var s = r ? e._gsTransform || {skewY: 0} : {skewY: 0}, o = s.scaleX < 0, u = 2e-5, a = 1e5, f = 179.99,
                    l = f * C, c = Tt ? parseFloat($(e, xt, t, !1, "0 0 0").split(" ")[2]) || s.zOrigin || 0 : 0, h, p,
                    d, v, m, g, y, b, w, E, S, T, N;
                Et ? h = $(e, St, t, !0) : e.currentStyle && (h = e.currentStyle.filter.match(x), h = h && h.length === 4 ? [h[0].substr(4), Number(h[2].substr(4)), Number(h[1].substr(4)), h[3].substr(4), s.x || 0, s.y || 0].join(",") : ""), p = (h || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], d = p.length;
                while (--d > -1) v = Number(p[d]), p[d] = (m = v - (v |= 0)) ? (m * a + (m < 0 ? -0.5 : .5) | 0) / a + v : v;
                if (p.length === 16) {
                    var L = p[8], A = p[9], O = p[10], M = p[12], _ = p[13], D = p[14];
                    s.zOrigin && (D = -s.zOrigin, M = L * D - p[12], _ = A * D - p[13], D = O * D + s.zOrigin - p[14]);
                    if (!r || i || s.rotationX == null) {
                        var P = p[0], H = p[1], B = p[2], j = p[3], F = p[4], I = p[5], q = p[6], R = p[7], U = p[11],
                            z = Math.atan2(q, O), W = z < -l || z > l, X, V, J, K, Q, G, Y;
                        s.rotationX = z * k, z && (K = Math.cos(-z), Q = Math.sin(-z), X = F * K + L * Q, V = I * K + A * Q, J = q * K + O * Q, L = F * -Q + L * K, A = I * -Q + A * K, O = q * -Q + O * K, U = R * -Q + U * K, F = X, I = V, q = J), z = Math.atan2(L, P), s.rotationY = z * k, z && (G = z < -l || z > l, K = Math.cos(-z), Q = Math.sin(-z), X = P * K - L * Q, V = H * K - A * Q, J = B * K - O * Q, A = H * Q + A * K, O = B * Q + O * K, U = j * Q + U * K, P = X, H = V, B = J), z = Math.atan2(H, I), s.rotation = z * k, z && (Y = z < -l || z > l, K = Math.cos(-z), Q = Math.sin(-z), P = P * K + F * Q, V = H * K + I * Q, I = H * -Q + I * K, q = B * -Q + q * K, H = V), Y && W ? s.rotation = s.rotationX = 0 : Y && G ? s.rotation = s.rotationY = 0 : G && W && (s.rotationY = s.rotationX = 0), s.scaleX = (Math.sqrt(P * P + H * H) * a + .5 | 0) / a, s.scaleY = (Math.sqrt(I * I + A * A) * a + .5 | 0) / a, s.scaleZ = (Math.sqrt(q * q + O * O) * a + .5 | 0) / a, s.skewX = 0, s.perspective = U ? 1 / (U < 0 ? -U : U) : 0, s.x = M, s.y = _, s.z = D
                    }
                } else if ((!Tt || i || !p.length || s.x !== p[4] || s.y !== p[5] || !s.rotationX && !s.rotationY) && (s.x === undefined || $(e, "display", t) !== "none")) {
                    var Z = p.length >= 6, et = Z ? p[0] : 1, tt = p[1] || 0, nt = p[2] || 0, rt = Z ? p[3] : 1;
                    s.x = p[4] || 0, s.y = p[5] || 0, g = Math.sqrt(et * et + tt * tt), y = Math.sqrt(rt * rt + nt * nt), b = et || tt ? Math.atan2(tt, et) * k : s.rotation || 0, w = nt || rt ? Math.atan2(nt, rt) * k + b : s.skewX || 0, E = g - Math.abs(s.scaleX || 0), S = y - Math.abs(s.scaleY || 0), Math.abs(w) > 90 && Math.abs(w) < 270 && (o ? (g *= -1, w += b <= 0 ? 180 : -180, b += b <= 0 ? 180 : -180) : (y *= -1, w += w <= 0 ? 180 : -180)), T = (b - s.rotation) % 180, N = (w - s.skewX) % 180;
                    if (s.skewX === undefined || E > u || E < -u || S > u || S < -u || T > -f && T < f && T * a | !1 || N > -f && N < f && N * a | !1) s.scaleX = g, s.scaleY = y, s.rotation = b, s.skewX = w;
                    Tt && (s.rotationX = s.rotationY = s.z = 0, s.perspective = parseFloat(n.defaultTransformPerspective) || 0, s.scaleZ = 1)
                }
                s.zOrigin = c;
                for (d in s) s[d] < u && s[d] > -u && (s[d] = 0);
                return r && (e._gsTransform = s), s
            }, Ct = function (e) {
                var t = this.data, n = -t.rotation * C, r = n + t.skewX * C, i = 1e5,
                    s = (Math.cos(n) * t.scaleX * i | 0) / i, o = (Math.sin(n) * t.scaleX * i | 0) / i,
                    u = (Math.sin(r) * -t.scaleY * i | 0) / i, a = (Math.cos(r) * t.scaleY * i | 0) / i, f = this.t.style,
                    l = this.t.currentStyle, c, h;
                if (!l) return;
                h = o, o = -u, u = -h, c = l.filter, f.filter = "";
                var v = this.t.offsetWidth, m = this.t.offsetHeight, g = l.position !== "absolute",
                    y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + s + ", M12=" + o + ", M21=" + u + ", M22=" + a,
                    b = t.x, w = t.y, E, S;
                t.ox != null && (E = (t.oxp ? v * t.ox * .01 : t.ox) - v / 2, S = (t.oyp ? m * t.oy * .01 : t.oy) - m / 2, b += E - (E * s + S * o), w += S - (E * u + S * a)), g ? (E = v / 2, S = m / 2, y += ", Dx=" + (E - (E * s + S * o) + b) + ", Dy=" + (S - (E * u + S * a) + w) + ")") : y += ", sizingMethod='auto expand')", c.indexOf("DXImageTransform.Microsoft.Matrix(") !== -1 ? f.filter = c.replace(T, y) : f.filter = y + " " + c, (e === 0 || e === 1) && s === 1 && o === 0 && u === 0 && a === 1 && (!g || y.indexOf("Dx=0, Dy=0") !== -1) && (!d.test(c) || parseFloat(RegExp.$1) === 100) && c.indexOf(c.indexOf("Alpha")) === -1 && f.removeAttribute("filter");
                if (!g) {
                    var x = I < 8 ? 1 : -1, N, k, L;
                    E = t.ieOffsetX || 0, S = t.ieOffsetY || 0, t.ieOffsetX = Math.round((v - ((s < 0 ? -s : s) * v + (o < 0 ? -o : o) * m)) / 2 + b), t.ieOffsetY = Math.round((m - ((a < 0 ? -a : a) * m + (u < 0 ? -u : u) * v)) / 2 + w);
                    for (mt = 0; mt < 4; mt++) k = Z[mt], N = l[k], h = N.indexOf("px") !== -1 ? parseFloat(N) : J(this.t, k, parseFloat(N), N.replace(p, "")) || 0, h !== t[k] ? L = mt < 2 ? -t.ieOffsetX : -t.ieOffsetY : L = mt < 2 ? E - t.ieOffsetX : S - t.ieOffsetY, f[k] = (t[k] = Math.round(h - L * (mt === 0 || mt === 2 ? 1 : x))) + "px"
                }
            }, kt = function (e) {
                var t = this.data, n = this.t.style, r = t.rotation * C, i = t.scaleX, s = t.scaleY, o = t.scaleZ,
                    u = t.perspective, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x, T, N, k, L, A, O, M, _, D, P;
                j && (_ = n.top ? "top" : n.bottom ? "bottom" : parseFloat($(this.t, "top", null, !1)) ? "bottom" : "top", L = $(this.t, _, null, !1), D = parseFloat(L) || 0, P = L.substr((D + "").length) || "px", t._ffFix = !t._ffFix, n[_] = (t._ffFix ? D + .05 : D - .05) + P);
                if (r || t.skewX) N = Math.cos(r), k = Math.sin(r), a = N, h = k, t.skewX && (r -= t.skewX * C, N = Math.cos(r), k = Math.sin(r)), f = -k, p = N; else {
                    if (!t.rotationY && !t.rotationX && o === 1 && !u) {
                        n[Et] = "translate3d(" + t.x + "px," + t.y + "px," + t.z + "px)" + (i !== 1 || s !== 1 ? " scale(" + i + "," + s + ")" : "");
                        return
                    }
                    a = p = 1, f = h = 0
                }
                y = 1, l = c = d = v = m = g = b = w = E = 0, S = u ? -1 / u : 0, x = t.zOrigin, T = 1e5, r = t.rotationY * C, r && (N = Math.cos(r), k = Math.sin(r), m = y * -k, w = S * -k, l = a * k, d = h * k, y *= N, S *= N, a *= N, h *= N), r = t.rotationX * C, r && (N = Math.cos(r), k = Math.sin(r), L = f * N + l * k, A = p * N + d * k, O = g * N + y * k, M = E * N + S * k, l = f * -k + l * N, d = p * -k + d * N, y = g * -k + y * N, S = E * -k + S * N, f = L, p = A, g = O, E = M), o !== 1 && (l *= o, d *= o, y *= o, S *= o), s !== 1 && (f *= s, p *= s, g *= s, E *= s), i !== 1 && (a *= i, h *= i, m *= i, w *= i), x && (b -= x, c = l * b, v = d * b, b = y * b + x), c = (L = (c += t.x) - (c |= 0)) ? (L * T + (L < 0 ? -0.5 : .5) | 0) / T + c : c, v = (L = (v += t.y) - (v |= 0)) ? (L * T + (L < 0 ? -0.5 : .5) | 0) / T + v : v, b = (L = (b += t.z) - (b |= 0)) ? (L * T + (L < 0 ? -0.5 : .5) | 0) / T + b : b, n[Et] = "matrix3d(" + [(a * T | 0) / T, (h * T | 0) / T, (m * T | 0) / T, (w * T | 0) / T, (f * T | 0) / T, (p * T | 0) / T, (g * T | 0) / T, (E * T | 0) / T, (l * T | 0) / T, (d * T | 0) / T, (y * T | 0) / T, (S * T | 0) / T, c, v, b, u ? 1 + -b / u : 1].join(",") + ")"
            }, Lt = function (e) {
                var t = this.data, n = this.t, r = n.style, i, s, o, u, a, f, l, c, h;
                j && (i = r.top ? "top" : r.bottom ? "bottom" : parseFloat($(n, "top", null, !1)) ? "bottom" : "top", s = $(n, i, null, !1), o = parseFloat(s) || 0, u = s.substr((o + "").length) || "px", t._ffFix = !t._ffFix, r[i] = (t._ffFix ? o + .05 : o - .05) + u), !t.rotation && !t.skewX ? r[Et] = "matrix(" + t.scaleX + ",0,0," + t.scaleY + "," + t.x + "," + t.y + ")" : (a = t.rotation * C, f = a - t.skewX * C, l = 1e5, c = t.scaleX * l, h = t.scaleY * l, r[Et] = "matrix(" + (Math.cos(a) * c | 0) / l + "," + (Math.sin(a) * c | 0) / l + "," + (Math.sin(f) * -h | 0) / l + "," + (Math.cos(f) * h | 0) / l + "," + t.x + "," + t.y + ")")
            };
        yt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D", {
            parser: function (e, t, n, r, i, o, u) {
                if (r._transform) return i;
                var a = r._transform = Nt(e, s, !0, u.parseTransform), f = e.style, l = 1e-6, c = wt.length, h = u,
                    p = {}, d, v, m, g, y, b, w;
                if (typeof h.transform == "string" && Et) m = f.cssText, f[Et] = h.transform, f.display = "block", d = Nt(e, null, !1), f.cssText = m; else if (typeof h == "object") {
                    d = {
                        scaleX: rt(h.scaleX != null ? h.scaleX : h.scale, a.scaleX),
                        scaleY: rt(h.scaleY != null ? h.scaleY : h.scale, a.scaleY),
                        scaleZ: rt(h.scaleZ != null ? h.scaleZ : h.scale, a.scaleZ),
                        x: rt(h.x, a.x),
                        y: rt(h.y, a.y),
                        z: rt(h.z, a.z),
                        perspective: rt(h.transformPerspective, a.perspective)
                    }, w = h.directionalRotation;
                    if (w != null) if (typeof w == "object") for (m in w) h[m] = w[m]; else h.rotation = w;
                    d.rotation = it("rotation" in h ? h.rotation : "shortRotation" in h ? h.shortRotation + "_short" : "rotationZ" in h ? h.rotationZ : a.rotation, a.rotation, "rotation", p), Tt && (d.rotationX = it("rotationX" in h ? h.rotationX : "shortRotationX" in h ? h.shortRotationX + "_short" : a.rotationX || 0, a.rotationX, "rotationX", p), d.rotationY = it("rotationY" in h ? h.rotationY : "shortRotationY" in h ? h.shortRotationY + "_short" : a.rotationY || 0, a.rotationY, "rotationY", p)), d.skewX = h.skewX == null ? a.skewX : it(h.skewX, a.skewX), d.skewY = h.skewY == null ? a.skewY : it(h.skewY, a.skewY);
                    if (v = d.skewY - a.skewY) d.skewX += v, d.rotation += v
                }
                h.force3D != null && (a.force3D = h.force3D, b = !0), y = a.force3D || a.z || a.rotationX || a.rotationY || d.z || d.rotationX || d.rotationY || d.perspective, !y && h.scale != null && (d.scaleZ = 1);
                while (--c > -1) {
                    n = wt[c], g = d[n] - a[n];
                    if (g > l || g < -l || L[n] != null) b = !0, i = new dt(a, n, a[n], g, i), n in p && (i.e = p[n]), i.xs0 = 0, i.plugin = o, r._overwriteProps.push(i.n)
                }
                g = h.transformOrigin;
                if (g || Tt && y && a.zOrigin) Et ? (b = !0, n = xt, g = (g || $(e, n, s, !1, "50% 50%")) + "", i = new dt(f, n, 0, 0, i, -1, "transformOrigin"), i.b = f[n], i.plugin = o, Tt ? (m = a.zOrigin, g = g.split(" "), a.zOrigin = (g.length > 2 && (m === 0 || g[2] !== "0px") ? parseFloat(g[2]) : m) || 0, i.xs0 = i.e = f[n] = g[0] + " " + (g[1] || "50%") + " 0px", i = new dt(a, "zOrigin", 0, 0, i, -1, i.n), i.b = m, i.xs0 = i.e = a.zOrigin) : i.xs0 = i.e = f[n] = g) : tt(g + "", a);
                return b && (r._transformType = y || this._transformType === 3 ? 3 : 2), i
            }, prefix: !0
        }), yt("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
        }), yt("borderRadius", {
            defaultValue: "0px", parser: function (e, t, n, r, o, u) {
                t = this.format(t);
                var a = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                    f = e.style, l, c, h, p, d, v, m, g, y, b, w, E, S, x, T, N;
                y = parseFloat(e.offsetWidth), b = parseFloat(e.offsetHeight), l = t.split(" ");
                for (c = 0; c < a.length; c++) this.p.indexOf("border") && (a[c] = X(a[c])), d = p = $(e, a[c], s, !1, "0px"), d.indexOf(" ") !== -1 && (p = d.split(" "), d = p[0], p = p[1]), v = h = l[c], m = parseFloat(d), E = d.substr((m + "").length), S = v.charAt(1) === "=", S ? (g = parseInt(v.charAt(0) + "1", 10), v = v.substr(2), g *= parseFloat(v), w = v.substr((g + "").length - (g < 0 ? 1 : 0)) || "") : (g = parseFloat(v), w = v.substr((g + "").length)), w === "" && (w = i[n] || E), w !== E && (x = J(e, "borderLeft", m, E), T = J(e, "borderTop", m, E), w === "%" ? (d = x / y * 100 + "%", p = T / b * 100 + "%") : w === "em" ? (N = J(e, "borderLeft", 1, "em"), d = x / N + "em", p = T / N + "em") : (d = x + "px", p = T + "px"), S && (v = parseFloat(d) + g + w, h = parseFloat(p) + g + w)), o = vt(f, a[c], d + " " + p, v + " " + h, !1, "0px", o);
                return o
            }, prefix: !0, formatter: ft("0px 0px 0px 0px", !1, !0)
        }), yt("backgroundPosition", {
            defaultValue: "0 0", parser: function (e, t, n, r, i, o) {
                var u = "background-position", a = s || V(e, null),
                    f = this.format((a ? I ? a.getPropertyValue(u + "-x") + " " + a.getPropertyValue(u + "-y") : a.getPropertyValue(u) : e.currentStyle.backgroundPositionX + " " + e.currentStyle.backgroundPositionY) || "0 0"),
                    l = this.format(t), c, h, p, d, v, m;
                if (f.indexOf("%") !== -1 != (l.indexOf("%") !== -1)) {
                    m = $(e, "backgroundImage").replace(w, "");
                    if (m && m !== "none") {
                        c = f.split(" "), h = l.split(" "), M.setAttribute("src", m), p = 2;
                        while (--p > -1) f = c[p], d = f.indexOf("%") !== -1, d !== (h[p].indexOf("%") !== -1) && (v = p === 0 ? e.offsetWidth - M.width : e.offsetHeight - M.height, c[p] = d ? parseFloat(f) / 100 * v + "px" : parseFloat(f) / v * 100 + "%");
                        f = c.join(" ")
                    }
                }
                return this.parseComplex(e.style, f, l, i, o)
            }, formatter: tt
        }), yt("backgroundSize", {defaultValue: "0 0", formatter: tt}), yt("perspective", {
            defaultValue: "0px",
            prefix: !0
        }), yt("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        }), yt("transformStyle", {prefix: !0}), yt("backfaceVisibility", {prefix: !0}), yt("userSelect", {prefix: !0}), yt("margin", {parser: lt("marginTop,marginRight,marginBottom,marginLeft")}), yt("padding", {parser: lt("paddingTop,paddingRight,paddingBottom,paddingLeft")}), yt("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function (e, t, n, r, i, o) {
                var u, a, f;
                return I < 9 ? (a = e.currentStyle, f = I < 8 ? " " : ",", u = "rect(" + a.clipTop + f + a.clipRight + f + a.clipBottom + f + a.clipLeft + ")", t = this.format(t).split(",").join(f)) : (u = this.format($(e, this.p, s, !1, this.dflt)), t = this.format(t)), this.parseComplex(e.style, u, t, i, o)
            }
        }), yt("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
        }), yt("autoRound,strictUnits", {
            parser: function (e, t, n, r, i) {
                return i
            }
        }), yt("border", {
            defaultValue: "0px solid #000", parser: function (e, t, n, r, i, o) {
                return this.parseComplex(e.style, this.format($(e, "borderTopWidth", s, !1, "0px") + " " + $(e, "borderTopStyle", s, !1, "solid") + " " + $(e, "borderTopColor", s, !1, "#000")), this.format(t), i, o)
            }, color: !0, formatter: function (e) {
                var t = e.split(" ");
                return t[0] + " " + (t[1] || "solid") + " " + (e.match(at) || ["#000"])[0]
            }
        }), yt("float,cssFloat,styleFloat", {
            parser: function (e, t, n, r, i, s) {
                var o = e.style, u = "cssFloat" in o ? "cssFloat" : "styleFloat";
                return new dt(o, u, 0, 0, i, -1, n, !1, 0, o[u], t)
            }
        });
        var At = function (e) {
            var t = this.t, n = t.filter || $(this.data, "filter"), r = this.s + this.c * e | 0, i;
            r === 100 && (n.indexOf("atrix(") === -1 && n.indexOf("radient(") === -1 && n.indexOf("oader(") === -1 ? (t.removeAttribute("filter"), i = !$(this.data, "filter")) : (t.filter = n.replace(m, ""), i = !0));
            if (!i) {
                this.xn1 && (t.filter = n = n || "alpha(opacity=" + r + ")");
                if (n.indexOf("opacity") === -1) {
                    if (r !== 0 || !this.xn1) t.filter = n + " alpha(opacity=" + r + ")"
                } else t.filter = n.replace(d, "opacity=" + r)
            }
        };
        yt("opacity,alpha,autoAlpha", {
            defaultValue: "1", parser: function (e, t, n, r, i, o) {
                var u = parseFloat($(e, "opacity", s, !1, "1")), a = e.style, f = n === "autoAlpha";
                return typeof t == "string" && t.charAt(1) === "=" && (t = (t.charAt(0) === "-" ? -1 : 1) * parseFloat(t.substr(2)) + u), f && u === 1 && $(e, "visibility", s) === "hidden" && t !== 0 && (u = 0), q ? i = new dt(a, "opacity", u, t - u, i) : (i = new dt(a, "opacity", u * 100, (t - u) * 100, i), i.xn1 = f ? 1 : 0, a.zoom = 1, i.type = 2, i.b = "alpha(opacity=" + i.s + ")", i.e = "alpha(opacity=" + (i.s + i.c) + ")", i.data = e, i.plugin = o, i.setRatio = At), f && (i = new dt(a, "visibility", 0, 0, i, -1, null, !1, 0, u !== 0 ? "inherit" : "hidden", t === 0 ? "hidden" : "inherit"), i.xs0 = "inherit", r._overwriteProps.push(i.n), r._overwriteProps.push(n)), i
            }
        });
        var Ot = function (e, t) {
            t && (e.removeProperty ? e.removeProperty(t.replace(y, "-$1").toLowerCase()) : e.removeAttribute(t))
        }, Mt = function (e) {
            this.t._gsClassPT = this;
            if (e === 1 || e === 0) {
                this.t.className = e === 0 ? this.b : this.e;
                var t = this.data, n = this.t.style;
                while (t) t.v ? n[t.p] = t.v : Ot(n, t.p), t = t._next;
                e === 1 && this.t._gsClassPT === this && (this.t._gsClassPT = null)
            } else this.t.className !== this.e && (this.t.className = this.e)
        };
        yt("className", {
            parser: function (e, t, n, i, o, u, a) {
                var f = e.className, l = e.style.cssText, c, h, p, d, v;
                o = i._classNamePT = new dt(e, n, 0, 0, o, 2), o.setRatio = Mt, o.pr = -11, r = !0, o.b = f, h = Q(e, s), p = e._gsClassPT;
                if (p) {
                    d = {}, v = p.data;
                    while (v) d[v.p] = 1, v = v._next;
                    p.setRatio(1)
                }
                return e._gsClassPT = o, o.e = t.charAt(1) !== "=" ? t : f.replace(new RegExp("\\s*\\b" + t.substr(2) + "\\b"), "") + (t.charAt(0) === "+" ? " " + t.substr(2) : ""), i._tween._duration && (e.className = o.e, c = G(e, h, Q(e), a, d), e.className = f, o.data = c.firstMPT, e.style.cssText = l, o = o.xfirst = i.parse(e, c.difs, o, u)), o
            }
        });
        var _t = function (e) {
            if (e === 1 || e === 0) if (this.data._totalTime === this.data._totalDuration && this.data.data !== "isFromStart") {
                var t = this.t.style, n = u.transform.parse, r, i, s, o;
                if (this.e === "all") t.cssText = "", o = !0; else {
                    r = this.e.split(","), s = r.length;
                    while (--s > -1) i = r[s], u[i] && (u[i].parse === n ? o = !0 : i = i === "transformOrigin" ? xt : u[i].p), Ot(t, i)
                }
                o && (Ot(t, Et), this.t._gsTransform && delete this.t._gsTransform)
            }
        };
        yt("clearProps", {
            parser: function (e, t, n, i, s) {
                return s = new dt(e, n, 0, 0, s, 2), s.setRatio = _t, s.e = t, s.pr = -10, s.data = i._tween, r = !0, s
            }
        }), a = "bezier,throwProps,physicsProps,physics2D".split(","), mt = a.length;
        while (mt--) bt(a[mt]);
        a = n.prototype, a._firstPT = null, a._onInitTween = function (e, t, u) {
            if (!e.nodeType) return !1;
            this._target = e, this._tween = u, this._vars = t, P = t.autoRound, r = !1, i = t.suffixMap || n.suffixMap, s = V(e, ""), o = this._overwriteProps;
            var a = e.style, f, l, c, h, p, d, m, g, y;
            if (H && a.zIndex === "") {
                f = $(e, "zIndex", s);
                if (f === "auto" || f === "") a.zIndex = 0
            }
            typeof t == "string" && (h = a.cssText, f = Q(e, s), a.cssText = h + ";" + t, f = G(e, f, Q(e)).difs, !q && v.test(t) && (f.opacity = parseFloat(RegExp.$1)), t = f, a.cssText = h), this._firstPT = l = this.parse(e, t, null);
            if (this._transformType) {
                y = this._transformType === 3;
                if (!Et) a.zoom = 1; else if (B) {
                    H = !0;
                    if (a.zIndex === "") {
                        m = $(e, "zIndex", s);
                        if (m === "auto" || m === "") a.zIndex = 0
                    }
                    F && (a.WebkitBackfaceVisibility = this._vars.WebkitBackfaceVisibility || (y ? "visible" : "hidden"))
                }
                c = l;
                while (c && c._next) c = c._next;
                g = new dt(e, "transform", 0, 0, null, 2), this._linkCSSP(g, null, c), g.setRatio = y && Tt ? kt : Et ? Lt : Ct, g.data = this._transform || Nt(e, s, !0), o.pop()
            }
            if (r) {
                while (l) {
                    d = l._next, c = h;
                    while (c && c.pr > l.pr) c = c._next;
                    (l._prev = c ? c._prev : p) ? l._prev._next = l : h = l, (l._next = c) ? c._prev = l : p = l, l = d
                }
                this._firstPT = h
            }
            return !0
        }, a.parse = function (e, t, n, r) {
            var o = e.style, a, f, l, c, h, d, v, m, y, b;
            for (a in t) {
                d = t[a], f = u[a];
                if (f) n = f.parse(e, d, a, this, n, r, t); else {
                    h = $(e, a, s) + "", y = typeof d == "string";
                    if (a === "color" || a === "fill" || a === "stroke" || a.indexOf("Color") !== -1 || y && g.test(d)) y || (d = ut(d), d = (d.length > 3 ? "rgba(" : "rgb(") + d.join(",") + ")"), n = vt(o, a, h, d, !0, "transparent", n, 0, r); else if (!y || d.indexOf(" ") === -1 && d.indexOf(",") === -1) {
                        l = parseFloat(h), v = l || l === 0 ? h.substr((l + "").length) : "";
                        if (h === "" || h === "auto") a === "width" || a === "height" ? (l = et(e, a, s), v = "px") : a === "left" || a === "top" ? (l = K(e, a, s), v = "px") : (l = a !== "opacity" ? 0 : 1, v = "");
                        b = y && d.charAt(1) === "=", b ? (c = parseInt(d.charAt(0) + "1", 10), d = d.substr(2), c *= parseFloat(d), m = d.replace(p, "")) : (c = parseFloat(d), m = y ? d.substr((c + "").length) || "" : ""), m === "" && (m = i[a] || v), d = c || c === 0 ? (b ? c + l : c) + m : t[a], v !== m && m !== "" && (c || c === 0) && (l || l === 0) && (l = J(e, a, l, v), m === "%" ? (l /= J(e, a, 100, "%") / 100, l > 100 && (l = 100), t.strictUnits !== !0 && (h = l + "%")) : m === "em" ? l /= J(e, a, 1, "em") : (c = J(e, a, c, m), m = "px"), b && (c || c === 0) && (d = c + l + m)), b && (c += l), !l && l !== 0 || !c && c !== 0 ? o[a] === undefined || !d && (d + "" == "NaN" || d == null) ? U("invalid " + a + " tween value: " + t[a]) : (n = new dt(o, a, c || l || 0, 0, n, -1, a, !1, 0, h, d), n.xs0 = d !== "none" || a !== "display" && a.indexOf("Style") === -1 ? d : h) : (n = new dt(o, a, l, c - l, n, 0, a, P !== !1 && (m === "px" || a === "zIndex"), 0, h, d), n.xs0 = m)
                    } else n = vt(o, a, h, d, !0, null, n, 0, r)
                }
                r && n && !n.plugin && (n.plugin = r)
            }
            return n
        }, a.setRatio = function (e) {
            var t = this._firstPT, n = 1e-6, r, i, s;
            if (e !== 1 || this._tween._time !== this._tween._duration && this._tween._time !== 0) if (e || this._tween._time !== this._tween._duration && this._tween._time !== 0 || this._tween._rawPrevTime === -0.000001) while (t) {
                r = t.c * e + t.s, t.r ? r = r > 0 ? r + .5 | 0 : r - .5 | 0 : r < n && r > -n && (r = 0);
                if (!t.type) t.t[t.p] = r + t.xs0; else if (t.type === 1) {
                    s = t.l;
                    if (s === 2) t.t[t.p] = t.xs0 + r + t.xs1 + t.xn1 + t.xs2; else if (s === 3) t.t[t.p] = t.xs0 + r + t.xs1 + t.xn1 + t.xs2 + t.xn2 + t.xs3; else if (s === 4) t.t[t.p] = t.xs0 + r + t.xs1 + t.xn1 + t.xs2 + t.xn2 + t.xs3 + t.xn3 + t.xs4; else if (s === 5) t.t[t.p] = t.xs0 + r + t.xs1 + t.xn1 + t.xs2 + t.xn2 + t.xs3 + t.xn3 + t.xs4 + t.xn4 + t.xs5; else {
                        i = t.xs0 + r + t.xs1;
                        for (s = 1; s < t.l; s++) i += t["xn" + s] + t["xs" + (s + 1)];
                        t.t[t.p] = i
                    }
                } else t.type === -1 ? t.t[t.p] = t.xs0 : t.setRatio && t.setRatio(e);
                t = t._next
            } else while (t) t.type !== 2 ? t.t[t.p] = t.b : t.setRatio(e), t = t._next; else while (t) t.type !== 2 ? t.t[t.p] = t.e : t.setRatio(e), t = t._next
        }, a._enableTransforms = function (e) {
            this._transformType = e || this._transformType === 3 ? 3 : 2, this._transform = this._transform || Nt(this._target, s, !0)
        }, a._linkCSSP = function (e, t, n, r) {
            return e && (t && (t._prev = e), e._next && (e._next._prev = e._prev), e._prev ? e._prev._next = e._next : this._firstPT === e && (this._firstPT = e._next, r = !0), n ? n._next = e : !r && this._firstPT === null && (this._firstPT = e), e._next = t, e._prev = n), e
        }, a._kill = function (t) {
            var n = t, r, i, s;
            if (t.autoAlpha || t.alpha) {
                n = {};
                for (i in t) n[i] = t[i];
                n.opacity = 1, n.autoAlpha && (n.visibility = 1)
            }
            return t.className && (r = this._classNamePT) && (s = r.xfirst, s && s._prev ? this._linkCSSP(s._prev, r._next, s._prev._prev) : s === this._firstPT && (this._firstPT = r._next), r._next && this._linkCSSP(r._next, r._next._next, s._prev), this._classNamePT = null), e.prototype._kill.call(this, n)
        };
        var Dt = function (e, t, n) {
            var r, i, s, o;
            if (e.slice) {
                i = e.length;
                while (--i > -1) Dt(e[i], t, n);
                return
            }
            r = e.childNodes, i = r.length;
            while (--i > -1) s = r[i], o = s.type, s.style && (t.push(Q(s)), n && n.push(s)), (o === 1 || o === 9 || o === 11) && s.childNodes.length && Dt(s, t, n)
        };
        return n.cascadeTo = function (e, n, r) {
            var i = t.to(e, n, r), s = [i], o = [], u = [], a = [], f = t._internals.reservedProps, l, c, h;
            e = i._targets || i.target, Dt(e, o, a), i.render(n, !0), Dt(e, u), i.render(0, !0), i._enabled(!0), l = a.length;
            while (--l > -1) {
                c = G(a[l], o[l], u[l]);
                if (c.firstMPT) {
                    c = c.difs;
                    for (h in r) f[h] && (c[h] = r[h]);
                    s.push(t.to(a[l], n, c))
                }
            }
            return s
        }, e.activate([n]), n
    }, !0), function () {
        var e = window._gsDefine.plugin({
            propName: "roundProps", priority: -1, API: 2, init: function (e, t, n) {
                return this._tween = n, !0
            }
        }), t = e.prototype;
        t._onInitAllProps = function () {
            var e = this._tween,
                t = e.vars.roundProps instanceof Array ? e.vars.roundProps : e.vars.roundProps.split(","), n = t.length,
                r = {}, i = e._propLookup.roundProps, s, o, u;
            while (--n > -1) r[t[n]] = 1;
            n = t.length;
            while (--n > -1) {
                s = t[n], o = e._firstPT;
                while (o) u = o._next, o.pg ? o.t._roundProps(r, !0) : o.n === s && (this._add(o.t, s, o.s, o.c), u && (u._prev = o._prev), o._prev ? o._prev._next = u : e._firstPT === o && (e._firstPT = u), o._next = o._prev = null, e._propLookup[s] = i), o = u
            }
            return !1
        }, t._add = function (e, t, n, r) {
            this._addTween(e, t, n, n + r, t, !0), this._overwriteProps.push(t)
        }
    }(), window._gsDefine.plugin({
        propName: "attr", API: 2, init: function (e, t, n) {
            var r;
            if (typeof e.setAttribute != "function") return !1;
            this._target = e, this._proxy = {};
            for (r in t) this._addTween(this._proxy, r, parseFloat(e.getAttribute(r)), t[r], r) && this._overwriteProps.push(r);
            return !0
        }, set: function (e) {
            this._super.setRatio.call(this, e);
            var t = this._overwriteProps, n = t.length, r;
            while (--n > -1) r = t[n], this._target.setAttribute(r, this._proxy[r] + "")
        }
    }), window._gsDefine.plugin({
        propName: "directionalRotation", API: 2, init: function (e, t, n) {
            typeof t != "object" && (t = {rotation: t}), this.finals = {};
            var r = t.useRadians === !0 ? Math.PI * 2 : 360, i = 1e-6, s, o, u, a, f, l;
            for (s in t) if (s !== "useRadians") {
                l = (t[s] + "").split("_"), o = l[0], u = parseFloat(typeof e[s] != "function" ? e[s] : e[s.indexOf("set") || typeof e["get" + s.substr(3)] != "function" ? s : "get" + s.substr(3)]()), a = this.finals[s] = typeof o == "string" && o.charAt(1) === "=" ? u + parseInt(o.charAt(0) + "1", 10) * Number(o.substr(2)) : Number(o) || 0, f = a - u, l.length && (o = l.join("_"), o.indexOf("short") !== -1 && (f %= r, f !== f % (r / 2) && (f = f < 0 ? f + r : f - r)), o.indexOf("_cw") !== -1 && f < 0 ? f = (f + r * 9999999999) % r - (f / r | 0) * r : o.indexOf("ccw") !== -1 && f > 0 && (f = (f - r * 9999999999) % r - (f / r | 0) * r));
                if (f > i || f < -i) this._addTween(e, s, u, u + f, s), this._overwriteProps.push(s)
            }
            return !0
        }, set: function (e) {
            var t;
            if (e !== 1) this._super.setRatio.call(this, e); else {
                t = this._firstPT;
                while (t) t.f ? t.t[t.p](this.finals[t.p]) : t.t[t.p] = this.finals[t.p], t = t._next
            }
        }
    })._autoCSS = !0, window._gsDefine("easing.Back", ["easing.Ease"], function (e) {
        var t = window.GreenSockGlobals || window, n = t.com.greensock, r = Math.PI * 2, i = Math.PI / 2, s = n._class,
            o = function (t, n) {
                var r = s("easing." + t, function () {
                }, !0), i = r.prototype = new e;
                return i.constructor = r, i.getRatio = n, r
            }, u = e.register || function () {
            }, a = function (e, t, n, r, i) {
                var o = s("easing." + e, {easeOut: new t, easeIn: new n, easeInOut: new r}, !0);
                return u(o, e), o
            }, f = function (e, t, n) {
                this.t = e, this.v = t, n && (this.next = n, n.prev = this, this.c = n.v - t, this.gap = n.t - e)
            }, l = function (t, n) {
                var r = s("easing." + t, function (e) {
                    this._p1 = e || e === 0 ? e : 1.70158, this._p2 = this._p1 * 1.525
                }, !0), i = r.prototype = new e;
                return i.constructor = r, i.getRatio = n, i.config = function (e) {
                    return new r(e)
                }, r
            }, c = a("Back", l("BackOut", function (e) {
                return (e -= 1) * e * ((this._p1 + 1) * e + this._p1) + 1
            }), l("BackIn", function (e) {
                return e * e * ((this._p1 + 1) * e - this._p1)
            }), l("BackInOut", function (e) {
                return (e *= 2) < 1 ? .5 * e * e * ((this._p2 + 1) * e - this._p2) : .5 * ((e -= 2) * e * ((this._p2 + 1) * e + this._p2) + 2)
            })), h = s("easing.SlowMo", function (e, t, n) {
                t = t || t === 0 ? t : .7, e == null ? e = .7 : e > 1 && (e = 1), this._p = e !== 1 ? t : 0, this._p1 = (1 - e) / 2, this._p2 = e, this._p3 = this._p1 + this._p2, this._calcEnd = n === !0
            }, !0), p = h.prototype = new e, d, v, m;
        return p.constructor = h, p.getRatio = function (e) {
            var t = e + (.5 - e) * this._p;
            return e < this._p1 ? this._calcEnd ? 1 - (e = 1 - e / this._p1) * e : t - (e = 1 - e / this._p1) * e * e * e * t : e > this._p3 ? this._calcEnd ? 1 - (e = (e - this._p3) / this._p1) * e : t + (e - t) * (e = (e - this._p3) / this._p1) * e * e * e : this._calcEnd ? 1 : t
        }, h.ease = new h(.7, .7), p.config = h.config = function (e, t, n) {
            return new h(e, t, n)
        }, d = s("easing.SteppedEase", function (e) {
            e = e || 1, this._p1 = 1 / e, this._p2 = e + 1
        }, !0), p = d.prototype = new e, p.constructor = d, p.getRatio = function (e) {
            return e < 0 ? e = 0 : e >= 1 && (e = .999999999), (this._p2 * e >> 0) * this._p1
        }, p.config = d.config = function (e) {
            return new d(e)
        }, v = s("easing.RoughEase", function (t) {
            t = t || {};
            var n = t.taper || "none", r = [], i = 0, s = (t.points || 20) | 0, o = s, u = t.randomize !== !1,
                a = t.clamp === !0, l = t.template instanceof e ? t.template : null,
                c = typeof t.strength == "number" ? t.strength * .4 : .4, h, p, d, v, m, g;
            while (--o > -1) h = u ? Math.random() : 1 / s * o, p = l ? l.getRatio(h) : h, n === "none" ? d = c : n === "out" ? (v = 1 - h, d = v * v * c) : n === "in" ? d = h * h * c : h < .5 ? (v = h * 2, d = v * v * .5 * c) : (v = (1 - h) * 2, d = v * v * .5 * c), u ? p += Math.random() * d - d * .5 : o % 2 ? p += d * .5 : p -= d * .5, a && (p > 1 ? p = 1 : p < 0 && (p = 0)), r[i++] = {
                x: h,
                y: p
            };
            r.sort(function (e, t) {
                return e.x - t.x
            }), g = new f(1, 1, null), o = s;
            while (--o > -1) m = r[o], g = new f(m.x, m.y, g);
            this._prev = new f(0, 0, g.t !== 0 ? g : g.next)
        }, !0), p = v.prototype = new e, p.constructor = v, p.getRatio = function (e) {
            var t = this._prev;
            if (e > t.t) {
                while (t.next && e >= t.t) t = t.next;
                t = t.prev
            } else while (t.prev && e <= t.t) t = t.prev;
            return this._prev = t, t.v + (e - t.t) / t.gap * t.c
        }, p.config = function (e) {
            return new v(e)
        }, v.ease = new v, a("Bounce", o("BounceOut", function (e) {
            return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
        }), o("BounceIn", function (e) {
            return (e = 1 - e) < 1 / 2.75 ? 1 - 7.5625 * e * e : e < 2 / 2.75 ? 1 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 1 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 1 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
        }), o("BounceInOut", function (e) {
            var t = e < .5;
            return t ? e = 1 - e * 2 : e = e * 2 - 1, e < 1 / 2.75 ? e = 7.5625 * e * e : e < 2 / 2.75 ? e = 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? e = 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : e = 7.5625 * (e -= 2.625 / 2.75) * e + .984375, t ? (1 - e) * .5 : e * .5 + .5
        })), a("Circ", o("CircOut", function (e) {
            return Math.sqrt(1 - (e -= 1) * e)
        }), o("CircIn", function (e) {
            return -(Math.sqrt(1 - e * e) - 1)
        }), o("CircInOut", function (e) {
            return (e *= 2) < 1 ? -0.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
        })), m = function (t, n, i) {
            var o = s("easing." + t, function (e, t) {
                this._p1 = e || 1, this._p2 = t || i, this._p3 = this._p2 / r * (Math.asin(1 / this._p1) || 0)
            }, !0), u = o.prototype = new e;
            return u.constructor = o, u.getRatio = n, u.config = function (e, t) {
                return new o(e, t)
            }, o
        }, a("Elastic", m("ElasticOut", function (e) {
            return this._p1 * Math.pow(2, -10 * e) * Math.sin((e - this._p3) * r / this._p2) + 1
        }, .3), m("ElasticIn", function (e) {
            return -(this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * r / this._p2))
        }, .3), m("ElasticInOut", function (e) {
            return (e *= 2) < 1 ? -0.5 * this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * r / this._p2) : this._p1 * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - this._p3) * r / this._p2) * .5 + 1
        }, .45)), a("Expo", o("ExpoOut", function (e) {
            return 1 - Math.pow(2, -10 * e)
        }), o("ExpoIn", function (e) {
            return Math.pow(2, 10 * (e - 1)) - .001
        }), o("ExpoInOut", function (e) {
            return (e *= 2) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
        })), a("Sine", o("SineOut", function (e) {
            return Math.sin(e * i)
        }), o("SineIn", function (e) {
            return -Math.cos(e * i) + 1
        }), o("SineInOut", function (e) {
            return -0.5 * (Math.cos(Math.PI * e) - 1)
        })), s("easing.EaseLookup", {
            find: function (t) {
                return e.map[t]
            }
        }, !0), u(t.SlowMo, "SlowMo", "ease,"), u(v, "RoughEase", "ease,"), u(d, "SteppedEase", "ease,"), c
    }, !0)
}),function (e) {
    "use strict";
    var t = e.GreenSockGlobals || e;
    if (t.TweenLite) return;
    var n = function (e) {
        var n = e.split("."), r = t, i;
        for (i = 0; i < n.length; i++) r[n[i]] = r = r[n[i]] || {};
        return r
    }, r = n("com.greensock"), i = 1e-10, s = [].slice, o = function () {
    }, u = function () {
        var e = Object.prototype.toString, t = e.call([]);
        return function (n) {
            return n instanceof Array || typeof n == "object" && !!n.push && e.call(n) === t
        }
    }(), a, f, l, c, h, p = {}, d = function (r, i, s, o) {
        this.sc = p[r] ? p[r].sc : [], p[r] = this, this.gsClass = null, this.func = s;
        var u = [];
        this.check = function (a) {
            var f = i.length, l = f, c, h, v, m;
            while (--f > -1) (c = p[i[f]] || new d(i[f], [])).gsClass ? (u[f] = c.gsClass, l--) : a && c.sc.push(this);
            if (l === 0 && s) {
                h = ("com.greensock." + r).split("."), v = h.pop(), m = n(h.join("."))[v] = this.gsClass = s.apply(s, u), o && (t[v] = m, typeof define == "function" && define.amd ? define((e.GreenSockAMDPath ? e.GreenSockAMDPath + "/" : "") + r.split(".").join("/"), [], function () {
                    return m
                }) : typeof module != "undefined" && module.exports && (module.exports = m));
                for (f = 0; f < this.sc.length; f++) this.sc[f].check()
            }
        }, this.check(!0)
    }, v = e._gsDefine = function (e, t, n, r) {
        return new d(e, t, n, r)
    }, m = r._class = function (e, t, n) {
        return t = t || function () {
        }, v(e, [], function () {
            return t
        }, n), t
    };
    v.globals = t;
    var g = [0, 0, 1, 1], y = [], b = m("easing.Ease", function (e, t, n, r) {
        this._func = e, this._type = n || 0, this._power = r || 0, this._params = t ? g.concat(t) : g
    }, !0), w = b.map = {}, E = b.register = function (e, t, n, i) {
        var s = t.split(","), o = s.length, u = (n || "easeIn,easeOut,easeInOut").split(","), a, f, l, c;
        while (--o > -1) {
            f = s[o], a = i ? m("easing." + f, null, !0) : r.easing[f] || {}, l = u.length;
            while (--l > -1) c = u[l], w[f + "." + c] = w[c + f] = a[c] = e.getRatio ? e : e[c] || new e
        }
    };
    l = b.prototype, l._calcEnd = !1, l.getRatio = function (e) {
        if (this._func) return this._params[0] = e, this._func.apply(null, this._params);
        var t = this._type, n = this._power, r = t === 1 ? 1 - e : t === 2 ? e : e < .5 ? e * 2 : (1 - e) * 2;
        return n === 1 ? r *= r : n === 2 ? r *= r * r : n === 3 ? r *= r * r * r : n === 4 && (r *= r * r * r * r), t === 1 ? 1 - r : t === 2 ? r : e < .5 ? r / 2 : 1 - r / 2
    }, a = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], f = a.length;
    while (--f > -1) l = a[f] + ",Power" + f, E(new b(null, null, 1, f), l, "easeOut", !0), E(new b(null, null, 2, f), l, "easeIn" + (f === 0 ? ",easeNone" : "")), E(new b(null, null, 3, f), l, "easeInOut");
    w.linear = r.easing.Linear.easeIn, w.swing = r.easing.Quad.easeInOut;
    var S = m("events.EventDispatcher", function (e) {
        this._listeners = {}, this._eventTarget = e || this
    });
    l = S.prototype, l.addEventListener = function (e, t, n, r, i) {
        i = i || 0;
        var s = this._listeners[e], o = 0, u, a;
        s == null && (this._listeners[e] = s = []), a = s.length;
        while (--a > -1) u = s[a], u.c === t && u.s === n ? s.splice(a, 1) : o === 0 && u.pr < i && (o = a + 1);
        s.splice(o, 0, {c: t, s: n, up: r, pr: i}), this === c && !h && c.wake()
    }, l.removeEventListener = function (e, t) {
        var n = this._listeners[e], r;
        if (n) {
            r = n.length;
            while (--r > -1) if (n[r].c === t) {
                n.splice(r, 1);
                return
            }
        }
    }, l.dispatchEvent = function (e) {
        var t = this._listeners[e], n, r, i;
        if (t) {
            n = t.length, r = this._eventTarget;
            while (--n > -1) i = t[n], i.up ? i.c.call(i.s || r, {type: e, target: r}) : i.c.call(i.s || r)
        }
    };
    var x = e.requestAnimationFrame, T = e.cancelAnimationFrame, N = Date.now || function () {
        return (new Date).getTime()
    }, C = N();
    a = ["ms", "moz", "webkit", "o"], f = a.length;
    while (--f > -1 && !x) x = e[a[f] + "RequestAnimationFrame"], T = e[a[f] + "CancelAnimationFrame"] || e[a[f] + "CancelRequestAnimationFrame"];
    m("Ticker", function (e, t) {
        var n = this, r = N(), i = t !== !1 && x, s, u, a, f, l, p = function (e) {
            C = N(), n.time = (C - r) / 1e3;
            var t = n.time - l, i;
            if (!s || t > 0 || e === !0) n.frame++, l += t + (t >= f ? .004 : f - t), i = !0;
            e !== !0 && (a = u(p)), i && n.dispatchEvent("tick")
        };
        S.call(n), n.time = n.frame = 0, n.tick = function () {
            p(!0)
        }, n.sleep = function () {
            if (a == null) return;
            !i || !T ? clearTimeout(a) : T(a), u = o, a = null, n === c && (h = !1)
        }, n.wake = function () {
            a !== null && n.sleep(), u = s === 0 ? o : !i || !x ? function (e) {
                return setTimeout(e, (l - n.time) * 1e3 + 1 | 0)
            } : x, n === c && (h = !0), p(2)
        }, n.fps = function (e) {
            if (!arguments.length) return s;
            s = e, f = 1 / (s || 60), l = this.time + f, n.wake()
        }, n.useRAF = function (e) {
            if (!arguments.length) return i;
            n.sleep(), i = e, n.fps(s)
        }, n.fps(e), setTimeout(function () {
            i && (!a || n.frame < 5) && n.useRAF(!1)
        }, 1500)
    }), l = r.Ticker.prototype = new r.events.EventDispatcher, l.constructor = r.Ticker;
    var k = m("core.Animation", function (e, t) {
        this.vars = t = t || {}, this._duration = this._totalDuration = e || 0, this._delay = Number(t.delay) || 0, this._timeScale = 1, this._active = t.immediateRender === !0, this.data = t.data, this._reversed = t.reversed === !0;
        if (!q) return;
        h || c.wake();
        var n = this.vars.useFrames ? I : q;
        n.add(this, n._time), this.vars.paused && this.paused(!0)
    });
    c = k.ticker = new r.Ticker, l = k.prototype, l._dirty = l._gc = l._initted = l._paused = !1, l._totalTime = l._time = 0, l._rawPrevTime = -1, l._next = l._last = l._onUpdate = l._timeline = l.timeline = null, l._paused = !1;
    var L = function () {
        N() - C > 2e3 && c.wake(), setTimeout(L, 2e3)
    };
    L(), l.play = function (e, t) {
        return arguments.length && this.seek(e, t), this.reversed(!1).paused(!1)
    }, l.pause = function (e, t) {
        return arguments.length && this.seek(e, t), this.paused(!0)
    }, l.resume = function (e, t) {
        return arguments.length && this.seek(e, t), this.paused(!1)
    }, l.seek = function (e, t) {
        return this.totalTime(Number(e), t !== !1)
    }, l.restart = function (e, t) {
        return this.reversed(!1).paused(!1).totalTime(e ? -this._delay : 0, t !== !1, !0)
    }, l.reverse = function (e, t) {
        return arguments.length && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1)
    }, l.render = function (e, t, n) {
    }, l.invalidate = function () {
        return this
    }, l.isActive = function () {
        var e = this._timeline, t = this._startTime, n;
        return !e || !this._gc && !this._paused && e.isActive() && (n = e.rawTime()) >= t && n < t + this.totalDuration() / this._timeScale
    }, l._enabled = function (e, t) {
        return h || c.wake(), this._gc = !e, this._active = this.isActive(), t !== !0 && (e && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !e && this.timeline && this._timeline._remove(this, !0)), !1
    }, l._kill = function (e, t) {
        return this._enabled(!1, !1)
    }, l.kill = function (e, t) {
        return this._kill(e, t), this
    }, l._uncache = function (e) {
        var t = e ? this : this.timeline;
        while (t) t._dirty = !0, t = t.timeline;
        return this
    }, l._swapSelfInParams = function (e) {
        var t = e.length, n = e.concat();
        while (--t > -1) e[t] === "{self}" && (n[t] = this);
        return n
    }, l.eventCallback = function (e, t, n, r) {
        if ((e || "").substr(0, 2) === "on") {
            var i = this.vars;
            if (arguments.length === 1) return i[e];
            t == null ? delete i[e] : (i[e] = t, i[e + "Params"] = u(n) && n.join("").indexOf("{self}") !== -1 ? this._swapSelfInParams(n) : n, i[e + "Scope"] = r), e === "onUpdate" && (this._onUpdate = t)
        }
        return this
    }, l.delay = function (e) {
        return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + e - this._delay), this._delay = e, this) : this._delay
    }, l.duration = function (e) {
        return arguments.length ? (this._duration = this._totalDuration = e, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && e !== 0 && this.totalTime(this._totalTime * (e / this._duration), !0), this) : (this._dirty = !1, this._duration)
    }, l.totalDuration = function (e) {
        return this._dirty = !1, arguments.length ? this.duration(e) : this._totalDuration
    }, l.time = function (e, t) {
        return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(e > this._duration ? this._duration : e, t)) : this._time
    }, l.totalTime = function (e, t, n) {
        h || c.wake();
        if (!arguments.length) return this._totalTime;
        if (this._timeline) {
            e < 0 && !n && (e += this.totalDuration());
            if (this._timeline.smoothChildTiming) {
                this._dirty && this.totalDuration();
                var r = this._totalDuration, i = this._timeline;
                e > r && !n && (e = r), this._startTime = (this._paused ? this._pauseTime : i._time) - (this._reversed ? r - e : e) / this._timeScale, i._dirty || this._uncache(!1);
                if (i._timeline) while (i._timeline) i._timeline._time !== (i._startTime + i._totalTime) / i._timeScale && i.totalTime(i._totalTime, !0), i = i._timeline
            }
            this._gc && this._enabled(!0, !1), (this._totalTime !== e || this._duration === 0) && this.render(e, t, !1)
        }
        return this
    }, l.progress = l.totalProgress = function (e, t) {
        return arguments.length ? this.totalTime(this.duration() * e, t) : this._time / this.duration()
    }, l.startTime = function (e) {
        return arguments.length ? (e !== this._startTime && (this._startTime = e, this.timeline && this.timeline._sortChildren && this.timeline.add(this, e - this._delay)), this) : this._startTime
    }, l.timeScale = function (e) {
        if (!arguments.length) return this._timeScale;
        e = e || i;
        if (this._timeline && this._timeline.smoothChildTiming) {
            var t = this._pauseTime, n = t || t === 0 ? t : this._timeline.totalTime();
            this._startTime = n - (n - this._startTime) * this._timeScale / e
        }
        return this._timeScale = e, this._uncache(!1)
    }, l.reversed = function (e) {
        return arguments.length ? (e != this._reversed && (this._reversed = e, this.totalTime(this._totalTime, !0)), this) : this._reversed
    }, l.paused = function (e) {
        if (!arguments.length) return this._paused;
        if (e != this._paused && this._timeline) {
            !h && !e && c.wake();
            var t = this._timeline, n = t.rawTime(), r = n - this._pauseTime;
            !e && t.smoothChildTiming && (this._startTime += r, this._uncache(!1)), this._pauseTime = e ? n : null, this._paused = e, this._active = this.isActive(), !e && r !== 0 && this._initted && this.duration() && this.render(t.smoothChildTiming ? this._totalTime : (n - this._startTime) / this._timeScale, !0, !0)
        }
        return this._gc && !e && this._enabled(!0, !1), this
    };
    var A = m("core.SimpleTimeline", function (e) {
        k.call(this, 0, e), this.autoRemoveChildren = this.smoothChildTiming = !0
    });
    l = A.prototype = new k, l.constructor = A, l.kill()._gc = !1, l._first = l._last = null, l._sortChildren = !1, l.add = l.insert = function (e, t, n, r) {
        var i, s;
        e._startTime = Number(t || 0) + e._delay, e._paused && this !== e._timeline && (e._pauseTime = e._startTime + (this.rawTime() - e._startTime) / e._timeScale), e.timeline && e.timeline._remove(e, !0), e.timeline = e._timeline = this, e._gc && e._enabled(!0, !0), i = this._last;
        if (this._sortChildren) {
            s = e._startTime;
            while (i && i._startTime > s) i = i._prev
        }
        return i ? (e._next = i._next, i._next = e) : (e._next = this._first, this._first = e), e._next ? e._next._prev = e : this._last = e, e._prev = i, this._timeline && this._uncache(!0), this
    }, l._remove = function (e, t) {
        return e.timeline === this && (t || e._enabled(!1, !0), e.timeline = null, e._prev ? e._prev._next = e._next : this._first === e && (this._first = e._next), e._next ? e._next._prev = e._prev : this._last === e && (this._last = e._prev), this._timeline && this._uncache(!0)), this
    }, l.render = function (e, t, n) {
        var r = this._first, i;
        this._totalTime = this._time = this._rawPrevTime = e;
        while (r) {
            i = r._next;
            if (r._active || e >= r._startTime && !r._paused) r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, n) : r.render((e - r._startTime) * r._timeScale, t, n);
            r = i
        }
    }, l.rawTime = function () {
        return h || c.wake(), this._totalTime
    };
    var O = m("TweenLite", function (t, n, r) {
        k.call(this, n, r), this.render = O.prototype.render;
        if (t == null) throw"Cannot tween a null target.";
        this.target = t = typeof t != "string" ? t : O.selector(t) || t;
        var i = t.jquery || t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType),
            o = this.vars.overwrite, a, f, l;
        this._overwrite = o = o == null ? F[O.defaultOverwrite] : typeof o == "number" ? o >> 0 : F[o];
        if ((i || t instanceof Array || t.push && u(t)) && typeof t[0] != "number") {
            this._targets = l = s.call(t, 0), this._propLookup = [], this._siblings = [];
            for (a = 0; a < l.length; a++) {
                f = l[a];
                if (!f) {
                    l.splice(a--, 1);
                    continue
                }
                if (typeof f == "string") {
                    f = l[a--] = O.selector(f), typeof f == "string" && l.splice(a + 1, 1);
                    continue
                }
                if (f.length && f !== e && f[0] && (f[0] === e || f[0].nodeType && f[0].style && !f.nodeType)) {
                    l.splice(a--, 1), this._targets = l = l.concat(s.call(f, 0));
                    continue
                }
                this._siblings[a] = R(f, this, !1), o === 1 && this._siblings[a].length > 1 && U(f, this, null, 1, this._siblings[a])
            }
        } else this._propLookup = {}, this._siblings = R(t, this, !1), o === 1 && this._siblings.length > 1 && U(t, this, null, 1, this._siblings);
        (this.vars.immediateRender || n === 0 && this._delay === 0 && this.vars.immediateRender !== !1) && this.render(-this._delay, !1, !0)
    }, !0), M = function (t) {
        return t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType)
    }, _ = function (e, t) {
        var n = {}, r;
        for (r in e) !j[r] && (!(r in t) || r === "x" || r === "y" || r === "width" || r === "height" || r === "className" || r === "border") && (!P[r] || P[r] && P[r]._autoCSS) && (n[r] = e[r], delete e[r]);
        e.css = n
    };
    l = O.prototype = new k, l.constructor = O, l.kill()._gc = !1, l.ratio = 0, l._firstPT = l._targets = l._overwrittenProps = l._startAt = null, l._notifyPluginsOfEnabled = !1, O.version = "1.11.1", O.defaultEase = l._ease = new b(null, null, 1, 1), O.defaultOverwrite = "auto", O.ticker = c, O.autoSleep = !0, O.selector = e.$ || e.jQuery || function (t) {
        return e.$ ? (O.selector = e.$, e.$(t)) : e.document ? e.document.getElementById(t.charAt(0) === "#" ? t.substr(1) : t) : t
    };
    var D = O._internals = {isArray: u, isSelector: M}, P = O._plugins = {}, H = O._tweenLookup = {}, B = 0,
        j = D.reservedProps = {
            ease: 1,
            delay: 1,
            overwrite: 1,
            onComplete: 1,
            onCompleteParams: 1,
            onCompleteScope: 1,
            useFrames: 1,
            runBackwards: 1,
            startAt: 1,
            onUpdate: 1,
            onUpdateParams: 1,
            onUpdateScope: 1,
            onStart: 1,
            onStartParams: 1,
            onStartScope: 1,
            onReverseComplete: 1,
            onReverseCompleteParams: 1,
            onReverseCompleteScope: 1,
            onRepeat: 1,
            onRepeatParams: 1,
            onRepeatScope: 1,
            easeParams: 1,
            yoyo: 1,
            immediateRender: 1,
            repeat: 1,
            repeatDelay: 1,
            data: 1,
            paused: 1,
            reversed: 1,
            autoCSS: 1
        }, F = {none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, "true": 1, "false": 0},
        I = k._rootFramesTimeline = new A, q = k._rootTimeline = new A;
    q._startTime = c.time, I._startTime = c.frame, q._active = I._active = !0, k._updateRoot = function () {
        q.render((c.time - q._startTime) * q._timeScale, !1, !1), I.render((c.frame - I._startTime) * I._timeScale, !1, !1);
        if (!(c.frame % 120)) {
            var e, t, n;
            for (n in H) {
                t = H[n].tweens, e = t.length;
                while (--e > -1) t[e]._gc && t.splice(e, 1);
                t.length === 0 && delete H[n]
            }
            n = q._first;
            if (!n || n._paused) if (O.autoSleep && !I._first && c._listeners.tick.length === 1) {
                while (n && n._paused) n = n._next;
                n || c.sleep()
            }
        }
    }, c.addEventListener("tick", k._updateRoot);
    var R = function (e, t, n) {
        var r = e._gsTweenID, i, s;
        H[r || (e._gsTweenID = r = "t" + B++)] || (H[r] = {target: e, tweens: []});
        if (t) {
            i = H[r].tweens, i[s = i.length] = t;
            if (n) while (--s > -1) i[s] === t && i.splice(s, 1)
        }
        return H[r].tweens
    }, U = function (e, t, n, r, s) {
        var o, u, a, f;
        if (r === 1 || r >= 4) {
            f = s.length;
            for (o = 0; o < f; o++) if ((a = s[o]) !== t) a._gc || a._enabled(!1, !1) && (u = !0); else if (r === 5) break;
            return u
        }
        var l = t._startTime + i, c = [], h = 0, p = t._duration === 0, d;
        o = s.length;
        while (--o > -1) (a = s[o]) !== t && !a._gc && !a._paused && (a._timeline !== t._timeline ? (d = d || z(t, 0, p), z(a, d, p) === 0 && (c[h++] = a)) : a._startTime <= l && a._startTime + a.totalDuration() / a._timeScale + i > l && ((p || !a._initted) && l - a._startTime <= 2e-10 || (c[h++] = a)));
        o = h;
        while (--o > -1) a = c[o], r === 2 && a._kill(n, e) && (u = !0), (r !== 2 || !a._firstPT && a._initted) && a._enabled(!1, !1) && (u = !0);
        return u
    }, z = function (e, t, n) {
        var r = e._timeline, s = r._timeScale, o = e._startTime;
        while (r._timeline) {
            o += r._startTime, s *= r._timeScale;
            if (r._paused) return -100;
            r = r._timeline
        }
        return o /= s, o > t ? o - t : n && o === t || !e._initted && o - t < 2 * i ? i : (o += e.totalDuration() / e._timeScale / s) > t + i ? 0 : o - t - i
    };
    l._init = function () {
        var e = this.vars, t = this._overwrittenProps, n = this._duration, r = e.immediateRender, i = e.ease, s, o, u,
            a;
        if (e.startAt) {
            this._startAt && this._startAt.render(-1, !0), e.startAt.overwrite = 0, e.startAt.immediateRender = !0, this._startAt = O.to(this.target, 0, e.startAt);
            if (r) if (this._time > 0) this._startAt = null; else if (n !== 0) return
        } else if (e.runBackwards && n !== 0) if (this._startAt) this._startAt.render(-1, !0), this._startAt = null; else {
            u = {};
            for (a in e) if (!j[a] || a === "autoCSS") u[a] = e[a];
            u.overwrite = 0, u.data = "isFromStart", this._startAt = O.to(this.target, 0, u);
            if (!e.immediateRender) this._startAt.render(-1, !0); else if (this._time === 0) return
        }
        i ? i instanceof b ? this._ease = e.easeParams instanceof Array ? i.config.apply(i, e.easeParams) : i : this._ease = typeof i == "function" ? new b(i, e.easeParams) : w[i] || O.defaultEase : this._ease = O.defaultEase, this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null;
        if (this._targets) {
            s = this._targets.length;
            while (--s > -1) this._initProps(this._targets[s], this._propLookup[s] = {}, this._siblings[s], t ? t[s] : null) && (o = !0)
        } else o = this._initProps(this.target, this._propLookup, this._siblings, t);
        o && O._onPluginEvent("_onInitAllProps", this), t && (this._firstPT || typeof this.target != "function" && this._enabled(!1, !1));
        if (e.runBackwards) {
            u = this._firstPT;
            while (u) u.s += u.c, u.c = -u.c, u = u._next
        }
        this._onUpdate = e.onUpdate, this._initted = !0
    }, l._initProps = function (t, n, r, i) {
        var s, o, a, f, l, c, h;
        if (t == null) return !1;
        this.vars.css || t.style && t !== e && t.nodeType && P.css && this.vars.autoCSS !== !1 && _(this.vars, t);
        for (s in this.vars) {
            h = this.vars[s];
            if (j[s]) h && (h instanceof Array || h.push && u(h)) && h.join("").indexOf("{self}") !== -1 && (this.vars[s] = h = this._swapSelfInParams(h, this)); else if (P[s] && (f = new P[s])._onInitTween(t, this.vars[s], this)) {
                this._firstPT = c = {
                    _next: this._firstPT,
                    t: f,
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: !0,
                    n: s,
                    pg: !0,
                    pr: f._priority
                }, o = f._overwriteProps.length;
                while (--o > -1) n[f._overwriteProps[o]] = this._firstPT;
                if (f._priority || f._onInitAllProps) a = !0;
                if (f._onDisable || f._onEnable) this._notifyPluginsOfEnabled = !0
            } else this._firstPT = n[s] = c = {
                _next: this._firstPT,
                t: t,
                p: s,
                f: typeof t[s] == "function",
                n: s,
                pg: !1,
                pr: 0
            }, c.s = c.f ? t[s.indexOf("set") || typeof t["get" + s.substr(3)] != "function" ? s : "get" + s.substr(3)]() : parseFloat(t[s]), c.c = typeof h == "string" && h.charAt(1) === "=" ? parseInt(h.charAt(0) + "1", 10) * Number(h.substr(2)) : Number(h) - c.s || 0;
            c && c._next && (c._next._prev = c)
        }
        return i && this._kill(i, t) ? this._initProps(t, n, r, i) : this._overwrite > 1 && this._firstPT && r.length > 1 && U(t, this, n, this._overwrite, r) ? (this._kill(n, t), this._initProps(t, n, r, i)) : a
    }, l.render = function (e, t, n) {
        var r = this._time, s = this._duration, o, u, a, f;
        if (e >= s) this._totalTime = this._time = s, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (o = !0, u = "onComplete"), s === 0 && (f = this._rawPrevTime, (e === 0 || f < 0 || f === i) && f !== e && (n = !0, f > i && (u = "onReverseComplete")), this._rawPrevTime = f = !t || e ? e : i); else if (e < 1e-7) {
            this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
            if (r !== 0 || s === 0 && this._rawPrevTime > i) u = "onReverseComplete", o = this._reversed;
            e < 0 ? (this._active = !1, s === 0 && (this._rawPrevTime >= 0 && (n = !0), this._rawPrevTime = f = !t || e ? e : i)) : this._initted || (n = !0)
        } else {
            this._totalTime = this._time = e;
            if (this._easeType) {
                var l = e / s, c = this._easeType, h = this._easePower;
                if (c === 1 || c === 3 && l >= .5) l = 1 - l;
                c === 3 && (l *= 2), h === 1 ? l *= l : h === 2 ? l *= l * l : h === 3 ? l *= l * l * l : h === 4 && (l *= l * l * l * l), c === 1 ? this.ratio = 1 - l : c === 2 ? this.ratio = l : e / s < .5 ? this.ratio = l / 2 : this.ratio = 1 - l / 2
            } else this.ratio = this._ease.getRatio(e / s)
        }
        if (this._time === r && !n) return;
        if (!this._initted) {
            this._init();
            if (!this._initted || this._gc) return;
            this._time && !o ? this.ratio = this._ease.getRatio(this._time / s) : o && this._ease._calcEnd && (this.ratio = this._ease.getRatio(this._time === 0 ? 0 : 1))
        }
        this._active || !this._paused && this._time !== r && e >= 0 && (this._active = !0), r === 0 && (this._startAt && (e >= 0 ? this._startAt.render(e, t, n) : u || (u = "_dummyGS")), this.vars.onStart && (this._time !== 0 || s === 0) && (t || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || y))), a = this._firstPT;
        while (a) a.f ? a.t[a.p](a.c * this.ratio + a.s) : a.t[a.p] = a.c * this.ratio + a.s, a = a._next;
        this._onUpdate && (e < 0 && this._startAt && this._startTime && this._startAt.render(e, t, n), t || (!n || this._time !== 0 || r !== 0) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || y)), u && (this._gc || (e < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(e, t, n), o && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[u] && this.vars[u].apply(this.vars[u + "Scope"] || this, this.vars[u + "Params"] || y), s === 0 && this._rawPrevTime === i && f !== i && (this._rawPrevTime = 0)))
    }, l._kill = function (e, t) {
        e === "all" && (e = null);
        if (e == null) if (t == null || t === this.target) return this._enabled(!1, !1);
        t = typeof t != "string" ? t || this._targets || this.target : O.selector(t) || t;
        var n, r, i, s, o, a, f, l;
        if ((u(t) || M(t)) && typeof t[0] != "number") {
            n = t.length;
            while (--n > -1) this._kill(e, t[n]) && (a = !0)
        } else {
            if (this._targets) {
                n = this._targets.length;
                while (--n > -1) if (t === this._targets[n]) {
                    o = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[n] = e ? this._overwrittenProps[n] || {} : "all";
                    break
                }
            } else {
                if (t !== this.target) return !1;
                o = this._propLookup, r = this._overwrittenProps = e ? this._overwrittenProps || {} : "all"
            }
            if (o) {
                f = e || o, l = e !== r && r !== "all" && e !== o && (typeof e != "object" || !e._tempKill);
                for (i in f) {
                    if (s = o[i]) {
                        s.pg && s.t._kill(f) && (a = !0);
                        if (!s.pg || s.t._overwriteProps.length === 0) s._prev ? s._prev._next = s._next : s === this._firstPT && (this._firstPT = s._next), s._next && (s._next._prev = s._prev), s._next = s._prev = null;
                        delete o[i]
                    }
                    l && (r[i] = 1)
                }
                !this._firstPT && this._initted && this._enabled(!1, !1)
            }
        }
        return a
    }, l.invalidate = function () {
        return this._notifyPluginsOfEnabled && O._onPluginEvent("_onDisable", this), this._firstPT = null, this._overwrittenProps = null, this._onUpdate = null, this._startAt = null, this._initted = this._active = this._notifyPluginsOfEnabled = !1, this._propLookup = this._targets ? {} : [], this
    }, l._enabled = function (e, t) {
        h || c.wake();
        if (e && this._gc) {
            var n = this._targets, r;
            if (n) {
                r = n.length;
                while (--r > -1) this._siblings[r] = R(n[r], this, !0)
            } else this._siblings = R(this.target, this, !0)
        }
        return k.prototype._enabled.call(this, e, t), this._notifyPluginsOfEnabled && this._firstPT ? O._onPluginEvent(e ? "_onEnable" : "_onDisable", this) : !1
    }, O.to = function (e, t, n) {
        return new O(e, t, n)
    }, O.from = function (e, t, n) {
        return n.runBackwards = !0, n.immediateRender = n.immediateRender != 0, new O(e, t, n)
    }, O.fromTo = function (e, t, n, r) {
        return r.startAt = n, r.immediateRender = r.immediateRender != 0 && n.immediateRender != 0, new O(e, t, r)
    }, O.delayedCall = function (e, t, n, r, i) {
        return new O(t, 0, {
            delay: e,
            onComplete: t,
            onCompleteParams: n,
            onCompleteScope: r,
            onReverseComplete: t,
            onReverseCompleteParams: n,
            onReverseCompleteScope: r,
            immediateRender: !1,
            useFrames: i,
            overwrite: 0
        })
    }, O.set = function (e, t) {
        return new O(e, 0, t)
    }, O.getTweensOf = function (e, t) {
        if (e == null) return [];
        e = typeof e != "string" ? e : O.selector(e) || e;
        var n, r, i, s;
        if ((u(e) || M(e)) && typeof e[0] != "number") {
            n = e.length, r = [];
            while (--n > -1) r = r.concat(O.getTweensOf(e[n], t));
            n = r.length;
            while (--n > -1) {
                s = r[n], i = n;
                while (--i > -1) s === r[i] && r.splice(n, 1)
            }
        } else {
            r = R(e).concat(), n = r.length;
            while (--n > -1) (r[n]._gc || t && !r[n].isActive()) && r.splice(n, 1)
        }
        return r
    }, O.killTweensOf = O.killDelayedCallsTo = function (e, t, n) {
        typeof t == "object" && (n = t, t = !1);
        var r = O.getTweensOf(e, t), i = r.length;
        while (--i > -1) r[i]._kill(n, e)
    };
    var W = m("plugins.TweenPlugin", function (e, t) {
        this._overwriteProps = (e || "").split(","), this._propName = this._overwriteProps[0], this._priority = t || 0, this._super = W.prototype
    }, !0);
    l = W.prototype, W.version = "1.10.1", W.API = 2, l._firstPT = null, l._addTween = function (e, t, n, r, i, s) {
        var o, u;
        if (r != null && (o = typeof r == "number" || r.charAt(1) !== "=" ? Number(r) - n : parseInt(r.charAt(0) + "1", 10) * Number(r.substr(2)))) return this._firstPT = u = {
            _next: this._firstPT,
            t: e,
            p: t,
            s: n,
            c: o,
            f: typeof e[t] == "function",
            n: i || t,
            r: s
        }, u._next && (u._next._prev = u), u
    }, l.setRatio = function (e) {
        var t = this._firstPT, n = 1e-6, r;
        while (t) r = t.c * e + t.s, t.r ? r = r + (r > 0 ? .5 : -0.5) | 0 : r < n && r > -n && (r = 0), t.f ? t.t[t.p](r) : t.t[t.p] = r, t = t._next
    }, l._kill = function (e) {
        var t = this._overwriteProps, n = this._firstPT, r;
        if (e[this._propName] != null) this._overwriteProps = []; else {
            r = t.length;
            while (--r > -1) e[t[r]] != null && t.splice(r, 1)
        }
        while (n) e[n.n] != null && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
        return !1
    }, l._roundProps = function (e, t) {
        var n = this._firstPT;
        while (n) {
            if (e[this._propName] || n.n != null && e[n.n.split(this._propName + "_").join("")]) n.r = t;
            n = n._next
        }
    }, O._onPluginEvent = function (e, t) {
        var n = t._firstPT, r, i, s, o, u;
        if (e === "_onInitAllProps") {
            while (n) {
                u = n._next, i = s;
                while (i && i.pr > n.pr) i = i._next;
                (n._prev = i ? i._prev : o) ? n._prev._next = n : s = n, (n._next = i) ? i._prev = n : o = n, n = u
            }
            n = t._firstPT = s
        }
        while (n) n.pg && typeof n.t[e] == "function" && n.t[e]() && (r = !0), n = n._next;
        return r
    }, W.activate = function (e) {
        var t = e.length;
        while (--t > -1) e[t].API === W.API && (P[(new e[t])._propName] = e[t]);
        return !0
    }, v.plugin = function (e) {
        if (!e || !e.propName || !e.init || !e.API) throw"illegal plugin definition.";
        var t = e.propName, n = e.priority || 0, r = e.overwriteProps, i = {
            init: "_onInitTween",
            set: "setRatio",
            kill: "_kill",
            round: "_roundProps",
            initAll: "_onInitAllProps"
        }, s = m("plugins." + t.charAt(0).toUpperCase() + t.substr(1) + "Plugin", function () {
            W.call(this, t, n), this._overwriteProps = r || []
        }, e.global === !0), o = s.prototype = new W(t), u;
        o.constructor = s, s.API = e.API;
        for (u in i) typeof e[u] == "function" && (o[i[u]] = e[u]);
        return s.version = e.version, W.activate([s]), s
    }, a = e._gsQueue;
    if (a) {
        for (f = 0; f < a.length; f++) a[f]();
        for (l in p) p[l].func || e.console.log("GSAP encountered missing dependency: com.greensock." + l)
    }
    h = !1
}(window),define("tweenmax", function (e) {
    return function () {
        var t, n;
        return t || e.TweenMax
    }
}(this)),function (e) {
    function v(e) {
        return e = +e, e === 0 || isNaN(e) ? e : e > 0 ? 1 : -1
    }

    function m(e) {
        var t = new Promise(function (t, n) {
            var r = function (i) {
                setTimeout(function () {
                    e && e.data ? t() : i >= 20 ? n() : r(++i)
                }, 50)
            };
            r(0)
        });
        return t
    }

    function g() {
        a ? f = (e.screen.orientation.angle || 0) * i : f = (e.orientation || 0) * i
    }

    function y(e) {
        o.orientation.data = e;
        for (var t in o.orientation.callbacks) o.orientation.callbacks[t].call(this)
    }

    function b(e) {
        o.motion.data = e;
        for (var t in o.motion.callbacks) o.motion.callbacks[t].call(this)
    }

    if (e.FULLTILT !== undefined && e.FULLTILT !== null) return;
    var t = Math.PI, n = t / 2, r = 2 * t, i = t / 180, s = 180 / t, o = {
            orientation: {active: !1, callbacks: [], data: undefined},
            motion: {active: !1, callbacks: [], data: undefined}
        }, u = !1,
        a = e.screen && e.screen.orientation && e.screen.orientation.angle !== undefined && e.screen.orientation.angle !== null ? !0 : !1,
        f = (a ? e.screen.orientation.angle : e.orientation || 0) * i, l = 0, c = n, h = t, p = r / 3, d = -n, w = {};
    w.version = "0.5.3", w.getDeviceOrientation = function (e) {
        var t = new Promise(function (t, n) {
            var r = new w.DeviceOrientation(e);
            r.start();
            var i = new m(o.orientation);
            i.then(function () {
                r._alphaAvailable = o.orientation.data.alpha && o.orientation.data.alpha !== null, r._betaAvailable = o.orientation.data.beta && o.orientation.data.beta !== null, r._gammaAvailable = o.orientation.data.gamma && o.orientation.data.gamma !== null, t(r)
            }).catch(function () {
                r.stop(), n("DeviceOrientation is not supported")
            })
        });
        return t
    }, w.getDeviceMotion = function (e) {
        var t = new Promise(function (t, n) {
            var r = new w.DeviceMotion(e);
            r.start();
            var i = new m(o.motion);
            i.then(function () {
                r._accelerationXAvailable = o.motion.data.acceleration && o.motion.data.acceleration.x, r._accelerationYAvailable = o.motion.data.acceleration && o.motion.data.acceleration.y, r._accelerationZAvailable = o.motion.data.acceleration && o.motion.data.acceleration.z, r._accelerationIncludingGravityXAvailable = o.motion.data.accelerationIncludingGravity && o.motion.data.accelerationIncludingGravity.x, r._accelerationIncludingGravityYAvailable = o.motion.data.accelerationIncludingGravity && o.motion.data.accelerationIncludingGravity.y, r._accelerationIncludingGravityZAvailable = o.motion.data.accelerationIncludingGravity && o.motion.data.accelerationIncludingGravity.z, r._rotationRateAlphaAvailable = o.motion.data.rotationRate && o.motion.data.rotationRate.alpha, r._rotationRateBetaAvailable = o.motion.data.rotationRate && o.motion.data.rotationRate.beta, r._rotationRateGammaAvailable = o.motion.data.rotationRate && o.motion.data.rotationRate.gamma, t(r)
            }).catch(function () {
                r.stop(), n("DeviceMotion is not supported")
            })
        });
        return t
    }, w.Quaternion = function (e, t, n, r) {
        var s, o;
        this.set = function (e, t, n, r) {
            this.x = e || 0, this.y = t || 0, this.z = n || 0, this.w = r || 1
        }, this.copy = function (e) {
            this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w
        }, this.setFromEuler = function () {
            var e, t, n, r, s, o, u, a, f, l, c, h;
            return function (p) {
                return p = p || {}, n = (p.alpha || 0) * i, e = (p.beta || 0) * i, t = (p.gamma || 0) * i, o = n / 2, r = e / 2, s = t / 2, u = Math.cos(r), a = Math.cos(s), f = Math.cos(o), l = Math.sin(r), c = Math.sin(s), h = Math.sin(o), this.set(l * a * f - u * c * h, u * c * f + l * a * h, u * a * h + l * c * f, u * a * f - l * c * h), this.normalize(), this
            }
        }(), this.setFromRotationMatrix = function () {
            var e;
            return function (t) {
                return e = t.elements, this.set(.5 * Math.sqrt(1 + e[0] - e[4] - e[8]) * v(e[7] - e[5]), .5 * Math.sqrt(1 - e[0] + e[4] - e[8]) * v(e[2] - e[6]), .5 * Math.sqrt(1 - e[0] - e[4] + e[8]) * v(e[3] - e[1]), .5 * Math.sqrt(1 + e[0] + e[4] + e[8])), this
            }
        }(), this.multiply = function (e) {
            return o = w.Quaternion.prototype.multiplyQuaternions(this, e), this.copy(o), this
        }, this.rotateX = function (e) {
            return o = w.Quaternion.prototype.rotateByAxisAngle(this, [1, 0, 0], e), this.copy(o), this
        }, this.rotateY = function (e) {
            return o = w.Quaternion.prototype.rotateByAxisAngle(this, [0, 1, 0], e), this.copy(o), this
        }, this.rotateZ = function (e) {
            return o = w.Quaternion.prototype.rotateByAxisAngle(this, [0, 0, 1], e), this.copy(o), this
        }, this.normalize = function () {
            return w.Quaternion.prototype.normalize(this)
        }, this.set(e, t, n, r)
    }, w.Quaternion.prototype = {
        constructor: w.Quaternion, multiplyQuaternions: function () {
            var e = new w.Quaternion;
            return function (t, n) {
                var r = t.x, i = t.y, s = t.z, o = t.w, u = n.x, a = n.y, f = n.z, l = n.w;
                return e.set(r * l + o * u + i * f - s * a, i * l + o * a + s * u - r * f, s * l + o * f + r * a - i * u, o * l - r * u - i * a - s * f), e
            }
        }(), normalize: function (e) {
            var t = Math.sqrt(e.x * e.x + e.y * e.y + e.z * e.z + e.w * e.w);
            return t === 0 ? (e.x = 0, e.y = 0, e.z = 0, e.w = 1) : (t = 1 / t, e.x *= t, e.y *= t, e.z *= t, e.w *= t), e
        }, rotateByAxisAngle: function () {
            var e = new w.Quaternion, t = new w.Quaternion, n, r;
            return function (i, s, o) {
                return n = (o || 0) / 2, r = Math.sin(n), t.set((s[0] || 0) * r, (s[1] || 0) * r, (s[2] || 0) * r, Math.cos(n)), e = w.Quaternion.prototype.multiplyQuaternions(i, t), w.Quaternion.prototype.normalize(e)
            }
        }()
    }, w.RotationMatrix = function (e, t, n, r, s, o, u, a, f) {
        var l;
        this.elements = new Float32Array(9), this.identity = function () {
            return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
        }, this.set = function (e, t, n, r, i, s, o, u, a) {
            this.elements[0] = e || 1, this.elements[1] = t || 0, this.elements[2] = n || 0, this.elements[3] = r || 0, this.elements[4] = i || 1, this.elements[5] = s || 0, this.elements[6] = o || 0, this.elements[7] = u || 0, this.elements[8] = a || 1
        }, this.copy = function (e) {
            this.elements[0] = e.elements[0], this.elements[1] = e.elements[1], this.elements[2] = e.elements[2], this.elements[3] = e.elements[3], this.elements[4] = e.elements[4], this.elements[5] = e.elements[5], this.elements[6] = e.elements[6], this.elements[7] = e.elements[7], this.elements[8] = e.elements[8]
        }, this.setFromEuler = function () {
            var e, t, n, r, s, o, u, a, f;
            return function (l) {
                return l = l || {}, n = (l.alpha || 0) * i, e = (l.beta || 0) * i, t = (l.gamma || 0) * i, r = Math.cos(e), s = Math.cos(t), o = Math.cos(n), u = Math.sin(e), a = Math.sin(t), f = Math.sin(n), this.set(o * s - f * u * a, -r * f, s * f * u + o * a, s * f + o * u * a, o * r, f * a - o * s * u, -r * a, u, r * s), this.normalize(), this
            }
        }(), this.setFromQuaternion = function () {
            var e, t, n, r;
            return function (i) {
                return e = i.w * i.w, t = i.x * i.x, n = i.y * i.y, r = i.z * i.z, this.set(e + t - n - r, 2 * (i.x * i.y - i.w * i.z), 2 * (i.x * i.z + i.w * i.y), 2 * (i.x * i.y + i.w * i.z), e - t + n - r, 2 * (i.y * i.z - i.w * i.x), 2 * (i.x * i.z - i.w * i.y), 2 * (i.y * i.z + i.w * i.x), e - t - n + r), this
            }
        }(), this.multiply = function (e) {
            return l = w.RotationMatrix.prototype.multiplyMatrices(this, e), this.copy(l), this
        }, this.rotateX = function (e) {
            return l = w.RotationMatrix.prototype.rotateByAxisAngle(this, [1, 0, 0], e), this.copy(l), this
        }, this.rotateY = function (e) {
            return l = w.RotationMatrix.prototype.rotateByAxisAngle(this, [0, 1, 0], e), this.copy(l), this
        }, this.rotateZ = function (e) {
            return l = w.RotationMatrix.prototype.rotateByAxisAngle(this, [0, 0, 1], e), this.copy(l), this
        }, this.normalize = function () {
            return w.RotationMatrix.prototype.normalize(this)
        }, this.set(e, t, n, r, s, o, u, a, f)
    }, w.RotationMatrix.prototype = {
        constructor: w.RotationMatrix, multiplyMatrices: function () {
            var e = new w.RotationMatrix, t, n;
            return function (r, i) {
                return t = r.elements, n = i.elements, e.set(t[0] * n[0] + t[1] * n[3] + t[2] * n[6], t[0] * n[1] + t[1] * n[4] + t[2] * n[7], t[0] * n[2] + t[1] * n[5] + t[2] * n[8], t[3] * n[0] + t[4] * n[3] + t[5] * n[6], t[3] * n[1] + t[4] * n[4] + t[5] * n[7], t[3] * n[2] + t[4] * n[5] + t[5] * n[8], t[6] * n[0] + t[7] * n[3] + t[8] * n[6], t[6] * n[1] + t[7] * n[4] + t[8] * n[7], t[6] * n[2] + t[7] * n[5] + t[8] * n[8]), e
            }
        }(), normalize: function (e) {
            var t = e.elements,
                n = t[0] * t[4] * t[8] - t[0] * t[5] * t[7] - t[1] * t[3] * t[8] + t[1] * t[5] * t[6] + t[2] * t[3] * t[7] - t[2] * t[4] * t[6];
            return t[0] /= n, t[1] /= n, t[2] /= n, t[3] /= n, t[4] /= n, t[5] /= n, t[6] /= n, t[7] /= n, t[8] /= n, e.elements = t, e
        }, rotateByAxisAngle: function () {
            var e = new w.RotationMatrix, t = new w.RotationMatrix, n, r, i = !1;
            return function (s, o, u) {
                return t.identity(), i = !1, n = Math.sin(u), r = Math.cos(u), o[0] === 1 && o[1] === 0 && o[2] === 0 ? (i = !0, t.elements[4] = r, t.elements[5] = -n, t.elements[7] = n, t.elements[8] = r) : o[1] === 1 && o[0] === 0 && o[2] === 0 ? (i = !0, t.elements[0] = r, t.elements[2] = n, t.elements[6] = -n, t.elements[8] = r) : o[2] === 1 && o[0] === 0 && o[1] === 0 && (i = !0, t.elements[0] = r, t.elements[1] = -n, t.elements[3] = n, t.elements[4] = r), i ? (e = w.RotationMatrix.prototype.multiplyMatrices(s, t), e = w.RotationMatrix.prototype.normalize(e)) : e = s, e
            }
        }()
    }, w.Euler = function (e, i, o) {
        this.set = function (e, t, n) {
            this.alpha = e || 0, this.beta = t || 0, this.gamma = n || 0
        }, this.copy = function (e) {
            this.alpha = e.alpha, this.beta = e.beta, this.gamma = e.gamma
        }, this.setFromRotationMatrix = function () {
            var e, i, o, u;
            return function (a) {
                e = a.elements, e[8] > 0 ? (i = Math.atan2(-e[1], e[4]), o = Math.asin(e[7]), u = Math.atan2(-e[6], e[8])) : e[8] < 0 ? (i = Math.atan2(e[1], -e[4]), o = -Math.asin(e[7]), o += o >= 0 ? -t : t, u = Math.atan2(e[6], -e[8])) : e[6] > 0 ? (i = Math.atan2(-e[1], e[4]), o = Math.asin(e[7]), u = -n) : e[6] < 0 ? (i = Math.atan2(e[1], -e[4]), o = -Math.asin(e[7]), o += o >= 0 ? -t : t, u = -n) : (i = Math.atan2(e[3], e[0]), o = e[7] > 0 ? n : -n, u = 0), i < 0 && (i += r), i *= s, o *= s, u *= s, this.set(i, o, u)
            }
        }(), this.setFromQuaternion = function () {
            var e, i, o;
            return function (u) {
                var a = u.w * u.w, f = u.x * u.x, l = u.y * u.y, c = u.z * u.z, h = a + f + l + c,
                    p = u.w * u.x + u.y * u.z, d = 1e-6;
                if (p > (.5 - d) * h) e = 2 * Math.atan2(u.y, u.w), i = n, o = 0; else if (p < (-0.5 + d) * h) e = -2 * Math.atan2(u.y, u.w), i = -n, o = 0; else {
                    var v = a - f + l - c, m = 2 * (u.w * u.z - u.x * u.y), g = a - f - l + c,
                        y = 2 * (u.w * u.y - u.x * u.z);
                    g > 0 ? (e = Math.atan2(m, v), i = Math.asin(2 * p / h), o = Math.atan2(y, g)) : (e = Math.atan2(-m, -v), i = -Math.asin(2 * p / h), i += i < 0 ? t : -t, o = Math.atan2(-y, -g))
                }
                e < 0 && (e += r), e *= s, i *= s, o *= s, this.set(e, i, o)
            }
        }(), this.rotateX = function (e) {
            return w.Euler.prototype.rotateByAxisAngle(this, [1, 0, 0], e), this
        }, this.rotateY = function (e) {
            return w.Euler.prototype.rotateByAxisAngle(this, [0, 1, 0], e), this
        }, this.rotateZ = function (e) {
            return w.Euler.prototype.rotateByAxisAngle(this, [0, 0, 1], e), this
        }, this.set(e, i, o)
    }, w.Euler.prototype = {
        constructor: w.Euler, rotateByAxisAngle: function () {
            var e = new w.RotationMatrix, t;
            return function (t, n, r) {
                return e.setFromEuler(t), e = w.RotationMatrix.prototype.rotateByAxisAngle(e, n, r), t.setFromRotationMatrix(e), t
            }
        }()
    }, w.DeviceOrientation = function (t) {
        this.options = t || {};
        var n = 0, r = 200, i = 0, s = 10;
        this.alphaOffsetScreen = 0, this.alphaOffsetDevice = undefined;
        if (this.options.type === "game") {
            var o = function (t) {
                if (t.alpha !== null) {
                    this.alphaOffsetDevice = new w.Euler(t.alpha, 0, 0), this.alphaOffsetDevice.rotateZ(-f);
                    if (++i >= s) {
                        e.removeEventListener("deviceorientation", o, !1);
                        return
                    }
                }
                ++n >= r && e.removeEventListener("deviceorientation", o, !1)
            }.bind(this);
            e.addEventListener("deviceorientation", o, !1)
        } else if (this.options.type === "world") {
            var u = function (t) {
                if (t.absolute !== !0 && t.webkitCompassAccuracy !== undefined && t.webkitCompassAccuracy !== null && +t.webkitCompassAccuracy >= 0 && +t.webkitCompassAccuracy < 50) {
                    this.alphaOffsetDevice = new w.Euler(t.webkitCompassHeading, 0, 0), this.alphaOffsetDevice.rotateZ(f), this.alphaOffsetScreen = f;
                    if (++i >= s) {
                        e.removeEventListener("deviceorientation", u, !1);
                        return
                    }
                }
                ++n >= r && e.removeEventListener("deviceorientation", u, !1)
            }.bind(this);
            e.addEventListener("deviceorientation", u, !1)
        }
    }, w.DeviceOrientation.prototype = {
        constructor: w.DeviceOrientation, start: function (t) {
            t && Object.prototype.toString.call(t) == "[object Function]" && o.orientation.callbacks.push(t), u || (a ? e.screen.orientation.addEventListener("change", g, !1) : e.addEventListener("orientationchange", g, !1)), o.orientation.active || (e.addEventListener("deviceorientation", y, !1), o.orientation.active = !0)
        }, stop: function () {
            o.orientation.active && (e.removeEventListener("deviceorientation", y, !1), o.orientation.active = !1)
        }, listen: function (e) {
            this.start(e)
        }, getFixedFrameQuaternion: function () {
            var e = new w.Euler, t = new w.RotationMatrix, n = new w.Quaternion;
            return function () {
                var r = o.orientation.data || {alpha: 0, beta: 0, gamma: 0}, i = r.alpha;
                return this.alphaOffsetDevice && (t.setFromEuler(this.alphaOffsetDevice), t.rotateZ(-this.alphaOffsetScreen), e.setFromRotationMatrix(t), e.alpha < 0 && (e.alpha += 360), e.alpha %= 360, i -= e.alpha), e.set(i, r.beta, r.gamma), n.setFromEuler(e), n
            }
        }(), getScreenAdjustedQuaternion: function () {
            var e;
            return function () {
                return e = this.getFixedFrameQuaternion(), e.rotateZ(-f), e
            }
        }(), getFixedFrameMatrix: function () {
            var e = new w.Euler, t = new w.RotationMatrix;
            return function () {
                var n = o.orientation.data || {alpha: 0, beta: 0, gamma: 0}, r = n.alpha;
                return this.alphaOffsetDevice && (t.setFromEuler(this.alphaOffsetDevice), t.rotateZ(-this.alphaOffsetScreen), e.setFromRotationMatrix(t), e.alpha < 0 && (e.alpha += 360), e.alpha %= 360, r -= e.alpha), e.set(r, n.beta, n.gamma), t.setFromEuler(e), t
            }
        }(), getScreenAdjustedMatrix: function () {
            var e;
            return function () {
                return e = this.getFixedFrameMatrix(), e.rotateZ(-f), e
            }
        }(), getFixedFrameEuler: function () {
            var e = new w.Euler, t;
            return function () {
                return t = this.getFixedFrameMatrix(), e.setFromRotationMatrix(t), e
            }
        }(), getScreenAdjustedEuler: function () {
            var e = new w.Euler, t;
            return function () {
                return t = this.getScreenAdjustedMatrix(), e.setFromRotationMatrix(t), e
            }
        }(), isAbsolute: function () {
            return o.orientation.data && o.orientation.data.absolute === !0 ? !0 : !1
        }, getLastRawEventData: function () {
            return o.orientation.data || {}
        }, _alphaAvailable: !1, _betaAvailable: !1, _gammaAvailable: !1, isAvailable: function (e) {
            switch (e) {
                case this.ALPHA:
                    return this._alphaAvailable;
                case this.BETA:
                    return this._betaAvailable;
                case this.GAMMA:
                    return this._gammaAvailable
            }
        }, ALPHA: "alpha", BETA: "beta", GAMMA: "gamma"
    }, w.DeviceMotion = function (e) {
        this.options = e || {}
    }, w.DeviceMotion.prototype = {
        constructor: w.DeviceMotion,
        start: function (t) {
            t && Object.prototype.toString.call(t) == "[object Function]" && o.motion.callbacks.push(t), u || (a ? e.screen.orientation.addEventListener("change", g, !1) : e.addEventListener("orientationchange", g, !1)), o.motion.active || (e.addEventListener("devicemotion", b, !1), o.motion.active = !0)
        },
        stop: function () {
            o.motion.active && (e.removeEventListener("devicemotion", b, !1), o.motion.active = !1)
        },
        listen: function (e) {
            this.start(e)
        },
        getScreenAdjustedAcceleration: function () {
            var e = o.motion.data && o.motion.data.acceleration ? o.motion.data.acceleration : {x: 0, y: 0, z: 0},
                t = {};
            switch (f) {
                case c:
                    t.x = -e.y, t.y = e.x;
                    break;
                case h:
                    t.x = -e.x, t.y = -e.y;
                    break;
                case p:
                case d:
                    t.x = e.y, t.y = -e.x;
                    break;
                default:
                    t.x = e.x, t.y = e.y
            }
            return t.z = e.z, t
        },
        getScreenAdjustedAccelerationIncludingGravity: function () {
            var e = o.motion.data && o.motion.data.accelerationIncludingGravity ? o.motion.data.accelerationIncludingGravity : {
                x: 0,
                y: 0,
                z: 0
            }, t = {};
            switch (f) {
                case c:
                    t.x = -e.y, t.y = e.x;
                    break;
                case h:
                    t.x = -e.x, t.y = -e.y;
                    break;
                case p:
                case d:
                    t.x = e.y, t.y = -e.x;
                    break;
                default:
                    t.x = e.x, t.y = e.y
            }
            return t.z = e.z, t
        },
        getScreenAdjustedRotationRate: function () {
            var e = o.motion.data && o.motion.data.rotationRate ? o.motion.data.rotationRate : {
                alpha: 0,
                beta: 0,
                gamma: 0
            }, t = {};
            switch (f) {
                case c:
                    t.beta = -e.gamma, t.gamma = e.beta;
                    break;
                case h:
                    t.beta = -e.beta, t.gamma = -e.gamma;
                    break;
                case p:
                case d:
                    t.beta = e.gamma, t.gamma = -e.beta;
                    break;
                default:
                    t.beta = e.beta, t.gamma = e.gamma
            }
            return t.alpha = e.alpha, t
        },
        getLastRawEventData: function () {
            return o.motion.data || {}
        },
        _accelerationXAvailable: !1,
        _accelerationYAvailable: !1,
        _accelerationZAvailable: !1,
        _accelerationIncludingGravityXAvailable: !1,
        _accelerationIncludingGravityYAvailable: !1,
        _accelerationIncludingGravityZAvailable: !1,
        _rotationRateAlphaAvailable: !1,
        _rotationRateBetaAvailable: !1,
        _rotationRateGammaAvailable: !1,
        isAvailable: function (e) {
            switch (e) {
                case this.ACCELERATION_X:
                    return this._accelerationXAvailable;
                case this.ACCELERATION_Y:
                    return this._accelerationYAvailable;
                case this.ACCELERATION_Z:
                    return this._accelerationZAvailable;
                case this.ACCELERATION_INCLUDING_GRAVITY_X:
                    return this._accelerationIncludingGravityXAvailable;
                case this.ACCELERATION_INCLUDING_GRAVITY_Y:
                    return this._accelerationIncludingGravityYAvailable;
                case this.ACCELERATION_INCLUDING_GRAVITY_Z:
                    return this._accelerationIncludingGravityZAvailable;
                case this.ROTATION_RATE_ALPHA:
                    return this._rotationRateAlphaAvailable;
                case this.ROTATION_RATE_BETA:
                    return this._rotationRateBetaAvailable;
                case this.ROTATION_RATE_GAMMA:
                    return this._rotationRateGammaAvailable
            }
        },
        ACCELERATION_X: "accelerationX",
        ACCELERATION_Y: "accelerationY",
        ACCELERATION_Z: "accelerationZ",
        ACCELERATION_INCLUDING_GRAVITY_X: "accelerationIncludingGravityX",
        ACCELERATION_INCLUDING_GRAVITY_Y: "accelerationIncludingGravityY",
        ACCELERATION_INCLUDING_GRAVITY_Z: "accelerationIncludingGravityZ",
        ROTATION_RATE_ALPHA: "rotationRateAlpha",
        ROTATION_RATE_BETA: "rotationRateBeta",
        ROTATION_RATE_GAMMA: "rotationRateGamma"
    }, e.FULLTILT = w
}(window),function (e, t) {
    var n = {GyroNorm: t()};
    typeof define == "function" && define.amd ? define("gyro", [], function () {
        return n
    }) : typeof module == "object" && module.exports ? module.exports = n : e.GyroNorm = n.GyroNorm
}(this, function () {
    function S(e) {
        return Math.round(e * Math.pow(10, g)) / Math.pow(10, g)
    }

    function x() {
        u = !0, _calibrationValues = new Array
    }

    function T() {
        var t = {};
        b ? t = h.getScreenAdjustedEuler() : t = h.getFixedFrameEuler();
        var n = p.getScreenAdjustedAcceleration(), r = p.getScreenAdjustedAccelerationIncludingGravity(),
            i = p.getScreenAdjustedRotationRate(), s = 0;
        m === e ? (s = t.alpha - a, s = s < 0 ? 360 - Math.abs(s) : s) : s = t.alpha;
        var o = {
            "do": {alpha: S(s), beta: S(t.beta), gamma: S(t.gamma), absolute: h.isAbsolute()},
            dm: {
                x: S(n.x),
                y: S(n.y),
                z: S(n.z),
                gx: S(r.x),
                gy: S(r.y),
                gz: S(r.z),
                alpha: S(i.alpha),
                beta: S(i.beta),
                gamma: S(i.gamma)
            }
        };
        return v && (o.dm.gx *= f, o.dm.gy *= f, o.dm.gz *= f), o
    }

    function N(e) {
        y && (typeof e == "string" && (e = {message: e, code: 0}), y(e))
    }

    var e = "game", t = "world", n = "deviceorientation", r = "acceleration", i = "accelerationinludinggravity",
        s = "rotationrate", o = null, u = !1, a = 0, f = 0, l = !1, c = !1, h = null, p = null, d = 50, v = !0, m = e,
        g = 2, y = null, b = !1, w = {
            "do": {alpha: 0, beta: 0, gamma: 0, absolute: !1},
            dm: {x: 0, y: 0, z: 0, gx: 0, gy: 0, gz: 0, alpha: 0, beta: 0, gamma: 0}
        }, E = function (e) {
        };
    return E.GAME = e, E.WORLD = t, E.DEVICE_ORIENTATION = n, E.ACCELERATION = r, E.ACCELERATION_INCLUDING_GRAVITY = i, E.ROTATION_RATE = s, E.prototype.init = function (e) {
        e && e.frequency && (d = e.frequency), e && e.gravityNormalized && (v = e.gravityNormalized), e && e.orientationBase && (m = e.orientationBase), e && typeof e.decimalCount == "number" && e.decimalCount >= 0 && (g = parseInt(e.decimalCount)), e && e.logger && (y = e.logger), e && e.screenAdjusted && (b = e.screenAdjusted);
        var t = (new FULLTILT.getDeviceOrientation({type: m})).then(function (e) {
            h = e
        }), n = (new FULLTILT.getDeviceMotion).then(function (e) {
            p = e, f = p.getScreenAdjustedAccelerationIncludingGravity().z > 0 ? -1 : 1
        });
        return Promise.all([t, n]).then(function () {
            c = !0
        })
    }, E.prototype.end = function () {
        try {
            c = !1, this.stop(), p.stop(), h.stop()
        } catch (e) {
            N(e)
        }
    }, E.prototype.start = function (e) {
        if (!c) {
            N({message: 'GyroNorm is not initialized yet. First call the "init()" function.', code: 1});
            return
        }
        o = setInterval(function () {
            e(T())
        }, d), l = !0
    }, E.prototype.stop = function () {
        o && (clearInterval(o), l = !1)
    }, E.prototype.normalizeGravity = function (e) {
        v = e ? !0 : !1
    }, E.prototype.setHeadDirection = function () {
        return b || m === t ? !1 : (a = h.getFixedFrameEuler().alpha, !0)
    }, E.prototype.startLogging = function (e) {
        e && (y = e)
    }, E.prototype.stopLogging = function () {
        y = null
    }, E.prototype.isAvailable = function (e) {
        var t = h.getScreenAdjustedEuler(), o = p.getScreenAdjustedAcceleration(),
            u = p.getScreenAdjustedAccelerationIncludingGravity(), a = p.getScreenAdjustedRotationRate();
        switch (e) {
            case n:
                return t.alpha && t.alpha !== null && t.beta && t.beta !== null && t.gamma && t.gamma !== null;
            case r:
                return o && o.x && o.y && o.z;
            case i:
                return u && u.x && u.y && u.z;
            case s:
                return a && a.alpha && a.beta && a.gamma;
            default:
                return {
                    deviceOrientationAvailable: t.alpha && t.alpha !== null && t.beta && t.beta !== null && t.gamma && t.gamma !== null,
                    accelerationAvailable: o && o.x && o.y && o.z,
                    accelerationIncludingGravityAvailable: u && u.x && u.y && u.z,
                    rotationRateAvailable: a && a.alpha && a.beta && a.gamma
                }
        }
    }, E.prototype.isRunning = function () {
        return l
    }, E
});
var Handlebars = function () {
    var e = function () {
        "use strict";

        function t(e) {
            this.string = e
        }

        var e;
        return t.prototype.toString = function () {
            return "" + this.string
        }, e = t, e
    }(), t = function (e) {
        "use strict";

        function o(e) {
            return r[e] || "&amp;"
        }

        function u(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        }

        function c(e) {
            return e instanceof n ? e.toString() : !e && e !== 0 ? "" : (e = "" + e, s.test(e) ? e.replace(i, o) : e)
        }

        function h(e) {
            return !e && e !== 0 ? !0 : l(e) && e.length === 0 ? !0 : !1
        }

        var t = {}, n = e, r = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;"},
            i = /[&<>"'`]/g, s = /[&<>"'`]/;
        t.extend = u;
        var a = Object.prototype.toString;
        t.toString = a;
        var f = function (e) {
            return typeof e == "function"
        };
        f(/x/) && (f = function (e) {
            return typeof e == "function" && a.call(e) === "[object Function]"
        });
        var f;
        t.isFunction = f;
        var l = Array.isArray || function (e) {
            return e && typeof e == "object" ? a.call(e) === "[object Array]" : !1
        };
        return t.isArray = l, t.escapeExpression = c, t.isEmpty = h, t
    }(e), n = function () {
        "use strict";

        function n() {
            var e = Error.prototype.constructor.apply(this, arguments);
            for (var n = 0; n < t.length; n++) this[t[n]] = e[t[n]]
        }

        var e, t = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
        return n.prototype = new Error, e = n, e
    }(), r = function (e, t) {
        "use strict";

        function h(e, t) {
            this.helpers = e || {}, this.partials = t || {}, p(this)
        }

        function p(e) {
            e.registerHelper("helperMissing", function (e) {
                if (arguments.length === 2) return undefined;
                throw new Error("Missing helper: '" + e + "'")
            }), e.registerHelper("blockHelperMissing", function (t, n) {
                var r = n.inverse || function () {
                }, i = n.fn;
                return f(t) && (t = t.call(this)), t === !0 ? i(this) : t === !1 || t == null ? r(this) : a(t) ? t.length > 0 ? e.helpers.each(t, n) : r(this) : i(t)
            }), e.registerHelper("each", function (e, t) {
                var n = t.fn, r = t.inverse, i = 0, s = "", o;
                f(e) && (e = e.call(this)), t.data && (o = m(t.data));
                if (e && typeof e == "object") if (a(e)) for (var u = e.length; i < u; i++) o && (o.index = i, o.first = i === 0, o.last = i === e.length - 1), s += n(e[i], {data: o}); else for (var l in e) e.hasOwnProperty(l) && (o && (o.key = l), s += n(e[l], {data: o}), i++);
                return i === 0 && (s = r(this)), s
            }), e.registerHelper("if", function (e, t) {
                return f(e) && (e = e.call(this)), !t.hash.includeZero && !e || r.isEmpty(e) ? t.inverse(this) : t.fn(this)
            }), e.registerHelper("unless", function (t, n) {
                return e.helpers["if"].call(this, t, {fn: n.inverse, inverse: n.fn, hash: n.hash})
            }), e.registerHelper("with", function (e, t) {
                f(e) && (e = e.call(this));
                if (!r.isEmpty(e)) return t.fn(e)
            }), e.registerHelper("log", function (t, n) {
                var r = n.data && n.data.level != null ? parseInt(n.data.level, 10) : 1;
                e.log(r, t)
            })
        }

        function v(e, t) {
            d.log(e, t)
        }

        var n = {}, r = e, i = t, s = "1.1.2";
        n.VERSION = s;
        var o = 4;
        n.COMPILER_REVISION = o;
        var u = {1: "<= 1.0.rc.2", 2: "== 1.0.0-rc.3", 3: "== 1.0.0-rc.4", 4: ">= 1.0.0"};
        n.REVISION_CHANGES = u;
        var a = r.isArray, f = r.isFunction, l = r.toString, c = "[object Object]";
        n.HandlebarsEnvironment = h, h.prototype = {
            constructor: h,
            logger: d,
            log: v,
            registerHelper: function (e, t, n) {
                if (l.call(e) === c) {
                    if (n || t) throw new i("Arg not supported with multiple helpers");
                    r.extend(this.helpers, e)
                } else n && (t.not = n), this.helpers[e] = t
            },
            registerPartial: function (e, t) {
                l.call(e) === c ? r.extend(this.partials, e) : this.partials[e] = t
            }
        };
        var d = {
            methodMap: {0: "debug", 1: "info", 2: "warn", 3: "error"},
            DEBUG: 0,
            INFO: 1,
            WARN: 2,
            ERROR: 3,
            level: 3,
            log: function (e, t) {
                if (d.level <= e) {
                    var n = d.methodMap[e];
                    typeof console != "undefined" && console[n] && console[n].call(console, t)
                }
            }
        };
        n.logger = d, n.log = v;
        var m = function (e) {
            var t = {};
            return r.extend(t, e), t
        };
        return n.createFrame = m, n
    }(t, n), i = function (e, t, n) {
        "use strict";

        function a(e) {
            var t = e && e[0] || 1, n = o;
            if (t !== n) {
                if (t < n) {
                    var r = u[n], i = u[t];
                    throw new Error("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + r + ") or downgrade your runtime to an older version (" + i + ").")
                }
                throw new Error("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + e[1] + ").")
            }
        }

        function f(e, t) {
            if (!t) throw new Error("No environment passed to template");
            var n;
            t.compile ? n = function (e, n, r, i, s, o) {
                var u = h.apply(this, arguments);
                if (u) return u;
                var a = {helpers: i, partials: s, data: o};
                return s[n] = t.compile(e, {data: o !== undefined}, t), s[n](r, a)
            } : n = function (e, t) {
                var n = h.apply(this, arguments);
                if (n) return n;
                throw new s("The partial " + t + " could not be compiled when running in runtime-only mode")
            };
            var r = {
                escapeExpression: i.escapeExpression, invokePartial: n, programs: [], program: function (e, t, n) {
                    var r = this.programs[e];
                    return n ? r = c(e, t, n) : r || (r = this.programs[e] = c(e, t)), r
                }, merge: function (e, t) {
                    var n = e || t;
                    return e && t && e !== t && (n = {}, i.extend(n, t), i.extend(n, e)), n
                }, programWithDepth: l, noop: p, compilerInfo: null
            };
            return function (n, i) {
                i = i || {};
                var s = i.partial ? i : t, o, u;
                i.partial || (o = i.helpers, u = i.partials);
                var f = e.call(r, s, n, o, u, i.data);
                return i.partial || a(r.compilerInfo), f
            }
        }

        function l(e, t, n) {
            var r = Array.prototype.slice.call(arguments, 3), i = function (e, i) {
                return i = i || {}, t.apply(this, [e, i.data || n].concat(r))
            };
            return i.program = e, i.depth = r.length, i
        }

        function c(e, t, n) {
            var r = function (e, r) {
                return r = r || {}, t(e, r.data || n)
            };
            return r.program = e, r.depth = 0, r
        }

        function h(e, t, n, r, i, o) {
            var u = {partial: !0, helpers: r, partials: i, data: o};
            if (e === undefined) throw new s("The partial " + t + " could not be found");
            if (e instanceof Function) return e(n, u)
        }

        function p() {
            return ""
        }

        var r = {}, i = e, s = t, o = n.COMPILER_REVISION, u = n.REVISION_CHANGES;
        return r.template = f, r.programWithDepth = l, r.program = c, r.invokePartial = h, r.noop = p, r
    }(t, n, r), s = function (e, t, n, r, i) {
        "use strict";
        var s, o = e, u = t, a = n, f = r, l = i, c = function () {
            var e = new o.HandlebarsEnvironment;
            return f.extend(e, o), e.SafeString = u, e.Exception = a, e.Utils = f, e.VM = l, e.template = function (t) {
                return l.template(t, e)
            }, e
        }, h = c();
        return h.create = c, s = h, s
    }(r, e, n, t, i), o = function (e) {
        "use strict";

        function r(e, t, n) {
            this.type = "program", this.statements = e, this.strip = {}, n ? (this.inverse = new r(n, t), this.strip.right = t.left) : t && (this.strip.left = t.right)
        }

        function i(e, t, n, r) {
            this.type = "mustache", this.hash = t, this.strip = r;
            var i = n[3] || n[2];
            this.escaped = i !== "{" && i !== "&";
            var s = this.id = e[0], o = this.params = e.slice(1), u = this.eligibleHelper = s.isSimple;
            this.isHelper = u && (o.length || t)
        }

        function s(e, t, n) {
            this.type = "partial", this.partialName = e, this.context = t, this.strip = n
        }

        function o(e, t, r, i) {
            if (e.id.original !== i.path.original) throw new n(e.id.original + " doesn't match " + i.path.original);
            this.type = "block", this.mustache = e, this.program = t, this.inverse = r, this.strip = {
                left: e.strip.left,
                right: i.strip.right
            }, (t || r).strip.left = e.strip.right, (r || t).strip.right = i.strip.left, r && !t && (this.isInverse = !0)
        }

        function u(e) {
            this.type = "content", this.string = e
        }

        function a(e) {
            this.type = "hash", this.pairs = e
        }

        function f(e) {
            this.type = "ID";
            var t = "", r = [], i = 0;
            for (var s = 0, o = e.length; s < o; s++) {
                var u = e[s].part;
                t += (e[s].separator || "") + u;
                if (u === ".." || u === "." || u === "this") {
                    if (r.length > 0) throw new n("Invalid path: " + t);
                    u === ".." ? i++ : this.isScoped = !0
                } else r.push(u)
            }
            this.original = t, this.parts = r, this.string = r.join("."), this.depth = i, this.isSimple = e.length === 1 && !this.isScoped && i === 0, this.stringModeValue = this.string
        }

        function l(e) {
            this.type = "PARTIAL_NAME", this.name = e.original
        }

        function c(e) {
            this.type = "DATA", this.id = e
        }

        function h(e) {
            this.type = "STRING", this.original = this.string = this.stringModeValue = e
        }

        function p(e) {
            this.type = "INTEGER", this.original = this.integer = e, this.stringModeValue = Number(e)
        }

        function d(e) {
            this.type = "BOOLEAN", this.bool = e, this.stringModeValue = e === "true"
        }

        function v(e) {
            this.type = "comment", this.comment = e
        }

        var t = {}, n = e;
        return t.ProgramNode = r, t.MustacheNode = i, t.PartialNode = s, t.BlockNode = o, t.ContentNode = u, t.HashNode = a, t.IdNode = f, t.PartialNameNode = l, t.DataNode = c, t.StringNode = h, t.IntegerNode = p, t.BooleanNode = d, t.CommentNode = v, t
    }(n), u = function () {
        "use strict";
        var e, t = function () {
            function t(e, t) {
                return {left: e[2] === "~", right: t[0] === "~" || t[1] === "~"}
            }

            function r() {
                this.yy = {}
            }

            var e = {
                trace: function () {
                },
                yy: {},
                symbols_: {
                    error: 2,
                    root: 3,
                    statements: 4,
                    EOF: 5,
                    program: 6,
                    simpleInverse: 7,
                    statement: 8,
                    openInverse: 9,
                    closeBlock: 10,
                    openBlock: 11,
                    mustache: 12,
                    partial: 13,
                    CONTENT: 14,
                    COMMENT: 15,
                    OPEN_BLOCK: 16,
                    inMustache: 17,
                    CLOSE: 18,
                    OPEN_INVERSE: 19,
                    OPEN_ENDBLOCK: 20,
                    path: 21,
                    OPEN: 22,
                    OPEN_UNESCAPED: 23,
                    CLOSE_UNESCAPED: 24,
                    OPEN_PARTIAL: 25,
                    partialName: 26,
                    partial_option0: 27,
                    inMustache_repetition0: 28,
                    inMustache_option0: 29,
                    dataName: 30,
                    param: 31,
                    STRING: 32,
                    INTEGER: 33,
                    BOOLEAN: 34,
                    hash: 35,
                    hash_repetition_plus0: 36,
                    hashSegment: 37,
                    ID: 38,
                    EQUALS: 39,
                    DATA: 40,
                    pathSegments: 41,
                    SEP: 42,
                    $accept: 0,
                    $end: 1
                },
                terminals_: {
                    2: "error",
                    5: "EOF",
                    14: "CONTENT",
                    15: "COMMENT",
                    16: "OPEN_BLOCK",
                    18: "CLOSE",
                    19: "OPEN_INVERSE",
                    20: "OPEN_ENDBLOCK",
                    22: "OPEN",
                    23: "OPEN_UNESCAPED",
                    24: "CLOSE_UNESCAPED",
                    25: "OPEN_PARTIAL",
                    32: "STRING",
                    33: "INTEGER",
                    34: "BOOLEAN",
                    38: "ID",
                    39: "EQUALS",
                    40: "DATA",
                    42: "SEP"
                },
                productions_: [0, [3, 2], [3, 1], [6, 2], [6, 3], [6, 2], [6, 1], [6, 1], [6, 0], [4, 1], [4, 2], [8, 3], [8, 3], [8, 1], [8, 1], [8, 1], [8, 1], [11, 3], [9, 3], [10, 3], [12, 3], [12, 3], [13, 4], [7, 2], [17, 3], [17, 1], [31, 1], [31, 1], [31, 1], [31, 1], [31, 1], [35, 1], [37, 3], [26, 1], [26, 1], [26, 1], [30, 2], [21, 1], [41, 3], [41, 1], [27, 0], [27, 1], [28, 0], [28, 2], [29, 0], [29, 1], [36, 1], [36, 2]],
                performAction: function (n, r, i, s, o, u, a) {
                    var f = u.length - 1;
                    switch (o) {
                        case 1:
                            return new s.ProgramNode(u[f - 1]);
                        case 2:
                            return new s.ProgramNode([]);
                        case 3:
                            this.$ = new s.ProgramNode([], u[f - 1], u[f]);
                            break;
                        case 4:
                            this.$ = new s.ProgramNode(u[f - 2], u[f - 1], u[f]);
                            break;
                        case 5:
                            this.$ = new s.ProgramNode(u[f - 1], u[f], []);
                            break;
                        case 6:
                            this.$ = new s.ProgramNode(u[f]);
                            break;
                        case 7:
                            this.$ = new s.ProgramNode([]);
                            break;
                        case 8:
                            this.$ = new s.ProgramNode([]);
                            break;
                        case 9:
                            this.$ = [u[f]];
                            break;
                        case 10:
                            u[f - 1].push(u[f]), this.$ = u[f - 1];
                            break;
                        case 11:
                            this.$ = new s.BlockNode(u[f - 2], u[f - 1].inverse, u[f - 1], u[f]);
                            break;
                        case 12:
                            this.$ = new s.BlockNode(u[f - 2], u[f - 1], u[f - 1].inverse, u[f]);
                            break;
                        case 13:
                            this.$ = u[f];
                            break;
                        case 14:
                            this.$ = u[f];
                            break;
                        case 15:
                            this.$ = new s.ContentNode(u[f]);
                            break;
                        case 16:
                            this.$ = new s.CommentNode(u[f]);
                            break;
                        case 17:
                            this.$ = new s.MustacheNode(u[f - 1][0], u[f - 1][1], u[f - 2], t(u[f - 2], u[f]));
                            break;
                        case 18:
                            this.$ = new s.MustacheNode(u[f - 1][0], u[f - 1][1], u[f - 2], t(u[f - 2], u[f]));
                            break;
                        case 19:
                            this.$ = {path: u[f - 1], strip: t(u[f - 2], u[f])};
                            break;
                        case 20:
                            this.$ = new s.MustacheNode(u[f - 1][0], u[f - 1][1], u[f - 2], t(u[f - 2], u[f]));
                            break;
                        case 21:
                            this.$ = new s.MustacheNode(u[f - 1][0], u[f - 1][1], u[f - 2], t(u[f - 2], u[f]));
                            break;
                        case 22:
                            this.$ = new s.PartialNode(u[f - 2], u[f - 1], t(u[f - 3], u[f]));
                            break;
                        case 23:
                            this.$ = t(u[f - 1], u[f]);
                            break;
                        case 24:
                            this.$ = [[u[f - 2]].concat(u[f - 1]), u[f]];
                            break;
                        case 25:
                            this.$ = [[u[f]], null];
                            break;
                        case 26:
                            this.$ = u[f];
                            break;
                        case 27:
                            this.$ = new s.StringNode(u[f]);
                            break;
                        case 28:
                            this.$ = new s.IntegerNode(u[f]);
                            break;
                        case 29:
                            this.$ = new s.BooleanNode(u[f]);
                            break;
                        case 30:
                            this.$ = u[f];
                            break;
                        case 31:
                            this.$ = new s.HashNode(u[f]);
                            break;
                        case 32:
                            this.$ = [u[f - 2], u[f]];
                            break;
                        case 33:
                            this.$ = new s.PartialNameNode(u[f]);
                            break;
                        case 34:
                            this.$ = new s.PartialNameNode(new s.StringNode(u[f]));
                            break;
                        case 35:
                            this.$ = new s.PartialNameNode(new s.IntegerNode(u[f]));
                            break;
                        case 36:
                            this.$ = new s.DataNode(u[f]);
                            break;
                        case 37:
                            this.$ = new s.IdNode(u[f]);
                            break;
                        case 38:
                            u[f - 2].push({part: u[f], separator: u[f - 1]}), this.$ = u[f - 2];
                            break;
                        case 39:
                            this.$ = [{part: u[f]}];
                            break;
                        case 42:
                            this.$ = [];
                            break;
                        case 43:
                            u[f - 1].push(u[f]);
                            break;
                        case 46:
                            this.$ = [u[f]];
                            break;
                        case 47:
                            u[f - 1].push(u[f])
                    }
                },
                table: [{
                    3: 1,
                    4: 2,
                    5: [1, 3],
                    8: 4,
                    9: 5,
                    11: 6,
                    12: 7,
                    13: 8,
                    14: [1, 9],
                    15: [1, 10],
                    16: [1, 12],
                    19: [1, 11],
                    22: [1, 13],
                    23: [1, 14],
                    25: [1, 15]
                }, {1: [3]}, {
                    5: [1, 16],
                    8: 17,
                    9: 5,
                    11: 6,
                    12: 7,
                    13: 8,
                    14: [1, 9],
                    15: [1, 10],
                    16: [1, 12],
                    19: [1, 11],
                    22: [1, 13],
                    23: [1, 14],
                    25: [1, 15]
                }, {1: [2, 2]}, {
                    5: [2, 9],
                    14: [2, 9],
                    15: [2, 9],
                    16: [2, 9],
                    19: [2, 9],
                    20: [2, 9],
                    22: [2, 9],
                    23: [2, 9],
                    25: [2, 9]
                }, {
                    4: 20,
                    6: 18,
                    7: 19,
                    8: 4,
                    9: 5,
                    11: 6,
                    12: 7,
                    13: 8,
                    14: [1, 9],
                    15: [1, 10],
                    16: [1, 12],
                    19: [1, 21],
                    20: [2, 8],
                    22: [1, 13],
                    23: [1, 14],
                    25: [1, 15]
                }, {
                    4: 20,
                    6: 22,
                    7: 19,
                    8: 4,
                    9: 5,
                    11: 6,
                    12: 7,
                    13: 8,
                    14: [1, 9],
                    15: [1, 10],
                    16: [1, 12],
                    19: [1, 21],
                    20: [2, 8],
                    22: [1, 13],
                    23: [1, 14],
                    25: [1, 15]
                }, {
                    5: [2, 13],
                    14: [2, 13],
                    15: [2, 13],
                    16: [2, 13],
                    19: [2, 13],
                    20: [2, 13],
                    22: [2, 13],
                    23: [2, 13],
                    25: [2, 13]
                }, {
                    5: [2, 14],
                    14: [2, 14],
                    15: [2, 14],
                    16: [2, 14],
                    19: [2, 14],
                    20: [2, 14],
                    22: [2, 14],
                    23: [2, 14],
                    25: [2, 14]
                }, {
                    5: [2, 15],
                    14: [2, 15],
                    15: [2, 15],
                    16: [2, 15],
                    19: [2, 15],
                    20: [2, 15],
                    22: [2, 15],
                    23: [2, 15],
                    25: [2, 15]
                }, {
                    5: [2, 16],
                    14: [2, 16],
                    15: [2, 16],
                    16: [2, 16],
                    19: [2, 16],
                    20: [2, 16],
                    22: [2, 16],
                    23: [2, 16],
                    25: [2, 16]
                }, {17: 23, 21: 24, 30: 25, 38: [1, 28], 40: [1, 27], 41: 26}, {
                    17: 29,
                    21: 24,
                    30: 25,
                    38: [1, 28],
                    40: [1, 27],
                    41: 26
                }, {17: 30, 21: 24, 30: 25, 38: [1, 28], 40: [1, 27], 41: 26}, {
                    17: 31,
                    21: 24,
                    30: 25,
                    38: [1, 28],
                    40: [1, 27],
                    41: 26
                }, {21: 33, 26: 32, 32: [1, 34], 33: [1, 35], 38: [1, 28], 41: 26}, {1: [2, 1]}, {
                    5: [2, 10],
                    14: [2, 10],
                    15: [2, 10],
                    16: [2, 10],
                    19: [2, 10],
                    20: [2, 10],
                    22: [2, 10],
                    23: [2, 10],
                    25: [2, 10]
                }, {10: 36, 20: [1, 37]}, {
                    4: 38,
                    8: 4,
                    9: 5,
                    11: 6,
                    12: 7,
                    13: 8,
                    14: [1, 9],
                    15: [1, 10],
                    16: [1, 12],
                    19: [1, 11],
                    20: [2, 7],
                    22: [1, 13],
                    23: [1, 14],
                    25: [1, 15]
                }, {
                    7: 39,
                    8: 17,
                    9: 5,
                    11: 6,
                    12: 7,
                    13: 8,
                    14: [1, 9],
                    15: [1, 10],
                    16: [1, 12],
                    19: [1, 21],
                    20: [2, 6],
                    22: [1, 13],
                    23: [1, 14],
                    25: [1, 15]
                }, {17: 23, 18: [1, 40], 21: 24, 30: 25, 38: [1, 28], 40: [1, 27], 41: 26}, {
                    10: 41,
                    20: [1, 37]
                }, {18: [1, 42]}, {
                    18: [2, 42],
                    24: [2, 42],
                    28: 43,
                    32: [2, 42],
                    33: [2, 42],
                    34: [2, 42],
                    38: [2, 42],
                    40: [2, 42]
                }, {18: [2, 25], 24: [2, 25]}, {
                    18: [2, 37],
                    24: [2, 37],
                    32: [2, 37],
                    33: [2, 37],
                    34: [2, 37],
                    38: [2, 37],
                    40: [2, 37],
                    42: [1, 44]
                }, {21: 45, 38: [1, 28], 41: 26}, {
                    18: [2, 39],
                    24: [2, 39],
                    32: [2, 39],
                    33: [2, 39],
                    34: [2, 39],
                    38: [2, 39],
                    40: [2, 39],
                    42: [2, 39]
                }, {18: [1, 46]}, {18: [1, 47]}, {24: [1, 48]}, {
                    18: [2, 40],
                    21: 50,
                    27: 49,
                    38: [1, 28],
                    41: 26
                }, {18: [2, 33], 38: [2, 33]}, {18: [2, 34], 38: [2, 34]}, {18: [2, 35], 38: [2, 35]}, {
                    5: [2, 11],
                    14: [2, 11],
                    15: [2, 11],
                    16: [2, 11],
                    19: [2, 11],
                    20: [2, 11],
                    22: [2, 11],
                    23: [2, 11],
                    25: [2, 11]
                }, {21: 51, 38: [1, 28], 41: 26}, {
                    8: 17,
                    9: 5,
                    11: 6,
                    12: 7,
                    13: 8,
                    14: [1, 9],
                    15: [1, 10],
                    16: [1, 12],
                    19: [1, 11],
                    20: [2, 3],
                    22: [1, 13],
                    23: [1, 14],
                    25: [1, 15]
                }, {
                    4: 52,
                    8: 4,
                    9: 5,
                    11: 6,
                    12: 7,
                    13: 8,
                    14: [1, 9],
                    15: [1, 10],
                    16: [1, 12],
                    19: [1, 11],
                    20: [2, 5],
                    22: [1, 13],
                    23: [1, 14],
                    25: [1, 15]
                }, {
                    14: [2, 23],
                    15: [2, 23],
                    16: [2, 23],
                    19: [2, 23],
                    20: [2, 23],
                    22: [2, 23],
                    23: [2, 23],
                    25: [2, 23]
                }, {
                    5: [2, 12],
                    14: [2, 12],
                    15: [2, 12],
                    16: [2, 12],
                    19: [2, 12],
                    20: [2, 12],
                    22: [2, 12],
                    23: [2, 12],
                    25: [2, 12]
                }, {
                    14: [2, 18],
                    15: [2, 18],
                    16: [2, 18],
                    19: [2, 18],
                    20: [2, 18],
                    22: [2, 18],
                    23: [2, 18],
                    25: [2, 18]
                }, {
                    18: [2, 44],
                    21: 56,
                    24: [2, 44],
                    29: 53,
                    30: 60,
                    31: 54,
                    32: [1, 57],
                    33: [1, 58],
                    34: [1, 59],
                    35: 55,
                    36: 61,
                    37: 62,
                    38: [1, 63],
                    40: [1, 27],
                    41: 26
                }, {38: [1, 64]}, {
                    18: [2, 36],
                    24: [2, 36],
                    32: [2, 36],
                    33: [2, 36],
                    34: [2, 36],
                    38: [2, 36],
                    40: [2, 36]
                }, {
                    14: [2, 17],
                    15: [2, 17],
                    16: [2, 17],
                    19: [2, 17],
                    20: [2, 17],
                    22: [2, 17],
                    23: [2, 17],
                    25: [2, 17]
                }, {
                    5: [2, 20],
                    14: [2, 20],
                    15: [2, 20],
                    16: [2, 20],
                    19: [2, 20],
                    20: [2, 20],
                    22: [2, 20],
                    23: [2, 20],
                    25: [2, 20]
                }, {
                    5: [2, 21],
                    14: [2, 21],
                    15: [2, 21],
                    16: [2, 21],
                    19: [2, 21],
                    20: [2, 21],
                    22: [2, 21],
                    23: [2, 21],
                    25: [2, 21]
                }, {18: [1, 65]}, {18: [2, 41]}, {18: [1, 66]}, {
                    8: 17,
                    9: 5,
                    11: 6,
                    12: 7,
                    13: 8,
                    14: [1, 9],
                    15: [1, 10],
                    16: [1, 12],
                    19: [1, 11],
                    20: [2, 4],
                    22: [1, 13],
                    23: [1, 14],
                    25: [1, 15]
                }, {18: [2, 24], 24: [2, 24]}, {
                    18: [2, 43],
                    24: [2, 43],
                    32: [2, 43],
                    33: [2, 43],
                    34: [2, 43],
                    38: [2, 43],
                    40: [2, 43]
                }, {18: [2, 45], 24: [2, 45]}, {
                    18: [2, 26],
                    24: [2, 26],
                    32: [2, 26],
                    33: [2, 26],
                    34: [2, 26],
                    38: [2, 26],
                    40: [2, 26]
                }, {
                    18: [2, 27],
                    24: [2, 27],
                    32: [2, 27],
                    33: [2, 27],
                    34: [2, 27],
                    38: [2, 27],
                    40: [2, 27]
                }, {
                    18: [2, 28],
                    24: [2, 28],
                    32: [2, 28],
                    33: [2, 28],
                    34: [2, 28],
                    38: [2, 28],
                    40: [2, 28]
                }, {
                    18: [2, 29],
                    24: [2, 29],
                    32: [2, 29],
                    33: [2, 29],
                    34: [2, 29],
                    38: [2, 29],
                    40: [2, 29]
                }, {
                    18: [2, 30],
                    24: [2, 30],
                    32: [2, 30],
                    33: [2, 30],
                    34: [2, 30],
                    38: [2, 30],
                    40: [2, 30]
                }, {18: [2, 31], 24: [2, 31], 37: 67, 38: [1, 68]}, {
                    18: [2, 46],
                    24: [2, 46],
                    38: [2, 46]
                }, {
                    18: [2, 39],
                    24: [2, 39],
                    32: [2, 39],
                    33: [2, 39],
                    34: [2, 39],
                    38: [2, 39],
                    39: [1, 69],
                    40: [2, 39],
                    42: [2, 39]
                }, {
                    18: [2, 38],
                    24: [2, 38],
                    32: [2, 38],
                    33: [2, 38],
                    34: [2, 38],
                    38: [2, 38],
                    40: [2, 38],
                    42: [2, 38]
                }, {
                    5: [2, 22],
                    14: [2, 22],
                    15: [2, 22],
                    16: [2, 22],
                    19: [2, 22],
                    20: [2, 22],
                    22: [2, 22],
                    23: [2, 22],
                    25: [2, 22]
                }, {
                    5: [2, 19],
                    14: [2, 19],
                    15: [2, 19],
                    16: [2, 19],
                    19: [2, 19],
                    20: [2, 19],
                    22: [2, 19],
                    23: [2, 19],
                    25: [2, 19]
                }, {18: [2, 47], 24: [2, 47], 38: [2, 47]}, {39: [1, 69]}, {
                    21: 56,
                    30: 60,
                    31: 70,
                    32: [1, 57],
                    33: [1, 58],
                    34: [1, 59],
                    38: [1, 28],
                    40: [1, 27],
                    41: 26
                }, {18: [2, 32], 24: [2, 32], 38: [2, 32]}],
                defaultActions: {3: [2, 2], 16: [2, 1], 50: [2, 41]},
                parseError: function (t, n) {
                    throw new Error(t)
                },
                parse: function (t) {
                    function v(e) {
                        r.length = r.length - 2 * e, i.length = i.length - e, s.length = s.length - e
                    }

                    function m() {
                        var e;
                        return e = n.lexer.lex() || 1, typeof e != "number" && (e = n.symbols_[e] || e), e
                    }

                    var n = this, r = [0], i = [null], s = [], o = this.table, u = "", a = 0, f = 0, l = 0, c = 2,
                        h = 1;
                    this.lexer.setInput(t), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, typeof this.lexer.yylloc == "undefined" && (this.lexer.yylloc = {});
                    var p = this.lexer.yylloc;
                    s.push(p);
                    var d = this.lexer.options && this.lexer.options.ranges;
                    typeof this.yy.parseError == "function" && (this.parseError = this.yy.parseError);
                    var g, y, b, w, E, S, x = {}, T, N, C, k;
                    for (; ;) {
                        b = r[r.length - 1];
                        if (this.defaultActions[b]) w = this.defaultActions[b]; else {
                            if (g === null || typeof g == "undefined") g = m();
                            w = o[b] && o[b][g]
                        }
                        if (typeof w == "undefined" || !w.length || !w[0]) {
                            var L = "";
                            if (!l) {
                                k = [];
                                for (T in o[b]) this.terminals_[T] && T > 2 && k.push("'" + this.terminals_[T] + "'");
                                this.lexer.showPosition ? L = "Parse error on line " + (a + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + k.join(", ") + ", got '" + (this.terminals_[g] || g) + "'" : L = "Parse error on line " + (a + 1) + ": Unexpected " + (g == 1 ? "end of input" : "'" + (this.terminals_[g] || g) + "'"), this.parseError(L, {
                                    text: this.lexer.match,
                                    token: this.terminals_[g] || g,
                                    line: this.lexer.yylineno,
                                    loc: p,
                                    expected: k
                                })
                            }
                        }
                        if (w[0] instanceof Array && w.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + b + ", token: " + g);
                        switch (w[0]) {
                            case 1:
                                r.push(g), i.push(this.lexer.yytext), s.push(this.lexer.yylloc), r.push(w[1]), g = null, y ? (g = y, y = null) : (f = this.lexer.yyleng, u = this.lexer.yytext, a = this.lexer.yylineno, p = this.lexer.yylloc, l > 0 && l--);
                                break;
                            case 2:
                                N = this.productions_[w[1]][1], x.$ = i[i.length - N], x._$ = {
                                    first_line: s[s.length - (N || 1)].first_line,
                                    last_line: s[s.length - 1].last_line,
                                    first_column: s[s.length - (N || 1)].first_column,
                                    last_column: s[s.length - 1].last_column
                                }, d && (x._$.range = [s[s.length - (N || 1)].range[0], s[s.length - 1].range[1]]), S = this.performAction.call(x, u, f, a, this.yy, w[1], i, s);
                                if (typeof S != "undefined") return S;
                                N && (r = r.slice(0, -1 * N * 2), i = i.slice(0, -1 * N), s = s.slice(0, -1 * N)), r.push(this.productions_[w[1]][0]), i.push(x.$), s.push(x._$), C = o[r[r.length - 2]][r[r.length - 1]], r.push(C);
                                break;
                            case 3:
                                return !0
                        }
                    }
                    return !0
                }
            }, n = function () {
                var e = {
                    EOF: 1, parseError: function (t, n) {
                        if (!this.yy.parser) throw new Error(t);
                        this.yy.parser.parseError(t, n)
                    }, setInput: function (e) {
                        return this._input = e, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
                            first_line: 1,
                            first_column: 0,
                            last_line: 1,
                            last_column: 0
                        }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this
                    }, input: function () {
                        var e = this._input[0];
                        this.yytext += e, this.yyleng++, this.offset++, this.match += e, this.matched += e;
                        var t = e.match(/(?:\r\n?|\n).*/g);
                        return t ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), e
                    }, unput: function (e) {
                        var t = e.length, n = e.split(/(?:\r\n?|\n)/g);
                        this._input = e + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - t - 1), this.offset -= t;
                        var r = this.match.split(/(?:\r\n?|\n)/g);
                        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), n.length - 1 && (this.yylineno -= n.length - 1);
                        var i = this.yylloc.range;
                        return this.yylloc = {
                            first_line: this.yylloc.first_line,
                            last_line: this.yylineno + 1,
                            first_column: this.yylloc.first_column,
                            last_column: n ? (n.length === r.length ? this.yylloc.first_column : 0) + r[r.length - n.length].length - n[0].length : this.yylloc.first_column - t
                        }, this.options.ranges && (this.yylloc.range = [i[0], i[0] + this.yyleng - t]), this
                    }, more: function () {
                        return this._more = !0, this
                    }, less: function (e) {
                        this.unput(this.match.slice(e))
                    }, pastInput: function () {
                        var e = this.matched.substr(0, this.matched.length - this.match.length);
                        return (e.length > 20 ? "..." : "") + e.substr(-20).replace(/\n/g, "")
                    }, upcomingInput: function () {
                        var e = this.match;
                        return e.length < 20 && (e += this._input.substr(0, 20 - e.length)), (e.substr(0, 20) + (e.length > 20 ? "..." : "")).replace(/\n/g, "")
                    }, showPosition: function () {
                        var e = this.pastInput(), t = (new Array(e.length + 1)).join("-");
                        return e + this.upcomingInput() + "\n" + t + "^"
                    }, next: function () {
                        if (this.done) return this.EOF;
                        this._input || (this.done = !0);
                        var e, t, n, r, i, s;
                        this._more || (this.yytext = "", this.match = "");
                        var o = this._currentRules();
                        for (var u = 0; u < o.length; u++) {
                            n = this._input.match(this.rules[o[u]]);
                            if (n && (!t || n[0].length > t[0].length)) {
                                t = n, r = u;
                                if (!this.options.flex) break
                            }
                        }
                        if (t) {
                            s = t[0].match(/(?:\r\n?|\n).*/g), s && (this.yylineno += s.length), this.yylloc = {
                                first_line: this.yylloc.last_line,
                                last_line: this.yylineno + 1,
                                first_column: this.yylloc.last_column,
                                last_column: s ? s[s.length - 1].length - s[s.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + t[0].length
                            }, this.yytext += t[0], this.match += t[0], this.matches = t, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(t[0].length), this.matched += t[0], e = this.performAction.call(this, this.yy, this, o[r], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1);
                            if (e) return e;
                            return
                        }
                        return this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                            text: "",
                            token: null,
                            line: this.yylineno
                        })
                    }, lex: function () {
                        var t = this.next();
                        return typeof t != "undefined" ? t : this.lex()
                    }, begin: function (t) {
                        this.conditionStack.push(t)
                    }, popState: function () {
                        return this.conditionStack.pop()
                    }, _currentRules: function () {
                        return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules
                    }, topState: function () {
                        return this.conditionStack[this.conditionStack.length - 2]
                    }, pushState: function (t) {
                        this.begin(t)
                    }
                };
                return e.options = {}, e.performAction = function (t, n, r, i) {
                    function s(e, t) {
                        return n.yytext = n.yytext.substr(e, n.yyleng - t)
                    }

                    var o = i;
                    switch (r) {
                        case 0:
                            n.yytext.slice(-2) === "\\\\" ? (s(0, 1), this.begin("mu")) : n.yytext.slice(-1) === "\\" ? (s(0, 1), this.begin("emu")) : this.begin("mu");
                            if (n.yytext) return 14;
                            break;
                        case 1:
                            return 14;
                        case 2:
                            return n.yytext.slice(-1) !== "\\" && this.popState(), n.yytext.slice(-1) === "\\" && s(0, 1), 14;
                        case 3:
                            return s(0, 4), this.popState(), 15;
                        case 4:
                            return 25;
                        case 5:
                            return 16;
                        case 6:
                            return 20;
                        case 7:
                            return 19;
                        case 8:
                            return 19;
                        case 9:
                            return 23;
                        case 10:
                            return 22;
                        case 11:
                            this.popState(), this.begin("com");
                            break;
                        case 12:
                            return s(3, 5), this.popState(), 15;
                        case 13:
                            return 22;
                        case 14:
                            return 39;
                        case 15:
                            return 38;
                        case 16:
                            return 38;
                        case 17:
                            return 42;
                        case 18:
                            break;
                        case 19:
                            return this.popState(), 24;
                        case 20:
                            return this.popState(), 18;
                        case 21:
                            return n.yytext = s(1, 2).replace(/\\"/g, '"'), 32;
                        case 22:
                            return n.yytext = s(1, 2).replace(/\\'/g, "'"), 32;
                        case 23:
                            return 40;
                        case 24:
                            return 34;
                        case 25:
                            return 34;
                        case 26:
                            return 33;
                        case 27:
                            return 38;
                        case 28:
                            return n.yytext = s(1, 2), 38;
                        case 29:
                            return "INVALID";
                        case 30:
                            return 5
                    }
                }, e.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|$)))/, /^(?:[\s\S]*?--\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{!--)/, /^(?:\{\{![\s\S]*?\}\})/, /^(?:\{\{(~)?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s])))/, /^(?:false(?=([~}\s])))/, /^(?:-?[0-9]+(?=([~}\s])))/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.]))))/, /^(?:\[[^\]]*\])/, /^(?:.)/, /^(?:$)/], e.conditions = {
                    mu: {
                        rules: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
                        inclusive: !1
                    },
                    emu: {rules: [2], inclusive: !1},
                    com: {rules: [3], inclusive: !1},
                    INITIAL: {rules: [0, 1, 30], inclusive: !0}
                }, e
            }();
            return e.lexer = n, r.prototype = e, e.Parser = r, new r
        }();
        return e = t, e
    }(), a = function (e, t) {
        "use strict";

        function s(e) {
            return e.constructor === i.ProgramNode ? e : (r.yy = i, r.parse(e))
        }

        var n = {}, r = e, i = t;
        return n.parser = r, n.parse = s, n
    }(u, o), f = function (e) {
        "use strict";

        function s(e) {
            this.value = e
        }

        function o() {
        }

        var t, n = e.COMPILER_REVISION, r = e.REVISION_CHANGES, i = e.log;
        o.prototype = {
            nameLookup: function (e, t) {
                var n, r;
                return e.indexOf("depth") === 0 && (n = !0), /^[0-9]+$/.test(t) ? r = e + "[" + t + "]" : o.isValidJavaScriptVariableName(t) ? r = e + "." + t : r = e + "['" + t + "']", n ? "(" + e + " && " + r + ")" : r
            }, appendToBuffer: function (e) {
                return this.environment.isSimple ? "return " + e + ";" : {
                    appendToBuffer: !0,
                    content: e,
                    toString: function () {
                        return "buffer += " + e + ";"
                    }
                }
            }, initializeBuffer: function () {
                return this.quotedString("")
            }, namespace: "Handlebars", compile: function (e, t, n, r) {
                this.environment = e, this.options = t || {}, i("debug", this.environment.disassemble() + "\n\n"), this.name = this.environment.name, this.isChild = !!n, this.context = n || {
                    programs: [],
                    environments: [],
                    aliases: {}
                }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.registers = {list: []}, this.compileStack = [], this.inlineStack = [], this.compileChildren(e, t);
                var s = e.opcodes, o;
                this.i = 0;
                for (var u = s.length; this.i < u; this.i++) o = s[this.i], o.opcode === "DECLARE" ? this[o.name] = o.value : this[o.opcode].apply(this, o.args), o.opcode !== this.stripNext && (this.stripNext = !1);
                return this.pushSource(""), this.createFunctionContext(r)
            }, preamble: function () {
                var e = [];
                if (!this.isChild) {
                    var t = this.namespace, n = "helpers = this.merge(helpers, " + t + ".helpers);";
                    this.environment.usePartial && (n = n + " partials = this.merge(partials, " + t + ".partials);"), this.options.data && (n += " data = data || {};"), e.push(n)
                } else e.push("");
                this.environment.isSimple ? e.push("") : e.push(", buffer = " + this.initializeBuffer()), this.lastContext = 0, this.source = e
            }, createFunctionContext: function (e) {
                var t = this.stackVars.concat(this.registers.list);
                t.length > 0 && (this.source[1] = this.source[1] + ", " + t.join(", "));
                if (!this.isChild) for (var s in this.context.aliases) this.context.aliases.hasOwnProperty(s) && (this.source[1] = this.source[1] + ", " + s + "=" + this.context.aliases[s]);
                this.source[1] && (this.source[1] = "var " + this.source[1].substring(2) + ";"), this.isChild || (this.source[1] += "\n" + this.context.programs.join("\n") + "\n"), this.environment.isSimple || this.pushSource("return buffer;");
                var o = this.isChild ? ["depth0", "data"] : ["Handlebars", "depth0", "helpers", "partials", "data"];
                for (var u = 0, a = this.environment.depths.list.length; u < a; u++) o.push("depth" + this.environment.depths.list[u]);
                var f = this.mergeSource();
                if (!this.isChild) {
                    var l = n, c = r[l];
                    f = "this.compilerInfo = [" + l + ",'" + c + "'];\n" + f
                }
                if (e) return o.push(f), Function.apply(this, o);
                var h = "function " + (this.name || "") + "(" + o.join(",") + ") {\n  " + f + "}";
                return i("debug", h + "\n\n"), h
            }, mergeSource: function () {
                var e = "", t;
                for (var n = 0, r = this.source.length; n < r; n++) {
                    var i = this.source[n];
                    i.appendToBuffer ? t ? t = t + "\n    + " + i.content : t = i.content : (t && (e += "buffer += " + t + ";\n  ", t = undefined), e += i + "\n  ")
                }
                return e
            }, blockValue: function () {
                this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing";
                var e = ["depth0"];
                this.setupParams(0, e), this.replaceStack(function (t) {
                    return e.splice(1, 0, t), "blockHelperMissing.call(" + e.join(", ") + ")"
                })
            }, ambiguousBlockValue: function () {
                this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing";
                var e = ["depth0"];
                this.setupParams(0, e);
                var t = this.topStack();
                e.splice(1, 0, t), e[e.length - 1] = "options", this.pushSource("if (!" + this.lastHelper + ") { " + t + " = blockHelperMissing.call(" + e.join(", ") + "); }")
            }, appendContent: function (e) {
                this.pendingContent && (e = this.pendingContent + e), this.stripNext && (e = e.replace(/^\s+/, "")), this.pendingContent = e
            }, strip: function () {
                this.pendingContent && (this.pendingContent = this.pendingContent.replace(/\s+$/, "")), this.stripNext = "strip"
            }, append: function () {
                this.flushInline();
                var e = this.popStack();
                this.pushSource("if(" + e + " || " + e + " === 0) { " + this.appendToBuffer(e) + " }"), this.environment.isSimple && this.pushSource("else { " + this.appendToBuffer("''") + " }")
            }, appendEscaped: function () {
                this.context.aliases.escapeExpression = "this.escapeExpression", this.pushSource(this.appendToBuffer("escapeExpression(" + this.popStack() + ")"))
            }, getContext: function (e) {
                this.lastContext !== e && (this.lastContext = e)
            }, lookupOnContext: function (e) {
                this.push(this.nameLookup("depth" + this.lastContext, e, "context"))
            }, pushContext: function () {
                this.pushStackLiteral("depth" + this.lastContext)
            }, resolvePossibleLambda: function () {
                this.context.aliases.functionType = '"function"', this.replaceStack(function (e) {
                    return "typeof " + e + " === functionType ? " + e + ".apply(depth0) : " + e
                })
            }, lookup: function (e) {
                this.replaceStack(function (t) {
                    return t + " == null || " + t + " === false ? " + t + " : " + this.nameLookup(t, e, "context")
                })
            }, lookupData: function () {
                this.push("data")
            }, pushStringParam: function (e, t) {
                this.pushStackLiteral("depth" + this.lastContext), this.pushString(t), typeof e == "string" ? this.pushString(e) : this.pushStackLiteral(e)
            }, emptyHash: function () {
                this.pushStackLiteral("{}"), this.options.stringParams && (this.register("hashTypes", "{}"), this.register("hashContexts", "{}"))
            }, pushHash: function () {
                this.hash = {values: [], types: [], contexts: []}
            }, popHash: function () {
                var e = this.hash;
                this.hash = undefined, this.options.stringParams && (this.register("hashContexts", "{" + e.contexts.join(",") + "}"), this.register("hashTypes", "{" + e.types.join(",") + "}")), this.push("{\n    " + e.values.join(",\n    ") + "\n  }")
            }, pushString: function (e) {
                this.pushStackLiteral(this.quotedString(e))
            }, push: function (e) {
                return this.inlineStack.push(e), e
            }, pushLiteral: function (e) {
                this.pushStackLiteral(e)
            }, pushProgram: function (e) {
                e != null ? this.pushStackLiteral(this.programExpression(e)) : this.pushStackLiteral(null)
            }, invokeHelper: function (e, t) {
                this.context.aliases.helperMissing = "helpers.helperMissing";
                var n = this.lastHelper = this.setupHelper(e, t, !0),
                    r = this.nameLookup("depth" + this.lastContext, t, "context");
                this.push(n.name + " || " + r), this.replaceStack(function (e) {
                    return e + " ? " + e + ".call(" + n.callParams + ") " + ": helperMissing.call(" + n.helperMissingParams + ")"
                })
            }, invokeKnownHelper: function (e, t) {
                var n = this.setupHelper(e, t);
                this.push(n.name + ".call(" + n.callParams + ")")
            }, invokeAmbiguous: function (e, t) {
                this.context.aliases.functionType = '"function"', this.pushStackLiteral("{}");
                var n = this.setupHelper(0, e, t), r = this.lastHelper = this.nameLookup("helpers", e, "helper"),
                    i = this.nameLookup("depth" + this.lastContext, e, "context"), s = this.nextStack();
                this.pushSource("if (" + s + " = " + r + ") { " + s + " = " + s + ".call(" + n.callParams + "); }"), this.pushSource("else { " + s + " = " + i + "; " + s + " = typeof " + s + " === functionType ? " + s + ".call(" + n.callParams + ") : " + s + "; }")
            }, invokePartial: function (e) {
                var t = [this.nameLookup("partials", e, "partial"), "'" + e + "'", this.popStack(), "helpers", "partials"];
                this.options.data && t.push("data"), this.context.aliases.self = "this", this.push("self.invokePartial(" + t.join(", ") + ")")
            }, assignToHash: function (e) {
                var t = this.popStack(), n, r;
                this.options.stringParams && (r = this.popStack(), n = this.popStack());
                var i = this.hash;
                n && i.contexts.push("'" + e + "': " + n), r && i.types.push("'" + e + "': " + r), i.values.push("'" + e + "': (" + t + ")")
            }, compiler: o, compileChildren: function (e, t) {
                var n = e.children, r, i;
                for (var s = 0, o = n.length; s < o; s++) {
                    r = n[s], i = new this.compiler;
                    var u = this.matchExistingProgram(r);
                    u == null ? (this.context.programs.push(""), u = this.context.programs.length, r.index = u, r.name = "program" + u, this.context.programs[u] = i.compile(r, t, this.context), this.context.environments[u] = r) : (r.index = u, r.name = "program" + u)
                }
            }, matchExistingProgram: function (e) {
                for (var t = 0, n = this.context.environments.length; t < n; t++) {
                    var r = this.context.environments[t];
                    if (r && r.equals(e)) return t
                }
            }, programExpression: function (e) {
                this.context.aliases.self = "this";
                if (e == null) return "self.noop";
                var t = this.environment.children[e], n = t.depths.list, r, i = [t.index, t.name, "data"];
                for (var s = 0, o = n.length; s < o; s++) r = n[s], r === 1 ? i.push("depth0") : i.push("depth" + (r - 1));
                return (n.length === 0 ? "self.program(" : "self.programWithDepth(") + i.join(", ") + ")"
            }, register: function (e, t) {
                this.useRegister(e), this.pushSource(e + " = " + t + ";")
            }, useRegister: function (e) {
                this.registers[e] || (this.registers[e] = !0, this.registers.list.push(e))
            }, pushStackLiteral: function (e) {
                return this.push(new s(e))
            }, pushSource: function (e) {
                this.pendingContent && (this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent))), this.pendingContent = undefined), e && this.source.push(e)
            }, pushStack: function (e) {
                this.flushInline();
                var t = this.incrStack();
                return e && this.pushSource(t + " = " + e + ";"), this.compileStack.push(t), t
            }, replaceStack: function (e) {
                var t = "", n = this.isInline(), r;
                if (n) {
                    var i = this.popStack(!0);
                    if (i instanceof s) r = i.value; else {
                        var o = this.stackSlot ? this.topStackName() : this.incrStack();
                        t = "(" + this.push(o) + " = " + i + "),", r = this.topStack()
                    }
                } else r = this.topStack();
                var u = e.call(this, r);
                return n ? ((this.inlineStack.length || this.compileStack.length) && this.popStack(), this.push("(" + t + u + ")")) : (/^stack/.test(r) || (r = this.nextStack()), this.pushSource(r + " = (" + t + u + ");")), r
            }, nextStack: function () {
                return this.pushStack()
            }, incrStack: function () {
                return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), this.topStackName()
            }, topStackName: function () {
                return "stack" + this.stackSlot
            }, flushInline: function () {
                var e = this.inlineStack;
                if (e.length) {
                    this.inlineStack = [];
                    for (var t = 0, n = e.length; t < n; t++) {
                        var r = e[t];
                        r instanceof s ? this.compileStack.push(r) : this.pushStack(r)
                    }
                }
            }, isInline: function () {
                return this.inlineStack.length
            }, popStack: function (e) {
                var t = this.isInline(), n = (t ? this.inlineStack : this.compileStack).pop();
                return !e && n instanceof s ? n.value : (t || this.stackSlot--, n)
            }, topStack: function (e) {
                var t = this.isInline() ? this.inlineStack : this.compileStack, n = t[t.length - 1];
                return !e && n instanceof s ? n.value : n
            }, quotedString: function (e) {
                return '"' + e.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"'
            }, setupHelper: function (e, t, n) {
                var r = [];
                this.setupParams(e, r, n);
                var i = this.nameLookup("helpers", t, "helper");
                return {
                    params: r,
                    name: i,
                    callParams: ["depth0"].concat(r).join(", "),
                    helperMissingParams: n && ["depth0", this.quotedString(t)].concat(r).join(", ")
                }
            }, setupParams: function (e, t, n) {
                var r = [], i = [], s = [], o, u, a;
                r.push("hash:" + this.popStack()), u = this.popStack(), a = this.popStack();
                if (a || u) a || (this.context.aliases.self = "this", a = "self.noop"), u || (this.context.aliases.self = "this", u = "self.noop"), r.push("inverse:" + u), r.push("fn:" + a);
                for (var f = 0; f < e; f++) o = this.popStack(), t.push(o), this.options.stringParams && (s.push(this.popStack()), i.push(this.popStack()));
                return this.options.stringParams && (r.push("contexts:[" + i.join(",") + "]"), r.push("types:[" + s.join(",") + "]"), r.push("hashContexts:hashContexts"), r.push("hashTypes:hashTypes")), this.options.data && r.push("data:data"), r = "{" + r.join(",") + "}", n ? (this.register("options", r), t.push("options")) : t.push(r), t.join(", ")
            }
        };
        var u = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "),
            a = o.RESERVED_WORDS = {};
        for (var f = 0, l = u.length; f < l; f++) a[u[f]] = !0;
        return o.isValidJavaScriptVariableName = function (e) {
            return !o.RESERVED_WORDS[e] && /^[a-zA-Z_$][0-9a-zA-Z_$]+$/.test(e) ? !0 : !1
        }, t = o, t
    }(r), l = function (e, t, n, r) {
        "use strict";

        function f() {
        }

        function l(e, t) {
            if (e == null || typeof e != "string" && e.constructor !== a.ProgramNode) throw new s("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + e);
            t = t || {}, "data" in t || (t.data = !0);
            var n = o(e), r = (new f).compile(n, t);
            return (new u).compile(r, t)
        }

        function c(e, t, n) {
            function i() {
                var r = o(e), i = (new f).compile(r, t), s = (new u).compile(i, t, undefined, !0);
                return n.template(s)
            }

            if (e == null || typeof e != "string" && e.constructor !== a.ProgramNode) throw new s("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + e);
            t = t || {}, "data" in t || (t.data = !0);
            var r;
            return function (e, t) {
                return r || (r = i()), r.call(this, e, t)
            }
        }

        var i = {}, s = e, o = t.parse, u = n, a = r;
        return i.Compiler = f, f.prototype = {
            compiler: f, disassemble: function () {
                var e = this.opcodes, t, n = [], r, i;
                for (var s = 0, o = e.length; s < o; s++) {
                    t = e[s];
                    if (t.opcode === "DECLARE") n.push("DECLARE " + t.name + "=" + t.value); else {
                        r = [];
                        for (var u = 0; u < t.args.length; u++) i = t.args[u], typeof i == "string" && (i = '"' + i.replace("\n", "\\n") + '"'), r.push(i);
                        n.push(t.opcode + " " + r.join(" "))
                    }
                }
                return n.join("\n")
            }, equals: function (e) {
                var t = this.opcodes.length;
                if (e.opcodes.length !== t) return !1;
                for (var n = 0; n < t; n++) {
                    var r = this.opcodes[n], i = e.opcodes[n];
                    if (r.opcode !== i.opcode || r.args.length !== i.args.length) return !1;
                    for (var s = 0; s < r.args.length; s++) if (r.args[s] !== i.args[s]) return !1
                }
                t = this.children.length;
                if (e.children.length !== t) return !1;
                for (n = 0; n < t; n++) if (!this.children[n].equals(e.children[n])) return !1;
                return !0
            }, guid: 0, compile: function (e, t) {
                this.opcodes = [], this.children = [], this.depths = {list: []}, this.options = t;
                var n = this.options.knownHelpers;
                this.options.knownHelpers = {
                    helperMissing: !0,
                    blockHelperMissing: !0,
                    each: !0,
                    "if": !0,
                    unless: !0,
                    "with": !0,
                    log: !0
                };
                if (n) for (var r in n) this.options.knownHelpers[r] = n[r];
                return this.accept(e)
            }, accept: function (e) {
                var t = e.strip || {}, n;
                return t.left && this.opcode("strip"), n = this[e.type](e), t.right && this.opcode("strip"), n
            }, program: function (e) {
                var t = e.statements;
                for (var n = 0, r = t.length; n < r; n++) this.accept(t[n]);
                return this.isSimple = r === 1, this.depths.list = this.depths.list.sort(function (e, t) {
                    return e - t
                }), this
            }, compileProgram: function (e) {
                var t = (new this.compiler).compile(e, this.options), n = this.guid++, r;
                this.usePartial = this.usePartial || t.usePartial, this.children[n] = t;
                for (var i = 0, s = t.depths.list.length; i < s; i++) {
                    r = t.depths.list[i];
                    if (r < 2) continue;
                    this.addDepth(r - 1)
                }
                return n
            }, block: function (e) {
                var t = e.mustache, n = e.program, r = e.inverse;
                n && (n = this.compileProgram(n)), r && (r = this.compileProgram(r));
                var i = this.classifyMustache(t);
                i === "helper" ? this.helperMustache(t, n, r) : i === "simple" ? (this.simpleMustache(t), this.opcode("pushProgram", n), this.opcode("pushProgram", r), this.opcode("emptyHash"), this.opcode("blockValue")) : (this.ambiguousMustache(t, n, r), this.opcode("pushProgram", n), this.opcode("pushProgram", r), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append")
            }, hash: function (e) {
                var t = e.pairs, n, r;
                this.opcode("pushHash");
                for (var i = 0, s = t.length; i < s; i++) n = t[i], r = n[1], this.options.stringParams ? (r.depth && this.addDepth(r.depth), this.opcode("getContext", r.depth || 0), this.opcode("pushStringParam", r.stringModeValue, r.type)) : this.accept(r), this.opcode("assignToHash", n[0]);
                this.opcode("popHash")
            }, partial: function (e) {
                var t = e.partialName;
                this.usePartial = !0, e.context ? this.ID(e.context) : this.opcode("push", "depth0"), this.opcode("invokePartial", t.name), this.opcode("append")
            }, content: function (e) {
                this.opcode("appendContent", e.string)
            }, mustache: function (e) {
                var t = this.options, n = this.classifyMustache(e);
                n === "simple" ? this.simpleMustache(e) : n === "helper" ? this.helperMustache(e) : this.ambiguousMustache(e), e.escaped && !t.noEscape ? this.opcode("appendEscaped") : this.opcode("append")
            }, ambiguousMustache: function (e, t, n) {
                var r = e.id, i = r.parts[0], s = t != null || n != null;
                this.opcode("getContext", r.depth), this.opcode("pushProgram", t), this.opcode("pushProgram", n), this.opcode("invokeAmbiguous", i, s)
            }, simpleMustache: function (e) {
                var t = e.id;
                t.type === "DATA" ? this.DATA(t) : t.parts.length ? this.ID(t) : (this.addDepth(t.depth), this.opcode("getContext", t.depth), this.opcode("pushContext")), this.opcode("resolvePossibleLambda")
            }, helperMustache: function (e, t, n) {
                var r = this.setupFullMustacheParams(e, t, n), i = e.id.parts[0];
                if (this.options.knownHelpers[i]) this.opcode("invokeKnownHelper", r.length, i); else {
                    if (this.options.knownHelpersOnly) throw new Error("You specified knownHelpersOnly, but used the unknown helper " + i);
                    this.opcode("invokeHelper", r.length, i)
                }
            }, ID: function (e) {
                this.addDepth(e.depth), this.opcode("getContext", e.depth);
                var t = e.parts[0];
                t ? this.opcode("lookupOnContext", e.parts[0]) : this.opcode("pushContext");
                for (var n = 1, r = e.parts.length; n < r; n++) this.opcode("lookup", e.parts[n])
            }, DATA: function (e) {
                this.options.data = !0;
                if (e.id.isScoped || e.id.depth) throw new s("Scoped data references are not supported: " + e.original);
                this.opcode("lookupData");
                var t = e.id.parts;
                for (var n = 0, r = t.length; n < r; n++) this.opcode("lookup", t[n])
            }, STRING: function (e) {
                this.opcode("pushString", e.string)
            }, INTEGER: function (e) {
                this.opcode("pushLiteral", e.integer)
            }, BOOLEAN: function (e) {
                this.opcode("pushLiteral", e.bool)
            }, comment: function () {
            }, opcode: function (e) {
                this.opcodes.push({opcode: e, args: [].slice.call(arguments, 1)})
            }, declare: function (e, t) {
                this.opcodes.push({opcode: "DECLARE", name: e, value: t})
            }, addDepth: function (e) {
                if (isNaN(e)) throw new Error("EWOT");
                if (e === 0) return;
                this.depths[e] || (this.depths[e] = !0, this.depths.list.push(e))
            }, classifyMustache: function (e) {
                var t = e.isHelper, n = e.eligibleHelper, r = this.options;
                if (n && !t) {
                    var i = e.id.parts[0];
                    r.knownHelpers[i] ? t = !0 : r.knownHelpersOnly && (n = !1)
                }
                return t ? "helper" : n ? "ambiguous" : "simple"
            }, pushParams: function (e) {
                var t = e.length, n;
                while (t--) n = e[t], this.options.stringParams ? (n.depth && this.addDepth(n.depth), this.opcode("getContext", n.depth || 0), this.opcode("pushStringParam", n.stringModeValue, n.type)) : this[n.type](n)
            }, setupMustacheParams: function (e) {
                var t = e.params;
                return this.pushParams(t), e.hash ? this.hash(e.hash) : this.opcode("emptyHash"), t
            }, setupFullMustacheParams: function (e, t, n) {
                var r = e.params;
                return this.pushParams(r), this.opcode("pushProgram", t), this.opcode("pushProgram", n), e.hash ? this.hash(e.hash) : this.opcode("emptyHash"), r
            }
        }, i.precompile = l, i.compile = c, i
    }(n, a, f, o), c = function (e, t, n, r, i) {
        "use strict";
        var s, o = e, u = t, a = n.parser, f = n.parse, l = r.Compiler, c = r.compile, h = r.precompile, p = i,
            d = o.create, v = function () {
                var e = d();
                return e.compile = function (t, n) {
                    return c(t, n, e)
                }, e.precompile = h, e.AST = u, e.Compiler = l, e.JavaScriptCompiler = p, e.Parser = a, e.parse = f, e
            };
        return o = v(), o.create = v, s = o, s
    }(s, o, a, l, f);
    return c
}();
define("handlebars", function (e) {
    return function () {
        var t, n;
        return t || e.Handlebars
    }
}(this)), define("util/anim_frame", ["config", "underscore", "backbone"], function (e, t, n) {
    "use strict";
    (function () {
        var e = 0, t = ["ms", "moz", "webkit", "o"];
        for (var n = 0; n < t.length && !window.requestAnimationFrame; ++n) window.requestAnimationFrame = window[t[n] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[n] + "CancelAnimationFrame"] || window[t[n] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function (t, n) {
            var r = (new Date).getTime(), i = Math.max(0, 16 - (r - e)), s = window.setTimeout(function () {
                t(r + i)
            }, i);
            return e = r + i, s
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (e) {
            clearTimeout(e)
        })
    })();
    var r = {};
    r.onAnimRequestFrame = function () {
        this.trigger("anim_frame"), window.requestAnimationFrame(i)
    };
    var i = t.bind(r.onAnimRequestFrame, r);
    return t.extend(r, n.Events), r.onAnimRequestFrame(), r
}), define("view/common/base_view", ["jquery", "underscore", "backbone", "config", "router", "model/app_model", "handlebars", "tweenmax", "util/anim_frame"], function (e, t, n, r, i, s, o, u, a) {
    "use strict";
    return n.View.extend({
        $node: null, hasAnimFrame: !1, initialize: function () {
            t.bindAll(this, "destroy")
        }, render: function () {
        }, onResize: function (e, t) {
        }, addAnimFrame: function () {
            this.hasAnimFrame || (this.hasAnimFrame = !0, a.on("anim_frame", this.loop, this))
        }, removeAnimFrame: function () {
            this.hasAnimFrame && (this.hasAnimFrame = !1, a.off("anim_frame", this.loop, this))
        }, loop: function () {
        }, compileTemplate: function (t, n) {
            var r = n || {}, i = this.getCompiledTemplate(t);
            this.$node = e(i(r))
        }, compileAndAppendTemplate: function (t, n) {
            var r = n || {}, i = this.getCompiledTemplate(t);
            this.$node = e(i(r)), this.$el.append(this.$node)
        }, compileAndPrependTemplate: function (t, n) {
            var r = n || {}, i = this.getCompiledTemplate(t);
            this.$node = e(i(r)), this.$el.prepend(this.$node)
        }, getCompiledTemplate: function (e) {
            return o.compile(e)
        }, enter: function () {
            r.TOUCH && this.$window.scrollTop(0);
            var e = 0;
            s.previous("page") && (e = 1), u.killTweensOf(this.$el), u.to(this.$el, 1, {
                opacity: 1,
                ease: "Sine.easeInOut",
                force3D: !0,
                delay: e
            })
        }, out: function () {
            u.to(this.$node, 1, {opacity: 0, onComplete: this.destroy})
        }, destroy: function () {
            this.undelegateEvents(), this.off(), this.$node.remove()
        }
    })
}), eval(function (e, t, n, r, i, s) {
    i = function (e) {
        return (e < t ? "" : i(parseInt(e / t))) + ((e %= t) > 35 ? String.fromCharCode(e + 29) : e.toString(36))
    };
    if (!"".replace(/^/, String)) {
        while (n--) s[i(n)] = r[n] || i(n);
        r = [function (e) {
            return s[e]
        }], i = function () {
            return "\\w+"
        }, n = 1
    }
    while (n--) r[n] && (e = e.replace(new RegExp("\\b" + i(n) + "\\b", "g"), r[n]));
    return e
}("9 17={3i:'0.1.3',16:1e-6};l v(){}v.23={e:l(i){8(i<1||i>7.4.q)?w:7.4[i-1]},2R:l(){8 7.4.q},1u:l(){8 F.1x(7.2u(7))},24:l(a){9 n=7.4.q;9 V=a.4||a;o(n!=V.q){8 1L}J{o(F.13(7.4[n-1]-V[n-1])>17.16){8 1L}}H(--n);8 2x},1q:l(){8 v.u(7.4)},1b:l(a){9 b=[];7.28(l(x,i){b.19(a(x,i))});8 v.u(b)},28:l(a){9 n=7.4.q,k=n,i;J{i=k-n;a(7.4[i],i+1)}H(--n)},2q:l(){9 r=7.1u();o(r===0){8 7.1q()}8 7.1b(l(x){8 x/r})},1C:l(a){9 V=a.4||a;9 n=7.4.q,k=n,i;o(n!=V.q){8 w}9 b=0,1D=0,1F=0;7.28(l(x,i){b+=x*V[i-1];1D+=x*x;1F+=V[i-1]*V[i-1]});1D=F.1x(1D);1F=F.1x(1F);o(1D*1F===0){8 w}9 c=b/(1D*1F);o(c<-1){c=-1}o(c>1){c=1}8 F.37(c)},1m:l(a){9 b=7.1C(a);8(b===w)?w:(b<=17.16)},34:l(a){9 b=7.1C(a);8(b===w)?w:(F.13(b-F.1A)<=17.16)},2k:l(a){9 b=7.2u(a);8(b===w)?w:(F.13(b)<=17.16)},2j:l(a){9 V=a.4||a;o(7.4.q!=V.q){8 w}8 7.1b(l(x,i){8 x+V[i-1]})},2C:l(a){9 V=a.4||a;o(7.4.q!=V.q){8 w}8 7.1b(l(x,i){8 x-V[i-1]})},22:l(k){8 7.1b(l(x){8 x*k})},x:l(k){8 7.22(k)},2u:l(a){9 V=a.4||a;9 i,2g=0,n=7.4.q;o(n!=V.q){8 w}J{2g+=7.4[n-1]*V[n-1]}H(--n);8 2g},2f:l(a){9 B=a.4||a;o(7.4.q!=3||B.q!=3){8 w}9 A=7.4;8 v.u([(A[1]*B[2])-(A[2]*B[1]),(A[2]*B[0])-(A[0]*B[2]),(A[0]*B[1])-(A[1]*B[0])])},2A:l(){9 m=0,n=7.4.q,k=n,i;J{i=k-n;o(F.13(7.4[i])>F.13(m)){m=7.4[i]}}H(--n);8 m},2Z:l(x){9 a=w,n=7.4.q,k=n,i;J{i=k-n;o(a===w&&7.4[i]==x){a=i+1}}H(--n);8 a},3g:l(){8 S.2X(7.4)},2d:l(){8 7.1b(l(x){8 F.2d(x)})},2V:l(x){8 7.1b(l(y){8(F.13(y-x)<=17.16)?x:y})},1o:l(a){o(a.K){8 a.1o(7)}9 V=a.4||a;o(V.q!=7.4.q){8 w}9 b=0,2b;7.28(l(x,i){2b=x-V[i-1];b+=2b*2b});8 F.1x(b)},3a:l(a){8 a.1h(7)},2T:l(a){8 a.1h(7)},1V:l(t,a){9 V,R,x,y,z;2S(7.4.q){27 2:V=a.4||a;o(V.q!=2){8 w}R=S.1R(t).4;x=7.4[0]-V[0];y=7.4[1]-V[1];8 v.u([V[0]+R[0][0]*x+R[0][1]*y,V[1]+R[1][0]*x+R[1][1]*y]);1I;27 3:o(!a.U){8 w}9 C=a.1r(7).4;R=S.1R(t,a.U).4;x=7.4[0]-C[0];y=7.4[1]-C[1];z=7.4[2]-C[2];8 v.u([C[0]+R[0][0]*x+R[0][1]*y+R[0][2]*z,C[1]+R[1][0]*x+R[1][1]*y+R[1][2]*z,C[2]+R[2][0]*x+R[2][1]*y+R[2][2]*z]);1I;2P:8 w}},1t:l(a){o(a.K){9 P=7.4.2O();9 C=a.1r(P).4;8 v.u([C[0]+(C[0]-P[0]),C[1]+(C[1]-P[1]),C[2]+(C[2]-(P[2]||0))])}1d{9 Q=a.4||a;o(7.4.q!=Q.q){8 w}8 7.1b(l(x,i){8 Q[i-1]+(Q[i-1]-x)})}},1N:l(){9 V=7.1q();2S(V.4.q){27 3:1I;27 2:V.4.19(0);1I;2P:8 w}8 V},2n:l(){8'['+7.4.2K(', ')+']'},26:l(a){7.4=(a.4||a).2O();8 7}};v.u=l(a){9 V=25 v();8 V.26(a)};v.i=v.u([1,0,0]);v.j=v.u([0,1,0]);v.k=v.u([0,0,1]);v.2J=l(n){9 a=[];J{a.19(F.2F())}H(--n);8 v.u(a)};v.1j=l(n){9 a=[];J{a.19(0)}H(--n);8 v.u(a)};l S(){}S.23={e:l(i,j){o(i<1||i>7.4.q||j<1||j>7.4[0].q){8 w}8 7.4[i-1][j-1]},33:l(i){o(i>7.4.q){8 w}8 v.u(7.4[i-1])},2E:l(j){o(j>7.4[0].q){8 w}9 a=[],n=7.4.q,k=n,i;J{i=k-n;a.19(7.4[i][j-1])}H(--n);8 v.u(a)},2R:l(){8{2D:7.4.q,1p:7.4[0].q}},2D:l(){8 7.4.q},1p:l(){8 7.4[0].q},24:l(a){9 M=a.4||a;o(1g(M[0][0])=='1f'){M=S.u(M).4}o(7.4.q!=M.q||7.4[0].q!=M[0].q){8 1L}9 b=7.4.q,15=b,i,G,10=7.4[0].q,j;J{i=15-b;G=10;J{j=10-G;o(F.13(7.4[i][j]-M[i][j])>17.16){8 1L}}H(--G)}H(--b);8 2x},1q:l(){8 S.u(7.4)},1b:l(a){9 b=[],12=7.4.q,15=12,i,G,10=7.4[0].q,j;J{i=15-12;G=10;b[i]=[];J{j=10-G;b[i][j]=a(7.4[i][j],i+1,j+1)}H(--G)}H(--12);8 S.u(b)},2i:l(a){9 M=a.4||a;o(1g(M[0][0])=='1f'){M=S.u(M).4}8(7.4.q==M.q&&7.4[0].q==M[0].q)},2j:l(a){9 M=a.4||a;o(1g(M[0][0])=='1f'){M=S.u(M).4}o(!7.2i(M)){8 w}8 7.1b(l(x,i,j){8 x+M[i-1][j-1]})},2C:l(a){9 M=a.4||a;o(1g(M[0][0])=='1f'){M=S.u(M).4}o(!7.2i(M)){8 w}8 7.1b(l(x,i,j){8 x-M[i-1][j-1]})},2B:l(a){9 M=a.4||a;o(1g(M[0][0])=='1f'){M=S.u(M).4}8(7.4[0].q==M.q)},22:l(a){o(!a.4){8 7.1b(l(x){8 x*a})}9 b=a.1u?2x:1L;9 M=a.4||a;o(1g(M[0][0])=='1f'){M=S.u(M).4}o(!7.2B(M)){8 w}9 d=7.4.q,15=d,i,G,10=M[0].q,j;9 e=7.4[0].q,4=[],21,20,c;J{i=15-d;4[i]=[];G=10;J{j=10-G;21=0;20=e;J{c=e-20;21+=7.4[i][c]*M[c][j]}H(--20);4[i][j]=21}H(--G)}H(--d);9 M=S.u(4);8 b?M.2E(1):M},x:l(a){8 7.22(a)},32:l(a,b,c,d){9 e=[],12=c,i,G,j;9 f=7.4.q,1p=7.4[0].q;J{i=c-12;e[i]=[];G=d;J{j=d-G;e[i][j]=7.4[(a+i-1)%f][(b+j-1)%1p]}H(--G)}H(--12);8 S.u(e)},31:l(){9 a=7.4.q,1p=7.4[0].q;9 b=[],12=1p,i,G,j;J{i=1p-12;b[i]=[];G=a;J{j=a-G;b[i][j]=7.4[j][i]}H(--G)}H(--12);8 S.u(b)},1y:l(){8(7.4.q==7.4[0].q)},2A:l(){9 m=0,12=7.4.q,15=12,i,G,10=7.4[0].q,j;J{i=15-12;G=10;J{j=10-G;o(F.13(7.4[i][j])>F.13(m)){m=7.4[i][j]}}H(--G)}H(--12);8 m},2Z:l(x){9 a=w,12=7.4.q,15=12,i,G,10=7.4[0].q,j;J{i=15-12;G=10;J{j=10-G;o(7.4[i][j]==x){8{i:i+1,j:j+1}}}H(--G)}H(--12);8 w},30:l(){o(!7.1y){8 w}9 a=[],n=7.4.q,k=n,i;J{i=k-n;a.19(7.4[i][i])}H(--n);8 v.u(a)},1K:l(){9 M=7.1q(),1c;9 n=7.4.q,k=n,i,1s,1n=7.4[0].q,p;J{i=k-n;o(M.4[i][i]==0){2e(j=i+1;j<k;j++){o(M.4[j][i]!=0){1c=[];1s=1n;J{p=1n-1s;1c.19(M.4[i][p]+M.4[j][p])}H(--1s);M.4[i]=1c;1I}}}o(M.4[i][i]!=0){2e(j=i+1;j<k;j++){9 a=M.4[j][i]/M.4[i][i];1c=[];1s=1n;J{p=1n-1s;1c.19(p<=i?0:M.4[j][p]-M.4[i][p]*a)}H(--1s);M.4[j]=1c}}}H(--n);8 M},3h:l(){8 7.1K()},2z:l(){o(!7.1y()){8 w}9 M=7.1K();9 a=M.4[0][0],n=M.4.q-1,k=n,i;J{i=k-n+1;a=a*M.4[i][i]}H(--n);8 a},3f:l(){8 7.2z()},2y:l(){8(7.1y()&&7.2z()===0)},2Y:l(){o(!7.1y()){8 w}9 a=7.4[0][0],n=7.4.q-1,k=n,i;J{i=k-n+1;a+=7.4[i][i]}H(--n);8 a},3e:l(){8 7.2Y()},1Y:l(){9 M=7.1K(),1Y=0;9 a=7.4.q,15=a,i,G,10=7.4[0].q,j;J{i=15-a;G=10;J{j=10-G;o(F.13(M.4[i][j])>17.16){1Y++;1I}}H(--G)}H(--a);8 1Y},3d:l(){8 7.1Y()},2W:l(a){9 M=a.4||a;o(1g(M[0][0])=='1f'){M=S.u(M).4}9 T=7.1q(),1p=T.4[0].q;9 b=T.4.q,15=b,i,G,10=M[0].q,j;o(b!=M.q){8 w}J{i=15-b;G=10;J{j=10-G;T.4[i][1p+j]=M[i][j]}H(--G)}H(--b);8 T},2w:l(){o(!7.1y()||7.2y()){8 w}9 a=7.4.q,15=a,i,j;9 M=7.2W(S.I(a)).1K();9 b,1n=M.4[0].q,p,1c,2v;9 c=[],2c;J{i=a-1;1c=[];b=1n;c[i]=[];2v=M.4[i][i];J{p=1n-b;2c=M.4[i][p]/2v;1c.19(2c);o(p>=15){c[i].19(2c)}}H(--b);M.4[i]=1c;2e(j=0;j<i;j++){1c=[];b=1n;J{p=1n-b;1c.19(M.4[j][p]-M.4[i][p]*M.4[j][i])}H(--b);M.4[j]=1c}}H(--a);8 S.u(c)},3c:l(){8 7.2w()},2d:l(){8 7.1b(l(x){8 F.2d(x)})},2V:l(x){8 7.1b(l(p){8(F.13(p-x)<=17.16)?x:p})},2n:l(){9 a=[];9 n=7.4.q,k=n,i;J{i=k-n;a.19(v.u(7.4[i]).2n())}H(--n);8 a.2K('\\n')},26:l(a){9 i,4=a.4||a;o(1g(4[0][0])!='1f'){9 b=4.q,15=b,G,10,j;7.4=[];J{i=15-b;G=4[i].q;10=G;7.4[i]=[];J{j=10-G;7.4[i][j]=4[i][j]}H(--G)}H(--b);8 7}9 n=4.q,k=n;7.4=[];J{i=k-n;7.4.19([4[i]])}H(--n);8 7}};S.u=l(a){9 M=25 S();8 M.26(a)};S.I=l(n){9 a=[],k=n,i,G,j;J{i=k-n;a[i]=[];G=k;J{j=k-G;a[i][j]=(i==j)?1:0}H(--G)}H(--n);8 S.u(a)};S.2X=l(a){9 n=a.q,k=n,i;9 M=S.I(n);J{i=k-n;M.4[i][i]=a[i]}H(--n);8 M};S.1R=l(b,a){o(!a){8 S.u([[F.1H(b),-F.1G(b)],[F.1G(b),F.1H(b)]])}9 d=a.1q();o(d.4.q!=3){8 w}9 e=d.1u();9 x=d.4[0]/e,y=d.4[1]/e,z=d.4[2]/e;9 s=F.1G(b),c=F.1H(b),t=1-c;8 S.u([[t*x*x+c,t*x*y-s*z,t*x*z+s*y],[t*x*y+s*z,t*y*y+c,t*y*z-s*x],[t*x*z-s*y,t*y*z+s*x,t*z*z+c]])};S.3b=l(t){9 c=F.1H(t),s=F.1G(t);8 S.u([[1,0,0],[0,c,-s],[0,s,c]])};S.39=l(t){9 c=F.1H(t),s=F.1G(t);8 S.u([[c,0,s],[0,1,0],[-s,0,c]])};S.38=l(t){9 c=F.1H(t),s=F.1G(t);8 S.u([[c,-s,0],[s,c,0],[0,0,1]])};S.2J=l(n,m){8 S.1j(n,m).1b(l(){8 F.2F()})};S.1j=l(n,m){9 a=[],12=n,i,G,j;J{i=n-12;a[i]=[];G=m;J{j=m-G;a[i][j]=0}H(--G)}H(--12);8 S.u(a)};l 14(){}14.23={24:l(a){8(7.1m(a)&&7.1h(a.K))},1q:l(){8 14.u(7.K,7.U)},2U:l(a){9 V=a.4||a;8 14.u([7.K.4[0]+V[0],7.K.4[1]+V[1],7.K.4[2]+(V[2]||0)],7.U)},1m:l(a){o(a.W){8 a.1m(7)}9 b=7.U.1C(a.U);8(F.13(b)<=17.16||F.13(b-F.1A)<=17.16)},1o:l(a){o(a.W){8 a.1o(7)}o(a.U){o(7.1m(a)){8 7.1o(a.K)}9 N=7.U.2f(a.U).2q().4;9 A=7.K.4,B=a.K.4;8 F.13((A[0]-B[0])*N[0]+(A[1]-B[1])*N[1]+(A[2]-B[2])*N[2])}1d{9 P=a.4||a;9 A=7.K.4,D=7.U.4;9 b=P[0]-A[0],2a=P[1]-A[1],29=(P[2]||0)-A[2];9 c=F.1x(b*b+2a*2a+29*29);o(c===0)8 0;9 d=(b*D[0]+2a*D[1]+29*D[2])/c;9 e=1-d*d;8 F.13(c*F.1x(e<0?0:e))}},1h:l(a){9 b=7.1o(a);8(b!==w&&b<=17.16)},2T:l(a){8 a.1h(7)},1v:l(a){o(a.W){8 a.1v(7)}8(!7.1m(a)&&7.1o(a)<=17.16)},1U:l(a){o(a.W){8 a.1U(7)}o(!7.1v(a)){8 w}9 P=7.K.4,X=7.U.4,Q=a.K.4,Y=a.U.4;9 b=X[0],1z=X[1],1B=X[2],1T=Y[0],1S=Y[1],1M=Y[2];9 c=P[0]-Q[0],2s=P[1]-Q[1],2r=P[2]-Q[2];9 d=-b*c-1z*2s-1B*2r;9 e=1T*c+1S*2s+1M*2r;9 f=b*b+1z*1z+1B*1B;9 g=1T*1T+1S*1S+1M*1M;9 h=b*1T+1z*1S+1B*1M;9 k=(d*g/f+h*e)/(g-h*h);8 v.u([P[0]+k*b,P[1]+k*1z,P[2]+k*1B])},1r:l(a){o(a.U){o(7.1v(a)){8 7.1U(a)}o(7.1m(a)){8 w}9 D=7.U.4,E=a.U.4;9 b=D[0],1l=D[1],1k=D[2],1P=E[0],1O=E[1],1Q=E[2];9 x=(1k*1P-b*1Q),y=(b*1O-1l*1P),z=(1l*1Q-1k*1O);9 N=v.u([x*1Q-y*1O,y*1P-z*1Q,z*1O-x*1P]);9 P=11.u(a.K,N);8 P.1U(7)}1d{9 P=a.4||a;o(7.1h(P)){8 v.u(P)}9 A=7.K.4,D=7.U.4;9 b=D[0],1l=D[1],1k=D[2],1w=A[0],18=A[1],1a=A[2];9 x=b*(P[1]-18)-1l*(P[0]-1w),y=1l*((P[2]||0)-1a)-1k*(P[1]-18),z=1k*(P[0]-1w)-b*((P[2]||0)-1a);9 V=v.u([1l*x-1k*z,1k*y-b*x,b*z-1l*y]);9 k=7.1o(P)/V.1u();8 v.u([P[0]+V.4[0]*k,P[1]+V.4[1]*k,(P[2]||0)+V.4[2]*k])}},1V:l(t,a){o(1g(a.U)=='1f'){a=14.u(a.1N(),v.k)}9 R=S.1R(t,a.U).4;9 C=a.1r(7.K).4;9 A=7.K.4,D=7.U.4;9 b=C[0],1E=C[1],1J=C[2],1w=A[0],18=A[1],1a=A[2];9 x=1w-b,y=18-1E,z=1a-1J;8 14.u([b+R[0][0]*x+R[0][1]*y+R[0][2]*z,1E+R[1][0]*x+R[1][1]*y+R[1][2]*z,1J+R[2][0]*x+R[2][1]*y+R[2][2]*z],[R[0][0]*D[0]+R[0][1]*D[1]+R[0][2]*D[2],R[1][0]*D[0]+R[1][1]*D[1]+R[1][2]*D[2],R[2][0]*D[0]+R[2][1]*D[1]+R[2][2]*D[2]])},1t:l(a){o(a.W){9 A=7.K.4,D=7.U.4;9 b=A[0],18=A[1],1a=A[2],2N=D[0],1l=D[1],1k=D[2];9 c=7.K.1t(a).4;9 d=b+2N,2h=18+1l,2o=1a+1k;9 Q=a.1r([d,2h,2o]).4;9 e=[Q[0]+(Q[0]-d)-c[0],Q[1]+(Q[1]-2h)-c[1],Q[2]+(Q[2]-2o)-c[2]];8 14.u(c,e)}1d o(a.U){8 7.1V(F.1A,a)}1d{9 P=a.4||a;8 14.u(7.K.1t([P[0],P[1],(P[2]||0)]),7.U)}},1Z:l(a,b){a=v.u(a);b=v.u(b);o(a.4.q==2){a.4.19(0)}o(b.4.q==2){b.4.19(0)}o(a.4.q>3||b.4.q>3){8 w}9 c=b.1u();o(c===0){8 w}7.K=a;7.U=v.u([b.4[0]/c,b.4[1]/c,b.4[2]/c]);8 7}};14.u=l(a,b){9 L=25 14();8 L.1Z(a,b)};14.X=14.u(v.1j(3),v.i);14.Y=14.u(v.1j(3),v.j);14.Z=14.u(v.1j(3),v.k);l 11(){}11.23={24:l(a){8(7.1h(a.K)&&7.1m(a))},1q:l(){8 11.u(7.K,7.W)},2U:l(a){9 V=a.4||a;8 11.u([7.K.4[0]+V[0],7.K.4[1]+V[1],7.K.4[2]+(V[2]||0)],7.W)},1m:l(a){9 b;o(a.W){b=7.W.1C(a.W);8(F.13(b)<=17.16||F.13(F.1A-b)<=17.16)}1d o(a.U){8 7.W.2k(a.U)}8 w},2k:l(a){9 b=7.W.1C(a.W);8(F.13(F.1A/2-b)<=17.16)},1o:l(a){o(7.1v(a)||7.1h(a)){8 0}o(a.K){9 A=7.K.4,B=a.K.4,N=7.W.4;8 F.13((A[0]-B[0])*N[0]+(A[1]-B[1])*N[1]+(A[2]-B[2])*N[2])}1d{9 P=a.4||a;9 A=7.K.4,N=7.W.4;8 F.13((A[0]-P[0])*N[0]+(A[1]-P[1])*N[1]+(A[2]-(P[2]||0))*N[2])}},1h:l(a){o(a.W){8 w}o(a.U){8(7.1h(a.K)&&7.1h(a.K.2j(a.U)))}1d{9 P=a.4||a;9 A=7.K.4,N=7.W.4;9 b=F.13(N[0]*(A[0]-P[0])+N[1]*(A[1]-P[1])+N[2]*(A[2]-(P[2]||0)));8(b<=17.16)}},1v:l(a){o(1g(a.U)=='1f'&&1g(a.W)=='1f'){8 w}8!7.1m(a)},1U:l(a){o(!7.1v(a)){8 w}o(a.U){9 A=a.K.4,D=a.U.4,P=7.K.4,N=7.W.4;9 b=(N[0]*(P[0]-A[0])+N[1]*(P[1]-A[1])+N[2]*(P[2]-A[2]))/(N[0]*D[0]+N[1]*D[1]+N[2]*D[2]);8 v.u([A[0]+D[0]*b,A[1]+D[1]*b,A[2]+D[2]*b])}1d o(a.W){9 c=7.W.2f(a.W).2q();9 N=7.W.4,A=7.K.4,O=a.W.4,B=a.K.4;9 d=S.1j(2,2),i=0;H(d.2y()){i++;d=S.u([[N[i%3],N[(i+1)%3]],[O[i%3],O[(i+1)%3]]])}9 e=d.2w().4;9 x=N[0]*A[0]+N[1]*A[1]+N[2]*A[2];9 y=O[0]*B[0]+O[1]*B[1]+O[2]*B[2];9 f=[e[0][0]*x+e[0][1]*y,e[1][0]*x+e[1][1]*y];9 g=[];2e(9 j=1;j<=3;j++){g.19((i==j)?0:f[(j+(5-i)%3)%3])}8 14.u(g,c)}},1r:l(a){9 P=a.4||a;9 A=7.K.4,N=7.W.4;9 b=(A[0]-P[0])*N[0]+(A[1]-P[1])*N[1]+(A[2]-(P[2]||0))*N[2];8 v.u([P[0]+N[0]*b,P[1]+N[1]*b,(P[2]||0)+N[2]*b])},1V:l(t,a){9 R=S.1R(t,a.U).4;9 C=a.1r(7.K).4;9 A=7.K.4,N=7.W.4;9 b=C[0],1E=C[1],1J=C[2],1w=A[0],18=A[1],1a=A[2];9 x=1w-b,y=18-1E,z=1a-1J;8 11.u([b+R[0][0]*x+R[0][1]*y+R[0][2]*z,1E+R[1][0]*x+R[1][1]*y+R[1][2]*z,1J+R[2][0]*x+R[2][1]*y+R[2][2]*z],[R[0][0]*N[0]+R[0][1]*N[1]+R[0][2]*N[2],R[1][0]*N[0]+R[1][1]*N[1]+R[1][2]*N[2],R[2][0]*N[0]+R[2][1]*N[1]+R[2][2]*N[2]])},1t:l(a){o(a.W){9 A=7.K.4,N=7.W.4;9 b=A[0],18=A[1],1a=A[2],2M=N[0],2L=N[1],2Q=N[2];9 c=7.K.1t(a).4;9 d=b+2M,2p=18+2L,2m=1a+2Q;9 Q=a.1r([d,2p,2m]).4;9 e=[Q[0]+(Q[0]-d)-c[0],Q[1]+(Q[1]-2p)-c[1],Q[2]+(Q[2]-2m)-c[2]];8 11.u(c,e)}1d o(a.U){8 7.1V(F.1A,a)}1d{9 P=a.4||a;8 11.u(7.K.1t([P[0],P[1],(P[2]||0)]),7.W)}},1Z:l(a,b,c){a=v.u(a);a=a.1N();o(a===w){8 w}b=v.u(b);b=b.1N();o(b===w){8 w}o(1g(c)=='1f'){c=w}1d{c=v.u(c);c=c.1N();o(c===w){8 w}}9 d=a.4[0],18=a.4[1],1a=a.4[2];9 e=b.4[0],1W=b.4[1],1X=b.4[2];9 f,1i;o(c!==w){9 g=c.4[0],2l=c.4[1],2t=c.4[2];f=v.u([(1W-18)*(2t-1a)-(1X-1a)*(2l-18),(1X-1a)*(g-d)-(e-d)*(2t-1a),(e-d)*(2l-18)-(1W-18)*(g-d)]);1i=f.1u();o(1i===0){8 w}f=v.u([f.4[0]/1i,f.4[1]/1i,f.4[2]/1i])}1d{1i=F.1x(e*e+1W*1W+1X*1X);o(1i===0){8 w}f=v.u([b.4[0]/1i,b.4[1]/1i,b.4[2]/1i])}7.K=a;7.W=f;8 7}};11.u=l(a,b,c){9 P=25 11();8 P.1Z(a,b,c)};11.2I=11.u(v.1j(3),v.k);11.2H=11.u(v.1j(3),v.i);11.2G=11.u(v.1j(3),v.j);11.36=11.2I;11.35=11.2H;11.3j=11.2G;9 $V=v.u;9 $M=S.u;9 $L=14.u;9 $P=11.u;", 62, 206, "||||elements|||this|return|var||||||||||||function|||if||length||||create|Vector|null|||||||||Math|nj|while||do|anchor||||||||Matrix||direction||normal||||kj|Plane|ni|abs|Line|ki|precision|Sylvester|A2|push|A3|map|els|else||undefined|typeof|contains|mod|Zero|D3|D2|isParallelTo|kp|distanceFrom|cols|dup|pointClosestTo|np|reflectionIn|modulus|intersects|A1|sqrt|isSquare|X2|PI|X3|angleFrom|mod1|C2|mod2|sin|cos|break|C3|toRightTriangular|false|Y3|to3D|E2|E1|E3|Rotation|Y2|Y1|intersectionWith|rotate|v12|v13|rank|setVectors|nc|sum|multiply|prototype|eql|new|setElements|case|each|PA3|PA2|part|new_element|round|for|cross|product|AD2|isSameSizeAs|add|isPerpendicularTo|v22|AN3|inspect|AD3|AN2|toUnitVector|PsubQ3|PsubQ2|v23|dot|divisor|inverse|true|isSingular|determinant|max|canMultiplyFromLeft|subtract|rows|col|random|ZX|YZ|XY|Random|join|N2|N1|D1|slice|default|N3|dimensions|switch|liesIn|translate|snapTo|augment|Diagonal|trace|indexOf|diagonal|transpose|minor|row|isAntiparallelTo|ZY|YX|acos|RotationZ|RotationY|liesOn|RotationX|inv|rk|tr|det|toDiagonalMatrix|toUpperTriangular|version|XZ".split("|"), 0, {})), define("sylvester", function (e) {
    return function () {
        var t, n;
        return t || e.Sylvester
    }
}(this)), define("util/AnimationUtils", ["jquery", "sylvester"], function (e) {
    var t = {
        DEG_2_RAD: Math.PI / 180, getRotationXMatrix: function (e) {
            return $M([[1, 0, 0, 0], [0, Math.cos(e * this.DEG_2_RAD), Math.sin(-e * this.DEG_2_RAD), 0], [0, Math.sin(e * this.DEG_2_RAD), Math.cos(e * this.DEG_2_RAD), 0], [0, 0, 0, 1]])
        }, getRotationYMatrix: function (e) {
            return $M([[Math.cos(e * this.DEG_2_RAD), 0, Math.sin(e * this.DEG_2_RAD), 0], [0, 1, 0, 0], [Math.sin(-e * this.DEG_2_RAD), 0, Math.cos(e * this.DEG_2_RAD), 0], [0, 0, 0, 1]])
        }, getRotationZMatrix: function (e) {
            return $M([[Math.cos(e * this.DEG_2_RAD), Math.sin(-e * this.DEG_2_RAD), 0, 0], [Math.sin(e * this.DEG_2_RAD), Math.cos(e * this.DEG_2_RAD), 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]])
        }, getScaleMatrix: function (e, t, n) {
            var r = e, i = t, s = n;
            return $M([[r, 0, 0, 0], [0, i, 0, 0], [0, 0, s, 0], [0, 0, 0, 1]])
        }, getSkewXMatrix: function (e) {
            var t = e ? e : 1;
            return $M([[1, Math.tan(t), 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]])
        }, getSkewYMatrix: function (e) {
            var t = e ? e : 1;
            return $M([[1, 0, 0, 0], [Math.tan(t), 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]])
        }, getTransformationMatrix: function (e, t, n) {
            var r = e ? e : 0, i = t ? t : 0, s = n ? n : 0;
            return $M([[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [r, i, s, 1]])
        }, getResultMatrix: function (e) {
            if (e.length === 1) return e[0];
            var t = $M([[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]]);
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                t = r.x(t)
            }
            return t
        }, getStringTransform3d: function (e) {
            var t = "matrix3d(";
            return t += e.e(1, 1).toFixed(5) + "," + e.e(1, 2).toFixed(5) + "," + e.e(1, 3).toFixed(5) + "," + e.e(1, 4).toFixed(5) + ",", t += e.e(2, 1).toFixed(5) + "," + e.e(2, 2).toFixed(5) + "," + e.e(2, 3).toFixed(5) + "," + e.e(2, 4).toFixed(5) + ",", t += e.e(3, 1).toFixed(5) + "," + e.e(3, 2).toFixed(5) + "," + e.e(3, 3).toFixed(5) + "," + e.e(3, 4).toFixed(5) + ",", t += e.e(4, 1).toFixed(5) + "," + e.e(4, 2).toFixed(5) + "," + e.e(4, 3).toFixed(5) + "," + e.e(4, 4).toFixed(5), t += ")", t
        }, getStringTranslate2d: function (e, t) {
            var n = "translate(";
            return n += e + "px,", n += t + "px)", n
        }, getStringScale2d: function (e, t) {
            var n = "scale(";
            return n += e + ",", n += t + ")", n
        }, getObjectTopLeft: function (e, t) {
            var n = {left: e + "px", top: t + "px"};
            return n
        }
    };
    return t
}), define("controller/scroll_controller", ["jquery", "config", "underscore", "backbone"], function (e, t, n, r) {
    var i = function () {
    };
    return n.extend(i.prototype, r.Events), n.extend(i.prototype, {
        $window: null,
        $target: null,
        dispatcher: null,
        timeoutI: null,
        isBlock: !1,
        scrollSpeed: 0,
        prevScrollTop: 0,
        posYStart: 0,
        posYTotal: 0,
        scrollY: 0,
        pageHeight: 0,
        init: function (r) {
            this.$target = r, this.$window = e(window), n.bindAll(this, "scrollHandler", "touchStartHandler", "touchMoveHandler", "touchEndHandler"), !t.TABLET && !t.MOBILE ? (this.setPosition(0), this.$target.on("scroll", this.scrollHandler)) : this.startTouch()
        },
        setPosition: function (e) {
            this.$target.scrollTop(e), this.scrollY = e, this.posYTotal = e
        },
        startTouch: function () {
            window.addEventListener("touchstart", this.touchStartHandler, {passive: !1}), window.addEventListener("touchmove", this.touchMoveHandler, {passive: !1}), window.addEventListener("touchend", this.touchEndHandler, {passive: !1})
        },
        endTouch: function () {
            window.removeEventListener("touchstart", this.touchStartHandler, {passive: !1}), window.removeEventListener("touchmove", this.touchMoveHandler, {passive: !1}), window.removeEventListener("touchend", this.touchEndHandler, {passive: !1})
        },
        affectHeight: function (n, r) {
            this.pageHeight = n;
            var i = e("#forceHeight");
            i.length === 0 && (i = e('<div id="forceHeight"></div>'), t.MOBILE ? e("body").append(i) : e("body").append(i)), i.css({
                width: "1px",
                height: n + "px",
                position: "absolute",
                top: "0",
                left: "0"
            }), t.TOUCH && !r || !t.TOUCH
        },
        scrollHandler: function (e) {
            var t = this.$target.scrollTop();
            this.scrollY = t, this.trigger("scroll_change", t, this.prevScrollTop), this.prevScrollTop = t
        },
        touchStartHandler: function (e) {
            this.isTouchDown = !0, this.posYStart = -e.touches[0].pageY
        },
        touchMoveHandler: function (e) {
            e.preventDefault();
            var t = -e.touches[0].pageY, n = (t - this.posYStart) * 1.4;
            this.scrollY = this.posYTotal + n, this.scrollY < 0 && (this.scrollY = 0), this.scrollY > this.pageHeight - this.$window.height() && (this.scrollY = this.pageHeight - this.$window.height()), this.trigger("scroll_change", this.scrollY), this.scrollY + this.$window.height() >= this.pageHeight && (this.delayT = setTimeout(this.delayCall, 500))
        },
        touchEndHandler: function (e) {
            this.isTouchDown = !1, this.posYTotal = this.scrollY
        },
        affectIpadScroll: function (e) {
            this.scrollY = e, this.trigger("scroll_change", this.scrollY), this.isTouchDown = !1, this.posYTotal = this.scrollY, this.scrollY + this.$window.height() >= this.pageHeight && (this.delayT = setTimeout(this.delayCall, 500), this.isLearnMore = !0)
        },
        destroy: function () {
            this.$target.off("scroll", this.scrollHandler);
            var t = e("#forceHeight");
            t.length > 0 && t.remove()
        }
    }), i
}), define("view/pages/presentation", ["jquery", "underscore", "backbone", "config", "tweenmax", "router", "util/AnimationUtils", "controller/scroll_controller", "model/app_model", "view/common/base_view"], function (e, t, n, r, i, s, o, u, a, f) {
    "use strict";
    return f.extend({
        visible: !1, scrollY: 0, targetY: 0, ease: .1, initialize: function (e) {
            t.bindAll(this, "destroy", "onWTouchStart", "onWTouchMove", "onWTouchEnd", "onHideComplete", "onTAComplete"), this.route = e.route, this.$parent = this.$el.parent(), this.$el.detach(), this.tweenObjO = {value: 0}, this.tweenObjA = {value: 1}, this.tweenObjAH = {value: 0}, this.tweenObjTA = {value: 0}, this.$content = this.$(".content")
        }, addEvents: function () {
            n.on("active:mousesenter", this.onActiveMouseEnter, this), n.on("active:mousesleave", this.onActiveMouseLeave, this)
        }, removeEvents: function () {
            n.off("active:mousesenter", this.onActiveMouseEnter, this), n.off("active:mousesleave", this.onActiveMouseLeave, this)
        }, onActiveMouseEnter: function () {
            i.killTweensOf(this.tweenObjAH), i.to(this.tweenObjAH, .8, {value: 1, ease: "Expo.easeOut"})
        }, onActiveMouseLeave: function () {
            i.killTweensOf(this.tweenObjAH), i.to(this.tweenObjAH, 1, {value: 0, ease: "Expo.easeOut"})
        }, onResize: function (e, t) {
            e ? (this.wW = e, this.wH = t) : (this.wW = a.get("$window").width(), this.wH = a.get("$window").height()), this.width = this.wW * .9, this.left = this.wW * .1, this.$el.css({
                left: this.left,
                width: this.width
            }), this.scrollHeight = this.$content.outerHeight(), this.scroll_controller && this.scroll_controller.affectHeight(this.scrollHeight)
        }, show: function (e) {
            this.visible || (this.visible = !0, this.$parent.append(this.$el), this.createScroll(), this.onResize(), this.addAnimFrame(), this.addEvents(), this.scrollY = 0, this.targetY = this.scrollY, i.killTweensOf(this.tweenObjAH), this.tweenObjAH.value = 0, i.killTweensOf(this.tweenObjO), i.to(this.tweenObjO, 1.4, {
                value: 1,
                ease: "Sine.easeOut"
            }), i.killTweensOf(this.tweenObjA), i.to(this.tweenObjA, 1.4, {value: 0, ease: "Expo.easeOut"}))
        }, hide: function () {
            this.visible && (this.visible = !1, this.destroyScroll(), this.removeEvents(), i.killTweensOf(this.tweenObjO), i.to(this.tweenObjO, .2, {
                value: 0,
                ease: "Sine.easeOut",
                onComplete: this.onHideComplete
            }), i.killTweensOf(this.tweenObjA), i.to(this.tweenObjA, .3, {value: 1, ease: "Quart.easeIn"}))
        }, onHideComplete: function () {
            this.$el.detach(), this.removeAnimFrame()
        }, out: function () {
            this.destroy()
        }, loop: function () {
            this.targetY += (this.scrollY - this.targetY) * this.ease, this.curX = this.tweenObjAH.value * a.get("hoverOutDistance") * (1 - this.tweenObjA.value), this.rotationY = this.tweenObjA.value * 5, r.TOUCH ? this.rotationY !== this.prevRY && this.affectCssR(this.$content, this.rotationY) : (this.prevY !== this.targetY || this.curX !== this.prevX || this.rotationY !== this.prevRY) && this.affectCss(this.$content, this.curX, -this.targetY, 0, this.rotationY), this.prevY = this.targetY, this.prevX = this.curX, this.prevRY = this.rotationY, this.$content[0].style.opacity = this.tweenObjO.value - this.tweenObjAH.value * .95 * this.tweenObjO.value
        }, render: function () {
        }, destroy: function () {
            this.$node.remove()
        }, onScrollChange: function (e) {
            this.scrollY = e
        }, onWTouchStart: function (e) {
            this.startTX = e.originalEvent.targetTouches[0].clientX, this.startTY = e.originalEvent.targetTouches[0].clientY, this.startTotal = this.scrollY, this.ease = 1
        }, onWTouchEnd: function (e) {
            this.curTX = e.originalEvent.changedTouches[0].clientX, this.curTY = e.originalEvent.changedTouches[0].clientY, this.scrollY += this.startTY - this.curTY, this.scrollY > this.scrollHeight - this.wH ? this.scrollY = this.scrollHeight - this.wH : this.scrollY < 0 && (this.scrollY = 0), this.ease = .1
        }, onWTouchMove: function (e) {
            this.curTX = e.originalEvent.targetTouches[0].clientX, this.curTY = e.originalEvent.targetTouches[0].clientY, this.scrollY = this.startTotal - (this.curTY - this.startTY) * 1, this.scrollY > this.scrollHeight - this.wH ? this.scrollY = this.scrollHeight - this.wH : this.scrollY < 0 && (this.scrollY = 0)
        }, createScroll: function () {
            r.TOUCH ? (i.killTweensOf(this.tweenObjTA), this.$el.addClass("touch-active")) : (this.scroll_controller = new u, this.scroll_controller.init(a.get("$window")), this.scroll_controller.on("scroll_change", this.onScrollChange, this))
        }, destroyScroll: function () {
            r.TOUCH ? (i.killTweensOf(this.tweenObjTA), this.tweenObjTA.value = 0, i.to(this.tweenObjTA, .5, {
                value: 0,
                ease: "Expo.easeOut",
                onComplete: this.onTAComplete
            })) : this.scroll_controller && (this.scroll_controller.off("scroll_change", this.onScrollChange, this), this.scroll_controller.destroy(), this.scroll_controller = null)
        }, onTAComplete: function () {
            this.$el.removeClass("touch-active")
        }, affectCss: function (e, t, n, r, i) {
            var s = {}, u = null, a = o.getTransformationMatrix(t, n, r), f = o.getRotationYMatrix(i),
                l = o.getResultMatrix([a, f]), c = o.getStringTransform3d(l);
            s[u] = c, this.applyCSS(e, c)
        }, affectCssR: function (e, t) {
            var n = {}, r = null, i = o.getRotationYMatrix(t), s = o.getStringTransform3d(i);
            n[r] = s, this.applyCSS(e, s)
        }, applyCSS: function (e, t) {
            e[0].style.webkitTransform = t, e[0].style.MozTransform = t, e[0].style.msTransform = t, e[0].style.OTransform = t, e[0].style.transform = t
        }
    })
}), define("model/modules/clients_model", ["backbone"], function (e) {
    var t = e.Model.extend({
        defaults: {hoverIndex: -1}, initialize: function () {
        }
    });
    return t
}), define("view/modules/clients/client-item", ["backbone", "jquery", "underscore", "tweenmax", "config", "router", "model/app_model", "util/AnimationUtils"], function (e, t, n, r, i, s, o, u) {
    "use strict";
    return e.View.extend({
        scrollY: 0, targetY: 0, tweeenH: 0, attached: !0, active: !0, initialize: function (e) {
            n.bindAll(this, "destroy", "onMouseEnter", "onMouseLeave", "onClick", "onTouchEnd"), this.clientsModel = e.clientsModel, this.index = e.index, this.total = e.total, this.$h3 = this.$("h3"), this.$content = this.$(".content"), this.tweenObjO = {value: 0}, this.tweenObjA = {value: 1}, this.tweenObjH = {value: 0}, this.tweenObjE = {value: 0}, this.tweenObjEO = {value: 0}, this.tweenObjAH = {value: 0}, this.addEvents(), this.onResize(), this.$parent = this.$el.parent()
        }, expand: function () {
            this.expanded || (this.expanded = !0, r.killTweensOf(this.tweenObjE), r.to(this.tweenObjE, 1, {
                value: 1,
                ease: "Expo.easeOut"
            }), r.killTweensOf(this.tweenObjEO), r.to(this.tweenObjEO, 1, {value: 1, ease: "Expo.easeOut"}))
        }, collapse: function () {
            this.expanded && (this.expanded = !1, r.killTweensOf(this.tweenObjE), r.to(this.tweenObjE, 1, {
                value: 0,
                ease: "Expo.easeOut"
            }), r.killTweensOf(this.tweenObjEO), r.to(this.tweenObjEO, .4, {value: 0, ease: "Expo.easeOut"}))
        }, show: function () {
            this.delay = this.index * .07, i.TOUCH && (this.delay = 0), r.killTweensOf(this.tweenObjO), r.to(this.tweenObjO, 1.4, {
                value: 1,
                ease: "Sine.easeOut",
                delay: this.delay
            }), r.killTweensOf(this.tweenObjA), r.to(this.tweenObjA, 1.4, {
                value: 0,
                ease: "Expo.easeOut",
                delay: this.delay
            }), r.killTweensOf(this.tweenObjAH), this.tweenObjAH.value = 0, this.scrollY = 0, this.targetY = this.scrollY
        }, hide: function () {
            r.killTweensOf(this.tweenObjO), r.to(this.tweenObjO, .2, {
                value: 0,
                ease: "Sine.easeInOut"
            }), r.killTweensOf(this.tweenObjA), r.to(this.tweenObjA, .3, {
                value: 1,
                ease: "Quint.easeOut"
            }), this.collapse()
        }, onActiveMouseEnter: function () {
            r.killTweensOf(this.tweenObjAH), r.to(this.tweenObjAH, .8, {value: 1, ease: "Expo.easeOut"})
        }, onActiveMouseLeave: function () {
            r.killTweensOf(this.tweenObjAH), r.to(this.tweenObjAH, 1, {value: 0, ease: "Expo.easeOut"})
        }, addEvents: function () {
            this.hasEvents || (this.hasEvents = !0, this.clientsModel.on("change:hoverItem", this.onHoverItemChange, this), i.TOUCH ? this.$h3.on("touchend", this.onTouchEnd) : (this.$h3.on("mouseenter", this.onMouseEnter), this.$h3.on("mouseleave", this.onMouseLeave), this.$h3.on("click", this.onClick)))
        }, removeEvents: function () {
            this.hasEvents && (this.hasEvents = !1, this.clientsModel.off("change:hoverItem", this.onHoverItemChange, this), i.TOUCH ? this.$h3.off("touchend", this.onTouchEnd) : (this.$h3.off("mouseenter", this.onMouseEnter), this.$h3.off("mouseleave", this.onMouseLeave), this.$h3.off("click", this.onClick)))
        }, onMouseEnter: function () {
            this.clientsModel.set("hoverItem", this.index)
        }, onMouseLeave: function () {
            this.clientsModel.set("hoverItem", -1)
        }, onClick: function () {
            this.expanded ? this.collapse() : this.expand(), this.trigger("height:change")
        }, onTouchEnd: function () {
            o.get("click") && this.onClick()
        }, onHoverItemChange: function () {
            var e = this.clientsModel.get("hoverItem");
            e !== -1 ? e === this.index ? this.hoverItem(!0) : this.hoverItem(!1) : this.hoverItem(!1)
        }, hoverItem: function (e) {
            r.killTweensOf(this.tweenObjH), e ? r.to(this.tweenObjH, .3, {
                value: 1,
                ease: "Expo.easeOut"
            }) : r.to(this.tweenObjH, .3, {value: 0, ease: "Expo.easeOut"})
        }, onResize: function (e, t, n) {
            e && (this.wW = e, this.wH = t), this.headingHeight = this.$h3[0].offsetHeight, this.contentHeight = this.$content[0].offsetHeight, this.$content[0].style.top = this.headingHeight + "px", this.oY = n, this.padding = this.wW * .05, this.index === this.total && (this.padding = 0), this.$el[0].style.top = this.oY + "px", this.height = this.headingHeight + this.padding
        }, loop: function (e, t) {
            this.scrollY = e, this.offsetY = t, this.tweeenH = this.contentHeight * this.tweenObjE.value, this.targetY += (this.scrollY - this.targetY) * .1, this.curY = this.targetY - this.offsetY, this.curX = this.tweenObjAH.value * o.get("hoverOutDistance") * (1 - this.tweenObjA.value), this.rotationY = this.tweenObjA.value * 5, i.TOUCH ? (this.rotationY !== this.prevRY && this.affectCssR(this.$el, this.rotationY), this.$el[0].style.top = this.oY + this.offsetY + "px") : this.active && (this.curX !== this.prevX || this.curY !== this.prevY || this.rotationY !== this.prevRY) && this.affectCss(this.$el, this.curX, -this.curY, 0, this.rotationY), this.prevX = this.curX, this.prevY = this.curY, this.prevRY = this.rotationY, this.contentScaleY = this.tweenObjE.value, this.contentScaleY !== this.prevContentScaleY && this.affectCssS(this.$content, 1, this.contentScaleY, 1), this.prevContentScaleY = this.contentScaleY, this.$content[0].style.opacity = this.tweenObjEO.value, this.$el[0].style.opacity = this.tweenObjO.value - this.tweenObjAH.value * .95 * this.tweenObjO.value, this.$h3[0].style.opacity = 1 - this.tweenObjH.value * .7 * this.tweenObjO.value
        }, destroy: function () {
        }, affectCss: function (e, t, n, r, i) {
            var s = {}, o = null, a = u.getTransformationMatrix(t, n, r), f = u.getRotationYMatrix(i),
                l = u.getResultMatrix([a, f]), c = u.getStringTransform3d(l);
            s[o] = c, this.applyCSS(e, c)
        }, affectCssS: function (e, t, n) {
            var r = {}, i = null, s = u.getScaleMatrix(t, n, 1), o = u.getStringTransform3d(s);
            r[i] = o, this.applyCSS(e, o)
        }, affectCssR: function (e, t) {
            var n = {}, r = null, i = u.getRotationYMatrix(t), s = u.getStringTransform3d(i);
            n[r] = s, this.applyCSS(e, s)
        }, applyCSS: function (e, t) {
            e[0].style.webkitTransform = t, e[0].style.MozTransform = t, e[0].style.msTransform = t, e[0].style.OTransform = t, e[0].style.transform = t
        }, setActive: function () {
            this.active || (this.active = !0, this.attach())
        }, setInactive: function () {
            this.active && (this.active = !1, this.detach(), this.affectCss(this.$el, this.curX, -this.wH - this.oY, 0, this.rotationY))
        }, attach: function () {
            this.attached || (this.attached = !0, this.$parent.append(this.$el))
        }, detach: function () {
            this.attached && (this.attached = !1, this.$el.detach())
        }
    })
}), define("view/pages/clients", ["jquery", "underscore", "backbone", "config", "tweenmax", "router", "util/AnimationUtils", "model/app_model", "controller/scroll_controller", "model/modules/clients_model", "view/common/base_view", "view/modules/clients/client-item"], function (e, t, n, r, i, s, o, u, a, f, l, c) {
    "use strict";
    return l.extend({
        visible: !1, scrollY: 0, targetY: 0, ease: .1, cItemOffsetY: 0, initialize: function (e) {
            t.bindAll(this, "destroy", "onHideComplete", "onWTouchStart", "onWTouchMove", "onWTouchEnd", "onTAComplete"), this.route = e.route, this.$parent = this.$el.parent(), this.$el.detach(), this.clientsModel = new f, this.tweenObjA = {value: 0}, this.tweenObjO = {value: 0}, this.tweenObjTA = {value: 0}, this.$content = this.$(".content"), this.createItems()
        }, createItems: function () {
            var e = this.$el.find(".client-item");
            this.items = [];
            for (var t = 0; t < e.length; t++) {
                var n = new c({el: e[t], index: t, total: e.length - 1, clientsModel: this.clientsModel});
                n.on("height:change", this.onItemHeightChange, this), this.items.push(n)
            }
        }, onItemHeightChange: function () {
            this.onResize()
        }, addEvents: function () {
            n.on("active:mousesenter", this.onActiveMouseEnter, this), n.on("active:mousesleave", this.onActiveMouseLeave, this)
        }, removeEvents: function () {
            n.off("active:mousesenter", this.onActiveMouseEnter, this), n.off("active:mousesleave", this.onActiveMouseLeave, this)
        }, onActiveMouseEnter: function () {
            for (var e = 0; e < this.items.length; e++) this.items[e].onActiveMouseEnter()
        }, onActiveMouseLeave: function () {
            for (var e = 0; e < this.items.length; e++) this.items[e].onActiveMouseLeave()
        }, onResize: function (e, t) {
            e ? (this.wW = e, this.wH = t) : (this.wW = u.get("$window").width(), this.wH = u.get("$window").height()), this.width = this.wW * .9, this.left = this.wW * .1, this.$el.css({
                left: this.left,
                width: this.width
            }), this.topBottomPadding = this.wW * .05, this.scrollHeight = this.topBottomPadding, r.MOBILE && (this.scrollHeight = 50);
            for (var n = 0; n < this.items.length; n++) this.items[n].onResize(this.wW, this.wH, this.scrollHeight), this.scrollHeight += this.items[n].height;
            r.MOBILE || (this.scrollHeight += this.topBottomPadding), this.scroll_controller && this.scroll_controller.affectHeight(this.scrollHeight + this.cItemOffsetY), this.padding = this.wH * .1
        }, show: function (e) {
            if (!this.visible) {
                this.visible = !0, this.$parent.append(this.$el), this.addEvents();
                for (var t = 0; t < this.items.length; t++) this.items[t].show();
                this.createScroll(), this.onResize(), this.addAnimFrame(), this.scrollY = 0, this.targetY = this.scrollY, i.killTweensOf(this.tweenObjO), i.to(this.tweenObjO, 1, {
                    value: 1,
                    ease: "Sine.easeInOut"
                })
            }
        }, hide: function () {
            if (this.visible) {
                this.visible = !1, this.destroyScroll(), this.removeEvents(), i.killTweensOf(this.tweenObjO), i.to(this.tweenObjO, .2, {
                    value: 0,
                    ease: "Sine.easeOut",
                    onComplete: this.onHideComplete
                });
                for (var e = 0; e < this.items.length; e++) this.items[e].hide()
            }
        }, onHideComplete: function () {
            this.$el.detach(), this.removeAnimFrame()
        }, out: function () {
            this.destroy()
        }, loop: function () {
            this.cItemOffsetY = 0;
            for (var e = 0; e < this.items.length; e++) this.items[e].loop(this.scrollY, this.cItemOffsetY), this.cItemOffsetY += this.items[e].tweeenH;
            this.scroll_controller && this.scroll_controller.affectHeight(this.scrollHeight + this.cItemOffsetY)
        }, checkBorders: function (e) {
            e.oY - e.curY < this.wH + this.padding && e.oY - e.curY + e.height > 0 - this.padding ? e.setActive() : e.setInactive()
        }, render: function () {
        }, destroy: function () {
            this.$node.remove()
        }, onScrollChange: function (e) {
            this.scrollY = e
        }, onWTouchStart: function (e) {
            this.startTX = e.originalEvent.targetTouches[0].clientX, this.startTY = e.originalEvent.targetTouches[0].clientY, this.startTotal = this.scrollY, this.ease = 1
        }, onWTouchEnd: function (e) {
            this.curTX = e.originalEvent.changedTouches[0].clientX, this.curTY = e.originalEvent.changedTouches[0].clientY, this.scrollY += this.startTY - this.curTY, this.scrollY > this.scrollHeight - this.wH ? this.scrollY = this.scrollHeight - this.wH : this.scrollY < 0 && (this.scrollY = 0), this.ease = .1
        }, onWTouchMove: function (e) {
            this.curTX = e.originalEvent.targetTouches[0].clientX, this.curTY = e.originalEvent.targetTouches[0].clientY, this.scrollY = this.startTotal - (this.curTY - this.startTY) * 1, this.scrollY > this.scrollHeight - this.wH ? this.scrollY = this.scrollHeight - this.wH : this.scrollY < 0 && (this.scrollY = 0)
        }, createScroll: function () {
            r.TOUCH ? (i.killTweensOf(this.tweenObjTA), this.$el.addClass("touch-active")) : (this.scroll_controller = new a, this.scroll_controller.init(u.get("$window")), this.scroll_controller.on("scroll_change", this.onScrollChange, this))
        }, destroyScroll: function () {
            r.TOUCH ? (i.killTweensOf(this.tweenObjTA), this.tweenObjTA.value = 0, i.to(this.tweenObjTA, .5, {
                value: 0,
                ease: "Expo.easeOut",
                onComplete: this.onTAComplete
            })) : this.scroll_controller && (this.scroll_controller.off("scroll_change", this.onScrollChange, this), this.scroll_controller.destroy(), this.scroll_controller = null)
        }, onTAComplete: function () {
            this.$el.removeClass("touch-active")
        }
    })
}), define("view/modules/workflow/workflow-image", ["backbone", "jquery", "underscore", "tweenmax", "config", "router", "model/app_model", "util/AnimationUtils"], function (e, t, n, r, i, s, o, u) {
    "use strict";
    return e.View.extend({
        scrollY: 0, targetY: 0, attached: !1, initialize: function (e) {
            n.bindAll(this, "destroy", "onMouseEnter", "onMouseLeave", "onClick", "onTouchEnd", "onAnimationOutComplete"), this.galleryModel = e.galleryModel, this.index = e.index, this.$h3 = this.$("h3"), this.$content = this.$(".content"), this.tweenObjO = {value: 0}, this.tweenObjA = {value: -1}, this.tweenObjH = {value: 0}, this.src = this.$el.attr("data-image"), this.randomRotation = 40, this.addEvents(), this.loadImage(), this.$parent = this.$el.parent(), this.$el.detach()
        }, loadImage: function () {
            this.img = new Image, this.img.onload = this.onImageLoad.bind(this), this.img.src = this.src
        }, onImageLoad: function () {
            this.$el.css({
                "background-image": "url(" + this.src + ")",
                "background-size": "cover"
            }), this.index === 0 ? (r.killTweensOf(this.tweenObjO), this.tweenObjO.value = 0, r.to(this.tweenObjO, 1, {
                value: 1,
                ease: "Sine.easeInOut"
            }), r.killTweensOf(this.tweenObjA), this.tweenObjA.value = 0, this.attach()) : this.onCIndexChange()
        }, show: function () {
        }, hide: function () {
        }, addEvents: function () {
            this.hasEvents || (this.hasEvents = !0, this.galleryModel.on("change:cindex", this.onCIndexChange, this), i.TOUCH ? this.$h3.on("touchend", this.onTouchEnd) : this.$h3.on("click", this.onClick))
        }, removeEvents: function () {
            this.hasEvents && (this.hasEvents = !1, this.galleryModel.off("change:cindex", this.onCIndexChange, this), i.TOUCH ? this.$h3.off("touchend", this.onTouchEnd) : this.$h3.off("click", this.onClick))
        }, onMouseEnter: function () {
            this.workflowModel.set("hoverItem", this.index)
        }, onMouseLeave: function () {
            this.workflowModel.set("hoverItem", -1)
        }, onClick: function () {
        }, onTouchEnd: function () {
            o.get("click") && this.onClick()
        }, onCIndexChange: function () {
            var e = this.galleryModel.get("cindex"), t = this.galleryModel.get("dir");
            r.killTweensOf(this.tweenObjA);
            if (this.index === e) {
                var n = 0;
                this.tweenObjA.value = 1 * t, r.to(this.tweenObjA, 1, {
                    value: 0,
                    ease: "Expo.easeOut",
                    delay: n
                }), r.killTweensOf(this.tweenObjO), this.tweenObjO.value = 0, r.to(this.tweenObjO, 1, {
                    value: 1,
                    ease: "Sine.easeInOut",
                    delay: n
                }), this.attach()
            } else i.MOBILE && (this.randomX = 0), r.to(this.tweenObjA, 1, {
                value: 1 * -t,
                ease: "Expo.easeOut",
                onComplete: this.onAnimationOutComplete
            }), r.killTweensOf(this.tweenObjO), r.to(this.tweenObjO, .7, {value: 0, ease: "Sine.easeInOut"})
        }, onAnimationOutComplete: function () {
            this.detach()
        }, hoverItem: function (e) {
            r.killTweensOf(this.tweenObjH), e ? r.to(this.tweenObjH, .3, {
                value: 1,
                ease: "Sine.easeOut"
            }) : r.to(this.tweenObjH, .3, {value: 0, ease: "Sine.easeOut"})
        }, onResize: function (e) {
            this.cW = e
        }, loop: function (e) {
            this.curX = this.tweenObjA.value * this.cW, this.curY = 0, this.curZ = 0, this.rotationY = this.tweenObjA.value * this.randomRotation * 0, (this.curX !== this.prevX || this.curY !== this.prevY || this.curZ !== this.prevZ) && this.affectCss(this.$el, this.curX, 0, this.curZ, this.rotationY), this.prevX = this.curX, this.prevY = this.curY, this.prevZ = this.curZ, this.$el[0].style.opacity = 1
        }, destroy: function () {
        }, affectCss: function (e, t, n, r, i) {
            var s = {}, o = null, a = u.getTransformationMatrix(t, n, r), f = u.getStringTransform3d(a);
            s[o] = f, this.applyCSS(e, f)
        }, applyCSS: function (e, t) {
            e[0].style.webkitTransform = t, e[0].style.MozTransform = t, e[0].style.msTransform = t, e[0].style.OTransform = t, e[0].style.transform = t
        }, attach: function () {
            this.attached || (this.attached = !0, this.$parent.append(this.$el))
        }, detach: function () {
            this.attached && (this.attached = !1, this.$el.detach())
        }
    })
}), define("view/modules/workflow/workflow-video", ["backbone", "jquery", "underscore", "tweenmax", "config", "router", "model/app_model", "util/AnimationUtils"], function (e, t, n, r, i, s, o, u) {
    "use strict";
    return e.View.extend({
        scrollY: 0, targetY: 0, attached: !1, initialize: function (e) {
            n.bindAll(this, "destroy", "onMouseEnter", "onMouseLeave", "onClick", "onTouchEnd", "onAnimationInComplete", "onAnimationOutComplete", "onCanPlay", "onVideoOutComplete"), this.galleryModel = e.galleryModel, this.index = e.index, this.$h3 = this.$("h3"), this.$content = this.$(".content"), this.tweenObjO = {value: 0}, this.tweenObjA = {value: -1}, this.tweenObjH = {value: 0}, this.imageSrc = this.$el.attr("data-image"), this.videoSrc = this.$el.attr("data-video"), this.video = document.createElement("video"), this.video.muted = !0, this.video.oncanplay = this.onCanPlay, this.$video = t(this.video), this.addEvents(), this.loadImage(), this.$parent = this.$el.parent(), this.$el.detach()
        }, loadImage: function () {
            this.img = new Image, this.img.onload = this.onImageLoad.bind(this), this.img.src = this.imageSrc
        }, onImageLoad: function () {
            this.$el.css({
                "background-image": "url(" + this.imageSrc + ")",
                "background-size": "cover"
            }), this.index === 0 ? (r.killTweensOf(this.tweenObjO), this.tweenObjO.value = 0, r.to(this.tweenObjO, 1, {
                value: 1,
                ease: "Sine.easeInOut"
            }), r.killTweensOf(this.tweenObjA), this.tweenObjA.value = 0, this.loadVideo(), this.attach()) : this.onCIndexChange()
        }, show: function () {
        }, hide: function () {
        }, addEvents: function () {
            this.hasEvents || (this.hasEvents = !0, this.galleryModel.on("change:cindex", this.onCIndexChange, this), i.TOUCH ? this.$h3.on("touchend", this.onTouchEnd) : this.$h3.on("click", this.onClick))
        }, removeEvents: function () {
            this.hasEvents && (this.hasEvents = !1, this.galleryModel.off("change:cindex", this.onCIndexChange, this), i.TOUCH ? this.$h3.off("touchend", this.onTouchEnd) : this.$h3.off("click", this.onClick))
        }, onMouseEnter: function () {
            this.workflowModel.set("hoverItem", this.index)
        }, onMouseLeave: function () {
            this.workflowModel.set("hoverItem", -1)
        }, onClick: function () {
        }, onTouchEnd: function () {
            o.get("click") && this.onClick()
        }, onCIndexChange: function () {
            var e = this.galleryModel.get("cindex"), t = this.galleryModel.get("dir");
            r.killTweensOf(this.tweenObjA);
            if (this.index === e) {
                this.attach();
                var n = 0;
                this.tweenObjA.value = 1 * t, r.to(this.tweenObjA, 1, {
                    value: 0,
                    ease: "Expo.easeOut",
                    delay: n,
                    onComplete: this.onAnimationInComplete
                }), r.killTweensOf(this.tweenObjO), this.tweenObjO.value = 0, r.to(this.tweenObjO, 1, {
                    value: 1,
                    ease: "Sine.easeInOut",
                    delay: n
                }), this.attach()
            } else i.MOBILE && (this.randomX = 0), this.removeVideo(), r.to(this.tweenObjA, 1, {
                value: 1 * -t,
                ease: "Expo.easeOut",
                onComplete: this.onAnimationOutComplete
            }), r.killTweensOf(this.tweenObjO), r.to(this.tweenObjO, .7, {value: 0, ease: "Sine.easeInOut"})
        }, onAnimationInComplete: function () {
            this.loadVideo()
        }, onAnimationOutComplete: function () {
            this.detach()
        }, hoverItem: function (e) {
            r.killTweensOf(this.tweenObjH), e ? r.to(this.tweenObjH, .3, {
                value: 1,
                ease: "Sine.easeOut"
            }) : r.to(this.tweenObjH, .3, {value: 0, ease: "Sine.easeOut"})
        }, loadVideo: function () {
            this.video.src = this.videoSrc, this.$el.append(this.video)
        }, removeVideo: function () {
            r.killTweensOf(this.video), r.to(this.video, .4, {
                opacity: 0,
                ease: "Sine.easeInOut",
                force3D: !0,
                onComplete: this.onVideoOutComplete
            })
        }, onCanPlay: function () {
            r.killTweensOf(this.video), r.to(this.video, 1, {
                opacity: 1,
                ease: "Sine.easeInOut",
                force3D: !0
            }), this.video.play()
        }, onVideoOutComplete: function () {
            this.video.src = "", this.$video.detach()
        }, onResize: function (e) {
            this.cW = e
        }, loop: function (e) {
            this.curX = this.tweenObjA.value * this.cW, this.curY = 0, this.curZ = 0, this.rotationY = this.tweenObjA.value * this.randomRotation * 0, (this.curX !== this.prevX || this.curY !== this.prevY || this.curZ !== this.prevZ) && this.affectCss(this.$el, this.curX, 0, this.curZ, this.rotationY), this.prevX = this.curX, this.prevY = this.curY, this.prevZ = this.curZ, this.$el[0].style.opacity = 1
        }, destroy: function () {
        }, affectCss: function (e, t, n, r, i) {
            var s = {}, o = null, a = u.getTransformationMatrix(t, n, r), f = u.getStringTransform3d(a);
            s[o] = f, this.applyCSS(e, f)
        }, applyCSS: function (e, t) {
            e[0].style.webkitTransform = t, e[0].style.MozTransform = t, e[0].style.msTransform = t, e[0].style.OTransform = t, e[0].style.transform = t
        }, attach: function () {
            this.attached || (this.attached = !0, this.$parent.append(this.$el))
        }, detach: function () {
            this.attached && (this.attached = !1, this.$el.detach())
        }
    })
}), define("model/modules/gallery_model", ["backbone"], function (e) {
    var t = e.Model.extend({
        defaults: {cindex: 0}, initialize: function () {
        }
    });
    return t
}), define("view/modules/workflow/workflow-item", ["backbone", "jquery", "underscore", "tweenmax", "config", "router", "model/app_model", "util/AnimationUtils", "view/modules/workflow/workflow-image", "view/modules/workflow/workflow-video", "model/modules/gallery_model"], function (e, t, n, r, i, s, o, u, a, f, l) {
    "use strict";
    return e.View.extend({
        scrollY: 0, targetY: 0, prevActive: -1, attached: !0, initialize: function (e) {
            n.bindAll(this, "destroy", "onMouseEnter", "onMouseLeave", "onClick", "onTouchEnd", "onImagesMouseMove", "onImagesClick", "onImagesMouseEnter", "onImagesMouseLeave"), this.workflowModel = e.workflowModel, this.index = e.index, this.total = e.total, this.$h3 = this.$("h3"), this.$content = this.$(".content"), this.$next = this.$(".next"), this.$prev = this.$(".prev"), this.$images = this.$(".images"), this.tweenObjO = {value: 0}, this.tweenObjA = {value: 1}, this.tweenObjH = {value: 0}, this.tweenObjOPrev = {value: 0}, this.tweenObjONext = {value: 0}, this.tweenObjAH = {value: 0}, this.galleryModel = new l, this.createImages(), this.addEvents(), this.onResize(), this.$parent = this.$el.parent()
        }, createImages: function () {
            this.images = [];
            var e = this.$(".workflow-citem");
            for (var n = 0; n < e.length; n++) {
                var r = t(e[n]);
                if (r.hasClass("image")) {
                    var i = new a({el: e[n], index: n, galleryModel: this.galleryModel});
                    this.images.push(i)
                } else if (r.hasClass("video")) {
                    var s = new f({el: e[n], index: n, galleryModel: this.galleryModel});
                    this.images.push(s)
                }
            }
            this.images.length === 1 && this.$images.addClass("single")
        }, show: function () {
            r.killTweensOf(this.tweenObjO), r.to(this.tweenObjO, 1.4, {
                value: 1,
                ease: "Sine.easeOut",
                delay: this.index * .07
            }), r.killTweensOf(this.tweenObjA), r.to(this.tweenObjA, 1.1, {
                value: 0,
                ease: "Expo.easeOut",
                delay: this.index * .07
            }), r.killTweensOf(this.tweenObjAH), this.tweenObjAH.value = 0, this.scrollY = 0, this.targetY = this.scrollY
        }, hide: function () {
            r.killTweensOf(this.tweenObjO), r.to(this.tweenObjO, .2, {
                value: 0,
                ease: "Sine.easeInOut"
            }), r.killTweensOf(this.tweenObjA), r.to(this.tweenObjA, .3, {value: 1, ease: "Quint.easeOut"})
        }, onActiveMouseEnter: function () {
            r.killTweensOf(this.tweenObjAH), r.to(this.tweenObjAH, .8, {value: 1, ease: "Expo.easeOut"})
        }, onActiveMouseLeave: function () {
            r.killTweensOf(this.tweenObjAH), r.to(this.tweenObjAH, 1, {value: 0, ease: "Expo.easeOut"})
        }, addEvents: function () {
            this.hasEvents || (this.hasEvents = !0, this.workflowModel.on("change:hoverItem", this.onHoverItemChange, this), i.TOUCH ? this.$images.on("touchend", this.onImagesClick) : this.images.length > 1 && (this.$images.on("mousemove", this.onImagesMouseMove), this.$images.on("mouseenter", this.onImagesMouseEnter), this.$images.on("mouseleave", this.onImagesMouseLeave), this.$images.on("click", this.onImagesClick)))
        }, removeEvents: function () {
            this.hasEvents && (this.hasEvents = !1, this.workflowModel.off("change:hoverItem", this.onHoverItemChange, this), i.TOUCH ? this.$images.off("touchend", this.onImagesClick) : (this.$images.off("mousemove", this.onImagesMouseMove), this.$images.off("mouseenter", this.onImagesMouseEnter), this.$images.off("mouseleave", this.onImagesMouseLeave), this.$images.off("click", this.onImagesClick)))
        }, onMouseEnter: function () {
            this.workflowModel.set("hoverItem", this.index)
        }, onMouseLeave: function () {
            this.workflowModel.set("hoverItem", -1)
        }, onClick: function () {
        }, onImagesMouseMove: function (e) {
            this.imageMx = e.clientX - this.width / 2, this.imageMx = e.offsetX, this.imageMy = e.offsetY
        }, onImagesClick: function (e) {
            var t = this.galleryModel.get("cindex");
            o.get("click") && (this.galleryModel.set("dir", 1), t + 1 < this.images.length ? this.galleryModel.set("cindex", t + 1) : this.galleryModel.set("cindex", 0))
        }, onImagesMouseEnter: function (e) {
            this.mouseOverImages = !0, this.imageMx = e.clientX - this.width / 2, r.killTweensOf(this.tweenObjONext), r.to(this.tweenObjONext, .3, {
                value: 1,
                ease: "Sine.easeInOut"
            })
        }, onImagesMouseLeave: function () {
            this.mouseOverImages = !1, r.killTweensOf(this.tweenObjONext), r.to(this.tweenObjONext, .15, {
                value: 0,
                ease: "Sine.easeOut"
            })
        }, checkMousePos: function () {
        }, onTouchEnd: function () {
            o.get("click") && this.onClick()
        }, onHoverItemChange: function () {
            var e = this.workflowModel.get("hoverItem");
            e !== -1 ? e === this.index ? this.hoverItem(!0) : this.hoverItem(!1) : this.hoverItem(!0)
        }, hoverItem: function (e) {
            r.killTweensOf(this.tweenObjH), e ? r.to(this.tweenObjH, .3, {
                value: 1,
                ease: "Expo.easeOut"
            }) : r.to(this.tweenObjH, .3, {value: 0, ease: "Expo.easeOut"})
        }, onResize: function (e, t, n) {
            e && (this.wW = e, this.wH = t), this.imagesWrapWidth = this.$images.width(), this.oY = n, this.wW > i.MOBILE_WIDTH ? (this.padding = this.wW * .15, this.index === this.total && (this.padding = 0), this.innerHeight = this.wW * .29, this.height = this.innerHeight + this.padding, this.$el[0].style.height = this.innerHeight + "px") : (this.padding = this.wW * .15, this.index === this.total && (this.padding = 0), this.$el.css("height", ""), this.innerHeight = this.$el[0].offsetHeight, this.height = this.innerHeight + this.padding), this.$el[0].style.top = this.oY + "px";
            for (var r = 0; r < this.images.length; r++) this.images[r].onResize(this.imagesWrapWidth)
        }, loop: function (e) {
            this.scrollY = e, this.targetY += (this.scrollY - this.targetY) * .1, this.curX = this.tweenObjAH.value * o.get("hoverOutDistance") * (1 - this.tweenObjA.value), this.rotationY = this.tweenObjA.value * 5, i.TOUCH ? this.rotationY !== this.prevRY && this.affectCssR(this.$el, this.rotationY) : this.active && (this.curX !== this.prevX || this.targetY !== this.prevTY || this.rotationY !== this.prevRY) && this.affectCss(this.$el, this.curX, -this.targetY, 0, this.rotationY), this.prevX = this.curX, this.prevTY = this.targetY, this.prevRY = this.rotationY, this.$el[0].style.opacity = this.tweenObjO.value - this.tweenObjAH.value * .95 * this.tweenObjO.value, this.mouseOverImages && this.checkMousePos();
            for (var t = 0; t < this.images.length; t++) this.images[t].loop();
            this.$next[0].style.opacity = this.tweenObjONext.value, this.affectCss(this.$next, this.imageMx, this.imageMy, 0, 0)
        }, destroy: function () {
        }, affectCss: function (e, t, n, r, i) {
            var s = {}, o = null, a = u.getTransformationMatrix(t, n, r), f = u.getRotationYMatrix(i),
                l = u.getResultMatrix([a, f]), c = u.getStringTransform3d(l);
            s[o] = c, this.applyCSS(e, c)
        }, affectCssR: function (e, t) {
            var n = {}, r = null, i = u.getRotationYMatrix(t), s = u.getStringTransform3d(i);
            n[r] = s, this.applyCSS(e, s)
        }, applyCSS: function (e, t) {
            e[0].style.webkitTransform = t, e[0].style.MozTransform = t, e[0].style.msTransform = t, e[0].style.OTransform = t, e[0].style.transform = t
        }, setActive: function () {
            this.active || (this.active = !0, this.attach())
        }, setInactive: function () {
            this.active && (this.active = !1, this.detach(), this.affectCss(this.$el, this.curX, -this.wH - this.oY, 0, this.rotationY))
        }, attach: function () {
            this.attached || (this.attached = !0, this.$parent.append(this.$el))
        }, detach: function () {
            this.attached && (this.attached = !1, this.$el.detach())
        }
    })
}), define("view/pages/workflow", ["jquery", "underscore", "backbone", "config", "tweenmax", "router", "util/AnimationUtils", "model/app_model", "controller/scroll_controller", "model/modules/clients_model", "view/common/base_view", "view/modules/workflow/workflow-item"], function (e, t, n, r, i, s, o, u, a, f, l, c) {
    "use strict";
    return l.extend({
        visible: !1, scrollY: 0, targetY: 0, ease: .1, initialize: function (e) {
            t.bindAll(this, "destroy", "onHideComplete", "onWTouchStart", "onWTouchMove", "onWTouchEnd", "onTAComplete"), this.route = e.route, this.$parent = this.$el.parent(), this.$el.detach(), this.workflowModel = new f, this.tweenObjA = {value: 0}, this.tweenObjO = {value: 0}, this.tweenObjTA = {value: 0}, this.$content = this.$(".content"), this.createItems()
        }, createItems: function () {
            var e = this.$el.find(".workflow-item");
            this.items = [];
            for (var t = 0; t < e.length; t++) {
                var n = new c({el: e[t], index: t, total: e.length - 1, workflowModel: this.workflowModel});
                this.items.push(n)
            }
        }, onItemHeightChange: function () {
            this.onResize()
        }, addEvents: function () {
            n.on("active:mousesenter", this.onActiveMouseEnter, this), n.on("active:mousesleave", this.onActiveMouseLeave, this)
        }, removeEvents: function () {
            n.off("active:mousesenter", this.onActiveMouseEnter, this), n.off("active:mousesleave", this.onActiveMouseLeave, this)
        }, onActiveMouseEnter: function () {
            for (var e = 0; e < this.items.length; e++) this.items[e].onActiveMouseEnter()
        }, onActiveMouseLeave: function () {
            for (var e = 0; e < this.items.length; e++) this.items[e].onActiveMouseLeave()
        }, onResize: function (e, t) {
            e ? (this.wW = e, this.wH = t) : (this.wW = u.get("$window").width(), this.wH = u.get("$window").height()), this.width = this.wW * .9, this.left = this.wW * .1, this.$el.css({
                left: this.left,
                width: this.width
            }), this.topBottomPadding = this.wW * .05, this.scrollHeight = this.topBottomPadding, r.MOBILE && (this.scrollHeight += 50);
            for (var n = 0; n < this.items.length; n++) this.items[n].onResize(this.wW, this.wH, this.scrollHeight), this.scrollHeight += this.items[n].height, r.MOBILE;
            this.scrollHeight += this.topBottomPadding, this.scroll_controller && this.scroll_controller.affectHeight(this.scrollHeight), this.padding = this.wH * .1
        }, show: function (e) {
            if (!this.visible) {
                this.visible = !0, this.$parent.append(this.$el), this.createScroll(), this.onResize(), this.addAnimFrame(), this.addEvents(), this.scrollY = 0, this.targetY = this.scrollY, i.killTweensOf(this.tweenObjO), i.to(this.tweenObjO, 1, {
                    value: 1,
                    ease: "Sine.easeInOut"
                });
                for (var t = 0; t < this.items.length; t++) this.items[t].show()
            }
        }, hide: function () {
            if (this.visible) {
                this.visible = !1, this.destroyScroll(), this.removeEvents(), i.killTweensOf(this.tweenObjO), i.to(this.tweenObjO, .2, {
                    value: 0,
                    ease: "Sine.easeOut",
                    onComplete: this.onHideComplete
                });
                for (var e = 0; e < this.items.length; e++) this.items[e].hide()
            }
        }, onHideComplete: function () {
            this.$el.detach(), this.removeAnimFrame()
        }, out: function () {
            this.destroy()
        }, loop: function () {
            for (var e = 0; e < this.items.length; e++) this.items[e].loop(this.scrollY), r.TOUCH || this.checkBorders(this.items[e])
        }, checkBorders: function (e) {
            e.oY - e.targetY < this.wH + this.padding && e.oY - e.targetY + e.height > 0 - this.padding ? e.setActive() : e.setInactive()
        }, render: function () {
        }, destroy: function () {
            this.$node.remove()
        }, onScrollChange: function (e) {
            this.scrollY = e
        }, onWTouchStart: function (e) {
            this.startTX = e.originalEvent.targetTouches[0].clientX, this.startTY = e.originalEvent.targetTouches[0].clientY, this.startTotal = this.scrollY, this.ease = 1
        }, onWTouchEnd: function (e) {
            this.curTX = e.originalEvent.changedTouches[0].clientX, this.curTY = e.originalEvent.changedTouches[0].clientY, this.scrollY += this.startTY - this.curTY, this.scrollY > this.scrollHeight - this.wH ? this.scrollY = this.scrollHeight - this.wH : this.scrollY < 0 && (this.scrollY = 0), this.ease = .1
        }, onWTouchMove: function (e) {
            this.curTX = e.originalEvent.targetTouches[0].clientX, this.curTY = e.originalEvent.targetTouches[0].clientY, this.scrollY = this.startTotal - (this.curTY - this.startTY) * 1, this.scrollY > this.scrollHeight - this.wH ? this.scrollY = this.scrollHeight - this.wH : this.scrollY < 0 && (this.scrollY = 0)
        }, createScroll: function () {
            r.TOUCH ? (i.killTweensOf(this.tweenObjTA), this.$el.addClass("touch-active")) : (this.scroll_controller = new a, this.scroll_controller.init(u.get("$window")), this.scroll_controller.on("scroll_change", this.onScrollChange, this))
        }, destroyScroll: function () {
            r.TOUCH ? (i.killTweensOf(this.tweenObjTA), this.tweenObjTA.value = 0, i.to(this.tweenObjTA, .5, {
                value: 0,
                ease: "Expo.easeOut",
                onComplete: this.onTAComplete
            })) : this.scroll_controller && (this.scroll_controller.off("scroll_change", this.onScrollChange, this), this.scroll_controller.destroy(), this.scroll_controller = null)
        }, onTAComplete: function () {
            this.$el.removeClass("touch-active")
        }
    })
}), define("view/pages/contact", ["jquery", "underscore", "backbone", "config", "tweenmax", "router", "util/AnimationUtils", "controller/scroll_controller", "model/app_model", "view/common/base_view"], function (e, t, n, r, i, s, o, u, a, f) {
    "use strict";
    return f.extend({
        visible: !1, scrollY: 0, targetY: 0, ease: .1, initialize: function (e) {
            t.bindAll(this, "destroy", "onWTouchStart", "onWTouchMove", "onWTouchEnd", "onHideComplete", "onInstaClick", "onEmailClick"), this.route = e.route, this.$parent = this.$el.parent(), this.$el.detach(), this.tweenObjO = {value: 0}, this.tweenObjA = {value: 1}, this.tweenObjAH = {value: 0}, this.$content = this.$(".content"), this.$top = this.$(".top"), this.$bottom = this.$(".bottom"), this.$street = this.$(".street"), this.$phone = this.$(".phone"), this.$streetNr = this.$(".streetnr"), this.$addressCode = this.$(".adresscode");
            var n = this.$(".mobile-social.email").text();
            n = n.split("@"), n = n[0] + "@<br>" + n[1], this.$(".mobile-social.email > p").html(n), r.MOBILE ? (this.$mInsta = this.$(".mobile-social.insta"), this.$mEmail = this.$(".mobile-social.email")) : (this.$mInsta = this.$(".dinsta"), this.$mEmail = this.$(".demail"))
        }, addEvents: function () {
            n.on("active:mousesenter", this.onActiveMouseEnter, this), n.on("active:mousesleave", this.onActiveMouseLeave, this), r.TOUCH ? (this.$mInsta.on("touchend", this.onInstaClick), this.$mEmail.on("touchend", this.onEmailClick)) : (this.$mInsta.on("click", this.onInstaClick), this.$mEmail.on("click", this.onEmailClick))
        }, removeEvents: function () {
            n.off("active:mousesenter", this.onActiveMouseEnter, this), n.off("active:mousesleave", this.onActiveMouseLeave, this), r.TOUCH ? (this.$mInsta.off("touchend", this.onInstaClick), this.$mEmail.off("touchend", this.onEmailClick)) : (this.$mInsta.off("click", this.onInstaClick), this.$mEmail.off("click", this.onEmailClick))
        }, onActiveMouseEnter: function () {
            i.killTweensOf(this.tweenObjAH), i.to(this.tweenObjAH, .8, {value: 1, ease: "Expo.easeOut"})
        }, onActiveMouseLeave: function () {
            i.killTweensOf(this.tweenObjAH), i.to(this.tweenObjAH, 1, {value: 0, ease: "Expo.easeOut"})
        }, onInstaClick: function () {
            a.get("click") && window.open("https://www.instagram.com/verticalparis", "_blank")
        }, onEmailClick: function () {
            a.get("click") && window.open("mailto:contact@verticalparis.com", "_self")
        }, onResize: function (e, t) {
            e ? (this.wW = e, this.wH = t) : (this.wW = a.get("$window").width(), this.wH = a.get("$window").height()), this.width = this.wW * .9, this.left = this.wW * .1, this.$el.css({
                left: this.left,
                width: this.width
            }), this.scrollHeight = this.$content.outerHeight(), this.scroll_controller && this.scroll_controller.affectHeight(this.scrollHeight), this.wW < r.MOBILE_WIDTH ? (this.padding = (this.wH - parseInt(this.$content[0].offsetHeight, 10)) / 2, this.$content[0].style.top = this.padding + "px", this.$streetNr.css({height: this.$street.height()}), this.$addressCode.css({height: this.$phone.height()})) : (this.topHeight = this.$top[0].offsetHeight, this.padding = this.wW * .05, this.$top[0].style.top = this.padding + "px", this.$bottom[0].style.top = this.wH - this.$bottom.outerHeight() - this.padding + "px", this.$content.css("top", ""), this.$streetNr.css({height: ""}), this.$addressCode.css({height: ""}))
        }, show: function (e) {
            this.visible || (this.visible = !0, this.$parent.append(this.$el), this.createScroll(), this.onResize(), this.addAnimFrame(), this.addEvents(), this.scrollY = 0, this.targetY = this.scrollY, i.killTweensOf(this.tweenObjAH), this.tweenObjAH.value = 0, i.killTweensOf(this.tweenObjO), i.to(this.tweenObjO, 1.4, {
                value: 1,
                ease: "Sine.easeOut"
            }), i.killTweensOf(this.tweenObjA), i.to(this.tweenObjA, 1.4, {value: 0, ease: "Expo.easeOut"}))
        }, hide: function () {
            this.visible && (this.visible = !1, this.destroyScroll(), this.removeEvents(), i.killTweensOf(this.tweenObjO), i.to(this.tweenObjO, .2, {
                value: 0,
                ease: "Sine.easeOut",
                onComplete: this.onHideComplete
            }), i.killTweensOf(this.tweenObjA), i.to(this.tweenObjA, .3, {value: 1, ease: "Quart.easeIn"}))
        }, onHideComplete: function () {
            this.$el.detach(), this.removeAnimFrame()
        }, out: function () {
            this.destroy()
        }, loop: function () {
            this.targetY += (this.scrollY - this.targetY) * this.ease, this.curX = this.tweenObjAH.value * a.get("hoverOutDistance") * (1 - this.tweenObjA.value), this.rotationY = this.tweenObjA.value * 5, (this.prevY !== this.targetY || this.curX !== this.prevX || this.rotationY !== this.prevRY) && this.affectCss(this.$content, this.curX, -this.targetY, 0, this.rotationY), this.prevY = this.targetY, this.prevX = this.curX, this.prevRY = this.rotationY, this.$content[0].style.opacity = this.tweenObjO.value - this.tweenObjAH.value * .95 * this.tweenObjO.value
        }, render: function () {
        }, destroy: function () {
            this.$node.remove()
        }, onScrollChange: function (e) {
            this.scrollY = e
        }, onWTouchStart: function (e) {
            this.startTX = e.originalEvent.targetTouches[0].clientX, this.startTY = e.originalEvent.targetTouches[0].clientY, this.startTotal = this.scrollY, this.ease = 1
        }, onWTouchEnd: function (e) {
            this.curTX = e.originalEvent.changedTouches[0].clientX, this.curTY = e.originalEvent.changedTouches[0].clientY, this.scrollY += this.startTY - this.curTY, this.scrollY > this.scrollHeight - this.wH ? this.scrollY = this.scrollHeight - this.wH : this.scrollY < 0 && (this.scrollY = 0), this.ease = .1
        }, onWTouchMove: function (e) {
            this.curTX = e.originalEvent.targetTouches[0].clientX, this.curTY = e.originalEvent.targetTouches[0].clientY, this.scrollY = this.startTotal - (this.curTY - this.startTY) * 1, this.scrollY > this.scrollHeight - this.wH ? this.scrollY = this.scrollHeight - this.wH : this.scrollY < 0 && (this.scrollY = 0)
        }, createScroll: function () {
            r.TOUCH ? this.$el.addClass("touch-active") : (this.scroll_controller = new u, this.scroll_controller.init(a.get("$window")), this.scroll_controller.on("scroll_change", this.onScrollChange, this))
        }, destroyScroll: function () {
            r.TOUCH ? this.$el.removeClass("touch-active") : this.scroll_controller && (this.scroll_controller.off("scroll_change", this.onScrollChange, this), this.scroll_controller.destroy(), this.scroll_controller = null)
        }, affectCss: function (e, t, n, r, i) {
            var s = {}, u = null, a = o.getTransformationMatrix(t, n, r), f = o.getRotationYMatrix(i),
                l = o.getResultMatrix([a, f]), c = o.getStringTransform3d(l);
            s[u] = c, this.applyCSS(e, c)
        }, applyCSS: function (e, t) {
            e[0].style.webkitTransform = t, e[0].style.MozTransform = t, e[0].style.msTransform = t, e[0].style.OTransform = t, e[0].style.transform = t
        }
    })
}), define("util/utils", ["jquery", "config", "underscore"], function (e, t, n) {
    "use strict";
    return {
        centerAndScale: function (e, t, n, r, i) {
            i || (i = t);
            var s = t, o = s / n, u = "scale(" + o + "," + o + ")", a = i - o * n, f = a / 2, l = o * r / 2;
            e.css("left", f), e.css("transform", u), e.css("margin-top", -l), e.css("top", "50%")
        }, navigateToRoute: function (e, t) {
            t && e.navigate(t)
        }
    }
}), define("view/modules/menu/menu-item", ["jquery", "underscore", "backbone", "config", "router", "handlebars", "tweenmax", "util/utils", "model/app_model", "util/AnimationUtils", "view/common/base_view"], function (e, t, n, r, i, s, o, u, a, f, l) {
    "use strict";
    return l.extend({
        targetRotationY: 0,
        offsetY: 0,
        scrollY: 0,
        active: !0,
        visible: !1,
        top: 0,
        curY: 0,
        toRotation: 0,
        curRotation: 0,
        backVisible: !1,
        rotationMulti: .08,
        initialize: function (n) {
            t.bindAll(this, "destroy", "onClick", "onMouseEnter", "onMouseLeave", "onTouchEnd", "onEnClick", "onFrClick", "onEnMouseEnter", "onEnMouseLeave", "onFrMouseEnter", "onFrMouseLeave"), this.index = n.index, this.$h2 = this.$el.find("h2"), this.ease = Math.random() * .05 + .1, this.route = this.$h2.attr("data-route"), this.tweenObjO = {value: 0}, this.tweenObjB = {value: 0}, this.tweenObjH = {value: 0}, this.tweenObjA = {value: 0}, this.tweenObjZ = {value: 0}, this.tweenObjZA = {value: 1}, this.tweenObjOA = {value: 0}, this.zDist = 10, r.MOBILE && (this.rotationMulti = .15), this.$el.hasClass("language") && (this.isLanguage = !0, this.tweenObjEn = {
                value: 0,
                initial: 1
            }, this.tweenObjFr = {
                value: 0,
                initial: 1
            }, this.$en = this.$h2.find(".en"), this.$fr = this.$h2.find(".fr")), a.get("pageOptions") && a.get("pageOptions").length > 0 && !this.activated && this.hide(), this.$back = e("<span class='back'>←</span>"), this.$el.append(this.$back), this.addEvents()
        },
        addEvents: function () {
            this.isLanguage ? (a.on("change:page", this.onPageChange, this), r.TOUCH ? (this.$en.on("touchend", this.onEnClick), this.$fr.on("touchend", this.onFrClick)) : (this.$en.on("click", this.onEnClick), this.$fr.on("click", this.onFrClick), this.$en.on("mouseenter", this.onEnMouseEnter), this.$en.on("mouseleave", this.onEnMouseLeave), this.$fr.on("mouseenter", this.onFrMouseEnter), this.$fr.on("mouseleave", this.onFrMouseLeave))) : r.TOUCH ? this.$el.on("touchend", this.onTouchEnd) : (this.$el.on("click", this.onClick), this.$el.on("mouseenter", this.onMouseEnter), this.$el.on("mouseleave", this.onMouseLeave))
        },
        removeEvents: function () {
            this.isLanguage ? (a.off("change:page", this.onPageChange, this), r.TOUCH ? (this.$en.off("touchend", this.onEnClick), this.$fr.off("touchend", this.onFrClick)) : (this.$en.off("click", this.onEnClick), this.$fr.off("click", this.onFrClick))) : r.TOUCH ? this.$el.off("touchend", this.onTouchEnd) : (this.$el.off("click", this.onClick), this.$el.off("mouseenter", this.onMouseEnter), this.$el.off("mouseleave", this.onMouseLeave))
        },
        onPageChange: function () {
            a.get("page") === "fr" ? this.tweenObjFr.initial = .2 : a.get("page") === "en" && (this.tweenObjEn.initial = .2)
        },
        onResize: function (e, t) {
            this.wW = e, this.wH = t, this.height = this.$el[0].offsetHeight, this.width = this.$el[0].offsetWidth, this.top = this.height * this.index, this.$el[0].style.top = this.top + "px", this.$back[0].style.top = -this.height + "px"
        },
        onTouchEnd: function () {
            a.get("click") && this.onClick()
        },
        onClick: function () {
            this.visible && (this.activated ? i.navigate(a.get("page") + "/") : (a.set("clickedItem", this), i.navigate(a.get("page") + "/" + this.route)))
        },
        onEnClick: function () {
            this.visible && a.get("page") !== "en" && a.get("click") && window.open(r.URL + "/en", "_self")
        },
        onFrClick: function () {
            this.visible && a.get("page") !== "fr" && a.get("click") && window.open(r.URL + "/fr", "_self")
        },
        onEnMouseEnter: function () {
            o.killTweensOf(this.tweenObjEn), o.to(this.tweenObjEn, .3, {value: 1, ease: "Sine.easeOut"})
        },
        onEnMouseLeave: function () {
            o.killTweensOf(this.tweenObjEn), o.to(this.tweenObjEn, .3, {value: 0, ease: "Sine.easeOut"})
        },
        onFrMouseEnter: function () {
            o.killTweensOf(this.tweenObjFr), o.to(this.tweenObjFr, .3, {value: 1, ease: "Sine.easeOut"})
        },
        onFrMouseLeave: function () {
            o.killTweensOf(this.tweenObjFr), o.to(this.tweenObjFr, .3, {value: 0, ease: "Sine.easeOut"})
        },
        onMouseEnter: function () {
            o.killTweensOf(this.tweenObjH), o.to(this.tweenObjH, .2, {
                value: 1,
                ease: "Sine.easeOut"
            }), this.activated && n.trigger("active:mousesenter")
        },
        onMouseLeave: function () {
            o.killTweensOf(this.tweenObjH), o.to(this.tweenObjH, .3, {
                value: 0,
                ease: "Sine.easeInOut"
            }), this.activated && n.trigger("active:mousesleave")
        },
        checkActive: function () {
            this.curRotation < -100 || this.curRotation > 100 ? (this.active = !1, this.affectCss(this.$el, 0, this.curY, 0, this.curRotation)) : this.active = !0
        },
        loop: function () {
            this.curY = -this.scrollY + this.offsetY, this.ry = this.top - this.wH / 2 + this.height / 2 + this.curY + -a.get("deviceAlpha") * 500, this.targetRotationY += (this.ry - this.targetRotationY) * this.ease, this.curRotation = (this.targetRotationY * this.rotationMulti + this.tweenObjOA.value * this.toRotation) * this.tweenObjZA.value, this.curZ = this.tweenObjZ.value * -this.zDist, this.curX = this.tweenObjZ.value * -this.width * .05 * 0, this.checkActive(), this.active && (this.curZ !== this.prevZ || this.curY !== this.prevY || this.curRotation !== this.prevRotation) && this.affectCss(this.$el, this.curX, this.curY, this.curZ, this.curRotation), this.prevY = this.curY, this.curZ = this.prevZ, this.curX = this.prevX, this.prevRotation = this.curRotation, r.IS_MOBILE || (!this.backVisible && this.tweenObjB.value > 0 ? (this.backVisible = !0, this.$back.addClass("active")) : this.backVisible && this.tweenObjB.value === 0 && (this.backVisible = !1, this.$back.removeClass("active"))), this.$back[0].style.opacity = this.tweenObjB.value, this.isLanguage && (this.$en[0].style.opacity = this.tweenObjEn.initial - this.tweenObjEn.value * .1, this.$fr[0].style.opacity = this.tweenObjFr.initial - this.tweenObjFr.value * .1), this.$el[0].style.opacity = this.tweenObjO.value - this.tweenObjH.value * .8 * (1 - this.tweenObjA.value) * this.tweenObjO.value - this.tweenObjA.value * .9 + this.tweenObjH.value * .5 * this.tweenObjA.value
        },
        show: function (e) {
            this.visible || (this.visible = !0, o.killTweensOf(this.tweenObjO), o.to(this.tweenObjO, 1.5, {
                value: 1,
                ease: "Sine.easeInOut",
                delay: e
            }), this.$el.addClass("visible")), o.killTweensOf(this.tweenObjA), o.to(this.tweenObjA, .3, {
                value: 0,
                ease: "Sine.easeInOut",
                delay: e
            }), o.killTweensOf(this.tweenObjB), o.to(this.tweenObjB, .3, {
                value: 0,
                ease: "Sine.easeInOut",
                delay: e
            }), o.killTweensOf(this.tweenObjH), o.to(this.tweenObjH, .3, {
                value: 0,
                ease: "Sine.easeInOut",
                delay: e
            }), o.killTweensOf(this.tweenObjOA), o.to(this.tweenObjOA, 1, {
                value: 0,
                ease: "Expo.easeOut",
                delay: e
            }), o.killTweensOf(this.tweenObjZ), o.to(this.tweenObjZ, 1.2, {
                value: 0,
                ease: "Expo.easeOut",
                delay: e
            }), o.killTweensOf(this.tweenObjZA), o.to(this.tweenObjZA, .8, {
                value: 1,
                ease: "Expo.easeOut"
            }), this.activated = !1, this.$el.removeClass("active"), this.$el.removeClass("hovered")
        },
        setVisible: function () {
            this.visible = !0, this.active = !0, this.$el.addClass("visible"), o.killTweensOf(this.tweenObjO), this.tweenObjO.value = 1, this.checkActive()
        },
        hide: function (e) {
            if (this.visible) {
                this.visible = !1;
                var t = 1;
                o.killTweensOf(this.tweenObjO), o.to(this.tweenObjO, .3, {
                    value: 0,
                    ease: "Sine.easeInOut"
                }), o.killTweensOf(this.tweenObjOA), o.to(this.tweenObjOA, 1.4, {
                    value: 1 * t,
                    ease: "Expo.easeOut"
                }), this.$el.removeClass("visible")
            } else if (e) {
                var n = 1;
                o.killTweensOf(this.tweenObjOA), o.to(this.tweenObjOA, 1.4, {value: 1 * n, ease: "Expo.easeOut"})
            }
            this.toRotation = -90 + this.curRotation, o.killTweensOf(this.tweenObjZ), o.to(this.tweenObjZ, .8, {
                value: 1,
                ease: "Expo.easeOut"
            }), o.killTweensOf(this.tweenObjB), o.to(this.tweenObjB, .3, {
                value: 0,
                ease: "Sine.easeInOut"
            }), o.killTweensOf(this.tweenObjZA), o.to(this.tweenObjZA, .8, {
                value: 1,
                ease: "Expo.easeOut"
            }), this.activated = !1, this.$el.removeClass("active")
        },
        setActive: function () {
            this.activated = !0, this.$el.addClass("active"), o.killTweensOf(this.tweenObjB), o.to(this.tweenObjB, .3, {
                value: 1,
                ease: "Sine.easeInOut"
            }), o.killTweensOf(this.tweenObjA), o.to(this.tweenObjA, .3, {
                value: 1,
                ease: "Sine.easeInOut"
            }), o.killTweensOf(this.tweenObjH), o.to(this.tweenObjH, .3, {
                value: 0,
                ease: "Sine.easeInOut"
            }), o.killTweensOf(this.tweenObjZ), o.to(this.tweenObjZ, 1.2, {
                value: 1,
                ease: "Expo.easeOut"
            }), o.killTweensOf(this.tweenObjOA), o.to(this.tweenObjOA, 1, {
                value: 0,
                ease: "Expo.easeOut"
            }), o.killTweensOf(this.tweenObjZA), o.to(this.tweenObjZA, .8, {
                value: 0,
                ease: "Expo.easeOut"
            }), this.visible || (this.visible = !0, o.killTweensOf(this.tweenObjO), o.to(this.tweenObjO, 1.5, {
                value: 1,
                ease: "Sine.easeInOut"
            }), this.$el.addClass("visible"))
        },
        resetRotationEasing: function () {
            this.curY = -this.scrollY + this.offsetY, this.ry = this.top - this.wH / 2 + this.curY, this.targetRotationY = this.ry, this.curRotation = this.targetRotationY * .08, this.curZ = this.tweenObjZ.value * -this.zDist, this.curX = this.tweenObjZ.value * -this.zDist, this.affectCss(this.$el, this.curX, this.curY, this.curZ, this.curRotation)
        },
        getY: function () {
            return this.curY + this.top
        },
        setScrollY: function (e) {
            this.scrollY = e
        },
        affectCss: function (e, t, n, r, i) {
            var s = {}, o = null, u = f.getTransformationMatrix(t, n, r), a = f.getRotationYMatrix(i),
                l = f.getResultMatrix([u, a]), c = f.getStringTransform3d(l);
            s[o] = c, this.applyCSS(e, c)
        },
        applyCSS: function (e, t) {
            e[0].style.webkitTransform = t, e[0].style.MozTransform = t, e[0].style.msTransform = t, e[0].style.OTransform = t, e[0].style.transform = t
        },
        destroy: function () {
            this.removeEvents(), this.$el.remove()
        }
    })
}), define("view/modules/menu/menu-block", ["jquery", "underscore", "backbone", "config", "router", "handlebars", "util/utils", "model/app_model", "view/common/base_view", "view/modules/menu/menu-item"], function (e, t, n, r, i, s, o, u, a, f) {
    "use strict";
    return a.extend({
        targetRotationY: 0, offset: 0, initialize: function (e) {
            t.bindAll(this, "destroy"), this.items = [], this.originalItems = e.originalItems, this.indexOffset = e.indexOffset, this.createItems()
        }, createItems: function () {
            for (var t = 0; t < this.originalItems.length; t++) {
                var n = new f({el: e(this.originalItems[t]).clone(), index: this.indexOffset + t});
                n.$el.removeClass("original"), this.$el.append(n.$el), this.items.push(n)
            }
        }, onResize: function (e, t) {
            this.wW = e, this.wH = t;
            for (var n = 0; n < this.items.length; n++) this.items[n].onResize(e, t)
        }, loop: function () {
            for (var e = 0; e < this.items.length; e++) this.items[e].loop()
        }, setScrollY: function (e) {
            this.scrollY = e;
            for (var t = 0; t < this.items.length; t++) this.items[t].setScrollY(e)
        }, destroy: function () {
            for (var e = 0; e < this.items.length; e++) this.items[e].destroy()
        }
    })
}), define("view/pages/menu", ["jquery", "underscore", "backbone", "config", "router", "tweenmax", "handlebars", "util/utils", "model/app_model", "controller/scroll_controller", "util/AnimationUtils", "view/common/base_view", "view/modules/menu/menu-block"], function (e, t, n, r, i, s, o, u, a, f, l, c, h) {
    "use strict";
    return c.extend({
        wW: 0, wH: 0, totalScroll: 0, targetTotalScroll: 0, ease: .1, firstCheck: !0, initialize: function (e) {
            t.bindAll(this, "destroy", "onWTouchStart", "onWTouchEnd", "onWTouchMove", "setActiveMenuPosition"), this.$window = a.get("$window"), this.tweenObjAI = {value: 0}, this.blocks = [], this.createItems(), this.debouncedSetActiveMenuPosition = t.debounce(this.setActiveMenuPosition, 300), this.addEvents(), this.addAnimFrame(), this.onResize()
        }, addEvents: function () {
        }, createItems: function () {
            this.originalItems = this.$el.find(".menu-item");
            for (var t = 0; t < this.originalItems.length; t++) e(this.originalItems[t]).addClass("original")
        }, onResize: function (e, t) {
            e ? (this.wW = e, this.wH = t) : (this.wW = a.get("$window").width(), this.wH = a.get("$window").height()), this.lineHeight = this.originalItems[0].offsetHeight, this.blockHeight = this.lineHeight * this.originalItems.length, this.checkRowAmount(), this.resetOffsets();
            for (var n = 0; n < this.blocks.length; n++) this.blocks[n].onResize(this.wW, this.wH);
            this.padding = this.blockAmount * this.blockHeight, this.topBorder = this.wH / 2 - this.padding / 2, this.bottomBorder = this.wH / 2 + this.padding / 2, this.setScrollHeight(), this.hasRoute && this.debouncedSetActiveMenuPosition()
        }, setActiveMenuPosition: function () {
            this.totalScroll -= this.wH * .5 - this.activeItem.getY() - this.activeItem.height / 2, this.prevTotalScroll = this.totalScroll
        }, setScrollHeight: function () {
            this.scrollHeight = this.wH * 4, this.scroll_controller && this.scroll_controller.affectHeight(this.scrollHeight)
        }, setActiveRoute: function (e) {
            this.hasRoute = !0, this.prevTotalScroll = this.totalScroll, this.destroyScroll();
            var t = null, n = 1e6;
            if (a.get("clickedItem")) {
                for (var r = 0; r < this.blocks.length; r++) for (var i = 0; i < this.blocks[r].items.length; i++) if (this.blocks[r].items[i] === a.get("clickedItem")) {
                    this.blocks[r].items[i].setActive(), this.activeItem = this.blocks[r].items[i], t = this.blocks[r].items[i], this.totalScroll -= this.wH * .5 - t.getY() - t.height / 2, this.prevTotalScroll = this.totalScroll, this.ease = .1;
                    break
                }
                for (var s = 0; s < this.blocks.length; s++) for (var o = 0; o < this.blocks[s].items.length; o++) if (this.blocks[s].items[o] !== t) {
                    var u = t.getY() - this.blocks[s].items[o].getY();
                    this.blocks[s].items[o].hide(u)
                }
            } else {
                for (var f = 0; f < this.blocks.length; f++) for (var l = 0; l < this.blocks[f].items.length; l++) if (e === this.blocks[f].items[l].route) {
                    var c = this.wH * .5 - this.blocks[f].items[l].getY();
                    c > 0 && c < n && (n = c, t = this.blocks[f].items[l])
                }
                for (var h = 0; h < this.blocks.length; h++) for (var p = 0; p < this.blocks[h].items.length; p++) if (this.blocks[h].items[p] === t) this.blocks[h].items[p].setActive(), this.activeItem = this.blocks[h].items[p], this.totalScroll -= this.wH * .5 - this.blocks[h].items[p].getY() - this.blocks[h].items[p].height / 2, this.prevTotalScroll = this.totalScroll, this.ease = .1; else {
                    var d = t.getY() - this.blocks[h].items[p].getY();
                    this.blocks[h].items[p].hide(d)
                }
            }
        }, show: function (e) {
            var t = 0;
            e && (t = e), this.hasRoute = !1, this.activeItem = null, this.createScroll(), a.get("prevPageOptions") && (this.prevElement = !0), this.scroll_controller && (this.setScrollHeight(), this.scroll_controller.setPosition(2)), this.prevTotalScroll && (this.totalScroll = this.prevTotalScroll, this.prevTotalScroll = 0), this.scrollY = 2, this.prevScrollY = 2, this.dif = 0;
            for (var n = 0; n < this.blocks.length; n++) for (var r = 0; r < this.blocks[n].items.length; r++) this.blocks[n].items[r].show(t)
        }, enter: function (e) {
            var t = 0;
            e && (t = e), this.tweenObjAI.value = 1, s.to(this.tweenObjAI, 2.5, {
                value: 0,
                ease: "Expo.easeOut",
                delay: t
            })
        }, checkRowAmount: function () {
            this.blockAmount = Math.round(this.wH * 3 / this.blockHeight), a.set("blockAmount", this.blockAmount);
            if (this.blocks.length !== this.blockAmount) {
                var e = this.blockAmount - this.blocks.length;
                if (e > 0) for (var t = 0; t < e; t++) {
                    var n = new h({
                        el: this.$el,
                        originalItems: this.originalItems,
                        indexOffset: this.blocks.length * this.originalItems.length
                    });
                    this.blocks.push(n);
                    if (!this.hasRoute && !this.firstCheck) for (var r = 0; r < n.items.length; r++) n.items[r].setVisible()
                } else if (e < 0) for (var i = 0; i < -e; i++) this.blocks[this.blocks.length - 1].destroy(), this.blocks.splice(this.blocks.length - 1, 1)
            }
            this.firstCheck && (this.firstCheck = !1)
        }, resetOffsets: function () {
            for (var e = 0; e < this.blocks.length; e++) for (var t = 0; t < this.blocks[e].items.length; t++) this.blocks[e].items[t].offsetY = 0
        }, checkOffsets: function (e) {
            for (var t = 0; t < e.items.length; t++) this.curItemY = e.items[t].getY(), this.curItemY < this.topBorder ? (e.items[t].offsetY += this.blockAmount * this.blockHeight, e.items[t].resetRotationEasing()) : this.curItemY > this.bottomBorder && (e.items[t].offsetY -= this.blockAmount * this.blockHeight, e.items[t].resetRotationEasing())
        }, loop: function () {
            this.curY = this.totalScroll - this.tweenObjAI.value * this.wH * 2.5, this.targetTotalScroll += (this.curY - this.targetTotalScroll) * this.ease, this.targetScrollY = this.targetTotalScroll;
            for (var e = 0; e < this.blocks.length; e++) this.checkOffsets(this.blocks[e]), this.blocks[e].setScrollY(this.targetScrollY), this.blocks[e].loop()
        }, onScrollChange: function (e) {
            this.scrollY = e, this.scrollY >= this.scrollHeight - this.wH ? (this.scroll_controller.setPosition(1), this.prevScrollY = 0, this.dif = 0) : this.scrollY <= 0 ? (this.scroll_controller.setPosition(this.scrollHeight - 4 - this.wH), this.prevScrollY = this.scrollHeight - 3 - this.wH, this.dif = 1) : (this.dif = this.scrollY - this.prevScrollY, this.prevScrollY = this.scrollY), this.totalScroll += this.dif
        }, onWTouchStart: function (e) {
            this.startTX = e.originalEvent.targetTouches[0].clientX, this.startTY = e.originalEvent.targetTouches[0].clientY, this.startTotal = this.targetTotalScroll, this.totalScroll = this.startTotal, this.ease = .5
        }, onWTouchEnd: function (e) {
            this.curTX = e.originalEvent.changedTouches[0].clientX, this.curTY = e.originalEvent.changedTouches[0].clientY, this.prevElement ? this.prevElement = !1 : (this.totalScroll += (this.lastTY - this.curTY) * 7, this.ease = .1)
        }, onWTouchMove: function (e) {
            this.lastTX = this.curTX, this.lastTY = this.curTY, this.curTX = e.originalEvent.targetTouches[0].clientX, this.curTY = e.originalEvent.targetTouches[0].clientY, this.totalScroll = this.startTotal - (this.curTY - this.startTY)
        }, createScroll: function () {
            r.TOUCH ? (a.get("$window").on("touchstart", this.onWTouchStart), a.get("$window").on("touchend", this.onWTouchEnd), a.get("$window").on("touchmove", this.onWTouchMove)) : (this.scroll_controller = new f, this.scroll_controller.init(this.$window), this.scroll_controller.on("scroll_change", this.onScrollChange, this))
        }, destroyScroll: function () {
            r.TOUCH ? (a.get("$window").off("touchstart", this.onWTouchStart), a.get("$window").off("touchend", this.onWTouchEnd), a.get("$window").off("touchmove", this.onWTouchMove)) : this.scroll_controller && (this.scroll_controller.off("scroll_change", this.onScrollChange, this), this.scroll_controller.destroy(), this.scroll_controller = null)
        }
    })
}), define("view/app_view", ["jquery", "underscore", "backbone", "config", "router", "tweenmax", "gyro", "model/app_model", "view/common/base_view", "view/pages/presentation", "view/pages/clients", "view/pages/workflow", "view/pages/contact", "view/pages/menu"], function (e, t, n, r, i, s, o, u, a, f, l, c, h, p) {
    "use strict";
    return a.extend({
        $window: null,
        hasInteractionEvents: !1,
        menu: null,
        page: null,
        firstOpen: !0,
        generateImageSize: 1280,
        initialize: function () {
            this.$window = e(window), this.$body = e("body"), this.$html = e("html"), this.$ui = e(".ui"), this.$mobileBack = e(".mobile-back"), this.$mobileBackBtn = this.$mobileBack.find("span"), this.$mobileLandscape = e(".mobile-landscape"), u.set("$window", this.$window), u.set("$body", this.$body), u.set("site-url", e(".page").attr("data-site-url")), e(".page").removeAttr("data-site-url"), u.set("assets-url", e(".page").attr("data-assets-url")), e(".page").removeAttr("data-assets-url"), this.addAnimFrame(), this.lastFrame = Date.now(), this.fpsCountItems = [], this.resizeMenu = t.debounce(this.menuResizeDebounced, 200)
        },
        start: function () {
            t.bindAll(this, "onMouseMove", "onResize", "onDeviceOrientationChange", "onTouchStart", "onTouchEnd", "onTouchMove", "onTouchMobileBackTouchEnd", "onMobileBackHideComplete"), this.addEvents(), this.menu = new p({el: e(".menu")}), this.presentation = new f({
                el: e(".presentation"),
                route: "presentation"
            }), this.clients = new l({el: e(".clients"), route: "clients"}), this.workflow = new c({
                el: e(".workflow"),
                route: "workflow"
            }), this.contact = new h({
                el: e(".contact"),
                route: "contact"
            }), this.views = [this.presentation, this.clients, this.workflow, this.contact], this.onResize(), setTimeout(this.onResize, 500)
        },
        show: function () {
        },
        addEvents: function () {
            window.onresize = t.bind(this.onResize, this), u.on("change:page", this.onAppModelPage, this), u.on("change:pageOptions", this.onAppModelOptions, this), u.on("change:detailActive", this.onDetailActiveChange, this), u.on("change:customizerImage", this.onChangeCustomizerImage, this);
            if (r.TOUCH) {
                this.$window.on("touchstart", this.onTouchStart), this.$window.on("touchmove", this.onTouchMove), this.$window.on("touchend", this.onTouchEnd), this.$mobileBackBtn.on("touchend", this.onTouchMobileBackTouchEnd);
                var e = new o.GyroNorm;
                e.init().then(function () {
                    e.start(function (e) {
                        this.deviceAlpha = parseInt(e.do.gamma, 10) / 180, this.deviceAlpha > 1 ? this.deviceAlpha = 1 : this.deviceAlpha < -1 && (this.deviceAlpha = -1), u.set("deviceAlpha", this.deviceAlpha)
                    }.bind(this))
                }.bind(this)).catch(function (e) {
                })
            }
        },
        onDeviceOrientationChange: function (e) {
            this.deviceAlpha = e.originalEvent.gamma / 180, this.deviceAlpha > 1 ? this.deviceAlpha = 1 : this.deviceAlpha < -1 && (this.deviceAlpha = -1), u.set("deviceAlpha", this.deviceAlpha)
        },
        onTouchMobileBackTouchEnd: function () {
            u.get("click") && i.navigate(u.get("page") + "/")
        },
        onMouseMove: function (e) {
            this.mouse.x = e.clientX / window.innerWidth * 2 - 1, this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1
        },
        onTouchMove: function (e) {
            this.mX = e.originalEvent.touches[0].clientX, this.mY = e.originalEvent.touches[0].clientY, u.get("click") && Math.abs(this.startX - this.mX) > 2 && Math.abs(this.startY - this.mY) > 2 && u.set("click", !1)
        },
        onTouchStart: function (e) {
            u.set("click", !0), this.startClickTime = Date.now(), this.startX = e.originalEvent.touches[0].clientX, this.startY = e.originalEvent.touches[0].clientY
        },
        onTouchEnd: function (e) {
            this.endX = e.originalEvent.changedTouches[0].clientX, this.endY = e.originalEvent.changedTouches[0].clientY
        },
        onResize: function (e) {
            this.wWidth = u.get("$window").width(), this.wHeight = u.get("$window").height(), this.menu.onResize(this.wWidth, this.wHeight), this.activeView && this.activeView.onResize(this.wWidth, this.wHeight), r.TOUCH && (this.wWidth > this.wHeight ? (r.LANDSCAPE = !0, r.PORTRAIT = !1) : (r.LANDSCAPE = !1, r.PORTRAIT = !0)), r.MOBILE && (r.LANDSCAPE && !this.overlayActive ? (this.overlayActive = !0, this.$mobileLandscape.css("display", "block")) : this.overlayActive && (this.overlayActive = !1, this.$mobileLandscape.css("display", "")))
        },
        delayedResize: function () {
            this.resizeTimeout && (clearTimeout(this.resizeTimeout), this.resizeTimeout = null), this.resizeTimeout = setTimeout(this.onResize, 400)
        },
        menuResizeDebounced: function () {
            this.menu.onResize(this.wWidth, this.wHeight)
        },
        onAppModelPage: function (e, t) {
        },
        onAppModelOptions: function (e, t) {
            var n = t[0];
            if (t.length > 0) {
                this.menu.setActiveRoute(n);
                for (var i = 0; i < this.views.length; i++) this.views[i].route === n ? (this.views[i].show(), this.activeView = this.views[i]) : this.views[i].hide();
                r.MOBILE && (s.killTweensOf(this.$mobileBackBtn), this.$mobileBack.addClass("active"), s.to(this.$mobileBack, 1, {
                    opacity: 1,
                    ease: "Sine.easeInOut",
                    force3D: !0,
                    clearProps: "all"
                }))
            } else {
                for (var o = 0; o < this.views.length; o++) this.views[o].hide();
                this.activeView = null, u.set("clickedItem", null), u.get("prevPageOptions") ? this.menu.show() : (this.menu.show(.3), this.menu.enter(.3)), r.MOBILE && (s.killTweensOf(this.$mobileBackBtn), s.to(this.$mobileBack, .2, {
                    opacity: 0,
                    ease: "Sine.easeInOut",
                    force3D: !0,
                    clearProps: "all",
                    onComplete: this.onMobileBackHideComplete
                }))
            }
        },
        onMobileBackHideComplete: function () {
            this.$mobileBack.removeClass("active")
        },
        loop: function () {
        },
        render: function () {
        }
    })
}), define("main", ["jquery", "underscore", "backbone", "config", "router", "controller/app_controller", "model/app_model", "view/app_view"], function (e, t, n, r, i, s, o, u) {
    "use strict";
    return {
        appView: null, appController: null, start: function () {
            this.appView = new u, this.appController = new s, n.on("font:loaded", this.onFontLoaded, this), this.appController.on("AppController:ready", this.onAppReady, this), this.appController.init()
        }, onAppReady: function () {
            this.appView.start(), i.start(), this.appCReady = !0, this.checkLoad()
        }, onFontLoaded: function () {
            this.fontReady = !0, this.checkLoad()
        }, checkLoad: function () {
            this.appCReady && this.removePreloader()
        }, removePreloader: function () {
            window.destroyPreloader && window.destroyPreloader()
        }, killPreloader: function () {
        }
    }
});
