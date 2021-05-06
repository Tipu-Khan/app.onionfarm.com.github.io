(this["webpackJsonpgoose-frontend"] = this["webpackJsonpgoose-frontend"] || []).push([[13], {
    696: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, "default", (function() {
            return ge
        }
        ));
        var c = n(12)
          , r = n(51)
          , a = n(0)
          , i = n(3)
          , o = n(37)
          , s = n(171)
          , u = n(174)
          , j = n(4)
          , l = n.n(j)
          , b = n(15)
          , d = n(20)
          , O = n(66)
          , f = n(13)
          , p = n.n(f)
          , x = n(672)
          , m = n(16)
          , h = n(31)
          , v = n(39)
          , g = n(74)
          , w = n(671)
          , k = n(130)
          , S = function() {
            var e = Object(a.useState)([])
              , t = Object(d.a)(e, 2)
              , n = t[0]
              , c = t[1]
              , r = Object(O.m)().account
              , i = Object(k.a)().fastRefresh;
            return Object(a.useEffect)((function() {
                r && function() {
                    var e = Object(b.a)(l.a.mark((function e() {
                        var t, n, a;
                        return l.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return t = w.a.map((function(e) {
                                        return {
                                            address: Object(v.d)(),
                                            name: "pendingDove",
                                            params: [e.pid, r]
                                        }
                                    }
                                    )),
                                    e.next = 3,
                                    Object(h.a)(g, t);
                                case 3:
                                    n = e.sent,
                                    a = w.a.map((function(e, t) {
                                        return Object(m.a)(Object(m.a)({}, e), {}, {
                                            balance: new p.a(n[t])
                                        })
                                    }
                                    )),
                                    c(a);
                                case 6:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()()
            }
            ), [r, i]),
            n
        }
          , y = n(673)
          , z = n(682)
          , C = function(e) {
            var t = e.value
              , n = e.decimals
              , r = e.fontSize
              , i = void 0 === r ? "40px" : r
              , s = e.prefix
              , u = Object(z.useCountUp)({
                start: 0,
                end: t,
                duration: 1,
                separator: ",",
                decimals: void 0 !== n ? n : t < 0 ? 4 : t > 1e5 ? 0 : 3
            })
              , j = u.countUp
              , l = u.update
              , b = Object(a.useRef)(l);
            return Object(a.useEffect)((function() {
                b.current(t)
            }
            ), [t, b]),
            Object(c.jsxs)(o.C, {
                bold: !0,
                fontSize: i,
                children: [s, j]
            })
        }
          , T = function(e) {
            var t = e.earningsSum
              , n = Object(s.a)();
            return Object(O.m)().account ? Object(c.jsx)(C, {
                value: t
            }) : Object(c.jsx)(o.C, {
                color: "textDisabled",
                style: {
                    lineHeight: "60px"
                },
                children: n(298, "Locked")
            })
        }
          , E = function(e) {
            var t = e.cakeBalance
              , n = Object(s.a)();
            return Object(O.m)().account ? Object(c.jsx)(C, {
                value: t,
                fontSize: "24px"
            }) : Object(c.jsx)(o.C, {
                color: "textDisabled",
                style: {
                    lineHeight: "36px"
                },
                children: n(298, "Locked")
            })
        }
          , D = n(108)
          , V = n(269)
          , N = n(85)
          , Q = n(674)
          , I = function(e) {
            var t = Object(a.useState)(new p.a(0))
              , n = Object(d.a)(t, 2)
              , c = n[0]
              , r = n[1]
              , i = Object(O.m)()
              , o = i.account
              , s = i.ethereum
              , u = Object(k.a)().fastRefresh;
            return Object(a.useEffect)((function() {
                o && s && function() {
                    var t = Object(b.a)(l.a.mark((function t() {
                        var n;
                        return l.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    Object(Q.b)(s, e, o);
                                case 2:
                                    n = t.sent,
                                    r(new p.a(n));
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }()()
            }
            ), [o, s, e, u]),
            c
        }
          , P = function() {
            var e = Object(a.useState)([])
              , t = Object(d.a)(e, 2)
              , n = t[0]
              , c = t[1]
              , r = Object(O.m)().account
              , i = Object(k.a)().fastRefresh;
            return Object(a.useEffect)((function() {
                r && function() {
                    var e = Object(b.a)(l.a.mark((function e() {
                        var t, n;
                        return l.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return t = w.a.map((function(e) {
                                        return {
                                            address: Object(v.d)(),
                                            name: "pendingDove",
                                            params: [e.pid, r]
                                        }
                                    }
                                    )),
                                    e.next = 3,
                                    Object(h.a)(g, t);
                                case 3:
                                    n = e.sent,
                                    c(n);
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()()
            }
            ), [r, i]),
            n
        }
          , A = n(662);
        function R() {
            var e = Object(r.a)(["\n  margin-top: 24px;\n"]);
            return R = function() {
                return e
            }
            ,
            e
        }
        function B() {
            var e = Object(r.a)(["\n  color: ", ";\n  font-size: 14px;\n"]);
            return B = function() {
                return e
            }
            ,
            e
        }
        function F() {
            var e = Object(r.a)(["\n  margin-bottom: 16px;\n"]);
            return F = function() {
                return e
            }
            ,
            e
        }
        function W() {
            var e = Object(r.a)(["\n  margin-bottom: 16px;\n"]);
            return W = function() {
                return e
            }
            ,
            e
        }
        function L() {
            var e = Object(r.a)(["\n//  background-image: url('/images/egg/2a.png');\n  background-repeat: no-repeat;\n  background-position: top right;\n  min-height: 376px;\n"]);
            return L = function() {
                return e
            }
            ,
            e
        }
        var U = Object(i.e)(o.i)(L())
          , $ = i.e.div(W())
          , H = i.e.img(F())
          , M = i.e.div(B(), (function(e) {
            return e.theme.colors.textSubtle
        }
        ))
          , q = i.e.div(R())
          , J = function() {
            var e = Object(a.useState)(!1)
              , t = Object(d.a)(e, 2)
              , n = t[0]
              , r = t[1]
              , i = Object(O.m)().account
              , u = Object(s.a)()
              , j = S()
              , f = Object(A.a)(I(Object(v.a)()))
              , m = Object(D.f)().toNumber()
              , h = P().reduce((function(e, t) {
                return e + new p.a(t).div(new p.a(10).pow(18)).toNumber()
            }
            ), 0)
              , g = j.filter((function(e) {
                return e.balance.toNumber() > 0
            }
            ))
              , w = Object(x.a)(g.map((function(e) {
                return e.pid
            }
            ))).onReward
              , k = Object(a.useCallback)(Object(b.a)(l.a.mark((function e() {
                return l.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return r(!0),
                            e.prev = 1,
                            e.next = 4,
                            w();
                        case 4:
                            e.next = 8;
                            break;
                        case 6:
                            e.prev = 6,
                            e.t0 = e.catch(1);
                        case 8:
                            return e.prev = 8,
                            r(!1),
                            e.finish(8);
                        case 11:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[1, 6, 8, 11]])
            }
            ))), [w]);
            return Object(c.jsx)(U, {
                children: Object(c.jsxs)(o.j, {
                    children: [Object(c.jsx)(o.o, {
                        size: "xl",
                        mb: "24px",
                        children: u(542, "Farms & Staking")
                    }), Object(c.jsx)(H, {
                        src: "/app.onionfarm.com/images/egg/onion.png",
                        alt: "ONF logo",
                        width: 64,
                        height: 64
                    }), Object(c.jsxs)($, {
                        children: [Object(c.jsx)(M, {
                            children: u(544, "ONF to Harvest")
                        }), Object(c.jsx)(T, {
                            earningsSum: h
                        }), Object(c.jsxs)(M, {
                            children: ["~$", (m * h).toFixed(2)]
                        })]
                    }), Object(c.jsxs)($, {
                        children: [Object(c.jsx)(M, {
                            children: u(546, "ONF in Wallet")
                        }), Object(c.jsx)(E, {
                            cakeBalance: f
                        }), Object(c.jsxs)(M, {
                            children: ["~$", (m * f).toFixed(2)]
                        })]
                    }), Object(c.jsx)(q, {
                        children: i ? Object(c.jsx)(o.e, {
                            id: "harvest-all",
                            disabled: g.length <= 0 || n,
                            onClick: k,
                            fullWidth: !0,
                            children: n ? u(548, "Collecting ONF") : u(999, "Harvest all (".concat(g.length, ")"))
                        }) : Object(c.jsx)(y.a, {
                            fullWidth: !0
                        })
                    })]
                })
            })
        }
          , K = n(669);
        function X() {
            var e = Object(r.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]);
            return X = function() {
                return e
            }
            ,
            e
        }
        function _() {
            var e = Object(r.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]);
            return _ = function() {
                return e
            }
            ,
            e
        }
        var G = Object(i.e)(o.i)(_())
          , Y = i.e.div(X())
          , Z = function() {
            var e = Object(s.a)()
              , t = function() {
                var e = Object(k.a)().slowRefresh
                  , t = Object(a.useState)()
                  , n = Object(d.a)(t, 2)
                  , c = n[0]
                  , r = n[1];
                return Object(a.useEffect)((function() {
                    function e() {
                        return (e = Object(b.a)(l.a.mark((function e() {
                            var t, n;
                            return l.a.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return t = Object(N.a)(V, Object(v.a)()),
                                        e.next = 3,
                                        t.methods.totalSupply().call();
                                    case 3:
                                        n = e.sent,
                                        r(new p.a(n));
                                    case 5:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e)
                        }
                        )))).apply(this, arguments)
                    }
                    !function() {
                        e.apply(this, arguments)
                    }()
                }
                ), [e]),
                c
            }()
              , n = function(e) {
                var t = Object(a.useState)(new p.a(0))
                  , n = Object(d.a)(t, 2)
                  , c = n[0]
                  , r = n[1]
                  , i = Object(k.a)().slowRefresh;
                return Object(a.useEffect)((function() {
                    !function() {
                        var e = Object(b.a)(l.a.mark((function e() {
                            var t, n;
                            return l.a.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return t = Object(N.a)(V, Object(v.a)()),
                                        e.next = 3,
                                        t.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();
                                    case 3:
                                        n = e.sent,
                                        r(new p.a(n));
                                    case 5:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e)
                        }
                        )));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }()()
                }
                ), [e, i]),
                c
            }(Object(v.a)())
              , r = Object(D.c)()
              , i = Object(D.f)()
              , u = t ? t.minus(n) : new K.a(0)
              , j = Object(A.a)(u)
              , O = i.times(u)
              , f = 0;
            return r && r[0] && r[0].dovePerBlock && (f = new K.a(r[0].dovePerBlock).div(new K.a(10).pow(18)).toNumber()),
            Object(c.jsx)(G, {
                children: Object(c.jsxs)(o.j, {
                    children: [Object(c.jsx)(o.o, {
                        size: "xl",
                        mb: "24px",
                        children: e(534, "ONF Stats")
                    }), Object(c.jsxs)(Y, {
                        children: [Object(c.jsx)(o.C, {
                            fontSize: "14px",
                            children: e(10005, "Market Cap")
                        }), Object(c.jsx)(C, {
                            fontSize: "14px",
                            value: Object(A.a)(O),
                            decimals: 0,
                            prefix: "$"
                        })]
                    }), Object(c.jsxs)(Y, {
                        children: [Object(c.jsx)(o.C, {
                            fontSize: "14px",
                            children: e(536, "Total Minted")
                        }), t && Object(c.jsx)(C, {
                            fontSize: "14px",
                            value: Object(A.a)(t),
                            decimals: 0
                        })]
                    }), Object(c.jsxs)(Y, {
                        children: [Object(c.jsx)(o.C, {
                            fontSize: "14px",
                            children: e(538, "Total Burned")
                        }), Object(c.jsx)(C, {
                            fontSize: "14px",
                            value: Object(A.a)(n),
                            decimals: 0
                        })]
                    }), Object(c.jsxs)(Y, {
                        children: [Object(c.jsx)(o.C, {
                            fontSize: "14px",
                            children: e(10004, "Circulating Supply")
                        }), j && Object(c.jsx)(C, {
                            fontSize: "14px",
                            value: j,
                            decimals: 0
                        })]
                    }), Object(c.jsxs)(Y, {
                        children: [Object(c.jsx)(o.C, {
                            fontSize: "14px",
                            children: e(540, "New ONF/block")
                        }), Object(c.jsx)(o.C, {
                            bold: !0,
                            fontSize: "14px",
                            children: f
                        })]
                    })]
                })
            })
        };
        function ee() {
            var e = Object(r.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n"]);
            return ee = function() {
                return e
            }
            ,
            e
        }
        var te = Object(i.e)(o.i)(ee())
          , ne = function() {
            var e = Object(s.a)()
              , t = Object(D.g)();
            return Object(c.jsx)(te, {
                children: Object(c.jsxs)(o.j, {
                    children: [Object(c.jsx)(o.o, {
                        size: "lg",
                        mb: "24px",
                        children: e(999, "Total Value Locked (TVL)")
                    }), Object(c.jsxs)(c.Fragment, {
                        children: [Object(c.jsx)(C, {
                            value: t.toNumber(),
                            prefix: "$",
                            decimals: 2
                        }), Object(c.jsx)(o.C, {
                            color: "textSubtle",
                            children: e(999, "Across all Farms and Pools")
                        })]
                    })]
                })
            })
        }
          , ce = n(73)
          , re = n(29)
          , ae = n(675);
        function ie() {
            var e = Object(r.a)(["\n  line-height: 44px;\n"]);
            return ie = function() {
                return e
            }
            ,
            e
        }
        function oe() {
            var e = Object(r.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n\n  ", " {\n    margin: 0;\n    max-width: none;\n  }\n"]);
            return oe = function() {
                return e
            }
            ,
            e
        }
        var se = Object(i.e)(o.i)(oe(), (function(e) {
            return e.theme.mediaQueries.lg
        }
        ))
          , ue = Object(i.e)(o.o).attrs({
            size: "xl"
        })(ie())
          , je = function() {
            var e = Object(s.a)()
              , t = Object(D.c)()
              , n = Object(D.e)()
              , r = Object(a.useRef)(Number.MIN_VALUE)
              , i = function() {
                var e = t.filter((function(e) {
                    return 0 !== e.pid && "0X" !== e.multiplier
                }
                ));
                return u(e),
                (100 * r.current).toLocaleString("en-US").slice(0, -1)
            }
              , u = Object(a.useCallback)((function(e) {
                var c, a = new p.a((null === (c = t.find((function(e) {
                    return e.pid === ae.c
                }
                ))) || void 0 === c ? void 0 : c.tokenPriceVsQuote) || 0);
                e.map((function(e) {
                    if (!e.tokenAmount || !e.lpTotalInQuoteToken || !e.lpTotalInQuoteToken)
                        return e;
                    var t = ae.b.times(e.poolWeight)
                      , c = t.times(ae.a)
                      , i = a.times(c).div(e.lpTotalInQuoteToken);
                    if (e.quoteTokenSymbol === re.b.BUSD)
                        i = a.times(c).div(e.lpTotalInQuoteToken).times(n);
                    else if (e.quoteTokenSymbol === re.b.CAKE)
                        i = c.div(e.lpTotalInQuoteToken);
                    else if (e.dual) {
                        var o = e && a.times(t).times(ae.a).div(e.lpTotalInQuoteToken)
                          , s = e.tokenPriceVsQuote && new p.a(e.tokenPriceVsQuote).times(e.dual.rewardPerBlock).times(ae.a).div(e.lpTotalInQuoteToken);
                        i = o && s && o.plus(s)
                    }
                    return r.current < i.toNumber() && (r.current = i.toNumber()),
                    i
                }
                ))
            }
            ), [n, t]);
            return Object(c.jsx)(se, {
                children: Object(c.jsxs)(o.j, {
                    children: [Object(c.jsx)(o.o, {
                        color: "contrast",
                        size: "lg",
                        children: "Earn up to"
                    }), Object(c.jsx)(ue, {
                        color: "#7645d9",
                        children: i() ? "".concat(i(), "% ").concat(e(736, "APR")) : Object(c.jsx)(o.z, {
                            animation: "pulse",
                            variant: "rect",
                            height: "44px"
                        })
                    }), Object(c.jsxs)(o.n, {
                        justifyContent: "space-between",
                        children: [Object(c.jsx)(o.o, {
                            color: "contrast",
                            size: "lg",
                            children: "in Farms"
                        }), Object(c.jsx)(ce.c, {
                            exact: !0,
                            activeClassName: "active",
                            to: "/farms",
                            id: "farm-apy-cta",
                            children: Object(c.jsx)(o.b, {
                                mt: 30,
                                color: "primary"
                            })
                        })]
                    })]
                })
            })
        }
          , le = n(27)
          , be = n(693);
        function de() {
            var e = Object(r.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]);
            return de = function() {
                return e
            }
            ,
            e
        }
        function Oe() {
            var e = Object(r.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]);
            return Oe = function() {
                return e
            }
            ,
            e
        }
        var fe = Object(i.e)(o.i)(Oe())
          , pe = (i.e.div(de()),
        function() {
            var e = Object(s.a)();
            return Object(c.jsx)(fe, {
                children: Object(c.jsxs)(o.j, {
                    children: [Object(c.jsx)(o.o, {
                        size: "xl",
                        mb: "24px",
                        children: e(10003, "Announcements")
                    }), Object(c.jsx)(be.a, {
                        dataSource: {
                            sourceType: "profile",
                            //this showing news of the twiter in home
                           // screenName: "DOVESWAP"
                        },
                        options: {
                            height: "300",
                            chrome: "noheader, nofooter",
                            width: "400"
                        }
                    })]
                })
            })
        }
        );
        function xe() {
            var e = Object(r.a)(["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 32px;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  ", " {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  ", " {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"]);
            return xe = function() {
                return e
            }
            ,
            e
        }
        function me() {
            var e = Object(r.a)(["\n  align-items: center;\n  background-image: url('/app.onionfarm.com/images/egg/header_bg.png');\n  background-repeat: no-repeat;\n  background-position: top center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  margin-bottom: 32px;\n  padding-top: 116px;\n  text-align: center;\n\n  ", " {\n    background-image: url('/app.onionfarm.com/images/egg/onion.png'), url('/app.onionfarm.com/images/egg/onion.png');\n    background-position: left center, right center;\n    height: 50px;\n   width:50px:\n padding-top: 0;\n  }\n"]);
            return me = function() {
                return e
            }
            ,
            e
        }
        var he = i.e.div(me(), (function(e) {
            return e.theme.mediaQueries.lg
        }
        ))
          , ve = Object(i.e)(o.c)(xe(), (function(e) {
            return e.theme.mediaQueries.sm
        }
        ), (function(e) {
            return e.theme.mediaQueries.lg
        }
        ))
          , ge = function() {
            var e = Object(s.a)();
            return Object(c.jsxs)(u.a, {
                children: [!0 === window.location.href.includes("pools") && Object(c.jsx)(le.a, {
                    to: "/pools"
                }), !0 === window.location.href.includes("farms") && Object(c.jsx)(le.a, {
                    to: "/farms"
                }), Object(c.jsxs)(he, {
                    children: [Object(c.jsx)(o.o, {
                        as: "h1",
                        size: "xl",
                        mb: "24px",
                        color: "secondary",
                        children: e(576, "Onion Farm")
                    }), Object(c.jsx)(o.C, {
                        children: e(578, "The high yield farm on Binance Smart Chain")
                    })]
                }), Object(c.jsxs)(he, {
                    style: {
                        backgroundImage: "none"
                    },
                    children: [Object(c.jsx)(o.o, {
                        as: "h1",
                        size: "xl",
                        mb: "24px",
                        color: "secondary",
                        children: e(10006, "")
                    }), Object(c.jsx)(o.C, {
                        children: e(10007, "")
                    }), Object(c.jsx)(o.C, {
                        children: e(10008, "")
                    })]
                }), Object(c.jsx)("div", {
                    children: Object(c.jsxs)(ve, {
                        children: [Object(c.jsx)(J, {}), Object(c.jsx)(pe, {}), Object(c.jsx)(Z, {}), Object(c.jsxs)("div", {
                            children: [Object(c.jsx)(je, {}), Object(c.jsx)(ne, {})]
                        })]
                    })
                })]
            })
        }
    }
}]);
