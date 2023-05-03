"use strict";

function _typeof(e) {
  return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
  } : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  })(e)
}! function() {
  var e, t, C = {
      resource: {
        version: "1",
        macros: [{
          function: "__e"
        }, {
          function: "__cid"
        }],
        tags: [{
          function: "__rep",
          once_per_event: !0,
          vtp_containerId: ["macro", 1],
          tag_id: 1
        }],
        predicates: [{
          function: "_eq",
          arg0: ["macro", 0],
          arg1: "gtm.js"
        }],
        rules: [
          [
            ["if", 0],
            ["add", 0]
          ]
        ]
      },
      runtime: []
    },
    i = "function" == typeof Object.create ? Object.create : function(e) {
      var t = function() {};
      return t.prototype = e, new t
    };
  if ("function" == typeof Object.setPrototypeOf) t = Object.setPrototypeOf;
  else {
    var n;
    e: {
      var r = {};
      try {
        r.__proto__ = {
          a: !0
        }, n = r.a;
        break e
      } catch (e) {}
      n = !1
    }
    t = n ? function(e, t) {
      if (e.__proto__ = t, e.__proto__ !== t) throw new TypeError(e + " is not extensible");
      return e
    } : null
  }
  var o = t,
    a = this || self,
    c = function(e) {
      return e
    },
    T = function(e) {
      return "function" == typeof e
    },
    k = function(e) {
      return "string" == typeof e
    },
    s = function(e) {
      return "number" == typeof e && !isNaN(e)
    },
    G = Array.isArray,
    u = function(e, t) {
      return (!s(e) || !s(t) || t < e) && (e = 0, t = 2147483647), Math.floor(Math.random() * (t - e + 1) + e)
    },
    m = function(e, t) {
      for (var n = new l, r = 0; r < e.length; r++) n.set(e[r], !0);
      for (var i = 0; i < t.length; i++)
        if (n.get(t[i])) return !0;
      return !1
    },
    O = function(e, t) {
      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t(n, e[n])
    },
    I = function(e) {
      return !!e && ("[object Arguments]" === Object.prototype.toString.call(e) || Object.prototype.hasOwnProperty.call(e, "callee"))
    },
    E = function(e) {
      return Math.round(Number(e)) || 0
    },
    f = function(e) {
      return "false" !== String(e)
        .toLowerCase() && !!e
    },
    _ = function(e) {
      var t = [];
      if (G(e))
        for (var n = 0; n < e.length; n++) t.push(String(e[n]));
      return t
    },
    x = function() {
      return new Date(Date.now())
    },
    A = function() {
      return x()
        .getTime()
    },
    l = function() {
      this.prefix = "gtm.", this.values = {}
    };
  l.prototype.set = function(e, t) {
    this.values[this.prefix + e] = t
  }, l.prototype.get = function(e) {
    return this.values[this.prefix + e]
  };
  var g, j = function(e) {
      var t = e;
      return function() {
        if (t) {
          var e = t;
          t = void 0;
          try {
            e()
          } catch (e) {}
        }
      }
    },
    N = function(e, t) {
      for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
    },
    d = function(e) {
      for (var t in e)
        if (e.hasOwnProperty(t)) return !0;
      return !1
    },
    y = function(e, t) {
      for (var n = [], r = 0; r < e.length; r++) n.push(e[r]), n.push.apply(n, t[e[r]] || []);
      return n
    },
    v = function(e, t) {
      for (var n = {}, r = n, i = e.split("."), o = 0; o < i.length - 1; o++) r = r[i[o]] = {};
      return r[i[i.length - 1]] = t, n
    },
    p = /^\w{1,9}$/,
    L = function(e, t) {
      t = t || ",";
      var n = [];
      return O(e = e || {}, function(e, t) {
        p.test(e) && t && n.push(e)
      }), n.join(t)
    },
    h = function() {
      if (void 0 === g) {
        var e = null,
          t = a.trustedTypes;
        if (t && t.createPolicy) {
          try {
            e = t.createPolicy("goog#html", {
              createHTML: c,
              createScript: c,
              createScriptURL: c
            })
          } catch (e) {
            a.console && a.console.error(e.message)
          }
          g = e
        } else g = e
      }
      return g
    },
    b = function(e, t) {
      this.g = t === w ? e : ""
    };
  b.prototype.toString = function() {
    return this.g + ""
  };
  var w = {},
    S = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

  function P() {
    var e = a.navigator;
    if (e) {
      var t = e.userAgent;
      if (t) return t
    }
    return ""
  }

  function M(e) {
    return -1 != P()
      .indexOf(e)
  }
  var F = window,
    q = document,
    U = navigator,
    z = q.currentScript && q.currentScript.src,
    D = function(e, t) {
      var n = F[e];
      return F[e] = void 0 === n ? t : n, F[e]
    },
    K = function(e, t) {
      t && (e.addEventListener ? e.onload = t : e.onreadystatechange = function() {
        e.readyState in {
          loaded: 1,
          complete: 1
        } && (e.onreadystatechange = null, t())
      })
    },
    V = {
      async: 1,
      nonce: 1,
      onerror: 1,
      onload: 1,
      src: 1,
      type: 1
    };

  function R(n, e, r) {
    e && O(e, function(e, t) {
      e = e.toLowerCase(), r.hasOwnProperty(e) || n.setAttribute(e, t)
    })
  }
  var W, Z, B, J = function(e, t, n, r) {
      var i = q.createElement("script");
      R(i, r, V), i.type = "text/javascript", i.async = !0;
      var o, a = e,
        c = h(),
        s = c ? c.createScriptURL(a) : a;
      o = new b(s, w), i.src = o instanceof b && o.constructor === b ? o.g : "type_error:TrustedResourceUrl";
      var u, f, l, g = null == (l = (f = (i.ownerDocument && i.ownerDocument.defaultView || window)
          .document)
        .querySelector) ? void 0 : l.call(f, "script[nonce]");
      (u = g && (g.nonce || g.getAttribute("nonce")) || "") && i.setAttribute("nonce", u), K(i, t), n && (i.onerror = n);
      var d = q.getElementsByTagName("script")[0] || q.body || q.head;
      return d.parentNode.insertBefore(i, d), i
    },
    H = function(e, t, n) {
      var r = new Image(1, 1);
      return r.onload = function() {
        r.onload = null, t && t()
      }, r.onerror = function() {
        r.onerror = null, n && n()
      }, r.src = e, r
    },
    $ = function(e, t, n, r) {
      e.addEventListener ? e.addEventListener(t, n, !!r) : e.attachEvent && e.attachEvent("on" + t, n)
    },
    Q = function(e) {
      F.setTimeout(e, 0)
    },
    X = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    Y = function(e) {
      if (null == e) return String(e);
      var t = X.exec(Object.prototype.toString.call(Object(e)));
      return t ? t[1].toLowerCase() : "object"
    },
    ee = function(e, t) {
      return Object.prototype.hasOwnProperty.call(Object(e), t)
    },
    te = function(e) {
      if (!e || "object" != Y(e) || e.nodeType || e == e.window) return !1;
      try {
        if (e.constructor && !ee(e, "constructor") && !ee(e.constructor.prototype, "isPrototypeOf")) return !1
      } catch (e) {
        return !1
      }
      for (var t in e);
      return void 0 === t || ee(e, t)
    },
    ne = function e(t, n) {
      var r, i = n || ("array" == Y(t) ? [] : {});
      for (r in t)
        if (ee(t, r)) {
          var o = t[r];
          "array" == Y(o) ? ("array" != Y(i[r]) && (i[r] = []), i[r] = e(o, i[r])) : te(o) ? (te(i[r]) || (i[r] = {}), i[r] = e(o, i[r])) : i[r] = o
        } return i
    },
    re = function(e) {
      if (void 0 === e || G(e) || te(e)) return !0;
      switch (_typeof(e)) {
        case "boolean":
        case "number":
        case "string":
        case "function":
          return !0
      }
      return !1
    },
    ie = {
      Dh: (W = function(e) {
        return {
          toString: function() {
            return e
          }
        }
      })("consent"),
      Eh: W("consent_always_fire"),
      Hf: W("convert_case_to"),
      If: W("convert_false_to"),
      Jf: W("convert_null_to"),
      Kf: W("convert_true_to"),
      Lf: W("convert_undefined_to"),
      bk: W("debug_mode_metadata"),
      vb: W("function"),
      Oe: W("instance_name"),
      oi: W("live_only"),
      ri: W("malware_disabled"),
      si: W("metadata"),
      yi: W("original_activity_id"),
      gk: W("original_vendor_template_id"),
      fk: W("once_on_load"),
      xi: W("once_per_event"),
      pg: W("once_per_load"),
      hk: W("priority_override"),
      ik: W("respected_consent_types"),
      vg: W("setup_tags"),
      xg: W("tag_id"),
      yg: W("teardown_tags")
    },
    oe = [],
    ae = [],
    ce = [],
    se = [],
    ue = [],
    fe = {},
    le = function(e, t) {
      var n = e.function,
        r = t && t.event;
      if (!n) throw Error("Error: No function name given for function call.");
      var i, o = fe[n],
        a = {};
      for (i in e) e.hasOwnProperty(i) && (0 === i.indexOf("vtp_") ? (o && r && r.Lg && r.Lg(e[i]), a[void 0 !== o ? i : i.substr(4)] = e[i]) : i === ie.Eh.toString() && e[i]);
      if (o && r && r.Kg && (a.vtp_gtmCachedValues = r.Kg), t) {
        if (null == t.name) {
          var c;
          e: {
            var s = t.index;
            if (null == s) c = "";
            else {
              var u;
              switch (t.type) {
                case 2:
                  u = oe[s];
                  break;
                case 1:
                  u = se[s];
                  break;
                default:
                  c = "";
                  break e
              }
              var f = u && u[ie.Oe];
              c = f ? String(f) : ""
            }
          }
          t.name = c
        }
        o && (a.vtp_gtmEntityIndex = t.index, a.vtp_gtmEntityName = t.name)
      }
      return void 0 !== o ? o(a) : (void 0)(n, a, t)
    },
    ge = function(e, t, n) {
      n = n || [];
      var r, i = {};
      for (r in e) e.hasOwnProperty(r) && (i[r] = de(e[r], t, n));
      return i
    },
    de = function e(t, n, r) {
      var i;
      if (G(t)) switch (t[0]) {
        case "function_id":
          return t[1];
        case "list":
          i = [];
          for (var o = 1; o < t.length; o++) i.push(e(t[o], n, r));
          return i;
        case "macro":
          var a = t[1];
          if (r[a]) return;
          var c = oe[a];
          if (!c || n.jf(c)) return;
          r[a] = !0;
          var s = String(c[ie.Oe]);
          try {
            var u = ge(c, n, r);
            u.vtp_gtmEventId = n.id, n.priorityId && (u.vtp_gtmPriorityId = n.priorityId), i = le(u, {
              event: n,
              index: a,
              type: 2,
              name: s
            }), B && (i = B.Ki(i, u))
          } catch (e) {
            n.eh && n.eh(e, Number(a), s), i = !1
          }
          return r[a] = !1, i;
        case "map":
          i = {};
          for (var f = 1; f < t.length; f += 2) i[e(t[f], n, r)] = e(t[f + 1], n, r);
          return i;
        case "template":
          i = [];
          for (var l = 1; l < t.length; l++) {
            var g = e(t[l], n, r);
            i.push(g)
          }
          return i.join("");
        case "escape":
          i = e(t[1], n, r), i = String(i);
          for (var d = 2; d < t.length; d++) xb[t[d]] && (i = xb[t[d]](i));
          return i;
        case "tag":
          var v = t[1];
          if (!se[v]) throw Error("Unable to resolve tag reference " + v + ".");
          return {
            Sg: t[2],
            index: v
          };
        case "zb":
          var p = {
            arg0: t[2],
            arg1: t[3],
            ignore_case: t[5]
          };
          p.function = t[1];
          var h = ve(p, n, r),
            m = !!t[4];
          return m || 2 !== h ? m !== (1 === h) : null;
        default:
          throw Error("Attempting to expand unknown Value type: " + t[0] + ".")
      }
      return t
    },
    ve = function(t, e, n) {
      try {
        return Z(ge(t, e, n))
      } catch (e) {
        JSON.stringify(t)
      }
      return 2
    },
    pe = function(e, t) {
      for (var n = e.if || [], r = 0; r < n.length; r++) {
        var i = t(n[r]);
        if (0 === i) return !1;
        if (2 === i) return null
      }
      for (var o = e.unless || [], a = 0; a < o.length; a++) {
        var c = t(o[a]);
        if (2 === c) return null;
        if (1 === c) return !1
      }
      return !0
    },
    he = function(t) {
      var n = [];
      return function(e) {
        return void 0 === n[e] && (n[e] = ve(ce[e], t)), n[e]
      }
    },
    me = {
      Ki: function(e, t) {
        return t[ie.Hf] && "string" == typeof e && (e = 1 == t[ie.Hf] ? e.toLowerCase() : e.toUpperCase()), t.hasOwnProperty(ie.Jf) && null === e && (e = t[ie.Jf]), t.hasOwnProperty(ie.Lf) && void 0 === e && (e = t[ie.Lf]), t.hasOwnProperty(ie.Kf) && !0 === e && (e = t[ie.Kf]), t.hasOwnProperty(ie.If) && !1 === e && (e = t[ie.If]), e
      }
    },
    _e = {
      ub: "_ee",
      Zb: "_syn_or_mod",
      Kb: "_def",
      jk: "_uei",
      kk: "_upi",
      Wb: "_eu",
      og: "_is_passthrough_cid",
      ng: "_is_linker_valid",
      Re: "_ntg",
      Fd: "_nge",
      Ec: "_ipe",
      Sb: "event_callback",
      pd: "event_timeout",
      za: "gtag.config",
      Ga: "gtag.get",
      xa: "purchase",
      Ob: "refund",
      ob: "begin_checkout",
      Lb: "add_to_cart",
      Mb: "remove_from_cart",
      Nh: "view_cart",
      Nf: "add_to_wishlist",
      ya: "view_item",
      Nb: "view_promotion",
      me: "select_promotion",
      ke: "select_item",
      pb: "view_item_list",
      Mf: "add_payment_info",
      Mh: "add_shipping_info",
      Ia: "value_key",
      Qa: "value_callback",
      V: "allow_ad_personalization_signals",
      Ac: "restricted_data_processing",
      uc: "allow_google_signals",
      oa: "cookie_expires",
      rb: "cookie_update",
      Bc: "session_duration",
      xd: "session_engaged_time",
      nd: "engagement_time_msec",
      Ka: "user_properties",
      W: "transport_url",
      aa: "ads_data_redaction",
      qa: "user_data",
      xc: "first_party_collection",
      D: "ad_storage",
      M: "analytics_storage",
      Ff: "region",
      Gf: "wait_for_update",
      ja: "conversion_linker",
      Aa: "conversion_cookie_prefix",
      fa: "value",
      da: "currency",
      ig: "trip_type",
      X: "items",
      ag: "passengers",
      ed: "allow_custom_scripts",
      hb: "session_id",
      Ge: "quantity",
      Sa: "transaction_id",
      Ra: "language",
      Qb: "country",
      fd: "allow_enhanced_conversions",
      ue: "aw_merchant_id",
      se: "aw_feed_country",
      te: "aw_feed_language",
      qe: "discount",
      N: "developer_id",
      Xf: "global_developer_id_string",
      Vf: "event_developer_id_string",
      yd: "delivery_postal_code",
      Ae: "estimated_delivery_date",
      ye: "shipping",
      Ee: "new_customer",
      ve: "customer_lifetime_value",
      ze: "enhanced_conversions",
      sc: "page_view",
      la: "linker",
      O: "domains",
      Ub: "decorate_forms",
      Uf: "enhanced_conversions_automatic_settings",
      Uh: "auto_detection_enabled",
      Ce: "ga_temp_client_id",
      ne: "user_engagement",
      Hh: "app_remove",
      Ih: "app_store_refund",
      Jh: "app_store_subscription_cancel",
      Kh: "app_store_subscription_convert",
      Lh: "app_store_subscription_renew",
      Oh: "first_open",
      Ph: "first_visit",
      Qh: "in_app_purchase",
      Rh: "session_start",
      Sh: "allow_display_features",
      vc: "campaign",
      gd: "campaign_content",
      hd: "campaign_id",
      jd: "campaign_medium",
      kd: "campaign_name",
      ld: "campaign_source",
      md: "campaign_term",
      na: "client_id",
      ka: "cookie_domain",
      Pb: "cookie_name",
      Za: "cookie_path",
      Ha: "cookie_flags",
      Rb: "custom_map",
      sd: "groups",
      Zf: "non_interaction",
      eb: "page_location",
      Fe: "page_path",
      fb: "page_referrer",
      vd: "page_title",
      Ca: "send_page_view",
      tb: "send_to",
      Cc: "session_engaged",
      wc: "euid_logged_in_state",
      Dc: "session_number",
      ii: "tracking_id",
      Ta: "url_passthrough",
      Tb: "accept_incoming",
      zc: "url_position",
      dg: "phone_conversion_number",
      bg: "phone_conversion_callback",
      cg: "phone_conversion_css_class",
      eg: "phone_conversion_options",
      di: "phone_conversion_ids",
      ci: "phone_conversion_country_code",
      qb: "aw_remarketing",
      pe: "aw_remarketing_only",
      oe: "gclid",
      Th: "auid",
      Xh: "affiliation",
      Tf: "tax",
      xe: "list_name",
      Sf: "checkout_step",
      Rf: "checkout_option",
      Yh: "coupon",
      Zh: "promotions",
      Ja: "user_id",
      gi: "retoken",
      Ba: "cookie_prefix",
      Of: "disable_merchant_reported_purchases",
      Qf: "dc_natural_search",
      Pf: "dc_custom_params",
      Yf: "method",
      hi: "search_term",
      Wh: "content_type",
      bi: "optimize_id",
      ai: "experiments",
      cb: "google_signals",
      rd: "google_tld",
      zd: "update",
      Be: "firebase_id",
      yc: "ga_restrict_domain",
      od: "event_settings",
      we: "dynamic_event_settings",
      Vb: "user_data_settings",
      gg: "screen_name",
      Ie: "screen_resolution",
      sb: "_x_19",
      ab: "enhanced_client_id",
      qd: "_x_20",
      De: "internal_traffic_results",
      Je: "traffic_type",
      wd: "referral_exclusion_definition",
      ud: "ignore_referrer",
      Vh: "content_group",
      ma: "allow_interest_groups",
      He: "redact_device_info",
      Wf: "geo_granularity"
    },
    ye = {};
  _e.lg = Object.freeze((ye[_e.Mf] = 1, ye[_e.Mh] = 1, ye[_e.Lb] = 1, ye[_e.Mb] = 1, ye[_e.Nh] = 1, ye[_e.ob] = 1, ye[_e.ke] = 1, ye[_e.pb] = 1, ye[_e.me] = 1, ye[_e.Nb] = 1, ye[_e.xa] = 1, ye[_e.Ob] = 1, ye[_e.ya] = 1, ye[_e.Nf] = 1, ye)), _e.Le = Object.freeze([_e.V, _e.uc, _e.rb]), _e.vi = Object.freeze([].concat(_e.Le)), _e.Me = Object.freeze([_e.oa, _e.pd, _e.Bc, _e.xd, _e.nd]), _e.wi = Object.freeze([].concat(_e.Me));
  var be = {};
  _e.ie = (be[_e.D] = "1", be[_e.M] = "2", be);
  var we = "CN",
    Se = "CN-31",
    Ce = {},
    Oe = function(e, t) {
      Ce[e] = Ce[e] || [], Ce[e][t] = !0
    },
    Ie = function(e) {
      for (var t = [], n = Ce[e] || [], r = 0; r < n.length; r++) n[r] && (t[Math.floor(r / 6)] ^= 1 << r % 6);
      for (var i = 0; i < t.length; i++) t[i] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(t[i] || 0);
      return t.join("")
    },
    ke = function(e) {
      Oe("GTM", e)
    },
    Ee = new function(e, t) {
      this.g = 1933, this.defaultValue = !1
    }(1933),
    xe = function() {
      var e = Te;
      if (e.ff && e.hasOwnProperty("ff")) return e.ff;
      var t = new e;
      return e.ff = t, e.hasOwnProperty("ff"), t
    },
    Te = function() {
      var n = {};
      this.g = function() {
        var e = Ee.g,
          t = Ee.defaultValue;
        return null != n[e] ? n[e] : t
      }, this.o = function() {
        n[Ee.g] = !0
      }
    },
    Ge = [];

  function Ae() {
    var e = D("google_tag_data", {});
    return e.ics || (e.ics = {
      entries: {},
      set: je,
      update: Ne,
      addListener: Le,
      notifyListeners: Me,
      active: !1,
      usedDefault: !1,
      usedUpdate: !1,
      accessedDefault: !1,
      accessedAny: !1,
      wasSetLate: !1
    }), e.ics
  }

  function je(e, t, n, r, i, o) {
    var a = Ae();
    if (a.usedDefault || !a.accessedDefault && !a.accessedAny || (a.wasSetLate = !0), a.active = !0, a.usedDefault = !0, null != t) {
      var c = a.entries,
        s = c[e] || {},
        u = s.region,
        f = n && k(n) ? n.toUpperCase() : void 0;
      if (r = r.toUpperCase(), i = i.toUpperCase(), "" === r || f === i || (f === r ? u !== i : !f && !u)) {
        var l = !!(o && 0 < o && void 0 === s.update),
          g = {
            region: f,
            initial: "granted" === t,
            update: s.update,
            quiet: l
          };
        "" === r && !1 === s.initial || (c[e] = g), l && F.setTimeout(function() {
          c[e] === g && g.quiet && (g.quiet = !1, Pe(e), Me(), Oe("TAGGING", 2))
        }, o)
      }
    }
  }

  function Ne(e, t) {
    var n = Ae();
    if (n.usedDefault || n.usedUpdate || !n.accessedAny || (n.wasSetLate = !0), n.active = !0, n.usedUpdate = !0, null != t) {
      var r = Fe(n, e),
        i = n.entries,
        o = i[e] = i[e] || {};
      o.update = "granted" === t;
      var a = Fe(n, e);
      o.quiet ? (o.quiet = !1, Pe(e)) : a !== r && Pe(e)
    }
  }

  function Le(e, t) {
    Ge.push({
      Ze: e,
      Vi: t
    })
  }

  function Pe(e) {
    for (var t = 0; t < Ge.length; ++t) {
      var n = Ge[t];
      G(n.Ze) && -1 !== n.Ze.indexOf(e) && (n.jh = !0)
    }
  }

  function Me(e, t) {
    for (var n = 0; n < Ge.length; ++n) {
      var r = Ge[n];
      if (r.jh) {
        r.jh = !1;
        try {
          r.Vi({
            consentEventId: e,
            consentPriorityId: t
          })
        } catch (e) {}
      }
    }
  }

  function Fe(e, t) {
    var n = e.entries[t] || {};
    return void 0 !== n.update ? n.update : n.initial
  }
  var qe = function(e) {
      var t = Ae();
      return t.accessedAny = !0, Fe(t, e)
    },
    Ue = function(e) {
      var t = Ae();
      return t.accessedAny = !0, !(t.entries[e] || {})
        .quiet
    },
    ze = function() {
      if (!xe()
        .g()) return !1;
      var e = Ae();
      return e.accessedAny = !0, e.active
    },
    De = function(e, t) {
      Ae()
        .addListener(e, t)
    },
    Ke = function(t, n) {
      function r() {
        for (var e = 0; e < n.length; e++)
          if (!Ue(n[e])) return !0;
        return !1
      }
      if (r()) {
        var i = !1;
        De(n, function(e) {
          i || r() || (i = !0, t(e))
        })
      } else t({})
    },
    Ve = function(n, e) {
      function r() {
        for (var e = [], t = 0; t < i.length; t++) {
          var n = i[t];
          !1 === qe(n) || o[n] || (e.push(n), o[n] = !0)
        }
        return e
      }
      var i = k(e) ? [e] : e,
        o = {};
      r()
        .length !== i.length && De(i, function(e) {
          var t = r();
          0 < t.length && (e.Ze = t, n(e))
        })
    };
  var Re = [_e.D, _e.M],
    We = function(e) {
      var t = e[_e.Ff];
      t && ke(40);
      var a = e[_e.Gf];
      a && ke(41);
      for (var c = G(t) ? t : [t], n = {
          kc: 0
        }; n.kc < c.length; ++(n = {
          kc: n.kc
        })
        .kc) O(e, function(o) {
        return function(e, t) {
          if (e !== _e.Ff && e !== _e.Gf) {
            var n = c[o.kc],
              r = we,
              i = Se;
            Ae()
              .set(e, t, n, r, i, a)
          }
        }
      }(n))
    },
    Ze = 0,
    Be = function(e, t) {
      var n, r;
      O(e, function(e, t) {
          Ae()
            .update(e, t)
        }), n = t.eventId, r = t.priorityId, Ae()
        .notifyListeners(n, r);
      var i = A(),
        o = i - Ze;
      Ze && 0 <= o && o < 1e3 && ke(66), Ze = i
    },
    Je = function(e) {
      var t = qe(e);
      return null == t || t
    },
    He = function() {
      return "G1" + function(e) {
        for (var t = [], n = 0; n < Re.length; n++) {
          var r = e(Re[n]);
          t[n] = !0 === r ? "1" : !1 === r ? "0" : "-"
        }
        return t.join("")
      }(qe)
    },
    $e = function(e, t) {
      Ve(e, t)
    };
  if (q.querySelectorAll) try {
    var Qe = q.querySelectorAll(":root");
    Qe && 1 == Qe.length && Qe[0] == q.documentElement && !0
  } catch (e) {}
  var Xe = {},
    Ye = F.google_tag_manager = F.google_tag_manager || {};
  Math.random();
  Xe.Jd = "5p1", Xe.Z = "dataLayer", Xe.Gh = "ChEI8LPMlAYQ0pWBm6r6v5boARInAElsKmEyFn6llEfrMWzI5akIvZdGClIz8wbyG2Aw4bwAcCCafEZ9GgLc3Q==";
  var et, tt = {
      __cl: !0,
      __ecl: !0,
      __ehl: !0,
      __evl: !0,
      __fal: !0,
      __fil: !0,
      __fsl: !0,
      __hl: !0,
      __jel: !0,
      __lcl: !0,
      __sdl: !0,
      __tl: !0,
      __ytl: !0
    },
    nt = {
      __paused: !0,
      __tg: !0
    };
  for (et in tt) tt.hasOwnProperty(et) && (nt[et] = !0);
  Xe.qc = "www.googletagmanager.com";
  var rt, it = Xe.qc;
  it = Xe.qc + "/gtag/js", rt = it;
  f("");
  var ot = null,
    at = null,
    ct = {},
    st = {},
    ut = function() {
      var e = Ye.sequence || 1;
      return Ye.sequence = e + 1, e
    };
  Xe.Fh = "";
  Xe.Kd = "";
  var ft = new l,
    lt = {},
    gt = {},
    dt = {
      name: Xe.Z,
      set: function(e, t) {
        ne(v(e, t), lt), mt()
      },
      get: function(e) {
        return vt(e, 2)
      },
      reset: function() {
        ft = new l, lt = {}, mt()
      }
    },
    vt = function(e, t) {
      return 2 != t ? ft.get(e) : pt(e)
    },
    pt = function(e) {
      var t, n = e.split(".");
      t = t || [];
      for (var r = lt, i = 0; i < n.length; i++) {
        if (null === r) return !1;
        if (void 0 === r) break;
        if (r = r[n[i]], -1 !== t.indexOf(r)) return
      }
      return r
    },
    ht = function(e, t) {
      gt.hasOwnProperty(e) || (ft.set(e, t), ne(v(e, t), lt), mt())
    },
    mt = function(n) {
      O(gt, function(e, t) {
        ft.set(e, t), ne(v(e), lt), ne(v(e, t), lt), n && delete gt[e]
      })
    },
    _t = function(e, t) {
      var n = 1 !== (void 0 === t ? 2 : t) ? pt(e) : ft.get(e);
      return "array" === Y(n) || "object" === Y(n) ? ne(n) : n
    },
    yt = /:[0-9]+$/,
    bt = function(e, t, n) {
      for (var r = e.split("&"), i = 0; i < r.length; i++) {
        var o = r[i].split("=");
        if (decodeURIComponent(o[0])
          .replace(/\+/g, " ") === t) {
          var a = o.slice(1)
            .join("=");
          return n ? a : decodeURIComponent(a)
            .replace(/\+/g, " ")
        }
      }
    },
    wt = function(e, t, n, r, i) {
      return t && (t = String(t)
        .toLowerCase()), "protocol" !== t && "port" !== t || (e.protocol = Ct(e.protocol) || Ct(F.location.protocol)), "port" === t ? e.port = String(Number(e.hostname ? e.port : F.location.port) || ("http" === e.protocol ? 80 : "https" === e.protocol ? 443 : "")) : "host" === t && (e.hostname = (e.hostname || F.location.hostname)
        .replace(yt, "")
        .toLowerCase()), St(e, t, n, r, i)
    },
    St = function(e, t, n, r, i) {
      var o, a = Ct(e.protocol);
      switch (t && (t = String(t)
        .toLowerCase()), t) {
        case "url_no_fragment":
          o = Ot(e);
          break;
        case "protocol":
          o = a;
          break;
        case "host":
          if (o = e.hostname.replace(yt, "")
            .toLowerCase(), n) {
            var c = /^www\d*\./.exec(o);
            c && c[0] && (o = o.substr(c[0].length))
          }
          break;
        case "port":
          o = String(Number(e.port) || ("http" === a ? 80 : "https" === a ? 443 : ""));
          break;
        case "path":
          e.pathname || e.hostname || Oe("TAGGING", 1);
          var s = (o = "/" === e.pathname.substr(0, 1) ? e.pathname : "/" + e.pathname)
            .split("/");
          0 <= (r || [])
            .indexOf(s[s.length - 1]) && (s[s.length - 1] = ""), o = s.join("/");
          break;
        case "query":
          o = e.search.replace("?", ""), i && (o = bt(o, i));
          break;
        case "extension":
          var u = e.pathname.split(".");
          o = (o = 1 < u.length ? u[u.length - 1] : "")
            .split("/")[0];
          break;
        case "fragment":
          o = e.hash.replace("#", "");
          break;
        default:
          o = e && e.href
      }
      return o
    },
    Ct = function(e) {
      return e ? e.replace(":", "")
        .toLowerCase() : ""
    },
    Ot = function(e) {
      var t = "";
      if (e && e.href) {
        var n = e.href.indexOf("#");
        t = n < 0 ? e.href : e.href.substr(0, n)
      }
      return t
    },
    It = function(e) {
      var t = q.createElement("a");
      e && (t.href = e);
      var n = t.pathname;
      "/" !== n[0] && (e || Oe("TAGGING", 1), n = "/" + n);
      var r = t.hostname.replace(yt, "");
      return {
        href: t.href,
        protocol: t.protocol,
        host: t.host,
        hostname: r,
        pathname: n,
        search: t.search,
        hash: t.hash,
        port: t.port
      }
    },
    kt = function(e, t, n) {
      for (var r = [], i = t.split(";"), o = 0; o < i.length; o++) {
        var a = i[o].split("="),
          c = a[0].replace(/^\s*|\s*$/g, "");
        if (c && c == e) {
          var s = a.slice(1)
            .join("=")
            .replace(/^\s*|\s*$/g, "");
          s && n && (s = decodeURIComponent(s)), r.push(s)
        }
      }
      return r
    };

  function Et(e) {
    return "null" !== e.origin
  }
  var xt = function(e, t, n, r) {
    return Gt(r) ? kt(e, String(t || Tt()), n) : []
  };
  var Tt = function() {
      return Et(window) ? window.document.cookie : ""
    },
    Gt = function(e) {
      if (!xe()
        .g() || !e || !ze()) return !0;
      if (!Ue(e)) return !1;
      var t = qe(e);
      return null == t || !!t
    };
  var At, jt, Nt;

  function Lt() {
    for (var e = At, t = {}, n = 0; n < e.length; ++n) t[e[n]] = n;
    return t
  }

  function Pt() {
    var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return (e += e.toLowerCase() + "0123456789-_") + "."
  }
  var Mt = function() {
      var t = Ht,
        n = $t,
        e = Ut(),
        r = function(e) {
          t(e.target || e.srcElement || {})
        };
      if (!e.init) {
        $(q, "mousedown", r), $(q, "keyup", r), $(q, "submit", function(e) {
          n(e.target || e.srcElement || {})
        });
        var i = HTMLFormElement.prototype.submit;
        HTMLFormElement.prototype.submit = function() {
          n(this), i.call(this)
        }, e.init = !0
      }
    },
    Ft = function(e, t, n, r, i) {
      var o = {
        callback: e,
        domains: t,
        fragment: 2 === n,
        placement: n,
        forms: r,
        sameHost: i
      };
      Ut()
        .decorators.push(o)
    },
    qt = function(e, t, n) {
      for (var r = Ut()
        .decorators, i = {}, o = 0; o < r.length; ++o) {
        var a, c = r[o];
        if (a = !n || c.forms) e: {
          var s = c.domains,
            u = e,
            f = !!c.sameHost;
          if (s && (f || u !== q.location.hostname))
            for (var l = 0; l < s.length; l++)
              if (s[l] instanceof RegExp) {
                if (s[l].test(u)) {
                  a = !0;
                  break e
                }
              } else if (0 <= u.indexOf(s[l]) || f && 0 <= s[l].indexOf(u)) {
            a = !0;
            break e
          }
          a = !1
        }
        if (a) {
          var g = c.placement;
          null == g && (g = c.fragment ? 2 : 1), g === t && N(i, c.callback())
        }
      }
      return i
    };

  function Ut() {
    var e = D("google_tag_data", {}),
      t = e.gl;
    return t && t.decorators || (t = {
      decorators: []
    }, e.gl = t), t
  }
  var zt = /([^?#]+)(\?[^#]*)?(#.*)?/;

  function Dt(e) {
    return new RegExp("(.*?)(^|&)" + e + "=([^&]*)&?(.*)")
  }
  var Kt = function(e) {
    var t, n = [];
    for (t in e)
      if (e.hasOwnProperty(t)) {
        var r = e[t];
        if (void 0 !== r && r == r && null !== r && "[object Object]" !== r.toString()) {
          n.push(t);
          var i, o = n,
            a = o.push,
            c = String(r);
          At = At || Pt(), jt = jt || Lt();
          for (var s = [], u = 0; u < c.length; u += 3) {
            var f = u + 1 < c.length,
              l = u + 2 < c.length,
              g = c.charCodeAt(u),
              d = f ? c.charCodeAt(u + 1) : 0,
              v = l ? c.charCodeAt(u + 2) : 0,
              p = g >> 2,
              h = (3 & g) << 4 | d >> 4,
              m = (15 & d) << 2 | v >> 6,
              _ = 63 & v;
            l || (_ = 64, f || (m = 64)), s.push(At[p], At[h], At[m], At[_])
          }
          i = s.join(""), a.call(o, i)
        }
      } var y = n.join("*");
    return ["1", Vt(y), y].join("*")
  };

  function Vt(e, t) {
    var n, r = [F.navigator.userAgent, (new Date)
      .getTimezoneOffset(), U.userLanguage || U.language, Math.floor(A() / 60 / 1e3) - (void 0 === t ? 0 : t), e
    ].join("*");
    if (!(n = Nt)) {
      for (var i = Array(256), o = 0; o < 256; o++) {
        for (var a = o, c = 0; c < 8; c++) a = 1 & a ? a >>> 1 ^ 3988292384 : a >>> 1;
        i[o] = a
      }
      n = i
    }
    Nt = n;
    for (var s = 4294967295, u = 0; u < r.length; u++) s = s >>> 8 ^ Nt[255 & (s ^ r.charCodeAt(u))];
    return ((-1 ^ s) >>> 0)
      .toString(36)
  }

  function Rt(e, t) {
    var n = Dt(e)
      .exec(t),
      r = t;
    if (n) {
      var i = n[2],
        o = n[4];
      r = n[1], o && (r = r + i + o)
    }
    return r
  }

  function Wt(n, e, t, r) {
    function i(e) {
      var t = (e = Rt(n, e))
        .charAt(e.length - 1);
      return e && "&" !== t && (e += "&"), e + u
    }
    r = void 0 !== r && r;
    var o = zt.exec(t);
    if (!o) return "";
    var a = o[1],
      c = o[2] || "",
      s = o[3] || "",
      u = n + "=" + e;
    return r ? s = "#" + i(s.substring(1)) : c = "?" + i(c.substring(1)), "" + a + c + s
  }

  function Zt(e, t) {
    var n = "FORM" === (e.tagName || "")
      .toUpperCase(),
      r = qt(t, 1, n),
      i = qt(t, 2, n),
      o = qt(t, 3, n);
    if (d(r)) {
      var a = Kt(r);
      n ? Jt("_gl", a, e) : Bt("_gl", a, e, !1)
    }!n && d(i) && Bt("_gl", Kt(i), e, !0);
    for (var c in o)
      if (o.hasOwnProperty(c)) e: {
        var s = c,
          u = o[c],
          f = e;
        if (f.tagName) {
          if ("a" === f.tagName.toLowerCase()) {
            Bt(s, u, f);
            break e
          }
          if ("form" === f.tagName.toLowerCase()) {
            Jt(s, u, f);
            break e
          }
        }
        "string" == typeof f && Wt(s, u, f)
      }
  }

  function Bt(e, t, n, r) {
    if (n.href) {
      var i = Wt(e, t, n.href, void 0 !== r && r);
      S.test(i) && (n.href = i)
    }
  }

  function Jt(e, t, n) {
    if (n && n.action) {
      var r = (n.method || "")
        .toLowerCase();
      if ("get" === r) {
        for (var i = n.childNodes || [], o = !1, a = 0; a < i.length; a++) {
          var c = i[a];
          if (c.name === e) {
            c.setAttribute("value", t), o = !0;
            break
          }
        }
        if (!o) {
          var s = q.createElement("input");
          s.setAttribute("type", "hidden"), s.setAttribute("name", e), s.setAttribute("value", t), n.appendChild(s)
        }
      } else if ("post" === r) {
        var u = Wt(e, t, n.action);
        S.test(u) && (n.action = u)
      }
    }
  }

  function Ht(e) {
    try {
      var t;
      e: {
        for (var n = e, r = 100; n && 0 < r;) {
          if (n.href && n.nodeName.match(/^a(?:rea)?$/i)) {
            t = n;
            break e
          }
          n = n.parentNode, r--
        }
        t = null
      }
      var i = t;
      if (i) {
        var o = i.protocol;
        "http:" !== o && "https:" !== o || Zt(i, i.hostname)
      }
    } catch (e) {}
  }

  function $t(e) {
    try {
      if (e.action) Zt(e, wt(It(e.action), "host"))
    } catch (e) {}
  }
  var Qt = function(e, t) {
      Mt(), Ft(e, [St(F.location, "host", !0)], t, !0, !0)
    },
    Xt = {},
    Yt = /^[\w-]+$/;
  var tn = function() {
      var e = It(F.location.href),
        t = wt(e, "query", !1, void 0, "gclid"),
        n = wt(e, "query", !1, void 0, "gclsrc"),
        r = wt(e, "query", !1, void 0, "wbraid"),
        i = wt(e, "query", !1, void 0, "dclid");
      if (!t || !n || !r) {
        var o = e.hash.replace("#", "");
        t = t || bt(o, "gclid"), n = n || bt(o, "gclsrc"), r = r || bt(o, "wbraid")
      }
      return nn(t, n, i, r)
    },
    nn = function(e, t, n, r) {
      var i = {},
        o = function(e, t) {
          i[t] || (i[t] = []), i[t].push(e)
        };
      if (i.gclid = e, i.gclsrc = t, i.dclid = n, void 0 !== r && Yt.test(r) && o(i.gbraid = r, "gb"), void 0 !== e && e.match(Yt)) switch (t) {
        case void 0:
          o(e, "aw");
          break;
        case "aw.ds":
          o(e, "aw"), o(e, "dc");
          break;
        case "ds":
        case "3p.ds":
          o(e, "dc");
          break;
        case "gf":
          o(e, "gf");
          break;
        case "ha":
          o(e, "ha")
      }
      return n && o(n, "dc"), i
    };
  var rn = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
    on = {
      cl: ["ecl"],
      customPixels: ["nonGooglePixels"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
      customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"]
    },
    an = {
      cl: ["ecl"],
      customPixels: ["customScripts", "html"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
    },
    cn = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" "),
    sn = function() {
      return rn.test(F.location && F.location.hostname)
    },
    un = {
      F: "UA-137340638-1",
      oc: ""
    },
    fn = function() {
      return [un.F]
    },
    ln = function() {
      return [un.F]
    },
    gn = function() {
      this.container = {}, this.destination = {}, this.canonical = {}
    };

  function dn() {
    var e = Ye.tidr;
    return e || (e = new gn, Ye.tidr = e), e
  }
  var vn, pn = function() {
      2022 <= _n()
        .length && mn()
    },
    hn = function() {
      Fn || (Fn = F.setTimeout(mn, 500))
    },
    mn = function() {
      if (Fn && (F.clearTimeout(Fn), Fn = void 0), void 0 !== Ln && (!In[Ln] || kn || En))
        if (Mn[Ln] || Un.jj() || zn-- <= 0) ke(1), Mn[Ln] = !0;
        else {
          Un.Hj();
          var e = _n(!0);
          H(e), In[Ln] = !0, jn = Gn = xn = Tn = Nn = En = kn = "", An = []
        }
    },
    _n = function(e) {
      var t = Ln;
      if (void 0 === t) return "";
      var n = Ie("GTM"),
        r = Ie("TAGGING");
      return [On, In[t] ? "" : "&es=1", Pn[t], void 0, n ? "&u=" + n : "", r ? "&ut=" + r : "", "&tc=" + se.filter(function(e) {
          return e
        })
        .length, kn, En, Nn, Tn, void 0, xn, Gn, jn ? "&dl=" + encodeURIComponent(jn) : "", 0 < An.length ? "&tdp=" + An.join(".") : "", "&z=0"
      ].join("")
    },
    yn = function() {
      On = bn()
    },
    bn = function() {
      return [Cn, "&v=3&t=t", "&pid=" + u(), "&rv=" + Xe.Jd].join("")
    },
    wn = {
      sampleRate: "0.005000",
      zh: "",
      yh: Number("5")
    };
  (vn = 0 <= q.location.search.indexOf("?gtm_latency=") || 0 <= q.location.search.indexOf("&gtm_latency=")) || (vn = Math.random() < wn.sampleRate);
  var Sn = vn,
    Cn = "https://www.googletagmanager.com/a?id=" + un.F + "&cv=1",
    On = (un.F, bn()),
    In = {},
    kn = "",
    En = "",
    xn = "",
    Tn = "",
    Gn = "",
    An = [],
    jn = "",
    Nn = "",
    Ln = void 0,
    Pn = {},
    Mn = {},
    Fn = void 0,
    qn = 5;
  0 < wn.yh && (qn = wn.yh);
  var Un = function(t, e) {
      for (var n = 0, r = [], i = 0; i < t; ++i) r.push(0);
      return {
        jj: function() {
          return !(n < t) && A() - r[n % t] < 1e3
        },
        Hj: function() {
          var e = n++ % t;
          r[e] = A()
        }
      }
    }(qn),
    zn = 1e3,
    Dn = function(e, t) {
      var n;
      Sn && !Mn[e] && Ln !== e && (mn(), xn = kn = "", Pn[Ln = e] = "&e=" + (0 === (n = t)
        .indexOf("gtm.") ? encodeURIComponent(n) : "*") + "&eid=" + e, hn())
    },
    Kn = function(e, t, n, r) {
      if (Sn && t) {
        var i, o = String(t[ie.vb] || "")
          .replace(/_/g, "");
        0 === o.indexOf("cvt") && (o = "cvt");
        var a = n + (i = o);
        if (!Mn[e]) {
          e !== Ln && (mn(), Ln = e), kn = kn ? kn + "." + a : "&tr=" + a;
          var c = t.function;
          if (!c) throw Error("Error: No function name given for function call.");
          var s = (fe[c] ? "1" : "2") + i;
          xn = xn ? xn + "." + s : "&ti=" + s, hn(), pn()
        }
      }
    },
    Vn = function(e, t, n) {
      if (Sn && !Mn[e]) {
        e !== Ln && (mn(), Ln = e);
        var r = n + t;
        En = En ? En + "." + r : "&epr=" + r, hn(), pn()
      }
    },
    Rn = function(e, t, n) {},
    Wn = {},
    Zn = (Object.freeze((Wn[_e.ub] = !0, Wn[_e.Zb] = !0, Wn)), {});
  Object.freeze((Zn[_e.Ca] = !0, Zn)), 0 <= q.location.search.indexOf("?gtm_diagnostics=") || q.location.search.indexOf("&gtm_diagnostics=");
  var Bn = !1,
    Jn = 0,
    Hn = [];

  function $n(e) {
    if (!Bn) {
      var t = q.createEventObject,
        n = "complete" == q.readyState,
        r = "interactive" == q.readyState;
      if (!e || "readystatechange" != e.type || n || !t && r) {
        Bn = !0;
        for (var i = 0; i < Hn.length; i++) Q(Hn[i])
      }
      Hn.push = function() {
        for (var e = 0; e < arguments.length; e++) Q(arguments[e]);
        return 0
      }
    }
  }

  function Qn() {
    if (!Bn && Jn < 140) {
      Jn++;
      try {
        q.documentElement.doScroll("left"), $n()
      } catch (e) {
        F.setTimeout(Qn, 50)
      }
    }
  }
  var Xn = function(e, t) {
      this.g = !1, this.C = [], this.I = {
        tags: []
      }, this.U = !1, this.o = this.s = 0, nr(this, e, t)
    },
    Yn = function(e, t, n, r) {
      if (nt.hasOwnProperty(t) || "__zone" === t) return -1;
      var i = {};
      return te(r) && (i = ne(r, i)), i.id = n, i.status = "timeout", e.I.tags.push(i) - 1
    },
    er = function(e, t, n, r) {
      var i = e.I.tags[t];
      i && (i.status = n, i.executionTime = r)
    },
    tr = function(e) {
      if (!e.g) {
        for (var t = e.C, n = 0; n < t.length; n++) t[n]();
        e.g = !0, e.C.length = 0
      }
    },
    nr = function(e, t, n) {
      void 0 !== t && rr(e, t), n && F.setTimeout(function() {
        return tr(e)
      }, Number(n))
    },
    rr = function(e, t) {
      var n = j(function() {
        return Q(function() {
          t(un.F, e.I)
        })
      });
      e.g ? n() : e.C.push(n)
    },
    ir = function(e) {
      return e.s++, j(function() {
        e.o++, e.U && e.o >= e.s && tr(e)
      })
    },
    or = function() {
      function e(e) {
        return !s(e) || e < 0 ? 0 : e
      }
      if (!Ye._li && F.performance && F.performance.timing) {
        var t = F.performance.timing.navigationStart,
          n = s(dt.get("gtm.start")) ? dt.get("gtm.start") : 0;
        Ye._li = {
          cst: e(n - t),
          cbt: e(at - t)
        }
      }
    },
    ar = function() {
      return F.GoogleAnalyticsObject && F[F.GoogleAnalyticsObject]
    },
    cr = function(e) {
      F.GoogleAnalyticsObject || (F.GoogleAnalyticsObject = e || "ga");
      var t = F.GoogleAnalyticsObject;
      if (F[t]) F.hasOwnProperty(t) || ke(12);
      else {
        var n = function e() {
          (e.q = e.q || [])
          .push(arguments)
        };
        n.l = Number(x()), F[t] = n
      }
      return or(), F[t]
    },
    sr = function(e) {
      if (ze()) {
        var t = ar();
        t(e + "require", "linker"), t(e + "linker:passthrough", !0)
      }
    };

  function ur(e, t, n, r) {
    var i = se[e],
      o = function(c, e, s, t) {
        function n() {
          if (u[ie.ri]) l();
          else {
            var e = ge(u, s, []),
              t = e[ie.Dh];
            if (null != t)
              for (var n = 0; n < t.length; n++)
                if (!Je(t[n])) return void l();
            var r = Yn(s.yb, String(u[ie.vb]), Number(u[ie.xg]), e[ie.si]),
              i = !1;
            e.vtp_gtmOnSuccess = function() {
              if (!i) {
                i = !0;
                var e = A() - o;
                Kn(s.id, se[c], "5", e), er(s.yb, r, "success", e), f()
              }
            }, e.vtp_gtmOnFailure = function() {
              if (!i) {
                i = !0;
                var e = A() - o;
                Kn(s.id, se[c], "6", e), er(s.yb, r, "failure", e), l()
              }
            }, e.vtp_gtmTagId = u.tag_id, e.vtp_gtmEventId = s.id, s.priorityId && (e.vtp_gtmPriorityId = s.priorityId), Kn(s.id, u, "1");
            var o = A();
            try {
              le(e, {
                event: s,
                index: c,
                type: 1
              })
            } catch (e) {
              a = A() - o, Kn(s.id, u, "7", a), er(s.yb, r, "exception", a), i || (i = !0, l())
            }
          }
          var a
        }
        var u = se[c],
          f = e.onSuccess,
          l = e.onFailure,
          r = e.terminate;
        if (s.jf(u)) return null;
        var i = de(u[ie.yg], s, []);
        if (i && i.length) {
          var o = i[0],
            a = ur(o.index, {
              onSuccess: f,
              onFailure: l,
              terminate: r
            }, s, t);
          if (!a) return null;
          f = a, l = 2 === o.Sg ? r : a
        }
        if (u[ie.pg] || u[ie.xi]) {
          var g = u[ie.pg] ? ue : s.Uj,
            d = f,
            v = l;
          if (!g[c]) {
            n = j(n);
            var p = (_ = n, y = [], b = [], (m = g)[h = c] = (w = y, S = b, C = _, function(e, t) {
              w.push(e), S.push(t), C()
            }), {
              onSuccess: function() {
                m[h] = fr;
                for (var e = 0; e < y.length; e++) y[e]()
              },
              onFailure: function() {
                m[h] = lr;
                for (var e = 0; e < b.length; e++) b[e]()
              }
            });
            f = p.onSuccess, l = p.onFailure
          }
          return function() {
            g[c](d, v)
          }
        }
        var h, m, _, y, b, w, S, C;
        return n
      }(e, t, n, r);
    if (!o) return null;
    var a = de(i[ie.vg], n, []);
    if (a && a.length) {
      var c = a[0];
      o = ur(c.index, {
        onSuccess: o,
        onFailure: 1 === c.Sg ? t.terminate : o,
        terminate: t.terminate
      }, n, r)
    }
    return o
  }

  function fr(e) {
    e()
  }

  function lr(e, t) {
    t()
  }

  function gr() {
    return !!Xe.Kd && "SGTM_TOKEN" !== Xe.Kd.split("@@")
      .join("")
  }
  var dr = function() {
      return !1
    },
    vr = function(e, t, n, r) {
      return (2 === pr() || r || "http:" != F.location.protocol ? e : t) + n
    },
    pr = function() {
      var e, t = function() {
        if (z) {
          var e = z.toLowerCase();
          if (0 === e.indexOf("https://")) return 2;
          if (0 === e.indexOf("http://")) return 3
        }
        return 1
      }();
      if (1 === t) e: {
        for (var n = rt, r = "https://" + (n = n.toLowerCase()), i = "http://" + n, o = 1, a = q.getElementsByTagName("script"), c = 0; c < a.length && c < 100; c++) {
          var s = a[c].src;
          if (s) {
            if (0 === (s = s.toLowerCase())
              .indexOf(i)) {
              e = 3;
              break e
            }
            1 === o && 0 === s.indexOf(r) && (o = 2)
          }
        }
        e = o
      }
      else e = t;
      return e
    },
    hr = function(e, t, n) {
      if (!_r() && (u = e, !dn()
        .container.hasOwnProperty(u))) {
        var r = n ? "/gtag/js" : "/gtm.js",
          i = "?id=" + encodeURIComponent(e) + "&l=" + Xe.Z,
          o = 0 === e.indexOf("GTM-");
        o || (i += "&cx=c");
        var a = gr();
        a && (i += "&sign=" + Xe.Kd);
        var c = void 0;
        if (!c) {
          var s = Xe.qc + r;
          a && z && o && (s = z.replace(/^(?:https?:\/\/)?/i, "")
            .split(/[?#]/)[0]), c = vr("https://", "http://", s + i)
        }
        dn()
          .container[e] = !0, J(c)
      }
      var u
    },
    mr = function(e, t) {
      hr(e, 0, !0)
    };

  function _r() {
    return !!dr()
  }
  var yr = [];
  yr[1] = !0, yr[2] = !0, yr[6] = !0, yr[7] = !0, yr[8] = !0, yr[10] = !0;
  var br = function() {
    this.eventModel = {}, this.targetConfig = {}, this.containerConfig = {}, this.globalConfig = {}, this.dataLayerConfig = {}, this.remoteConfig = {}, this.eventMetadata = {}, this.onSuccess = function() {}, this.onFailure = function() {}, this.setContainerTypeLoaded = function() {}, this.getContainerTypeLoaded = function() {}, this.priorityId = this.eventId = void 0, this.isGtmEvent = !1
  };
  (e = br.prototype)
  .getWithConfig = function(e) {
    return void 0 !== this.eventModel[e] ? this.eventModel[e] : void 0 !== this.targetConfig[e] ? this.targetConfig[e] : void 0 !== this.containerConfig[e] ? this.containerConfig[e] : (Sr(this, this.globalConfig[e], this.dataLayerConfig[e]) && (ke(71), ke(79)), void 0 !== this.globalConfig[e] ? this.globalConfig[e] : void 0 !== this.remoteConfig[e] ? this.remoteConfig[e] : void 0)
  }, e.getTopLevelKeys = function() {
    function e(e) {
      for (var t = Object.keys(e), n = 0; n < t.length; ++n) r[t[n]] = 1
    }
    var r = {};
    e(this.eventModel), e(this.targetConfig), e(this.containerConfig), e(this.globalConfig);
    for (var t = Object.keys(this.dataLayerConfig), n = 0; n < t.length; n++) {
      var i = t[n];
      if ("event" !== i && "gtm" !== i && "tagTypeBlacklist" !== i && !r.hasOwnProperty(i)) {
        ke(71), ke(80);
        break
      }
    }
    return Object.keys(r)
  }, e.getMergedValues = function(e, t) {
    function n(e) {
      te(e) && O(e, function(e, t) {
        i = !0, r[e] = t
      })
    }
    var r = {},
      i = !1;
    t && 1 !== t || (n(this.remoteConfig[e]), n(this.globalConfig[e]), n(this.containerConfig[e]), n(this.targetConfig[e])), t && 2 !== t || n(this.eventModel[e]);
    var o = i,
      a = r;
    return i = !(r = {}), t && 1 !== t || (n(this.remoteConfig[e]), n(this.dataLayerConfig[e]), n(this.containerConfig[e]), n(this.targetConfig[e])), t && 2 !== t || n(this.eventModel[e]), (i !== o || Sr(this, r, a)) && (ke(71), ke(81)), r = a, (i = o) ? r : void 0
  }, e.getKeysFromFirstOfAnyScope = function(n) {
    var r = {},
      i = !1,
      e = function(e) {
        for (var t = 0; t < n.length; t++) void 0 !== e[n[t]] && (r[n[t]] = e[n[t]], i = !0);
        return i
      };
    if (e(this.eventModel) || e(this.targetConfig) || e(this.containerConfig)) return r;
    e(this.globalConfig);
    var t = r,
      o = i;
    return i = !(r = {}), e(this.dataLayerConfig), Sr(this, r, t) && (ke(71), ke(82)), r = t, (i = o) || e(this.remoteConfig), r
  }, e.getEventModelKeys = function() {
    var e, t = [];
    for (e in this.eventModel) e !== _e.ub && this.eventModel.hasOwnProperty(e) && void 0 !== this.eventModel[e] && t.push(e);
    return t
  };
  var wr, Sr = function e(t, n, r) {
    try {
      if (n === r) return !1;
      var i = Y(n);
      if (i !== Y(r) || !(te(n) && te(r) || "array" === i)) return !0;
      if ("array" === i) {
        if (n.length !== r.length) return !0;
        for (var o = 0; o < n.length; o++)
          if (e(t, n[o], r[o])) return !0
      } else {
        for (var a in r)
          if (!n.hasOwnProperty(a)) return !0;
        for (var c in n)
          if (!r.hasOwnProperty(c) || e(t, n[c], r[c])) return !0
      }
    } catch (e) {
      ke(72)
    }
    return !1
  };
  if (3 === Xe.Jd.length) wr = "g";
  else {
    wr = "g"
  }
  var Cr = {
      "": "n",
      UA: "u",
      AW: "a",
      DC: "d",
      G: "e",
      GF: "f",
      HA: "h",
      GTM: wr,
      OPT: "o"
    },
    Or = function(e) {
      var t, n = un.F.split("-"),
        r = n[0].toUpperCase(),
        i = Cr[r] || "i",
        o = e && "GTM" === r ? n[1] : "OPT" === r ? n[1] : "";
      if (3 === Xe.Jd.length) {
        t = "2" + (dr() ? "s" : "o")
      } else t = "";
      return t + i + Xe.Jd + o
    };

  function Ir(e, t) {
    if ("" === e) return t;
    var n = Number(e);
    return isNaN(n) ? t : n
  }

  function kr() {
    return M("iPhone") && !M("iPod") && !M("iPad")
  }
  M("Opera"), M("Trident") || M("MSIE"), M("Edge"), !M("Gecko") || -1 != P()
    .toLowerCase()
    .indexOf("webkit") && !M("Edge") || M("Trident") || M("MSIE") || M("Edge"), -1 != P()
    .toLowerCase()
    .indexOf("webkit") && !M("Edge") && M("Mobile"), M("Macintosh"), M("Windows"), M("Linux") || M("CrOS");
  var Er = a.navigator || null;
  Er && (Er.appVersion || "")
    .indexOf("X11"), M("Android"), kr(), M("iPad"), M("iPod"), kr() || M("iPad") || M("iPod"), P()
    .toLowerCase()
    .indexOf("kaios");
  var xr = function(e) {
      return void 0 !== e.addtlConsent && "string" != typeof e.addtlConsent && (e.addtlConsent = void 0), void 0 !== e.gdprApplies && "boolean" != typeof e.gdprApplies && (e.gdprApplies = void 0), void 0 !== e.tcString && "string" != typeof e.tcString || void 0 !== e.listenerId && "number" != typeof e.listenerId ? 2 : e.cmpStatus && "error" !== e.cmpStatus ? 0 : 3
    },
    Tr = function(e, t, n) {
      this.o = e, this.g = null, this.I = {}, this.Oa = 0, this.U = void 0 === t ? 500 : t, this.C = void 0 !== n && n, this.s = null
    };
  ! function(e, t) {
    if (e.prototype = i(t.prototype), e.prototype.constructor = e, o) o(e, t);
    else
      for (var n in t)
        if ("prototype" != n)
          if (Object.defineProperties) {
            var r = Object.getOwnPropertyDescriptor(t, n);
            r && Object.defineProperty(e, n, r)
          } else e[n] = t[n];
    e.tk = t.prototype
  }(Tr, function() {}), Tr.prototype.addEventListener = function(n) {
    var t, r = this,
      i = {
        internalBlockOnErrors: this.C
      },
      o = (t = function() {
        return n(i)
      }, function() {
        if (t) {
          var e = t;
          t = null, e()
        }
      }),
      a = 0; - 1 !== this.U && (a = setTimeout(function() {
      i.tcString = "tcunavailable", i.internalErrorState = 1, o()
    }, this.U));
    try {
      jr(this, "addEventListener", function(e, t) {
        clearTimeout(a), e ? ((i = e)
          .internalErrorState = xr(i), i.internalBlockOnErrors = r.C, t && 0 === i.internalErrorState || (i.tcString = "tcunavailable", t || (i.internalErrorState = 3))) : (i.tcString = "tcunavailable", i.internalErrorState = 3), n(i)
      })
    } catch (e) {
      i.tcString = "tcunavailable", i.internalErrorState = 3, a && (clearTimeout(a), a = 0), o()
    }
  }, Tr.prototype.removeEventListener = function(e) {
    e && e.listenerId && jr(this, "removeEventListener", null, e.listenerId)
  };
  var Gr = function(e, t, n) {
      var r, i;
      r = void 0 === r ? "755" : r;
      e: {
        if (e.publisher && e.publisher.restrictions) {
          var o = e.publisher.restrictions[t];
          if (void 0 !== o) {
            i = o[void 0 === r ? "755" : r];
            break e
          }
        }
        i = void 0
      }
      if (0 === i) return !1;
      var a, c = n;
      if (2 === n ? (c = 0, 2 === i && (c = 1)) : 3 === n && ((c = 1) === i && (c = 0)), 0 === c)
        if (e.purpose && e.vendor) {
          var s = Ar(e.vendor.consents, void 0 === r ? "755" : r);
          a = !(!s || "1" !== t || !e.purposeOneTreatment || "CH" !== e.publisherCC) || s && Ar(e.purpose.consents, t)
        } else a = !0;
      else a = 1 !== c || (!e.purpose || !e.vendor || Ar(e.purpose.legitimateInterests, t) && Ar(e.vendor.legitimateInterests, void 0 === r ? "755" : r));
      return a
    },
    Ar = function(e, t) {
      return !(!e || !e[t])
    },
    jr = function(e, t, n, r) {
      if (n || (n = function() {}), "function" == typeof e.o.__tcfapi)(0, e.o.__tcfapi)(t, 2, n, r);
      else if (Nr(e)) {
        Lr(e);
        var i = ++e.Oa;
        if (e.I[i] = n, e.g) {
          var o = {};
          e.g.postMessage((o.__tcfapiCall = {
            command: t,
            version: 2,
            callId: i,
            parameter: r
          }, o), "*")
        }
      } else n({}, !1)
    },
    Nr = function(e) {
      if (e.g) return e.g;
      var t;
      e: {
        for (var n = e.o, r = 0; r < 50; ++r) {
          var i, o;
          try {
            i = !(!n.frames || !n.frames.__tcfapiLocator)
          } catch (e) {
            i = !1
          }
          if (i) {
            t = n;
            break e
          }
          t: {
            try {
              var a = n.parent;
              if (a && a != n) {
                o = a;
                break t
              }
            } catch (e) {}
            o = null
          }
          if (!(n = o)) break
        }
        t = null
      }
      return e.g = t, e.g
    },
    Lr = function(n) {
      var e, t;
      n.s || (n.s = function(e) {
        try {
          var t;
          t = ("string" == typeof e.data ? JSON.parse(e.data) : e.data)
            .__tcfapiReturn, n.I[t.callId](t.returnValue, t.success)
        } catch (e) {}
      }, e = n.o, t = n.s, e.addEventListener && e.addEventListener.call(e, "message", t, !1))
    },
    Pr = !0;
  Pr = !1;
  var Mr = {
      1: 0,
      3: 0,
      4: 0,
      7: 3,
      9: 3,
      10: 3
    },
    Fr = Ir("", 550),
    qr = Ir("", 500);

  function Ur() {
    var e = Ye.tcf || {};
    return Ye.tcf = e
  }
  var zr = function() {
    var e, s = Ur(),
      u = new Tr(F, Pr ? 3e3 : -1);
    if (!0 === F.gtag_enable_tcf_support && !s.active && ("function" == typeof F.__tcfapi || "function" == typeof u.o.__tcfapi || null != Nr(u))) {
      s.active = !0, s.Tc = {}, (e = {
          ad_storage: "denied"
        })
        .wait_for_update = Fr, We(e);
      var f = null;
      Pr ? f = F.setTimeout(function() {
        Dr(s), Vr(s), f = null
      }, qr) : s.tcString = "tcunavailable";
      try {
        u.addEventListener(function(e) {
          if (f && (clearTimeout(f), f = null), 0 !== e.internalErrorState) Dr(s), Vr(s);
          else {
            var t;
            if (s.gdprApplies = e.gdprApplies, !1 === e.gdprApplies) t = Kr(), u.removeEventListener(e);
            else if ("tcloaded" === e.eventStatus || "useractioncomplete" === e.eventStatus || "cmpuishown" === e.eventStatus) {
              var n, r = {};
              for (n in Mr)
                if (Mr.hasOwnProperty(n))
                  if ("1" === n) {
                    var i, o = e,
                      a = !0;
                    a = void 0 !== a && a;
                    var c = o;
                    i = !1 === c.gdprApplies || (void 0 === c.internalErrorState && (c.internalErrorState = xr(c)), "error" === c.cmpStatus || 0 !== c.internalErrorState ? !c.internalBlockOnErrors : "loaded" === c.cmpStatus && ("tcloaded" === c.eventStatus || "useractioncomplete" === c.eventStatus)), r[1] = !!i && (!1 === o.gdprApplies || "tcunavailable" === o.tcString || void 0 === o.gdprApplies && !a || "string" != typeof o.tcString || !o.tcString.length || Gr(o, "1", 0))
                  } else r[n] = Gr(e, n, Mr[n]);
              t = r
            }
            t && (s.tcString = e.tcString || "tcempty", s.Tc = t, Vr(s))
          }
        })
      } catch (e) {
        f && (clearTimeout(f), f = null), Dr(s), Vr(s)
      }
    }
  };

  function Dr(e) {
    e.type = "e", e.tcString = "tcunavailable", Pr && (e.Tc = Kr())
  }

  function Kr() {
    var e, t = {};
    for (e in Mr) Mr.hasOwnProperty(e) && (t[e] = !0);
    return t
  }

  function Vr(e) {
    var t = {},
      n = (t.ad_storage = e.Tc[1] ? "granted" : "denied", t);
    Be(n, {
      eventId: 0
    }, {
      gdprApplies: e ? e.gdprApplies : void 0,
      tcString: Rr()
    })
  }
  var Rr = function() {
      var e = Ur();
      return e.active && e.tcString || ""
    },
    Wr = function(e) {
      if (!Mr.hasOwnProperty(String(e))) return !0;
      var t = Ur();
      return !t.active || !t.Tc || !!t.Tc[String(e)]
    },
    Zr = /[A-Z]+/,
    Br = /\s/,
    Jr = function(e) {
      if (k(e)) {
        var t = (e = (o = e) ? o.replace(/^\s+|\s+$/g, "") : "")
          .indexOf("-");
        if (!(t < 0)) {
          var n = e.substring(0, t);
          if (Zr.test(n)) {
            for (var r = e.substring(t + 1)
              .split("/"), i = 0; i < r.length; i++)
              if (!r[i] || Br.test(r[i]) && ("AW" !== n || 1 !== i)) return;
            return {
              id: e,
              prefix: n,
              containerId: n + "-" + r[0],
              J: r
            }
          }
        }
      }
      var o
    };
  var Hr = function(e, t, n) {
      if (F[e.functionName]) return t.sf && Q(t.sf), F[e.functionName];
      var r = $r();
      if (F[e.functionName] = r, e.Od)
        for (var i = 0; i < e.Od.length; i++) F[e.Od[i]] = F[e.Od[i]] || $r();
      return e.Zd && void 0 === F[e.Zd] && (F[e.Zd] = n), J(vr("https://", "http://", e.zf), t.sf, t.uj), r
    },
    $r = function() {
      return function e() {
        (e.q = e.q || [])
        .push(arguments)
      }
    },
    Qr = {
      functionName: "_googWcmImpl",
      Zd: "_googWcmAk",
      zf: "www.gstatic.com/wcm/loader.js"
    },
    Xr = {
      functionName: "_gaPhoneImpl",
      Zd: "ga_wpid",
      zf: "www.gstatic.com/gaphone/loader.js"
    },
    Yr = {
      functionName: "_googCallTrackingImpl",
      Od: [Xr.functionName, Qr.functionName],
      zf: "www.gstatic.com/call-tracking/call-tracking_" + ("" || "5") + ".js"
    },
    ei = {},
    ti = function(e, t, n, r) {
      if (ke(22), n) {
        var i = Hr(Qr, r = r || {}, e),
          o = {
            ak: e,
            cl: t
          };
        void 0 === r.Ua && (o.autoreplace = n), i(2, r.Ua, o, n, 0, x(), r.options)
      }
    },
    ni = function(e, t, n, r) {
      if (ke(21), t && n) {
        r = r || {};
        for (var i = {
          countryNameCode: n,
          destinationNumber: t,
          retrievalTime: x()
        }, o = 0; o < e.length; o++) {
          var a = e[o];
          ei[a.id] || (a && "AW" === a.prefix && !i.adData && 2 <= a.J.length ? (i.adData = {
            ak: a.J[0],
            cl: a.J[1]
          }, ei[a.id] = !0) : a && "UA" === a.prefix && !i.gaData && (i.gaData = {
            gaWpid: a.containerId
          }, ei[a.id] = !0))
        }(i.gaData || i.adData) && Hr(Yr, r)(r.Ua, i, r.options)
      }
    };
  var ri, ii = function(c, s, u) {
      if (ze() && (!u.isGtmEvent || !li[c])) {
        var f = !Je(_e.M),
          e = function(t) {
            var n, e, r, i = ar(),
              o = qi(s, "", u),
              a = o.createOnlyFields._useUp;
            (u.isGtmEvent || Ki(s, o.createOnlyFields)) && (u.isGtmEvent && (n = "gtm" + ut(), e = o.createOnlyFields, o.gtmTrackerName && (e.name = n)), i(function() {
              var e = i.getByName(s);
              e && (r = e.get("clientId")), u.isGtmEvent || i.remove(s)
            }), i("create", c, u.isGtmEvent ? e : o.createOnlyFields), f && Je(_e.M) && (f = !1, i(function() {
              var e = ar()
                .getByName(u.isGtmEvent ? n : s);
              !e || e.get("clientId") == r && a || (u.isGtmEvent ? (o.fieldsToSet["&gcu"] = "1", o.fieldsToSet["&gcut"] = _e.ie[t]) : (o.fieldsToSend["&gcu"] = "1", o.fieldsToSend["&gcut"] = _e.ie[t]), e.set(o.fieldsToSet), u.isGtmEvent ? e.send("pageview") : e.send("pageview", o.fieldsToSend))
            })), u.isGtmEvent && i(function() {
              i.remove(n)
            }))
          };
        $e(function() {
          return e(_e.M)
        }, _e.M), $e(function() {
          return e(_e.D)
        }, _e.D), u.isGtmEvent && (li[c] = !0)
      }
    },
    oi = function(e, t) {
      gr() && t && (e[_e.sb] = t)
    },
    ai = function(e, c, s) {
      function t() {
        if (p.displayfeatures) {
          var e = "_dc_gtm_" + r.replace(/[^A-Za-z0-9-]/g, "");
          g("require", "displayfeatures", void 0, {
            cookieName: e
          })
        }
      }
      var i, n, o, r = e,
        a = "https://www.google-analytics.com/analytics.js",
        u = s.isGtmEvent ? cr(s.getWithConfig("gaFunctionName")) : cr();
      if (T(u)) {
        var f, l = ar;
        f = s.isGtmEvent ? s.getWithConfig("name") || s.getWithConfig("gtmTrackerName") : "gtag_" + r.split("-")
          .join("_");
        var g = function(e) {
            var t = [].slice.call(arguments, 0);
            t[0] = f ? f + "." + t[0] : "" + t[0], u.apply(window, t)
          },
          d = function(e) {
            var t = function(e, t) {
                for (var n = 0; t && n < t.length; n++) g(e, t[n])
              },
              n = s.isGtmEvent,
              r = n ? Ui(p) : zi(c, s);
            if (r) {
              var i = {};
              oi(i, e), g("require", "ec", "ec.js", i), n && r.af && g("set", "&cu", r.af);
              var o = r.action;
              if ((n || "impressions" === o) && (t("ec:addImpression", r.bh), !n)) return;
              if ("promo_click" === o || "promo_view" === o || n && r.Sc) {
                var a = r.Sc;
                if (t("ec:addPromo", a), a && 0 < a.length && "promo_click" === o) return void(n ? g("ec:setAction", o, r.ib) : g("ec:setAction", o));
                if (!n) return
              }
              "promo_view" !== o && "impressions" !== o && (t("ec:addProduct", r.Fb), g("ec:setAction", o, r.ib))
            }
          },
          v = function() {
            if (dr());
            else {
              var e = s.getWithConfig(_e.bi);
              e && (g("require", e, {
                dataLayer: Xe.Z
              }), g("require", "render"))
            }
          },
          p = qi(f, c, s),
          h = function(e, t, n) {
            n && (t = "" + t), p.fieldsToSend[e] = t
          };
        if (!s.isGtmEvent && Ki(f, p.createOnlyFields) && (u(function() {
          l() && l()
            .remove(f)
        }), fi[f] = !1), u("create", r, p.createOnlyFields), p.createOnlyFields[_e.sb] && !s.isGtmEvent) {
          var m = void p.createOnlyFields[_e.sb];
          m && (a = m)
        }
        var _ = s.isGtmEvent ? p.fieldsToSet[_e.sb] : p.createOnlyFields[_e.sb];
        if (_) {
          var y = s.isGtmEvent ? p.fieldsToSet[_e.qd] : p.createOnlyFields[_e.qd];
          y && !fi[f] && (fi[f] = !0, u((n = f, o = y, function() {
            var e = ar(),
              t = e && e.getByName && e.getByName(n);
            if (t) {
              var i = t.get("sendHitTask");
              t.set("sendHitTask", function(e) {
                var t = e.get("hitPayload"),
                  n = e.get("hitCallback"),
                  r = t.indexOf("&tid=" + o) < 0;
                r && (e.set("hitPayload", t.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + o), !0), e.set("hitCallback", void 0, !0)), i(e), r && (e.set("hitPayload", t, !0), e.set("hitCallback", n, !0), e.set("_x_19", void 0, !0), i(e))
              })
            }
          })))
        }
        s.isGtmEvent ? p.enableRecaptcha && g("require", "recaptcha", "recaptcha.js") : (i = s.getWithConfig(_e.Rb), u(function() {
          if (!s.isGtmEvent && te(i)) {
            var e, t = p.fieldsToSend,
              n = l()
              .getByName(f);
            for (e in i)
              if (i.hasOwnProperty(e) && /^(dimension|metric)\d+$/.test(e) && null != i[e]) {
                var r = n.get(xi(i[e]));
                Fi(t, e, r)
              }
          }
        }), function(e) {
          if (e) {
            var t = {};
            if (te(e))
              for (var n in Oi) Oi.hasOwnProperty(n) && Ei(Oi[n], n, e[n], t);
            oi(t, _), g("require", "linkid", t)
          }
        }(p.linkAttribution));
        var b = p[_e.la];
        if (b && b[_e.O] && function(e, t) {
          var n = e[_e.zc],
            r = t + ".",
            i = e[_e.O] || "",
            o = void 0 === n ? !!e.use_anchor : "fragment" === n,
            a = !!e[_e.Ub];
          i = String(i)
            .replace(/\s+/g, "")
            .split(",");
          var c = ar();
          c(r + "require", "linker"), c(r + "linker:autoLink", i, o, a)
        }(b, f), g("set", p.fieldsToSet), s.isGtmEvent) {
          if (p.enableLinkId) {
            var w = {};
            oi(w, _), g("require", "linkid", "linkid.js", w)
          }
          ze() && ii(r, f, s)
        }
        if (c === _e.sc)
          if (s.isGtmEvent) {
            if (t(), p.remarketingLists) {
              var S = "_dc_gtm_" + r.replace(/[^A-Za-z0-9-]/g, "");
              g("require", "adfeatures", {
                cookieName: S
              })
            }
            d(_), g("send", "pageview"), p.createOnlyFields._useUp && sr(f + ".")
          } else v(), g("send", "pageview", p.fieldsToSend);
        else c === _e.za ? (v(), function(e, t) {
            if (e)
              if (dr());
              else {
                if (k(e)) {
                  var n = Jr(e);
                  if (!n) return;
                  e = n
                }
                var r = void 0,
                  i = !1,
                  o = t.getWithConfig(_e.di);
                if (o && G(o)) {
                  r = [];
                  for (var a = 0; a < o.length; a++) {
                    var c = Jr(o[a]);
                    c && (r.push(c), (e.id === c.id || e.id === e.containerId && e.containerId === c.containerId) && (i = !0))
                  }
                }
                if (!r || i) {
                  var s, u = t.getWithConfig(_e.dg);
                  if (u) {
                    s = G(u) ? u : [u];
                    var f = t.getWithConfig(_e.bg),
                      l = t.getWithConfig(_e.cg),
                      g = t.getWithConfig(_e.eg),
                      d = t.getWithConfig(_e.ci),
                      v = f || l,
                      p = 1;
                    "UA" !== e.prefix || r || (p = 5);
                    for (var h = 0; h < s.length; h++)
                      if (h < p)
                        if (r) ni(r, s[h], d, {
                          Ua: v,
                          options: g
                        });
                        else if ("AW" === e.prefix && e.J[1]) ti(e.J[0], e.J[1], s[h], {
                      Ua: v,
                      options: g
                    });
                    else if ("UA" === e.prefix) {
                      var m = e.containerId,
                        _ = s[h],
                        y = {
                          Ua: v
                        };
                      if (ke(23), _) {
                        var b = Hr(Xr, y = y || {}, m),
                          w = {};
                        void 0 !== y.Ua ? w.receiver = y.Ua : w.replace = _, w.ga_wpid = m, w.destination = _, b(2, x(), w)
                      }
                    }
                  }
                }
              }
          }(r, s), s.getWithConfig(_e.Ta) && (function(e) {
            function t(e, t, n) {
              n && (e[t] = n)
            }
            if (ze()) {
              var n = tn();
              if (function(e, t) {
                for (var n = 0; n < t.length; ++n)
                  if (e[t[n]]) return !0;
                return !1
              }(n, e)) {
                var r = {};
                t(r, "gclid", n.gclid), t(r, "dclid", n.dclid), t(r, "gclsrc", n.gclsrc), t(r, "wbraid", n.gbraid), Qt(function() {
                  return r
                }, 3), Qt(function() {
                  var e = {
                    _up: "1"
                  };
                  return e
                }, 1)
              }
            }
          }(["aw", "dc"]), sr(f + ".")), 0 != p.sendPageView && g("send", "pageview", p.fieldsToSend), ii(r, f, s), !s.isGtmEvent && 0 < s.getEventModelKeys()
          .length && (ke(68), 1 < Ye.configCount && ke(69))) : c === _e.Ga ? function(t, e) {
          if (!e.isGtmEvent) {
            var n = e.getWithConfig(_e.Ia),
              r = e.getWithConfig(_e.Qa),
              i = e.getWithConfig(n);
            if (void 0 === i) {
              var o = void 0;
              di.hasOwnProperty(n) ? o = di[n] : _i.hasOwnProperty(n) && (o = _i[n]), 1 === o && (o = xi(n)), k(o) ? ar()(function() {
                var e = ar()
                  .getByName(t)
                  .get(o);
                r(e)
              }) : r(void 0)
            } else r(i)
          }
        }(f, s) : "screen_view" === c ? g("send", "screenview", p.fieldsToSend) : "timing_complete" === c ? (p.fieldsToSend.hitType = "timing", h("timingCategory", p.eventCategory, !0), s.isGtmEvent ? h("timingVar", p.timingVar, !0) : h("timingVar", p.name, !0), h("timingValue", E(p.value)), void 0 !== p.eventLabel && h("timingLabel", p.eventLabel, !0), g("send", p.fieldsToSend)) : "exception" === c ? g("send", "exception", p.fieldsToSend) : "" === c && s.isGtmEvent || ("track_social" === c && s.isGtmEvent ? (p.fieldsToSend.hitType = "social", h("socialNetwork", p.socialNetwork, !0), h("socialAction", p.socialAction, !0), h("socialTarget", p.socialTarget, !0)) : ((s.isGtmEvent || Gi[c]) && d(_), s.isGtmEvent && t(), p.fieldsToSend.hitType = "event", h("eventCategory", p.eventCategory, !0), h("eventAction", p.eventAction || c, !0), void 0 !== p.eventLabel && h("eventLabel", p.eventLabel, !0), void 0 !== p.value && h("eventValue", E(p.value))), g("send", p.fieldsToSend));
        var C = ri;
        if (!C && !s.isGtmEvent) {
          ri = !0, or();
          var O = function() {
              s.onFailure()
            },
            I = function() {
              l()
                .loaded || O()
            };
          dr() ? Q(I) : J(a, I, O)
        }
      } else Q(s.onFailure)
    },
    ci = function(e, t, n, r) {
      var i, o;
      i = function() {
        ai(e, t, r)
      }, o = [_e.M, _e.D], Ke(i, o)
    },
    si = function(e, t) {
      function n(i) {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            if (i[r]) {
              o[e] = i[r];
              break
            }
          }
        }
        var o = ne(i);
        return t && (e("id", ["id", "item_id", "promotion_id"]), e("name", ["name", "item_name", "promotion_name"]), e("brand", ["brand", "item_brand"]), e("variant", ["variant", "item_variant"]), e("list", ["list_name", "item_list_name"]), e("position", ["list_position", "creative_slot", "index"]), function() {
          if (i.category) o.category = i.category;
          else {
            for (var e = "", t = 0; t < Si.length; t++) void 0 !== i[Si[t]] && (e && (e += "/"), e += i[Si[t]]);
            e && (o.category = e)
          }
        }()), e("listPosition", ["list_position"]), e("creative", ["creative_name"]), e("list", ["list_name"]), e("position", ["list_position", "creative_slot"]), o
      }
      t = void 0 !== t && t;
      for (var r = [], i = 0; e && i < e.length; i++) e[i] && te(e[i]) && r.push(n(e[i]));
      return r.length ? r : void 0
    },
    ui = function(e) {
      return Je(e)
    },
    fi = {},
    li = {},
    gi = {},
    di = Object.freeze((gi.client_storage = "storage", gi.sample_rate = 1, gi.site_speed_sample_rate = 1, gi.store_gac = 1, gi.use_amp_client_id = 1, gi[_e.na] = 1, gi[_e.ja] = "storeGac", gi[_e.ka] = 1, gi[_e.oa] = 1, gi[_e.Ha] = 1, gi[_e.Pb] = 1, gi[_e.Za] = 1, gi[_e.rb] = 1, gi)),
    vi = {},
    pi = Object.freeze((vi._cs = 1, vi._useUp = 1, vi.allowAnchor = 1, vi.allowLinker = 1, vi.alwaysSendReferrer = 1, vi.clientId = 1, vi.cookieDomain = 1, vi.cookieExpires = 1, vi.cookieFlags = 1, vi.cookieName = 1, vi.cookiePath = 1, vi.cookieUpdate = 1, vi.legacyCookieDomain = 1, vi.legacyHistoryImport = 1, vi.name = 1, vi.sampleRate = 1, vi.siteSpeedSampleRate = 1, vi.storage = 1, vi.storeGac = 1, vi.useAmpClientId = 1, vi._cd2l = 1, vi)),
    hi = Object.freeze({
      anonymize_ip: 1
    }),
    mi = {},
    _i = Object.freeze((mi.campaign = {
      content: "campaignContent",
      id: "campaignId",
      medium: "campaignMedium",
      name: "campaignName",
      source: "campaignSource",
      term: "campaignKeyword"
    }, mi.app_id = 1, mi.app_installer_id = 1, mi.app_name = 1, mi.app_version = 1, mi.description = "exDescription", mi.fatal = "exFatal", mi.language = 1, mi.page_hostname = "hostname", mi.transport_type = "transport", mi[_e.da] = "currencyCode", mi[_e.Zf] = 1, mi[_e.eb] = "location", mi[_e.Fe] = "page", mi[_e.fb] = "referrer", mi[_e.vd] = "title", mi[_e.gg] = 1, mi[_e.Ja] = 1, mi)),
    yi = {},
    bi = Object.freeze((yi.content_id = 1, yi.event_action = 1, yi.event_category = 1, yi.event_label = 1, yi.link_attribution = 1, yi.name = 1, yi[_e.la] = 1, yi[_e.Yf] = 1, yi[_e.Ca] = 1, yi[_e.fa] = 1, yi)),
    wi = Object.freeze({
      displayfeatures: 1,
      enableLinkId: 1,
      enableRecaptcha: 1,
      eventAction: 1,
      eventCategory: 1,
      eventLabel: 1,
      gaFunctionName: 1,
      gtmEcommerceData: 1,
      gtmTrackerName: 1,
      linker: 1,
      remarketingLists: 1,
      socialAction: 1,
      socialNetwork: 1,
      socialTarget: 1,
      timingVar: 1,
      value: 1
    }),
    Si = Object.freeze(["item_category", "item_category2", "item_category3", "item_category4", "item_category5"]),
    Ci = {},
    Oi = Object.freeze((Ci.levels = 1, Ci[_e.oa] = "duration", Ci[_e.Pb] = 1, Ci)),
    Ii = {},
    ki = Object.freeze((Ii.anonymize_ip = 1, Ii.fatal = 1, Ii.send_page_view = 1, Ii.store_gac = 1, Ii.use_amp_client_id = 1, Ii[_e.ja] = 1, Ii[_e.Zf] = 1, Ii)),
    Ei = function(e, t, n, r) {
      if (void 0 !== n)
        if (ki[t] && (n = f(n)), "anonymize_ip" !== t || n || (n = void 0), 1 === e) r[xi(t)] = n;
        else if (k(e)) r[e] = n;
      else
        for (var i in e) e.hasOwnProperty(i) && void 0 !== n[i] && (r[e[i]] = n[i])
    },
    xi = function(e) {
      return e && k(e) ? e.replace(/(_[a-z])/g, function(e) {
        return e[1].toUpperCase()
      }) : e
    },
    Ti = {},
    Gi = Object.freeze((Ti.checkout_progress = 1, Ti.select_content = 1, Ti.set_checkout_option = 1, Ti[_e.Lb] = 1, Ti[_e.Mb] = 1, Ti[_e.ob] = 1, Ti[_e.pb] = 1, Ti[_e.Nb] = 1, Ti[_e.xa] = 1, Ti[_e.Ob] = 1, Ti[_e.ya] = 1, Ti)),
    Ai = {},
    ji = Object.freeze((Ai.checkout_progress = 1, Ai.set_checkout_option = 1, Ai[_e.Mf] = 1, Ai[_e.Lb] = 1, Ai[_e.Mb] = 1, Ai[_e.ob] = 1, Ai[_e.xa] = 1, Ai[_e.Ob] = 1, Ai[_e.Nf] = 1, Ai)),
    Ni = {},
    Li = Object.freeze((Ni.generate_lead = 1, Ni.login = 1, Ni.search = 1, Ni.select_content = 1, Ni.share = 1, Ni.sign_up = 1, Ni.view_search_results = 1, Ni[_e.pb] = 1, Ni[_e.Nb] = 1, Ni[_e.ya] = 1, Ni)),
    Pi = {},
    Mi = Object.freeze((Pi.view_search_results = 1, Pi[_e.pb] = 1, Pi[_e.Nb] = 1, Pi[_e.ya] = 1, Pi)),
    Fi = function(e, t, n) {
      e.hasOwnProperty(t) || (e[t] = n)
    },
    qi = function(e, t, n) {
      var r = function(e) {
          return n.getWithConfig(e)
        },
        i = {},
        o = {},
        a = {},
        c = {},
        s = function(e) {
          if (G(e)) {
            for (var t = [], n = 0; n < e.length; n++) {
              var r = e[n];
              if (null != r) {
                var i = r.id,
                  o = r.variant;
                null != i && null != o && t.push(String(i) + "." + String(o))
              }
            }
            return 0 < t.length ? t.join("!") : void 0
          }
        }(r(_e.ai));
      !n.isGtmEvent && s && Fi(o, "exp", s), a["&gtm"] = Or(!0), ze() && (c._cs = ui);
      var u, f, l, g, d = r(_e.Rb);
      if (!n.isGtmEvent && te(d))
        for (var v in d)
          if (d.hasOwnProperty(v) && /^(dimension|metric)\d+$/.test(v) && null != d[v]) {
            var p = r(String(d[v]));
            void 0 !== p && Fi(o, v, p)
          } for (var h = n.getTopLevelKeys(), m = 0; m < h.length; ++m) {
        var _ = h[m];
        if (n.isGtmEvent) {
          var y = r(_);
          wi.hasOwnProperty(_) ? i[_] = y : pi.hasOwnProperty(_) ? c[_] = y : a[_] = y
        } else {
          var b;
          if (b = _ !== _e.N ? r(_) : n.getMergedValues(_), bi.hasOwnProperty(_)) Ei(bi[_], _, b, i);
          else if (hi.hasOwnProperty(_)) Ei(hi[_], _, b, a);
          else if (_i.hasOwnProperty(_)) Ei(_i[_], _, b, o);
          else if (di.hasOwnProperty(_)) Ei(di[_], _, b, c);
          else if (/^(dimension|metric|content_group)\d+$/.test(_)) Ei(1, _, b, o);
          else if (_ === _e.N) {
            var w = L(b);
            w && (o["&did"] = w);
            var S = void 0,
              C = void 0;
            t === _e.za ? S = L(n.getMergedValues(_), ".") : (S = L(n.getMergedValues(_, 1), "."), C = L(n.getMergedValues(_, 2), ".")), S && (o["&gdid"] = S), C && (o["&edid"] = C)
          } else _ === _e.Ba && h.indexOf(_e.Pb) < 0 && (c.cookieName = b + "_ga")
        }
      }
      if (!1 !== r(_e.Sh) && !1 !== r(_e.uc) && (u = !0, Wr(7) && Wr(9) && Wr(10) || (u = !1), u) || (a.allowAdFeatures = !1), !1 !== r(_e.V) && (f = !0, Wr(3) && Wr(4) || (f = !1), f) || (a.allowAdPersonalizationSignals = !1), !n.isGtmEvent && r(_e.Ta) && (c._useUp = !0), n.isGtmEvent) {
        c.name = c.name || i.gtmTrackerName;
        var O = a.hitCallback;
        a.hitCallback = function() {
          T(O) && O(), n.onSuccess()
        }
      } else {
        Fi(c, "cookieDomain", "auto"), Fi(a, "forceSSL", !0), Fi(i, "eventCategory", (g = "general", ji[l = t] ? g = "ecommerce" : Li[l] ? g = "engagement" : "exception" === l && (g = "error"), g)), Mi[t] && Fi(o, "nonInteraction", !0), "login" === t || "sign_up" === t || "share" === t ? Fi(i, "eventLabel", r(_e.Yf)) : "search" === t || "view_search_results" === t ? Fi(i, "eventLabel", r(_e.hi)) : "select_content" === t && Fi(i, "eventLabel", r(_e.Wh));
        var I = i[_e.la] || {},
          k = I[_e.Tb];
        k || 0 != k && I[_e.O] ? c.allowLinker = !0 : !1 === k && Fi(c, "useAmpClientId", !1), o.hitCallback = n.onSuccess, c.name = e
      }
      ze() && (a["&gcs"] = He(), Je(_e.M) || (c.storage = "none"), Je(_e.D) || (a.allowAdFeatures = !1, c.storeGac = !1));
      var E = r(_e.W) || r(_e.sb),
        x = r(_e.qd);
      return E && (n.isGtmEvent || (c[_e.sb] = E), c._cd2l = !0), x && !n.isGtmEvent && (c[_e.qd] = x), i.fieldsToSend = o, i.fieldsToSet = a, i.createOnlyFields = c, i
    },
    Ui = function(e) {
      var t = e.gtmEcommerceData;
      if (!t) return null;
      var n = {};
      if (t.currencyCode && (n.af = t.currencyCode), t.impressions) {
        n.action = "impressions";
        var r = t.impressions;
        n.bh = "impressions" === t.translateIfKeyEquals ? si(r, !0) : r
      }
      if (t.promoView) {
        n.action = "promo_view";
        var i = t.promoView.promotions;
        n.Sc = "promoView" === t.translateIfKeyEquals ? si(i, !0) : i
      }
      if (t.promoClick) {
        n.action = "promo_click";
        var o = t.promoClick.promotions;
        return n.Sc = "promoClick" === t.translateIfKeyEquals ? si(o, !0) : o, n.ib = t.promoClick.actionField, n
      }
      for (var a in t)
        if (t.hasOwnProperty(a) && "translateIfKeyEquals" !== a && "impressions" !== a && "promoView" !== a && "promoClick" !== a && "currencyCode" !== a) {
          var c = t[n.action = a].products;
          n.Fb = "products" === t.translateIfKeyEquals ? si(c, !0) : c, n.ib = t[a].actionField;
          break
        } return Object.keys(n)
        .length ? n : null
    },
    zi = function(e, t) {
      function n(e) {
        return {
          id: i(_e.Sa),
          affiliation: i(_e.Xh),
          revenue: i(_e.fa),
          tax: i(_e.Tf),
          shipping: i(_e.ye),
          coupon: i(_e.Yh),
          list: i(_e.xe) || e
        }
      }
      for (var r, i = function(e) {
        return t.getWithConfig(e)
      }, o = i(_e.X), a = 0; o && a < o.length && !(r = o[a][_e.xe]); a++);
      var c = i(_e.Rb);
      if (te(c))
        for (var s = 0; o && s < o.length; ++s) {
          var u, f = o[s];
          for (u in c) c.hasOwnProperty(u) && /^(dimension|metric)\d+$/.test(u) && null != c[u] && Fi(f, u, f[c[u]])
        }
      var l = null,
        g = i(_e.Zh);
      return e === _e.xa || e === _e.Ob ? l = {
        action: e,
        ib: n(),
        Fb: si(o)
      } : e === _e.Lb ? l = {
        action: "add",
        Fb: si(o)
      } : e === _e.Mb ? l = {
        action: "remove",
        Fb: si(o)
      } : e === _e.ya ? l = {
        action: "detail",
        ib: n(r),
        Fb: si(o)
      } : e === _e.pb ? l = {
        action: "impressions",
        bh: si(o)
      } : "view_promotion" === e ? l = {
        action: "promo_view",
        Sc: si(g)
      } : "select_content" === e && g && 0 < g.length ? l = {
        action: "promo_click",
        Sc: si(g)
      } : "select_content" === e ? l = {
        action: "click",
        ib: {
          list: i(_e.xe) || r
        },
        Fb: si(o)
      } : e === _e.ob || "checkout_progress" === e ? l = {
        action: "checkout",
        Fb: si(o),
        ib: {
          step: e === _e.ob ? 1 : i(_e.Sf),
          option: i(_e.Rf)
        }
      } : "set_checkout_option" === e && (l = {
        action: "checkout_option",
        ib: {
          step: i(_e.Sf),
          option: i(_e.Rf)
        }
      }), l && (l.af = i(_e.da)), l
    },
    Di = {},
    Ki = function(e, t) {
      var n = Di[e];
      if (Di[e] = ne(t), !n) return !1;
      for (var r in t)
        if (t.hasOwnProperty(r) && t[r] !== n[r]) return !0;
      for (var i in n)
        if (n.hasOwnProperty(i) && n[i] !== t[i]) return !0;
      return !1
    },
    Vi = null,
    Ri = !1;

  function Wi(e) {
    return Ri && !e ? Vi = Vi || new Xi : Ye.gcq = Ye.gcq || new Xi
  }
  var Zi = function(e, t, n, r) {
      Wi()
        .push("event", [t, e], n, r)
    },
    Bi = function(e, t, n) {
      Wi()
        .push("config", [e], t, n)
    },
    Ji = function() {
      var e = _e.W;
      return Wi()
        .getGlobalConfigValue && Wi()
        .getGlobalConfigValue(e)
    },
    Hi = {},
    $i = function() {
      this.status = 1, this.containerConfig = {}, this.targetConfig = {}, this.remoteConfig = {}, this.o = {}, this.s = null, this.claimed = this.g = !1
    },
    Qi = function(e, t, n, r, i) {
      this.type = e, this.o = t, this.K = n || "", this.g = r, this.messageContext = i
    },
    Xi = function() {
      this.o = {}, this.s = {}, this.g = [], this.C = {
        AW: !1,
        UA: !1
      }
    },
    Yi = function(e, t) {
      var n = Jr(t);
      return e.o[n.containerId] = e.o[n.containerId] || new $i
    },
    eo = function(n, e, t, r) {
      if (r.K) {
        var i = Yi(n, r.K),
          o = i.s;
        if (o) {
          var a = ne(t),
            c = ne(i.targetConfig[r.K]),
            s = ne(i.containerConfig),
            u = ne(i.remoteConfig),
            f = ne(n.s),
            l = {};
          try {
            l = ne(lt)
          } catch (e) {
            ke(72)
          }
          var g = vt("gtm.uniqueEventId"),
            d = Jr(r.K)
            .prefix,
            v = function(e) {
              Vn(g, d, e);
              var t = a[_e.Sb];
              t && Q(t)
            },
            p = (M = a, (F = new br)
              .eventModel = M, P = c, (L = F)
              .targetConfig = P, N = s, (j = L)
              .containerConfig = N, A = u, (G = j)
              .remoteConfig = A, T = f, (x = G)
              .globalConfig = T, E = l, (k = x)
              .dataLayerConfig = E, O = k, I = r.messageContext.eventMetadata, O.eventMetadata = I || {}, C = function() {
                if (v) {
                  var e = v;
                  v = void 0, e("2")
                }
              }, (S = O)
              .onSuccess = C, w = function() {
                if (v) {
                  var e = v;
                  v = void 0, e("3")
                }
              }, (b = S)
              .onFailure = w, y = function(e, t) {
                n.C[e] = t
              }, (_ = b)
              .setContainerTypeLoaded = y, m = function(e) {
                return n.C[e]
              }, (h = _)
              .getContainerTypeLoaded = m, h);
          void 0 === p.eventId && (p.eventId = r.messageContext.eventId), void 0 === p.priorityId && (p.priorityId = r.messageContext.priorityId);
          try {
            Vn(g, d, "1"), r.type, r.K, o(r.K, e, r.o, p)
          } catch (e) {
            Vn(g, d, "4")
          }
        }
      }
      var h, m, _, y, b, w, S, C, O, I, k, E, x, T, G, A, j, N, L, P, M, F
    };
  (e = Xi.prototype)
  .register = function(e, t, n) {
    var r = Yi(this, e);
    if (3 !== r.status) {
      r.s = t, r.status = 3, n && (ne(r.remoteConfig, n), r.remoteConfig = n);
      var i = Jr(e),
        o = Hi[i.containerId];
      if (void 0 !== o) {
        var a = Ye[i.containerId].bootstrap,
          c = i.prefix.toUpperCase();
        Ye[i.containerId]._spx && (c = c.toLowerCase());
        var s = vt("gtm.uniqueEventId"),
          u = c,
          f = A() - a;
        if (Sn && !Mn[s]) {
          s !== Ln && (mn(), Ln = s);
          var l = u + "." + Math.floor(a - o) + "." + Math.floor(f);
          Tn = Tn ? Tn + "," + l : "&cl=" + l
        }
        delete Hi[i.containerId]
      }
      this.flush()
    }
  }, e.notifyContainerLoaded = function(e, t) {
    var n = this,
      r = function(e) {
        if (Jr(e)) {
          var t = Yi(n, e);
          t.status = 3, t.claimed = !0
        }
      };
    r(e);
    for (var i = 0; i < t.length; i++) r(t[i]);
    this.flush()
  }, e.push = function(e, t, n, r) {
    if (null == r ? r = {} : "boolean" == typeof r && (r = {
      deferrable: r
    }), void 0 !== n) {
      if (!Jr(n)) return;
      ! function(e, t, n, r) {
        if (t) {
          var i = Jr(t);
          if (i && 1 === Yi(e, t)
            .status) {
            Yi(e, t)
              .status = 2;
            var o = {};
            Sn && (o.timeoutId = F.setTimeout(function() {
              ke(38), hn()
            }, 3e3)), e.push("require", [o], i.containerId, {}), Hi[i.containerId] = A(), dr() || (2 === r ? mr(i.containerId) : hr(i.containerId, 0, !0))
          }
        }
      }(this, n, t[0][_e.W] || this.s[_e.W], "event" === e ? 2 : 1), Yi(this, n)
        .g && (r.deferrable = !1)
    }
    this.g.push(new Qi(e, Math.floor(A() / 1e3), n, t, r)), r.deferrable || this.flush()
  }, e.insert = function(e, t, n, r) {
    null == r && (r = {});
    var i = Math.floor(A() / 1e3);
    0 < this.g.length ? this.g.splice(1, 0, new Qi(e, i, n, t, r)) : this.g.push(new Qi(e, i, n, t, r))
  }, e.flush = function(e) {
    for (var n = this, t = [], r = !1, i = {}; this.g.length;) {
      var o = this.g[0];
      if (o.messageContext.deferrable) !o.K || Yi(this, o.K)
        .g ? (o.messageContext.deferrable = !1, this.g.push(o)) : t.push(o), this.g.shift();
      else {
        var a = void 0;
        switch (o.type) {
          case "require":
            if (3 !== (a = Yi(this, o.K))
              .status && !e) return void this.g.push.apply(this.g, t);
            Sn && F.clearTimeout(o.g[0].timeoutId);
            break;
          case "set":
            O(o.g[0], function(e, t) {
              ne(v(e, t), n.s)
            });
            break;
          case "config":
            if ((a = Yi(this, o.K))
              .claimed) break;
            i.Na = {}, O(o.g[0], function(n) {
              return function(e, t) {
                ne(v(e, t), n.Na)
              }
            }(i));
            var c = !!i.Na[_e.zd];
            delete i.Na[_e.zd];
            var s = Jr(o.K),
              u = s.containerId === s.id;
            c || (u ? a.containerConfig = {} : a.targetConfig[o.K] = {}), a.g && c || eo(this, _e.za, i.Na, o), a.g = !0, delete i.Na[_e.ub], delete i.Na[_e.Ec], u ? ne(i.Na, a.containerConfig) : (ne(i.Na, a.targetConfig[o.K]), ke(70)), r = !0;
            break;
          case "event":
            if ((a = Yi(this, o.K))
              .claimed) break;
            i.Zc = {}, O(o.g[0], function(n) {
              return function(e, t) {
                ne(v(e, t), n.Zc)
              }
            }(i)), eo(this, o.g[1], i.Zc, o);
            break;
          case "get":
            if (!(a = Yi(this, o.K))
              .claimed) {
              var f = {},
                l = (f[_e.Ia] = o.g[0], f[_e.Qa] = o.g[1], f);
              eo(this, _e.Ga, l, o)
            }
        }
        this.g.shift(), to(this, o)
      }
      i = {
        Na: i.Na,
        Zc: i.Zc
      }
    }
    this.g.push.apply(this.g, t), r && this.flush()
  };
  var to = function(e, t) {
    if ("require" !== t.type)
      if (t.K)
        for (var n = e.getCommandListeners(t.K)[t.type] || [], r = 0; r < n.length; r++) n[r]();
      else
        for (var i in e.o)
          if (e.o.hasOwnProperty(i)) {
            var o = e.o[i];
            if (o && o.o)
              for (var a = o.o[t.type] || [], c = 0; c < a.length; c++) a[c]()
          }
  };
  Xi.prototype.getRemoteConfig = function(e) {
    return Yi(this, e)
      .remoteConfig
  }, Xi.prototype.getCommandListeners = function(e) {
    return Yi(this, e)
      .o
  }, Xi.prototype.getGlobalConfigValue = function(e) {
    return this.s[e]
  };
  _e.Kb, _e.Wb, _e.Fd;
  var no = function(e) {
      if (ro(e)) return e;
      this.g = e
    },
    ro = function(e) {
      return !(!e || "object" !== Y(e) || te(e)) && "getUntrustedMessageValue" in e
    },
    io = function(e) {
      if (ro(e)) return e.getUntrustedMessageValue()
    };
  no.prototype.getUntrustedMessageValue = no.prototype.getUntrustedMessageValue = function() {
    return this.g
  };
  var oo = function() {
    this.g = [], this.o = []
  };
  oo.prototype.push = function(e, t, n) {
    var r = this.g.length + 1;
    ro(e) && (e = io(e) || e), e["gtm.uniqueEventId"] = t, e["gtm.priorityId"] = r;
    var i = {
      debugContext: n,
      message: e = new no(e),
      notBeforeEventId: t,
      priorityId: r
    };
    this.g.push(i);
    for (var o = 0; o < this.o.length; o++) try {
      this.o[o](i)
    } catch (e) {}
  }, oo.prototype.enqueue = function(e, t, n) {
    var r = this.g.length + 1;
    ro(e) && (e = io(e) || e), e["gtm.uniqueEventId"] = t, e["gtm.priorityId"] = r, e = new no(e), n.eventId = t, n.fromContainerExecution = !0, n.fromMessageBus = !0, n.priorityId = r;
    var i = {
      debugContext: n.originatingEntity || {},
      message: e,
      notBeforeEventId: t,
      priorityId: r,
      messageContext: n
    };
    this.g.push(i);
    for (var o = 0; o < this.o.length; o++) try {
      this.o[o](i)
    } catch (e) {}
  }, oo.prototype.listen = function(e) {
    this.o.push(e)
  }, oo.prototype.get = function() {
    for (var e = {}, t = 0; t < this.g.length; t++) {
      var n = this.g[t],
        r = e[n.notBeforeEventId];
      r || (r = [], e[n.notBeforeEventId] = r), r.push(n)
    }
    return e
  };
  var ao = function(e, t) {
    return e.notBeforeEventId - t.notBeforeEventId || e.priorityId - t.priorityId
  };

  function co() {
    var e = Ye.mb;
    return e || (e = new oo, Ye.mb = e), e
  }
  var so = {},
    uo = {},
    fo = function(e, t) {
      var n = uo[t] || [];
      n.push(e), uo[t] = n
    },
    lo = function() {
      Ye.addTargetToGroup = function(e) {
        go(e, "default")
      }, Ye.addDestinationToContainer = function(e, t) {
        fo(e, t)
      };
      var e = Ye.pendingDefaultTargets;
      if (delete Ye.pendingDefaultTargets, Array.isArray(e))
        for (var t = 0; t < e.length; ++t) go(e[t], "default");
      var n = Ye.pendingDestinationIds;
      if (delete Ye.pendingDestinationIds, Array.isArray(n))
        for (var r = 0; r < n.length; ++r) fo(n[r][0], n[r][1])
    },
    go = function(e, t) {
      t = t.toString()
        .split(",");
      for (var n = 0; n < t.length; n++) {
        var r = so[t[n]] || [];
        (so[t[n]] = r)
        .indexOf(e) < 0 && r.push(e)
      }
    },
    vo = function(e) {
      var t = Ye.zones;
      return t ? t.getIsAllowedFn(fn(), e) : function() {
        return !0
      }
    };

  function po(e, t) {
    var n, r, i = t.kh,
      o = e.kh;
    if (0 !== (n = o < i ? 1 : i < o ? -1 : 0)) r = n;
    else {
      var a = e.th,
        c = t.th;
      r = c < a ? 1 : a < c ? -1 : 0
    }
    return r
  }

  function ho(e, o) {
    if (Sn) {
      ! function e(t) {
        var n = o.jf(se[t]) ? "3" : "4",
          r = de(se[t][ie.vg], o, []);
        r && r.length && e(r[0].index), Kn(o.id, se[t], n);
        var i = de(se[t][ie.yg], o, []);
        i && i.length && e(i[0].index)
      }(e)
    }
  }
  var mo = !1,
    _o = function(e) {
      A();
      var t = e["gtm.uniqueEventId"],
        n = e["gtm.priorityId"],
        r = e.event;
      if ("gtm.js" === r) {
        if (mo) return !1;
        mo = !0
      }
      var i, o, a, c = !1;
      if (o = t, !(a = Ye.zones) || a.isActive(fn(), o)) i = vo(t);
      else {
        if ("gtm.js" !== r && "gtm.init" !== r && "gtm.init_consent" !== r) return !1;
        c = !0, i = vo(Number.MAX_SAFE_INTEGER)
      }
      Dn(t, r);
      var s, u, f = e.eventCallback,
        l = e.eventTimeout,
        g = f,
        d = {
          id: t,
          priorityId: n,
          name: r,
          jf: function(f) {
            var l = vt("gtm.allowlist") || vt("gtm.whitelist");
            l && ke(9);
            var g = (l = ["google", "gtagfl", "lcl", "zone"], y(_(l), on)),
              d = vt("gtm.blocklist") || vt("gtm.blacklist");
            d || (d = vt("tagTypeBlacklist")) && ke(3), d ? ke(8) : d = [], sn() && (d = _(d))
              .push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"), 0 <= _(d)
              .indexOf("google") && ke(2);
            var v = d && y(_(d), an),
              p = {};
            return function(e) {
              var t = e && e[ie.vb];
              if (!t || "string" != typeof t) return !0;
              if (t = t.replace(/^_*/, ""), void 0 !== p[t]) return p[t];
              var n = st[t] || [],
                r = f(t, n);
              if (l) {
                var i;
                if (i = r) e: {
                  if (g.indexOf(t) < 0) {
                    if (!(n && 0 < n.length)) {
                      i = !1;
                      break e
                    }
                    for (var o = 0; o < n.length; o++)
                      if (g.indexOf(n[o]) < 0) {
                        ke(11), i = !1;
                        break e
                      }
                  }
                  i = !0
                }
                r = i
              }
              var a = !1;
              if (d) {
                var c = 0 <= v.indexOf(t);
                if (c) a = c;
                else {
                  var s = m(v, n || []);
                  s && ke(10), a = s
                }
              }
              var u = !r || a;
              return u || !(0 <= n.indexOf("sandboxedScripts")) || g && -1 !== g.indexOf("sandboxedScripts") || (u = m(v, cn)), p[t] = u
            }
          }(i),
          Uj: [],
          eh: function() {
            ke(6)
          },
          Kg: (u = {}, u.event = _t("event", 1), u.ecommerce = _t("ecommerce", 1), u.gtm = _t("gtm"), u.eventModel = _t("eventModel"), u),
          Lg: (s = t, function(e) {
            Sn && (re(e) || Rn(s, "input", e))
          }),
          yb: new Xn(g, l)
        },
        v = function(e) {
          function t(e) {
            for (var t = 0; t < e.length; t++) r[e[t]] = !0
          }
          for (var n = [], r = [], i = he(e), o = 0; o < ae.length; o++) {
            var a = ae[o],
              c = pe(a, i);
            if (c) {
              for (var s = a.add || [], u = 0; u < s.length; u++) n[s[u]] = !0;
              t(a.block || [])
            } else null === c && t(a.block || [])
          }
          for (var f = [], l = 0; l < se.length; l++) n[l] && !r[l] && (f[l] = !0);
          return f
        }(d);
      c && (v = function(e) {
        for (var t = [], n = 0; n < e.length; n++) e[n] && (tt[String(se[n][ie.vb])] && (t[n] = !0), void 0 !== se[n][ie.yi] && (t[n] = !0));
        return t
      }(v));
      var p, h = function(e, t) {
        for (var n = [], r = 0; r < se.length; r++)
          if (e[r]) {
            var i = se[r],
              o = ir(t.yb);
            try {
              var a = ur(r, {
                onSuccess: o,
                onFailure: o,
                terminate: o
              }, t, r);
              if (a) {
                var c = n,
                  s = c.push,
                  u = r,
                  f = i.function;
                if (!f) throw "Error: No function name given for function call.";
                var l = fe[f];
                s.call(c, {
                  th: u,
                  kh: l && l.priorityOverride || 0,
                  execute: a
                })
              } else ho(r, t), o()
            } catch (e) {
              o()
            }
          } n.sort(po);
        for (var g = 0; g < n.length; g++) n[g].execute();
        return 0 < n.length
      }(v, d);
      return (p = d.yb)
        .U = !0, p.o >= p.s && tr(p), "gtm.js" !== r && "gtm.sync" !== r || un.F,
        function(e, t) {
          if (!t) return t;
          for (var n = 0; n < e.length; n++)
            if (e[n] && se[n] && !nt[String(se[n][ie.vb])]) return !0;
          return !1
        }(v, h) || !1
    };
  var yo = "HA GF G UA AW DC".split(" "),
    bo = !1,
    wo = !1,
    So = 0;

  function Co(e, t) {
    return e.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(e, "gtm.uniqueEventId", {
      value: ut()
    }), t.eventId = e["gtm.uniqueEventId"], t.priorityId = e["gtm.priorityId"], {
      eventId: t.eventId,
      priorityId: t.priorityId
    }
  }

  function Oo(e) {
    delete e[_e.Fd], delete e[_e.Kb]
  }

  function Io() {
    return !Ri && (bo || Ye.gtagRegistered || (bo = Ye.gtagRegistered = !0, lo()), bo)
  }
  var ko = {
      config: function(e, t) {
        if (Co(e, t), !(e.length < 2) && k(e[1])) {
          var n = {};
          if (2 < e.length) {
            if (null != e[2] && !te(e[2]) || 3 < e.length) return;
            n = e[2]
          }
          var r = Jr(e[1]);
          if (r) {
            r.id, r.containerId;
            if (Ri) {
              n[_e.W] || Ji();
              if (-1 === fn()
                .indexOf(r.containerId) && !dr()) return void hr(r.containerId, 0, !0)
            }
            var i, o = Io() || Ri;
            if (n[_e.Re] || t.noTargetGroup ? delete n[_e.Re] : (i = r.id, O(so, function(e, t) {
              var n = t.indexOf(i);
              0 <= n && t.splice(n, 1)
            }), go(r.id, n[_e.sd] || "default")), delete n[_e.sd], wo || ke(43), o) {
              for (var a = [r.id], c = !1, s = 0; s < a.length; s++) {
                var u = Jr(a[s]);
                u && -1 !== yo.indexOf(u.prefix) && ("G" === u.prefix && (n[_e.ub] = !0), yr[7] && !t.fromContainerExecution && ("G" === r.prefix && yr[6] && (t.eventMetadata = t.eventMetadata || {}, t.eventMetadata.is_external_event = !0), n[_e.Ec] = !0), delete n[_e.Sb], u.id === u.containerId && (Ye.configCount = ++So), Bi(n, u.id, t), c = !0)
              }
              if (c) return
            }
            ht("gtag.targets." + r.id), ht("gtag.targets." + r.id, ne(n))
          }
        }
      },
      consent: function(e, t) {
        if (3 === e.length) {
          ke(39);
          var n = Co(e, t),
            r = e[1];
          "default" === r ? We(e[2]) : "update" === r && Be(e[2], n)
        }
      },
      event: function(e, t) {
        var n = e[1];
        if (!(e.length < 2) && k(n)) {
          var r;
          if (2 < e.length) {
            if (!te(e[2]) && null != e[2] || 3 < e.length) return;
            r = e[2]
          }
          var i = r,
            o = {},
            a = (o.event = n, o);
          i && (a.eventModel = ne(i), i[_e.Sb] && (a.eventCallback = i[_e.Sb]), i[_e.pd] && (a.eventTimeout = i[_e.pd])), r && (r[_e.Fd] && 0 === un.F.indexOf("GTM") && (t.noGtmEvent = !0), r[_e.Kb] && (t.deferrable = !0), Oo(a.eventModel));
          var c, s = Co(e, t),
            u = s.priorityId;
          if (a["gtm.uniqueEventId"] = s.eventId, u && (a["gtm.priorityId"] = u), "optimize.callback" === n) return a.eventModel = a.eventModel || {}, a;
          var f = r,
            l = f && f[_e.tb];
          if (void 0 === l && (void 0 === (l = vt(_e.tb, 2)) && (l = "default")), k(l) || G(l)) {
            var g = function(e) {
                for (var t = [], n = [], r = {}, i = 0; i < e.length; r = {
                  nc: r.nc,
                  bd: r.bd
                }, i++) {
                  var o = e[i];
                  if (0 <= o.indexOf("-")) t.push(o);
                  else {
                    var a = so[o] || [];
                    a && a.length && (t = t.concat(a))
                  }
                }
                return {
                  rj: t,
                  tj: n
                }
              }(l.toString()
                .replace(/\s+/g, "")
                .split(",")),
              d = g.rj,
              v = g.tj;
            if (v.length) {
              f && f[_e.W] || Ji();
              for (var p = 0; p < v.length; p++) {
                var h = Jr(v[p]);
                h && hr(h.containerId, 0, !0)
              }
            }
            c = function(e) {
              for (var t = {}, n = 0; n < e.length; ++n) {
                var r = Jr(e[n]);
                r && (t[r.id] = r)
              }! function(e) {
                var t, n = [];
                for (t in e)
                  if (e.hasOwnProperty(t)) {
                    var r = e[t];
                    "AW" === r.prefix && r.J[1] && n.push(r.containerId)
                  } for (var i = 0; i < n.length; ++i) delete e[n[i]]
              }(t);
              var i = [];
              return O(t, function(e, t) {
                i.push(t)
              }), i
            }(d)
          } else c = void 0;
          var m = c;
          if (!m) return;
          for (var _ = Io() || Ri, y = [], b = 0; _ && b < m.length; b++) {
            var w = m[b];
            if (-1 !== yo.indexOf(w.prefix)) {
              var S = ne(r);
              Oo(S), "G" !== w.prefix || t.fromMessageBus || (S[_e.ub] = !0), yr[7] && !t.fromContainerExecution && ("G" === w.prefix && yr[6] && (t.eventMetadata = t.eventMetadata || {}, t.eventMetadata.is_external_event = !0), S[_e.Ec] = !0), delete S[_e.Sb], Zi(n, S, w.id, t)
            }
            y.push(w.id)
          }
          return a.eventModel = a.eventModel || {}, 0 < m.length ? a.eventModel[_e.tb] = y.join() : delete a.eventModel[_e.tb], wo || ke(43), t.noGtmEvent ? void 0 : a
        }
      },
      get: function(e, t) {
        if (ke(53), 4 === e.length && k(e[1]) && k(e[2]) && T(e[3])) {
          var n = Jr(e[1]),
            r = String(e[2]),
            i = e[3];
          if (n) {
            if (wo || ke(43), Ri) {
              Ji();
              if (n.containerId !== un.F && !dr()) return void hr(n.containerId, 0, !0)
            } else if (!Io()) return;
            if (-1 !== yo.indexOf(n.prefix)) {
              Co(e, t);
              var o, a, c, s, u = {};
              ne((u[_e.Ia] = r, u[_e.Qa] = i, u)), e[_e.Kb] && (t.deferrable = !0), o = r, a = function(e) {
                  Q(function() {
                    return i(e)
                  })
                }, c = n.id, s = t, Wi()
                .push("get", [o, a], c, s)
            }
          }
        }
      },
      js: function(e, t) {
        if (2 == e.length && e[1].getTime) {
          wo = !0, Io();
          var n = Co(e, t),
            r = n.eventId,
            i = n.priorityId,
            o = {
              event: "gtm.js"
            };
          return o["gtm.start"] = e[1].getTime(), o["gtm.uniqueEventId"] = r, o["gtm.priorityId"] = i, o
        }
      },
      policy: function() {},
      set: function(e, t) {
        var n;
        if (2 == e.length && te(e[1]) ? n = ne(e[1]) : 3 == e.length && k(e[1]) && (n = {}, te(e[2]) || G(e[2]) ? n[e[1]] = ne(e[2]) : n[e[1]] = e[2]), n) {
          var r = Co(e, t),
            i = r.eventId,
            o = r.priorityId;
          if (ne(n), Io() || Ri) {
            var a = ne(n);
            Wi()
              .push("set", [a], void 0, t)
          }
          return n["gtm.uniqueEventId"] = i, o && (n["gtm.priorityId"] = o), t.overwriteModelFields = !0, n
        }
      }
    },
    Eo = {
      policy: !0
    },
    xo = function(e) {
      var t = F[Xe.Z].hide;
      if (t && void 0 !== t[e] && t.end) {
        var n, r = !(t[e] = !1);
        for (n in t)
          if (t.hasOwnProperty(n) && !0 === t[n]) {
            r = !1;
            break
          } r && (t.end(), t.end = null)
      }
    },
    To = !1,
    Go = [];

  function Ao() {
    if (!To) {
      To = !0;
      for (var e = 0; e < Go.length; e++) Q(Go[e])
    }
  }
  var jo = 0,
    No = {},
    Lo = [],
    Po = [],
    Mo = !1,
    Fo = !1;

  function qo(e, t) {
    var n = !!yr[10] && e._clear || t.overwriteModelFields;
    O(e, function(e, t) {
      "_clear" !== e && (n && ht(e), ht(e, t))
    }), ot || (ot = e["gtm.start"]);
    var r = e["gtm.uniqueEventId"];
    return !!e.event && ("number" != typeof r && (r = ut(), e["gtm.uniqueEventId"] = r, ht("gtm.uniqueEventId", r)), _o(e))
  }

  function Uo(e) {
    if (null == e || "object" !== _typeof(e)) return !1;
    if (e.event) return !0;
    if (I(e)) {
      var t = e[0];
      if ("config" === t || "event" === t || "js" === t || "get" === t) return !0
    }
    return !1
  }

  function zo() {
    for (var e = !1; !Fo && (0 < Lo.length || 0 < Po.length);) {
      if (!Mo && Uo(Lo[0])) {
        var t = {},
          n = (t.event = "gtm.init_consent", t),
          r = {},
          i = (r.event = "gtm.init", r),
          o = Lo[0]["gtm.uniqueEventId"];
        yr[8] && "number" != typeof o && (o = Lo[0]["gtm.uniqueEventId"] = ut()), "number" == typeof o && (n["gtm.uniqueEventId"] = o - 2, i["gtm.uniqueEventId"] = o - 1), Lo.unshift(n, i), Mo = !0
      }
      Fo = !0, delete lt.eventModel, mt();
      var a = null,
        c = void 0;
      if (Po.length) {
        var s = Po.shift();
        a = s.message, c = s.messageContext ? s.messageContext : {
          eventId: s.notBeforeEventId,
          priorityId: s.priorityId,
          originatingEntity: s.debugContext,
          fromContainerExecution: !0,
          fromMessageBus: !0
        }
      }
      if (null == a && (a = Lo.shift(), c = {}), null != a) {
        var u = ro(a);
        if (u) {
          a = io(a), c.fromContainerExecution = !0;
          for (var f = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], l = 0; l < f.length; l++) {
            var g = f[l],
              d = vt(g, 1);
            (G(d) || te(d)) && (d = ne(d)), gt[g] = d
          }
        }
        try {
          if (T(a)) try {
            a.call(dt)
          } catch (e) {} else if (G(a)) {
            var v = a;
            if (k(v[0])) {
              var p = v[0].split("."),
                h = p.pop(),
                m = v.slice(1),
                _ = vt(p.join("."), 2);
              if (null != _) try {
                _[h].apply(_, m)
              } catch (e) {}
            }
          } else {
            if (I(a)) {
              e: {
                if (a.length && k(a[0])) {
                  var y = ko[a[0]];
                  if (y && (!c.fromContainerExecution || !Eo[a[0]])) {
                    a = y(a, c);
                    break e
                  }
                }
                a = void 0
              }
              if (!a) {
                Fo = !1;
                continue
              }
            }
            if (e = qo(a, c) || e, Uo(a)) {
              var b = a["gtm.uniqueEventId"];
              if (void 0 !== b) {
                for (var w = No[String(b)] || [], S = 0; S < w.length; S++) Po.push(w[S]);
                w.length && Po.sort(ao), delete No[String(b)], jo = b
              }
            }
          }
        } finally {
          u && mt(!0)
        }
      }
      Fo = !1
    }
    return !e
  }

  function Do() {
    var e = zo();
    try {
      xo(un.F)
    } catch (e) {}
    return e
  }

  function Ko(e) {
    var t = e.notBeforeEventId;
    jo < t ? (No[String(t)] = No[String(t)] || [], No[String(t)].push(e)) : (Po.push(e), Po.sort(ao), Q(function() {
      Fo || zo()
    }))
  }
  var Vo = function() {
      var e, t, n, i = D(Xe.Z, []),
        r = D("google_tag_manager", {});
      No = co()
        .get(), e = Ko, co()
        .listen(e), r = r[Xe.Z] = r[Xe.Z] || {}, t = function() {
          if (!r.gtmDom) {
            r.gtmDom = !0;
            var e = {};
            i.push((e.event = "gtm.dom", e))
          }
        }, Bn ? t() : Hn.push(t), n = function() {
          if (!r.gtmLoad) {
            r.gtmLoad = !0;
            var e = {};
            i.push((e.event = "gtm.load", e))
          }
        }, To ? Q(n) : Go.push(n), r.subscribers = (r.subscribers || 0) + 1;
      var o = i.push;
      i.push = function() {
        var e;
        if (0 < Ye.SANDBOXED_JS_SEMAPHORE) {
          e = [];
          for (var t = 0; t < arguments.length; t++) e[t] = new no(arguments[t])
        } else e = [].slice.call(arguments, 0);
        Lo.push.apply(Lo, e);
        var n = o.apply(i, e);
        if (300 < this.length)
          for (ke(4); 300 < this.length;) this.shift();
        var r = "boolean" != typeof n || n;
        return zo() && r
      };
      var a = i.slice(0);
      Lo.push.apply(Lo, a), Ro() && Q(Do)
    },
    Ro = function() {
      return !0
    };

  function Wo(e) {
    if (null == e || 0 === e.length) return !1;
    var t = Number(e),
      n = A();
    return t < n + 3e5 && n - 9e5 < t
  }
  new String("undefined");
  F.clearTimeout, F.setTimeout;
  var Zo = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];
  var Bo = new l;

  function Jo(e) {
    return function(e) {
      var t = e.arg0,
        n = e.arg1;
      if (e.any_of && Array.isArray(n)) {
        for (var r = 0; r < n.length; r++) {
          var i = ne(e, {});
          if (ne({
            arg1: n[r],
            any_of: void 0
          }, i), Jo(i)) return !0
        }
        return !1
      }
      switch (e.function) {
        case "_cn":
          return 0 <= String(t)
            .indexOf(String(n));
        case "_css":
          var o;
          e: {
            if (t) try {
              for (var a = 0; a < Zo.length; a++) {
                var c = Zo[a];
                if (t[c]) {
                  o = t[c](n);
                  break e
                }
              }
            } catch (e) {}
            o = !1
          }
          return o;
        case "_ew":
          return function(e, t) {
            e = String(e), t = String(t);
            var n = e.length - t.length;
            return 0 <= n && e.indexOf(t, n) === n
          }(t, n);
        case "_eq":
          return String(t) === String(n);
        case "_ge":
          return Number(t) >= Number(n);
        case "_gt":
          return Number(t) > Number(n);
        case "_lc":
          return 0 <= String(t)
            .split(",")
            .indexOf(String(n));
        case "_le":
          return Number(t) <= Number(n);
        case "_lt":
          return Number(t) < Number(n);
        case "_re":
          return function(e, t, n) {
            var r = n ? "i" : void 0;
            try {
              var i = String(t) + r,
                o = Bo.get(i);
              return o || (o = new RegExp(t, r), Bo.set(i, o)), o.test(e)
            } catch (e) {
              return !1
            }
          }(t, n, e.ignore_case);
        case "_sw":
          return 0 === String(t)
            .indexOf(String(n));
        case "_um":
          return function(e, t) {
            function n(e) {
              var t = It(e),
                n = wt(t, "protocol"),
                r = wt(t, "host", !0),
                i = wt(t, "port");
              return (void 0 === n || "http" === n && "80" === i || "https" === n && "443" === i) && (n = "web", i = "default"), [n, r, i, wt(t, "path")
                .toLowerCase()
                .replace(/\/$/, "")
              ]
            }
            for (var r = n(String(e)), i = n(String(t)), o = 0; o < r.length; o++)
              if (r[o] !== i[o]) return !1;
            return !0
          }(t, n)
      }
      return !1
    }(e) ? 1 : 0
  }
  Object.freeze({
    dl: 1,
    id: 1
  }), Object.freeze(["config", "event", "get", "set"]);
  encodeURI, encodeURIComponent;
  window, document;
  var Ho = {
    h: {}
  };
  Ho.h.e = ["google"], Ho.__e = function(e) {
    return String(e.vtp_gtmCachedValues.event)
  }, Ho.__e.m = "e", Ho.__e.isVendorTemplate = !0, Ho.__e.priorityOverride = 0, Ho.h.v = ["google"], Ho.__v = function(e) {
    var t = e.vtp_name;
    if (!t || !t.replace) return !1;
    var n, r, i, o, a, c = (n = t.replace(/\\\./g, "."), r = e.vtp_dataLayerVersion || 1, vt(n, r || 2)),
      s = void 0 !== c ? c : e.vtp_defaultValue;
    return i = s, o = "v", a = e.vtp_gtmEventId, Sn && (re(i) || Rn(a, o, i)), s
  }, Ho.__v.m = "v", Ho.__v.isVendorTemplate = !0, Ho.__v.priorityOverride = 0, Ho.h.rep = ["google"], Ho.__rep = function(e) {
    var t, n, r, i, o = Jr(e.vtp_containerId);
    switch (o.prefix) {
      case "AW":
        t = qm;
        break;
      case "DC":
        t = Vm;
        break;
      case "GF":
        t = $m;
        break;
      case "HA":
        t = en;
        break;
      case "UA":
        t = ci;
        break;
      default:
        return void Q(e.vtp_gtmOnFailure)
    }
    Q(e.vtp_gtmOnSuccess), n = e.vtp_containerId, r = t, i = e.vtp_remoteConfig || {}, Wi()
      .register(n, r, i)
  }, Ho.__rep.m = "rep", Ho.__rep.isVendorTemplate = !0, Ho.__rep.priorityOverride = 0, Ho.h.cid = ["google"], Ho.__cid = function() {
    return un.F
  }, Ho.__cid.m = "cid", Ho.__cid.isVendorTemplate = !0, Ho.__cid.priorityOverride = 0, Ho.h.get = ["google"], Ho.__get = function(e) {
    var t = e.vtp_settings;
    (e.vtp_deferrable ? function(e, t, n, r) {
      (r = r || {})
      .deferrable = !0, r.fromContainerExecution = !0, Zi(t, n, e, r)
    } : function(e, t, n, r) {
      (r = r || {})
      .fromContainerExecution = !0, Zi(t, n, e, r)
    })(String(t.streamId), String(e.vtp_eventName), t.eventParameters || {}, {}), e.vtp_gtmOnSuccess()
  }, Ho.__get.m = "get", Ho.__get.isVendorTemplate = !0, Ho.__get.priorityOverride = 0;
  var $o = {};
  $o.dataLayer = dt, $o.callback = function(e) {
      ct.hasOwnProperty(e) && T(ct[e]) && ct[e](), delete ct[e]
    }, $o.bootstrap = 0, $o._spx = !1,
    function(r) {
      if (!F.__TAGGY_INSTALLED) {
        var e = !1;
        if (q.referrer) {
          var t = It(q.referrer);
          e = "cct.google" === St(t, "host")
        }
        if (!e) {
          var n = xt("googTaggyReferrer");
          e = n.length && n[0].length
        }
        e && (F.__TAGGY_INSTALLED = !0, J("https://cct.google/taggy/agent.js"))
      }
      var i = void 0;
      if (Wo(wt(F.location, "query", !1, void 0, "gtm_debug")) && (i = 2), !i && q.referrer) {
        var o = It(q.referrer);
        "tagassistant.google.com" === St(o, "host") && (i = 3)
      }
      if (!i) {
        var a = xt("__TAG_ASSISTANT");
        a.length && a[0].length && (i = 4)
      }
      i || Wo(q.documentElement.getAttribute("data-tag-assistant-present")) && (i = 5);
      i && z ? function(e) {
        var t = F["google.tagmanager.debugui2.queue"];
        t || (t = [], F["google.tagmanager.debugui2.queue"] = t, J("https://" + Xe.qc + "/debug/bootstrap?id=" + un.F + "&src=GTAG&cond=" + e + "&gtm=" + Or()));
        var n = {
          messageType: "CONTAINER_STARTING",
          data: {
            scriptSource: z,
            containerProduct: "OGT",
            debug: !1,
            id: un.F
          }
        };
        n.data.resume = function() {
          r()
        }, Xe.Fh && (n.data.initialPublish = !0), t.push(n)
      }(i) : r()
    }(function() {
      var e, t;
      if (xe()
        .o(), zr(), Xt.enable_gbraid_cookie_write = !0, !!Ye[un.F]) {
        var n = Ye.zones;
        n && n.unregisterChild(fn())
      } else {
        for (var r = ln(), i = 0; i < r.length; i++) e = r[i], t = un.F, Ye.addDestinationToContainer ? Ye.addDestinationToContainer(e, t) : (Ye.pendingDestinationIds = Ye.pendingDestinationIds || [], Ye.pendingDestinationIds.push([e, t]));
        for (var o = C.resource || {}, a = o.macros || [], c = 0; c < a.length; c++) oe.push(a[c]);
        for (var s = o.tags || [], u = 0; u < s.length; u++) se.push(s[u]);
        for (var f = o.predicates || [], l = 0; l < f.length; l++) ce.push(f[l]);
        for (var g = o.rules || [], d = 0; d < g.length; d++) {
          for (var v = g[d], p = {}, h = 0; h < v.length; h++) p[v[h][0]] = Array.prototype.slice.call(v[h], 1);
          ae.push(p)
        }
        fe = Ho, Z = Jo, Ye[un.F] = $o;
        for (var m = dn(), _ = fn(), y = 0; y < _.length; y++) m.container[_[y]] = !0;
        for (var b = ln(), w = 0; w < b.length; w++) m.destination[b[w]] = !0;
        if (m.canonical[un.oc] = !0, N(st, Ho.h), B = me, Vo(), Bn = !1, Jn = 0, "interactive" == q.readyState && !q.createEventObject || "complete" == q.readyState) $n();
        else {
          if ($(q, "DOMContentLoaded", $n), $(q, "readystatechange", $n), q.createEventObject && q.documentElement.doScroll) {
            var S = !0;
            try {
              S = !F.frameElement
            } catch (e) {}
            S && Qn()
          }
          $(F, "load", $n)
        }
        To = !1, "complete" === q.readyState ? Ao() : $(F, "load", Ao), Sn && F.setInterval(yn, 864e5), at = A(), $o.bootstrap = at
      }
    })
}();