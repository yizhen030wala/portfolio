import {
  __commonJS,
  require_react
} from "./chunk-UTEJFLXC.js";

// node_modules/react-before-after-slider-component/dist/build.js
var require_build = __commonJS({
  "node_modules/react-before-after-slider-component/dist/build.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "object" == typeof module ? module.exports = t(require_react()) : "function" == typeof define && define.amd ? define(["react"], t) : "object" == typeof exports ? exports.ReactBeforeAfterSliderComponent = t(require_react()) : e.ReactBeforeAfterSliderComponent = t(e.react);
    }(exports, function(e) {
      return (() => {
        "use strict";
        var t = { 297: (t2) => {
          t2.exports = e;
        } }, n = {};
        function r(e2) {
          var o2 = n[e2];
          if (void 0 !== o2) return o2.exports;
          var i = n[e2] = { exports: {} };
          return t[e2](i, i.exports, r), i.exports;
        }
        r.n = (e2) => {
          var t2 = e2 && e2.__esModule ? () => e2.default : () => e2;
          return r.d(t2, { a: t2 }), t2;
        }, r.d = (e2, t2) => {
          for (var n2 in t2) r.o(t2, n2) && !r.o(e2, n2) && Object.defineProperty(e2, n2, { enumerable: true, get: t2[n2] });
        }, r.o = (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2);
        var o = {};
        return (() => {
          r.d(o, { default: () => u });
          var e2, t2 = r(297), n2 = r.n(t2), i = function() {
            return (i = Object.assign || function(e3) {
              for (var t3, n3 = 1, r2 = arguments.length; n3 < r2; n3++) for (var o2 in t3 = arguments[n3]) Object.prototype.hasOwnProperty.call(t3, o2) && (e3[o2] = t3[o2]);
              return e3;
            }).apply(this, arguments);
          };
          function c(e3, t3) {
            return e3 > t3 ? t3 : e3 < 0 ? 0 : e3;
          }
          function u(r2) {
            var o2 = r2.firstImage, u2 = r2.secondImage, a = r2.className, f = r2.withResizeFeel, s = void 0 === f || f, l = r2.currentPercentPosition, d = r2.onVisible, v = r2.onReady, m = r2.onChangePercentPosition, p = r2.delimiterIconStyles, g = r2.feelsOnlyTheDelimiter, E = void 0 !== g && g, h = r2.delimiterColor, b = void 0 === h ? "#fff" : h, y = r2.onChangeMode, w = ["before-after-slider"];
            a && w.push(a);
            var O = (0, t2.useRef)(null), L = (0, t2.useRef)(null), M = (0, t2.useState)(null), R = M[0], x = M[1], S = (0, t2.useState)(l || 50), _ = S[0], C = S[1], j = (0, t2.useState)(e2.DEFAULT), T = j[0], I = j[1], P = function(e3, n3, r3) {
              var o3 = (0, t2.useState)(false), i2 = o3[0], c2 = o3[1], u3 = (0, t2.useRef)([false, false]);
              return (0, t2.useEffect)(function() {
                !i2 && u3.current.every(Boolean) && e3 && n3.current && c2(true);
              }, [u3.current, e3, i2, n3.current]), (0, t2.useEffect)(function() {
                i2 && r3 && r3();
              }, [i2]), { onImageLoad: function(e4) {
                var t3 = function(e5, t4) {
                  for (var n4 = 0, r4 = t4.length, o4 = e5.length; n4 < r4; n4++, o4++) e5[o4] = t4[n4];
                  return e5;
                }([], u3.current);
                t3[e4] = true, u3.current = t3;
              }, isReady: i2 };
            }(R, O, v), B = P.onImageLoad, N = P.isReady, A = (0, t2.useState)({ top: 0, left: 0 }), D = A[0], F = A[1], U = (0, t2.useState)(d && "undefined" != typeof window && Boolean(window.IntersectionObserver) ? new IntersectionObserver(function(e3) {
              U && d && e3.forEach(function(e4) {
                e4.intersectionRatio > 0.95 && (U.disconnect(), d());
              });
            }, { threshold: [0, 0.95] }) : null)[0];
            (0, t2.useEffect)(function() {
              if (U) {
                if (!N) return;
                U.observe(O.current);
              }
            }, [N]), (0, t2.useEffect)(function() {
              l && R && C(c(l, R));
            }, [l, R]);
            var k = function() {
              if (O.current) {
                var e3 = O.current.offsetWidth;
                x(e3);
              }
            }, V = function() {
              z(e2.DEFAULT);
            }, z = function(e3) {
              I(e3), y && y(e3);
            };
            !function(e3, n3, r3, o3) {
              (0, t2.useEffect)(function() {
                return e3(), r3.current && r3.current.complete && o3(0), document.addEventListener("click", n3), function() {
                  document.removeEventListener("click", n3);
                };
              }, []);
            }(k, V, L, B);
            var q = R ? { width: R + "px" } : void 0, X = { width: _ + "%" }, W = n2().useMemo(function() {
              return i({ backgroundColor: b }, p || {});
            }, [b, p]), Y = n2().useMemo(function() {
              return { left: _ + "%", backgroundColor: b };
            }, [_, b]), G = function() {
              !function() {
                if (O.current) {
                  var e3 = O.current.getBoundingClientRect();
                  F({ top: e3.top + pageYOffset, left: e3.left + pageXOffset });
                }
              }(), z(e2.MOVE);
            }, H = function(t3) {
              if (T === e2.MOVE) {
                if (!R) return;
                var n3 = c(t3.pageX - D.left, R) / R * 100;
                m ? m(n3) : C(n3);
              }
            };
            !function(e3, n3) {
              (0, t2.useEffect)(function() {
                return n3 && window.addEventListener("resize", e3), function() {
                  window.removeEventListener("resize", e3);
                };
              }, []);
            }(k, s);
            var J = { onMouseDown: G, onTouchStart: G };
            return n2().createElement("div", i({ ref: O, className: w.join(" "), onMouseMove: function(e3) {
              return H(e3);
            }, onTouchMove: function(e3) {
              H(e3.touches[0]);
            }, onTouchEnd: V, onTouchCancel: V }, E ? {} : J), n2().createElement("div", { className: "before-after-slider__first-photo-container" }, n2().createElement("img", { src: o2.imageUrl, onLoad: function() {
              k(), B(0);
            }, draggable: false, alt: o2.alt, ref: L })), Boolean(R) && n2().createElement(n2().Fragment, null, n2().createElement("div", { className: "before-after-slider__second-photo-container", style: X }, n2().createElement("img", { style: q, src: u2.imageUrl, onLoad: function() {
              return B(1);
            }, draggable: false, alt: u2.alt })), n2().createElement("div", i({ className: "before-after-slider__delimiter", style: Y }, E ? J : {}), n2().createElement("div", null, n2().createElement("div", { className: "before-after-slider__delimiter-icon", style: W })))));
          }
          !function(e3) {
            e3.MOVE = "move", e3.DEFAULT = "default";
          }(e2 || (e2 = {}));
        })(), o.default;
      })();
    });
  }
});
export default require_build();
//# sourceMappingURL=react-before-after-slider-component.js.map
