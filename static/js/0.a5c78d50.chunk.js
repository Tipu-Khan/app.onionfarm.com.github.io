(this["webpackJsonpgoose-frontend"] = this["webpackJsonpgoose-frontend"] || []).push([[0], {
    664: function(t, e, r) {
        "use strict";
        (function(t, n, i) {
            r.d(e, "a", (function() {
                return La
            }
            )),
            r.d(e, "b", (function() {
                return mo
            }
            )),
            r.d(e, "c", (function() {
                return Hi
            }
            )),
            r.d(e, "d", (function() {
                return jf
            }
            )),
            r.d(e, "e", (function() {
                return as
            }
            )),
            r.d(e, "f", (function() {
                return Qo
            }
            )),
            r.d(e, "g", (function() {
                return Zi
            }
            )),
            r.d(e, "h", (function() {
                return Ui
            }
            )),
            r.d(e, "i", (function() {
                return Oe
            }
            )),
            r.d(e, "j", (function() {
                return Wi
            }
            )),
            r.d(e, "k", (function() {
                return Gi
            }
            )),
            r.d(e, "l", (function() {
                return Io
            }
            )),
            r.d(e, "m", (function() {
                return L
            }
            )),
            r.d(e, "n", (function() {
                return Pf
            }
            )),
            r.d(e, "o", (function() {
                return ni
            }
            )),
            r.d(e, "p", (function() {
                return Di
            }
            )),
            r.d(e, "q", (function() {
                return Bf
            }
            )),
            r.d(e, "r", (function() {
                return Ni
            }
            )),
            r.d(e, "s", (function() {
                return bo
            }
            )),
            r.d(e, "t", (function() {
                return li
            }
            )),
            r.d(e, "u", (function() {
                return Of
            }
            ));
            var a = r(4)
              , f = r.n(a)
              , o = r(15)
              , s = r(2)
              , c = r(5)
              , u = r(175)
              , d = r(57)
              , h = r(36)
              , l = r(8)
              , b = r(9)
              , p = r(66)
              , v = r(10)
              , _ = r.n(v)
              , y = r(128)
              , m = r.n(y)
              , g = r(107)
              , w = r.n(g)
              , A = r(67)
              , E = r.n(A)
              , I = r(173)
              , M = r.n(I)
              , S = r(172)
              , k = r.n(S)
              , L = Object(p.g)((function(t, e) {
                var r = _.a.Buffer;
                function n(t, e) {
                    for (var r in t)
                        e[r] = t[r]
                }
                function i(t, e, n) {
                    return r(t, e, n)
                }
                r.from && r.alloc && r.allocUnsafe && r.allocUnsafeSlow ? t.exports = _.a : (n(_.a, e),
                e.Buffer = i),
                i.prototype = Object.create(r.prototype),
                n(r, i),
                i.from = function(t, e, n) {
                    if ("number" == typeof t)
                        throw new TypeError("Argument must not be a number");
                    return r(t, e, n)
                }
                ,
                i.alloc = function(t, e, n) {
                    if ("number" != typeof t)
                        throw new TypeError("Argument must be a number");
                    var i = r(t);
                    return void 0 !== e ? "string" == typeof n ? i.fill(e, n) : i.fill(e) : i.fill(0),
                    i
                }
                ,
                i.allocUnsafe = function(t) {
                    if ("number" != typeof t)
                        throw new TypeError("Argument must be a number");
                    return r(t)
                }
                ,
                i.allocUnsafeSlow = function(t) {
                    if ("number" != typeof t)
                        throw new TypeError("Argument must be a number");
                    return _.a.SlowBuffer(t)
                }
            }
            ))
              , x = (L.Buffer,
            Object(p.g)((function(t) {
                "function" == typeof Object.create ? t.exports = function(t, e) {
                    e && (t.super_ = e,
                    t.prototype = Object.create(e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }))
                }
                : t.exports = function(t, e) {
                    if (e) {
                        t.super_ = e;
                        var r = function() {};
                        r.prototype = e.prototype,
                        t.prototype = new r,
                        t.prototype.constructor = t
                    }
                }
            }
            )))
              , P = L.Buffer
              , T = m.a.Transform
              , R = L.Buffer
              , j = m.a.Transform
              , O = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648]
              , C = function(t) {
                for (var e = 0; e < 24; ++e) {
                    var r = t[0] ^ t[10] ^ t[20] ^ t[30] ^ t[40]
                      , n = t[1] ^ t[11] ^ t[21] ^ t[31] ^ t[41]
                      , i = t[2] ^ t[12] ^ t[22] ^ t[32] ^ t[42]
                      , a = t[3] ^ t[13] ^ t[23] ^ t[33] ^ t[43]
                      , f = t[4] ^ t[14] ^ t[24] ^ t[34] ^ t[44]
                      , o = t[5] ^ t[15] ^ t[25] ^ t[35] ^ t[45]
                      , s = t[6] ^ t[16] ^ t[26] ^ t[36] ^ t[46]
                      , c = t[7] ^ t[17] ^ t[27] ^ t[37] ^ t[47]
                      , u = t[8] ^ t[18] ^ t[28] ^ t[38] ^ t[48]
                      , d = t[9] ^ t[19] ^ t[29] ^ t[39] ^ t[49]
                      , h = u ^ (i << 1 | a >>> 31)
                      , l = d ^ (a << 1 | i >>> 31)
                      , b = t[0] ^ h
                      , p = t[1] ^ l
                      , v = t[10] ^ h
                      , _ = t[11] ^ l
                      , y = t[20] ^ h
                      , m = t[21] ^ l
                      , g = t[30] ^ h
                      , w = t[31] ^ l
                      , A = t[40] ^ h
                      , E = t[41] ^ l;
                    h = r ^ (f << 1 | o >>> 31),
                    l = n ^ (o << 1 | f >>> 31);
                    var I = t[2] ^ h
                      , M = t[3] ^ l
                      , S = t[12] ^ h
                      , k = t[13] ^ l
                      , L = t[22] ^ h
                      , x = t[23] ^ l
                      , P = t[32] ^ h
                      , T = t[33] ^ l
                      , R = t[42] ^ h
                      , j = t[43] ^ l;
                    h = i ^ (s << 1 | c >>> 31),
                    l = a ^ (c << 1 | s >>> 31);
                    var C = t[4] ^ h
                      , B = t[5] ^ l
                      , N = t[14] ^ h
                      , z = t[15] ^ l
                      , D = t[24] ^ h
                      , K = t[25] ^ l
                      , V = t[34] ^ h
                      , U = t[35] ^ l
                      , q = t[44] ^ h
                      , Y = t[45] ^ l;
                    h = f ^ (u << 1 | d >>> 31),
                    l = o ^ (d << 1 | u >>> 31);
                    var F = t[6] ^ h
                      , H = t[7] ^ l
                      , G = t[16] ^ h
                      , W = t[17] ^ l
                      , Z = t[26] ^ h
                      , J = t[27] ^ l
                      , X = t[36] ^ h
                      , $ = t[37] ^ l
                      , Q = t[46] ^ h
                      , tt = t[47] ^ l;
                    h = s ^ (r << 1 | n >>> 31),
                    l = c ^ (n << 1 | r >>> 31);
                    var et = t[8] ^ h
                      , rt = t[9] ^ l
                      , nt = t[18] ^ h
                      , it = t[19] ^ l
                      , at = t[28] ^ h
                      , ft = t[29] ^ l
                      , ot = t[38] ^ h
                      , st = t[39] ^ l
                      , ct = t[48] ^ h
                      , ut = t[49] ^ l
                      , dt = b
                      , ht = p
                      , lt = _ << 4 | v >>> 28
                      , bt = v << 4 | _ >>> 28
                      , pt = y << 3 | m >>> 29
                      , vt = m << 3 | y >>> 29
                      , _t = w << 9 | g >>> 23
                      , yt = g << 9 | w >>> 23
                      , mt = A << 18 | E >>> 14
                      , gt = E << 18 | A >>> 14
                      , wt = I << 1 | M >>> 31
                      , At = M << 1 | I >>> 31
                      , Et = k << 12 | S >>> 20
                      , It = S << 12 | k >>> 20
                      , Mt = L << 10 | x >>> 22
                      , St = x << 10 | L >>> 22
                      , kt = T << 13 | P >>> 19
                      , Lt = P << 13 | T >>> 19
                      , xt = R << 2 | j >>> 30
                      , Pt = j << 2 | R >>> 30
                      , Tt = B << 30 | C >>> 2
                      , Rt = C << 30 | B >>> 2
                      , jt = N << 6 | z >>> 26
                      , Ot = z << 6 | N >>> 26
                      , Ct = K << 11 | D >>> 21
                      , Bt = D << 11 | K >>> 21
                      , Nt = V << 15 | U >>> 17
                      , zt = U << 15 | V >>> 17
                      , Dt = Y << 29 | q >>> 3
                      , Kt = q << 29 | Y >>> 3
                      , Vt = F << 28 | H >>> 4
                      , Ut = H << 28 | F >>> 4
                      , qt = W << 23 | G >>> 9
                      , Yt = G << 23 | W >>> 9
                      , Ft = Z << 25 | J >>> 7
                      , Ht = J << 25 | Z >>> 7
                      , Gt = X << 21 | $ >>> 11
                      , Wt = $ << 21 | X >>> 11
                      , Zt = tt << 24 | Q >>> 8
                      , Jt = Q << 24 | tt >>> 8
                      , Xt = et << 27 | rt >>> 5
                      , $t = rt << 27 | et >>> 5
                      , Qt = nt << 20 | it >>> 12
                      , te = it << 20 | nt >>> 12
                      , ee = ft << 7 | at >>> 25
                      , re = at << 7 | ft >>> 25
                      , ne = ot << 8 | st >>> 24
                      , ie = st << 8 | ot >>> 24
                      , ae = ct << 14 | ut >>> 18
                      , fe = ut << 14 | ct >>> 18;
                    t[0] = dt ^ ~Et & Ct,
                    t[1] = ht ^ ~It & Bt,
                    t[10] = Vt ^ ~Qt & pt,
                    t[11] = Ut ^ ~te & vt,
                    t[20] = wt ^ ~jt & Ft,
                    t[21] = At ^ ~Ot & Ht,
                    t[30] = Xt ^ ~lt & Mt,
                    t[31] = $t ^ ~bt & St,
                    t[40] = Tt ^ ~qt & ee,
                    t[41] = Rt ^ ~Yt & re,
                    t[2] = Et ^ ~Ct & Gt,
                    t[3] = It ^ ~Bt & Wt,
                    t[12] = Qt ^ ~pt & kt,
                    t[13] = te ^ ~vt & Lt,
                    t[22] = jt ^ ~Ft & ne,
                    t[23] = Ot ^ ~Ht & ie,
                    t[32] = lt ^ ~Mt & Nt,
                    t[33] = bt ^ ~St & zt,
                    t[42] = qt ^ ~ee & _t,
                    t[43] = Yt ^ ~re & yt,
                    t[4] = Ct ^ ~Gt & ae,
                    t[5] = Bt ^ ~Wt & fe,
                    t[14] = pt ^ ~kt & Dt,
                    t[15] = vt ^ ~Lt & Kt,
                    t[24] = Ft ^ ~ne & mt,
                    t[25] = Ht ^ ~ie & gt,
                    t[34] = Mt ^ ~Nt & Zt,
                    t[35] = St ^ ~zt & Jt,
                    t[44] = ee ^ ~_t & xt,
                    t[45] = re ^ ~yt & Pt,
                    t[6] = Gt ^ ~ae & dt,
                    t[7] = Wt ^ ~fe & ht,
                    t[16] = kt ^ ~Dt & Vt,
                    t[17] = Lt ^ ~Kt & Ut,
                    t[26] = ne ^ ~mt & wt,
                    t[27] = ie ^ ~gt & At,
                    t[36] = Nt ^ ~Zt & Xt,
                    t[37] = zt ^ ~Jt & $t,
                    t[46] = _t ^ ~xt & Tt,
                    t[47] = yt ^ ~Pt & Rt,
                    t[8] = ae ^ ~dt & Et,
                    t[9] = fe ^ ~ht & It,
                    t[18] = Dt ^ ~Vt & Qt,
                    t[19] = Kt ^ ~Ut & te,
                    t[28] = mt ^ ~wt & jt,
                    t[29] = gt ^ ~At & Ot,
                    t[38] = Zt ^ ~Xt & lt,
                    t[39] = Jt ^ ~$t & bt,
                    t[48] = xt ^ ~Tt & qt,
                    t[49] = Pt ^ ~Rt & Yt,
                    t[0] ^= O[2 * e],
                    t[1] ^= O[2 * e + 1]
                }
            }
              , B = L.Buffer;
            function N() {
                this.state = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                this.blockSize = null,
                this.count = 0,
                this.squeezing = !1
            }
            N.prototype.initialize = function(t, e) {
                for (var r = 0; r < 50; ++r)
                    this.state[r] = 0;
                this.blockSize = t / 8,
                this.count = 0,
                this.squeezing = !1
            }
            ,
            N.prototype.absorb = function(t) {
                for (var e = 0; e < t.length; ++e)
                    this.state[~~(this.count / 4)] ^= t[e] << this.count % 4 * 8,
                    this.count += 1,
                    this.count === this.blockSize && (C(this.state),
                    this.count = 0)
            }
            ,
            N.prototype.absorbLastFewBits = function(t) {
                this.state[~~(this.count / 4)] ^= t << this.count % 4 * 8,
                0 != (128 & t) && this.count === this.blockSize - 1 && C(this.state),
                this.state[~~((this.blockSize - 1) / 4)] ^= 128 << (this.blockSize - 1) % 4 * 8,
                C(this.state),
                this.count = 0,
                this.squeezing = !0
            }
            ,
            N.prototype.squeeze = function(t) {
                this.squeezing || this.absorbLastFewBits(1);
                for (var e = B.alloc(t), r = 0; r < t; ++r)
                    e[r] = this.state[~~(this.count / 4)] >>> this.count % 4 * 8 & 255,
                    this.count += 1,
                    this.count === this.blockSize && (C(this.state),
                    this.count = 0);
                return e
            }
            ,
            N.prototype.copy = function(t) {
                for (var e = 0; e < 50; ++e)
                    t.state[e] = this.state[e];
                t.blockSize = this.blockSize,
                t.count = this.count,
                t.squeezing = this.squeezing
            }
            ;
            var z = function(t) {
                var e = function(t) {
                    function e(e, r, n, i, a) {
                        T.call(this, a),
                        this._rate = e,
                        this._capacity = r,
                        this._delimitedSuffix = n,
                        this._hashBitLength = i,
                        this._options = a,
                        this._state = new t,
                        this._state.initialize(e, r),
                        this._finalized = !1
                    }
                    return x(e, T),
                    e.prototype._transform = function(t, e, r) {
                        var n = null;
                        try {
                            this.update(t, e)
                        } catch (t) {
                            n = t
                        }
                        r(n)
                    }
                    ,
                    e.prototype._flush = function(t) {
                        var e = null;
                        try {
                            this.push(this.digest())
                        } catch (t) {
                            e = t
                        }
                        t(e)
                    }
                    ,
                    e.prototype.update = function(t, e) {
                        if (!P.isBuffer(t) && "string" != typeof t)
                            throw new TypeError("Data must be a string or a buffer");
                        if (this._finalized)
                            throw new Error("Digest already called");
                        return P.isBuffer(t) || (t = P.from(t, e)),
                        this._state.absorb(t),
                        this
                    }
                    ,
                    e.prototype.digest = function(t) {
                        if (this._finalized)
                            throw new Error("Digest already called");
                        this._finalized = !0,
                        this._delimitedSuffix && this._state.absorbLastFewBits(this._delimitedSuffix);
                        var e = this._state.squeeze(this._hashBitLength / 8);
                        return void 0 !== t && (e = e.toString(t)),
                        this._resetState(),
                        e
                    }
                    ,
                    e.prototype._resetState = function() {
                        return this._state.initialize(this._rate, this._capacity),
                        this
                    }
                    ,
                    e.prototype._clone = function() {
                        var t = new e(this._rate,this._capacity,this._delimitedSuffix,this._hashBitLength,this._options);
                        return this._state.copy(t._state),
                        t._finalized = this._finalized,
                        t
                    }
                    ,
                    e
                }(t)
                  , r = function(t) {
                    function e(e, r, n, i) {
                        j.call(this, i),
                        this._rate = e,
                        this._capacity = r,
                        this._delimitedSuffix = n,
                        this._options = i,
                        this._state = new t,
                        this._state.initialize(e, r),
                        this._finalized = !1
                    }
                    return x(e, j),
                    e.prototype._transform = function(t, e, r) {
                        var n = null;
                        try {
                            this.update(t, e)
                        } catch (t) {
                            n = t
                        }
                        r(n)
                    }
                    ,
                    e.prototype._flush = function() {}
                    ,
                    e.prototype._read = function(t) {
                        this.push(this.squeeze(t))
                    }
                    ,
                    e.prototype.update = function(t, e) {
                        if (!R.isBuffer(t) && "string" != typeof t)
                            throw new TypeError("Data must be a string or a buffer");
                        if (this._finalized)
                            throw new Error("Squeeze already called");
                        return R.isBuffer(t) || (t = R.from(t, e)),
                        this._state.absorb(t),
                        this
                    }
                    ,
                    e.prototype.squeeze = function(t, e) {
                        this._finalized || (this._finalized = !0,
                        this._state.absorbLastFewBits(this._delimitedSuffix));
                        var r = this._state.squeeze(t);
                        return void 0 !== e && (r = r.toString(e)),
                        r
                    }
                    ,
                    e.prototype._resetState = function() {
                        return this._state.initialize(this._rate, this._capacity),
                        this
                    }
                    ,
                    e.prototype._clone = function() {
                        var t = new e(this._rate,this._capacity,this._delimitedSuffix,this._options);
                        return this._state.copy(t._state),
                        t._finalized = this._finalized,
                        t
                    }
                    ,
                    e
                }(t);
                return function(t, n) {
                    switch ("string" == typeof t ? t.toLowerCase() : t) {
                    case "keccak224":
                        return new e(1152,448,null,224,n);
                    case "keccak256":
                        return new e(1088,512,null,256,n);
                    case "keccak384":
                        return new e(832,768,null,384,n);
                    case "keccak512":
                        return new e(576,1024,null,512,n);
                    case "sha3-224":
                        return new e(1152,448,6,224,n);
                    case "sha3-256":
                        return new e(1088,512,6,256,n);
                    case "sha3-384":
                        return new e(832,768,6,384,n);
                    case "sha3-512":
                        return new e(576,1024,6,512,n);
                    case "shake128":
                        return new r(1344,256,31,n);
                    case "shake256":
                        return new r(1088,512,31,n);
                    default:
                        throw new Error("Invald algorithm: " + t)
                    }
                }
            }(N)
              , D = Object.prototype.toString
              , K = function(e, r) {
                if (!t.isBuffer(e))
                    throw TypeError(r)
            }
              , V = function(t, e, r) {
                if (t.length !== e)
                    throw RangeError(r)
            }
              , U = function(t, e, r, n) {
                if (t.length !== e && t.length !== r)
                    throw RangeError(n)
            }
              , q = function(t, e) {
                if (0 === t.length)
                    throw RangeError(e)
            }
              , Y = L.Buffer
              , F = function(t) {
                if (t.length < 8)
                    throw new Error("DER sequence length is too short");
                if (t.length > 72)
                    throw new Error("DER sequence length is too long");
                if (48 !== t[0])
                    throw new Error("Expected DER sequence");
                if (t[1] !== t.length - 2)
                    throw new Error("DER sequence length is invalid");
                if (2 !== t[2])
                    throw new Error("Expected DER integer");
                var e = t[3];
                if (0 === e)
                    throw new Error("R length is zero");
                if (5 + e >= t.length)
                    throw new Error("R length is too long");
                if (2 !== t[4 + e])
                    throw new Error("Expected DER integer (2)");
                var r = t[5 + e];
                if (0 === r)
                    throw new Error("S length is zero");
                if (6 + e + r !== t.length)
                    throw new Error("S length is invalid");
                if (128 & t[4])
                    throw new Error("R value is negative");
                if (e > 1 && 0 === t[4] && !(128 & t[5]))
                    throw new Error("R value excessively padded");
                if (128 & t[e + 6])
                    throw new Error("S value is negative");
                if (r > 1 && 0 === t[e + 6] && !(128 & t[e + 7]))
                    throw new Error("S value excessively padded");
                return {
                    r: t.slice(4, 4 + e),
                    s: t.slice(6 + e)
                }
            }
              , H = function(t, e) {
                var r = t.length
                  , n = e.length;
                if (0 === r)
                    throw new Error("R length is zero");
                if (0 === n)
                    throw new Error("S length is zero");
                if (r > 33)
                    throw new Error("R length is too long");
                if (n > 33)
                    throw new Error("S length is too long");
                if (128 & t[0])
                    throw new Error("R value is negative");
                if (128 & e[0])
                    throw new Error("S value is negative");
                if (r > 1 && 0 === t[0] && !(128 & t[1]))
                    throw new Error("R value excessively padded");
                if (n > 1 && 0 === e[0] && !(128 & e[1]))
                    throw new Error("S value excessively padded");
                var i = Y.allocUnsafe(6 + r + n);
                return i[0] = 48,
                i[1] = i.length - 2,
                i[2] = 2,
                i[3] = t.length,
                t.copy(i, 4),
                i[4 + r] = 2,
                i[5 + r] = e.length,
                e.copy(i, 6 + r),
                i
            }
              , G = L.Buffer
              , W = G.from([48, 129, 211, 2, 1, 1, 4, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 129, 133, 48, 129, 130, 2, 1, 1, 48, 44, 6, 7, 42, 134, 72, 206, 61, 1, 1, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 255, 255, 252, 47, 48, 6, 4, 1, 0, 4, 1, 7, 4, 33, 2, 121, 190, 102, 126, 249, 220, 187, 172, 85, 160, 98, 149, 206, 135, 11, 7, 2, 155, 252, 219, 45, 206, 40, 217, 89, 242, 129, 91, 22, 248, 23, 152, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 186, 174, 220, 230, 175, 72, 160, 59, 191, 210, 94, 140, 208, 54, 65, 65, 2, 1, 1, 161, 36, 3, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
              , Z = G.from([48, 130, 1, 19, 2, 1, 1, 4, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 129, 165, 48, 129, 162, 2, 1, 1, 48, 44, 6, 7, 42, 134, 72, 206, 61, 1, 1, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 255, 255, 252, 47, 48, 6, 4, 1, 0, 4, 1, 7, 4, 65, 4, 121, 190, 102, 126, 249, 220, 187, 172, 85, 160, 98, 149, 206, 135, 11, 7, 2, 155, 252, 219, 45, 206, 40, 217, 89, 242, 129, 91, 22, 248, 23, 152, 72, 58, 218, 119, 38, 163, 196, 101, 93, 164, 251, 252, 14, 17, 8, 168, 253, 23, 180, 72, 166, 133, 84, 25, 156, 71, 208, 143, 251, 16, 212, 184, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 186, 174, 220, 230, 175, 72, 160, 59, 191, 210, 94, 140, 208, 54, 65, 65, 2, 1, 1, 161, 68, 3, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
              , J = "scalar was invalid (zero or overflow)"
              , X = "nonce generation function failed or private key is invalid"
              , $ = {
                COMPRESSED_TYPE_INVALID: "compressed should be a boolean",
                EC_PRIVATE_KEY_TYPE_INVALID: "private key should be a Buffer",
                EC_PRIVATE_KEY_LENGTH_INVALID: "private key length is invalid",
                EC_PRIVATE_KEY_RANGE_INVALID: "private key range is invalid",
                EC_PRIVATE_KEY_TWEAK_ADD_FAIL: "tweak out of range or resulting private key is invalid",
                EC_PRIVATE_KEY_TWEAK_MUL_FAIL: "tweak out of range",
                EC_PRIVATE_KEY_EXPORT_DER_FAIL: "couldn't export to DER format",
                EC_PRIVATE_KEY_IMPORT_DER_FAIL: "couldn't import from DER format",
                EC_PUBLIC_KEYS_TYPE_INVALID: "public keys should be an Array",
                EC_PUBLIC_KEYS_LENGTH_INVALID: "public keys Array should have at least 1 element",
                EC_PUBLIC_KEY_TYPE_INVALID: "public key should be a Buffer",
                EC_PUBLIC_KEY_LENGTH_INVALID: "public key length is invalid",
                EC_PUBLIC_KEY_PARSE_FAIL: "the public key could not be parsed or is invalid",
                EC_PUBLIC_KEY_CREATE_FAIL: "private was invalid, try again",
                EC_PUBLIC_KEY_TWEAK_ADD_FAIL: "tweak out of range or resulting public key is invalid",
                EC_PUBLIC_KEY_TWEAK_MUL_FAIL: "tweak out of range",
                EC_PUBLIC_KEY_COMBINE_FAIL: "the sum of the public keys is not valid",
                ECDH_FAIL: J,
                ECDSA_SIGNATURE_TYPE_INVALID: "signature should be a Buffer",
                ECDSA_SIGNATURE_LENGTH_INVALID: "signature length is invalid",
                ECDSA_SIGNATURE_PARSE_FAIL: "couldn't parse signature",
                ECDSA_SIGNATURE_PARSE_DER_FAIL: "couldn't parse DER signature",
                ECDSA_SIGNATURE_SERIALIZE_DER_FAIL: "couldn't serialize signature to DER format",
                ECDSA_SIGN_FAIL: X,
                ECDSA_RECOVER_FAIL: "couldn't recover public key from signature",
                MSG32_TYPE_INVALID: "message should be a Buffer",
                MSG32_LENGTH_INVALID: "message length is invalid",
                OPTIONS_TYPE_INVALID: "options should be an Object",
                OPTIONS_DATA_TYPE_INVALID: "options.data should be a Buffer",
                OPTIONS_DATA_LENGTH_INVALID: "options.data length is invalid",
                OPTIONS_NONCEFN_TYPE_INVALID: "options.noncefn should be a Function",
                RECOVERY_ID_TYPE_INVALID: "recovery should be a Number",
                RECOVERY_ID_VALUE_INVALID: "recovery should have value between -1 and 4",
                TWEAK_TYPE_INVALID: "tweak should be a Buffer",
                TWEAK_LENGTH_INVALID: "tweak length is invalid"
            }
              , Q = Object(p.k)(Object.freeze({
                __proto__: null,
                COMPRESSED_TYPE_INVALID: "compressed should be a boolean",
                EC_PRIVATE_KEY_TYPE_INVALID: "private key should be a Buffer",
                EC_PRIVATE_KEY_LENGTH_INVALID: "private key length is invalid",
                EC_PRIVATE_KEY_RANGE_INVALID: "private key range is invalid",
                EC_PRIVATE_KEY_TWEAK_ADD_FAIL: "tweak out of range or resulting private key is invalid",
                EC_PRIVATE_KEY_TWEAK_MUL_FAIL: "tweak out of range",
                EC_PRIVATE_KEY_EXPORT_DER_FAIL: "couldn't export to DER format",
                EC_PRIVATE_KEY_IMPORT_DER_FAIL: "couldn't import from DER format",
                EC_PUBLIC_KEYS_TYPE_INVALID: "public keys should be an Array",
                EC_PUBLIC_KEYS_LENGTH_INVALID: "public keys Array should have at least 1 element",
                EC_PUBLIC_KEY_TYPE_INVALID: "public key should be a Buffer",
                EC_PUBLIC_KEY_LENGTH_INVALID: "public key length is invalid",
                EC_PUBLIC_KEY_PARSE_FAIL: "the public key could not be parsed or is invalid",
                EC_PUBLIC_KEY_CREATE_FAIL: "private was invalid, try again",
                EC_PUBLIC_KEY_TWEAK_ADD_FAIL: "tweak out of range or resulting public key is invalid",
                EC_PUBLIC_KEY_TWEAK_MUL_FAIL: "tweak out of range",
                EC_PUBLIC_KEY_COMBINE_FAIL: "the sum of the public keys is not valid",
                ECDH_FAIL: J,
                ECDSA_SIGNATURE_TYPE_INVALID: "signature should be a Buffer",
                ECDSA_SIGNATURE_LENGTH_INVALID: "signature length is invalid",
                ECDSA_SIGNATURE_PARSE_FAIL: "couldn't parse signature",
                ECDSA_SIGNATURE_PARSE_DER_FAIL: "couldn't parse DER signature",
                ECDSA_SIGNATURE_SERIALIZE_DER_FAIL: "couldn't serialize signature to DER format",
                ECDSA_SIGN_FAIL: X,
                ECDSA_RECOVER_FAIL: "couldn't recover public key from signature",
                MSG32_TYPE_INVALID: "message should be a Buffer",
                MSG32_LENGTH_INVALID: "message length is invalid",
                OPTIONS_TYPE_INVALID: "options should be an Object",
                OPTIONS_DATA_TYPE_INVALID: "options.data should be a Buffer",
                OPTIONS_DATA_LENGTH_INVALID: "options.data length is invalid",
                OPTIONS_NONCEFN_TYPE_INVALID: "options.noncefn should be a Function",
                RECOVERY_ID_TYPE_INVALID: "recovery should be a Number",
                RECOVERY_ID_VALUE_INVALID: "recovery should have value between -1 and 4",
                TWEAK_TYPE_INVALID: "tweak should be a Buffer",
                TWEAK_LENGTH_INVALID: "tweak length is invalid",
                default: $
            }));
            function tt(t, e) {
                return void 0 === t ? e : (function(t, e) {
                    if ("[object Boolean]" !== D.call(t))
                        throw TypeError(e)
                }(t, Q.COMPRESSED_TYPE_INVALID),
                t)
            }
            var et = L.Buffer
              , rt = m.a.Transform;
            function nt(t) {
                rt.call(this),
                this._block = et.allocUnsafe(t),
                this._blockSize = t,
                this._blockOffset = 0,
                this._length = [0, 0, 0, 0],
                this._finalized = !1
            }
            x(nt, rt),
            nt.prototype._transform = function(t, e, r) {
                var n = null;
                try {
                    this.update(t, e)
                } catch (t) {
                    n = t
                }
                r(n)
            }
            ,
            nt.prototype._flush = function(t) {
                var e = null;
                try {
                    this.push(this.digest())
                } catch (t) {
                    e = t
                }
                t(e)
            }
            ,
            nt.prototype.update = function(t, e) {
                if (function(t, e) {
                    if (!et.isBuffer(t) && "string" != typeof t)
                        throw new TypeError("Data must be a string or a buffer")
                }(t),
                this._finalized)
                    throw new Error("Digest already called");
                et.isBuffer(t) || (t = et.from(t, e));
                for (var r = this._block, n = 0; this._blockOffset + t.length - n >= this._blockSize; ) {
                    for (var i = this._blockOffset; i < this._blockSize; )
                        r[i++] = t[n++];
                    this._update(),
                    this._blockOffset = 0
                }
                for (; n < t.length; )
                    r[this._blockOffset++] = t[n++];
                for (var a = 0, f = 8 * t.length; f > 0; ++a)
                    this._length[a] += f,
                    (f = this._length[a] / 4294967296 | 0) > 0 && (this._length[a] -= 4294967296 * f);
                return this
            }
            ,
            nt.prototype._update = function() {
                throw new Error("_update is not implemented")
            }
            ,
            nt.prototype.digest = function(t) {
                if (this._finalized)
                    throw new Error("Digest already called");
                this._finalized = !0;
                var e = this._digest();
                void 0 !== t && (e = e.toString(t)),
                this._block.fill(0),
                this._blockOffset = 0;
                for (var r = 0; r < 4; ++r)
                    this._length[r] = 0;
                return e
            }
            ,
            nt.prototype._digest = function() {
                throw new Error("_digest is not implemented")
            }
            ;
            var it = nt
              , at = L.Buffer
              , ft = new Array(16);
            function ot() {
                it.call(this, 64),
                this._a = 1732584193,
                this._b = 4023233417,
                this._c = 2562383102,
                this._d = 271733878
            }
            function st(t, e) {
                return t << e | t >>> 32 - e
            }
            function ct(t, e, r, n, i, a, f) {
                return st(t + (e & r | ~e & n) + i + a | 0, f) + e | 0
            }
            function ut(t, e, r, n, i, a, f) {
                return st(t + (e & n | r & ~n) + i + a | 0, f) + e | 0
            }
            function dt(t, e, r, n, i, a, f) {
                return st(t + (e ^ r ^ n) + i + a | 0, f) + e | 0
            }
            function ht(t, e, r, n, i, a, f) {
                return st(t + (r ^ (e | ~n)) + i + a | 0, f) + e | 0
            }
            x(ot, it),
            ot.prototype._update = function() {
                for (var t = ft, e = 0; e < 16; ++e)
                    t[e] = this._block.readInt32LE(4 * e);
                var r = this._a
                  , n = this._b
                  , i = this._c
                  , a = this._d;
                r = ct(r, n, i, a, t[0], 3614090360, 7),
                a = ct(a, r, n, i, t[1], 3905402710, 12),
                i = ct(i, a, r, n, t[2], 606105819, 17),
                n = ct(n, i, a, r, t[3], 3250441966, 22),
                r = ct(r, n, i, a, t[4], 4118548399, 7),
                a = ct(a, r, n, i, t[5], 1200080426, 12),
                i = ct(i, a, r, n, t[6], 2821735955, 17),
                n = ct(n, i, a, r, t[7], 4249261313, 22),
                r = ct(r, n, i, a, t[8], 1770035416, 7),
                a = ct(a, r, n, i, t[9], 2336552879, 12),
                i = ct(i, a, r, n, t[10], 4294925233, 17),
                n = ct(n, i, a, r, t[11], 2304563134, 22),
                r = ct(r, n, i, a, t[12], 1804603682, 7),
                a = ct(a, r, n, i, t[13], 4254626195, 12),
                i = ct(i, a, r, n, t[14], 2792965006, 17),
                r = ut(r, n = ct(n, i, a, r, t[15], 1236535329, 22), i, a, t[1], 4129170786, 5),
                a = ut(a, r, n, i, t[6], 3225465664, 9),
                i = ut(i, a, r, n, t[11], 643717713, 14),
                n = ut(n, i, a, r, t[0], 3921069994, 20),
                r = ut(r, n, i, a, t[5], 3593408605, 5),
                a = ut(a, r, n, i, t[10], 38016083, 9),
                i = ut(i, a, r, n, t[15], 3634488961, 14),
                n = ut(n, i, a, r, t[4], 3889429448, 20),
                r = ut(r, n, i, a, t[9], 568446438, 5),
                a = ut(a, r, n, i, t[14], 3275163606, 9),
                i = ut(i, a, r, n, t[3], 4107603335, 14),
                n = ut(n, i, a, r, t[8], 1163531501, 20),
                r = ut(r, n, i, a, t[13], 2850285829, 5),
                a = ut(a, r, n, i, t[2], 4243563512, 9),
                i = ut(i, a, r, n, t[7], 1735328473, 14),
                r = dt(r, n = ut(n, i, a, r, t[12], 2368359562, 20), i, a, t[5], 4294588738, 4),
                a = dt(a, r, n, i, t[8], 2272392833, 11),
                i = dt(i, a, r, n, t[11], 1839030562, 16),
                n = dt(n, i, a, r, t[14], 4259657740, 23),
                r = dt(r, n, i, a, t[1], 2763975236, 4),
                a = dt(a, r, n, i, t[4], 1272893353, 11),
                i = dt(i, a, r, n, t[7], 4139469664, 16),
                n = dt(n, i, a, r, t[10], 3200236656, 23),
                r = dt(r, n, i, a, t[13], 681279174, 4),
                a = dt(a, r, n, i, t[0], 3936430074, 11),
                i = dt(i, a, r, n, t[3], 3572445317, 16),
                n = dt(n, i, a, r, t[6], 76029189, 23),
                r = dt(r, n, i, a, t[9], 3654602809, 4),
                a = dt(a, r, n, i, t[12], 3873151461, 11),
                i = dt(i, a, r, n, t[15], 530742520, 16),
                r = ht(r, n = dt(n, i, a, r, t[2], 3299628645, 23), i, a, t[0], 4096336452, 6),
                a = ht(a, r, n, i, t[7], 1126891415, 10),
                i = ht(i, a, r, n, t[14], 2878612391, 15),
                n = ht(n, i, a, r, t[5], 4237533241, 21),
                r = ht(r, n, i, a, t[12], 1700485571, 6),
                a = ht(a, r, n, i, t[3], 2399980690, 10),
                i = ht(i, a, r, n, t[10], 4293915773, 15),
                n = ht(n, i, a, r, t[1], 2240044497, 21),
                r = ht(r, n, i, a, t[8], 1873313359, 6),
                a = ht(a, r, n, i, t[15], 4264355552, 10),
                i = ht(i, a, r, n, t[6], 2734768916, 15),
                n = ht(n, i, a, r, t[13], 1309151649, 21),
                r = ht(r, n, i, a, t[4], 4149444226, 6),
                a = ht(a, r, n, i, t[11], 3174756917, 10),
                i = ht(i, a, r, n, t[2], 718787259, 15),
                n = ht(n, i, a, r, t[9], 3951481745, 21),
                this._a = this._a + r | 0,
                this._b = this._b + n | 0,
                this._c = this._c + i | 0,
                this._d = this._d + a | 0
            }
            ,
            ot.prototype._digest = function() {
                this._block[this._blockOffset++] = 128,
                this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64),
                this._update(),
                this._blockOffset = 0),
                this._block.fill(0, this._blockOffset, 56),
                this._block.writeUInt32LE(this._length[0], 56),
                this._block.writeUInt32LE(this._length[1], 60),
                this._update();
                var t = at.allocUnsafe(16);
                return t.writeInt32LE(this._a, 0),
                t.writeInt32LE(this._b, 4),
                t.writeInt32LE(this._c, 8),
                t.writeInt32LE(this._d, 12),
                t
            }
            ;
            var lt = ot
              , bt = _.a.Buffer
              , pt = new Array(16)
              , vt = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]
              , _t = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]
              , yt = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]
              , mt = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]
              , gt = [0, 1518500249, 1859775393, 2400959708, 2840853838]
              , wt = [1352829926, 1548603684, 1836072691, 2053994217, 0];
            function At() {
                it.call(this, 64),
                this._a = 1732584193,
                this._b = 4023233417,
                this._c = 2562383102,
                this._d = 271733878,
                this._e = 3285377520
            }
            function Et(t, e) {
                return t << e | t >>> 32 - e
            }
            function It(t, e, r, n, i, a, f, o) {
                return Et(t + (e ^ r ^ n) + a + f | 0, o) + i | 0
            }
            function Mt(t, e, r, n, i, a, f, o) {
                return Et(t + (e & r | ~e & n) + a + f | 0, o) + i | 0
            }
            function St(t, e, r, n, i, a, f, o) {
                return Et(t + ((e | ~r) ^ n) + a + f | 0, o) + i | 0
            }
            function kt(t, e, r, n, i, a, f, o) {
                return Et(t + (e & n | r & ~n) + a + f | 0, o) + i | 0
            }
            function Lt(t, e, r, n, i, a, f, o) {
                return Et(t + (e ^ (r | ~n)) + a + f | 0, o) + i | 0
            }
            x(At, it),
            At.prototype._update = function() {
                for (var t = pt, e = 0; e < 16; ++e)
                    t[e] = this._block.readInt32LE(4 * e);
                for (var r = 0 | this._a, n = 0 | this._b, i = 0 | this._c, a = 0 | this._d, f = 0 | this._e, o = 0 | this._a, s = 0 | this._b, c = 0 | this._c, u = 0 | this._d, d = 0 | this._e, h = 0; h < 80; h += 1) {
                    var l, b;
                    h < 16 ? (l = It(r, n, i, a, f, t[vt[h]], gt[0], yt[h]),
                    b = Lt(o, s, c, u, d, t[_t[h]], wt[0], mt[h])) : h < 32 ? (l = Mt(r, n, i, a, f, t[vt[h]], gt[1], yt[h]),
                    b = kt(o, s, c, u, d, t[_t[h]], wt[1], mt[h])) : h < 48 ? (l = St(r, n, i, a, f, t[vt[h]], gt[2], yt[h]),
                    b = St(o, s, c, u, d, t[_t[h]], wt[2], mt[h])) : h < 64 ? (l = kt(r, n, i, a, f, t[vt[h]], gt[3], yt[h]),
                    b = Mt(o, s, c, u, d, t[_t[h]], wt[3], mt[h])) : (l = Lt(r, n, i, a, f, t[vt[h]], gt[4], yt[h]),
                    b = It(o, s, c, u, d, t[_t[h]], wt[4], mt[h])),
                    r = f,
                    f = a,
                    a = Et(i, 10),
                    i = n,
                    n = l,
                    o = d,
                    d = u,
                    u = Et(c, 10),
                    c = s,
                    s = b
                }
                var p = this._b + i + u | 0;
                this._b = this._c + a + d | 0,
                this._c = this._d + f + o | 0,
                this._d = this._e + r + s | 0,
                this._e = this._a + n + c | 0,
                this._a = p
            }
            ,
            At.prototype._digest = function() {
                this._block[this._blockOffset++] = 128,
                this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64),
                this._update(),
                this._blockOffset = 0),
                this._block.fill(0, this._blockOffset, 56),
                this._block.writeUInt32LE(this._length[0], 56),
                this._block.writeUInt32LE(this._length[1], 60),
                this._update();
                var t = bt.alloc ? bt.alloc(20) : new bt(20);
                return t.writeInt32LE(this._a, 0),
                t.writeInt32LE(this._b, 4),
                t.writeInt32LE(this._c, 8),
                t.writeInt32LE(this._d, 12),
                t.writeInt32LE(this._e, 16),
                t
            }
            ;
            var xt = At
              , Pt = L.Buffer;
            function Tt(t, e) {
                this._block = Pt.alloc(t),
                this._finalSize = e,
                this._blockSize = t,
                this._len = 0
            }
            Tt.prototype.update = function(t, e) {
                "string" == typeof t && (e = e || "utf8",
                t = Pt.from(t, e));
                for (var r = this._block, n = this._blockSize, i = t.length, a = this._len, f = 0; f < i; ) {
                    for (var o = a % n, s = Math.min(i - f, n - o), c = 0; c < s; c++)
                        r[o + c] = t[f + c];
                    f += s,
                    (a += s) % n == 0 && this._update(r)
                }
                return this._len += i,
                this
            }
            ,
            Tt.prototype.digest = function(t) {
                var e = this._len % this._blockSize;
                this._block[e] = 128,
                this._block.fill(0, e + 1),
                e >= this._finalSize && (this._update(this._block),
                this._block.fill(0));
                var r = 8 * this._len;
                if (r <= 4294967295)
                    this._block.writeUInt32BE(r, this._blockSize - 4);
                else {
                    var n = (4294967295 & r) >>> 0
                      , i = (r - n) / 4294967296;
                    this._block.writeUInt32BE(i, this._blockSize - 8),
                    this._block.writeUInt32BE(n, this._blockSize - 4)
                }
                this._update(this._block);
                var a = this._hash();
                return t ? a.toString(t) : a
            }
            ,
            Tt.prototype._update = function() {
                throw new Error("_update must be implemented by subclass")
            }
            ;
            var Rt = Tt
              , jt = L.Buffer
              , Ot = [1518500249, 1859775393, -1894007588, -899497514]
              , Ct = new Array(80);
            function Bt() {
                this.init(),
                this._w = Ct,
                Rt.call(this, 64, 56)
            }
            function Nt(t) {
                return t << 30 | t >>> 2
            }
            function zt(t, e, r, n) {
                return 0 === t ? e & r | ~e & n : 2 === t ? e & r | e & n | r & n : e ^ r ^ n
            }
            x(Bt, Rt),
            Bt.prototype.init = function() {
                return this._a = 1732584193,
                this._b = 4023233417,
                this._c = 2562383102,
                this._d = 271733878,
                this._e = 3285377520,
                this
            }
            ,
            Bt.prototype._update = function(t) {
                for (var e, r = this._w, n = 0 | this._a, i = 0 | this._b, a = 0 | this._c, f = 0 | this._d, o = 0 | this._e, s = 0; s < 16; ++s)
                    r[s] = t.readInt32BE(4 * s);
                for (; s < 80; ++s)
                    r[s] = r[s - 3] ^ r[s - 8] ^ r[s - 14] ^ r[s - 16];
                for (var c = 0; c < 80; ++c) {
                    var u = ~~(c / 20)
                      , d = 0 | ((e = n) << 5 | e >>> 27) + zt(u, i, a, f) + o + r[c] + Ot[u];
                    o = f,
                    f = a,
                    a = Nt(i),
                    i = n,
                    n = d
                }
                this._a = n + this._a | 0,
                this._b = i + this._b | 0,
                this._c = a + this._c | 0,
                this._d = f + this._d | 0,
                this._e = o + this._e | 0
            }
            ,
            Bt.prototype._hash = function() {
                var t = jt.allocUnsafe(20);
                return t.writeInt32BE(0 | this._a, 0),
                t.writeInt32BE(0 | this._b, 4),
                t.writeInt32BE(0 | this._c, 8),
                t.writeInt32BE(0 | this._d, 12),
                t.writeInt32BE(0 | this._e, 16),
                t
            }
            ;
            var Dt = Bt
              , Kt = L.Buffer
              , Vt = [1518500249, 1859775393, -1894007588, -899497514]
              , Ut = new Array(80);
            function qt() {
                this.init(),
                this._w = Ut,
                Rt.call(this, 64, 56)
            }
            function Yt(t) {
                return t << 5 | t >>> 27
            }
            function Ft(t) {
                return t << 30 | t >>> 2
            }
            function Ht(t, e, r, n) {
                return 0 === t ? e & r | ~e & n : 2 === t ? e & r | e & n | r & n : e ^ r ^ n
            }
            x(qt, Rt),
            qt.prototype.init = function() {
                return this._a = 1732584193,
                this._b = 4023233417,
                this._c = 2562383102,
                this._d = 271733878,
                this._e = 3285377520,
                this
            }
            ,
            qt.prototype._update = function(t) {
                for (var e, r = this._w, n = 0 | this._a, i = 0 | this._b, a = 0 | this._c, f = 0 | this._d, o = 0 | this._e, s = 0; s < 16; ++s)
                    r[s] = t.readInt32BE(4 * s);
                for (; s < 80; ++s)
                    r[s] = (e = r[s - 3] ^ r[s - 8] ^ r[s - 14] ^ r[s - 16]) << 1 | e >>> 31;
                for (var c = 0; c < 80; ++c) {
                    var u = ~~(c / 20)
                      , d = Yt(n) + Ht(u, i, a, f) + o + r[c] + Vt[u] | 0;
                    o = f,
                    f = a,
                    a = Ft(i),
                    i = n,
                    n = d
                }
                this._a = n + this._a | 0,
                this._b = i + this._b | 0,
                this._c = a + this._c | 0,
                this._d = f + this._d | 0,
                this._e = o + this._e | 0
            }
            ,
            qt.prototype._hash = function() {
                var t = Kt.allocUnsafe(20);
                return t.writeInt32BE(0 | this._a, 0),
                t.writeInt32BE(0 | this._b, 4),
                t.writeInt32BE(0 | this._c, 8),
                t.writeInt32BE(0 | this._d, 12),
                t.writeInt32BE(0 | this._e, 16),
                t
            }
            ;
            var Gt = qt
              , Wt = L.Buffer
              , Zt = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]
              , Jt = new Array(64);
            function Xt() {
                this.init(),
                this._w = Jt,
                Rt.call(this, 64, 56)
            }
            function $t(t, e, r) {
                return r ^ t & (e ^ r)
            }
            function Qt(t, e, r) {
                return t & e | r & (t | e)
            }
            function te(t) {
                return (t >>> 2 | t << 30) ^ (t >>> 13 | t << 19) ^ (t >>> 22 | t << 10)
            }
            function ee(t) {
                return (t >>> 6 | t << 26) ^ (t >>> 11 | t << 21) ^ (t >>> 25 | t << 7)
            }
            function re(t) {
                return (t >>> 7 | t << 25) ^ (t >>> 18 | t << 14) ^ t >>> 3
            }
            x(Xt, Rt),
            Xt.prototype.init = function() {
                return this._a = 1779033703,
                this._b = 3144134277,
                this._c = 1013904242,
                this._d = 2773480762,
                this._e = 1359893119,
                this._f = 2600822924,
                this._g = 528734635,
                this._h = 1541459225,
                this
            }
            ,
            Xt.prototype._update = function(t) {
                for (var e, r = this._w, n = 0 | this._a, i = 0 | this._b, a = 0 | this._c, f = 0 | this._d, o = 0 | this._e, s = 0 | this._f, c = 0 | this._g, u = 0 | this._h, d = 0; d < 16; ++d)
                    r[d] = t.readInt32BE(4 * d);
                for (; d < 64; ++d)
                    r[d] = 0 | (((e = r[d - 2]) >>> 17 | e << 15) ^ (e >>> 19 | e << 13) ^ e >>> 10) + r[d - 7] + re(r[d - 15]) + r[d - 16];
                for (var h = 0; h < 64; ++h) {
                    var l = u + ee(o) + $t(o, s, c) + Zt[h] + r[h] | 0
                      , b = te(n) + Qt(n, i, a) | 0;
                    u = c,
                    c = s,
                    s = o,
                    o = f + l | 0,
                    f = a,
                    a = i,
                    i = n,
                    n = l + b | 0
                }
                this._a = n + this._a | 0,
                this._b = i + this._b | 0,
                this._c = a + this._c | 0,
                this._d = f + this._d | 0,
                this._e = o + this._e | 0,
                this._f = s + this._f | 0,
                this._g = c + this._g | 0,
                this._h = u + this._h | 0
            }
            ,
            Xt.prototype._hash = function() {
                var t = Wt.allocUnsafe(32);
                return t.writeInt32BE(this._a, 0),
                t.writeInt32BE(this._b, 4),
                t.writeInt32BE(this._c, 8),
                t.writeInt32BE(this._d, 12),
                t.writeInt32BE(this._e, 16),
                t.writeInt32BE(this._f, 20),
                t.writeInt32BE(this._g, 24),
                t.writeInt32BE(this._h, 28),
                t
            }
            ;
            var ne = Xt
              , ie = L.Buffer
              , ae = new Array(64);
            function fe() {
                this.init(),
                this._w = ae,
                Rt.call(this, 64, 56)
            }
            x(fe, ne),
            fe.prototype.init = function() {
                return this._a = 3238371032,
                this._b = 914150663,
                this._c = 812702999,
                this._d = 4144912697,
                this._e = 4290775857,
                this._f = 1750603025,
                this._g = 1694076839,
                this._h = 3204075428,
                this
            }
            ,
            fe.prototype._hash = function() {
                var t = ie.allocUnsafe(28);
                return t.writeInt32BE(this._a, 0),
                t.writeInt32BE(this._b, 4),
                t.writeInt32BE(this._c, 8),
                t.writeInt32BE(this._d, 12),
                t.writeInt32BE(this._e, 16),
                t.writeInt32BE(this._f, 20),
                t.writeInt32BE(this._g, 24),
                t
            }
            ;
            var oe = fe
              , se = L.Buffer
              , ce = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591]
              , ue = new Array(160);
            function de() {
                this.init(),
                this._w = ue,
                Rt.call(this, 128, 112)
            }
            function he(t, e, r) {
                return r ^ t & (e ^ r)
            }
            function le(t, e, r) {
                return t & e | r & (t | e)
            }
            function be(t, e) {
                return (t >>> 28 | e << 4) ^ (e >>> 2 | t << 30) ^ (e >>> 7 | t << 25)
            }
            function pe(t, e) {
                return (t >>> 14 | e << 18) ^ (t >>> 18 | e << 14) ^ (e >>> 9 | t << 23)
            }
            function ve(t, e) {
                return (t >>> 1 | e << 31) ^ (t >>> 8 | e << 24) ^ t >>> 7
            }
            function _e(t, e) {
                return (t >>> 1 | e << 31) ^ (t >>> 8 | e << 24) ^ (t >>> 7 | e << 25)
            }
            function ye(t, e) {
                return (t >>> 19 | e << 13) ^ (e >>> 29 | t << 3) ^ t >>> 6
            }
            function me(t, e) {
                return (t >>> 19 | e << 13) ^ (e >>> 29 | t << 3) ^ (t >>> 6 | e << 26)
            }
            function ge(t, e) {
                return t >>> 0 < e >>> 0 ? 1 : 0
            }
            x(de, Rt),
            de.prototype.init = function() {
                return this._ah = 1779033703,
                this._bh = 3144134277,
                this._ch = 1013904242,
                this._dh = 2773480762,
                this._eh = 1359893119,
                this._fh = 2600822924,
                this._gh = 528734635,
                this._hh = 1541459225,
                this._al = 4089235720,
                this._bl = 2227873595,
                this._cl = 4271175723,
                this._dl = 1595750129,
                this._el = 2917565137,
                this._fl = 725511199,
                this._gl = 4215389547,
                this._hl = 327033209,
                this
            }
            ,
            de.prototype._update = function(t) {
                for (var e = this._w, r = 0 | this._ah, n = 0 | this._bh, i = 0 | this._ch, a = 0 | this._dh, f = 0 | this._eh, o = 0 | this._fh, s = 0 | this._gh, c = 0 | this._hh, u = 0 | this._al, d = 0 | this._bl, h = 0 | this._cl, l = 0 | this._dl, b = 0 | this._el, p = 0 | this._fl, v = 0 | this._gl, _ = 0 | this._hl, y = 0; y < 32; y += 2)
                    e[y] = t.readInt32BE(4 * y),
                    e[y + 1] = t.readInt32BE(4 * y + 4);
                for (; y < 160; y += 2) {
                    var m = e[y - 30]
                      , g = e[y - 30 + 1]
                      , w = ve(m, g)
                      , A = _e(g, m)
                      , E = ye(m = e[y - 4], g = e[y - 4 + 1])
                      , I = me(g, m)
                      , M = e[y - 14]
                      , S = e[y - 14 + 1]
                      , k = e[y - 32]
                      , L = e[y - 32 + 1]
                      , x = A + S | 0
                      , P = w + M + ge(x, A) | 0;
                    P = (P = P + E + ge(x = x + I | 0, I) | 0) + k + ge(x = x + L | 0, L) | 0,
                    e[y] = P,
                    e[y + 1] = x
                }
                for (var T = 0; T < 160; T += 2) {
                    P = e[T],
                    x = e[T + 1];
                    var R = le(r, n, i)
                      , j = le(u, d, h)
                      , O = be(r, u)
                      , C = be(u, r)
                      , B = pe(f, b)
                      , N = pe(b, f)
                      , z = ce[T]
                      , D = ce[T + 1]
                      , K = he(f, o, s)
                      , V = he(b, p, v)
                      , U = _ + N | 0
                      , q = c + B + ge(U, _) | 0;
                    q = (q = (q = q + K + ge(U = U + V | 0, V) | 0) + z + ge(U = U + D | 0, D) | 0) + P + ge(U = U + x | 0, x) | 0;
                    var Y = C + j | 0
                      , F = O + R + ge(Y, C) | 0;
                    c = s,
                    _ = v,
                    s = o,
                    v = p,
                    o = f,
                    p = b,
                    f = a + q + ge(b = l + U | 0, l) | 0,
                    a = i,
                    l = h,
                    i = n,
                    h = d,
                    n = r,
                    d = u,
                    r = q + F + ge(u = U + Y | 0, U) | 0
                }
                this._al = this._al + u | 0,
                this._bl = this._bl + d | 0,
                this._cl = this._cl + h | 0,
                this._dl = this._dl + l | 0,
                this._el = this._el + b | 0,
                this._fl = this._fl + p | 0,
                this._gl = this._gl + v | 0,
                this._hl = this._hl + _ | 0,
                this._ah = this._ah + r + ge(this._al, u) | 0,
                this._bh = this._bh + n + ge(this._bl, d) | 0,
                this._ch = this._ch + i + ge(this._cl, h) | 0,
                this._dh = this._dh + a + ge(this._dl, l) | 0,
                this._eh = this._eh + f + ge(this._el, b) | 0,
                this._fh = this._fh + o + ge(this._fl, p) | 0,
                this._gh = this._gh + s + ge(this._gl, v) | 0,
                this._hh = this._hh + c + ge(this._hl, _) | 0
            }
            ,
            de.prototype._hash = function() {
                var t = se.allocUnsafe(64);
                function e(e, r, n) {
                    t.writeInt32BE(e, n),
                    t.writeInt32BE(r, n + 4)
                }
                return e(this._ah, this._al, 0),
                e(this._bh, this._bl, 8),
                e(this._ch, this._cl, 16),
                e(this._dh, this._dl, 24),
                e(this._eh, this._el, 32),
                e(this._fh, this._fl, 40),
                e(this._gh, this._gl, 48),
                e(this._hh, this._hl, 56),
                t
            }
            ;
            var we = de
              , Ae = L.Buffer
              , Ee = new Array(160);
            function Ie() {
                this.init(),
                this._w = Ee,
                Rt.call(this, 128, 112)
            }
            x(Ie, we),
            Ie.prototype.init = function() {
                return this._ah = 3418070365,
                this._bh = 1654270250,
                this._ch = 2438529370,
                this._dh = 355462360,
                this._eh = 1731405415,
                this._fh = 2394180231,
                this._gh = 3675008525,
                this._hh = 1203062813,
                this._al = 3238371032,
                this._bl = 914150663,
                this._cl = 812702999,
                this._dl = 4144912697,
                this._el = 4290775857,
                this._fl = 1750603025,
                this._gl = 1694076839,
                this._hl = 3204075428,
                this
            }
            ,
            Ie.prototype._hash = function() {
                var t = Ae.allocUnsafe(48);
                function e(e, r, n) {
                    t.writeInt32BE(e, n),
                    t.writeInt32BE(r, n + 4)
                }
                return e(this._ah, this._al, 0),
                e(this._bh, this._bl, 8),
                e(this._ch, this._cl, 16),
                e(this._dh, this._dl, 24),
                e(this._eh, this._el, 32),
                e(this._fh, this._fl, 40),
                t
            }
            ;
            var Me = Ie
              , Se = Object(p.g)((function(t) {
                var e = t.exports = function(t) {
                    t = t.toLowerCase();
                    var r = e[t];
                    if (!r)
                        throw new Error(t + " is not supported (we accept pull requests)");
                    return new r
                }
                ;
                e.sha = Dt,
                e.sha1 = Gt,
                e.sha224 = oe,
                e.sha256 = ne,
                e.sha384 = Me,
                e.sha512 = we
            }
            ))
              , ke = L.Buffer
              , Le = m.a.Transform
              , xe = E.a.StringDecoder;
            function Pe(t) {
                Le.call(this),
                this.hashMode = "string" == typeof t,
                this.hashMode ? this[t] = this._finalOrDigest : this.final = this._finalOrDigest,
                this._final && (this.__final = this._final,
                this._final = null),
                this._decoder = null,
                this._encoding = null
            }
            x(Pe, Le),
            Pe.prototype.update = function(t, e, r) {
                "string" == typeof t && (t = ke.from(t, e));
                var n = this._update(t);
                return this.hashMode ? this : (r && (n = this._toString(n, r)),
                n)
            }
            ,
            Pe.prototype.setAutoPadding = function() {}
            ,
            Pe.prototype.getAuthTag = function() {
                throw new Error("trying to get auth tag in unsupported state")
            }
            ,
            Pe.prototype.setAuthTag = function() {
                throw new Error("trying to set auth tag in unsupported state")
            }
            ,
            Pe.prototype.setAAD = function() {
                throw new Error("trying to set aad in unsupported state")
            }
            ,
            Pe.prototype._transform = function(t, e, r) {
                var n;
                try {
                    this.hashMode ? this._update(t) : this.push(this._update(t))
                } catch (t) {
                    n = t
                } finally {
                    r(n)
                }
            }
            ,
            Pe.prototype._flush = function(t) {
                var e;
                try {
                    this.push(this.__final())
                } catch (t) {
                    e = t
                }
                t(e)
            }
            ,
            Pe.prototype._finalOrDigest = function(t) {
                var e = this.__final() || ke.alloc(0);
                return t && (e = this._toString(e, t, !0)),
                e
            }
            ,
            Pe.prototype._toString = function(t, e, r) {
                if (this._decoder || (this._decoder = new xe(e),
                this._encoding = e),
                this._encoding !== e)
                    throw new Error("can't switch encodings");
                var n = this._decoder.write(t);
                return r && (n += this._decoder.end()),
                n
            }
            ;
            var Te = Pe;
            function Re(t) {
                Te.call(this, "digest"),
                this._hash = t
            }
            x(Re, Te),
            Re.prototype._update = function(t) {
                this._hash.update(t)
            }
            ,
            Re.prototype._final = function() {
                return this._hash.digest()
            }
            ;
            var je = function(t) {
                return "md5" === (t = t.toLowerCase()) ? new lt : "rmd160" === t || "ripemd160" === t ? new xt : new Re(Se(t))
            }
              , Oe = Object(p.g)((function(t) {
                !function(t, e) {
                    function r(t, e) {
                        if (!t)
                            throw new Error(e || "Assertion failed")
                    }
                    function n(t, e) {
                        t.super_ = e;
                        var r = function() {};
                        r.prototype = e.prototype,
                        t.prototype = new r,
                        t.prototype.constructor = t
                    }
                    function i(t, e, r) {
                        if (i.isBN(t))
                            return t;
                        this.negative = 0,
                        this.words = null,
                        this.length = 0,
                        this.red = null,
                        null !== t && ("le" !== e && "be" !== e || (r = e,
                        e = 10),
                        this._init(t || 0, e || 10, r || "be"))
                    }
                    var a;
                    "object" == typeof t ? t.exports = i : e.BN = i,
                    i.BN = i,
                    i.wordSize = 26;
                    try {
                        a = _.a.Buffer
                    } catch (t) {}
                    function f(t, e, r) {
                        for (var n = 0, i = Math.min(t.length, r), a = e; a < i; a++) {
                            var f = t.charCodeAt(a) - 48;
                            n <<= 4,
                            n |= f >= 49 && f <= 54 ? f - 49 + 10 : f >= 17 && f <= 22 ? f - 17 + 10 : 15 & f
                        }
                        return n
                    }
                    function o(t, e, r, n) {
                        for (var i = 0, a = Math.min(t.length, r), f = e; f < a; f++) {
                            var o = t.charCodeAt(f) - 48;
                            i *= n,
                            i += o >= 49 ? o - 49 + 10 : o >= 17 ? o - 17 + 10 : o
                        }
                        return i
                    }
                    i.isBN = function(t) {
                        return t instanceof i || null !== t && "object" == typeof t && t.constructor.wordSize === i.wordSize && Array.isArray(t.words)
                    }
                    ,
                    i.max = function(t, e) {
                        return t.cmp(e) > 0 ? t : e
                    }
                    ,
                    i.min = function(t, e) {
                        return t.cmp(e) < 0 ? t : e
                    }
                    ,
                    i.prototype._init = function(t, e, n) {
                        if ("number" == typeof t)
                            return this._initNumber(t, e, n);
                        if ("object" == typeof t)
                            return this._initArray(t, e, n);
                        "hex" === e && (e = 16),
                        r(e === (0 | e) && e >= 2 && e <= 36);
                        var i = 0;
                        "-" === (t = t.toString().replace(/\s+/g, ""))[0] && i++,
                        16 === e ? this._parseHex(t, i) : this._parseBase(t, e, i),
                        "-" === t[0] && (this.negative = 1),
                        this.strip(),
                        "le" === n && this._initArray(this.toArray(), e, n)
                    }
                    ,
                    i.prototype._initNumber = function(t, e, n) {
                        t < 0 && (this.negative = 1,
                        t = -t),
                        t < 67108864 ? (this.words = [67108863 & t],
                        this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863],
                        this.length = 2) : (r(t < 9007199254740992),
                        this.words = [67108863 & t, t / 67108864 & 67108863, 1],
                        this.length = 3),
                        "le" === n && this._initArray(this.toArray(), e, n)
                    }
                    ,
                    i.prototype._initArray = function(t, e, n) {
                        if (r("number" == typeof t.length),
                        t.length <= 0)
                            return this.words = [0],
                            this.length = 1,
                            this;
                        this.length = Math.ceil(t.length / 3),
                        this.words = new Array(this.length);
                        for (var i = 0; i < this.length; i++)
                            this.words[i] = 0;
                        var a, f, o = 0;
                        if ("be" === n)
                            for (i = t.length - 1,
                            a = 0; i >= 0; i -= 3)
                                f = t[i] | t[i - 1] << 8 | t[i - 2] << 16,
                                this.words[a] |= f << o & 67108863,
                                this.words[a + 1] = f >>> 26 - o & 67108863,
                                (o += 24) >= 26 && (o -= 26,
                                a++);
                        else if ("le" === n)
                            for (i = 0,
                            a = 0; i < t.length; i += 3)
                                f = t[i] | t[i + 1] << 8 | t[i + 2] << 16,
                                this.words[a] |= f << o & 67108863,
                                this.words[a + 1] = f >>> 26 - o & 67108863,
                                (o += 24) >= 26 && (o -= 26,
                                a++);
                        return this.strip()
                    }
                    ,
                    i.prototype._parseHex = function(t, e) {
                        this.length = Math.ceil((t.length - e) / 6),
                        this.words = new Array(this.length);
                        for (var r = 0; r < this.length; r++)
                            this.words[r] = 0;
                        var n, i, a = 0;
                        for (r = t.length - 6,
                        n = 0; r >= e; r -= 6)
                            i = f(t, r, r + 6),
                            this.words[n] |= i << a & 67108863,
                            this.words[n + 1] |= i >>> 26 - a & 4194303,
                            (a += 24) >= 26 && (a -= 26,
                            n++);
                        r + 6 !== e && (i = f(t, e, r + 6),
                        this.words[n] |= i << a & 67108863,
                        this.words[n + 1] |= i >>> 26 - a & 4194303),
                        this.strip()
                    }
                    ,
                    i.prototype._parseBase = function(t, e, r) {
                        this.words = [0],
                        this.length = 1;
                        for (var n = 0, i = 1; i <= 67108863; i *= e)
                            n++;
                        n--,
                        i = i / e | 0;
                        for (var a = t.length - r, f = a % n, s = Math.min(a, a - f) + r, c = 0, u = r; u < s; u += n)
                            c = o(t, u, u + n, e),
                            this.imuln(i),
                            this.words[0] + c < 67108864 ? this.words[0] += c : this._iaddn(c);
                        if (0 !== f) {
                            var d = 1;
                            for (c = o(t, u, t.length, e),
                            u = 0; u < f; u++)
                                d *= e;
                            this.imuln(d),
                            this.words[0] + c < 67108864 ? this.words[0] += c : this._iaddn(c)
                        }
                    }
                    ,
                    i.prototype.copy = function(t) {
                        t.words = new Array(this.length);
                        for (var e = 0; e < this.length; e++)
                            t.words[e] = this.words[e];
                        t.length = this.length,
                        t.negative = this.negative,
                        t.red = this.red
                    }
                    ,
                    i.prototype.clone = function() {
                        var t = new i(null);
                        return this.copy(t),
                        t
                    }
                    ,
                    i.prototype._expand = function(t) {
                        for (; this.length < t; )
                            this.words[this.length++] = 0;
                        return this
                    }
                    ,
                    i.prototype.strip = function() {
                        for (; this.length > 1 && 0 === this.words[this.length - 1]; )
                            this.length--;
                        return this._normSign()
                    }
                    ,
                    i.prototype._normSign = function() {
                        return 1 === this.length && 0 === this.words[0] && (this.negative = 0),
                        this
                    }
                    ,
                    i.prototype.inspect = function() {
                        return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                    }
                    ;
                    var s = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"]
                      , c = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
                      , u = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
                    function d(t, e, r) {
                        r.negative = e.negative ^ t.negative;
                        var n = t.length + e.length | 0;
                        r.length = n,
                        n = n - 1 | 0;
                        var i = 0 | t.words[0]
                          , a = 0 | e.words[0]
                          , f = i * a
                          , o = 67108863 & f
                          , s = f / 67108864 | 0;
                        r.words[0] = o;
                        for (var c = 1; c < n; c++) {
                            for (var u = s >>> 26, d = 67108863 & s, h = Math.min(c, e.length - 1), l = Math.max(0, c - t.length + 1); l <= h; l++) {
                                var b = c - l | 0;
                                u += (f = (i = 0 | t.words[b]) * (a = 0 | e.words[l]) + d) / 67108864 | 0,
                                d = 67108863 & f
                            }
                            r.words[c] = 0 | d,
                            s = 0 | u
                        }
                        return 0 !== s ? r.words[c] = 0 | s : r.length--,
                        r.strip()
                    }
                    i.prototype.toString = function(t, e) {
                        var n;
                        if (e = 0 | e || 1,
                        16 === (t = t || 10) || "hex" === t) {
                            n = "";
                            for (var i = 0, a = 0, f = 0; f < this.length; f++) {
                                var o = this.words[f]
                                  , d = (16777215 & (o << i | a)).toString(16);
                                n = 0 !== (a = o >>> 24 - i & 16777215) || f !== this.length - 1 ? s[6 - d.length] + d + n : d + n,
                                (i += 2) >= 26 && (i -= 26,
                                f--)
                            }
                            for (0 !== a && (n = a.toString(16) + n); n.length % e != 0; )
                                n = "0" + n;
                            return 0 !== this.negative && (n = "-" + n),
                            n
                        }
                        if (t === (0 | t) && t >= 2 && t <= 36) {
                            var h = c[t]
                              , l = u[t];
                            n = "";
                            var b = this.clone();
                            for (b.negative = 0; !b.isZero(); ) {
                                var p = b.modn(l).toString(t);
                                n = (b = b.idivn(l)).isZero() ? p + n : s[h - p.length] + p + n
                            }
                            for (this.isZero() && (n = "0" + n); n.length % e != 0; )
                                n = "0" + n;
                            return 0 !== this.negative && (n = "-" + n),
                            n
                        }
                        r(!1, "Base should be between 2 and 36")
                    }
                    ,
                    i.prototype.toNumber = function() {
                        var t = this.words[0];
                        return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && r(!1, "Number can only safely store up to 53 bits"),
                        0 !== this.negative ? -t : t
                    }
                    ,
                    i.prototype.toJSON = function() {
                        return this.toString(16)
                    }
                    ,
                    i.prototype.toBuffer = function(t, e) {
                        return r(void 0 !== a),
                        this.toArrayLike(a, t, e)
                    }
                    ,
                    i.prototype.toArray = function(t, e) {
                        return this.toArrayLike(Array, t, e)
                    }
                    ,
                    i.prototype.toArrayLike = function(t, e, n) {
                        var i = this.byteLength()
                          , a = n || Math.max(1, i);
                        r(i <= a, "byte array longer than desired length"),
                        r(a > 0, "Requested array length <= 0"),
                        this.strip();
                        var f, o, s = "le" === e, c = new t(a), u = this.clone();
                        if (s) {
                            for (o = 0; !u.isZero(); o++)
                                f = u.andln(255),
                                u.iushrn(8),
                                c[o] = f;
                            for (; o < a; o++)
                                c[o] = 0
                        } else {
                            for (o = 0; o < a - i; o++)
                                c[o] = 0;
                            for (o = 0; !u.isZero(); o++)
                                f = u.andln(255),
                                u.iushrn(8),
                                c[a - o - 1] = f
                        }
                        return c
                    }
                    ,
                    Math.clz32 ? i.prototype._countBits = function(t) {
                        return 32 - Math.clz32(t)
                    }
                    : i.prototype._countBits = function(t) {
                        var e = t
                          , r = 0;
                        return e >= 4096 && (r += 13,
                        e >>>= 13),
                        e >= 64 && (r += 7,
                        e >>>= 7),
                        e >= 8 && (r += 4,
                        e >>>= 4),
                        e >= 2 && (r += 2,
                        e >>>= 2),
                        r + e
                    }
                    ,
                    i.prototype._zeroBits = function(t) {
                        if (0 === t)
                            return 26;
                        var e = t
                          , r = 0;
                        return 0 == (8191 & e) && (r += 13,
                        e >>>= 13),
                        0 == (127 & e) && (r += 7,
                        e >>>= 7),
                        0 == (15 & e) && (r += 4,
                        e >>>= 4),
                        0 == (3 & e) && (r += 2,
                        e >>>= 2),
                        0 == (1 & e) && r++,
                        r
                    }
                    ,
                    i.prototype.bitLength = function() {
                        var t = this.words[this.length - 1]
                          , e = this._countBits(t);
                        return 26 * (this.length - 1) + e
                    }
                    ,
                    i.prototype.zeroBits = function() {
                        if (this.isZero())
                            return 0;
                        for (var t = 0, e = 0; e < this.length; e++) {
                            var r = this._zeroBits(this.words[e]);
                            if (t += r,
                            26 !== r)
                                break
                        }
                        return t
                    }
                    ,
                    i.prototype.byteLength = function() {
                        return Math.ceil(this.bitLength() / 8)
                    }
                    ,
                    i.prototype.toTwos = function(t) {
                        return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone()
                    }
                    ,
                    i.prototype.fromTwos = function(t) {
                        return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone()
                    }
                    ,
                    i.prototype.isNeg = function() {
                        return 0 !== this.negative
                    }
                    ,
                    i.prototype.neg = function() {
                        return this.clone().ineg()
                    }
                    ,
                    i.prototype.ineg = function() {
                        return this.isZero() || (this.negative ^= 1),
                        this
                    }
                    ,
                    i.prototype.iuor = function(t) {
                        for (; this.length < t.length; )
                            this.words[this.length++] = 0;
                        for (var e = 0; e < t.length; e++)
                            this.words[e] = this.words[e] | t.words[e];
                        return this.strip()
                    }
                    ,
                    i.prototype.ior = function(t) {
                        return r(0 == (this.negative | t.negative)),
                        this.iuor(t)
                    }
                    ,
                    i.prototype.or = function(t) {
                        return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
                    }
                    ,
                    i.prototype.uor = function(t) {
                        return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
                    }
                    ,
                    i.prototype.iuand = function(t) {
                        var e;
                        e = this.length > t.length ? t : this;
                        for (var r = 0; r < e.length; r++)
                            this.words[r] = this.words[r] & t.words[r];
                        return this.length = e.length,
                        this.strip()
                    }
                    ,
                    i.prototype.iand = function(t) {
                        return r(0 == (this.negative | t.negative)),
                        this.iuand(t)
                    }
                    ,
                    i.prototype.and = function(t) {
                        return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
                    }
                    ,
                    i.prototype.uand = function(t) {
                        return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
                    }
                    ,
                    i.prototype.iuxor = function(t) {
                        var e, r;
                        this.length > t.length ? (e = this,
                        r = t) : (e = t,
                        r = this);
                        for (var n = 0; n < r.length; n++)
                            this.words[n] = e.words[n] ^ r.words[n];
                        if (this !== e)
                            for (; n < e.length; n++)
                                this.words[n] = e.words[n];
                        return this.length = e.length,
                        this.strip()
                    }
                    ,
                    i.prototype.ixor = function(t) {
                        return r(0 == (this.negative | t.negative)),
                        this.iuxor(t)
                    }
                    ,
                    i.prototype.xor = function(t) {
                        return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
                    }
                    ,
                    i.prototype.uxor = function(t) {
                        return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
                    }
                    ,
                    i.prototype.inotn = function(t) {
                        r("number" == typeof t && t >= 0);
                        var e = 0 | Math.ceil(t / 26)
                          , n = t % 26;
                        this._expand(e),
                        n > 0 && e--;
                        for (var i = 0; i < e; i++)
                            this.words[i] = 67108863 & ~this.words[i];
                        return n > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - n),
                        this.strip()
                    }
                    ,
                    i.prototype.notn = function(t) {
                        return this.clone().inotn(t)
                    }
                    ,
                    i.prototype.setn = function(t, e) {
                        r("number" == typeof t && t >= 0);
                        var n = t / 26 | 0
                          , i = t % 26;
                        return this._expand(n + 1),
                        this.words[n] = e ? this.words[n] | 1 << i : this.words[n] & ~(1 << i),
                        this.strip()
                    }
                    ,
                    i.prototype.iadd = function(t) {
                        var e, r, n;
                        if (0 !== this.negative && 0 === t.negative)
                            return this.negative = 0,
                            e = this.isub(t),
                            this.negative ^= 1,
                            this._normSign();
                        if (0 === this.negative && 0 !== t.negative)
                            return t.negative = 0,
                            e = this.isub(t),
                            t.negative = 1,
                            e._normSign();
                        this.length > t.length ? (r = this,
                        n = t) : (r = t,
                        n = this);
                        for (var i = 0, a = 0; a < n.length; a++)
                            e = (0 | r.words[a]) + (0 | n.words[a]) + i,
                            this.words[a] = 67108863 & e,
                            i = e >>> 26;
                        for (; 0 !== i && a < r.length; a++)
                            e = (0 | r.words[a]) + i,
                            this.words[a] = 67108863 & e,
                            i = e >>> 26;
                        if (this.length = r.length,
                        0 !== i)
                            this.words[this.length] = i,
                            this.length++;
                        else if (r !== this)
                            for (; a < r.length; a++)
                                this.words[a] = r.words[a];
                        return this
                    }
                    ,
                    i.prototype.add = function(t) {
                        var e;
                        return 0 !== t.negative && 0 === this.negative ? (t.negative = 0,
                        e = this.sub(t),
                        t.negative ^= 1,
                        e) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0,
                        e = t.sub(this),
                        this.negative = 1,
                        e) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this)
                    }
                    ,
                    i.prototype.isub = function(t) {
                        if (0 !== t.negative) {
                            t.negative = 0;
                            var e = this.iadd(t);
                            return t.negative = 1,
                            e._normSign()
                        }
                        if (0 !== this.negative)
                            return this.negative = 0,
                            this.iadd(t),
                            this.negative = 1,
                            this._normSign();
                        var r, n, i = this.cmp(t);
                        if (0 === i)
                            return this.negative = 0,
                            this.length = 1,
                            this.words[0] = 0,
                            this;
                        i > 0 ? (r = this,
                        n = t) : (r = t,
                        n = this);
                        for (var a = 0, f = 0; f < n.length; f++)
                            a = (e = (0 | r.words[f]) - (0 | n.words[f]) + a) >> 26,
                            this.words[f] = 67108863 & e;
                        for (; 0 !== a && f < r.length; f++)
                            a = (e = (0 | r.words[f]) + a) >> 26,
                            this.words[f] = 67108863 & e;
                        if (0 === a && f < r.length && r !== this)
                            for (; f < r.length; f++)
                                this.words[f] = r.words[f];
                        return this.length = Math.max(this.length, f),
                        r !== this && (this.negative = 1),
                        this.strip()
                    }
                    ,
                    i.prototype.sub = function(t) {
                        return this.clone().isub(t)
                    }
                    ;
                    var h = function(t, e, r) {
                        var n, i, a, f = t.words, o = e.words, s = r.words, c = 0, u = 0 | f[0], d = 8191 & u, h = u >>> 13, l = 0 | f[1], b = 8191 & l, p = l >>> 13, v = 0 | f[2], _ = 8191 & v, y = v >>> 13, m = 0 | f[3], g = 8191 & m, w = m >>> 13, A = 0 | f[4], E = 8191 & A, I = A >>> 13, M = 0 | f[5], S = 8191 & M, k = M >>> 13, L = 0 | f[6], x = 8191 & L, P = L >>> 13, T = 0 | f[7], R = 8191 & T, j = T >>> 13, O = 0 | f[8], C = 8191 & O, B = O >>> 13, N = 0 | f[9], z = 8191 & N, D = N >>> 13, K = 0 | o[0], V = 8191 & K, U = K >>> 13, q = 0 | o[1], Y = 8191 & q, F = q >>> 13, H = 0 | o[2], G = 8191 & H, W = H >>> 13, Z = 0 | o[3], J = 8191 & Z, X = Z >>> 13, $ = 0 | o[4], Q = 8191 & $, tt = $ >>> 13, et = 0 | o[5], rt = 8191 & et, nt = et >>> 13, it = 0 | o[6], at = 8191 & it, ft = it >>> 13, ot = 0 | o[7], st = 8191 & ot, ct = ot >>> 13, ut = 0 | o[8], dt = 8191 & ut, ht = ut >>> 13, lt = 0 | o[9], bt = 8191 & lt, pt = lt >>> 13;
                        r.negative = t.negative ^ e.negative,
                        r.length = 19;
                        var vt = (c + (n = Math.imul(d, V)) | 0) + ((8191 & (i = (i = Math.imul(d, U)) + Math.imul(h, V) | 0)) << 13) | 0;
                        c = ((a = Math.imul(h, U)) + (i >>> 13) | 0) + (vt >>> 26) | 0,
                        vt &= 67108863,
                        n = Math.imul(b, V),
                        i = (i = Math.imul(b, U)) + Math.imul(p, V) | 0,
                        a = Math.imul(p, U);
                        var _t = (c + (n = n + Math.imul(d, Y) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(d, F) | 0) + Math.imul(h, Y) | 0)) << 13) | 0;
                        c = ((a = a + Math.imul(h, F) | 0) + (i >>> 13) | 0) + (_t >>> 26) | 0,
                        _t &= 67108863,
                        n = Math.imul(_, V),
                        i = (i = Math.imul(_, U)) + Math.imul(y, V) | 0,
                        a = Math.imul(y, U),
                        n = n + Math.imul(b, Y) | 0,
                        i = (i = i + Math.imul(b, F) | 0) + Math.imul(p, Y) | 0,
                        a = a + Math.imul(p, F) | 0;
                        var yt = (c + (n = n + Math.imul(d, G) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(d, W) | 0) + Math.imul(h, G) | 0)) << 13) | 0;
                        c = ((a = a + Math.imul(h, W) | 0) + (i >>> 13) | 0) + (yt >>> 26) | 0,
                        yt &= 67108863,
                        n = Math.imul(g, V),
                        i = (i = Math.imul(g, U)) + Math.imul(w, V) | 0,
                        a = Math.imul(w, U),
                        n = n + Math.imul(_, Y) | 0,
                        i = (i = i + Math.imul(_, F) | 0) + Math.imul(y, Y) | 0,
                        a = a + Math.imul(y, F) | 0,
                        n = n + Math.imul(b, G) | 0,
                        i = (i = i + Math.imul(b, W) | 0) + Math.imul(p, G) | 0,
                        a = a + Math.imul(p, W) | 0;
                        var mt = (c + (n = n + Math.imul(d, J) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(d, X) | 0) + Math.imul(h, J) | 0)) << 13) | 0;
                        c = ((a = a + Math.imul(h, X) | 0) + (i >>> 13) | 0) + (mt >>> 26) | 0,
                        mt &= 67108863,
                        n = Math.imul(E, V),
                        i = (i = Math.imul(E, U)) + Math.imul(I, V) | 0,
                        a = Math.imul(I, U),
                        n = n + Math.imul(g, Y) | 0,
                        i = (i = i + Math.imul(g, F) | 0) + Math.imul(w, Y) | 0,
                        a = a + Math.imul(w, F) | 0,
                        n = n + Math.imul(_, G) | 0,
                        i = (i = i + Math.imul(_, W) | 0) + Math.imul(y, G) | 0,
                        a = a + Math.imul(y, W) | 0,
                        n = n + Math.imul(b, J) | 0,
                        i = (i = i + Math.imul(b, X) | 0) + Math.imul(p, J) | 0,
                        a = a + Math.imul(p, X) | 0;
                        var gt = (c + (n = n + Math.imul(d, Q) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(d, tt) | 0) + Math.imul(h, Q) | 0)) << 13) | 0;
                        c = ((a = a + Math.imul(h, tt) | 0) + (i >>> 13) | 0) + (gt >>> 26) | 0,
                        gt &= 67108863,
                        n = Math.imul(S, V),
                        i = (i = Math.imul(S, U)) + Math.imul(k, V) | 0,
                        a = Math.imul(k, U),
                        n = n + Math.imul(E, Y) | 0,
                        i = (i = i + Math.imul(E, F) | 0) + Math.imul(I, Y) | 0,
                        a = a + Math.imul(I, F) | 0,
                        n = n + Math.imul(g, G) | 0,
                        i = (i = i + Math.imul(g, W) | 0) + Math.imul(w, G) | 0,
                        a = a + Math.imul(w, W) | 0,
                        n = n + Math.imul(_, J) | 0,
                        i = (i = i + Math.imul(_, X) | 0) + Math.imul(y, J) | 0,
                        a = a + Math.imul(y, X) | 0,
                        n = n + Math.imul(b, Q) | 0,
                        i = (i = i + Math.imul(b, tt) | 0) + Math.imul(p, Q) | 0,
                        a = a + Math.imul(p, tt) | 0;
                        var wt = (c + (n = n + Math.imul(d, rt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(d, nt) | 0) + Math.imul(h, rt) | 0)) << 13) | 0;
                        c = ((a = a + Math.imul(h, nt) | 0) + (i >>> 13) | 0) + (wt >>> 26) | 0,
                        wt &= 67108863,
                        n = Math.imul(x, V),
                        i = (i = Math.imul(x, U)) + Math.imul(P, V) | 0,
                        a = Math.imul(P, U),
                        n = n + Math.imul(S, Y) | 0,
                        i = (i = i + Math.imul(S, F) | 0) + Math.imul(k, Y) | 0,
                        a = a + Math.imul(k, F) | 0,
                        n = n + Math.imul(E, G) | 0,
                        i = (i = i + Math.imul(E, W) | 0) + Math.imul(I, G) | 0,
                        a = a + Math.imul(I, W) | 0,
                        n = n + Math.imul(g, J) | 0,
                        i = (i = i + Math.imul(g, X) | 0) + Math.imul(w, J) | 0,
                        a = a + Math.imul(w, X) | 0,
                        n = n + Math.imul(_, Q) | 0,
                        i = (i = i + Math.imul(_, tt) | 0) + Math.imul(y, Q) | 0,
                        a = a + Math.imul(y, tt) | 0,
                        n = n + Math.imul(b, rt) | 0,
                        i = (i = i + Math.imul(b, nt) | 0) + Math.imul(p, rt) | 0,
                        a = a + Math.imul(p, nt) | 0;
                        var At = (c + (n = n + Math.imul(d, at) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(d, ft) | 0) + Math.imul(h, at) | 0)) << 13) | 0;
                        c = ((a = a + Math.imul(h, ft) | 0) + (i >>> 13) | 0) + (At >>> 26) | 0,
                        At &= 67108863,
                        n = Math.imul(R, V),
                        i = (i = Math.imul(R, U)) + Math.imul(j, V) | 0,
                        a = Math.imul(j, U),
                        n = n + Math.imul(x, Y) | 0,
                        i = (i = i + Math.imul(x, F) | 0) + Math.imul(P, Y) | 0,
                        a = a + Math.imul(P, F) | 0,
                        n = n + Math.imul(S, G) | 0,
                        i = (i = i + Math.imul(S, W) | 0) + Math.imul(k, G) | 0,
                        a = a + Math.imul(k, W) | 0,
                        n = n + Math.imul(E, J) | 0,
                        i = (i = i + Math.imul(E, X) | 0) + Math.imul(I, J) | 0,
                        a = a + Math.imul(I, X) | 0,
                        n = n + Math.imul(g, Q) | 0,
                        i = (i = i + Math.imul(g, tt) | 0) + Math.imul(w, Q) | 0,
                        a = a + Math.imul(w, tt) | 0,
                        n = n + Math.imul(_, rt) | 0,
                        i = (i = i + Math.imul(_, nt) | 0) + Math.imul(y, rt) | 0,
                        a = a + Math.imul(y, nt) | 0,
                        n = n + Math.imul(b, at) | 0,
                        i = (i = i + Math.imul(b, ft) | 0) + Math.imul(p, at) | 0,
                        a = a + Math.imul(p, ft) | 0;
                        var Et = (c + (n = n + Math.imul(d, st) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(d, ct) | 0) + Math.imul(h, st) | 0)) << 13) | 0;
                        c = ((a = a + Math.imul(h, ct) | 0) + (i >>> 13) | 0) + (Et >>> 26) | 0,
                        Et &= 67108863,
                        n = Math.imul(C, V),
                        i = (i = Math.imul(C, U)) + Math.imul(B, V) | 0,
                        a = Math.imul(B, U),
                        n = n + Math.imul(R, Y) | 0,
                        i = (i = i + Math.imul(R, F) | 0) + Math.imul(j, Y) | 0,
                        a = a + Math.imul(j, F) | 0,
                        n = n + Math.imul(x, G) | 0,
                        i = (i = i + Math.imul(x, W) | 0) + Math.imul(P, G) | 0,
                        a = a + Math.imul(P, W) | 0,
                        n = n + Math.imul(S, J) | 0,
                        i = (i = i + Math.imul(S, X) | 0) + Math.imul(k, J) | 0,
                        a = a + Math.imul(k, X) | 0,
                        n = n + Math.imul(E, Q) | 0,
                        i = (i = i + Math.imul(E, tt) | 0) + Math.imul(I, Q) | 0,
                        a = a + Math.imul(I, tt) | 0,
                        n = n + Math.imul(g, rt) | 0,
                        i = (i = i + Math.imul(g, nt) | 0) + Math.imul(w, rt) | 0,
                        a = a + Math.imul(w, nt) | 0,
                        n = n + Math.imul(_, at) | 0,
                        i = (i = i + Math.imul(_, ft) | 0) + Math.imul(y, at) | 0,
                        a = a + Math.imul(y, ft) | 0,
                        n = n + Math.imul(b, st) | 0,
                        i = (i = i + Math.imul(b, ct) | 0) + Math.imul(p, st) | 0,
                        a = a + Math.imul(p, ct) | 0;
                        var It = (c + (n = n + Math.imul(d, dt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(d, ht) | 0) + Math.imul(h, dt) | 0)) << 13) | 0;
                        c = ((a = a + Math.imul(h, ht) | 0) + (i >>> 13) | 0) + (It >>> 26) | 0,
                        It &= 67108863,
                        n = Math.imul(z, V),
                        i = (i = Math.imul(z, U)) + Math.imul(D, V) | 0,
                        a = Math.imul(D, U),
                        n = n + Math.imul(C, Y) | 0,
                        i = (i = i + Math.imul(C, F) | 0) + Math.imul(B, Y) | 0,
                        a = a + Math.imul(B, F) | 0,
                        n = n + Math.imul(R, G) | 0,
                        i = (i = i + Math.imul(R, W) | 0) + Math.imul(j, G) | 0,
                        a = a + Math.imul(j, W) | 0,
                        n = n + Math.imul(x, J) | 0,
                        i = (i = i + Math.imul(x, X) | 0) + Math.imul(P, J) | 0,
                        a = a + Math.imul(P, X) | 0,
                        n = n + Math.imul(S, Q) | 0,
                        i = (i = i + Math.imul(S, tt) | 0) + Math.imul(k, Q) | 0,
                        a = a + Math.imul(k, tt) | 0,
                        n = n + Math.imul(E, rt) | 0,
                        i = (i = i + Math.imul(E, nt) | 0) + Math.imul(I, rt) | 0,
                        a = a + Math.imul(I, nt) | 0,
                        n = n + Math.imul(g, at) | 0,
                        i = (i = i + Math.imul(g, ft) | 0) + Math.imul(w, at) | 0,
                        a = a + Math.imul(w, ft) | 0,
                        n = n + Math.imul(_, st) | 0,
                        i = (i = i + Math.imul(_, ct) | 0) + Math.imul(y, st) | 0,
                        a = a + Math.imul(y, ct) | 0,
                        n = n + Math.imul(b, dt) | 0,
                        i = (i = i + Math.imul(b, ht) | 0) + Math.imul(p, dt) | 0,
                        a = a + Math.imul(p, ht) | 0;
                        var Mt = (c + (n = n + Math.imul(d, bt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(d, pt) | 0) + Math.imul(h, bt) | 0)) << 13) | 0;
                        c = ((a = a + Math.imul(h, pt) | 0) + (i >>> 13) | 0) + (Mt >>> 26) | 0,
                        Mt &= 67108863,
                        n = Math.imul(z, Y),
                        i = (i = Math.imul(z, F)) + Math.imul(D, Y) | 0,
                        a = Math.imul(D, F),
                        n = n + Math.imul(C, G) | 0,
                        i = (i = i + Math.imul(C, W) | 0) + Math.imul(B, G) | 0,
                        a = a + Math.imul(B, W) | 0,
                        n = n + Math.imul(R, J) | 0,
                        i = (i = i + Math.imul(R, X) | 0) + Math.imul(j, J) | 0,
                        a = a + Math.imul(j, X) | 0,
                        n = n + Math.imul(x, Q) | 0,
                        i = (i = i + Math.imul(x, tt) | 0) + Math.imul(P, Q) | 0,
                        a = a + Math.imul(P, tt) | 0,
                        n = n + Math.imul(S, rt) | 0,
                        i = (i = i + Math.imul(S, nt) | 0) + Math.imul(k, rt) | 0,
                        a = a + Math.imul(k, nt) | 0,
                        n = n + Math.imul(E, at) | 0,
                        i = (i = i + Math.imul(E, ft) | 0) + Math.imul(I, at) | 0,
                        a = a + Math.imul(I, ft) | 0,
                        n = n + Math.imul(g, st) | 0,
                        i = (i = i + Math.imul(g, ct) | 0) + Math.imul(w, st) | 0,
                        a = a + Math.imul(w, ct) | 0,
                        n = n + Math.imul(_, dt) | 0,
                        i = (i = i + Math.imul(_, ht) | 0) + Math.imul(y, dt) | 0,
                        a = a + Math.imul(y, ht) | 0;
                        var St = (c + (n = n + Math.imul(b, bt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(b, pt) | 0) + Math.imul(p, bt) | 0)) << 13) | 0;
                        c = ((a = a + Math.imul(p, pt) | 0) + (i >>> 13) | 0) + (St >>> 26) | 0,
                        St &= 67108863,
                        n = Math.imul(z, G),
                        i = (i = Math.imul(z, W)) + Math.imul(D, G) | 0,
                        a = Math.imul(D, W),
                        n = n + Math.imul(C, J) | 0,
                        i = (i = i + Math.imul(C, X) | 0) + Math.imul(B, J) | 0,
                        a = a + Math.imul(B, X) | 0,
                        n = n + Math.imul(R, Q) | 0,
                        i = (i = i + Math.imul(R, tt) | 0) + Math.imul(j, Q) | 0,
                        a = a + Math.imul(j, tt) | 0,
                        n = n + Math.imul(x, rt) | 0,
                        i = (i = i + Math.imul(x, nt) | 0) + Math.imul(P, rt) | 0,
                        a = a + Math.imul(P, nt) | 0,
                        n = n + Math.imul(S, at) | 0,
                        i = (i = i + Math.imul(S, ft) | 0) + Math.imul(k, at) | 0,
                        a = a + Math.imul(k, ft) | 0,
                        n = n + Math.imul(E, st) | 0,
                        i = (i = i + Math.imul(E, ct) | 0) + Math.imul(I, st) | 0,
                        a = a + Math.imul(I, ct) | 0,
                        n = n + Math.imul(g, dt) | 0,
                        i = (i = i + Math.imul(g, ht) | 0) + Math.imul(w, dt) | 0,
                        a = a + Math.imul(w, ht) | 0;
                        var kt = (c + (n = n + Math.imul(_, bt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(_, pt) | 0) + Math.imul(y, bt) | 0)) << 13) | 0;
                        c = ((a = a + Math.imul(y, pt) | 0) + (i >>> 13) | 0) + (kt >>> 26) | 0,
                        kt &= 67108863,
                        n = Math.imul(z, J),
                        i = (i = Math.imul(z, X)) + Math.imul(D, J) | 0,
                        a = Math.imul(D, X),
                        n = n + Math.imul(C, Q) | 0,
                        i = (i = i + Math.imul(C, tt) | 0) + Math.imul(B, Q) | 0,
                        a = a + Math.imul(B, tt) | 0,
                        n = n + Math.imul(R, rt) | 0,
                        i = (i = i + Math.imul(R, nt) | 0) + Math.imul(j, rt) | 0,
                        a = a + Math.imul(j, nt) | 0,
                        n = n + Math.imul(x, at) | 0,
                        i = (i = i + Math.imul(x, ft) | 0) + Math.imul(P, at) | 0,
                        a = a + Math.imul(P, ft) | 0,
                        n = n + Math.imul(S, st) | 0,
                        i = (i = i + Math.imul(S, ct) | 0) + Math.imul(k, st) | 0,
                        a = a + Math.imul(k, ct) | 0,
                        n = n + Math.imul(E, dt) | 0,
                        i = (i = i + Math.imul(E, ht) | 0) + Math.imul(I, dt) | 0,
                        a = a + Math.imul(I, ht) | 0;
                        var Lt = (c + (n = n + Math.imul(g, bt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(g, pt) | 0) + Math.imul(w, bt) | 0)) << 13) | 0;
                        c = ((a = a + Math.imul(w, pt) | 0) + (i >>> 13) | 0) + (Lt >>> 26) | 0,
                        Lt &= 67108863,
                        n = Math.imul(z, Q),
                        i = (i = Math.imul(z, tt)) + Math.imul(D, Q) | 0,
                        a = Math.imul(D, tt),
                        n = n + Math.imul(C, rt) | 0,
                        i = (i = i + Math.imul(C, nt) | 0) + Math.imul(B, rt) | 0,
                        a = a + Math.imul(B, nt) | 0,
                        n = n + Math.imul(R, at) | 0,
                        i = (i = i + Math.imul(R, ft) | 0) + Math.imul(j, at) | 0,
                        a = a + Math.imul(j, ft) | 0,
                        n = n + Math.imul(x, st) | 0,
                        i = (i = i + Math.imul(x, ct) | 0) + Math.imul(P, st) | 0,
                        a = a + Math.imul(P, ct) | 0,
                        n = n + Math.imul(S, dt) | 0,
                        i = (i = i + Math.imul(S, ht) | 0) + Math.imul(k, dt) | 0,
                        a = a + Math.imul(k, ht) | 0;
                        var xt = (c + (n = n + Math.imul(E, bt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(E, pt) | 0) + Math.imul(I, bt) | 0)) << 13) | 0;
                        c = ((a = a + Math.imul(I, pt) | 0) + (i >>> 13) | 0) + (xt >>> 26) | 0,
                        xt &= 67108863,
                        n = Math.imul(z, rt),
                        i = (i = Math.imul(z, nt)) + Math.imul(D, rt) | 0,
                        a = Math.imul(D, nt),
                        n = n + Math.imul(C, at) | 0,
                        i = (i = i + Math.imul(C, ft) | 0) + Math.imul(B, at) | 0,
                        a = a + Math.imul(B, ft) | 0,
                        n = n + Math.imul(R, st) | 0,
                        i = (i = i + Math.imul(R, ct) | 0) + Math.imul(j, st) | 0,
                        a = a + Math.imul(j, ct) | 0,
                        n = n + Math.imul(x, dt) | 0,
                        i = (i = i + Math.imul(x, ht) | 0) + Math.imul(P, dt) | 0,
                        a = a + Math.imul(P, ht) | 0;
                        var Pt = (c + (n = n + Math.imul(S, bt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(S, pt) | 0) + Math.imul(k, bt) | 0)) << 13) | 0;
                        c = ((a = a + Math.imul(k, pt) | 0) + (i >>> 13) | 0) + (Pt >>> 26) | 0,
                        Pt &= 67108863,
                        n = Math.imul(z, at),
                        i = (i = Math.imul(z, ft)) + Math.imul(D, at) | 0,
                        a = Math.imul(D, ft),
                        n = n + Math.imul(C, st) | 0,
                        i = (i = i + Math.imul(C, ct) | 0) + Math.imul(B, st) | 0,
                        a = a + Math.imul(B, ct) | 0,
                        n = n + Math.imul(R, dt) | 0,
                        i = (i = i + Math.imul(R, ht) | 0) + Math.imul(j, dt) | 0,
                        a = a + Math.imul(j, ht) | 0;
                        var Tt = (c + (n = n + Math.imul(x, bt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(x, pt) | 0) + Math.imul(P, bt) | 0)) << 13) | 0;
                        c = ((a = a + Math.imul(P, pt) | 0) + (i >>> 13) | 0) + (Tt >>> 26) | 0,
                        Tt &= 67108863,
                        n = Math.imul(z, st),
                        i = (i = Math.imul(z, ct)) + Math.imul(D, st) | 0,
                        a = Math.imul(D, ct),
                        n = n + Math.imul(C, dt) | 0,
                        i = (i = i + Math.imul(C, ht) | 0) + Math.imul(B, dt) | 0,
                        a = a + Math.imul(B, ht) | 0;
                        var Rt = (c + (n = n + Math.imul(R, bt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(R, pt) | 0) + Math.imul(j, bt) | 0)) << 13) | 0;
                        c = ((a = a + Math.imul(j, pt) | 0) + (i >>> 13) | 0) + (Rt >>> 26) | 0,
                        Rt &= 67108863,
                        n = Math.imul(z, dt),
                        i = (i = Math.imul(z, ht)) + Math.imul(D, dt) | 0,
                        a = Math.imul(D, ht);
                        var jt = (c + (n = n + Math.imul(C, bt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(C, pt) | 0) + Math.imul(B, bt) | 0)) << 13) | 0;
                        c = ((a = a + Math.imul(B, pt) | 0) + (i >>> 13) | 0) + (jt >>> 26) | 0,
                        jt &= 67108863;
                        var Ot = (c + (n = Math.imul(z, bt)) | 0) + ((8191 & (i = (i = Math.imul(z, pt)) + Math.imul(D, bt) | 0)) << 13) | 0;
                        return c = ((a = Math.imul(D, pt)) + (i >>> 13) | 0) + (Ot >>> 26) | 0,
                        Ot &= 67108863,
                        s[0] = vt,
                        s[1] = _t,
                        s[2] = yt,
                        s[3] = mt,
                        s[4] = gt,
                        s[5] = wt,
                        s[6] = At,
                        s[7] = Et,
                        s[8] = It,
                        s[9] = Mt,
                        s[10] = St,
                        s[11] = kt,
                        s[12] = Lt,
                        s[13] = xt,
                        s[14] = Pt,
                        s[15] = Tt,
                        s[16] = Rt,
                        s[17] = jt,
                        s[18] = Ot,
                        0 !== c && (s[19] = c,
                        r.length++),
                        r
                    };
                    function l(t, e, r) {
                        return (new b).mulp(t, e, r)
                    }
                    function b(t, e) {
                        this.x = t,
                        this.y = e
                    }
                    Math.imul || (h = d),
                    i.prototype.mulTo = function(t, e) {
                        var r = this.length + t.length;
                        return 10 === this.length && 10 === t.length ? h(this, t, e) : r < 63 ? d(this, t, e) : r < 1024 ? function(t, e, r) {
                            r.negative = e.negative ^ t.negative,
                            r.length = t.length + e.length;
                            for (var n = 0, i = 0, a = 0; a < r.length - 1; a++) {
                                var f = i;
                                i = 0;
                                for (var o = 67108863 & n, s = Math.min(a, e.length - 1), c = Math.max(0, a - t.length + 1); c <= s; c++) {
                                    var u = a - c
                                      , d = (0 | t.words[u]) * (0 | e.words[c])
                                      , h = 67108863 & d;
                                    o = 67108863 & (h = h + o | 0),
                                    i += (f = (f = f + (d / 67108864 | 0) | 0) + (h >>> 26) | 0) >>> 26,
                                    f &= 67108863
                                }
                                r.words[a] = o,
                                n = f,
                                f = i
                            }
                            return 0 !== n ? r.words[a] = n : r.length--,
                            r.strip()
                        }(this, t, e) : l(this, t, e)
                    }
                    ,
                    b.prototype.makeRBT = function(t) {
                        for (var e = new Array(t), r = i.prototype._countBits(t) - 1, n = 0; n < t; n++)
                            e[n] = this.revBin(n, r, t);
                        return e
                    }
                    ,
                    b.prototype.revBin = function(t, e, r) {
                        if (0 === t || t === r - 1)
                            return t;
                        for (var n = 0, i = 0; i < e; i++)
                            n |= (1 & t) << e - i - 1,
                            t >>= 1;
                        return n
                    }
                    ,
                    b.prototype.permute = function(t, e, r, n, i, a) {
                        for (var f = 0; f < a; f++)
                            n[f] = e[t[f]],
                            i[f] = r[t[f]]
                    }
                    ,
                    b.prototype.transform = function(t, e, r, n, i, a) {
                        this.permute(a, t, e, r, n, i);
                        for (var f = 1; f < i; f <<= 1)
                            for (var o = f << 1, s = Math.cos(2 * Math.PI / o), c = Math.sin(2 * Math.PI / o), u = 0; u < i; u += o)
                                for (var d = s, h = c, l = 0; l < f; l++) {
                                    var b = r[u + l]
                                      , p = n[u + l]
                                      , v = r[u + l + f]
                                      , _ = n[u + l + f]
                                      , y = d * v - h * _;
                                    _ = d * _ + h * v,
                                    v = y,
                                    r[u + l] = b + v,
                                    n[u + l] = p + _,
                                    r[u + l + f] = b - v,
                                    n[u + l + f] = p - _,
                                    l !== o && (y = s * d - c * h,
                                    h = s * h + c * d,
                                    d = y)
                                }
                    }
                    ,
                    b.prototype.guessLen13b = function(t, e) {
                        var r = 1 | Math.max(e, t)
                          , n = 1 & r
                          , i = 0;
                        for (r = r / 2 | 0; r; r >>>= 1)
                            i++;
                        return 1 << i + 1 + n
                    }
                    ,
                    b.prototype.conjugate = function(t, e, r) {
                        if (!(r <= 1))
                            for (var n = 0; n < r / 2; n++) {
                                var i = t[n];
                                t[n] = t[r - n - 1],
                                t[r - n - 1] = i,
                                i = e[n],
                                e[n] = -e[r - n - 1],
                                e[r - n - 1] = -i
                            }
                    }
                    ,
                    b.prototype.normalize13b = function(t, e) {
                        for (var r = 0, n = 0; n < e / 2; n++) {
                            var i = 8192 * Math.round(t[2 * n + 1] / e) + Math.round(t[2 * n] / e) + r;
                            t[n] = 67108863 & i,
                            r = i < 67108864 ? 0 : i / 67108864 | 0
                        }
                        return t
                    }
                    ,
                    b.prototype.convert13b = function(t, e, n, i) {
                        for (var a = 0, f = 0; f < e; f++)
                            a += 0 | t[f],
                            n[2 * f] = 8191 & a,
                            a >>>= 13,
                            n[2 * f + 1] = 8191 & a,
                            a >>>= 13;
                        for (f = 2 * e; f < i; ++f)
                            n[f] = 0;
                        r(0 === a),
                        r(0 == (-8192 & a))
                    }
                    ,
                    b.prototype.stub = function(t) {
                        for (var e = new Array(t), r = 0; r < t; r++)
                            e[r] = 0;
                        return e
                    }
                    ,
                    b.prototype.mulp = function(t, e, r) {
                        var n = 2 * this.guessLen13b(t.length, e.length)
                          , i = this.makeRBT(n)
                          , a = this.stub(n)
                          , f = new Array(n)
                          , o = new Array(n)
                          , s = new Array(n)
                          , c = new Array(n)
                          , u = new Array(n)
                          , d = new Array(n)
                          , h = r.words;
                        h.length = n,
                        this.convert13b(t.words, t.length, f, n),
                        this.convert13b(e.words, e.length, c, n),
                        this.transform(f, a, o, s, n, i),
                        this.transform(c, a, u, d, n, i);
                        for (var l = 0; l < n; l++) {
                            var b = o[l] * u[l] - s[l] * d[l];
                            s[l] = o[l] * d[l] + s[l] * u[l],
                            o[l] = b
                        }
                        return this.conjugate(o, s, n),
                        this.transform(o, s, h, a, n, i),
                        this.conjugate(h, a, n),
                        this.normalize13b(h, n),
                        r.negative = t.negative ^ e.negative,
                        r.length = t.length + e.length,
                        r.strip()
                    }
                    ,
                    i.prototype.mul = function(t) {
                        var e = new i(null);
                        return e.words = new Array(this.length + t.length),
                        this.mulTo(t, e)
                    }
                    ,
                    i.prototype.mulf = function(t) {
                        var e = new i(null);
                        return e.words = new Array(this.length + t.length),
                        l(this, t, e)
                    }
                    ,
                    i.prototype.imul = function(t) {
                        return this.clone().mulTo(t, this)
                    }
                    ,
                    i.prototype.imuln = function(t) {
                        r("number" == typeof t),
                        r(t < 67108864);
                        for (var e = 0, n = 0; n < this.length; n++) {
                            var i = (0 | this.words[n]) * t
                              , a = (67108863 & i) + (67108863 & e);
                            e >>= 26,
                            e += i / 67108864 | 0,
                            e += a >>> 26,
                            this.words[n] = 67108863 & a
                        }
                        return 0 !== e && (this.words[n] = e,
                        this.length++),
                        this
                    }
                    ,
                    i.prototype.muln = function(t) {
                        return this.clone().imuln(t)
                    }
                    ,
                    i.prototype.sqr = function() {
                        return this.mul(this)
                    }
                    ,
                    i.prototype.isqr = function() {
                        return this.imul(this.clone())
                    }
                    ,
                    i.prototype.pow = function(t) {
                        var e = function(t) {
                            for (var e = new Array(t.bitLength()), r = 0; r < e.length; r++) {
                                var n = r / 26 | 0
                                  , i = r % 26;
                                e[r] = (t.words[n] & 1 << i) >>> i
                            }
                            return e
                        }(t);
                        if (0 === e.length)
                            return new i(1);
                        for (var r = this, n = 0; n < e.length && 0 === e[n]; n++,
                        r = r.sqr())
                            ;
                        if (++n < e.length)
                            for (var a = r.sqr(); n < e.length; n++,
                            a = a.sqr())
                                0 !== e[n] && (r = r.mul(a));
                        return r
                    }
                    ,
                    i.prototype.iushln = function(t) {
                        r("number" == typeof t && t >= 0);
                        var e, n = t % 26, i = (t - n) / 26, a = 67108863 >>> 26 - n << 26 - n;
                        if (0 !== n) {
                            var f = 0;
                            for (e = 0; e < this.length; e++) {
                                var o = this.words[e] & a
                                  , s = (0 | this.words[e]) - o << n;
                                this.words[e] = s | f,
                                f = o >>> 26 - n
                            }
                            f && (this.words[e] = f,
                            this.length++)
                        }
                        if (0 !== i) {
                            for (e = this.length - 1; e >= 0; e--)
                                this.words[e + i] = this.words[e];
                            for (e = 0; e < i; e++)
                                this.words[e] = 0;
                            this.length += i
                        }
                        return this.strip()
                    }
                    ,
                    i.prototype.ishln = function(t) {
                        return r(0 === this.negative),
                        this.iushln(t)
                    }
                    ,
                    i.prototype.iushrn = function(t, e, n) {
                        var i;
                        r("number" == typeof t && t >= 0),
                        i = e ? (e - e % 26) / 26 : 0;
                        var a = t % 26
                          , f = Math.min((t - a) / 26, this.length)
                          , o = 67108863 ^ 67108863 >>> a << a
                          , s = n;
                        if (i -= f,
                        i = Math.max(0, i),
                        s) {
                            for (var c = 0; c < f; c++)
                                s.words[c] = this.words[c];
                            s.length = f
                        }
                        if (0 === f)
                            ;
                        else if (this.length > f)
                            for (this.length -= f,
                            c = 0; c < this.length; c++)
                                this.words[c] = this.words[c + f];
                        else
                            this.words[0] = 0,
                            this.length = 1;
                        var u = 0;
                        for (c = this.length - 1; c >= 0 && (0 !== u || c >= i); c--) {
                            var d = 0 | this.words[c];
                            this.words[c] = u << 26 - a | d >>> a,
                            u = d & o
                        }
                        return s && 0 !== u && (s.words[s.length++] = u),
                        0 === this.length && (this.words[0] = 0,
                        this.length = 1),
                        this.strip()
                    }
                    ,
                    i.prototype.ishrn = function(t, e, n) {
                        return r(0 === this.negative),
                        this.iushrn(t, e, n)
                    }
                    ,
                    i.prototype.shln = function(t) {
                        return this.clone().ishln(t)
                    }
                    ,
                    i.prototype.ushln = function(t) {
                        return this.clone().iushln(t)
                    }
                    ,
                    i.prototype.shrn = function(t) {
                        return this.clone().ishrn(t)
                    }
                    ,
                    i.prototype.ushrn = function(t) {
                        return this.clone().iushrn(t)
                    }
                    ,
                    i.prototype.testn = function(t) {
                        r("number" == typeof t && t >= 0);
                        var e = t % 26
                          , n = (t - e) / 26
                          , i = 1 << e;
                        return !(this.length <= n) && !!(this.words[n] & i)
                    }
                    ,
                    i.prototype.imaskn = function(t) {
                        r("number" == typeof t && t >= 0);
                        var e = t % 26
                          , n = (t - e) / 26;
                        if (r(0 === this.negative, "imaskn works only with positive numbers"),
                        this.length <= n)
                            return this;
                        if (0 !== e && n++,
                        this.length = Math.min(n, this.length),
                        0 !== e) {
                            var i = 67108863 ^ 67108863 >>> e << e;
                            this.words[this.length - 1] &= i
                        }
                        return this.strip()
                    }
                    ,
                    i.prototype.maskn = function(t) {
                        return this.clone().imaskn(t)
                    }
                    ,
                    i.prototype.iaddn = function(t) {
                        return r("number" == typeof t),
                        r(t < 67108864),
                        t < 0 ? this.isubn(-t) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) < t ? (this.words[0] = t - (0 | this.words[0]),
                        this.negative = 0,
                        this) : (this.negative = 0,
                        this.isubn(t),
                        this.negative = 1,
                        this) : this._iaddn(t)
                    }
                    ,
                    i.prototype._iaddn = function(t) {
                        this.words[0] += t;
                        for (var e = 0; e < this.length && this.words[e] >= 67108864; e++)
                            this.words[e] -= 67108864,
                            e === this.length - 1 ? this.words[e + 1] = 1 : this.words[e + 1]++;
                        return this.length = Math.max(this.length, e + 1),
                        this
                    }
                    ,
                    i.prototype.isubn = function(t) {
                        if (r("number" == typeof t),
                        r(t < 67108864),
                        t < 0)
                            return this.iaddn(-t);
                        if (0 !== this.negative)
                            return this.negative = 0,
                            this.iaddn(t),
                            this.negative = 1,
                            this;
                        if (this.words[0] -= t,
                        1 === this.length && this.words[0] < 0)
                            this.words[0] = -this.words[0],
                            this.negative = 1;
                        else
                            for (var e = 0; e < this.length && this.words[e] < 0; e++)
                                this.words[e] += 67108864,
                                this.words[e + 1] -= 1;
                        return this.strip()
                    }
                    ,
                    i.prototype.addn = function(t) {
                        return this.clone().iaddn(t)
                    }
                    ,
                    i.prototype.subn = function(t) {
                        return this.clone().isubn(t)
                    }
                    ,
                    i.prototype.iabs = function() {
                        return this.negative = 0,
                        this
                    }
                    ,
                    i.prototype.abs = function() {
                        return this.clone().iabs()
                    }
                    ,
                    i.prototype._ishlnsubmul = function(t, e, n) {
                        var i, a, f = t.length + n;
                        this._expand(f);
                        var o = 0;
                        for (i = 0; i < t.length; i++) {
                            a = (0 | this.words[i + n]) + o;
                            var s = (0 | t.words[i]) * e;
                            o = ((a -= 67108863 & s) >> 26) - (s / 67108864 | 0),
                            this.words[i + n] = 67108863 & a
                        }
                        for (; i < this.length - n; i++)
                            o = (a = (0 | this.words[i + n]) + o) >> 26,
                            this.words[i + n] = 67108863 & a;
                        if (0 === o)
                            return this.strip();
                        for (r(-1 === o),
                        o = 0,
                        i = 0; i < this.length; i++)
                            o = (a = -(0 | this.words[i]) + o) >> 26,
                            this.words[i] = 67108863 & a;
                        return this.negative = 1,
                        this.strip()
                    }
                    ,
                    i.prototype._wordDiv = function(t, e) {
                        var r = (this.length,
                        t.length)
                          , n = this.clone()
                          , a = t
                          , f = 0 | a.words[a.length - 1];
                        0 !== (r = 26 - this._countBits(f)) && (a = a.ushln(r),
                        n.iushln(r),
                        f = 0 | a.words[a.length - 1]);
                        var o, s = n.length - a.length;
                        if ("mod" !== e) {
                            (o = new i(null)).length = s + 1,
                            o.words = new Array(o.length);
                            for (var c = 0; c < o.length; c++)
                                o.words[c] = 0
                        }
                        var u = n.clone()._ishlnsubmul(a, 1, s);
                        0 === u.negative && (n = u,
                        o && (o.words[s] = 1));
                        for (var d = s - 1; d >= 0; d--) {
                            var h = 67108864 * (0 | n.words[a.length + d]) + (0 | n.words[a.length + d - 1]);
                            for (h = Math.min(h / f | 0, 67108863),
                            n._ishlnsubmul(a, h, d); 0 !== n.negative; )
                                h--,
                                n.negative = 0,
                                n._ishlnsubmul(a, 1, d),
                                n.isZero() || (n.negative ^= 1);
                            o && (o.words[d] = h)
                        }
                        return o && o.strip(),
                        n.strip(),
                        "div" !== e && 0 !== r && n.iushrn(r),
                        {
                            div: o || null,
                            mod: n
                        }
                    }
                    ,
                    i.prototype.divmod = function(t, e, n) {
                        return r(!t.isZero()),
                        this.isZero() ? {
                            div: new i(0),
                            mod: new i(0)
                        } : 0 !== this.negative && 0 === t.negative ? (o = this.neg().divmod(t, e),
                        "mod" !== e && (a = o.div.neg()),
                        "div" !== e && (f = o.mod.neg(),
                        n && 0 !== f.negative && f.iadd(t)),
                        {
                            div: a,
                            mod: f
                        }) : 0 === this.negative && 0 !== t.negative ? (o = this.divmod(t.neg(), e),
                        "mod" !== e && (a = o.div.neg()),
                        {
                            div: a,
                            mod: o.mod
                        }) : 0 != (this.negative & t.negative) ? (o = this.neg().divmod(t.neg(), e),
                        "div" !== e && (f = o.mod.neg(),
                        n && 0 !== f.negative && f.isub(t)),
                        {
                            div: o.div,
                            mod: f
                        }) : t.length > this.length || this.cmp(t) < 0 ? {
                            div: new i(0),
                            mod: this
                        } : 1 === t.length ? "div" === e ? {
                            div: this.divn(t.words[0]),
                            mod: null
                        } : "mod" === e ? {
                            div: null,
                            mod: new i(this.modn(t.words[0]))
                        } : {
                            div: this.divn(t.words[0]),
                            mod: new i(this.modn(t.words[0]))
                        } : this._wordDiv(t, e);
                        var a, f, o
                    }
                    ,
                    i.prototype.div = function(t) {
                        return this.divmod(t, "div", !1).div
                    }
                    ,
                    i.prototype.mod = function(t) {
                        return this.divmod(t, "mod", !1).mod
                    }
                    ,
                    i.prototype.umod = function(t) {
                        return this.divmod(t, "mod", !0).mod
                    }
                    ,
                    i.prototype.divRound = function(t) {
                        var e = this.divmod(t);
                        if (e.mod.isZero())
                            return e.div;
                        var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod
                          , n = t.ushrn(1)
                          , i = t.andln(1)
                          , a = r.cmp(n);
                        return a < 0 || 1 === i && 0 === a ? e.div : 0 !== e.div.negative ? e.div.isubn(1) : e.div.iaddn(1)
                    }
                    ,
                    i.prototype.modn = function(t) {
                        r(t <= 67108863);
                        for (var e = (1 << 26) % t, n = 0, i = this.length - 1; i >= 0; i--)
                            n = (e * n + (0 | this.words[i])) % t;
                        return n
                    }
                    ,
                    i.prototype.idivn = function(t) {
                        r(t <= 67108863);
                        for (var e = 0, n = this.length - 1; n >= 0; n--) {
                            var i = (0 | this.words[n]) + 67108864 * e;
                            this.words[n] = i / t | 0,
                            e = i % t
                        }
                        return this.strip()
                    }
                    ,
                    i.prototype.divn = function(t) {
                        return this.clone().idivn(t)
                    }
                    ,
                    i.prototype.egcd = function(t) {
                        r(0 === t.negative),
                        r(!t.isZero());
                        var e = this
                          , n = t.clone();
                        e = 0 !== e.negative ? e.umod(t) : e.clone();
                        for (var a = new i(1), f = new i(0), o = new i(0), s = new i(1), c = 0; e.isEven() && n.isEven(); )
                            e.iushrn(1),
                            n.iushrn(1),
                            ++c;
                        for (var u = n.clone(), d = e.clone(); !e.isZero(); ) {
                            for (var h = 0, l = 1; 0 == (e.words[0] & l) && h < 26; ++h,
                            l <<= 1)
                                ;
                            if (h > 0)
                                for (e.iushrn(h); h-- > 0; )
                                    (a.isOdd() || f.isOdd()) && (a.iadd(u),
                                    f.isub(d)),
                                    a.iushrn(1),
                                    f.iushrn(1);
                            for (var b = 0, p = 1; 0 == (n.words[0] & p) && b < 26; ++b,
                            p <<= 1)
                                ;
                            if (b > 0)
                                for (n.iushrn(b); b-- > 0; )
                                    (o.isOdd() || s.isOdd()) && (o.iadd(u),
                                    s.isub(d)),
                                    o.iushrn(1),
                                    s.iushrn(1);
                            e.cmp(n) >= 0 ? (e.isub(n),
                            a.isub(o),
                            f.isub(s)) : (n.isub(e),
                            o.isub(a),
                            s.isub(f))
                        }
                        return {
                            a: o,
                            b: s,
                            gcd: n.iushln(c)
                        }
                    }
                    ,
                    i.prototype._invmp = function(t) {
                        r(0 === t.negative),
                        r(!t.isZero());
                        var e = this
                          , n = t.clone();
                        e = 0 !== e.negative ? e.umod(t) : e.clone();
                        for (var a, f = new i(1), o = new i(0), s = n.clone(); e.cmpn(1) > 0 && n.cmpn(1) > 0; ) {
                            for (var c = 0, u = 1; 0 == (e.words[0] & u) && c < 26; ++c,
                            u <<= 1)
                                ;
                            if (c > 0)
                                for (e.iushrn(c); c-- > 0; )
                                    f.isOdd() && f.iadd(s),
                                    f.iushrn(1);
                            for (var d = 0, h = 1; 0 == (n.words[0] & h) && d < 26; ++d,
                            h <<= 1)
                                ;
                            if (d > 0)
                                for (n.iushrn(d); d-- > 0; )
                                    o.isOdd() && o.iadd(s),
                                    o.iushrn(1);
                            e.cmp(n) >= 0 ? (e.isub(n),
                            f.isub(o)) : (n.isub(e),
                            o.isub(f))
                        }
                        return (a = 0 === e.cmpn(1) ? f : o).cmpn(0) < 0 && a.iadd(t),
                        a
                    }
                    ,
                    i.prototype.gcd = function(t) {
                        if (this.isZero())
                            return t.abs();
                        if (t.isZero())
                            return this.abs();
                        var e = this.clone()
                          , r = t.clone();
                        e.negative = 0,
                        r.negative = 0;
                        for (var n = 0; e.isEven() && r.isEven(); n++)
                            e.iushrn(1),
                            r.iushrn(1);
                        for (; ; ) {
                            for (; e.isEven(); )
                                e.iushrn(1);
                            for (; r.isEven(); )
                                r.iushrn(1);
                            var i = e.cmp(r);
                            if (i < 0) {
                                var a = e;
                                e = r,
                                r = a
                            } else if (0 === i || 0 === r.cmpn(1))
                                break;
                            e.isub(r)
                        }
                        return r.iushln(n)
                    }
                    ,
                    i.prototype.invm = function(t) {
                        return this.egcd(t).a.umod(t)
                    }
                    ,
                    i.prototype.isEven = function() {
                        return 0 == (1 & this.words[0])
                    }
                    ,
                    i.prototype.isOdd = function() {
                        return 1 == (1 & this.words[0])
                    }
                    ,
                    i.prototype.andln = function(t) {
                        return this.words[0] & t
                    }
                    ,
                    i.prototype.bincn = function(t) {
                        r("number" == typeof t);
                        var e = t % 26
                          , n = (t - e) / 26
                          , i = 1 << e;
                        if (this.length <= n)
                            return this._expand(n + 1),
                            this.words[n] |= i,
                            this;
                        for (var a = i, f = n; 0 !== a && f < this.length; f++) {
                            var o = 0 | this.words[f];
                            a = (o += a) >>> 26,
                            o &= 67108863,
                            this.words[f] = o
                        }
                        return 0 !== a && (this.words[f] = a,
                        this.length++),
                        this
                    }
                    ,
                    i.prototype.isZero = function() {
                        return 1 === this.length && 0 === this.words[0]
                    }
                    ,
                    i.prototype.cmpn = function(t) {
                        var e, n = t < 0;
                        if (0 !== this.negative && !n)
                            return -1;
                        if (0 === this.negative && n)
                            return 1;
                        if (this.strip(),
                        this.length > 1)
                            e = 1;
                        else {
                            n && (t = -t),
                            r(t <= 67108863, "Number is too big");
                            var i = 0 | this.words[0];
                            e = i === t ? 0 : i < t ? -1 : 1
                        }
                        return 0 !== this.negative ? 0 | -e : e
                    }
                    ,
                    i.prototype.cmp = function(t) {
                        if (0 !== this.negative && 0 === t.negative)
                            return -1;
                        if (0 === this.negative && 0 !== t.negative)
                            return 1;
                        var e = this.ucmp(t);
                        return 0 !== this.negative ? 0 | -e : e
                    }
                    ,
                    i.prototype.ucmp = function(t) {
                        if (this.length > t.length)
                            return 1;
                        if (this.length < t.length)
                            return -1;
                        for (var e = 0, r = this.length - 1; r >= 0; r--) {
                            var n = 0 | this.words[r]
                              , i = 0 | t.words[r];
                            if (n !== i) {
                                n < i ? e = -1 : n > i && (e = 1);
                                break
                            }
                        }
                        return e
                    }
                    ,
                    i.prototype.gtn = function(t) {
                        return 1 === this.cmpn(t)
                    }
                    ,
                    i.prototype.gt = function(t) {
                        return 1 === this.cmp(t)
                    }
                    ,
                    i.prototype.gten = function(t) {
                        return this.cmpn(t) >= 0
                    }
                    ,
                    i.prototype.gte = function(t) {
                        return this.cmp(t) >= 0
                    }
                    ,
                    i.prototype.ltn = function(t) {
                        return -1 === this.cmpn(t)
                    }
                    ,
                    i.prototype.lt = function(t) {
                        return -1 === this.cmp(t)
                    }
                    ,
                    i.prototype.lten = function(t) {
                        return this.cmpn(t) <= 0
                    }
                    ,
                    i.prototype.lte = function(t) {
                        return this.cmp(t) <= 0
                    }
                    ,
                    i.prototype.eqn = function(t) {
                        return 0 === this.cmpn(t)
                    }
                    ,
                    i.prototype.eq = function(t) {
                        return 0 === this.cmp(t)
                    }
                    ,
                    i.red = function(t) {
                        return new A(t)
                    }
                    ,
                    i.prototype.toRed = function(t) {
                        return r(!this.red, "Already a number in reduction context"),
                        r(0 === this.negative, "red works only with positives"),
                        t.convertTo(this)._forceRed(t)
                    }
                    ,
                    i.prototype.fromRed = function() {
                        return r(this.red, "fromRed works only with numbers in reduction context"),
                        this.red.convertFrom(this)
                    }
                    ,
                    i.prototype._forceRed = function(t) {
                        return this.red = t,
                        this
                    }
                    ,
                    i.prototype.forceRed = function(t) {
                        return r(!this.red, "Already a number in reduction context"),
                        this._forceRed(t)
                    }
                    ,
                    i.prototype.redAdd = function(t) {
                        return r(this.red, "redAdd works only with red numbers"),
                        this.red.add(this, t)
                    }
                    ,
                    i.prototype.redIAdd = function(t) {
                        return r(this.red, "redIAdd works only with red numbers"),
                        this.red.iadd(this, t)
                    }
                    ,
                    i.prototype.redSub = function(t) {
                        return r(this.red, "redSub works only with red numbers"),
                        this.red.sub(this, t)
                    }
                    ,
                    i.prototype.redISub = function(t) {
                        return r(this.red, "redISub works only with red numbers"),
                        this.red.isub(this, t)
                    }
                    ,
                    i.prototype.redShl = function(t) {
                        return r(this.red, "redShl works only with red numbers"),
                        this.red.shl(this, t)
                    }
                    ,
                    i.prototype.redMul = function(t) {
                        return r(this.red, "redMul works only with red numbers"),
                        this.red._verify2(this, t),
                        this.red.mul(this, t)
                    }
                    ,
                    i.prototype.redIMul = function(t) {
                        return r(this.red, "redMul works only with red numbers"),
                        this.red._verify2(this, t),
                        this.red.imul(this, t)
                    }
                    ,
                    i.prototype.redSqr = function() {
                        return r(this.red, "redSqr works only with red numbers"),
                        this.red._verify1(this),
                        this.red.sqr(this)
                    }
                    ,
                    i.prototype.redISqr = function() {
                        return r(this.red, "redISqr works only with red numbers"),
                        this.red._verify1(this),
                        this.red.isqr(this)
                    }
                    ,
                    i.prototype.redSqrt = function() {
                        return r(this.red, "redSqrt works only with red numbers"),
                        this.red._verify1(this),
                        this.red.sqrt(this)
                    }
                    ,
                    i.prototype.redInvm = function() {
                        return r(this.red, "redInvm works only with red numbers"),
                        this.red._verify1(this),
                        this.red.invm(this)
                    }
                    ,
                    i.prototype.redNeg = function() {
                        return r(this.red, "redNeg works only with red numbers"),
                        this.red._verify1(this),
                        this.red.neg(this)
                    }
                    ,
                    i.prototype.redPow = function(t) {
                        return r(this.red && !t.red, "redPow(normalNum)"),
                        this.red._verify1(this),
                        this.red.pow(this, t)
                    }
                    ;
                    var p = {
                        k256: null,
                        p224: null,
                        p192: null,
                        p25519: null
                    };
                    function v(t, e) {
                        this.name = t,
                        this.p = new i(e,16),
                        this.n = this.p.bitLength(),
                        this.k = new i(1).iushln(this.n).isub(this.p),
                        this.tmp = this._tmp()
                    }
                    function y() {
                        v.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                    }
                    function m() {
                        v.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                    }
                    function g() {
                        v.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                    }
                    function w() {
                        v.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                    }
                    function A(t) {
                        if ("string" == typeof t) {
                            var e = i._prime(t);
                            this.m = e.p,
                            this.prime = e
                        } else
                            r(t.gtn(1), "modulus must be greater than 1"),
                            this.m = t,
                            this.prime = null
                    }
                    function E(t) {
                        A.call(this, t),
                        this.shift = this.m.bitLength(),
                        this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26),
                        this.r = new i(1).iushln(this.shift),
                        this.r2 = this.imod(this.r.sqr()),
                        this.rinv = this.r._invmp(this.m),
                        this.minv = this.rinv.mul(this.r).isubn(1).div(this.m),
                        this.minv = this.minv.umod(this.r),
                        this.minv = this.r.sub(this.minv)
                    }
                    v.prototype._tmp = function() {
                        var t = new i(null);
                        return t.words = new Array(Math.ceil(this.n / 13)),
                        t
                    }
                    ,
                    v.prototype.ireduce = function(t) {
                        var e, r = t;
                        do {
                            this.split(r, this.tmp),
                            e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength()
                        } while (e > this.n);
                        var n = e < this.n ? -1 : r.ucmp(this.p);
                        return 0 === n ? (r.words[0] = 0,
                        r.length = 1) : n > 0 ? r.isub(this.p) : r.strip(),
                        r
                    }
                    ,
                    v.prototype.split = function(t, e) {
                        t.iushrn(this.n, 0, e)
                    }
                    ,
                    v.prototype.imulK = function(t) {
                        return t.imul(this.k)
                    }
                    ,
                    n(y, v),
                    y.prototype.split = function(t, e) {
                        for (var r = Math.min(t.length, 9), n = 0; n < r; n++)
                            e.words[n] = t.words[n];
                        if (e.length = r,
                        t.length <= 9)
                            return t.words[0] = 0,
                            void (t.length = 1);
                        var i = t.words[9];
                        for (e.words[e.length++] = 4194303 & i,
                        n = 10; n < t.length; n++) {
                            var a = 0 | t.words[n];
                            t.words[n - 10] = (4194303 & a) << 4 | i >>> 22,
                            i = a
                        }
                        i >>>= 22,
                        t.words[n - 10] = i,
                        0 === i && t.length > 10 ? t.length -= 10 : t.length -= 9
                    }
                    ,
                    y.prototype.imulK = function(t) {
                        t.words[t.length] = 0,
                        t.words[t.length + 1] = 0,
                        t.length += 2;
                        for (var e = 0, r = 0; r < t.length; r++) {
                            var n = 0 | t.words[r];
                            e += 977 * n,
                            t.words[r] = 67108863 & e,
                            e = 64 * n + (e / 67108864 | 0)
                        }
                        return 0 === t.words[t.length - 1] && (t.length--,
                        0 === t.words[t.length - 1] && t.length--),
                        t
                    }
                    ,
                    n(m, v),
                    n(g, v),
                    n(w, v),
                    w.prototype.imulK = function(t) {
                        for (var e = 0, r = 0; r < t.length; r++) {
                            var n = 19 * (0 | t.words[r]) + e
                              , i = 67108863 & n;
                            n >>>= 26,
                            t.words[r] = i,
                            e = n
                        }
                        return 0 !== e && (t.words[t.length++] = e),
                        t
                    }
                    ,
                    i._prime = function(t) {
                        if (p[t])
                            return p[t];
                        var e;
                        if ("k256" === t)
                            e = new y;
                        else if ("p224" === t)
                            e = new m;
                        else if ("p192" === t)
                            e = new g;
                        else {
                            if ("p25519" !== t)
                                throw new Error("Unknown prime " + t);
                            e = new w
                        }
                        return p[t] = e,
                        e
                    }
                    ,
                    A.prototype._verify1 = function(t) {
                        r(0 === t.negative, "red works only with positives"),
                        r(t.red, "red works only with red numbers")
                    }
                    ,
                    A.prototype._verify2 = function(t, e) {
                        r(0 == (t.negative | e.negative), "red works only with positives"),
                        r(t.red && t.red === e.red, "red works only with red numbers")
                    }
                    ,
                    A.prototype.imod = function(t) {
                        return this.prime ? this.prime.ireduce(t)._forceRed(this) : t.umod(this.m)._forceRed(this)
                    }
                    ,
                    A.prototype.neg = function(t) {
                        return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
                    }
                    ,
                    A.prototype.add = function(t, e) {
                        this._verify2(t, e);
                        var r = t.add(e);
                        return r.cmp(this.m) >= 0 && r.isub(this.m),
                        r._forceRed(this)
                    }
                    ,
                    A.prototype.iadd = function(t, e) {
                        this._verify2(t, e);
                        var r = t.iadd(e);
                        return r.cmp(this.m) >= 0 && r.isub(this.m),
                        r
                    }
                    ,
                    A.prototype.sub = function(t, e) {
                        this._verify2(t, e);
                        var r = t.sub(e);
                        return r.cmpn(0) < 0 && r.iadd(this.m),
                        r._forceRed(this)
                    }
                    ,
                    A.prototype.isub = function(t, e) {
                        this._verify2(t, e);
                        var r = t.isub(e);
                        return r.cmpn(0) < 0 && r.iadd(this.m),
                        r
                    }
                    ,
                    A.prototype.shl = function(t, e) {
                        return this._verify1(t),
                        this.imod(t.ushln(e))
                    }
                    ,
                    A.prototype.imul = function(t, e) {
                        return this._verify2(t, e),
                        this.imod(t.imul(e))
                    }
                    ,
                    A.prototype.mul = function(t, e) {
                        return this._verify2(t, e),
                        this.imod(t.mul(e))
                    }
                    ,
                    A.prototype.isqr = function(t) {
                        return this.imul(t, t.clone())
                    }
                    ,
                    A.prototype.sqr = function(t) {
                        return this.mul(t, t)
                    }
                    ,
                    A.prototype.sqrt = function(t) {
                        if (t.isZero())
                            return t.clone();
                        var e = this.m.andln(3);
                        if (r(e % 2 == 1),
                        3 === e) {
                            var n = this.m.add(new i(1)).iushrn(2);
                            return this.pow(t, n)
                        }
                        for (var a = this.m.subn(1), f = 0; !a.isZero() && 0 === a.andln(1); )
                            f++,
                            a.iushrn(1);
                        r(!a.isZero());
                        var o = new i(1).toRed(this)
                          , s = o.redNeg()
                          , c = this.m.subn(1).iushrn(1)
                          , u = this.m.bitLength();
                        for (u = new i(2 * u * u).toRed(this); 0 !== this.pow(u, c).cmp(s); )
                            u.redIAdd(s);
                        for (var d = this.pow(u, a), h = this.pow(t, a.addn(1).iushrn(1)), l = this.pow(t, a), b = f; 0 !== l.cmp(o); ) {
                            for (var p = l, v = 0; 0 !== p.cmp(o); v++)
                                p = p.redSqr();
                            r(v < b);
                            var _ = this.pow(d, new i(1).iushln(b - v - 1));
                            h = h.redMul(_),
                            d = _.redSqr(),
                            l = l.redMul(d),
                            b = v
                        }
                        return h
                    }
                    ,
                    A.prototype.invm = function(t) {
                        var e = t._invmp(this.m);
                        return 0 !== e.negative ? (e.negative = 0,
                        this.imod(e).redNeg()) : this.imod(e)
                    }
                    ,
                    A.prototype.pow = function(t, e) {
                        if (e.isZero())
                            return new i(1).toRed(this);
                        if (0 === e.cmpn(1))
                            return t.clone();
                        var r = new Array(16);
                        r[0] = new i(1).toRed(this),
                        r[1] = t;
                        for (var n = 2; n < r.length; n++)
                            r[n] = this.mul(r[n - 1], t);
                        var a = r[0]
                          , f = 0
                          , o = 0
                          , s = e.bitLength() % 26;
                        for (0 === s && (s = 26),
                        n = e.length - 1; n >= 0; n--) {
                            for (var c = e.words[n], u = s - 1; u >= 0; u--) {
                                var d = c >> u & 1;
                                a !== r[0] && (a = this.sqr(a)),
                                0 !== d || 0 !== f ? (f <<= 1,
                                f |= d,
                                (4 === ++o || 0 === n && 0 === u) && (a = this.mul(a, r[f]),
                                o = 0,
                                f = 0)) : o = 0
                            }
                            s = 26
                        }
                        return a
                    }
                    ,
                    A.prototype.convertTo = function(t) {
                        var e = t.umod(this.m);
                        return e === t ? e.clone() : e
                    }
                    ,
                    A.prototype.convertFrom = function(t) {
                        var e = t.clone();
                        return e.red = null,
                        e
                    }
                    ,
                    i.mont = function(t) {
                        return new E(t)
                    }
                    ,
                    n(E, A),
                    E.prototype.convertTo = function(t) {
                        return this.imod(t.ushln(this.shift))
                    }
                    ,
                    E.prototype.convertFrom = function(t) {
                        var e = this.imod(t.mul(this.rinv));
                        return e.red = null,
                        e
                    }
                    ,
                    E.prototype.imul = function(t, e) {
                        if (t.isZero() || e.isZero())
                            return t.words[0] = 0,
                            t.length = 1,
                            t;
                        var r = t.imul(e)
                          , n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m)
                          , i = r.isub(n).iushrn(this.shift)
                          , a = i;
                        return i.cmp(this.m) >= 0 ? a = i.isub(this.m) : i.cmpn(0) < 0 && (a = i.iadd(this.m)),
                        a._forceRed(this)
                    }
                    ,
                    E.prototype.mul = function(t, e) {
                        if (t.isZero() || e.isZero())
                            return new i(0)._forceRed(this);
                        var r = t.mul(e)
                          , n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m)
                          , a = r.isub(n).iushrn(this.shift)
                          , f = a;
                        return a.cmp(this.m) >= 0 ? f = a.isub(this.m) : a.cmpn(0) < 0 && (f = a.iadd(this.m)),
                        f._forceRed(this)
                    }
                    ,
                    E.prototype.invm = function(t) {
                        return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)
                    }
                }(t, p.i)
            }
            ))
              , Ce = "lib/elliptic.js"
              , Be = ["lib"]
              , Ne = {
                jscs: "jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js",
                jshint: "jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js",
                lint: "npm run jscs && npm run jshint",
                unit: "istanbul test _mocha --reporter=spec test/index.js",
                test: "npm run lint && npm run unit",
                version: "grunt dist && git add dist/"
            }
              , ze = {
                type: "git",
                url: "git@github.com:indutny/elliptic"
            }
              , De = ["EC", "Elliptic", "curve", "Cryptography"]
              , Ke = "Fedor Indutny <fedor@indutny.com>"
              , Ve = {
                url: "https://github.com/indutny/elliptic/issues"
            }
              , Ue = "https://github.com/indutny/elliptic"
              , qe = {
                brfs: "^1.4.3",
                coveralls: "^3.0.8",
                grunt: "^1.0.4",
                "grunt-browserify": "^5.0.0",
                "grunt-cli": "^1.2.0",
                "grunt-contrib-connect": "^1.0.0",
                "grunt-contrib-copy": "^1.0.0",
                "grunt-contrib-uglify": "^1.0.1",
                "grunt-mocha-istanbul": "^3.0.1",
                "grunt-saucelabs": "^9.0.1",
                istanbul: "^0.4.2",
                jscs: "^3.0.7",
                jshint: "^2.10.3",
                mocha: "^6.2.2"
            }
              , Ye = {
                "bn.js": "^4.4.0",
                brorand: "^1.0.1",
                "hash.js": "^1.0.0",
                "hmac-drbg": "^1.0.0",
                inherits: "^2.0.1",
                "minimalistic-assert": "^1.0.0",
                "minimalistic-crypto-utils": "^1.0.0"
            }
              , Fe = {
                name: "elliptic",
                version: "6.5.2",
                description: "EC cryptography",
                main: Ce,
                files: Be,
                scripts: Ne,
                repository: ze,
                keywords: De,
                author: Ke,
                license: "MIT",
                bugs: Ve,
                homepage: Ue,
                devDependencies: qe,
                dependencies: Ye
            }
              , He = Object.freeze({
                __proto__: null,
                name: "elliptic",
                version: "6.5.2",
                description: "EC cryptography",
                main: Ce,
                files: Be,
                scripts: Ne,
                repository: ze,
                keywords: De,
                author: Ke,
                license: "MIT",
                bugs: Ve,
                homepage: Ue,
                devDependencies: qe,
                dependencies: Ye,
                default: Fe
            })
              , Ge = We;
            function We(t, e) {
                if (!t)
                    throw new Error(e || "Assertion failed")
            }
            We.equal = function(t, e, r) {
                if (t != e)
                    throw new Error(r || "Assertion failed: " + t + " != " + e)
            }
            ;
            var Ze, Je = Object(p.g)((function(t, e) {
                var r = e;
                function n(t) {
                    return 1 === t.length ? "0" + t : t
                }
                function i(t) {
                    for (var e = "", r = 0; r < t.length; r++)
                        e += n(t[r].toString(16));
                    return e
                }
                r.toArray = function(t, e) {
                    if (Array.isArray(t))
                        return t.slice();
                    if (!t)
                        return [];
                    var r = [];
                    if ("string" != typeof t) {
                        for (var n = 0; n < t.length; n++)
                            r[n] = 0 | t[n];
                        return r
                    }
                    if ("hex" === e)
                        for ((t = t.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (t = "0" + t),
                        n = 0; n < t.length; n += 2)
                            r.push(parseInt(t[n] + t[n + 1], 16));
                    else
                        for (n = 0; n < t.length; n++) {
                            var i = t.charCodeAt(n)
                              , a = i >> 8
                              , f = 255 & i;
                            a ? r.push(a, f) : r.push(f)
                        }
                    return r
                }
                ,
                r.zero2 = n,
                r.toHex = i,
                r.encode = function(t, e) {
                    return "hex" === e ? i(t) : t
                }
            }
            )), Xe = Object(p.g)((function(t, e) {
                var r = e;
                r.assert = Ge,
                r.toArray = Je.toArray,
                r.zero2 = Je.zero2,
                r.toHex = Je.toHex,
                r.encode = Je.encode,
                r.getNAF = function(t, e, r) {
                    var n = new Array(Math.max(t.bitLength(), r) + 1);
                    n.fill(0);
                    for (var i = 1 << e + 1, a = t.clone(), f = 0; f < n.length; f++) {
                        var o, s = a.andln(i - 1);
                        a.isOdd() ? (o = s > (i >> 1) - 1 ? (i >> 1) - s : s,
                        a.isubn(o)) : o = 0,
                        n[f] = o,
                        a.iushrn(1)
                    }
                    return n
                }
                ,
                r.getJSF = function(t, e) {
                    var r = [[], []];
                    t = t.clone(),
                    e = e.clone();
                    for (var n = 0, i = 0; t.cmpn(-n) > 0 || e.cmpn(-i) > 0; ) {
                        var a, f, o, s = t.andln(3) + n & 3, c = e.andln(3) + i & 3;
                        3 === s && (s = -1),
                        3 === c && (c = -1),
                        a = 0 == (1 & s) ? 0 : 3 !== (o = t.andln(7) + n & 7) && 5 !== o || 2 !== c ? s : -s,
                        r[0].push(a),
                        f = 0 == (1 & c) ? 0 : 3 !== (o = e.andln(7) + i & 7) && 5 !== o || 2 !== s ? c : -c,
                        r[1].push(f),
                        2 * n === a + 1 && (n = 1 - n),
                        2 * i === f + 1 && (i = 1 - i),
                        t.iushrn(1),
                        e.iushrn(1)
                    }
                    return r
                }
                ,
                r.cachedProperty = function(t, e, r) {
                    var n = "_" + e;
                    t.prototype[e] = function() {
                        return void 0 !== this[n] ? this[n] : this[n] = r.call(this)
                    }
                }
                ,
                r.parseBytes = function(t) {
                    return "string" == typeof t ? r.toArray(t, "hex") : t
                }
                ,
                r.intFromLE = function(t) {
                    return new Oe(t,"hex","le")
                }
            }
            )), $e = function(t) {
                return Ze || (Ze = new Qe(null)),
                Ze.generate(t)
            };
            function Qe(t) {
                this.rand = t
            }
            var tr = Qe;
            if (Qe.prototype.generate = function(t) {
                return this._rand(t)
            }
            ,
            Qe.prototype._rand = function(t) {
                if (this.rand.getBytes)
                    return this.rand.getBytes(t);
                for (var e = new Uint8Array(t), r = 0; r < e.length; r++)
                    e[r] = this.rand.getByte();
                return e
            }
            ,
            "object" == typeof self)
                self.crypto && self.crypto.getRandomValues ? Qe.prototype._rand = function(t) {
                    var e = new Uint8Array(t);
                    return self.crypto.getRandomValues(e),
                    e
                }
                : self.msCrypto && self.msCrypto.getRandomValues ? Qe.prototype._rand = function(t) {
                    var e = new Uint8Array(t);
                    return self.msCrypto.getRandomValues(e),
                    e
                }
                : "object" == typeof window && (Qe.prototype._rand = function() {
                    throw new Error("Not implemented yet")
                }
                );
            else
                try {
                    var er = w.a;
                    if ("function" != typeof er.randomBytes)
                        throw new Error("Not supported");
                    Qe.prototype._rand = function(t) {
                        return er.randomBytes(t)
                    }
                } catch (Ci) {}
            $e.Rand = tr;
            var rr = Xe.getNAF
              , nr = Xe.getJSF
              , ir = Xe.assert;
            function ar(t, e) {
                this.type = t,
                this.p = new Oe(e.p,16),
                this.red = e.prime ? Oe.red(e.prime) : Oe.mont(this.p),
                this.zero = new Oe(0).toRed(this.red),
                this.one = new Oe(1).toRed(this.red),
                this.two = new Oe(2).toRed(this.red),
                this.n = e.n && new Oe(e.n,16),
                this.g = e.g && this.pointFromJSON(e.g, e.gRed),
                this._wnafT1 = new Array(4),
                this._wnafT2 = new Array(4),
                this._wnafT3 = new Array(4),
                this._wnafT4 = new Array(4),
                this._bitLength = this.n ? this.n.bitLength() : 0;
                var r = this.n && this.p.div(this.n);
                !r || r.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0,
                this.redN = this.n.toRed(this.red))
            }
            var fr = ar;
            function or(t, e) {
                this.curve = t,
                this.type = e,
                this.precomputed = null
            }
            ar.prototype.point = function() {
                throw new Error("Not implemented")
            }
            ,
            ar.prototype.validate = function() {
                throw new Error("Not implemented")
            }
            ,
            ar.prototype._fixedNafMul = function(t, e) {
                ir(t.precomputed);
                var r = t._getDoubles()
                  , n = rr(e, 1, this._bitLength)
                  , i = (1 << r.step + 1) - (r.step % 2 == 0 ? 2 : 1);
                i /= 3;
                for (var a = [], f = 0; f < n.length; f += r.step) {
                    var o = 0;
                    for (e = f + r.step - 1; e >= f; e--)
                        o = (o << 1) + n[e];
                    a.push(o)
                }
                for (var s = this.jpoint(null, null, null), c = this.jpoint(null, null, null), u = i; u > 0; u--) {
                    for (f = 0; f < a.length; f++)
                        (o = a[f]) === u ? c = c.mixedAdd(r.points[f]) : o === -u && (c = c.mixedAdd(r.points[f].neg()));
                    s = s.add(c)
                }
                return s.toP()
            }
            ,
            ar.prototype._wnafMul = function(t, e) {
                var r = 4
                  , n = t._getNAFPoints(r);
                r = n.wnd;
                for (var i = n.points, a = rr(e, r, this._bitLength), f = this.jpoint(null, null, null), o = a.length - 1; o >= 0; o--) {
                    for (e = 0; o >= 0 && 0 === a[o]; o--)
                        e++;
                    if (o >= 0 && e++,
                    f = f.dblp(e),
                    o < 0)
                        break;
                    var s = a[o];
                    ir(0 !== s),
                    f = "affine" === t.type ? s > 0 ? f.mixedAdd(i[s - 1 >> 1]) : f.mixedAdd(i[-s - 1 >> 1].neg()) : s > 0 ? f.add(i[s - 1 >> 1]) : f.add(i[-s - 1 >> 1].neg())
                }
                return "affine" === t.type ? f.toP() : f
            }
            ,
            ar.prototype._wnafMulAdd = function(t, e, r, n, i) {
                for (var a = this._wnafT1, f = this._wnafT2, o = this._wnafT3, s = 0, c = 0; c < n; c++) {
                    var u = (E = e[c])._getNAFPoints(t);
                    a[c] = u.wnd,
                    f[c] = u.points
                }
                for (c = n - 1; c >= 1; c -= 2) {
                    var d = c - 1
                      , h = c;
                    if (1 === a[d] && 1 === a[h]) {
                        var l = [e[d], null, null, e[h]];
                        0 === e[d].y.cmp(e[h].y) ? (l[1] = e[d].add(e[h]),
                        l[2] = e[d].toJ().mixedAdd(e[h].neg())) : 0 === e[d].y.cmp(e[h].y.redNeg()) ? (l[1] = e[d].toJ().mixedAdd(e[h]),
                        l[2] = e[d].add(e[h].neg())) : (l[1] = e[d].toJ().mixedAdd(e[h]),
                        l[2] = e[d].toJ().mixedAdd(e[h].neg()));
                        var b = [-3, -1, -5, -7, 0, 7, 5, 1, 3]
                          , p = nr(r[d], r[h]);
                        s = Math.max(p[0].length, s),
                        o[d] = new Array(s),
                        o[h] = new Array(s);
                        for (var v = 0; v < s; v++) {
                            var _ = 0 | p[0][v]
                              , y = 0 | p[1][v];
                            o[d][v] = b[3 * (_ + 1) + (y + 1)],
                            o[h][v] = 0,
                            f[d] = l
                        }
                    } else
                        o[d] = rr(r[d], a[d], this._bitLength),
                        o[h] = rr(r[h], a[h], this._bitLength),
                        s = Math.max(o[d].length, s),
                        s = Math.max(o[h].length, s)
                }
                var m = this.jpoint(null, null, null)
                  , g = this._wnafT4;
                for (c = s; c >= 0; c--) {
                    for (var w = 0; c >= 0; ) {
                        var A = !0;
                        for (v = 0; v < n; v++)
                            g[v] = 0 | o[v][c],
                            0 !== g[v] && (A = !1);
                        if (!A)
                            break;
                        w++,
                        c--
                    }
                    if (c >= 0 && w++,
                    m = m.dblp(w),
                    c < 0)
                        break;
                    for (v = 0; v < n; v++) {
                        var E, I = g[v];
                        0 !== I && (I > 0 ? E = f[v][I - 1 >> 1] : I < 0 && (E = f[v][-I - 1 >> 1].neg()),
                        m = "affine" === E.type ? m.mixedAdd(E) : m.add(E))
                    }
                }
                for (c = 0; c < n; c++)
                    f[c] = null;
                return i ? m : m.toP()
            }
            ,
            ar.BasePoint = or,
            or.prototype.eq = function() {
                throw new Error("Not implemented")
            }
            ,
            or.prototype.validate = function() {
                return this.curve.validate(this)
            }
            ,
            ar.prototype.decodePoint = function(t, e) {
                t = Xe.toArray(t, e);
                var r = this.p.byteLength();
                if ((4 === t[0] || 6 === t[0] || 7 === t[0]) && t.length - 1 == 2 * r)
                    return 6 === t[0] ? ir(t[t.length - 1] % 2 == 0) : 7 === t[0] && ir(t[t.length - 1] % 2 == 1),
                    this.point(t.slice(1, 1 + r), t.slice(1 + r, 1 + 2 * r));
                if ((2 === t[0] || 3 === t[0]) && t.length - 1 === r)
                    return this.pointFromX(t.slice(1, 1 + r), 3 === t[0]);
                throw new Error("Unknown point format")
            }
            ,
            or.prototype.encodeCompressed = function(t) {
                return this.encode(t, !0)
            }
            ,
            or.prototype._encode = function(t) {
                var e = this.curve.p.byteLength()
                  , r = this.getX().toArray("be", e);
                return t ? [this.getY().isEven() ? 2 : 3].concat(r) : [4].concat(r, this.getY().toArray("be", e))
            }
            ,
            or.prototype.encode = function(t, e) {
                return Xe.encode(this._encode(e), t)
            }
            ,
            or.prototype.precompute = function(t) {
                if (this.precomputed)
                    return this;
                var e = {
                    doubles: null,
                    naf: null,
                    beta: null
                };
                return e.naf = this._getNAFPoints(8),
                e.doubles = this._getDoubles(4, t),
                e.beta = this._getBeta(),
                this.precomputed = e,
                this
            }
            ,
            or.prototype._hasDoubles = function(t) {
                if (!this.precomputed)
                    return !1;
                var e = this.precomputed.doubles;
                return !!e && e.points.length >= Math.ceil((t.bitLength() + 1) / e.step)
            }
            ,
            or.prototype._getDoubles = function(t, e) {
                if (this.precomputed && this.precomputed.doubles)
                    return this.precomputed.doubles;
                for (var r = [this], n = this, i = 0; i < e; i += t) {
                    for (var a = 0; a < t; a++)
                        n = n.dbl();
                    r.push(n)
                }
                return {
                    step: t,
                    points: r
                }
            }
            ,
            or.prototype._getNAFPoints = function(t) {
                if (this.precomputed && this.precomputed.naf)
                    return this.precomputed.naf;
                for (var e = [this], r = (1 << t) - 1, n = 1 === r ? null : this.dbl(), i = 1; i < r; i++)
                    e[i] = e[i - 1].add(n);
                return {
                    wnd: t,
                    points: e
                }
            }
            ,
            or.prototype._getBeta = function() {
                return null
            }
            ,
            or.prototype.dblp = function(t) {
                for (var e = this, r = 0; r < t; r++)
                    e = e.dbl();
                return e
            }
            ;
            var sr = Xe.assert;
            function cr(t) {
                fr.call(this, "short", t),
                this.a = new Oe(t.a,16).toRed(this.red),
                this.b = new Oe(t.b,16).toRed(this.red),
                this.tinv = this.two.redInvm(),
                this.zeroA = 0 === this.a.fromRed().cmpn(0),
                this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3),
                this.endo = this._getEndomorphism(t),
                this._endoWnafT1 = new Array(4),
                this._endoWnafT2 = new Array(4)
            }
            x(cr, fr);
            var ur = cr;
            function dr(t, e, r, n) {
                fr.BasePoint.call(this, t, "affine"),
                null === e && null === r ? (this.x = null,
                this.y = null,
                this.inf = !0) : (this.x = new Oe(e,16),
                this.y = new Oe(r,16),
                n && (this.x.forceRed(this.curve.red),
                this.y.forceRed(this.curve.red)),
                this.x.red || (this.x = this.x.toRed(this.curve.red)),
                this.y.red || (this.y = this.y.toRed(this.curve.red)),
                this.inf = !1)
            }
            function hr(t, e, r, n) {
                fr.BasePoint.call(this, t, "jacobian"),
                null === e && null === r && null === n ? (this.x = this.curve.one,
                this.y = this.curve.one,
                this.z = new Oe(0)) : (this.x = new Oe(e,16),
                this.y = new Oe(r,16),
                this.z = new Oe(n,16)),
                this.x.red || (this.x = this.x.toRed(this.curve.red)),
                this.y.red || (this.y = this.y.toRed(this.curve.red)),
                this.z.red || (this.z = this.z.toRed(this.curve.red)),
                this.zOne = this.z === this.curve.one
            }
            function lr(t) {
                fr.call(this, "mont", t),
                this.a = new Oe(t.a,16).toRed(this.red),
                this.b = new Oe(t.b,16).toRed(this.red),
                this.i4 = new Oe(4).toRed(this.red).redInvm(),
                this.two = new Oe(2).toRed(this.red),
                this.a24 = this.i4.redMul(this.a.redAdd(this.two))
            }
            cr.prototype._getEndomorphism = function(t) {
                if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
                    var e, r;
                    if (t.beta)
                        e = new Oe(t.beta,16).toRed(this.red);
                    else {
                        var n = this._getEndoRoots(this.p);
                        e = (e = n[0].cmp(n[1]) < 0 ? n[0] : n[1]).toRed(this.red)
                    }
                    if (t.lambda)
                        r = new Oe(t.lambda,16);
                    else {
                        var i = this._getEndoRoots(this.n);
                        0 === this.g.mul(i[0]).x.cmp(this.g.x.redMul(e)) ? r = i[0] : (r = i[1],
                        sr(0 === this.g.mul(r).x.cmp(this.g.x.redMul(e))))
                    }
                    return {
                        beta: e,
                        lambda: r,
                        basis: t.basis ? t.basis.map((function(t) {
                            return {
                                a: new Oe(t.a,16),
                                b: new Oe(t.b,16)
                            }
                        }
                        )) : this._getEndoBasis(r)
                    }
                }
            }
            ,
            cr.prototype._getEndoRoots = function(t) {
                var e = t === this.p ? this.red : Oe.mont(t)
                  , r = new Oe(2).toRed(e).redInvm()
                  , n = r.redNeg()
                  , i = new Oe(3).toRed(e).redNeg().redSqrt().redMul(r);
                return [n.redAdd(i).fromRed(), n.redSub(i).fromRed()]
            }
            ,
            cr.prototype._getEndoBasis = function(t) {
                for (var e, r, n, i, a, f, o, s, c, u = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), d = t, h = this.n.clone(), l = new Oe(1), b = new Oe(0), p = new Oe(0), v = new Oe(1), _ = 0; 0 !== d.cmpn(0); ) {
                    var y = h.div(d);
                    s = h.sub(y.mul(d)),
                    c = p.sub(y.mul(l));
                    var m = v.sub(y.mul(b));
                    if (!n && s.cmp(u) < 0)
                        e = o.neg(),
                        r = l,
                        n = s.neg(),
                        i = c;
                    else if (n && 2 == ++_)
                        break;
                    o = s,
                    h = d,
                    d = s,
                    p = l,
                    l = c,
                    v = b,
                    b = m
                }
                a = s.neg(),
                f = c;
                var g = n.sqr().add(i.sqr());
                return a.sqr().add(f.sqr()).cmp(g) >= 0 && (a = e,
                f = r),
                n.negative && (n = n.neg(),
                i = i.neg()),
                a.negative && (a = a.neg(),
                f = f.neg()),
                [{
                    a: n,
                    b: i
                }, {
                    a: a,
                    b: f
                }]
            }
            ,
            cr.prototype._endoSplit = function(t) {
                var e = this.endo.basis
                  , r = e[0]
                  , n = e[1]
                  , i = n.b.mul(t).divRound(this.n)
                  , a = r.b.neg().mul(t).divRound(this.n)
                  , f = i.mul(r.a)
                  , o = a.mul(n.a)
                  , s = i.mul(r.b)
                  , c = a.mul(n.b);
                return {
                    k1: t.sub(f).sub(o),
                    k2: s.add(c).neg()
                }
            }
            ,
            cr.prototype.pointFromX = function(t, e) {
                (t = new Oe(t,16)).red || (t = t.toRed(this.red));
                var r = t.redSqr().redMul(t).redIAdd(t.redMul(this.a)).redIAdd(this.b)
                  , n = r.redSqrt();
                if (0 !== n.redSqr().redSub(r).cmp(this.zero))
                    throw new Error("invalid point");
                var i = n.fromRed().isOdd();
                return (e && !i || !e && i) && (n = n.redNeg()),
                this.point(t, n)
            }
            ,
            cr.prototype.validate = function(t) {
                if (t.inf)
                    return !0;
                var e = t.x
                  , r = t.y
                  , n = this.a.redMul(e)
                  , i = e.redSqr().redMul(e).redIAdd(n).redIAdd(this.b);
                return 0 === r.redSqr().redISub(i).cmpn(0)
            }
            ,
            cr.prototype._endoWnafMulAdd = function(t, e, r) {
                for (var n = this._endoWnafT1, i = this._endoWnafT2, a = 0; a < t.length; a++) {
                    var f = this._endoSplit(e[a])
                      , o = t[a]
                      , s = o._getBeta();
                    f.k1.negative && (f.k1.ineg(),
                    o = o.neg(!0)),
                    f.k2.negative && (f.k2.ineg(),
                    s = s.neg(!0)),
                    n[2 * a] = o,
                    n[2 * a + 1] = s,
                    i[2 * a] = f.k1,
                    i[2 * a + 1] = f.k2
                }
                for (var c = this._wnafMulAdd(1, n, i, 2 * a, r), u = 0; u < 2 * a; u++)
                    n[u] = null,
                    i[u] = null;
                return c
            }
            ,
            x(dr, fr.BasePoint),
            cr.prototype.point = function(t, e, r) {
                return new dr(this,t,e,r)
            }
            ,
            cr.prototype.pointFromJSON = function(t, e) {
                return dr.fromJSON(this, t, e)
            }
            ,
            dr.prototype._getBeta = function() {
                if (this.curve.endo) {
                    var t = this.precomputed;
                    if (t && t.beta)
                        return t.beta;
                    var e = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
                    if (t) {
                        var r = this.curve
                          , n = function(t) {
                            return r.point(t.x.redMul(r.endo.beta), t.y)
                        };
                        t.beta = e,
                        e.precomputed = {
                            beta: null,
                            naf: t.naf && {
                                wnd: t.naf.wnd,
                                points: t.naf.points.map(n)
                            },
                            doubles: t.doubles && {
                                step: t.doubles.step,
                                points: t.doubles.points.map(n)
                            }
                        }
                    }
                    return e
                }
            }
            ,
            dr.prototype.toJSON = function() {
                return this.precomputed ? [this.x, this.y, this.precomputed && {
                    doubles: this.precomputed.doubles && {
                        step: this.precomputed.doubles.step,
                        points: this.precomputed.doubles.points.slice(1)
                    },
                    naf: this.precomputed.naf && {
                        wnd: this.precomputed.naf.wnd,
                        points: this.precomputed.naf.points.slice(1)
                    }
                }] : [this.x, this.y]
            }
            ,
            dr.fromJSON = function(t, e, r) {
                "string" == typeof e && (e = JSON.parse(e));
                var n = t.point(e[0], e[1], r);
                if (!e[2])
                    return n;
                function i(e) {
                    return t.point(e[0], e[1], r)
                }
                var a = e[2];
                return n.precomputed = {
                    beta: null,
                    doubles: a.doubles && {
                        step: a.doubles.step,
                        points: [n].concat(a.doubles.points.map(i))
                    },
                    naf: a.naf && {
                        wnd: a.naf.wnd,
                        points: [n].concat(a.naf.points.map(i))
                    }
                },
                n
            }
            ,
            dr.prototype.inspect = function() {
                return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">"
            }
            ,
            dr.prototype.isInfinity = function() {
                return this.inf
            }
            ,
            dr.prototype.add = function(t) {
                if (this.inf)
                    return t;
                if (t.inf)
                    return this;
                if (this.eq(t))
                    return this.dbl();
                if (this.neg().eq(t))
                    return this.curve.point(null, null);
                if (0 === this.x.cmp(t.x))
                    return this.curve.point(null, null);
                var e = this.y.redSub(t.y);
                0 !== e.cmpn(0) && (e = e.redMul(this.x.redSub(t.x).redInvm()));
                var r = e.redSqr().redISub(this.x).redISub(t.x)
                  , n = e.redMul(this.x.redSub(r)).redISub(this.y);
                return this.curve.point(r, n)
            }
            ,
            dr.prototype.dbl = function() {
                if (this.inf)
                    return this;
                var t = this.y.redAdd(this.y);
                if (0 === t.cmpn(0))
                    return this.curve.point(null, null);
                var e = this.curve.a
                  , r = this.x.redSqr()
                  , n = t.redInvm()
                  , i = r.redAdd(r).redIAdd(r).redIAdd(e).redMul(n)
                  , a = i.redSqr().redISub(this.x.redAdd(this.x))
                  , f = i.redMul(this.x.redSub(a)).redISub(this.y);
                return this.curve.point(a, f)
            }
            ,
            dr.prototype.getX = function() {
                return this.x.fromRed()
            }
            ,
            dr.prototype.getY = function() {
                return this.y.fromRed()
            }
            ,
            dr.prototype.mul = function(t) {
                return t = new Oe(t,16),
                this.isInfinity() ? this : this._hasDoubles(t) ? this.curve._fixedNafMul(this, t) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [t]) : this.curve._wnafMul(this, t)
            }
            ,
            dr.prototype.mulAdd = function(t, e, r) {
                var n = [this, e]
                  , i = [t, r];
                return this.curve.endo ? this.curve._endoWnafMulAdd(n, i) : this.curve._wnafMulAdd(1, n, i, 2)
            }
            ,
            dr.prototype.jmulAdd = function(t, e, r) {
                var n = [this, e]
                  , i = [t, r];
                return this.curve.endo ? this.curve._endoWnafMulAdd(n, i, !0) : this.curve._wnafMulAdd(1, n, i, 2, !0)
            }
            ,
            dr.prototype.eq = function(t) {
                return this === t || this.inf === t.inf && (this.inf || 0 === this.x.cmp(t.x) && 0 === this.y.cmp(t.y))
            }
            ,
            dr.prototype.neg = function(t) {
                if (this.inf)
                    return this;
                var e = this.curve.point(this.x, this.y.redNeg());
                if (t && this.precomputed) {
                    var r = this.precomputed
                      , n = function(t) {
                        return t.neg()
                    };
                    e.precomputed = {
                        naf: r.naf && {
                            wnd: r.naf.wnd,
                            points: r.naf.points.map(n)
                        },
                        doubles: r.doubles && {
                            step: r.doubles.step,
                            points: r.doubles.points.map(n)
                        }
                    }
                }
                return e
            }
            ,
            dr.prototype.toJ = function() {
                return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one)
            }
            ,
            x(hr, fr.BasePoint),
            cr.prototype.jpoint = function(t, e, r) {
                return new hr(this,t,e,r)
            }
            ,
            hr.prototype.toP = function() {
                if (this.isInfinity())
                    return this.curve.point(null, null);
                var t = this.z.redInvm()
                  , e = t.redSqr()
                  , r = this.x.redMul(e)
                  , n = this.y.redMul(e).redMul(t);
                return this.curve.point(r, n)
            }
            ,
            hr.prototype.neg = function() {
                return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
            }
            ,
            hr.prototype.add = function(t) {
                if (this.isInfinity())
                    return t;
                if (t.isInfinity())
                    return this;
                var e = t.z.redSqr()
                  , r = this.z.redSqr()
                  , n = this.x.redMul(e)
                  , i = t.x.redMul(r)
                  , a = this.y.redMul(e.redMul(t.z))
                  , f = t.y.redMul(r.redMul(this.z))
                  , o = n.redSub(i)
                  , s = a.redSub(f);
                if (0 === o.cmpn(0))
                    return 0 !== s.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
                var c = o.redSqr()
                  , u = c.redMul(o)
                  , d = n.redMul(c)
                  , h = s.redSqr().redIAdd(u).redISub(d).redISub(d)
                  , l = s.redMul(d.redISub(h)).redISub(a.redMul(u))
                  , b = this.z.redMul(t.z).redMul(o);
                return this.curve.jpoint(h, l, b)
            }
            ,
            hr.prototype.mixedAdd = function(t) {
                if (this.isInfinity())
                    return t.toJ();
                if (t.isInfinity())
                    return this;
                var e = this.z.redSqr()
                  , r = this.x
                  , n = t.x.redMul(e)
                  , i = this.y
                  , a = t.y.redMul(e).redMul(this.z)
                  , f = r.redSub(n)
                  , o = i.redSub(a);
                if (0 === f.cmpn(0))
                    return 0 !== o.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
                var s = f.redSqr()
                  , c = s.redMul(f)
                  , u = r.redMul(s)
                  , d = o.redSqr().redIAdd(c).redISub(u).redISub(u)
                  , h = o.redMul(u.redISub(d)).redISub(i.redMul(c))
                  , l = this.z.redMul(f);
                return this.curve.jpoint(d, h, l)
            }
            ,
            hr.prototype.dblp = function(t) {
                if (0 === t)
                    return this;
                if (this.isInfinity())
                    return this;
                if (!t)
                    return this.dbl();
                if (this.curve.zeroA || this.curve.threeA) {
                    for (var e = this, r = 0; r < t; r++)
                        e = e.dbl();
                    return e
                }
                var n = this.curve.a
                  , i = this.curve.tinv
                  , a = this.x
                  , f = this.y
                  , o = this.z
                  , s = o.redSqr().redSqr()
                  , c = f.redAdd(f);
                for (r = 0; r < t; r++) {
                    var u = a.redSqr()
                      , d = c.redSqr()
                      , h = d.redSqr()
                      , l = u.redAdd(u).redIAdd(u).redIAdd(n.redMul(s))
                      , b = a.redMul(d)
                      , p = l.redSqr().redISub(b.redAdd(b))
                      , v = b.redISub(p)
                      , _ = l.redMul(v);
                    _ = _.redIAdd(_).redISub(h);
                    var y = c.redMul(o);
                    r + 1 < t && (s = s.redMul(h)),
                    a = p,
                    o = y,
                    c = _
                }
                return this.curve.jpoint(a, c.redMul(i), o)
            }
            ,
            hr.prototype.dbl = function() {
                return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl()
            }
            ,
            hr.prototype._zeroDbl = function() {
                var t, e, r;
                if (this.zOne) {
                    var n = this.x.redSqr()
                      , i = this.y.redSqr()
                      , a = i.redSqr()
                      , f = this.x.redAdd(i).redSqr().redISub(n).redISub(a);
                    f = f.redIAdd(f);
                    var o = n.redAdd(n).redIAdd(n)
                      , s = o.redSqr().redISub(f).redISub(f)
                      , c = a.redIAdd(a);
                    c = (c = c.redIAdd(c)).redIAdd(c),
                    t = s,
                    e = o.redMul(f.redISub(s)).redISub(c),
                    r = this.y.redAdd(this.y)
                } else {
                    var u = this.x.redSqr()
                      , d = this.y.redSqr()
                      , h = d.redSqr()
                      , l = this.x.redAdd(d).redSqr().redISub(u).redISub(h);
                    l = l.redIAdd(l);
                    var b = u.redAdd(u).redIAdd(u)
                      , p = b.redSqr()
                      , v = h.redIAdd(h);
                    v = (v = v.redIAdd(v)).redIAdd(v),
                    t = p.redISub(l).redISub(l),
                    e = b.redMul(l.redISub(t)).redISub(v),
                    r = (r = this.y.redMul(this.z)).redIAdd(r)
                }
                return this.curve.jpoint(t, e, r)
            }
            ,
            hr.prototype._threeDbl = function() {
                var t, e, r;
                if (this.zOne) {
                    var n = this.x.redSqr()
                      , i = this.y.redSqr()
                      , a = i.redSqr()
                      , f = this.x.redAdd(i).redSqr().redISub(n).redISub(a);
                    f = f.redIAdd(f);
                    var o = n.redAdd(n).redIAdd(n).redIAdd(this.curve.a)
                      , s = o.redSqr().redISub(f).redISub(f);
                    t = s;
                    var c = a.redIAdd(a);
                    c = (c = c.redIAdd(c)).redIAdd(c),
                    e = o.redMul(f.redISub(s)).redISub(c),
                    r = this.y.redAdd(this.y)
                } else {
                    var u = this.z.redSqr()
                      , d = this.y.redSqr()
                      , h = this.x.redMul(d)
                      , l = this.x.redSub(u).redMul(this.x.redAdd(u));
                    l = l.redAdd(l).redIAdd(l);
                    var b = h.redIAdd(h)
                      , p = (b = b.redIAdd(b)).redAdd(b);
                    t = l.redSqr().redISub(p),
                    r = this.y.redAdd(this.z).redSqr().redISub(d).redISub(u);
                    var v = d.redSqr();
                    v = (v = (v = v.redIAdd(v)).redIAdd(v)).redIAdd(v),
                    e = l.redMul(b.redISub(t)).redISub(v)
                }
                return this.curve.jpoint(t, e, r)
            }
            ,
            hr.prototype._dbl = function() {
                var t = this.curve.a
                  , e = this.x
                  , r = this.y
                  , n = this.z
                  , i = n.redSqr().redSqr()
                  , a = e.redSqr()
                  , f = r.redSqr()
                  , o = a.redAdd(a).redIAdd(a).redIAdd(t.redMul(i))
                  , s = e.redAdd(e)
                  , c = (s = s.redIAdd(s)).redMul(f)
                  , u = o.redSqr().redISub(c.redAdd(c))
                  , d = c.redISub(u)
                  , h = f.redSqr();
                h = (h = (h = h.redIAdd(h)).redIAdd(h)).redIAdd(h);
                var l = o.redMul(d).redISub(h)
                  , b = r.redAdd(r).redMul(n);
                return this.curve.jpoint(u, l, b)
            }
            ,
            hr.prototype.trpl = function() {
                if (!this.curve.zeroA)
                    return this.dbl().add(this);
                var t = this.x.redSqr()
                  , e = this.y.redSqr()
                  , r = this.z.redSqr()
                  , n = e.redSqr()
                  , i = t.redAdd(t).redIAdd(t)
                  , a = i.redSqr()
                  , f = this.x.redAdd(e).redSqr().redISub(t).redISub(n)
                  , o = (f = (f = (f = f.redIAdd(f)).redAdd(f).redIAdd(f)).redISub(a)).redSqr()
                  , s = n.redIAdd(n);
                s = (s = (s = s.redIAdd(s)).redIAdd(s)).redIAdd(s);
                var c = i.redIAdd(f).redSqr().redISub(a).redISub(o).redISub(s)
                  , u = e.redMul(c);
                u = (u = u.redIAdd(u)).redIAdd(u);
                var d = this.x.redMul(o).redISub(u);
                d = (d = d.redIAdd(d)).redIAdd(d);
                var h = this.y.redMul(c.redMul(s.redISub(c)).redISub(f.redMul(o)));
                h = (h = (h = h.redIAdd(h)).redIAdd(h)).redIAdd(h);
                var l = this.z.redAdd(f).redSqr().redISub(r).redISub(o);
                return this.curve.jpoint(d, h, l)
            }
            ,
            hr.prototype.mul = function(t, e) {
                return t = new Oe(t,e),
                this.curve._wnafMul(this, t)
            }
            ,
            hr.prototype.eq = function(t) {
                if ("affine" === t.type)
                    return this.eq(t.toJ());
                if (this === t)
                    return !0;
                var e = this.z.redSqr()
                  , r = t.z.redSqr();
                if (0 !== this.x.redMul(r).redISub(t.x.redMul(e)).cmpn(0))
                    return !1;
                var n = e.redMul(this.z)
                  , i = r.redMul(t.z);
                return 0 === this.y.redMul(i).redISub(t.y.redMul(n)).cmpn(0)
            }
            ,
            hr.prototype.eqXToP = function(t) {
                var e = this.z.redSqr()
                  , r = t.toRed(this.curve.red).redMul(e);
                if (0 === this.x.cmp(r))
                    return !0;
                for (var n = t.clone(), i = this.curve.redN.redMul(e); ; ) {
                    if (n.iadd(this.curve.n),
                    n.cmp(this.curve.p) >= 0)
                        return !1;
                    if (r.redIAdd(i),
                    0 === this.x.cmp(r))
                        return !0
                }
            }
            ,
            hr.prototype.inspect = function() {
                return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">"
            }
            ,
            hr.prototype.isInfinity = function() {
                return 0 === this.z.cmpn(0)
            }
            ,
            x(lr, fr);
            var br = lr;
            function pr(t, e, r) {
                fr.BasePoint.call(this, t, "projective"),
                null === e && null === r ? (this.x = this.curve.one,
                this.z = this.curve.zero) : (this.x = new Oe(e,16),
                this.z = new Oe(r,16),
                this.x.red || (this.x = this.x.toRed(this.curve.red)),
                this.z.red || (this.z = this.z.toRed(this.curve.red)))
            }
            lr.prototype.validate = function(t) {
                var e = t.normalize().x
                  , r = e.redSqr()
                  , n = r.redMul(e).redAdd(r.redMul(this.a)).redAdd(e);
                return 0 === n.redSqrt().redSqr().cmp(n)
            }
            ,
            x(pr, fr.BasePoint),
            lr.prototype.decodePoint = function(t, e) {
                return this.point(Xe.toArray(t, e), 1)
            }
            ,
            lr.prototype.point = function(t, e) {
                return new pr(this,t,e)
            }
            ,
            lr.prototype.pointFromJSON = function(t) {
                return pr.fromJSON(this, t)
            }
            ,
            pr.prototype.precompute = function() {}
            ,
            pr.prototype._encode = function() {
                return this.getX().toArray("be", this.curve.p.byteLength())
            }
            ,
            pr.fromJSON = function(t, e) {
                return new pr(t,e[0],e[1] || t.one)
            }
            ,
            pr.prototype.inspect = function() {
                return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"
            }
            ,
            pr.prototype.isInfinity = function() {
                return 0 === this.z.cmpn(0)
            }
            ,
            pr.prototype.dbl = function() {
                var t = this.x.redAdd(this.z).redSqr()
                  , e = this.x.redSub(this.z).redSqr()
                  , r = t.redSub(e)
                  , n = t.redMul(e)
                  , i = r.redMul(e.redAdd(this.curve.a24.redMul(r)));
                return this.curve.point(n, i)
            }
            ,
            pr.prototype.add = function() {
                throw new Error("Not supported on Montgomery curve")
            }
            ,
            pr.prototype.diffAdd = function(t, e) {
                var r = this.x.redAdd(this.z)
                  , n = this.x.redSub(this.z)
                  , i = t.x.redAdd(t.z)
                  , a = t.x.redSub(t.z).redMul(r)
                  , f = i.redMul(n)
                  , o = e.z.redMul(a.redAdd(f).redSqr())
                  , s = e.x.redMul(a.redISub(f).redSqr());
                return this.curve.point(o, s)
            }
            ,
            pr.prototype.mul = function(t) {
                for (var e = t.clone(), r = this, n = this.curve.point(null, null), i = []; 0 !== e.cmpn(0); e.iushrn(1))
                    i.push(e.andln(1));
                for (var a = i.length - 1; a >= 0; a--)
                    0 === i[a] ? (r = r.diffAdd(n, this),
                    n = n.dbl()) : (n = r.diffAdd(n, this),
                    r = r.dbl());
                return n
            }
            ,
            pr.prototype.mulAdd = function() {
                throw new Error("Not supported on Montgomery curve")
            }
            ,
            pr.prototype.jumlAdd = function() {
                throw new Error("Not supported on Montgomery curve")
            }
            ,
            pr.prototype.eq = function(t) {
                return 0 === this.getX().cmp(t.getX())
            }
            ,
            pr.prototype.normalize = function() {
                return this.x = this.x.redMul(this.z.redInvm()),
                this.z = this.curve.one,
                this
            }
            ,
            pr.prototype.getX = function() {
                return this.normalize(),
                this.x.fromRed()
            }
            ;
            var vr = Xe.assert;
            function _r(t) {
                this.twisted = 1 != (0 | t.a),
                this.mOneA = this.twisted && -1 == (0 | t.a),
                this.extended = this.mOneA,
                fr.call(this, "edwards", t),
                this.a = new Oe(t.a,16).umod(this.red.m),
                this.a = this.a.toRed(this.red),
                this.c = new Oe(t.c,16).toRed(this.red),
                this.c2 = this.c.redSqr(),
                this.d = new Oe(t.d,16).toRed(this.red),
                this.dd = this.d.redAdd(this.d),
                vr(!this.twisted || 0 === this.c.fromRed().cmpn(1)),
                this.oneC = 1 == (0 | t.c)
            }
            x(_r, fr);
            var yr = _r;
            function mr(t, e, r, n, i) {
                fr.BasePoint.call(this, t, "projective"),
                null === e && null === r && null === n ? (this.x = this.curve.zero,
                this.y = this.curve.one,
                this.z = this.curve.one,
                this.t = this.curve.zero,
                this.zOne = !0) : (this.x = new Oe(e,16),
                this.y = new Oe(r,16),
                this.z = n ? new Oe(n,16) : this.curve.one,
                this.t = i && new Oe(i,16),
                this.x.red || (this.x = this.x.toRed(this.curve.red)),
                this.y.red || (this.y = this.y.toRed(this.curve.red)),
                this.z.red || (this.z = this.z.toRed(this.curve.red)),
                this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)),
                this.zOne = this.z === this.curve.one,
                this.curve.extended && !this.t && (this.t = this.x.redMul(this.y),
                this.zOne || (this.t = this.t.redMul(this.z.redInvm()))))
            }
            _r.prototype._mulA = function(t) {
                return this.mOneA ? t.redNeg() : this.a.redMul(t)
            }
            ,
            _r.prototype._mulC = function(t) {
                return this.oneC ? t : this.c.redMul(t)
            }
            ,
            _r.prototype.jpoint = function(t, e, r, n) {
                return this.point(t, e, r, n)
            }
            ,
            _r.prototype.pointFromX = function(t, e) {
                (t = new Oe(t,16)).red || (t = t.toRed(this.red));
                var r = t.redSqr()
                  , n = this.c2.redSub(this.a.redMul(r))
                  , i = this.one.redSub(this.c2.redMul(this.d).redMul(r))
                  , a = n.redMul(i.redInvm())
                  , f = a.redSqrt();
                if (0 !== f.redSqr().redSub(a).cmp(this.zero))
                    throw new Error("invalid point");
                var o = f.fromRed().isOdd();
                return (e && !o || !e && o) && (f = f.redNeg()),
                this.point(t, f)
            }
            ,
            _r.prototype.pointFromY = function(t, e) {
                (t = new Oe(t,16)).red || (t = t.toRed(this.red));
                var r = t.redSqr()
                  , n = r.redSub(this.c2)
                  , i = r.redMul(this.d).redMul(this.c2).redSub(this.a)
                  , a = n.redMul(i.redInvm());
                if (0 === a.cmp(this.zero)) {
                    if (e)
                        throw new Error("invalid point");
                    return this.point(this.zero, t)
                }
                var f = a.redSqrt();
                if (0 !== f.redSqr().redSub(a).cmp(this.zero))
                    throw new Error("invalid point");
                return f.fromRed().isOdd() !== e && (f = f.redNeg()),
                this.point(f, t)
            }
            ,
            _r.prototype.validate = function(t) {
                if (t.isInfinity())
                    return !0;
                t.normalize();
                var e = t.x.redSqr()
                  , r = t.y.redSqr()
                  , n = e.redMul(this.a).redAdd(r)
                  , i = this.c2.redMul(this.one.redAdd(this.d.redMul(e).redMul(r)));
                return 0 === n.cmp(i)
            }
            ,
            x(mr, fr.BasePoint),
            _r.prototype.pointFromJSON = function(t) {
                return mr.fromJSON(this, t)
            }
            ,
            _r.prototype.point = function(t, e, r, n) {
                return new mr(this,t,e,r,n)
            }
            ,
            mr.fromJSON = function(t, e) {
                return new mr(t,e[0],e[1],e[2])
            }
            ,
            mr.prototype.inspect = function() {
                return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"
            }
            ,
            mr.prototype.isInfinity = function() {
                return 0 === this.x.cmpn(0) && (0 === this.y.cmp(this.z) || this.zOne && 0 === this.y.cmp(this.curve.c))
            }
            ,
            mr.prototype._extDbl = function() {
                var t = this.x.redSqr()
                  , e = this.y.redSqr()
                  , r = this.z.redSqr();
                r = r.redIAdd(r);
                var n = this.curve._mulA(t)
                  , i = this.x.redAdd(this.y).redSqr().redISub(t).redISub(e)
                  , a = n.redAdd(e)
                  , f = a.redSub(r)
                  , o = n.redSub(e)
                  , s = i.redMul(f)
                  , c = a.redMul(o)
                  , u = i.redMul(o)
                  , d = f.redMul(a);
                return this.curve.point(s, c, d, u)
            }
            ,
            mr.prototype._projDbl = function() {
                var t, e, r, n = this.x.redAdd(this.y).redSqr(), i = this.x.redSqr(), a = this.y.redSqr();
                if (this.curve.twisted) {
                    var f = (c = this.curve._mulA(i)).redAdd(a);
                    if (this.zOne)
                        t = n.redSub(i).redSub(a).redMul(f.redSub(this.curve.two)),
                        e = f.redMul(c.redSub(a)),
                        r = f.redSqr().redSub(f).redSub(f);
                    else {
                        var o = this.z.redSqr()
                          , s = f.redSub(o).redISub(o);
                        t = n.redSub(i).redISub(a).redMul(s),
                        e = f.redMul(c.redSub(a)),
                        r = f.redMul(s)
                    }
                } else {
                    var c = i.redAdd(a);
                    o = this.curve._mulC(this.z).redSqr(),
                    s = c.redSub(o).redSub(o),
                    t = this.curve._mulC(n.redISub(c)).redMul(s),
                    e = this.curve._mulC(c).redMul(i.redISub(a)),
                    r = c.redMul(s)
                }
                return this.curve.point(t, e, r)
            }
            ,
            mr.prototype.dbl = function() {
                return this.isInfinity() ? this : this.curve.extended ? this._extDbl() : this._projDbl()
            }
            ,
            mr.prototype._extAdd = function(t) {
                var e = this.y.redSub(this.x).redMul(t.y.redSub(t.x))
                  , r = this.y.redAdd(this.x).redMul(t.y.redAdd(t.x))
                  , n = this.t.redMul(this.curve.dd).redMul(t.t)
                  , i = this.z.redMul(t.z.redAdd(t.z))
                  , a = r.redSub(e)
                  , f = i.redSub(n)
                  , o = i.redAdd(n)
                  , s = r.redAdd(e)
                  , c = a.redMul(f)
                  , u = o.redMul(s)
                  , d = a.redMul(s)
                  , h = f.redMul(o);
                return this.curve.point(c, u, h, d)
            }
            ,
            mr.prototype._projAdd = function(t) {
                var e, r, n = this.z.redMul(t.z), i = n.redSqr(), a = this.x.redMul(t.x), f = this.y.redMul(t.y), o = this.curve.d.redMul(a).redMul(f), s = i.redSub(o), c = i.redAdd(o), u = this.x.redAdd(this.y).redMul(t.x.redAdd(t.y)).redISub(a).redISub(f), d = n.redMul(s).redMul(u);
                return this.curve.twisted ? (e = n.redMul(c).redMul(f.redSub(this.curve._mulA(a))),
                r = s.redMul(c)) : (e = n.redMul(c).redMul(f.redSub(a)),
                r = this.curve._mulC(s).redMul(c)),
                this.curve.point(d, e, r)
            }
            ,
            mr.prototype.add = function(t) {
                return this.isInfinity() ? t : t.isInfinity() ? this : this.curve.extended ? this._extAdd(t) : this._projAdd(t)
            }
            ,
            mr.prototype.mul = function(t) {
                return this._hasDoubles(t) ? this.curve._fixedNafMul(this, t) : this.curve._wnafMul(this, t)
            }
            ,
            mr.prototype.mulAdd = function(t, e, r) {
                return this.curve._wnafMulAdd(1, [this, e], [t, r], 2, !1)
            }
            ,
            mr.prototype.jmulAdd = function(t, e, r) {
                return this.curve._wnafMulAdd(1, [this, e], [t, r], 2, !0)
            }
            ,
            mr.prototype.normalize = function() {
                if (this.zOne)
                    return this;
                var t = this.z.redInvm();
                return this.x = this.x.redMul(t),
                this.y = this.y.redMul(t),
                this.t && (this.t = this.t.redMul(t)),
                this.z = this.curve.one,
                this.zOne = !0,
                this
            }
            ,
            mr.prototype.neg = function() {
                return this.curve.point(this.x.redNeg(), this.y, this.z, this.t && this.t.redNeg())
            }
            ,
            mr.prototype.getX = function() {
                return this.normalize(),
                this.x.fromRed()
            }
            ,
            mr.prototype.getY = function() {
                return this.normalize(),
                this.y.fromRed()
            }
            ,
            mr.prototype.eq = function(t) {
                return this === t || 0 === this.getX().cmp(t.getX()) && 0 === this.getY().cmp(t.getY())
            }
            ,
            mr.prototype.eqXToP = function(t) {
                var e = t.toRed(this.curve.red).redMul(this.z);
                if (0 === this.x.cmp(e))
                    return !0;
                for (var r = t.clone(), n = this.curve.redN.redMul(this.z); ; ) {
                    if (r.iadd(this.curve.n),
                    r.cmp(this.curve.p) >= 0)
                        return !1;
                    if (e.redIAdd(n),
                    0 === this.x.cmp(e))
                        return !0
                }
            }
            ,
            mr.prototype.toP = mr.prototype.normalize,
            mr.prototype.mixedAdd = mr.prototype.add;
            var gr = Object(p.g)((function(t, e) {
                var r = e;
                r.base = fr,
                r.short = ur,
                r.mont = br,
                r.edwards = yr
            }
            ));
            function wr(t, e) {
                return 55296 == (64512 & t.charCodeAt(e)) && !(e < 0 || e + 1 >= t.length) && 56320 == (64512 & t.charCodeAt(e + 1))
            }
            function Ar(t) {
                return (t >>> 24 | t >>> 8 & 65280 | t << 8 & 16711680 | (255 & t) << 24) >>> 0
            }
            function Er(t) {
                return 1 === t.length ? "0" + t : t
            }
            function Ir(t) {
                return 7 === t.length ? "0" + t : 6 === t.length ? "00" + t : 5 === t.length ? "000" + t : 4 === t.length ? "0000" + t : 3 === t.length ? "00000" + t : 2 === t.length ? "000000" + t : 1 === t.length ? "0000000" + t : t
            }
            var Mr = {
                inherits: x,
                toArray: function(t, e) {
                    if (Array.isArray(t))
                        return t.slice();
                    if (!t)
                        return [];
                    var r = [];
                    if ("string" == typeof t)
                        if (e) {
                            if ("hex" === e)
                                for ((t = t.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (t = "0" + t),
                                i = 0; i < t.length; i += 2)
                                    r.push(parseInt(t[i] + t[i + 1], 16))
                        } else
                            for (var n = 0, i = 0; i < t.length; i++) {
                                var a = t.charCodeAt(i);
                                a < 128 ? r[n++] = a : a < 2048 ? (r[n++] = a >> 6 | 192,
                                r[n++] = 63 & a | 128) : wr(t, i) ? (a = 65536 + ((1023 & a) << 10) + (1023 & t.charCodeAt(++i)),
                                r[n++] = a >> 18 | 240,
                                r[n++] = a >> 12 & 63 | 128,
                                r[n++] = a >> 6 & 63 | 128,
                                r[n++] = 63 & a | 128) : (r[n++] = a >> 12 | 224,
                                r[n++] = a >> 6 & 63 | 128,
                                r[n++] = 63 & a | 128)
                            }
                    else
                        for (i = 0; i < t.length; i++)
                            r[i] = 0 | t[i];
                    return r
                },
                toHex: function(t) {
                    for (var e = "", r = 0; r < t.length; r++)
                        e += Er(t[r].toString(16));
                    return e
                },
                htonl: Ar,
                toHex32: function(t, e) {
                    for (var r = "", n = 0; n < t.length; n++) {
                        var i = t[n];
                        "little" === e && (i = Ar(i)),
                        r += Ir(i.toString(16))
                    }
                    return r
                },
                zero2: Er,
                zero8: Ir,
                join32: function(t, e, r, n) {
                    var i = r - e;
                    Ge(i % 4 == 0);
                    for (var a = new Array(i / 4), f = 0, o = e; f < a.length; f++,
                    o += 4) {
                        var s;
                        s = "big" === n ? t[o] << 24 | t[o + 1] << 16 | t[o + 2] << 8 | t[o + 3] : t[o + 3] << 24 | t[o + 2] << 16 | t[o + 1] << 8 | t[o],
                        a[f] = s >>> 0
                    }
                    return a
                },
                split32: function(t, e) {
                    for (var r = new Array(4 * t.length), n = 0, i = 0; n < t.length; n++,
                    i += 4) {
                        var a = t[n];
                        "big" === e ? (r[i] = a >>> 24,
                        r[i + 1] = a >>> 16 & 255,
                        r[i + 2] = a >>> 8 & 255,
                        r[i + 3] = 255 & a) : (r[i + 3] = a >>> 24,
                        r[i + 2] = a >>> 16 & 255,
                        r[i + 1] = a >>> 8 & 255,
                        r[i] = 255 & a)
                    }
                    return r
                },
                rotr32: function(t, e) {
                    return t >>> e | t << 32 - e
                },
                rotl32: function(t, e) {
                    return t << e | t >>> 32 - e
                },
                sum32: function(t, e) {
                    return t + e >>> 0
                },
                sum32_3: function(t, e, r) {
                    return t + e + r >>> 0
                },
                sum32_4: function(t, e, r, n) {
                    return t + e + r + n >>> 0
                },
                sum32_5: function(t, e, r, n, i) {
                    return t + e + r + n + i >>> 0
                },
                sum64: function(t, e, r, n) {
                    var i = t[e]
                      , a = n + t[e + 1] >>> 0
                      , f = (a < n ? 1 : 0) + r + i;
                    t[e] = f >>> 0,
                    t[e + 1] = a
                },
                sum64_hi: function(t, e, r, n) {
                    return (e + n >>> 0 < e ? 1 : 0) + t + r >>> 0
                },
                sum64_lo: function(t, e, r, n) {
                    return e + n >>> 0
                },
                sum64_4_hi: function(t, e, r, n, i, a, f, o) {
                    var s = 0
                      , c = e;
                    return s += (c = c + n >>> 0) < e ? 1 : 0,
                    s += (c = c + a >>> 0) < a ? 1 : 0,
                    t + r + i + f + (s += (c = c + o >>> 0) < o ? 1 : 0) >>> 0
                },
                sum64_4_lo: function(t, e, r, n, i, a, f, o) {
                    return e + n + a + o >>> 0
                },
                sum64_5_hi: function(t, e, r, n, i, a, f, o, s, c) {
                    var u = 0
                      , d = e;
                    return u += (d = d + n >>> 0) < e ? 1 : 0,
                    u += (d = d + a >>> 0) < a ? 1 : 0,
                    u += (d = d + o >>> 0) < o ? 1 : 0,
                    t + r + i + f + s + (u += (d = d + c >>> 0) < c ? 1 : 0) >>> 0
                },
                sum64_5_lo: function(t, e, r, n, i, a, f, o, s, c) {
                    return e + n + a + o + c >>> 0
                },
                rotr64_hi: function(t, e, r) {
                    return (e << 32 - r | t >>> r) >>> 0
                },
                rotr64_lo: function(t, e, r) {
                    return (t << 32 - r | e >>> r) >>> 0
                },
                shr64_hi: function(t, e, r) {
                    return t >>> r
                },
                shr64_lo: function(t, e, r) {
                    return (t << 32 - r | e >>> r) >>> 0
                }
            };
            function Sr() {
                this.pending = null,
                this.pendingTotal = 0,
                this.blockSize = this.constructor.blockSize,
                this.outSize = this.constructor.outSize,
                this.hmacStrength = this.constructor.hmacStrength,
                this.padLength = this.constructor.padLength / 8,
                this.endian = "big",
                this._delta8 = this.blockSize / 8,
                this._delta32 = this.blockSize / 32
            }
            var kr = Sr;
            Sr.prototype.update = function(t, e) {
                if (t = Mr.toArray(t, e),
                this.pending ? this.pending = this.pending.concat(t) : this.pending = t,
                this.pendingTotal += t.length,
                this.pending.length >= this._delta8) {
                    var r = (t = this.pending).length % this._delta8;
                    this.pending = t.slice(t.length - r, t.length),
                    0 === this.pending.length && (this.pending = null),
                    t = Mr.join32(t, 0, t.length - r, this.endian);
                    for (var n = 0; n < t.length; n += this._delta32)
                        this._update(t, n, n + this._delta32)
                }
                return this
            }
            ,
            Sr.prototype.digest = function(t) {
                return this.update(this._pad()),
                Ge(null === this.pending),
                this._digest(t)
            }
            ,
            Sr.prototype._pad = function() {
                var t = this.pendingTotal
                  , e = this._delta8
                  , r = e - (t + this.padLength) % e
                  , n = new Array(r + this.padLength);
                n[0] = 128;
                for (var i = 1; i < r; i++)
                    n[i] = 0;
                if (t <<= 3,
                "big" === this.endian) {
                    for (var a = 8; a < this.padLength; a++)
                        n[i++] = 0;
                    n[i++] = 0,
                    n[i++] = 0,
                    n[i++] = 0,
                    n[i++] = 0,
                    n[i++] = t >>> 24 & 255,
                    n[i++] = t >>> 16 & 255,
                    n[i++] = t >>> 8 & 255,
                    n[i++] = 255 & t
                } else
                    for (n[i++] = 255 & t,
                    n[i++] = t >>> 8 & 255,
                    n[i++] = t >>> 16 & 255,
                    n[i++] = t >>> 24 & 255,
                    n[i++] = 0,
                    n[i++] = 0,
                    n[i++] = 0,
                    n[i++] = 0,
                    a = 8; a < this.padLength; a++)
                        n[i++] = 0;
                return n
            }
            ;
            var Lr = {
                BlockHash: kr
            }
              , xr = Mr.rotr32;
            function Pr(t, e, r) {
                return t & e ^ ~t & r
            }
            function Tr(t, e, r) {
                return t & e ^ t & r ^ e & r
            }
            function Rr(t, e, r) {
                return t ^ e ^ r
            }
            var jr = function(t, e, r, n) {
                return 0 === t ? Pr(e, r, n) : 1 === t || 3 === t ? Rr(e, r, n) : 2 === t ? Tr(e, r, n) : void 0
            }
              , Or = Pr
              , Cr = Tr
              , Br = function(t) {
                return xr(t, 2) ^ xr(t, 13) ^ xr(t, 22)
            }
              , Nr = function(t) {
                return xr(t, 6) ^ xr(t, 11) ^ xr(t, 25)
            }
              , zr = function(t) {
                return xr(t, 7) ^ xr(t, 18) ^ t >>> 3
            }
              , Dr = function(t) {
                return xr(t, 17) ^ xr(t, 19) ^ t >>> 10
            }
              , Kr = Mr.rotl32
              , Vr = Mr.sum32
              , Ur = Mr.sum32_5
              , qr = jr
              , Yr = Lr.BlockHash
              , Fr = [1518500249, 1859775393, 2400959708, 3395469782];
            function Hr() {
                if (!(this instanceof Hr))
                    return new Hr;
                Yr.call(this),
                this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520],
                this.W = new Array(80)
            }
            Mr.inherits(Hr, Yr);
            var Gr = Hr;
            Hr.blockSize = 512,
            Hr.outSize = 160,
            Hr.hmacStrength = 80,
            Hr.padLength = 64,
            Hr.prototype._update = function(t, e) {
                for (var r = this.W, n = 0; n < 16; n++)
                    r[n] = t[e + n];
                for (; n < r.length; n++)
                    r[n] = Kr(r[n - 3] ^ r[n - 8] ^ r[n - 14] ^ r[n - 16], 1);
                var i = this.h[0]
                  , a = this.h[1]
                  , f = this.h[2]
                  , o = this.h[3]
                  , s = this.h[4];
                for (n = 0; n < r.length; n++) {
                    var c = ~~(n / 20)
                      , u = Ur(Kr(i, 5), qr(c, a, f, o), s, r[n], Fr[c]);
                    s = o,
                    o = f,
                    f = Kr(a, 30),
                    a = i,
                    i = u
                }
                this.h[0] = Vr(this.h[0], i),
                this.h[1] = Vr(this.h[1], a),
                this.h[2] = Vr(this.h[2], f),
                this.h[3] = Vr(this.h[3], o),
                this.h[4] = Vr(this.h[4], s)
            }
            ,
            Hr.prototype._digest = function(t) {
                return "hex" === t ? Mr.toHex32(this.h, "big") : Mr.split32(this.h, "big")
            }
            ;
            var Wr = Mr.sum32
              , Zr = Mr.sum32_4
              , Jr = Mr.sum32_5
              , Xr = Or
              , $r = Cr
              , Qr = Br
              , tn = Nr
              , en = zr
              , rn = Dr
              , nn = Lr.BlockHash
              , an = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
            function fn() {
                if (!(this instanceof fn))
                    return new fn;
                nn.call(this),
                this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225],
                this.k = an,
                this.W = new Array(64)
            }
            Mr.inherits(fn, nn);
            var on = fn;
            function sn() {
                if (!(this instanceof sn))
                    return new sn;
                on.call(this),
                this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]
            }
            fn.blockSize = 512,
            fn.outSize = 256,
            fn.hmacStrength = 192,
            fn.padLength = 64,
            fn.prototype._update = function(t, e) {
                for (var r = this.W, n = 0; n < 16; n++)
                    r[n] = t[e + n];
                for (; n < r.length; n++)
                    r[n] = Zr(rn(r[n - 2]), r[n - 7], en(r[n - 15]), r[n - 16]);
                var i = this.h[0]
                  , a = this.h[1]
                  , f = this.h[2]
                  , o = this.h[3]
                  , s = this.h[4]
                  , c = this.h[5]
                  , u = this.h[6]
                  , d = this.h[7];
                for (Ge(this.k.length === r.length),
                n = 0; n < r.length; n++) {
                    var h = Jr(d, tn(s), Xr(s, c, u), this.k[n], r[n])
                      , l = Wr(Qr(i), $r(i, a, f));
                    d = u,
                    u = c,
                    c = s,
                    s = Wr(o, h),
                    o = f,
                    f = a,
                    a = i,
                    i = Wr(h, l)
                }
                this.h[0] = Wr(this.h[0], i),
                this.h[1] = Wr(this.h[1], a),
                this.h[2] = Wr(this.h[2], f),
                this.h[3] = Wr(this.h[3], o),
                this.h[4] = Wr(this.h[4], s),
                this.h[5] = Wr(this.h[5], c),
                this.h[6] = Wr(this.h[6], u),
                this.h[7] = Wr(this.h[7], d)
            }
            ,
            fn.prototype._digest = function(t) {
                return "hex" === t ? Mr.toHex32(this.h, "big") : Mr.split32(this.h, "big")
            }
            ,
            Mr.inherits(sn, on);
            var cn = sn;
            sn.blockSize = 512,
            sn.outSize = 224,
            sn.hmacStrength = 192,
            sn.padLength = 64,
            sn.prototype._digest = function(t) {
                return "hex" === t ? Mr.toHex32(this.h.slice(0, 7), "big") : Mr.split32(this.h.slice(0, 7), "big")
            }
            ;
            var un = Mr.rotr64_hi
              , dn = Mr.rotr64_lo
              , hn = Mr.shr64_hi
              , ln = Mr.shr64_lo
              , bn = Mr.sum64
              , pn = Mr.sum64_hi
              , vn = Mr.sum64_lo
              , _n = Mr.sum64_4_hi
              , yn = Mr.sum64_4_lo
              , mn = Mr.sum64_5_hi
              , gn = Mr.sum64_5_lo
              , wn = Lr.BlockHash
              , An = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];
            function En() {
                if (!(this instanceof En))
                    return new En;
                wn.call(this),
                this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209],
                this.k = An,
                this.W = new Array(160)
            }
            Mr.inherits(En, wn);
            var In = En;
            function Mn(t, e, r, n, i) {
                var a = t & r ^ ~t & i;
                return a < 0 && (a += 4294967296),
                a
            }
            function Sn(t, e, r, n, i, a) {
                var f = e & n ^ ~e & a;
                return f < 0 && (f += 4294967296),
                f
            }
            function kn(t, e, r, n, i) {
                var a = t & r ^ t & i ^ r & i;
                return a < 0 && (a += 4294967296),
                a
            }
            function Ln(t, e, r, n, i, a) {
                var f = e & n ^ e & a ^ n & a;
                return f < 0 && (f += 4294967296),
                f
            }
            function xn(t, e) {
                var r = un(t, e, 28) ^ un(e, t, 2) ^ un(e, t, 7);
                return r < 0 && (r += 4294967296),
                r
            }
            function Pn(t, e) {
                var r = dn(t, e, 28) ^ dn(e, t, 2) ^ dn(e, t, 7);
                return r < 0 && (r += 4294967296),
                r
            }
            function Tn(t, e) {
                var r = un(t, e, 14) ^ un(t, e, 18) ^ un(e, t, 9);
                return r < 0 && (r += 4294967296),
                r
            }
            function Rn(t, e) {
                var r = dn(t, e, 14) ^ dn(t, e, 18) ^ dn(e, t, 9);
                return r < 0 && (r += 4294967296),
                r
            }
            function jn(t, e) {
                var r = un(t, e, 1) ^ un(t, e, 8) ^ hn(t, e, 7);
                return r < 0 && (r += 4294967296),
                r
            }
            function On(t, e) {
                var r = dn(t, e, 1) ^ dn(t, e, 8) ^ ln(t, e, 7);
                return r < 0 && (r += 4294967296),
                r
            }
            function Cn(t, e) {
                var r = un(t, e, 19) ^ un(e, t, 29) ^ hn(t, e, 6);
                return r < 0 && (r += 4294967296),
                r
            }
            function Bn(t, e) {
                var r = dn(t, e, 19) ^ dn(e, t, 29) ^ ln(t, e, 6);
                return r < 0 && (r += 4294967296),
                r
            }
            function Nn() {
                if (!(this instanceof Nn))
                    return new Nn;
                In.call(this),
                this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428]
            }
            En.blockSize = 1024,
            En.outSize = 512,
            En.hmacStrength = 192,
            En.padLength = 128,
            En.prototype._prepareBlock = function(t, e) {
                for (var r = this.W, n = 0; n < 32; n++)
                    r[n] = t[e + n];
                for (; n < r.length; n += 2) {
                    var i = Cn(r[n - 4], r[n - 3])
                      , a = Bn(r[n - 4], r[n - 3])
                      , f = r[n - 14]
                      , o = r[n - 13]
                      , s = jn(r[n - 30], r[n - 29])
                      , c = On(r[n - 30], r[n - 29])
                      , u = r[n - 32]
                      , d = r[n - 31];
                    r[n] = _n(i, a, f, o, s, c, u, d),
                    r[n + 1] = yn(i, a, f, o, s, c, u, d)
                }
            }
            ,
            En.prototype._update = function(t, e) {
                this._prepareBlock(t, e);
                var r = this.W
                  , n = this.h[0]
                  , i = this.h[1]
                  , a = this.h[2]
                  , f = this.h[3]
                  , o = this.h[4]
                  , s = this.h[5]
                  , c = this.h[6]
                  , u = this.h[7]
                  , d = this.h[8]
                  , h = this.h[9]
                  , l = this.h[10]
                  , b = this.h[11]
                  , p = this.h[12]
                  , v = this.h[13]
                  , _ = this.h[14]
                  , y = this.h[15];
                Ge(this.k.length === r.length);
                for (var m = 0; m < r.length; m += 2) {
                    var g = _
                      , w = y
                      , A = Tn(d, h)
                      , E = Rn(d, h)
                      , I = Mn(d, 0, l, 0, p)
                      , M = Sn(0, h, 0, b, 0, v)
                      , S = this.k[m]
                      , k = this.k[m + 1]
                      , L = r[m]
                      , x = r[m + 1]
                      , P = mn(g, w, A, E, I, M, S, k, L, x)
                      , T = gn(g, w, A, E, I, M, S, k, L, x);
                    g = xn(n, i),
                    w = Pn(n, i),
                    A = kn(n, 0, a, 0, o),
                    E = Ln(0, i, 0, f, 0, s);
                    var R = pn(g, w, A, E)
                      , j = vn(g, w, A, E);
                    _ = p,
                    y = v,
                    p = l,
                    v = b,
                    l = d,
                    b = h,
                    d = pn(c, u, P, T),
                    h = vn(u, u, P, T),
                    c = o,
                    u = s,
                    o = a,
                    s = f,
                    a = n,
                    f = i,
                    n = pn(P, T, R, j),
                    i = vn(P, T, R, j)
                }
                bn(this.h, 0, n, i),
                bn(this.h, 2, a, f),
                bn(this.h, 4, o, s),
                bn(this.h, 6, c, u),
                bn(this.h, 8, d, h),
                bn(this.h, 10, l, b),
                bn(this.h, 12, p, v),
                bn(this.h, 14, _, y)
            }
            ,
            En.prototype._digest = function(t) {
                return "hex" === t ? Mr.toHex32(this.h, "big") : Mr.split32(this.h, "big")
            }
            ,
            Mr.inherits(Nn, In);
            var zn = Nn;
            Nn.blockSize = 1024,
            Nn.outSize = 384,
            Nn.hmacStrength = 192,
            Nn.padLength = 128,
            Nn.prototype._digest = function(t) {
                return "hex" === t ? Mr.toHex32(this.h.slice(0, 12), "big") : Mr.split32(this.h.slice(0, 12), "big")
            }
            ;
            var Dn = {
                sha1: Gr,
                sha224: cn,
                sha256: on,
                sha384: zn,
                sha512: In
            }
              , Kn = Mr.rotl32
              , Vn = Mr.sum32
              , Un = Mr.sum32_3
              , qn = Mr.sum32_4
              , Yn = Lr.BlockHash;
            function Fn() {
                if (!(this instanceof Fn))
                    return new Fn;
                Yn.call(this),
                this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520],
                this.endian = "little"
            }
            Mr.inherits(Fn, Yn);
            var Hn = Fn;
            function Gn(t, e, r, n) {
                return t <= 15 ? e ^ r ^ n : t <= 31 ? e & r | ~e & n : t <= 47 ? (e | ~r) ^ n : t <= 63 ? e & n | r & ~n : e ^ (r | ~n)
            }
            function Wn(t) {
                return t <= 15 ? 0 : t <= 31 ? 1518500249 : t <= 47 ? 1859775393 : t <= 63 ? 2400959708 : 2840853838
            }
            function Zn(t) {
                return t <= 15 ? 1352829926 : t <= 31 ? 1548603684 : t <= 47 ? 1836072691 : t <= 63 ? 2053994217 : 0
            }
            Fn.blockSize = 512,
            Fn.outSize = 160,
            Fn.hmacStrength = 192,
            Fn.padLength = 64,
            Fn.prototype._update = function(t, e) {
                for (var r = this.h[0], n = this.h[1], i = this.h[2], a = this.h[3], f = this.h[4], o = r, s = n, c = i, u = a, d = f, h = 0; h < 80; h++) {
                    var l = Vn(Kn(qn(r, Gn(h, n, i, a), t[Jn[h] + e], Wn(h)), $n[h]), f);
                    r = f,
                    f = a,
                    a = Kn(i, 10),
                    i = n,
                    n = l,
                    l = Vn(Kn(qn(o, Gn(79 - h, s, c, u), t[Xn[h] + e], Zn(h)), Qn[h]), d),
                    o = d,
                    d = u,
                    u = Kn(c, 10),
                    c = s,
                    s = l
                }
                l = Un(this.h[1], i, u),
                this.h[1] = Un(this.h[2], a, d),
                this.h[2] = Un(this.h[3], f, o),
                this.h[3] = Un(this.h[4], r, s),
                this.h[4] = Un(this.h[0], n, c),
                this.h[0] = l
            }
            ,
            Fn.prototype._digest = function(t) {
                return "hex" === t ? Mr.toHex32(this.h, "little") : Mr.split32(this.h, "little")
            }
            ;
            var Jn = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]
              , Xn = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]
              , $n = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]
              , Qn = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]
              , ti = {
                ripemd160: Hn
            };
            function ei(t, e, r) {
                if (!(this instanceof ei))
                    return new ei(t,e,r);
                this.Hash = t,
                this.blockSize = t.blockSize / 8,
                this.outSize = t.outSize / 8,
                this.inner = null,
                this.outer = null,
                this._init(Mr.toArray(e, r))
            }
            var ri = ei;
            ei.prototype._init = function(t) {
                t.length > this.blockSize && (t = (new this.Hash).update(t).digest()),
                Ge(t.length <= this.blockSize);
                for (var e = t.length; e < this.blockSize; e++)
                    t.push(0);
                for (e = 0; e < t.length; e++)
                    t[e] ^= 54;
                for (this.inner = (new this.Hash).update(t),
                e = 0; e < t.length; e++)
                    t[e] ^= 106;
                this.outer = (new this.Hash).update(t)
            }
            ,
            ei.prototype.update = function(t, e) {
                return this.inner.update(t, e),
                this
            }
            ,
            ei.prototype.digest = function(t) {
                return this.outer.update(this.inner.digest()),
                this.outer.digest(t)
            }
            ;
            var ni = Object(p.g)((function(t, e) {
                var r = e;
                r.utils = Mr,
                r.common = Lr,
                r.sha = Dn,
                r.ripemd = ti,
                r.hmac = ri,
                r.sha1 = r.sha.sha1,
                r.sha256 = r.sha.sha256,
                r.sha224 = r.sha.sha224,
                r.sha384 = r.sha.sha384,
                r.sha512 = r.sha.sha512,
                r.ripemd160 = r.ripemd.ripemd160
            }
            ))
              , ii = {
                doubles: {
                    step: 4,
                    points: [["e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a", "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"], ["8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508", "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"], ["175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739", "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"], ["363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640", "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"], ["8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c", "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"], ["723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda", "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"], ["eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa", "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"], ["100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0", "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"], ["e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d", "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"], ["feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d", "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"], ["da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1", "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"], ["53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0", "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"], ["8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047", "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"], ["385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862", "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"], ["6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7", "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"], ["3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd", "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"], ["85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83", "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"], ["948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a", "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"], ["6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8", "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"], ["e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d", "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"], ["e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725", "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"], ["213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754", "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"], ["4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c", "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"], ["fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6", "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"], ["76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39", "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"], ["c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891", "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"], ["d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b", "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"], ["b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03", "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"], ["e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d", "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"], ["a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070", "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"], ["90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4", "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"], ["8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da", "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"], ["e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11", "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"], ["8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e", "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"], ["e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41", "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"], ["b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef", "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"], ["d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8", "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"], ["324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d", "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"], ["4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96", "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"], ["9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd", "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"], ["6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5", "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"], ["a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266", "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"], ["7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71", "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"], ["928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac", "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"], ["85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751", "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"], ["ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e", "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"], ["827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241", "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"], ["eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3", "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"], ["e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f", "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"], ["1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19", "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"], ["146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be", "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"], ["fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9", "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"], ["da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2", "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"], ["a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13", "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"], ["174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c", "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"], ["959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba", "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"], ["d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151", "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"], ["64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073", "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"], ["8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458", "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"], ["13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b", "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"], ["bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366", "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"], ["8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa", "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"], ["8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0", "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"], ["dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787", "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"], ["f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e", "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"]]
                },
                naf: {
                    wnd: 7,
                    points: [["f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9", "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"], ["2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4", "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"], ["5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc", "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"], ["acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe", "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"], ["774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb", "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"], ["f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8", "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"], ["d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e", "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"], ["defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34", "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"], ["2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c", "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"], ["352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5", "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"], ["2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f", "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"], ["9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714", "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"], ["daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729", "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"], ["c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db", "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"], ["6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4", "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"], ["1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5", "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"], ["605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479", "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"], ["62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d", "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"], ["80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f", "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"], ["7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb", "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"], ["d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9", "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"], ["49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963", "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"], ["77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74", "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"], ["f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530", "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"], ["463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b", "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"], ["f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247", "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"], ["caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1", "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"], ["2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120", "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"], ["7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435", "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"], ["754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18", "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"], ["e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8", "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"], ["186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb", "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"], ["df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f", "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"], ["5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143", "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"], ["290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba", "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"], ["af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45", "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"], ["766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a", "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"], ["59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e", "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"], ["f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8", "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"], ["7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c", "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"], ["948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519", "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"], ["7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab", "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"], ["3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca", "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"], ["d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf", "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"], ["1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610", "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"], ["733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4", "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"], ["15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c", "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"], ["a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940", "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"], ["e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980", "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"], ["311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3", "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"], ["34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf", "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"], ["f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63", "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"], ["d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448", "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"], ["32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf", "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"], ["7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5", "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"], ["ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6", "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"], ["16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5", "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"], ["eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99", "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"], ["78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51", "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"], ["494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5", "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"], ["a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5", "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"], ["c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997", "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"], ["841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881", "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"], ["5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5", "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"], ["36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66", "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"], ["336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726", "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"], ["8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede", "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"], ["1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94", "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"], ["85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31", "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"], ["29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51", "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"], ["a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252", "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"], ["4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5", "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"], ["d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b", "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"], ["ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4", "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"], ["af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f", "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"], ["e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889", "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"], ["591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246", "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"], ["11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984", "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"], ["3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a", "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"], ["cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030", "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"], ["c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197", "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"], ["c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593", "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"], ["a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef", "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"], ["347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38", "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"], ["da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a", "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"], ["c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111", "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"], ["4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502", "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"], ["3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea", "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"], ["cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26", "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"], ["b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986", "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"], ["d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e", "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"], ["48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4", "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"], ["dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda", "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"], ["6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859", "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"], ["e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f", "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"], ["eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c", "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"], ["13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942", "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"], ["ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a", "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"], ["b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80", "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"], ["ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d", "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"], ["8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1", "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"], ["52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63", "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"], ["e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352", "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"], ["7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193", "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"], ["5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00", "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"], ["32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58", "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"], ["e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7", "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"], ["8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8", "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"], ["4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e", "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"], ["3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d", "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"], ["674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b", "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"], ["d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f", "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"], ["30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6", "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"], ["be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297", "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"], ["93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a", "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"], ["b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c", "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"], ["d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52", "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"], ["d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb", "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"], ["463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065", "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"], ["7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917", "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"], ["74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9", "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"], ["30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3", "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"], ["9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57", "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"], ["176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66", "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"], ["75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8", "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"], ["809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721", "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"], ["1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180", "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"]]
                }
            }
              , ai = Object(p.g)((function(t, e) {
                var r, n = e, i = Xe.assert;
                function a(t) {
                    "short" === t.type ? this.curve = new gr.short(t) : "edwards" === t.type ? this.curve = new gr.edwards(t) : this.curve = new gr.mont(t),
                    this.g = this.curve.g,
                    this.n = this.curve.n,
                    this.hash = t.hash,
                    i(this.g.validate(), "Invalid curve"),
                    i(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O")
                }
                function f(t, e) {
                    Object.defineProperty(n, t, {
                        configurable: !0,
                        enumerable: !0,
                        get: function() {
                            var r = new a(e);
                            return Object.defineProperty(n, t, {
                                configurable: !0,
                                enumerable: !0,
                                value: r
                            }),
                            r
                        }
                    })
                }
                n.PresetCurve = a,
                f("p192", {
                    type: "short",
                    prime: "p192",
                    p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
                    a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
                    b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
                    n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
                    hash: ni.sha256,
                    gRed: !1,
                    g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]
                }),
                f("p224", {
                    type: "short",
                    prime: "p224",
                    p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
                    a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
                    b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
                    n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
                    hash: ni.sha256,
                    gRed: !1,
                    g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]
                }),
                f("p256", {
                    type: "short",
                    prime: null,
                    p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
                    a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
                    b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
                    n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
                    hash: ni.sha256,
                    gRed: !1,
                    g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]
                }),
                f("p384", {
                    type: "short",
                    prime: null,
                    p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
                    a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
                    b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
                    n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
                    hash: ni.sha384,
                    gRed: !1,
                    g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]
                }),
                f("p521", {
                    type: "short",
                    prime: null,
                    p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
                    a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
                    b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
                    n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
                    hash: ni.sha512,
                    gRed: !1,
                    g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]
                }),
                f("curve25519", {
                    type: "mont",
                    prime: "p25519",
                    p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                    a: "76d06",
                    b: "1",
                    n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                    hash: ni.sha256,
                    gRed: !1,
                    g: ["9"]
                }),
                f("ed25519", {
                    type: "edwards",
                    prime: "p25519",
                    p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                    a: "-1",
                    c: "1",
                    d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
                    n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                    hash: ni.sha256,
                    gRed: !1,
                    g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"]
                });
                try {
                    r = ii
                } catch (t) {
                    r = void 0
                }
                f("secp256k1", {
                    type: "short",
                    prime: "k256",
                    p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
                    a: "0",
                    b: "7",
                    n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
                    h: "1",
                    hash: ni.sha256,
                    beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
                    lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
                    basis: [{
                        a: "3086d221a7d46bcde86c90e49284eb15",
                        b: "-e4437ed6010e88286f547fa90abfe4c3"
                    }, {
                        a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
                        b: "3086d221a7d46bcde86c90e49284eb15"
                    }],
                    gRed: !1,
                    g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", r]
                })
            }
            ));
            function fi(t) {
                if (!(this instanceof fi))
                    return new fi(t);
                this.hash = t.hash,
                this.predResist = !!t.predResist,
                this.outLen = this.hash.outSize,
                this.minEntropy = t.minEntropy || this.hash.hmacStrength,
                this._reseed = null,
                this.reseedInterval = null,
                this.K = null,
                this.V = null;
                var e = Je.toArray(t.entropy, t.entropyEnc || "hex")
                  , r = Je.toArray(t.nonce, t.nonceEnc || "hex")
                  , n = Je.toArray(t.pers, t.persEnc || "hex");
                Ge(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"),
                this._init(e, r, n)
            }
            var oi = fi;
            fi.prototype._init = function(t, e, r) {
                var n = t.concat(e).concat(r);
                this.K = new Array(this.outLen / 8),
                this.V = new Array(this.outLen / 8);
                for (var i = 0; i < this.V.length; i++)
                    this.K[i] = 0,
                    this.V[i] = 1;
                this._update(n),
                this._reseed = 1,
                this.reseedInterval = 281474976710656
            }
            ,
            fi.prototype._hmac = function() {
                return new ni.hmac(this.hash,this.K)
            }
            ,
            fi.prototype._update = function(t) {
                var e = this._hmac().update(this.V).update([0]);
                t && (e = e.update(t)),
                this.K = e.digest(),
                this.V = this._hmac().update(this.V).digest(),
                t && (this.K = this._hmac().update(this.V).update([1]).update(t).digest(),
                this.V = this._hmac().update(this.V).digest())
            }
            ,
            fi.prototype.reseed = function(t, e, r, n) {
                "string" != typeof e && (n = r,
                r = e,
                e = null),
                t = Je.toArray(t, e),
                r = Je.toArray(r, n),
                Ge(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"),
                this._update(t.concat(r || [])),
                this._reseed = 1
            }
            ,
            fi.prototype.generate = function(t, e, r, n) {
                if (this._reseed > this.reseedInterval)
                    throw new Error("Reseed is required");
                "string" != typeof e && (n = r,
                r = e,
                e = null),
                r && (r = Je.toArray(r, n || "hex"),
                this._update(r));
                for (var i = []; i.length < t; )
                    this.V = this._hmac().update(this.V).digest(),
                    i = i.concat(this.V);
                var a = i.slice(0, t);
                return this._update(r),
                this._reseed++,
                Je.encode(a, e)
            }
            ;
            var si = Xe.assert;
            function ci(t, e) {
                this.ec = t,
                this.priv = null,
                this.pub = null,
                e.priv && this._importPrivate(e.priv, e.privEnc),
                e.pub && this._importPublic(e.pub, e.pubEnc)
            }
            var ui = ci;
            ci.fromPublic = function(t, e, r) {
                return e instanceof ci ? e : new ci(t,{
                    pub: e,
                    pubEnc: r
                })
            }
            ,
            ci.fromPrivate = function(t, e, r) {
                return e instanceof ci ? e : new ci(t,{
                    priv: e,
                    privEnc: r
                })
            }
            ,
            ci.prototype.validate = function() {
                var t = this.getPublic();
                return t.isInfinity() ? {
                    result: !1,
                    reason: "Invalid public key"
                } : t.validate() ? t.mul(this.ec.curve.n).isInfinity() ? {
                    result: !0,
                    reason: null
                } : {
                    result: !1,
                    reason: "Public key * N != O"
                } : {
                    result: !1,
                    reason: "Public key is not a point"
                }
            }
            ,
            ci.prototype.getPublic = function(t, e) {
                return "string" == typeof t && (e = t,
                t = null),
                this.pub || (this.pub = this.ec.g.mul(this.priv)),
                e ? this.pub.encode(e, t) : this.pub
            }
            ,
            ci.prototype.getPrivate = function(t) {
                return "hex" === t ? this.priv.toString(16, 2) : this.priv
            }
            ,
            ci.prototype._importPrivate = function(t, e) {
                this.priv = new Oe(t,e || 16),
                this.priv = this.priv.umod(this.ec.curve.n)
            }
            ,
            ci.prototype._importPublic = function(t, e) {
                if (t.x || t.y)
                    return "mont" === this.ec.curve.type ? si(t.x, "Need x coordinate") : "short" !== this.ec.curve.type && "edwards" !== this.ec.curve.type || si(t.x && t.y, "Need both x and y coordinate"),
                    void (this.pub = this.ec.curve.point(t.x, t.y));
                this.pub = this.ec.curve.decodePoint(t, e)
            }
            ,
            ci.prototype.derive = function(t) {
                return t.mul(this.priv).getX()
            }
            ,
            ci.prototype.sign = function(t, e, r) {
                return this.ec.sign(t, this, e, r)
            }
            ,
            ci.prototype.verify = function(t, e) {
                return this.ec.verify(t, e, this)
            }
            ,
            ci.prototype.inspect = function() {
                return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >"
            }
            ;
            var di = Xe.assert;
            function hi(t, e) {
                if (t instanceof hi)
                    return t;
                this._importDER(t, e) || (di(t.r && t.s, "Signature without r or s"),
                this.r = new Oe(t.r,16),
                this.s = new Oe(t.s,16),
                void 0 === t.recoveryParam ? this.recoveryParam = null : this.recoveryParam = t.recoveryParam)
            }
            var li = hi;
            function bi() {
                this.place = 0
            }
            function pi(t, e) {
                var r = t[e.place++];
                if (!(128 & r))
                    return r;
                for (var n = 15 & r, i = 0, a = 0, f = e.place; a < n; a++,
                f++)
                    i <<= 8,
                    i |= t[f];
                return e.place = f,
                i
            }
            function vi(t) {
                for (var e = 0, r = t.length - 1; !t[e] && !(128 & t[e + 1]) && e < r; )
                    e++;
                return 0 === e ? t : t.slice(e)
            }
            function _i(t, e) {
                if (e < 128)
                    t.push(e);
                else {
                    var r = 1 + (Math.log(e) / Math.LN2 >>> 3);
                    for (t.push(128 | r); --r; )
                        t.push(e >>> (r << 3) & 255);
                    t.push(e)
                }
            }
            hi.prototype._importDER = function(t, e) {
                t = Xe.toArray(t, e);
                var r = new bi;
                if (48 !== t[r.place++])
                    return !1;
                if (pi(t, r) + r.place !== t.length)
                    return !1;
                if (2 !== t[r.place++])
                    return !1;
                var n = pi(t, r)
                  , i = t.slice(r.place, n + r.place);
                if (r.place += n,
                2 !== t[r.place++])
                    return !1;
                var a = pi(t, r);
                if (t.length !== a + r.place)
                    return !1;
                var f = t.slice(r.place, a + r.place);
                return 0 === i[0] && 128 & i[1] && (i = i.slice(1)),
                0 === f[0] && 128 & f[1] && (f = f.slice(1)),
                this.r = new Oe(i),
                this.s = new Oe(f),
                this.recoveryParam = null,
                !0
            }
            ,
            hi.prototype.toDER = function(t) {
                var e = this.r.toArray()
                  , r = this.s.toArray();
                for (128 & e[0] && (e = [0].concat(e)),
                128 & r[0] && (r = [0].concat(r)),
                e = vi(e),
                r = vi(r); !(r[0] || 128 & r[1]); )
                    r = r.slice(1);
                var n = [2];
                _i(n, e.length),
                (n = n.concat(e)).push(2),
                _i(n, r.length);
                var i = n.concat(r)
                  , a = [48];
                return _i(a, i.length),
                a = a.concat(i),
                Xe.encode(a, t)
            }
            ;
            var yi = Xe.assert;
            function mi(t) {
                if (!(this instanceof mi))
                    return new mi(t);
                "string" == typeof t && (yi(ai.hasOwnProperty(t), "Unknown curve " + t),
                t = ai[t]),
                t instanceof ai.PresetCurve && (t = {
                    curve: t
                }),
                this.curve = t.curve.curve,
                this.n = this.curve.n,
                this.nh = this.n.ushrn(1),
                this.g = this.curve.g,
                this.g = t.curve.g,
                this.g.precompute(t.curve.n.bitLength() + 1),
                this.hash = t.hash || t.curve.hash
            }
            var gi = mi;
            mi.prototype.keyPair = function(t) {
                return new ui(this,t)
            }
            ,
            mi.prototype.keyFromPrivate = function(t, e) {
                return ui.fromPrivate(this, t, e)
            }
            ,
            mi.prototype.keyFromPublic = function(t, e) {
                return ui.fromPublic(this, t, e)
            }
            ,
            mi.prototype.genKeyPair = function(t) {
                t || (t = {});
                for (var e = new oi({
                    hash: this.hash,
                    pers: t.pers,
                    persEnc: t.persEnc || "utf8",
                    entropy: t.entropy || $e(this.hash.hmacStrength),
                    entropyEnc: t.entropy && t.entropyEnc || "utf8",
                    nonce: this.n.toArray()
                }), r = this.n.byteLength(), n = this.n.sub(new Oe(2)); ; ) {
                    var i = new Oe(e.generate(r));
                    if (!(i.cmp(n) > 0))
                        return i.iaddn(1),
                        this.keyFromPrivate(i)
                }
            }
            ,
            mi.prototype._truncateToN = function(t, e) {
                var r = 8 * t.byteLength() - this.n.bitLength();
                return r > 0 && (t = t.ushrn(r)),
                !e && t.cmp(this.n) >= 0 ? t.sub(this.n) : t
            }
            ,
            mi.prototype.sign = function(t, e, r, n) {
                "object" == typeof r && (n = r,
                r = null),
                n || (n = {}),
                e = this.keyFromPrivate(e, r),
                t = this._truncateToN(new Oe(t,16));
                for (var i = this.n.byteLength(), a = e.getPrivate().toArray("be", i), f = t.toArray("be", i), o = new oi({
                    hash: this.hash,
                    entropy: a,
                    nonce: f,
                    pers: n.pers,
                    persEnc: n.persEnc || "utf8"
                }), s = this.n.sub(new Oe(1)), c = 0; ; c++) {
                    var u = n.k ? n.k(c) : new Oe(o.generate(this.n.byteLength()));
                    if (!((u = this._truncateToN(u, !0)).cmpn(1) <= 0 || u.cmp(s) >= 0)) {
                        var d = this.g.mul(u);
                        if (!d.isInfinity()) {
                            var h = d.getX()
                              , l = h.umod(this.n);
                            if (0 !== l.cmpn(0)) {
                                var b = u.invm(this.n).mul(l.mul(e.getPrivate()).iadd(t));
                                if (0 !== (b = b.umod(this.n)).cmpn(0)) {
                                    var p = (d.getY().isOdd() ? 1 : 0) | (0 !== h.cmp(l) ? 2 : 0);
                                    return n.canonical && b.cmp(this.nh) > 0 && (b = this.n.sub(b),
                                    p ^= 1),
                                    new li({
                                        r: l,
                                        s: b,
                                        recoveryParam: p
                                    })
                                }
                            }
                        }
                    }
                }
            }
            ,
            mi.prototype.verify = function(t, e, r, n) {
                t = this._truncateToN(new Oe(t,16)),
                r = this.keyFromPublic(r, n);
                var i = (e = new li(e,"hex")).r
                  , a = e.s;
                if (i.cmpn(1) < 0 || i.cmp(this.n) >= 0)
                    return !1;
                if (a.cmpn(1) < 0 || a.cmp(this.n) >= 0)
                    return !1;
                var f, o = a.invm(this.n), s = o.mul(t).umod(this.n), c = o.mul(i).umod(this.n);
                return this.curve._maxwellTrick ? !(f = this.g.jmulAdd(s, r.getPublic(), c)).isInfinity() && f.eqXToP(i) : !(f = this.g.mulAdd(s, r.getPublic(), c)).isInfinity() && 0 === f.getX().umod(this.n).cmp(i)
            }
            ,
            mi.prototype.recoverPubKey = function(t, e, r, n) {
                yi((3 & r) === r, "The recovery param is more than two bits"),
                e = new li(e,n);
                var i = this.n
                  , a = new Oe(t)
                  , f = e.r
                  , o = e.s
                  , s = 1 & r
                  , c = r >> 1;
                if (f.cmp(this.curve.p.umod(this.curve.n)) >= 0 && c)
                    throw new Error("Unable to find sencond key candinate");
                f = c ? this.curve.pointFromX(f.add(this.curve.n), s) : this.curve.pointFromX(f, s);
                var u = e.r.invm(i)
                  , d = i.sub(a).mul(u).umod(i)
                  , h = o.mul(u).umod(i);
                return this.g.mulAdd(d, f, h)
            }
            ,
            mi.prototype.getKeyRecoveryParam = function(t, e, r, n) {
                if (null !== (e = new li(e,n)).recoveryParam)
                    return e.recoveryParam;
                for (var i = 0; i < 4; i++) {
                    var a;
                    try {
                        a = this.recoverPubKey(t, e, i)
                    } catch (t) {
                        continue
                    }
                    if (a.eq(r))
                        return i
                }
                throw new Error("Unable to find valid recovery factor")
            }
            ;
            var wi = Xe.assert
              , Ai = Xe.parseBytes
              , Ei = Xe.cachedProperty;
            function Ii(t, e) {
                this.eddsa = t,
                this._secret = Ai(e.secret),
                t.isPoint(e.pub) ? this._pub = e.pub : this._pubBytes = Ai(e.pub)
            }
            Ii.fromPublic = function(t, e) {
                return e instanceof Ii ? e : new Ii(t,{
                    pub: e
                })
            }
            ,
            Ii.fromSecret = function(t, e) {
                return e instanceof Ii ? e : new Ii(t,{
                    secret: e
                })
            }
            ,
            Ii.prototype.secret = function() {
                return this._secret
            }
            ,
            Ei(Ii, "pubBytes", (function() {
                return this.eddsa.encodePoint(this.pub())
            }
            )),
            Ei(Ii, "pub", (function() {
                return this._pubBytes ? this.eddsa.decodePoint(this._pubBytes) : this.eddsa.g.mul(this.priv())
            }
            )),
            Ei(Ii, "privBytes", (function() {
                var t = this.eddsa
                  , e = this.hash()
                  , r = t.encodingLength - 1
                  , n = e.slice(0, t.encodingLength);
                return n[0] &= 248,
                n[r] &= 127,
                n[r] |= 64,
                n
            }
            )),
            Ei(Ii, "priv", (function() {
                return this.eddsa.decodeInt(this.privBytes())
            }
            )),
            Ei(Ii, "hash", (function() {
                return this.eddsa.hash().update(this.secret()).digest()
            }
            )),
            Ei(Ii, "messagePrefix", (function() {
                return this.hash().slice(this.eddsa.encodingLength)
            }
            )),
            Ii.prototype.sign = function(t) {
                return wi(this._secret, "KeyPair can only verify"),
                this.eddsa.sign(t, this)
            }
            ,
            Ii.prototype.verify = function(t, e) {
                return this.eddsa.verify(t, e, this)
            }
            ,
            Ii.prototype.getSecret = function(t) {
                return wi(this._secret, "KeyPair is public only"),
                Xe.encode(this.secret(), t)
            }
            ,
            Ii.prototype.getPublic = function(t) {
                return Xe.encode(this.pubBytes(), t)
            }
            ;
            var Mi = Ii
              , Si = Xe.assert
              , ki = Xe.cachedProperty
              , Li = Xe.parseBytes;
            function xi(t, e) {
                this.eddsa = t,
                "object" != typeof e && (e = Li(e)),
                Array.isArray(e) && (e = {
                    R: e.slice(0, t.encodingLength),
                    S: e.slice(t.encodingLength)
                }),
                Si(e.R && e.S, "Signature without R or S"),
                t.isPoint(e.R) && (this._R = e.R),
                e.S instanceof Oe && (this._S = e.S),
                this._Rencoded = Array.isArray(e.R) ? e.R : e.Rencoded,
                this._Sencoded = Array.isArray(e.S) ? e.S : e.Sencoded
            }
            ki(xi, "S", (function() {
                return this.eddsa.decodeInt(this.Sencoded())
            }
            )),
            ki(xi, "R", (function() {
                return this.eddsa.decodePoint(this.Rencoded())
            }
            )),
            ki(xi, "Rencoded", (function() {
                return this.eddsa.encodePoint(this.R())
            }
            )),
            ki(xi, "Sencoded", (function() {
                return this.eddsa.encodeInt(this.S())
            }
            )),
            xi.prototype.toBytes = function() {
                return this.Rencoded().concat(this.Sencoded())
            }
            ,
            xi.prototype.toHex = function() {
                return Xe.encode(this.toBytes(), "hex").toUpperCase()
            }
            ;
            var Pi = xi
              , Ti = Xe.assert
              , Ri = Xe.parseBytes;
            function ji(t) {
                if (Ti("ed25519" === t, "only tested with ed25519 so far"),
                !(this instanceof ji))
                    return new ji(t);
                t = ai[t].curve,
                this.curve = t,
                this.g = t.g,
                this.g.precompute(t.n.bitLength() + 1),
                this.pointClass = t.point().constructor,
                this.encodingLength = Math.ceil(t.n.bitLength() / 8),
                this.hash = ni.sha512
            }
            var Oi = ji;
            ji.prototype.sign = function(t, e) {
                t = Ri(t);
                var r = this.keyFromSecret(e)
                  , n = this.hashInt(r.messagePrefix(), t)
                  , i = this.g.mul(n)
                  , a = this.encodePoint(i)
                  , f = this.hashInt(a, r.pubBytes(), t).mul(r.priv())
                  , o = n.add(f).umod(this.curve.n);
                return this.makeSignature({
                    R: i,
                    S: o,
                    Rencoded: a
                })
            }
            ,
            ji.prototype.verify = function(t, e, r) {
                t = Ri(t),
                e = this.makeSignature(e);
                var n = this.keyFromPublic(r)
                  , i = this.hashInt(e.Rencoded(), n.pubBytes(), t)
                  , a = this.g.mul(e.S());
                return e.R().add(n.pub().mul(i)).eq(a)
            }
            ,
            ji.prototype.hashInt = function() {
                for (var t = this.hash(), e = 0; e < arguments.length; e++)
                    t.update(arguments[e]);
                return Xe.intFromLE(t.digest()).umod(this.curve.n)
            }
            ,
            ji.prototype.keyFromPublic = function(t) {
                return Mi.fromPublic(this, t)
            }
            ,
            ji.prototype.keyFromSecret = function(t) {
                return Mi.fromSecret(this, t)
            }
            ,
            ji.prototype.makeSignature = function(t) {
                return t instanceof Pi ? t : new Pi(this,t)
            }
            ,
            ji.prototype.encodePoint = function(t) {
                var e = t.getY().toArray("le", this.encodingLength);
                return e[this.encodingLength - 1] |= t.getX().isOdd() ? 128 : 0,
                e
            }
            ,
            ji.prototype.decodePoint = function(t) {
                var e = (t = Xe.parseBytes(t)).length - 1
                  , r = t.slice(0, e).concat(-129 & t[e])
                  , n = 0 != (128 & t[e])
                  , i = Xe.intFromLE(r);
                return this.curve.pointFromY(i, n)
            }
            ,
            ji.prototype.encodeInt = function(t) {
                return t.toArray("le", this.encodingLength)
            }
            ,
            ji.prototype.decodeInt = function(t) {
                return Xe.intFromLE(t)
            }
            ,
            ji.prototype.isPoint = function(t) {
                return t instanceof this.pointClass
            }
            ;
            var Ci, Bi = Object(p.k)(He), Ni = Object(p.g)((function(t, e) {
                var r = e;
                r.version = Bi.version,
                r.utils = Xe,
                r.rand = $e,
                r.curve = gr,
                r.curves = ai,
                r.ec = gi,
                r.eddsa = Oi
            }
            )), zi = Object(p.g)((function(t, e) {
                var r = L.Buffer
                  , n = new (0,
                Ni.ec)("secp256k1")
                  , i = n.curve;
                function a(t) {
                    var e = t[0];
                    switch (e) {
                    case 2:
                    case 3:
                        return 33 !== t.length ? null : function(t, e) {
                            var r = new Oe(e);
                            if (r.cmp(i.p) >= 0)
                                return null;
                            var a = (r = r.toRed(i.red)).redSqr().redIMul(r).redIAdd(i.b).redSqrt();
                            return 3 === t !== a.isOdd() && (a = a.redNeg()),
                            n.keyPair({
                                pub: {
                                    x: r,
                                    y: a
                                }
                            })
                        }(e, t.slice(1, 33));
                    case 4:
                    case 6:
                    case 7:
                        return 65 !== t.length ? null : function(t, e, r) {
                            var a = new Oe(e)
                              , f = new Oe(r);
                            if (a.cmp(i.p) >= 0 || f.cmp(i.p) >= 0)
                                return null;
                            if (a = a.toRed(i.red),
                            f = f.toRed(i.red),
                            (6 === t || 7 === t) && f.isOdd() !== (7 === t))
                                return null;
                            var o = a.redSqr().redIMul(a);
                            return f.redSqr().redISub(o.redIAdd(i.b)).isZero() ? n.keyPair({
                                pub: {
                                    x: a,
                                    y: f
                                }
                            }) : null
                        }(e, t.slice(1, 33), t.slice(33, 65));
                    default:
                        return null
                    }
                }
                e.privateKeyVerify = function(t) {
                    var e = new Oe(t);
                    return e.cmp(i.n) < 0 && !e.isZero()
                }
                ,
                e.privateKeyExport = function(t, e) {
                    var a = new Oe(t);
                    if (a.cmp(i.n) >= 0 || a.isZero())
                        throw new Error(Q.EC_PRIVATE_KEY_EXPORT_DER_FAIL);
                    return r.from(n.keyFromPrivate(t).getPublic(e, !0))
                }
                ,
                e.privateKeyNegate = function(t) {
                    var e = new Oe(t);
                    return e.isZero() ? r.alloc(32) : i.n.sub(e).umod(i.n).toArrayLike(r, "be", 32)
                }
                ,
                e.privateKeyModInverse = function(t) {
                    var e = new Oe(t);
                    if (e.cmp(i.n) >= 0 || e.isZero())
                        throw new Error(Q.EC_PRIVATE_KEY_RANGE_INVALID);
                    return e.invm(i.n).toArrayLike(r, "be", 32)
                }
                ,
                e.privateKeyTweakAdd = function(t, e) {
                    var n = new Oe(e);
                    if (n.cmp(i.n) >= 0)
                        throw new Error(Q.EC_PRIVATE_KEY_TWEAK_ADD_FAIL);
                    if (n.iadd(new Oe(t)),
                    n.cmp(i.n) >= 0 && n.isub(i.n),
                    n.isZero())
                        throw new Error(Q.EC_PRIVATE_KEY_TWEAK_ADD_FAIL);
                    return n.toArrayLike(r, "be", 32)
                }
                ,
                e.privateKeyTweakMul = function(t, e) {
                    var n = new Oe(e);
                    if (n.cmp(i.n) >= 0 || n.isZero())
                        throw new Error(Q.EC_PRIVATE_KEY_TWEAK_MUL_FAIL);
                    return n.imul(new Oe(t)),
                    n.cmp(i.n) && (n = n.umod(i.n)),
                    n.toArrayLike(r, "be", 32)
                }
                ,
                e.publicKeyCreate = function(t, e) {
                    var a = new Oe(t);
                    if (a.cmp(i.n) >= 0 || a.isZero())
                        throw new Error(Q.EC_PUBLIC_KEY_CREATE_FAIL);
                    return r.from(n.keyFromPrivate(t).getPublic(e, !0))
                }
                ,
                e.publicKeyConvert = function(t, e) {
                    var n = a(t);
                    if (null === n)
                        throw new Error(Q.EC_PUBLIC_KEY_PARSE_FAIL);
                    return r.from(n.getPublic(e, !0))
                }
                ,
                e.publicKeyVerify = function(t) {
                    return null !== a(t)
                }
                ,
                e.publicKeyTweakAdd = function(t, e, n) {
                    var f = a(t);
                    if (null === f)
                        throw new Error(Q.EC_PUBLIC_KEY_PARSE_FAIL);
                    if ((e = new Oe(e)).cmp(i.n) >= 0)
                        throw new Error(Q.EC_PUBLIC_KEY_TWEAK_ADD_FAIL);
                    var o = i.g.mul(e).add(f.pub);
                    if (o.isInfinity())
                        throw new Error(Q.EC_PUBLIC_KEY_TWEAK_ADD_FAIL);
                    return r.from(o.encode(!0, n))
                }
                ,
                e.publicKeyTweakMul = function(t, e, n) {
                    var f = a(t);
                    if (null === f)
                        throw new Error(Q.EC_PUBLIC_KEY_PARSE_FAIL);
                    if ((e = new Oe(e)).cmp(i.n) >= 0 || e.isZero())
                        throw new Error(Q.EC_PUBLIC_KEY_TWEAK_MUL_FAIL);
                    return r.from(f.pub.mul(e).encode(!0, n))
                }
                ,
                e.publicKeyCombine = function(t, e) {
                    for (var n = new Array(t.length), i = 0; i < t.length; ++i)
                        if (n[i] = a(t[i]),
                        null === n[i])
                            throw new Error(Q.EC_PUBLIC_KEY_PARSE_FAIL);
                    for (var f = n[0].pub, o = 1; o < n.length; ++o)
                        f = f.add(n[o].pub);
                    if (f.isInfinity())
                        throw new Error(Q.EC_PUBLIC_KEY_COMBINE_FAIL);
                    return r.from(f.encode(!0, e))
                }
                ,
                e.signatureNormalize = function(t) {
                    var e = new Oe(t.slice(0, 32))
                      , a = new Oe(t.slice(32, 64));
                    if (e.cmp(i.n) >= 0 || a.cmp(i.n) >= 0)
                        throw new Error(Q.ECDSA_SIGNATURE_PARSE_FAIL);
                    var f = r.from(t);
                    return 1 === a.cmp(n.nh) && i.n.sub(a).toArrayLike(r, "be", 32).copy(f, 32),
                    f
                }
                ,
                e.signatureExport = function(t) {
                    var e = t.slice(0, 32)
                      , r = t.slice(32, 64);
                    if (new Oe(e).cmp(i.n) >= 0 || new Oe(r).cmp(i.n) >= 0)
                        throw new Error(Q.ECDSA_SIGNATURE_PARSE_FAIL);
                    return {
                        r: e,
                        s: r
                    }
                }
                ,
                e.signatureImport = function(t) {
                    var e = new Oe(t.r);
                    e.cmp(i.n) >= 0 && (e = new Oe(0));
                    var n = new Oe(t.s);
                    return n.cmp(i.n) >= 0 && (n = new Oe(0)),
                    r.concat([e.toArrayLike(r, "be", 32), n.toArrayLike(r, "be", 32)])
                }
                ,
                e.sign = function(t, e, a, f) {
                    if ("function" == typeof a) {
                        var o = a;
                        a = function(n) {
                            var i = o(t, e, null, f, n);
                            if (!r.isBuffer(i) || 32 !== i.length)
                                throw new Error(Q.ECDSA_SIGN_FAIL);
                            return new Oe(i)
                        }
                    }
                    var s = new Oe(e);
                    if (s.cmp(i.n) >= 0 || s.isZero())
                        throw new Error(Q.ECDSA_SIGN_FAIL);
                    var c = n.sign(t, e, {
                        canonical: !0,
                        k: a,
                        pers: f
                    });
                    return {
                        signature: r.concat([c.r.toArrayLike(r, "be", 32), c.s.toArrayLike(r, "be", 32)]),
                        recovery: c.recoveryParam
                    }
                }
                ,
                e.verify = function(t, e, r) {
                    var f = {
                        r: e.slice(0, 32),
                        s: e.slice(32, 64)
                    }
                      , o = new Oe(f.r)
                      , s = new Oe(f.s);
                    if (o.cmp(i.n) >= 0 || s.cmp(i.n) >= 0)
                        throw new Error(Q.ECDSA_SIGNATURE_PARSE_FAIL);
                    if (1 === s.cmp(n.nh) || o.isZero() || s.isZero())
                        return !1;
                    var c = a(r);
                    if (null === c)
                        throw new Error(Q.EC_PUBLIC_KEY_PARSE_FAIL);
                    return n.verify(t, f, {
                        x: c.pub.x,
                        y: c.pub.y
                    })
                }
                ,
                e.recover = function(t, e, a, f) {
                    var o = {
                        r: e.slice(0, 32),
                        s: e.slice(32, 64)
                    }
                      , s = new Oe(o.r)
                      , c = new Oe(o.s);
                    if (s.cmp(i.n) >= 0 || c.cmp(i.n) >= 0)
                        throw new Error(Q.ECDSA_SIGNATURE_PARSE_FAIL);
                    try {
                        if (s.isZero() || c.isZero())
                            throw new Error;
                        var u = n.recoverPubKey(t, o, a);
                        return r.from(u.encode(!0, f))
                    } catch (t) {
                        throw new Error(Q.ECDSA_RECOVER_FAIL)
                    }
                }
                ,
                e.ecdh = function(t, r) {
                    var n = e.ecdhUnsafe(t, r, !0);
                    return je("sha256").update(n).digest()
                }
                ,
                e.ecdhUnsafe = function(t, e, n) {
                    var f = a(t);
                    if (null === f)
                        throw new Error(Q.EC_PUBLIC_KEY_PARSE_FAIL);
                    var o = new Oe(e);
                    if (o.cmp(i.n) >= 0 || o.isZero())
                        throw new Error(Q.ECDH_FAIL);
                    return r.from(f.pub.mul(o).encode(!0, n))
                }
            }
            )), Di = (zi.privateKeyVerify,
            zi.privateKeyExport,
            zi.privateKeyNegate,
            zi.privateKeyModInverse,
            zi.privateKeyTweakAdd,
            zi.privateKeyTweakMul,
            zi.publicKeyCreate,
            zi.publicKeyConvert,
            zi.publicKeyVerify,
            zi.publicKeyTweakAdd,
            zi.publicKeyTweakMul,
            zi.publicKeyCombine,
            zi.signatureNormalize,
            zi.signatureExport,
            zi.signatureImport,
            zi.sign,
            zi.verify,
            zi.recover,
            zi.ecdh,
            zi.ecdhUnsafe,
            Ci = zi,
            {
                privateKeyVerify: function(t) {
                    return K(t, Q.EC_PRIVATE_KEY_TYPE_INVALID),
                    32 === t.length && Ci.privateKeyVerify(t)
                },
                privateKeyExport: function(t, e) {
                    return K(t, Q.EC_PRIVATE_KEY_TYPE_INVALID),
                    V(t, 32, Q.EC_PRIVATE_KEY_LENGTH_INVALID),
                    e = tt(e, !0),
                    function(t, e, r) {
                        var n = G.from(r ? W : Z);
                        return t.copy(n, r ? 8 : 9),
                        e.copy(n, r ? 181 : 214),
                        n
                    }(t, Ci.privateKeyExport(t, e), e)
                },
                privateKeyImport: function(t) {
                    if (K(t, Q.EC_PRIVATE_KEY_TYPE_INVALID),
                    (t = function(t) {
                        var e = t.length
                          , r = 0;
                        if (!(e < r + 1 || 48 !== t[r]) && !(e < (r += 1) + 1) && 128 & t[r]) {
                            var n = 127 & t[r];
                            if (r += 1,
                            !(n < 1 || n > 2 || e < r + n)) {
                                var i = t[r + n - 1] | (n > 1 ? t[r + n - 2] << 8 : 0);
                                if (!(e < (r += n) + i || e < r + 3 || 2 !== t[r] || 1 !== t[r + 1] || 1 !== t[r + 2] || e < (r += 3) + 2 || 4 !== t[r] || t[r + 1] > 32 || e < r + 2 + t[r + 1]))
                                    return t.slice(r + 2, r + 2 + t[r + 1])
                            }
                        }
                    }(t)) && 32 === t.length && Ci.privateKeyVerify(t))
                        return t;
                    throw new Error(Q.EC_PRIVATE_KEY_IMPORT_DER_FAIL)
                },
                privateKeyNegate: function(t) {
                    return K(t, Q.EC_PRIVATE_KEY_TYPE_INVALID),
                    V(t, 32, Q.EC_PRIVATE_KEY_LENGTH_INVALID),
                    Ci.privateKeyNegate(t)
                },
                privateKeyModInverse: function(t) {
                    return K(t, Q.EC_PRIVATE_KEY_TYPE_INVALID),
                    V(t, 32, Q.EC_PRIVATE_KEY_LENGTH_INVALID),
                    Ci.privateKeyModInverse(t)
                },
                privateKeyTweakAdd: function(t, e) {
                    return K(t, Q.EC_PRIVATE_KEY_TYPE_INVALID),
                    V(t, 32, Q.EC_PRIVATE_KEY_LENGTH_INVALID),
                    K(e, Q.TWEAK_TYPE_INVALID),
                    V(e, 32, Q.TWEAK_LENGTH_INVALID),
                    Ci.privateKeyTweakAdd(t, e)
                },
                privateKeyTweakMul: function(t, e) {
                    return K(t, Q.EC_PRIVATE_KEY_TYPE_INVALID),
                    V(t, 32, Q.EC_PRIVATE_KEY_LENGTH_INVALID),
                    K(e, Q.TWEAK_TYPE_INVALID),
                    V(e, 32, Q.TWEAK_LENGTH_INVALID),
                    Ci.privateKeyTweakMul(t, e)
                },
                publicKeyCreate: function(t, e) {
                    return K(t, Q.EC_PRIVATE_KEY_TYPE_INVALID),
                    V(t, 32, Q.EC_PRIVATE_KEY_LENGTH_INVALID),
                    e = tt(e, !0),
                    Ci.publicKeyCreate(t, e)
                },
                publicKeyConvert: function(t, e) {
                    return K(t, Q.EC_PUBLIC_KEY_TYPE_INVALID),
                    U(t, 33, 65, Q.EC_PUBLIC_KEY_LENGTH_INVALID),
                    e = tt(e, !0),
                    Ci.publicKeyConvert(t, e)
                },
                publicKeyVerify: function(t) {
                    return K(t, Q.EC_PUBLIC_KEY_TYPE_INVALID),
                    Ci.publicKeyVerify(t)
                },
                publicKeyTweakAdd: function(t, e, r) {
                    return K(t, Q.EC_PUBLIC_KEY_TYPE_INVALID),
                    U(t, 33, 65, Q.EC_PUBLIC_KEY_LENGTH_INVALID),
                    K(e, Q.TWEAK_TYPE_INVALID),
                    V(e, 32, Q.TWEAK_LENGTH_INVALID),
                    r = tt(r, !0),
                    Ci.publicKeyTweakAdd(t, e, r)
                },
                publicKeyTweakMul: function(t, e, r) {
                    return K(t, Q.EC_PUBLIC_KEY_TYPE_INVALID),
                    U(t, 33, 65, Q.EC_PUBLIC_KEY_LENGTH_INVALID),
                    K(e, Q.TWEAK_TYPE_INVALID),
                    V(e, 32, Q.TWEAK_LENGTH_INVALID),
                    r = tt(r, !0),
                    Ci.publicKeyTweakMul(t, e, r)
                },
                publicKeyCombine: function(t, e) {
                    (function(t, e) {
                        if (!Array.isArray(t))
                            throw TypeError(e)
                    }
                    )(t, Q.EC_PUBLIC_KEYS_TYPE_INVALID),
                    q(t, Q.EC_PUBLIC_KEYS_LENGTH_INVALID);
                    for (var r = 0; r < t.length; ++r)
                        K(t[r], Q.EC_PUBLIC_KEY_TYPE_INVALID),
                        U(t[r], 33, 65, Q.EC_PUBLIC_KEY_LENGTH_INVALID);
                    return e = tt(e, !0),
                    Ci.publicKeyCombine(t, e)
                },
                signatureNormalize: function(t) {
                    return K(t, Q.ECDSA_SIGNATURE_TYPE_INVALID),
                    V(t, 64, Q.ECDSA_SIGNATURE_LENGTH_INVALID),
                    Ci.signatureNormalize(t)
                },
                signatureExport: function(t) {
                    return K(t, Q.ECDSA_SIGNATURE_TYPE_INVALID),
                    V(t, 64, Q.ECDSA_SIGNATURE_LENGTH_INVALID),
                    function(t) {
                        for (var e = G.concat([G.from([0]), t.r]), r = 33, n = 0; r > 1 && 0 === e[n] && !(128 & e[n + 1]); --r,
                        ++n)
                            ;
                        for (var i = G.concat([G.from([0]), t.s]), a = 33, f = 0; a > 1 && 0 === i[f] && !(128 & i[f + 1]); --a,
                        ++f)
                            ;
                        return H(e.slice(n), i.slice(f))
                    }(Ci.signatureExport(t))
                },
                signatureImport: function(t) {
                    K(t, Q.ECDSA_SIGNATURE_TYPE_INVALID),
                    q(t, Q.ECDSA_SIGNATURE_LENGTH_INVALID);
                    var e = function(t) {
                        var e = G.alloc(32, 0)
                          , r = G.alloc(32, 0);
                        try {
                            var n = F(t);
                            if (33 === n.r.length && 0 === n.r[0] && (n.r = n.r.slice(1)),
                            n.r.length > 32)
                                throw new Error("R length is too long");
                            if (33 === n.s.length && 0 === n.s[0] && (n.s = n.s.slice(1)),
                            n.s.length > 32)
                                throw new Error("S length is too long")
                        } catch (t) {
                            return
                        }
                        return n.r.copy(e, 32 - n.r.length),
                        n.s.copy(r, 32 - n.s.length),
                        {
                            r: e,
                            s: r
                        }
                    }(t);
                    if (e)
                        return Ci.signatureImport(e);
                    throw new Error(Q.ECDSA_SIGNATURE_PARSE_DER_FAIL)
                },
                signatureImportLax: function(t) {
                    K(t, Q.ECDSA_SIGNATURE_TYPE_INVALID),
                    q(t, Q.ECDSA_SIGNATURE_LENGTH_INVALID);
                    var e = function(t) {
                        var e = G.alloc(32, 0)
                          , r = G.alloc(32, 0)
                          , n = t.length
                          , i = 0;
                        if (48 === t[i++]) {
                            var a = t[i++];
                            if (!(128 & a && (i += a - 128) > n) && 2 === t[i++]) {
                                var f = t[i++];
                                if (128 & f) {
                                    if (i + (a = f - 128) > n)
                                        return;
                                    for (; a > 0 && 0 === t[i]; i += 1,
                                    a -= 1)
                                        ;
                                    for (f = 0; a > 0; i += 1,
                                    a -= 1)
                                        f = (f << 8) + t[i]
                                }
                                if (!(f > n - i)) {
                                    var o = i;
                                    if (i += f,
                                    2 === t[i++]) {
                                        var s = t[i++];
                                        if (128 & s) {
                                            if (i + (a = s - 128) > n)
                                                return;
                                            for (; a > 0 && 0 === t[i]; i += 1,
                                            a -= 1)
                                                ;
                                            for (s = 0; a > 0; i += 1,
                                            a -= 1)
                                                s = (s << 8) + t[i]
                                        }
                                        if (!(s > n - i)) {
                                            var c = i;
                                            for (i += s; f > 0 && 0 === t[o]; f -= 1,
                                            o += 1)
                                                ;
                                            if (!(f > 32)) {
                                                var u = t.slice(o, o + f);
                                                for (u.copy(e, 32 - u.length); s > 0 && 0 === t[c]; s -= 1,
                                                c += 1)
                                                    ;
                                                if (!(s > 32)) {
                                                    var d = t.slice(c, c + s);
                                                    return d.copy(r, 32 - d.length),
                                                    {
                                                        r: e,
                                                        s: r
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }(t);
                    if (e)
                        return Ci.signatureImport(e);
                    throw new Error(Q.ECDSA_SIGNATURE_PARSE_DER_FAIL)
                },
                sign: function(t, e, r) {
                    K(t, Q.MSG32_TYPE_INVALID),
                    V(t, 32, Q.MSG32_LENGTH_INVALID),
                    K(e, Q.EC_PRIVATE_KEY_TYPE_INVALID),
                    V(e, 32, Q.EC_PRIVATE_KEY_LENGTH_INVALID);
                    var n = null
                      , i = null;
                    return void 0 !== r && (function(t, e) {
                        if ("[object Object]" !== D.call(t))
                            throw TypeError(e)
                    }(r, Q.OPTIONS_TYPE_INVALID),
                    void 0 !== r.data && (K(r.data, Q.OPTIONS_DATA_TYPE_INVALID),
                    V(r.data, 32, Q.OPTIONS_DATA_LENGTH_INVALID),
                    n = r.data),
                    void 0 !== r.noncefn && (function(t, e) {
                        if ("[object Function]" !== D.call(t))
                            throw TypeError(e)
                    }(r.noncefn, Q.OPTIONS_NONCEFN_TYPE_INVALID),
                    i = r.noncefn)),
                    Ci.sign(t, e, i, n)
                },
                verify: function(t, e, r) {
                    return K(t, Q.MSG32_TYPE_INVALID),
                    V(t, 32, Q.MSG32_LENGTH_INVALID),
                    K(e, Q.ECDSA_SIGNATURE_TYPE_INVALID),
                    V(e, 64, Q.ECDSA_SIGNATURE_LENGTH_INVALID),
                    K(r, Q.EC_PUBLIC_KEY_TYPE_INVALID),
                    U(r, 33, 65, Q.EC_PUBLIC_KEY_LENGTH_INVALID),
                    Ci.verify(t, e, r)
                },
                recover: function(t, e, r, n) {
                    return K(t, Q.MSG32_TYPE_INVALID),
                    V(t, 32, Q.MSG32_LENGTH_INVALID),
                    K(e, Q.ECDSA_SIGNATURE_TYPE_INVALID),
                    V(e, 64, Q.ECDSA_SIGNATURE_LENGTH_INVALID),
                    function(t, e) {
                        if ("[object Number]" !== D.call(t))
                            throw TypeError(e)
                    }(r, Q.RECOVERY_ID_TYPE_INVALID),
                    function(t, e, r, n) {
                        if (t <= e || t >= r)
                            throw RangeError(n)
                    }(r, -1, 4, Q.RECOVERY_ID_VALUE_INVALID),
                    n = tt(n, !0),
                    Ci.recover(t, e, r, n)
                },
                ecdh: function(t, e) {
                    return K(t, Q.EC_PUBLIC_KEY_TYPE_INVALID),
                    U(t, 33, 65, Q.EC_PUBLIC_KEY_LENGTH_INVALID),
                    K(e, Q.EC_PRIVATE_KEY_TYPE_INVALID),
                    V(e, 32, Q.EC_PRIVATE_KEY_LENGTH_INVALID),
                    Ci.ecdh(t, e)
                },
                ecdhUnsafe: function(t, e, r) {
                    return K(t, Q.EC_PUBLIC_KEY_TYPE_INVALID),
                    U(t, 33, 65, Q.EC_PUBLIC_KEY_LENGTH_INVALID),
                    K(e, Q.EC_PRIVATE_KEY_TYPE_INVALID),
                    V(e, 32, Q.EC_PRIVATE_KEY_LENGTH_INVALID),
                    r = tt(r, !0),
                    Ci.ecdhUnsafe(t, e, r)
                }
            }), Ki = Object(p.g)((function(e, r) {
                function n(t, e) {
                    if ("00" === t.slice(0, 2))
                        throw new Error("invalid RLP: extra zeros");
                    return parseInt(t, e)
                }
                function i(e, r) {
                    if (e < 56)
                        return t.from([e + r]);
                    var n = f(e)
                      , i = f(r + 55 + n.length / 2);
                    return t.from(i + n, "hex")
                }
                function a(t) {
                    return "0x" === t.slice(0, 2)
                }
                function f(t) {
                    if (t < 0)
                        throw new Error("Invalid integer as argument, must be unsigned!");
                    var e = t.toString(16);
                    return e.length % 2 ? "0" + e : e
                }
                function o(e) {
                    if (!t.isBuffer(e)) {
                        if ("string" == typeof e)
                            return a(e) ? t.from((n = "string" != typeof (i = e) ? i : a(i) ? i.slice(2) : i).length % 2 ? "0" + n : n, "hex") : t.from(e);
                        if ("number" == typeof e)
                            return e ? (r = f(e),
                            t.from(r, "hex")) : t.from([]);
                        if (null == e)
                            return t.from([]);
                        if (e instanceof Uint8Array)
                            return t.from(e);
                        if (Oe.isBN(e))
                            return t.from(e.toArray());
                        throw new Error("invalid type")
                    }
                    var r, n, i;
                    return e
                }
                Object.defineProperty(r, "__esModule", {
                    value: !0
                }),
                r.encode = function e(r) {
                    if (Array.isArray(r)) {
                        for (var n = [], a = 0; a < r.length; a++)
                            n.push(e(r[a]));
                        var f = t.concat(n);
                        return t.concat([i(f.length, 192), f])
                    }
                    var s = o(r);
                    return 1 === s.length && s[0] < 128 ? s : t.concat([i(s.length, 128), s])
                }
                ,
                r.decode = function(e, r) {
                    if (void 0 === r && (r = !1),
                    !e || 0 === e.length)
                        return t.from([]);
                    var i = function e(r) {
                        var i, a, f, o, s, c = [], u = r[0];
                        if (u <= 127)
                            return {
                                data: r.slice(0, 1),
                                remainder: r.slice(1)
                            };
                        if (u <= 183) {
                            if (i = u - 127,
                            f = 128 === u ? t.from([]) : r.slice(1, i),
                            2 === i && f[0] < 128)
                                throw new Error("invalid rlp encoding: byte must be less 0x80");
                            return {
                                data: f,
                                remainder: r.slice(i)
                            }
                        }
                        if (u <= 191) {
                            if (a = u - 182,
                            i = n(r.slice(1, a).toString("hex"), 16),
                            (f = r.slice(a, i + a)).length < i)
                                throw new Error("invalid RLP");
                            return {
                                data: f,
                                remainder: r.slice(i + a)
                            }
                        }
                        if (u <= 247) {
                            for (i = u - 191,
                            o = r.slice(1, i); o.length; )
                                s = e(o),
                                c.push(s.data),
                                o = s.remainder;
                            return {
                                data: c,
                                remainder: r.slice(i)
                            }
                        }
                        var d = (a = u - 246) + (i = n(r.slice(1, a).toString("hex"), 16));
                        if (d > r.length)
                            throw new Error("invalid rlp: total length is larger than the data");
                        if (0 === (o = r.slice(a, d)).length)
                            throw new Error("invalid rlp, List has a invalid length");
                        for (; o.length; )
                            s = e(o),
                            c.push(s.data),
                            o = s.remainder;
                        return {
                            data: c,
                            remainder: r.slice(d)
                        }
                    }(o(e));
                    if (r)
                        return i;
                    if (0 !== i.remainder.length)
                        throw new Error("invalid remainder");
                    return i.data
                }
                ,
                r.getLength = function(e) {
                    if (!e || 0 === e.length)
                        return t.from([]);
                    var r = o(e)
                      , i = r[0];
                    if (i <= 127)
                        return r.length;
                    if (i <= 183)
                        return i - 127;
                    if (i <= 191)
                        return i - 182;
                    if (i <= 247)
                        return i - 191;
                    var a = i - 246;
                    return a + n(r.slice(1, a).toString("hex"), 16)
                }
            }
            ));
            Object(p.h)(Ki),
            Ki.encode,
            Ki.decode,
            Ki.getLength;
            var Vi = function(t) {
                if ("string" != typeof t)
                    throw new Error("[is-hex-prefixed] value must be type 'string', is currently type " + typeof t + ", while checking isHexPrefixed.");
                return "0x" === t.slice(0, 2)
            }
              , Ui = function(t) {
                return "string" != typeof t ? t : Vi(t) ? t.slice(2) : t
            };
            function qi(t) {
                var e = t;
                if ("string" != typeof e)
                    throw new Error("[ethjs-util] while padding to even, value must be string, is currently " + typeof e + ", while padToEven.");
                return e.length % 2 && (e = "0" + e),
                e
            }
            function Yi(t) {
                return "0x" + t.toString(16)
            }
            var Fi = {
                arrayContainsArray: function(t, e, r) {
                    if (!0 !== Array.isArray(t))
                        throw new Error("[ethjs-util] method arrayContainsArray requires input 'superset' to be an array got type '" + typeof t + "'");
                    if (!0 !== Array.isArray(e))
                        throw new Error("[ethjs-util] method arrayContainsArray requires input 'subset' to be an array got type '" + typeof e + "'");
                    return e[Boolean(r) ? "some" : "every"]((function(e) {
                        return t.indexOf(e) >= 0
                    }
                    ))
                },
                intToBuffer: function(e) {
                    var r = Yi(e);
                    return new t(qi(r.slice(2)),"hex")
                },
                getBinarySize: function(e) {
                    if ("string" != typeof e)
                        throw new Error("[ethjs-util] while getting binary size, method getBinarySize requires input 'str' to be type String, got '" + typeof e + "'.");
                    return t.byteLength(e, "utf8")
                },
                isHexPrefixed: Vi,
                stripHexPrefix: Ui,
                padToEven: qi,
                intToHex: Yi,
                fromAscii: function(t) {
                    for (var e = "", r = 0; r < t.length; r++) {
                        var n = t.charCodeAt(r).toString(16);
                        e += n.length < 2 ? "0" + n : n
                    }
                    return "0x" + e
                },
                fromUtf8: function(e) {
                    return "0x" + qi(new t(e,"utf8").toString("hex")).replace(/^0+|0+$/g, "")
                },
                toAscii: function(t) {
                    var e = ""
                      , r = 0
                      , n = t.length;
                    for ("0x" === t.substring(0, 2) && (r = 2); r < n; r += 2) {
                        var i = parseInt(t.substr(r, 2), 16);
                        e += String.fromCharCode(i)
                    }
                    return e
                },
                toUtf8: function(e) {
                    return new t(qi(Ui(e).replace(/^0+|0+$/g, "")),"hex").toString("utf8")
                },
                getKeys: function(t, e, r) {
                    if (!Array.isArray(t))
                        throw new Error("[ethjs-util] method getKeys expecting type Array as 'params' input, got '" + typeof t + "'");
                    if ("string" != typeof e)
                        throw new Error("[ethjs-util] method getKeys expecting type String for input 'key' got '" + typeof e + "'.");
                    for (var n = [], i = 0; i < t.length; i++) {
                        var a = t[i][e];
                        if (r && !a)
                            a = "";
                        else if ("string" != typeof a)
                            throw new Error("invalid abi");
                        n.push(a)
                    }
                    return n
                },
                isHexString: function(t, e) {
                    return !("string" != typeof t || !t.match(/^0x[0-9A-Fa-f]*$/)) && (!e || t.length === 2 + 2 * e)
                }
            }
              , Hi = Object(p.g)((function(t, e) {
                var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                  , n = L.Buffer;
                Object.assign(e, Fi),
                e.MAX_INTEGER = new Oe("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",16),
                e.TWO_POW256 = new Oe("10000000000000000000000000000000000000000000000000000000000000000",16),
                e.KECCAK256_NULL_S = "c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                e.SHA3_NULL_S = e.KECCAK256_NULL_S,
                e.KECCAK256_NULL = n.from(e.KECCAK256_NULL_S, "hex"),
                e.SHA3_NULL = e.KECCAK256_NULL,
                e.KECCAK256_RLP_ARRAY_S = "1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
                e.SHA3_RLP_ARRAY_S = e.KECCAK256_RLP_ARRAY_S,
                e.KECCAK256_RLP_ARRAY = n.from(e.KECCAK256_RLP_ARRAY_S, "hex"),
                e.SHA3_RLP_ARRAY = e.KECCAK256_RLP_ARRAY,
                e.KECCAK256_RLP_S = "56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
                e.SHA3_RLP_S = e.KECCAK256_RLP_S,
                e.KECCAK256_RLP = n.from(e.KECCAK256_RLP_S, "hex"),
                e.SHA3_RLP = e.KECCAK256_RLP,
                e.BN = Oe,
                e.rlp = Ki,
                e.secp256k1 = Di,
                e.zeros = function(t) {
                    return n.allocUnsafe(t).fill(0)
                }
                ,
                e.zeroAddress = function() {
                    var t = e.zeros(20);
                    return e.bufferToHex(t)
                }
                ,
                e.setLengthLeft = e.setLength = function(t, r, n) {
                    var i = e.zeros(r);
                    return t = e.toBuffer(t),
                    n ? t.length < r ? (t.copy(i),
                    i) : t.slice(0, r) : t.length < r ? (t.copy(i, r - t.length),
                    i) : t.slice(-r)
                }
                ,
                e.setLengthRight = function(t, r) {
                    return e.setLength(t, r, !0)
                }
                ,
                e.unpad = e.stripZeros = function(t) {
                    for (var r = (t = e.stripHexPrefix(t))[0]; t.length > 0 && "0" === r.toString(); )
                        r = (t = t.slice(1))[0];
                    return t
                }
                ,
                e.toBuffer = function(t) {
                    if (!n.isBuffer(t))
                        if (Array.isArray(t))
                            t = n.from(t);
                        else if ("string" == typeof t)
                            t = e.isHexString(t) ? n.from(e.padToEven(e.stripHexPrefix(t)), "hex") : n.from(t);
                        else if ("number" == typeof t)
                            t = e.intToBuffer(t);
                        else if (null == t)
                            t = n.allocUnsafe(0);
                        else if (Oe.isBN(t))
                            t = t.toArrayLike(n);
                        else {
                            if (!t.toArray)
                                throw new Error("invalid type");
                            t = n.from(t.toArray())
                        }
                    return t
                }
                ,
                e.bufferToInt = function(t) {
                    return new Oe(e.toBuffer(t)).toNumber()
                }
                ,
                e.bufferToHex = function(t) {
                    return "0x" + (t = e.toBuffer(t)).toString("hex")
                }
                ,
                e.fromSigned = function(t) {
                    return new Oe(t).fromTwos(256)
                }
                ,
                e.toUnsigned = function(t) {
                    return n.from(t.toTwos(256).toArray())
                }
                ,
                e.keccak = function(t, r) {
                    return t = e.toBuffer(t),
                    r || (r = 256),
                    z("keccak" + r).update(t).digest()
                }
                ,
                e.keccak256 = function(t) {
                    return e.keccak(t)
                }
                ,
                e.sha3 = e.keccak,
                e.sha256 = function(t) {
                    return t = e.toBuffer(t),
                    je("sha256").update(t).digest()
                }
                ,
                e.ripemd160 = function(t, r) {
                    t = e.toBuffer(t);
                    var n = je("rmd160").update(t).digest();
                    return !0 === r ? e.setLength(n, 32) : n
                }
                ,
                e.rlphash = function(t) {
                    return e.keccak(Ki.encode(t))
                }
                ,
                e.isValidPrivate = function(t) {
                    return Di.privateKeyVerify(t)
                }
                ,
                e.isValidPublic = function(t, e) {
                    return 64 === t.length ? Di.publicKeyVerify(n.concat([n.from([4]), t])) : !!e && Di.publicKeyVerify(t)
                }
                ,
                e.pubToAddress = e.publicToAddress = function(t, r) {
                    return t = e.toBuffer(t),
                    r && 64 !== t.length && (t = Di.publicKeyConvert(t, !1).slice(1)),
                    M()(64 === t.length),
                    e.keccak(t).slice(-20)
                }
                ;
                var i = e.privateToPublic = function(t) {
                    return t = e.toBuffer(t),
                    Di.publicKeyCreate(t, !1).slice(1)
                }
                ;
                e.importPublic = function(t) {
                    return 64 !== (t = e.toBuffer(t)).length && (t = Di.publicKeyConvert(t, !1).slice(1)),
                    t
                }
                ,
                e.ecsign = function(t, e) {
                    var r = Di.sign(t, e)
                      , n = {};
                    return n.r = r.signature.slice(0, 32),
                    n.s = r.signature.slice(32, 64),
                    n.v = r.recovery + 27,
                    n
                }
                ,
                e.hashPersonalMessage = function(t) {
                    var r = e.toBuffer("\x19Ethereum Signed Message:\n" + t.length.toString());
                    return e.keccak(n.concat([r, t]))
                }
                ,
                e.ecrecover = function(t, r, i, a) {
                    var f = n.concat([e.setLength(i, 32), e.setLength(a, 32)], 64)
                      , o = r - 27;
                    if (0 !== o && 1 !== o)
                        throw new Error("Invalid signature v value");
                    var s = Di.recover(t, f, o);
                    return Di.publicKeyConvert(s, !1).slice(1)
                }
                ,
                e.toRpcSig = function(t, r, i) {
                    if (27 !== t && 28 !== t)
                        throw new Error("Invalid recovery id");
                    return e.bufferToHex(n.concat([e.setLengthLeft(r, 32), e.setLengthLeft(i, 32), e.toBuffer(t - 27)]))
                }
                ,
                e.fromRpcSig = function(t) {
                    if (65 !== (t = e.toBuffer(t)).length)
                        throw new Error("Invalid signature length");
                    var r = t[64];
                    return r < 27 && (r += 27),
                    {
                        v: r,
                        r: t.slice(0, 32),
                        s: t.slice(32, 64)
                    }
                }
                ,
                e.privateToAddress = function(t) {
                    return e.publicToAddress(i(t))
                }
                ,
                e.isValidAddress = function(t) {
                    return /^0x[0-9a-fA-F]{40}$/.test(t)
                }
                ,
                e.isZeroAddress = function(t) {
                    return e.zeroAddress() === e.addHexPrefix(t)
                }
                ,
                e.toChecksumAddress = function(t) {
                    t = e.stripHexPrefix(t).toLowerCase();
                    for (var r = e.keccak(t).toString("hex"), n = "0x", i = 0; i < t.length; i++)
                        parseInt(r[i], 16) >= 8 ? n += t[i].toUpperCase() : n += t[i];
                    return n
                }
                ,
                e.isValidChecksumAddress = function(t) {
                    return e.isValidAddress(t) && e.toChecksumAddress(t) === t
                }
                ,
                e.generateAddress = function(t, r) {
                    return t = e.toBuffer(t),
                    r = (r = new Oe(r)).isZero() ? null : n.from(r.toArray()),
                    e.rlphash([t, r]).slice(-20)
                }
                ,
                e.isPrecompiled = function(t) {
                    var r = e.unpad(t);
                    return 1 === r.length && r[0] >= 1 && r[0] <= 8
                }
                ,
                e.addHexPrefix = function(t) {
                    return "string" != typeof t || e.isHexPrefixed(t) ? t : "0x" + t
                }
                ,
                e.isValidSignature = function(t, e, r, n) {
                    var i = new Oe("7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0",16)
                      , a = new Oe("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141",16);
                    return 32 === e.length && 32 === r.length && (27 === t || 28 === t) && (e = new Oe(e),
                    r = new Oe(r),
                    !(e.isZero() || e.gt(a) || r.isZero() || r.gt(a)) && (!1 !== n || 1 !== new Oe(r).cmp(i)))
                }
                ,
                e.baToJSON = function(t) {
                    if (n.isBuffer(t))
                        return "0x" + t.toString("hex");
                    if (t instanceof Array) {
                        for (var r = [], i = 0; i < t.length; i++)
                            r.push(e.baToJSON(t[i]));
                        return r
                    }
                }
                ,
                e.defineProperties = function(t, i, a) {
                    if (t.raw = [],
                    t._fields = [],
                    t.toJSON = function(r) {
                        if (r) {
                            var n = {};
                            return t._fields.forEach((function(e) {
                                n[e] = "0x" + t[e].toString("hex")
                            }
                            )),
                            n
                        }
                        return e.baToJSON(this.raw)
                    }
                    ,
                    t.serialize = function() {
                        return Ki.encode(t.raw)
                    }
                    ,
                    i.forEach((function(r, i) {
                        function a() {
                            return t.raw[i]
                        }
                        function f(a) {
                            "00" !== (a = e.toBuffer(a)).toString("hex") || r.allowZero || (a = n.allocUnsafe(0)),
                            r.allowLess && r.length ? (a = e.stripZeros(a),
                            M()(r.length >= a.length, "The field " + r.name + " must not have more " + r.length + " bytes")) : r.allowZero && 0 === a.length || !r.length || M()(r.length === a.length, "The field " + r.name + " must have byte length of " + r.length),
                            t.raw[i] = a
                        }
                        t._fields.push(r.name),
                        Object.defineProperty(t, r.name, {
                            enumerable: !0,
                            configurable: !0,
                            get: a,
                            set: f
                        }),
                        r.default && (t[r.name] = r.default),
                        r.alias && Object.defineProperty(t, r.alias, {
                            enumerable: !1,
                            configurable: !0,
                            set: f,
                            get: a
                        })
                    }
                    )),
                    a)
                        if ("string" == typeof a && (a = n.from(e.stripHexPrefix(a), "hex")),
                        n.isBuffer(a) && (a = Ki.decode(a)),
                        Array.isArray(a)) {
                            if (a.length > t._fields.length)
                                throw new Error("wrong number of fields in data");
                            a.forEach((function(r, n) {
                                t[t._fields[n]] = e.toBuffer(r)
                            }
                            ))
                        } else {
                            if ("object" !== (void 0 === a ? "undefined" : r(a)))
                                throw new Error("invalid data");
                            var f = Object.keys(a);
                            i.forEach((function(e) {
                                -1 !== f.indexOf(e.name) && (t[e.name] = a[e.name]),
                                -1 !== f.indexOf(e.alias) && (t[e.alias] = a[e.alias])
                            }
                            ))
                        }
                }
            }
            ))
              , Gi = (Hi.MAX_INTEGER,
            Hi.TWO_POW256,
            Hi.KECCAK256_NULL_S,
            Hi.SHA3_NULL_S,
            Hi.KECCAK256_NULL,
            Hi.SHA3_NULL,
            Hi.KECCAK256_RLP_ARRAY_S,
            Hi.SHA3_RLP_ARRAY_S,
            Hi.KECCAK256_RLP_ARRAY,
            Hi.SHA3_RLP_ARRAY,
            Hi.KECCAK256_RLP_S,
            Hi.SHA3_RLP_S,
            Hi.KECCAK256_RLP,
            Hi.SHA3_RLP,
            Hi.BN,
            Hi.rlp,
            Hi.secp256k1,
            Hi.zeros,
            Hi.zeroAddress,
            Hi.setLengthLeft,
            Hi.setLength,
            Hi.setLengthRight,
            Hi.unpad,
            Hi.stripZeros,
            Hi.toBuffer,
            Hi.bufferToInt,
            Hi.bufferToHex,
            Hi.fromSigned,
            Hi.toUnsigned,
            Hi.keccak,
            Hi.keccak256,
            Hi.sha3,
            Hi.sha256,
            Hi.ripemd160,
            Hi.rlphash,
            Hi.isValidPrivate,
            Hi.isValidPublic,
            Hi.pubToAddress,
            Hi.publicToAddress,
            Hi.privateToPublic,
            Hi.importPublic,
            Hi.ecsign,
            Hi.hashPersonalMessage,
            Hi.ecrecover,
            Hi.toRpcSig,
            Hi.fromRpcSig,
            Hi.privateToAddress,
            Hi.isValidAddress)
              , Wi = (Hi.isZeroAddress,
            Hi.toChecksumAddress,
            Hi.isValidChecksumAddress,
            Hi.generateAddress,
            Hi.isPrecompiled,
            Hi.addHexPrefix)
              , Zi = (Hi.isValidSignature,
            Hi.baToJSON,
            Hi.defineProperties,
            function() {
                for (var t = {}, e = 0; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var n in r)
                        Ji.call(r, n) && (t[n] = r[n])
                }
                return t
            }
            )
              , Ji = Object.prototype.hasOwnProperty
              , Xi = function(t, e) {
                return function() {
                    for (var r = this, n = e.promiseModule, i = new Array(arguments.length), a = 0; a < arguments.length; a++)
                        i[a] = arguments[a];
                    return new n((function(n, a) {
                        e.errorFirst ? i.push((function(t, r) {
                            if (e.multiArgs) {
                                for (var i = new Array(arguments.length - 1), f = 1; f < arguments.length; f++)
                                    i[f - 1] = arguments[f];
                                t ? (i.unshift(t),
                                a(i)) : n(i)
                            } else
                                t ? a(t) : n(r)
                        }
                        )) : i.push((function(t) {
                            if (e.multiArgs) {
                                for (var r = new Array(arguments.length - 1), i = 0; i < arguments.length; i++)
                                    r[i] = arguments[i];
                                n(r)
                            } else
                                n(t)
                        }
                        )),
                        t.apply(r, i)
                    }
                    ))
                }
            }
              , $i = function(t, e) {
                e = Object.assign({
                    exclude: [/.+(Sync|Stream)$/],
                    errorFirst: !0,
                    promiseModule: Promise
                }, e);
                var r, n = function(t) {
                    var r = function(e) {
                        return "string" == typeof e ? t === e : e.test(t)
                    };
                    return e.include ? e.include.some(r) : !e.exclude.some(r)
                };
                for (var i in r = "function" == typeof t ? function() {
                    return e.excludeMain ? t.apply(this, arguments) : Xi(t, e).apply(this, arguments)
                }
                : Object.create(Object.getPrototypeOf(t)),
                t) {
                    var a = t[i];
                    r[i] = "function" == typeof a && n(i) ? Xi(a, e) : a
                }
                return r
            }
              , Qi = function(t) {
                var e = (t = t || {}).max || Number.MAX_SAFE_INTEGER
                  , r = void 0 !== t.start ? t.start : Math.floor(Math.random() * e);
                return function() {
                    return r %= e,
                    r++
                }
            }()
              , ta = ea;
            function ea(t) {
                this.currentProvider = t
            }
            function ra(t) {
                return function() {
                    var e = this
                      , r = [].slice.call(arguments)
                      , n = r.pop();
                    e.sendAsync({
                        method: t,
                        params: r
                    }, n)
                }
            }
            function na(t, e) {
                return function() {
                    var r = this
                      , n = [].slice.call(arguments)
                      , i = n.pop();
                    n.length < t && n.push("latest"),
                    r.sendAsync({
                        method: e,
                        params: n
                    }, i)
                }
            }
            ea.prototype.getBalance = na(2, "eth_getBalance"),
            ea.prototype.getCode = na(2, "eth_getCode"),
            ea.prototype.getTransactionCount = na(2, "eth_getTransactionCount"),
            ea.prototype.getStorageAt = na(3, "eth_getStorageAt"),
            ea.prototype.call = na(2, "eth_call"),
            ea.prototype.protocolVersion = ra("eth_protocolVersion"),
            ea.prototype.syncing = ra("eth_syncing"),
            ea.prototype.coinbase = ra("eth_coinbase"),
            ea.prototype.mining = ra("eth_mining"),
            ea.prototype.hashrate = ra("eth_hashrate"),
            ea.prototype.gasPrice = ra("eth_gasPrice"),
            ea.prototype.accounts = ra("eth_accounts"),
            ea.prototype.blockNumber = ra("eth_blockNumber"),
            ea.prototype.getBlockTransactionCountByHash = ra("eth_getBlockTransactionCountByHash"),
            ea.prototype.getBlockTransactionCountByNumber = ra("eth_getBlockTransactionCountByNumber"),
            ea.prototype.getUncleCountByBlockHash = ra("eth_getUncleCountByBlockHash"),
            ea.prototype.getUncleCountByBlockNumber = ra("eth_getUncleCountByBlockNumber"),
            ea.prototype.sign = ra("eth_sign"),
            ea.prototype.sendTransaction = ra("eth_sendTransaction"),
            ea.prototype.sendRawTransaction = ra("eth_sendRawTransaction"),
            ea.prototype.estimateGas = ra("eth_estimateGas"),
            ea.prototype.getBlockByHash = ra("eth_getBlockByHash"),
            ea.prototype.getBlockByNumber = ra("eth_getBlockByNumber"),
            ea.prototype.getTransactionByHash = ra("eth_getTransactionByHash"),
            ea.prototype.getTransactionByBlockHashAndIndex = ra("eth_getTransactionByBlockHashAndIndex"),
            ea.prototype.getTransactionByBlockNumberAndIndex = ra("eth_getTransactionByBlockNumberAndIndex"),
            ea.prototype.getTransactionReceipt = ra("eth_getTransactionReceipt"),
            ea.prototype.getUncleByBlockHashAndIndex = ra("eth_getUncleByBlockHashAndIndex"),
            ea.prototype.getUncleByBlockNumberAndIndex = ra("eth_getUncleByBlockNumberAndIndex"),
            ea.prototype.getCompilers = ra("eth_getCompilers"),
            ea.prototype.compileLLL = ra("eth_compileLLL"),
            ea.prototype.compileSolidity = ra("eth_compileSolidity"),
            ea.prototype.compileSerpent = ra("eth_compileSerpent"),
            ea.prototype.newFilter = ra("eth_newFilter"),
            ea.prototype.newBlockFilter = ra("eth_newBlockFilter"),
            ea.prototype.newPendingTransactionFilter = ra("eth_newPendingTransactionFilter"),
            ea.prototype.uninstallFilter = ra("eth_uninstallFilter"),
            ea.prototype.getFilterChanges = ra("eth_getFilterChanges"),
            ea.prototype.getFilterLogs = ra("eth_getFilterLogs"),
            ea.prototype.getLogs = ra("eth_getLogs"),
            ea.prototype.getWork = ra("eth_getWork"),
            ea.prototype.submitWork = ra("eth_submitWork"),
            ea.prototype.submitHashrate = ra("eth_submitHashrate"),
            ea.prototype.sendAsync = function(t, e) {
                var r;
                this.currentProvider.sendAsync((r = t,
                Zi({
                    id: Qi(),
                    jsonrpc: "2.0",
                    params: []
                }, r)), (function(t, r) {
                    if (!t && r.error && (t = new Error("EthQuery - RPC Error - " + r.error.message)),
                    t)
                        return e(t);
                    e(null, r.result)
                }
                ))
            }
            ;
            var ia, aa = "object" == typeof Reflect ? Reflect : null, fa = aa && "function" == typeof aa.apply ? aa.apply : function(t, e, r) {
                return Function.prototype.apply.call(t, e, r)
            }
            ;
            ia = aa && "function" == typeof aa.ownKeys ? aa.ownKeys : Object.getOwnPropertySymbols ? function(t) {
                return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))
            }
            : function(t) {
                return Object.getOwnPropertyNames(t)
            }
            ;
            var oa = Number.isNaN || function(t) {
                return t != t
            }
            ;
            function sa() {
                sa.init.call(this)
            }
            var ca = sa;
            sa.EventEmitter = sa,
            sa.prototype._events = void 0,
            sa.prototype._eventsCount = 0,
            sa.prototype._maxListeners = void 0;
            var ua = 10;
            function da(t) {
                if ("function" != typeof t)
                    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t)
            }
            function ha(t) {
                return void 0 === t._maxListeners ? sa.defaultMaxListeners : t._maxListeners
            }
            function la(t, e, r, n) {
                var i, a, f, o;
                if (da(r),
                void 0 === (a = t._events) ? (a = t._events = Object.create(null),
                t._eventsCount = 0) : (void 0 !== a.newListener && (t.emit("newListener", e, r.listener ? r.listener : r),
                a = t._events),
                f = a[e]),
                void 0 === f)
                    f = a[e] = r,
                    ++t._eventsCount;
                else if ("function" == typeof f ? f = a[e] = n ? [r, f] : [f, r] : n ? f.unshift(r) : f.push(r),
                (i = ha(t)) > 0 && f.length > i && !f.warned) {
                    f.warned = !0;
                    var s = new Error("Possible EventEmitter memory leak detected. " + f.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                    s.name = "MaxListenersExceededWarning",
                    s.emitter = t,
                    s.type = e,
                    s.count = f.length,
                    o = s,
                    console && console.warn && console.warn(o)
                }
                return t
            }
            function ba() {
                if (!this.fired)
                    return this.target.removeListener(this.type, this.wrapFn),
                    this.fired = !0,
                    0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
            }
            function pa(t, e, r) {
                var n = {
                    fired: !1,
                    wrapFn: void 0,
                    target: t,
                    type: e,
                    listener: r
                }
                  , i = ba.bind(n);
                return i.listener = r,
                n.wrapFn = i,
                i
            }
            function va(t, e, r) {
                var n = t._events;
                if (void 0 === n)
                    return [];
                var i = n[e];
                return void 0 === i ? [] : "function" == typeof i ? r ? [i.listener || i] : [i] : r ? function(t) {
                    for (var e = new Array(t.length), r = 0; r < e.length; ++r)
                        e[r] = t[r].listener || t[r];
                    return e
                }(i) : ya(i, i.length)
            }
            function _a(t) {
                var e = this._events;
                if (void 0 !== e) {
                    var r = e[t];
                    if ("function" == typeof r)
                        return 1;
                    if (void 0 !== r)
                        return r.length
                }
                return 0
            }
            function ya(t, e) {
                for (var r = new Array(e), n = 0; n < e; ++n)
                    r[n] = t[n];
                return r
            }
            Object.defineProperty(sa, "defaultMaxListeners", {
                enumerable: !0,
                get: function() {
                    return ua
                },
                set: function(t) {
                    if ("number" != typeof t || t < 0 || oa(t))
                        throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
                    ua = t
                }
            }),
            sa.init = function() {
                void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null),
                this._eventsCount = 0),
                this._maxListeners = this._maxListeners || void 0
            }
            ,
            sa.prototype.setMaxListeners = function(t) {
                if ("number" != typeof t || t < 0 || oa(t))
                    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
                return this._maxListeners = t,
                this
            }
            ,
            sa.prototype.getMaxListeners = function() {
                return ha(this)
            }
            ,
            sa.prototype.emit = function(t) {
                for (var e = [], r = 1; r < arguments.length; r++)
                    e.push(arguments[r]);
                var n = "error" === t
                  , i = this._events;
                if (void 0 !== i)
                    n = n && void 0 === i.error;
                else if (!n)
                    return !1;
                if (n) {
                    var a;
                    if (e.length > 0 && (a = e[0]),
                    a instanceof Error)
                        throw a;
                    var f = new Error("Unhandled error." + (a ? " (" + a.message + ")" : ""));
                    throw f.context = a,
                    f
                }
                var o = i[t];
                if (void 0 === o)
                    return !1;
                if ("function" == typeof o)
                    fa(o, this, e);
                else {
                    var s = o.length
                      , c = ya(o, s);
                    for (r = 0; r < s; ++r)
                        fa(c[r], this, e)
                }
                return !0
            }
            ,
            sa.prototype.addListener = function(t, e) {
                return la(this, t, e, !1)
            }
            ,
            sa.prototype.on = sa.prototype.addListener,
            sa.prototype.prependListener = function(t, e) {
                return la(this, t, e, !0)
            }
            ,
            sa.prototype.once = function(t, e) {
                return da(e),
                this.on(t, pa(this, t, e)),
                this
            }
            ,
            sa.prototype.prependOnceListener = function(t, e) {
                return da(e),
                this.prependListener(t, pa(this, t, e)),
                this
            }
            ,
            sa.prototype.removeListener = function(t, e) {
                var r, n, i, a, f;
                if (da(e),
                void 0 === (n = this._events))
                    return this;
                if (void 0 === (r = n[t]))
                    return this;
                if (r === e || r.listener === e)
                    0 == --this._eventsCount ? this._events = Object.create(null) : (delete n[t],
                    n.removeListener && this.emit("removeListener", t, r.listener || e));
                else if ("function" != typeof r) {
                    for (i = -1,
                    a = r.length - 1; a >= 0; a--)
                        if (r[a] === e || r[a].listener === e) {
                            f = r[a].listener,
                            i = a;
                            break
                        }
                    if (i < 0)
                        return this;
                    0 === i ? r.shift() : function(t, e) {
                        for (; e + 1 < t.length; e++)
                            t[e] = t[e + 1];
                        t.pop()
                    }(r, i),
                    1 === r.length && (n[t] = r[0]),
                    void 0 !== n.removeListener && this.emit("removeListener", t, f || e)
                }
                return this
            }
            ,
            sa.prototype.off = sa.prototype.removeListener,
            sa.prototype.removeAllListeners = function(t) {
                var e, r, n;
                if (void 0 === (r = this._events))
                    return this;
                if (void 0 === r.removeListener)
                    return 0 === arguments.length ? (this._events = Object.create(null),
                    this._eventsCount = 0) : void 0 !== r[t] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete r[t]),
                    this;
                if (0 === arguments.length) {
                    var i, a = Object.keys(r);
                    for (n = 0; n < a.length; ++n)
                        "removeListener" !== (i = a[n]) && this.removeAllListeners(i);
                    return this.removeAllListeners("removeListener"),
                    this._events = Object.create(null),
                    this._eventsCount = 0,
                    this
                }
                if ("function" == typeof (e = r[t]))
                    this.removeListener(t, e);
                else if (void 0 !== e)
                    for (n = e.length - 1; n >= 0; n--)
                        this.removeListener(t, e[n]);
                return this
            }
            ,
            sa.prototype.listeners = function(t) {
                return va(this, t, !0)
            }
            ,
            sa.prototype.rawListeners = function(t) {
                return va(this, t, !1)
            }
            ,
            sa.listenerCount = function(t, e) {
                return "function" == typeof t.listenerCount ? t.listenerCount(e) : _a.call(t, e)
            }
            ,
            sa.prototype.listenerCount = _a,
            sa.prototype.eventNames = function() {
                return this._eventsCount > 0 ? ia(this._events) : []
            }
            ;
            var ma = "object" == typeof Reflect ? Reflect : null
              , ga = ma && "function" == typeof ma.apply ? ma.apply : function(t, e, r) {
                return Function.prototype.apply.call(t, e, r)
            }
              , wa = Aa;
            function Aa() {
                ca.call(this)
            }
            function Ea(t, e, r) {
                try {
                    ga(t, e, r)
                } catch (t) {
                    setTimeout((function() {
                        throw t
                    }
                    ))
                }
            }
            function Ia(t, e) {
                for (var r = new Array(e), n = 0; n < e; ++n)
                    r[n] = t[n];
                return r
            }
            k.a.inherits(Aa, ca),
            Aa.prototype.emit = function(t) {
                for (var e = [], r = 1; r < arguments.length; r++)
                    e.push(arguments[r]);
                var n = "error" === t
                  , i = this._events;
                if (void 0 !== i)
                    n = n && void 0 === i.error;
                else if (!n)
                    return !1;
                if (n) {
                    var a;
                    if (e.length > 0 && (a = e[0]),
                    a instanceof Error)
                        throw a;
                    var f = new Error("Unhandled error." + (a ? " (" + a.message + ")" : ""));
                    throw f.context = a,
                    f
                }
                var o = i[t];
                if (void 0 === o)
                    return !1;
                if ("function" == typeof o)
                    Ea(o, this, e);
                else {
                    var s = o.length
                      , c = Ia(o, s);
                    for (r = 0; r < s; ++r)
                        Ea(c[r], this, e)
                }
                return !0
            }
            ;
            var Ma = function(t, e) {
                return t + e
            }
              , Sa = ["sync", "latest"];
            function ka(t) {
                return Number.parseInt(t, 16)
            }
            var La = function(t) {
                Object(l.a)(r, t);
                var e = Object(b.a)(r);
                function r() {
                    var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (Object(s.a)(this, r),
                    !n.provider)
                        throw new Error("PollingBlockTracker - no provider specified.");
                    var i = n.pollingInterval || 2e4
                      , a = n.retryTimeout || i / 10
                      , f = void 0 === n.keepEventLoopActive || n.keepEventLoopActive
                      , o = n.setSkipCacheFlag || !1;
                    return (t = e.call(this, Object.assign({
                        blockResetDuration: i
                    }, n)))._provider = n.provider,
                    t._pollingInterval = i,
                    t._retryTimeout = a,
                    t._keepEventLoopActive = f,
                    t._setSkipCacheFlag = o,
                    t
                }
                return Object(c.a)(r, [{
                    key: "checkForLatestBlock",
                    value: function() {
                        var t = Object(o.a)(f.a.mark((function t() {
                            return f.a.wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2,
                                        this._updateLatestBlock();
                                    case 2:
                                        return t.next = 4,
                                        this.getLatestBlock();
                                    case 4:
                                        return t.abrupt("return", t.sent);
                                    case 5:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t, this)
                        }
                        )));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "_start",
                    value: function() {
                        var t = this;
                        this._performSync().catch((function(e) {
                            return t.emit("error", e)
                        }
                        ))
                    }
                }, {
                    key: "_performSync",
                    value: function() {
                        var t = Object(o.a)(f.a.mark((function t() {
                            var e;
                            return f.a.wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                    case 0:
                                        if (!this._isRunning) {
                                            t.next = 16;
                                            break
                                        }
                                        return t.prev = 1,
                                        t.next = 4,
                                        this._updateLatestBlock();
                                    case 4:
                                        return t.next = 6,
                                        xa(this._pollingInterval, !this._keepEventLoopActive);
                                    case 6:
                                        t.next = 14;
                                        break;
                                    case 8:
                                        t.prev = 8,
                                        t.t0 = t.catch(1),
                                        e = new Error("PollingBlockTracker - encountered an error while attempting to update latest block:\n".concat(t.t0.stack));
                                        try {
                                            this.emit("error", e)
                                        } catch (Ci) {
                                            console.error(e)
                                        }
                                        return t.next = 14,
                                        xa(this._retryTimeout, !this._keepEventLoopActive);
                                    case 14:
                                        t.next = 0;
                                        break;
                                    case 16:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t, this, [[1, 8]])
                        }
                        )));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "_updateLatestBlock",
                    value: function() {
                        var t = Object(o.a)(f.a.mark((function t() {
                            var e;
                            return f.a.wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2,
                                        this._fetchLatestBlock();
                                    case 2:
                                        e = t.sent,
                                        this._newPotentialLatest(e);
                                    case 4:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t, this)
                        }
                        )));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "_fetchLatestBlock",
                    value: function() {
                        var t = Object(o.a)(f.a.mark((function t() {
                            var e, r, n = this;
                            return f.a.wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                    case 0:
                                        return e = {
                                            jsonrpc: "2.0",
                                            id: 1,
                                            method: "eth_blockNumber",
                                            params: []
                                        },
                                        this._setSkipCacheFlag && (e.skipCache = !0),
                                        t.next = 4,
                                        $i((function(t) {
                                            return n._provider.sendAsync(e, t)
                                        }
                                        ))();
                                    case 4:
                                        if (!(r = t.sent).error) {
                                            t.next = 7;
                                            break
                                        }
                                        throw new Error("PollingBlockTracker - encountered error fetching block:\n".concat(r.error));
                                    case 7:
                                        return t.abrupt("return", r.result);
                                    case 8:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t, this)
                        }
                        )));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }()
                }]),
                r
            }(function(t) {
                Object(l.a)(r, t);
                var e = Object(b.a)(r);
                function r() {
                    var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return Object(s.a)(this, r),
                    (t = e.call(this))._blockResetDuration = n.blockResetDuration || 2e4,
                    t._blockResetTimeout,
                    t._currentBlock = null,
                    t._isRunning = !1,
                    t._onNewListener = t._onNewListener.bind(Object(u.a)(t)),
                    t._onRemoveListener = t._onRemoveListener.bind(Object(u.a)(t)),
                    t._resetCurrentBlock = t._resetCurrentBlock.bind(Object(u.a)(t)),
                    t._setupInternalEvents(),
                    t
                }
                return Object(c.a)(r, [{
                    key: "isRunning",
                    value: function() {
                        return this._isRunning
                    }
                }, {
                    key: "getCurrentBlock",
                    value: function() {
                        return this._currentBlock
                    }
                }, {
                    key: "getLatestBlock",
                    value: function() {
                        var t = Object(o.a)(f.a.mark((function t() {
                            var e = this;
                            return f.a.wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                    case 0:
                                        if (!this._currentBlock) {
                                            t.next = 2;
                                            break
                                        }
                                        return t.abrupt("return", this._currentBlock);
                                    case 2:
                                        return t.next = 4,
                                        new Promise((function(t) {
                                            return e.once("latest", t)
                                        }
                                        ));
                                    case 4:
                                        return t.abrupt("return", t.sent);
                                    case 5:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t, this)
                        }
                        )));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "removeAllListeners",
                    value: function(t) {
                        t ? Object(d.a)(Object(h.a)(r.prototype), "removeAllListeners", this).call(this, t) : Object(d.a)(Object(h.a)(r.prototype), "removeAllListeners", this).call(this),
                        this._setupInternalEvents(),
                        this._onRemoveListener()
                    }
                }, {
                    key: "_start",
                    value: function() {}
                }, {
                    key: "_end",
                    value: function() {}
                }, {
                    key: "_setupInternalEvents",
                    value: function() {
                        this.removeListener("newListener", this._onNewListener),
                        this.removeListener("removeListener", this._onRemoveListener),
                        this.on("newListener", this._onNewListener),
                        this.on("removeListener", this._onRemoveListener)
                    }
                }, {
                    key: "_onNewListener",
                    value: function(t, e) {
                        Sa.includes(t) && this._maybeStart()
                    }
                }, {
                    key: "_onRemoveListener",
                    value: function(t, e) {
                        this._getBlockTrackerEventCount() > 0 || this._maybeEnd()
                    }
                }, {
                    key: "_maybeStart",
                    value: function() {
                        this._isRunning || (this._isRunning = !0,
                        this._cancelBlockResetTimeout(),
                        this._start())
                    }
                }, {
                    key: "_maybeEnd",
                    value: function() {
                        this._isRunning && (this._isRunning = !1,
                        this._setupBlockResetTimeout(),
                        this._end())
                    }
                }, {
                    key: "_getBlockTrackerEventCount",
                    value: function() {
                        var t = this;
                        return Sa.map((function(e) {
                            return t.listenerCount(e)
                        }
                        )).reduce(Ma)
                    }
                }, {
                    key: "_newPotentialLatest",
                    value: function(t) {
                        var e = this._currentBlock;
                        e && ka(t) <= ka(e) || this._setCurrentBlock(t)
                    }
                }, {
                    key: "_setCurrentBlock",
                    value: function(t) {
                        var e = this._currentBlock;
                        this._currentBlock = t,
                        this.emit("latest", t),
                        this.emit("sync", {
                            oldBlock: e,
                            newBlock: t
                        })
                    }
                }, {
                    key: "_setupBlockResetTimeout",
                    value: function() {
                        this._cancelBlockResetTimeout(),
                        this._blockResetTimeout = setTimeout(this._resetCurrentBlock, this._blockResetDuration),
                        this._blockResetTimeout.unref && this._blockResetTimeout.unref()
                    }
                }, {
                    key: "_cancelBlockResetTimeout",
                    value: function() {
                        clearTimeout(this._blockResetTimeout)
                    }
                }, {
                    key: "_resetCurrentBlock",
                    value: function() {
                        this._currentBlock = null
                    }
                }]),
                r
            }(wa));
            function xa(t, e) {
                return new Promise((function(r) {
                    var n = setTimeout(r, t);
                    n.unref && e && n.unref()
                }
                ))
            }
            var Pa = "object" == typeof p.i && p.i && p.i.Object === Object && p.i
              , Ta = "object" == typeof self && self && self.Object === Object && self
              , Ra = Pa || Ta || Function("return this")()
              , ja = Ra.Symbol
              , Oa = Object.prototype
              , Ca = Oa.hasOwnProperty
              , Ba = Oa.toString
              , Na = ja ? ja.toStringTag : void 0
              , za = Object.prototype.toString
              , Da = ja ? ja.toStringTag : void 0
              , Ka = function(t) {
                return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : Da && Da in Object(t) ? function(t) {
                    var e = Ca.call(t, Na)
                      , r = t[Na];
                    try {
                        t[Na] = void 0;
                        var n = !0
                    } catch (t) {}
                    var i = Ba.call(t);
                    return n && (e ? t[Na] = r : delete t[Na]),
                    i
                }(t) : function(t) {
                    return za.call(t)
                }(t)
            }
              , Va = function(t) {
                var e = typeof t;
                return null != t && ("object" == e || "function" == e)
            }
              , Ua = function(t) {
                return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
            }
              , qa = function(t) {
                return null != t && Ua(t.length) && !function(t) {
                    if (!Va(t))
                        return !1;
                    var e = Ka(t);
                    return "[object Function]" == e || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e
                }(t)
            }
              , Ya = Object(p.g)((function(t, e) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                e.default = {},
                t.exports = e.default
            }
            ));
            Object(p.h)(Ya);
            var Fa = function() {}
              , Ha = Object(p.g)((function(t, e) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                e.default = function(t) {
                    return function() {
                        if (null !== t) {
                            var e = t;
                            t = null,
                            e.apply(this, arguments)
                        }
                    }
                }
                ,
                t.exports = e.default
            }
            ));
            Object(p.h)(Ha);
            var Ga = Object(p.g)((function(t, e) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                e.default = function(t) {
                    return r && t[r] && t[r]()
                }
                ;
                var r = "function" == typeof Symbol && Symbol.iterator;
                t.exports = e.default
            }
            ));
            Object(p.h)(Ga);
            var Wa = function(t) {
                return null != t && "object" == typeof t
            }
              , Za = function(t) {
                return Wa(t) && "[object Arguments]" == Ka(t)
            }
              , Ja = Object.prototype
              , Xa = Ja.hasOwnProperty
              , $a = Ja.propertyIsEnumerable
              , Qa = Za(function() {
                return arguments
            }()) ? Za : function(t) {
                return Wa(t) && Xa.call(t, "callee") && !$a.call(t, "callee")
            }
              , tf = Array.isArray
              , ef = function() {
                return !1
            }
              , rf = Object(p.g)((function(t, e) {
                var r = e && !e.nodeType && e
                  , n = r && t && !t.nodeType && t
                  , i = n && n.exports === r ? Ra.Buffer : void 0
                  , a = (i ? i.isBuffer : void 0) || ef;
                t.exports = a
            }
            ))
              , nf = /^(?:0|[1-9]\d*)$/
              , af = function(t, e) {
                var r = typeof t;
                return !!(e = null == e ? 9007199254740991 : e) && ("number" == r || "symbol" != r && nf.test(t)) && t > -1 && t % 1 == 0 && t < e
            }
              , ff = {};
            ff["[object Float32Array]"] = ff["[object Float64Array]"] = ff["[object Int8Array]"] = ff["[object Int16Array]"] = ff["[object Int32Array]"] = ff["[object Uint8Array]"] = ff["[object Uint8ClampedArray]"] = ff["[object Uint16Array]"] = ff["[object Uint32Array]"] = !0,
            ff["[object Arguments]"] = ff["[object Array]"] = ff["[object ArrayBuffer]"] = ff["[object Boolean]"] = ff["[object DataView]"] = ff["[object Date]"] = ff["[object Error]"] = ff["[object Function]"] = ff["[object Map]"] = ff["[object Number]"] = ff["[object Object]"] = ff["[object RegExp]"] = ff["[object Set]"] = ff["[object String]"] = ff["[object WeakMap]"] = !1;
            var of = Object(p.g)((function(t, e) {
                var r = e && !e.nodeType && e
                  , n = r && t && !t.nodeType && t
                  , i = n && n.exports === r && Pa.process
                  , a = function() {
                    try {
                        return n && n.require && n.require("util").types || i && i.binding && i.binding("util")
                    } catch (t) {}
                }();
                t.exports = a
            }
            ))
              , sf = of && of.isTypedArray
              , cf = sf ? function(t) {
                return function(e) {
                    return t(e)
                }
            }(sf) : function(t) {
                return Wa(t) && Ua(t.length) && !!ff[Ka(t)]
            }
              , uf = Object.prototype.hasOwnProperty
              , df = function(t, e) {
                var r = tf(t)
                  , n = !r && Qa(t)
                  , i = !r && !n && rf(t)
                  , a = !r && !n && !i && cf(t)
                  , f = r || n || i || a
                  , o = f ? function(t, e) {
                    for (var r = -1, n = Array(t); ++r < t; )
                        n[r] = e(r);
                    return n
                }(t.length, String) : []
                  , s = o.length;
                for (var c in t)
                    !e && !uf.call(t, c) || f && ("length" == c || i && ("offset" == c || "parent" == c) || a && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || af(c, s)) || o.push(c);
                return o
            }
              , hf = Object.prototype
              , lf = function(t, e) {
                return function(r) {
                    return t(e(r))
                }
            }(Object.keys, Object)
              , bf = Object.prototype.hasOwnProperty
              , pf = function(t) {
                if (!function(t) {
                    var e = t && t.constructor;
                    return t === ("function" == typeof e && e.prototype || hf)
                }(t))
                    return lf(t);
                var e = [];
                for (var r in Object(t))
                    bf.call(t, r) && "constructor" != r && e.push(r);
                return e
            }
              , vf = function(t) {
                return qa(t) ? df(t) : pf(t)
            }
              , _f = Object(p.g)((function(t, e) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                e.default = function(t) {
                    if ((0,
                    r.default)(t))
                        return function(t) {
                            var e = -1
                              , r = t.length;
                            return function() {
                                return ++e < r ? {
                                    value: t[e],
                                    key: e
                                } : null
                            }
                        }(t);
                    var e, a, f, o, s = (0,
                    n.default)(t);
                    return s ? function(t) {
                        var e = -1;
                        return function() {
                            var r = t.next();
                            return r.done ? null : (e++,
                            {
                                value: r.value,
                                key: e
                            })
                        }
                    }(s) : (e = t,
                    a = (0,
                    i.default)(e),
                    f = -1,
                    o = a.length,
                    function() {
                        var t = a[++f];
                        return f < o ? {
                            value: e[t],
                            key: t
                        } : null
                    }
                    )
                }
                ;
                var r = a(qa)
                  , n = a(Ga)
                  , i = a(vf);
                function a(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                t.exports = e.default
            }
            ));
            Object(p.h)(_f);
            var yf = Object(p.g)((function(t, e) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                e.default = function(t) {
                    return function() {
                        if (null === t)
                            throw new Error("Callback was already called.");
                        var e = t;
                        t = null,
                        e.apply(this, arguments)
                    }
                }
                ,
                t.exports = e.default
            }
            ));
            Object(p.h)(yf);
            var mf = Object(p.g)((function(t, e) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                e.default = function(t) {
                    return function(e, o, s) {
                        if (s = (0,
                        n.default)(s || r.default),
                        t <= 0 || !e)
                            return s(null);
                        var c = (0,
                        i.default)(e)
                          , u = !1
                          , d = 0
                          , h = !1;
                        function l(t, e) {
                            if (d -= 1,
                            t)
                                u = !0,
                                s(t);
                            else {
                                if (e === f.default || u && d <= 0)
                                    return u = !0,
                                    s(null);
                                h || b()
                            }
                        }
                        function b() {
                            for (h = !0; d < t && !u; ) {
                                var e = c();
                                if (null === e)
                                    return u = !0,
                                    void (d <= 0 && s(null));
                                d += 1,
                                o(e.value, e.key, (0,
                                a.default)(l))
                            }
                            h = !1
                        }
                        b()
                    }
                }
                ;
                var r = o(Fa)
                  , n = o(Ha)
                  , i = o(_f)
                  , a = o(yf)
                  , f = o(Ya);
                function o(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                t.exports = e.default
            }
            ));
            Object(p.h)(mf);
            var gf = Object(p.g)((function(t, e) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                e.default = function(t, e) {
                    e |= 0;
                    for (var r = Math.max(t.length - e, 0), n = Array(r), i = 0; i < r; i++)
                        n[i] = t[e + i];
                    return n
                }
                ,
                t.exports = e.default
            }
            ));
            Object(p.h)(gf);
            var wf = Object(p.g)((function(t, e) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                e.default = function(t) {
                    return function() {
                        var e = (0,
                        n.default)(arguments)
                          , r = e.pop();
                        t.call(this, e, r)
                    }
                }
                ;
                var r, n = (r = gf) && r.__esModule ? r : {
                    default: r
                };
                t.exports = e.default
            }
            ));
            Object(p.h)(wf);
            var Af = Object(p.g)((function(t, e) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                e.hasNextTick = e.hasSetImmediate = void 0,
                e.fallback = c,
                e.wrap = u;
                var r, a, f = (r = gf) && r.__esModule ? r : {
                    default: r
                }, o = e.hasSetImmediate = "function" == typeof n && n, s = e.hasNextTick = "object" == typeof i && "function" == typeof i.nextTick;
                function c(t) {
                    setTimeout(t, 0)
                }
                function u(t) {
                    return function(e) {
                        var r = (0,
                        f.default)(arguments, 1);
                        t((function() {
                            e.apply(null, r)
                        }
                        ))
                    }
                }
                a = o ? n : s ? i.nextTick : c,
                e.default = u(a)
            }
            ));
            Object(p.h)(Af),
            Af.hasNextTick,
            Af.hasSetImmediate,
            Af.fallback,
            Af.wrap;
            var Ef = Object(p.g)((function(t, e) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                e.default = function(t) {
                    return (0,
                    n.default)((function(e, n) {
                        var i;
                        try {
                            i = t.apply(this, e)
                        } catch (t) {
                            return n(t)
                        }
                        (0,
                        r.default)(i) && "function" == typeof i.then ? i.then((function(t) {
                            f(n, null, t)
                        }
                        ), (function(t) {
                            f(n, t.message ? t : new Error(t))
                        }
                        )) : n(null, i)
                    }
                    ))
                }
                ;
                var r = a(Va)
                  , n = a(wf)
                  , i = a(Af);
                function a(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                function f(t, e, r) {
                    try {
                        t(e, r)
                    } catch (t) {
                        (0,
                        i.default)(o, t)
                    }
                }
                function o(t) {
                    throw t
                }
                t.exports = e.default
            }
            ));
            Object(p.h)(Ef);
            var If = Object(p.g)((function(t, e) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                e.isAsync = void 0;
                var r, n = (r = Ef) && r.__esModule ? r : {
                    default: r
                }, i = "function" == typeof Symbol;
                function a(t) {
                    return i && "AsyncFunction" === t[Symbol.toStringTag]
                }
                e.default = function(t) {
                    return a(t) ? (0,
                    n.default)(t) : t
                }
                ,
                e.isAsync = a
            }
            ));
            Object(p.h)(If),
            If.isAsync;
            var Mf = Object(p.g)((function(t, e) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                e.default = function(t, e, i, a) {
                    (0,
                    r.default)(e)(t, (0,
                    n.default)(i), a)
                }
                ;
                var r = i(mf)
                  , n = i(If);
                function i(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                t.exports = e.default
            }
            ));
            Object(p.h)(Mf);
            var Sf = Object(p.g)((function(t, e) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                e.default = function(t, e) {
                    return function(r, n, i) {
                        return t(r, e, n, i)
                    }
                }
                ,
                t.exports = e.default
            }
            ));
            Object(p.h)(Sf);
            var kf = Object(p.g)((function(t, e) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                e.default = function(t, e, n) {
                    ((0,
                    r.default)(t) ? d : h)(t, (0,
                    c.default)(e), n)
                }
                ;
                var r = u(qa)
                  , n = u(Ya)
                  , i = u(Mf)
                  , a = u(Sf)
                  , f = u(Fa)
                  , o = u(Ha)
                  , s = u(yf)
                  , c = u(If);
                function u(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                function d(t, e, r) {
                    r = (0,
                    o.default)(r || f.default);
                    var i = 0
                      , a = 0
                      , c = t.length;
                    function u(t, e) {
                        t ? r(t) : ++a !== c && e !== n.default || r(null)
                    }
                    for (0 === c && r(null); i < c; i++)
                        e(t[i], i, (0,
                        s.default)(u))
                }
                var h = (0,
                a.default)(i.default, 1 / 0);
                t.exports = e.default
            }
            ));
            Object(p.h)(kf);
            var Lf = Object(p.g)((function(t, e) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                e.default = function(t) {
                    return function(e, i, a) {
                        return t(r.default, e, (0,
                        n.default)(i), a)
                    }
                }
                ;
                var r = i(kf)
                  , n = i(If);
                function i(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                t.exports = e.default
            }
            ));
            Object(p.h)(Lf);
            var xf = Object(p.g)((function(t, e) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                e.default = function(t, e, i, a) {
                    a = a || r.default,
                    e = e || [];
                    var f = []
                      , o = 0
                      , s = (0,
                    n.default)(i);
                    t(e, (function(t, e, r) {
                        var n = o++;
                        s(t, (function(t, e) {
                            f[n] = e,
                            r(t)
                        }
                        ))
                    }
                    ), (function(t) {
                        a(t, f)
                    }
                    ))
                }
                ;
                var r = i(Fa)
                  , n = i(If);
                function i(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                t.exports = e.default
            }
            ));
            Object(p.h)(xf);
            var Pf = Object(p.g)((function(t, e) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var r = i(Lf)
                  , n = i(xf);
                function i(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                e.default = (0,
                r.default)(n.default),
                t.exports = e.default
            }
            ));
            Object(p.h)(Pf);
            var Tf = Object(p.g)((function(t, e) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                e.default = function(t) {
                    return function(e, r, n) {
                        return t(e, n)
                    }
                }
                ,
                t.exports = e.default
            }
            ));
            Object(p.h)(Tf);
            var Rf = Object(p.g)((function(t, e) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                e.default = function(t, e, a, f) {
                    (0,
                    r.default)(e)(t, (0,
                    n.default)((0,
                    i.default)(a)), f)
                }
                ;
                var r = a(mf)
                  , n = a(Tf)
                  , i = a(If);
                function a(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                t.exports = e.default
            }
            ));
            Object(p.h)(Rf);
            var jf = Object(p.g)((function(t, e) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var r = i(Rf)
                  , n = i(Sf);
                function i(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                e.default = (0,
                n.default)(r.default, 1),
                t.exports = e.default
            }
            ));
            Object(p.h)(jf);
            var Of = Object(p.g)((function(t, e) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                e.default = function(t, e) {
                    if (e = (0,
                    i.default)(e || n.default),
                    !(0,
                    r.default)(t))
                        return e(new Error("First argument to waterfall must be an array of functions"));
                    if (!t.length)
                        return e();
                    var s = 0;
                    function c(e) {
                        var r = (0,
                        o.default)(t[s++]);
                        e.push((0,
                        f.default)(u)),
                        r.apply(null, e)
                    }
                    function u(r) {
                        if (r || s === t.length)
                            return e.apply(null, arguments);
                        c((0,
                        a.default)(arguments, 1))
                    }
                    c([])
                }
                ;
                var r = s(tf)
                  , n = s(Fa)
                  , i = s(Ha)
                  , a = s(gf)
                  , f = s(yf)
                  , o = s(If);
                function s(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                t.exports = e.default
            }
            ));
            Object(p.h)(Of);
            var Cf = Object(p.g)((function(t, e) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                e.default = function(t, e, f) {
                    f = f || r.default;
                    var o = (0,
                    n.default)(e) ? [] : {};
                    t(e, (function(t, e, r) {
                        (0,
                        a.default)(t)((function(t, n) {
                            arguments.length > 2 && (n = (0,
                            i.default)(arguments, 1)),
                            o[e] = n,
                            r(t)
                        }
                        ))
                    }
                    ), (function(t) {
                        f(t, o)
                    }
                    ))
                }
                ;
                var r = f(Fa)
                  , n = f(qa)
                  , i = f(gf)
                  , a = f(If);
                function f(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                t.exports = e.default
            }
            ));
            Object(p.h)(Cf);
            var Bf = Object(p.g)((function(t, e) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                e.default = function(t, e) {
                    (0,
                    n.default)(r.default, t, e)
                }
                ;
                var r = i(kf)
                  , n = i(Cf);
                function i(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                t.exports = e.default
            }
            ));
            Object(p.h)(Bf);
            var Nf = Object(p.g)((function(e, r) {
                Object.defineProperty(r, "__esModule", {
                    value: !0
                }),
                r.MAX_INTEGER = new Oe("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",16),
                r.TWO_POW256 = new Oe("10000000000000000000000000000000000000000000000000000000000000000",16),
                r.KECCAK256_NULL_S = "c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                r.KECCAK256_NULL = t.from(r.KECCAK256_NULL_S, "hex"),
                r.KECCAK256_RLP_ARRAY_S = "1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
                r.KECCAK256_RLP_ARRAY = t.from(r.KECCAK256_RLP_ARRAY_S, "hex"),
                r.KECCAK256_RLP_S = "56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
                r.KECCAK256_RLP = t.from(r.KECCAK256_RLP_S, "hex")
            }
            ));
            Object(p.h)(Nf),
            Nf.MAX_INTEGER,
            Nf.TWO_POW256,
            Nf.KECCAK256_NULL_S,
            Nf.KECCAK256_NULL,
            Nf.KECCAK256_RLP_ARRAY_S,
            Nf.KECCAK256_RLP_ARRAY,
            Nf.KECCAK256_RLP_S,
            Nf.KECCAK256_RLP;
            var zf = Object(p.g)((function(e, r) {
                Object.defineProperty(r, "__esModule", {
                    value: !0
                }),
                r.zeros = function(e) {
                    return t.allocUnsafe(e).fill(0)
                }
                ,
                r.setLengthLeft = function(t, e, n) {
                    void 0 === n && (n = !1);
                    var i = r.zeros(e);
                    return t = r.toBuffer(t),
                    n ? t.length < e ? (t.copy(i),
                    i) : t.slice(0, e) : t.length < e ? (t.copy(i, e - t.length),
                    i) : t.slice(-e)
                }
                ,
                r.setLength = r.setLengthLeft,
                r.setLengthRight = function(t, e) {
                    return r.setLength(t, e, !0)
                }
                ,
                r.unpad = function(t) {
                    for (var e = (t = Fi.stripHexPrefix(t))[0]; t.length > 0 && "0" === e.toString(); )
                        e = (t = t.slice(1))[0];
                    return t
                }
                ,
                r.stripZeros = r.unpad,
                r.toBuffer = function(e) {
                    if (!t.isBuffer(e))
                        if (Array.isArray(e))
                            e = t.from(e);
                        else if ("string" == typeof e) {
                            if (!Fi.isHexString(e))
                                throw new Error("Cannot convert string to buffer. toBuffer only supports 0x-prefixed hex strings and this string was given: " + e);
                            e = t.from(Fi.padToEven(Fi.stripHexPrefix(e)), "hex")
                        } else if ("number" == typeof e)
                            e = Fi.intToBuffer(e);
                        else if (null == e)
                            e = t.allocUnsafe(0);
                        else if (Oe.isBN(e))
                            e = e.toArrayLike(t);
                        else {
                            if (!e.toArray)
                                throw new Error("invalid type");
                            e = t.from(e.toArray())
                        }
                    return e
                }
                ,
                r.bufferToInt = function(t) {
                    return new Oe(r.toBuffer(t)).toNumber()
                }
                ,
                r.bufferToHex = function(t) {
                    return "0x" + (t = r.toBuffer(t)).toString("hex")
                }
                ,
                r.fromSigned = function(t) {
                    return new Oe(t).fromTwos(256)
                }
                ,
                r.toUnsigned = function(e) {
                    return t.from(e.toTwos(256).toArray())
                }
                ,
                r.addHexPrefix = function(t) {
                    return "string" != typeof t || Fi.isHexPrefixed(t) ? t : "0x" + t
                }
                ,
                r.baToJSON = function(e) {
                    if (t.isBuffer(e))
                        return "0x" + e.toString("hex");
                    if (e instanceof Array) {
                        for (var n = [], i = 0; i < e.length; i++)
                            n.push(r.baToJSON(e[i]));
                        return n
                    }
                }
            }
            ));
            Object(p.h)(zf),
            zf.zeros,
            zf.setLengthLeft,
            zf.setLength,
            zf.setLengthRight,
            zf.unpad,
            zf.stripZeros,
            zf.toBuffer,
            zf.bufferToInt,
            zf.bufferToHex,
            zf.fromSigned,
            zf.toUnsigned,
            zf.addHexPrefix,
            zf.baToJSON;
            var Df = L.Buffer
              , Kf = m.a.Transform
              , Vf = L.Buffer
              , Uf = m.a.Transform
              , qf = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648]
              , Yf = function(t) {
                for (var e = 0; e < 24; ++e) {
                    var r = t[0] ^ t[10] ^ t[20] ^ t[30] ^ t[40]
                      , n = t[1] ^ t[11] ^ t[21] ^ t[31] ^ t[41]
                      , i = t[2] ^ t[12] ^ t[22] ^ t[32] ^ t[42]
                      , a = t[3] ^ t[13] ^ t[23] ^ t[33] ^ t[43]
                      , f = t[4] ^ t[14] ^ t[24] ^ t[34] ^ t[44]
                      , o = t[5] ^ t[15] ^ t[25] ^ t[35] ^ t[45]
                      , s = t[6] ^ t[16] ^ t[26] ^ t[36] ^ t[46]
                      , c = t[7] ^ t[17] ^ t[27] ^ t[37] ^ t[47]
                      , u = t[8] ^ t[18] ^ t[28] ^ t[38] ^ t[48]
                      , d = t[9] ^ t[19] ^ t[29] ^ t[39] ^ t[49]
                      , h = u ^ (i << 1 | a >>> 31)
                      , l = d ^ (a << 1 | i >>> 31)
                      , b = t[0] ^ h
                      , p = t[1] ^ l
                      , v = t[10] ^ h
                      , _ = t[11] ^ l
                      , y = t[20] ^ h
                      , m = t[21] ^ l
                      , g = t[30] ^ h
                      , w = t[31] ^ l
                      , A = t[40] ^ h
                      , E = t[41] ^ l;
                    h = r ^ (f << 1 | o >>> 31),
                    l = n ^ (o << 1 | f >>> 31);
                    var I = t[2] ^ h
                      , M = t[3] ^ l
                      , S = t[12] ^ h
                      , k = t[13] ^ l
                      , L = t[22] ^ h
                      , x = t[23] ^ l
                      , P = t[32] ^ h
                      , T = t[33] ^ l
                      , R = t[42] ^ h
                      , j = t[43] ^ l;
                    h = i ^ (s << 1 | c >>> 31),
                    l = a ^ (c << 1 | s >>> 31);
                    var O = t[4] ^ h
                      , C = t[5] ^ l
                      , B = t[14] ^ h
                      , N = t[15] ^ l
                      , z = t[24] ^ h
                      , D = t[25] ^ l
                      , K = t[34] ^ h
                      , V = t[35] ^ l
                      , U = t[44] ^ h
                      , q = t[45] ^ l;
                    h = f ^ (u << 1 | d >>> 31),
                    l = o ^ (d << 1 | u >>> 31);
                    var Y = t[6] ^ h
                      , F = t[7] ^ l
                      , H = t[16] ^ h
                      , G = t[17] ^ l
                      , W = t[26] ^ h
                      , Z = t[27] ^ l
                      , J = t[36] ^ h
                      , X = t[37] ^ l
                      , $ = t[46] ^ h
                      , Q = t[47] ^ l;
                    h = s ^ (r << 1 | n >>> 31),
                    l = c ^ (n << 1 | r >>> 31);
                    var tt = t[8] ^ h
                      , et = t[9] ^ l
                      , rt = t[18] ^ h
                      , nt = t[19] ^ l
                      , it = t[28] ^ h
                      , at = t[29] ^ l
                      , ft = t[38] ^ h
                      , ot = t[39] ^ l
                      , st = t[48] ^ h
                      , ct = t[49] ^ l
                      , ut = b
                      , dt = p
                      , ht = _ << 4 | v >>> 28
                      , lt = v << 4 | _ >>> 28
                      , bt = y << 3 | m >>> 29
                      , pt = m << 3 | y >>> 29
                      , vt = w << 9 | g >>> 23
                      , _t = g << 9 | w >>> 23
                      , yt = A << 18 | E >>> 14
                      , mt = E << 18 | A >>> 14
                      , gt = I << 1 | M >>> 31
                      , wt = M << 1 | I >>> 31
                      , At = k << 12 | S >>> 20
                      , Et = S << 12 | k >>> 20
                      , It = L << 10 | x >>> 22
                      , Mt = x << 10 | L >>> 22
                      , St = T << 13 | P >>> 19
                      , kt = P << 13 | T >>> 19
                      , Lt = R << 2 | j >>> 30
                      , xt = j << 2 | R >>> 30
                      , Pt = C << 30 | O >>> 2
                      , Tt = O << 30 | C >>> 2
                      , Rt = B << 6 | N >>> 26
                      , jt = N << 6 | B >>> 26
                      , Ot = D << 11 | z >>> 21
                      , Ct = z << 11 | D >>> 21
                      , Bt = K << 15 | V >>> 17
                      , Nt = V << 15 | K >>> 17
                      , zt = q << 29 | U >>> 3
                      , Dt = U << 29 | q >>> 3
                      , Kt = Y << 28 | F >>> 4
                      , Vt = F << 28 | Y >>> 4
                      , Ut = G << 23 | H >>> 9
                      , qt = H << 23 | G >>> 9
                      , Yt = W << 25 | Z >>> 7
                      , Ft = Z << 25 | W >>> 7
                      , Ht = J << 21 | X >>> 11
                      , Gt = X << 21 | J >>> 11
                      , Wt = Q << 24 | $ >>> 8
                      , Zt = $ << 24 | Q >>> 8
                      , Jt = tt << 27 | et >>> 5
                      , Xt = et << 27 | tt >>> 5
                      , $t = rt << 20 | nt >>> 12
                      , Qt = nt << 20 | rt >>> 12
                      , te = at << 7 | it >>> 25
                      , ee = it << 7 | at >>> 25
                      , re = ft << 8 | ot >>> 24
                      , ne = ot << 8 | ft >>> 24
                      , ie = st << 14 | ct >>> 18
                      , ae = ct << 14 | st >>> 18;
                    t[0] = ut ^ ~At & Ot,
                    t[1] = dt ^ ~Et & Ct,
                    t[10] = Kt ^ ~$t & bt,
                    t[11] = Vt ^ ~Qt & pt,
                    t[20] = gt ^ ~Rt & Yt,
                    t[21] = wt ^ ~jt & Ft,
                    t[30] = Jt ^ ~ht & It,
                    t[31] = Xt ^ ~lt & Mt,
                    t[40] = Pt ^ ~Ut & te,
                    t[41] = Tt ^ ~qt & ee,
                    t[2] = At ^ ~Ot & Ht,
                    t[3] = Et ^ ~Ct & Gt,
                    t[12] = $t ^ ~bt & St,
                    t[13] = Qt ^ ~pt & kt,
                    t[22] = Rt ^ ~Yt & re,
                    t[23] = jt ^ ~Ft & ne,
                    t[32] = ht ^ ~It & Bt,
                    t[33] = lt ^ ~Mt & Nt,
                    t[42] = Ut ^ ~te & vt,
                    t[43] = qt ^ ~ee & _t,
                    t[4] = Ot ^ ~Ht & ie,
                    t[5] = Ct ^ ~Gt & ae,
                    t[14] = bt ^ ~St & zt,
                    t[15] = pt ^ ~kt & Dt,
                    t[24] = Yt ^ ~re & yt,
                    t[25] = Ft ^ ~ne & mt,
                    t[34] = It ^ ~Bt & Wt,
                    t[35] = Mt ^ ~Nt & Zt,
                    t[44] = te ^ ~vt & Lt,
                    t[45] = ee ^ ~_t & xt,
                    t[6] = Ht ^ ~ie & ut,
                    t[7] = Gt ^ ~ae & dt,
                    t[16] = St ^ ~zt & Kt,
                    t[17] = kt ^ ~Dt & Vt,
                    t[26] = re ^ ~yt & gt,
                    t[27] = ne ^ ~mt & wt,
                    t[36] = Bt ^ ~Wt & Jt,
                    t[37] = Nt ^ ~Zt & Xt,
                    t[46] = vt ^ ~Lt & Pt,
                    t[47] = _t ^ ~xt & Tt,
                    t[8] = ie ^ ~ut & At,
                    t[9] = ae ^ ~dt & Et,
                    t[18] = zt ^ ~Kt & $t,
                    t[19] = Dt ^ ~Vt & Qt,
                    t[28] = yt ^ ~gt & Rt,
                    t[29] = mt ^ ~wt & jt,
                    t[38] = Wt ^ ~Jt & ht,
                    t[39] = Zt ^ ~Xt & lt,
                    t[48] = Lt ^ ~Pt & Ut,
                    t[49] = xt ^ ~Tt & qt,
                    t[0] ^= qf[2 * e],
                    t[1] ^= qf[2 * e + 1]
                }
            }
              , Ff = L.Buffer;
            function Hf() {
                this.state = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                this.blockSize = null,
                this.count = 0,
                this.squeezing = !1
            }
            Hf.prototype.initialize = function(t, e) {
                for (var r = 0; r < 50; ++r)
                    this.state[r] = 0;
                this.blockSize = t / 8,
                this.count = 0,
                this.squeezing = !1
            }
            ,
            Hf.prototype.absorb = function(t) {
                for (var e = 0; e < t.length; ++e)
                    this.state[~~(this.count / 4)] ^= t[e] << this.count % 4 * 8,
                    this.count += 1,
                    this.count === this.blockSize && (Yf(this.state),
                    this.count = 0)
            }
            ,
            Hf.prototype.absorbLastFewBits = function(t) {
                this.state[~~(this.count / 4)] ^= t << this.count % 4 * 8,
                0 != (128 & t) && this.count === this.blockSize - 1 && Yf(this.state),
                this.state[~~((this.blockSize - 1) / 4)] ^= 128 << (this.blockSize - 1) % 4 * 8,
                Yf(this.state),
                this.count = 0,
                this.squeezing = !0
            }
            ,
            Hf.prototype.squeeze = function(t) {
                this.squeezing || this.absorbLastFewBits(1);
                for (var e = Ff.alloc(t), r = 0; r < t; ++r)
                    e[r] = this.state[~~(this.count / 4)] >>> this.count % 4 * 8 & 255,
                    this.count += 1,
                    this.count === this.blockSize && (Yf(this.state),
                    this.count = 0);
                return e
            }
            ,
            Hf.prototype.copy = function(t) {
                for (var e = 0; e < 50; ++e)
                    t.state[e] = this.state[e];
                t.blockSize = this.blockSize,
                t.count = this.count,
                t.squeezing = this.squeezing
            }
            ;
            var Gf = function(t) {
                var e = function(t) {
                    function e(e, r, n, i, a) {
                        Kf.call(this, a),
                        this._rate = e,
                        this._capacity = r,
                        this._delimitedSuffix = n,
                        this._hashBitLength = i,
                        this._options = a,
                        this._state = new t,
                        this._state.initialize(e, r),
                        this._finalized = !1
                    }
                    return x(e, Kf),
                    e.prototype._transform = function(t, e, r) {
                        var n = null;
                        try {
                            this.update(t, e)
                        } catch (t) {
                            n = t
                        }
                        r(n)
                    }
                    ,
                    e.prototype._flush = function(t) {
                        var e = null;
                        try {
                            this.push(this.digest())
                        } catch (t) {
                            e = t
                        }
                        t(e)
                    }
                    ,
                    e.prototype.update = function(t, e) {
                        if (!Df.isBuffer(t) && "string" != typeof t)
                            throw new TypeError("Data must be a string or a buffer");
                        if (this._finalized)
                            throw new Error("Digest already called");
                        return Df.isBuffer(t) || (t = Df.from(t, e)),
                        this._state.absorb(t),
                        this
                    }
                    ,
                    e.prototype.digest = function(t) {
                        if (this._finalized)
                            throw new Error("Digest already called");
                        this._finalized = !0,
                        this._delimitedSuffix && this._state.absorbLastFewBits(this._delimitedSuffix);
                        var e = this._state.squeeze(this._hashBitLength / 8);
                        return void 0 !== t && (e = e.toString(t)),
                        this._resetState(),
                        e
                    }
                    ,
                    e.prototype._resetState = function() {
                        return this._state.initialize(this._rate, this._capacity),
                        this
                    }
                    ,
                    e.prototype._clone = function() {
                        var t = new e(this._rate,this._capacity,this._delimitedSuffix,this._hashBitLength,this._options);
                        return this._state.copy(t._state),
                        t._finalized = this._finalized,
                        t
                    }
                    ,
                    e
                }(t)
                  , r = function(t) {
                    function e(e, r, n, i) {
                        Uf.call(this, i),
                        this._rate = e,
                        this._capacity = r,
                        this._delimitedSuffix = n,
                        this._options = i,
                        this._state = new t,
                        this._state.initialize(e, r),
                        this._finalized = !1
                    }
                    return x(e, Uf),
                    e.prototype._transform = function(t, e, r) {
                        var n = null;
                        try {
                            this.update(t, e)
                        } catch (t) {
                            n = t
                        }
                        r(n)
                    }
                    ,
                    e.prototype._flush = function() {}
                    ,
                    e.prototype._read = function(t) {
                        this.push(this.squeeze(t))
                    }
                    ,
                    e.prototype.update = function(t, e) {
                        if (!Vf.isBuffer(t) && "string" != typeof t)
                            throw new TypeError("Data must be a string or a buffer");
                        if (this._finalized)
                            throw new Error("Squeeze already called");
                        return Vf.isBuffer(t) || (t = Vf.from(t, e)),
                        this._state.absorb(t),
                        this
                    }
                    ,
                    e.prototype.squeeze = function(t, e) {
                        this._finalized || (this._finalized = !0,
                        this._state.absorbLastFewBits(this._delimitedSuffix));
                        var r = this._state.squeeze(t);
                        return void 0 !== e && (r = r.toString(e)),
                        r
                    }
                    ,
                    e.prototype._resetState = function() {
                        return this._state.initialize(this._rate, this._capacity),
                        this
                    }
                    ,
                    e.prototype._clone = function() {
                        var t = new e(this._rate,this._capacity,this._delimitedSuffix,this._options);
                        return this._state.copy(t._state),
                        t._finalized = this._finalized,
                        t
                    }
                    ,
                    e
                }(t);
                return function(t, n) {
                    switch ("string" == typeof t ? t.toLowerCase() : t) {
                    case "keccak224":
                        return new e(1152,448,null,224,n);
                    case "keccak256":
                        return new e(1088,512,null,256,n);
                    case "keccak384":
                        return new e(832,768,null,384,n);
                    case "keccak512":
                        return new e(576,1024,null,512,n);
                    case "sha3-224":
                        return new e(1152,448,6,224,n);
                    case "sha3-256":
                        return new e(1088,512,6,256,n);
                    case "sha3-384":
                        return new e(832,768,6,384,n);
                    case "sha3-512":
                        return new e(576,1024,6,512,n);
                    case "shake128":
                        return new r(1344,256,31,n);
                    case "shake256":
                        return new r(1088,512,31,n);
                    default:
                        throw new Error("Invald algorithm: " + t)
                    }
                }
            }(Hf)
              , Wf = Object(p.g)((function(e, r) {
                Object.defineProperty(r, "__esModule", {
                    value: !0
                }),
                r.keccak = function(e, r) {
                    return void 0 === r && (r = 256),
                    e = "string" != typeof e || Fi.isHexString(e) ? zf.toBuffer(e) : t.from(e, "utf8"),
                    r || (r = 256),
                    Gf("keccak" + r).update(e).digest()
                }
                ,
                r.keccak256 = function(t) {
                    return r.keccak(t)
                }
                ,
                r.sha256 = function(t) {
                    return t = zf.toBuffer(t),
                    je("sha256").update(t).digest()
                }
                ,
                r.ripemd160 = function(t, e) {
                    t = zf.toBuffer(t);
                    var r = je("rmd160").update(t).digest();
                    return !0 === e ? zf.setLength(r, 32) : r
                }
                ,
                r.rlphash = function(t) {
                    return r.keccak(Ki.encode(t))
                }
            }
            ));
            Object(p.h)(Wf),
            Wf.keccak,
            Wf.keccak256,
            Wf.sha256,
            Wf.ripemd160,
            Wf.rlphash;
            var Zf = Object(p.g)((function(e, r) {
                Object.defineProperty(r, "__esModule", {
                    value: !0
                }),
                r.zeroAddress = function() {
                    var t = zf.zeros(20);
                    return zf.bufferToHex(t)
                }
                ,
                r.isValidAddress = function(t) {
                    return /^0x[0-9a-fA-F]{40}$/.test(t)
                }
                ,
                r.isZeroAddress = function(t) {
                    return r.zeroAddress() === zf.addHexPrefix(t)
                }
                ,
                r.toChecksumAddress = function(t, e) {
                    t = Fi.stripHexPrefix(t).toLowerCase();
                    for (var r = void 0 !== e ? e.toString() + "0x" : "", n = Wf.keccak(r + t).toString("hex"), i = "0x", a = 0; a < t.length; a++)
                        parseInt(n[a], 16) >= 8 ? i += t[a].toUpperCase() : i += t[a];
                    return i
                }
                ,
                r.isValidChecksumAddress = function(t, e) {
                    return r.isValidAddress(t) && r.toChecksumAddress(t, e) === t
                }
                ,
                r.generateAddress = function(e, r) {
                    e = zf.toBuffer(e);
                    var n = new Oe(r);
                    return n.isZero() ? Wf.rlphash([e, null]).slice(-20) : Wf.rlphash([e, t.from(n.toArray())]).slice(-20)
                }
                ,
                r.generateAddress2 = function(e, r, n) {
                    var i = zf.toBuffer(e)
                      , a = zf.toBuffer(r)
                      , f = zf.toBuffer(n);
                    return M()(20 === i.length),
                    M()(32 === a.length),
                    Wf.keccak256(t.concat([t.from("ff", "hex"), i, a, Wf.keccak256(f)])).slice(-20)
                }
                ,
                r.isPrecompiled = function(t) {
                    var e = zf.unpad(t);
                    return 1 === e.length && e[0] >= 1 && e[0] <= 8
                }
                ,
                r.isValidPrivate = function(t) {
                    return Di.privateKeyVerify(t)
                }
                ,
                r.isValidPublic = function(e, r) {
                    return void 0 === r && (r = !1),
                    64 === e.length ? Di.publicKeyVerify(t.concat([t.from([4]), e])) : !!r && Di.publicKeyVerify(e)
                }
                ,
                r.pubToAddress = function(t, e) {
                    return void 0 === e && (e = !1),
                    t = zf.toBuffer(t),
                    e && 64 !== t.length && (t = Di.publicKeyConvert(t, !1).slice(1)),
                    M()(64 === t.length),
                    Wf.keccak(t).slice(-20)
                }
                ,
                r.publicToAddress = r.pubToAddress,
                r.privateToAddress = function(t) {
                    return r.publicToAddress(r.privateToPublic(t))
                }
                ,
                r.privateToPublic = function(t) {
                    return t = zf.toBuffer(t),
                    Di.publicKeyCreate(t, !1).slice(1)
                }
                ,
                r.importPublic = function(t) {
                    return 64 !== (t = zf.toBuffer(t)).length && (t = Di.publicKeyConvert(t, !1).slice(1)),
                    t
                }
            }
            ));
            Object(p.h)(Zf),
            Zf.zeroAddress,
            Zf.isValidAddress,
            Zf.isZeroAddress,
            Zf.toChecksumAddress,
            Zf.isValidChecksumAddress,
            Zf.generateAddress,
            Zf.generateAddress2,
            Zf.isPrecompiled,
            Zf.isValidPrivate,
            Zf.isValidPublic,
            Zf.pubToAddress,
            Zf.publicToAddress,
            Zf.privateToAddress,
            Zf.privateToPublic,
            Zf.importPublic;
            var Jf = Object(p.g)((function(e, r) {
                function n(t, e) {
                    return e ? t - (2 * e + 35) : t - 27
                }
                function i(t) {
                    return 0 === t || 1 === t
                }
                Object.defineProperty(r, "__esModule", {
                    value: !0
                }),
                r.ecsign = function(t, e, r) {
                    var n = Di.sign(t, e)
                      , i = n.recovery;
                    return {
                        r: n.signature.slice(0, 32),
                        s: n.signature.slice(32, 64),
                        v: r ? i + (2 * r + 35) : i + 27
                    }
                }
                ,
                r.ecrecover = function(e, r, a, f, o) {
                    var s = t.concat([zf.setLength(a, 32), zf.setLength(f, 32)], 64)
                      , c = n(r, o);
                    if (!i(c))
                        throw new Error("Invalid signature v value");
                    var u = Di.recover(e, s, c);
                    return Di.publicKeyConvert(u, !1).slice(1)
                }
                ,
                r.toRpcSig = function(e, r, a, f) {
                    if (!i(n(e, f)))
                        throw new Error("Invalid signature v value");
                    return zf.bufferToHex(t.concat([zf.setLengthLeft(r, 32), zf.setLengthLeft(a, 32), zf.toBuffer(e)]))
                }
                ,
                r.fromRpcSig = function(t) {
                    var e = zf.toBuffer(t);
                    if (65 !== e.length)
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
                r.isValidSignature = function(t, e, r, a, f) {
                    void 0 === a && (a = !0);
                    var o = new Oe("7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0",16)
                      , s = new Oe("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141",16);
                    if (32 !== e.length || 32 !== r.length)
                        return !1;
                    if (!i(n(t, f)))
                        return !1;
                    var c = new Oe(e)
                      , u = new Oe(r);
                    return !(c.isZero() || c.gt(s) || u.isZero() || u.gt(s)) && (!a || 1 !== u.cmp(o))
                }
                ,
                r.hashPersonalMessage = function(e) {
                    var r = t.from("\x19Ethereum Signed Message:\n" + e.length.toString(), "utf-8");
                    return Wf.keccak(t.concat([r, e]))
                }
            }
            ));
            Object(p.h)(Jf),
            Jf.ecsign,
            Jf.ecrecover,
            Jf.toRpcSig,
            Jf.fromRpcSig,
            Jf.isValidSignature,
            Jf.hashPersonalMessage;
            var Xf = Object(p.g)((function(e, r) {
                Object.defineProperty(r, "__esModule", {
                    value: !0
                }),
                r.defineProperties = function(e, r, n) {
                    if (e.raw = [],
                    e._fields = [],
                    e.toJSON = function(t) {
                        if (void 0 === t && (t = !1),
                        t) {
                            var r = {};
                            return e._fields.forEach((function(t) {
                                r[t] = "0x" + e[t].toString("hex")
                            }
                            )),
                            r
                        }
                        return zf.baToJSON(e.raw)
                    }
                    ,
                    e.serialize = function() {
                        return Ki.encode(e.raw)
                    }
                    ,
                    r.forEach((function(r, n) {
                        function i() {
                            return e.raw[n]
                        }
                        function a(i) {
                            "00" !== (i = zf.toBuffer(i)).toString("hex") || r.allowZero || (i = t.allocUnsafe(0)),
                            r.allowLess && r.length ? (i = zf.stripZeros(i),
                            M()(r.length >= i.length, "The field " + r.name + " must not have more " + r.length + " bytes")) : r.allowZero && 0 === i.length || !r.length || M()(r.length === i.length, "The field " + r.name + " must have byte length of " + r.length),
                            e.raw[n] = i
                        }
                        e._fields.push(r.name),
                        Object.defineProperty(e, r.name, {
                            enumerable: !0,
                            configurable: !0,
                            get: i,
                            set: a
                        }),
                        r.default && (e[r.name] = r.default),
                        r.alias && Object.defineProperty(e, r.alias, {
                            enumerable: !1,
                            configurable: !0,
                            set: a,
                            get: i
                        })
                    }
                    )),
                    n)
                        if ("string" == typeof n && (n = t.from(Fi.stripHexPrefix(n), "hex")),
                        t.isBuffer(n) && (n = Ki.decode(n)),
                        Array.isArray(n)) {
                            if (n.length > e._fields.length)
                                throw new Error("wrong number of fields in data");
                            n.forEach((function(t, r) {
                                e[e._fields[r]] = zf.toBuffer(t)
                            }
                            ))
                        } else {
                            if ("object" != typeof n)
                                throw new Error("invalid data");
                            var i = Object.keys(n);
                            r.forEach((function(t) {
                                -1 !== i.indexOf(t.name) && (e[t.name] = n[t.name]),
                                -1 !== i.indexOf(t.alias) && (e[t.alias] = n[t.alias])
                            }
                            ))
                        }
                }
            }
            ));
            Object(p.h)(Xf),
            Xf.defineProperties;
            var $f = Object(p.g)((function(t, e) {
                function r(t) {
                    for (var r in t)
                        e.hasOwnProperty(r) || (e[r] = t[r])
                }
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                e.secp256k1 = Di,
                e.BN = Oe,
                e.rlp = Ki,
                Object.assign(e, Fi),
                r(Nf),
                r(Zf),
                r(Wf),
                r(Jf),
                r(zf),
                r(Xf)
            }
            ));
            Object(p.h)($f),
            $f.secp256k1,
            $f.BN,
            $f.rlp;
            var Qf = function() {};
            function to(t) {
                return t.startsWith("int[") ? "int256" + t.slice(3) : "int" === t ? "int256" : t.startsWith("uint[") ? "uint256" + t.slice(4) : "uint" === t ? "uint256" : t.startsWith("fixed[") ? "fixed128x128" + t.slice(5) : "fixed" === t ? "fixed128x128" : t.startsWith("ufixed[") ? "ufixed128x128" + t.slice(6) : "ufixed" === t ? "ufixed128x128" : t
            }
            function eo(t) {
                return parseInt(/^\D+(\d+)$/.exec(t)[1], 10)
            }
            function ro(t) {
                var e = /^\D+(\d+)x(\d+)$/.exec(t);
                return [parseInt(e[1], 10), parseInt(e[2], 10)]
            }
            function no(t) {
                var e = t.match(/(.*)\[(.*?)\]$/);
                return e ? "" === e[2] ? "dynamic" : parseInt(e[2], 10) : null
            }
            function io(t) {
                var e = typeof t;
                if ("string" === e)
                    return $f.isHexPrefixed(t) ? new Oe($f.stripHexPrefix(t),16) : new Oe(t,10);
                if ("number" === e)
                    return new Oe(t);
                if (t.toArray)
                    return t;
                throw new Error("Argument is not a number")
            }
            function ao(t) {
                var e = /^(\w+)\((.*)\)$/.exec(t);
                if (3 !== e.length)
                    throw new Error("Invalid method signature");
                var r = /^(.+)\):\((.+)$/.exec(e[2]);
                if (null !== r && 3 === r.length)
                    return {
                        method: e[1],
                        args: r[1].split(","),
                        retargs: r[2].split(",")
                    };
                var n = e[2].split(",");
                return 1 === n.length && "" === n[0] && (n = []),
                {
                    method: e[1],
                    args: n
                }
            }
            function fo(e, r) {
                var n, i, a, f;
                if ("address" === e)
                    return fo("uint160", io(r));
                if ("bool" === e)
                    return fo("uint8", r ? 1 : 0);
                if ("string" === e)
                    return fo("bytes", t.from(r, "utf8"));
                if (uo(e)) {
                    if (void 0 === r.length)
                        throw new Error("Not an array?");
                    if ("dynamic" !== (n = no(e)) && 0 !== n && r.length > n)
                        throw new Error("Elements exceed array size: " + n);
                    for (f in a = [],
                    e = e.slice(0, e.lastIndexOf("[")),
                    "string" == typeof r && (r = JSON.parse(r)),
                    r)
                        a.push(fo(e, r[f]));
                    if ("dynamic" === n) {
                        var o = fo("uint256", r.length);
                        a.unshift(o)
                    }
                    return t.concat(a)
                }
                if ("bytes" === e)
                    return r = t.from(r),
                    a = t.concat([fo("uint256", r.length), r]),
                    r.length % 32 != 0 && (a = t.concat([a, $f.zeros(32 - r.length % 32)])),
                    a;
                if (e.startsWith("bytes")) {
                    if ((n = eo(e)) < 1 || n > 32)
                        throw new Error("Invalid bytes<N> width: " + n);
                    return $f.setLengthRight(r, 32)
                }
                if (e.startsWith("uint")) {
                    if ((n = eo(e)) % 8 || n < 8 || n > 256)
                        throw new Error("Invalid uint<N> width: " + n);
                    if ((i = io(r)).bitLength() > n)
                        throw new Error("Supplied uint exceeds width: " + n + " vs " + i.bitLength());
                    if (i < 0)
                        throw new Error("Supplied uint is negative");
                    return i.toArrayLike(t, "be", 32)
                }
                if (e.startsWith("int")) {
                    if ((n = eo(e)) % 8 || n < 8 || n > 256)
                        throw new Error("Invalid int<N> width: " + n);
                    if ((i = io(r)).bitLength() > n)
                        throw new Error("Supplied int exceeds width: " + n + " vs " + i.bitLength());
                    return i.toTwos(256).toArrayLike(t, "be", 32)
                }
                if (e.startsWith("ufixed")) {
                    if (n = ro(e),
                    (i = io(r)) < 0)
                        throw new Error("Supplied ufixed is negative");
                    return fo("uint256", i.mul(new Oe(2).pow(new Oe(n[1]))))
                }
                if (e.startsWith("fixed"))
                    return n = ro(e),
                    fo("int256", io(r).mul(new Oe(2).pow(new Oe(n[1]))));
                throw new Error("Unsupported or invalid type: " + e)
            }
            function oo(e, r, n) {
                var i, a, f, o;
                if ("string" == typeof e && (e = so(e)),
                "address" === e.name)
                    return oo(e.rawType, r, n).toArrayLike(t, "be", 20).toString("hex");
                if ("bool" === e.name)
                    return oo(e.rawType, r, n).toString() === new Oe(1).toString();
                if ("string" === e.name) {
                    var s = oo(e.rawType, r, n);
                    return t.from(s, "utf8").toString()
                }
                if (e.isArray) {
                    for (f = [],
                    i = e.size,
                    "dynamic" === e.size && (n = oo("uint256", r, n).toNumber(),
                    i = oo("uint256", r, n).toNumber(),
                    n += 32),
                    o = 0; o < i; o++) {
                        var c = oo(e.subArray, r, n);
                        f.push(c),
                        n += e.subArray.memoryUsage
                    }
                    return f
                }
                if ("bytes" === e.name)
                    return n = oo("uint256", r, n).toNumber(),
                    i = oo("uint256", r, n).toNumber(),
                    r.slice(n + 32, n + 32 + i);
                if (e.name.startsWith("bytes"))
                    return r.slice(n, n + e.size);
                if (e.name.startsWith("uint")) {
                    if ((a = new Oe(r.slice(n, n + 32),16,"be")).bitLength() > e.size)
                        throw new Error("Decoded int exceeds width: " + e.size + " vs " + a.bitLength());
                    return a
                }
                if (e.name.startsWith("int")) {
                    if ((a = new Oe(r.slice(n, n + 32),16,"be").fromTwos(256)).bitLength() > e.size)
                        throw new Error("Decoded uint exceeds width: " + e.size + " vs " + a.bitLength());
                    return a
                }
                if (e.name.startsWith("ufixed")) {
                    if (i = new Oe(2).pow(new Oe(e.size[1])),
                    !(a = oo("uint256", r, n)).mod(i).isZero())
                        throw new Error("Decimals not supported yet");
                    return a.div(i)
                }
                if (e.name.startsWith("fixed")) {
                    if (i = new Oe(2).pow(new Oe(e.size[1])),
                    !(a = oo("int256", r, n)).mod(i).isZero())
                        throw new Error("Decimals not supported yet");
                    return a.div(i)
                }
                throw new Error("Unsupported or invalid type: " + e.name)
            }
            function so(t) {
                var e, r, n;
                if (uo(t)) {
                    e = no(t);
                    var i = t.slice(0, t.lastIndexOf("["));
                    return i = so(i),
                    {
                        isArray: !0,
                        name: t,
                        size: e,
                        memoryUsage: "dynamic" === e ? 32 : i.memoryUsage * e,
                        subArray: i
                    }
                }
                switch (t) {
                case "address":
                    n = "uint160";
                    break;
                case "bool":
                    n = "uint8";
                    break;
                case "string":
                    n = "bytes"
                }
                if (r = {
                    rawType: n,
                    name: t,
                    memoryUsage: 32
                },
                t.startsWith("bytes") && "bytes" !== t || t.startsWith("uint") || t.startsWith("int") ? r.size = eo(t) : (t.startsWith("ufixed") || t.startsWith("fixed")) && (r.size = ro(t)),
                t.startsWith("bytes") && "bytes" !== t && (r.size < 1 || r.size > 32))
                    throw new Error("Invalid bytes<N> width: " + r.size);
                if ((t.startsWith("uint") || t.startsWith("int")) && (r.size % 8 || r.size < 8 || r.size > 256))
                    throw new Error("Invalid int/uint<N> width: " + r.size);
                return r
            }
            function co(t) {
                return "string" === t || "bytes" === t || "dynamic" === no(t)
            }
            function uo(t) {
                return t.lastIndexOf("]") === t.length - 1
            }
            function ho(t, e) {
                return t.startsWith("address") || t.startsWith("bytes") ? "0x" + e.toString("hex") : e.toString()
            }
            Qf.eventID = function(e, r) {
                var n = e + "(" + r.map(to).join(",") + ")";
                return $f.keccak256(t.from(n))
            }
            ,
            Qf.methodID = function(t, e) {
                return Qf.eventID(t, e).slice(0, 4)
            }
            ,
            Qf.rawEncode = function(e, r) {
                var n = []
                  , i = []
                  , a = 0;
                e.forEach((function(t) {
                    if (uo(t)) {
                        var e = no(t);
                        a += "dynamic" !== e ? 32 * e : 32
                    } else
                        a += 32
                }
                ));
                for (var f = 0; f < e.length; f++) {
                    var o = to(e[f])
                      , s = fo(o, r[f]);
                    co(o) ? (n.push(fo("uint256", a)),
                    i.push(s),
                    a += s.length) : n.push(s)
                }
                return t.concat(n.concat(i))
            }
            ,
            Qf.rawDecode = function(e, r) {
                var n = [];
                r = t.from(r);
                for (var i = 0, a = 0; a < e.length; a++) {
                    var f = so(to(e[a]))
                      , o = oo(f, r, i);
                    i += f.memoryUsage,
                    n.push(o)
                }
                return n
            }
            ,
            Qf.simpleEncode = function(e) {
                var r = Array.prototype.slice.call(arguments).slice(1)
                  , n = ao(e);
                if (r.length !== n.args.length)
                    throw new Error("Argument count mismatch");
                return t.concat([Qf.methodID(n.method, n.args), Qf.rawEncode(n.args, r)])
            }
            ,
            Qf.simpleDecode = function(t, e) {
                var r = ao(t);
                if (!r.retargs)
                    throw new Error("No return values in method");
                return Qf.rawDecode(r.retargs, e)
            }
            ,
            Qf.stringify = function(t, e) {
                var r = [];
                for (var n in t) {
                    var i = t[n]
                      , a = e[n];
                    a = /^[^\[]+\[.*\]$/.test(i) ? a.map((function(t) {
                        return ho(i, t)
                    }
                    )).join(", ") : ho(i, a),
                    r.push(a)
                }
                return r
            }
            ,
            Qf.solidityHexValue = function(e, r, n) {
                var i, a;
                if (uo(e)) {
                    var f = e.replace(/\[.*?\]/, "");
                    if (!uo(f)) {
                        var o = no(e);
                        if ("dynamic" !== o && 0 !== o && r.length > o)
                            throw new Error("Elements exceed array size: " + o)
                    }
                    var s = r.map((function(t) {
                        return Qf.solidityHexValue(f, t, 256)
                    }
                    ));
                    return t.concat(s)
                }
                if ("bytes" === e)
                    return r;
                if ("string" === e)
                    return t.from(r, "utf8");
                if ("bool" === e) {
                    n = n || 8;
                    var c = Array(n / 4).join("0");
                    return t.from(r ? c + "1" : c + "0", "hex")
                }
                if ("address" === e) {
                    var u = 20;
                    return n && (u = n / 8),
                    $f.setLengthLeft(r, u)
                }
                if (e.startsWith("bytes")) {
                    if ((i = eo(e)) < 1 || i > 32)
                        throw new Error("Invalid bytes<N> width: " + i);
                    return $f.setLengthRight(r, i)
                }
                if (e.startsWith("uint")) {
                    if ((i = eo(e)) % 8 || i < 8 || i > 256)
                        throw new Error("Invalid uint<N> width: " + i);
                    if ((a = io(r)).bitLength() > i)
                        throw new Error("Supplied uint exceeds width: " + i + " vs " + a.bitLength());
                    return n = n || i,
                    a.toArrayLike(t, "be", n / 8)
                }
                if (e.startsWith("int")) {
                    if ((i = eo(e)) % 8 || i < 8 || i > 256)
                        throw new Error("Invalid int<N> width: " + i);
                    if ((a = io(r)).bitLength() > i)
                        throw new Error("Supplied int exceeds width: " + i + " vs " + a.bitLength());
                    return n = n || i,
                    a.toTwos(i).toArrayLike(t, "be", n / 8)
                }
                throw new Error("Unsupported or invalid type: " + e)
            }
            ,
            Qf.solidityPack = function(e, r) {
                if (e.length !== r.length)
                    throw new Error("Number of types are not matching the values");
                for (var n = [], i = 0; i < e.length; i++) {
                    var a = to(e[i])
                      , f = r[i];
                    n.push(Qf.solidityHexValue(a, f, null))
                }
                return t.concat(n)
            }
            ,
            Qf.soliditySHA3 = function(t, e) {
                return $f.keccak256(Qf.solidityPack(t, e))
            }
            ,
            Qf.soliditySHA256 = function(t, e) {
                return $f.sha256(Qf.solidityPack(t, e))
            }
            ,
            Qf.solidityRIPEMD160 = function(t, e) {
                return $f.ripemd160(Qf.solidityPack(t, e), !0)
            }
            ,
            Qf.fromSerpent = function(t) {
                for (var e, r = [], n = 0; n < t.length; n++) {
                    var i = t[n];
                    if ("s" === i)
                        r.push("bytes");
                    else if ("b" === i) {
                        for (var a = "bytes", f = n + 1; f < t.length && (e = t[f]) >= "0" && e <= "9"; )
                            a += t[f] - "0",
                            f++;
                        n = f - 1,
                        r.push(a)
                    } else if ("i" === i)
                        r.push("int256");
                    else {
                        if ("a" !== i)
                            throw new Error("Unsupported or invalid type: " + i);
                        r.push("int256[]")
                    }
                }
                return r
            }
            ,
            Qf.toSerpent = function(t) {
                for (var e = [], r = 0; r < t.length; r++) {
                    var n = t[r];
                    if ("bytes" === n)
                        e.push("s");
                    else if (n.startsWith("bytes"))
                        e.push("b" + eo(n));
                    else if ("int256" === n)
                        e.push("i");
                    else {
                        if ("int256[]" !== n)
                            throw new Error("Unsupported or invalid type: " + n);
                        e.push("a")
                    }
                }
                return e.join("")
            }
            ;
            var lo = Qf
              , bo = {
                concatSig: function(t, e, r) {
                    var n = Hi.fromSigned(e)
                      , i = Hi.fromSigned(r)
                      , a = Hi.bufferToInt(t)
                      , f = yo(Hi.toUnsigned(n).toString("hex"), 64)
                      , o = yo(Hi.toUnsigned(i).toString("hex"), 64)
                      , s = Hi.stripHexPrefix(Hi.intToHex(a));
                    return Hi.addHexPrefix(f.concat(o, s)).toString("hex")
                },
                normalize: function(t) {
                    if (t) {
                        if ("number" == typeof t) {
                            var e = Hi.toBuffer(t);
                            t = Hi.bufferToHex(e)
                        }
                        if ("string" != typeof t) {
                            var r = "eth-sig-util.normalize() requires hex string or integer input.";
                            throw new Error(r += " received " + typeof t + ": " + t)
                        }
                        return Hi.addHexPrefix(t.toLowerCase())
                    }
                },
                personalSign: function(t, e) {
                    var r = Hi.toBuffer(e.data)
                      , n = Hi.hashPersonalMessage(r)
                      , i = Hi.ecsign(n, t);
                    return Hi.bufferToHex(this.concatSig(i.v, i.r, i.s))
                },
                recoverPersonalSignature: function(t) {
                    var e = _o(t)
                      , r = Hi.publicToAddress(e);
                    return Hi.bufferToHex(r)
                },
                extractPublicKey: function(t) {
                    return "0x" + _o(t).toString("hex")
                },
                typedSignatureHash: function(t) {
                    var e = po(t);
                    return Hi.bufferToHex(e)
                },
                signTypedData: function(t, e) {
                    var r = po(e.data)
                      , n = Hi.ecsign(r, t);
                    return Hi.bufferToHex(this.concatSig(n.v, n.r, n.s))
                },
                recoverTypedSignature: function(t) {
                    var e = vo(po(t.data), t.sig)
                      , r = Hi.publicToAddress(e);
                    return Hi.bufferToHex(r)
                }
            };
            function po(t) {
                var e = new Error("Expect argument to be non-empty array");
                if ("object" != typeof t || !t.length)
                    throw e;
                var r = t.map((function(t) {
                    return "bytes" === t.type ? Hi.toBuffer(t.value) : t.value
                }
                ))
                  , n = t.map((function(t) {
                    return t.type
                }
                ))
                  , i = t.map((function(t) {
                    if (!t.name)
                        throw e;
                    return t.type + " " + t.name
                }
                ));
                return lo.soliditySHA3(["bytes32", "bytes32"], [lo.soliditySHA3(new Array(t.length).fill("string"), i), lo.soliditySHA3(n, r)])
            }
            function vo(t, e) {
                var r = Hi.toBuffer(e)
                  , n = Hi.fromRpcSig(r);
                return Hi.ecrecover(t, n.v, n.r, n.s)
            }
            function _o(t) {
                var e = Hi.toBuffer(t.data);
                return vo(Hi.hashPersonalMessage(e), t.sig)
            }
            function yo(t, e) {
                for (var r = "" + t; r.length < e; )
                    r = "0" + r;
                return r
            }
            var mo = Object(p.g)((function(t, e) {
                var r;
                r = function(t) {
                    setTimeout(t, 0)
                }
                ,
                "undefined" != typeof i && i && "function" == typeof i.nextTick && (r = i.nextTick),
                t.exports = function(t) {
                    var e = {
                        capacity: t || 1,
                        current: 0,
                        queue: [],
                        firstHere: !1,
                        take: function() {
                            if (!1 === e.firstHere) {
                                e.current++,
                                e.firstHere = !0;
                                var t = 1
                            } else
                                t = 0;
                            var r = {
                                n: 1
                            };
                            "function" == typeof arguments[0] ? r.task = arguments[0] : r.n = arguments[0],
                            arguments.length >= 2 && ("function" == typeof arguments[1] ? r.task = arguments[1] : r.n = arguments[1]);
                            var n = r.task;
                            if (r.task = function() {
                                n(e.leave)
                            }
                            ,
                            e.current + r.n - t > e.capacity)
                                return 1 === t && (e.current--,
                                e.firstHere = !1),
                                e.queue.push(r);
                            e.current += r.n - t,
                            r.task(e.leave),
                            1 === t && (e.firstHere = !1)
                        },
                        leave: function(t) {
                            if (t = t || 1,
                            e.current -= t,
                            e.queue.length) {
                                var n = e.queue[0];
                                n.n + e.current > e.capacity || (e.queue.shift(),
                                e.current += n.n,
                                r(n.task))
                            } else if (e.current < 0)
                                throw new Error("leave called too many times.")
                        },
                        available: function(t) {
                            return t = t || 1,
                            e.current + t <= e.capacity
                        }
                    };
                    return e
                }
            }
            ))
              , go = function(t) {
                return function(e, r, n, i) {
                    var a = t[e.method];
                    return void 0 === a ? n() : "function" == typeof a ? a(e, r, n, i) : (r.result = a,
                    void i())
                }
            }
              , wo = Object.prototype.toString
              , Ao = "function" == typeof n ? n : function() {
                var t = [].slice.apply(arguments);
                t.splice(1, 0, 0),
                setTimeout.apply(null, t)
            }
              , Eo = function(t) {
                if (e = t.then,
                "[object Function]" !== wo.call(e))
                    throw new TypeError("Expected a promise");
                var e;
                return function(e) {
                    t.then((function(t) {
                        Ao(e, null, t)
                    }
                    ), (function(t) {
                        Ao(e, t)
                    }
                    ))
                }
            }
              , Io = function(t) {
                return function(e, r, n, i) {
                    var a = null
                      , s = t(e, r, Object(o.a)(f.a.mark((function t() {
                        return f.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return a = new Promise((function(t) {
                                        n((function(e) {
                                            return t(e)
                                        }
                                        ))
                                    }
                                    )),
                                    t.next = 3,
                                    a;
                                case 3:
                                    return t.abrupt("return", void t.sent);
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    ))));
                    Eo(s)((function(t) {
                        a ? Eo(a)((function(e, r) {
                            if (e)
                                return console.error(e),
                                i(e);
                            r(t)
                        }
                        )) : i(t)
                    }
                    ))
                }
            }
              , Mo = function() {
                function t(e) {
                    Object(s.a)(this, t),
                    this.tasks = [],
                    this.count = e
                }
                return Object(c.a)(t, [{
                    key: "sched",
                    value: function() {
                        if (this.count > 0 && this.tasks.length > 0) {
                            this.count--;
                            var t = this.tasks.shift();
                            if (void 0 === t)
                                throw "Unexpected undefined value in tasks list";
                            t()
                        }
                    }
                }, {
                    key: "acquire",
                    value: function() {
                        var t = this;
                        return new Promise((function(e, r) {
                            t.tasks.push((function() {
                                var r = !1;
                                e((function() {
                                    r || (r = !0,
                                    t.count++,
                                    t.sched())
                                }
                                ))
                            }
                            )),
                            i && i.nextTick ? i.nextTick(t.sched.bind(t)) : n(t.sched.bind(t))
                        }
                        ))
                    }
                }, {
                    key: "use",
                    value: function(t) {
                        return this.acquire().then((function(e) {
                            return t().then((function(t) {
                                return e(),
                                t
                            }
                            )).catch((function(t) {
                                throw e(),
                                t
                            }
                            ))
                        }
                        ))
                    }
                }]),
                t
            }()
              , So = {
                Semaphore: Mo,
                Mutex: function(t) {
                    Object(l.a)(r, t);
                    var e = Object(b.a)(r);
                    function r() {
                        return Object(s.a)(this, r),
                        e.call(this, 1)
                    }
                    return r
                }(Mo)
            }
              , ko = function(t) {
                Object(l.a)(r, t);
                var e = Object(b.a)(r);
                function r() {
                    var t;
                    return Object(s.a)(this, r),
                    (t = e.call(this)).updates = [],
                    t
                }
                return Object(c.a)(r, [{
                    key: "initialize",
                    value: function() {
                        var t = Object(o.a)(f.a.mark((function t() {
                            return f.a.wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                    case 0:
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
                    }()
                }, {
                    key: "update",
                    value: function() {
                        var t = Object(o.a)(f.a.mark((function t() {
                            return f.a.wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                    case 0:
                                        throw new Error("BaseFilter - no update method specified");
                                    case 1:
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
                    }()
                }, {
                    key: "addResults",
                    value: function(t) {
                        var e = this;
                        this.updates = this.updates.concat(t),
                        t.forEach((function(t) {
                            return e.emit("update", t)
                        }
                        ))
                    }
                }, {
                    key: "addInitialResults",
                    value: function(t) {}
                }, {
                    key: "getChangesAndClear",
                    value: function() {
                        var t = this.updates;
                        return this.updates = [],
                        t
                    }
                }]),
                r
            }(wa)
              , Lo = function() {
                for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
                    e[r] = arguments[r];
                return jo(e)[0]
            }
              , xo = Oo
              , Po = function(t) {
                return null == t ? t : Co(Oo(t) + 1)
            }
              , To = Co
              , Ro = function(t) {
                for (var e = "0x", r = 0; r < t; r++)
                    e += Bo(),
                    e += Bo();
                return e
            };
            function jo(t) {
                return t.sort((function(t, e) {
                    return "latest" === t || "earliest" === e ? 1 : "latest" === e || "earliest" === t ? -1 : Oo(t) - Oo(e)
                }
                ))
            }
            function Oo(t) {
                return null == t ? t : Number.parseInt(t, 16)
            }
            function Co(t) {
                if (null == t)
                    return t;
                var e = t.toString(16);
                return e.length % 2 && (e = "0" + e),
                "0x" + e
            }
            function Bo() {
                return Math.floor(16 * Math.random()).toString(16)
            }
            var No = xo
              , zo = Po
              , Do = Lo
              , Ko = function(t) {
                return t && !["earliest", "latest", "pending"].includes(t)
            }
              , Vo = function(t) {
                Object(l.a)(r, t);
                var e = Object(b.a)(r);
                function r(t) {
                    var n, i = t.provider, a = t.params;
                    return Object(s.a)(this, r),
                    (n = e.call(this)).type = "log",
                    n.ethQuery = new ta(i),
                    n.params = Object.assign({
                        fromBlock: "latest",
                        toBlock: "latest",
                        address: void 0,
                        topics: []
                    }, a),
                    n.params.address && (Array.isArray(n.params.address) || (n.params.address = [n.params.address]),
                    n.params.address = n.params.address.map((function(t) {
                        return t.toLowerCase()
                    }
                    ))),
                    n
                }
                return Object(c.a)(r, [{
                    key: "initialize",
                    value: function() {
                        var t = Object(o.a)(f.a.mark((function t(e) {
                            var r, n, i, a, o;
                            return f.a.wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                    case 0:
                                        return r = e.currentBlock,
                                        n = this.params.fromBlock,
                                        ["latest", "pending"].includes(n) && (n = r),
                                        "earliest" === n && (n = "0x0"),
                                        this.params.fromBlock = n,
                                        i = Do(this.params.toBlock, r),
                                        a = Object.assign({}, this.params, {
                                            toBlock: i
                                        }),
                                        t.next = 7,
                                        this._fetchLogs(a);
                                    case 7:
                                        o = t.sent,
                                        this.addInitialResults(o);
                                    case 9:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t, this)
                        }
                        )));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "update",
                    value: function() {
                        var t = Object(o.a)(f.a.mark((function t(e) {
                            var r, n, i, a, o, s, c = this;
                            return f.a.wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                    case 0:
                                        return r = e.oldBlock,
                                        n = e.newBlock,
                                        i = n,
                                        a = r ? zo(r) : n,
                                        o = Object.assign({}, this.params, {
                                            fromBlock: a,
                                            toBlock: i
                                        }),
                                        t.next = 6,
                                        this._fetchLogs(o);
                                    case 6:
                                        s = t.sent.filter((function(t) {
                                            return c.matchLog(t)
                                        }
                                        )),
                                        this.addResults(s);
                                    case 8:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t, this)
                        }
                        )));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "_fetchLogs",
                    value: function() {
                        var t = Object(o.a)(f.a.mark((function t(e) {
                            var r = this;
                            return f.a.wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2,
                                        $i((function(t) {
                                            return r.ethQuery.getLogs(e, t)
                                        }
                                        ))();
                                    case 2:
                                        return t.abrupt("return", t.sent);
                                    case 3:
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
                }, {
                    key: "matchLog",
                    value: function(t) {
                        if (No(this.params.fromBlock) >= No(t.blockNumber))
                            return !1;
                        if (Ko(this.params.toBlock) && No(this.params.toBlock) <= No(t.blockNumber))
                            return !1;
                        var e = t.address && t.address.toLowerCase();
                        return !(this.params.address && e && !this.params.address.includes(e)) && this.params.topics.every((function(e, r) {
                            var n = t.topics[r];
                            if (!n)
                                return !1;
                            n = n.toLowerCase();
                            var i = Array.isArray(e) ? e : [e];
                            return !!i.includes(null) || (i = i.map((function(t) {
                                return t.toLowerCase()
                            }
                            ))).includes(n)
                        }
                        ))
                    }
                }]),
                r
            }(function(t) {
                Object(l.a)(r, t);
                var e = Object(b.a)(r);
                function r() {
                    var t;
                    return Object(s.a)(this, r),
                    (t = e.call(this)).allResults = [],
                    t
                }
                return Object(c.a)(r, [{
                    key: "update",
                    value: function() {
                        var t = Object(o.a)(f.a.mark((function t() {
                            return f.a.wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                    case 0:
                                        throw new Error("BaseFilterWithHistory - no update method specified");
                                    case 1:
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
                    }()
                }, {
                    key: "addResults",
                    value: function(t) {
                        this.allResults = this.allResults.concat(t),
                        Object(d.a)(Object(h.a)(r.prototype), "addResults", this).call(this, t)
                    }
                }, {
                    key: "addInitialResults",
                    value: function(t) {
                        this.allResults = this.allResults.concat(t),
                        Object(d.a)(Object(h.a)(r.prototype), "addInitialResults", this).call(this, t)
                    }
                }, {
                    key: "getAllResults",
                    value: function() {
                        return this.allResults
                    }
                }]),
                r
            }(ko))
              , Uo = function() {
                var t = Object(o.a)(f.a.mark((function t(e) {
                    var r, n, i, a, o, s;
                    return f.a.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return r = e.provider,
                                n = e.fromBlock,
                                i = e.toBlock,
                                n || (n = i),
                                a = qo(n),
                                o = qo(i),
                                s = Array(o - a + 1).fill().map((function(t, e) {
                                    return a + e
                                }
                                )).map(Yo),
                                t.next = 5,
                                Promise.all(s.map((function(t) {
                                    return function(t, e, r) {
                                        return new Promise((function(e, n) {
                                            t.sendAsync({
                                                id: 1,
                                                jsonrpc: "2.0",
                                                method: "eth_getBlockByNumber",
                                                params: r
                                            }, (function(t, r) {
                                                if (t)
                                                    return n(t);
                                                e(r.result)
                                            }
                                            ))
                                        }
                                        ))
                                    }(r, 0, [t, !1])
                                }
                                )));
                            case 5:
                                return t.abrupt("return", t.sent);
                            case 6:
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
            }();
            function qo(t) {
                return null == t ? t : Number.parseInt(t, 16)
            }
            function Yo(t) {
                return null == t ? t : "0x" + t.toString(16)
            }
            var Fo = Po
              , Ho = function(t) {
                Object(l.a)(r, t);
                var e = Object(b.a)(r);
                function r(t) {
                    var n, i = t.provider;
                    t.params;
                    return Object(s.a)(this, r),
                    (n = e.call(this)).type = "block",
                    n.provider = i,
                    n
                }
                return Object(c.a)(r, [{
                    key: "update",
                    value: function() {
                        var t = Object(o.a)(f.a.mark((function t(e) {
                            var r, n, i, a, o;
                            return f.a.wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                    case 0:
                                        return r = e.oldBlock,
                                        n = e.newBlock,
                                        i = n,
                                        a = Fo(r),
                                        t.next = 5,
                                        Uo({
                                            provider: this.provider,
                                            fromBlock: a,
                                            toBlock: i
                                        });
                                    case 5:
                                        o = t.sent.map((function(t) {
                                            return t.hash
                                        }
                                        )),
                                        this.addResults(o);
                                    case 7:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t, this)
                        }
                        )));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()
                }]),
                r
            }(ko)
              , Go = Object(p.g)((function(t, e) {
                var r = "[object Arguments]"
                  , n = "[object Map]"
                  , i = "[object Object]"
                  , a = "[object Set]"
                  , f = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
                  , o = /^\w*$/
                  , s = /^\./
                  , c = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g
                  , u = /\\(\\)?/g
                  , d = /^\[object .+?Constructor\]$/
                  , h = /^(?:0|[1-9]\d*)$/
                  , l = {};
                l["[object Float32Array]"] = l["[object Float64Array]"] = l["[object Int8Array]"] = l["[object Int16Array]"] = l["[object Int32Array]"] = l["[object Uint8Array]"] = l["[object Uint8ClampedArray]"] = l["[object Uint16Array]"] = l["[object Uint32Array]"] = !0,
                l[r] = l["[object Array]"] = l["[object ArrayBuffer]"] = l["[object Boolean]"] = l["[object DataView]"] = l["[object Date]"] = l["[object Error]"] = l["[object Function]"] = l[n] = l["[object Number]"] = l[i] = l["[object RegExp]"] = l[a] = l["[object String]"] = l["[object WeakMap]"] = !1;
                var b = "object" == typeof p.i && p.i && p.i.Object === Object && p.i
                  , v = "object" == typeof self && self && self.Object === Object && self
                  , _ = b || v || Function("return this")()
                  , y = e && !e.nodeType && e
                  , m = y && t && !t.nodeType && t
                  , g = m && m.exports === y && b.process
                  , w = function() {
                    try {
                        return g && g.binding("util")
                    } catch (t) {}
                }()
                  , A = w && w.isTypedArray;
                function E(t, e) {
                    for (var r = -1, n = t ? t.length : 0, i = Array(n); ++r < n; )
                        i[r] = e(t[r], r, t);
                    return i
                }
                function I(t, e) {
                    for (var r = -1, n = e.length, i = t.length; ++r < n; )
                        t[i + r] = e[r];
                    return t
                }
                function M(t, e) {
                    for (var r = -1, n = t ? t.length : 0; ++r < n; )
                        if (e(t[r], r, t))
                            return !0;
                    return !1
                }
                function S(t) {
                    var e = !1;
                    if (null != t && "function" != typeof t.toString)
                        try {
                            e = !!(t + "")
                        } catch (t) {}
                    return e
                }
                function k(t) {
                    var e = -1
                      , r = Array(t.size);
                    return t.forEach((function(t, n) {
                        r[++e] = [n, t]
                    }
                    )),
                    r
                }
                function L(t) {
                    var e = -1
                      , r = Array(t.size);
                    return t.forEach((function(t) {
                        r[++e] = t
                    }
                    )),
                    r
                }
                var x, P, T, R = Array.prototype, j = Function.prototype, O = Object.prototype, C = _["__core-js_shared__"], B = (x = /[^.]+$/.exec(C && C.keys && C.keys.IE_PROTO || "")) ? "Symbol(src)_1." + x : "", N = j.toString, z = O.hasOwnProperty, D = O.toString, K = RegExp("^" + N.call(z).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), V = _.Symbol, U = _.Uint8Array, q = O.propertyIsEnumerable, Y = R.splice, F = V ? V.isConcatSpreadable : void 0, H = (P = Object.keys,
                T = Object,
                function(t) {
                    return P(T(t))
                }
                ), G = Et(_, "DataView"), W = Et(_, "Map"), Z = Et(_, "Promise"), J = Et(_, "Set"), X = Et(_, "WeakMap"), $ = Et(Object, "create"), Q = Rt(G), tt = Rt(W), et = Rt(Z), rt = Rt(J), nt = Rt(X), it = V ? V.prototype : void 0, at = it ? it.valueOf : void 0, ft = it ? it.toString : void 0;
                function ot(t) {
                    var e = -1
                      , r = t ? t.length : 0;
                    for (this.clear(); ++e < r; ) {
                        var n = t[e];
                        this.set(n[0], n[1])
                    }
                }
                function st(t) {
                    var e = -1
                      , r = t ? t.length : 0;
                    for (this.clear(); ++e < r; ) {
                        var n = t[e];
                        this.set(n[0], n[1])
                    }
                }
                function ct(t) {
                    var e = -1
                      , r = t ? t.length : 0;
                    for (this.clear(); ++e < r; ) {
                        var n = t[e];
                        this.set(n[0], n[1])
                    }
                }
                function ut(t) {
                    var e = -1
                      , r = t ? t.length : 0;
                    for (this.__data__ = new ct; ++e < r; )
                        this.add(t[e])
                }
                function dt(t) {
                    this.__data__ = new st(t)
                }
                function ht(t, e) {
                    for (var r = t.length; r--; )
                        if (Ot(t[r][0], e))
                            return r;
                    return -1
                }
                ot.prototype.clear = function() {
                    this.__data__ = $ ? $(null) : {}
                }
                ,
                ot.prototype.delete = function(t) {
                    return this.has(t) && delete this.__data__[t]
                }
                ,
                ot.prototype.get = function(t) {
                    var e = this.__data__;
                    if ($) {
                        var r = e[t];
                        return "__lodash_hash_undefined__" === r ? void 0 : r
                    }
                    return z.call(e, t) ? e[t] : void 0
                }
                ,
                ot.prototype.has = function(t) {
                    var e = this.__data__;
                    return $ ? void 0 !== e[t] : z.call(e, t)
                }
                ,
                ot.prototype.set = function(t, e) {
                    return this.__data__[t] = $ && void 0 === e ? "__lodash_hash_undefined__" : e,
                    this
                }
                ,
                st.prototype.clear = function() {
                    this.__data__ = []
                }
                ,
                st.prototype.delete = function(t) {
                    var e = this.__data__
                      , r = ht(e, t);
                    return !(r < 0) && (r == e.length - 1 ? e.pop() : Y.call(e, r, 1),
                    !0)
                }
                ,
                st.prototype.get = function(t) {
                    var e = this.__data__
                      , r = ht(e, t);
                    return r < 0 ? void 0 : e[r][1]
                }
                ,
                st.prototype.has = function(t) {
                    return ht(this.__data__, t) > -1
                }
                ,
                st.prototype.set = function(t, e) {
                    var r = this.__data__
                      , n = ht(r, t);
                    return n < 0 ? r.push([t, e]) : r[n][1] = e,
                    this
                }
                ,
                ct.prototype.clear = function() {
                    this.__data__ = {
                        hash: new ot,
                        map: new (W || st),
                        string: new ot
                    }
                }
                ,
                ct.prototype.delete = function(t) {
                    return At(this, t).delete(t)
                }
                ,
                ct.prototype.get = function(t) {
                    return At(this, t).get(t)
                }
                ,
                ct.prototype.has = function(t) {
                    return At(this, t).has(t)
                }
                ,
                ct.prototype.set = function(t, e) {
                    return At(this, t).set(t, e),
                    this
                }
                ,
                ut.prototype.add = ut.prototype.push = function(t) {
                    return this.__data__.set(t, "__lodash_hash_undefined__"),
                    this
                }
                ,
                ut.prototype.has = function(t) {
                    return this.__data__.has(t)
                }
                ,
                dt.prototype.clear = function() {
                    this.__data__ = new st
                }
                ,
                dt.prototype.delete = function(t) {
                    return this.__data__.delete(t)
                }
                ,
                dt.prototype.get = function(t) {
                    return this.__data__.get(t)
                }
                ,
                dt.prototype.has = function(t) {
                    return this.__data__.has(t)
                }
                ,
                dt.prototype.set = function(t, e) {
                    var r = this.__data__;
                    if (r instanceof st) {
                        var n = r.__data__;
                        if (!W || n.length < 199)
                            return n.push([t, e]),
                            this;
                        r = this.__data__ = new ct(n)
                    }
                    return r.set(t, e),
                    this
                }
                ;
                var lt, bt = (lt = function(t, e) {
                    return t && pt(t, e, Yt)
                }
                ,
                function(t, e) {
                    if (null == t)
                        return t;
                    if (!Nt(t))
                        return lt(t, e);
                    for (var r = t.length, n = -1, i = Object(t); ++n < r && !1 !== e(i[n], n, i); )
                        ;
                    return t
                }
                ), pt = function(t, e, r) {
                    for (var n = -1, i = Object(t), a = r(t), f = a.length; f--; ) {
                        var o = a[++n];
                        if (!1 === e(i[o], o, i))
                            break
                    }
                    return t
                };
                function vt(t, e) {
                    for (var r = 0, n = (e = kt(e, t) ? [e] : gt(e)).length; null != t && r < n; )
                        t = t[Tt(e[r++])];
                    return r && r == n ? t : void 0
                }
                function _t(t, e) {
                    return null != t && e in Object(t)
                }
                function yt(t, e, f, o, s) {
                    return t === e || (null == t || null == e || !Kt(t) && !Vt(e) ? t != t && e != e : function(t, e, f, o, s, c) {
                        var u = Bt(t)
                          , d = Bt(e)
                          , h = "[object Array]"
                          , l = "[object Array]";
                        u || (h = (h = It(t)) == r ? i : h),
                        d || (l = (l = It(e)) == r ? i : l);
                        var b = h == i && !S(t)
                          , p = l == i && !S(e)
                          , v = h == l;
                        if (v && !b)
                            return c || (c = new dt),
                            u || qt(t) ? wt(t, e, f, o, s, c) : function(t, e, r, i, f, o, s) {
                                switch (r) {
                                case "[object DataView]":
                                    if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
                                        return !1;
                                    t = t.buffer,
                                    e = e.buffer;
                                case "[object ArrayBuffer]":
                                    return !(t.byteLength != e.byteLength || !i(new U(t), new U(e)));
                                case "[object Boolean]":
                                case "[object Date]":
                                case "[object Number]":
                                    return Ot(+t, +e);
                                case "[object Error]":
                                    return t.name == e.name && t.message == e.message;
                                case "[object RegExp]":
                                case "[object String]":
                                    return t == e + "";
                                case n:
                                    var c = k;
                                case a:
                                    var u = 2 & o;
                                    if (c || (c = L),
                                    t.size != e.size && !u)
                                        return !1;
                                    var d = s.get(t);
                                    if (d)
                                        return d == e;
                                    o |= 1,
                                    s.set(t, e);
                                    var h = wt(c(t), c(e), i, f, o, s);
                                    return s.delete(t),
                                    h;
                                case "[object Symbol]":
                                    if (at)
                                        return at.call(t) == at.call(e)
                                }
                                return !1
                            }(t, e, h, f, o, s, c);
                        if (!(2 & s)) {
                            var _ = b && z.call(t, "__wrapped__")
                              , y = p && z.call(e, "__wrapped__");
                            if (_ || y) {
                                var m = _ ? t.value() : t
                                  , g = y ? e.value() : e;
                                return c || (c = new dt),
                                f(m, g, o, s, c)
                            }
                        }
                        return !!v && (c || (c = new dt),
                        function(t, e, r, n, i, a) {
                            var f = 2 & i
                              , o = Yt(t)
                              , s = o.length;
                            if (s != Yt(e).length && !f)
                                return !1;
                            for (var c = s; c--; ) {
                                var u = o[c];
                                if (!(f ? u in e : z.call(e, u)))
                                    return !1
                            }
                            var d = a.get(t);
                            if (d && a.get(e))
                                return d == e;
                            var h = !0;
                            a.set(t, e),
                            a.set(e, t);
                            for (var l = f; ++c < s; ) {
                                var b = t[u = o[c]]
                                  , p = e[u];
                                if (n)
                                    var v = f ? n(p, b, u, e, t, a) : n(b, p, u, t, e, a);
                                if (!(void 0 === v ? b === p || r(b, p, n, i, a) : v)) {
                                    h = !1;
                                    break
                                }
                                l || (l = "constructor" == u)
                            }
                            if (h && !l) {
                                var _ = t.constructor
                                  , y = e.constructor;
                                _ == y || !("constructor"in t) || !("constructor"in e) || "function" == typeof _ && _ instanceof _ && "function" == typeof y && y instanceof y || (h = !1)
                            }
                            return a.delete(t),
                            a.delete(e),
                            h
                        }(t, e, f, o, s, c))
                    }(t, e, yt, f, o, s))
                }
                function mt(t, e) {
                    var r = -1
                      , n = Nt(t) ? Array(t.length) : [];
                    return bt(t, (function(t, i, a) {
                        n[++r] = e(t, i, a)
                    }
                    )),
                    n
                }
                function gt(t) {
                    return Bt(t) ? t : Pt(t)
                }
                function wt(t, e, r, n, i, a) {
                    var f = 2 & i
                      , o = t.length
                      , s = e.length;
                    if (o != s && !(f && s > o))
                        return !1;
                    var c = a.get(t);
                    if (c && a.get(e))
                        return c == e;
                    var u = -1
                      , d = !0
                      , h = 1 & i ? new ut : void 0;
                    for (a.set(t, e),
                    a.set(e, t); ++u < o; ) {
                        var l = t[u]
                          , b = e[u];
                        if (n)
                            var p = f ? n(b, l, u, e, t, a) : n(l, b, u, t, e, a);
                        if (void 0 !== p) {
                            if (p)
                                continue;
                            d = !1;
                            break
                        }
                        if (h) {
                            if (!M(e, (function(t, e) {
                                if (!h.has(e) && (l === t || r(l, t, n, i, a)))
                                    return h.add(e)
                            }
                            ))) {
                                d = !1;
                                break
                            }
                        } else if (l !== b && !r(l, b, n, i, a)) {
                            d = !1;
                            break
                        }
                    }
                    return a.delete(t),
                    a.delete(e),
                    d
                }
                function At(t, e) {
                    var r, n, i = t.__data__;
                    return ("string" == (n = typeof (r = e)) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== r : null === r) ? i["string" == typeof e ? "string" : "hash"] : i.map
                }
                function Et(t, e) {
                    var r = function(t, e) {
                        return null == t ? void 0 : t[e]
                    }(t, e);
                    return function(t) {
                        return !(!Kt(t) || function(t) {
                            return !!B && B in t
                        }(t)) && (zt(t) || S(t) ? K : d).test(Rt(t))
                    }(r) ? r : void 0
                }
                var It = function(t) {
                    return D.call(t)
                };
                function Mt(t) {
                    return Bt(t) || Ct(t) || !!(F && t && t[F])
                }
                function St(t, e) {
                    return !!(e = null == e ? 9007199254740991 : e) && ("number" == typeof t || h.test(t)) && t > -1 && t % 1 == 0 && t < e
                }
                function kt(t, e) {
                    if (Bt(t))
                        return !1;
                    var r = typeof t;
                    return !("number" != r && "symbol" != r && "boolean" != r && null != t && !Ut(t)) || o.test(t) || !f.test(t) || null != e && t in Object(e)
                }
                function Lt(t) {
                    return t == t && !Kt(t)
                }
                function xt(t, e) {
                    return function(r) {
                        return null != r && r[t] === e && (void 0 !== e || t in Object(r))
                    }
                }
                (G && "[object DataView]" != It(new G(new ArrayBuffer(1))) || W && It(new W) != n || Z && "[object Promise]" != It(Z.resolve()) || J && It(new J) != a || X && "[object WeakMap]" != It(new X)) && (It = function(t) {
                    var e = D.call(t)
                      , r = e == i ? t.constructor : void 0
                      , f = r ? Rt(r) : void 0;
                    if (f)
                        switch (f) {
                        case Q:
                            return "[object DataView]";
                        case tt:
                            return n;
                        case et:
                            return "[object Promise]";
                        case rt:
                            return a;
                        case nt:
                            return "[object WeakMap]"
                        }
                    return e
                }
                );
                var Pt = jt((function(t) {
                    var e;
                    t = null == (e = t) ? "" : function(t) {
                        if ("string" == typeof t)
                            return t;
                        if (Ut(t))
                            return ft ? ft.call(t) : "";
                        var e = t + "";
                        return "0" == e && 1 / t == -1 / 0 ? "-0" : e
                    }(e);
                    var r = [];
                    return s.test(t) && r.push(""),
                    t.replace(c, (function(t, e, n, i) {
                        r.push(n ? i.replace(u, "$1") : e || t)
                    }
                    )),
                    r
                }
                ));
                function Tt(t) {
                    if ("string" == typeof t || Ut(t))
                        return t;
                    var e = t + "";
                    return "0" == e && 1 / t == -1 / 0 ? "-0" : e
                }
                function Rt(t) {
                    if (null != t) {
                        try {
                            return N.call(t)
                        } catch (t) {}
                        try {
                            return t + ""
                        } catch (t) {}
                    }
                    return ""
                }
                function jt(t, e) {
                    if ("function" != typeof t || e && "function" != typeof e)
                        throw new TypeError("Expected a function");
                    var r = function r() {
                        var n = arguments
                          , i = e ? e.apply(this, n) : n[0]
                          , a = r.cache;
                        if (a.has(i))
                            return a.get(i);
                        var f = t.apply(this, n);
                        return r.cache = a.set(i, f),
                        f
                    };
                    return r.cache = new (jt.Cache || ct),
                    r
                }
                function Ot(t, e) {
                    return t === e || t != t && e != e
                }
                function Ct(t) {
                    return function(t) {
                        return Vt(t) && Nt(t)
                    }(t) && z.call(t, "callee") && (!q.call(t, "callee") || D.call(t) == r)
                }
                jt.Cache = ct;
                var Bt = Array.isArray;
                function Nt(t) {
                    return null != t && Dt(t.length) && !zt(t)
                }
                function zt(t) {
                    var e = Kt(t) ? D.call(t) : "";
                    return "[object Function]" == e || "[object GeneratorFunction]" == e
                }
                function Dt(t) {
                    return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
                }
                function Kt(t) {
                    var e = typeof t;
                    return !!t && ("object" == e || "function" == e)
                }
                function Vt(t) {
                    return !!t && "object" == typeof t
                }
                function Ut(t) {
                    return "symbol" == typeof t || Vt(t) && "[object Symbol]" == D.call(t)
                }
                var qt = A ? function(t) {
                    return function(e) {
                        return t(e)
                    }
                }(A) : function(t) {
                    return Vt(t) && Dt(t.length) && !!l[D.call(t)]
                }
                ;
                function Yt(t) {
                    return Nt(t) ? function(t, e) {
                        var r = Bt(t) || Ct(t) ? function(t, e) {
                            for (var r = -1, n = Array(t); ++r < t; )
                                n[r] = e(r);
                            return n
                        }(t.length, String) : []
                          , n = r.length
                          , i = !!n;
                        for (var a in t)
                            !e && !z.call(t, a) || i && ("length" == a || St(a, n)) || r.push(a);
                        return r
                    }(t) : function(t) {
                        if (r = (e = t) && e.constructor,
                        e !== ("function" == typeof r && r.prototype || O))
                            return H(t);
                        var e, r, n = [];
                        for (var i in Object(t))
                            z.call(t, i) && "constructor" != i && n.push(i);
                        return n
                    }(t)
                }
                function Ft(t) {
                    return t
                }
                t.exports = function(t, e) {
                    return function t(e, r, n, i, a) {
                        var f = -1
                          , o = e.length;
                        for (n || (n = Mt),
                        a || (a = []); ++f < o; ) {
                            var s = e[f];
                            r > 0 && n(s) ? r > 1 ? t(s, r - 1, n, i, a) : I(a, s) : i || (a[a.length] = s)
                        }
                        return a
                    }(function(t, e) {
                        return (Bt(t) ? E : mt)(t, function(t) {
                            return "function" == typeof t ? t : null == t ? Ft : "object" == typeof t ? Bt(t) ? function(t, e) {
                                return kt(t) && Lt(e) ? xt(Tt(t), e) : function(r) {
                                    var n = function(t, e, r) {
                                        var n = null == t ? void 0 : vt(t, e);
                                        return void 0 === n ? void 0 : n
                                    }(r, t);
                                    return void 0 === n && n === e ? function(t, e) {
                                        return null != t && function(t, e, r) {
                                            for (var n, i = -1, a = (e = kt(e, t) ? [e] : gt(e)).length; ++i < a; ) {
                                                var f = Tt(e[i]);
                                                if (!(n = null != t && r(t, f)))
                                                    break;
                                                t = t[f]
                                            }
                                            return n || !!(a = t ? t.length : 0) && Dt(a) && St(f, a) && (Bt(t) || Ct(t))
                                        }(t, e, _t)
                                    }(r, t) : yt(e, n, void 0, 3)
                                }
                            }(t[0], t[1]) : function(t) {
                                var e = function(t) {
                                    for (var e = Yt(t), r = e.length; r--; ) {
                                        var n = e[r]
                                          , i = t[n];
                                        e[r] = [n, i, Lt(i)]
                                    }
                                    return e
                                }(t);
                                return 1 == e.length && e[0][2] ? xt(e[0][0], e[0][1]) : function(r) {
                                    return r === t || function(t, e, r, n) {
                                        var i = r.length
                                          , a = i;
                                        if (null == t)
                                            return !a;
                                        for (t = Object(t); i--; ) {
                                            var f = r[i];
                                            if (f[2] ? f[1] !== t[f[0]] : !(f[0]in t))
                                                return !1
                                        }
                                        for (; ++i < a; ) {
                                            var o = (f = r[i])[0]
                                              , s = t[o]
                                              , c = f[1];
                                            if (f[2]) {
                                                if (void 0 === s && !(o in t))
                                                    return !1
                                            } else {
                                                var u, d = new dt;
                                                if (!(void 0 === u ? yt(c, s, n, 3, d) : u))
                                                    return !1
                                            }
                                        }
                                        return !0
                                    }(r, 0, e)
                                }
                            }(t) : kt(e = t) ? function(t) {
                                return function(e) {
                                    return null == e ? void 0 : e[t]
                                }
                            }(Tt(e)) : function(t) {
                                return function(e) {
                                    return vt(e, t)
                                }
                            }(e);
                            var e
                        }(e))
                    }(t, e), 1)
                }
            }
            ))
              , Wo = Po
              , Zo = function(t) {
                Object(l.a)(r, t);
                var e = Object(b.a)(r);
                function r(t) {
                    var n, i = t.provider;
                    return Object(s.a)(this, r),
                    (n = e.call(this)).type = "tx",
                    n.provider = i,
                    n
                }
                return Object(c.a)(r, [{
                    key: "update",
                    value: function() {
                        var t = Object(o.a)(f.a.mark((function t(e) {
                            var r, n, i, a, o;
                            return f.a.wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                    case 0:
                                        return r = e.oldBlock,
                                        n = r,
                                        i = Wo(r),
                                        t.next = 5,
                                        Uo({
                                            provider: this.provider,
                                            fromBlock: i,
                                            toBlock: n
                                        });
                                    case 5:
                                        a = t.sent,
                                        o = Go(a, (function(t) {
                                            return t.transactions
                                        }
                                        )),
                                        this.addResults(o);
                                    case 8:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t, this)
                        }
                        )));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()
                }]),
                r
            }(ko)
              , Jo = So.Mutex
              , Xo = To
              , $o = xo
              , Qo = function(t) {
                var e = t.blockTracker
                  , r = t.provider
                  , n = 0
                  , i = {}
                  , a = new Jo
                  , s = function(t) {
                    var e = t.mutex;
                    return function(t) {
                        return function() {
                            var r = Object(o.a)(f.a.mark((function r(n, i, a, o) {
                                return f.a.wrap((function(r) {
                                    for (; ; )
                                        switch (r.prev = r.next) {
                                        case 0:
                                            return r.next = 2,
                                            e.acquire();
                                        case 2:
                                            r.t0 = r.sent,
                                            (0,
                                            r.t0)(),
                                            t(n, i, a, o);
                                        case 5:
                                        case "end":
                                            return r.stop()
                                        }
                                }
                                ), r)
                            }
                            )));
                            return function(t, e, n, i) {
                                return r.apply(this, arguments)
                            }
                        }()
                    }
                }({
                    mutex: a
                })
                  , c = go({
                    eth_newFilter: s(ts(d)),
                    eth_newBlockFilter: s(ts(l)),
                    eth_newPendingTransactionFilter: s(ts(p)),
                    eth_uninstallFilter: s(es(w)),
                    eth_getFilterChanges: s(es(_)),
                    eth_getFilterLogs: s(es(m))
                })
                  , u = function() {
                    var t = Object(o.a)(f.a.mark((function t(e) {
                        var r, n, s;
                        return f.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (r = e.oldBlock,
                                    n = e.newBlock,
                                    0 !== i.length) {
                                        t.next = 3;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 3:
                                    return t.next = 5,
                                    a.acquire();
                                case 5:
                                    return s = t.sent,
                                    t.prev = 6,
                                    t.next = 9,
                                    Promise.all(rs(i).map(function() {
                                        var t = Object(o.a)(f.a.mark((function t(e) {
                                            return f.a.wrap((function(t) {
                                                for (; ; )
                                                    switch (t.prev = t.next) {
                                                    case 0:
                                                        return t.prev = 0,
                                                        t.next = 3,
                                                        e.update({
                                                            oldBlock: r,
                                                            newBlock: n
                                                        });
                                                    case 3:
                                                        t.next = 8;
                                                        break;
                                                    case 5:
                                                        t.prev = 5,
                                                        t.t0 = t.catch(0),
                                                        console.error(t.t0);
                                                    case 8:
                                                    case "end":
                                                        return t.stop()
                                                    }
                                            }
                                            ), t, null, [[0, 5]])
                                        }
                                        )));
                                        return function(e) {
                                            return t.apply(this, arguments)
                                        }
                                    }()));
                                case 9:
                                    t.next = 14;
                                    break;
                                case 11:
                                    t.prev = 11,
                                    t.t0 = t.catch(6),
                                    console.error(t.t0);
                                case 14:
                                    s();
                                case 15:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, null, [[6, 11]])
                    }
                    )));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }();
                return c.newLogFilter = d,
                c.newBlockFilter = l,
                c.newPendingTransactionFilter = p,
                c.uninstallFilter = w,
                c.getFilterChanges = _,
                c.getFilterLogs = m,
                c.destroy = function() {
                    Object(o.a)(f.a.mark((function t() {
                        var e;
                        return f.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    e = rs(i).length,
                                    i = {},
                                    M({
                                        prevFilterCount: e,
                                        newFilterCount: 0
                                    });
                                case 2:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                }
                ,
                c;
                function d(t) {
                    return h.apply(this, arguments)
                }
                function h() {
                    return (h = Object(o.a)(f.a.mark((function t(e) {
                        var n;
                        return f.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = new Vo({
                                        provider: r,
                                        params: e
                                    }),
                                    t.next = 3,
                                    E(n);
                                case 3:
                                    return t.abrupt("return", n);
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))).apply(this, arguments)
                }
                function l() {
                    return b.apply(this, arguments)
                }
                function b() {
                    return (b = Object(o.a)(f.a.mark((function t() {
                        var e;
                        return f.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return e = new Ho({
                                        provider: r
                                    }),
                                    t.next = 3,
                                    E(e);
                                case 3:
                                    return t.abrupt("return", e);
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))).apply(this, arguments)
                }
                function p() {
                    return v.apply(this, arguments)
                }
                function v() {
                    return (v = Object(o.a)(f.a.mark((function t() {
                        var e;
                        return f.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return e = new Zo({
                                        provider: r
                                    }),
                                    t.next = 3,
                                    E(e);
                                case 3:
                                    return t.abrupt("return", e);
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))).apply(this, arguments)
                }
                function _(t) {
                    return y.apply(this, arguments)
                }
                function y() {
                    return (y = Object(o.a)(f.a.mark((function t(e) {
                        var r, n;
                        return f.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (r = $o(e),
                                    n = i[r]) {
                                        t.next = 3;
                                        break
                                    }
                                    throw new Error('No filter for index "'.concat(r, '"'));
                                case 3:
                                    return t.abrupt("return", n.getChangesAndClear());
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))).apply(this, arguments)
                }
                function m(t) {
                    return g.apply(this, arguments)
                }
                function g() {
                    return (g = Object(o.a)(f.a.mark((function t(e) {
                        var r, n;
                        return f.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (r = $o(e),
                                    n = i[r]) {
                                        t.next = 3;
                                        break
                                    }
                                    throw new Error('No filter for index "'.concat(r, '"'));
                                case 3:
                                    return t.abrupt("return", ("log" === n.type ? results = n.getAllResults() : results = [],
                                    results));
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))).apply(this, arguments)
                }
                function w(t) {
                    return A.apply(this, arguments)
                }
                function A() {
                    return (A = Object(o.a)(f.a.mark((function t(e) {
                        var r, n, a;
                        return f.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (r = $o(e),
                                    n = i[r],
                                    a = Boolean(n),
                                    t.t0 = a,
                                    !t.t0) {
                                        t.next = 5;
                                        break
                                    }
                                    return t.next = 5,
                                    function() {
                                        var t = Object(o.a)(f.a.mark((function t(e) {
                                            var r, n;
                                            return f.a.wrap((function(t) {
                                                for (; ; )
                                                    switch (t.prev = t.next) {
                                                    case 0:
                                                        r = rs(i).length,
                                                        delete i[e],
                                                        n = rs(i).length,
                                                        M({
                                                            prevFilterCount: r,
                                                            newFilterCount: n
                                                        });
                                                    case 4:
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
                                    }()(r);
                                case 5:
                                    return t.abrupt("return", a);
                                case 6:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))).apply(this, arguments)
                }
                function E(t) {
                    return I.apply(this, arguments)
                }
                function I() {
                    return (I = Object(o.a)(f.a.mark((function t(r) {
                        var a, o;
                        return f.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return a = rs(i).length,
                                    t.next = 3,
                                    e.getLatestBlock();
                                case 3:
                                    return o = t.sent,
                                    t.next = 6,
                                    r.initialize({
                                        currentBlock: o
                                    });
                                case 6:
                                    return n++,
                                    i[n] = r,
                                    r.id = n,
                                    r.idHex = Xo(n),
                                    M({
                                        prevFilterCount: a,
                                        newFilterCount: rs(i).length
                                    }),
                                    t.abrupt("return", n);
                                case 12:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))).apply(this, arguments)
                }
                function M(t) {
                    var r = t.prevFilterCount
                      , n = t.newFilterCount;
                    0 === r && n > 0 ? e.on("sync", u) : r > 0 && 0 === n && e.removeListener("sync", u)
                }
            };
            function ts(t) {
                return es(Object(o.a)(f.a.mark((function e() {
                    var r, n = arguments;
                    return f.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                t.apply(void 0, n);
                            case 2:
                                return r = e.sent,
                                e.abrupt("return", Xo(r.id));
                            case 4:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))))
            }
            function es(t) {
                return Io(function() {
                    var e = Object(o.a)(f.a.mark((function e(r, n) {
                        var i;
                        return f.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    t.apply(null, r.params);
                                case 2:
                                    i = e.sent,
                                    n.result = i;
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }())
            }
            function rs(t, e) {
                var r = [];
                for (var n in t)
                    r.push(t[n]);
                return r
            }
            var ns = Ro
              , is = Po
              , as = function(t) {
                var e = t.blockTracker
                  , r = t.provider
                  , n = {}
                  , i = Qo({
                    blockTracker: e,
                    provider: r
                })
                  , a = !1
                  , s = new wa
                  , c = go({
                    eth_subscribe: Io(function() {
                        var t = Object(o.a)(f.a.mark((function t(s, c) {
                            var d, h, l, b, p;
                            return f.a.wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                    case 0:
                                        if (!a) {
                                            t.next = 2;
                                            break
                                        }
                                        throw new Error("SubscriptionManager - attempting to use after destroying");
                                    case 2:
                                        d = s.params[0],
                                        h = ns(16),
                                        t.t0 = d,
                                        t.next = "newHeads" === t.t0 ? 6 : "logs" === t.t0 ? 8 : 14;
                                        break;
                                    case 6:
                                        return l = function(t) {
                                            var n = t.subId
                                              , i = {
                                                type: d,
                                                destroy: function() {
                                                    var t = Object(o.a)(f.a.mark((function t() {
                                                        return f.a.wrap((function(t) {
                                                            for (; ; )
                                                                switch (t.prev = t.next) {
                                                                case 0:
                                                                    e.removeListener("sync", i.update);
                                                                case 1:
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
                                                }(),
                                                update: function() {
                                                    var t = Object(o.a)(f.a.mark((function t(e) {
                                                        var i, a, o, s;
                                                        return f.a.wrap((function(t) {
                                                            for (; ; )
                                                                switch (t.prev = t.next) {
                                                                case 0:
                                                                    return i = e.oldBlock,
                                                                    a = e.newBlock,
                                                                    o = a,
                                                                    s = is(i),
                                                                    t.next = 4,
                                                                    Uo({
                                                                        provider: r,
                                                                        fromBlock: s,
                                                                        toBlock: o
                                                                    });
                                                                case 4:
                                                                    t.sent.map(fs).forEach((function(t) {
                                                                        u(n, t)
                                                                    }
                                                                    ));
                                                                case 5:
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
                                            return e.on("sync", i.update),
                                            i
                                        }({
                                            subId: h
                                        }),
                                        t.abrupt("break", 15);
                                    case 8:
                                        return b = s.params[1],
                                        t.next = 11,
                                        i.newLogFilter(b);
                                    case 11:
                                        return p = t.sent,
                                        l = function(t) {
                                            var e = t.subId
                                              , r = t.filter;
                                            return r.on("update", (function(t) {
                                                return u(e, t)
                                            }
                                            )),
                                            {
                                                type: d,
                                                destroy: function() {
                                                    var t = Object(o.a)(f.a.mark((function t() {
                                                        return f.a.wrap((function(t) {
                                                            for (; ; )
                                                                switch (t.prev = t.next) {
                                                                case 0:
                                                                    return t.next = 2,
                                                                    i.uninstallFilter(r.idHex);
                                                                case 2:
                                                                    return t.abrupt("return", t.sent);
                                                                case 3:
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
                                                }()
                                            }
                                        }({
                                            subId: h,
                                            filter: p
                                        }),
                                        t.abrupt("break", 15);
                                    case 14:
                                        throw new Error('SubscriptionManager - unsupported subscription type "'.concat(d, '"'));
                                    case 15:
                                        return t.abrupt("return", (n[h] = l,
                                        void (c.result = h)));
                                    case 16:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t)
                        }
                        )));
                        return function(e, r) {
                            return t.apply(this, arguments)
                        }
                    }()),
                    eth_unsubscribe: Io(function() {
                        var t = Object(o.a)(f.a.mark((function t(e, r) {
                            var i, o;
                            return f.a.wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                    case 0:
                                        if (!a) {
                                            t.next = 2;
                                            break
                                        }
                                        throw new Error("SubscriptionManager - attempting to use after destroying");
                                    case 2:
                                        if (i = e.params[0],
                                        o = n[i]) {
                                            t.next = 5;
                                            break
                                        }
                                        return t.abrupt("return", void (r.result = !1));
                                    case 5:
                                        return delete n[i],
                                        t.next = 8,
                                        o.destroy();
                                    case 8:
                                        r.result = !0;
                                    case 9:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t)
                        }
                        )));
                        return function(e, r) {
                            return t.apply(this, arguments)
                        }
                    }())
                });
                return c.destroy = function() {
                    for (var t in s.removeAllListeners(),
                    n)
                        n[t].destroy(),
                        delete n[t];
                    a = !0
                }
                ,
                {
                    events: s,
                    middleware: c
                };
                function u(t, e) {
                    s.emit("notification", {
                        jsonrpc: "2.0",
                        method: "eth_subscription",
                        params: {
                            subscription: t,
                            result: e
                        }
                    })
                }
            };
            function fs(t) {
                return {
                    hash: t.hash,
                    parentHash: t.parentHash,
                    sha3Uncles: t.sha3Uncles,
                    miner: t.miner,
                    stateRoot: t.stateRoot,
                    transactionsRoot: t.transactionsRoot,
                    receiptsRoot: t.receiptsRoot,
                    logsBloom: t.logsBloom,
                    difficulty: t.difficulty,
                    number: t.number,
                    gasLimit: t.gasLimit,
                    gasUsed: t.gasUsed,
                    nonce: t.nonce,
                    mixHash: t.mixHash,
                    timestamp: t.timestamp,
                    extraData: t.extraData
                }
            }
        }
        ).call(this, r(10).Buffer, r(176).setImmediate, r(22))
    }
}]);
