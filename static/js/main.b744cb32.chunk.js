(this["webpackJsonpgoose-frontend"] = this["webpackJsonpgoose-frontend"] || []).push([[4], {
    105: function(e, t, n) {
        "use strict";
        n.d(t, "c", (function() {
            return S
        }
        )),
        n.d(t, "b", (function() {
            return _
        }
        ));
        var a = n(4)
          , r = n.n(a)
          , u = n(15)
          , s = n(16)
          , i = n(52)
          , o = n(91)
          , p = n(60)
          , c = n(20)
          , d = n(13)
          , l = n.n(d)
          , y = n(63)
          , m = n(74)
          , f = n(31)
          , b = n(39)
          , T = n(29)
          , v = function() {
            var e = Object(u.a)(r.a.mark((function e() {
                var t;
                return r.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            Promise.all(p.a.map(function() {
                                var e = Object(u.a)(r.a.mark((function e(t) {
                                    var n, a, u, i, o, p, d, v, O, w, j, x, h, g, k, B, M, S, _, D, P, A;
                                    return r.a.wrap((function(e) {
                                        for (; ; )
                                            switch (e.prev = e.next) {
                                            case 0:
                                                return n = t.lpAddresses[56],
                                                a = [{
                                                    address: t.tokenAddresses[56],
                                                    name: "balanceOf",
                                                    params: [n]
                                                }, {
                                                    address: t.quoteTokenAdresses[56],
                                                    name: "balanceOf",
                                                    params: [n]
                                                }, {
                                                    address: t.isTokenOnly ? t.tokenAddresses[56] : n,
                                                    name: "balanceOf",
                                                    params: [Object(b.d)()]
                                                }, {
                                                    address: n,
                                                    name: "totalSupply"
                                                }, {
                                                    address: t.tokenAddresses[56],
                                                    name: "decimals"
                                                }, {
                                                    address: t.quoteTokenAdresses[56],
                                                    name: "decimals"
                                                }],
                                                e.next = 4,
                                                Object(f.a)(y, a);
                                            case 4:
                                                return u = e.sent,
                                                i = Object(c.a)(u, 6),
                                                o = i[0],
                                                p = i[1],
                                                d = i[2],
                                                v = i[3],
                                                O = i[4],
                                                w = i[5],
                                                t.isTokenOnly ? (j = new l.a(d).div(new l.a(10).pow(O)),
                                                h = t.tokenSymbol === T.b.BUSD && t.quoteTokenSymbol === T.b.BUSD ? new l.a(1) : new l.a(p).div(new l.a(o)),
                                                x = j.times(h)) : (g = new l.a(d).div(new l.a(v)),
                                                x = new l.a(p).div(new l.a(10).pow(18)).times(new l.a(2)).times(g),
                                                j = new l.a(o).div(new l.a(10).pow(O)).times(g),
                                                k = new l.a(p).div(new l.a(10).pow(w)).times(g),
                                                h = j.comparedTo(0) > 0 ? k.div(j) : new l.a(p).div(new l.a(o))),
                                                e.next = 15,
                                                Object(f.a)(m, [{
                                                    address: Object(b.d)(),
                                                    name: "poolInfo",
                                                    params: [t.pid]
                                                }, {
                                                    address: Object(b.d)(),
                                                    name: "totalAllocPoint"
                                                }, {
                                                    address: Object(b.d)(),
                                                    name: "dovePerBlock"
                                                }]);
                                            case 15:
                                                return B = e.sent,
                                                M = Object(c.a)(B, 3),
                                                S = M[0],
                                                _ = M[1],
                                                D = M[2],
                                                P = new l.a(S.allocPoint._hex),
                                                A = P.div(new l.a(_)),
                                                e.abrupt("return", Object(s.a)(Object(s.a)({}, t), {}, {
                                                    tokenAmount: j.toJSON(),
                                                    lpTotalInQuoteToken: x.toJSON(),
                                                    tokenPriceVsQuote: h.toJSON(),
                                                    poolWeight: A.toNumber(),
                                                    multiplier: "".concat(P.div(100).toString(), "X"),
                                                    depositFeeBP: S.depositFeeBP,
                                                    dovePerBlock: new l.a(D).toNumber()
                                                }));
                                            case 23:
                                            case "end":
                                                return e.stop()
                                            }
                                    }
                                    ), e)
                                }
                                )));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()));
                        case 2:
                            return t = e.sent,
                            e.abrupt("return", t);
                        case 4:
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
        }()
          , O = function() {
            var e = Object(u.a)(r.a.mark((function e(t) {
                var n, a, u, s;
                return r.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = Object(b.d)(),
                            a = p.a.map((function(e) {
                                return {
                                    address: e.isTokenOnly ? e.tokenAddresses[56] : e.lpAddresses[56],
                                    name: "allowance",
                                    params: [t, n]
                                }
                            }
                            )),
                            e.next = 4,
                            Object(f.a)(y, a);
                        case 4:
                            return u = e.sent,
                            s = u.map((function(e) {
                                return new l.a(e).toJSON()
                            }
                            )),
                            e.abrupt("return", s);
                        case 7:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
          , w = function() {
            var e = Object(u.a)(r.a.mark((function e(t) {
                var n, a, u;
                return r.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = p.a.map((function(e) {
                                return {
                                    address: e.isTokenOnly ? e.tokenAddresses[56] : e.lpAddresses[56],
                                    name: "balanceOf",
                                    params: [t]
                                }
                            }
                            )),
                            e.next = 3,
                            Object(f.a)(y, n);
                        case 3:
                            return a = e.sent,
                            u = a.map((function(e) {
                                return new l.a(e).toJSON()
                            }
                            )),
                            e.abrupt("return", u);
                        case 6:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
          , j = function() {
            var e = Object(u.a)(r.a.mark((function e(t) {
                var n, a, u, s;
                return r.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = Object(b.d)(),
                            a = p.a.map((function(e) {
                                return {
                                    address: n,
                                    name: "userInfo",
                                    params: [e.pid, t]
                                }
                            }
                            )),
                            e.next = 4,
                            Object(f.a)(m, a);
                        case 4:
                            return u = e.sent,
                            s = u.map((function(e) {
                                return new l.a(e[0]._hex).toJSON()
                            }
                            )),
                            e.abrupt("return", s);
                        case 7:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
          , x = function() {
            var e = Object(u.a)(r.a.mark((function e(t) {
                var n, a, u, s;
                return r.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = Object(b.d)(),
                            a = p.a.map((function(e) {
                                return {
                                    address: n,
                                    name: "pendingDove",
                                    params: [e.pid, t]
                                }
                            }
                            )),
                            e.next = 4,
                            Object(f.a)(m, a);
                        case 4:
                            return u = e.sent,
                            s = u.map((function(e) {
                                return new l.a(e).toJSON()
                            }
                            )),
                            e.abrupt("return", s);
                        case 7:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
          , h = {
            data: Object(i.a)(p.a)
        }
          , g = Object(o.b)({
            name: "Farms",
            initialState: h,
            reducers: {
                setFarmsPublicData: function(e, t) {
                    var n = t.payload;
                    e.data = e.data.map((function(e) {
                        var t = n.find((function(t) {
                            return t.pid === e.pid
                        }
                        ));
                        return Object(s.a)(Object(s.a)({}, e), t)
                    }
                    ))
                },
                setFarmUserData: function(e, t) {
                    t.payload.arrayOfUserDataObjects.forEach((function(t) {
                        var n = t.index;
                        e.data[n] = Object(s.a)(Object(s.a)({}, e.data[n]), {}, {
                            userData: t
                        })
                    }
                    ))
                }
            }
        })
          , k = g.actions
          , B = k.setFarmsPublicData
          , M = k.setFarmUserData
          , S = function() {
            return function() {
                var e = Object(u.a)(r.a.mark((function e(t) {
                    var n;
                    return r.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                v();
                            case 2:
                                n = e.sent,
                                t(B(n));
                            case 4:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
        }
          , _ = function(e) {
            return function() {
                var t = Object(u.a)(r.a.mark((function t(n) {
                    var a, u, s, i, o;
                    return r.a.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                O(e);
                            case 2:
                                return a = t.sent,
                                t.next = 5,
                                w(e);
                            case 5:
                                return u = t.sent,
                                t.next = 8,
                                j(e);
                            case 8:
                                return s = t.sent,
                                t.next = 11,
                                x(e);
                            case 11:
                                i = t.sent,
                                o = a.map((function(e, t) {
                                    return {
                                        index: t,
                                        allowance: a[t],
                                        tokenBalance: u[t],
                                        stakedBalance: s[t],
                                        earnings: i[t]
                                    }
                                }
                                )),
                                n(M({
                                    arrayOfUserDataObjects: o
                                }));
                            case 14:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }()
        };
        t.a = g.reducer
    },
    108: function(e, t, n) {
        "use strict";
        n.d(t, "d", (function() {
            return d
        }
        )),
        n.d(t, "c", (function() {
            return l
        }
        )),
        n.d(t, "a", (function() {
            return y
        }
        )),
        n.d(t, "b", (function() {
            return m
        }
        )),
        n.d(t, "e", (function() {
            return f
        }
        )),
        n.d(t, "f", (function() {
            return b
        }
        )),
        n.d(t, "g", (function() {
            return T
        }
        ));
        var a = n(13)
          , r = n.n(a)
          , u = n(0)
          , s = n(56)
          , i = n(130)
          , o = n(129)
          , p = n(29)
          , c = new r.a(0)
          , d = function() {
            var e = Object(s.b)()
              , t = Object(i.a)().slowRefresh;
            Object(u.useEffect)((function() {
                e(Object(o.b)())
            }
            ), [e, t])
        }
          , l = function() {
            return Object(s.c)((function(e) {
                return e.farms.data
            }
            ))
        }
          , y = function(e) {
            return Object(s.c)((function(t) {
                return t.farms.data.find((function(t) {
                    return t.pid === e
                }
                ))
            }
            ))
        }
          , m = function(e) {
            var t = y(e);
            return {
                allowance: t.userData ? new r.a(t.userData.allowance) : new r.a(0),
                tokenBalance: t.userData ? new r.a(t.userData.tokenBalance) : new r.a(0),
                stakedBalance: t.userData ? new r.a(t.userData.stakedBalance) : new r.a(0),
                earnings: t.userData ? new r.a(t.userData.earnings) : new r.a(0)
            }
        }
          , f = function() {
            var e = y(2);
            return e.tokenPriceVsQuote ? new r.a(e.tokenPriceVsQuote) : c
        }
          , b = function() {
            var e = y(0);
            return e.tokenPriceVsQuote ? new r.a(e.tokenPriceVsQuote) : c
        }
          , T = function() {
            for (var e = l(), t = f(), n = b(), a = new r.a(0), u = 0; u < e.length; u++) {
                var s = e[u];
                if (s.lpTotalInQuoteToken) {
                    var i = void 0;
                    i = s.quoteTokenSymbol === p.b.BNB ? t.times(s.lpTotalInQuoteToken) : s.quoteTokenSymbol === p.b.CAKE ? n.times(s.lpTotalInQuoteToken) : s.lpTotalInQuoteToken,
                    a = a.plus(i)
                }
            }
            return a
        }
    },
    125: function(e, t, n) {
        "use strict";
        var a = n(311)
          , r = n.n(a)
          , u = ["https://bsc-dataseed.binance.org", "https://bsc-dataseed.binance.org", "https://bsc-dataseed.binance.org"];
        t.a = function() {
            var e = r()(0, u.length - 1);
            return u[e]
        }
    },
    126: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return p
        }
        )),
        n.d(t, "b", (function() {
            return c
        }
        ));
        var a = n(12)
          , r = n(4)
          , u = n.n(r)
          , s = n(15)
          , i = n(20)
          , o = n(0)
          , p = n.n(o).a.createContext({
            slow: 0,
            fast: 0
        })
          , c = function(e) {
            var t = e.children
              , n = Object(o.useState)(0)
              , r = Object(i.a)(n, 2)
              , c = r[0]
              , d = r[1]
              , l = Object(o.useState)(0)
              , y = Object(i.a)(l, 2)
              , m = y[0]
              , f = y[1];
            return Object(o.useEffect)((function() {
                var e = setInterval(Object(s.a)(u.a.mark((function e() {
                    return u.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                f((function(e) {
                                    return e + 1
                                }
                                ));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))), 1e4);
                return function() {
                    return clearInterval(e)
                }
            }
            ), []),
            Object(o.useEffect)((function() {
                var e = setInterval(Object(s.a)(u.a.mark((function e() {
                    return u.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                d((function(e) {
                                    return e + 1
                                }
                                ));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))), 6e4);
                return function() {
                    return clearInterval(e)
                }
            }
            ), []),
            Object(a.jsx)(p.Provider, {
                value: {
                    slow: c,
                    fast: m
                },
                children: t
            })
        }
    },
    129: function(e, t, n) {
        "use strict";
        var a = n(105);
        n.d(t, "b", (function() {
            return a.c
        }
        )),
        n.d(t, "a", (function() {
            return a.b
        }
        ));
        var r = n(59);
        n.d(t, "c", (function() {
            return r.b
        }
        )),
        n.d(t, "d", (function() {
            return r.c
        }
        )),
        n.d(t, "e", (function() {
            return r.d
        }
        )),
        n.d(t, "f", (function() {
            return r.e
        }
        )),
        n.d(t, "g", (function() {
            return r.f
        }
        ))
    },
    130: function(e, t, n) {
        "use strict";
        var a = n(0)
          , r = n(126);
        t.a = function() {
            var e = Object(a.useContext)(r.a);
            return {
                fastRefresh: e.fast,
                slowRefresh: e.slow
            }
        }
    },
    171: function(e, t, n) {
        "use strict";
        var a = n(0)
          , r = n(90)
          , u = /%(.*?)%/
          , s = function(e, t, n) {
            var a = e.find((function(e) {
                return e.data.stringId === t
            }
            ));
            if (a) {
                var r = a.data.text;
                return r.includes("%") ? function(e, t) {
                    var n = u.exec(e)[0]
                      , a = t.split(" ")[0];
                    return e.replace(n, a)
                }(r, n) : r
            }
            return n
        };
        t.a = function() {
            var e = Object(a.useContext)(r.a).translations;
            return function(t, n) {
                return "error" === e[0] ? n : e.length > 0 ? s(e, t, n) : n
            }
        }
    },
    174: function(e, t, n) {
        "use strict";
        var a = n(51)
          , r = n(3);
        function u() {
            var e = Object(a.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 992px;\n  padding-left: 16px;\n  padding-right: 16px;\n\n  ", " {\n    padding-left: 24px;\n    padding-right: 24px;\n  }\n"]);
            return u = function() {
                return e
            }
            ,
            e
        }
        var s = r.e.div(u(), (function(e) {
            return e.theme.mediaQueries.sm
        }
        ));
        function i() {
            var e = Object(a.a)(["\n  min-height: calc(100vh - 64px);\n  padding-top: 16px;\n  padding-bottom: 16px;\n\n  ", " {\n    padding-top: 24px;\n    padding-bottom: 24px;\n  }\n\n  ", " {\n    padding-top: 32px;\n    padding-bottom: 32px;\n  }\n"]);
            return i = function() {
                return e
            }
            ,
            e
        }
        var o = Object(r.e)(s)(i(), (function(e) {
            return e.theme.mediaQueries.sm
        }
        ), (function(e) {
            return e.theme.mediaQueries.lg
        }
        ));
        t.a = o
    },
    269: function(e) {
        e.exports = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegator","type":"address"},{"indexed":true,"internalType":"address","name":"fromDelegate","type":"address"},{"indexed":true,"internalType":"address","name":"toDelegate","type":"address"}],"name":"DelegateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegate","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBalance","type":"uint256"}],"name":"DelegateVotesChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DELEGATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DOMAIN_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint32","name":"","type":"uint32"}],"name":"checkpoints","outputs":[{"internalType":"uint32","name":"fromBlock","type":"uint32"},{"internalType":"uint256","name":"votes","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"}],"name":"delegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"delegateBySig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegator","type":"address"}],"name":"delegates","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getCurrentVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getPriorVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"numCheckpoints","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
    },
    29: function(e, t, n) {
        "use strict";
        var a, r;
        n.d(t, "b", (function() {
            return a
        }
        )),
        n.d(t, "a", (function() {
            return r
        }
        )),
        function(e) {
            e.BNB = "BNB",
            e.CAKE = "CAKE",
            e.SYRUP = "SYRUP",
            e.BUSD = "BUSD",
            e.TWT = "TWT",
            e.UST = "UST",
            e.PNIX = "PNIX"
        }(a || (a = {})),
        function(e) {
            e.COMMUNITY = "Community",
            e.CORE = "Core",
            e.BINANCE = "Binance"
        }(r || (r = {}))
    },
    302: function(e) {
        e.exports = JSON.parse('[{"inputs":[{"internalType":"contract IBEP20","name":"_cakeToken","type":"address"},{"internalType":"uint256","name":"_totalSupplyDistributed","type":"uint256"},{"internalType":"uint256","name":"_cakePerBurn","type":"uint256"},{"internalType":"string","name":"_baseURI","type":"string"},{"internalType":"string","name":"_ipfsHash","type":"string"},{"internalType":"uint256","name":"_endBlockNumber","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"BunnyBurn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":true,"internalType":"uint8","name":"bunnyId","type":"uint8"}],"name":"BunnyMint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"burnNFT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cakePerBurn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cakeToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"canClaim","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"changeOwnershipNFTContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"countBunniesBurnt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentDistributedSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"endBlockNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"hasClaimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_bunnyId","type":"uint8"}],"name":"mintNFT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pancakeBunnies","outputs":[{"internalType":"contract PancakeBunnies","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setStartBlockNumber","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startBlockNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupplyDistributed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"users","type":"address[]"}],"name":"whitelistAddresses","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdrawCake","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
    },
    31: function(e, t, n) {
        "use strict";
        var a = n(4)
          , r = n.n(a)
          , u = n(15)
          , s = n(649)
          , i = n(85)
          , o = n(312)
          , p = n(39)
          , c = function() {
            var e = Object(u.a)(r.a.mark((function e(t, n) {
                var a, u, c, d, l, y, m;
                return r.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return a = Object(i.b)(),
                            u = new a.eth.Contract(o,Object(p.e)()),
                            c = new s.a(t),
                            d = n.map((function(e) {
                                return [e.address.toLowerCase(), c.encodeFunctionData(e.name, e.params)]
                            }
                            )),
                            e.next = 6,
                            u.methods.aggregate(d).call();
                        case 6:
                            return l = e.sent,
                            y = l.returnData,
                            m = y.map((function(e, t) {
                                return c.decodeFunctionResult(n[t].name, e)
                            }
                            )),
                            e.abrupt("return", m);
                        case 10:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, n) {
                return e.apply(this, arguments)
            }
        }();
        t.a = c
    },
    312: function(e) {
        e.exports = JSON.parse('[{"constant":true,"inputs":[{"components":[{"name":"target","type":"address"},{"name":"callData","type":"bytes"}],"name":"calls","type":"tuple[]"}],"name":"aggregate","outputs":[{"name":"blockNumber","type":"uint256"},{"name":"returnData","type":"bytes[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getEthBalance","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]')
    },
    313: function(e) {
        e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"}]')
    },
    384: function(e, t) {},
    39: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return r
        }
        )),
        n.d(t, "d", (function() {
            return u
        }
        )),
        n.d(t, "e", (function() {
            return s
        }
        )),
        n.d(t, "f", (function() {
            return i
        }
        )),
        n.d(t, "b", (function() {
            return o
        }
        )),
        n.d(t, "c", (function() {
            return p
        }
        ));
        var a = n(40)
          , r = function() {
            return a.a.cake[56]
        }
          , u = function() {
            return a.a.masterChef[56]
        }
          , s = function() {
            return a.a.mulltiCall[56]
        }
          , i = function() {
            return a.a.wbnb[56]
        }
          , o = function() {
            return a.a.lottery[56]
        }
          , p = function() {
            return a.a.lotteryNFT[56]
        }
    },
    40: function(e, t, n) {
        "use strict";
        t.a = {
            cake: {
                56: "0xddb28627a130de6e437a18724c4c9789d7668d6f",
                97: ""
            },
            masterChef: {
                56: "0x2481c5D9E490613c6D52d388D0630f7Dccb577E1",
                97: ""
            },
            wbnb: {
                56: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
                97: ""
            },
            lottery: {
                56: "",
                97: ""
            },
            lotteryNFT: {
                56: "",
                97: ""
            },
            mulltiCall: {
                56: "0x1ee38d535d541c55c9dae27b12edf090c608e6fb",
                97: "0x67ADCB4dF3931b0C5Da724058ADC2174a9844412"
            },
            busd: {
                56: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
                97: ""
            }
        }
    },
    406: function(e, t) {},
    408: function(e, t) {},
    483: function(e, t) {},
    485: function(e, t) {},
    49: function(e, t, n) {
        "use strict";
        t.a = []
    },
    517: function(e, t) {},
    522: function(e, t) {},
    524: function(e, t) {},
    531: function(e, t) {},
    544: function(e, t) {},
    59: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return E
        }
        )),
        n.d(t, "c", (function() {
            return N
        }
        )),
        n.d(t, "d", (function() {
            return C
        }
        )),
        n.d(t, "f", (function() {
            return R
        }
        )),
        n.d(t, "e", (function() {
            return F
        }
        ));
        var a = n(4)
          , r = n.n(a)
          , u = n(15)
          , s = n(43)
          , i = n(16)
          , o = n(52)
          , p = n(91)
          , c = n(49)
          , d = n(89)
          , l = (n(269),
        n(313),
        n(29))
          , y = n(31)
          , m = n(39)
          , f = n(13)
          , b = n.n(f)
          , T = n(74)
          , v = n(63)
          , O = n(85)
          , w = c.a.filter((function(e) {
            return e.stakingTokenName !== l.b.BNB
        }
        ))
          , j = c.a.filter((function(e) {
            return e.stakingTokenName === l.b.BNB
        }
        ))
          , x = c.a.filter((function(e) {
            return 0 !== e.sousId
        }
        ))
          , h = Object(O.b)()
          , g = new h.eth.Contract(T,Object(m.d)())
          , k = function() {
            var e = Object(u.a)(r.a.mark((function e(t) {
                var n, a;
                return r.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = w.map((function(e) {
                                return {
                                    address: e.stakingTokenAddress,
                                    name: "allowance",
                                    params: [t, e.contractAddress[56]]
                                }
                            }
                            )),
                            e.next = 3,
                            Object(y.a)(v, n);
                        case 3:
                            return a = e.sent,
                            e.abrupt("return", w.reduce((function(e, t, n) {
                                return Object(i.a)(Object(i.a)({}, e), {}, Object(s.a)({}, t.sousId, new b.a(a[n]).toJSON()))
                            }
                            ), {}));
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
          , B = function() {
            var e = Object(u.a)(r.a.mark((function e(t) {
                var n, a, u, o, p;
                return r.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = w.map((function(e) {
                                return {
                                    address: e.stakingTokenAddress,
                                    name: "balanceOf",
                                    params: [t]
                                }
                            }
                            )),
                            e.next = 3,
                            Object(y.a)(v, n);
                        case 3:
                            return a = e.sent,
                            u = w.reduce((function(e, t, n) {
                                return Object(i.a)(Object(i.a)({}, e), {}, Object(s.a)({}, t.sousId, new b.a(a[n]).toJSON()))
                            }
                            ), {}),
                            e.next = 7,
                            h.eth.getBalance(t);
                        case 7:
                            return o = e.sent,
                            p = j.reduce((function(e, t) {
                                return Object(i.a)(Object(i.a)({}, e), {}, Object(s.a)({}, t.sousId, new b.a(o).toJSON()))
                            }
                            ), {}),
                            e.abrupt("return", Object(i.a)(Object(i.a)({}, u), p));
                        case 10:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
          , M = function() {
            var e = Object(u.a)(r.a.mark((function e(t) {
                var n, a, u, o, p;
                return r.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = x.map((function(e) {
                                return {
                                    address: e.contractAddress[56],
                                    name: "userInfo",
                                    params: [t]
                                }
                            }
                            )),
                            e.next = 3,
                            Object(y.a)(d, n);
                        case 3:
                            return a = e.sent,
                            u = x.reduce((function(e, t, n) {
                                return Object(i.a)(Object(i.a)({}, e), {}, Object(s.a)({}, t.sousId, new b.a(a[n].amount._hex).toJSON()))
                            }
                            ), {}),
                            e.next = 7,
                            g.methods.userInfo("0", t).call();
                        case 7:
                            return o = e.sent,
                            p = o.amount,
                            e.abrupt("return", Object(i.a)(Object(i.a)({}, u), {}, {
                                0: new b.a(p).toJSON()
                            }));
                        case 10:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
          , S = function() {
            var e = Object(u.a)(r.a.mark((function e(t) {
                var n, a, u, o;
                return r.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = x.map((function(e) {
                                return {
                                    address: e.contractAddress[56],
                                    name: "pendingReward",
                                    params: [t]
                                }
                            }
                            )),
                            e.next = 3,
                            Object(y.a)(d, n);
                        case 3:
                            return a = e.sent,
                            u = x.reduce((function(e, t, n) {
                                return Object(i.a)(Object(i.a)({}, e), {}, Object(s.a)({}, t.sousId, new b.a(a[n]).toJSON()))
                            }
                            ), {}),
                            e.next = 7,
                            g.methods.pendingDove("0", t).call();
                        case 7:
                            return o = e.sent,
                            e.abrupt("return", Object(i.a)(Object(i.a)({}, u), {}, {
                                0: new b.a(o).toJSON()
                            }));
                        case 9:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
          , _ = {
            data: Object(o.a)(c.a)
        }
          , D = Object(p.b)({
            name: "Pools",
            initialState: _,
            reducers: {
                setPoolsPublicData: function(e, t) {
                    var n = t.payload;
                    e.data = e.data.map((function(e) {
                        var t = n.find((function(t) {
                            return t.sousId === e.sousId
                        }
                        ));
                        return Object(i.a)(Object(i.a)({}, e), t)
                    }
                    ))
                },
                setPoolsUserData: function(e, t) {
                    var n = t.payload;
                    e.data = e.data.map((function(e) {
                        var t = n.find((function(t) {
                            return t.sousId === e.sousId
                        }
                        ));
                        return Object(i.a)(Object(i.a)({}, e), {}, {
                            userData: t
                        })
                    }
                    ))
                },
                updatePoolsUserData: function(e, t) {
                    var n = t.payload
                      , a = n.field
                      , r = n.value
                      , u = n.sousId
                      , o = e.data.findIndex((function(e) {
                        return e.sousId === u
                    }
                    ));
                    e.data[o] = Object(i.a)(Object(i.a)({}, e.data[o]), {}, {
                        userData: Object(i.a)(Object(i.a)({}, e.data[o].userData), {}, Object(s.a)({}, a, r))
                    })
                }
            }
        })
          , P = D.actions
          , A = (P.setPoolsPublicData,
        P.setPoolsUserData)
          , I = P.updatePoolsUserData
          , E = function(e) {
            return function() {
                var t = Object(u.a)(r.a.mark((function t(n) {
                    var a, u, s, i, o;
                    return r.a.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                k(e);
                            case 2:
                                return a = t.sent,
                                t.next = 5,
                                B(e);
                            case 5:
                                return u = t.sent,
                                t.next = 8,
                                M(e);
                            case 8:
                                return s = t.sent,
                                t.next = 11,
                                S(e);
                            case 11:
                                i = t.sent,
                                o = c.a.map((function(e) {
                                    return {
                                        sousId: e.sousId,
                                        allowance: a[e.sousId],
                                        stakingTokenBalance: u[e.sousId],
                                        stakedBalance: s[e.sousId],
                                        pendingReward: i[e.sousId]
                                    }
                                }
                                )),
                                n(A(o));
                            case 14:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }()
        }
          , N = function(e, t) {
            return function() {
                var n = Object(u.a)(r.a.mark((function n(a) {
                    var u;
                    return r.a.wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                return n.next = 2,
                                k(t);
                            case 2:
                                u = n.sent,
                                a(I({
                                    sousId: e,
                                    field: "allowance",
                                    value: u[e]
                                }));
                            case 4:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n)
                }
                )));
                return function(e) {
                    return n.apply(this, arguments)
                }
            }()
        }
          , C = function(e, t) {
            return function() {
                var n = Object(u.a)(r.a.mark((function n(a) {
                    var u;
                    return r.a.wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                return n.next = 2,
                                B(t);
                            case 2:
                                u = n.sent,
                                a(I({
                                    sousId: e,
                                    field: "stakingTokenBalance",
                                    value: u[e]
                                }));
                            case 4:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n)
                }
                )));
                return function(e) {
                    return n.apply(this, arguments)
                }
            }()
        }
          , R = function(e, t) {
            return function() {
                var n = Object(u.a)(r.a.mark((function n(a) {
                    var u;
                    return r.a.wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                return n.next = 2,
                                M(t);
                            case 2:
                                u = n.sent,
                                a(I({
                                    sousId: e,
                                    field: "stakedBalance",
                                    value: u[e]
                                }));
                            case 4:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n)
                }
                )));
                return function(e) {
                    return n.apply(this, arguments)
                }
            }()
        }
          , F = function(e, t) {
            return function() {
                var n = Object(u.a)(r.a.mark((function n(a) {
                    var u;
                    return r.a.wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                return n.next = 2,
                                S(t);
                            case 2:
                                u = n.sent,
                                a(I({
                                    sousId: e,
                                    field: "pendingReward",
                                    value: u[e]
                                }));
                            case 4:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n)
                }
                )));
                return function(e) {
                    return n.apply(this, arguments)
                }
            }()
        };
        t.a = D.reducer
    },
    60: function(e, t, n) {
        "use strict";
        var a = n(40)
          , r = n(29)
          , u = [{
            pid: 0,
            risk: 5,
            lpSymbol: "ONF-BUSD LP",
            lpAddresses: {
                97: "",
                56: "0xcdB759f5951b4a6Dc91fe897f1F72D2764B9Cf75"
            },
            tokenSymbol: "ONF",
            tokenAddresses: {
                97: "",
                56: "0xddb28627a130de6e437a18724c4c9789d7668d6f"
            },
            quoteTokenSymbol: r.b.BUSD,
            quoteTokenAdresses: a.a.busd
        }, {
            pid: 1,
            risk: 5,
            lpSymbol: "ONF-BNB LP",
            lpAddresses: {
                97: "",
                56: "0x1db65412201F49B928a200d5634106115Be2C20E"
            },
            tokenSymbol: "ONF",
            tokenAddresses: {
                97: "",
                56: "0xddb28627a130de6e437a18724c4c9789d7668d6f"
            },
            quoteTokenSymbol: r.b.BNB,
            quoteTokenAdresses: a.a.wbnb
        }, 
     /*   {
            pid: 5,
            risk: 5,
            lpSymbol: "PNIX-BNB LP",
            lpAddresses: {
                97: "",
                56: "0xB5891f5FfB831fEefAe58e336952023D8684FBD8"
            },
            tokenSymbol: "PNIX",
            tokenAddresses: {
                97: "",
                56: "0xc25d94fc3f8d7bd1d88f89802fe075338f71dec7"
            },
            quoteTokenSymbol: r.b.BNB,
            quoteTokenAdresses: a.a.wbnb
        }, */
        /* {
            pid: 6,
            risk: 5,
            lpSymbol: "PNIXS-BNB LP",
            lpAddresses: {
                97: "",
                56: "0x360C6A3d31cd33310778dA84CC0B23a62aDb22B4"
            },
            tokenSymbol: "PNIXS",
            tokenAddresses: {
                97: "",
                56: "0x509949c4ee0c1c2c765cf9b23c75d823981e22ae"
            },
            quoteTokenSymbol: r.b.BNB,
            quoteTokenAdresses: a.a.wbnb
        },  */
        
      /*  {
            pid: 2,
            risk: 3,
            lpSymbol: "BNB-BUSD LP",
            lpAddresses: {
                97: "",
                56: "0x1b96b92314c44b159149f7e0303511fb2fc4774f"
            },
            tokenSymbol: "ONF",
            tokenAddresses: {
                97: "",
                56: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"
            },
            quoteTokenSymbol: r.b.UST,
            quoteTokenAdresses: a.a.busd
        }, */
        
        {
           
           // pid: 3,
            pid: 2,
            risk: 5,
            isTokenOnly: !0,
            lpSymbol: "ONF",
            lpAddresses: {
                97: "",
                56: "0xcdB759f5951b4a6Dc91fe897f1F72D2764B9Cf75"
            },
            tokenSymbol: "ONF",
            tokenAddresses: {
                97: "",
                56: "0xddb28627a130de6e437a18724c4c9789d7668d6f"
            },
            quoteTokenSymbol: r.b.BUSD,
            quoteTokenAdresses: a.a.busd
        } 
    /*    {
            pid: 7,
            risk: 3,
            isTokenOnly: !0,
            lpSymbol: "WBNB",
            lpAddresses: {
                97: "",
                56: "0x1b96b92314c44b159149f7e0303511fb2fc4774f"
            },
            tokenSymbol: "WBNB",
            tokenAddresses: {
                97: "",
                56: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"
            },
            quoteTokenSymbol: r.b.BUSD,
            quoteTokenAdresses: a.a.busd
        } */ ];
        t.a = u
    },
    63: function(e) {
        e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]')
    },
    647: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n(12)
          , r = n(0)
          , u = n.n(r)
          , s = n(64)
          , i = n.n(s)
          , o = n(73)
          , p = n(27)
          , c = n(66)
          , d = n(37)
          , l = n(13)
          , y = n.n(l)
          , m = n(108)
          , f = n(51)
          , b = n(3);
        function T() {
            var e = Object(f.a)(["\n  * {\n    font-family:  'Amaranth',cursive, sans-serif;\n  }\n  body {\n    background-color: ", ";\n\n    img {\n      height: auto;\n      max-width: 100%;\n    }\n  }\n"]);
            return T = function() {
                return e
            }
            ,
            e
        }
        var v = Object(b.c)(T(), (function(e) {
            return e.theme.colors.background
        }
        ))
          , O = n(16)
          , w = {
            code: "en",
            language: "English"
        }
          , j = [w]
          , x = n(20)
          , h = n(314)
          , g = n(90)
          , k = "pancakeSwapLanguage"
          , B = u.a.createContext({
            selectedLanguage: w,
            setSelectedLanguage: function() {},
            translatedLanguage: w,
            setTranslatedLanguage: function() {}
        })
          , M = (parseInt(Object({
            NODE_ENV: "production",
            PUBLIC_URL: "http://localhost/onionfarm/app.onionfarm.com/",
            WDS_SOCKET_HOST: void 0,
            WDS_SOCKET_PATH: void 0,
            WDS_SOCKET_PORT: void 0,
            FAST_REFRESH: !0,
            REACT_APP_CHAIN_ID: "56",
            REACT_APP_NODE_1: "https://bsc-dataseed.binance.org",
            REACT_APP_NODE_2: "https://bsc-dataseed.binance.org",
            REACT_APP_NODE_3: "https://bsc-dataseed.binance.org"
        }).REACT_APP_CROWDIN_PROJECTID),
        new h.StringTranslations({
            token: Object({
                NODE_ENV: "production",
                PUBLIC_URL: "http://localhost/onionfarm/app.onionfarm.com/",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0,
                REACT_APP_CHAIN_ID: "56",
                REACT_APP_NODE_1: "https://bsc-dataseed.binance.org",
                REACT_APP_NODE_2: "https://bsc-dataseed.binance.org",
                REACT_APP_NODE_3: "https://bsc-dataseed.binance.org"
            }).REACT_APP_CROWDIN_APIKEY
        }),
        function(e) {
            var t = e.children
              , n = Object(r.useState)(w)
              , u = Object(x.a)(n, 2)
              , s = u[0]
              , i = u[1]
              , o = Object(r.useState)(w)
              , p = Object(x.a)(o, 2)
              , c = p[0]
              , d = p[1]
              , l = Object(r.useState)([])
              , y = Object(x.a)(l, 2)
              , m = y[0]
              , f = y[1];
            Object(r.useEffect)((function() {
                var e = localStorage.getItem(k);
                if (e) {
                    var t = function(e) {
                        return j.filter((function(t) {
                            return t.code === e
                        }
                        ))[0]
                    }(e);
                    i(t)
                } else
                    i(w)
            }
            ), []),
            Object(r.useEffect)((function() {
                s && (console.log("import(`../../../public/i18n/".concat(s.code, ".json`)")),
                fetch("./i18n/".concat(s.code, ".json")).then((function(e) {
                    return e.json()
                }
                )).then((function(e) {
                    e.data.length < 1 ? f(["error"]) : f(e.data)
                }
                )).then((function() {
                    return d(s)
                }
                )).catch((function(e) {
                    console.error("ERROR"),
                    console.error(e),
                    f(["error"])
                }
                )))
            }
            ), [s, f]);
            return Object(a.jsx)(B.Provider, {
                value: {
                    selectedLanguage: s,
                    setSelectedLanguage: function(e) {
                        i(e),
                        localStorage.setItem(k, e.code)
                    },
                    translatedLanguage: c,
                    setTranslatedLanguage: d
                },
                children: Object(a.jsx)(g.a.Provider, {
                    value: {
                        translations: m,
                        setTranslations: f
                    },
                    children: t
                })
            })
        }
        )
          , S = "IS_DARK"
          , _ = u.a.createContext({
            isDark: null,
            toggleTheme: function() {
                return null
            }
        })
          , D = function(e) {
            var t = e.children
              , n = Object(r.useState)((function() {
                var e = localStorage.getItem(S);
                return !!e && JSON.parse(e)
            }
            ))
              , u = Object(x.a)(n, 2)
              , s = u[0]
              , i = u[1];
            return Object(a.jsx)(_.Provider, {
                value: {
                    isDark: s,
                    toggleTheme: function() {
                        i((function(e) {
                            return localStorage.setItem(S, JSON.stringify(!e)),
                            !e
                        }
                        ))
                    }
                },
                children: Object(a.jsx)(b.b, {
                    theme: s ? d.F : d.G,
                    children: t
                })
            })
        }
          , P = function() {
            var e = Object(r.useContext)(_);
            return {
                isDark: e.isDark,
                toggleTheme: e.toggleTheme,
                theme: Object(r.useContext)(b.a)
            }
        }
          , A = [{
            label: "Home",
            icon: "HomeIcon",
            href: "/"
        }, {
            label: "Trade",
            icon: "TradeIcon",
            items: [{
                label: "Exchange",
                href: "https://tipu-khan.github.io/dex.onionfarm.com.github.io/#/swap"
            }, {
                label: "Liquidity",
                href: "https://tipu-khan.github.io/dex.onionfarm.com.github.io/#/pool"
            }]
        }, {
            label: "Farms",
            icon: "FarmIcon",
            href: "/farms"
        }, {
            label: "Pools",
            icon: "PoolIcon",
            href: "/pools"
        }, {
            label: "More",
            icon: "MoreIcon",
            items: [{
                label: "Docs",
                href: "https://onionfarm.gitbook.io/onionfarm-com/"
            }, {
                label: "Lottery",
                href: "/lottery"
            }, {
                label: "NFT Market",
                href: "/nftMarket"
            }]
        }]
          , I = function(e) {
            var t = Object(c.m)()
              , n = t.account
              , u = t.connect
              , s = t.reset
              , i = Object(r.useContext)(B)
              , o = i.selectedLanguage
              , p = i.setSelectedLanguage
              , l = P()
              , y = l.isDark
              , f = l.toggleTheme
              , b = Object(m.f)();
            return Object(a.jsx)(d.u, Object(O.a)({
                account: n,
                login: u,
                logout: s,
                isDark: y,
                toggleTheme: f,
                currentLang: o && o.code,
                langs: j,
                setLang: p,
                cakePriceUsd: b.toNumber(),
                links: A,
                priceLink: "https://bscscan.com/token/0xddb28627a130de6e437a18724c4c9789d7668d6f"
            }, e))
        }
          , E = n(174);
        function N() {
            var e = Object(f.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);
            return N = function() {
                return e
            }
            ,
            e
        }
        var C = Object(b.e)(E.a)(N())
          , R = function() {
            return Object(a.jsx)(C, {
                children: Object(a.jsx)(d.A, {})
            })
        }
          , F = n(4)
          , U = n.n(F)
          , L = n(15)
          , J = n(171)
          , q = n(302)
          , W = "0x7c8b60d2b859a38c8B9b5B6CB4565485cb637c7a"
          , V = n(31);
        function H() {
            var e = Object(f.a)(["\n  text-align: center;\n"]);
            return H = function() {
                return e
            }
            ,
            e
        }
        function Q() {
            var e = Object(f.a)(["\n  padding: 24px;\n  text-align: center;\n"]);
            return Q = function() {
                return e
            }
            ,
            e
        }
        var K = b.e.div(Q())
          , X = b.e.div(H())
          , Y = function(e) {
            var t = e.onDismiss
              , n = Object(J.a)();
            return Object(a.jsxs)(d.w, {
                title: n(999, "Congratulations!"),
                onDismiss: t,
                children: [Object(a.jsxs)(K, {
                    children: [Object(a.jsx)("img", {
                        src: "/images/present.svg",
                        alt: "You won present",
                        style: {
                            height: "64px",
                            marginBottom: "24px"
                        }
                    }), Object(a.jsx)(d.o, {
                        size: "lg",
                        color: "secondary",
                        children: n(999, "You won an NFT!")
                    })]
                }), Object(a.jsx)(X, {
                    children: Object(a.jsx)(d.e, {
                        as: "a",
                        href: "/nft",
                        children: n(999, "Go to claim NFT")
                    })
                })]
            })
        }
          , z = function() {
            var e = Object(c.m)().account
              , t = Object(d.H)(Object(a.jsx)(Y, {}))
              , n = Object(x.a)(t, 1)[0]
              , u = Object(r.useRef)((function() {
                return n()
            }
            ));
            return Object(r.useEffect)((function() {
                var t = function() {
                    var t = Object(L.a)(U.a.mark((function t() {
                        var n, a, r, s, i, o, p, c, d, l, y, m, f, b;
                        return U.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    Object(V.a)(q, [{
                                        address: W,
                                        name: "totalSupplyDistributed"
                                    }, {
                                        address: W,
                                        name: "currentDistributedSupply"
                                    }, {
                                        address: W,
                                        name: "canClaim",
                                        params: [e]
                                    }, {
                                        address: W,
                                        name: "hasClaimed",
                                        params: [e]
                                    }]);
                                case 2:
                                    n = t.sent,
                                    a = Object(x.a)(n, 4),
                                    r = a[0],
                                    s = a[1],
                                    i = a[2],
                                    o = a[3],
                                    p = Object(x.a)(r, 1),
                                    c = p[0],
                                    d = Object(x.a)(s, 1),
                                    l = d[0],
                                    y = Object(x.a)(i, 1),
                                    m = y[0],
                                    f = Object(x.a)(o, 1),
                                    b = f[0],
                                    l.lt(c) && m && !b && u.current();
                                case 13:
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
                }();
                e && !document.location.href.includes("/nft") && t()
            }
            ), [e, u]),
            Object(a.jsx)("div", {})
        }
          , G = Object(r.lazy)((function() {
            return Promise.all([n.e(1), n.e(3), n.e(8), n.e(2), n.e(13)]).then(n.bind(null, 696))
        }
        ))
          , Z = Object(r.lazy)((function() {
            return Promise.all([n.e(1), n.e(3), n.e(2), n.e(12)]).then(n.bind(null, 695))
        }
        ))
          , $ = Object(r.lazy)((function() {
            return n.e(14).then(n.bind(null, 697))
        }
        ))
          , ee = Object(r.lazy)((function() {
            return n.e(16).then(n.bind(null, 694))
        }
        ))
          , te = Object(r.lazy)((function() {
            return n.e(15).then(n.bind(null, 698))
        }
        ));
        y.a.config({
            EXPONENTIAL_AT: 1e3,
            DECIMAL_PLACES: 80
        });
        var ne = function() {
            var e = Object(c.m)()
              , t = e.account
              , n = e.connect;
            return Object(r.useEffect)((function() {
                !t && window.localStorage.getItem("accountStatus") && n("injected")
            }
            ), [t, n]),
            Object(m.d)(),
            Object(a.jsxs)(o.a, {
                children: [Object(a.jsx)(d.y, {}), Object(a.jsx)(v, {}), Object(a.jsx)(I, {
                    children: Object(a.jsx)(r.Suspense, {
                        fallback: Object(a.jsx)(R, {}),
                        children: Object(a.jsxs)(p.d, {
                            children: [Object(a.jsx)(p.b, {
                                path: "/",
                                exact: !0,
                                children: Object(a.jsx)(G, {})
                            }), Object(a.jsx)(p.b, {
                                path: "/farms",
                                children: Object(a.jsx)(Z, {})
                            }), Object(a.jsx)(p.b, {
                                path: "/pools",
                                children: Object(a.jsx)(Z, {
                                    tokenMode: !0
                                })
                            }), Object(a.jsx)(p.b, {
                                path: "/lottery",
                                children: Object(a.jsx)($, {})
                            }), Object(a.jsx)(p.b, {
                                path: "/nftMarket",
                                children: Object(a.jsx)(te, {})
                            }), Object(a.jsx)(p.b, {
                                component: ee
                            })]
                        })
                    })
                }), Object(a.jsx)(z, {})]
            })
        }
          , ae = u.a.memo(ne)
          , re = n(93)
          , ue = n(56)
          , se = n(125)
          , ie = n(85)
          , oe = u.a.createContext(0)
          , pe = function(e) {
            var t = e.children
              , n = Object(r.useRef)(0)
              , u = Object(r.useState)(0)
              , s = Object(x.a)(u, 2)
              , i = s[0]
              , o = s[1];
            return Object(r.useEffect)((function() {
                var e = Object(ie.b)()
                  , t = setInterval(Object(L.a)(U.a.mark((function t() {
                    var a;
                    return U.a.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                e.eth.getBlockNumber();
                            case 2:
                                (a = t.sent) !== n.current && (n.current = a,
                                o(a));
                            case 4:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                ))), 6e3);
                return function() {
                    return clearInterval(t)
                }
            }
            ), []),
            Object(a.jsx)(oe.Provider, {
                value: i,
                children: t
            })
        }
          , ce = n(126)
          , de = n(91)
          , le = n(105)
          , ye = n(59)
          , me = Object(de.a)({
            devTools: !1,
            reducer: {
                farms: le.a,
                pools: ye.a
            }
        })
          , fe = function(e) {
            var t = e.children
              , n = Object(se.a)()
              , r = parseInt("56");
            return Object(a.jsx)(ue.a, {
                store: me,
                children: Object(a.jsx)(D, {
                    children: Object(a.jsx)(M, {
                        children: Object(a.jsx)(c.b, {
                            chainId: r,
                            connectors: {
                                walletconnect: {
                                    rpcUrl: n
                                },
                                bsc: re
                            },
                            children: Object(a.jsx)(pe, {
                                children: Object(a.jsx)(ce.b, {
                                    children: Object(a.jsx)(d.x, {
                                        children: t
                                    })
                                })
                            })
                        })
                    })
                })
            })
        };
        i.a.render(Object(a.jsx)(u.a.StrictMode, {
            children: Object(a.jsx)(fe, {
                children: Object(a.jsx)(ae, {})
            })
        }), document.getElementById("root"))
    },
    74: function(e) {
        e.exports = JSON.parse('[{"inputs":[{"internalType":"contract ONF","name":"_onf","type":"address"},{"internalType":"address","name":"_devaddr","type":"address"},{"internalType":"address","name":"_feeAddress","type":"address"},{"internalType":"uint256","name":"_dovePerBlock","type":"uint256"},{"internalType":"uint256","name":"_startBlock","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"BONUS_MULTIPLIER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IBEP20","name":"_lpToken","type":"address"},{"internalType":"uint16","name":"_depositFeeBP","type":"uint16"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_devaddr","type":"address"}],"name":"dev","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"devaddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dove","outputs":[{"internalType":"contract DoveToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dovePerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"feeAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingDove","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IBEP20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accDovePerShare","type":"uint256"},{"internalType":"uint16","name":"depositFeeBP","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"uint16","name":"_depositFeeBP","type":"uint16"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_feeAddress","type":"address"}],"name":"setFeeAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_dovePerBlock","type":"uint256"}],"name":"updateEmissionRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
    },
    85: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return o
        }
        )),
        n.d(t, "a", (function() {
            return p
        }
        ));
        var a = n(136)
          , r = n.n(a)
          , u = n(125)
          , s = Object(u.a)()
          , i = new r.a.providers.HttpProvider(s,{
            timeout: 1e4
        })
          , o = function() {
            return new r.a(i)
        }
          , p = function(e, t, n) {
            return new (o().eth.Contract)(e,t,n)
        }
    },
    89: function(e) {
        e.exports = JSON.parse('[{"inputs":[{"internalType":"contract IBEP20","name":"_syrup","type":"address"},{"internalType":"uint256","name":"_rewardPerBlock","type":"uint256"},{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_endBlock","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"bonusEndBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"poolInfo","outputs":[{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accRewardPerShare","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"rewardPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"syrup","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"pendingReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
    },
    90: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return u
        }
        ));
        var a = n(0)
          , r = {
            translations: [],
            setTranslations: function() {}
        }
          , u = Object(a.createContext)(r)
    }
}, [[647, 5, 6]]]);
