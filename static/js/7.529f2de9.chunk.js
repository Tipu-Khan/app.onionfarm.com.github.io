(this["webpackJsonpgoose-frontend"] = this["webpackJsonpgoose-frontend"] || []).push([[7], {
    653: function(e, t, r) {
        "use strict";
        r.r(t),
        function(e, n) {
            var o = r(4)
              , i = r.n(o)
              , a = r(15)
              , s = r(2)
              , c = r(5)
              , u = r(177)
              , f = r(8)
              , d = r(9)
              , l = r(28)
              , h = r.n(l)
              , p = r(66)
              , g = (r(0),
            r(109),
            r(10),
            r(172))
              , v = r.n(g)
              , m = r(664)
              , y = (r(128),
            r(67),
            r(107),
            r(173),
            r(663))
              , b = r(670)
              , w = h.a.EventEmitter
              , k = v.a.inherits
              , _ = E;
            function E() {
                w.call(this),
                this.isLocked = !0
            }
            k(E, w),
            E.prototype.go = function() {
                this.isLocked = !1,
                this.emit("unlock")
            }
            ,
            E.prototype.stop = function() {
                this.isLocked = !0,
                this.emit("lock")
            }
            ,
            E.prototype.await = function(e) {
                this.isLocked ? this.once("unlock", e) : setTimeout(e)
            }
            ;
            var x = function(e) {
                return Object(m.g)({
                    id: (new Date).getTime() * Math.pow(10, 3) + Math.floor(Math.random() * Math.pow(10, 3)),
                    jsonrpc: "2.0",
                    params: []
                }, e)
            }
              , T = h.a.EventEmitter
              , A = v.a.inherits
              , O = P;
            function P(e) {
                T.call(this),
                this.setMaxListeners(30),
                e = e || {};
                var t = {
                    sendAsync: this._handleAsync.bind(this)
                }
                  , r = e.blockTrackerProvider || t;
                this._blockTracker = e.blockTracker || new m.a({
                    provider: r,
                    pollingInterval: e.pollingInterval || 4e3,
                    setSkipCacheFlag: !0
                }),
                this._ready = new _,
                this.currentBlock = null,
                this._providers = []
            }
            A(P, T),
            Object.defineProperty(P, "name", {
                value: "HttpProvider"
            }),
            P.prototype.start = function() {
                var e = this
                  , t = this;
                t._ready.go(),
                t._blockTracker.on("latest", (function(r) {
                    t._getBlockByNumber(r, (function(r, n) {
                        if (r)
                            e.emit("error", r);
                        else if (n) {
                            var o, i = (o = n,
                            {
                                number: m.c.toBuffer(o.number),
                                hash: m.c.toBuffer(o.hash),
                                parentHash: m.c.toBuffer(o.parentHash),
                                nonce: m.c.toBuffer(o.nonce),
                                mixHash: m.c.toBuffer(o.mixHash),
                                sha3Uncles: m.c.toBuffer(o.sha3Uncles),
                                logsBloom: m.c.toBuffer(o.logsBloom),
                                transactionsRoot: m.c.toBuffer(o.transactionsRoot),
                                stateRoot: m.c.toBuffer(o.stateRoot),
                                receiptsRoot: m.c.toBuffer(o.receiptRoot || o.receiptsRoot),
                                miner: m.c.toBuffer(o.miner),
                                difficulty: m.c.toBuffer(o.difficulty),
                                totalDifficulty: m.c.toBuffer(o.totalDifficulty),
                                size: m.c.toBuffer(o.size),
                                extraData: m.c.toBuffer(o.extraData),
                                gasLimit: m.c.toBuffer(o.gasLimit),
                                gasUsed: m.c.toBuffer(o.gasUsed),
                                timestamp: m.c.toBuffer(o.timestamp),
                                transactions: o.transactions
                            });
                            t._setCurrentBlock(i),
                            t.emit("rawBlock", n),
                            t.emit("latest", n)
                        }
                    }
                    ))
                }
                )),
                t._blockTracker.on("sync", t.emit.bind(t, "sync")),
                t._blockTracker.on("error", t.emit.bind(t, "error")),
                t._running = !0,
                t.emit("start")
            }
            ,
            P.prototype.stop = function() {
                this._blockTracker.removeAllListeners(),
                this._running = !1,
                this.emit("stop")
            }
            ,
            P.prototype.isRunning = function() {
                return this._running
            }
            ,
            P.prototype.addProvider = function(e, t) {
                "number" == typeof t ? this._providers.splice(t, 0, e) : this._providers.push(e),
                e.setEngine(this)
            }
            ,
            P.prototype.removeProvider = function(e) {
                var t = this._providers.indexOf(e);
                if (t < 0)
                    throw new Error("Provider not found.");
                this._providers.splice(t, 1)
            }
            ,
            P.prototype.send = function(e) {
                throw new Error("Web3ProviderEngine does not support synchronous requests.")
            }
            ,
            P.prototype.sendAsync = function(e, t) {
                var r = this;
                r._ready.await((function() {
                    Array.isArray(e) ? Object(m.n)(e, r._handleAsync.bind(r), t) : r._handleAsync(e, t)
                }
                ))
            }
            ,
            P.prototype._getBlockByNumber = function(e, t) {
                var r = x({
                    method: "eth_getBlockByNumber",
                    params: [e, !1],
                    skipCache: !0
                });
                this._handleAsync(r, (function(e, r) {
                    return e ? t(e) : t(null, r.result)
                }
                ))
            }
            ,
            P.prototype._handleAsync = function(e, t) {
                var r = this
                  , n = -1
                  , o = null
                  , i = null
                  , a = [];
                function s(r, n) {
                    i = r,
                    o = n,
                    Object(m.d)(a, (function(e, t) {
                        e ? e(i, o, t) : t()
                    }
                    ), (function() {
                        var r = {
                            id: e.id,
                            jsonrpc: e.jsonrpc,
                            result: o
                        };
                        null != i ? (r.error = {
                            message: i.stack || i.message || i,
                            code: -32e3
                        },
                        t(i, r)) : t(null, r)
                    }
                    ))
                }
                !function t(o) {
                    if (n += 1,
                    a.unshift(o),
                    n >= r._providers.length)
                        s(new Error('Request for method "' + e.method + '" not handled by any subprovider. Please check your subprovider configuration to ensure this method is handled.'));
                    else
                        try {
                            r._providers[n].handleRequest(e, t, s)
                        } catch (e) {
                            s(e)
                        }
                }()
            }
            ,
            P.prototype._setCurrentBlock = function(e) {
                this.currentBlock = e,
                this.emit("block", e)
            }
            ;
            var R = C;
            function C() {}
            C.prototype.setEngine = function(e) {
                var t = this;
                t.engine || (t.engine = e,
                e.on("block", (function(e) {
                    t.currentBlock = e
                }
                )),
                e.on("start", (function() {
                    t.start()
                }
                )),
                e.on("stop", (function() {
                    t.stop()
                }
                )))
            }
            ,
            C.prototype.handleRequest = function(e, t, r) {
                throw new Error("Subproviders should override `handleRequest`.")
            }
            ,
            C.prototype.emitPayload = function(e, t) {
                this.engine.sendAsync(x(e), t)
            }
            ,
            C.prototype.stop = function() {}
            ,
            C.prototype.start = function() {}
            ;
            var S = function(e) {
                Object(f.a)(r, e);
                var t = Object(d.a)(r);
                function r(e) {
                    var n;
                    if (Object(s.a)(this, r),
                    n = t.call(this),
                    !e)
                        throw new Error("JsonRpcEngineMiddlewareSubprovider - no constructorFn specified");
                    return n._constructorFn = e,
                    Object(u.a)(n)
                }
                return Object(c.a)(r, [{
                    key: "setEngine",
                    value: function(e) {
                        if (this.middleware)
                            throw new Error("JsonRpcEngineMiddlewareSubprovider - subprovider added to engine twice");
                        var t = e._blockTracker
                          , r = this._constructorFn({
                            engine: e,
                            provider: e,
                            blockTracker: t
                        });
                        if (!r)
                            throw new Error("JsonRpcEngineMiddlewareSubprovider - _constructorFn did not return middleware");
                        if ("function" != typeof r)
                            throw new Error("JsonRpcEngineMiddlewareSubprovider - specified middleware is not a function");
                        this.middleware = r
                    }
                }, {
                    key: "handleRequest",
                    value: function(e, t, r) {
                        var n = {
                            id: e.id
                        };
                        this.middleware(e, n, (function(e) {
                            t((function(t, r, o) {
                                t ? (delete n.result,
                                n.error = {
                                    message: t.message || t
                                }) : n.result = r,
                                e ? e(o) : o()
                            }
                            ))
                        }
                        ), (function(e) {
                            if (e)
                                return r(e);
                            r(null, n.result)
                        }
                        ))
                    }
                }]),
                r
            }(R)
              , L = {
                cacheIdentifierForPayload: function(e, t) {
                    var r = t ? B(e) : e.params;
                    return N(e) ? e.method + ":" + Object(y.a)(r) : null
                },
                canCache: N,
                blockTagForPayload: function(e) {
                    var t = j(e);
                    return t >= e.params.length ? null : e.params[t]
                },
                paramsWithoutBlockTag: B,
                blockTagParamIndex: j,
                cacheTypeForPayload: I
            };
            function N(e) {
                return "never" !== I(e)
            }
            function B(e) {
                var t = j(e);
                return t >= e.params.length ? e.params : "eth_getBlockByNumber" === e.method ? e.params.slice(1) : e.params.slice(0, t)
            }
            function j(e) {
                switch (e.method) {
                case "eth_getStorageAt":
                    return 2;
                case "eth_getBalance":
                case "eth_getCode":
                case "eth_getTransactionCount":
                case "eth_call":
                    return 1;
                case "eth_getBlockByNumber":
                    return 0;
                default:
                    return
                }
            }
            function I(e) {
                switch (e.method) {
                case "web3_clientVersion":
                case "web3_sha3":
                case "eth_protocolVersion":
                case "eth_getBlockTransactionCountByHash":
                case "eth_getUncleCountByBlockHash":
                case "eth_getCode":
                case "eth_getBlockByHash":
                case "eth_getTransactionByHash":
                case "eth_getTransactionByBlockHashAndIndex":
                case "eth_getTransactionReceipt":
                case "eth_getUncleByBlockHashAndIndex":
                case "eth_getCompilers":
                case "eth_compileLLL":
                case "eth_compileSolidity":
                case "eth_compileSerpent":
                case "shh_version":
                case "test_permaCache":
                    return "perma";
                case "eth_getBlockByNumber":
                case "eth_getBlockTransactionCountByNumber":
                case "eth_getUncleCountByBlockNumber":
                case "eth_getTransactionByBlockNumberAndIndex":
                case "eth_getUncleByBlockNumberAndIndex":
                case "test_forkCache":
                    return "fork";
                case "eth_gasPrice":
                case "eth_blockNumber":
                case "eth_getBalance":
                case "eth_getStorageAt":
                case "eth_getTransactionCount":
                case "eth_call":
                case "eth_estimateGas":
                case "eth_getFilterLogs":
                case "eth_getLogs":
                case "test_blockCache":
                    return "block";
                case "net_version":
                case "net_peerCount":
                case "net_listening":
                case "eth_syncing":
                case "eth_sign":
                case "eth_coinbase":
                case "eth_mining":
                case "eth_hashrate":
                case "eth_accounts":
                case "eth_sendTransaction":
                case "eth_sendRawTransaction":
                case "eth_newFilter":
                case "eth_newBlockFilter":
                case "eth_newPendingTransactionFilter":
                case "eth_uninstallFilter":
                case "eth_getFilterChanges":
                case "eth_getWork":
                case "eth_submitWork":
                case "eth_submitHashrate":
                case "db_putString":
                case "db_getString":
                case "db_putHex":
                case "db_getHex":
                case "shh_post":
                case "shh_newIdentity":
                case "shh_hasIdentity":
                case "shh_newGroup":
                case "shh_addToGroup":
                case "shh_newFilter":
                case "shh_uninstallFilter":
                case "shh_getFilterChanges":
                case "shh_getMessages":
                case "test_neverCache":
                    return "never"
                }
            }
            var D = [void 0, null, "<nil>"]
              , M = function() {
                function e() {
                    Object(s.a)(this, e),
                    this.cache = {}
                }
                return Object(c.a)(e, [{
                    key: "getBlockCacheForPayload",
                    value: function(e, t) {
                        var r = Number.parseInt(t, 16)
                          , n = this.cache[r];
                        if (!n) {
                            var o = {};
                            this.cache[r] = o,
                            n = o
                        }
                        return n
                    }
                }, {
                    key: "get",
                    value: function() {
                        var e = Object(a.a)(i.a.mark((function e(t, r) {
                            var n;
                            return i.a.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        if (!(n = this.getBlockCacheForPayload(t, r))) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return", n[L.cacheIdentifierForPayload(t, !0)]);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e, this)
                        }
                        )));
                        return function(t, r) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "set",
                    value: function() {
                        var e = Object(a.a)(i.a.mark((function e(t, r, n) {
                            return i.a.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        this.canCacheResult(t, n) && (this.getBlockCacheForPayload(t, r)[L.cacheIdentifierForPayload(t, !0)] = n);
                                    case 1:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e, this)
                        }
                        )));
                        return function(t, r, n) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "canCacheRequest",
                    value: function(e) {
                        return !!L.canCache(e) && "pending" !== L.blockTagForPayload(e)
                    }
                }, {
                    key: "canCacheResult",
                    value: function(e, t) {
                        if (!D.includes(t))
                            return !!(!["eth_getTransactionByHash", "eth_getTransactionReceipt"].includes(e.method) || t && t.blockHash && "0x0000000000000000000000000000000000000000000000000000000000000000" !== t.blockHash)
                    }
                }, {
                    key: "clearBefore",
                    value: function(e) {
                        var t = this
                          , r = Number.parseInt(e, 16);
                        Object.keys(t.cache).map(Number).filter((function(e) {
                            return e < r
                        }
                        )).forEach((function(e) {
                            return delete t.cache[e]
                        }
                        ))
                    }
                }]),
                e
            }()
              , U = function(e) {
                Object(f.a)(r, e);
                var t = Object(d.a)(r);
                function r(e) {
                    return Object(s.a)(this, r),
                    t.call(this, (function(t) {
                        var r = t.blockTracker;
                        return function() {
                            var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).blockTracker;
                            if (!e)
                                throw new Error("createBlockCacheMiddleware - No BlockTracker specified");
                            var t = new M
                              , r = {
                                perma: t,
                                block: t,
                                fork: t
                            };
                            return Object(m.l)(function() {
                                var n = Object(a.a)(i.a.mark((function n(o, a, s) {
                                    var c, u, f, d, l, h;
                                    return i.a.wrap((function(n) {
                                        for (; ; )
                                            switch (n.prev = n.next) {
                                            case 0:
                                                if (!o.skipCache) {
                                                    n.next = 2;
                                                    break
                                                }
                                                return n.abrupt("return", s());
                                            case 2:
                                                if (c = L.cacheTypeForPayload(o),
                                                u = r[c]) {
                                                    n.next = 5;
                                                    break
                                                }
                                                return n.abrupt("return", s());
                                            case 5:
                                                if (u.canCacheRequest(o)) {
                                                    n.next = 7;
                                                    break
                                                }
                                                return n.abrupt("return", s());
                                            case 7:
                                                if ((d = L.blockTagForPayload(o)) || (d = "latest"),
                                                "earliest" !== d) {
                                                    n.next = 12;
                                                    break
                                                }
                                                f = "0x00",
                                                n.next = 20;
                                                break;
                                            case 12:
                                                if ("latest" !== d) {
                                                    n.next = 19;
                                                    break
                                                }
                                                return n.next = 15,
                                                e.getLatestBlock();
                                            case 15:
                                                l = n.sent,
                                                t.clearBefore(l),
                                                f = l,
                                                n.next = 20;
                                                break;
                                            case 19:
                                                f = d;
                                            case 20:
                                                return n.next = 22,
                                                u.get(o, f);
                                            case 22:
                                                if (void 0 !== (h = n.sent)) {
                                                    n.next = 30;
                                                    break
                                                }
                                                return n.next = 26,
                                                s();
                                            case 26:
                                                return n.next = 28,
                                                u.set(o, f, a.result);
                                            case 28:
                                                n.next = 31;
                                                break;
                                            case 30:
                                                a.result = h;
                                            case 31:
                                            case "end":
                                                return n.stop()
                                            }
                                    }
                                    ), n)
                                }
                                )));
                                return function(e, t, r) {
                                    return n.apply(this, arguments)
                                }
                            }())
                        }(Object.assign({
                            blockTracker: r
                        }, e))
                    }
                    ))
                }
                return r
            }(S)
              , G = v.a.inherits
              , F = K;
            function K(e) {
                e = e || {},
                this.staticResponses = e
            }
            G(K, R),
            K.prototype.handleRequest = function(e, t, r) {
                var n = this.staticResponses[e.method];
                "function" == typeof n ? n(e, t, r) : void 0 !== n ? setTimeout((function() {
                    return r(null, n)
                }
                )) : t()
            }
            ;
            var q = function(e) {
                Object(f.a)(r, e);
                var t = Object(d.a)(r);
                function r() {
                    return Object(s.a)(this, r),
                    t.call(this, (function(e) {
                        var t = e.blockTracker
                          , r = e.provider;
                        e.engine;
                        return Object(m.f)({
                            blockTracker: t,
                            provider: r
                        })
                    }
                    ))
                }
                return r
            }(S)
              , H = v.a.inherits
              , V = /^[0-9A-Fa-f]+$/g
              , z = W;
            function W(e) {
                this.nonceLock = Object(m.b)(1),
                e.getAccounts && (this.getAccounts = e.getAccounts),
                e.processTransaction && (this.processTransaction = e.processTransaction),
                e.processMessage && (this.processMessage = e.processMessage),
                e.processPersonalMessage && (this.processPersonalMessage = e.processPersonalMessage),
                e.processTypedMessage && (this.processTypedMessage = e.processTypedMessage),
                e.processTypedMessageV3 && (this.processTypedMessageV3 = e.processTypedMessageV3),
                this.approveTransaction = e.approveTransaction || this.autoApprove,
                this.approveMessage = e.approveMessage || this.autoApprove,
                this.approvePersonalMessage = e.approvePersonalMessage || this.autoApprove,
                this.approveTypedMessage = e.approveTypedMessage || this.autoApprove,
                this.approveTypedMessageV3 = e.approveTypedMessageV3 || this.autoApprove,
                e.signTransaction && (this.signTransaction = e.signTransaction || $("signTransaction")),
                e.signMessage && (this.signMessage = e.signMessage || $("signMessage")),
                e.signPersonalMessage && (this.signPersonalMessage = e.signPersonalMessage || $("signPersonalMessage")),
                e.signTypedMessage && (this.signTypedMessage = e.signTypedMessage || $("signTypedMessage")),
                e.signTypedMessageV3 && (this.signTypedMessageV3 = e.signTypedMessageV3 || $("signTypedMessageV3")),
                e.recoverPersonalSignature && (this.recoverPersonalSignature = e.recoverPersonalSignature),
                e.publishTransaction && (this.publishTransaction = e.publishTransaction),
                this.estimateGas = e.estimateGas || this.estimateGas,
                this.getGasPrice = e.getGasPrice || this.getGasPrice
            }
            function J(e) {
                return e.toLowerCase()
            }
            function Z(e) {
                var t = m.c.addHexPrefix(e);
                return m.c.isValidAddress(t)
            }
            function Y(e) {
                var t = m.c.addHexPrefix(e);
                return !m.c.isValidAddress(t) && X(e)
            }
            function X(e) {
                return "string" == typeof e && "0x" === e.slice(0, 2) && e.slice(2).match(V)
            }
            function $(e) {
                return function(t, r) {
                    r(new Error('ProviderEngine - HookedWalletSubprovider - Must provide "' + e + '" fn in constructor options'))
                }
            }
            H(W, R),
            W.prototype.handleRequest = function(e, t, r) {
                var n, o, i, a, s, c = this;
                switch (c._parityRequests = {},
                c._parityRequestCount = 0,
                e.method) {
                case "eth_coinbase":
                    return void c.getAccounts((function(e, t) {
                        if (e)
                            return r(e);
                        var n = t[0] || null;
                        r(null, n)
                    }
                    ));
                case "eth_accounts":
                    return void c.getAccounts((function(e, t) {
                        if (e)
                            return r(e);
                        r(null, t)
                    }
                    ));
                case "eth_sendTransaction":
                    return n = e.params[0],
                    void Object(m.u)([function(e) {
                        return c.validateTransaction(n, e)
                    }
                    , function(e) {
                        return c.processTransaction(n, e)
                    }
                    ], r);
                case "eth_signTransaction":
                    return n = e.params[0],
                    void Object(m.u)([function(e) {
                        return c.validateTransaction(n, e)
                    }
                    , function(e) {
                        return c.processSignTransaction(n, e)
                    }
                    ], r);
                case "eth_sign":
                    return Y(e.params[1]) && Z(e.params[0]) ? (s = e.params[0],
                    a = e.params[1]) : (a = e.params[0],
                    s = e.params[1]),
                    i = e.params[2] || {},
                    o = Object(m.g)(i, {
                        from: s,
                        data: a
                    }),
                    void Object(m.u)([function(e) {
                        return c.validateMessage(o, e)
                    }
                    , function(e) {
                        return c.processMessage(o, e)
                    }
                    ], r);
                case "personal_sign":
                    return function() {
                        var t = e.params[0];
                        if (Y(e.params[1]) && Z(t)) {
                            "[message, address]. This was previously handled incorrectly, ",
                            "and has been corrected automatically. ",
                            "Please switch this param order for smooth behavior in the future.",
                            console.warn("The eth_personalSign method requires params ordered [message, address]. This was previously handled incorrectly, and has been corrected automatically. Please switch this param order for smooth behavior in the future."),
                            s = e.params[0],
                            a = e.params[1]
                        } else
                            a = e.params[0],
                            s = e.params[1];
                        i = e.params[2] || {},
                        o = Object(m.g)(i, {
                            from: s,
                            data: a
                        }),
                        Object(m.u)([function(e) {
                            return c.validatePersonalMessage(o, e)
                        }
                        , function(e) {
                            return c.processPersonalMessage(o, e)
                        }
                        ], r)
                    }();
                case "personal_ecRecover":
                    return function() {
                        a = e.params[0];
                        var t = e.params[1];
                        i = e.params[2] || {},
                        o = Object(m.g)(i, {
                            sig: t,
                            data: a
                        }),
                        c.recoverPersonalSignature(o, r)
                    }();
                case "eth_signTypedData":
                    return !Z(e.params[1]) && Z(e.params[0]) ? (s = e.params[0],
                    a = e.params[1]) : (a = e.params[0],
                    s = e.params[1]),
                    i = e.params[2] || {},
                    o = Object(m.g)(i, {
                        from: s,
                        data: a
                    }),
                    void Object(m.u)([function(e) {
                        return c.validateTypedMessage(o, e)
                    }
                    , function(e) {
                        return c.processTypedMessage(o, e)
                    }
                    ], r);
                case "eth_signTypedData_v3":
                    return !Z(e.params[1]) && Z(e.params[0]) ? (s = e.params[0],
                    a = e.params[1]) : (a = e.params[0],
                    s = e.params[1]),
                    i = e.params[2] || {},
                    o = Object(m.g)(i, {
                        from: s,
                        data: a
                    }),
                    void Object(m.u)([function(e) {
                        return c.validateTypedMessageV3(o, e)
                    }
                    , function(e) {
                        return c.processTypedMessageV3(o, e)
                    }
                    ], r);
                case "parity_postTransaction":
                    return n = e.params[0],
                    void c.parityPostTransaction(n, r);
                case "parity_postSign":
                    return s = e.params[0],
                    a = e.params[1],
                    void c.parityPostSign(s, a, r);
                case "parity_checkRequest":
                    return function() {
                        var t = e.params[0];
                        c.parityCheckRequest(t, r)
                    }();
                case "parity_defaultAccount":
                    return void c.getAccounts((function(e, t) {
                        if (e)
                            return r(e);
                        var n = t[0] || null;
                        r(null, n)
                    }
                    ));
                default:
                    return void t()
                }
            }
            ,
            W.prototype.getAccounts = function(e) {
                e(null, [])
            }
            ,
            W.prototype.processTransaction = function(e, t) {
                var r = this;
                Object(m.u)([function(t) {
                    return r.approveTransaction(e, t)
                }
                , function(e, t) {
                    return r.checkApproval("transaction", e, t)
                }
                , function(t) {
                    return r.finalizeAndSubmitTx(e, t)
                }
                ], t)
            }
            ,
            W.prototype.processSignTransaction = function(e, t) {
                var r = this;
                Object(m.u)([function(t) {
                    return r.approveTransaction(e, t)
                }
                , function(e, t) {
                    return r.checkApproval("transaction", e, t)
                }
                , function(t) {
                    return r.finalizeTx(e, t)
                }
                ], t)
            }
            ,
            W.prototype.processMessage = function(e, t) {
                var r = this;
                Object(m.u)([function(t) {
                    return r.approveMessage(e, t)
                }
                , function(e, t) {
                    return r.checkApproval("message", e, t)
                }
                , function(t) {
                    return r.signMessage(e, t)
                }
                ], t)
            }
            ,
            W.prototype.processPersonalMessage = function(e, t) {
                var r = this;
                Object(m.u)([function(t) {
                    return r.approvePersonalMessage(e, t)
                }
                , function(e, t) {
                    return r.checkApproval("message", e, t)
                }
                , function(t) {
                    return r.signPersonalMessage(e, t)
                }
                ], t)
            }
            ,
            W.prototype.processTypedMessage = function(e, t) {
                var r = this;
                Object(m.u)([function(t) {
                    return r.approveTypedMessage(e, t)
                }
                , function(e, t) {
                    return r.checkApproval("message", e, t)
                }
                , function(t) {
                    return r.signTypedMessage(e, t)
                }
                ], t)
            }
            ,
            W.prototype.processTypedMessageV3 = function(e, t) {
                var r = this;
                Object(m.u)([function(t) {
                    return r.approveTypedMessageV3(e, t)
                }
                , function(e, t) {
                    return r.checkApproval("message", e, t)
                }
                , function(t) {
                    return r.signTypedMessageV3(e, t)
                }
                ], t)
            }
            ,
            W.prototype.autoApprove = function(e, t) {
                t(null, !0)
            }
            ,
            W.prototype.checkApproval = function(e, t, r) {
                r(t ? null : new Error("User denied " + e + " signature."))
            }
            ,
            W.prototype.parityPostTransaction = function(e, t) {
                var r = this
                  , n = "0x".concat(r._parityRequestCount.toString(16));
                r._parityRequestCount++,
                r.emitPayload({
                    method: "eth_sendTransaction",
                    params: [e]
                }, (function(e, t) {
                    if (e)
                        r._parityRequests[n] = {
                            error: e
                        };
                    else {
                        var o = t.result;
                        r._parityRequests[n] = o
                    }
                }
                )),
                t(null, n)
            }
            ,
            W.prototype.parityPostSign = function(e, t, r) {
                var n = this
                  , o = "0x".concat(n._parityRequestCount.toString(16));
                n._parityRequestCount++,
                n.emitPayload({
                    method: "eth_sign",
                    params: [e, t]
                }, (function(e, t) {
                    if (e)
                        n._parityRequests[o] = {
                            error: e
                        };
                    else {
                        var r = t.result;
                        n._parityRequests[o] = r
                    }
                }
                )),
                r(null, o)
            }
            ,
            W.prototype.parityCheckRequest = function(e, t) {
                var r = this._parityRequests[e] || null;
                return r ? r.error ? t(r.error) : void t(null, r) : t(null, null)
            }
            ,
            W.prototype.recoverPersonalSignature = function(e, t) {
                var r;
                try {
                    r = m.s.recoverPersonalSignature(e)
                } catch (e) {
                    return t(e)
                }
                t(null, r)
            }
            ,
            W.prototype.validateTransaction = function(e, t) {
                if (void 0 === e.from)
                    return t(new Error("Undefined address - from address required to sign transaction."));
                this.validateSender(e.from, (function(r, n) {
                    return r ? t(r) : n ? void t() : t(new Error('Unknown address - unable to sign transaction for this address: "'.concat(e.from, '"')))
                }
                ))
            }
            ,
            W.prototype.validateMessage = function(e, t) {
                if (void 0 === e.from)
                    return t(new Error("Undefined address - from address required to sign message."));
                this.validateSender(e.from, (function(r, n) {
                    return r ? t(r) : n ? void t() : t(new Error('Unknown address - unable to sign message for this address: "'.concat(e.from, '"')))
                }
                ))
            }
            ,
            W.prototype.validatePersonalMessage = function(e, t) {
                return void 0 === e.from ? t(new Error("Undefined address - from address required to sign personal message.")) : void 0 === e.data ? t(new Error("Undefined message - message required to sign personal message.")) : X(e.data) ? void this.validateSender(e.from, (function(r, n) {
                    return r ? t(r) : n ? void t() : t(new Error('Unknown address - unable to sign message for this address: "'.concat(e.from, '"')))
                }
                )) : t(new Error("HookedWalletSubprovider - validateMessage - message was not encoded as hex."))
            }
            ,
            W.prototype.validateTypedMessage = function(e, t) {
                return void 0 === e.from ? t(new Error("Undefined address - from address required to sign typed data.")) : void 0 === e.data ? t(new Error("Undefined data - message required to sign typed data.")) : void this.validateSender(e.from, (function(r, n) {
                    return r ? t(r) : n ? void t() : t(new Error('Unknown address - unable to sign message for this address: "'.concat(e.from, '"')))
                }
                ))
            }
            ,
            W.prototype.validateTypedMessageV3 = function(e, t) {
                return void 0 === e.from ? t(new Error("Undefined address - from address required to sign typed data.")) : void 0 === e.data ? t(new Error("Undefined data - message required to sign typed data.")) : void this.validateSender(e.from, (function(r, n) {
                    return r ? t(r) : n ? void t() : t(new Error('Unknown address - unable to sign message for this address: "'.concat(e.from, '"')))
                }
                ))
            }
            ,
            W.prototype.validateSender = function(e, t) {
                if (!e)
                    return t(null, !1);
                this.getAccounts((function(r, n) {
                    if (r)
                        return t(r);
                    var o = -1 !== n.map(J).indexOf(e.toLowerCase());
                    t(null, o)
                }
                ))
            }
            ,
            W.prototype.finalizeAndSubmitTx = function(e, t) {
                var r = this;
                r.nonceLock.take((function() {
                    Object(m.u)([r.fillInTxExtras.bind(r, e), r.signTransaction.bind(r), r.publishTransaction.bind(r)], (function(e, n) {
                        if (r.nonceLock.leave(),
                        e)
                            return t(e);
                        t(null, n)
                    }
                    ))
                }
                ))
            }
            ,
            W.prototype.finalizeTx = function(e, t) {
                var r = this;
                r.nonceLock.take((function() {
                    Object(m.u)([r.fillInTxExtras.bind(r, e), r.signTransaction.bind(r)], (function(n, o) {
                        if (r.nonceLock.leave(),
                        n)
                            return t(n);
                        t(null, {
                            raw: o,
                            tx: e
                        })
                    }
                    ))
                }
                ))
            }
            ,
            W.prototype.publishTransaction = function(e, t) {
                this.emitPayload({
                    method: "eth_sendRawTransaction",
                    params: [e]
                }, (function(e, r) {
                    if (e)
                        return t(e);
                    t(null, r.result)
                }
                ))
            }
            ,
            W.prototype.estimateGas = function(e, t) {
                !function(e, t, r) {
                    e.sendAsync(x({
                        method: "eth_estimateGas",
                        params: [t]
                    }), (function(e, t) {
                        if (e)
                            return "no contract code at given address" === e.message ? r(null, "0xcf08") : r(e);
                        r(null, t.result)
                    }
                    ))
                }(this.engine, e, t)
            }
            ,
            W.prototype.getGasPrice = function(e) {
                this.emitPayload({
                    method: "eth_gasPrice",
                    params: []
                }, (function(t, r) {
                    if (t)
                        return e(t);
                    e(null, r.result)
                }
                ))
            }
            ,
            W.prototype.fillInTxExtras = function(e, t) {
                var r = this
                  , n = e.from
                  , o = {};
                void 0 === e.gasPrice && (o.gasPrice = r.getGasPrice.bind(r)),
                void 0 === e.nonce && (o.nonce = r.emitPayload.bind(r, {
                    method: "eth_getTransactionCount",
                    params: [n, "pending"]
                })),
                void 0 === e.gas && (o.gas = r.estimateGas.bind(r, function(e) {
                    return {
                        from: e.from,
                        to: e.to,
                        value: e.value,
                        data: e.data,
                        gas: e.gas,
                        gasPrice: e.gasPrice,
                        nonce: e.nonce
                    }
                }(e))),
                Object(m.q)(o, (function(r, n) {
                    if (r)
                        return t(r);
                    var o = {};
                    n.gasPrice && (o.gasPrice = n.gasPrice),
                    n.nonce && (o.nonce = n.nonce.result),
                    n.gas && (o.gas = n.gas),
                    t(null, Object(m.g)(e, o))
                }
                ))
            }
            ;
            var Q = v.a.inherits
              , ee = function(e) {
                var t = function(e) {
                    switch (e.method) {
                    case "eth_getStorageAt":
                        return 2;
                    case "eth_getBalance":
                    case "eth_getCode":
                    case "eth_getTransactionCount":
                    case "eth_call":
                    case "eth_estimateGas":
                        return 1;
                    case "eth_getBlockByNumber":
                        return 0;
                    default:
                        return
                    }
                }(e);
                return t >= e.params.length ? null : e.params[t]
            }
              , te = re;
            function re(e) {
                this.nonceCache = {}
            }
            Q(re, R),
            re.prototype.handleRequest = function(t, r, n) {
                var o = this;
                switch (t.method) {
                case "eth_getTransactionCount":
                    var i = ee(t)
                      , a = t.params[0].toLowerCase()
                      , s = o.nonceCache[a];
                    return void ("pending" === i ? s ? n(null, s) : r((function(e, t, r) {
                        if (e)
                            return r();
                        void 0 === o.nonceCache[a] && (o.nonceCache[a] = t),
                        r()
                    }
                    )) : r());
                case "eth_sendRawTransaction":
                    return void r((function(r, n, i) {
                        if (r)
                            return i();
                        var a = t.params[0]
                          , s = (m.c.stripHexPrefix(a),
                        e.from(m.c.stripHexPrefix(a), "hex"),
                        new b.a(e.from(m.c.stripHexPrefix(a), "hex")))
                          , c = "0x" + s.getSenderAddress().toString("hex").toLowerCase()
                          , u = m.c.bufferToInt(s.nonce)
                          , f = (++u).toString(16);
                        f.length % 2 && (f = "0" + f),
                        f = "0x" + f,
                        o.nonceCache[c] = f,
                        i()
                    }
                    ));
                case "evm_revert":
                    return o.nonceCache = {},
                    void r();
                default:
                    return void r()
                }
            }
            ;
            var ne = function(e) {
                Object(f.a)(r, e);
                var t = Object(d.a)(r);
                function r() {
                    return Object(s.a)(this, r),
                    t.call(this, (function(e) {
                        var t = e.blockTracker
                          , r = e.provider
                          , n = e.engine
                          , o = Object(m.e)({
                            blockTracker: t,
                            provider: r
                        })
                          , i = o.events
                          , a = o.middleware;
                        return i.on("notification", (function(e) {
                            return n.emit("data", null, e)
                        }
                        )),
                        a
                    }
                    ))
                }
                return r
            }(S)
              , oe = Object(p.g)((function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.default = t.ERR_NOT_IN_IFRAME = t.ERR_CONNECTION_TIMEOUT = t.ERR_CONNECTION_DESTROYED = void 0;
                var r = "message";
                t.ERR_CONNECTION_DESTROYED = "ConnectionDestroyed",
                t.ERR_CONNECTION_TIMEOUT = "ConnectionTimeout",
                t.ERR_NOT_IN_IFRAME = "NotInIframe";
                var n, o = {
                    "http:": "80",
                    "https:": "443"
                }, i = /^(https?:)?\/\/([^/:]+)(:(\d+))?/, a = {
                    ERR_CONNECTION_DESTROYED: "ConnectionDestroyed",
                    ERR_CONNECTION_TIMEOUT: "ConnectionTimeout",
                    ERR_NOT_IN_IFRAME: "NotInIframe",
                    Promise: function() {
                        try {
                            return window ? window.Promise : null
                        } catch (e) {
                            return null
                        }
                    }(),
                    debug: !1
                }, s = (n = 0,
                function() {
                    return ++n
                }
                ), c = function() {
                    if (a.debug) {
                        for (var e, t = arguments.length, r = new Array(t), n = 0; n < t; n++)
                            r[n] = arguments[n];
                        (e = console).log.apply(e, ["[Penpal]"].concat(r))
                    }
                }, u = function(e) {
                    var t = [];
                    return e((function() {
                        t.forEach((function(e) {
                            e()
                        }
                        ))
                    }
                    )),
                    {
                        then: function(e) {
                            t.push(e)
                        }
                    }
                }, f = function(e) {
                    return {
                        name: e.name,
                        message: e.message,
                        stack: e.stack
                    }
                }, d = function(e) {
                    var t = new Error;
                    return Object.keys(e).forEach((function(r) {
                        return t[r] = e[r]
                    }
                    )),
                    t
                }, l = function(e, t, n, o) {
                    var i = t.localName
                      , u = t.local
                      , f = t.remote
                      , l = t.remoteOrigin
                      , h = !1;
                    c("".concat(i, ": Connecting call sender")),
                    o.then((function() {
                        h = !0
                    }
                    )),
                    n.reduce((function(e, t) {
                        return e[t] = function(e) {
                            return function() {
                                for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
                                    n[o] = arguments[o];
                                if (c("".concat(i, ": Sending ").concat(e, "() call")),
                                h) {
                                    var p = new Error("Unable to send ".concat(e, "() call due ") + "to destroyed connection");
                                    throw p.code = "ConnectionDestroyed",
                                    p
                                }
                                return new a.Promise((function(t, o) {
                                    var a = s();
                                    u.addEventListener(r, (function n(s) {
                                        if (s.source === f && s.origin === l && "reply" === s.data.penpal && s.data.id === a) {
                                            c("".concat(i, ": Received ").concat(e, "() reply")),
                                            u.removeEventListener(r, n);
                                            var h = s.data.returnValue;
                                            s.data.returnValueIsError && (h = d(h)),
                                            ("fulfilled" === s.data.resolution ? t : o)(h)
                                        }
                                    }
                                    )),
                                    f.postMessage({
                                        penpal: "call",
                                        id: a,
                                        methodName: e,
                                        args: n
                                    }, l)
                                }
                                ))
                            }
                        }(t),
                        e
                    }
                    ), e)
                }, h = function(e, t, n) {
                    var o = e.localName
                      , i = e.local
                      , s = e.remote
                      , u = e.remoteOrigin
                      , d = !1;
                    c("".concat(o, ": Connecting call receiver"));
                    var l = function(e) {
                        if (e.source === s && e.origin === u && "call" === e.data.penpal) {
                            var r = e.data
                              , n = r.methodName
                              , i = r.args
                              , l = r.id;
                            if (c("".concat(o, ": Received ").concat(n, "() call")),
                            n in t) {
                                var h = function(e) {
                                    return function(t) {
                                        if (c("".concat(o, ": Sending ").concat(n, "() reply")),
                                        d)
                                            c("".concat(o, ": Unable to send ").concat(n, "() reply due to destroyed connection"));
                                        else {
                                            var r = {
                                                penpal: "reply",
                                                id: l,
                                                resolution: e,
                                                returnValue: t
                                            };
                                            "rejected" === e && t instanceof Error && (r.returnValue = f(t),
                                            r.returnValueIsError = !0);
                                            try {
                                                s.postMessage(r, u)
                                            } catch (e) {
                                                throw "DataCloneError" === e.name && s.postMessage({
                                                    penpal: "reply",
                                                    id: l,
                                                    resolution: "rejected",
                                                    returnValue: f(e),
                                                    returnValueIsError: !0
                                                }, u),
                                                e
                                            }
                                        }
                                    }
                                };
                                new a.Promise((function(e) {
                                    return e(t[n].apply(t, i))
                                }
                                )).then(h("fulfilled"), h("rejected"))
                            }
                        }
                    };
                    i.addEventListener(r, l),
                    n.then((function() {
                        d = !0,
                        i.removeEventListener(r, l)
                    }
                    ))
                };
                a.connectToChild = function(e) {
                    var t, n = e.url, s = e.appendTo, f = e.methods, d = void 0 === f ? {} : f, p = e.timeout, g = new u((function(e) {
                        t = e
                    }
                    )), v = window, m = document.createElement("iframe");
                    (s || document.body).appendChild(m),
                    g.then((function() {
                        m.parentNode && m.parentNode.removeChild(m)
                    }
                    ));
                    var y = m.contentWindow || m.contentDocument.parentWindow
                      , b = function(e) {
                        var t, r, n, a = document.location, s = i.exec(e);
                        s ? (t = s[1] ? s[1] : a.protocol,
                        r = s[2],
                        n = s[4]) : (t = a.protocol,
                        r = a.hostname,
                        n = a.port);
                        var c = n && n !== o[t] ? ":".concat(n) : "";
                        return "".concat(t, "//").concat(r).concat(c)
                    }(n);
                    return {
                        promise: new a.Promise((function(e, o) {
                            var i;
                            void 0 !== p && (i = setTimeout((function() {
                                var e = new Error("Connection to child timed out after ".concat(p, "ms"));
                                e.code = "ConnectionTimeout",
                                o(e),
                                t()
                            }
                            ), p));
                            var a, s, f = {}, w = function(t) {
                                if (t.source === y && t.origin === b && "handshake" === t.data.penpal) {
                                    c("Parent: Received handshake, sending reply"),
                                    t.source.postMessage({
                                        penpal: "handshake-reply",
                                        methodNames: Object.keys(d)
                                    }, t.origin);
                                    var r = {
                                        localName: "Parent",
                                        local: v,
                                        remote: y,
                                        remoteOrigin: t.origin
                                    };
                                    s && s();
                                    var n = new u((function(e) {
                                        g.then(e),
                                        s = e
                                    }
                                    ));
                                    h(r, d, n),
                                    a && a.forEach((function(e) {
                                        delete f[e]
                                    }
                                    )),
                                    a = t.data.methodNames,
                                    l(f, r, a, g),
                                    clearTimeout(i),
                                    e(f)
                                }
                            };
                            v.addEventListener(r, w),
                            g.then((function() {
                                v.removeEventListener(r, w);
                                var e = new Error("Connection destroyed");
                                e.code = "ConnectionDestroyed",
                                o(e)
                            }
                            )),
                            c("Parent: Loading iframe"),
                            m.src = n
                        }
                        )),
                        iframe: m,
                        destroy: t
                    }
                }
                ,
                a.connectToParent = function() {
                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.parentOrigin, o = void 0 === n ? "*" : n, i = t.methods, s = void 0 === i ? {} : i, f = t.timeout;
                    if (window === window.top) {
                        var d = new Error("connectToParent() must be called within an iframe");
                        throw d.code = "NotInIframe",
                        d
                    }
                    var p = new u((function(t) {
                        e = t
                    }
                    ))
                      , g = window
                      , v = g.parent
                      , m = new a.Promise((function(t, n) {
                        var i;
                        void 0 !== f && (i = setTimeout((function() {
                            var t = new Error("Connection to parent timed out after ".concat(f, "ms"));
                            t.code = "ConnectionTimeout",
                            n(t),
                            e()
                        }
                        ), f));
                        var a = function e(n) {
                            if (("*" === o || o === n.origin) && n.source === v && "handshake-reply" === n.data.penpal) {
                                c("Child: Received handshake reply"),
                                g.removeEventListener(r, e);
                                var a = {
                                    localName: "Child",
                                    local: g,
                                    remote: v,
                                    remoteOrigin: n.origin
                                }
                                  , u = {};
                                h(a, s, p),
                                l(u, a, n.data.methodNames, p),
                                clearTimeout(i),
                                t(u)
                            }
                        };
                        g.addEventListener(r, a),
                        p.then((function() {
                            g.removeEventListener(r, a);
                            var e = new Error("Connection destroyed");
                            e.code = "ConnectionDestroyed",
                            n(e)
                        }
                        )),
                        c("Child: Sending handshake"),
                        v.postMessage({
                            penpal: "handshake",
                            methodNames: Object.keys(s)
                        }, o)
                    }
                    ));
                    return {
                        promise: m,
                        destroy: e
                    }
                }
                ;
                var p = a;
                t.default = p
            }
            ))
              , ie = Object(p.h)(oe);
            function ae(e, t) {
                var r = "string" == typeof e ? Object.assign({}, se[e]) : e;
                if ("object" != typeof r)
                    throw new Error("[Portis] illegal 'network' parameter. Read more about it here: https://docs.portis.io/#/configuration?id=network");
                if (!r.nodeUrl)
                    throw new Error("[Portis] 'nodeUrl' is required. Read more about it here: https://docs.portis.io/#/configuration?id=network");
                if (t && !r.gasRelayHubAddress)
                    throw new Error("[Portis] can't find default gas relay hub for " + e);
                return "string" != typeof e || t || delete r.gasRelayHubAddress,
                r
            }
            oe.ERR_NOT_IN_IFRAME,
            oe.ERR_CONNECTION_TIMEOUT,
            oe.ERR_CONNECTION_DESTROYED;
            var se = {
                mainnet: {
                    nodeUrl: "https://mainnet.infura.io/v3/faa4639b090f46499f29d894da0551a0",
                    chainId: "1",
                    gasRelayHubAddress: "0xD216153c06E857cD7f72665E0aF1d7D82172F494"
                },
                ropsten: {
                    nodeUrl: "https://ropsten.infura.io/v3/faa4639b090f46499f29d894da0551a0",
                    chainId: "3",
                    gasRelayHubAddress: "0xD216153c06E857cD7f72665E0aF1d7D82172F494"
                },
                rinkeby: {
                    nodeUrl: "https://rinkeby.infura.io/v3/faa4639b090f46499f29d894da0551a0",
                    chainId: "4",
                    gasRelayHubAddress: "0xD216153c06E857cD7f72665E0aF1d7D82172F494"
                },
                goerli: {
                    nodeUrl: "https://goerli.prylabs.net",
                    chainId: "5"
                },
                ubiq: {
                    nodeUrl: "https://rpc1.ubiqscan.io",
                    chainId: "8"
                },
                thundercoreTestnet: {
                    nodeUrl: "https://testnet-rpc.thundercore.com:8544",
                    chainId: "18"
                },
                orchid: {
                    nodeUrl: "https://public-node.rsk.co",
                    chainId: "30"
                },
                orchidTestnet: {
                    nodeUrl: "https://public-node.testnet.rsk.co",
                    chainId: "31"
                },
                kovan: {
                    nodeUrl: "https://kovan.infura.io/v3/faa4639b090f46499f29d894da0551a0",
                    chainId: "42",
                    gasRelayHubAddress: "0xD216153c06E857cD7f72665E0aF1d7D82172F494"
                },
                classic: {
                    nodeUrl: "https://ethereumclassic.network",
                    chainId: "61"
                },
                sokol: {
                    nodeUrl: "https://sokol.poa.network",
                    chainId: "77"
                },
                core: {
                    nodeUrl: "https://core.poa.network",
                    chainId: "99"
                },
                xdai: {
                    nodeUrl: "https://dai.poa.network",
                    chainId: "100",
                    gasRelayHubAddress: "0xD216153c06E857cD7f72665E0aF1d7D82172F494"
                },
                thundercore: {
                    nodeUrl: "https://mainnet-rpc.thundercore.com",
                    chainId: "108"
                },
                fuse: {
                    nodeUrl: "https://rpc.fusenet.io",
                    chainId: "122"
                },
                lightstreams: {
                    nodeUrl: "https://node.mainnet.lightstreams.io",
                    chainId: "163"
                },
                maticAlpha: {
                    nodeUrl: "https://alpha.ethereum.matic.network",
                    chainId: "4626"
                },
                maticTestnet: {
                    nodeUrl: "https://testnet2.matic.network",
                    chainId: "8995"
                }
            }
              , ce = window && window.__awaiter || function(e, t, r, n) {
                return new (r || (r = Promise))((function(o, i) {
                    function a(e) {
                        try {
                            c(n.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function s(e) {
                        try {
                            c(n.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        e.done ? o(e.value) : new r((function(t) {
                            t(e.value)
                        }
                        )).then(a, s)
                    }
                    c((n = n.apply(e, t || [])).next())
                }
                ))
            }
              , ue = window && window.__generator || function(e, t) {
                var r, n, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0])
                            throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                },
                "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }
                ),
                i;
                function s(i) {
                    return function(s) {
                        return function(i) {
                            if (r)
                                throw new TypeError("Generator is already executing.");
                            for (; a; )
                                try {
                                    if (r = 1,
                                    n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n),
                                    0) : n.next) && !(o = o.call(n, i[1])).done)
                                        return o;
                                    switch (n = 0,
                                    o && (i = [2 & i[0], o.value]),
                                    i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return a.label++,
                                        {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++,
                                        n = i[1],
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop(),
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1],
                                            o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2],
                                            a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop(),
                                        a.trys.pop();
                                        continue
                                    }
                                    i = t.call(e, a)
                                } catch (e) {
                                    i = [6, e],
                                    n = 0
                                } finally {
                                    r = o = 0
                                }
                            if (5 & i[0])
                                throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, s])
                    }
                }
            }
              , fe = r(687)
              , de = fe.addHexPrefix
              , le = fe.stripHexPrefix
              , he = fe.BN;
            function pe(e, t) {
                return ce(this, void 0, void 0, (function() {
                    var r, n, o, i, a;
                    return ue(this, (function(s) {
                        switch (s.label) {
                        case 0:
                            return [4, e.getBlockByNumber("latest", !1)];
                        case 1:
                            return r = s.sent(),
                            [4, ge(e, t, r.gasLimit)];
                        case 2:
                            if (n = s.sent(),
                            o = n.safeGas,
                            i = n.simpleSend,
                            a = n.gasLimitSpecified,
                            i || a)
                                return [2, o];
                            s.label = 3;
                        case 3:
                            return s.trys.push([3, 5, , 6]),
                            [4, ve(e, t, r.gasLimit, o)];
                        case 4:
                            return [2, s.sent()];
                        case 5:
                            return s.sent(),
                            [2, o];
                        case 6:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            function ge(e, t, r) {
                return ce(this, void 0, void 0, (function() {
                    var n, o;
                    return ue(this, (function(i) {
                        switch (i.label) {
                        case 0:
                            return Boolean(t.gas) ? [2, {
                                safeGas: t.gas,
                                simpleSend: !1,
                                gasLimitSpecified: !0
                            }] : (n = t.to,
                            Boolean(n) ? [4, e.getCode(n)] : [3, 2]);
                        case 1:
                            if (!(o = i.sent()) || "0x" === o || "0x0" === o) {
                                if (t.data)
                                    throw new Error("Trying to call a function on a non-contract address");
                                return [2, {
                                    safeGas: "0x5208",
                                    simpleSend: !0,
                                    gasLimitSpecified: !1
                                }]
                            }
                            i.label = 2;
                        case 2:
                            return a = ye(r),
                            20,
                            s = new he(19),
                            c = new he(20),
                            [2, {
                                safeGas: be(a.mul(s).div(c)),
                                simpleSend: !1,
                                gasLimitSpecified: !1
                            }]
                        }
                        var a, s, c
                    }
                    ))
                }
                ))
            }
            function ve(e, t, r, n) {
                return ce(this, void 0, void 0, (function() {
                    var o;
                    return ue(this, (function(i) {
                        switch (i.label) {
                        case 0:
                            return t.gas = n,
                            o = de,
                            [4, e.estimateGas(t)];
                        case 1:
                            return [2, me(o.apply(void 0, [i.sent()]), r)]
                        }
                    }
                    ))
                }
                ))
            }
            function me(e, t) {
                var r = ye(e)
                  , n = ye(t).muln(.9)
                  , o = r.muln(1.5);
                return r.gt(n) ? be(r) : o.lt(n) ? be(o) : be(n)
            }
            function ye(e) {
                return new he(le(e),16)
            }
            function be(e) {
                return de(e.toString(16))
            }
            var we = function() {
                function e(e) {
                    this.provider = e
                }
                return e.prototype.getBlockByNumber = function(e, t) {
                    return this.sendAsync("eth_getBlockByNumber", e, t)
                }
                ,
                e.prototype.getCode = function(e, t) {
                    return void 0 === t && (t = "latest"),
                    this.sendAsync("eth_getCode", e, t)
                }
                ,
                e.prototype.estimateGas = function(e) {
                    return this.sendAsync("eth_estimateGas", e)
                }
                ,
                e.prototype.sendAsync = function(e) {
                    for (var t = this, r = [], n = 1; n < arguments.length; n++)
                        r[n - 1] = arguments[n];
                    return new Promise((function(n, o) {
                        t.provider.sendAsync({
                            id: 42,
                            jsonrpc: "2.0",
                            method: e,
                            params: r
                        }, (function(e, t) {
                            e ? o(e) : n(t.result)
                        }
                        ))
                    }
                    ))
                }
                ,
                e
            }()
              , ke = !1;
            function _e() {
                return new Promise((function(e) {
                    ke ? e() : ["loaded", "interactive", "complete"].indexOf(document.readyState) > -1 ? (ke = !0,
                    e()) : window.addEventListener("load", (function() {
                        ke = !0,
                        e()
                    }
                    ), !1)
                }
                ))
            }
            var Ee = {
                Blockchain: function() {
                    function e(t, r) {
                        Object(s.a)(this, e),
                        this.name = t,
                        this.netID = r
                    }
                    return Object(c.a)(e, [{
                        key: "toJSON",
                        value: function() {
                            return JSON.parse('{ "name":"' + this.name + '", "netID":"' + this.netID + '"}')
                        }
                    }]),
                    e
                }()
            }
              , xe = function(e, t) {
                return function() {
                    for (var r = new Array(arguments.length), n = 0; n < r.length; n++)
                        r[n] = arguments[n];
                    return e.apply(t, r)
                }
            }
              , Te = Object.prototype.toString;
            function Ae(e) {
                return "[object Array]" === Te.call(e)
            }
            function Oe(e) {
                return null !== e && "object" == typeof e
            }
            function Pe(e) {
                return "[object Function]" === Te.call(e)
            }
            function Re(e, t) {
                if (null != e)
                    if ("object" != typeof e && (e = [e]),
                    Ae(e))
                        for (var r = 0, n = e.length; r < n; r++)
                            t.call(null, e[r], r, e);
                    else
                        for (var o in e)
                            Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e)
            }
            var Ce = {
                isArray: Ae,
                isArrayBuffer: function(e) {
                    return "[object ArrayBuffer]" === Te.call(e)
                },
                isBuffer: function(e) {
                    return null != e && null != e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
                },
                isFormData: function(e) {
                    return "undefined" != typeof FormData && e instanceof FormData
                },
                isArrayBufferView: function(e) {
                    return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
                },
                isString: function(e) {
                    return "string" == typeof e
                },
                isNumber: function(e) {
                    return "number" == typeof e
                },
                isObject: Oe,
                isUndefined: function(e) {
                    return void 0 === e
                },
                isDate: function(e) {
                    return "[object Date]" === Te.call(e)
                },
                isFile: function(e) {
                    return "[object File]" === Te.call(e)
                },
                isBlob: function(e) {
                    return "[object Blob]" === Te.call(e)
                },
                isFunction: Pe,
                isStream: function(e) {
                    return Oe(e) && Pe(e.pipe)
                },
                isURLSearchParams: function(e) {
                    return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
                },
                isStandardBrowserEnv: function() {
                    return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document
                },
                forEach: Re,
                merge: function e() {
                    var t = {};
                    function r(r, n) {
                        "object" == typeof t[n] && "object" == typeof r ? t[n] = e(t[n], r) : t[n] = r
                    }
                    for (var n = 0, o = arguments.length; n < o; n++)
                        Re(arguments[n], r);
                    return t
                },
                extend: function(e, t, r) {
                    return Re(t, (function(t, n) {
                        e[n] = r && "function" == typeof t ? xe(t, r) : t
                    }
                    )),
                    e
                },
                trim: function(e) {
                    return e.replace(/^\s*/, "").replace(/\s*$/, "")
                }
            }
              , Se = function(e, t, r, n, o) {
                return function(e, t, r, n, o) {
                    return e.config = t,
                    r && (e.code = r),
                    e.request = n,
                    e.response = o,
                    e
                }(new Error(e), t, r, n, o)
            };
            function Le(e) {
                return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
            }
            var Ne = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]
              , Be = Ce.isStandardBrowserEnv() ? function() {
                var e, t = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a");
                function n(e) {
                    var n = e;
                    return t && (r.setAttribute("href", n),
                    n = r.href),
                    r.setAttribute("href", n),
                    {
                        href: r.href,
                        protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
                        host: r.host,
                        search: r.search ? r.search.replace(/^\?/, "") : "",
                        hash: r.hash ? r.hash.replace(/^#/, "") : "",
                        hostname: r.hostname,
                        port: r.port,
                        pathname: "/" === r.pathname.charAt(0) ? r.pathname : "/" + r.pathname
                    }
                }
                return e = n(window.location.href),
                function(t) {
                    var r = Ce.isString(t) ? n(t) : t;
                    return r.protocol === e.protocol && r.host === e.host
                }
            }() : function() {
                return !0
            }
              , je = Ce.isStandardBrowserEnv() ? {
                write: function(e, t, r, n, o, i) {
                    var a = [];
                    a.push(e + "=" + encodeURIComponent(t)),
                    Ce.isNumber(r) && a.push("expires=" + new Date(r).toGMTString()),
                    Ce.isString(n) && a.push("path=" + n),
                    Ce.isString(o) && a.push("domain=" + o),
                    !0 === i && a.push("secure"),
                    document.cookie = a.join("; ")
                },
                read: function(e) {
                    var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                    return t ? decodeURIComponent(t[3]) : null
                },
                remove: function(e) {
                    this.write(e, "", Date.now() - 864e5)
                }
            } : {
                write: function() {},
                read: function() {
                    return null
                },
                remove: function() {}
            }
              , Ie = {
                "Content-Type": "application/x-www-form-urlencoded"
            };
            function De(e, t) {
                !Ce.isUndefined(e) && Ce.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
            }
            var Me, Ue = {
                adapter: (("undefined" != typeof XMLHttpRequest || "undefined" != typeof n) && (Me = function(e) {
                    return new Promise((function(t, r) {
                        var n = e.data
                          , o = e.headers;
                        Ce.isFormData(n) && delete o["Content-Type"];
                        var i = new XMLHttpRequest;
                        if (e.auth) {
                            var a = e.auth.username || ""
                              , s = e.auth.password || "";
                            o.Authorization = "Basic " + btoa(a + ":" + s)
                        }
                        if (i.open(e.method.toUpperCase(), function(e, t, r) {
                            if (!t)
                                return e;
                            var n;
                            if (r)
                                n = r(t);
                            else if (Ce.isURLSearchParams(t))
                                n = t.toString();
                            else {
                                var o = [];
                                Ce.forEach(t, (function(e, t) {
                                    null != e && (Ce.isArray(e) ? t += "[]" : e = [e],
                                    Ce.forEach(e, (function(e) {
                                        Ce.isDate(e) ? e = e.toISOString() : Ce.isObject(e) && (e = JSON.stringify(e)),
                                        o.push(Le(t) + "=" + Le(e))
                                    }
                                    )))
                                }
                                )),
                                n = o.join("&")
                            }
                            return n && (e += (-1 === e.indexOf("?") ? "?" : "&") + n),
                            e
                        }(e.url, e.params, e.paramsSerializer), !0),
                        i.timeout = e.timeout,
                        i.onreadystatechange = function() {
                            if (i && 4 === i.readyState && (0 !== i.status || i.responseURL && 0 === i.responseURL.indexOf("file:"))) {
                                var n, o, a, s, c, u = "getAllResponseHeaders"in i ? (n = i.getAllResponseHeaders(),
                                c = {},
                                n ? (Ce.forEach(n.split("\n"), (function(e) {
                                    if (s = e.indexOf(":"),
                                    o = Ce.trim(e.substr(0, s)).toLowerCase(),
                                    a = Ce.trim(e.substr(s + 1)),
                                    o) {
                                        if (c[o] && Ne.indexOf(o) >= 0)
                                            return;
                                        c[o] = "set-cookie" === o ? (c[o] ? c[o] : []).concat([a]) : c[o] ? c[o] + ", " + a : a
                                    }
                                }
                                )),
                                c) : c) : null, f = {
                                    data: e.responseType && "text" !== e.responseType ? i.response : i.responseText,
                                    status: i.status,
                                    statusText: i.statusText,
                                    headers: u,
                                    config: e,
                                    request: i
                                };
                                !function(e, t, r) {
                                    var n = r.config.validateStatus;
                                    r.status && n && !n(r.status) ? t(Se("Request failed with status code " + r.status, r.config, null, r.request, r)) : e(r)
                                }(t, r, f),
                                i = null
                            }
                        }
                        ,
                        i.onerror = function() {
                            r(Se("Network Error", e, null, i)),
                            i = null
                        }
                        ,
                        i.ontimeout = function() {
                            r(Se("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", i)),
                            i = null
                        }
                        ,
                        Ce.isStandardBrowserEnv()) {
                            var c = je
                              , u = (e.withCredentials || Be(e.url)) && e.xsrfCookieName ? c.read(e.xsrfCookieName) : void 0;
                            u && (o[e.xsrfHeaderName] = u)
                        }
                        if ("setRequestHeader"in i && Ce.forEach(o, (function(e, t) {
                            void 0 === n && "content-type" === t.toLowerCase() ? delete o[t] : i.setRequestHeader(t, e)
                        }
                        )),
                        e.withCredentials && (i.withCredentials = !0),
                        e.responseType)
                            try {
                                i.responseType = e.responseType
                            } catch (t) {
                                if ("json" !== e.responseType)
                                    throw t
                            }
                        "function" == typeof e.onDownloadProgress && i.addEventListener("progress", e.onDownloadProgress),
                        "function" == typeof e.onUploadProgress && i.upload && i.upload.addEventListener("progress", e.onUploadProgress),
                        e.cancelToken && e.cancelToken.promise.then((function(e) {
                            i && (i.abort(),
                            r(e),
                            i = null)
                        }
                        )),
                        void 0 === n && (n = null),
                        i.send(n)
                    }
                    ))
                }
                ),
                Me),
                transformRequest: [function(e, t) {
                    return function(e, t) {
                        Ce.forEach(e, (function(r, n) {
                            n !== t && n.toUpperCase() === t.toUpperCase() && (e[t] = r,
                            delete e[n])
                        }
                        ))
                    }(t, "Content-Type"),
                    Ce.isFormData(e) || Ce.isArrayBuffer(e) || Ce.isBuffer(e) || Ce.isStream(e) || Ce.isFile(e) || Ce.isBlob(e) ? e : Ce.isArrayBufferView(e) ? e.buffer : Ce.isURLSearchParams(e) ? (De(t, "application/x-www-form-urlencoded;charset=utf-8"),
                    e.toString()) : Ce.isObject(e) ? (De(t, "application/json;charset=utf-8"),
                    JSON.stringify(e)) : e
                }
                ],
                transformResponse: [function(e) {
                    if ("string" == typeof e)
                        try {
                            e = JSON.parse(e)
                        } catch (e) {}
                    return e
                }
                ],
                timeout: 0,
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                maxContentLength: -1,
                validateStatus: function(e) {
                    return e >= 200 && e < 300
                },
                headers: {
                    common: {
                        Accept: "application/json, text/plain, */*"
                    }
                }
            };
            Ce.forEach(["delete", "get", "head"], (function(e) {
                Ue.headers[e] = {}
            }
            )),
            Ce.forEach(["post", "put", "patch"], (function(e) {
                Ue.headers[e] = Ce.merge(Ie)
            }
            ));
            var Ge = Ue;
            function Fe() {
                this.handlers = []
            }
            Fe.prototype.use = function(e, t) {
                return this.handlers.push({
                    fulfilled: e,
                    rejected: t
                }),
                this.handlers.length - 1
            }
            ,
            Fe.prototype.eject = function(e) {
                this.handlers[e] && (this.handlers[e] = null)
            }
            ,
            Fe.prototype.forEach = function(e) {
                Ce.forEach(this.handlers, (function(t) {
                    null !== t && e(t)
                }
                ))
            }
            ;
            var Ke = Fe
              , qe = function(e, t, r) {
                return Ce.forEach(r, (function(r) {
                    e = r(e, t)
                }
                )),
                e
            }
              , He = function(e) {
                return !(!e || !e.__CANCEL__)
            };
            function Ve(e) {
                e.cancelToken && e.cancelToken.throwIfRequested()
            }
            var ze = function(e) {
                var t, r, n;
                return Ve(e),
                e.baseURL && (n = e.url,
                !/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(n)) && (e.url = (t = e.baseURL,
                (r = e.url) ? t.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : t)),
                e.headers = e.headers || {},
                e.data = qe(e.data, e.headers, e.transformRequest),
                e.headers = Ce.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}),
                Ce.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function(t) {
                    delete e.headers[t]
                }
                )),
                (e.adapter || Ge.adapter)(e).then((function(t) {
                    return Ve(e),
                    t.data = qe(t.data, t.headers, e.transformResponse),
                    t
                }
                ), (function(t) {
                    return He(t) || (Ve(e),
                    t && t.response && (t.response.data = qe(t.response.data, t.response.headers, e.transformResponse))),
                    Promise.reject(t)
                }
                ))
            };
            function We(e) {
                this.defaults = e,
                this.interceptors = {
                    request: new Ke,
                    response: new Ke
                }
            }
            We.prototype.request = function(e) {
                "string" == typeof e && (e = Ce.merge({
                    url: arguments[0]
                }, arguments[1])),
                (e = Ce.merge(Ge, {
                    method: "get"
                }, this.defaults, e)).method = e.method.toLowerCase();
                var t = [ze, void 0]
                  , r = Promise.resolve(e);
                for (this.interceptors.request.forEach((function(e) {
                    t.unshift(e.fulfilled, e.rejected)
                }
                )),
                this.interceptors.response.forEach((function(e) {
                    t.push(e.fulfilled, e.rejected)
                }
                )); t.length; )
                    r = r.then(t.shift(), t.shift());
                return r
            }
            ,
            Ce.forEach(["delete", "get", "head", "options"], (function(e) {
                We.prototype[e] = function(t, r) {
                    return this.request(Ce.merge(r || {}, {
                        method: e,
                        url: t
                    }))
                }
            }
            )),
            Ce.forEach(["post", "put", "patch"], (function(e) {
                We.prototype[e] = function(t, r, n) {
                    return this.request(Ce.merge(n || {}, {
                        method: e,
                        url: t,
                        data: r
                    }))
                }
            }
            ));
            var Je = We;
            function Ze(e) {
                this.message = e
            }
            Ze.prototype.toString = function() {
                return "Cancel" + (this.message ? ": " + this.message : "")
            }
            ,
            Ze.prototype.__CANCEL__ = !0;
            var Ye = Ze;
            function Xe(e) {
                if ("function" != typeof e)
                    throw new TypeError("executor must be a function.");
                var t;
                this.promise = new Promise((function(e) {
                    t = e
                }
                ));
                var r = this;
                e((function(e) {
                    r.reason || (r.reason = new Ye(e),
                    t(r.reason))
                }
                ))
            }
            Xe.prototype.throwIfRequested = function() {
                if (this.reason)
                    throw this.reason
            }
            ,
            Xe.source = function() {
                var e;
                return {
                    token: new Xe((function(t) {
                        e = t
                    }
                    )),
                    cancel: e
                }
            }
            ;
            var $e = Xe;
            function Qe(e) {
                var t = new Je(e)
                  , r = xe(Je.prototype.request, t);
                return Ce.extend(r, Je.prototype, t),
                Ce.extend(r, t),
                r
            }
            var et = Qe(Ge);
            et.Axios = Je,
            et.create = function(e) {
                return Qe(Ce.merge(Ge, e))
            }
            ,
            et.Cancel = Ye,
            et.CancelToken = $e,
            et.isCancel = He,
            et.all = function(e) {
                return Promise.all(e)
            }
            ,
            et.spread = function(e) {
                return function(t) {
                    return e.apply(null, t)
                }
            }
            ;
            var tt = et
              , rt = et;
            tt.default = rt;
            var nt = tt
              , ot = "https://dispatch.pokt.network"
              , it = "/v1/dispatch"
              , at = {
                Node: function() {
                    function e(t, r, n) {
                        Object(s.a)(this, e),
                        this.network = t,
                        this.netID = r;
                        var o = n.split(":");
                        this.ip = o[0],
                        this.port = o[1],
                        n.includes("https://") || n.includes("http://") ? this.ipPort = n : "443" === this.port || 443 === this.port ? this.ipPort = "https://" + n : this.ipPort = "http://" + n
                    }
                    return Object(c.a)(e, [{
                        key: "isValid",
                        value: function() {
                            for (var e in this)
                                if (!this.hasOwnProperty(e) || "" == this[e])
                                    return !1;
                            return !0
                        }
                    }, {
                        key: "isEqual",
                        value: function(e, t) {
                            return this.netID == e.toString() && this.network == t.toString()
                        }
                    }, {
                        key: "sendRelay",
                        value: function() {
                            var e = Object(a.a)(i.a.mark((function e(t, r) {
                                var n, o, a;
                                return i.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0,
                                            n = nt.create({
                                                baseURL: this.ipPort,
                                                timeout: t.configuration.requestTimeOut,
                                                headers: {
                                                    "Content-Type": "application/json"
                                                }
                                            }),
                                            e.next = 4,
                                            n.post("/v1/relay/", t.toJSON());
                                        case 4:
                                            if (200 != (o = e.sent).status || null == o.data) {
                                                e.next = 8;
                                                break
                                            }
                                            return a = o.data,
                                            e.abrupt("return", r ? void r(a, null) : a);
                                        case 8:
                                            return e.abrupt("return", r ? void r(null, new Error("Failed to send relay with error: " + o.data)) : new Error("Failed to send relay with error: " + o.data));
                                        case 11:
                                            return e.prev = 11,
                                            e.t0 = e.catch(0),
                                            e.abrupt("return", r ? void r(null, new Error("Failed to send relay with error: " + e.t0)) : new Error("Failed to send relay with error: " + e.t0));
                                        case 14:
                                        case "end":
                                            return e.stop()
                                        }
                                }
                                ), e, this, [[0, 11]])
                            }
                            )));
                            return function(t, r) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }]),
                    e
                }()
            }
              , st = at.Node
              , ct = {
                Dispatch: function() {
                    function e(t) {
                        Object(s.a)(this, e),
                        this.configuration = t,
                        this.axiosInstance = nt.create({
                            baseURL: ot,
                            path: it,
                            timeout: this.configuration.requestTimeOut,
                            headers: {
                                "Content-Type": "application/json"
                            }
                        })
                    }
                    return Object(c.a)(e, [{
                        key: "blockchainsJSON",
                        value: function() {
                            var e = [];
                            return this.configuration.blockchains.forEach((function(t) {
                                e.push(t)
                            }
                            )),
                            e
                        }
                    }, {
                        key: "retrieveServiceNodes",
                        value: function() {
                            var e = Object(a.a)(i.a.mark((function e(t) {
                                var r, n;
                                return i.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0,
                                            e.next = 3,
                                            this.axiosInstance.post(it, {
                                                DevID: this.configuration.devID,
                                                Blockchains: this.blockchainsJSON()
                                            });
                                        case 3:
                                            if (e.t2 = r = e.sent,
                                            e.t1 = null != e.t2,
                                            !e.t1) {
                                                e.next = 7;
                                                break
                                            }
                                            e.t1 = 200 == r.status;
                                        case 7:
                                            if (e.t0 = e.t1,
                                            !e.t0) {
                                                e.next = 10;
                                                break
                                            }
                                            e.t0 = null != r.data;
                                        case 10:
                                            if (!e.t0) {
                                                e.next = 13;
                                                break
                                            }
                                            return n = this.parseDispatchResponse(r.data),
                                            e.abrupt("return", t ? void t(n, null) : n);
                                        case 13:
                                            return e.abrupt("return", t ? void t(null, new Error("Failed to retrieve service nodes with error: " + r.data)) : new Error("Failed to retrieve service nodes with error: " + r.data));
                                        case 16:
                                            return e.prev = 16,
                                            e.t3 = e.catch(0),
                                            e.abrupt("return", t ? void t(null, new Error("Failed to retrieve service nodes with error: " + e.t3)) : new Error("Failed to retrieve service nodes with error: " + e.t3));
                                        case 19:
                                        case "end":
                                            return e.stop()
                                        }
                                }
                                ), e, this, [[0, 16]])
                            }
                            )));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "parseDispatchResponse",
                        value: function(e) {
                            try {
                                var t = [];
                                if (Array.isArray(e))
                                    e.forEach((function(e) {
                                        var r = e.name
                                          , n = e.netid;
                                        e.ips && e.ips.forEach((function(e) {
                                            var o = new st(r,n,e);
                                            t.push(o)
                                        }
                                        ))
                                    }
                                    ));
                                else {
                                    var r = e.name
                                      , n = e.netid;
                                    e.ips && e.ips.forEach((function(e) {
                                        var o = new st(r,n,e);
                                        t.push(o)
                                    }
                                    ))
                                }
                                return t
                            } catch (e) {
                                return new Error("Failed to parsed service nodes with error: " + e)
                            }
                        }
                    }]),
                    e
                }()
            }
              , ut = {
                Relay: function() {
                    function e(t, r, n, o) {
                        Object(s.a)(this, e),
                        this.blockchain = t,
                        this.netID = r,
                        this.data = n,
                        this.configuration = o
                    }
                    return Object(c.a)(e, [{
                        key: "toJSON",
                        value: function() {
                            return {
                                Blockchain: this.blockchain,
                                NetID: this.netID,
                                Data: this.data,
                                DevID: this.configuration.devID
                            }
                        }
                    }, {
                        key: "isValid",
                        value: function() {
                            for (var e in this)
                                if (!this.hasOwnProperty(e) || "" == this[e])
                                    return !1;
                            return !0
                        }
                    }]),
                    e
                }()
            }
              , ft = {
                Report: function() {
                    function e(t, r, n) {
                        Object(s.a)(this, e),
                        this.ip = t,
                        this.message = r,
                        this.configuration = n
                    }
                    return Object(c.a)(e, [{
                        key: "toJSON",
                        value: function() {
                            return {
                                IP: this.ip,
                                Message: this.message
                            }
                        }
                    }, {
                        key: "isValid",
                        value: function() {
                            for (var e in this)
                                if (!this.hasOwnProperty(e) || "" == this[e])
                                    return !1;
                            return !0
                        }
                    }, {
                        key: "send",
                        value: function() {
                            var e = Object(a.a)(i.a.mark((function e(t) {
                                var r, n;
                                return i.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                        case 0:
                                            return r = nt.create({
                                                baseURL: ot,
                                                timeout: this.configuration.requestTimeOut,
                                                headers: {
                                                    "Content-Type": "application/json"
                                                }
                                            }),
                                            e.next = 3,
                                            r.post("/v1/report", this.toJSON());
                                        case 3:
                                            return n = e.sent,
                                            e.abrupt("return", 200 == n.status && null != n.data ? t ? void t(null, n.data) : n.data : t ? void t(new Error("Failed to send report with error: " + n.data)) : new Error("Failed to send report with error: " + n.data));
                                        case 5:
                                        case "end":
                                            return e.stop()
                                        }
                                }
                                ), e, this)
                            }
                            )));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }]),
                    e
                }()
            }
              , dt = {
                Wallet: function e(t, r, n, o, i) {
                    Object(s.a)(this, e),
                    this.address = t,
                    this.privateKey = r,
                    this.network = n,
                    this.networkID = o,
                    this.data = i
                }
            }
              , lt = Object(p.g)((function(e) {
                e.exports = Object.assign(e.exports, Ee, ct, at, ut, ft, dt)
            }
            ))
              , ht = lt.Blockchain
              , pt = lt.Dispatch
              , gt = lt.Relay
              , vt = lt.Report
              , mt = function() {
                function e(t, r, n, o) {
                    Object(s.a)(this, e),
                    this.devID = t,
                    this.blockchains = r,
                    this.maxNodes = n || 5,
                    this.nodes = [],
                    this.requestTimeOut = o || 1e4,
                    this.dispatch = null
                }
                return Object(c.a)(e, [{
                    key: "nodesIsEmpty",
                    value: function() {
                        return null == this.nodes || 0 == this.nodes.length
                    }
                }]),
                e
            }()
              , yt = {
                Pocket: function() {
                    function e(t) {
                        Object(s.a)(this, e);
                        var r = [];
                        if (null == t.devID || null == t.networkName || null == t.netIDs)
                            return new Error("Invalid number of arguments");
                        if (Array.isArray(t.netIDs))
                            t.netIDs.forEach((function(e) {
                                var n = new ht(t.networkName,e);
                                r.push(n.toJSON())
                            }
                            ));
                        else {
                            var n = new ht(t.networkName,t.netIDs);
                            r.push(n.toJSON())
                        }
                        this.configuration = new mt(t.devID,r,t.maxNodes || 5,t.requestTimeOut || 1e4)
                    }
                    return Object(c.a)(e, [{
                        key: "createRelay",
                        value: function(e, t, r) {
                            return new gt(e,t,"string" == typeof r ? r : JSON.stringify(r),this.configuration)
                        }
                    }, {
                        key: "createReport",
                        value: function(e, t) {
                            return new vt(e,t,this.configuration)
                        }
                    }, {
                        key: "getDispatch",
                        value: function() {
                            return null == this.dispatch && (this.dispatch = new pt(this.configuration)),
                            this.dispatch
                        }
                    }, {
                        key: "getNode",
                        value: function() {
                            var e = Object(a.a)(i.a.mark((function e(t, r) {
                                var n, o;
                                return i.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                        case 0:
                                            if (e.prev = 0,
                                            n = [],
                                            !this.configuration.nodesIsEmpty()) {
                                                e.next = 9;
                                                break
                                            }
                                            return e.next = 5,
                                            this.retrieveNodes();
                                        case 5:
                                            if ((o = e.sent)instanceof Error != 1) {
                                                e.next = 8;
                                                break
                                            }
                                            throw o;
                                        case 8:
                                            this.configuration.nodes = o;
                                        case 9:
                                            return e.abrupt("return", (this.configuration.nodes.forEach((function(e) {
                                                e.isEqual(t, r) && n.push(e)
                                            }
                                            )),
                                            n.length <= 0 ? null : n[Math.floor(Math.random() * n.length)]));
                                        case 12:
                                            return e.prev = 12,
                                            e.t0 = e.catch(0),
                                            e.abrupt("return", null);
                                        case 15:
                                        case "end":
                                            return e.stop()
                                        }
                                }
                                ), e, this, [[0, 12]])
                            }
                            )));
                            return function(t, r) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "sendReport",
                        value: function() {
                            var e = Object(a.a)(i.a.mark((function e(t, r) {
                                var n;
                                return i.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                        case 0:
                                            if (e.prev = 0,
                                            null != t) {
                                                e.next = 3;
                                                break
                                            }
                                            throw new Error("Report is null");
                                        case 3:
                                            if (t.isValid()) {
                                                e.next = 5;
                                                break
                                            }
                                            throw new Error("One or more Report properties are empty.");
                                        case 5:
                                            return e.next = 7,
                                            t.send();
                                        case 7:
                                            return n = e.sent,
                                            e.abrupt("return", n instanceof Error == 0 ? r ? void r(null, n) : n : r ? void r(n) : n);
                                        case 11:
                                            return e.prev = 11,
                                            e.t0 = e.catch(0),
                                            e.abrupt("return", r ? void r(e.t0) : e.t0);
                                        case 14:
                                        case "end":
                                            return e.stop()
                                        }
                                }
                                ), e, null, [[0, 11]])
                            }
                            )));
                            return function(t, r) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "sendRelay",
                        value: function() {
                            var e = Object(a.a)(i.a.mark((function e(t, r) {
                                var n, o;
                                return i.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                        case 0:
                                            if (e.prev = 0,
                                            null != t && null != t.data) {
                                                e.next = 3;
                                                break
                                            }
                                            return e.abrupt("return", r ? void r(new Error("Relay is null or data field is missing")) : new Error("Relay is null or data field is missing"));
                                        case 3:
                                            if (t.isValid()) {
                                                e.next = 5;
                                                break
                                            }
                                            return e.abrupt("return", r ? void r(new Error("Relay is missing a property, please verify all properties.")) : new Error("Relay is missing a property, please verify all properties."));
                                        case 5:
                                            return e.next = 7,
                                            this.getNode(t.netID, t.blockchain);
                                        case 7:
                                            if (null != (n = e.sent)) {
                                                e.next = 10;
                                                break
                                            }
                                            return e.abrupt("return", r ? void r(new Error("Node is empty.")) : new Error("Node is empty."));
                                        case 10:
                                            return e.next = 12,
                                            n.sendRelay(t);
                                        case 12:
                                            return o = e.sent,
                                            e.abrupt("return", o instanceof Error == 0 ? r ? void r(null, o) : o : r ? void r(o) : o);
                                        case 16:
                                            return e.prev = 16,
                                            e.t0 = e.catch(0),
                                            e.abrupt("return", r ? void r(new Error("Failed to send relay with error: " + e.t0)) : new Error("Failed to send relay with error: " + e.t0));
                                        case 19:
                                        case "end":
                                            return e.stop()
                                        }
                                }
                                ), e, this, [[0, 16]])
                            }
                            )));
                            return function(t, r) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "retrieveNodes",
                        value: function() {
                            var e = Object(a.a)(i.a.mark((function e(t) {
                                var r, n;
                                return i.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0,
                                            r = this.getDispatch(),
                                            e.next = 4,
                                            r.retrieveServiceNodes();
                                        case 4:
                                            return n = e.sent,
                                            e.abrupt("return", n instanceof Error == 0 && 0 != n.length ? (this.configuration.nodes = n,
                                            t ? void t(null, n) : n) : t ? void t(new Error("Failed to retrieve a list of nodes."), null) : new Error("Failed to retrieve a list of nodes."));
                                        case 8:
                                            return e.prev = 8,
                                            e.t0 = e.catch(0),
                                            e.abrupt("return", t ? void t(new Error("Failed to retrieve a list of nodes with error: " + e.t0), null) : new Error("Failed to retrieve a list of nodes with error: " + e.t0));
                                        case 11:
                                        case "end":
                                            return e.stop()
                                        }
                                }
                                ), e, this, [[0, 8]])
                            }
                            )));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }]),
                    e
                }(),
                Wallet: lt.Wallet,
                Relay: lt.Relay
            }
              , bt = window && window.__awaiter || function(e, t, r, n) {
                return new (r || (r = Promise))((function(o, i) {
                    function a(e) {
                        try {
                            c(n.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function s(e) {
                        try {
                            c(n.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        e.done ? o(e.value) : new r((function(t) {
                            t(e.value)
                        }
                        )).then(a, s)
                    }
                    c((n = n.apply(e, t || [])).next())
                }
                ))
            }
              , wt = window && window.__generator || function(e, t) {
                var r, n, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0])
                            throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                },
                "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }
                ),
                i;
                function s(i) {
                    return function(s) {
                        return function(i) {
                            if (r)
                                throw new TypeError("Generator is already executing.");
                            for (; a; )
                                try {
                                    if (r = 1,
                                    n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n),
                                    0) : n.next) && !(o = o.call(n, i[1])).done)
                                        return o;
                                    switch (n = 0,
                                    o && (i = [2 & i[0], o.value]),
                                    i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return a.label++,
                                        {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++,
                                        n = i[1],
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop(),
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1],
                                            o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2],
                                            a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop(),
                                        a.trys.pop();
                                        continue
                                    }
                                    i = t.call(e, a)
                                } catch (e) {
                                    i = [6, e],
                                    n = 0
                                } finally {
                                    r = o = 0
                                }
                            if (5 & i[0])
                                throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, s])
                    }
                }
            }
              , kt = ["email", "reputation"]
              , _t = document.createElement("iframe");
            _t.style.width = "0",
            _t.style.height = "0",
            _t.style.border = "none",
            _t.style.position = "absolute",
            _t.style.top = "-999px",
            _t.style.left = "-999px",
            _t.src = "https://widget.portis.io",
            _e().then((function() {
                document.body.appendChild(_t)
            }
            ));
            var Et = function() {
                function e(e, t, r) {
                    void 0 === r && (r = {}),
                    this._widgetUrl = "https://widget.portis.io",
                    function() {
                        var e = "localhost" === location.hostname || "127.0.0.1" === location.hostname
                          , t = "https:" === location.protocol;
                        if (!e && !t)
                            throw "[Portis] Access to the WebCrypto API is restricted to secure origins.\nIf this is a development environment please use http://localhost:" + location.port + " instead.\nOtherwise, please use an SSL certificate."
                    }(),
                    this._valiadateParams(e, t, r),
                    this.config = {
                        dappId: e,
                        network: ae(t, r.gasRelay),
                        version: "2.0.0-beta.54",
                        scope: r.scope,
                        registerPageByDefault: r.registerPageByDefault
                    },
                    this.widget = this._initWidget(),
                    this.provider = this._initProvider(r)
                }
                return e.prototype.changeNetwork = function(e, t) {
                    var r = ae(e, t);
                    this.clearSubprovider(te),
                    this.clearSubprovider(U),
                    this.config.network = r
                }
                ,
                e.prototype.setDefaultEmail = function(e) {
                    this.config.defaultEmail = e
                }
                ,
                e.prototype.showPortis = function() {
                    return bt(this, void 0, void 0, (function() {
                        return wt(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, this.widget];
                            case 1:
                                return [2, e.sent().communication.showPortis(this.config)]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                e.prototype.logout = function() {
                    return bt(this, void 0, void 0, (function() {
                        return wt(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, this.widget];
                            case 1:
                                return [2, e.sent().communication.logout()]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                e.prototype.onLogin = function(e) {
                    this._onLoginCallback = e
                }
                ,
                e.prototype.onLogout = function(e) {
                    this._onLogoutCallback = e
                }
                ,
                e.prototype.onActiveWalletChanged = function(e) {
                    this._onActiveWalletChangedCallback = e
                }
                ,
                e.prototype.onError = function(e) {
                    this._onErrorCallback = e
                }
                ,
                e.prototype.getExtendedPublicKey = function(e, t) {
                    return void 0 === e && (e = "m/44'/60'/0'/0/0"),
                    void 0 === t && (t = "Ethereum"),
                    bt(this, void 0, void 0, (function() {
                        return wt(this, (function(r) {
                            switch (r.label) {
                            case 0:
                                return [4, this.widget];
                            case 1:
                                return [2, r.sent().communication.getExtendedPublicKey(e, t, this.config)]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                e.prototype.importWallet = function(e) {
                    return bt(this, void 0, void 0, (function() {
                        return wt(this, (function(t) {
                            switch (t.label) {
                            case 0:
                                return [4, this.widget];
                            case 1:
                                return [2, t.sent().communication.importWallet(e, this.config)]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                e.prototype.isLoggedIn = function() {
                    return bt(this, void 0, void 0, (function() {
                        return wt(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, this.widget];
                            case 1:
                                return [2, e.sent().communication.isLoggedIn()]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                e.prototype.signBitcoinTransaction = function(e) {
                    return bt(this, void 0, void 0, (function() {
                        return wt(this, (function(t) {
                            switch (t.label) {
                            case 0:
                                return [4, this.widget];
                            case 1:
                                return [2, t.sent().communication.signBitcoinTransaction(e, this.config)]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                e.prototype.showBitcoinWallet = function(e) {
                    return void 0 === e && (e = "m/49'/0'/0'/0/0"),
                    bt(this, void 0, void 0, (function() {
                        return wt(this, (function(t) {
                            switch (t.label) {
                            case 0:
                                return [4, this.widget];
                            case 1:
                                return [2, t.sent().communication.showBitcoinWallet(e, this.config)]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                e.prototype._valiadateParams = function(e, t, r) {
                    if (!e)
                        throw new Error("[Portis] 'dappId' is required. Get your dappId here: https://dashboard.portis.io");
                    if (!t)
                        throw new Error("[Portis] 'network' is required. Read more about it here: https://docs.portis.io/#/configuration?id=network");
                    if (r.scope) {
                        if (!Array.isArray(r.scope))
                            throw new Error("[Portis] 'scope' must be an array. Read more about it here: https://docs.portis.io/#/configuration?id=scope");
                        if (r.scope.filter((function(e) {
                            return kt.indexOf(e) < 0
                        }
                        )).length > 0)
                            throw new Error("[Portis] invalid 'scope' parameter. Read more about it here: https://docs.portis.io/#/configuration?id=scope")
                    }
                    if (void 0 !== r.registerPageByDefault && "boolean" != typeof r.registerPageByDefault)
                        throw new Error("[Portis] invalid 'registerPageByDefault' parameter, must be a boolean. Read more about it here: https://docs.portis.io/#/configuration?id=registerPageByDefault")
                }
                ,
                e.prototype._initWidget = function() {
                    return bt(this, void 0, void 0, (function() {
                        var e, t, r, n, o;
                        return wt(this, (function(i) {
                            switch (i.label) {
                            case 0:
                                return [4, _e()];
                            case 1:
                                return i.sent(),
                                document.body.contains(_t) && document.body.removeChild(_t),
                                (e = document.createElement("style")).innerHTML = "\n.por_portis-container {\n  position: fixed;\n  width: 0px;\n  height: 0px;\n  top: 0px;\n  right: 0px;\n  z-index: 2147483647;\n}\n\n@media (max-width: 576px) {\n  .por_portis-container {\n    bottom: 0;\n    top: auto;\n  }\n}\n\n.por_portis-widget-frame {\n  position: fixed;\n  width: 375px;\n  height: 0;\n  top: 20px;\n  right: 20px;\n  box-shadow: 0 5px 40px rgba(0,0,0,.16);\n  border-radius: 8px;\n  overflow: hidden;\n  z-index: 2147483000;\n}\n\n@media (max-width: 576px) {\n  .por_portis-widget-frame {\n    bottom: 0;\n    top: auto;\n    width: 100%;\n    right: 0;\n    left: 0;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n}\n",
                                (t = document.createElement("div")).className = "por_portis-container",
                                (r = document.createElement("div")).id = "portis-container-" + Date.now(),
                                r.className = "por_portis-widget-frame",
                                t.appendChild(r),
                                document.body.appendChild(t),
                                document.head.appendChild(e),
                                (n = ie.connectToChild({
                                    url: this._widgetUrl,
                                    appendTo: document.getElementById(r.id),
                                    methods: {
                                        setHeight: this._setHeight.bind(this),
                                        getWindowSize: this._getWindowSize.bind(this),
                                        onLogin: this._onLogin.bind(this),
                                        onLogout: this._onLogout.bind(this),
                                        onActiveWalletChanged: this._onActiveWalletChanged.bind(this),
                                        onError: this._onError.bind(this)
                                    }
                                })).iframe.style.position = "absolute",
                                n.iframe.style.height = "100%",
                                n.iframe.style.width = "100%",
                                n.iframe.style.border = "0 transparent",
                                [4, n.promise];
                            case 2:
                                return (o = i.sent()).retrieveSession(this.config),
                                [2, {
                                    communication: o,
                                    iframe: n.iframe,
                                    widgetFrame: r
                                }]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                e.prototype._initProvider = function(e) {
                    var t = this
                      , r = new O
                      , n = new we(r);
                    if (r.send = function(e, n) {
                        if ("string" == typeof e)
                            return new Promise((function(t, o) {
                                r.sendAsync({
                                    jsonrpc: "2.0",
                                    id: 42,
                                    method: e,
                                    params: n || []
                                }, (function(e, r) {
                                    e ? o(e) : t(r.result)
                                }
                                ))
                            }
                            ));
                        if (!n) {
                            var o = null;
                            switch (e.method) {
                            case "eth_accounts":
                            case "eth_coinbase":
                                o = t._selectedAddress ? [t._selectedAddress] : [];
                                break;
                            case "net_version":
                                o = t._network;
                                break;
                            case "eth_uninstallFilter":
                                r.sendAsync(e, (function(e) {
                                    return e
                                }
                                )),
                                o = !0;
                                break;
                            default:
                                var i = "The Portis Web3 object does not support synchronous methods like " + e.method + " without a callback parameter.";
                                throw new Error(i)
                            }
                            return {
                                id: e.id,
                                jsonrpc: e.jsonrpc,
                                result: o
                            }
                        }
                        r.sendAsync(e, n)
                    }
                    ,
                    r.addProvider(new F({
                        web3_clientVersion: "Portis/v" + this.config.version + "/javascript",
                        net_listening: !0,
                        eth_hashrate: "0x00",
                        eth_mining: !1,
                        eth_syncing: !0
                    })),
                    r.addProvider(new U),
                    r.addProvider(new ne),
                    r.addProvider(new q),
                    r.addProvider(new te),
                    r.addProvider({
                        setEngine: function(e) {
                            return e
                        },
                        handleRequest: function(e, r, n) {
                            return bt(t, void 0, void 0, (function() {
                                return wt(this, (function(t) {
                                    return e.id || (e.id = 42),
                                    r(),
                                    [2]
                                }
                                ))
                            }
                            ))
                        }
                    }),
                    r.addProvider(new z({
                        getAccounts: function(e) {
                            return bt(t, void 0, void 0, (function() {
                                var t, r, n;
                                return wt(this, (function(o) {
                                    switch (o.label) {
                                    case 0:
                                        return [4, this.widget];
                                    case 1:
                                        return [4, o.sent().communication.getAccounts(this.config)];
                                    case 2:
                                        return t = o.sent(),
                                        r = t.error,
                                        n = t.result,
                                        !r && n && (this._selectedAddress = n[0]),
                                        e(r, n),
                                        [2]
                                    }
                                }
                                ))
                            }
                            ))
                        },
                        signTransaction: function(e, r) {
                            return bt(t, void 0, void 0, (function() {
                                var t, n, o;
                                return wt(this, (function(i) {
                                    switch (i.label) {
                                    case 0:
                                        return [4, this.widget];
                                    case 1:
                                        return [4, i.sent().communication.signTransaction(e, this.config)];
                                    case 2:
                                        return t = i.sent(),
                                        n = t.error,
                                        o = t.result,
                                        r(n, o),
                                        [2]
                                    }
                                }
                                ))
                            }
                            ))
                        },
                        signMessage: function(e, r) {
                            return bt(t, void 0, void 0, (function() {
                                var t, n, o, i, a;
                                return wt(this, (function(s) {
                                    switch (s.label) {
                                    case 0:
                                        return [4, this.widget];
                                    case 1:
                                        return t = s.sent().communication,
                                        n = Object.assign({}, e, {
                                            messageStandard: "signMessage"
                                        }),
                                        [4, t.signMessage(n, this.config)];
                                    case 2:
                                        return o = s.sent(),
                                        i = o.error,
                                        a = o.result,
                                        r(i, a),
                                        [2]
                                    }
                                }
                                ))
                            }
                            ))
                        },
                        signPersonalMessage: function(e, r) {
                            return bt(t, void 0, void 0, (function() {
                                var t, n, o, i, a;
                                return wt(this, (function(s) {
                                    switch (s.label) {
                                    case 0:
                                        return [4, this.widget];
                                    case 1:
                                        return t = s.sent().communication,
                                        n = Object.assign({}, e, {
                                            messageStandard: "signPersonalMessage"
                                        }),
                                        [4, t.signMessage(n, this.config)];
                                    case 2:
                                        return o = s.sent(),
                                        i = o.error,
                                        a = o.result,
                                        r(i, a),
                                        [2]
                                    }
                                }
                                ))
                            }
                            ))
                        },
                        signTypedMessage: function(e, r) {
                            return bt(t, void 0, void 0, (function() {
                                var t, n, o, i, a;
                                return wt(this, (function(s) {
                                    switch (s.label) {
                                    case 0:
                                        return [4, this.widget];
                                    case 1:
                                        return t = s.sent().communication,
                                        n = Object.assign({}, e, {
                                            messageStandard: "signTypedMessage"
                                        }),
                                        [4, t.signMessage(n, this.config)];
                                    case 2:
                                        return o = s.sent(),
                                        i = o.error,
                                        a = o.result,
                                        r(i, a),
                                        [2]
                                    }
                                }
                                ))
                            }
                            ))
                        },
                        signTypedMessageV3: function(e, r) {
                            return bt(t, void 0, void 0, (function() {
                                var t, n, o, i, a;
                                return wt(this, (function(s) {
                                    switch (s.label) {
                                    case 0:
                                        return [4, this.widget];
                                    case 1:
                                        return t = s.sent().communication,
                                        n = Object.assign({}, e, {
                                            messageStandard: "signTypedMessageV3"
                                        }),
                                        [4, t.signMessage(n, this.config)];
                                    case 2:
                                        return o = s.sent(),
                                        i = o.error,
                                        a = o.result,
                                        r(i, a),
                                        [2]
                                    }
                                }
                                ))
                            }
                            ))
                        },
                        estimateGas: function(e, r) {
                            return bt(t, void 0, void 0, (function() {
                                var t;
                                return wt(this, (function(o) {
                                    switch (o.label) {
                                    case 0:
                                        return [4, pe(n, e)];
                                    case 1:
                                        return t = o.sent(),
                                        r(null, t),
                                        [2]
                                    }
                                }
                                ))
                            }
                            ))
                        },
                        getGasPrice: function(e) {
                            return bt(t, void 0, void 0, (function() {
                                return wt(this, (function(t) {
                                    return e(null, ""),
                                    [2]
                                }
                                ))
                            }
                            ))
                        }
                    })),
                    e.pocketDevId) {
                        var o = new yt.Pocket({
                            devID: e.pocketDevId,
                            networkName: "ETH",
                            netIDs: [this.config.network.chainId]
                        });
                        r.addProvider({
                            setEngine: function(e) {
                                return e
                            },
                            handleRequest: function(e, n, i) {
                                return bt(t, void 0, void 0, (function() {
                                    var t, n, a;
                                    return wt(this, (function(s) {
                                        switch (s.label) {
                                        case 0:
                                            return [4, o.sendRelay(new yt.Relay("ETH",this.config.network.chainId,JSON.stringify(e),o.configuration))];
                                        case 1:
                                            if ((t = s.sent())instanceof Error || !t)
                                                a = t || new Error("Unknown error"),
                                                n = null;
                                            else
                                                try {
                                                    n = JSON.parse(t).result,
                                                    a = null
                                                } catch (e) {
                                                    n = null,
                                                    a = e
                                                }
                                            return "net_version" === e.method && (this._network = n,
                                            r.networkVersion = this._network),
                                            i(a, n),
                                            [2]
                                        }
                                    }
                                    ))
                                }
                                ))
                            }
                        })
                    } else
                        r.addProvider({
                            setEngine: function(e) {
                                return e
                            },
                            handleRequest: function(e, n, o) {
                                return bt(t, void 0, void 0, (function() {
                                    var t, n, i;
                                    return wt(this, (function(a) {
                                        switch (a.label) {
                                        case 0:
                                            return [4, this.widget];
                                        case 1:
                                            return [4, a.sent().communication.relay(e, this.config)];
                                        case 2:
                                            return t = a.sent(),
                                            n = t.error,
                                            i = t.result,
                                            "net_version" === e.method && (this._network = i,
                                            r.networkVersion = this._network),
                                            o(n, i),
                                            [2]
                                        }
                                    }
                                    ))
                                }
                                ))
                            }
                        });
                    return r.enable = function() {
                        return new Promise((function(e, t) {
                            r.sendAsync({
                                method: "eth_accounts"
                            }, (function(r, n) {
                                r ? t(r) : e(n.result)
                            }
                            ))
                        }
                        ))
                    }
                    ,
                    r.isConnected = function() {
                        return !0
                    }
                    ,
                    r.isPortis = !0,
                    r.on("error", (function(e) {
                        e && e.message && e.message.includes("PollingBlockTracker") ? console.warn("If you see this warning constantly, there might be an error with your RPC node.") : console.error(e)
                    }
                    )),
                    r.start(),
                    r
                }
                ,
                e.prototype._setHeight = function(e) {
                    return bt(this, void 0, void 0, (function() {
                        return wt(this, (function(t) {
                            switch (t.label) {
                            case 0:
                                return [4, this.widget];
                            case 1:
                                return t.sent().widgetFrame.style.height = e + "px",
                                [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                e.prototype._getWindowSize = function() {
                    var e = document.getElementsByTagName("body")[0];
                    return {
                        width: window.innerWidth || document.documentElement.clientWidth || e.clientWidth,
                        height: window.innerHeight || document.documentElement.clientHeight || e.clientHeight
                    }
                }
                ,
                e.prototype._onLogin = function(e, t, r) {
                    this._onLoginCallback && this._onLoginCallback(e, t, r)
                }
                ,
                e.prototype._onLogout = function() {
                    this._selectedAddress = "",
                    this._onLogoutCallback && this._onLogoutCallback()
                }
                ,
                e.prototype._onActiveWalletChanged = function(e) {
                    this._onActiveWalletChangedCallback && this._onActiveWalletChangedCallback(e)
                }
                ,
                e.prototype._onError = function(e) {
                    this._onErrorCallback && this._onErrorCallback(e)
                }
                ,
                e.prototype.clearSubprovider = function(e) {
                    var t = this.provider._providers.find((function(t) {
                        return t instanceof e
                    }
                    ));
                    this.provider.removeProvider(t),
                    this.provider.addProvider(new e)
                }
                ,
                e
            }();
            t.default = Et
        }
        .call(this, r(10).Buffer, r(22))
    },
    663: function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return w
        }
        ));
        var n, o, i, a, s = {
            '"': '"',
            "\\": "\\",
            "/": "/",
            b: "\b",
            f: "\f",
            n: "\n",
            r: "\r",
            t: "\t"
        }, c = function(e) {
            throw {
                name: "SyntaxError",
                message: e,
                at: n,
                text: i
            }
        }, u = function(e) {
            return e && e !== o && c("Expected '" + e + "' instead of '" + o + "'"),
            o = i.charAt(n),
            n += 1,
            o
        }, f = function() {
            var e, t = "";
            for ("-" === o && (t = "-",
            u("-")); o >= "0" && o <= "9"; )
                t += o,
                u();
            if ("." === o)
                for (t += "."; u() && o >= "0" && o <= "9"; )
                    t += o;
            if ("e" === o || "E" === o)
                for (t += o,
                u(),
                "-" !== o && "+" !== o || (t += o,
                u()); o >= "0" && o <= "9"; )
                    t += o,
                    u();
            if (e = +t,
            isFinite(e))
                return e;
            c("Bad number")
        }, d = function() {
            var e, t, r, n = "";
            if ('"' === o)
                for (; u(); ) {
                    if ('"' === o)
                        return u(),
                        n;
                    if ("\\" === o)
                        if (u(),
                        "u" === o) {
                            for (r = 0,
                            t = 0; t < 4 && (e = parseInt(u(), 16),
                            isFinite(e)); t += 1)
                                r = 16 * r + e;
                            n += String.fromCharCode(r)
                        } else {
                            if ("string" != typeof s[o])
                                break;
                            n += s[o]
                        }
                    else
                        n += o
                }
            c("Bad string")
        }, l = function() {
            for (; o && o <= " "; )
                u()
        };
        a = function() {
            switch (l(),
            o) {
            case "{":
                return function() {
                    var e, t = {};
                    if ("{" === o) {
                        if (u("{"),
                        l(),
                        "}" === o)
                            return u("}"),
                            t;
                        for (; o; ) {
                            if (e = d(),
                            l(),
                            u(":"),
                            Object.hasOwnProperty.call(t, e) && c('Duplicate key "' + e + '"'),
                            t[e] = a(),
                            l(),
                            "}" === o)
                                return u("}"),
                                t;
                            u(","),
                            l()
                        }
                    }
                    c("Bad object")
                }();
            case "[":
                return function() {
                    var e = [];
                    if ("[" === o) {
                        if (u("["),
                        l(),
                        "]" === o)
                            return u("]"),
                            e;
                        for (; o; ) {
                            if (e.push(a()),
                            l(),
                            "]" === o)
                                return u("]"),
                                e;
                            u(","),
                            l()
                        }
                    }
                    c("Bad array")
                }();
            case '"':
                return d();
            case "-":
                return f();
            default:
                return o >= "0" && o <= "9" ? f() : function() {
                    switch (o) {
                    case "t":
                        return u("t"),
                        u("r"),
                        u("u"),
                        u("e"),
                        !0;
                    case "f":
                        return u("f"),
                        u("a"),
                        u("l"),
                        u("s"),
                        u("e"),
                        !1;
                    case "n":
                        return u("n"),
                        u("u"),
                        u("l"),
                        u("l"),
                        null
                    }
                    c("Unexpected '" + o + "'")
                }()
            }
        }
        ;
        var h, p, g, v = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, m = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        };
        function y(e) {
            return v.lastIndex = 0,
            v.test(e) ? '"' + e.replace(v, (function(e) {
                var t = m[e];
                return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
            }
            )) + '"' : '"' + e + '"'
        }
        var b = "undefined" != typeof JSON ? JSON : {
            parse: function(e, t) {
                var r;
                return i = e,
                n = 0,
                o = " ",
                r = a(),
                l(),
                o && c("Syntax error"),
                "function" == typeof t ? function e(r, n) {
                    var o, i, a = r[n];
                    if (a && "object" == typeof a)
                        for (o in a)
                            Object.prototype.hasOwnProperty.call(a, o) && (void 0 !== (i = e(a, o)) ? a[o] = i : delete a[o]);
                    return t.call(r, n, a)
                }({
                    "": r
                }, "") : r
            },
            stringify: function(e, t, r) {
                var n;
                if (h = "",
                p = "",
                "number" == typeof r)
                    for (n = 0; n < r; n += 1)
                        p += " ";
                else
                    "string" == typeof r && (p = r);
                if (g = t,
                t && "function" != typeof t && ("object" != typeof t || "number" != typeof t.length))
                    throw new Error("JSON.stringify");
                return function e(t, r) {
                    var n, o, i, a, s, c = h, u = r[t];
                    switch (u && "object" == typeof u && "function" == typeof u.toJSON && (u = u.toJSON(t)),
                    "function" == typeof g && (u = g.call(r, t, u)),
                    typeof u) {
                    case "string":
                        return y(u);
                    case "number":
                        return isFinite(u) ? String(u) : "null";
                    case "boolean":
                    case "null":
                        return String(u);
                    case "object":
                        if (!u)
                            return "null";
                        if (h += p,
                        s = [],
                        "[object Array]" === Object.prototype.toString.apply(u)) {
                            for (a = u.length,
                            n = 0; n < a; n += 1)
                                s[n] = e(n, u) || "null";
                            return i = 0 === s.length ? "[]" : h ? "[\n" + h + s.join(",\n" + h) + "\n" + c + "]" : "[" + s.join(",") + "]",
                            h = c,
                            i
                        }
                        if (g && "object" == typeof g)
                            for (a = g.length,
                            n = 0; n < a; n += 1)
                                "string" == typeof (o = g[n]) && (i = e(o, u)) && s.push(y(o) + (h ? ": " : ":") + i);
                        else
                            for (o in u)
                                Object.prototype.hasOwnProperty.call(u, o) && (i = e(o, u)) && s.push(y(o) + (h ? ": " : ":") + i);
                        return i = 0 === s.length ? "{}" : h ? "{\n" + h + s.join(",\n" + h) + "\n" + c + "}" : "{" + s.join(",") + "}",
                        h = c,
                        i
                    }
                }("", {
                    "": e
                })
            }
        }
          , w = function(e, t) {
            t || (t = {}),
            "function" == typeof t && (t = {
                cmp: t
            });
            var r = t.space || "";
            "number" == typeof r && (r = Array(r + 1).join(" "));
            var n, o = "boolean" == typeof t.cycles && t.cycles, i = t.replacer || function(e, t) {
                return t
            }
            , a = t.cmp && (n = t.cmp,
            function(e) {
                return function(t, r) {
                    var o = {
                        key: t,
                        value: e[t]
                    }
                      , i = {
                        key: r,
                        value: e[r]
                    };
                    return n(o, i)
                }
            }
            ), s = [];
            return function e(t, n, c, u) {
                var f = r ? "\n" + new Array(u + 1).join(r) : ""
                  , d = r ? ": " : ":";
                if (c && c.toJSON && "function" == typeof c.toJSON && (c = c.toJSON()),
                void 0 !== (c = i.call(t, n, c))) {
                    if ("object" != typeof c || null === c)
                        return b.stringify(c);
                    if (k(c)) {
                        for (var l = [], h = 0; h < c.length; h++) {
                            var p = e(c, h, c[h], u + 1) || b.stringify(null);
                            l.push(f + r + p)
                        }
                        return "[" + l.join(",") + f + "]"
                    }
                    if (-1 !== s.indexOf(c)) {
                        if (o)
                            return b.stringify("__cycle__");
                        throw new TypeError("Converting circular structure to JSON")
                    }
                    s.push(c);
                    var g = _(c).sort(a && a(c));
                    for (l = [],
                    h = 0; h < g.length; h++) {
                        var v = e(c, n = g[h], c[n], u + 1);
                        if (v) {
                            var m = b.stringify(n) + d + v;
                            l.push(f + r + m)
                        }
                    }
                    return s.splice(s.indexOf(c), 1),
                    "{" + l.join(",") + f + "}"
                }
            }({
                "": e
            }, "", e, 0)
        }
          , k = Array.isArray || function(e) {
            return "[object Array]" === {}.toString.call(e)
        }
          , _ = Object.keys || function(e) {
            var t = Object.prototype.hasOwnProperty || function() {
                return !0
            }
              , r = [];
            for (var n in e)
                t.call(e, n) && r.push(n);
            return r
        }
    },
    670: function(e, t, r) {
        "use strict";
        (function(e) {
            r.d(t, "a", (function() {
                return de
            }
            ));
            var n = r(66)
              , o = r(664)
              , i = {
                v: 5e3,
                d: "Gas limit of the Genesis block."
            }
              , a = {
                v: 17179869184,
                d: "Difficulty of the Genesis block."
            }
              , s = {
                v: "0x0000000000000042",
                d: "the geneis nonce"
            }
              , c = {
                v: "0x11bbe8db4e347b4e8c937c1c8370e4b5ed33adb3db69cbdb7a38e1e50b1b82fa",
                d: "extra data "
            }
              , u = {
                v: "0xd4e56740f876aef8c010b86a40d5f56745a118d0906a34e69aec8c0db1cb8fa3",
                d: "genesis hash"
            }
              , f = {
                v: "0xd7f8974fb5ac78d9ac099b9ad5018bedc2ce0a72dad1827a1709da30580f0544",
                d: "the genesis state root"
            }
              , d = {
                v: 5e3,
                d: "Minimum the gas limit may ever be."
            }
              , l = {
                v: 1024,
                d: "The bound divisor of the gas limit, used in update calculations."
            }
              , h = {
                v: 131072,
                d: "The minimum that the difficulty may ever be."
            }
              , p = {
                v: 2048,
                d: "The bound divisor of the difficulty, used in the update calculations."
            }
              , g = {
                v: 13,
                d: "The decision boundary on the blocktime duration used to determine whether difficulty should go up or not."
            }
              , v = {
                v: 32,
                d: "Maximum size extra data may be after Genesis."
            }
              , m = {
                v: 3e4,
                d: "Duration between proof-of-work epochs."
            }
              , y = {
                v: 1024,
                d: "Maximum size of VM stack allowed."
            }
              , b = {
                v: 1024,
                d: "Maximum depth of call/create stack."
            }
              , w = {
                v: [0, 2, 3, 5, 8, 10, 20],
                d: "Once per operation, for a selection of them."
            }
              , k = {
                v: 10,
                d: "Once per EXP instuction."
            }
              , _ = {
                v: 10,
                d: "Times ceil(log256(exponent)) for the EXP instruction."
            }
              , E = {
                v: 30,
                d: "Once per SHA3 operation."
            }
              , x = {
                v: 6,
                d: "Once per word of the SHA3 operation's data."
            }
              , T = {
                v: 50,
                d: "Once per SLOAD operation."
            }
              , A = {
                v: 2e4,
                d: "Once per SSTORE operation if the zeroness changes from zero."
            }
              , O = {
                v: 5e3,
                d: "Once per SSTORE operation if the zeroness does not change from zero."
            }
              , P = {
                v: 15e3,
                d: "Once per SSTORE operation if the zeroness changes to zero."
            }
              , R = {
                v: 1,
                d: "Refunded gas, once per SSTORE operation if the zeroness changes to zero."
            }
              , C = {
                v: 375,
                d: "Per LOG* operation."
            }
              , S = {
                v: 8,
                d: "Per byte in a LOG* operation's data."
            }
              , L = {
                v: 375,
                d: "Multiplied by the * of the LOG*, per LOG transaction. e.g. LOG0 incurs 0 * c_txLogTopicGas, LOG4 incurs 4 * c_txLogTopicGas."
            }
              , N = {
                v: 32e3,
                d: "Once per CREATE operation & contract-creation transaction."
            }
              , B = {
                v: 40,
                d: "Once per CALL operation & message call transaction."
            }
              , j = {
                v: 2300,
                d: "Free gas given at beginning of call."
            }
              , I = {
                v: 9e3,
                d: "Paid for CALL when the value transfor is non-zero."
            }
              , D = {
                v: 25e3,
                d: "Paid for CALL when the destination address didn't exist prior."
            }
              , M = {
                v: 24e3,
                d: "Refunded following a suicide operation."
            }
              , U = {
                v: 3,
                d: "Times the address of the (highest referenced byte in memory + 1). NOTE: referencing happens on read, write and in instructions such as RETURN and CALL."
            }
              , G = {
                v: 512,
                d: "Divisor for the quadratic particle of the memory cost equation."
            }
              , F = {
                v: 200,
                d: ""
            }
              , K = {
                v: 21e3,
                d: "Per transaction. NOTE: Not payable on data of calls between transactions."
            }
              , q = {
                v: 32e3,
                d: "the cost of creating a contract via tx"
            }
              , H = {
                v: 4,
                d: "Per byte of data attached to a transaction that equals zero. NOTE: Not payable on data of calls between transactions."
            }
              , V = {
                v: 68,
                d: "Per byte of data attached to a transaction that is not equal to zero. NOTE: Not payable on data of calls between transactions."
            }
              , z = {
                v: 3,
                d: "Multiplied by the number of 32-byte words that are copied (round up) for any *COPY operation and added."
            }
              , W = {
                v: 3e3,
                d: ""
            }
              , J = {
                v: 60,
                d: ""
            }
              , Z = {
                v: 12,
                d: ""
            }
              , Y = {
                v: 600,
                d: ""
            }
              , X = {
                v: 120,
                d: ""
            }
              , $ = {
                v: 15,
                d: ""
            }
              , Q = {
                v: 3,
                d: ""
            }
              , ee = {
                v: "5000000000000000000",
                d: "the amount a miner get rewarded for mining a block"
            }
              , te = {
                v: "625000000000000000",
                d: "The amount of wei a miner of an uncle block gets for being inculded in the blockchain"
            }
              , re = {
                v: "156250000000000000",
                d: "the amount a miner gets for inculding a uncle"
            }
              , ne = {
                v: 115e4,
                d: "the block that the Homestead fork started at"
            }
              , oe = {
                v: 2463e3,
                d: "the block that the Homestead Reprice (EIP150) fork started at"
            }
              , ie = {
                v: 1e5,
                d: "Exponential difficulty timebomb period"
            }
              , ae = {
                v: 2
            }
              , se = {
                genesisGasLimit: i,
                genesisDifficulty: a,
                genesisNonce: s,
                genesisExtraData: c,
                genesisHash: u,
                genesisStateRoot: f,
                minGasLimit: d,
                gasLimitBoundDivisor: l,
                minimumDifficulty: h,
                difficultyBoundDivisor: p,
                durationLimit: g,
                maximumExtraDataSize: v,
                epochDuration: m,
                stackLimit: y,
                callCreateDepth: b,
                tierStepGas: w,
                expGas: k,
                expByteGas: _,
                sha3Gas: E,
                sha3WordGas: x,
                sloadGas: T,
                sstoreSetGas: A,
                sstoreResetGas: O,
                sstoreRefundGas: P,
                jumpdestGas: R,
                logGas: C,
                logDataGas: S,
                logTopicGas: L,
                createGas: N,
                callGas: B,
                callStipend: j,
                callValueTransferGas: I,
                callNewAccountGas: D,
                suicideRefundGas: M,
                memoryGas: U,
                quadCoeffDiv: G,
                createDataGas: F,
                txGas: K,
                txCreation: q,
                txDataZeroGas: H,
                txDataNonZeroGas: V,
                copyGas: z,
                ecrecoverGas: W,
                sha256Gas: J,
                sha256WordGas: Z,
                ripemd160Gas: Y,
                ripemd160WordGas: X,
                identityGas: $,
                identityWordGas: Q,
                minerReward: ee,
                ommerReward: te,
                niblingReward: re,
                homeSteadForkNumber: ne,
                homesteadRepriceForkNumber: oe,
                timebombPeriod: ie,
                freeBlockPeriod: ae
            }
              , ce = Object(n.k)(Object.freeze({
                __proto__: null,
                genesisGasLimit: i,
                genesisDifficulty: a,
                genesisNonce: s,
                genesisExtraData: c,
                genesisHash: u,
                genesisStateRoot: f,
                minGasLimit: d,
                gasLimitBoundDivisor: l,
                minimumDifficulty: h,
                difficultyBoundDivisor: p,
                durationLimit: g,
                maximumExtraDataSize: v,
                epochDuration: m,
                stackLimit: y,
                callCreateDepth: b,
                tierStepGas: w,
                expGas: k,
                expByteGas: _,
                sha3Gas: E,
                sha3WordGas: x,
                sloadGas: T,
                sstoreSetGas: A,
                sstoreResetGas: O,
                sstoreRefundGas: P,
                jumpdestGas: R,
                logGas: C,
                logDataGas: S,
                logTopicGas: L,
                createGas: N,
                callGas: B,
                callStipend: j,
                callValueTransferGas: I,
                callNewAccountGas: D,
                suicideRefundGas: M,
                memoryGas: U,
                quadCoeffDiv: G,
                createDataGas: F,
                txGas: K,
                txCreation: q,
                txDataZeroGas: H,
                txDataNonZeroGas: V,
                copyGas: z,
                ecrecoverGas: W,
                sha256Gas: J,
                sha256WordGas: Z,
                ripemd160Gas: Y,
                ripemd160WordGas: X,
                identityGas: $,
                identityWordGas: Q,
                minerReward: ee,
                ommerReward: te,
                niblingReward: re,
                homeSteadForkNumber: ne,
                homesteadRepriceForkNumber: oe,
                timebombPeriod: ie,
                freeBlockPeriod: ae,
                default: se
            }))
              , ue = o.c.BN
              , fe = new ue("7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0",16)
              , de = function() {
                function t(r) {
                    !function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    r = r || {};
                    var n = [{
                        name: "nonce",
                        length: 32,
                        allowLess: !0,
                        default: new e([])
                    }, {
                        name: "gasPrice",
                        length: 32,
                        allowLess: !0,
                        default: new e([])
                    }, {
                        name: "gasLimit",
                        alias: "gas",
                        length: 32,
                        allowLess: !0,
                        default: new e([])
                    }, {
                        name: "to",
                        allowZero: !0,
                        length: 20,
                        default: new e([])
                    }, {
                        name: "value",
                        length: 32,
                        allowLess: !0,
                        default: new e([])
                    }, {
                        name: "data",
                        alias: "input",
                        allowZero: !0,
                        default: new e([])
                    }, {
                        name: "v",
                        allowZero: !0,
                        default: new e([28])
                    }, {
                        name: "r",
                        length: 32,
                        allowZero: !0,
                        allowLess: !0,
                        default: new e([])
                    }, {
                        name: "s",
                        length: 32,
                        allowZero: !0,
                        allowLess: !0,
                        default: new e([])
                    }];
                    o.c.defineProperties(this, n, r),
                    Object.defineProperty(this, "from", {
                        enumerable: !0,
                        configurable: !0,
                        get: this.getSenderAddress.bind(this)
                    });
                    var i = o.c.bufferToInt(this.v)
                      , a = Math.floor((i - 35) / 2);
                    a < 0 && (a = 0),
                    this._chainId = a || r.chainId || 0,
                    this._homestead = !0
                }
                return t.prototype.toCreationAddress = function() {
                    return "" === this.to.toString("hex")
                }
                ,
                t.prototype.hash = function(e) {
                    void 0 === e && (e = !0);
                    var t = void 0;
                    if (e)
                        t = this.raw;
                    else if (this._chainId > 0) {
                        var r = this.raw.slice();
                        this.v = this._chainId,
                        this.r = 0,
                        this.s = 0,
                        t = this.raw,
                        this.raw = r
                    } else
                        t = this.raw.slice(0, 6);
                    return o.c.rlphash(t)
                }
                ,
                t.prototype.getChainId = function() {
                    return this._chainId
                }
                ,
                t.prototype.getSenderAddress = function() {
                    if (this._from)
                        return this._from;
                    var e = this.getSenderPublicKey();
                    return this._from = o.c.publicToAddress(e),
                    this._from
                }
                ,
                t.prototype.getSenderPublicKey = function() {
                    if (!(this._senderPubKey && this._senderPubKey.length || this.verifySignature()))
                        throw new Error("Invalid Signature");
                    return this._senderPubKey
                }
                ,
                t.prototype.verifySignature = function() {
                    var e = this.hash(!1);
                    if (this._homestead && 1 === new ue(this.s).cmp(fe))
                        return !1;
                    try {
                        var t = o.c.bufferToInt(this.v);
                        this._chainId > 0 && (t -= 2 * this._chainId + 8),
                        this._senderPubKey = o.c.ecrecover(e, t, this.r, this.s)
                    } catch (e) {
                        return !1
                    }
                    return !!this._senderPubKey
                }
                ,
                t.prototype.sign = function(e) {
                    var t = this.hash(!1)
                      , r = o.c.ecsign(t, e);
                    this._chainId > 0 && (r.v += 2 * this._chainId + 8),
                    Object.assign(this, r)
                }
                ,
                t.prototype.getDataFee = function() {
                    for (var e = this.raw[5], t = new ue(0), r = 0; r < e.length; r++)
                        0 === e[r] ? t.iaddn(ce.txDataZeroGas.v) : t.iaddn(ce.txDataNonZeroGas.v);
                    return t
                }
                ,
                t.prototype.getBaseFee = function() {
                    var e = this.getDataFee().iaddn(ce.txGas.v);
                    return this._homestead && this.toCreationAddress() && e.iaddn(ce.txCreation.v),
                    e
                }
                ,
                t.prototype.getUpfrontCost = function() {
                    return new ue(this.gasLimit).imul(new ue(this.gasPrice)).iadd(new ue(this.value))
                }
                ,
                t.prototype.validate = function(e) {
                    var t = [];
                    return this.verifySignature() || t.push("Invalid Signature"),
                    this.getBaseFee().cmp(new ue(this.gasLimit)) > 0 && t.push(["gas limit is too low. Need at least " + this.getBaseFee()]),
                    void 0 === e || !1 === e ? 0 === t.length : t.join(" ")
                }
                ,
                t
            }()
        }
        ).call(this, r(10).Buffer)
    },
    687: function(e, t, r) {
        "use strict";
        var n = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , o = r(320)
          , i = o.keccak224
          , a = o.keccak384
          , s = o.keccak256
          , c = o.keccak512
          , u = r(688)
          , f = r(173)
          , d = r(133)
          , l = r(6)
          , h = r(77)
          , p = r(17).Buffer;
        Object.assign(t, r(95)),
        t.MAX_INTEGER = new l("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",16),
        t.TWO_POW256 = new l("10000000000000000000000000000000000000000000000000000000000000000",16),
        t.KECCAK256_NULL_S = "c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
        t.SHA3_NULL_S = t.KECCAK256_NULL_S,
        t.KECCAK256_NULL = p.from(t.KECCAK256_NULL_S, "hex"),
        t.SHA3_NULL = t.KECCAK256_NULL,
        t.KECCAK256_RLP_ARRAY_S = "1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
        t.SHA3_RLP_ARRAY_S = t.KECCAK256_RLP_ARRAY_S,
        t.KECCAK256_RLP_ARRAY = p.from(t.KECCAK256_RLP_ARRAY_S, "hex"),
        t.SHA3_RLP_ARRAY = t.KECCAK256_RLP_ARRAY,
        t.KECCAK256_RLP_S = "56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
        t.SHA3_RLP_S = t.KECCAK256_RLP_S,
        t.KECCAK256_RLP = p.from(t.KECCAK256_RLP_S, "hex"),
        t.SHA3_RLP = t.KECCAK256_RLP,
        t.BN = l,
        t.rlp = d,
        t.secp256k1 = u,
        t.zeros = function(e) {
            return p.allocUnsafe(e).fill(0)
        }
        ,
        t.zeroAddress = function() {
            var e = t.zeros(20);
            return t.bufferToHex(e)
        }
        ,
        t.setLengthLeft = t.setLength = function(e, r, n) {
            var o = t.zeros(r);
            return e = t.toBuffer(e),
            n ? e.length < r ? (e.copy(o),
            o) : e.slice(0, r) : e.length < r ? (e.copy(o, r - e.length),
            o) : e.slice(-r)
        }
        ,
        t.setLengthRight = function(e, r) {
            return t.setLength(e, r, !0)
        }
        ,
        t.unpad = t.stripZeros = function(e) {
            for (var r = (e = t.stripHexPrefix(e))[0]; e.length > 0 && "0" === r.toString(); )
                r = (e = e.slice(1))[0];
            return e
        }
        ,
        t.toBuffer = function(e) {
            if (!p.isBuffer(e))
                if (Array.isArray(e))
                    e = p.from(e);
                else if ("string" === typeof e)
                    e = t.isHexString(e) ? p.from(t.padToEven(t.stripHexPrefix(e)), "hex") : p.from(e);
                else if ("number" === typeof e)
                    e = t.intToBuffer(e);
                else if (null === e || void 0 === e)
                    e = p.allocUnsafe(0);
                else if (l.isBN(e))
                    e = e.toArrayLike(p);
                else {
                    if (!e.toArray)
                        throw new Error("invalid type");
                    e = p.from(e.toArray())
                }
            return e
        }
        ,
        t.bufferToInt = function(e) {
            return new l(t.toBuffer(e)).toNumber()
        }
        ,
        t.bufferToHex = function(e) {
            return "0x" + (e = t.toBuffer(e)).toString("hex")
        }
        ,
        t.fromSigned = function(e) {
            return new l(e).fromTwos(256)
        }
        ,
        t.toUnsigned = function(e) {
            return p.from(e.toTwos(256).toArray())
        }
        ,
        t.keccak = function(e, r) {
            switch (e = t.toBuffer(e),
            r || (r = 256),
            r) {
            case 224:
                return i(e);
            case 256:
                return s(e);
            case 384:
                return a(e);
            case 512:
                return c(e);
            default:
                throw new Error("Invald algorithm: keccak" + r)
            }
        }
        ,
        t.keccak256 = function(e) {
            return t.keccak(e)
        }
        ,
        t.sha3 = t.keccak,
        t.sha256 = function(e) {
            return e = t.toBuffer(e),
            h("sha256").update(e).digest()
        }
        ,
        t.ripemd160 = function(e, r) {
            e = t.toBuffer(e);
            var n = h("rmd160").update(e).digest();
            return !0 === r ? t.setLength(n, 32) : n
        }
        ,
        t.rlphash = function(e) {
            return t.keccak(d.encode(e))
        }
        ,
        t.isValidPrivate = function(e) {
            return u.privateKeyVerify(e)
        }
        ,
        t.isValidPublic = function(e, t) {
            return 64 === e.length ? u.publicKeyVerify(p.concat([p.from([4]), e])) : !!t && u.publicKeyVerify(e)
        }
        ,
        t.pubToAddress = t.publicToAddress = function(e, r) {
            return e = t.toBuffer(e),
            r && 64 !== e.length && (e = u.publicKeyConvert(e, !1).slice(1)),
            f(64 === e.length),
            t.keccak(e).slice(-20)
        }
        ;
        var g = t.privateToPublic = function(e) {
            return e = t.toBuffer(e),
            u.publicKeyCreate(e, !1).slice(1)
        }
        ;
        t.importPublic = function(e) {
            return 64 !== (e = t.toBuffer(e)).length && (e = u.publicKeyConvert(e, !1).slice(1)),
            e
        }
        ,
        t.ecsign = function(e, t) {
            var r = u.sign(e, t)
              , n = {};
            return n.r = r.signature.slice(0, 32),
            n.s = r.signature.slice(32, 64),
            n.v = r.recovery + 27,
            n
        }
        ,
        t.hashPersonalMessage = function(e) {
            var r = t.toBuffer("\x19Ethereum Signed Message:\n" + e.length.toString());
            return t.keccak(p.concat([r, e]))
        }
        ,
        t.ecrecover = function(e, r, n, o) {
            var i = p.concat([t.setLength(n, 32), t.setLength(o, 32)], 64)
              , a = r - 27;
            if (0 !== a && 1 !== a)
                throw new Error("Invalid signature v value");
            var s = u.recover(e, i, a);
            return u.publicKeyConvert(s, !1).slice(1)
        }
        ,
        t.toRpcSig = function(e, r, n) {
            if (27 !== e && 28 !== e)
                throw new Error("Invalid recovery id");
            return t.bufferToHex(p.concat([t.setLengthLeft(r, 32), t.setLengthLeft(n, 32), t.toBuffer(e - 27)]))
        }
        ,
        t.fromRpcSig = function(e) {
            if (65 !== (e = t.toBuffer(e)).length)
                throw new Error("Invalid signature length");
            var r = e[64];
            return r < 27 && (r += 27),
            {
                v: r,
                r: e.slice(0, 32),
                s: e.slice(32, 64)
            }
        }
        ,
        t.privateToAddress = function(e) {
            return t.publicToAddress(g(e))
        }
        ,
        t.isValidAddress = function(e) {
            return /^0x[0-9a-fA-F]{40}$/.test(e)
        }
        ,
        t.isZeroAddress = function(e) {
            return t.zeroAddress() === t.addHexPrefix(e)
        }
        ,
        t.toChecksumAddress = function(e) {
            e = t.stripHexPrefix(e).toLowerCase();
            for (var r = t.keccak(e).toString("hex"), n = "0x", o = 0; o < e.length; o++)
                parseInt(r[o], 16) >= 8 ? n += e[o].toUpperCase() : n += e[o];
            return n
        }
        ,
        t.isValidChecksumAddress = function(e) {
            return t.isValidAddress(e) && t.toChecksumAddress(e) === e
        }
        ,
        t.generateAddress = function(e, r) {
            return e = t.toBuffer(e),
            r = (r = new l(r)).isZero() ? null : p.from(r.toArray()),
            t.rlphash([e, r]).slice(-20)
        }
        ,
        t.isPrecompiled = function(e) {
            var r = t.unpad(e);
            return 1 === r.length && r[0] >= 1 && r[0] <= 8
        }
        ,
        t.addHexPrefix = function(e) {
            return "string" !== typeof e || t.isHexPrefixed(e) ? e : "0x" + e
        }
        ,
        t.isValidSignature = function(e, t, r, n) {
            var o = new l("7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0",16)
              , i = new l("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141",16);
            return 32 === t.length && 32 === r.length && ((27 === e || 28 === e) && (t = new l(t),
            r = new l(r),
            !(t.isZero() || t.gt(i) || r.isZero() || r.gt(i)) && (!1 !== n || 1 !== new l(r).cmp(o))))
        }
        ,
        t.baToJSON = function(e) {
            if (p.isBuffer(e))
                return "0x" + e.toString("hex");
            if (e instanceof Array) {
                for (var r = [], n = 0; n < e.length; n++)
                    r.push(t.baToJSON(e[n]));
                return r
            }
        }
        ,
        t.defineProperties = function(e, r, o) {
            if (e.raw = [],
            e._fields = [],
            e.toJSON = function(r) {
                if (r) {
                    var n = {};
                    return e._fields.forEach((function(t) {
                        n[t] = "0x" + e[t].toString("hex")
                    }
                    )),
                    n
                }
                return t.baToJSON(this.raw)
            }
            ,
            e.serialize = function() {
                return d.encode(e.raw)
            }
            ,
            r.forEach((function(r, n) {
                function o() {
                    return e.raw[n]
                }
                function i(o) {
                    "00" !== (o = t.toBuffer(o)).toString("hex") || r.allowZero || (o = p.allocUnsafe(0)),
                    r.allowLess && r.length ? (o = t.stripZeros(o),
                    f(r.length >= o.length, "The field " + r.name + " must not have more " + r.length + " bytes")) : r.allowZero && 0 === o.length || !r.length || f(r.length === o.length, "The field " + r.name + " must have byte length of " + r.length),
                    e.raw[n] = o
                }
                e._fields.push(r.name),
                Object.defineProperty(e, r.name, {
                    enumerable: !0,
                    configurable: !0,
                    get: o,
                    set: i
                }),
                r.default && (e[r.name] = r.default),
                r.alias && Object.defineProperty(e, r.alias, {
                    enumerable: !1,
                    configurable: !0,
                    set: i,
                    get: o
                })
            }
            )),
            o)
                if ("string" === typeof o && (o = p.from(t.stripHexPrefix(o), "hex")),
                p.isBuffer(o) && (o = d.decode(o)),
                Array.isArray(o)) {
                    if (o.length > e._fields.length)
                        throw new Error("wrong number of fields in data");
                    o.forEach((function(r, n) {
                        e[e._fields[n]] = t.toBuffer(r)
                    }
                    ))
                } else {
                    if ("object" !== ("undefined" === typeof o ? "undefined" : n(o)))
                        throw new Error("invalid data");
                    var i = Object.keys(o);
                    r.forEach((function(t) {
                        -1 !== i.indexOf(t.name) && (e[t.name] = o[t.name]),
                        -1 !== i.indexOf(t.alias) && (e[t.alias] = o[t.alias])
                    }
                    ))
                }
        }
    },
    688: function(e, t, r) {
        "use strict";
        (function(t) {
            var n = r(319)
              , o = r(689)
              , i = r(690)
              , a = function(e) {
                return 32 === e.length && n.privateKeyVerify(Uint8Array.from(e))
            };
            e.exports = {
                privateKeyVerify: a,
                privateKeyExport: function(e, t) {
                    if (32 !== e.length)
                        throw new RangeError("private key length is invalid");
                    var r = o.privateKeyExport(e, t);
                    return i.privateKeyExport(e, r, t)
                },
                privateKeyImport: function(e) {
                    if (null !== (e = i.privateKeyImport(e)) && 32 === e.length && a(e))
                        return e;
                    throw new Error("couldn't import from DER format")
                },
                privateKeyNegate: function(e) {
                    return t.from(n.privateKeyNegate(Uint8Array.from(e)))
                },
                privateKeyModInverse: function(e) {
                    if (32 !== e.length)
                        throw new Error("private key length is invalid");
                    return t.from(o.privateKeyModInverse(Uint8Array.from(e)))
                },
                privateKeyTweakAdd: function(e, r) {
                    return t.from(n.privateKeyTweakAdd(Uint8Array.from(e), r))
                },
                privateKeyTweakMul: function(e, r) {
                    return t.from(n.privateKeyTweakMul(Uint8Array.from(e), Uint8Array.from(r)))
                },
                publicKeyCreate: function(e, r) {
                    return t.from(n.publicKeyCreate(Uint8Array.from(e), r))
                },
                publicKeyConvert: function(e, r) {
                    return t.from(n.publicKeyConvert(Uint8Array.from(e), r))
                },
                publicKeyVerify: function(e) {
                    return (33 === e.length || 65 === e.length) && n.publicKeyVerify(Uint8Array.from(e))
                },
                publicKeyTweakAdd: function(e, r, o) {
                    return t.from(n.publicKeyTweakAdd(Uint8Array.from(e), Uint8Array.from(r), o))
                },
                publicKeyTweakMul: function(e, r, o) {
                    return t.from(n.publicKeyTweakMul(Uint8Array.from(e), Uint8Array.from(r), o))
                },
                publicKeyCombine: function(e, r) {
                    var o = [];
                    return e.forEach((function(e) {
                        o.push(Uint8Array.from(e))
                    }
                    )),
                    t.from(n.publicKeyCombine(o, r))
                },
                signatureNormalize: function(e) {
                    return t.from(n.signatureNormalize(Uint8Array.from(e)))
                },
                signatureExport: function(e) {
                    return t.from(n.signatureExport(Uint8Array.from(e)))
                },
                signatureImport: function(e) {
                    return t.from(n.signatureImport(Uint8Array.from(e)))
                },
                signatureImportLax: function(e) {
                    if (0 === e.length)
                        throw new RangeError("signature length is invalid");
                    var t = i.signatureImportLax(e);
                    if (null === t)
                        throw new Error("couldn't parse DER signature");
                    return o.signatureImport(t)
                },
                sign: function(e, r, o) {
                    if (null === o)
                        throw new TypeError("options should be an Object");
                    var i = void 0;
                    if (o) {
                        if (i = {},
                        null === o.data)
                            throw new TypeError("options.data should be a Buffer");
                        if (o.data) {
                            if (32 !== o.data.length)
                                throw new RangeError("options.data length is invalid");
                            i.data = new Uint8Array(o.data)
                        }
                        if (null === o.noncefn)
                            throw new TypeError("options.noncefn should be a Function");
                        o.noncefn && (i.noncefn = function(e, r, n, i, a) {
                            var s = null != n ? t.from(n) : null
                              , c = null != i ? t.from(i) : null
                              , u = t.from("");
                            return o.noncefn && (u = o.noncefn(t.from(e), t.from(r), s, c, a)),
                            Uint8Array.from(u)
                        }
                        )
                    }
                    var a = n.ecdsaSign(Uint8Array.from(e), Uint8Array.from(r), i);
                    return {
                        signature: t.from(a.signature),
                        recovery: a.recid
                    }
                },
                verify: function(e, t, r) {
                    return n.ecdsaVerify(Uint8Array.from(t), Uint8Array.from(e), r)
                },
                recover: function(e, r, o, i) {
                    return t.from(n.ecdsaRecover(Uint8Array.from(r), o, Uint8Array.from(e), i))
                },
                ecdh: function(e, r) {
                    return t.from(n.ecdh(Uint8Array.from(e), Uint8Array.from(r), {}))
                },
                ecdhUnsafe: function(e, r, n) {
                    if (33 !== e.length && 65 !== e.length)
                        throw new RangeError("public key length is invalid");
                    if (32 !== r.length)
                        throw new RangeError("private key length is invalid");
                    return t.from(o.ecdhUnsafe(Uint8Array.from(e), Uint8Array.from(r), n))
                }
            }
        }
        ).call(this, r(10).Buffer)
    },
    689: function(e, t, r) {
        "use strict";
        (function(e) {
            var n = r(6)
              , o = new (0,
            r(78).ec)("secp256k1")
              , i = o.curve;
            t.privateKeyExport = function(e, t) {
                var r = new n(e);
                if (r.ucmp(i.n) >= 0)
                    throw new Error("couldn't export to DER format");
                var s = o.g.mul(r);
                return a(s.getX(), s.getY(), t)
            }
            ,
            t.privateKeyModInverse = function(t) {
                var r = new n(t);
                if (r.ucmp(i.n) >= 0 || r.isZero())
                    throw new Error("private key range is invalid");
                return r.invm(i.n).toArrayLike(e, "be", 32)
            }
            ,
            t.signatureImport = function(t) {
                var r = new n(t.r);
                r.ucmp(i.n) >= 0 && (r = new n(0));
                var o = new n(t.s);
                return o.ucmp(i.n) >= 0 && (o = new n(0)),
                e.concat([r.toArrayLike(e, "be", 32), o.toArrayLike(e, "be", 32)])
            }
            ,
            t.ecdhUnsafe = function(e, t, r) {
                var s = o.keyFromPublic(e)
                  , c = new n(t);
                if (c.ucmp(i.n) >= 0 || c.isZero())
                    throw new Error("scalar was invalid (zero or overflow)");
                var u = s.pub.mul(c);
                return a(u.getX(), u.getY(), r)
            }
            ;
            var a = function(t, r, n) {
                var o = void 0;
                return n ? ((o = e.alloc(33))[0] = r.isOdd() ? 3 : 2,
                t.toArrayLike(e, "be", 32).copy(o, 1)) : ((o = e.alloc(65))[0] = 4,
                t.toArrayLike(e, "be", 32).copy(o, 1),
                r.toArrayLike(e, "be", 32).copy(o, 33)),
                o
            }
        }
        ).call(this, r(10).Buffer)
    },
    690: function(e, t, r) {
        "use strict";
        (function(e) {
            var r = e.from([48, 129, 211, 2, 1, 1, 4, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 129, 133, 48, 129, 130, 2, 1, 1, 48, 44, 6, 7, 42, 134, 72, 206, 61, 1, 1, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 255, 255, 252, 47, 48, 6, 4, 1, 0, 4, 1, 7, 4, 33, 2, 121, 190, 102, 126, 249, 220, 187, 172, 85, 160, 98, 149, 206, 135, 11, 7, 2, 155, 252, 219, 45, 206, 40, 217, 89, 242, 129, 91, 22, 248, 23, 152, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 186, 174, 220, 230, 175, 72, 160, 59, 191, 210, 94, 140, 208, 54, 65, 65, 2, 1, 1, 161, 36, 3, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
              , n = e.from([48, 130, 1, 19, 2, 1, 1, 4, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 129, 165, 48, 129, 162, 2, 1, 1, 48, 44, 6, 7, 42, 134, 72, 206, 61, 1, 1, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 255, 255, 252, 47, 48, 6, 4, 1, 0, 4, 1, 7, 4, 65, 4, 121, 190, 102, 126, 249, 220, 187, 172, 85, 160, 98, 149, 206, 135, 11, 7, 2, 155, 252, 219, 45, 206, 40, 217, 89, 242, 129, 91, 22, 248, 23, 152, 72, 58, 218, 119, 38, 163, 196, 101, 93, 164, 251, 252, 14, 17, 8, 168, 253, 23, 180, 72, 166, 133, 84, 25, 156, 71, 208, 143, 251, 16, 212, 184, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 186, 174, 220, 230, 175, 72, 160, 59, 191, 210, 94, 140, 208, 54, 65, 65, 2, 1, 1, 161, 68, 3, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
            t.privateKeyExport = function(t, o, i) {
                var a = e.from(i ? r : n);
                return t.copy(a, i ? 8 : 9),
                o.copy(a, i ? 181 : 214),
                a
            }
            ,
            t.privateKeyImport = function(e) {
                var t = e.length
                  , r = 0;
                if (t < r + 1 || 48 !== e[r])
                    return null;
                if (t < (r += 1) + 1 || !(128 & e[r]))
                    return null;
                var n = 127 & e[r];
                if (n < 1 || n > 2)
                    return null;
                if (t < (r += 1) + n)
                    return null;
                var o = e[r + n - 1] | (n > 1 ? e[r + n - 2] << 8 : 0);
                return t < (r += n) + o || t < r + 3 || 2 !== e[r] || 1 !== e[r + 1] || 1 !== e[r + 2] || t < (r += 3) + 2 || 4 !== e[r] || e[r + 1] > 32 || t < r + 2 + e[r + 1] ? null : e.slice(r + 2, r + 2 + e[r + 1])
            }
            ,
            t.signatureImportLax = function(t) {
                var r = e.alloc(32, 0)
                  , n = e.alloc(32, 0)
                  , o = t.length
                  , i = 0;
                if (48 !== t[i++])
                    return null;
                var a = t[i++];
                if (128 & a && (i += a - 128) > o)
                    return null;
                if (2 !== t[i++])
                    return null;
                var s = t[i++];
                if (128 & s) {
                    if (i + (a = s - 128) > o)
                        return null;
                    for (; a > 0 && 0 === t[i]; i += 1,
                    a -= 1)
                        ;
                    for (s = 0; a > 0; i += 1,
                    a -= 1)
                        s = (s << 8) + t[i]
                }
                if (s > o - i)
                    return null;
                var c = i;
                if (i += s,
                2 !== t[i++])
                    return null;
                var u = t[i++];
                if (128 & u) {
                    if (i + (a = u - 128) > o)
                        return null;
                    for (; a > 0 && 0 === t[i]; i += 1,
                    a -= 1)
                        ;
                    for (u = 0; a > 0; i += 1,
                    a -= 1)
                        u = (u << 8) + t[i]
                }
                if (u > o - i)
                    return null;
                var f = i;
                for (i += u; s > 0 && 0 === t[c]; s -= 1,
                c += 1)
                    ;
                if (s > 32)
                    return null;
                var d = t.slice(c, c + s);
                for (d.copy(r, 32 - d.length); u > 0 && 0 === t[f]; u -= 1,
                f += 1)
                    ;
                if (u > 32)
                    return null;
                var l = t.slice(f, f + u);
                return l.copy(n, 32 - l.length),
                {
                    r: r,
                    s: n
                }
            }
        }
        ).call(this, r(10).Buffer)
    }
}]);
//# sourceMappingURL=7.529f2de9.chunk.js.map
