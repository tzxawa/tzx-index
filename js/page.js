"use strict";

function _typeof(t) {
  return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
  function(t) {
    return typeof t
  }: function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol": typeof t
  })(t)
}
var parcelRequire = function(a, s, t, e) {
  var n, u = "function" == typeof parcelRequire && parcelRequire,
  c = "function" == typeof require && require;
  function l(e, t) {
    if (!s[e]) {
      if (!a[e]) {
        var n = "function" == typeof parcelRequire && parcelRequire;
        if (!t && n) return n(e, !0);
        if (u) return u(e, !0);
        if (c && "string" == typeof e) return c(e);
        var r = new Error("Cannot find module '" + e + "'");
        throw r.code = "MODULE_NOT_FOUND",
        r
      }
      o.resolve = function(t) {
        return a[e][1][t] || t
      },
      o.cache = {};
      var i = s[e] = new l.Module(e);
      a[e][0].call(i.exports, o, i, i.exports, this)
    }
    return s[e].exports;
    function o(t) {
      return l(o.resolve(t))
    }
  }
  l.isParcelRequire = !0,
  l.Module = function(t) {
    this.id = t,
    this.bundle = l,
    this.exports = {}
  },
  l.modules = a,
  l.cache = s,
  l.parent = u,
  l.register = function(t, n) {
    a[t] = [function(t, e) {
      e.exports = n
    },
    {}]
  };
  for (var r = 0; r < t.length; r++) try {
    l(t[r])
  } catch(a) {
    n || (n = a)
  }
  if (t.length) {
    var i = l(t[t.length - 1]);
    "object" == ("undefined" == typeof exports ? "undefined": _typeof(exports)) && "undefined" != typeof module ? module.exports = i: "function" == typeof define && define.amd && define(function() {
      return i
    })
  }
  if (parcelRequire = l, n) throw n;
  return l
} ({
  XR92: [function(t, e, n) {
    arguments[3],
    arguments[3]; (function(J) {
      var o, t = function() {
        var u, a, c, r, s, n, i = [],
        o = i.concat,
        l = i.filter,
        f = i.slice,
        h = J.document,
        p = {},
        e = {},
        d = {
          "column-count": 1,
          columns: 1,
          "font-weight": 1,
          "line-height": 1,
          opacity: 1,
          "z-index": 1,
          zoom: 1
        },
        m = /^\s*<(\w+|!)[^>]*>/,
        v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        y = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        g = /^(?:body|html)$/i,
        b = /([A-Z])/g,
        x = ["val", "css", "html", "text", "data", "width", "height", "offset"],
        t = h.createElement("table"),
        w = h.createElement("tr"),
        E = {
          tr: h.createElement("tbody"),
          tbody: t,
          thead: t,
          tfoot: t,
          td: w,
          th: w,
          "*": h.createElement("div")
        },
        j = /complete|loaded|interactive/,
        S = /^[\w-]*$/,
        T = {},
        C = T.toString,
        N = {},
        O = h.createElement("div"),
        P = {
          tabindex: "tabIndex",
          readonly: "readOnly",
          for: "htmlFor",
          class: "className",
          maxlength: "maxLength",
          cellspacing: "cellSpacing",
          cellpadding: "cellPadding",
          rowspan: "rowSpan",
          colspan: "colSpan",
          usemap: "useMap",
          frameborder: "frameBorder",
          contenteditable: "contentEditable"
        },
        A = Array.isArray ||
        function(t) {
          return t instanceof Array
        };
        function R(t) {
          return null == t ? String(t) : T[C.call(t)] || "object"
        }
        function q(t) {
          return "function" == R(t)
        }
        function M(t) {
          return null != t && t == t.window
        }
        function D(t) {
          return null != t && t.nodeType == t.DOCUMENT_NODE
        }
        function F(t) {
          return "object" == R(t)
        }
        function L(t) {
          return F(t) && !M(t) && Object.getPrototypeOf(t) == Object.prototype
        }
        function $(t) {
          var e = !!t && "length" in t && t.length,
          n = c.type(t);
          return "function" != n && !M(t) && ("array" == n || 0 === e || "number" == typeof e && 0 < e && e - 1 in t)
        }
        function k(t) {
          return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
        }
        function z(t) {
          return t in e ? e[t] : e[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
        }
        function _(t, e) {
          return "number" != typeof e || d[k(t)] ? e: e + "px"
        }
        function Z(t) {
          return "children" in t ? f.call(t.children) : c.map(t.childNodes,
          function(t) {
            if (1 == t.nodeType) return t
          })
        }
        function H(t, e) {
          var n, r = t ? t.length: 0;
          for (n = 0; n < r; n++) this[n] = t[n];
          this.length = r,
          this.selector = e || ""
        }
        function I(t, e) {
          return null == e ? c(t) : c(t).filter(e)
        }
        function B(t, e, n, r) {
          return q(e) ? e.call(t, n, r) : e
        }
        function V(t, e, n) {
          null == n ? t.removeAttribute(e) : t.setAttribute(e, n)
        }
        function U(t, e) {
          var n = t.className || "",
          r = n && n.baseVal !== u;
          if (e === u) return r ? n.baseVal: n;
          r ? n.baseVal = e: t.className = e
        }
        function X(e) {
          try {
            return e ? "true" == e || "false" != e && ("null" == e ? null: +e + "" == e ? +e: /^[\[\{]/.test(e) ? c.parseJSON(e) : e) : e
          } catch(t) {
            return e
          }
        }
        return N.matches = function(t, e) {
          if (!e || !t || 1 !== t.nodeType) return ! 1;
          var n = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
          if (n) return n.call(t, e);
          var r, i = t.parentNode,
          o = !i;
          return o && (i = O).appendChild(t),
          r = ~N.qsa(i, e).indexOf(t),
          o && O.removeChild(t),
          r
        },
        s = function(t) {
          return t.replace(/-+(.)?/g,
          function(t, e) {
            return e ? e.toUpperCase() : ""
          })
        },
        n = function(n) {
          return l.call(n,
          function(t, e) {
            return n.indexOf(t) == e
          })
        },
        N.fragment = function(t, e, n) {
          var r, i, o;
          return v.test(t) && (r = c(h.createElement(RegExp.$1))),
          r || (t.replace && (t = t.replace(y, "<$1></$2>")), e === u && (e = m.test(t) && RegExp.$1), e in E || (e = "*"), (o = E[e]).innerHTML = "" + t, r = c.each(f.call(o.childNodes),
          function() {
            o.removeChild(this)
          })),
          L(n) && (i = c(r), c.each(n,
          function(t, e) { - 1 < x.indexOf(t) ? i[t](e) : i.attr(t, e)
          })),
          r
        },
        N.Z = function(t, e) {
          return new H(t, e)
        },
        N.isZ = function(t) {
          return t instanceof N.Z
        },
        N.init = function(t, e) {
          var n, r;
          if (!t) return N.Z();
          if ("string" == typeof t) if ("<" == (t = t.trim())[0] && m.test(t)) n = N.fragment(t, RegExp.$1, e),
          t = null;
          else {
            if (e !== u) return c(e).find(t);
            n = N.qsa(h, t)
          } else {
            if (q(t)) return c(h).ready(t);
            if (N.isZ(t)) return t;
            if (A(t)) r = t,
            n = l.call(r,
            function(t) {
              return null != t
            });
            else if (F(t)) n = [t],
            t = null;
            else if (m.test(t)) n = N.fragment(t.trim(), RegExp.$1, e),
            t = null;
            else {
              if (e !== u) return c(e).find(t);
              n = N.qsa(h, t)
            }
          }
          return N.Z(n, t)
        },
        (c = function(t, e) {
          return N.init(t, e)
        }).extend = function(e) {
          var n, t = f.call(arguments, 1);
          return "boolean" == typeof e && (n = e, e = t.shift()),
          t.forEach(function(t) { !
            function t(e, n, r) {
              for (a in n) r && (L(n[a]) || A(n[a])) ? (L(n[a]) && !L(e[a]) && (e[a] = {}), A(n[a]) && !A(e[a]) && (e[a] = []), t(e[a], n[a], r)) : n[a] !== u && (e[a] = n[a])
            } (e, t, n)
          }),
          e
        },
        N.qsa = function(t, e) {
          var n, r = "#" == e[0],
          i = !r && "." == e[0],
          o = r || i ? e.slice(1) : e,
          a = S.test(o);
          return t.getElementById && a && r ? (n = t.getElementById(o)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType ? [] : f.call(a && !r && t.getElementsByClassName ? i ? t.getElementsByClassName(o) : t.getElementsByTagName(e) : t.querySelectorAll(e))
        },
        c.contains = h.documentElement.contains ?
        function(t, e) {
          return t !== e && t.contains(e)
        }: function(t, e) {
          for (; e && (e = e.parentNode);) if (e === t) return ! 0;
          return ! 1
        },
        c.type = R,
        c.isFunction = q,
        c.isWindow = M,
        c.isArray = A,
        c.isPlainObject = L,
        c.isEmptyObject = function(t) {
          var e;
          for (e in t) return ! 1;
          return ! 0
        },
        c.isNumeric = function(t) {
          var e = Number(t),
          n = _typeof(t);
          return null != t && "boolean" != n && ("string" != n || t.length) && !isNaN(e) && isFinite(e) || !1
        },
        c.inArray = function(t, e, n) {
          return i.indexOf.call(e, t, n)
        },
        c.camelCase = s,
        c.trim = function(t) {
          return null == t ? "": String.prototype.trim.call(t)
        },
        c.uuid = 0,
        c.support = {},
        c.expr = {},
        c.noop = function() {},
        c.map = function(t, e) {
          var n, r, i, o, a = [];
          if ($(t)) for (r = 0; r < t.length; r++) null != (n = e(t[r], r)) && a.push(n);
          else for (i in t) null != (n = e(t[i], i)) && a.push(n);
          return 0 < (o = a).length ? c.fn.concat.apply([], o) : o
        },
        c.each = function(t, e) {
          var n, r;
          if ($(t)) {
            for (n = 0; n < t.length; n++) if (!1 === e.call(t[n], n, t[n])) return t
          } else for (r in t) if (!1 === e.call(t[r], r, t[r])) return t;
          return t
        },
        c.grep = function(t, e) {
          return l.call(t, e)
        },
        J.JSON && (c.parseJSON = JSON.parse),
        c.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
        function(t, e) {
          T["[object " + e + "]"] = e.toLowerCase()
        }),
        c.fn = {
          constructor: N.Z,
          length: 0,
          forEach: i.forEach,
          reduce: i.reduce,
          push: i.push,
          sort: i.sort,
          splice: i.splice,
          indexOf: i.indexOf,
          concat: function() {
            var t, e, n = [];
            for (t = 0; t < arguments.length; t++) e = arguments[t],
            n[t] = N.isZ(e) ? e.toArray() : e;
            return o.apply(N.isZ(this) ? this.toArray() : this, n)
          },
          map: function(n) {
            return c(c.map(this,
            function(t, e) {
              return n.call(t, e, t)
            }))
          },
          slice: function() {
            return c(f.apply(this, arguments))
          },
          ready: function(t) {
            return j.test(h.readyState) && h.body ? t(c) : h.addEventListener("DOMContentLoaded",
            function() {
              t(c)
            },
            !1),
            this
          },
          get: function(t) {
            return t === u ? f.call(this) : this[0 <= t ? t: t + this.length]
          },
          toArray: function() {
            return this.get()
          },
          size: function() {
            return this.length
          },
          remove: function() {
            return this.each(function() {
              null != this.parentNode && this.parentNode.removeChild(this)
            })
          },
          each: function(n) {
            return i.every.call(this,
            function(t, e) {
              return ! 1 !== n.call(t, e, t)
            }),
            this
          },
          filter: function(e) {
            return q(e) ? this.not(this.not(e)) : c(l.call(this,
            function(t) {
              return N.matches(t, e)
            }))
          },
          add: function(t, e) {
            return c(n(this.concat(c(t, e))))
          },
          is: function(t) {
            return 0 < this.length && N.matches(this[0], t)
          },
          not: function(e) {
            var n = [];
            if (q(e) && e.call !== u) this.each(function(t) {
              e.call(this, t) || n.push(this)
            });
            else {
              var r = "string" == typeof e ? this.filter(e) : $(e) && q(e.item) ? f.call(e) : c(e);
              this.forEach(function(t) {
                r.indexOf(t) < 0 && n.push(t)
              })
            }
            return c(n)
          },
          has: function(t) {
            return this.filter(function() {
              return F(t) ? c.contains(this, t) : c(this).find(t).size()
            })
          },
          eq: function(t) {
            return - 1 === t ? this.slice(t) : this.slice(t, +t + 1)
          },
          first: function() {
            var t = this[0];
            return t && !F(t) ? t: c(t)
          },
          last: function() {
            var t = this[this.length - 1];
            return t && !F(t) ? t: c(t)
          },
          find: function(t) {
            var n = this;
            return t ? "object" == _typeof(t) ? c(t).filter(function() {
              var e = this;
              return i.some.call(n,
              function(t) {
                return c.contains(t, e)
              })
            }) : 1 == this.length ? c(N.qsa(this[0], t)) : this.map(function() {
              return N.qsa(this, t)
            }) : c()
          },
          closest: function(n, r) {
            var i = [],
            o = "object" == _typeof(n) && c(n);
            return this.each(function(t, e) {
              for (; e && !(o ? 0 <= o.indexOf(e) : N.matches(e, n));) e = e !== r && !D(e) && e.parentNode;
              e && i.indexOf(e) < 0 && i.push(e)
            }),
            c(i)
          },
          parents: function(t) {
            for (var e = [], n = this; 0 < n.length;) n = c.map(n,
            function(t) {
              if ((t = t.parentNode) && !D(t) && e.indexOf(t) < 0) return e.push(t),
              t
            });
            return I(e, t)
          },
          parent: function(t) {
            return I(n(this.pluck("parentNode")), t)
          },
          children: function(t) {
            return I(this.map(function() {
              return Z(this)
            }), t)
          },
          contents: function() {
            return this.map(function() {
              return this.contentDocument || f.call(this.childNodes)
            })
          },
          siblings: function(t) {
            return I(this.map(function(t, e) {
              return l.call(Z(e.parentNode),
              function(t) {
                return t !== e
              })
            }), t)
          },
          empty: function() {
            return this.each(function() {
              this.innerHTML = ""
            })
          },
          pluck: function(e) {
            return c.map(this,
            function(t) {
              return t[e]
            })
          },
          show: function() {
            return this.each(function() {
              var t, e, n;
              "none" == this.style.display && (this.style.display = ""),
              "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = (t = this.nodeName, p[t] || (e = h.createElement(t), h.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), p[t] = n), p[t]))
            })
          },
          replaceWith: function(t) {
            return this.before(t).remove()
          },
          wrap: function(e) {
            var n = q(e);
            if (this[0] && !n) var r = c(e).get(0),
            i = r.parentNode || 1 < this.length;
            return this.each(function(t) {
              c(this).wrapAll(n ? e.call(this, t) : i ? r.cloneNode(!0) : r)
            })
          },
          wrapAll: function(t) {
            if (this[0]) {
              var e;
              for (c(this[0]).before(t = c(t)); (e = t.children()).length;) t = e.first();
              c(t).append(this)
            }
            return this
          },
          wrapInner: function(i) {
            var o = q(i);
            return this.each(function(t) {
              var e = c(this),
              n = e.contents(),
              r = o ? i.call(this, t) : i;
              n.length ? n.wrapAll(r) : e.append(r)
            })
          },
          unwrap: function() {
            return this.parent().each(function() {
              c(this).replaceWith(c(this).children())
            }),
            this
          },
          clone: function() {
            return this.map(function() {
              return this.cloneNode(!0)
            })
          },
          hide: function() {
            return this.css("display", "none")
          },
          toggle: function(e) {
            return this.each(function() {
              var t = c(this); (e === u ? "none" == t.css("display") : e) ? t.show() : t.hide()
            })
          },
          prev: function(t) {
            return c(this.pluck("previousElementSibling")).filter(t || "*")
          },
          next: function(t) {
            return c(this.pluck("nextElementSibling")).filter(t || "*")
          },
          html: function(n) {
            return 0 in arguments ? this.each(function(t) {
              var e = this.innerHTML;
              c(this).empty().append(B(this, n, t, e))
            }) : 0 in this ? this[0].innerHTML: null
          },
          text: function(n) {
            return 0 in arguments ? this.each(function(t) {
              var e = B(this, n, t, this.textContent);
              this.textContent = null == e ? "": "" + e
            }) : 0 in this ? this.pluck("textContent").join("") : null
          },
          attr: function(e, n) {
            var t;
            return "string" != typeof e || 1 in arguments ? this.each(function(t) {
              if (1 === this.nodeType) if (F(e)) for (a in e) V(this, a, e[a]);
              else V(this, e, B(this, n, t, this.getAttribute(e)))
            }) : 0 in this && 1 == this[0].nodeType && null != (t = this[0].getAttribute(e)) ? t: u
          },
          removeAttr: function(t) {
            return this.each(function() {
              1 === this.nodeType && t.split(" ").forEach(function(t) {
                V(this, t)
              },
              this)
            })
          },
          prop: function(e, n) {
            return e = P[e] || e,
            1 in arguments ? this.each(function(t) {
              this[e] = B(this, n, t, this[e])
            }) : this[0] && this[0][e]
          },
          removeProp: function(t) {
            return t = P[t] || t,
            this.each(function() {
              delete this[t]
            })
          },
          data: function(t, e) {
            var n = "data-" + t.replace(b, "-$1").toLowerCase(),
            r = 1 in arguments ? this.attr(n, e) : this.attr(n);
            return null !== r ? X(r) : u
          },
          val: function(e) {
            return 0 in arguments ? (null == e && (e = ""), this.each(function(t) {
              this.value = B(this, e, t, this.value)
            })) : this[0] && (this[0].multiple ? c(this[0]).find("option").filter(function() {
              return this.selected
            }).pluck("value") : this[0].value)
          },
          offset: function(o) {
            if (o) return this.each(function(t) {
              var e = c(this),
              n = B(this, o, t, e.offset()),
              r = e.offsetParent().offset(),
              i = {
                top: n.top - r.top,
                left: n.left - r.left
              };
              "static" == e.css("position") && (i.position = "relative"),
              e.css(i)
            });
            if (!this.length) return null;
            if (h.documentElement !== this[0] && !c.contains(h.documentElement, this[0])) return {
              top: 0,
              left: 0
            };
            var t = this[0].getBoundingClientRect();
            return {
              left: t.left + J.pageXOffset,
              top: t.top + J.pageYOffset,
              width: Math.round(t.width),
              height: Math.round(t.height)
            }
          },
          css: function(t, e) {
            if (arguments.length < 2) {
              var n = this[0];
              if ("string" == typeof t) {
                if (!n) return;
                return n.style[s(t)] || getComputedStyle(n, "").getPropertyValue(t)
              }
              if (A(t)) {
                if (!n) return;
                var r = {},
                i = getComputedStyle(n, "");
                return c.each(t,
                function(t, e) {
                  r[e] = n.style[s(e)] || i.getPropertyValue(e)
                }),
                r
              }
            }
            var o = "";
            if ("string" == R(t)) e || 0 === e ? o = k(t) + ":" + _(t, e) : this.each(function() {
              this.style.removeProperty(k(t))
            });
            else for (a in t) t[a] || 0 === t[a] ? o += k(a) + ":" + _(a, t[a]) + ";": this.each(function() {
              this.style.removeProperty(k(a))
            });
            return this.each(function() {
              this.style.cssText += ";" + o
            })
          },
          index: function(t) {
            return t ? this.indexOf(c(t)[0]) : this.parent().children().indexOf(this[0])
          },
          hasClass: function(t) {
            return !! t && i.some.call(this,
            function(t) {
              return this.test(U(t))
            },
            z(t))
          },
          addClass: function(n) {
            return n ? this.each(function(t) {
              if ("className" in this) {
                r = [];
                var e = U(this);
                B(this, n, t, e).split(/\s+/g).forEach(function(t) {
                  c(this).hasClass(t) || r.push(t)
                },
                this),
                r.length && U(this, e + (e ? " ": "") + r.join(" "))
              }
            }) : this
          },
          removeClass: function(e) {
            return this.each(function(t) {
              if ("className" in this) {
                if (e === u) return U(this, "");
                r = U(this),
                B(this, e, t, r).split(/\s+/g).forEach(function(t) {
                  r = r.replace(z(t), " ")
                }),
                U(this, r.trim())
              }
            })
          },
          toggleClass: function(n, r) {
            return n ? this.each(function(t) {
              var e = c(this);
              B(this, n, t, U(this)).split(/\s+/g).forEach(function(t) { (r === u ? !e.hasClass(t) : r) ? e.addClass(t) : e.removeClass(t)
              })
            }) : this
          },
          scrollTop: function(t) {
            if (this.length) {
              var e = "scrollTop" in this[0];
              return t === u ? e ? this[0].scrollTop: this[0].pageYOffset: this.each(e ?
              function() {
                this.scrollTop = t
              }: function() {
                this.scrollTo(this.scrollX, t)
              })
            }
          },
          scrollLeft: function(t) {
            if (this.length) {
              var e = "scrollLeft" in this[0];
              return t === u ? e ? this[0].scrollLeft: this[0].pageXOffset: this.each(e ?
              function() {
                this.scrollLeft = t
              }: function() {
                this.scrollTo(t, this.scrollY)
              })
            }
          },
          position: function() {
            if (this.length) {
              var t = this[0],
              e = this.offsetParent(),
              n = this.offset(),
              r = g.test(e[0].nodeName) ? {
                top: 0,
                left: 0
              }: e.offset();
              return n.top -= parseFloat(c(t).css("margin-top")) || 0,
              n.left -= parseFloat(c(t).css("margin-left")) || 0,
              r.top += parseFloat(c(e[0]).css("border-top-width")) || 0,
              r.left += parseFloat(c(e[0]).css("border-left-width")) || 0,
              {
                top: n.top - r.top,
                left: n.left - r.left
              }
            }
          },
          offsetParent: function() {
            return this.map(function() {
              for (var t = this.offsetParent || h.body; t && !g.test(t.nodeName) && "static" == c(t).css("position");) t = t.offsetParent;
              return t
            })
          }
        },
        c.fn.detach = c.fn.remove,
        ["width", "height"].forEach(function(r) {
          var i = r.replace(/./,
          function(t) {
            return t[0].toUpperCase()
          });
          c.fn[r] = function(e) {
            var t, n = this[0];
            return e === u ? M(n) ? n["inner" + i] : D(n) ? n.documentElement["scroll" + i] : (t = this.offset()) && t[r] : this.each(function(t) { (n = c(this)).css(r, B(this, e, t, n[r]()))
            })
          }
        }),
        ["after", "prepend", "before", "append"].forEach(function(e, a) {
          var s = a % 2;
          c.fn[e] = function() {
            var n, r, i = c.map(arguments,
            function(t) {
              var e = [];
              return "array" == (n = R(t)) ? (t.forEach(function(t) {
                return t.nodeType !== u ? e.push(t) : c.zepto.isZ(t) ? e = e.concat(t.get()) : void(e = e.concat(N.fragment(t)))
              }), e) : "object" == n || null == t ? t: N.fragment(t)
            }),
            o = 1 < this.length;
            return i.length < 1 ? this: this.each(function(t, e) {
              r = s ? e: e.parentNode,
              e = 0 == a ? e.nextSibling: 1 == a ? e.firstChild: 2 == a ? e: null;
              var n = c.contains(h.documentElement, r);
              i.forEach(function(t) {
                if (o) t = t.cloneNode(!0);
                else if (!r) return c(t).remove();
                r.insertBefore(t, e),
                n &&
                function t(e, n) {
                  n(e);
                  for (var r = 0,
                  i = e.childNodes.length; r < i; r++) t(e.childNodes[r], n)
                } (t,
                function(t) {
                  if (! (null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src)) {
                    var e = t.ownerDocument ? t.ownerDocument.defaultView: J;
                    e.eval.call(e, t.innerHTML)
                  }
                })
              })
            })
          },
          c.fn[s ? e + "To": "insert" + (a ? "Before": "After")] = function(t) {
            return c(t)[e](this),
            this
          }
        }),
        N.Z.prototype = H.prototype = c.fn,
        N.uniq = n,
        N.deserializeValue = X,
        c.zepto = N,
        c
      } ();
      J.Zepto = t,
      void 0 === J.$ && (J.$ = t),
      function(l) {
        var f, e = 1,
        c = Array.prototype.slice,
        h = l.isFunction,
        p = function(t) {
          return "string" == typeof t
        },
        d = {},
        o = {},
        n = "onfocusin" in J,
        r = {
          focus: "focusin",
          blur: "focusout"
        },
        m = {
          mouseenter: "mouseover",
          mouseleave: "mouseout"
        };
        function v(t) {
          return t._zid || (t._zid = e++)
        }
        function a(t, e, n, r) {
          if ((e = y(e)).ns) var i = (o = e.ns, new RegExp("(?:^| )" + o.replace(" ", " .* ?") + "(?: |$)"));
          var o;
          return (d[v(t)] || []).filter(function(t) {
            return t && (!e.e || t.e == e.e) && (!e.ns || i.test(t.ns)) && (!n || v(t.fn) === v(n)) && (!r || t.sel == r)
          })
        }
        function y(t) {
          var e = ("" + t).split(".");
          return {
            e: e[0],
            ns: e.slice(1).sort().join(" ")
          }
        }
        function g(t, e) {
          return t.del && !n && t.e in r || !!e
        }
        function b(t) {
          return m[t] || n && r[t] || t
        }
        function x(i, t, e, o, a, s, u) {
          var n = v(i),
          c = d[n] || (d[n] = []);
          t.split(/\s/).forEach(function(t) {
            if ("ready" == t) return l(document).ready(e);
            var n = y(t);
            n.fn = e,
            n.sel = a,
            n.e in m && (e = function(t) {
              var e = t.relatedTarget;
              if (!e || e !== this && !l.contains(this, e)) return n.fn.apply(this, arguments)
            });
            var r = (n.del = s) || e;
            n.proxy = function(t) {
              if (! (t = j(t)).isImmediatePropagationStopped()) {
                t.data = o;
                var e = r.apply(i, t._args == f ? [t] : [t].concat(t._args));
                return ! 1 === e && (t.preventDefault(), t.stopPropagation()),
                e
              }
            },
            n.i = c.length,
            c.push(n),
            "addEventListener" in i && i.addEventListener(b(n.e), n.proxy, g(n, u))
          })
        }
        function w(e, t, n, r, i) {
          var o = v(e); (t || "").split(/\s/).forEach(function(t) {
            a(e, t, n, r).forEach(function(t) {
              delete d[o][t.i],
              "removeEventListener" in e && e.removeEventListener(b(t.e), t.proxy, g(t, i))
            })
          })
        }
        o.click = o.mousedown = o.mouseup = o.mousemove = "MouseEvents",
        l.event = {
          add: x,
          remove: w
        },
        l.proxy = function(t, e) {
          var n = 2 in arguments && c.call(arguments, 2);
          if (h(t)) {
            var r = function() {
              return t.apply(e, n ? n.concat(c.call(arguments)) : arguments)
            };
            return r._zid = v(t),
            r
          }
          if (p(e)) return n ? (n.unshift(t[e], t), l.proxy.apply(null, n)) : l.proxy(t[e], t);
          throw new TypeError("expected function")
        },
        l.fn.bind = function(t, e, n) {
          return this.on(t, e, n)
        },
        l.fn.unbind = function(t, e) {
          return this.off(t, e)
        },
        l.fn.one = function(t, e, n, r) {
          return this.on(t, e, n, r, 1)
        };
        var s = function() {
          return ! 0
        },
        E = function() {
          return ! 1
        },
        i = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,
        t = {
          preventDefault: "isDefaultPrevented",
          stopImmediatePropagation: "isImmediatePropagationStopped",
          stopPropagation: "isPropagationStopped"
        };
        function j(r, i) {
          return ! i && r.isDefaultPrevented || (i || (i = r), l.each(t,
          function(t, e) {
            var n = i[t];
            r[t] = function() {
              return this[e] = s,
              n && n.apply(i, arguments)
            },
            r[e] = E
          }), r.timeStamp || (r.timeStamp = Date.now()), (i.defaultPrevented !== f ? i.defaultPrevented: "returnValue" in i ? !1 === i.returnValue: i.getPreventDefault && i.getPreventDefault()) && (r.isDefaultPrevented = s)),
          r
        }
        function S(t) {
          var e, n = {
            originalEvent: t
          };
          for (e in t) i.test(e) || t[e] === f || (n[e] = t[e]);
          return j(n, t)
        }
        l.fn.delegate = function(t, e, n) {
          return this.on(e, t, n)
        },
        l.fn.undelegate = function(t, e, n) {
          return this.off(e, t, n)
        },
        l.fn.live = function(t, e) {
          return l(document.body).delegate(this.selector, t, e),
          this
        },
        l.fn.die = function(t, e) {
          return l(document.body).undelegate(this.selector, t, e),
          this
        },
        l.fn.on = function(e, i, n, o, a) {
          var s, u, r = this;
          return e && !p(e) ? (l.each(e,
          function(t, e) {
            r.on(t, i, n, e, a)
          }), r) : (p(i) || h(o) || !1 === o || (o = n, n = i, i = f), o !== f && !1 !== n || (o = n, n = f), !1 === o && (o = E), r.each(function(t, r) {
            a && (s = function(t) {
              return w(r, t.type, o),
              o.apply(this, arguments)
            }),
            i && (u = function(t) {
              var e, n = l(t.target).closest(i, r).get(0);
              if (n && n !== r) return e = l.extend(S(t), {
                currentTarget: n,
                liveFired: r
              }),
              (s || o).apply(n, [e].concat(c.call(arguments, 1)))
            }),
            x(r, e, o, n, i, u || s)
          }))
        },
        l.fn.off = function(t, n, e) {
          var r = this;
          return t && !p(t) ? (l.each(t,
          function(t, e) {
            r.off(t, n, e)
          }), r) : (p(n) || h(e) || !1 === e || (e = n, n = f), !1 === e && (e = E), r.each(function() {
            w(this, t, e, n)
          }))
        },
        l.fn.trigger = function(t, e) {
          return (t = p(t) || l.isPlainObject(t) ? l.Event(t) : j(t))._args = e,
          this.each(function() {
            t.type in r && "function" == typeof this[t.type] ? this[t.type]() : "dispatchEvent" in this ? this.dispatchEvent(t) : l(this).triggerHandler(t, e)
          })
        },
        l.fn.triggerHandler = function(n, r) {
          var i, o;
          return this.each(function(t, e) { (i = S(p(n) ? l.Event(n) : n))._args = r,
            i.target = e,
            l.each(a(e, n.type || n),
            function(t, e) {
              if (o = e.proxy(i), i.isImmediatePropagationStopped()) return ! 1
            })
          }),
          o
        },
        "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e) {
          l.fn[e] = function(t) {
            return 0 in arguments ? this.bind(e, t) : this.trigger(e)
          }
        }),
        l.Event = function(t, e) {
          p(t) || (t = (e = t).type);
          var n = document.createEvent(o[t] || "Events"),
          r = !0;
          if (e) for (var i in e)"bubbles" == i ? r = !!e[i] : n[i] = e[i];
          return n.initEvent(t, r, !0),
          j(n)
        }
      } (t),
      function(y) {
        var g, b, l = +new Date,
        x = J.document,
        u = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        w = /^(?:text|application)\/javascript/i,
        E = /^(?:text|application)\/xml/i,
        j = "application/json",
        S = "text/html",
        T = /^\s*$/,
        C = x.createElement("a");
        function N(t, e, n, r) {
          if (t.global) return i = e || x,
          o = n,
          a = r,
          s = y.Event(o),
          y(i).trigger(s, a),
          !s.isDefaultPrevented();
          var i, o, a, s
        }
        function O(t, e) {
          var n = e.context;
          if (!1 === e.beforeSend.call(n, t, e) || !1 === N(e, n, "ajaxBeforeSend", [t, e])) return ! 1;
          N(e, n, "ajaxSend", [t, e])
        }
        function P(t, e, n, r) {
          var i = n.context;
          n.success.call(i, t, "success", e),
          r && r.resolveWith(i, [t, "success", e]),
          N(n, i, "ajaxSuccess", [e, n, t]),
          a("success", e, n)
        }
        function A(t, e, n, r, i) {
          var o = r.context;
          r.error.call(o, n, e, t),
          i && i.rejectWith(o, [n, e, t]),
          N(r, o, "ajaxError", [n, r, t || e]),
          a(e, n, r)
        }
        function a(t, e, n) {
          var r, i = n.context;
          n.complete.call(i, e, t),
          N(n, i, "ajaxComplete", [e, n]),
          (r = n).global && !--y.active && N(r, null, "ajaxStop")
        }
        function R() {}
        function q(t, e) {
          return "" == e ? t: (t + "&" + e).replace(/[&?]{1,2}/, "?")
        }
        function c(t, e, n, r) {
          return y.isFunction(e) && (r = n, n = e, e = void 0),
          y.isFunction(n) || (r = n, n = void 0),
          {
            url: t,
            data: e,
            success: n,
            dataType: r
          }
        }
        C.href = J.location.href,
        y.active = 0,
        y.ajaxJSONP = function(n, r) {
          if (! ("type" in n)) return y.ajax(n);
          var i, o, t = n.jsonpCallback,
          a = (y.isFunction(t) ? t() : t) || "Zepto" + l++,
          s = x.createElement("script"),
          u = J[a],
          e = function(t) {
            y(s).triggerHandler("error", t || "abort")
          },
          c = {
            abort: e
          };
          return r && r.promise(c),
          y(s).on("load error",
          function(t, e) {
            clearTimeout(o),
            y(s).off().remove(),
            "error" != t.type && i ? P(i[0], c, n, r) : A(null, e || "error", c, n, r),
            J[a] = u,
            i && y.isFunction(u) && u(i[0]),
            u = i = void 0
          }),
          !1 === O(c, n) ? e("abort") : (J[a] = function() {
            i = arguments
          },
          s.src = n.url.replace(/\?(.+)=\?/, "?$1=" + a), x.head.appendChild(s), 0 < n.timeout && (o = setTimeout(function() {
            e("timeout")
          },
          n.timeout))),
          c
        },
        y.ajaxSettings = {
          type: "GET",
          beforeSend: R,
          success: R,
          error: R,
          complete: R,
          context: null,
          global: !0,
          xhr: function() {
            return new J.XMLHttpRequest
          },
          accepts: {
            script: "text/javascript, application/javascript, application/x-javascript",
            json: j,
            xml: "application/xml, text/xml",
            html: S,
            text: "text/plain"
          },
          crossDomain: !1,
          timeout: 0,
          processData: !0,
          cache: !0,
          dataFilter: R
        },
        y.ajax = function(t) {
          var e, n, r, i, o = y.extend({},
          t || {}),
          a = y.Deferred && y.Deferred();
          for (g in y.ajaxSettings) void 0 === o[g] && (o[g] = y.ajaxSettings[g]); (i = o).global && 0 == y.active++&&N(i, null, "ajaxStart"),
          o.crossDomain || ((e = x.createElement("a")).href = o.url, e.href = e.href, o.crossDomain = C.protocol + "//" + C.host != e.protocol + "//" + e.host),
          o.url || (o.url = J.location.toString()),
          -1 < (n = o.url.indexOf("#")) && (o.url = o.url.slice(0, n)),
          (r = o).processData && r.data && "string" != y.type(r.data) && (r.data = y.param(r.data, r.traditional)),
          !r.data || r.type && "GET" != r.type.toUpperCase() && "jsonp" != r.dataType || (r.url = q(r.url, r.data), r.data = void 0);
          var s = o.dataType,
          u = /\?.+=\?/.test(o.url);
          if (u && (s = "jsonp"), !1 !== o.cache && (t && !0 === t.cache || "script" != s && "jsonp" != s) || (o.url = q(o.url, "_=" + Date.now())), "jsonp" == s) return u || (o.url = q(o.url, o.jsonp ? o.jsonp + "=?": !1 === o.jsonp ? "": "callback=?")),
          y.ajaxJSONP(o, a);
          var c, l = o.accepts[s],
          f = {},
          h = function(t, e) {
            f[t.toLowerCase()] = [t, e]
          },
          p = /^([\w-]+:)\/\//.test(o.url) ? RegExp.$1: J.location.protocol,
          d = o.xhr(),
          m = d.setRequestHeader;
          if (a && a.promise(d), o.crossDomain || h("X-Requested-With", "XMLHttpRequest"), h("Accept", l || "*/*"), (l = o.mimeType || l) && ( - 1 < l.indexOf(",") && (l = l.split(",", 2)[0]), d.overrideMimeType && d.overrideMimeType(l)), (o.contentType || !1 !== o.contentType && o.data && "GET" != o.type.toUpperCase()) && h("Content-Type", o.contentType || "application/x-www-form-urlencoded"), o.headers) for (b in o.headers) h(b, o.headers[b]);
          if (d.setRequestHeader = h, !(d.onreadystatechange = function() {
            if (4 == d.readyState) {
              d.onreadystatechange = R,
              clearTimeout(c);
              var t, e = !1;
              if (200 <= d.status && d.status < 300 || 304 == d.status || 0 == d.status && "file:" == p) {
                if (s = s || ((n = o.mimeType || d.getResponseHeader("content-type")) && (n = n.split(";", 2)[0]), n && (n == S ? "html": n == j ? "json": w.test(n) ? "script": E.test(n) && "xml") || "text"), "arraybuffer" == d.responseType || "blob" == d.responseType) t = d.response;
                else {
                  t = d.responseText;
                  try {
                    t = function(t, e, n) {
                      if (n.dataFilter == R) return t;
                      var r = n.context;
                      return n.dataFilter.call(r, t, e)
                    } (t, s, o),
                    "script" == s ? (0, eval)(t) : "xml" == s ? t = d.responseXML: "json" == s && (t = T.test(t) ? null: y.parseJSON(t))
                  } catch(t) {
                    e = t
                  }
                  if (e) return A(e, "parsererror", d, o, a)
                }
                P(t, d, o, a)
              } else A(d.statusText || null, d.status ? "error": "abort", d, o, a)
            }
            var n
          }) === O(d, o)) return d.abort(),
          A(null, "abort", d, o, a),
          d;
          var v = !("async" in o) || o.async;
          if (d.open(o.type, o.url, v, o.username, o.password), o.xhrFields) for (b in o.xhrFields) d[b] = o.xhrFields[b];
          for (b in f) m.apply(d, f[b]);
          return 0 < o.timeout && (c = setTimeout(function() {
            d.onreadystatechange = R,
            d.abort(),
            A(null, "timeout", d, o, a)
          },
          o.timeout)),
          d.send(o.data ? o.data: null),
          d
        },
        y.get = function() {
          return y.ajax(c.apply(null, arguments))
        },
        y.post = function() {
          var t = c.apply(null, arguments);
          return t.type = "POST",
          y.ajax(t)
        },
        y.getJSON = function() {
          var t = c.apply(null, arguments);
          return t.dataType = "json",
          y.ajax(t)
        },
        y.fn.load = function(t, e, n) {
          if (!this.length) return this;
          var r, i = this,
          o = t.split(/\s/),
          a = c(t, e, n),
          s = a.success;
          return 1 < o.length && (a.url = o[0], r = o[1]),
          a.success = function(t) {
            i.html(r ? y("<div>").html(t.replace(u, "")).find(r) : t),
            s && s.apply(i, arguments)
          },
          y.ajax(a),
          this
        };
        var r = encodeURIComponent;
        y.param = function(t, e) {
          var n = [];
          return n.add = function(t, e) {
            y.isFunction(e) && (e = e()),
            null == e && (e = ""),
            this.push(r(t) + "=" + r(e))
          },
          function n(r, t, i, o) {
            var a, s = y.isArray(t),
            u = y.isPlainObject(t);
            y.each(t,
            function(t, e) {
              a = y.type(e),
              o && (t = i ? o: o + "[" + (u || "object" == a || "array" == a ? t: "") + "]"),
              !o && s ? r.add(e.name, e.value) : "array" == a || !i && "object" == a ? n(r, e, i, t) : r.add(t, e)
            })
          } (n, t, e),
          n.join("&").replace(/%20/g, "+")
        }
      } (t),
      (o = t).fn.serializeArray = function() {
        var n, r, i = [];
        return this[0] && o.each(this[0].elements,
        function(t, e) {
          r = e.type,
          (n = e.name) && "fieldset" != e.nodeName.toLowerCase() && !e.disabled && "submit" != r && "reset" != r && "button" != r && "file" != r && ("radio" != r && "checkbox" != r || e.checked) &&
          function t(e) {
            if (e.forEach) return e.forEach(t);
            i.push({
              name: n,
              value: e
            })
          } (o(e).val())
        }),
        i
      },
      o.fn.serialize = function() {
        var e = [];
        return this.serializeArray().forEach(function(t) {
          e.push(encodeURIComponent(t.name) + "=" + encodeURIComponent(t.value))
        }),
        e.join("&")
      },
      o.fn.submit = function(t) {
        if (0 in arguments) this.bind("submit", t);
        else if (this.length) {
          var e = o.Event("submit");
          this.eq(0).trigger(e),
          e.isDefaultPrevented() || this.get(0).submit()
        }
        return this
      },
      function() {
        try {
          getComputedStyle(void 0)
        } catch(t) {
          var n = getComputedStyle;
          J.getComputedStyle = function(t, e) {
            try {
              return n(t, e)
            } catch(t) {
              return null
            }
          }
        }
      } ()
    })(this)
  },
  {}],
  Bb20: [function(t, e, n) {
    Object.prototype.document = window.document,
    Object.prototype.location = window.location;
    var o = t("zepto").$;
    function r() {
      var t, e, n, r = ["以声之色，塑花之形，<br>将你之名，刻于我心。","从你的前前前世开始<br>我就开始找寻你","问灵十三载 等一不归人","是非在己，毁誉由人，<br>得失不论。","天官赐福 百无禁忌","为你花开满城 为你灯明三千","即使跌入深海，<br>奇遇也会出现在抬头的瞬间。","不知渡人 何以渡己","骄阳刚好，风过林梢，<br>彼时他们正当年少。","被人拉起来，<br>跟自己站起来是两码事。"],
      i = (e = r.length - 1 - (t = 0), n = Math.random(), t + Math.round(n * e));
      o("#slogan").html(r[i])
    }
    delete Object.prototype.document,
    delete Object.prototype.location,
    window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
    function(t) {
      window.setTimeout(t, 1e3 / 60)
    },
    o(function() {
      var t, e, n = document.createElement("canvas"),
      r = document.getElementById("startrack");
      r.width = n.width = t = r.offsetWidth,
      r.height = n.height = e = r.offsetHeight;
      var i = Math.max(t, e);
      n.width = 2.6 * i,
      n.height = 2.6 * i;
      var o = r.getContext("2d"),
      a = n.getContext("2d"),
      s = t,
      u = [],
      c = 0;
      function l(t, e) {
        var n = e - t,
        r = Math.random();
        return t + Math.round(r * n)
      }
      function f() {
        var t;
        o.drawImage(n, -n.width / 2, -n.height / 2),
        150 < ++c && c % 8 == 0 && (o.fillStyle = "rgba(0,0,0,.04)", o.fillRect( - 3 * i, -3 * i, 6 * i, 6 * i)),
        t = .025,
        o.rotate(t * Math.PI / 180)
      }
      o.fillStyle = "rgba(21,21,21,1)",
      o.fillRect(0, 0, t, e),
      o.lineCap = "round";
      for (var h, p, d, m, v = 2e4; v--;) void 0,
      u.push({
        x: l( - n.width, n.width),
        y: l( - n.height, n.height),
        size: 1.2,
        color: (h = l(120, 255), p = l(120, 255), d = l(120, 255), m = l(30, 100) / 100, "rgba(" + h + "," + p + "," + d + "," + m + ")")
      }); !
      function() {
        for (var t = u.length; t--;) {
          var e = u[t];
          a.beginPath(),
          a.arc(e.x, e.y, e.size, 0, 2 * Math.PI, !0),
          a.fillStyle = e.color,
          a.closePath(),
          a.fill()
        }
      } ();
      var y = s;
      o.translate(y, 0),
      function t() {
        requestAnimFrame(t),
        f()
      } (),
      window.onresize = function() {
        r.width = t = r.offsetWidth,
        r.height = e = r.offsetHeight,
        o.fillStyle = "rgba(21,21,21,1)",
        o.fillRect(0, 0, t, e)
      }
    }),
    document.querySelector(".content-main").onscroll = function() {
      o(this).scrollTop() > .2 * o(this).height() ? o(".background").addClass("fixed") : o(".background").removeClass("fixed")
    },
    o(function() {
      r(),
      console.log("TianZiXiao Homepage")
    })
  },
  {
    zepto: "XR92"
  }]
},
{},
["Bb20"]);
var image = new Image();
image.src = 'img/avatar.ico';
image.onload = function() {
  var canvas = document.createElement('canvas');
  canvas.width = image.width;
  canvas.height = image.height;
  var ctx = canvas.getContext('2d');
  ctx.drawImage(image, 0, 0);
  console.log(canvas.toDataURL());
};