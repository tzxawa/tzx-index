"use strict";
! function(t) {
  t.Ta = t.Ta || {}, Ta.hack = function() {
    return {
      params: "",
      conf: {
        sid: 30582263,
        pf: 1,
        logo: 255,
        hot: {}
      }
    }
  }
}(window),
function(y, t) {
  function T(t) {
    return (t = document.cookie.match(new RegExp("(?:^|;\\s)" + t + "=(.*?)(?:;\\s|$)"))) ? t[1] : ""
  }

  function A(t, e, a) {
    var o = window.location.host,
      n = o.split(".");
    2 < n.length && (o = ({
        "com.cn": 1,
        "net.cn": 1,
        "gov.cn": 1,
        "com.hk": 1,
        "co.nz": 1,
        "org.cn": 1,
        "edu.cn": 1
      } [n.slice(-2)
        .join(".")
      ] ? n.slice(-3) : n.slice(-2))
      .join(".")), document.cookie = t + "=" + e + ";path=/;domain=" + o + (a ? ";expires=" + a : "")
  }

  function _(t) {
    var e, a, o, n = {};
    if (void 0 !== (o = void 0 === t ? (t = (o = window.location)
      .host, e = o.pathname, a = o.search.substr(1), o.hash) : (t = (o = t.match(/\w+:\/\/((?:[\w-]+\.)+\w+)(?:\:\d+)?(\/[^\?\\\"\'\|\:<>]*)?(?:\?([^\'\"\\<>#]*))?(?:#(\w+))?/i) || [])[1], e = o[2], a = o[3], o[4])) && (o = encodeURI(o.replace(/\"|\'|\<|\>/gi, "M"))), a)
      for (var r = a.split("&"), i = 0, c = r.length; i < c; i++)
        if (-1 != r[i].indexOf("=")) {
          var d = r[i].indexOf("="),
            s = r[i].slice(0, d);
          d = r[i].slice(d + 1);
          n[s] = d
        } return {
      host: t,
      path: e,
      search: a,
      hash: o,
      param: n
    }
  }

  function b(t) {
    return (t || "") + Math.round(2147483647 * (Math.random() || .5)) * +new Date % 1e10
  }

  function C(t, e) {
    var a = document.createElement("script"),
      o = document.getElementsByTagName("script")[0];
    a.src = t, a.type = "text/javascript", a.onload = a.onerror = a.onreadystatechange = function() {
      /loaded|complete|undefined/.test(a.readyState) && (a.onload = a.onerror = a.onreadystatechange = null, a.parentNode.removeChild(a), a = void 0, e())
    }, o.parentNode.insertBefore(a, o)
  }

  function e(a) {
    if ((a = a || {})
      .conf && function() {
        var t, e = a.conf;
        for (t in e) e.hasOwnProperty(t) && (y[t] = e[t])
      }(), y.sid && !Ta[y.sid]) {
      for (var t = [], e = 0, o = [(g = void 0, m = void 0, w = void 0, k = void 0, w = _(), k = {
        dm: w.host,
        pvi: "",
        si: "",
        url: w.path,
        arg: encodeURIComponent(w.search || ""),
        ty: 1
      }, k.pvi = ((g = T("pgv_pvi")) || (k.ty = 0, A("pgv_pvi", g = b(), "Sun, 18 Jan 2038 00:00:00 GMT;")), g), k.si = ((m = T("pgv_si")) || A("pgv_si", m = b("s")), m), k), (u = void 0, v = void 0, u = _(document.referrer), v = _(), {
        rdm: u.host,
        rurl: u.path,
        rarg: encodeURIComponent(u.search || ""),
        adt: v.param.ADTAG || v.param.adtag
      }), {
        r2: y.sid,
        r3: "undefined" == typeof _speedMark ? "-1" : new Date - _speedMark,
        r4: y.pf || 1
      }, function() {
        try {
          var t, e, a, o, n = navigator,
            r = screen || {
              width: "",
              height: "",
              colorDepth: ""
            },
            i = document.body,
            c = r.width + "x" + r.height,
            d = r.colorDepth + "-bit",
            s = (n.language || n.userLanguage)
            .toLowerCase(),
            h = n.javaEnabled() ? 1 : 0,
            p = (new Date)
            .getTimezoneOffset() / 60;
          if (r = "", i && i.addBehavior && (i.addBehavior("#default#clientCaps"), r = i.connectionType), i = {
            fl: "",
            scr: c,
            scl: d,
            lg: s,
            jv: h,
            tz: p,
            ct: r
          }, (t = n.plugins) && (e = t.length))
            for (n = 0; n < e; n++)(a = t[n].description.match(/Shockwave Flash ([\d\.]+) \w*/)) && (i.fl = a[1]);
          else o = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
            .GetVariable("$version"), i.fl = o.replace(/^.*\s+(\d+)\,(\d+).*$/, "$1.$2")
        } catch (t) {
          return {}
        }
        return i
      }(), function() {
        var t, e = {};
        if ("undefined" != typeof _taadHolders && 0 < _taadHolders.length)
          for (var a = 0, o = _taadHolders, n = o.length; a < n; a++) e[o[a]] = e[o[a]] ? e[o[a]] + 1 : 1;
        for (t in a = [], e) e.hasOwnProperty(t) && a.push(t + "*" + e[t]);
        return {
          ext: "adid=" + a.join(":")
        }
      }(), function() {
        var t, e = [];
        for (t in j) {
          var a, o = T(j[t].c_id);
          (a = "afs" == t ? (a = /ssid=([^&]*)/i.exec(_()
            .hash)) && a[1] ? a[1] : "" : (a = _()
            .param)[j[t].id] ? a[j[t].id] : "") ? (e.push("ty=" + j[t].key + ";ck=0;id=" + a), (o = new Date)
            .setTime(o.getTime() + 2592e6), A(j[t].c_id, a, o.toGMTString())) : o && e.push("ty=" + j[t].key + ";ck=1;id=" + o)
        }
        return {
          pf: e.join("|")
        }
      }(), {
        random: +new Date
      }], n = o.length; e < n; e++)
        for (var r in o[e]) o[e].hasOwnProperty(r) && t.push(r + "=" + (o[e][r] || ""));
      a.params && t.push(a.params);
      t = Ta.src = ("https:" == document.location.protocol ? "https://pingtas.qq.com/webview" : "http://pingtcss.qq.com") + "/pingd?" + t.join("&");
      var i = new Image;
      (Ta[y.sid] = i)
      .onload = i.onerror = i.onabort = function() {
        i = i.onload = i.onerror = i.onabort = null, Ta[y.sid] = !0
      }, i.src = t, (1 * !y.pf || y.hot.isValid) && (s = t, h = window.location, p = h.host + h.pathname, l = h.pathname, f = function() {
          C(("https:" == document.location.protocol ? "https://" : "http://") + "tajs.qq.com/ping_hotclick_min.js", function() {
            window.hotclick && new hotclick(s)
              .watchClick()
          })
        }, 1 * y.pf ? new RegExp(p)
        .test(y.hot.url) && f() : C("http://tcss.qq.com/heatmap/" + (h = y.sid) % 100 + "/" + function(t) {
          var e, a, o, n, r, i;
          for (o = (t += "")
            .length, a = 0, e = ""; a < o;) {
            if (n = 255 & t.charCodeAt(a++), a == o) {
              e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(n >> 2), e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt((3 & n) << 4), e += "==";
              break
            }
            if (r = t.charCodeAt(a++), a == o) {
              e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(n >> 2), e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt((3 & n) << 4 | (240 & r) >> 4), e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt((15 & r) << 2), e += "=";
              break
            }
            i = t.charCodeAt(a++), e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(n >> 2), e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt((3 & n) << 4 | (240 & r) >> 4), e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt((15 & r) << 2 | (192 & i) >> 6), e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(63 & i)
          }
          return e
        }(h) + ".js?random=" + +new Date, function() {
          var t;
          if (window._Cnf && (t = window._Cnf.url)) {
            t = t.split("|");
            for (var e = 0; e < t.length; e++)
              if (t[e] == l) {
                f();
                break
              }
          }
        })), y.logo && 255 != y.logo && (c = y.logo, d = {
        9: "腾讯分析",
        10: "网站统计",
        df: '<img src="' + ("https:" == document.location.protocol ? "https:" : "http:") + "//tajs.qq.com/icon/toss_" + c + '.gif" border="0" />'
      }, document.write(['<a href="http://ta.qq.com?ADTAG=FROUM.FOOTER.CLICK.ICON" title="腾讯分析" target="_blank">', d[c] || d.df, "</a>"].join("")))
    }
    var c, d, s, h, p, l, f, u, v, g, m, w, k
  }
  var j = {
    afs: {
      key: 1,
      id: "ssid",
      c_id: "pgv_afsid",
      fr: "hash"
    },
    afc: {
      key: 2,
      id: "__tacid",
      c_id: "pgv_afcid",
      fr: "param"
    },
    gdt: {
      key: 11,
      id: "qz_gdt",
      c_id: "pgv_gdtid",
      fr: "param"
    }
  };
  t.taClick = function(t, a) {
    var e = Ta.src.replace(/ext=[^&]*/, function() {
        return "ext=" + ("evtid" == a ? "ty=0;evtid=" : "clickid" == a ? "ty=1;clickid=" : "adid=") + t
      })
      .replace(/r2=([^&]*)/, function(t, e) {
        return "r2=" + ("clickid" == a ? "b" : "a") + e
      });
    new Image(1, 1)
      .src = e
  }, t.Ta = t.Ta || {}, Ta.pgv = e, !Ta.async && e(Ta.hack ? Ta.hack() : "")
}({
  sid: "",
  pf: "",
  hot: {
    url: "",
    isValid: !1
  }
}, window);