/**!
 * lg-share.js | 1.3.0 | May 20th 2020
 * http://sachinchoolur.github.io/lg-share.js
 * Copyright (c) 2016 Sachin N;
 * @license GPLv3
 */
!(function (e) {
  if ("object" == typeof exports && "undefined" != typeof module)
    module.exports = e();
  else if ("function" == typeof define && define.amd) define([], e);
  else {
    var t;
    (t =
      "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : this),
      (t.LgShare = e());
  }
})(function () {
  var e, t, r;
  return (function () {
    function e(t, r, o) {
      function n(i, a) {
        if (!r[i]) {
          if (!t[i]) {
            var l = "function" == typeof require && require;
            if (!a && l) return l(i, !0);
            if (s) return s(i, !0);
            var d = new Error("Cannot find module '" + i + "'");
            throw ((d.code = "MODULE_NOT_FOUND"), d);
          }
          var c = (r[i] = { exports: {} });
          t[i][0].call(
            c.exports,
            function (e) {
              return n(t[i][1][e] || e);
            },
            c,
            c.exports,
            e,
            t,
            r,
            o
          );
        }
        return r[i].exports;
      }
      for (
        var s = "function" == typeof require && require, i = 0;
        i < o.length;
        i++
      )
        n(o[i]);
      return n;
    }
    return e;
  })()(
    {
      1: [
        function (t, r, o) {
          !(function (t, r) {
            if ("function" == typeof e && e.amd) e([], r);
            else if (void 0 !== o) r();
            else {
              var n = { exports: {} };
              r(), (t.lgShare = n.exports);
            }
          })(this, function () {
            "use strict";
            function e(e) {
              return e.toLowerCase().replace(/-(.)/g, function (e, t) {
                return t.toUpperCase();
              });
            }
            var t =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var o in r)
                      Object.prototype.hasOwnProperty.call(r, o) &&
                        (e[o] = r[o]);
                  }
                  return e;
                },
              r = {
                share: !0,
                facebook: !0,
                facebookDropdownText: "Facebook",
                twitter: !0,
                twitterDropdownText: "Twitter",
                googlePlus: !0,
                googlePlusDropdownText: "GooglePlus",
                pinterest: !0,
                pinterestDropdownText: "Pinterest",
              },
              o = function e(o) {
                return (
                  (this.el = o),
                  (this.core = window.lgData[this.el.getAttribute("lg-uid")]),
                  (this.core.s = t({}, r, this.core.s)),
                  this.core.s.share && this.init(),
                  this
                );
              };
            (o.prototype.init = function () {
              var e = this,
                t =
                  '<button aria-label="Share" aria-haspopup="true" aria-expanded="false" id="lg-share" class="lg-icon"><ul class="lg-dropdown" style="position: absolute;">';
              (t += e.core.s.facebook
                ? '<li><a id="lg-share-facebook" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' +
                  this.core.s.facebookDropdownText +
                  "</span></a></li>"
                : ""),
                (t += e.core.s.twitter
                  ? '<li><a id="lg-share-twitter" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' +
                    this.core.s.twitterDropdownText +
                    "</span></a></li>"
                  : ""),
                (t += e.core.s.googlePlus
                  ? '<li><a id="lg-share-googleplus" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' +
                    this.core.s.googlePlusDropdownText +
                    "</span></a></li>"
                  : ""),
                (t += e.core.s.pinterest
                  ? '<li><a id="lg-share-pinterest" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' +
                    this.core.s.pinterestDropdownText +
                    "</span></a></li>"
                  : ""),
                (t += "</ul></button>"),
                this.core.outer
                  .querySelector(".lg-toolbar")
                  .insertAdjacentHTML("beforeend", t),
                this.core.outer
                  .querySelector(".lg")
                  .insertAdjacentHTML(
                    "beforeend",
                    '<div id="lg-dropdown-overlay"></div>'
                  );
              var r = document.getElementById("lg-share");
              utils.on(r, "click.lg", function () {
                utils.hasClass(e.core.outer, "lg-dropdown-active")
                  ? (utils.removeClass(e.core.outer, "lg-dropdown-active"),
                    r.setAttribute("aria-expanded", !1))
                  : (utils.addClass(e.core.outer, "lg-dropdown-active"),
                    r.setAttribute("aria-expanded", !0));
              }),
                utils.on(
                  document.getElementById("lg-dropdown-overlay"),
                  "click.lg",
                  function () {
                    utils.removeClass(e.core.outer, "lg-dropdown-active"),
                      r.setAttribute("aria-expanded", !1);
                  }
                ),
                utils.on(e.core.el, "onAfterSlide.lgtm", function (t) {
                  setTimeout(function () {
                    e.core.s.facebook &&
                      document
                        .getElementById("lg-share-facebook")
                        .setAttribute(
                          "href",
                          "https://www.facebook.com/sharer/sharer.php?u=" +
                            e.getSharePropsUrl(
                              t.detail.index,
                              "data-facebook-share-url"
                            )
                        ),
                      e.core.s.twitter &&
                        document
                          .getElementById("lg-share-twitter")
                          .setAttribute(
                            "href",
                            "https://twitter.com/intent/tweet?text=" +
                              e.getShareProps(
                                t.detail.index,
                                "data-tweet-text"
                              ) +
                              "&url=" +
                              e.getSharePropsUrl(
                                t.detail.index,
                                "data-twitter-share-url"
                              )
                          ),
                      e.core.s.googlePlus &&
                        document
                          .getElementById("lg-share-googleplus")
                          .setAttribute(
                            "href",
                            "https://plus.google.com/share?url=" +
                              e.getSharePropsUrl(
                                t.detail.index,
                                "data-googleplus-share-url"
                              )
                          ),
                      e.core.s.pinterest &&
                        document
                          .getElementById("lg-share-pinterest")
                          .setAttribute(
                            "href",
                            "http://www.pinterest.com/pin/create/button/?url=" +
                              e.getSharePropsUrl(
                                t.detail.index,
                                "data-pinterest-share-url"
                              ) +
                              "&media=" +
                              encodeURIComponent(
                                e.getShareProps(t.detail.index, "href") ||
                                  e.getShareProps(t.detail.index, "data-src")
                              ) +
                              "&description=" +
                              e.getShareProps(
                                t.detail.index,
                                "data-pinterest-text"
                              )
                          );
                  }, 100);
                });
            }),
              (o.prototype.getSharePropsUrl = function (e, t) {
                var r = this.getShareProps(e, t);
                return r || (r = window.location.href), encodeURIComponent(r);
              }),
              (o.prototype.getShareProps = function (t, r) {
                var o = "";
                return (
                  this.core.s.dynamic
                    ? (o = this.core.items[t][e(r.replace("data-", ""))])
                    : this.core.items[t].getAttribute(r) &&
                      (o = this.core.items[t].getAttribute(r)),
                  o
                );
              }),
              (o.prototype.destroy = function () {}),
              (window.lgModules.share = o);
          });
        },
        {},
      ],
    },
    {},
    [1]
  )(1);
});
