(this["webpackJsonpgoose-frontend"] = this["webpackJsonpgoose-frontend"] || []).push([[12], {
    695: function(e, n, t) {
        "use strict";
        t.r(n),
        t.d(n, "default", (function() {
            return ln
        }
        ));
        var r = t(12)
          , c = t(16)
          , a = t(20)
          , o = t(0)
          , i = t.n(o)
          , s = t(27)
          , u = t(56)
          , l = t(13)
          , b = t.n(l)
          , j = t(66)
          , d = t(37)
          , x = t(675)
          , O = t(51)
          , p = t(3);
        function f() {
            var e = Object(O.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  & > * {\n    min-width: 280px;\n    max-width: 31.5%;\n    width: 100%;\n    margin: 0 8px;\n    margin-bottom: 32px;\n  }\n"]);
            return f = function() {
                return e
            }
            ,
            e
        }
        var m = p.e.div(f())
          , h = t(174)
          , v = t(108)
          , k = t(130)
          , g = t(129)
          , y = t(29)
          , C = t(171);
        function w() {
            var e = Object(O.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n\n  svg {\n    fill: ", ";\n  }\n"]);
            return w = function() {
                return e
            }
            ,
            e
        }
        var S = p.e.div(w(), (function(e) {
            return e.theme.colors.primary
        }
        ))
          , T = function(e) {
            var n = e.onClick
              , t = e.expanded;
            return Object(r.jsxs)(S, {
                "aria-label": "Hide or show expandable content",
                role: "button",
                onClick: function() {
                    return n()
                },
                children: [Object(r.jsx)(d.C, {
                    color: "primary",
                    bold: !0,
                    children: t ? "Hide" : "Details"
                }), t ? Object(r.jsx)(d.l, {}) : Object(r.jsx)(d.k, {})]
            })
        };
        T.defaultProps = {
            expanded: !1
        };
        var A = T
          , D = function(e) {
            var n = e.quoteTokenAdresses
              , t = e.quoteTokenSymbol
              , r = e.tokenAddresses
              , c = "BNB" === t ? "ETH" : n[56]
              , a = r[56];
            return "".concat(c, "/").concat(a)
        };
        function P() {
            var e = Object(O.a)(["\n  text-decoration: none;\n  font-weight: normal;\n  color: ", ";\n  display: flex;\n  align-items: center;\n\n  svg {\n    padding-left: 4px;\n    height: 18px;\n    width: auto;\n    fill: ", ";\n  }\n"]);
            return P = function() {
                return e
            }
            ,
            e
        }
        function q() {
            var e = Object(O.a)(["\n  margin-top: 24px;\n"]);
            return q = function() {
                return e
            }
            ,
            e
        }
        var B = p.e.div(q())
          , z = Object(p.e)(d.s)(P(), (function(e) {
            return e.theme.colors.text
        }
        ), (function(e) {
            return e.theme.colors.primary
        }
        ))
          , I = function(e) {
            var n = e.isTokenOnly
              , t = e.bscScanAddress
              , c = e.removed
              , a = e.totalValueFormated
              , o = e.lpLabel
              , i = e.quoteTokenAdresses
              , s = e.quoteTokenSymbol
              , u = e.tokenAddresses
              , l = Object(C.a)()
              , b = D({
                quoteTokenAdresses: i,
                quoteTokenSymbol: s,
                tokenAddresses: u
            });
            return Object(r.jsxs)(B, {
                children: [Object(r.jsxs)(d.n, {
                    justifyContent: "space-between",
                    children: [Object(r.jsxs)(d.C, {
                        children: [l(316, "Stake"), ":"]
                    }), Object(r.jsx)(z, {
                        href: n ? "https://dex.doveswap.finance/#/swap/".concat(u[56]) : "https://dex.doveswap.finance/#/add/".concat(b),
                        children: o
                    })]
                }), !c && Object(r.jsxs)(d.n, {
                    justifyContent: "space-between",
                    children: [Object(r.jsxs)(d.C, {
                        children: [l(23, "Total Liquidity"), ":"]
                    }), Object(r.jsx)(d.C, {
                        children: a
                    })]
                }), Object(r.jsx)(d.n, {
                    justifyContent: "flex-start",
                    children: Object(r.jsx)(d.r, {
                        external: !0,
                        href: t,
                        bold: !1,
                        children: l(356, "View on BscScan")
                    })
                })]
            })
        }
          , F = function() {
            return Object(r.jsx)(d.B, {
                variant: "success",
                outline: !0,
                startIcon: Object(r.jsx)(d.E, {}),
                children: "No Fees"
            })
        };
        function E() {
            var e = Object(O.a)(["\n  margin-left: 4px;\n"]);
            return E = function() {
                return e
            }
            ,
            e
        }
        function L() {
            var e = Object(O.a)(["\n  svg {\n    margin-right: 0.25rem;\n  }\n"]);
            return L = function() {
                return e
            }
            ,
            e
        }
        var N = Object(p.e)(d.n)(L())
          , M = Object(p.e)(d.B)(E())
          , V = function(e) {
            var n = e.lpLabel
              , t = e.multiplier
              , c = (e.risk,
            e.farmImage)
              , a = e.tokenSymbol
              , o = e.depositFee;
            return Object(r.jsxs)(N, {
                justifyContent: "space-between",
                alignItems: "center",
                mb: "12px",
                children: [Object(r.jsx)(d.q, {
                    src: "/images/farms/".concat(c, ".png"),
                    alt: a,
                    width: 64,
                    height: 64
                }), Object(r.jsxs)(d.n, {
                    flexDirection: "column",
                    alignItems: "flex-end",
                    children: [Object(r.jsx)(d.o, {
                        mb: "4px",
                        children: n
                    }), Object(r.jsxs)(d.n, {
                        justifyContent: "center",
                        children: [0 === o ? Object(r.jsx)(F, {}) : null, Object(r.jsx)(M, {
                            variant: "secondary",
                            children: t
                        })]
                    })]
                })]
            })
        }
          , H = t(4)
          , Q = t.n(H)
          , R = t(15)
          , W = t(674)
          , G = t(673)
          , U = (t(668),
        t(666))
          , J = t(667)
          , X = function(e) {
            var n = Object(u.b)()
              , t = Object(j.m)().account
              , r = Object(J.c)();
            return {
                onStake: Object(o.useCallback)(function() {
                    var c = Object(R.a)(Q.a.mark((function c(a) {
                        var o;
                        return Q.a.wrap((function(c) {
                            for (; ; )
                                switch (c.prev = c.next) {
                                case 0:
                                    return c.next = 2,
                                    Object(U.i)(r, e, a, t);
                                case 2:
                                    o = c.sent,
                                    n(Object(g.a)(t)),
                                    console.info(o);
                                case 5:
                                case "end":
                                    return c.stop()
                                }
                        }
                        ), c)
                    }
                    )));
                    return function(e) {
                        return c.apply(this, arguments)
                    }
                }(), [t, n, r, e])
            }
        }
          , $ = function(e) {
            var n = Object(u.b)()
              , t = Object(j.m)().account
              , r = Object(J.c)();
            return {
                onUnstake: Object(o.useCallback)(function() {
                    var c = Object(R.a)(Q.a.mark((function c(a) {
                        var o;
                        return Q.a.wrap((function(c) {
                            for (; ; )
                                switch (c.prev = c.next) {
                                case 0:
                                    return c.next = 2,
                                    Object(U.j)(r, e, a, t);
                                case 2:
                                    o = c.sent,
                                    n(Object(g.a)(t)),
                                    console.info(o);
                                case 5:
                                case "end":
                                    return c.stop()
                                }
                        }
                        ), c)
                    }
                    )));
                    return function(e) {
                        return c.apply(this, arguments)
                    }
                }(), [t, n, r, e])
            }
        }
          , K = t(662);
        function Y() {
            var e = Object(O.a)(["\n  height: ", "px;\n  width: ", "px;\n"]);
            return Y = function() {
                return e
            }
            ,
            e
        }
        var Z = p.e.div(Y(), (function(e) {
            return e.size
        }
        ), (function(e) {
            return e.size
        }
        ))
          , _ = function(e) {
            var n, t = e.size, c = void 0 === t ? "md" : t, a = Object(o.useContext)(p.a).spacing;
            switch (c) {
            case "lg":
                n = a[6];
                break;
            case "sm":
                n = a[2];
                break;
            case "md":
            default:
                n = a[4]
            }
            return Object(r.jsx)(Z, {
                size: n
            })
        };
        function ee() {
            var e = Object(O.a)(["\n  flex: 1;\n  text-align: center;\n"]);
            return ee = function() {
                return e
            }
            ,
            e
        }
        function ne() {
            var e = Object(O.a)(["\n  align-items: center;\n  background-color: ", "00;\n  display: flex;\n  margin: 0;\n  padding: ", "px;\n"]);
            return ne = function() {
                return e
            }
            ,
            e
        }
        var te = p.e.div(ne(), (function(e) {
            return e.theme.colors.primaryDark
        }
        ), (function(e) {
            return e.theme.spacing[4]
        }
        ))
          , re = p.e.div(ee())
          , ce = function(e) {
            var n = e.children
              , t = i.a.Children.toArray(n).length;
            return Object(r.jsx)(te, {
                children: i.a.Children.map(n, (function(e, n) {
                    return Object(r.jsxs)(r.Fragment, {
                        children: [Object(r.jsx)(re, {
                            children: e
                        }), n < t - 1 && Object(r.jsx)(_, {})]
                    })
                }
                ))
            })
        }
          , ae = t(669);
        function oe() {
            var e = Object(O.a)(["\n  width: 100%;\n  background: none;\n  border: 0;\n  color: ", ";\n  font-size: 18px;\n  flex: 1;\n  height: 56px;\n  margin: 0;\n  padding: 0;\n  outline: none;\n"]);
            return oe = function() {
                return e
            }
            ,
            e
        }
        function ie() {
            var e = Object(O.a)(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: ", ";\n  display: flex;\n  height: 72px;\n  padding: 0 ", "px;\n"]);
            return ie = function() {
                return e
            }
            ,
            e
        }
        var se = p.e.div(ie(), (function(e) {
            return e.theme.colors.input
        }
        ), (function(e) {
            return e.theme.radii.default
        }
        ), (function(e) {
            return e.theme.spacing[3]
        }
        ))
          , ue = p.e.input(oe(), (function(e) {
            return e.theme.colors.primary
        }
        ))
          , le = function(e) {
            var n = e.endAdornment
              , t = e.onChange
              , c = e.placeholder
              , a = e.startAdornment
              , o = e.value;
            return Object(r.jsxs)(se, {
                children: [!!a && a, Object(r.jsx)(ue, {
                    placeholder: c,
                    value: o,
                    onChange: t
                }), !!n && n]
            })
        };
        function be() {
            var e = Object(O.a)(["\n  color: ", ";\n  font-weight: 700;\n"]);
            return be = function() {
                return e
            }
            ,
            e
        }
        function je() {
            var e = Object(O.a)(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  font-size: 14px;\n  font-weight: 700;\n  height: 44px;\n  justify-content: flex-end;\n"]);
            return je = function() {
                return e
            }
            ,
            e
        }
        function de() {
            var e = Object(O.a)(["\n  align-items: center;\n  display: flex;\n"]);
            return de = function() {
                return e
            }
            ,
            e
        }
        function xe() {
            var e = Object(O.a)(["\n  width: ", "px;\n"]);
            return xe = function() {
                return e
            }
            ,
            e
        }
        function Oe() {
            var e = Object(O.a)([""]);
            return Oe = function() {
                return e
            }
            ,
            e
        }
        var pe = p.e.div(Oe())
          , fe = p.e.div(xe(), (function(e) {
            return e.theme.spacing[3]
        }
        ))
          , me = p.e.div(de())
          , he = p.e.div(je(), (function(e) {
            return e.theme.colors.primary
        }
        ))
          , ve = p.e.span(be(), (function(e) {
            return e.theme.colors.primary
        }
        ))
          , ke = function(e) {
            var n = e.max
              , t = e.symbol
              , c = e.onChange
              , a = e.onSelectMax
              , o = e.value
              , i = e.depositFeeBP
              , s = void 0 === i ? 0 : i
              , u = Object(C.a)();
            return Object(r.jsxs)(pe, {
                children: [Object(r.jsxs)(he, {
                    children: [n.toLocaleString(), " ", t, " ", u(526, "Available")]
                }), Object(r.jsx)(le, {
                    endAdornment: Object(r.jsxs)(me, {
                        children: [Object(r.jsx)(ve, {
                            children: t
                        }), Object(r.jsx)(fe, {}), Object(r.jsx)("div", {
                            children: Object(r.jsx)(d.e, {
                                size: "sm",
                                onClick: a,
                                children: u(452, "Max")
                            })
                        })]
                    }),
                    onChange: c,
                    placeholder: "0",
                    value: o
                }), s > 0 ? Object(r.jsxs)(he, {
                    children: [u(10001, "Deposit Fee"), ": ", new ae.a(o || 0).times(s / 1e4).toString(), " ", t]
                }) : null]
            })
        }
          , ge = function(e) {
            var n = e.max
              , t = e.onConfirm
              , c = e.onDismiss
              , i = e.tokenName
              , s = void 0 === i ? "" : i
              , u = e.depositFeeBP
              , l = void 0 === u ? 0 : u
              , b = Object(o.useState)("")
              , j = Object(a.a)(b, 2)
              , x = j[0]
              , O = j[1]
              , p = Object(o.useState)(!1)
              , f = Object(a.a)(p, 2)
              , m = f[0]
              , h = f[1]
              , v = Object(C.a)()
              , k = Object(o.useMemo)((function() {
                return Object(K.b)(n)
            }
            ), [n])
              , g = Object(o.useCallback)((function(e) {
                O(e.currentTarget.value)
            }
            ), [O])
              , y = Object(o.useCallback)((function() {
                O(k)
            }
            ), [k, O]);
            return Object(r.jsxs)(d.w, {
                title: "".concat(v(316, "Deposit"), " ").concat(s, " Tokens"),
                onDismiss: c,
                children: [Object(r.jsx)(ke, {
                    value: x,
                    onSelectMax: y,
                    onChange: g,
                    max: k,
                    symbol: s,
                    depositFeeBP: l
                }), Object(r.jsxs)(ce, {
                    children: [Object(r.jsx)(d.e, {
                        variant: "secondary",
                        onClick: c,
                        children: v(462, "Cancel")
                    }), Object(r.jsx)(d.e, {
                        disabled: m,
                        onClick: Object(R.a)(Q.a.mark((function e() {
                            return Q.a.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return h(!0),
                                        e.next = 3,
                                        t(x);
                                    case 3:
                                        h(!1),
                                        c();
                                    case 5:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e)
                        }
                        ))),
                        children: m ? v(488, "Pending Confirmation") : v(464, "Confirm")
                    })]
                })]
            })
        }
          , ye = function(e) {
            var n = e.onConfirm
              , t = e.onDismiss
              , c = e.max
              , i = e.tokenName
              , s = void 0 === i ? "" : i
              , u = Object(o.useState)("")
              , l = Object(a.a)(u, 2)
              , b = l[0]
              , j = l[1]
              , x = Object(o.useState)(!1)
              , O = Object(a.a)(x, 2)
              , p = O[0]
              , f = O[1]
              , m = Object(C.a)()
              , h = Object(o.useMemo)((function() {
                return Object(K.b)(c)
            }
            ), [c])
              , v = Object(o.useCallback)((function(e) {
                j(e.currentTarget.value)
            }
            ), [j])
              , k = Object(o.useCallback)((function() {
                j(h)
            }
            ), [h, j]);
            return Object(r.jsxs)(d.w, {
                title: "Withdraw ".concat(s),
                onDismiss: t,
                children: [Object(r.jsx)(ke, {
                    onSelectMax: k,
                    onChange: v,
                    value: b,
                    max: h,
                    symbol: s
                }), Object(r.jsxs)(ce, {
                    children: [Object(r.jsx)(d.e, {
                        variant: "secondary",
                        onClick: t,
                        children: m(462, "Cancel")
                    }), Object(r.jsx)(d.e, {
                        disabled: p,
                        onClick: Object(R.a)(Q.a.mark((function e() {
                            return Q.a.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return f(!0),
                                        e.next = 3,
                                        n(b);
                                    case 3:
                                        f(!1),
                                        t();
                                    case 5:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e)
                        }
                        ))),
                        children: p ? m(488, "Pending Confirmation") : m(464, "Confirm")
                    })]
                })]
            })
        };
        function Ce() {
            var e = Object(O.a)(["\n  display: flex;\n  svg {\n    width: 20px;\n  }\n"]);
            return Ce = function() {
                return e
            }
            ,
            e
        }
        var we = p.e.div(Ce())
          , Se = function(e) {
            var n = e.stakedBalance
              , t = e.tokenBalance
              , c = e.tokenName
              , o = e.pid
              , i = e.depositFeeBP
              , s = Object(C.a)()
              , u = X(o).onStake
              , l = $(o).onUnstake
              , b = Object(K.a)(n)
              , j = b.toLocaleString()
              , x = Object(d.H)(Object(r.jsx)(ge, {
                max: t,
                onConfirm: u,
                tokenName: c,
                depositFeeBP: i
            }))
              , O = Object(a.a)(x, 1)[0]
              , p = Object(d.H)(Object(r.jsx)(ye, {
                max: n,
                onConfirm: l,
                tokenName: c
            }))
              , f = Object(a.a)(p, 1)[0];
            return Object(r.jsxs)(d.n, {
                justifyContent: "space-between",
                alignItems: "center",
                children: [Object(r.jsx)(d.o, {
                    color: 0 === b ? "textDisabled" : "text",
                    children: j
                }), 0 === b ? Object(r.jsx)(d.e, {
                    onClick: O,
                    children: s(999, "Stake")
                }) : Object(r.jsxs)(we, {
                    children: [Object(r.jsx)(d.p, {
                        variant: "tertiary",
                        onClick: f,
                        mr: "6px",
                        children: Object(r.jsx)(d.v, {
                            color: "primary"
                        })
                    }), Object(r.jsx)(d.p, {
                        variant: "tertiary",
                        onClick: O,
                        children: Object(r.jsx)(d.a, {
                            color: "primary"
                        })
                    })]
                })]
            })
        }
          , Te = t(672);
        function Ae() {
            var e = Object(O.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: column;\n"]);
            return Ae = function() {
                return e
            }
            ,
            e
        }
        var De = p.e.div(Ae())
          , Pe = function(e) {
            var n = e.earnings
              , t = e.pid
              , c = Object(C.a)()
              , i = Object(o.useState)(!1)
              , s = Object(a.a)(i, 2)
              , u = s[0]
              , l = s[1]
              , b = Object(Te.b)(t).onReward
              , j = X(t).onStake
              , x = Object(K.a)(n)
              , O = x.toLocaleString();
            return Object(r.jsxs)(d.n, {
                mb: "8px",
                justifyContent: "space-between",
                alignItems: "center",
                children: [Object(r.jsx)(d.o, {
                    color: 0 === x ? "textDisabled" : "text",
                    children: O
                }), Object(r.jsxs)(De, {
                    children: [3 === t ? Object(r.jsx)(d.e, {
                        disabled: 0 === x || u,
                        size: "sm",
                        variant: "secondary",
                        marginBottom: "15px",
                        onClick: Object(R.a)(Q.a.mark((function e() {
                            return Q.a.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return l(!0),
                                        e.next = 3,
                                        j(x.toString());
                                    case 3:
                                        l(!1);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e)
                        }
                        ))),
                        children: c(999, "Compound")
                    }) : null, Object(r.jsx)(d.e, {
                        disabled: 0 === x || u,
                        onClick: Object(R.a)(Q.a.mark((function e() {
                            return Q.a.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return l(!0),
                                        e.next = 3,
                                        b();
                                    case 3:
                                        l(!1);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e)
                        }
                        ))),
                        children: c(999, "Harvest")
                    })]
                })]
            })
        };
        function qe() {
            var e = Object(O.a)(["\n  padding-top: 16px;\n"]);
            return qe = function() {
                return e
            }
            ,
            e
        }
        var Be = p.e.div(qe())
          , ze = function(e) {
            var n = e.farm
              , t = e.ethereum
              , c = e.account
              , i = Object(C.a)()
              , s = Object(o.useState)(!1)
              , l = Object(a.a)(s, 2)
              , b = l[0]
              , x = l[1]
              , O = Object(v.a)(n.pid)
              , p = O.pid
              , f = O.lpAddresses
              , m = O.tokenAddresses
              , h = O.isTokenOnly
              , k = O.depositFeeBP
              , y = Object(v.b)(p)
              , w = y.allowance
              , S = y.tokenBalance
              , T = y.stakedBalance
              , A = y.earnings
              , D = f[56]
              , P = m[56]
              , q = n.lpSymbol.toUpperCase()
              , B = c && w && w.isGreaterThan(0)
              , z = function(e) {
                var n = Object(u.b)()
                  , t = Object(j.m)().account
                  , r = Object(J.c)();
                return {
                    onApprove: Object(o.useCallback)(Object(R.a)(Q.a.mark((function c() {
                        var a;
                        return Q.a.wrap((function(c) {
                            for (; ; )
                                switch (c.prev = c.next) {
                                case 0:
                                    return c.prev = 0,
                                    c.next = 3,
                                    Object(U.a)(e, r, t);
                                case 3:
                                    return a = c.sent,
                                    n(Object(g.a)(t)),
                                    c.abrupt("return", a);
                                case 8:
                                    return c.prev = 8,
                                    c.t0 = c.catch(0),
                                    c.abrupt("return", !1);
                                case 11:
                                case "end":
                                    return c.stop()
                                }
                        }
                        ), c, null, [[0, 8]])
                    }
                    ))), [t, n, e, r])
                }
            }(Object(o.useMemo)((function() {
                return h ? Object(W.a)(t, P) : Object(W.a)(t, D)
            }
            ), [t, D, P, h])).onApprove
              , I = Object(o.useCallback)(Object(R.a)(Q.a.mark((function e() {
                return Q.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0,
                            x(!0),
                            e.next = 4,
                            z();
                        case 4:
                            x(!1),
                            e.next = 10;
                            break;
                        case 7:
                            e.prev = 7,
                            e.t0 = e.catch(0),
                            console.error(e.t0);
                        case 10:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[0, 7]])
            }
            ))), [z]);
            return Object(r.jsxs)(Be, {
                children: [Object(r.jsxs)(d.n, {
                    children: [Object(r.jsx)(d.C, {
                        bold: !0,
                        textTransform: "uppercase",
                        color: "secondary",
                        fontSize: "12px",
                        pr: "3px",
                        children: "ONF"
                    }), Object(r.jsx)(d.C, {
                        bold: !0,
                        textTransform: "uppercase",
                        color: "textSubtle",
                        fontSize: "12px",
                        children: i(999, "Earned")
                    })]
                }), Object(r.jsx)(Pe, {
                    earnings: A,
                    pid: p
                }), Object(r.jsxs)(d.n, {
                    children: [Object(r.jsx)(d.C, {
                        bold: !0,
                        textTransform: "uppercase",
                        color: "secondary",
                        fontSize: "12px",
                        pr: "3px",
                        children: q
                    }), Object(r.jsx)(d.C, {
                        bold: !0,
                        textTransform: "uppercase",
                        color: "textSubtle",
                        fontSize: "12px",
                        children: i(999, "Staked")
                    })]
                }), c ? B ? Object(r.jsx)(Se, {
                    stakedBalance: T,
                    tokenBalance: S,
                    tokenName: q,
                    pid: p,
                    depositFeeBP: k
                }) : Object(r.jsx)(d.e, {
                    mt: "8px",
                    fullWidth: !0,
                    disabled: b,
                    onClick: I,
                    children: i(999, "Approve Contract")
                }) : Object(r.jsx)(G.a, {
                    mt: "8px",
                    fullWidth: !0
                })]
            })
        }
          , Ie = function(e) {
            var n, t = e.numberOfDays, r = e.farmApy / 100, c = t / 365, a = 1e3 / e.cakePrice, o = a * Math.pow(1 + r / 365, 365 * c);
            return n = o - a,
            Math.round(100 * n) / 100
        }
          , Fe = function(e) {
            return (e.amountEarned / e.amountInvested * 100).toFixed(2)
        };
        function Ee() {
            var e = Object(O.a)(["\n  max-width: 320px;\n  margin-bottom: 28px;\n"]);
            return Ee = function() {
                return e
            }
            ,
            e
        }
        function Le() {
            var e = Object(O.a)(["\n  margin-bottom: '10px';\n"]);
            return Le = function() {
                return e
            }
            ,
            e
        }
        function Ne() {
            var e = Object(O.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(4, auto);\n  margin-bottom: 24px;\n"]);
            return Ne = function() {
                return e
            }
            ,
            e
        }
        var Me = p.e.div(Ne())
          , Ve = p.e.div(Le())
          , He = Object(p.e)(d.C)(Ee())
          , Qe = function(e) {
            var n = e.onDismiss
              , t = e.lpLabel
              , c = e.quoteTokenAdresses
              , a = e.quoteTokenSymbol
              , o = e.tokenAddresses
              , i = e.cakePrice
              , s = e.apy
              , u = Object(C.a)()
              , l = D({
                quoteTokenAdresses: c,
                quoteTokenSymbol: a,
                tokenAddresses: o
            })
              , j = s.times(new b.a(100)).toNumber()
              , x = 1e3 / i.toNumber()
              , O = Ie({
                numberOfDays: 1,
                farmApy: j,
                cakePrice: i
            })
              , p = Ie({
                numberOfDays: 7,
                farmApy: j,
                cakePrice: i
            })
              , f = Ie({
                numberOfDays: 30,
                farmApy: j,
                cakePrice: i
            })
              , m = Ie({
                numberOfDays: 365,
                farmApy: j,
                cakePrice: i
            });
            return Object(r.jsxs)(d.w, {
                title: "ROI",
                onDismiss: n,
                children: [Object(r.jsxs)(Me, {
                    children: [Object(r.jsx)(Ve, {
                        children: Object(r.jsx)(d.C, {
                            fontSize: "12px",
                            bold: !0,
                            color: "textSubtle",
                            textTransform: "uppercase",
                            mb: "20px",
                            children: u(999, "Timeframe")
                        })
                    }), Object(r.jsx)(Ve, {
                        children: Object(r.jsx)(d.C, {
                            fontSize: "12px",
                            bold: !0,
                            color: "textSubtle",
                            textTransform: "uppercase",
                            mb: "20px",
                            children: u(999, "ROI")
                        })
                    }), Object(r.jsx)(Ve, {
                        children: Object(r.jsx)(d.C, {
                            fontSize: "12px",
                            bold: !0,
                            color: "textSubtle",
                            textTransform: "uppercase",
                            mb: "20px",
                            children: u(999, "ONF per $1000")
                        })
                    }), Object(r.jsx)(Ve, {
                        children: Object(r.jsx)(d.C, {
                            children: "1d"
                        })
                    }), Object(r.jsx)(Ve, {
                        children: Object(r.jsxs)(d.C, {
                            children: [Fe({
                                amountEarned: O,
                                amountInvested: x
                            }), "%"]
                        })
                    }), Object(r.jsx)(Ve, {
                        children: Object(r.jsx)(d.C, {
                            children: O
                        })
                    }), Object(r.jsx)(Ve, {
                        children: Object(r.jsx)(d.C, {
                            children: "7d"
                        })
                    }), Object(r.jsx)(Ve, {
                        children: Object(r.jsxs)(d.C, {
                            children: [Fe({
                                amountEarned: p,
                                amountInvested: x
                            }), "%"]
                        })
                    }), Object(r.jsx)(Ve, {
                        children: Object(r.jsx)(d.C, {
                            children: p
                        })
                    }), Object(r.jsx)(Ve, {
                        children: Object(r.jsx)(d.C, {
                            children: "30d"
                        })
                    }), Object(r.jsx)(Ve, {
                        children: Object(r.jsxs)(d.C, {
                            children: [Fe({
                                amountEarned: f,
                                amountInvested: x
                            }), "%"]
                        })
                    }), Object(r.jsx)(Ve, {
                        children: Object(r.jsx)(d.C, {
                            children: f
                        })
                    }), Object(r.jsx)(Ve, {
                        children: Object(r.jsx)(d.C, {
                            children: "365d(APY)"
                        })
                    }), Object(r.jsx)(Ve, {
                        children: Object(r.jsxs)(d.C, {
                            children: [Fe({
                                amountEarned: m,
                                amountInvested: x
                            }), "%"]
                        })
                    }), Object(r.jsx)(Ve, {
                        children: Object(r.jsx)(d.C, {
                            children: m
                        })
                    })]
                }), Object(r.jsx)(He, {
                    fontSize: "12px",
                    color: "textSubtle",
                    children: u(999, "Calculated based on current rates. Compounding once daily. Rates are estimates provided for your convenience only, and by no means represent guaranteed returns.")
                }), Object(r.jsx)(d.n, {
                    justifyContent: "center",
                    children: Object(r.jsxs)(d.s, {
                        href: "https://exchange.pancakeswap.finance/#/add/".concat(l),
                        children: [u(999, "Get"), " ", t]
                    })
                })]
            })
        }
          , Re = function(e) {
            var n = e.lpLabel
              , t = e.quoteTokenAdresses
              , c = e.quoteTokenSymbol
              , o = e.tokenAddresses
              , i = e.cakePrice
              , s = e.apy
              , u = Object(d.H)(Object(r.jsx)(Qe, {
                lpLabel: n,
                quoteTokenAdresses: t,
                quoteTokenSymbol: c,
                tokenAddresses: o,
                cakePrice: i,
                apy: s
            }))
              , l = Object(a.a)(u, 1)[0];
            return Object(r.jsx)(d.p, {
                onClick: l,
                variant: "text",
                size: "sm",
                ml: "4px",
                children: Object(r.jsx)(d.h, {})
            })
        };
        function We() {
            var e = Object(O.a)(["\n  height: ", ";\n  overflow: hidden;\n"]);
            return We = function() {
                return e
            }
            ,
            e
        }
        function Ge() {
            var e = Object(O.a)(["\n  background-color: ", ";\n  height: 1px;\n  margin: 28px auto;\n  width: 100%;\n"]);
            return Ge = function() {
                return e
            }
            ,
            e
        }
        function Ue() {
            var e = Object(O.a)(["\n  align-self: baseline;\n  background: ", ";\n  border-radius: 32px;\n  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 24px;\n  position: relative;\n  text-align: center;\n"]);
            return Ue = function() {
                return e
            }
            ,
            e
        }
        function Je() {
            var e = Object(O.a)(["\n  background: linear-gradient(45deg,\n  rgba(255, 0, 0, 1) 0%,\n  rgba(255, 154, 0, 1) 10%,\n  rgba(208, 222, 33, 1) 20%,\n  rgba(79, 220, 74, 1) 30%,\n  rgba(63, 218, 216, 1) 40%,\n  rgba(47, 201, 226, 1) 50%,\n  rgba(28, 127, 238, 1) 60%,\n  rgba(95, 21, 242, 1) 70%,\n  rgba(186, 12, 248, 1) 80%,\n  rgba(251, 7, 217, 1) 90%,\n  rgba(255, 0, 0, 1) 100%);\n  background-size: 300% 300%;\n  animation: ", " 2s linear infinite;\n  border-radius: 16px;\n  filter: blur(6px);\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  bottom: -2px;\n  left: -2px;\n  z-index: -1;\n"]);
            return Je = function() {
                return e
            }
            ,
            e
        }
        function Xe() {
            var e = Object(O.a)(["\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n"]);
            return Xe = function() {
                return e
            }
            ,
            e
        }
        var $e = Object(p.f)(Xe())
          , Ke = p.e.div(Je(), $e)
          , Ye = p.e.div(Ue(), (function(e) {
            return e.theme.card.background
        }
        ))
          , Ze = p.e.div(Ge(), (function(e) {
            return e.theme.colors.borderColor
        }
        ))
          , _e = p.e.div(We(), (function(e) {
            return e.expanded ? "100%" : "0px"
        }
        ))
          , en = function(e) {
            var n = e.farm
              , t = e.removed
              , c = e.cakePrice
              , i = e.bnbPrice
              , s = e.ethereum
              , u = e.account
              , l = Object(C.a)()
              , j = Object(o.useState)(!1)
              , x = Object(a.a)(j, 2)
              , O = x[0]
              , p = x[1]
              , f = n.isTokenOnly ? n.tokenSymbol.toLowerCase() : "".concat(n.tokenSymbol.toLowerCase(), "-").concat(n.quoteTokenSymbol.toLowerCase())
              , m = Object(o.useMemo)((function() {
                return n.lpTotalInQuoteToken ? n.quoteTokenSymbol === y.b.BNB ? i.times(n.lpTotalInQuoteToken) : n.quoteTokenSymbol === y.b.CAKE ? c.times(n.lpTotalInQuoteToken) : n.lpTotalInQuoteToken : null
            }
            ), [i, c, n.lpTotalInQuoteToken, n.quoteTokenSymbol])
              , h = m ? "$".concat(Number(m).toLocaleString(void 0, {
                maximumFractionDigits: 0
            })) : "-"
              , v = n.lpSymbol
              , k = n.apy && n.apy.times(new b.a(100)).toNumber().toLocaleString(void 0, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })
              , g = n.quoteTokenAdresses
              , w = n.quoteTokenSymbol
              , S = n.tokenAddresses
              , T = n.risk;
            return Object(r.jsxs)(Ye, {
                children: ["ONF" === n.tokenSymbol && Object(r.jsx)(Ke, {}), Object(r.jsx)(V, {
                    lpLabel: v,
                    multiplier: n.multiplier,
                    risk: T,
                    depositFee: n.depositFeeBP,
                    farmImage: f,
                    tokenSymbol: n.tokenSymbol
                }), !t && Object(r.jsxs)(d.n, {
                    justifyContent: "space-between",
                    alignItems: "center",
                    children: [Object(r.jsxs)(d.C, {
                        children: [l(352, "APR"), ":"]
                    }), Object(r.jsx)(d.C, {
                        bold: !0,
                        style: {
                            display: "flex",
                            alignItems: "center"
                        },
                        children: n.apy ? Object(r.jsxs)(r.Fragment, {
                            children: [Object(r.jsx)(Re, {
                                lpLabel: v,
                                quoteTokenAdresses: g,
                                quoteTokenSymbol: w,
                                tokenAddresses: S,
                                cakePrice: c,
                                apy: n.apy
                            }), k, "%"]
                        }) : Object(r.jsx)(d.z, {
                            height: 24,
                            width: 80
                        })
                    })]
                }), Object(r.jsxs)(d.n, {
                    justifyContent: "space-between",
                    children: [Object(r.jsxs)(d.C, {
                        children: [l(318, "Earn"), ":"]
                    }), Object(r.jsx)(d.C, {
                        bold: !0,
                        //children: "DOVE"
                        children: "ONF"
                    })]
                }), Object(r.jsxs)(d.n, {
                    justifyContent: "space-between",
                    children: [Object(r.jsxs)(d.C, {
                        style: {
                            fontSize: "24px"
                        },
                        children: [l(10001, "Deposit Fee"), ":"]
                    }), Object(r.jsxs)(d.C, {
                        bold: !0,
                        style: {
                            fontSize: "24px"
                        },
                        children: [n.depositFeeBP / 100, "%"]
                    })]
                }), Object(r.jsx)(ze, {
                    farm: n,
                    ethereum: s,
                    account: u
                }), Object(r.jsx)(Ze, {}), Object(r.jsx)(A, {
                    onClick: function() {
                        return p(!O)
                    },
                    expanded: O
                }), Object(r.jsx)(_e, {
                    expanded: O,
                    children: Object(r.jsx)(I, {
                        removed: t,
                        isTokenOnly: n.isTokenOnly,
                        bscScanAddress: n.isTokenOnly ? "https://bscscan.com/token/".concat(n.tokenAddresses[56]) : "https://bscscan.com/token/".concat(n.lpAddresses[56]),
                        totalValueFormated: h,
                        lpLabel: v,
                        quoteTokenAdresses: g,
                        quoteTokenSymbol: w,
                        tokenAddresses: S
                    })
                })]
            })
        }
          , nn = t(73);
        function tn() {
            var e = Object(O.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 32px;\n\n  ", " {\n    margin-left: 8px;\n  }\n"]);
            return tn = function() {
                return e
            }
            ,
            e
        }
        function rn() {
            var e = Object(O.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 32px;\n"]);
            return rn = function() {
                return e
            }
            ,
            e
        }
        var cn = function(e) {
            var n = e.stakedOnly
              , t = e.setStakedOnly
              , c = Object(s.h)()
              , a = c.url
              , o = c.isExact
              , i = Object(C.a)();
            return Object(r.jsxs)(an, {
                children: [Object(r.jsxs)(on, {
                    children: [Object(r.jsx)(d.D, {
                        checked: n,
                        onChange: function() {
                            return t(!n)
                        }
                    }), Object(r.jsxs)(d.C, {
                        children: [" ", i(699, "Staked only")]
                    })]
                }), Object(r.jsxs)(d.f, {
                    activeIndex: o ? 0 : 1,
                    size: "sm",
                    variant: "subtle",
                    children: [Object(r.jsx)(d.g, {
                        as: nn.b,
                        to: "".concat(a),
                        children: i(698, "Active")
                    }), Object(r.jsx)(d.g, {
                        as: nn.b,
                        to: "".concat(a, "/history"),
                        children: i(700, "Inactive")
                    })]
                })]
            })
        }
          , an = p.e.div(rn())
          , on = p.e.div(tn(), d.C);
        function sn() {
            var e = Object(O.a)(["\n  background-color: ", ";\n  height: 1px;\n  margin: 0 auto 32px;\n  width: 100%;\n"]);
            return sn = function() {
                return e
            }
            ,
            e
        }
        var un = p.e.div(sn(), (function(e) {
            return e.theme.colors.textSubtle
        }
        ))
          , ln = function(e) {
            var n = Object(s.h)().path
              , t = Object(C.a)()
              , i = Object(v.c)()
              , l = Object(v.f)()
              , O = Object(v.e)()
              , p = Object(j.m)()
              , f = p.account
              , w = p.ethereum
              , S = e.tokenMode
              , T = Object(u.b)()
              , A = Object(k.a)().fastRefresh;
            Object(o.useEffect)((function() {
                f && T(Object(g.a)(f))
            }
            ), [f, T, A]);
            var D = Object(o.useState)(!1)
              , P = Object(a.a)(D, 2)
              , q = P[0]
              , B = P[1]
              , z = i.filter((function(e) {
                return !!e.isTokenOnly === !!S && "0X" !== e.multiplier
            }
            ))
              , I = i.filter((function(e) {
                return !!e.isTokenOnly === !!S && "0X" === e.multiplier
            }
            ))
              , F = z.filter((function(e) {
                return e.userData && new b.a(e.userData.stakedBalance).isGreaterThan(0)
            }
            ))
              , E = Object(o.useCallback)((function(e, n) {
                return e.map((function(e) {
                    var n = new b.a(e.dovePerBlock || 1).times(new b.a(e.poolWeight)).div(new b.a(10).pow(18)).times(x.a)
                      , t = l.times(n)
                      , r = new b.a(e.lpTotalInQuoteToken || 0);
                    return e.quoteTokenSymbol === y.b.BNB && (r = r.times(O)),
                    r.comparedTo(0) > 0 && (t = t.div(r)),
                    Object(c.a)(Object(c.a)({}, e), {}, {
                        apy: t
                    })
                }
                )).map((function(e) {
                    return Object(r.jsx)(en, {
                        farm: e,
                        removed: n,
                        bnbPrice: O,
                        cakePrice: l,
                        ethereum: w,
                        account: f
                    }, e.pid)
                }
                ))
            }
            ), [O, f, l, w]);
            return Object(r.jsxs)(h.a, {
                children: [Object(r.jsx)(d.o, {
                    as: "h1",
                    size: "lg",
                    color: "primary",
                    mb: "50px",
                    style: {
                        textAlign: "center"
                    },
                    children: S ? t(10002, "Stake tokens to earn ONF") : t(320, "Stake LP tokens to earn ONF")
                }), Object(r.jsx)(d.o, {
                    as: "h2",
                    color: "secondary",
                    mb: "50px",
                    style: {
                        textAlign: "center"
                    },
                    children: t(1e4, "Deposit Fee will be used to buyback ONF")
                }), Object(r.jsx)(cn, {
                    stakedOnly: q,
                    setStakedOnly: B
                }), Object(r.jsxs)("div", {
                    children: [Object(r.jsx)(un, {}), Object(r.jsxs)(m, {
                        children: [Object(r.jsx)(s.b, {
                            exact: !0,
                            path: "".concat(n),
                            children: E(q ? F : z, !1)
                        }), Object(r.jsx)(s.b, {
                            exact: !0,
                            path: "".concat(n, "/history"),
                            children: E(I, !0)
                        })]
                    })]
                }), Object(r.jsx)(d.q, {
                    src: "/app.onionfarm.com/images/egg/header_bg.png",
                    alt: "illustration",
                    width: 1352,
                    height: 300,
                    responsive: !0
                })]
            })
        }
    }
}]);
//# sourceMappingURL=12.ad367326.chunk.js.map
