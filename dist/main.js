(() => {
  var e = {
      402: (e, n, t) => {
        "use strict";
        t.d(n, { Z: () => o });
        var r = t(645),
          i = t.n(r)()(function (e) {
            return e[1];
          });
        i.push([
          e.id,
          "body {\n  color: #36494E; \n  background-color: #96ADC8;\n  margin: 0;\n  padding: 0;\n}\n\nh1 {\n  text-align: center;\n}\n\nnav>ul {\n  font-size: 1.4rem;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  justify-items: stretch;\n  background: #D89D6A;\n}\n\nli * {\n  display: block;\n}\n\n.selected {\n  background: #A7E8BD;\n}\n\na {\n  text-decoration: none;\n  color: black;\n}\n\nli span {\n  text-align: center;\n  padding-top: 0.8rem;\n  padding-bottom: 0.8rem;\n}\n\nsection {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-left: 3rem; \n  padding-right: 3rem;\n}\n\n#hero {\n  background-color: #D7FFAB;\n  padding-top: 10rem;\n  padding-bottom: 10rem;\n}\n\n#hero>h1 {\n  margin-bottom: 4rem;\n}\n\nbutton {\n  font-size: 1.2rem;\n  padding: 1rem 2rem;\n  background-color: #D89D6A;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n#menu {\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n  background-color: #FCFF6C;\n}\n\n#menu>div {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  column-gap: 3rem;\n}\n\n#menu img {\n  width: 50%;\n  height: 50%;\n}\n\n.text-img {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n#intro {\n  background-color: #FCFF6C;\n  padding-top: 4rem;\n  padding-bottom: 4rem;\n}\n\n#features {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  column-gap: 4rem;\n  margin-top: 4rem;\n}\n\n#features img {\n  height: 10rem;\n}\n\n.img-wrapper {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n#contact {\n  background: #FCFF6C;\n  padding-top: 4rem;\n  padding-bottom: 4rem;\n}",
          "",
        ]);
        const o = i;
      },
      645: (e) => {
        "use strict";
        e.exports = function (e) {
          var n = [];
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var t = e(n);
                return n[2] ? "@media ".concat(n[2], " {").concat(t, "}") : t;
              }).join("");
            }),
            (n.i = function (e, t, r) {
              "string" == typeof e && (e = [[null, e, ""]]);
              var i = {};
              if (r)
                for (var o = 0; o < this.length; o++) {
                  var a = this[o][0];
                  null != a && (i[a] = !0);
                }
              for (var s = 0; s < e.length; s++) {
                var c = [].concat(e[s]);
                (r && i[c[0]]) ||
                  (t &&
                    (c[2]
                      ? (c[2] = "".concat(t, " and ").concat(c[2]))
                      : (c[2] = t)),
                  n.push(c));
              }
            }),
            n
          );
        };
      },
      603: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r = t.p + "011e8b19ee8706cb6cd9bf57a142f6b2.jpg";
      },
      98: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r = t.p + "bd3748efadadce1f4f2e9a93d5979a55.jpg";
      },
      24: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r = t.p + "1f271af3b7c368214f19e73260eb1b05.jpg";
      },
      10: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r = t.p + "e527f68ee979209257adaa2c5a3c5136.jpg";
      },
      914: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r = t.p + "fb3abbd1b370d5b6823bbbb8417144a7.jpg";
      },
      266: (e, n, t) => {
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        const r = t.p + "260c7bb7614c5c50e745460e423dc21f.jpeg";
      },
      992: (e) => {
        e.exports =
          '<section id="contact"> <h1>Send us a message! We like you ;)</h1> </section>';
      },
      282: (e, n, t) => {
        var r = t(91),
          i = t(266),
          o = t(914),
          a = t(10),
          s =
            '<section id="menu"> <h1>Our Menu</h1> <div id="menu-options"> <div class="text-img"> <h2>Pizza</h2> <p>This pizza is the best pizza on the planet. It\'s made by Nordic people, which is why it\'s so amazing</p> </div> <div> <img src="' +
            r(i) +
            '" alt="pizza"> </div> <div> <img src="' +
            r(o) +
            '" alt="pasta"> </div> <div class="text-img"> <h2>Pasta</h2> <p>This pasta is the best pasta on the planet. It\'s made by Nordic people, which is why it\'s so amazing</p> </div> <div class="text-img"> <h2>Lasagna</h2> <p>This lasagna is the best lasagna on the planet. It\'s made by Nordic people, which is why it\'s so amazing</p> </div> <div> <img src="' +
            r(a) +
            '" alt="lasagna"> </div> </div> </section>';
        e.exports = s;
      },
      806: (e, n, t) => {
        var r = t(91),
          i = t(24),
          o = t(98),
          a = t(603),
          s =
            '<section id="hero"> <h1>The Best Place to Eat Nordic Food</h1><a href="#intro"><button type="button">Find out more...</button></a> </section> <section id="intro"> <h2>Why we\'re amazing</h2> <div id="features"> <div> <div class="img-wrapper"><img src="' +
            r(i) +
            '" alt=""></div> <p>We use the freshest ingredients you\'ll ever see. Ice from the Antarctic, carrots straight from our neighbour who has a farm. It\'s amazing, trust me.</p> </div> <div> <div class="img-wrapper"><img src="' +
            r(o) +
            '" alt=""></div> <p>We\'re the best chefs on the planet. We have more than 100 years\' worth of experience among ourselves, but we\'re also young and eager. We\'re amazing, trust me.</p> </div> <div> <div class="img-wrapper"><img src="' +
            r(a) +
            '" alt=""></div> <p>We\'ve won soooo many awards. Best food, best chefs, best ingredients, most eco-friendly, most innovative, socially-responsible, community contributors, just to name a small number.</p> </div> </div> </section>';
        e.exports = s;
      },
      91: (e) => {
        "use strict";
        e.exports = function (e, n) {
          return (
            n || (n = {}),
            "string" != typeof (e = e && e.__esModule ? e.default : e)
              ? e
              : (n.hash && (e += n.hash),
                n.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(e)
                  ? '"'.concat(e, '"')
                  : e)
          );
        };
      },
      379: (e, n, t) => {
        "use strict";
        var r,
          i = (function () {
            var e = {};
            return function (n) {
              if (void 0 === e[n]) {
                var t = document.querySelector(n);
                if (
                  window.HTMLIFrameElement &&
                  t instanceof window.HTMLIFrameElement
                )
                  try {
                    t = t.contentDocument.head;
                  } catch (e) {
                    t = null;
                  }
                e[n] = t;
              }
              return e[n];
            };
          })(),
          o = [];
        function a(e) {
          for (var n = -1, t = 0; t < o.length; t++)
            if (o[t].identifier === e) {
              n = t;
              break;
            }
          return n;
        }
        function s(e, n) {
          for (var t = {}, r = [], i = 0; i < e.length; i++) {
            var s = e[i],
              c = n.base ? s[0] + n.base : s[0],
              d = t[c] || 0,
              l = "".concat(c, " ").concat(d);
            t[c] = d + 1;
            var u = a(l),
              p = { css: s[1], media: s[2], sourceMap: s[3] };
            -1 !== u
              ? (o[u].references++, o[u].updater(p))
              : o.push({ identifier: l, updater: g(p, n), references: 1 }),
              r.push(l);
          }
          return r;
        }
        function c(e) {
          var n = document.createElement("style"),
            r = e.attributes || {};
          if (void 0 === r.nonce) {
            var o = t.nc;
            o && (r.nonce = o);
          }
          if (
            (Object.keys(r).forEach(function (e) {
              n.setAttribute(e, r[e]);
            }),
            "function" == typeof e.insert)
          )
            e.insert(n);
          else {
            var a = i(e.insert || "head");
            if (!a)
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
              );
            a.appendChild(n);
          }
          return n;
        }
        var d,
          l =
            ((d = []),
            function (e, n) {
              return (d[e] = n), d.filter(Boolean).join("\n");
            });
        function u(e, n, t, r) {
          var i = t
            ? ""
            : r.media
            ? "@media ".concat(r.media, " {").concat(r.css, "}")
            : r.css;
          if (e.styleSheet) e.styleSheet.cssText = l(n, i);
          else {
            var o = document.createTextNode(i),
              a = e.childNodes;
            a[n] && e.removeChild(a[n]),
              a.length ? e.insertBefore(o, a[n]) : e.appendChild(o);
          }
        }
        function p(e, n, t) {
          var r = t.css,
            i = t.media,
            o = t.sourceMap;
          if (
            (i ? e.setAttribute("media", i) : e.removeAttribute("media"),
            o &&
              "undefined" != typeof btoa &&
              (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
                " */"
              )),
            e.styleSheet)
          )
            e.styleSheet.cssText = r;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(r));
          }
        }
        var m = null,
          f = 0;
        function g(e, n) {
          var t, r, i;
          if (n.singleton) {
            var o = f++;
            (t = m || (m = c(n))),
              (r = u.bind(null, t, o, !1)),
              (i = u.bind(null, t, o, !0));
          } else
            (t = c(n)),
              (r = p.bind(null, t, n)),
              (i = function () {
                !(function (e) {
                  if (null === e.parentNode) return !1;
                  e.parentNode.removeChild(e);
                })(t);
              });
          return (
            r(e),
            function (n) {
              if (n) {
                if (
                  n.css === e.css &&
                  n.media === e.media &&
                  n.sourceMap === e.sourceMap
                )
                  return;
                r((e = n));
              } else i();
            }
          );
        }
        e.exports = function (e, n) {
          (n = n || {}).singleton ||
            "boolean" == typeof n.singleton ||
            (n.singleton =
              (void 0 === r &&
                (r = Boolean(
                  window && document && document.all && !window.atob
                )),
              r));
          var t = s((e = e || []), n);
          return function (e) {
            if (
              ((e = e || []),
              "[object Array]" === Object.prototype.toString.call(e))
            ) {
              for (var r = 0; r < t.length; r++) {
                var i = a(t[r]);
                o[i].references--;
              }
              for (var c = s(e, n), d = 0; d < t.length; d++) {
                var l = a(t[d]);
                0 === o[l].references && (o[l].updater(), o.splice(l, 1));
              }
              t = c;
            }
          };
        };
      },
    },
    n = {};
  function t(r) {
    if (n[r]) return n[r].exports;
    var i = (n[r] = { id: r, exports: {} });
    return e[r](i, i.exports, t), i.exports;
  }
  (t.n = (e) => {
    var n = e && e.__esModule ? () => e.default : () => e;
    return t.d(n, { a: n }), n;
  }),
    (t.d = (e, n) => {
      for (var r in n)
        t.o(n, r) &&
          !t.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: n[r] });
    }),
    (t.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (t.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      var e;
      t.g.importScripts && (e = t.g.location + "");
      var n = t.g.document;
      if (!e && n && (n.currentScript && (e = n.currentScript.src), !e)) {
        var r = n.getElementsByTagName("script");
        r.length && (e = r[r.length - 1].src);
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (t.p = e);
    })(),
    (() => {
      "use strict";
      var e = t(379),
        n = t.n(e),
        r = t(402);
      n()(r.Z, { insert: "head", singleton: !1 }), r.Z.locals;
      var i = t(806),
        o = t.n(i);
      const a = () => {
        document.getElementById("content").insertAdjacentHTML("beforeend", o()),
          document.querySelector("li>a:first-child").classList.add("selected");
      };
      var s = t(282),
        c = t.n(s),
        d = t(992),
        l = t.n(d);
      a(),
        [...document.getElementsByClassName("link")].forEach((e) => {
          e.addEventListener("click", (n) => {
            switch (
              ((document.getElementById("content").innerHTML = ""),
              [...document.getElementsByClassName("link")].forEach((e) => {
                e.className = "link";
              }),
              e.classList.add("selected"),
              e.getAttribute("linkTo"))
            ) {
              case "about":
                a();
                break;
              case "menu":
                document
                  .getElementById("content")
                  .insertAdjacentHTML("beforeend", c());
                break;
              default:
                document
                  .getElementById("content")
                  .insertAdjacentHTML("beforeend", l());
            }
          });
        });
    })();
})();
