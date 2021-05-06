(this["webpackJsonpgoose-frontend"] = this["webpackJsonpgoose-frontend"] || []).push([[19], {
    655: function(t, e, n) {
        "use strict";
        n.r(e),
        function(t) {
            n.d(e, "WalletLink", (function() {
                return du
            }
            )),
            n.d(e, "WalletLinkProvider", (function() {
                return fu
            }
            )),
            n.d(e, "__moduleExports", (function() {
                return lu
            }
            ));
            var r = n(43)
              , i = n(175)
              , o = n(86)
              , s = n(52)
              , u = n(4)
              , a = n.n(u)
              , c = n(15)
              , l = n(165)
              , h = n(20)
              , f = n(2)
              , d = n(5)
              , p = n(8)
              , b = n(9)
              , v = n(66)
              , m = (n(0),
            n(109),
            n(28),
            n(10))
              , y = n.n(m)
              , g = n(128)
              , w = n.n(g)
              , _ = n(107)
              , k = n.n(_)
              , x = n(94)
              , S = n.n(x)
              , M = Object(v.g)((function(t) {
                !function(t, e) {
                    function n(t, e) {
                        if (!t)
                            throw new Error(e || "Assertion failed")
                    }
                    function r(t, e) {
                        t.super_ = e;
                        var n = function() {};
                        n.prototype = e.prototype,
                        t.prototype = new n,
                        t.prototype.constructor = t
                    }
                    function i(t, e, n) {
                        if (i.isBN(t))
                            return t;
                        this.negative = 0,
                        this.words = null,
                        this.length = 0,
                        this.red = null,
                        null !== t && ("le" !== e && "be" !== e || (n = e,
                        e = 10),
                        this._init(t || 0, e || 10, n || "be"))
                    }
                    var o;
                    "object" == typeof t ? t.exports = i : e.BN = i,
                    i.BN = i,
                    i.wordSize = 26;
                    try {
                        o = y.a.Buffer
                    } catch (t) {}
                    function s(t, e, r) {
                        for (var i = 0, o = Math.min(t.length, r), s = 0, u = e; u < o; u++) {
                            var a, c = t.charCodeAt(u) - 48;
                            i <<= 4,
                            i |= a = c >= 49 && c <= 54 ? c - 49 + 10 : c >= 17 && c <= 22 ? c - 17 + 10 : c,
                            s |= a
                        }
                        return n(!(240 & s), "Invalid character in " + t),
                        i
                    }
                    function u(t, e, r, i) {
                        for (var o = 0, s = 0, u = Math.min(t.length, r), a = e; a < u; a++) {
                            var c = t.charCodeAt(a) - 48;
                            o *= i,
                            s = c >= 49 ? c - 49 + 10 : c >= 17 ? c - 17 + 10 : c,
                            n(c >= 0 && s < i, "Invalid character"),
                            o += s
                        }
                        return o
                    }
                    function a(t, e) {
                        t.words = e.words,
                        t.length = e.length,
                        t.negative = e.negative,
                        t.red = e.red
                    }
                    function c() {
                        return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
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
                    i.prototype._init = function(t, e, r) {
                        if ("number" == typeof t)
                            return this._initNumber(t, e, r);
                        if ("object" == typeof t)
                            return this._initArray(t, e, r);
                        "hex" === e && (e = 16),
                        n(e === (0 | e) && e >= 2 && e <= 36);
                        var i = 0;
                        "-" === (t = t.toString().replace(/\s+/g, ""))[0] && i++,
                        16 === e ? this._parseHex(t, i) : this._parseBase(t, e, i),
                        "-" === t[0] && (this.negative = 1),
                        this._strip(),
                        "le" === r && this._initArray(this.toArray(), e, r)
                    }
                    ,
                    i.prototype._initNumber = function(t, e, r) {
                        t < 0 && (this.negative = 1,
                        t = -t),
                        t < 67108864 ? (this.words = [67108863 & t],
                        this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863],
                        this.length = 2) : (n(t < 9007199254740992),
                        this.words = [67108863 & t, t / 67108864 & 67108863, 1],
                        this.length = 3),
                        "le" === r && this._initArray(this.toArray(), e, r)
                    }
                    ,
                    i.prototype._initArray = function(t, e, r) {
                        if (n("number" == typeof t.length),
                        t.length <= 0)
                            return this.words = [0],
                            this.length = 1,
                            this;
                        this.length = Math.ceil(t.length / 3),
                        this.words = new Array(this.length);
                        for (var i = 0; i < this.length; i++)
                            this.words[i] = 0;
                        var o, s, u = 0;
                        if ("be" === r)
                            for (i = t.length - 1,
                            o = 0; i >= 0; i -= 3)
                                s = t[i] | t[i - 1] << 8 | t[i - 2] << 16,
                                this.words[o] |= s << u & 67108863,
                                this.words[o + 1] = s >>> 26 - u & 67108863,
                                (u += 24) >= 26 && (u -= 26,
                                o++);
                        else if ("le" === r)
                            for (i = 0,
                            o = 0; i < t.length; i += 3)
                                s = t[i] | t[i + 1] << 8 | t[i + 2] << 16,
                                this.words[o] |= s << u & 67108863,
                                this.words[o + 1] = s >>> 26 - u & 67108863,
                                (u += 24) >= 26 && (u -= 26,
                                o++);
                        return this._strip()
                    }
                    ,
                    i.prototype._parseHex = function(t, e) {
                        this.length = Math.ceil((t.length - e) / 6),
                        this.words = new Array(this.length);
                        for (var n = 0; n < this.length; n++)
                            this.words[n] = 0;
                        var r, i, o = 0;
                        for (n = t.length - 6,
                        r = 0; n >= e; n -= 6)
                            i = s(t, n, n + 6),
                            this.words[r] |= i << o & 67108863,
                            this.words[r + 1] |= i >>> 26 - o & 4194303,
                            (o += 24) >= 26 && (o -= 26,
                            r++);
                        n + 6 !== e && (i = s(t, e, n + 6),
                        this.words[r] |= i << o & 67108863,
                        this.words[r + 1] |= i >>> 26 - o & 4194303),
                        this._strip()
                    }
                    ,
                    i.prototype._parseBase = function(t, e, n) {
                        this.words = [0],
                        this.length = 1;
                        for (var r = 0, i = 1; i <= 67108863; i *= e)
                            r++;
                        r--,
                        i = i / e | 0;
                        for (var o = t.length - n, s = o % r, a = Math.min(o, o - s) + n, c = 0, l = n; l < a; l += r)
                            c = u(t, l, l + r, e),
                            this.imuln(i),
                            this.words[0] + c < 67108864 ? this.words[0] += c : this._iaddn(c);
                        if (0 !== s) {
                            var h = 1;
                            for (c = u(t, l, t.length, e),
                            l = 0; l < s; l++)
                                h *= e;
                            this.imuln(h),
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
                    i.prototype._move = function(t) {
                        a(t, this)
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
                    i.prototype._strip = function() {
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
                    "undefined" != typeof Symbol && "function" == typeof Symbol.for ? i.prototype[Symbol.for("nodejs.util.inspect.custom")] = c : i.prototype.inspect = c;
                    var l = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"]
                      , h = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
                      , f = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
                    function d(t, e, n) {
                        n.negative = e.negative ^ t.negative;
                        var r = t.length + e.length | 0;
                        n.length = r,
                        r = r - 1 | 0;
                        var i = 0 | t.words[0]
                          , o = 0 | e.words[0]
                          , s = i * o
                          , u = 67108863 & s
                          , a = s / 67108864 | 0;
                        n.words[0] = u;
                        for (var c = 1; c < r; c++) {
                            for (var l = a >>> 26, h = 67108863 & a, f = Math.min(c, e.length - 1), d = Math.max(0, c - t.length + 1); d <= f; d++) {
                                var p = c - d | 0;
                                l += (s = (i = 0 | t.words[p]) * (o = 0 | e.words[d]) + h) / 67108864 | 0,
                                h = 67108863 & s
                            }
                            n.words[c] = 0 | h,
                            a = 0 | l
                        }
                        return 0 !== a ? n.words[c] = 0 | a : n.length--,
                        n._strip()
                    }
                    i.prototype.toString = function(t, e) {
                        var r;
                        if (e = 0 | e || 1,
                        16 === (t = t || 10) || "hex" === t) {
                            r = "";
                            for (var i = 0, o = 0, s = 0; s < this.length; s++) {
                                var u = this.words[s]
                                  , a = (16777215 & (u << i | o)).toString(16);
                                r = 0 !== (o = u >>> 24 - i & 16777215) || s !== this.length - 1 ? l[6 - a.length] + a + r : a + r,
                                (i += 2) >= 26 && (i -= 26,
                                s--)
                            }
                            for (0 !== o && (r = o.toString(16) + r); r.length % e != 0; )
                                r = "0" + r;
                            return 0 !== this.negative && (r = "-" + r),
                            r
                        }
                        if (t === (0 | t) && t >= 2 && t <= 36) {
                            var c = h[t]
                              , d = f[t];
                            r = "";
                            var p = this.clone();
                            for (p.negative = 0; !p.isZero(); ) {
                                var b = p.modrn(d).toString(t);
                                r = (p = p.idivn(d)).isZero() ? b + r : l[c - b.length] + b + r
                            }
                            for (this.isZero() && (r = "0" + r); r.length % e != 0; )
                                r = "0" + r;
                            return 0 !== this.negative && (r = "-" + r),
                            r
                        }
                        n(!1, "Base should be between 2 and 36")
                    }
                    ,
                    i.prototype.toNumber = function() {
                        var t = this.words[0];
                        return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"),
                        0 !== this.negative ? -t : t
                    }
                    ,
                    i.prototype.toJSON = function() {
                        return this.toString(16, 2)
                    }
                    ,
                    o && (i.prototype.toBuffer = function(t, e) {
                        return this.toArrayLike(o, t, e)
                    }
                    ),
                    i.prototype.toArray = function(t, e) {
                        return this.toArrayLike(Array, t, e)
                    }
                    ,
                    i.prototype.toArrayLike = function(t, e, r) {
                        this._strip();
                        var i = this.byteLength()
                          , o = r || Math.max(1, i);
                        n(i <= o, "byte array longer than desired length"),
                        n(o > 0, "Requested array length <= 0");
                        var s = function(t, e) {
                            return t.allocUnsafe ? t.allocUnsafe(e) : new t(e)
                        }(t, o);
                        return this["_toArrayLike" + ("le" === e ? "LE" : "BE")](s, i),
                        s
                    }
                    ,
                    i.prototype._toArrayLikeLE = function(t, e) {
                        for (var n = 0, r = 0, i = 0, o = 0; i < this.length; i++) {
                            var s = this.words[i] << o | r;
                            t[n++] = 255 & s,
                            n < t.length && (t[n++] = s >> 8 & 255),
                            n < t.length && (t[n++] = s >> 16 & 255),
                            6 === o ? (n < t.length && (t[n++] = s >> 24 & 255),
                            r = 0,
                            o = 0) : (r = s >>> 24,
                            o += 2)
                        }
                        if (n < t.length)
                            for (t[n++] = r; n < t.length; )
                                t[n++] = 0
                    }
                    ,
                    i.prototype._toArrayLikeBE = function(t, e) {
                        for (var n = t.length - 1, r = 0, i = 0, o = 0; i < this.length; i++) {
                            var s = this.words[i] << o | r;
                            t[n--] = 255 & s,
                            n >= 0 && (t[n--] = s >> 8 & 255),
                            n >= 0 && (t[n--] = s >> 16 & 255),
                            6 === o ? (n >= 0 && (t[n--] = s >> 24 & 255),
                            r = 0,
                            o = 0) : (r = s >>> 24,
                            o += 2)
                        }
                        if (n >= 0)
                            for (t[n--] = r; n >= 0; )
                                t[n--] = 0
                    }
                    ,
                    Math.clz32 ? i.prototype._countBits = function(t) {
                        return 32 - Math.clz32(t)
                    }
                    : i.prototype._countBits = function(t) {
                        var e = t
                          , n = 0;
                        return e >= 4096 && (n += 13,
                        e >>>= 13),
                        e >= 64 && (n += 7,
                        e >>>= 7),
                        e >= 8 && (n += 4,
                        e >>>= 4),
                        e >= 2 && (n += 2,
                        e >>>= 2),
                        n + e
                    }
                    ,
                    i.prototype._zeroBits = function(t) {
                        if (0 === t)
                            return 26;
                        var e = t
                          , n = 0;
                        return 0 == (8191 & e) && (n += 13,
                        e >>>= 13),
                        0 == (127 & e) && (n += 7,
                        e >>>= 7),
                        0 == (15 & e) && (n += 4,
                        e >>>= 4),
                        0 == (3 & e) && (n += 2,
                        e >>>= 2),
                        0 == (1 & e) && n++,
                        n
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
                            var n = this._zeroBits(this.words[e]);
                            if (t += n,
                            26 !== n)
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
                        return this._strip()
                    }
                    ,
                    i.prototype.ior = function(t) {
                        return n(0 == (this.negative | t.negative)),
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
                        for (var n = 0; n < e.length; n++)
                            this.words[n] = this.words[n] & t.words[n];
                        return this.length = e.length,
                        this._strip()
                    }
                    ,
                    i.prototype.iand = function(t) {
                        return n(0 == (this.negative | t.negative)),
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
                        var e, n;
                        this.length > t.length ? (e = this,
                        n = t) : (e = t,
                        n = this);
                        for (var r = 0; r < n.length; r++)
                            this.words[r] = e.words[r] ^ n.words[r];
                        if (this !== e)
                            for (; r < e.length; r++)
                                this.words[r] = e.words[r];
                        return this.length = e.length,
                        this._strip()
                    }
                    ,
                    i.prototype.ixor = function(t) {
                        return n(0 == (this.negative | t.negative)),
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
                        n("number" == typeof t && t >= 0);
                        var e = 0 | Math.ceil(t / 26)
                          , r = t % 26;
                        this._expand(e),
                        r > 0 && e--;
                        for (var i = 0; i < e; i++)
                            this.words[i] = 67108863 & ~this.words[i];
                        return r > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - r),
                        this._strip()
                    }
                    ,
                    i.prototype.notn = function(t) {
                        return this.clone().inotn(t)
                    }
                    ,
                    i.prototype.setn = function(t, e) {
                        n("number" == typeof t && t >= 0);
                        var r = t / 26 | 0
                          , i = t % 26;
                        return this._expand(r + 1),
                        this.words[r] = e ? this.words[r] | 1 << i : this.words[r] & ~(1 << i),
                        this._strip()
                    }
                    ,
                    i.prototype.iadd = function(t) {
                        var e, n, r;
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
                        this.length > t.length ? (n = this,
                        r = t) : (n = t,
                        r = this);
                        for (var i = 0, o = 0; o < r.length; o++)
                            e = (0 | n.words[o]) + (0 | r.words[o]) + i,
                            this.words[o] = 67108863 & e,
                            i = e >>> 26;
                        for (; 0 !== i && o < n.length; o++)
                            e = (0 | n.words[o]) + i,
                            this.words[o] = 67108863 & e,
                            i = e >>> 26;
                        if (this.length = n.length,
                        0 !== i)
                            this.words[this.length] = i,
                            this.length++;
                        else if (n !== this)
                            for (; o < n.length; o++)
                                this.words[o] = n.words[o];
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
                        var n, r, i = this.cmp(t);
                        if (0 === i)
                            return this.negative = 0,
                            this.length = 1,
                            this.words[0] = 0,
                            this;
                        i > 0 ? (n = this,
                        r = t) : (n = t,
                        r = this);
                        for (var o = 0, s = 0; s < r.length; s++)
                            o = (e = (0 | n.words[s]) - (0 | r.words[s]) + o) >> 26,
                            this.words[s] = 67108863 & e;
                        for (; 0 !== o && s < n.length; s++)
                            o = (e = (0 | n.words[s]) + o) >> 26,
                            this.words[s] = 67108863 & e;
                        if (0 === o && s < n.length && n !== this)
                            for (; s < n.length; s++)
                                this.words[s] = n.words[s];
                        return this.length = Math.max(this.length, s),
                        n !== this && (this.negative = 1),
                        this._strip()
                    }
                    ,
                    i.prototype.sub = function(t) {
                        return this.clone().isub(t)
                    }
                    ;
                    var p = function(t, e, n) {
                        var r, i, o, s = t.words, u = e.words, a = n.words, c = 0, l = 0 | s[0], h = 8191 & l, f = l >>> 13, d = 0 | s[1], p = 8191 & d, b = d >>> 13, v = 0 | s[2], m = 8191 & v, y = v >>> 13, g = 0 | s[3], w = 8191 & g, _ = g >>> 13, k = 0 | s[4], x = 8191 & k, S = k >>> 13, M = 0 | s[5], E = 8191 & M, O = M >>> 13, j = 0 | s[6], C = 8191 & j, N = j >>> 13, T = 0 | s[7], I = 8191 & T, A = T >>> 13, P = 0 | s[8], R = 8191 & P, D = P >>> 13, L = 0 | s[9], B = 8191 & L, F = L >>> 13, W = 0 | u[0], q = 8191 & W, U = W >>> 13, V = 0 | u[1], H = 8191 & V, z = V >>> 13, K = 0 | u[2], J = 8191 & K, $ = K >>> 13, G = 0 | u[3], Y = 8191 & G, Z = G >>> 13, Q = 0 | u[4], X = 8191 & Q, tt = Q >>> 13, et = 0 | u[5], nt = 8191 & et, rt = et >>> 13, it = 0 | u[6], ot = 8191 & it, st = it >>> 13, ut = 0 | u[7], at = 8191 & ut, ct = ut >>> 13, lt = 0 | u[8], ht = 8191 & lt, ft = lt >>> 13, dt = 0 | u[9], pt = 8191 & dt, bt = dt >>> 13;
                        n.negative = t.negative ^ e.negative,
                        n.length = 19;
                        var vt = (c + (r = Math.imul(h, q)) | 0) + ((8191 & (i = (i = Math.imul(h, U)) + Math.imul(f, q) | 0)) << 13) | 0;
                        c = ((o = Math.imul(f, U)) + (i >>> 13) | 0) + (vt >>> 26) | 0,
                        vt &= 67108863,
                        r = Math.imul(p, q),
                        i = (i = Math.imul(p, U)) + Math.imul(b, q) | 0,
                        o = Math.imul(b, U);
                        var mt = (c + (r = r + Math.imul(h, H) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, z) | 0) + Math.imul(f, H) | 0)) << 13) | 0;
                        c = ((o = o + Math.imul(f, z) | 0) + (i >>> 13) | 0) + (mt >>> 26) | 0,
                        mt &= 67108863,
                        r = Math.imul(m, q),
                        i = (i = Math.imul(m, U)) + Math.imul(y, q) | 0,
                        o = Math.imul(y, U),
                        r = r + Math.imul(p, H) | 0,
                        i = (i = i + Math.imul(p, z) | 0) + Math.imul(b, H) | 0,
                        o = o + Math.imul(b, z) | 0;
                        var yt = (c + (r = r + Math.imul(h, J) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, $) | 0) + Math.imul(f, J) | 0)) << 13) | 0;
                        c = ((o = o + Math.imul(f, $) | 0) + (i >>> 13) | 0) + (yt >>> 26) | 0,
                        yt &= 67108863,
                        r = Math.imul(w, q),
                        i = (i = Math.imul(w, U)) + Math.imul(_, q) | 0,
                        o = Math.imul(_, U),
                        r = r + Math.imul(m, H) | 0,
                        i = (i = i + Math.imul(m, z) | 0) + Math.imul(y, H) | 0,
                        o = o + Math.imul(y, z) | 0,
                        r = r + Math.imul(p, J) | 0,
                        i = (i = i + Math.imul(p, $) | 0) + Math.imul(b, J) | 0,
                        o = o + Math.imul(b, $) | 0;
                        var gt = (c + (r = r + Math.imul(h, Y) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, Z) | 0) + Math.imul(f, Y) | 0)) << 13) | 0;
                        c = ((o = o + Math.imul(f, Z) | 0) + (i >>> 13) | 0) + (gt >>> 26) | 0,
                        gt &= 67108863,
                        r = Math.imul(x, q),
                        i = (i = Math.imul(x, U)) + Math.imul(S, q) | 0,
                        o = Math.imul(S, U),
                        r = r + Math.imul(w, H) | 0,
                        i = (i = i + Math.imul(w, z) | 0) + Math.imul(_, H) | 0,
                        o = o + Math.imul(_, z) | 0,
                        r = r + Math.imul(m, J) | 0,
                        i = (i = i + Math.imul(m, $) | 0) + Math.imul(y, J) | 0,
                        o = o + Math.imul(y, $) | 0,
                        r = r + Math.imul(p, Y) | 0,
                        i = (i = i + Math.imul(p, Z) | 0) + Math.imul(b, Y) | 0,
                        o = o + Math.imul(b, Z) | 0;
                        var wt = (c + (r = r + Math.imul(h, X) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, tt) | 0) + Math.imul(f, X) | 0)) << 13) | 0;
                        c = ((o = o + Math.imul(f, tt) | 0) + (i >>> 13) | 0) + (wt >>> 26) | 0,
                        wt &= 67108863,
                        r = Math.imul(E, q),
                        i = (i = Math.imul(E, U)) + Math.imul(O, q) | 0,
                        o = Math.imul(O, U),
                        r = r + Math.imul(x, H) | 0,
                        i = (i = i + Math.imul(x, z) | 0) + Math.imul(S, H) | 0,
                        o = o + Math.imul(S, z) | 0,
                        r = r + Math.imul(w, J) | 0,
                        i = (i = i + Math.imul(w, $) | 0) + Math.imul(_, J) | 0,
                        o = o + Math.imul(_, $) | 0,
                        r = r + Math.imul(m, Y) | 0,
                        i = (i = i + Math.imul(m, Z) | 0) + Math.imul(y, Y) | 0,
                        o = o + Math.imul(y, Z) | 0,
                        r = r + Math.imul(p, X) | 0,
                        i = (i = i + Math.imul(p, tt) | 0) + Math.imul(b, X) | 0,
                        o = o + Math.imul(b, tt) | 0;
                        var _t = (c + (r = r + Math.imul(h, nt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, rt) | 0) + Math.imul(f, nt) | 0)) << 13) | 0;
                        c = ((o = o + Math.imul(f, rt) | 0) + (i >>> 13) | 0) + (_t >>> 26) | 0,
                        _t &= 67108863,
                        r = Math.imul(C, q),
                        i = (i = Math.imul(C, U)) + Math.imul(N, q) | 0,
                        o = Math.imul(N, U),
                        r = r + Math.imul(E, H) | 0,
                        i = (i = i + Math.imul(E, z) | 0) + Math.imul(O, H) | 0,
                        o = o + Math.imul(O, z) | 0,
                        r = r + Math.imul(x, J) | 0,
                        i = (i = i + Math.imul(x, $) | 0) + Math.imul(S, J) | 0,
                        o = o + Math.imul(S, $) | 0,
                        r = r + Math.imul(w, Y) | 0,
                        i = (i = i + Math.imul(w, Z) | 0) + Math.imul(_, Y) | 0,
                        o = o + Math.imul(_, Z) | 0,
                        r = r + Math.imul(m, X) | 0,
                        i = (i = i + Math.imul(m, tt) | 0) + Math.imul(y, X) | 0,
                        o = o + Math.imul(y, tt) | 0,
                        r = r + Math.imul(p, nt) | 0,
                        i = (i = i + Math.imul(p, rt) | 0) + Math.imul(b, nt) | 0,
                        o = o + Math.imul(b, rt) | 0;
                        var kt = (c + (r = r + Math.imul(h, ot) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, st) | 0) + Math.imul(f, ot) | 0)) << 13) | 0;
                        c = ((o = o + Math.imul(f, st) | 0) + (i >>> 13) | 0) + (kt >>> 26) | 0,
                        kt &= 67108863,
                        r = Math.imul(I, q),
                        i = (i = Math.imul(I, U)) + Math.imul(A, q) | 0,
                        o = Math.imul(A, U),
                        r = r + Math.imul(C, H) | 0,
                        i = (i = i + Math.imul(C, z) | 0) + Math.imul(N, H) | 0,
                        o = o + Math.imul(N, z) | 0,
                        r = r + Math.imul(E, J) | 0,
                        i = (i = i + Math.imul(E, $) | 0) + Math.imul(O, J) | 0,
                        o = o + Math.imul(O, $) | 0,
                        r = r + Math.imul(x, Y) | 0,
                        i = (i = i + Math.imul(x, Z) | 0) + Math.imul(S, Y) | 0,
                        o = o + Math.imul(S, Z) | 0,
                        r = r + Math.imul(w, X) | 0,
                        i = (i = i + Math.imul(w, tt) | 0) + Math.imul(_, X) | 0,
                        o = o + Math.imul(_, tt) | 0,
                        r = r + Math.imul(m, nt) | 0,
                        i = (i = i + Math.imul(m, rt) | 0) + Math.imul(y, nt) | 0,
                        o = o + Math.imul(y, rt) | 0,
                        r = r + Math.imul(p, ot) | 0,
                        i = (i = i + Math.imul(p, st) | 0) + Math.imul(b, ot) | 0,
                        o = o + Math.imul(b, st) | 0;
                        var xt = (c + (r = r + Math.imul(h, at) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, ct) | 0) + Math.imul(f, at) | 0)) << 13) | 0;
                        c = ((o = o + Math.imul(f, ct) | 0) + (i >>> 13) | 0) + (xt >>> 26) | 0,
                        xt &= 67108863,
                        r = Math.imul(R, q),
                        i = (i = Math.imul(R, U)) + Math.imul(D, q) | 0,
                        o = Math.imul(D, U),
                        r = r + Math.imul(I, H) | 0,
                        i = (i = i + Math.imul(I, z) | 0) + Math.imul(A, H) | 0,
                        o = o + Math.imul(A, z) | 0,
                        r = r + Math.imul(C, J) | 0,
                        i = (i = i + Math.imul(C, $) | 0) + Math.imul(N, J) | 0,
                        o = o + Math.imul(N, $) | 0,
                        r = r + Math.imul(E, Y) | 0,
                        i = (i = i + Math.imul(E, Z) | 0) + Math.imul(O, Y) | 0,
                        o = o + Math.imul(O, Z) | 0,
                        r = r + Math.imul(x, X) | 0,
                        i = (i = i + Math.imul(x, tt) | 0) + Math.imul(S, X) | 0,
                        o = o + Math.imul(S, tt) | 0,
                        r = r + Math.imul(w, nt) | 0,
                        i = (i = i + Math.imul(w, rt) | 0) + Math.imul(_, nt) | 0,
                        o = o + Math.imul(_, rt) | 0,
                        r = r + Math.imul(m, ot) | 0,
                        i = (i = i + Math.imul(m, st) | 0) + Math.imul(y, ot) | 0,
                        o = o + Math.imul(y, st) | 0,
                        r = r + Math.imul(p, at) | 0,
                        i = (i = i + Math.imul(p, ct) | 0) + Math.imul(b, at) | 0,
                        o = o + Math.imul(b, ct) | 0;
                        var St = (c + (r = r + Math.imul(h, ht) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, ft) | 0) + Math.imul(f, ht) | 0)) << 13) | 0;
                        c = ((o = o + Math.imul(f, ft) | 0) + (i >>> 13) | 0) + (St >>> 26) | 0,
                        St &= 67108863,
                        r = Math.imul(B, q),
                        i = (i = Math.imul(B, U)) + Math.imul(F, q) | 0,
                        o = Math.imul(F, U),
                        r = r + Math.imul(R, H) | 0,
                        i = (i = i + Math.imul(R, z) | 0) + Math.imul(D, H) | 0,
                        o = o + Math.imul(D, z) | 0,
                        r = r + Math.imul(I, J) | 0,
                        i = (i = i + Math.imul(I, $) | 0) + Math.imul(A, J) | 0,
                        o = o + Math.imul(A, $) | 0,
                        r = r + Math.imul(C, Y) | 0,
                        i = (i = i + Math.imul(C, Z) | 0) + Math.imul(N, Y) | 0,
                        o = o + Math.imul(N, Z) | 0,
                        r = r + Math.imul(E, X) | 0,
                        i = (i = i + Math.imul(E, tt) | 0) + Math.imul(O, X) | 0,
                        o = o + Math.imul(O, tt) | 0,
                        r = r + Math.imul(x, nt) | 0,
                        i = (i = i + Math.imul(x, rt) | 0) + Math.imul(S, nt) | 0,
                        o = o + Math.imul(S, rt) | 0,
                        r = r + Math.imul(w, ot) | 0,
                        i = (i = i + Math.imul(w, st) | 0) + Math.imul(_, ot) | 0,
                        o = o + Math.imul(_, st) | 0,
                        r = r + Math.imul(m, at) | 0,
                        i = (i = i + Math.imul(m, ct) | 0) + Math.imul(y, at) | 0,
                        o = o + Math.imul(y, ct) | 0,
                        r = r + Math.imul(p, ht) | 0,
                        i = (i = i + Math.imul(p, ft) | 0) + Math.imul(b, ht) | 0,
                        o = o + Math.imul(b, ft) | 0;
                        var Mt = (c + (r = r + Math.imul(h, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, bt) | 0) + Math.imul(f, pt) | 0)) << 13) | 0;
                        c = ((o = o + Math.imul(f, bt) | 0) + (i >>> 13) | 0) + (Mt >>> 26) | 0,
                        Mt &= 67108863,
                        r = Math.imul(B, H),
                        i = (i = Math.imul(B, z)) + Math.imul(F, H) | 0,
                        o = Math.imul(F, z),
                        r = r + Math.imul(R, J) | 0,
                        i = (i = i + Math.imul(R, $) | 0) + Math.imul(D, J) | 0,
                        o = o + Math.imul(D, $) | 0,
                        r = r + Math.imul(I, Y) | 0,
                        i = (i = i + Math.imul(I, Z) | 0) + Math.imul(A, Y) | 0,
                        o = o + Math.imul(A, Z) | 0,
                        r = r + Math.imul(C, X) | 0,
                        i = (i = i + Math.imul(C, tt) | 0) + Math.imul(N, X) | 0,
                        o = o + Math.imul(N, tt) | 0,
                        r = r + Math.imul(E, nt) | 0,
                        i = (i = i + Math.imul(E, rt) | 0) + Math.imul(O, nt) | 0,
                        o = o + Math.imul(O, rt) | 0,
                        r = r + Math.imul(x, ot) | 0,
                        i = (i = i + Math.imul(x, st) | 0) + Math.imul(S, ot) | 0,
                        o = o + Math.imul(S, st) | 0,
                        r = r + Math.imul(w, at) | 0,
                        i = (i = i + Math.imul(w, ct) | 0) + Math.imul(_, at) | 0,
                        o = o + Math.imul(_, ct) | 0,
                        r = r + Math.imul(m, ht) | 0,
                        i = (i = i + Math.imul(m, ft) | 0) + Math.imul(y, ht) | 0,
                        o = o + Math.imul(y, ft) | 0;
                        var Et = (c + (r = r + Math.imul(p, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(p, bt) | 0) + Math.imul(b, pt) | 0)) << 13) | 0;
                        c = ((o = o + Math.imul(b, bt) | 0) + (i >>> 13) | 0) + (Et >>> 26) | 0,
                        Et &= 67108863,
                        r = Math.imul(B, J),
                        i = (i = Math.imul(B, $)) + Math.imul(F, J) | 0,
                        o = Math.imul(F, $),
                        r = r + Math.imul(R, Y) | 0,
                        i = (i = i + Math.imul(R, Z) | 0) + Math.imul(D, Y) | 0,
                        o = o + Math.imul(D, Z) | 0,
                        r = r + Math.imul(I, X) | 0,
                        i = (i = i + Math.imul(I, tt) | 0) + Math.imul(A, X) | 0,
                        o = o + Math.imul(A, tt) | 0,
                        r = r + Math.imul(C, nt) | 0,
                        i = (i = i + Math.imul(C, rt) | 0) + Math.imul(N, nt) | 0,
                        o = o + Math.imul(N, rt) | 0,
                        r = r + Math.imul(E, ot) | 0,
                        i = (i = i + Math.imul(E, st) | 0) + Math.imul(O, ot) | 0,
                        o = o + Math.imul(O, st) | 0,
                        r = r + Math.imul(x, at) | 0,
                        i = (i = i + Math.imul(x, ct) | 0) + Math.imul(S, at) | 0,
                        o = o + Math.imul(S, ct) | 0,
                        r = r + Math.imul(w, ht) | 0,
                        i = (i = i + Math.imul(w, ft) | 0) + Math.imul(_, ht) | 0,
                        o = o + Math.imul(_, ft) | 0;
                        var Ot = (c + (r = r + Math.imul(m, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(m, bt) | 0) + Math.imul(y, pt) | 0)) << 13) | 0;
                        c = ((o = o + Math.imul(y, bt) | 0) + (i >>> 13) | 0) + (Ot >>> 26) | 0,
                        Ot &= 67108863,
                        r = Math.imul(B, Y),
                        i = (i = Math.imul(B, Z)) + Math.imul(F, Y) | 0,
                        o = Math.imul(F, Z),
                        r = r + Math.imul(R, X) | 0,
                        i = (i = i + Math.imul(R, tt) | 0) + Math.imul(D, X) | 0,
                        o = o + Math.imul(D, tt) | 0,
                        r = r + Math.imul(I, nt) | 0,
                        i = (i = i + Math.imul(I, rt) | 0) + Math.imul(A, nt) | 0,
                        o = o + Math.imul(A, rt) | 0,
                        r = r + Math.imul(C, ot) | 0,
                        i = (i = i + Math.imul(C, st) | 0) + Math.imul(N, ot) | 0,
                        o = o + Math.imul(N, st) | 0,
                        r = r + Math.imul(E, at) | 0,
                        i = (i = i + Math.imul(E, ct) | 0) + Math.imul(O, at) | 0,
                        o = o + Math.imul(O, ct) | 0,
                        r = r + Math.imul(x, ht) | 0,
                        i = (i = i + Math.imul(x, ft) | 0) + Math.imul(S, ht) | 0,
                        o = o + Math.imul(S, ft) | 0;
                        var jt = (c + (r = r + Math.imul(w, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(w, bt) | 0) + Math.imul(_, pt) | 0)) << 13) | 0;
                        c = ((o = o + Math.imul(_, bt) | 0) + (i >>> 13) | 0) + (jt >>> 26) | 0,
                        jt &= 67108863,
                        r = Math.imul(B, X),
                        i = (i = Math.imul(B, tt)) + Math.imul(F, X) | 0,
                        o = Math.imul(F, tt),
                        r = r + Math.imul(R, nt) | 0,
                        i = (i = i + Math.imul(R, rt) | 0) + Math.imul(D, nt) | 0,
                        o = o + Math.imul(D, rt) | 0,
                        r = r + Math.imul(I, ot) | 0,
                        i = (i = i + Math.imul(I, st) | 0) + Math.imul(A, ot) | 0,
                        o = o + Math.imul(A, st) | 0,
                        r = r + Math.imul(C, at) | 0,
                        i = (i = i + Math.imul(C, ct) | 0) + Math.imul(N, at) | 0,
                        o = o + Math.imul(N, ct) | 0,
                        r = r + Math.imul(E, ht) | 0,
                        i = (i = i + Math.imul(E, ft) | 0) + Math.imul(O, ht) | 0,
                        o = o + Math.imul(O, ft) | 0;
                        var Ct = (c + (r = r + Math.imul(x, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(x, bt) | 0) + Math.imul(S, pt) | 0)) << 13) | 0;
                        c = ((o = o + Math.imul(S, bt) | 0) + (i >>> 13) | 0) + (Ct >>> 26) | 0,
                        Ct &= 67108863,
                        r = Math.imul(B, nt),
                        i = (i = Math.imul(B, rt)) + Math.imul(F, nt) | 0,
                        o = Math.imul(F, rt),
                        r = r + Math.imul(R, ot) | 0,
                        i = (i = i + Math.imul(R, st) | 0) + Math.imul(D, ot) | 0,
                        o = o + Math.imul(D, st) | 0,
                        r = r + Math.imul(I, at) | 0,
                        i = (i = i + Math.imul(I, ct) | 0) + Math.imul(A, at) | 0,
                        o = o + Math.imul(A, ct) | 0,
                        r = r + Math.imul(C, ht) | 0,
                        i = (i = i + Math.imul(C, ft) | 0) + Math.imul(N, ht) | 0,
                        o = o + Math.imul(N, ft) | 0;
                        var Nt = (c + (r = r + Math.imul(E, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(E, bt) | 0) + Math.imul(O, pt) | 0)) << 13) | 0;
                        c = ((o = o + Math.imul(O, bt) | 0) + (i >>> 13) | 0) + (Nt >>> 26) | 0,
                        Nt &= 67108863,
                        r = Math.imul(B, ot),
                        i = (i = Math.imul(B, st)) + Math.imul(F, ot) | 0,
                        o = Math.imul(F, st),
                        r = r + Math.imul(R, at) | 0,
                        i = (i = i + Math.imul(R, ct) | 0) + Math.imul(D, at) | 0,
                        o = o + Math.imul(D, ct) | 0,
                        r = r + Math.imul(I, ht) | 0,
                        i = (i = i + Math.imul(I, ft) | 0) + Math.imul(A, ht) | 0,
                        o = o + Math.imul(A, ft) | 0;
                        var Tt = (c + (r = r + Math.imul(C, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(C, bt) | 0) + Math.imul(N, pt) | 0)) << 13) | 0;
                        c = ((o = o + Math.imul(N, bt) | 0) + (i >>> 13) | 0) + (Tt >>> 26) | 0,
                        Tt &= 67108863,
                        r = Math.imul(B, at),
                        i = (i = Math.imul(B, ct)) + Math.imul(F, at) | 0,
                        o = Math.imul(F, ct),
                        r = r + Math.imul(R, ht) | 0,
                        i = (i = i + Math.imul(R, ft) | 0) + Math.imul(D, ht) | 0,
                        o = o + Math.imul(D, ft) | 0;
                        var It = (c + (r = r + Math.imul(I, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(I, bt) | 0) + Math.imul(A, pt) | 0)) << 13) | 0;
                        c = ((o = o + Math.imul(A, bt) | 0) + (i >>> 13) | 0) + (It >>> 26) | 0,
                        It &= 67108863,
                        r = Math.imul(B, ht),
                        i = (i = Math.imul(B, ft)) + Math.imul(F, ht) | 0,
                        o = Math.imul(F, ft);
                        var At = (c + (r = r + Math.imul(R, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(R, bt) | 0) + Math.imul(D, pt) | 0)) << 13) | 0;
                        c = ((o = o + Math.imul(D, bt) | 0) + (i >>> 13) | 0) + (At >>> 26) | 0,
                        At &= 67108863;
                        var Pt = (c + (r = Math.imul(B, pt)) | 0) + ((8191 & (i = (i = Math.imul(B, bt)) + Math.imul(F, pt) | 0)) << 13) | 0;
                        return c = ((o = Math.imul(F, bt)) + (i >>> 13) | 0) + (Pt >>> 26) | 0,
                        Pt &= 67108863,
                        a[0] = vt,
                        a[1] = mt,
                        a[2] = yt,
                        a[3] = gt,
                        a[4] = wt,
                        a[5] = _t,
                        a[6] = kt,
                        a[7] = xt,
                        a[8] = St,
                        a[9] = Mt,
                        a[10] = Et,
                        a[11] = Ot,
                        a[12] = jt,
                        a[13] = Ct,
                        a[14] = Nt,
                        a[15] = Tt,
                        a[16] = It,
                        a[17] = At,
                        a[18] = Pt,
                        0 !== c && (a[19] = c,
                        n.length++),
                        n
                    };
                    function b(t, e, n) {
                        n.negative = e.negative ^ t.negative,
                        n.length = t.length + e.length;
                        for (var r = 0, i = 0, o = 0; o < n.length - 1; o++) {
                            var s = i;
                            i = 0;
                            for (var u = 67108863 & r, a = Math.min(o, e.length - 1), c = Math.max(0, o - t.length + 1); c <= a; c++) {
                                var l = o - c
                                  , h = (0 | t.words[l]) * (0 | e.words[c])
                                  , f = 67108863 & h;
                                u = 67108863 & (f = f + u | 0),
                                i += (s = (s = s + (h / 67108864 | 0) | 0) + (f >>> 26) | 0) >>> 26,
                                s &= 67108863
                            }
                            n.words[o] = u,
                            r = s,
                            s = i
                        }
                        return 0 !== r ? n.words[o] = r : n.length--,
                        n._strip()
                    }
                    function v(t, e, n) {
                        return b(t, e, n)
                    }
                    Math.imul || (p = d),
                    i.prototype.mulTo = function(t, e) {
                        var n = this.length + t.length;
                        return 10 === this.length && 10 === t.length ? p(this, t, e) : n < 63 ? d(this, t, e) : n < 1024 ? b(this, t, e) : v(this, t, e)
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
                        v(this, t, e)
                    }
                    ,
                    i.prototype.imul = function(t) {
                        return this.clone().mulTo(t, this)
                    }
                    ,
                    i.prototype.imuln = function(t) {
                        var e = t < 0;
                        e && (t = -t),
                        n("number" == typeof t),
                        n(t < 67108864);
                        for (var r = 0, i = 0; i < this.length; i++) {
                            var o = (0 | this.words[i]) * t
                              , s = (67108863 & o) + (67108863 & r);
                            r >>= 26,
                            r += o / 67108864 | 0,
                            r += s >>> 26,
                            this.words[i] = 67108863 & s
                        }
                        return 0 !== r && (this.words[i] = r,
                        this.length++),
                        e ? this.ineg() : this
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
                            for (var e = new Array(t.bitLength()), n = 0; n < e.length; n++) {
                                var r = n / 26 | 0
                                  , i = n % 26;
                                e[n] = t.words[r] >>> i & 1
                            }
                            return e
                        }(t);
                        if (0 === e.length)
                            return new i(1);
                        for (var n = this, r = 0; r < e.length && 0 === e[r]; r++,
                        n = n.sqr())
                            ;
                        if (++r < e.length)
                            for (var o = n.sqr(); r < e.length; r++,
                            o = o.sqr())
                                0 !== e[r] && (n = n.mul(o));
                        return n
                    }
                    ,
                    i.prototype.iushln = function(t) {
                        n("number" == typeof t && t >= 0);
                        var e, r = t % 26, i = (t - r) / 26, o = 67108863 >>> 26 - r << 26 - r;
                        if (0 !== r) {
                            var s = 0;
                            for (e = 0; e < this.length; e++) {
                                var u = this.words[e] & o
                                  , a = (0 | this.words[e]) - u << r;
                                this.words[e] = a | s,
                                s = u >>> 26 - r
                            }
                            s && (this.words[e] = s,
                            this.length++)
                        }
                        if (0 !== i) {
                            for (e = this.length - 1; e >= 0; e--)
                                this.words[e + i] = this.words[e];
                            for (e = 0; e < i; e++)
                                this.words[e] = 0;
                            this.length += i
                        }
                        return this._strip()
                    }
                    ,
                    i.prototype.ishln = function(t) {
                        return n(0 === this.negative),
                        this.iushln(t)
                    }
                    ,
                    i.prototype.iushrn = function(t, e, r) {
                        var i;
                        n("number" == typeof t && t >= 0),
                        i = e ? (e - e % 26) / 26 : 0;
                        var o = t % 26
                          , s = Math.min((t - o) / 26, this.length)
                          , u = 67108863 ^ 67108863 >>> o << o
                          , a = r;
                        if (i -= s,
                        i = Math.max(0, i),
                        a) {
                            for (var c = 0; c < s; c++)
                                a.words[c] = this.words[c];
                            a.length = s
                        }
                        if (0 === s)
                            ;
                        else if (this.length > s)
                            for (this.length -= s,
                            c = 0; c < this.length; c++)
                                this.words[c] = this.words[c + s];
                        else
                            this.words[0] = 0,
                            this.length = 1;
                        var l = 0;
                        for (c = this.length - 1; c >= 0 && (0 !== l || c >= i); c--) {
                            var h = 0 | this.words[c];
                            this.words[c] = l << 26 - o | h >>> o,
                            l = h & u
                        }
                        return a && 0 !== l && (a.words[a.length++] = l),
                        0 === this.length && (this.words[0] = 0,
                        this.length = 1),
                        this._strip()
                    }
                    ,
                    i.prototype.ishrn = function(t, e, r) {
                        return n(0 === this.negative),
                        this.iushrn(t, e, r)
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
                        n("number" == typeof t && t >= 0);
                        var e = t % 26
                          , r = (t - e) / 26
                          , i = 1 << e;
                        return !(this.length <= r) && !!(this.words[r] & i)
                    }
                    ,
                    i.prototype.imaskn = function(t) {
                        n("number" == typeof t && t >= 0);
                        var e = t % 26
                          , r = (t - e) / 26;
                        if (n(0 === this.negative, "imaskn works only with positive numbers"),
                        this.length <= r)
                            return this;
                        if (0 !== e && r++,
                        this.length = Math.min(r, this.length),
                        0 !== e) {
                            var i = 67108863 ^ 67108863 >>> e << e;
                            this.words[this.length - 1] &= i
                        }
                        return this._strip()
                    }
                    ,
                    i.prototype.maskn = function(t) {
                        return this.clone().imaskn(t)
                    }
                    ,
                    i.prototype.iaddn = function(t) {
                        return n("number" == typeof t),
                        n(t < 67108864),
                        t < 0 ? this.isubn(-t) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) <= t ? (this.words[0] = t - (0 | this.words[0]),
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
                        if (n("number" == typeof t),
                        n(t < 67108864),
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
                        return this._strip()
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
                    i.prototype._ishlnsubmul = function(t, e, r) {
                        var i, o, s = t.length + r;
                        this._expand(s);
                        var u = 0;
                        for (i = 0; i < t.length; i++) {
                            o = (0 | this.words[i + r]) + u;
                            var a = (0 | t.words[i]) * e;
                            u = ((o -= 67108863 & a) >> 26) - (a / 67108864 | 0),
                            this.words[i + r] = 67108863 & o
                        }
                        for (; i < this.length - r; i++)
                            u = (o = (0 | this.words[i + r]) + u) >> 26,
                            this.words[i + r] = 67108863 & o;
                        if (0 === u)
                            return this._strip();
                        for (n(-1 === u),
                        u = 0,
                        i = 0; i < this.length; i++)
                            u = (o = -(0 | this.words[i]) + u) >> 26,
                            this.words[i] = 67108863 & o;
                        return this.negative = 1,
                        this._strip()
                    }
                    ,
                    i.prototype._wordDiv = function(t, e) {
                        var n = (this.length,
                        t.length)
                          , r = this.clone()
                          , o = t
                          , s = 0 | o.words[o.length - 1];
                        0 !== (n = 26 - this._countBits(s)) && (o = o.ushln(n),
                        r.iushln(n),
                        s = 0 | o.words[o.length - 1]);
                        var u, a = r.length - o.length;
                        if ("mod" !== e) {
                            (u = new i(null)).length = a + 1,
                            u.words = new Array(u.length);
                            for (var c = 0; c < u.length; c++)
                                u.words[c] = 0
                        }
                        var l = r.clone()._ishlnsubmul(o, 1, a);
                        0 === l.negative && (r = l,
                        u && (u.words[a] = 1));
                        for (var h = a - 1; h >= 0; h--) {
                            var f = 67108864 * (0 | r.words[o.length + h]) + (0 | r.words[o.length + h - 1]);
                            for (f = Math.min(f / s | 0, 67108863),
                            r._ishlnsubmul(o, f, h); 0 !== r.negative; )
                                f--,
                                r.negative = 0,
                                r._ishlnsubmul(o, 1, h),
                                r.isZero() || (r.negative ^= 1);
                            u && (u.words[h] = f)
                        }
                        return u && u._strip(),
                        r._strip(),
                        "div" !== e && 0 !== n && r.iushrn(n),
                        {
                            div: u || null,
                            mod: r
                        }
                    }
                    ,
                    i.prototype.divmod = function(t, e, r) {
                        return n(!t.isZero()),
                        this.isZero() ? {
                            div: new i(0),
                            mod: new i(0)
                        } : 0 !== this.negative && 0 === t.negative ? (u = this.neg().divmod(t, e),
                        "mod" !== e && (o = u.div.neg()),
                        "div" !== e && (s = u.mod.neg(),
                        r && 0 !== s.negative && s.iadd(t)),
                        {
                            div: o,
                            mod: s
                        }) : 0 === this.negative && 0 !== t.negative ? (u = this.divmod(t.neg(), e),
                        "mod" !== e && (o = u.div.neg()),
                        {
                            div: o,
                            mod: u.mod
                        }) : 0 != (this.negative & t.negative) ? (u = this.neg().divmod(t.neg(), e),
                        "div" !== e && (s = u.mod.neg(),
                        r && 0 !== s.negative && s.isub(t)),
                        {
                            div: u.div,
                            mod: s
                        }) : t.length > this.length || this.cmp(t) < 0 ? {
                            div: new i(0),
                            mod: this
                        } : 1 === t.length ? "div" === e ? {
                            div: this.divn(t.words[0]),
                            mod: null
                        } : "mod" === e ? {
                            div: null,
                            mod: new i(this.modrn(t.words[0]))
                        } : {
                            div: this.divn(t.words[0]),
                            mod: new i(this.modrn(t.words[0]))
                        } : this._wordDiv(t, e);
                        var o, s, u
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
                        var n = 0 !== e.div.negative ? e.mod.isub(t) : e.mod
                          , r = t.ushrn(1)
                          , i = t.andln(1)
                          , o = n.cmp(r);
                        return o < 0 || 1 === i && 0 === o ? e.div : 0 !== e.div.negative ? e.div.isubn(1) : e.div.iaddn(1)
                    }
                    ,
                    i.prototype.modrn = function(t) {
                        var e = t < 0;
                        e && (t = -t),
                        n(t <= 67108863);
                        for (var r = (1 << 26) % t, i = 0, o = this.length - 1; o >= 0; o--)
                            i = (r * i + (0 | this.words[o])) % t;
                        return e ? -i : i
                    }
                    ,
                    i.prototype.modn = function(t) {
                        return this.modrn(t)
                    }
                    ,
                    i.prototype.idivn = function(t) {
                        var e = t < 0;
                        e && (t = -t),
                        n(t <= 67108863);
                        for (var r = 0, i = this.length - 1; i >= 0; i--) {
                            var o = (0 | this.words[i]) + 67108864 * r;
                            this.words[i] = o / t | 0,
                            r = o % t
                        }
                        return this._strip(),
                        e ? this.ineg() : this
                    }
                    ,
                    i.prototype.divn = function(t) {
                        return this.clone().idivn(t)
                    }
                    ,
                    i.prototype.egcd = function(t) {
                        n(0 === t.negative),
                        n(!t.isZero());
                        var e = this
                          , r = t.clone();
                        e = 0 !== e.negative ? e.umod(t) : e.clone();
                        for (var o = new i(1), s = new i(0), u = new i(0), a = new i(1), c = 0; e.isEven() && r.isEven(); )
                            e.iushrn(1),
                            r.iushrn(1),
                            ++c;
                        for (var l = r.clone(), h = e.clone(); !e.isZero(); ) {
                            for (var f = 0, d = 1; 0 == (e.words[0] & d) && f < 26; ++f,
                            d <<= 1)
                                ;
                            if (f > 0)
                                for (e.iushrn(f); f-- > 0; )
                                    (o.isOdd() || s.isOdd()) && (o.iadd(l),
                                    s.isub(h)),
                                    o.iushrn(1),
                                    s.iushrn(1);
                            for (var p = 0, b = 1; 0 == (r.words[0] & b) && p < 26; ++p,
                            b <<= 1)
                                ;
                            if (p > 0)
                                for (r.iushrn(p); p-- > 0; )
                                    (u.isOdd() || a.isOdd()) && (u.iadd(l),
                                    a.isub(h)),
                                    u.iushrn(1),
                                    a.iushrn(1);
                            e.cmp(r) >= 0 ? (e.isub(r),
                            o.isub(u),
                            s.isub(a)) : (r.isub(e),
                            u.isub(o),
                            a.isub(s))
                        }
                        return {
                            a: u,
                            b: a,
                            gcd: r.iushln(c)
                        }
                    }
                    ,
                    i.prototype._invmp = function(t) {
                        n(0 === t.negative),
                        n(!t.isZero());
                        var e = this
                          , r = t.clone();
                        e = 0 !== e.negative ? e.umod(t) : e.clone();
                        for (var o, s = new i(1), u = new i(0), a = r.clone(); e.cmpn(1) > 0 && r.cmpn(1) > 0; ) {
                            for (var c = 0, l = 1; 0 == (e.words[0] & l) && c < 26; ++c,
                            l <<= 1)
                                ;
                            if (c > 0)
                                for (e.iushrn(c); c-- > 0; )
                                    s.isOdd() && s.iadd(a),
                                    s.iushrn(1);
                            for (var h = 0, f = 1; 0 == (r.words[0] & f) && h < 26; ++h,
                            f <<= 1)
                                ;
                            if (h > 0)
                                for (r.iushrn(h); h-- > 0; )
                                    u.isOdd() && u.iadd(a),
                                    u.iushrn(1);
                            e.cmp(r) >= 0 ? (e.isub(r),
                            s.isub(u)) : (r.isub(e),
                            u.isub(s))
                        }
                        return (o = 0 === e.cmpn(1) ? s : u).cmpn(0) < 0 && o.iadd(t),
                        o
                    }
                    ,
                    i.prototype.gcd = function(t) {
                        if (this.isZero())
                            return t.abs();
                        if (t.isZero())
                            return this.abs();
                        var e = this.clone()
                          , n = t.clone();
                        e.negative = 0,
                        n.negative = 0;
                        for (var r = 0; e.isEven() && n.isEven(); r++)
                            e.iushrn(1),
                            n.iushrn(1);
                        for (; ; ) {
                            for (; e.isEven(); )
                                e.iushrn(1);
                            for (; n.isEven(); )
                                n.iushrn(1);
                            var i = e.cmp(n);
                            if (i < 0) {
                                var o = e;
                                e = n,
                                n = o
                            } else if (0 === i || 0 === n.cmpn(1))
                                break;
                            e.isub(n)
                        }
                        return n.iushln(r)
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
                        n("number" == typeof t);
                        var e = t % 26
                          , r = (t - e) / 26
                          , i = 1 << e;
                        if (this.length <= r)
                            return this._expand(r + 1),
                            this.words[r] |= i,
                            this;
                        for (var o = i, s = r; 0 !== o && s < this.length; s++) {
                            var u = 0 | this.words[s];
                            o = (u += o) >>> 26,
                            u &= 67108863,
                            this.words[s] = u
                        }
                        return 0 !== o && (this.words[s] = o,
                        this.length++),
                        this
                    }
                    ,
                    i.prototype.isZero = function() {
                        return 1 === this.length && 0 === this.words[0]
                    }
                    ,
                    i.prototype.cmpn = function(t) {
                        var e, r = t < 0;
                        if (0 !== this.negative && !r)
                            return -1;
                        if (0 === this.negative && r)
                            return 1;
                        if (this._strip(),
                        this.length > 1)
                            e = 1;
                        else {
                            r && (t = -t),
                            n(t <= 67108863, "Number is too big");
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
                        for (var e = 0, n = this.length - 1; n >= 0; n--) {
                            var r = 0 | this.words[n]
                              , i = 0 | t.words[n];
                            if (r !== i) {
                                r < i ? e = -1 : r > i && (e = 1);
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
                        return new S(t)
                    }
                    ,
                    i.prototype.toRed = function(t) {
                        return n(!this.red, "Already a number in reduction context"),
                        n(0 === this.negative, "red works only with positives"),
                        t.convertTo(this)._forceRed(t)
                    }
                    ,
                    i.prototype.fromRed = function() {
                        return n(this.red, "fromRed works only with numbers in reduction context"),
                        this.red.convertFrom(this)
                    }
                    ,
                    i.prototype._forceRed = function(t) {
                        return this.red = t,
                        this
                    }
                    ,
                    i.prototype.forceRed = function(t) {
                        return n(!this.red, "Already a number in reduction context"),
                        this._forceRed(t)
                    }
                    ,
                    i.prototype.redAdd = function(t) {
                        return n(this.red, "redAdd works only with red numbers"),
                        this.red.add(this, t)
                    }
                    ,
                    i.prototype.redIAdd = function(t) {
                        return n(this.red, "redIAdd works only with red numbers"),
                        this.red.iadd(this, t)
                    }
                    ,
                    i.prototype.redSub = function(t) {
                        return n(this.red, "redSub works only with red numbers"),
                        this.red.sub(this, t)
                    }
                    ,
                    i.prototype.redISub = function(t) {
                        return n(this.red, "redISub works only with red numbers"),
                        this.red.isub(this, t)
                    }
                    ,
                    i.prototype.redShl = function(t) {
                        return n(this.red, "redShl works only with red numbers"),
                        this.red.shl(this, t)
                    }
                    ,
                    i.prototype.redMul = function(t) {
                        return n(this.red, "redMul works only with red numbers"),
                        this.red._verify2(this, t),
                        this.red.mul(this, t)
                    }
                    ,
                    i.prototype.redIMul = function(t) {
                        return n(this.red, "redMul works only with red numbers"),
                        this.red._verify2(this, t),
                        this.red.imul(this, t)
                    }
                    ,
                    i.prototype.redSqr = function() {
                        return n(this.red, "redSqr works only with red numbers"),
                        this.red._verify1(this),
                        this.red.sqr(this)
                    }
                    ,
                    i.prototype.redISqr = function() {
                        return n(this.red, "redISqr works only with red numbers"),
                        this.red._verify1(this),
                        this.red.isqr(this)
                    }
                    ,
                    i.prototype.redSqrt = function() {
                        return n(this.red, "redSqrt works only with red numbers"),
                        this.red._verify1(this),
                        this.red.sqrt(this)
                    }
                    ,
                    i.prototype.redInvm = function() {
                        return n(this.red, "redInvm works only with red numbers"),
                        this.red._verify1(this),
                        this.red.invm(this)
                    }
                    ,
                    i.prototype.redNeg = function() {
                        return n(this.red, "redNeg works only with red numbers"),
                        this.red._verify1(this),
                        this.red.neg(this)
                    }
                    ,
                    i.prototype.redPow = function(t) {
                        return n(this.red && !t.red, "redPow(normalNum)"),
                        this.red._verify1(this),
                        this.red.pow(this, t)
                    }
                    ;
                    var m = {
                        k256: null,
                        p224: null,
                        p192: null,
                        p25519: null
                    };
                    function g(t, e) {
                        this.name = t,
                        this.p = new i(e,16),
                        this.n = this.p.bitLength(),
                        this.k = new i(1).iushln(this.n).isub(this.p),
                        this.tmp = this._tmp()
                    }
                    function w() {
                        g.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                    }
                    function _() {
                        g.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                    }
                    function k() {
                        g.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                    }
                    function x() {
                        g.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                    }
                    function S(t) {
                        if ("string" == typeof t) {
                            var e = i._prime(t);
                            this.m = e.p,
                            this.prime = e
                        } else
                            n(t.gtn(1), "modulus must be greater than 1"),
                            this.m = t,
                            this.prime = null
                    }
                    function M(t) {
                        S.call(this, t),
                        this.shift = this.m.bitLength(),
                        this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26),
                        this.r = new i(1).iushln(this.shift),
                        this.r2 = this.imod(this.r.sqr()),
                        this.rinv = this.r._invmp(this.m),
                        this.minv = this.rinv.mul(this.r).isubn(1).div(this.m),
                        this.minv = this.minv.umod(this.r),
                        this.minv = this.r.sub(this.minv)
                    }
                    g.prototype._tmp = function() {
                        var t = new i(null);
                        return t.words = new Array(Math.ceil(this.n / 13)),
                        t
                    }
                    ,
                    g.prototype.ireduce = function(t) {
                        var e, n = t;
                        do {
                            this.split(n, this.tmp),
                            e = (n = (n = this.imulK(n)).iadd(this.tmp)).bitLength()
                        } while (e > this.n);
                        var r = e < this.n ? -1 : n.ucmp(this.p);
                        return 0 === r ? (n.words[0] = 0,
                        n.length = 1) : r > 0 ? n.isub(this.p) : n._strip(),
                        n
                    }
                    ,
                    g.prototype.split = function(t, e) {
                        t.iushrn(this.n, 0, e)
                    }
                    ,
                    g.prototype.imulK = function(t) {
                        return t.imul(this.k)
                    }
                    ,
                    r(w, g),
                    w.prototype.split = function(t, e) {
                        for (var n = Math.min(t.length, 9), r = 0; r < n; r++)
                            e.words[r] = t.words[r];
                        if (e.length = n,
                        t.length <= 9)
                            return t.words[0] = 0,
                            void (t.length = 1);
                        var i = t.words[9];
                        for (e.words[e.length++] = 4194303 & i,
                        r = 10; r < t.length; r++) {
                            var o = 0 | t.words[r];
                            t.words[r - 10] = (4194303 & o) << 4 | i >>> 22,
                            i = o
                        }
                        i >>>= 22,
                        t.words[r - 10] = i,
                        0 === i && t.length > 10 ? t.length -= 10 : t.length -= 9
                    }
                    ,
                    w.prototype.imulK = function(t) {
                        t.words[t.length] = 0,
                        t.words[t.length + 1] = 0,
                        t.length += 2;
                        for (var e = 0, n = 0; n < t.length; n++) {
                            var r = 0 | t.words[n];
                            e += 977 * r,
                            t.words[n] = 67108863 & e,
                            e = 64 * r + (e / 67108864 | 0)
                        }
                        return 0 === t.words[t.length - 1] && (t.length--,
                        0 === t.words[t.length - 1] && t.length--),
                        t
                    }
                    ,
                    r(_, g),
                    r(k, g),
                    r(x, g),
                    x.prototype.imulK = function(t) {
                        for (var e = 0, n = 0; n < t.length; n++) {
                            var r = 19 * (0 | t.words[n]) + e
                              , i = 67108863 & r;
                            r >>>= 26,
                            t.words[n] = i,
                            e = r
                        }
                        return 0 !== e && (t.words[t.length++] = e),
                        t
                    }
                    ,
                    i._prime = function(t) {
                        if (m[t])
                            return m[t];
                        var e;
                        if ("k256" === t)
                            e = new w;
                        else if ("p224" === t)
                            e = new _;
                        else if ("p192" === t)
                            e = new k;
                        else {
                            if ("p25519" !== t)
                                throw new Error("Unknown prime " + t);
                            e = new x
                        }
                        return m[t] = e,
                        e
                    }
                    ,
                    S.prototype._verify1 = function(t) {
                        n(0 === t.negative, "red works only with positives"),
                        n(t.red, "red works only with red numbers")
                    }
                    ,
                    S.prototype._verify2 = function(t, e) {
                        n(0 == (t.negative | e.negative), "red works only with positives"),
                        n(t.red && t.red === e.red, "red works only with red numbers")
                    }
                    ,
                    S.prototype.imod = function(t) {
                        return this.prime ? this.prime.ireduce(t)._forceRed(this) : (a(t, t.umod(this.m)._forceRed(this)),
                        t)
                    }
                    ,
                    S.prototype.neg = function(t) {
                        return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
                    }
                    ,
                    S.prototype.add = function(t, e) {
                        this._verify2(t, e);
                        var n = t.add(e);
                        return n.cmp(this.m) >= 0 && n.isub(this.m),
                        n._forceRed(this)
                    }
                    ,
                    S.prototype.iadd = function(t, e) {
                        this._verify2(t, e);
                        var n = t.iadd(e);
                        return n.cmp(this.m) >= 0 && n.isub(this.m),
                        n
                    }
                    ,
                    S.prototype.sub = function(t, e) {
                        this._verify2(t, e);
                        var n = t.sub(e);
                        return n.cmpn(0) < 0 && n.iadd(this.m),
                        n._forceRed(this)
                    }
                    ,
                    S.prototype.isub = function(t, e) {
                        this._verify2(t, e);
                        var n = t.isub(e);
                        return n.cmpn(0) < 0 && n.iadd(this.m),
                        n
                    }
                    ,
                    S.prototype.shl = function(t, e) {
                        return this._verify1(t),
                        this.imod(t.ushln(e))
                    }
                    ,
                    S.prototype.imul = function(t, e) {
                        return this._verify2(t, e),
                        this.imod(t.imul(e))
                    }
                    ,
                    S.prototype.mul = function(t, e) {
                        return this._verify2(t, e),
                        this.imod(t.mul(e))
                    }
                    ,
                    S.prototype.isqr = function(t) {
                        return this.imul(t, t.clone())
                    }
                    ,
                    S.prototype.sqr = function(t) {
                        return this.mul(t, t)
                    }
                    ,
                    S.prototype.sqrt = function(t) {
                        if (t.isZero())
                            return t.clone();
                        var e = this.m.andln(3);
                        if (n(e % 2 == 1),
                        3 === e) {
                            var r = this.m.add(new i(1)).iushrn(2);
                            return this.pow(t, r)
                        }
                        for (var o = this.m.subn(1), s = 0; !o.isZero() && 0 === o.andln(1); )
                            s++,
                            o.iushrn(1);
                        n(!o.isZero());
                        var u = new i(1).toRed(this)
                          , a = u.redNeg()
                          , c = this.m.subn(1).iushrn(1)
                          , l = this.m.bitLength();
                        for (l = new i(2 * l * l).toRed(this); 0 !== this.pow(l, c).cmp(a); )
                            l.redIAdd(a);
                        for (var h = this.pow(l, o), f = this.pow(t, o.addn(1).iushrn(1)), d = this.pow(t, o), p = s; 0 !== d.cmp(u); ) {
                            for (var b = d, v = 0; 0 !== b.cmp(u); v++)
                                b = b.redSqr();
                            n(v < p);
                            var m = this.pow(h, new i(1).iushln(p - v - 1));
                            f = f.redMul(m),
                            h = m.redSqr(),
                            d = d.redMul(h),
                            p = v
                        }
                        return f
                    }
                    ,
                    S.prototype.invm = function(t) {
                        var e = t._invmp(this.m);
                        return 0 !== e.negative ? (e.negative = 0,
                        this.imod(e).redNeg()) : this.imod(e)
                    }
                    ,
                    S.prototype.pow = function(t, e) {
                        if (e.isZero())
                            return new i(1).toRed(this);
                        if (0 === e.cmpn(1))
                            return t.clone();
                        var n = new Array(16);
                        n[0] = new i(1).toRed(this),
                        n[1] = t;
                        for (var r = 2; r < n.length; r++)
                            n[r] = this.mul(n[r - 1], t);
                        var o = n[0]
                          , s = 0
                          , u = 0
                          , a = e.bitLength() % 26;
                        for (0 === a && (a = 26),
                        r = e.length - 1; r >= 0; r--) {
                            for (var c = e.words[r], l = a - 1; l >= 0; l--) {
                                var h = c >> l & 1;
                                o !== n[0] && (o = this.sqr(o)),
                                0 !== h || 0 !== s ? (s <<= 1,
                                s |= h,
                                (4 === ++u || 0 === r && 0 === l) && (o = this.mul(o, n[s]),
                                u = 0,
                                s = 0)) : u = 0
                            }
                            a = 26
                        }
                        return o
                    }
                    ,
                    S.prototype.convertTo = function(t) {
                        var e = t.umod(this.m);
                        return e === t ? e.clone() : e
                    }
                    ,
                    S.prototype.convertFrom = function(t) {
                        var e = t.clone();
                        return e.red = null,
                        e
                    }
                    ,
                    i.mont = function(t) {
                        return new M(t)
                    }
                    ,
                    r(M, S),
                    M.prototype.convertTo = function(t) {
                        return this.imod(t.ushln(this.shift))
                    }
                    ,
                    M.prototype.convertFrom = function(t) {
                        var e = this.imod(t.mul(this.rinv));
                        return e.red = null,
                        e
                    }
                    ,
                    M.prototype.imul = function(t, e) {
                        if (t.isZero() || e.isZero())
                            return t.words[0] = 0,
                            t.length = 1,
                            t;
                        var n = t.imul(e)
                          , r = n.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m)
                          , i = n.isub(r).iushrn(this.shift)
                          , o = i;
                        return i.cmp(this.m) >= 0 ? o = i.isub(this.m) : i.cmpn(0) < 0 && (o = i.iadd(this.m)),
                        o._forceRed(this)
                    }
                    ,
                    M.prototype.mul = function(t, e) {
                        if (t.isZero() || e.isZero())
                            return new i(0)._forceRed(this);
                        var n = t.mul(e)
                          , r = n.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m)
                          , o = n.isub(r).iushrn(this.shift)
                          , s = o;
                        return o.cmp(this.m) >= 0 ? s = o.isub(this.m) : o.cmpn(0) < 0 && (s = o.iadd(this.m)),
                        s._forceRed(this)
                    }
                    ,
                    M.prototype.invm = function(t) {
                        return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)
                    }
                }(t, v.i)
            }
            ))
              , E = Object(v.g)((function(t, e) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                e.OpaqueType = function() {
                    return function(t) {
                        return t
                    }
                }
                ,
                e.HexString = function(t) {
                    return t
                }
                ,
                e.AddressString = function(t) {
                    return t
                }
                ,
                e.BigIntString = function(t) {
                    return t
                }
                ,
                e.IntNumber = function(t) {
                    return Math.floor(t)
                }
                ,
                e.RegExpString = function(t) {
                    return t
                }
            }
            ));
            Object(v.h)(E),
            E.OpaqueType,
            E.HexString,
            E.AddressString,
            E.BigIntString,
            E.IntNumber,
            E.RegExpString;
            var O = Object(v.g)((function(e, n) {
                var r = v.i && v.i.__importDefault || function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                ;
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var i = r(M)
                  , o = /^[0-9]*$/
                  , s = /^[a-f0-9]*$/;
                function u(t) {
                    return t.startsWith("0x") || t.startsWith("0X")
                }
                function a(t) {
                    return u(t) ? t.slice(2) : t
                }
                function c(t) {
                    return u(t) ? "0x" + t.slice(2) : "0x" + t
                }
                function l(t) {
                    if ("string" != typeof t)
                        return !1;
                    var e = a(t).toLowerCase();
                    return s.test(e)
                }
                function h(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if ("string" == typeof t) {
                        var n = a(t).toLowerCase();
                        if (s.test(n))
                            return E.HexString(e ? "0x" + n : n)
                    }
                    throw new Error('"'.concat(t, '" is not a hexadecimal string'))
                }
                function f(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                      , n = h(t, !1);
                    return n.length % 2 == 1 && (n = E.HexString("0" + n)),
                    e ? E.HexString("0x" + n) : n
                }
                function d(t) {
                    if ("number" == typeof t && Number.isInteger(t))
                        return E.IntNumber(t);
                    if ("string" == typeof t) {
                        if (o.test(t))
                            return E.IntNumber(Number(t));
                        if (l(t))
                            return E.IntNumber(new i.default(f(t, !1),16).toNumber())
                    }
                    throw new Error("Not an integer: ".concat(t))
                }
                function p(t) {
                    if (null == t || "function" != typeof t.constructor)
                        return !1;
                    var e = t.constructor;
                    return "function" == typeof e.config && "number" == typeof e.EUCLID
                }
                n.hexStringFromBuffer = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                      , n = t.toString("hex");
                    return E.HexString(e ? "0x" + n : n)
                }
                ,
                n.bigIntStringFromBN = function(t) {
                    return E.BigIntString(t.toString(10))
                }
                ,
                n.intNumberFromHexString = function(t) {
                    return E.IntNumber(new i.default(f(t, !1),16).toNumber())
                }
                ,
                n.hexStringFromIntNumber = function(t) {
                    return E.HexString("0x" + new i.default(t).toString(16))
                }
                ,
                n.has0xPrefix = u,
                n.strip0x = a,
                n.prepend0x = c,
                n.isHexString = l,
                n.ensureHexString = h,
                n.ensureEvenLengthHexString = f,
                n.ensureAddressString = function(t) {
                    if ("string" == typeof t) {
                        var e = a(t).toLowerCase();
                        if (l(e) && 40 === e.length)
                            return E.AddressString(c(e))
                    }
                    throw new Error("Invalid Ethereum address: ".concat(t))
                }
                ,
                n.ensureBuffer = function(e) {
                    if (t.isBuffer(e))
                        return e;
                    if ("string" == typeof e) {
                        if (l(e)) {
                            var n = f(e, !1);
                            return t.from(n, "hex")
                        }
                        return t.from(e, "utf8")
                    }
                    throw new Error("Not binary data: ".concat(e))
                }
                ,
                n.ensureIntNumber = d,
                n.ensureRegExpString = function(t) {
                    if (t instanceof RegExp)
                        return E.RegExpString(t.toString());
                    throw new Error("Not a RegExp: ".concat(t))
                }
                ,
                n.ensureBN = function(t) {
                    if (null != t && (i.default.isBN(t) || p(t)))
                        return new i.default(t.toString(10),10);
                    if ("number" == typeof t)
                        return new i.default(d(t));
                    if ("string" == typeof t) {
                        if (o.test(t))
                            return new i.default(t,10);
                        if (l(t))
                            return new i.default(f(t, !1),16)
                    }
                    throw new Error("Not an integer: ".concat(t))
                }
                ,
                n.isBigNumber = p,
                n.range = function(t, e) {
                    return Array.from({
                        length: e - t
                    }, (function(e, n) {
                        return t + n
                    }
                    ))
                }
                ,
                n.getFavicon = function() {
                    var t = document.querySelector('link[sizes="192x192"]') || document.querySelector('link[sizes="180x180"]') || document.querySelector('link[rel="icon"]') || document.querySelector('link[rel="shortcut icon"]')
                      , e = document.location
                      , n = e.protocol
                      , r = e.host
                      , i = t ? t.getAttribute("href") : null;
                    return !i || i.startsWith("javascript:") ? null : i.startsWith("http://") || i.startsWith("https://") || i.startsWith("data:") ? i : i.startsWith("//") ? n + i : "".concat(n, "//").concat(r).concat(i)
                }
            }
            ));
            Object(v.h)(O),
            O.hexStringFromBuffer,
            O.bigIntStringFromBN,
            O.intNumberFromHexString,
            O.hexStringFromIntNumber,
            O.has0xPrefix,
            O.strip0x,
            O.prepend0x,
            O.isHexString,
            O.ensureHexString,
            O.ensureEvenLengthHexString,
            O.ensureAddressString,
            O.ensureBuffer,
            O.ensureIntNumber,
            O.ensureRegExpString,
            O.ensureBN,
            O.isBigNumber,
            O.range,
            O.getFavicon;
            var j = w.a.Transform
              , C = w.a.Transform
              , N = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648]
              , T = function(t) {
                for (var e = 0; e < 24; ++e) {
                    var n = t[0] ^ t[10] ^ t[20] ^ t[30] ^ t[40]
                      , r = t[1] ^ t[11] ^ t[21] ^ t[31] ^ t[41]
                      , i = t[2] ^ t[12] ^ t[22] ^ t[32] ^ t[42]
                      , o = t[3] ^ t[13] ^ t[23] ^ t[33] ^ t[43]
                      , s = t[4] ^ t[14] ^ t[24] ^ t[34] ^ t[44]
                      , u = t[5] ^ t[15] ^ t[25] ^ t[35] ^ t[45]
                      , a = t[6] ^ t[16] ^ t[26] ^ t[36] ^ t[46]
                      , c = t[7] ^ t[17] ^ t[27] ^ t[37] ^ t[47]
                      , l = t[8] ^ t[18] ^ t[28] ^ t[38] ^ t[48]
                      , h = t[9] ^ t[19] ^ t[29] ^ t[39] ^ t[49]
                      , f = l ^ (i << 1 | o >>> 31)
                      , d = h ^ (o << 1 | i >>> 31)
                      , p = t[0] ^ f
                      , b = t[1] ^ d
                      , v = t[10] ^ f
                      , m = t[11] ^ d
                      , y = t[20] ^ f
                      , g = t[21] ^ d
                      , w = t[30] ^ f
                      , _ = t[31] ^ d
                      , k = t[40] ^ f
                      , x = t[41] ^ d;
                    f = n ^ (s << 1 | u >>> 31),
                    d = r ^ (u << 1 | s >>> 31);
                    var S = t[2] ^ f
                      , M = t[3] ^ d
                      , E = t[12] ^ f
                      , O = t[13] ^ d
                      , j = t[22] ^ f
                      , C = t[23] ^ d
                      , T = t[32] ^ f
                      , I = t[33] ^ d
                      , A = t[42] ^ f
                      , P = t[43] ^ d;
                    f = i ^ (a << 1 | c >>> 31),
                    d = o ^ (c << 1 | a >>> 31);
                    var R = t[4] ^ f
                      , D = t[5] ^ d
                      , L = t[14] ^ f
                      , B = t[15] ^ d
                      , F = t[24] ^ f
                      , W = t[25] ^ d
                      , q = t[34] ^ f
                      , U = t[35] ^ d
                      , V = t[44] ^ f
                      , H = t[45] ^ d;
                    f = s ^ (l << 1 | h >>> 31),
                    d = u ^ (h << 1 | l >>> 31);
                    var z = t[6] ^ f
                      , K = t[7] ^ d
                      , J = t[16] ^ f
                      , $ = t[17] ^ d
                      , G = t[26] ^ f
                      , Y = t[27] ^ d
                      , Z = t[36] ^ f
                      , Q = t[37] ^ d
                      , X = t[46] ^ f
                      , tt = t[47] ^ d;
                    f = a ^ (n << 1 | r >>> 31),
                    d = c ^ (r << 1 | n >>> 31);
                    var et = t[8] ^ f
                      , nt = t[9] ^ d
                      , rt = t[18] ^ f
                      , it = t[19] ^ d
                      , ot = t[28] ^ f
                      , st = t[29] ^ d
                      , ut = t[38] ^ f
                      , at = t[39] ^ d
                      , ct = t[48] ^ f
                      , lt = t[49] ^ d
                      , ht = p
                      , ft = b
                      , dt = m << 4 | v >>> 28
                      , pt = v << 4 | m >>> 28
                      , bt = y << 3 | g >>> 29
                      , vt = g << 3 | y >>> 29
                      , mt = _ << 9 | w >>> 23
                      , yt = w << 9 | _ >>> 23
                      , gt = k << 18 | x >>> 14
                      , wt = x << 18 | k >>> 14
                      , _t = S << 1 | M >>> 31
                      , kt = M << 1 | S >>> 31
                      , xt = O << 12 | E >>> 20
                      , St = E << 12 | O >>> 20
                      , Mt = j << 10 | C >>> 22
                      , Et = C << 10 | j >>> 22
                      , Ot = I << 13 | T >>> 19
                      , jt = T << 13 | I >>> 19
                      , Ct = A << 2 | P >>> 30
                      , Nt = P << 2 | A >>> 30
                      , Tt = D << 30 | R >>> 2
                      , It = R << 30 | D >>> 2
                      , At = L << 6 | B >>> 26
                      , Pt = B << 6 | L >>> 26
                      , Rt = W << 11 | F >>> 21
                      , Dt = F << 11 | W >>> 21
                      , Lt = q << 15 | U >>> 17
                      , Bt = U << 15 | q >>> 17
                      , Ft = H << 29 | V >>> 3
                      , Wt = V << 29 | H >>> 3
                      , qt = z << 28 | K >>> 4
                      , Ut = K << 28 | z >>> 4
                      , Vt = $ << 23 | J >>> 9
                      , Ht = J << 23 | $ >>> 9
                      , zt = G << 25 | Y >>> 7
                      , Kt = Y << 25 | G >>> 7
                      , Jt = Z << 21 | Q >>> 11
                      , $t = Q << 21 | Z >>> 11
                      , Gt = tt << 24 | X >>> 8
                      , Yt = X << 24 | tt >>> 8
                      , Zt = et << 27 | nt >>> 5
                      , Qt = nt << 27 | et >>> 5
                      , Xt = rt << 20 | it >>> 12
                      , te = it << 20 | rt >>> 12
                      , ee = st << 7 | ot >>> 25
                      , ne = ot << 7 | st >>> 25
                      , re = ut << 8 | at >>> 24
                      , ie = at << 8 | ut >>> 24
                      , oe = ct << 14 | lt >>> 18
                      , se = lt << 14 | ct >>> 18;
                    t[0] = ht ^ ~xt & Rt,
                    t[1] = ft ^ ~St & Dt,
                    t[10] = qt ^ ~Xt & bt,
                    t[11] = Ut ^ ~te & vt,
                    t[20] = _t ^ ~At & zt,
                    t[21] = kt ^ ~Pt & Kt,
                    t[30] = Zt ^ ~dt & Mt,
                    t[31] = Qt ^ ~pt & Et,
                    t[40] = Tt ^ ~Vt & ee,
                    t[41] = It ^ ~Ht & ne,
                    t[2] = xt ^ ~Rt & Jt,
                    t[3] = St ^ ~Dt & $t,
                    t[12] = Xt ^ ~bt & Ot,
                    t[13] = te ^ ~vt & jt,
                    t[22] = At ^ ~zt & re,
                    t[23] = Pt ^ ~Kt & ie,
                    t[32] = dt ^ ~Mt & Lt,
                    t[33] = pt ^ ~Et & Bt,
                    t[42] = Vt ^ ~ee & mt,
                    t[43] = Ht ^ ~ne & yt,
                    t[4] = Rt ^ ~Jt & oe,
                    t[5] = Dt ^ ~$t & se,
                    t[14] = bt ^ ~Ot & Ft,
                    t[15] = vt ^ ~jt & Wt,
                    t[24] = zt ^ ~re & gt,
                    t[25] = Kt ^ ~ie & wt,
                    t[34] = Mt ^ ~Lt & Gt,
                    t[35] = Et ^ ~Bt & Yt,
                    t[44] = ee ^ ~mt & Ct,
                    t[45] = ne ^ ~yt & Nt,
                    t[6] = Jt ^ ~oe & ht,
                    t[7] = $t ^ ~se & ft,
                    t[16] = Ot ^ ~Ft & qt,
                    t[17] = jt ^ ~Wt & Ut,
                    t[26] = re ^ ~gt & _t,
                    t[27] = ie ^ ~wt & kt,
                    t[36] = Lt ^ ~Gt & Zt,
                    t[37] = Bt ^ ~Yt & Qt,
                    t[46] = mt ^ ~Ct & Tt,
                    t[47] = yt ^ ~Nt & It,
                    t[8] = oe ^ ~ht & xt,
                    t[9] = se ^ ~ft & St,
                    t[18] = Ft ^ ~qt & Xt,
                    t[19] = Wt ^ ~Ut & te,
                    t[28] = gt ^ ~_t & At,
                    t[29] = wt ^ ~kt & Pt,
                    t[38] = Gt ^ ~Zt & dt,
                    t[39] = Yt ^ ~Qt & pt,
                    t[48] = Ct ^ ~Tt & Vt,
                    t[49] = Nt ^ ~It & Ht,
                    t[0] ^= N[2 * e],
                    t[1] ^= N[2 * e + 1]
                }
            };
            function I() {
                this.state = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                this.blockSize = null,
                this.count = 0,
                this.squeezing = !1
            }
            I.prototype.initialize = function(t, e) {
                for (var n = 0; n < 50; ++n)
                    this.state[n] = 0;
                this.blockSize = t / 8,
                this.count = 0,
                this.squeezing = !1
            }
            ,
            I.prototype.absorb = function(t) {
                for (var e = 0; e < t.length; ++e)
                    this.state[~~(this.count / 4)] ^= t[e] << this.count % 4 * 8,
                    this.count += 1,
                    this.count === this.blockSize && (T(this.state),
                    this.count = 0)
            }
            ,
            I.prototype.absorbLastFewBits = function(t) {
                this.state[~~(this.count / 4)] ^= t << this.count % 4 * 8,
                0 != (128 & t) && this.count === this.blockSize - 1 && T(this.state),
                this.state[~~((this.blockSize - 1) / 4)] ^= 128 << (this.blockSize - 1) % 4 * 8,
                T(this.state),
                this.count = 0,
                this.squeezing = !0
            }
            ,
            I.prototype.squeeze = function(e) {
                this.squeezing || this.absorbLastFewBits(1);
                for (var n = t.alloc(e), r = 0; r < e; ++r)
                    n[r] = this.state[~~(this.count / 4)] >>> this.count % 4 * 8 & 255,
                    this.count += 1,
                    this.count === this.blockSize && (T(this.state),
                    this.count = 0);
                return n
            }
            ,
            I.prototype.copy = function(t) {
                for (var e = 0; e < 50; ++e)
                    t.state[e] = this.state[e];
                t.blockSize = this.blockSize,
                t.count = this.count,
                t.squeezing = this.squeezing
            }
            ;
            var A = function(e) {
                var n = function(e) {
                    return function(n) {
                        Object(p.a)(i, n);
                        var r = Object(b.a)(i);
                        function i(t, n, o, s, u) {
                            var a;
                            return Object(f.a)(this, i),
                            (a = r.call(this, u))._rate = t,
                            a._capacity = n,
                            a._delimitedSuffix = o,
                            a._hashBitLength = s,
                            a._options = u,
                            a._state = new e,
                            a._state.initialize(t, n),
                            a._finalized = !1,
                            a
                        }
                        return Object(d.a)(i, [{
                            key: "_transform",
                            value: function(t, e, n) {
                                var r = null;
                                try {
                                    this.update(t, e)
                                } catch (t) {
                                    r = t
                                }
                                n(r)
                            }
                        }, {
                            key: "_flush",
                            value: function(t) {
                                var e = null;
                                try {
                                    this.push(this.digest())
                                } catch (t) {
                                    e = t
                                }
                                t(e)
                            }
                        }, {
                            key: "update",
                            value: function(e, n) {
                                if (!t.isBuffer(e) && "string" != typeof e)
                                    throw new TypeError("Data must be a string or a buffer");
                                if (this._finalized)
                                    throw new Error("Digest already called");
                                return t.isBuffer(e) || (e = t.from(e, n)),
                                this._state.absorb(e),
                                this
                            }
                        }, {
                            key: "digest",
                            value: function(t) {
                                if (this._finalized)
                                    throw new Error("Digest already called");
                                this._finalized = !0,
                                this._delimitedSuffix && this._state.absorbLastFewBits(this._delimitedSuffix);
                                var e = this._state.squeeze(this._hashBitLength / 8);
                                return void 0 !== t && (e = e.toString(t)),
                                this._resetState(),
                                e
                            }
                        }, {
                            key: "_resetState",
                            value: function() {
                                return this._state.initialize(this._rate, this._capacity),
                                this
                            }
                        }, {
                            key: "_clone",
                            value: function() {
                                var t = new i(this._rate,this._capacity,this._delimitedSuffix,this._hashBitLength,this._options);
                                return this._state.copy(t._state),
                                t._finalized = this._finalized,
                                t
                            }
                        }]),
                        i
                    }(j)
                }(e)
                  , r = function(e) {
                    return function(n) {
                        Object(p.a)(i, n);
                        var r = Object(b.a)(i);
                        function i(t, n, o, s) {
                            var u;
                            return Object(f.a)(this, i),
                            (u = r.call(this, s))._rate = t,
                            u._capacity = n,
                            u._delimitedSuffix = o,
                            u._options = s,
                            u._state = new e,
                            u._state.initialize(t, n),
                            u._finalized = !1,
                            u
                        }
                        return Object(d.a)(i, [{
                            key: "_transform",
                            value: function(t, e, n) {
                                var r = null;
                                try {
                                    this.update(t, e)
                                } catch (t) {
                                    r = t
                                }
                                n(r)
                            }
                        }, {
                            key: "_flush",
                            value: function() {}
                        }, {
                            key: "_read",
                            value: function(t) {
                                this.push(this.squeeze(t))
                            }
                        }, {
                            key: "update",
                            value: function(e, n) {
                                if (!t.isBuffer(e) && "string" != typeof e)
                                    throw new TypeError("Data must be a string or a buffer");
                                if (this._finalized)
                                    throw new Error("Squeeze already called");
                                return t.isBuffer(e) || (e = t.from(e, n)),
                                this._state.absorb(e),
                                this
                            }
                        }, {
                            key: "squeeze",
                            value: function(t, e) {
                                this._finalized || (this._finalized = !0,
                                this._state.absorbLastFewBits(this._delimitedSuffix));
                                var n = this._state.squeeze(t);
                                return void 0 !== e && (n = n.toString(e)),
                                n
                            }
                        }, {
                            key: "_resetState",
                            value: function() {
                                return this._state.initialize(this._rate, this._capacity),
                                this
                            }
                        }, {
                            key: "_clone",
                            value: function() {
                                var t = new i(this._rate,this._capacity,this._delimitedSuffix,this._options);
                                return this._state.copy(t._state),
                                t._finalized = this._finalized,
                                t
                            }
                        }]),
                        i
                    }(C)
                }(e);
                return function(t, e) {
                    switch ("string" == typeof t ? t.toLowerCase() : t) {
                    case "keccak224":
                        return new n(1152,448,null,224,e);
                    case "keccak256":
                        return new n(1088,512,null,256,e);
                    case "keccak384":
                        return new n(832,768,null,384,e);
                    case "keccak512":
                        return new n(576,1024,null,512,e);
                    case "sha3-224":
                        return new n(1152,448,6,224,e);
                    case "sha3-256":
                        return new n(1088,512,6,256,e);
                    case "sha3-384":
                        return new n(832,768,6,384,e);
                    case "sha3-512":
                        return new n(576,1024,6,512,e);
                    case "shake128":
                        return new r(1344,256,31,e);
                    case "shake256":
                        return new r(1088,512,31,e);
                    default:
                        throw new Error("Invald algorithm: " + t)
                    }
                }
            }(I);
            function P(e) {
                return t.allocUnsafe(e).fill(0)
            }
            function R(t, e, n) {
                var r = P(e);
                return t = D(t),
                n ? t.length < e ? (t.copy(r),
                r) : t.slice(0, e) : t.length < e ? (t.copy(r, e - t.length),
                r) : t.slice(-e)
            }
            function D(e) {
                if (!t.isBuffer(e))
                    if (Array.isArray(e))
                        e = t.from(e);
                    else if ("string" == typeof e)
                        e = L(e) ? t.from((n = B(e)).length % 2 ? "0" + n : n, "hex") : t.from(e);
                    else if ("number" == typeof e)
                        e = intToBuffer(e);
                    else if (null == e)
                        e = t.allocUnsafe(0);
                    else if (M.isBN(e))
                        e = e.toArrayLike(t);
                    else {
                        if (!e.toArray)
                            throw new Error("invalid type");
                        e = t.from(e.toArray())
                    }
                var n;
                return e
            }
            function L(t) {
                return "string" == typeof t && t.match(/^0x[0-9A-Fa-f]*$/)
            }
            function B(t) {
                return "string" == typeof t && t.startsWith("0x") ? t.slice(2) : t
            }
            var F = {
                zeros: P,
                setLength: R,
                setLengthRight: function(t, e) {
                    return R(t, e, !0)
                },
                isHexString: L,
                stripHexPrefix: B,
                toBuffer: D,
                bufferToHex: function(t) {
                    return "0x" + (t = D(t)).toString("hex")
                },
                keccak: function(t, e) {
                    return t = D(t),
                    e || (e = 256),
                    A("keccak" + e).update(t).digest()
                }
            };
            function W(t) {
                return t.startsWith("int[") ? "int256" + t.slice(3) : "int" === t ? "int256" : t.startsWith("uint[") ? "uint256" + t.slice(4) : "uint" === t ? "uint256" : t.startsWith("fixed[") ? "fixed128x128" + t.slice(5) : "fixed" === t ? "fixed128x128" : t.startsWith("ufixed[") ? "ufixed128x128" + t.slice(6) : "ufixed" === t ? "ufixed128x128" : t
            }
            function q(t) {
                return parseInt(/^\D+(\d+)$/.exec(t)[1], 10)
            }
            function U(t) {
                var e = /^\D+(\d+)x(\d+)$/.exec(t);
                return [parseInt(e[1], 10), parseInt(e[2], 10)]
            }
            function V(t) {
                var e = t.match(/(.*)\[(.*?)\]$/);
                return e ? "" === e[2] ? "dynamic" : parseInt(e[2], 10) : null
            }
            function H(t) {
                var e = typeof t;
                if ("string" === e)
                    return F.isHexString(t) ? new M(F.stripHexPrefix(t),16) : new M(t,10);
                if ("number" === e)
                    return new M(t);
                if (t.toArray)
                    return t;
                throw new Error("Argument is not a number")
            }
            function z(e, n) {
                var r, i, o, s;
                if ("address" === e)
                    return z("uint160", H(n));
                if ("bool" === e)
                    return z("uint8", n ? 1 : 0);
                if ("string" === e)
                    return z("bytes", new t(n,"utf8"));
                if (function(t) {
                    return t.lastIndexOf("]") === t.length - 1
                }(e)) {
                    if (void 0 === n.length)
                        throw new Error("Not an array?");
                    if ("dynamic" !== (r = V(e)) && 0 !== r && n.length > r)
                        throw new Error("Elements exceed array size: " + r);
                    for (s in o = [],
                    e = e.slice(0, e.lastIndexOf("[")),
                    "string" == typeof n && (n = JSON.parse(n)),
                    n)
                        o.push(z(e, n[s]));
                    if ("dynamic" === r) {
                        var u = z("uint256", n.length);
                        o.unshift(u)
                    }
                    return t.concat(o)
                }
                if ("bytes" === e)
                    return n = new t(n),
                    o = t.concat([z("uint256", n.length), n]),
                    n.length % 32 != 0 && (o = t.concat([o, F.zeros(32 - n.length % 32)])),
                    o;
                if (e.startsWith("bytes")) {
                    if ((r = q(e)) < 1 || r > 32)
                        throw new Error("Invalid bytes<N> width: " + r);
                    return F.setLengthRight(n, 32)
                }
                if (e.startsWith("uint")) {
                    if ((r = q(e)) % 8 || r < 8 || r > 256)
                        throw new Error("Invalid uint<N> width: " + r);
                    if ((i = H(n)).bitLength() > r)
                        throw new Error("Supplied uint exceeds width: " + r + " vs " + i.bitLength());
                    if (i < 0)
                        throw new Error("Supplied uint is negative");
                    return i.toArrayLike(t, "be", 32)
                }
                if (e.startsWith("int")) {
                    if ((r = q(e)) % 8 || r < 8 || r > 256)
                        throw new Error("Invalid int<N> width: " + r);
                    if ((i = H(n)).bitLength() > r)
                        throw new Error("Supplied int exceeds width: " + r + " vs " + i.bitLength());
                    return i.toTwos(256).toArrayLike(t, "be", 32)
                }
                if (e.startsWith("ufixed")) {
                    if (r = U(e),
                    (i = H(n)) < 0)
                        throw new Error("Supplied ufixed is negative");
                    return z("uint256", i.mul(new M(2).pow(new M(r[1]))))
                }
                if (e.startsWith("fixed"))
                    return r = U(e),
                    z("int256", H(n).mul(new M(2).pow(new M(r[1]))));
                throw new Error("Unsupported or invalid type: " + e)
            }
            function K(t) {
                return "string" === t || "bytes" === t || "dynamic" === V(t)
            }
            function J(e, n) {
                if (e.length !== n.length)
                    throw new Error("Number of types are not matching the values");
                for (var r, i, o = [], s = 0; s < e.length; s++) {
                    var u = W(e[s])
                      , a = n[s];
                    if ("bytes" === u)
                        o.push(a);
                    else if ("string" === u)
                        o.push(new t(a,"utf8"));
                    else if ("bool" === u)
                        o.push(new t(a ? "01" : "00","hex"));
                    else if ("address" === u)
                        o.push(F.setLength(a, 20));
                    else if (u.startsWith("bytes")) {
                        if ((r = q(u)) < 1 || r > 32)
                            throw new Error("Invalid bytes<N> width: " + r);
                        o.push(F.setLengthRight(a, r))
                    } else if (u.startsWith("uint")) {
                        if ((r = q(u)) % 8 || r < 8 || r > 256)
                            throw new Error("Invalid uint<N> width: " + r);
                        if ((i = H(a)).bitLength() > r)
                            throw new Error("Supplied uint exceeds width: " + r + " vs " + i.bitLength());
                        o.push(i.toArrayLike(t, "be", r / 8))
                    } else {
                        if (!u.startsWith("int"))
                            throw new Error("Unsupported or invalid type: " + u);
                        if ((r = q(u)) % 8 || r < 8 || r > 256)
                            throw new Error("Invalid int<N> width: " + r);
                        if ((i = H(a)).bitLength() > r)
                            throw new Error("Supplied int exceeds width: " + r + " vs " + i.bitLength());
                        o.push(i.toTwos(r).toArrayLike(t, "be", r / 8))
                    }
                }
                return t.concat(o)
            }
            var $ = function(e, n) {
                var r = []
                  , i = []
                  , o = 32 * e.length;
                for (var s in e) {
                    var u = W(e[s])
                      , a = z(u, n[s]);
                    K(u) ? (r.push(z("uint256", o)),
                    i.push(a),
                    o += a.length) : r.push(a)
                }
                return t.concat(r.concat(i))
            }
              , G = function(t, e) {
                return F.keccak(J(t, e))
            }
              , Y = {
                type: "object",
                properties: {
                    types: {
                        type: "object",
                        additionalProperties: {
                            type: "array",
                            items: {
                                type: "object",
                                properties: {
                                    name: {
                                        type: "string"
                                    },
                                    type: {
                                        type: "string"
                                    }
                                },
                                required: ["name", "type"]
                            }
                        }
                    },
                    primaryType: {
                        type: "string"
                    },
                    domain: {
                        type: "object"
                    },
                    message: {
                        type: "object"
                    }
                },
                required: ["types", "primaryType", "domain", "message"]
            }
              , Z = {
                encodeData: function(e, n, r) {
                    var i = this
                      , o = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]
                      , s = ["bytes32"]
                      , u = [this.hashType(e, r)];
                    if (o) {
                        var a, c = function e(n, s, u) {
                            if (void 0 !== r[s])
                                return ["bytes32", null == u ? "0x0000000000000000000000000000000000000000000000000000000000000000" : F.keccak(i.encodeData(s, u, r, o))];
                            if (void 0 === u)
                                throw new Error("missing value for field ".concat(n, " of type ").concat(s));
                            if ("bytes" === s)
                                return ["bytes32", F.keccak(u)];
                            if ("string" === s)
                                return "string" == typeof u && (u = t.from(u, "utf8")),
                                ["bytes32", F.keccak(u)];
                            if (s.lastIndexOf("]") === s.length - 1) {
                                var a = s.slice(0, s.lastIndexOf("["))
                                  , c = u.map((function(t) {
                                    return e(n, a, t)
                                }
                                ));
                                return ["bytes32", F.keccak($(c.map((function(t) {
                                    return Object(h.a)(t, 1)[0]
                                }
                                )), c.map((function(t) {
                                    return Object(h.a)(t, 2)[1]
                                }
                                ))))]
                            }
                            return [s, u]
                        }, f = Object(l.a)(r[e]);
                        try {
                            for (f.s(); !(a = f.n()).done; ) {
                                var d = a.value
                                  , p = c(d.name, d.type, n[d.name])
                                  , b = Object(h.a)(p, 2)
                                  , v = b[0]
                                  , m = b[1];
                                s.push(v),
                                u.push(m)
                            }
                        } catch (k) {
                            f.e(k)
                        } finally {
                            f.f()
                        }
                    } else {
                        var y, g = Object(l.a)(r[e]);
                        try {
                            for (g.s(); !(y = g.n()).done; ) {
                                var w = y.value
                                  , _ = n[w.name];
                                if (void 0 !== _)
                                    if ("bytes" === w.type)
                                        s.push("bytes32"),
                                        _ = F.keccak(_),
                                        u.push(_);
                                    else if ("string" === w.type)
                                        s.push("bytes32"),
                                        "string" == typeof _ && (_ = t.from(_, "utf8")),
                                        _ = F.keccak(_),
                                        u.push(_);
                                    else if (void 0 !== r[w.type])
                                        s.push("bytes32"),
                                        _ = F.keccak(this.encodeData(w.type, _, r, o)),
                                        u.push(_);
                                    else {
                                        if (w.type.lastIndexOf("]") === w.type.length - 1)
                                            throw new Error("Arrays currently unimplemented in encodeData");
                                        s.push(w.type),
                                        u.push(_)
                                    }
                            }
                        } catch (k) {
                            g.e(k)
                        } finally {
                            g.f()
                        }
                    }
                    return $(s, u)
                },
                encodeType: function(t, e) {
                    var n = ""
                      , r = this.findTypeDependencies(t, e).filter((function(e) {
                        return e !== t
                    }
                    ));
                    r = [t].concat(r.sort());
                    var i, o = Object(l.a)(r);
                    try {
                        for (o.s(); !(i = o.n()).done; ) {
                            var s = i.value;
                            if (!e[s])
                                throw new Error("No type definition specified: " + s);
                            n += s + "(" + e[s].map((function(t) {
                                var e = t.name;
                                return t.type + " " + e
                            }
                            )).join(",") + ")"
                        }
                    } catch (u) {
                        o.e(u)
                    } finally {
                        o.f()
                    }
                    return n
                },
                findTypeDependencies: function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    if (t = t.match(/^\w*/)[0],
                    n.includes(t) || void 0 === e[t])
                        return n;
                    n.push(t);
                    var r, i = Object(l.a)(e[t]);
                    try {
                        for (i.s(); !(r = i.n()).done; ) {
                            var o, s = r.value, u = Object(l.a)(this.findTypeDependencies(s.type, e, n));
                            try {
                                for (u.s(); !(o = u.n()).done; ) {
                                    var a = o.value;
                                    !n.includes(a) && n.push(a)
                                }
                            } catch (c) {
                                u.e(c)
                            } finally {
                                u.f()
                            }
                        }
                    } catch (c) {
                        i.e(c)
                    } finally {
                        i.f()
                    }
                    return n
                },
                hashStruct: function(t, e, n) {
                    var r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                    return F.keccak(this.encodeData(t, e, n, r))
                },
                hashType: function(t, e) {
                    return F.keccak(this.encodeType(t, e))
                },
                sanitizeData: function(t) {
                    var e = {};
                    for (var n in Y.properties)
                        t[n] && (e[n] = t[n]);
                    return e.types && (e.types = Object.assign({
                        EIP712Domain: []
                    }, e.types)),
                    e
                },
                hash: function(e) {
                    var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                      , r = this.sanitizeData(e)
                      , i = [t.from("1901", "hex")];
                    return i.push(this.hashStruct("EIP712Domain", r.domain, r.types, n)),
                    "EIP712Domain" !== r.primaryType && i.push(this.hashStruct(r.primaryType, r.message, r.types, n)),
                    F.keccak(t.concat(i))
                }
            }
              , Q = {
                TYPED_MESSAGE_SCHEMA: Y,
                TypedDataUtils: Z,
                hashForSignTypedDataLegacy: function(t) {
                    return function(t) {
                        var e = new Error("Expect argument to be non-empty array");
                        if ("object" != typeof t || !t.length)
                            throw e;
                        var n = t.map((function(t) {
                            return "bytes" === t.type ? F.toBuffer(t.value) : t.value
                        }
                        ))
                          , r = t.map((function(t) {
                            return t.type
                        }
                        ))
                          , i = t.map((function(t) {
                            if (!t.name)
                                throw e;
                            return t.type + " " + t.name
                        }
                        ));
                        return G(["bytes32", "bytes32"], [G(new Array(t.length).fill("string"), i), G(r, n)])
                    }(t.data)
                },
                hashForSignTypedData_v3: function(t) {
                    return Z.hash(t.data, !1)
                },
                hashForSignTypedData_v4: function(t) {
                    return Z.hash(t.data)
                }
            }
              , X = Object(v.g)((function(t, e) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var n = {
                    jsonrpc: "2.0",
                    id: 0
                };
                function r(t) {
                    return {
                        fromBlock: o(t.fromBlock),
                        toBlock: o(t.toBlock),
                        addresses: void 0 === t.address ? null : Array.isArray(t.address) ? t.address : [t.address],
                        topics: t.topics || []
                    }
                }
                function i(t) {
                    var e = {
                        fromBlock: u(t.fromBlock),
                        toBlock: u(t.toBlock),
                        topics: t.topics
                    };
                    return null !== t.addresses && (e.address = t.addresses),
                    e
                }
                function o(t) {
                    if (void 0 === t || "latest" === t || "pending" === t)
                        return "latest";
                    if ("earliest" === t)
                        return E.IntNumber(0);
                    if (O.isHexString(t))
                        return O.intNumberFromHexString(t);
                    throw new Error("Invalid block option: ".concat(t))
                }
                function u(t) {
                    return "latest" === t ? t : O.hexStringFromIntNumber(t)
                }
                function l() {
                    return Object.assign(Object.assign({}, n), {
                        error: {
                            code: -32e3,
                            message: "filter not found"
                        }
                    })
                }
                function h() {
                    return Object.assign(Object.assign({}, n), {
                        result: []
                    })
                }
                e.FilterPolyfill = function() {
                    function t(e) {
                        Object(f.a)(this, t),
                        this.logFilters = new Map,
                        this.blockFilters = new Set,
                        this.pendingTransactionFilters = new Set,
                        this.cursors = new Map,
                        this.timeouts = new Map,
                        this.nextFilterId = E.IntNumber(1),
                        this.provider = e
                    }
                    return Object(d.a)(t, [{
                        key: "newFilter",
                        value: function() {
                            var t = Object(c.a)(a.a.mark((function t(e) {
                                var n, i, o;
                                return a.a.wrap((function(t) {
                                    for (; ; )
                                        switch (t.prev = t.next) {
                                        case 0:
                                            return n = r(e),
                                            i = this.makeFilterId(),
                                            t.next = 4,
                                            this.setInitialCursorPosition(i, n.fromBlock);
                                        case 4:
                                            return o = t.sent,
                                            t.abrupt("return", (console.log("Installing new log filter(".concat(i, "):"), n, "initial cursor position:", o),
                                            this.logFilters.set(i, n),
                                            this.setFilterTimeout(i),
                                            O.hexStringFromIntNumber(i)));
                                        case 6:
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
                        key: "newBlockFilter",
                        value: function() {
                            var t = Object(c.a)(a.a.mark((function t() {
                                var e, n;
                                return a.a.wrap((function(t) {
                                    for (; ; )
                                        switch (t.prev = t.next) {
                                        case 0:
                                            return e = this.makeFilterId(),
                                            t.next = 3,
                                            this.setInitialCursorPosition(e, "latest");
                                        case 3:
                                            return n = t.sent,
                                            t.abrupt("return", (console.log("Installing new block filter (".concat(e, ") with initial cursor position:"), n),
                                            this.blockFilters.add(e),
                                            this.setFilterTimeout(e),
                                            O.hexStringFromIntNumber(e)));
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
                        key: "newPendingTransactionFilter",
                        value: function() {
                            var t = Object(c.a)(a.a.mark((function t() {
                                var e, n;
                                return a.a.wrap((function(t) {
                                    for (; ; )
                                        switch (t.prev = t.next) {
                                        case 0:
                                            return e = this.makeFilterId(),
                                            t.next = 3,
                                            this.setInitialCursorPosition(e, "latest");
                                        case 3:
                                            return n = t.sent,
                                            t.abrupt("return", (console.log("Installing new block filter (".concat(e, ") with initial cursor position:"), n),
                                            this.pendingTransactionFilters.add(e),
                                            this.setFilterTimeout(e),
                                            O.hexStringFromIntNumber(e)));
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
                        key: "uninstallFilter",
                        value: function(t) {
                            var e = O.intNumberFromHexString(t);
                            return console.log("Uninstalling filter (".concat(e, ")")),
                            this.deleteFilter(e),
                            !0
                        }
                    }, {
                        key: "getFilterChanges",
                        value: function(t) {
                            var e = O.intNumberFromHexString(t);
                            return this.timeouts.has(e) && this.setFilterTimeout(e),
                            this.logFilters.has(e) ? this.getLogFilterChanges(e) : this.blockFilters.has(e) ? this.getBlockFilterChanges(e) : this.pendingTransactionFilters.has(e) ? this.getPendingTransactionFilterChanges(e) : Promise.resolve(l())
                        }
                    }, {
                        key: "getFilterLogs",
                        value: function() {
                            var t = Object(c.a)(a.a.mark((function t(e) {
                                var r, o;
                                return a.a.wrap((function(t) {
                                    for (; ; )
                                        switch (t.prev = t.next) {
                                        case 0:
                                            return r = O.intNumberFromHexString(e),
                                            o = this.logFilters.get(r),
                                            t.abrupt("return", o ? this.sendAsyncPromise(Object.assign(Object.assign({}, n), {
                                                method: "eth_getLogs",
                                                params: [i(o)]
                                            })) : l());
                                        case 2:
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
                        key: "makeFilterId",
                        value: function() {
                            return E.IntNumber(++this.nextFilterId)
                        }
                    }, {
                        key: "sendAsyncPromise",
                        value: function(t) {
                            var e = this;
                            return new Promise((function(n, r) {
                                e.provider.sendAsync(t, (function(t, e) {
                                    return t ? r(t) : Array.isArray(e) || null == e ? r(new Error("unexpected response received: ".concat(JSON.stringify(e)))) : void n(e)
                                }
                                ))
                            }
                            ))
                        }
                    }, {
                        key: "deleteFilter",
                        value: function(t) {
                            console.log("Deleting filter (".concat(t, ")")),
                            this.logFilters.delete(t),
                            this.blockFilters.delete(t),
                            this.pendingTransactionFilters.delete(t),
                            this.cursors.delete(t),
                            this.timeouts.delete(t)
                        }
                    }, {
                        key: "getLogFilterChanges",
                        value: function() {
                            var t = Object(c.a)(a.a.mark((function t(e) {
                                var r, o, u, c, f, d, p, b;
                                return a.a.wrap((function(t) {
                                    for (; ; )
                                        switch (t.prev = t.next) {
                                        case 0:
                                            if (r = this.logFilters.get(e),
                                            (o = this.cursors.get(e)) && r) {
                                                t.next = 3;
                                                break
                                            }
                                            return t.abrupt("return", l());
                                        case 3:
                                            return t.next = 5,
                                            this.getCurrentBlockHeight();
                                        case 5:
                                            if (u = t.sent,
                                            c = "latest" === r.toBlock ? u : r.toBlock,
                                            !(o > u)) {
                                                t.next = 9;
                                                break
                                            }
                                            return t.abrupt("return", h());
                                        case 9:
                                            if (!(o > r.toBlock)) {
                                                t.next = 11;
                                                break
                                            }
                                            return t.abrupt("return", h());
                                        case 11:
                                            return console.log("Fetching logs from ".concat(o, " to ").concat(c, " for filter ").concat(e)),
                                            t.next = 14,
                                            this.sendAsyncPromise(Object.assign(Object.assign({}, n), {
                                                method: "eth_getLogs",
                                                params: [i(Object.assign(Object.assign({}, r), {
                                                    fromBlock: o,
                                                    toBlock: c
                                                }))]
                                            }));
                                        case 14:
                                            return f = t.sent,
                                            Array.isArray(f.result) && (d = f.result.map((function(t) {
                                                return O.intNumberFromHexString(t.blockNumber || "0x0")
                                            }
                                            )),
                                            (p = Math.max.apply(Math, Object(s.a)(d))) && p > o && (b = E.IntNumber(p + 1),
                                            console.log("Moving cursor position for filter (".concat(e, ") from ").concat(o, " to ").concat(b)),
                                            this.cursors.set(e, b))),
                                            t.abrupt("return", f);
                                        case 17:
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
                        key: "getBlockFilterChanges",
                        value: function() {
                            var t = Object(c.a)(a.a.mark((function t(e) {
                                var r, i, o, s, u = this;
                                return a.a.wrap((function(t) {
                                    for (; ; )
                                        switch (t.prev = t.next) {
                                        case 0:
                                            if (r = this.cursors.get(e)) {
                                                t.next = 3;
                                                break
                                            }
                                            return t.abrupt("return", l());
                                        case 3:
                                            return t.next = 5,
                                            this.getCurrentBlockHeight();
                                        case 5:
                                            if (i = t.sent,
                                            !(r > i)) {
                                                t.next = 8;
                                                break
                                            }
                                            return t.abrupt("return", h());
                                        case 8:
                                            return console.log("Fetching blocks from ".concat(r, " to ").concat(i, " for filter (").concat(e, ")")),
                                            t.next = 11,
                                            Promise.all(O.range(r, i + 1).map((function(t) {
                                                return u.getBlockHashByNumber(E.IntNumber(t))
                                            }
                                            )));
                                        case 11:
                                            return o = t.sent.filter((function(t) {
                                                return !!t
                                            }
                                            )),
                                            s = E.IntNumber(r + o.length),
                                            t.abrupt("return", (console.log("Moving cursor position for filter (".concat(e, ") from ").concat(r, " to ").concat(s)),
                                            this.cursors.set(e, s),
                                            Object.assign(Object.assign({}, n), {
                                                result: o
                                            })));
                                        case 14:
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
                        key: "getPendingTransactionFilterChanges",
                        value: function() {
                            var t = Object(c.a)(a.a.mark((function t(e) {
                                return a.a.wrap((function(t) {
                                    for (; ; )
                                        switch (t.prev = t.next) {
                                        case 0:
                                            return t.abrupt("return", Promise.resolve(h()));
                                        case 1:
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
                        key: "setInitialCursorPosition",
                        value: function() {
                            var t = Object(c.a)(a.a.mark((function t(e, n) {
                                var r, i;
                                return a.a.wrap((function(t) {
                                    for (; ; )
                                        switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2,
                                            this.getCurrentBlockHeight();
                                        case 2:
                                            return r = t.sent,
                                            i = "number" == typeof n && n > r ? n : r,
                                            t.abrupt("return", (this.cursors.set(e, i),
                                            i));
                                        case 5:
                                        case "end":
                                            return t.stop()
                                        }
                                }
                                ), t, this)
                            }
                            )));
                            return function(e, n) {
                                return t.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "setFilterTimeout",
                        value: function(t) {
                            var e = this
                              , n = this.timeouts.get(t);
                            n && window.clearTimeout(n);
                            var r = window.setTimeout((function() {
                                console.log("Filter (".concat(t, ") timed out")),
                                e.deleteFilter(t)
                            }
                            ), 3e5);
                            this.timeouts.set(t, r)
                        }
                    }, {
                        key: "getCurrentBlockHeight",
                        value: function() {
                            var t = Object(c.a)(a.a.mark((function t() {
                                var e, r;
                                return a.a.wrap((function(t) {
                                    for (; ; )
                                        switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2,
                                            this.sendAsyncPromise(Object.assign(Object.assign({}, n), {
                                                method: "eth_blockNumber",
                                                params: []
                                            }));
                                        case 2:
                                            return e = t.sent,
                                            r = e.result,
                                            t.abrupt("return", O.intNumberFromHexString(O.ensureHexString(r)));
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
                        key: "getBlockHashByNumber",
                        value: function() {
                            var t = Object(c.a)(a.a.mark((function t(e) {
                                var r;
                                return a.a.wrap((function(t) {
                                    for (; ; )
                                        switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2,
                                            this.sendAsyncPromise(Object.assign(Object.assign({}, n), {
                                                method: "eth_getBlockByNumber",
                                                params: [O.hexStringFromIntNumber(e), !1]
                                            }));
                                        case 2:
                                            return r = t.sent,
                                            t.abrupt("return", r.result && "string" == typeof r.result.hash ? O.ensureHexString(r.result.hash) : null);
                                        case 4:
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
                    t
                }(),
                e.filterFromParam = r
            }
            ));
            Object(v.h)(X),
            X.FilterPolyfill,
            X.filterFromParam;
            var tt = Object(v.g)((function(t, e) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t) {
                    t.eth_accounts = "eth_accounts",
                    t.eth_coinbase = "eth_coinbase",
                    t.net_version = "net_version",
                    t.eth_uninstallFilter = "eth_uninstallFilter",
                    t.eth_requestAccounts = "eth_requestAccounts",
                    t.eth_sign = "eth_sign",
                    t.eth_ecRecover = "eth_ecRecover",
                    t.personal_sign = "personal_sign",
                    t.personal_ecRecover = "personal_ecRecover",
                    t.eth_signTransaction = "eth_signTransaction",
                    t.eth_sendRawTransaction = "eth_sendRawTransaction",
                    t.eth_sendTransaction = "eth_sendTransaction",
                    t.eth_signTypedData_v1 = "eth_signTypedData_v1",
                    t.eth_signTypedData_v2 = "eth_signTypedData_v2",
                    t.eth_signTypedData_v3 = "eth_signTypedData_v3",
                    t.eth_signTypedData_v4 = "eth_signTypedData_v4",
                    t.eth_signTypedData = "eth_signTypedData",
                    t.walletlink_arbitrary = "walletlink_arbitrary",
                    t.eth_newFilter = "eth_newFilter",
                    t.eth_newBlockFilter = "eth_newBlockFilter",
                    t.eth_newPendingTransactionFilter = "eth_newPendingTransactionFilter",
                    t.eth_getFilterChanges = "eth_getFilterChanges",
                    t.eth_getFilterLogs = "eth_getFilterLogs"
                }(e.JSONRPCMethod || (e.JSONRPCMethod = {}))
            }
            ));
            Object(v.h)(tt),
            tt.JSONRPCMethod;
            var et = Object(v.g)((function(t, e) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t) {
                    t[t.USER_DENIED_REQUEST_ACCOUNTS = 4001] = "USER_DENIED_REQUEST_ACCOUNTS",
                    t[t.USER_DENIED_CREATE_ACCOUNT = 4010] = "USER_DENIED_CREATE_ACCOUNT",
                    t[t.UNAUTHORIZED = 4100] = "UNAUTHORIZED",
                    t[t.UNSUPPORTED_METHOD = 4200] = "UNSUPPORTED_METHOD",
                    t[t.USER_DENIED_REQUEST_SIGNATURE = -32603] = "USER_DENIED_REQUEST_SIGNATURE"
                }(e.ProviderErrorCode || (e.ProviderErrorCode = {}));
                var n = function(t) {
                    Object(p.a)(n, t);
                    var e = Object(b.a)(n);
                    function n(t, r, o) {
                        var s;
                        return Object(f.a)(this, n),
                        (s = e.call(this, t || "Provider Error")).code = r,
                        s.data = o,
                        s.name = "ProviderError",
                        Object.setPrototypeOf(Object(i.a)(s), n.prototype),
                        s
                    }
                    return n
                }(Object(o.a)(Error));
                e.ProviderError = n
            }
            ));
            Object(v.h)(et),
            et.ProviderErrorCode,
            et.ProviderError;
            var nt = Object(v.g)((function(e, n) {
                var r = v.i && v.i.__importDefault || function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                ;
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var i = r(M)
                  , o = r(Q);
                n.WalletLinkProvider = function() {
                    function e(t) {
                        if (Object(f.a)(this, e),
                        this._filterPolyfill = new X.FilterPolyfill(this),
                        this._addresses = [],
                        this._send = this.send,
                        this._sendAsync = this.sendAsync,
                        !t.relay)
                            throw new Error("realy must be provided");
                        if (!t.jsonRpcUrl)
                            throw new Error("jsonRpcUrl must be provided");
                        this._relay = t.relay,
                        this._chainId = O.ensureIntNumber(t.chainId || 1),
                        this._jsonRpcUrl = t.jsonRpcUrl;
                        var n = this._relay.getStorageItem("Addresses");
                        if (n) {
                            var r = n.split(" ");
                            "" !== r[0] && (this._addresses = r)
                        }
                    }
                    return Object(d.a)(e, [{
                        key: "isConnected",
                        value: function() {
                            return !0
                        }
                    }, {
                        key: "enable",
                        value: function() {
                            var t = Object(c.a)(a.a.mark((function t() {
                                return a.a.wrap((function(t) {
                                    for (; ; )
                                        switch (t.prev = t.next) {
                                        case 0:
                                            if (!(this._addresses.length > 0)) {
                                                t.next = 4;
                                                break
                                            }
                                            t.t0 = this._addresses,
                                            t.next = 7;
                                            break;
                                        case 4:
                                            return t.next = 6,
                                            this._send(tt.JSONRPCMethod.eth_requestAccounts);
                                        case 6:
                                            t.t0 = t.sent;
                                        case 7:
                                            return t.abrupt("return", t.t0);
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
                    }, {
                        key: "close",
                        value: function() {
                            this._relay.resetAndReload()
                        }
                    }, {
                        key: "send",
                        value: function(t, e) {
                            var n = this;
                            if ("string" == typeof t) {
                                var r = {
                                    jsonrpc: "2.0",
                                    id: 0,
                                    method: t,
                                    params: Array.isArray(e) ? e : void 0 !== e ? [e] : []
                                };
                                return this._sendRequestAsync(r).then((function(t) {
                                    return t.result
                                }
                                ))
                            }
                            if ("function" == typeof e) {
                                var i = t
                                  , o = e;
                                return this._sendAsync(i, o)
                            }
                            if (Array.isArray(t))
                                return t.map((function(t) {
                                    return n._sendRequest(t)
                                }
                                ));
                            var s = t;
                            return this._sendRequest(s)
                        }
                    }, {
                        key: "sendAsync",
                        value: function(t, e) {
                            if ("function" != typeof e)
                                throw new Error("callback is required");
                            if (Array.isArray(t)) {
                                var n = e;
                                this._sendMultipleRequestsAsync(t).then((function(t) {
                                    return n(null, t)
                                }
                                )).catch((function(t) {
                                    return n(t, null)
                                }
                                ))
                            } else {
                                var r = e;
                                this._sendRequestAsync(t).then((function(t) {
                                    return r(null, t)
                                }
                                )).catch((function(t) {
                                    return r(t, null)
                                }
                                ))
                            }
                        }
                    }, {
                        key: "scanQRCode",
                        value: function() {
                            var t = Object(c.a)(a.a.mark((function t(e) {
                                var n;
                                return a.a.wrap((function(t) {
                                    for (; ; )
                                        switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2,
                                            this._relay.scanQRCode(O.ensureRegExpString(e));
                                        case 2:
                                            if ("string" == typeof (n = t.sent).result) {
                                                t.next = 5;
                                                break
                                            }
                                            throw new Error("result was not a string");
                                        case 5:
                                            return t.abrupt("return", n.result);
                                        case 6:
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
                        key: "arbitraryRequest",
                        value: function() {
                            var t = Object(c.a)(a.a.mark((function t(e) {
                                var n;
                                return a.a.wrap((function(t) {
                                    for (; ; )
                                        switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2,
                                            this._relay.arbitraryRequest(e);
                                        case 2:
                                            if ("string" == typeof (n = t.sent).result) {
                                                t.next = 5;
                                                break
                                            }
                                            throw new Error("result was not a string");
                                        case 5:
                                            return t.abrupt("return", n.result);
                                        case 6:
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
                        key: "supportsSubscriptions",
                        value: function() {
                            return !1
                        }
                    }, {
                        key: "subscribe",
                        value: function() {
                            throw new Error("Subscriptions are not supported")
                        }
                    }, {
                        key: "unsubscribe",
                        value: function() {
                            throw new Error("Subscriptions are not supported")
                        }
                    }, {
                        key: "disconnect",
                        value: function() {
                            return !0
                        }
                    }, {
                        key: "_sendRequest",
                        value: function(t) {
                            var e = {
                                jsonrpc: "2.0",
                                id: t.id
                            }
                              , n = t.method;
                            if (e.result = this._handleSynchronousMethods(t),
                            void 0 === e.result)
                                throw new Error("WalletLink does not support calling ".concat(n, " synchronously without ") + "a callback. Please provide a callback parameter to call ".concat(n, " ") + "asynchronously.");
                            return e
                        }
                    }, {
                        key: "_setAddresses",
                        value: function(t) {
                            if (!Array.isArray(t))
                                throw new Error("addresses is not an array");
                            this._addresses = t.map((function(t) {
                                return O.ensureAddressString(t)
                            }
                            )),
                            this._relay.setStorageItem("Addresses", t.join(" ")),
                            window.dispatchEvent(new CustomEvent("walletlink:addresses",{
                                detail: this._addresses
                            }))
                        }
                    }, {
                        key: "_sendRequestAsync",
                        value: function(t) {
                            var e = this;
                            return new Promise((function(n, r) {
                                try {
                                    var i = e._handleSynchronousMethods(t);
                                    if (void 0 !== i)
                                        return n({
                                            jsonrpc: "2.0",
                                            id: t.id,
                                            result: i
                                        });
                                    var o = e._handleAsynchronousFilterMethods(t);
                                    if (void 0 !== o)
                                        return void o.then((function(e) {
                                            return n(Object.assign(Object.assign({}, e), {
                                                id: t.id
                                            }))
                                        }
                                        )).catch((function(t) {
                                            return r(t)
                                        }
                                        ))
                                } catch (t) {
                                    return r(t)
                                }
                                e._handleAsynchronousMethods(t).then((function(e) {
                                    return n(Object.assign(Object.assign({}, e), {
                                        id: t.id
                                    }))
                                }
                                )).catch((function(t) {
                                    return r(t)
                                }
                                ))
                            }
                            ))
                        }
                    }, {
                        key: "_sendMultipleRequestsAsync",
                        value: function(t) {
                            var e = this;
                            return Promise.all(t.map((function(t) {
                                return e._sendRequestAsync(t)
                            }
                            )))
                        }
                    }, {
                        key: "_handleSynchronousMethods",
                        value: function(t) {
                            var e = t.method
                              , n = t.params || [];
                            switch (e) {
                            case tt.JSONRPCMethod.eth_accounts:
                                return this._eth_accounts();
                            case tt.JSONRPCMethod.eth_coinbase:
                                return this._eth_coinbase();
                            case tt.JSONRPCMethod.eth_uninstallFilter:
                                return this._eth_uninstallFilter(n);
                            case tt.JSONRPCMethod.net_version:
                                return this._net_version();
                            default:
                                return
                            }
                        }
                    }, {
                        key: "_handleAsynchronousMethods",
                        value: function(t) {
                            var e = t.method
                              , n = t.params || [];
                            switch (e) {
                            case tt.JSONRPCMethod.eth_requestAccounts:
                                return this._eth_requestAccounts();
                            case tt.JSONRPCMethod.eth_sign:
                                return this._eth_sign(n);
                            case tt.JSONRPCMethod.eth_ecRecover:
                                return this._eth_ecRecover(n);
                            case tt.JSONRPCMethod.personal_sign:
                                return this._personal_sign(n);
                            case tt.JSONRPCMethod.personal_ecRecover:
                                return this._personal_ecRecover(n);
                            case tt.JSONRPCMethod.eth_signTransaction:
                                return this._eth_signTransaction(n);
                            case tt.JSONRPCMethod.eth_sendRawTransaction:
                                return this._eth_sendRawTransaction(n);
                            case tt.JSONRPCMethod.eth_sendTransaction:
                                return this._eth_sendTransaction(n);
                            case tt.JSONRPCMethod.eth_signTypedData_v1:
                                return this._eth_signTypedData_v1(n);
                            case tt.JSONRPCMethod.eth_signTypedData_v2:
                                return this._throwUnsupportedMethodError();
                            case tt.JSONRPCMethod.eth_signTypedData_v3:
                                return this._eth_signTypedData_v3(n);
                            case tt.JSONRPCMethod.eth_signTypedData_v4:
                            case tt.JSONRPCMethod.eth_signTypedData:
                                return this._eth_signTypedData_v4(n);
                            case tt.JSONRPCMethod.walletlink_arbitrary:
                                return this._walletlink_arbitrary(n)
                            }
                            return window.fetch(this._jsonRpcUrl, {
                                method: "POST",
                                body: JSON.stringify(t),
                                mode: "cors",
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            }).then((function(t) {
                                return t.json()
                            }
                            )).then((function(t) {
                                if (!t)
                                    throw new et.ProviderError("unexpected response");
                                var e = t
                                  , n = e.error;
                                if (n)
                                    throw new et.ProviderError(n.message || "RPC Error",n.code,n.data);
                                return e
                            }
                            ))
                        }
                    }, {
                        key: "_handleAsynchronousFilterMethods",
                        value: function(t) {
                            var e = t.method
                              , n = t.params || [];
                            switch (e) {
                            case tt.JSONRPCMethod.eth_newFilter:
                                return this._eth_newFilter(n);
                            case tt.JSONRPCMethod.eth_newBlockFilter:
                                return this._eth_newBlockFilter();
                            case tt.JSONRPCMethod.eth_newPendingTransactionFilter:
                                return this._eth_newPendingTransactionFilter();
                            case tt.JSONRPCMethod.eth_getFilterChanges:
                                return this._eth_getFilterChanges(n);
                            case tt.JSONRPCMethod.eth_getFilterLogs:
                                return this._eth_getFilterLogs(n)
                            }
                        }
                    }, {
                        key: "_isKnownAddress",
                        value: function(t) {
                            try {
                                var e = O.ensureAddressString(t);
                                return this._addresses.includes(e)
                            } catch (t) {}
                            return !1
                        }
                    }, {
                        key: "_ensureKnownAddress",
                        value: function(t) {
                            if (!this._isKnownAddress(t))
                                throw new Error("Unknown Ethereum address")
                        }
                    }, {
                        key: "_prepareTransactionParams",
                        value: function(e) {
                            var n = e.from ? O.ensureAddressString(e.from) : this.selectedAddress;
                            if (!n)
                                throw new Error("Ethereum address is unavailable");
                            return this._ensureKnownAddress(n),
                            {
                                fromAddress: n,
                                toAddress: e.to ? O.ensureAddressString(e.to) : null,
                                weiValue: null != e.value ? O.ensureBN(e.value) : new i.default(0),
                                data: e.data ? O.ensureBuffer(e.data) : t.alloc(0),
                                nonce: null != e.nonce ? O.ensureIntNumber(e.nonce) : null,
                                gasPriceInWei: null != e.gasPrice ? O.ensureBN(e.gasPrice) : null,
                                gasLimit: null != e.gas ? O.ensureBN(e.gas) : null,
                                chainId: this._chainId
                            }
                        }
                    }, {
                        key: "_requireAuthorization",
                        value: function() {
                            if (0 === this._addresses.length)
                                throw new et.ProviderError("Unauthorized",et.ProviderErrorCode.UNAUTHORIZED)
                        }
                    }, {
                        key: "_throwUnsupportedMethodError",
                        value: function() {
                            throw new et.ProviderError("Unsupported method",et.ProviderErrorCode.UNSUPPORTED_METHOD)
                        }
                    }, {
                        key: "_signEthereumMessage",
                        value: function() {
                            var t = Object(c.a)(a.a.mark((function t(e, n, r, i) {
                                return a.a.wrap((function(t) {
                                    for (; ; )
                                        switch (t.prev = t.next) {
                                        case 0:
                                            return this._ensureKnownAddress(n),
                                            t.prev = 1,
                                            t.next = 4,
                                            this._relay.signEthereumMessage(e, n, r, i);
                                        case 4:
                                            return t.t0 = t.sent.result,
                                            t.abrupt("return", {
                                                jsonrpc: "2.0",
                                                id: 0,
                                                result: t.t0
                                            });
                                        case 8:
                                            if (t.prev = 8,
                                            t.t1 = t.catch(1),
                                            "string" != typeof t.t1.message || !t.t1.message.match(/(denied|rejected)/i)) {
                                                t.next = 12;
                                                break
                                            }
                                            throw new et.ProviderError("User denied message signature",et.ProviderErrorCode.USER_DENIED_REQUEST_SIGNATURE);
                                        case 12:
                                            throw t.t1;
                                        case 13:
                                        case "end":
                                            return t.stop()
                                        }
                                }
                                ), t, this, [[1, 8]])
                            }
                            )));
                            return function(e, n, r, i) {
                                return t.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "_ethereumAddressFromSignedMessage",
                        value: function() {
                            var t = Object(c.a)(a.a.mark((function t(e, n, r) {
                                return a.a.wrap((function(t) {
                                    for (; ; )
                                        switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2,
                                            this._relay.ethereumAddressFromSignedMessage(e, n, r);
                                        case 2:
                                            return t.t0 = t.sent.result,
                                            t.abrupt("return", {
                                                jsonrpc: "2.0",
                                                id: 0,
                                                result: t.t0
                                            });
                                        case 4:
                                        case "end":
                                            return t.stop()
                                        }
                                }
                                ), t, this)
                            }
                            )));
                            return function(e, n, r) {
                                return t.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "_eth_accounts",
                        value: function() {
                            return this._addresses
                        }
                    }, {
                        key: "_eth_coinbase",
                        value: function() {
                            return this.selectedAddress || null
                        }
                    }, {
                        key: "_net_version",
                        value: function() {
                            return this._chainId.toString(10)
                        }
                    }, {
                        key: "_eth_requestAccounts",
                        value: function() {
                            var t = Object(c.a)(a.a.mark((function t() {
                                var e;
                                return a.a.wrap((function(t) {
                                    for (; ; )
                                        switch (t.prev = t.next) {
                                        case 0:
                                            if (!(this._addresses.length > 0)) {
                                                t.next = 2;
                                                break
                                            }
                                            return t.abrupt("return", Promise.resolve({
                                                jsonrpc: "2.0",
                                                id: 0,
                                                result: this._addresses
                                            }));
                                        case 2:
                                            return t.prev = 2,
                                            t.next = 5,
                                            this._relay.requestEthereumAccounts();
                                        case 5:
                                            e = t.sent,
                                            t.next = 13;
                                            break;
                                        case 8:
                                            if (t.prev = 8,
                                            t.t0 = t.catch(2),
                                            "string" != typeof t.t0.message || !t.t0.message.match(/(denied|rejected)/i)) {
                                                t.next = 12;
                                                break
                                            }
                                            throw new et.ProviderError("User denied account authorization",et.ProviderErrorCode.USER_DENIED_REQUEST_ACCOUNTS);
                                        case 12:
                                            throw t.t0;
                                        case 13:
                                            if (e.result) {
                                                t.next = 15;
                                                break
                                            }
                                            throw new Error("accounts received is empty");
                                        case 15:
                                            return t.abrupt("return", (this._setAddresses(e.result),
                                            {
                                                jsonrpc: "2.0",
                                                id: 0,
                                                result: this._addresses
                                            }));
                                        case 16:
                                        case "end":
                                            return t.stop()
                                        }
                                }
                                ), t, this, [[2, 8]])
                            }
                            )));
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "_eth_sign",
                        value: function(t) {
                            this._requireAuthorization();
                            var e = O.ensureAddressString(t[0])
                              , n = O.ensureBuffer(t[1]);
                            return this._signEthereumMessage(n, e, !1)
                        }
                    }, {
                        key: "_eth_ecRecover",
                        value: function(t) {
                            var e = O.ensureBuffer(t[0])
                              , n = O.ensureBuffer(t[1]);
                            return this._ethereumAddressFromSignedMessage(e, n, !1)
                        }
                    }, {
                        key: "_personal_sign",
                        value: function(t) {
                            this._requireAuthorization();
                            var e = O.ensureBuffer(t[0])
                              , n = O.ensureAddressString(t[1]);
                            return this._signEthereumMessage(e, n, !0)
                        }
                    }, {
                        key: "_personal_ecRecover",
                        value: function(t) {
                            var e = O.ensureBuffer(t[0])
                              , n = O.ensureBuffer(t[1]);
                            return this._ethereumAddressFromSignedMessage(e, n, !0)
                        }
                    }, {
                        key: "_eth_signTransaction",
                        value: function() {
                            var t = Object(c.a)(a.a.mark((function t(e) {
                                var n;
                                return a.a.wrap((function(t) {
                                    for (; ; )
                                        switch (t.prev = t.next) {
                                        case 0:
                                            return this._requireAuthorization(),
                                            n = this._prepareTransactionParams(e[0] || {}),
                                            t.prev = 2,
                                            t.next = 5,
                                            this._relay.signEthereumTransaction(n);
                                        case 5:
                                            return t.t0 = t.sent.result,
                                            t.abrupt("return", {
                                                jsonrpc: "2.0",
                                                id: 0,
                                                result: t.t0
                                            });
                                        case 9:
                                            if (t.prev = 9,
                                            t.t1 = t.catch(2),
                                            "string" != typeof t.t1.message || !t.t1.message.match(/(denied|rejected)/i)) {
                                                t.next = 13;
                                                break
                                            }
                                            throw new et.ProviderError("User denied transaction signature",et.ProviderErrorCode.USER_DENIED_REQUEST_SIGNATURE);
                                        case 13:
                                            throw t.t1;
                                        case 14:
                                        case "end":
                                            return t.stop()
                                        }
                                }
                                ), t, this, [[2, 9]])
                            }
                            )));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "_eth_sendRawTransaction",
                        value: function() {
                            var t = Object(c.a)(a.a.mark((function t(e) {
                                var n;
                                return a.a.wrap((function(t) {
                                    for (; ; )
                                        switch (t.prev = t.next) {
                                        case 0:
                                            return n = O.ensureBuffer(e[0]),
                                            t.next = 3,
                                            this._relay.submitEthereumTransaction(n, this._chainId);
                                        case 3:
                                            return t.t0 = t.sent.result,
                                            t.abrupt("return", {
                                                jsonrpc: "2.0",
                                                id: 0,
                                                result: t.t0
                                            });
                                        case 5:
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
                        key: "_eth_sendTransaction",
                        value: function() {
                            var t = Object(c.a)(a.a.mark((function t(e) {
                                var n;
                                return a.a.wrap((function(t) {
                                    for (; ; )
                                        switch (t.prev = t.next) {
                                        case 0:
                                            return this._requireAuthorization(),
                                            n = this._prepareTransactionParams(e[0] || {}),
                                            t.prev = 2,
                                            t.next = 5,
                                            this._relay.signAndSubmitEthereumTransaction(n);
                                        case 5:
                                            return t.t0 = t.sent.result,
                                            t.abrupt("return", {
                                                jsonrpc: "2.0",
                                                id: 0,
                                                result: t.t0
                                            });
                                        case 9:
                                            if (t.prev = 9,
                                            t.t1 = t.catch(2),
                                            "string" != typeof t.t1.message || !t.t1.message.match(/(denied|rejected)/i)) {
                                                t.next = 13;
                                                break
                                            }
                                            throw new et.ProviderError("User denied transaction signature",et.ProviderErrorCode.USER_DENIED_REQUEST_SIGNATURE);
                                        case 13:
                                            throw t.t1;
                                        case 14:
                                        case "end":
                                            return t.stop()
                                        }
                                }
                                ), t, this, [[2, 9]])
                            }
                            )));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "_eth_signTypedData_v1",
                        value: function() {
                            var t = Object(c.a)(a.a.mark((function t(e) {
                                var n, r, i, s;
                                return a.a.wrap((function(t) {
                                    for (; ; )
                                        switch (t.prev = t.next) {
                                        case 0:
                                            return this._requireAuthorization(),
                                            n = e[0],
                                            r = O.ensureAddressString(e[1]),
                                            this._ensureKnownAddress(r),
                                            i = o.default.hashForSignTypedDataLegacy({
                                                data: n
                                            }),
                                            s = JSON.stringify(n, null, 2),
                                            t.abrupt("return", this._signEthereumMessage(i, r, !1, s));
                                        case 5:
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
                        key: "_eth_signTypedData_v3",
                        value: function() {
                            var t = Object(c.a)(a.a.mark((function t(e) {
                                var n, r, i, s;
                                return a.a.wrap((function(t) {
                                    for (; ; )
                                        switch (t.prev = t.next) {
                                        case 0:
                                            return this._requireAuthorization(),
                                            n = O.ensureAddressString(e[0]),
                                            r = e[1],
                                            this._ensureKnownAddress(n),
                                            i = o.default.hashForSignTypedData_v3({
                                                data: r
                                            }),
                                            s = JSON.stringify(r, null, 2),
                                            t.abrupt("return", this._signEthereumMessage(i, n, !1, s));
                                        case 5:
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
                        key: "_eth_signTypedData_v4",
                        value: function() {
                            var t = Object(c.a)(a.a.mark((function t(e) {
                                var n, r, i, s;
                                return a.a.wrap((function(t) {
                                    for (; ; )
                                        switch (t.prev = t.next) {
                                        case 0:
                                            return this._requireAuthorization(),
                                            n = O.ensureAddressString(e[0]),
                                            r = e[1],
                                            this._ensureKnownAddress(n),
                                            i = o.default.hashForSignTypedData_v4({
                                                data: r
                                            }),
                                            s = JSON.stringify(r, null, 2),
                                            t.abrupt("return", this._signEthereumMessage(i, n, !1, s));
                                        case 5:
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
                        key: "_walletlink_arbitrary",
                        value: function() {
                            var t = Object(c.a)(a.a.mark((function t(e) {
                                var n;
                                return a.a.wrap((function(t) {
                                    for (; ; )
                                        switch (t.prev = t.next) {
                                        case 0:
                                            if ("string" == typeof (n = e[0])) {
                                                t.next = 3;
                                                break
                                            }
                                            throw new Error("parameter must be a string");
                                        case 3:
                                            return t.next = 5,
                                            this.arbitraryRequest(n);
                                        case 5:
                                            return t.t0 = t.sent,
                                            t.abrupt("return", {
                                                jsonrpc: "2.0",
                                                id: 0,
                                                result: t.t0
                                            });
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
                    }, {
                        key: "_eth_uninstallFilter",
                        value: function(t) {
                            var e = O.ensureHexString(t[0]);
                            return this._filterPolyfill.uninstallFilter(e)
                        }
                    }, {
                        key: "_eth_newFilter",
                        value: function() {
                            var t = Object(c.a)(a.a.mark((function t(e) {
                                var n;
                                return a.a.wrap((function(t) {
                                    for (; ; )
                                        switch (t.prev = t.next) {
                                        case 0:
                                            return n = e[0],
                                            t.next = 3,
                                            this._filterPolyfill.newFilter(n);
                                        case 3:
                                            return t.t0 = t.sent,
                                            t.abrupt("return", {
                                                jsonrpc: "2.0",
                                                id: 0,
                                                result: t.t0
                                            });
                                        case 5:
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
                        key: "_eth_newBlockFilter",
                        value: function() {
                            var t = Object(c.a)(a.a.mark((function t() {
                                return a.a.wrap((function(t) {
                                    for (; ; )
                                        switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2,
                                            this._filterPolyfill.newBlockFilter();
                                        case 2:
                                            return t.t0 = t.sent,
                                            t.abrupt("return", {
                                                jsonrpc: "2.0",
                                                id: 0,
                                                result: t.t0
                                            });
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
                        key: "_eth_newPendingTransactionFilter",
                        value: function() {
                            var t = Object(c.a)(a.a.mark((function t() {
                                return a.a.wrap((function(t) {
                                    for (; ; )
                                        switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2,
                                            this._filterPolyfill.newPendingTransactionFilter();
                                        case 2:
                                            return t.t0 = t.sent,
                                            t.abrupt("return", {
                                                jsonrpc: "2.0",
                                                id: 0,
                                                result: t.t0
                                            });
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
                        key: "_eth_getFilterChanges",
                        value: function(t) {
                            var e = O.ensureHexString(t[0]);
                            return this._filterPolyfill.getFilterChanges(e)
                        }
                    }, {
                        key: "_eth_getFilterLogs",
                        value: function(t) {
                            var e = O.ensureHexString(t[0]);
                            return this._filterPolyfill.getFilterLogs(e)
                        }
                    }, {
                        key: "selectedAddress",
                        get: function() {
                            return this._addresses[0] || void 0
                        }
                    }, {
                        key: "networkVersion",
                        get: function() {
                            return this._chainId.toString(10)
                        }
                    }, {
                        key: "isWalletLink",
                        get: function() {
                            return !0
                        }
                    }, {
                        key: "host",
                        get: function() {
                            return this._jsonRpcUrl
                        }
                    }, {
                        key: "connected",
                        get: function() {
                            return !0
                        }
                    }]),
                    e
                }()
            }
            ));
            Object(v.h)(nt),
            nt.WalletLinkProvider;
            var rt = Object(v.g)((function(t, e) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                e.default = '.-walletlink-css-reset,.-walletlink-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:transparent;background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;bottom:auto;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:block;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";right:auto;tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;width:auto;word-spacing:normal;z-index:auto;all:initial;all:unset}.-walletlink-css-reset *{box-sizing:border-box;display:initial;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-walletlink-css-reset [class*=container]{margin:0;padding:0}.-walletlink-css-reset style{display:none}'
            }
            ));
            Object(v.h)(rt);
            var it = Object(v.g)((function(t, e) {
                var n = v.i && v.i.__importDefault || function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                ;
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var r = n(rt);
                e.injectCssReset = function() {
                    var t = document.createElement("style");
                    t.type = "text/css",
                    t.appendChild(document.createTextNode(r.default)),
                    document.documentElement.appendChild(t)
                }
            }
            ));
            Object(v.h)(it),
            it.injectCssReset;
            var ot = Object(v.g)((function(t, e) {
                var n;
                function r(t, e, r) {
                    if (!r || typeof r.value !== n.typeOfFunction)
                        throw new TypeError("Only methods can be decorated with @bind. <" + e + "> is not a method!");
                    return {
                        configurable: n.boolTrue,
                        get: function() {
                            var t = r.value.bind(this);
                            return Object.defineProperty(this, e, {
                                value: t,
                                configurable: n.boolTrue,
                                writable: n.boolTrue
                            }),
                            t
                        }
                    }
                }
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t) {
                    t.typeOfFunction = "function",
                    t.boolTrue = !0
                }(n || (n = {})),
                e.bind = r,
                e.default = r
            }
            ));
            function st(t) {
                return "function" == typeof t
            }
            Object(v.h)(ot),
            ot.bind;
            var ut = !1
              , at = {
                Promise: void 0,
                set useDeprecatedSynchronousErrorHandling(t) {
                    t && (new Error).stack,
                    ut = t
                },
                get useDeprecatedSynchronousErrorHandling() {
                    return ut
                }
            };
            function ct(t) {
                setTimeout((function() {
                    throw t
                }
                ), 0)
            }
            var lt = {
                closed: !0,
                next: function(t) {},
                error: function(t) {
                    if (at.useDeprecatedSynchronousErrorHandling)
                        throw t;
                    ct(t)
                },
                complete: function() {}
            }
              , ht = Array.isArray || function(t) {
                return t && "number" == typeof t.length
            }
            ;
            function ft(t) {
                return null !== t && "object" == typeof t
            }
            var dt = function() {
                function t(t) {
                    return Error.call(this),
                    this.message = t ? t.length + " errors occurred during unsubscription:\n" + t.map((function(t, e) {
                        return e + 1 + ") " + t.toString()
                    }
                    )).join("\n  ") : "",
                    this.name = "UnsubscriptionError",
                    this.errors = t,
                    this
                }
                return t.prototype = Object.create(Error.prototype),
                t
            }()
              , pt = function() {
                function t(t) {
                    this.closed = !1,
                    this._parentOrParents = null,
                    this._subscriptions = null,
                    t && (this._unsubscribe = t)
                }
                return t.prototype.unsubscribe = function() {
                    var e;
                    if (!this.closed) {
                        var n = this._parentOrParents
                          , r = this._unsubscribe
                          , i = this._subscriptions;
                        if (this.closed = !0,
                        this._parentOrParents = null,
                        this._subscriptions = null,
                        n instanceof t)
                            n.remove(this);
                        else if (null !== n)
                            for (var o = 0; o < n.length; ++o)
                                n[o].remove(this);
                        if (st(r))
                            try {
                                r.call(this)
                            } catch (t) {
                                e = t instanceof dt ? bt(t.errors) : [t]
                            }
                        if (ht(i)) {
                            o = -1;
                            for (var s = i.length; ++o < s; ) {
                                var u = i[o];
                                if (ft(u))
                                    try {
                                        u.unsubscribe()
                                    } catch (t) {
                                        e = e || [],
                                        t instanceof dt ? e = e.concat(bt(t.errors)) : e.push(t)
                                    }
                            }
                        }
                        if (e)
                            throw new dt(e)
                    }
                }
                ,
                t.prototype.add = function(e) {
                    var n = e;
                    if (!e)
                        return t.EMPTY;
                    switch (typeof e) {
                    case "function":
                        n = new t(e);
                    case "object":
                        if (n === this || n.closed || "function" != typeof n.unsubscribe)
                            return n;
                        if (this.closed)
                            return n.unsubscribe(),
                            n;
                        if (!(n instanceof t)) {
                            var r = n;
                            (n = new t)._subscriptions = [r]
                        }
                        break;
                    default:
                        throw new Error("unrecognized teardown " + e + " added to Subscription.")
                    }
                    var i = n._parentOrParents;
                    if (null === i)
                        n._parentOrParents = this;
                    else if (i instanceof t) {
                        if (i === this)
                            return n;
                        n._parentOrParents = [i, this]
                    } else {
                        if (-1 !== i.indexOf(this))
                            return n;
                        i.push(this)
                    }
                    var o = this._subscriptions;
                    return null === o ? this._subscriptions = [n] : o.push(n),
                    n
                }
                ,
                t.prototype.remove = function(t) {
                    var e = this._subscriptions;
                    if (e) {
                        var n = e.indexOf(t);
                        -1 !== n && e.splice(n, 1)
                    }
                }
                ,
                t.EMPTY = function(t) {
                    return t.closed = !0,
                    t
                }(new t),
                t
            }();
            function bt(t) {
                return t.reduce((function(t, e) {
                    return t.concat(e instanceof dt ? e.errors : e)
                }
                ), [])
            }
            var vt = "function" == typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random()
              , mt = function(t) {
                function e(n, r, i) {
                    var o = t.call(this) || this;
                    switch (o.syncErrorValue = null,
                    o.syncErrorThrown = !1,
                    o.syncErrorThrowable = !1,
                    o.isStopped = !1,
                    arguments.length) {
                    case 0:
                        o.destination = lt;
                        break;
                    case 1:
                        if (!n) {
                            o.destination = lt;
                            break
                        }
                        if ("object" == typeof n) {
                            n instanceof e ? (o.syncErrorThrowable = n.syncErrorThrowable,
                            o.destination = n,
                            n.add(o)) : (o.syncErrorThrowable = !0,
                            o.destination = new yt(o,n));
                            break
                        }
                    default:
                        o.syncErrorThrowable = !0,
                        o.destination = new yt(o,n,r,i)
                    }
                    return o
                }
                return Object(v.c)(e, t),
                e.prototype[vt] = function() {
                    return this
                }
                ,
                e.create = function(t, n, r) {
                    var i = new e(t,n,r);
                    return i.syncErrorThrowable = !1,
                    i
                }
                ,
                e.prototype.next = function(t) {
                    this.isStopped || this._next(t)
                }
                ,
                e.prototype.error = function(t) {
                    this.isStopped || (this.isStopped = !0,
                    this._error(t))
                }
                ,
                e.prototype.complete = function() {
                    this.isStopped || (this.isStopped = !0,
                    this._complete())
                }
                ,
                e.prototype.unsubscribe = function() {
                    this.closed || (this.isStopped = !0,
                    t.prototype.unsubscribe.call(this))
                }
                ,
                e.prototype._next = function(t) {
                    this.destination.next(t)
                }
                ,
                e.prototype._error = function(t) {
                    this.destination.error(t),
                    this.unsubscribe()
                }
                ,
                e.prototype._complete = function() {
                    this.destination.complete(),
                    this.unsubscribe()
                }
                ,
                e.prototype._unsubscribeAndRecycle = function() {
                    var t = this._parentOrParents;
                    return this._parentOrParents = null,
                    this.unsubscribe(),
                    this.closed = !1,
                    this.isStopped = !1,
                    this._parentOrParents = t,
                    this
                }
                ,
                e
            }(pt)
              , yt = function(t) {
                function e(e, n, r, i) {
                    var o, s = t.call(this) || this;
                    s._parentSubscriber = e;
                    var u = s;
                    return st(n) ? o = n : n && (o = n.next,
                    r = n.error,
                    i = n.complete,
                    n !== lt && (st((u = Object.create(n)).unsubscribe) && s.add(u.unsubscribe.bind(u)),
                    u.unsubscribe = s.unsubscribe.bind(s))),
                    s._context = u,
                    s._next = o,
                    s._error = r,
                    s._complete = i,
                    s
                }
                return Object(v.c)(e, t),
                e.prototype.next = function(t) {
                    if (!this.isStopped && this._next) {
                        var e = this._parentSubscriber;
                        at.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe() : this.__tryOrUnsub(this._next, t)
                    }
                }
                ,
                e.prototype.error = function(t) {
                    if (!this.isStopped) {
                        var e = this._parentSubscriber
                          , n = at.useDeprecatedSynchronousErrorHandling;
                        if (this._error)
                            n && e.syncErrorThrowable ? (this.__tryOrSetError(e, this._error, t),
                            this.unsubscribe()) : (this.__tryOrUnsub(this._error, t),
                            this.unsubscribe());
                        else if (e.syncErrorThrowable)
                            n ? (e.syncErrorValue = t,
                            e.syncErrorThrown = !0) : ct(t),
                            this.unsubscribe();
                        else {
                            if (this.unsubscribe(),
                            n)
                                throw t;
                            ct(t)
                        }
                    }
                }
                ,
                e.prototype.complete = function() {
                    var t = this;
                    if (!this.isStopped) {
                        var e = this._parentSubscriber;
                        if (this._complete) {
                            var n = function() {
                                return t._complete.call(t._context)
                            };
                            at.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? (this.__tryOrSetError(e, n),
                            this.unsubscribe()) : (this.__tryOrUnsub(n),
                            this.unsubscribe())
                        } else
                            this.unsubscribe()
                    }
                }
                ,
                e.prototype.__tryOrUnsub = function(t, e) {
                    try {
                        t.call(this._context, e)
                    } catch (t) {
                        if (this.unsubscribe(),
                        at.useDeprecatedSynchronousErrorHandling)
                            throw t;
                        ct(t)
                    }
                }
                ,
                e.prototype.__tryOrSetError = function(t, e, n) {
                    if (!at.useDeprecatedSynchronousErrorHandling)
                        throw new Error("bad call");
                    try {
                        e.call(this._context, n)
                    } catch (e) {
                        return at.useDeprecatedSynchronousErrorHandling ? (t.syncErrorValue = e,
                        t.syncErrorThrown = !0,
                        !0) : (ct(e),
                        !0)
                    }
                    return !1
                }
                ,
                e.prototype._unsubscribe = function() {
                    var t = this._parentSubscriber;
                    this._context = null,
                    this._parentSubscriber = null,
                    t.unsubscribe()
                }
                ,
                e
            }(mt);
            function gt(t) {
                for (; t; ) {
                    var e = t
                      , n = e.closed
                      , r = e.destination
                      , i = e.isStopped;
                    if (n || i)
                        return !1;
                    t = r && r instanceof mt ? r : null
                }
                return !0
            }
            var wt = "function" == typeof Symbol && Symbol.observable || "@@observable";
            function _t(t) {
                return t
            }
            function kt() {
                for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e];
                return xt(t)
            }
            function xt(t) {
                return 0 === t.length ? _t : 1 === t.length ? t[0] : function(e) {
                    return t.reduce((function(t, e) {
                        return e(t)
                    }
                    ), e)
                }
            }
            var St = function() {
                function t(t) {
                    this._isScalar = !1,
                    t && (this._subscribe = t)
                }
                return t.prototype.lift = function(e) {
                    var n = new t;
                    return n.source = this,
                    n.operator = e,
                    n
                }
                ,
                t.prototype.subscribe = function(t, e, n) {
                    var r = this.operator
                      , i = function(t, e, n) {
                        if (t) {
                            if (t instanceof mt)
                                return t;
                            if (t[vt])
                                return t[vt]()
                        }
                        return t || e || n ? new mt(t,e,n) : new mt(lt)
                    }(t, e, n);
                    if (r ? i.add(r.call(i, this.source)) : i.add(this.source || at.useDeprecatedSynchronousErrorHandling && !i.syncErrorThrowable ? this._subscribe(i) : this._trySubscribe(i)),
                    at.useDeprecatedSynchronousErrorHandling && i.syncErrorThrowable && (i.syncErrorThrowable = !1,
                    i.syncErrorThrown))
                        throw i.syncErrorValue;
                    return i
                }
                ,
                t.prototype._trySubscribe = function(t) {
                    try {
                        return this._subscribe(t)
                    } catch (e) {
                        at.useDeprecatedSynchronousErrorHandling && (t.syncErrorThrown = !0,
                        t.syncErrorValue = e),
                        gt(t) ? t.error(e) : console.warn(e)
                    }
                }
                ,
                t.prototype.forEach = function(t, e) {
                    var n = this;
                    return new (e = Mt(e))((function(e, r) {
                        var i;
                        i = n.subscribe((function(e) {
                            try {
                                t(e)
                            } catch (t) {
                                r(t),
                                i && i.unsubscribe()
                            }
                        }
                        ), r, e)
                    }
                    ))
                }
                ,
                t.prototype._subscribe = function(t) {
                    var e = this.source;
                    return e && e.subscribe(t)
                }
                ,
                t.prototype[wt] = function() {
                    return this
                }
                ,
                t.prototype.pipe = function() {
                    for (var t = [], e = 0; e < arguments.length; e++)
                        t[e] = arguments[e];
                    return 0 === t.length ? this : xt(t)(this)
                }
                ,
                t.prototype.toPromise = function(t) {
                    var e = this;
                    return new (t = Mt(t))((function(t, n) {
                        var r;
                        e.subscribe((function(t) {
                            return r = t
                        }
                        ), (function(t) {
                            return n(t)
                        }
                        ), (function() {
                            return t(r)
                        }
                        ))
                    }
                    ))
                }
                ,
                t.create = function(e) {
                    return new t(e)
                }
                ,
                t
            }();
            function Mt(t) {
                if (t || (t = at.Promise || Promise),
                !t)
                    throw new Error("no Promise impl found");
                return t
            }
            var Et = function() {
                function t() {
                    return Error.call(this),
                    this.message = "object unsubscribed",
                    this.name = "ObjectUnsubscribedError",
                    this
                }
                return t.prototype = Object.create(Error.prototype),
                t
            }()
              , Ot = function(t) {
                function e(e, n) {
                    var r = t.call(this) || this;
                    return r.subject = e,
                    r.subscriber = n,
                    r.closed = !1,
                    r
                }
                return Object(v.c)(e, t),
                e.prototype.unsubscribe = function() {
                    if (!this.closed) {
                        this.closed = !0;
                        var t = this.subject
                          , e = t.observers;
                        if (this.subject = null,
                        e && 0 !== e.length && !t.isStopped && !t.closed) {
                            var n = e.indexOf(this.subscriber);
                            -1 !== n && e.splice(n, 1)
                        }
                    }
                }
                ,
                e
            }(pt)
              , jt = function(t) {
                function e(e) {
                    var n = t.call(this, e) || this;
                    return n.destination = e,
                    n
                }
                return Object(v.c)(e, t),
                e
            }(mt)
              , Ct = function(t) {
                function e() {
                    var e = t.call(this) || this;
                    return e.observers = [],
                    e.closed = !1,
                    e.isStopped = !1,
                    e.hasError = !1,
                    e.thrownError = null,
                    e
                }
                return Object(v.c)(e, t),
                e.prototype[vt] = function() {
                    return new jt(this)
                }
                ,
                e.prototype.lift = function(t) {
                    var e = new Nt(this,this);
                    return e.operator = t,
                    e
                }
                ,
                e.prototype.next = function(t) {
                    if (this.closed)
                        throw new Et;
                    if (!this.isStopped)
                        for (var e = this.observers, n = e.length, r = e.slice(), i = 0; i < n; i++)
                            r[i].next(t)
                }
                ,
                e.prototype.error = function(t) {
                    if (this.closed)
                        throw new Et;
                    this.hasError = !0,
                    this.thrownError = t,
                    this.isStopped = !0;
                    for (var e = this.observers, n = e.length, r = e.slice(), i = 0; i < n; i++)
                        r[i].error(t);
                    this.observers.length = 0
                }
                ,
                e.prototype.complete = function() {
                    if (this.closed)
                        throw new Et;
                    this.isStopped = !0;
                    for (var t = this.observers, e = t.length, n = t.slice(), r = 0; r < e; r++)
                        n[r].complete();
                    this.observers.length = 0
                }
                ,
                e.prototype.unsubscribe = function() {
                    this.isStopped = !0,
                    this.closed = !0,
                    this.observers = null
                }
                ,
                e.prototype._trySubscribe = function(e) {
                    if (this.closed)
                        throw new Et;
                    return t.prototype._trySubscribe.call(this, e)
                }
                ,
                e.prototype._subscribe = function(t) {
                    if (this.closed)
                        throw new Et;
                    return this.hasError ? (t.error(this.thrownError),
                    pt.EMPTY) : this.isStopped ? (t.complete(),
                    pt.EMPTY) : (this.observers.push(t),
                    new Ot(this,t))
                }
                ,
                e.prototype.asObservable = function() {
                    var t = new St;
                    return t.source = this,
                    t
                }
                ,
                e.create = function(t, e) {
                    return new Nt(t,e)
                }
                ,
                e
            }(St)
              , Nt = function(t) {
                function e(e, n) {
                    var r = t.call(this) || this;
                    return r.destination = e,
                    r.source = n,
                    r
                }
                return Object(v.c)(e, t),
                e.prototype.next = function(t) {
                    var e = this.destination;
                    e && e.next && e.next(t)
                }
                ,
                e.prototype.error = function(t) {
                    var e = this.destination;
                    e && e.error && this.destination.error(t)
                }
                ,
                e.prototype.complete = function() {
                    var t = this.destination;
                    t && t.complete && this.destination.complete()
                }
                ,
                e.prototype._subscribe = function(t) {
                    return this.source ? this.source.subscribe(t) : pt.EMPTY
                }
                ,
                e
            }(Ct);
            function Tt() {
                return function(t) {
                    return t.lift(new It(t))
                }
            }
            var It = function() {
                function t(t) {
                    this.connectable = t
                }
                return t.prototype.call = function(t, e) {
                    var n = this.connectable;
                    n._refCount++;
                    var r = new At(t,n)
                      , i = e.subscribe(r);
                    return r.closed || (r.connection = n.connect()),
                    i
                }
                ,
                t
            }()
              , At = function(t) {
                function e(e, n) {
                    var r = t.call(this, e) || this;
                    return r.connectable = n,
                    r
                }
                return Object(v.c)(e, t),
                e.prototype._unsubscribe = function() {
                    var t = this.connectable;
                    if (t) {
                        this.connectable = null;
                        var e = t._refCount;
                        if (e <= 0)
                            this.connection = null;
                        else if (t._refCount = e - 1,
                        e > 1)
                            this.connection = null;
                        else {
                            var n = this.connection
                              , r = t._connection;
                            this.connection = null,
                            !r || n && r !== n || r.unsubscribe()
                        }
                    } else
                        this.connection = null
                }
                ,
                e
            }(mt)
              , Pt = function(t) {
                function e(e, n) {
                    var r = t.call(this) || this;
                    return r.source = e,
                    r.subjectFactory = n,
                    r._refCount = 0,
                    r._isComplete = !1,
                    r
                }
                return Object(v.c)(e, t),
                e.prototype._subscribe = function(t) {
                    return this.getSubject().subscribe(t)
                }
                ,
                e.prototype.getSubject = function() {
                    var t = this._subject;
                    return t && !t.isStopped || (this._subject = this.subjectFactory()),
                    this._subject
                }
                ,
                e.prototype.connect = function() {
                    var t = this._connection;
                    return t || (this._isComplete = !1,
                    (t = this._connection = new pt).add(this.source.subscribe(new Dt(this.getSubject(),this))),
                    t.closed && (this._connection = null,
                    t = pt.EMPTY)),
                    t
                }
                ,
                e.prototype.refCount = function() {
                    return Tt()(this)
                }
                ,
                e
            }(St)
              , Rt = function() {
                var t = Pt.prototype;
                return {
                    operator: {
                        value: null
                    },
                    _refCount: {
                        value: 0,
                        writable: !0
                    },
                    _subject: {
                        value: null,
                        writable: !0
                    },
                    _connection: {
                        value: null,
                        writable: !0
                    },
                    _subscribe: {
                        value: t._subscribe
                    },
                    _isComplete: {
                        value: t._isComplete,
                        writable: !0
                    },
                    getSubject: {
                        value: t.getSubject
                    },
                    connect: {
                        value: t.connect
                    },
                    refCount: {
                        value: t.refCount
                    }
                }
            }()
              , Dt = function(t) {
                function e(e, n) {
                    var r = t.call(this, e) || this;
                    return r.connectable = n,
                    r
                }
                return Object(v.c)(e, t),
                e.prototype._error = function(e) {
                    this._unsubscribe(),
                    t.prototype._error.call(this, e)
                }
                ,
                e.prototype._complete = function() {
                    this.connectable._isComplete = !0,
                    this._unsubscribe(),
                    t.prototype._complete.call(this)
                }
                ,
                e.prototype._unsubscribe = function() {
                    var t = this.connectable;
                    if (t) {
                        this.connectable = null;
                        var e = t._connection;
                        t._refCount = 0,
                        t._subject = null,
                        t._connection = null,
                        e && e.unsubscribe()
                    }
                }
                ,
                e
            }(jt)
              , Lt = function() {
                function t(t, e, n, r) {
                    this.keySelector = t,
                    this.elementSelector = e,
                    this.durationSelector = n,
                    this.subjectSelector = r
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new Bt(t,this.keySelector,this.elementSelector,this.durationSelector,this.subjectSelector))
                }
                ,
                t
            }()
              , Bt = function(t) {
                function e(e, n, r, i, o) {
                    var s = t.call(this, e) || this;
                    return s.keySelector = n,
                    s.elementSelector = r,
                    s.durationSelector = i,
                    s.subjectSelector = o,
                    s.groups = null,
                    s.attemptedToUnsubscribe = !1,
                    s.count = 0,
                    s
                }
                return Object(v.c)(e, t),
                e.prototype._next = function(t) {
                    var e;
                    try {
                        e = this.keySelector(t)
                    } catch (t) {
                        return void this.error(t)
                    }
                    this._group(t, e)
                }
                ,
                e.prototype._group = function(t, e) {
                    var n = this.groups;
                    n || (n = this.groups = new Map);
                    var r, i = n.get(e);
                    if (this.elementSelector)
                        try {
                            r = this.elementSelector(t)
                        } catch (t) {
                            this.error(t)
                        }
                    else
                        r = t;
                    if (!i) {
                        i = this.subjectSelector ? this.subjectSelector() : new Ct,
                        n.set(e, i);
                        var o = new Wt(e,i,this);
                        if (this.destination.next(o),
                        this.durationSelector) {
                            var s = void 0;
                            try {
                                s = this.durationSelector(new Wt(e,i))
                            } catch (t) {
                                return void this.error(t)
                            }
                            this.add(s.subscribe(new Ft(e,i,this)))
                        }
                    }
                    i.closed || i.next(r)
                }
                ,
                e.prototype._error = function(t) {
                    var e = this.groups;
                    e && (e.forEach((function(e, n) {
                        e.error(t)
                    }
                    )),
                    e.clear()),
                    this.destination.error(t)
                }
                ,
                e.prototype._complete = function() {
                    var t = this.groups;
                    t && (t.forEach((function(t, e) {
                        t.complete()
                    }
                    )),
                    t.clear()),
                    this.destination.complete()
                }
                ,
                e.prototype.removeGroup = function(t) {
                    this.groups.delete(t)
                }
                ,
                e.prototype.unsubscribe = function() {
                    this.closed || (this.attemptedToUnsubscribe = !0,
                    0 === this.count && t.prototype.unsubscribe.call(this))
                }
                ,
                e
            }(mt)
              , Ft = function(t) {
                function e(e, n, r) {
                    var i = t.call(this, n) || this;
                    return i.key = e,
                    i.group = n,
                    i.parent = r,
                    i
                }
                return Object(v.c)(e, t),
                e.prototype._next = function(t) {
                    this.complete()
                }
                ,
                e.prototype._unsubscribe = function() {
                    var t = this.parent
                      , e = this.key;
                    this.key = this.parent = null,
                    t && t.removeGroup(e)
                }
                ,
                e
            }(mt)
              , Wt = function(t) {
                function e(e, n, r) {
                    var i = t.call(this) || this;
                    return i.key = e,
                    i.groupSubject = n,
                    i.refCountSubscription = r,
                    i
                }
                return Object(v.c)(e, t),
                e.prototype._subscribe = function(t) {
                    var e = new pt
                      , n = this.refCountSubscription
                      , r = this.groupSubject;
                    return n && !n.closed && e.add(new qt(n)),
                    e.add(r.subscribe(t)),
                    e
                }
                ,
                e
            }(St)
              , qt = function(t) {
                function e(e) {
                    var n = t.call(this) || this;
                    return n.parent = e,
                    e.count++,
                    n
                }
                return Object(v.c)(e, t),
                e.prototype.unsubscribe = function() {
                    var e = this.parent;
                    e.closed || this.closed || (t.prototype.unsubscribe.call(this),
                    e.count -= 1,
                    0 === e.count && e.attemptedToUnsubscribe && e.unsubscribe())
                }
                ,
                e
            }(pt)
              , Ut = function(t) {
                function e(e) {
                    var n = t.call(this) || this;
                    return n._value = e,
                    n
                }
                return Object(v.c)(e, t),
                Object.defineProperty(e.prototype, "value", {
                    get: function() {
                        return this.getValue()
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                e.prototype._subscribe = function(e) {
                    var n = t.prototype._subscribe.call(this, e);
                    return n && !n.closed && e.next(this._value),
                    n
                }
                ,
                e.prototype.getValue = function() {
                    if (this.hasError)
                        throw this.thrownError;
                    if (this.closed)
                        throw new Et;
                    return this._value
                }
                ,
                e.prototype.next = function(e) {
                    t.prototype.next.call(this, this._value = e)
                }
                ,
                e
            }(Ct)
              , Vt = function(t) {
                function e(e, n) {
                    var r = t.call(this, e, n) || this;
                    return r.scheduler = e,
                    r.work = n,
                    r.pending = !1,
                    r
                }
                return Object(v.c)(e, t),
                e.prototype.schedule = function(t, e) {
                    if (void 0 === e && (e = 0),
                    this.closed)
                        return this;
                    this.state = t;
                    var n = this.id
                      , r = this.scheduler;
                    return null != n && (this.id = this.recycleAsyncId(r, n, e)),
                    this.pending = !0,
                    this.delay = e,
                    this.id = this.id || this.requestAsyncId(r, this.id, e),
                    this
                }
                ,
                e.prototype.requestAsyncId = function(t, e, n) {
                    return void 0 === n && (n = 0),
                    setInterval(t.flush.bind(t, this), n)
                }
                ,
                e.prototype.recycleAsyncId = function(t, e, n) {
                    if (void 0 === n && (n = 0),
                    null !== n && this.delay === n && !1 === this.pending)
                        return e;
                    clearInterval(e)
                }
                ,
                e.prototype.execute = function(t, e) {
                    if (this.closed)
                        return new Error("executing a cancelled action");
                    this.pending = !1;
                    var n = this._execute(t, e);
                    if (n)
                        return n;
                    !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
                }
                ,
                e.prototype._execute = function(t, e) {
                    var n = !1
                      , r = void 0;
                    try {
                        this.work(t)
                    } catch (t) {
                        n = !0,
                        r = !!t && t || new Error(t)
                    }
                    if (n)
                        return this.unsubscribe(),
                        r
                }
                ,
                e.prototype._unsubscribe = function() {
                    var t = this.id
                      , e = this.scheduler
                      , n = e.actions
                      , r = n.indexOf(this);
                    this.work = null,
                    this.state = null,
                    this.pending = !1,
                    this.scheduler = null,
                    -1 !== r && n.splice(r, 1),
                    null != t && (this.id = this.recycleAsyncId(e, t, null)),
                    this.delay = null
                }
                ,
                e
            }(function(t) {
                function e(e, n) {
                    return t.call(this) || this
                }
                return Object(v.c)(e, t),
                e.prototype.schedule = function(t, e) {
                    return this
                }
                ,
                e
            }(pt))
              , Ht = function(t) {
                function e(e, n) {
                    var r = t.call(this, e, n) || this;
                    return r.scheduler = e,
                    r.work = n,
                    r
                }
                return Object(v.c)(e, t),
                e.prototype.schedule = function(e, n) {
                    return void 0 === n && (n = 0),
                    n > 0 ? t.prototype.schedule.call(this, e, n) : (this.delay = n,
                    this.state = e,
                    this.scheduler.flush(this),
                    this)
                }
                ,
                e.prototype.execute = function(e, n) {
                    return n > 0 || this.closed ? t.prototype.execute.call(this, e, n) : this._execute(e, n)
                }
                ,
                e.prototype.requestAsyncId = function(e, n, r) {
                    return void 0 === r && (r = 0),
                    null !== r && r > 0 || null === r && this.delay > 0 ? t.prototype.requestAsyncId.call(this, e, n, r) : e.flush(this)
                }
                ,
                e
            }(Vt)
              , zt = function() {
                function t(e, n) {
                    void 0 === n && (n = t.now),
                    this.SchedulerAction = e,
                    this.now = n
                }
                return t.prototype.schedule = function(t, e, n) {
                    return void 0 === e && (e = 0),
                    new this.SchedulerAction(this,t).schedule(n, e)
                }
                ,
                t.now = function() {
                    return Date.now()
                }
                ,
                t
            }()
              , Kt = function(t) {
                function e(n, r) {
                    void 0 === r && (r = zt.now);
                    var i = t.call(this, n, (function() {
                        return e.delegate && e.delegate !== i ? e.delegate.now() : r()
                    }
                    )) || this;
                    return i.actions = [],
                    i.active = !1,
                    i.scheduled = void 0,
                    i
                }
                return Object(v.c)(e, t),
                e.prototype.schedule = function(n, r, i) {
                    return void 0 === r && (r = 0),
                    e.delegate && e.delegate !== this ? e.delegate.schedule(n, r, i) : t.prototype.schedule.call(this, n, r, i)
                }
                ,
                e.prototype.flush = function(t) {
                    var e = this.actions;
                    if (this.active)
                        e.push(t);
                    else {
                        var n;
                        this.active = !0;
                        do {
                            if (n = t.execute(t.state, t.delay))
                                break
                        } while (t = e.shift());
                        if (this.active = !1,
                        n) {
                            for (; t = e.shift(); )
                                t.unsubscribe();
                            throw n
                        }
                    }
                }
                ,
                e
            }(zt)
              , Jt = new (function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return Object(v.c)(e, t),
                e
            }(Kt))(Ht)
              , $t = new St((function(t) {
                return t.complete()
            }
            ));
            function Gt(t) {
                return t ? function(t) {
                    return new St((function(e) {
                        return t.schedule((function() {
                            return e.complete()
                        }
                        ))
                    }
                    ))
                }(t) : $t
            }
            function Yt(t) {
                return t && "function" == typeof t.schedule
            }
            var Zt, Qt = function(t) {
                return function(e) {
                    for (var n = 0, r = t.length; n < r && !e.closed; n++)
                        e.next(t[n]);
                    e.complete()
                }
            };
            function Xt(t, e) {
                return new St((function(n) {
                    var r = new pt
                      , i = 0;
                    return r.add(e.schedule((function() {
                        i !== t.length ? (n.next(t[i++]),
                        n.closed || r.add(this.schedule())) : n.complete()
                    }
                    ))),
                    r
                }
                ))
            }
            function te(t, e) {
                return e ? Xt(t, e) : new St(Qt(t))
            }
            function ee() {
                for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e];
                var n = t[t.length - 1];
                return Yt(n) ? (t.pop(),
                Xt(t, n)) : te(t)
            }
            function ne(t, e) {
                return new St(e ? function(n) {
                    return e.schedule(re, 0, {
                        error: t,
                        subscriber: n
                    })
                }
                : function(e) {
                    return e.error(t)
                }
                )
            }
            function re(t) {
                var e = t.error;
                t.subscriber.error(e)
            }
            Zt || (Zt = {});
            var ie = function() {
                function t(t, e, n) {
                    this.kind = t,
                    this.value = e,
                    this.error = n,
                    this.hasValue = "N" === t
                }
                return t.prototype.observe = function(t) {
                    switch (this.kind) {
                    case "N":
                        return t.next && t.next(this.value);
                    case "E":
                        return t.error && t.error(this.error);
                    case "C":
                        return t.complete && t.complete()
                    }
                }
                ,
                t.prototype.do = function(t, e, n) {
                    switch (this.kind) {
                    case "N":
                        return t && t(this.value);
                    case "E":
                        return e && e(this.error);
                    case "C":
                        return n && n()
                    }
                }
                ,
                t.prototype.accept = function(t, e, n) {
                    return t && "function" == typeof t.next ? this.observe(t) : this.do(t, e, n)
                }
                ,
                t.prototype.toObservable = function() {
                    switch (this.kind) {
                    case "N":
                        return ee(this.value);
                    case "E":
                        return ne(this.error);
                    case "C":
                        return Gt()
                    }
                    throw new Error("unexpected notification kind value")
                }
                ,
                t.createNext = function(e) {
                    return void 0 !== e ? new t("N",e) : t.undefinedValueNotification
                }
                ,
                t.createError = function(e) {
                    return new t("E",void 0,e)
                }
                ,
                t.createComplete = function() {
                    return t.completeNotification
                }
                ,
                t.completeNotification = new t("C"),
                t.undefinedValueNotification = new t("N",void 0),
                t
            }()
              , oe = function() {
                function t(t, e) {
                    void 0 === e && (e = 0),
                    this.scheduler = t,
                    this.delay = e
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new se(t,this.scheduler,this.delay))
                }
                ,
                t
            }()
              , se = function(t) {
                function e(e, n, r) {
                    void 0 === r && (r = 0);
                    var i = t.call(this, e) || this;
                    return i.scheduler = n,
                    i.delay = r,
                    i
                }
                return Object(v.c)(e, t),
                e.dispatch = function(t) {
                    var e = t.notification
                      , n = t.destination;
                    e.observe(n),
                    this.unsubscribe()
                }
                ,
                e.prototype.scheduleMessage = function(t) {
                    this.destination.add(this.scheduler.schedule(e.dispatch, this.delay, new ue(t,this.destination)))
                }
                ,
                e.prototype._next = function(t) {
                    this.scheduleMessage(ie.createNext(t))
                }
                ,
                e.prototype._error = function(t) {
                    this.scheduleMessage(ie.createError(t)),
                    this.unsubscribe()
                }
                ,
                e.prototype._complete = function() {
                    this.scheduleMessage(ie.createComplete()),
                    this.unsubscribe()
                }
                ,
                e
            }(mt)
              , ue = function(t, e) {
                this.notification = t,
                this.destination = e
            }
              , ae = function(t) {
                function e(e, n, r) {
                    void 0 === e && (e = Number.POSITIVE_INFINITY),
                    void 0 === n && (n = Number.POSITIVE_INFINITY);
                    var i = t.call(this) || this;
                    return i.scheduler = r,
                    i._events = [],
                    i._infiniteTimeWindow = !1,
                    i._bufferSize = e < 1 ? 1 : e,
                    i._windowTime = n < 1 ? 1 : n,
                    n === Number.POSITIVE_INFINITY ? (i._infiniteTimeWindow = !0,
                    i.next = i.nextInfiniteTimeWindow) : i.next = i.nextTimeWindow,
                    i
                }
                return Object(v.c)(e, t),
                e.prototype.nextInfiniteTimeWindow = function(e) {
                    var n = this._events;
                    n.push(e),
                    n.length > this._bufferSize && n.shift(),
                    t.prototype.next.call(this, e)
                }
                ,
                e.prototype.nextTimeWindow = function(e) {
                    this._events.push(new ce(this._getNow(),e)),
                    this._trimBufferThenGetEvents(),
                    t.prototype.next.call(this, e)
                }
                ,
                e.prototype._subscribe = function(t) {
                    var e, n = this._infiniteTimeWindow, r = n ? this._events : this._trimBufferThenGetEvents(), i = this.scheduler, o = r.length;
                    if (this.closed)
                        throw new Et;
                    if (this.isStopped || this.hasError ? e = pt.EMPTY : (this.observers.push(t),
                    e = new Ot(this,t)),
                    i && t.add(t = new se(t,i)),
                    n)
                        for (var s = 0; s < o && !t.closed; s++)
                            t.next(r[s]);
                    else
                        for (s = 0; s < o && !t.closed; s++)
                            t.next(r[s].value);
                    return this.hasError ? t.error(this.thrownError) : this.isStopped && t.complete(),
                    e
                }
                ,
                e.prototype._getNow = function() {
                    return (this.scheduler || Jt).now()
                }
                ,
                e.prototype._trimBufferThenGetEvents = function() {
                    for (var t = this._getNow(), e = this._bufferSize, n = this._windowTime, r = this._events, i = r.length, o = 0; o < i && !(t - r[o].time < n); )
                        o++;
                    return i > e && (o = Math.max(o, i - e)),
                    o > 0 && r.splice(0, o),
                    r
                }
                ,
                e
            }(Ct)
              , ce = function(t, e) {
                this.time = t,
                this.value = e
            }
              , le = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.value = null,
                    e.hasNext = !1,
                    e.hasCompleted = !1,
                    e
                }
                return Object(v.c)(e, t),
                e.prototype._subscribe = function(e) {
                    return this.hasError ? (e.error(this.thrownError),
                    pt.EMPTY) : this.hasCompleted && this.hasNext ? (e.next(this.value),
                    e.complete(),
                    pt.EMPTY) : t.prototype._subscribe.call(this, e)
                }
                ,
                e.prototype.next = function(t) {
                    this.hasCompleted || (this.value = t,
                    this.hasNext = !0)
                }
                ,
                e.prototype.error = function(e) {
                    this.hasCompleted || t.prototype.error.call(this, e)
                }
                ,
                e.prototype.complete = function() {
                    this.hasCompleted = !0,
                    this.hasNext && t.prototype.next.call(this, this.value),
                    t.prototype.complete.call(this)
                }
                ,
                e
            }(Ct)
              , he = 1
              , fe = Promise.resolve()
              , de = {};
            function pe(t) {
                return t in de && (delete de[t],
                !0)
            }
            var be = function(t) {
                function e(e, n) {
                    var r = t.call(this, e, n) || this;
                    return r.scheduler = e,
                    r.work = n,
                    r
                }
                return Object(v.c)(e, t),
                e.prototype.requestAsyncId = function(e, n, r) {
                    return void 0 === r && (r = 0),
                    null !== r && r > 0 ? t.prototype.requestAsyncId.call(this, e, n, r) : (e.actions.push(this),
                    e.scheduled || (e.scheduled = function(t) {
                        var e = he++;
                        return de[e] = !0,
                        fe.then((function() {
                            return pe(e) && t()
                        }
                        )),
                        e
                    }(e.flush.bind(e, null))))
                }
                ,
                e.prototype.recycleAsyncId = function(e, n, r) {
                    if (void 0 === r && (r = 0),
                    null !== r && r > 0 || null === r && this.delay > 0)
                        return t.prototype.recycleAsyncId.call(this, e, n, r);
                    0 === e.actions.length && (function(t) {
                        pe(t)
                    }(n),
                    e.scheduled = void 0)
                }
                ,
                e
            }(Vt)
              , ve = new (function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return Object(v.c)(e, t),
                e.prototype.flush = function(t) {
                    this.active = !0,
                    this.scheduled = void 0;
                    var e, n = this.actions, r = -1, i = n.length;
                    t = t || n.shift();
                    do {
                        if (e = t.execute(t.state, t.delay))
                            break
                    } while (++r < i && (t = n.shift()));
                    if (this.active = !1,
                    e) {
                        for (; ++r < i && (t = n.shift()); )
                            t.unsubscribe();
                        throw e
                    }
                }
                ,
                e
            }(Kt))(be)
              , me = new Kt(Vt)
              , ye = function(t) {
                function e(e, n) {
                    var r = t.call(this, e, n) || this;
                    return r.scheduler = e,
                    r.work = n,
                    r
                }
                return Object(v.c)(e, t),
                e.prototype.requestAsyncId = function(e, n, r) {
                    return void 0 === r && (r = 0),
                    null !== r && r > 0 ? t.prototype.requestAsyncId.call(this, e, n, r) : (e.actions.push(this),
                    e.scheduled || (e.scheduled = requestAnimationFrame((function() {
                        return e.flush(null)
                    }
                    ))))
                }
                ,
                e.prototype.recycleAsyncId = function(e, n, r) {
                    if (void 0 === r && (r = 0),
                    null !== r && r > 0 || null === r && this.delay > 0)
                        return t.prototype.recycleAsyncId.call(this, e, n, r);
                    0 === e.actions.length && (cancelAnimationFrame(n),
                    e.scheduled = void 0)
                }
                ,
                e
            }(Vt)
              , ge = new (function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return Object(v.c)(e, t),
                e.prototype.flush = function(t) {
                    this.active = !0,
                    this.scheduled = void 0;
                    var e, n = this.actions, r = -1, i = n.length;
                    t = t || n.shift();
                    do {
                        if (e = t.execute(t.state, t.delay))
                            break
                    } while (++r < i && (t = n.shift()));
                    if (this.active = !1,
                    e) {
                        for (; ++r < i && (t = n.shift()); )
                            t.unsubscribe();
                        throw e
                    }
                }
                ,
                e
            }(Kt))(ye)
              , we = function(t) {
                function e(e, n) {
                    void 0 === e && (e = _e),
                    void 0 === n && (n = Number.POSITIVE_INFINITY);
                    var r = t.call(this, e, (function() {
                        return r.frame
                    }
                    )) || this;
                    return r.maxFrames = n,
                    r.frame = 0,
                    r.index = -1,
                    r
                }
                return Object(v.c)(e, t),
                e.prototype.flush = function() {
                    for (var t, e, n = this.actions, r = this.maxFrames; (e = n[0]) && e.delay <= r && (n.shift(),
                    this.frame = e.delay,
                    !(t = e.execute(e.state, e.delay))); )
                        ;
                    if (t) {
                        for (; e = n.shift(); )
                            e.unsubscribe();
                        throw t
                    }
                }
                ,
                e.frameTimeFactor = 10,
                e
            }(Kt)
              , _e = function(t) {
                function e(e, n, r) {
                    void 0 === r && (r = e.index += 1);
                    var i = t.call(this, e, n) || this;
                    return i.scheduler = e,
                    i.work = n,
                    i.index = r,
                    i.active = !0,
                    i.index = e.index = r,
                    i
                }
                return Object(v.c)(e, t),
                e.prototype.schedule = function(n, r) {
                    if (void 0 === r && (r = 0),
                    !this.id)
                        return t.prototype.schedule.call(this, n, r);
                    this.active = !1;
                    var i = new e(this.scheduler,this.work);
                    return this.add(i),
                    i.schedule(n, r)
                }
                ,
                e.prototype.requestAsyncId = function(t, n, r) {
                    void 0 === r && (r = 0),
                    this.delay = t.frame + r;
                    var i = t.actions;
                    return i.push(this),
                    i.sort(e.sortActions),
                    !0
                }
                ,
                e.prototype.recycleAsyncId = function(t, e, n) {}
                ,
                e.prototype._execute = function(e, n) {
                    if (!0 === this.active)
                        return t.prototype._execute.call(this, e, n)
                }
                ,
                e.sortActions = function(t, e) {
                    return t.delay === e.delay ? t.index === e.index ? 0 : t.index > e.index ? 1 : -1 : t.delay > e.delay ? 1 : -1
                }
                ,
                e
            }(Vt);
            function ke() {}
            var xe = function() {
                function t() {
                    return Error.call(this),
                    this.message = "argument out of range",
                    this.name = "ArgumentOutOfRangeError",
                    this
                }
                return t.prototype = Object.create(Error.prototype),
                t
            }()
              , Se = function() {
                function t() {
                    return Error.call(this),
                    this.message = "no elements in sequence",
                    this.name = "EmptyError",
                    this
                }
                return t.prototype = Object.create(Error.prototype),
                t
            }()
              , Me = function() {
                function t() {
                    return Error.call(this),
                    this.message = "Timeout has occurred",
                    this.name = "TimeoutError",
                    this
                }
                return t.prototype = Object.create(Error.prototype),
                t
            }();
            function Ee(t, e) {
                return function(n) {
                    if ("function" != typeof t)
                        throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
                    return n.lift(new Oe(t,e))
                }
            }
            var Oe = function() {
                function t(t, e) {
                    this.project = t,
                    this.thisArg = e
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new je(t,this.project,this.thisArg))
                }
                ,
                t
            }()
              , je = function(t) {
                function e(e, n, r) {
                    var i = t.call(this, e) || this;
                    return i.project = n,
                    i.count = 0,
                    i.thisArg = r || i,
                    i
                }
                return Object(v.c)(e, t),
                e.prototype._next = function(t) {
                    var e;
                    try {
                        e = this.project.call(this.thisArg, t, this.count++)
                    } catch (t) {
                        return void this.destination.error(t)
                    }
                    this.destination.next(e)
                }
                ,
                e
            }(mt);
            function Ce(t) {
                var e = this
                  , n = t.args
                  , r = t.subscriber
                  , i = t.params
                  , o = i.callbackFunc
                  , s = i.context
                  , u = i.scheduler
                  , a = i.subject;
                if (!a) {
                    a = i.subject = new le;
                    try {
                        o.apply(s, n.concat([function() {
                            for (var t = [], n = 0; n < arguments.length; n++)
                                t[n] = arguments[n];
                            var r = t.length <= 1 ? t[0] : t;
                            e.add(u.schedule(Ne, 0, {
                                value: r,
                                subject: a
                            }))
                        }
                        ]))
                    } catch (t) {
                        a.error(t)
                    }
                }
                this.add(a.subscribe(r))
            }
            function Ne(t) {
                var e = t.value
                  , n = t.subject;
                n.next(e),
                n.complete()
            }
            function Te(t) {
                var e = this
                  , n = t.params
                  , r = t.subscriber
                  , i = t.context
                  , o = n.callbackFunc
                  , s = n.args
                  , u = n.scheduler
                  , a = n.subject;
                if (!a) {
                    a = n.subject = new le;
                    try {
                        o.apply(i, s.concat([function() {
                            for (var t = [], n = 0; n < arguments.length; n++)
                                t[n] = arguments[n];
                            var r = t.shift();
                            if (r)
                                e.add(u.schedule(Ae, 0, {
                                    err: r,
                                    subject: a
                                }));
                            else {
                                var i = t.length <= 1 ? t[0] : t;
                                e.add(u.schedule(Ie, 0, {
                                    value: i,
                                    subject: a
                                }))
                            }
                        }
                        ]))
                    } catch (t) {
                        this.add(u.schedule(Ae, 0, {
                            err: t,
                            subject: a
                        }))
                    }
                }
                this.add(a.subscribe(r))
            }
            function Ie(t) {
                var e = t.value
                  , n = t.subject;
                n.next(e),
                n.complete()
            }
            function Ae(t) {
                var e = t.err;
                t.subject.error(e)
            }
            var Pe = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return Object(v.c)(e, t),
                e.prototype.notifyNext = function(t, e, n, r, i) {
                    this.destination.next(e)
                }
                ,
                e.prototype.notifyError = function(t, e) {
                    this.destination.error(t)
                }
                ,
                e.prototype.notifyComplete = function(t) {
                    this.destination.complete()
                }
                ,
                e
            }(mt)
              , Re = function(t) {
                function e(e, n, r) {
                    var i = t.call(this) || this;
                    return i.parent = e,
                    i.outerValue = n,
                    i.outerIndex = r,
                    i.index = 0,
                    i
                }
                return Object(v.c)(e, t),
                e.prototype._next = function(t) {
                    this.parent.notifyNext(this.outerValue, t, this.outerIndex, this.index++, this)
                }
                ,
                e.prototype._error = function(t) {
                    this.parent.notifyError(t, this),
                    this.unsubscribe()
                }
                ,
                e.prototype._complete = function() {
                    this.parent.notifyComplete(this),
                    this.unsubscribe()
                }
                ,
                e
            }(mt);
            var De = "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator"
              , Le = function(t) {
                return t && "number" == typeof t.length && "function" != typeof t
            };
            function Be(t) {
                return !!t && "function" != typeof t.subscribe && "function" == typeof t.then
            }
            var Fe = function(t) {
                if (t && "function" == typeof t[wt])
                    return r = t,
                    function(t) {
                        var e = r[wt]();
                        if ("function" != typeof e.subscribe)
                            throw new TypeError("Provided object does not correctly implement Symbol.observable");
                        return e.subscribe(t)
                    }
                    ;
                if (Le(t))
                    return Qt(t);
                if (Be(t))
                    return n = t,
                    function(t) {
                        return n.then((function(e) {
                            t.closed || (t.next(e),
                            t.complete())
                        }
                        ), (function(e) {
                            return t.error(e)
                        }
                        )).then(null, ct),
                        t
                    }
                    ;
                if (t && "function" == typeof t[De])
                    return e = t,
                    function(t) {
                        for (var n = e[De](); ; ) {
                            var r = n.next();
                            if (r.done) {
                                t.complete();
                                break
                            }
                            if (t.next(r.value),
                            t.closed)
                                break
                        }
                        return "function" == typeof n.return && t.add((function() {
                            n.return && n.return()
                        }
                        )),
                        t
                    }
                    ;
                var e, n, r, i = ft(t) ? "an invalid object" : "'" + t + "'";
                throw new TypeError("You provided " + i + " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")
            };
            function We(t, e, n, r, i) {
                if (void 0 === i && (i = new Re(t,n,r)),
                !i.closed)
                    return e instanceof St ? e.subscribe(i) : Fe(e)(i)
            }
            var qe = {}
              , Ue = function() {
                function t(t) {
                    this.resultSelector = t
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new Ve(t,this.resultSelector))
                }
                ,
                t
            }()
              , Ve = function(t) {
                function e(e, n) {
                    var r = t.call(this, e) || this;
                    return r.resultSelector = n,
                    r.active = 0,
                    r.values = [],
                    r.observables = [],
                    r
                }
                return Object(v.c)(e, t),
                e.prototype._next = function(t) {
                    this.values.push(qe),
                    this.observables.push(t)
                }
                ,
                e.prototype._complete = function() {
                    var t = this.observables
                      , e = t.length;
                    if (0 === e)
                        this.destination.complete();
                    else {
                        this.active = e,
                        this.toRespond = e;
                        for (var n = 0; n < e; n++) {
                            var r = t[n];
                            this.add(We(this, r, r, n))
                        }
                    }
                }
                ,
                e.prototype.notifyComplete = function(t) {
                    0 == (this.active -= 1) && this.destination.complete()
                }
                ,
                e.prototype.notifyNext = function(t, e, n, r, i) {
                    var o = this.values
                      , s = o[n]
                      , u = this.toRespond ? s === qe ? --this.toRespond : this.toRespond : 0;
                    o[n] = e,
                    0 === u && (this.resultSelector ? this._tryResultSelector(o) : this.destination.next(o.slice()))
                }
                ,
                e.prototype._tryResultSelector = function(t) {
                    var e;
                    try {
                        e = this.resultSelector.apply(this, t)
                    } catch (t) {
                        return void this.destination.error(t)
                    }
                    this.destination.next(e)
                }
                ,
                e
            }(Pe);
            function He(t, e) {
                if (null != t) {
                    if (function(t) {
                        return t && "function" == typeof t[wt]
                    }(t))
                        return function(t, e) {
                            return new St((function(n) {
                                var r = new pt;
                                return r.add(e.schedule((function() {
                                    var i = t[wt]();
                                    r.add(i.subscribe({
                                        next: function(t) {
                                            r.add(e.schedule((function() {
                                                return n.next(t)
                                            }
                                            )))
                                        },
                                        error: function(t) {
                                            r.add(e.schedule((function() {
                                                return n.error(t)
                                            }
                                            )))
                                        },
                                        complete: function() {
                                            r.add(e.schedule((function() {
                                                return n.complete()
                                            }
                                            )))
                                        }
                                    }))
                                }
                                ))),
                                r
                            }
                            ))
                        }(t, e);
                    if (Be(t))
                        return function(t, e) {
                            return new St((function(n) {
                                var r = new pt;
                                return r.add(e.schedule((function() {
                                    return t.then((function(t) {
                                        r.add(e.schedule((function() {
                                            n.next(t),
                                            r.add(e.schedule((function() {
                                                return n.complete()
                                            }
                                            )))
                                        }
                                        )))
                                    }
                                    ), (function(t) {
                                        r.add(e.schedule((function() {
                                            return n.error(t)
                                        }
                                        )))
                                    }
                                    ))
                                }
                                ))),
                                r
                            }
                            ))
                        }(t, e);
                    if (Le(t))
                        return Xt(t, e);
                    if (function(t) {
                        return t && "function" == typeof t[De]
                    }(t) || "string" == typeof t)
                        return function(t, e) {
                            if (!t)
                                throw new Error("Iterable cannot be null");
                            return new St((function(n) {
                                var r, i = new pt;
                                return i.add((function() {
                                    r && "function" == typeof r.return && r.return()
                                }
                                )),
                                i.add(e.schedule((function() {
                                    r = t[De](),
                                    i.add(e.schedule((function() {
                                        if (!n.closed) {
                                            var t, e;
                                            try {
                                                var i = r.next();
                                                t = i.value,
                                                e = i.done
                                            } catch (t) {
                                                return void n.error(t)
                                            }
                                            e ? n.complete() : (n.next(t),
                                            this.schedule())
                                        }
                                    }
                                    )))
                                }
                                ))),
                                i
                            }
                            ))
                        }(t, e)
                }
                throw new TypeError((null !== t && typeof t || t) + " is not observable")
            }
            function ze(t, e) {
                return e ? He(t, e) : t instanceof St ? t : new St(Fe(t))
            }
            function Ke(t, e, n) {
                return void 0 === n && (n = Number.POSITIVE_INFINITY),
                "function" == typeof e ? function(r) {
                    return r.pipe(Ke((function(n, r) {
                        return ze(t(n, r)).pipe(Ee((function(t, i) {
                            return e(n, t, r, i)
                        }
                        )))
                    }
                    ), n))
                }
                : ("number" == typeof e && (n = e),
                function(e) {
                    return e.lift(new Je(t,n))
                }
                )
            }
            var Je = function() {
                function t(t, e) {
                    void 0 === e && (e = Number.POSITIVE_INFINITY),
                    this.project = t,
                    this.concurrent = e
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new $e(t,this.project,this.concurrent))
                }
                ,
                t
            }()
              , $e = function(t) {
                function e(e, n, r) {
                    void 0 === r && (r = Number.POSITIVE_INFINITY);
                    var i = t.call(this, e) || this;
                    return i.project = n,
                    i.concurrent = r,
                    i.hasCompleted = !1,
                    i.buffer = [],
                    i.active = 0,
                    i.index = 0,
                    i
                }
                return Object(v.c)(e, t),
                e.prototype._next = function(t) {
                    this.active < this.concurrent ? this._tryNext(t) : this.buffer.push(t)
                }
                ,
                e.prototype._tryNext = function(t) {
                    var e, n = this.index++;
                    try {
                        e = this.project(t, n)
                    } catch (t) {
                        return void this.destination.error(t)
                    }
                    this.active++,
                    this._innerSub(e, t, n)
                }
                ,
                e.prototype._innerSub = function(t, e, n) {
                    var r = new Re(this,e,n)
                      , i = this.destination;
                    i.add(r);
                    var o = We(this, t, void 0, void 0, r);
                    o !== r && i.add(o)
                }
                ,
                e.prototype._complete = function() {
                    this.hasCompleted = !0,
                    0 === this.active && 0 === this.buffer.length && this.destination.complete(),
                    this.unsubscribe()
                }
                ,
                e.prototype.notifyNext = function(t, e, n, r, i) {
                    this.destination.next(e)
                }
                ,
                e.prototype.notifyComplete = function(t) {
                    var e = this.buffer;
                    this.remove(t),
                    this.active--,
                    e.length > 0 ? this._next(e.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete()
                }
                ,
                e
            }(Pe);
            function Ge(t) {
                return void 0 === t && (t = Number.POSITIVE_INFINITY),
                Ke(_t, t)
            }
            function Ye() {
                return Ge(1)
            }
            function Ze() {
                for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e];
                return Ye()(ee.apply(void 0, t))
            }
            function Qe(t) {
                return new St((function(e) {
                    var n;
                    try {
                        n = t()
                    } catch (t) {
                        return void e.error(t)
                    }
                    return (n ? ze(n) : Gt()).subscribe(e)
                }
                ))
            }
            function Xe(t, e) {
                return new St((function(n) {
                    var r = t.length;
                    if (0 !== r)
                        for (var i = new Array(r), o = 0, s = 0, u = function(u) {
                            var a = ze(t[u])
                              , c = !1;
                            n.add(a.subscribe({
                                next: function(t) {
                                    c || (c = !0,
                                    s++),
                                    i[u] = t
                                },
                                error: function(t) {
                                    return n.error(t)
                                },
                                complete: function() {
                                    ++o !== r && c || (s === r && n.next(e ? e.reduce((function(t, e, n) {
                                        return t[e] = i[n],
                                        t
                                    }
                                    ), {}) : i),
                                    n.complete())
                                }
                            }))
                        }, a = 0; a < r; a++)
                            u(a);
                    else
                        n.complete()
                }
                ))
            }
            function tn(t) {
                var e = t.subscriber
                  , n = t.condition;
                if (!e.closed) {
                    if (t.needIterate)
                        try {
                            t.state = t.iterate(t.state)
                        } catch (t) {
                            return void e.error(t)
                        }
                    else
                        t.needIterate = !0;
                    if (n) {
                        var r = void 0;
                        try {
                            r = n(t.state)
                        } catch (t) {
                            return void e.error(t)
                        }
                        if (!r)
                            return void e.complete();
                        if (e.closed)
                            return
                    }
                    var i;
                    try {
                        i = t.resultSelector(t.state)
                    } catch (t) {
                        return void e.error(t)
                    }
                    if (!e.closed && (e.next(i),
                    !e.closed))
                        return this.schedule(t)
                }
            }
            function en(t) {
                return !ht(t) && t - parseFloat(t) + 1 >= 0
            }
            function nn(t) {
                var e = t.subscriber
                  , n = t.counter
                  , r = t.period;
                e.next(n),
                this.schedule({
                    subscriber: e,
                    counter: n + 1,
                    period: r
                }, r)
            }
            function rn() {
                for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e];
                var n = Number.POSITIVE_INFINITY
                  , r = null
                  , i = t[t.length - 1];
                return Yt(i) ? (r = t.pop(),
                t.length > 1 && "number" == typeof t[t.length - 1] && (n = t.pop())) : "number" == typeof i && (n = t.pop()),
                null === r && 1 === t.length && t[0]instanceof St ? t[0] : Ge(n)(te(t, r))
            }
            var on = new St(ke);
            function sn(t) {
                var e = t.keys
                  , n = t.index
                  , r = t.subscriber
                  , i = t.subscription
                  , o = t.obj;
                if (!r.closed)
                    if (n < e.length) {
                        var s = e[n];
                        r.next([s, o[s]]),
                        i.add(this.schedule({
                            keys: e,
                            index: n + 1,
                            subscriber: r,
                            subscription: i,
                            obj: o
                        }))
                    } else
                        r.complete()
            }
            function un(t, e) {
                function n() {
                    return !n.pred.apply(n.thisArg, arguments)
                }
                return n.pred = t,
                n.thisArg = e,
                n
            }
            function an(t, e) {
                return function(n) {
                    return n.lift(new cn(t,e))
                }
            }
            var cn = function() {
                function t(t, e) {
                    this.predicate = t,
                    this.thisArg = e
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new ln(t,this.predicate,this.thisArg))
                }
                ,
                t
            }()
              , ln = function(t) {
                function e(e, n, r) {
                    var i = t.call(this, e) || this;
                    return i.predicate = n,
                    i.thisArg = r,
                    i.count = 0,
                    i
                }
                return Object(v.c)(e, t),
                e.prototype._next = function(t) {
                    var e;
                    try {
                        e = this.predicate.call(this.thisArg, t, this.count++)
                    } catch (t) {
                        return void this.destination.error(t)
                    }
                    e && this.destination.next(t)
                }
                ,
                e
            }(mt);
            function hn() {
                for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e];
                if (1 === t.length) {
                    if (!ht(t[0]))
                        return t[0];
                    t = t[0]
                }
                return te(t, void 0).lift(new fn)
            }
            var fn = function() {
                function t() {}
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new dn(t))
                }
                ,
                t
            }()
              , dn = function(t) {
                function e(e) {
                    var n = t.call(this, e) || this;
                    return n.hasFirst = !1,
                    n.observables = [],
                    n.subscriptions = [],
                    n
                }
                return Object(v.c)(e, t),
                e.prototype._next = function(t) {
                    this.observables.push(t)
                }
                ,
                e.prototype._complete = function() {
                    var t = this.observables
                      , e = t.length;
                    if (0 === e)
                        this.destination.complete();
                    else {
                        for (var n = 0; n < e && !this.hasFirst; n++) {
                            var r = t[n]
                              , i = We(this, r, r, n);
                            this.subscriptions && this.subscriptions.push(i),
                            this.add(i)
                        }
                        this.observables = null
                    }
                }
                ,
                e.prototype.notifyNext = function(t, e, n, r, i) {
                    if (!this.hasFirst) {
                        this.hasFirst = !0;
                        for (var o = 0; o < this.subscriptions.length; o++)
                            if (o !== n) {
                                var s = this.subscriptions[o];
                                s.unsubscribe(),
                                this.remove(s)
                            }
                        this.subscriptions = null
                    }
                    this.destination.next(e)
                }
                ,
                e
            }(Pe);
            function pn(t) {
                var e = t.start
                  , n = t.index
                  , r = t.count
                  , i = t.subscriber;
                n >= r ? i.complete() : (i.next(e),
                i.closed || (t.index = n + 1,
                t.start = e + 1,
                this.schedule(t)))
            }
            function bn(t, e, n) {
                void 0 === t && (t = 0);
                var r = -1;
                return en(e) ? r = Number(e) < 1 ? 1 : Number(e) : Yt(e) && (n = e),
                Yt(n) || (n = me),
                new St((function(e) {
                    var i = en(t) ? t : +t - n.now();
                    return n.schedule(vn, i, {
                        index: 0,
                        period: r,
                        subscriber: e
                    })
                }
                ))
            }
            function vn(t) {
                var e = t.index
                  , n = t.period
                  , r = t.subscriber;
                if (r.next(e),
                !r.closed) {
                    if (-1 === n)
                        return r.complete();
                    t.index = e + 1,
                    this.schedule(t, n)
                }
            }
            function mn() {
                for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e];
                var n = t[t.length - 1];
                return "function" == typeof n && t.pop(),
                te(t, void 0).lift(new yn(n))
            }
            var yn = function() {
                function t(t) {
                    this.resultSelector = t
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new gn(t,this.resultSelector))
                }
                ,
                t
            }()
              , gn = function(t) {
                function e(e, n, r) {
                    void 0 === r && (r = Object.create(null));
                    var i = t.call(this, e) || this;
                    return i.iterators = [],
                    i.active = 0,
                    i.resultSelector = "function" == typeof n ? n : null,
                    i.values = r,
                    i
                }
                return Object(v.c)(e, t),
                e.prototype._next = function(t) {
                    var e = this.iterators;
                    ht(t) ? e.push(new _n(t)) : "function" == typeof t[De] ? e.push(new wn(t[De]())) : e.push(new kn(this.destination,this,t))
                }
                ,
                e.prototype._complete = function() {
                    var t = this.iterators
                      , e = t.length;
                    if (this.unsubscribe(),
                    0 !== e) {
                        this.active = e;
                        for (var n = 0; n < e; n++) {
                            var r = t[n];
                            r.stillUnsubscribed ? this.destination.add(r.subscribe(r, n)) : this.active--
                        }
                    } else
                        this.destination.complete()
                }
                ,
                e.prototype.notifyInactive = function() {
                    this.active--,
                    0 === this.active && this.destination.complete()
                }
                ,
                e.prototype.checkIterators = function() {
                    for (var t = this.iterators, e = t.length, n = this.destination, r = 0; r < e; r++)
                        if ("function" == typeof (s = t[r]).hasValue && !s.hasValue())
                            return;
                    var i = !1
                      , o = [];
                    for (r = 0; r < e; r++) {
                        var s, u = (s = t[r]).next();
                        if (s.hasCompleted() && (i = !0),
                        u.done)
                            return void n.complete();
                        o.push(u.value)
                    }
                    this.resultSelector ? this._tryresultSelector(o) : n.next(o),
                    i && n.complete()
                }
                ,
                e.prototype._tryresultSelector = function(t) {
                    var e;
                    try {
                        e = this.resultSelector.apply(this, t)
                    } catch (t) {
                        return void this.destination.error(t)
                    }
                    this.destination.next(e)
                }
                ,
                e
            }(mt)
              , wn = function() {
                function t(t) {
                    this.iterator = t,
                    this.nextResult = t.next()
                }
                return t.prototype.hasValue = function() {
                    return !0
                }
                ,
                t.prototype.next = function() {
                    var t = this.nextResult;
                    return this.nextResult = this.iterator.next(),
                    t
                }
                ,
                t.prototype.hasCompleted = function() {
                    var t = this.nextResult;
                    return t && t.done
                }
                ,
                t
            }()
              , _n = function() {
                function t(t) {
                    this.array = t,
                    this.index = 0,
                    this.length = 0,
                    this.length = t.length
                }
                return t.prototype[De] = function() {
                    return this
                }
                ,
                t.prototype.next = function(t) {
                    var e = this.index++
                      , n = this.array;
                    return e < this.length ? {
                        value: n[e],
                        done: !1
                    } : {
                        value: null,
                        done: !0
                    }
                }
                ,
                t.prototype.hasValue = function() {
                    return this.array.length > this.index
                }
                ,
                t.prototype.hasCompleted = function() {
                    return this.array.length === this.index
                }
                ,
                t
            }()
              , kn = function(t) {
                function e(e, n, r) {
                    var i = t.call(this, e) || this;
                    return i.parent = n,
                    i.observable = r,
                    i.stillUnsubscribed = !0,
                    i.buffer = [],
                    i.isComplete = !1,
                    i
                }
                return Object(v.c)(e, t),
                e.prototype[De] = function() {
                    return this
                }
                ,
                e.prototype.next = function() {
                    var t = this.buffer;
                    return 0 === t.length && this.isComplete ? {
                        value: null,
                        done: !0
                    } : {
                        value: t.shift(),
                        done: !1
                    }
                }
                ,
                e.prototype.hasValue = function() {
                    return this.buffer.length > 0
                }
                ,
                e.prototype.hasCompleted = function() {
                    return 0 === this.buffer.length && this.isComplete
                }
                ,
                e.prototype.notifyComplete = function() {
                    this.buffer.length > 0 ? (this.isComplete = !0,
                    this.parent.notifyInactive()) : this.destination.complete()
                }
                ,
                e.prototype.notifyNext = function(t, e, n, r, i) {
                    this.buffer.push(e),
                    this.parent.checkIterators()
                }
                ,
                e.prototype.subscribe = function(t, e) {
                    return We(this, this.observable, this, e)
                }
                ,
                e
            }(Pe)
              , xn = Object.freeze({
                __proto__: null,
                Observable: St,
                ConnectableObservable: Pt,
                GroupedObservable: Wt,
                observable: wt,
                Subject: Ct,
                BehaviorSubject: Ut,
                ReplaySubject: ae,
                AsyncSubject: le,
                asapScheduler: ve,
                asyncScheduler: me,
                queueScheduler: Jt,
                animationFrameScheduler: ge,
                VirtualTimeScheduler: we,
                VirtualAction: _e,
                Scheduler: zt,
                Subscription: pt,
                Subscriber: mt,
                Notification: ie,
                get NotificationKind() {
                    return Zt
                },
                pipe: kt,
                noop: ke,
                identity: _t,
                isObservable: function(t) {
                    return !!t && (t instanceof St || "function" == typeof t.lift && "function" == typeof t.subscribe)
                },
                ArgumentOutOfRangeError: xe,
                EmptyError: Se,
                ObjectUnsubscribedError: Et,
                UnsubscriptionError: dt,
                TimeoutError: Me,
                bindCallback: function t(e, n, r) {
                    if (n) {
                        if (!Yt(n))
                            return function() {
                                for (var i = [], o = 0; o < arguments.length; o++)
                                    i[o] = arguments[o];
                                return t(e, r).apply(void 0, i).pipe(Ee((function(t) {
                                    return ht(t) ? n.apply(void 0, t) : n(t)
                                }
                                )))
                            }
                            ;
                        r = n
                    }
                    return function() {
                        for (var t = [], n = 0; n < arguments.length; n++)
                            t[n] = arguments[n];
                        var i, o = this, s = {
                            context: o,
                            subject: i,
                            callbackFunc: e,
                            scheduler: r
                        };
                        return new St((function(n) {
                            if (r) {
                                var u = {
                                    args: t,
                                    subscriber: n,
                                    params: s
                                };
                                return r.schedule(Ce, 0, u)
                            }
                            if (!i) {
                                i = new le;
                                try {
                                    e.apply(o, t.concat([function() {
                                        for (var t = [], e = 0; e < arguments.length; e++)
                                            t[e] = arguments[e];
                                        i.next(t.length <= 1 ? t[0] : t),
                                        i.complete()
                                    }
                                    ]))
                                } catch (t) {
                                    gt(i) ? i.error(t) : console.warn(t)
                                }
                            }
                            return i.subscribe(n)
                        }
                        ))
                    }
                },
                bindNodeCallback: function t(e, n, r) {
                    if (n) {
                        if (!Yt(n))
                            return function() {
                                for (var i = [], o = 0; o < arguments.length; o++)
                                    i[o] = arguments[o];
                                return t(e, r).apply(void 0, i).pipe(Ee((function(t) {
                                    return ht(t) ? n.apply(void 0, t) : n(t)
                                }
                                )))
                            }
                            ;
                        r = n
                    }
                    return function() {
                        for (var t = [], n = 0; n < arguments.length; n++)
                            t[n] = arguments[n];
                        var i = {
                            subject: void 0,
                            args: t,
                            callbackFunc: e,
                            scheduler: r,
                            context: this
                        };
                        return new St((function(n) {
                            var o = i.context
                              , s = i.subject;
                            if (r)
                                return r.schedule(Te, 0, {
                                    params: i,
                                    subscriber: n,
                                    context: o
                                });
                            if (!s) {
                                s = i.subject = new le;
                                try {
                                    e.apply(o, t.concat([function() {
                                        for (var t = [], e = 0; e < arguments.length; e++)
                                            t[e] = arguments[e];
                                        var n = t.shift();
                                        n ? s.error(n) : (s.next(t.length <= 1 ? t[0] : t),
                                        s.complete())
                                    }
                                    ]))
                                } catch (t) {
                                    gt(s) ? s.error(t) : console.warn(t)
                                }
                            }
                            return s.subscribe(n)
                        }
                        ))
                    }
                },
                combineLatest: function() {
                    for (var t = [], e = 0; e < arguments.length; e++)
                        t[e] = arguments[e];
                    var n = null
                      , r = null;
                    return Yt(t[t.length - 1]) && (r = t.pop()),
                    "function" == typeof t[t.length - 1] && (n = t.pop()),
                    1 === t.length && ht(t[0]) && (t = t[0]),
                    te(t, r).lift(new Ue(n))
                },
                concat: Ze,
                defer: Qe,
                empty: Gt,
                forkJoin: function() {
                    for (var t = [], e = 0; e < arguments.length; e++)
                        t[e] = arguments[e];
                    if (1 === t.length) {
                        var n = t[0];
                        if (ht(n))
                            return Xe(n, null);
                        if (ft(n) && Object.getPrototypeOf(n) === Object.prototype) {
                            var r = Object.keys(n);
                            return Xe(r.map((function(t) {
                                return n[t]
                            }
                            )), r)
                        }
                    }
                    if ("function" == typeof t[t.length - 1]) {
                        var i = t.pop();
                        return Xe(t = 1 === t.length && ht(t[0]) ? t[0] : t, null).pipe(Ee((function(t) {
                            return i.apply(void 0, t)
                        }
                        )))
                    }
                    return Xe(t, null)
                },
                from: ze,
                fromEvent: function t(e, n, r, i) {
                    return st(r) && (i = r,
                    r = void 0),
                    i ? t(e, n, r).pipe(Ee((function(t) {
                        return ht(t) ? i.apply(void 0, t) : i(t)
                    }
                    ))) : new St((function(t) {
                        !function t(e, n, r, i, o) {
                            var s;
                            if (function(t) {
                                return t && "function" == typeof t.addEventListener && "function" == typeof t.removeEventListener
                            }(e)) {
                                var u = e;
                                e.addEventListener(n, r, o),
                                s = function() {
                                    return u.removeEventListener(n, r, o)
                                }
                            } else if (function(t) {
                                return t && "function" == typeof t.on && "function" == typeof t.off
                            }(e)) {
                                var a = e;
                                e.on(n, r),
                                s = function() {
                                    return a.off(n, r)
                                }
                            } else if (function(t) {
                                return t && "function" == typeof t.addListener && "function" == typeof t.removeListener
                            }(e)) {
                                var c = e;
                                e.addListener(n, r),
                                s = function() {
                                    return c.removeListener(n, r)
                                }
                            } else {
                                if (!e || !e.length)
                                    throw new TypeError("Invalid event target");
                                for (var l = 0, h = e.length; l < h; l++)
                                    t(e[l], n, r, i, o)
                            }
                            i.add(s)
                        }(e, n, (function(e) {
                            arguments.length > 1 ? t.next(Array.prototype.slice.call(arguments)) : t.next(e)
                        }
                        ), t, r)
                    }
                    ))
                },
                fromEventPattern: function t(e, n, r) {
                    return r ? t(e, n).pipe(Ee((function(t) {
                        return ht(t) ? r.apply(void 0, t) : r(t)
                    }
                    ))) : new St((function(t) {
                        var r, i = function() {
                            for (var e = [], n = 0; n < arguments.length; n++)
                                e[n] = arguments[n];
                            return t.next(1 === e.length ? e[0] : e)
                        };
                        try {
                            r = e(i)
                        } catch (e) {
                            return void t.error(e)
                        }
                        if (st(n))
                            return function() {
                                return n(i, r)
                            }
                    }
                    ))
                },
                generate: function(t, e, n, r, i) {
                    var o, s;
                    if (1 == arguments.length) {
                        var u = t;
                        s = u.initialState,
                        e = u.condition,
                        n = u.iterate,
                        o = u.resultSelector || _t,
                        i = u.scheduler
                    } else
                        void 0 === r || Yt(r) ? (s = t,
                        o = _t,
                        i = r) : (s = t,
                        o = r);
                    return new St((function(t) {
                        var r = s;
                        if (i)
                            return i.schedule(tn, 0, {
                                subscriber: t,
                                iterate: n,
                                condition: e,
                                resultSelector: o,
                                state: r
                            });
                        for (; ; ) {
                            if (e) {
                                var u = void 0;
                                try {
                                    u = e(r)
                                } catch (e) {
                                    return void t.error(e)
                                }
                                if (!u) {
                                    t.complete();
                                    break
                                }
                            }
                            var a = void 0;
                            try {
                                a = o(r)
                            } catch (e) {
                                return void t.error(e)
                            }
                            if (t.next(a),
                            t.closed)
                                break;
                            try {
                                r = n(r)
                            } catch (e) {
                                return void t.error(e)
                            }
                        }
                    }
                    ))
                },
                iif: function(t, e, n) {
                    return void 0 === e && (e = $t),
                    void 0 === n && (n = $t),
                    Qe((function() {
                        return t() ? e : n
                    }
                    ))
                },
                interval: function(t, e) {
                    return void 0 === t && (t = 0),
                    void 0 === e && (e = me),
                    (!en(t) || t < 0) && (t = 0),
                    e && "function" == typeof e.schedule || (e = me),
                    new St((function(n) {
                        return n.add(e.schedule(nn, t, {
                            subscriber: n,
                            counter: 0,
                            period: t
                        })),
                        n
                    }
                    ))
                },
                merge: rn,
                never: function() {
                    return on
                },
                of: ee,
                onErrorResumeNext: function t() {
                    for (var e = [], n = 0; n < arguments.length; n++)
                        e[n] = arguments[n];
                    if (0 === e.length)
                        return $t;
                    var r = e[0]
                      , i = e.slice(1);
                    return 1 === e.length && ht(r) ? t.apply(void 0, r) : new St((function(e) {
                        var n = function() {
                            return e.add(t.apply(void 0, i).subscribe(e))
                        };
                        return ze(r).subscribe({
                            next: function(t) {
                                e.next(t)
                            },
                            error: n,
                            complete: n
                        })
                    }
                    ))
                },
                pairs: function(t, e) {
                    return new St(e ? function(n) {
                        var r = Object.keys(t)
                          , i = new pt;
                        return i.add(e.schedule(sn, 0, {
                            keys: r,
                            index: 0,
                            subscriber: n,
                            subscription: i,
                            obj: t
                        })),
                        i
                    }
                    : function(e) {
                        for (var n = Object.keys(t), r = 0; r < n.length && !e.closed; r++) {
                            var i = n[r];
                            t.hasOwnProperty(i) && e.next([i, t[i]])
                        }
                        e.complete()
                    }
                    )
                },
                partition: function(t, e, n) {
                    return [an(e, n)(new St(Fe(t))), an(un(e, n))(new St(Fe(t)))]
                },
                race: hn,
                range: function(t, e, n) {
                    return void 0 === t && (t = 0),
                    new St((function(r) {
                        void 0 === e && (e = t,
                        t = 0);
                        var i = 0
                          , o = t;
                        if (n)
                            return n.schedule(pn, 0, {
                                index: i,
                                count: e,
                                start: t,
                                subscriber: r
                            });
                        for (; ; ) {
                            if (i++ >= e) {
                                r.complete();
                                break
                            }
                            if (r.next(o++),
                            r.closed)
                                break
                        }
                    }
                    ))
                },
                throwError: ne,
                timer: bn,
                using: function(t, e) {
                    return new St((function(n) {
                        var r, i;
                        try {
                            r = t()
                        } catch (t) {
                            return void n.error(t)
                        }
                        try {
                            i = e(r)
                        } catch (t) {
                            return void n.error(t)
                        }
                        var o = (i ? ze(i) : $t).subscribe(n);
                        return function() {
                            o.unsubscribe(),
                            r && r.unsubscribe()
                        }
                    }
                    ))
                },
                zip: mn,
                scheduled: He,
                EMPTY: $t,
                NEVER: on,
                config: at
            });
            function Sn(t) {
                return function(e) {
                    return e.lift(new Mn(t))
                }
            }
            var Mn = function() {
                function t(t) {
                    this.durationSelector = t
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new En(t,this.durationSelector))
                }
                ,
                t
            }()
              , En = function(t) {
                function e(e, n) {
                    var r = t.call(this, e) || this;
                    return r.durationSelector = n,
                    r.hasValue = !1,
                    r
                }
                return Object(v.c)(e, t),
                e.prototype._next = function(t) {
                    if (this.value = t,
                    this.hasValue = !0,
                    !this.throttled) {
                        var e = void 0;
                        try {
                            e = (0,
                            this.durationSelector)(t)
                        } catch (t) {
                            return this.destination.error(t)
                        }
                        var n = We(this, e);
                        !n || n.closed ? this.clearThrottle() : this.add(this.throttled = n)
                    }
                }
                ,
                e.prototype.clearThrottle = function() {
                    var t = this.value
                      , e = this.hasValue
                      , n = this.throttled;
                    n && (this.remove(n),
                    this.throttled = null,
                    n.unsubscribe()),
                    e && (this.value = null,
                    this.hasValue = !1,
                    this.destination.next(t))
                }
                ,
                e.prototype.notifyNext = function(t, e, n, r) {
                    this.clearThrottle()
                }
                ,
                e.prototype.notifyComplete = function() {
                    this.clearThrottle()
                }
                ,
                e
            }(Pe)
              , On = function() {
                function t(t) {
                    this.closingNotifier = t
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new jn(t,this.closingNotifier))
                }
                ,
                t
            }()
              , jn = function(t) {
                function e(e, n) {
                    var r = t.call(this, e) || this;
                    return r.buffer = [],
                    r.add(We(r, n)),
                    r
                }
                return Object(v.c)(e, t),
                e.prototype._next = function(t) {
                    this.buffer.push(t)
                }
                ,
                e.prototype.notifyNext = function(t, e, n, r, i) {
                    var o = this.buffer;
                    this.buffer = [],
                    this.destination.next(o)
                }
                ,
                e
            }(Pe)
              , Cn = function() {
                function t(t, e) {
                    this.bufferSize = t,
                    this.startBufferEvery = e,
                    this.subscriberClass = e && t !== e ? Tn : Nn
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new this.subscriberClass(t,this.bufferSize,this.startBufferEvery))
                }
                ,
                t
            }()
              , Nn = function(t) {
                function e(e, n) {
                    var r = t.call(this, e) || this;
                    return r.bufferSize = n,
                    r.buffer = [],
                    r
                }
                return Object(v.c)(e, t),
                e.prototype._next = function(t) {
                    var e = this.buffer;
                    e.push(t),
                    e.length == this.bufferSize && (this.destination.next(e),
                    this.buffer = [])
                }
                ,
                e.prototype._complete = function() {
                    var e = this.buffer;
                    e.length > 0 && this.destination.next(e),
                    t.prototype._complete.call(this)
                }
                ,
                e
            }(mt)
              , Tn = function(t) {
                function e(e, n, r) {
                    var i = t.call(this, e) || this;
                    return i.bufferSize = n,
                    i.startBufferEvery = r,
                    i.buffers = [],
                    i.count = 0,
                    i
                }
                return Object(v.c)(e, t),
                e.prototype._next = function(t) {
                    var e = this.bufferSize
                      , n = this.startBufferEvery
                      , r = this.buffers
                      , i = this.count;
                    this.count++,
                    i % n == 0 && r.push([]);
                    for (var o = r.length; o--; ) {
                        var s = r[o];
                        s.push(t),
                        s.length === e && (r.splice(o, 1),
                        this.destination.next(s))
                    }
                }
                ,
                e.prototype._complete = function() {
                    for (var e = this.buffers, n = this.destination; e.length > 0; ) {
                        var r = e.shift();
                        r.length > 0 && n.next(r)
                    }
                    t.prototype._complete.call(this)
                }
                ,
                e
            }(mt)
              , In = function() {
                function t(t, e, n, r) {
                    this.bufferTimeSpan = t,
                    this.bufferCreationInterval = e,
                    this.maxBufferSize = n,
                    this.scheduler = r
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new Pn(t,this.bufferTimeSpan,this.bufferCreationInterval,this.maxBufferSize,this.scheduler))
                }
                ,
                t
            }()
              , An = function() {
                this.buffer = []
            }
              , Pn = function(t) {
                function e(e, n, r, i, o) {
                    var s = t.call(this, e) || this;
                    s.bufferTimeSpan = n,
                    s.bufferCreationInterval = r,
                    s.maxBufferSize = i,
                    s.scheduler = o,
                    s.contexts = [];
                    var u = s.openContext();
                    if (s.timespanOnly = null == r || r < 0,
                    s.timespanOnly) {
                        var a = {
                            subscriber: s,
                            context: u,
                            bufferTimeSpan: n
                        };
                        s.add(u.closeAction = o.schedule(Rn, n, a))
                    } else {
                        var c = {
                            subscriber: s,
                            context: u
                        }
                          , l = {
                            bufferTimeSpan: n,
                            bufferCreationInterval: r,
                            subscriber: s,
                            scheduler: o
                        };
                        s.add(u.closeAction = o.schedule(Ln, n, c)),
                        s.add(o.schedule(Dn, r, l))
                    }
                    return s
                }
                return Object(v.c)(e, t),
                e.prototype._next = function(t) {
                    for (var e, n = this.contexts, r = n.length, i = 0; i < r; i++) {
                        var o = n[i]
                          , s = o.buffer;
                        s.push(t),
                        s.length == this.maxBufferSize && (e = o)
                    }
                    e && this.onBufferFull(e)
                }
                ,
                e.prototype._error = function(e) {
                    this.contexts.length = 0,
                    t.prototype._error.call(this, e)
                }
                ,
                e.prototype._complete = function() {
                    for (var e = this.contexts, n = this.destination; e.length > 0; ) {
                        var r = e.shift();
                        n.next(r.buffer)
                    }
                    t.prototype._complete.call(this)
                }
                ,
                e.prototype._unsubscribe = function() {
                    this.contexts = null
                }
                ,
                e.prototype.onBufferFull = function(t) {
                    this.closeContext(t);
                    var e = t.closeAction;
                    if (e.unsubscribe(),
                    this.remove(e),
                    !this.closed && this.timespanOnly) {
                        t = this.openContext();
                        var n = this.bufferTimeSpan
                          , r = {
                            subscriber: this,
                            context: t,
                            bufferTimeSpan: n
                        };
                        this.add(t.closeAction = this.scheduler.schedule(Rn, n, r))
                    }
                }
                ,
                e.prototype.openContext = function() {
                    var t = new An;
                    return this.contexts.push(t),
                    t
                }
                ,
                e.prototype.closeContext = function(t) {
                    this.destination.next(t.buffer);
                    var e = this.contexts;
                    (e ? e.indexOf(t) : -1) >= 0 && e.splice(e.indexOf(t), 1)
                }
                ,
                e
            }(mt);
            function Rn(t) {
                var e = t.subscriber
                  , n = t.context;
                n && e.closeContext(n),
                e.closed || (t.context = e.openContext(),
                t.context.closeAction = this.schedule(t, t.bufferTimeSpan))
            }
            function Dn(t) {
                var e = t.bufferCreationInterval
                  , n = t.bufferTimeSpan
                  , r = t.subscriber
                  , i = t.scheduler
                  , o = r.openContext();
                r.closed || (r.add(o.closeAction = i.schedule(Ln, n, {
                    subscriber: r,
                    context: o
                })),
                this.schedule(t, e))
            }
            function Ln(t) {
                var e = t.subscriber
                  , n = t.context;
                e.closeContext(n)
            }
            var Bn = function() {
                function t(t, e) {
                    this.openings = t,
                    this.closingSelector = e
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new Fn(t,this.openings,this.closingSelector))
                }
                ,
                t
            }()
              , Fn = function(t) {
                function e(e, n, r) {
                    var i = t.call(this, e) || this;
                    return i.openings = n,
                    i.closingSelector = r,
                    i.contexts = [],
                    i.add(We(i, n)),
                    i
                }
                return Object(v.c)(e, t),
                e.prototype._next = function(t) {
                    for (var e = this.contexts, n = e.length, r = 0; r < n; r++)
                        e[r].buffer.push(t)
                }
                ,
                e.prototype._error = function(e) {
                    for (var n = this.contexts; n.length > 0; ) {
                        var r = n.shift();
                        r.subscription.unsubscribe(),
                        r.buffer = null,
                        r.subscription = null
                    }
                    this.contexts = null,
                    t.prototype._error.call(this, e)
                }
                ,
                e.prototype._complete = function() {
                    for (var e = this.contexts; e.length > 0; ) {
                        var n = e.shift();
                        this.destination.next(n.buffer),
                        n.subscription.unsubscribe(),
                        n.buffer = null,
                        n.subscription = null
                    }
                    this.contexts = null,
                    t.prototype._complete.call(this)
                }
                ,
                e.prototype.notifyNext = function(t, e, n, r, i) {
                    t ? this.closeBuffer(t) : this.openBuffer(e)
                }
                ,
                e.prototype.notifyComplete = function(t) {
                    this.closeBuffer(t.context)
                }
                ,
                e.prototype.openBuffer = function(t) {
                    try {
                        var e = this.closingSelector.call(this, t);
                        e && this.trySubscribe(e)
                    } catch (t) {
                        this._error(t)
                    }
                }
                ,
                e.prototype.closeBuffer = function(t) {
                    var e = this.contexts;
                    if (e && t) {
                        var n = t.buffer
                          , r = t.subscription;
                        this.destination.next(n),
                        e.splice(e.indexOf(t), 1),
                        this.remove(r),
                        r.unsubscribe()
                    }
                }
                ,
                e.prototype.trySubscribe = function(t) {
                    var e = this.contexts
                      , n = new pt
                      , r = {
                        buffer: [],
                        subscription: n
                    };
                    e.push(r);
                    var i = We(this, t, r);
                    !i || i.closed ? this.closeBuffer(r) : (i.context = r,
                    this.add(i),
                    n.add(i))
                }
                ,
                e
            }(Pe)
              , Wn = function() {
                function t(t) {
                    this.closingSelector = t
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new qn(t,this.closingSelector))
                }
                ,
                t
            }()
              , qn = function(t) {
                function e(e, n) {
                    var r = t.call(this, e) || this;
                    return r.closingSelector = n,
                    r.subscribing = !1,
                    r.openBuffer(),
                    r
                }
                return Object(v.c)(e, t),
                e.prototype._next = function(t) {
                    this.buffer.push(t)
                }
                ,
                e.prototype._complete = function() {
                    var e = this.buffer;
                    e && this.destination.next(e),
                    t.prototype._complete.call(this)
                }
                ,
                e.prototype._unsubscribe = function() {
                    this.buffer = null,
                    this.subscribing = !1
                }
                ,
                e.prototype.notifyNext = function(t, e, n, r, i) {
                    this.openBuffer()
                }
                ,
                e.prototype.notifyComplete = function() {
                    this.subscribing ? this.complete() : this.openBuffer()
                }
                ,
                e.prototype.openBuffer = function() {
                    var t = this.closingSubscription;
                    t && (this.remove(t),
                    t.unsubscribe());
                    var e, n = this.buffer;
                    this.buffer && this.destination.next(n),
                    this.buffer = [];
                    try {
                        e = (0,
                        this.closingSelector)()
                    } catch (t) {
                        return this.error(t)
                    }
                    t = new pt,
                    this.closingSubscription = t,
                    this.add(t),
                    this.subscribing = !0,
                    t.add(We(this, e)),
                    this.subscribing = !1
                }
                ,
                e
            }(Pe)
              , Un = function() {
                function t(t) {
                    this.selector = t
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new Vn(t,this.selector,this.caught))
                }
                ,
                t
            }()
              , Vn = function(t) {
                function e(e, n, r) {
                    var i = t.call(this, e) || this;
                    return i.selector = n,
                    i.caught = r,
                    i
                }
                return Object(v.c)(e, t),
                e.prototype.error = function(e) {
                    if (!this.isStopped) {
                        var n = void 0;
                        try {
                            n = this.selector(e, this.caught)
                        } catch (e) {
                            return void t.prototype.error.call(this, e)
                        }
                        this._unsubscribeAndRecycle();
                        var r = new Re(this,void 0,void 0);
                        this.add(r);
                        var i = We(this, n, void 0, void 0, r);
                        i !== r && this.add(i)
                    }
                }
                ,
                e
            }(Pe);
            function Hn(t, e) {
                return Ke(t, e, 1)
            }
            var zn = function() {
                function t(t, e) {
                    this.predicate = t,
                    this.source = e
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new Kn(t,this.predicate,this.source))
                }
                ,
                t
            }()
              , Kn = function(t) {
                function e(e, n, r) {
                    var i = t.call(this, e) || this;
                    return i.predicate = n,
                    i.source = r,
                    i.count = 0,
                    i.index = 0,
                    i
                }
                return Object(v.c)(e, t),
                e.prototype._next = function(t) {
                    this.predicate ? this._tryPredicate(t) : this.count++
                }
                ,
                e.prototype._tryPredicate = function(t) {
                    var e;
                    try {
                        e = this.predicate(t, this.index++, this.source)
                    } catch (t) {
                        return void this.destination.error(t)
                    }
                    e && this.count++
                }
                ,
                e.prototype._complete = function() {
                    this.destination.next(this.count),
                    this.destination.complete()
                }
                ,
                e
            }(mt)
              , Jn = function() {
                function t(t) {
                    this.durationSelector = t
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new $n(t,this.durationSelector))
                }
                ,
                t
            }()
              , $n = function(t) {
                function e(e, n) {
                    var r = t.call(this, e) || this;
                    return r.durationSelector = n,
                    r.hasValue = !1,
                    r.durationSubscription = null,
                    r
                }
                return Object(v.c)(e, t),
                e.prototype._next = function(t) {
                    try {
                        var e = this.durationSelector.call(this, t);
                        e && this._tryNext(t, e)
                    } catch (t) {
                        this.destination.error(t)
                    }
                }
                ,
                e.prototype._complete = function() {
                    this.emitValue(),
                    this.destination.complete()
                }
                ,
                e.prototype._tryNext = function(t, e) {
                    var n = this.durationSubscription;
                    this.value = t,
                    this.hasValue = !0,
                    n && (n.unsubscribe(),
                    this.remove(n)),
                    (n = We(this, e)) && !n.closed && this.add(this.durationSubscription = n)
                }
                ,
                e.prototype.notifyNext = function(t, e, n, r, i) {
                    this.emitValue()
                }
                ,
                e.prototype.notifyComplete = function() {
                    this.emitValue()
                }
                ,
                e.prototype.emitValue = function() {
                    if (this.hasValue) {
                        var e = this.value
                          , n = this.durationSubscription;
                        n && (this.durationSubscription = null,
                        n.unsubscribe(),
                        this.remove(n)),
                        this.value = null,
                        this.hasValue = !1,
                        t.prototype._next.call(this, e)
                    }
                }
                ,
                e
            }(Pe)
              , Gn = function() {
                function t(t, e) {
                    this.dueTime = t,
                    this.scheduler = e
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new Yn(t,this.dueTime,this.scheduler))
                }
                ,
                t
            }()
              , Yn = function(t) {
                function e(e, n, r) {
                    var i = t.call(this, e) || this;
                    return i.dueTime = n,
                    i.scheduler = r,
                    i.debouncedSubscription = null,
                    i.lastValue = null,
                    i.hasValue = !1,
                    i
                }
                return Object(v.c)(e, t),
                e.prototype._next = function(t) {
                    this.clearDebounce(),
                    this.lastValue = t,
                    this.hasValue = !0,
                    this.add(this.debouncedSubscription = this.scheduler.schedule(Zn, this.dueTime, this))
                }
                ,
                e.prototype._complete = function() {
                    this.debouncedNext(),
                    this.destination.complete()
                }
                ,
                e.prototype.debouncedNext = function() {
                    if (this.clearDebounce(),
                    this.hasValue) {
                        var t = this.lastValue;
                        this.lastValue = null,
                        this.hasValue = !1,
                        this.destination.next(t)
                    }
                }
                ,
                e.prototype.clearDebounce = function() {
                    var t = this.debouncedSubscription;
                    null !== t && (this.remove(t),
                    t.unsubscribe(),
                    this.debouncedSubscription = null)
                }
                ,
                e
            }(mt);
            function Zn(t) {
                t.debouncedNext()
            }
            function Qn(t) {
                return void 0 === t && (t = null),
                function(e) {
                    return e.lift(new Xn(t))
                }
            }
            var Xn = function() {
                function t(t) {
                    this.defaultValue = t
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new tr(t,this.defaultValue))
                }
                ,
                t
            }()
              , tr = function(t) {
                function e(e, n) {
                    var r = t.call(this, e) || this;
                    return r.defaultValue = n,
                    r.isEmpty = !0,
                    r
                }
                return Object(v.c)(e, t),
                e.prototype._next = function(t) {
                    this.isEmpty = !1,
                    this.destination.next(t)
                }
                ,
                e.prototype._complete = function() {
                    this.isEmpty && this.destination.next(this.defaultValue),
                    this.destination.complete()
                }
                ,
                e
            }(mt);
            function er(t) {
                return t instanceof Date && !isNaN(+t)
            }
            var nr = function() {
                function t(t, e) {
                    this.delay = t,
                    this.scheduler = e
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new rr(t,this.delay,this.scheduler))
                }
                ,
                t
            }()
              , rr = function(t) {
                function e(e, n, r) {
                    var i = t.call(this, e) || this;
                    return i.delay = n,
                    i.scheduler = r,
                    i.queue = [],
                    i.active = !1,
                    i.errored = !1,
                    i
                }
                return Object(v.c)(e, t),
                e.dispatch = function(t) {
                    for (var e = t.source, n = e.queue, r = t.scheduler, i = t.destination; n.length > 0 && n[0].time - r.now() <= 0; )
                        n.shift().notification.observe(i);
                    if (n.length > 0) {
                        var o = Math.max(0, n[0].time - r.now());
                        this.schedule(t, o)
                    } else
                        this.unsubscribe(),
                        e.active = !1
                }
                ,
                e.prototype._schedule = function(t) {
                    this.active = !0,
                    this.destination.add(t.schedule(e.dispatch, this.delay, {
                        source: this,
                        destination: this.destination,
                        scheduler: t
                    }))
                }
                ,
                e.prototype.scheduleNotification = function(t) {
                    if (!0 !== this.errored) {
                        var e = this.scheduler
                          , n = new ir(e.now() + this.delay,t);
                        this.queue.push(n),
                        !1 === this.active && this._schedule(e)
                    }
                }
                ,
                e.prototype._next = function(t) {
                    this.scheduleNotification(ie.createNext(t))
                }
                ,
                e.prototype._error = function(t) {
                    this.errored = !0,
                    this.queue = [],
                    this.destination.error(t),
                    this.unsubscribe()
                }
                ,
                e.prototype._complete = function() {
                    this.scheduleNotification(ie.createComplete()),
                    this.unsubscribe()
                }
                ,
                e
            }(mt)
              , ir = function(t, e) {
                this.time = t,
                this.notification = e
            }
              , or = function() {
                function t(t) {
                    this.delayDurationSelector = t
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new sr(t,this.delayDurationSelector))
                }
                ,
                t
            }()
              , sr = function(t) {
                function e(e, n) {
                    var r = t.call(this, e) || this;
                    return r.delayDurationSelector = n,
                    r.completed = !1,
                    r.delayNotifierSubscriptions = [],
                    r.index = 0,
                    r
                }
                return Object(v.c)(e, t),
                e.prototype.notifyNext = function(t, e, n, r, i) {
                    this.destination.next(t),
                    this.removeSubscription(i),
                    this.tryComplete()
                }
                ,
                e.prototype.notifyError = function(t, e) {
                    this._error(t)
                }
                ,
                e.prototype.notifyComplete = function(t) {
                    var e = this.removeSubscription(t);
                    e && this.destination.next(e),
                    this.tryComplete()
                }
                ,
                e.prototype._next = function(t) {
                    var e = this.index++;
                    try {
                        var n = this.delayDurationSelector(t, e);
                        n && this.tryDelay(n, t)
                    } catch (t) {
                        this.destination.error(t)
                    }
                }
                ,
                e.prototype._complete = function() {
                    this.completed = !0,
                    this.tryComplete(),
                    this.unsubscribe()
                }
                ,
                e.prototype.removeSubscription = function(t) {
                    t.unsubscribe();
                    var e = this.delayNotifierSubscriptions.indexOf(t);
                    return -1 !== e && this.delayNotifierSubscriptions.splice(e, 1),
                    t.outerValue
                }
                ,
                e.prototype.tryDelay = function(t, e) {
                    var n = We(this, t, e);
                    n && !n.closed && (this.destination.add(n),
                    this.delayNotifierSubscriptions.push(n))
                }
                ,
                e.prototype.tryComplete = function() {
                    this.completed && 0 === this.delayNotifierSubscriptions.length && this.destination.complete()
                }
                ,
                e
            }(Pe)
              , ur = function(t) {
                function e(e, n) {
                    var r = t.call(this) || this;
                    return r.source = e,
                    r.subscriptionDelay = n,
                    r
                }
                return Object(v.c)(e, t),
                e.prototype._subscribe = function(t) {
                    this.subscriptionDelay.subscribe(new ar(t,this.source))
                }
                ,
                e
            }(St)
              , ar = function(t) {
                function e(e, n) {
                    var r = t.call(this) || this;
                    return r.parent = e,
                    r.source = n,
                    r.sourceSubscribed = !1,
                    r
                }
                return Object(v.c)(e, t),
                e.prototype._next = function(t) {
                    this.subscribeToSource()
                }
                ,
                e.prototype._error = function(t) {
                    this.unsubscribe(),
                    this.parent.error(t)
                }
                ,
                e.prototype._complete = function() {
                    this.unsubscribe(),
                    this.subscribeToSource()
                }
                ,
                e.prototype.subscribeToSource = function() {
                    this.sourceSubscribed || (this.sourceSubscribed = !0,
                    this.unsubscribe(),
                    this.source.subscribe(this.parent))
                }
                ,
                e
            }(mt)
              , cr = function() {
                function t() {}
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new lr(t))
                }
                ,
                t
            }()
              , lr = function(t) {
                function e(e) {
                    return t.call(this, e) || this
                }
                return Object(v.c)(e, t),
                e.prototype._next = function(t) {
                    t.observe(this.destination)
                }
                ,
                e
            }(mt)
              , hr = function() {
                function t(t, e) {
                    this.keySelector = t,
                    this.flushes = e
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new fr(t,this.keySelector,this.flushes))
                }
                ,
                t
            }()
              , fr = function(t) {
                function e(e, n, r) {
                    var i = t.call(this, e) || this;
                    return i.keySelector = n,
                    i.values = new Set,
                    r && i.add(We(i, r)),
                    i
                }
                return Object(v.c)(e, t),
                e.prototype.notifyNext = function(t, e, n, r, i) {
                    this.values.clear()
                }
                ,
                e.prototype.notifyError = function(t, e) {
                    this._error(t)
                }
                ,
                e.prototype._next = function(t) {
                    this.keySelector ? this._useKeySelector(t) : this._finalizeNext(t, t)
                }
                ,
                e.prototype._useKeySelector = function(t) {
                    var e, n = this.destination;
                    try {
                        e = this.keySelector(t)
                    } catch (t) {
                        return void n.error(t)
                    }
                    this._finalizeNext(e, t)
                }
                ,
                e.prototype._finalizeNext = function(t, e) {
                    var n = this.values;
                    n.has(t) || (n.add(t),
                    this.destination.next(e))
                }
                ,
                e
            }(Pe);
            function dr(t, e) {
                return function(n) {
                    return n.lift(new pr(t,e))
                }
            }
            var pr = function() {
                function t(t, e) {
                    this.compare = t,
                    this.keySelector = e
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new br(t,this.compare,this.keySelector))
                }
                ,
                t
            }()
              , br = function(t) {
                function e(e, n, r) {
                    var i = t.call(this, e) || this;
                    return i.keySelector = r,
                    i.hasKey = !1,
                    "function" == typeof n && (i.compare = n),
                    i
                }
                return Object(v.c)(e, t),
                e.prototype.compare = function(t, e) {
                    return t === e
                }
                ,
                e.prototype._next = function(t) {
                    var e;
                    try {
                        var n = this.keySelector;
                        e = n ? n(t) : t
                    } catch (t) {
                        return this.destination.error(t)
                    }
                    var r = !1;
                    if (this.hasKey)
                        try {
                            r = (0,
                            this.compare)(this.key, e)
                        } catch (t) {
                            return this.destination.error(t)
                        }
                    else
                        this.hasKey = !0;
                    r || (this.key = e,
                    this.destination.next(t))
                }
                ,
                e
            }(mt);
            function vr(t) {
                return void 0 === t && (t = gr),
                function(e) {
                    return e.lift(new mr(t))
                }
            }
            var mr = function() {
                function t(t) {
                    this.errorFactory = t
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new yr(t,this.errorFactory))
                }
                ,
                t
            }()
              , yr = function(t) {
                function e(e, n) {
                    var r = t.call(this, e) || this;
                    return r.errorFactory = n,
                    r.hasValue = !1,
                    r
                }
                return Object(v.c)(e, t),
                e.prototype._next = function(t) {
                    this.hasValue = !0,
                    this.destination.next(t)
                }
                ,
                e.prototype._complete = function() {
                    if (this.hasValue)
                        return this.destination.complete();
                    var t = void 0;
                    try {
                        t = this.errorFactory()
                    } catch (e) {
                        t = e
                    }
                    this.destination.error(t)
                }
                ,
                e
            }(mt);
            function gr() {
                return new Se
            }
            function wr(t) {
                return function(e) {
                    return 0 === t ? Gt() : e.lift(new _r(t))
                }
            }
            var _r = function() {
                function t(t) {
                    if (this.total = t,
                    this.total < 0)
                        throw new xe
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new kr(t,this.total))
                }
                ,
                t
            }()
              , kr = function(t) {
                function e(e, n) {
                    var r = t.call(this, e) || this;
                    return r.total = n,
                    r.count = 0,
                    r
                }
                return Object(v.c)(e, t),
                e.prototype._next = function(t) {
                    var e = this.total
                      , n = ++this.count;
                    n <= e && (this.destination.next(t),
                    n === e && (this.destination.complete(),
                    this.unsubscribe()))
                }
                ,
                e
            }(mt)
              , xr = function() {
                function t(t, e, n) {
                    this.predicate = t,
                    this.thisArg = e,
                    this.source = n
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new Sr(t,this.predicate,this.thisArg,this.source))
                }
                ,
                t
            }()
              , Sr = function(t) {
                function e(e, n, r, i) {
                    var o = t.call(this, e) || this;
                    return o.predicate = n,
                    o.thisArg = r,
                    o.source = i,
                    o.index = 0,
                    o.thisArg = r || o,
                    o
                }
                return Object(v.c)(e, t),
                e.prototype.notifyComplete = function(t) {
                    this.destination.next(t),
                    this.destination.complete()
                }
                ,
                e.prototype._next = function(t) {
                    var e = !1;
                    try {
                        e = this.predicate.call(this.thisArg, t, this.index++, this.source)
                    } catch (t) {
                        return void this.destination.error(t)
                    }
                    e || this.notifyComplete(!1)
                }
                ,
                e.prototype._complete = function() {
                    this.notifyComplete(!0)
                }
                ,
                e
            }(mt)
              , Mr = function() {
                function t() {}
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new Er(t))
                }
                ,
                t
            }()
              , Er = function(t) {
                function e(e) {
                    var n = t.call(this, e) || this;
                    return n.hasCompleted = !1,
                    n.hasSubscription = !1,
                    n
                }
                return Object(v.c)(e, t),
                e.prototype._next = function(t) {
                    this.hasSubscription || (this.hasSubscription = !0,
                    this.add(We(this, t)))
                }
                ,
                e.prototype._complete = function() {
                    this.hasCompleted = !0,
                    this.hasSubscription || this.destination.complete()
                }
                ,
                e.prototype.notifyComplete = function(t) {
                    this.remove(t),
                    this.hasSubscription = !1,
                    this.hasCompleted && this.destination.complete()
                }
                ,
                e
            }(Pe)
              , Or = function() {
                function t(t) {
                    this.project = t
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new jr(t,this.project))
                }
                ,
                t
            }()
              , jr = function(t) {
                function e(e, n) {
                    var r = t.call(this, e) || this;
                    return r.project = n,
                    r.hasSubscription = !1,
                    r.hasCompleted = !1,
                    r.index = 0,
                    r
                }
                return Object(v.c)(e, t),
                e.prototype._next = function(t) {
                    this.hasSubscription || this.tryNext(t)
                }
                ,
                e.prototype.tryNext = function(t) {
                    var e, n = this.index++;
                    try {
                        e = this.project(t, n)
                    } catch (t) {
                        return void this.destination.error(t)
                    }
                    this.hasSubscription = !0,
                    this._innerSub(e, t, n)
                }
                ,
                e.prototype._innerSub = function(t, e, n) {
                    var r = new Re(this,e,n)
                      , i = this.destination;
                    i.add(r);
                    var o = We(this, t, void 0, void 0, r);
                    o !== r && i.add(o)
                }
                ,
                e.prototype._complete = function() {
                    this.hasCompleted = !0,
                    this.hasSubscription || this.destination.complete(),
                    this.unsubscribe()
                }
                ,
                e.prototype.notifyNext = function(t, e, n, r, i) {
                    this.destination.next(e)
                }
                ,
                e.prototype.notifyError = function(t) {
                    this.destination.error(t)
                }
                ,
                e.prototype.notifyComplete = function(t) {
                    this.destination.remove(t),
                    this.hasSubscription = !1,
                    this.hasCompleted && this.destination.complete()
                }
                ,
                e
            }(Pe)
              , Cr = function() {
                function t(t, e, n) {
                    this.project = t,
                    this.concurrent = e,
                    this.scheduler = n
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new Nr(t,this.project,this.concurrent,this.scheduler))
                }
                ,
                t
            }()
              , Nr = function(t) {
                function e(e, n, r, i) {
                    var o = t.call(this, e) || this;
                    return o.project = n,
                    o.concurrent = r,
                    o.scheduler = i,
                    o.index = 0,
                    o.active = 0,
                    o.hasCompleted = !1,
                    r < Number.POSITIVE_INFINITY && (o.buffer = []),
                    o
                }
                return Object(v.c)(e, t),
                e.dispatch = function(t) {
                    var e = t.subscriber
                      , n = t.result
                      , r = t.value
                      , i = t.index;
                    e.subscribeToProjection(n, r, i)
                }
                ,
                e.prototype._next = function(t) {
                    var n = this.destination;
                    if (n.closed)
                        this._complete();
                    else {
                        var r = this.index++;
                        if (this.active < this.concurrent) {
                            n.next(t);
                            try {
                                var i = (0,
                                this.project)(t, r);
                                if (this.scheduler) {
                                    var o = {
                                        subscriber: this,
                                        result: i,
                                        value: t,
                                        index: r
                                    };
                                    this.destination.add(this.scheduler.schedule(e.dispatch, 0, o))
                                } else
                                    this.subscribeToProjection(i, t, r)
                            } catch (t) {
                                n.error(t)
                            }
                        } else
                            this.buffer.push(t)
                    }
                }
                ,
                e.prototype.subscribeToProjection = function(t, e, n) {
                    this.active++,
                    this.destination.add(We(this, t, e, n))
                }
                ,
                e.prototype._complete = function() {
                    this.hasCompleted = !0,
                    this.hasCompleted && 0 === this.active && this.destination.complete(),
                    this.unsubscribe()
                }
                ,
                e.prototype.notifyNext = function(t, e, n, r, i) {
                    this._next(e)
                }
                ,
                e.prototype.notifyComplete = function(t) {
                    var e = this.buffer;
                    this.destination.remove(t),
                    this.active--,
                    e && e.length > 0 && this._next(e.shift()),
                    this.hasCompleted && 0 === this.active && this.destination.complete()
                }
                ,
                e
            }(Pe)
              , Tr = function() {
                function t(t) {
                    this.callback = t
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new Ir(t,this.callback))
                }
                ,
                t
            }()
              , Ir = function(t) {
                function e(e, n) {
                    var r = t.call(this, e) || this;
                    return r.add(new pt(n)),
                    r
                }
                return Object(v.c)(e, t),
                e
            }(mt)
              , Ar = function() {
                function t(t, e, n, r) {
                    this.predicate = t,
                    this.source = e,
                    this.yieldIndex = n,
                    this.thisArg = r
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new Pr(t,this.predicate,this.source,this.yieldIndex,this.thisArg))
                }
                ,
                t
            }()
              , Pr = function(t) {
                function e(e, n, r, i, o) {
                    var s = t.call(this, e) || this;
                    return s.predicate = n,
                    s.source = r,
                    s.yieldIndex = i,
                    s.thisArg = o,
                    s.index = 0,
                    s
                }
                return Object(v.c)(e, t),
                e.prototype.notifyComplete = function(t) {
                    var e = this.destination;
                    e.next(t),
                    e.complete(),
                    this.unsubscribe()
                }
                ,
                e.prototype._next = function(t) {
                    var e = this.predicate
                      , n = this.thisArg
                      , r = this.index++;
                    try {
                        e.call(n || this, t, r, this.source) && this.notifyComplete(this.yieldIndex ? r : t)
                    } catch (t) {
                        this.destination.error(t)
                    }
                }
                ,
                e.prototype._complete = function() {
                    this.notifyComplete(this.yieldIndex ? -1 : void 0)
                }
                ,
                e
            }(mt)
              , Rr = function() {
                function t() {}
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new Dr(t))
                }
                ,
                t
            }()
              , Dr = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return Object(v.c)(e, t),
                e.prototype._next = function(t) {}
                ,
                e
            }(mt)
              , Lr = function() {
                function t() {}
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new Br(t))
                }
                ,
                t
            }()
              , Br = function(t) {
                function e(e) {
                    return t.call(this, e) || this
                }
                return Object(v.c)(e, t),
                e.prototype.notifyComplete = function(t) {
                    var e = this.destination;
                    e.next(t),
                    e.complete()
                }
                ,
                e.prototype._next = function(t) {
                    this.notifyComplete(!1)
                }
                ,
                e.prototype._complete = function() {
                    this.notifyComplete(!0)
                }
                ,
                e
            }(mt);
            function Fr(t) {
                return function(e) {
                    return 0 === t ? Gt() : e.lift(new Wr(t))
                }
            }
            var Wr = function() {
                function t(t) {
                    if (this.total = t,
                    this.total < 0)
                        throw new xe
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new qr(t,this.total))
                }
                ,
                t
            }()
              , qr = function(t) {
                function e(e, n) {
                    var r = t.call(this, e) || this;
                    return r.total = n,
                    r.ring = new Array,
                    r.count = 0,
                    r
                }
                return Object(v.c)(e, t),
                e.prototype._next = function(t) {
                    var e = this.ring
                      , n = this.total
                      , r = this.count++;
                    e.length < n ? e.push(t) : e[r % n] = t
                }
                ,
                e.prototype._complete = function() {
                    var t = this.destination
                      , e = this.count;
                    if (e > 0)
                        for (var n = this.count >= this.total ? this.total : this.count, r = this.ring, i = 0; i < n; i++) {
                            var o = e++ % n;
                            t.next(r[o])
                        }
                    t.complete()
                }
                ,
                e
            }(mt)
              , Ur = function() {
                function t(t) {
                    this.value = t
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new Vr(t,this.value))
                }
                ,
                t
            }()
              , Vr = function(t) {
                function e(e, n) {
                    var r = t.call(this, e) || this;
                    return r.value = n,
                    r
                }
                return Object(v.c)(e, t),
                e.prototype._next = function(t) {
                    this.destination.next(this.value)
                }
                ,
                e
            }(mt)
              , Hr = function() {
                function t() {}
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new zr(t))
                }
                ,
                t
            }()
              , zr = function(t) {
                function e(e) {
                    return t.call(this, e) || this
                }
                return Object(v.c)(e, t),
                e.prototype._next = function(t) {
                    this.destination.next(ie.createNext(t))
                }
                ,
                e.prototype._error = function(t) {
                    var e = this.destination;
                    e.next(ie.createError(t)),
                    e.complete()
                }
                ,
                e.prototype._complete = function() {
                    var t = this.destination;
                    t.next(ie.createComplete()),
                    t.complete()
                }
                ,
                e
            }(mt);
            function Kr(t, e) {
                var n = !1;
                return arguments.length >= 2 && (n = !0),
                function(r) {
                    return r.lift(new Jr(t,e,n))
                }
            }
            var Jr = function() {
                function t(t, e, n) {
                    void 0 === n && (n = !1),
                    this.accumulator = t,
                    this.seed = e,
                    this.hasSeed = n
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new $r(t,this.accumulator,this.seed,this.hasSeed))
                }
                ,
                t
            }()
              , $r = function(t) {
                function e(e, n, r, i) {
                    var o = t.call(this, e) || this;
                    return o.accumulator = n,
                    o._seed = r,
                    o.hasSeed = i,
                    o.index = 0,
                    o
                }
                return Object(v.c)(e, t),
                Object.defineProperty(e.prototype, "seed", {
                    get: function() {
                        return this._seed
                    },
                    set: function(t) {
                        this.hasSeed = !0,
                        this._seed = t
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                e.prototype._next = function(t) {
                    if (this.hasSeed)
                        return this._tryNext(t);
                    this.seed = t,
                    this.destination.next(t)
                }
                ,
                e.prototype._tryNext = function(t) {
                    var e, n = this.index++;
                    try {
                        e = this.accumulator(this.seed, t, n)
                    } catch (t) {
                        this.destination.error(t)
                    }
                    this.seed = e,
                    this.destination.next(e)
                }
                ,
                e
            }(mt);
            function Gr(t, e) {
                return arguments.length >= 2 ? function(n) {
                    return kt(Kr(t, e), Fr(1), Qn(e))(n)
                }
                : function(e) {
                    return kt(Kr((function(e, n, r) {
                        return t(e, n, r + 1)
                    }
                    )), Fr(1))(e)
                }
            }
            var Yr = function() {
                function t(t, e, n) {
                    this.accumulator = t,
                    this.seed = e,
                    this.concurrent = n
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new Zr(t,this.accumulator,this.seed,this.concurrent))
                }
                ,
                t
            }()
              , Zr = function(t) {
                function e(e, n, r, i) {
                    var o = t.call(this, e) || this;
                    return o.accumulator = n,
                    o.acc = r,
                    o.concurrent = i,
                    o.hasValue = !1,
                    o.hasCompleted = !1,
                    o.buffer = [],
                    o.active = 0,
                    o.index = 0,
                    o
                }
                return Object(v.c)(e, t),
                e.prototype._next = function(t) {
                    if (this.active < this.concurrent) {
                        var e = this.index++
                          , n = this.destination
                          , r = void 0;
                        try {
                            r = (0,
                            this.accumulator)(this.acc, t, e)
                        } catch (t) {
                            return n.error(t)
                        }
                        this.active++,
                        this._innerSub(r, t, e)
                    } else
                        this.buffer.push(t)
                }
                ,
                e.prototype._innerSub = function(t, e, n) {
                    var r = new Re(this,e,n)
                      , i = this.destination;
                    i.add(r);
                    var o = We(this, t, void 0, void 0, r);
                    o !== r && i.add(o)
                }
                ,
                e.prototype._complete = function() {
                    this.hasCompleted = !0,
                    0 === this.active && 0 === this.buffer.length && (!1 === this.hasValue && this.destination.next(this.acc),
                    this.destination.complete()),
                    this.unsubscribe()
                }
                ,
                e.prototype.notifyNext = function(t, e, n, r, i) {
                    var o = this.destination;
                    this.acc = e,
                    this.hasValue = !0,
                    o.next(e)
                }
                ,
                e.prototype.notifyComplete = function(t) {
                    var e = this.buffer;
                    this.destination.remove(t),
                    this.active--,
                    e.length > 0 ? this._next(e.shift()) : 0 === this.active && this.hasCompleted && (!1 === this.hasValue && this.destination.next(this.acc),
                    this.destination.complete())
                }
                ,
                e
            }(Pe);
            function Qr(t, e) {
                return function(n) {
                    var r;
                    if (r = "function" == typeof t ? t : function() {
                        return t
                    }
                    ,
                    "function" == typeof e)
                        return n.lift(new Xr(r,e));
                    var i = Object.create(n, Rt);
                    return i.source = n,
                    i.subjectFactory = r,
                    i
                }
            }
            var Xr = function() {
                function t(t, e) {
                    this.subjectFactory = t,
                    this.selector = e
                }
                return t.prototype.call = function(t, e) {
                    var n = this.selector
                      , r = this.subjectFactory()
                      , i = n(r).subscribe(t);
                    return i.add(e.subscribe(r)),
                    i
                }
                ,
                t
            }()
              , ti = function() {
                function t(t) {
                    this.nextSources = t
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new ei(t,this.nextSources))
                }
                ,
                t
            }()
              , ei = function(t) {
                function e(e, n) {
                    var r = t.call(this, e) || this;
                    return r.destination = e,
                    r.nextSources = n,
                    r
                }
                return Object(v.c)(e, t),
                e.prototype.notifyError = function(t, e) {
                    this.subscribeToNextSource()
                }
                ,
                e.prototype.notifyComplete = function(t) {
                    this.subscribeToNextSource()
                }
                ,
                e.prototype._error = function(t) {
                    this.subscribeToNextSource(),
                    this.unsubscribe()
                }
                ,
                e.prototype._complete = function() {
                    this.subscribeToNextSource(),
                    this.unsubscribe()
                }
                ,
                e.prototype.subscribeToNextSource = function() {
                    var t = this.nextSources.shift();
                    if (t) {
                        var e = new Re(this,void 0,void 0)
                          , n = this.destination;
                        n.add(e);
                        var r = We(this, t, void 0, void 0, e);
                        r !== e && n.add(r)
                    } else
                        this.destination.complete()
                }
                ,
                e
            }(Pe)
              , ni = function() {
                function t() {}
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new ri(t))
                }
                ,
                t
            }()
              , ri = function(t) {
                function e(e) {
                    var n = t.call(this, e) || this;
                    return n.hasPrev = !1,
                    n
                }
                return Object(v.c)(e, t),
                e.prototype._next = function(t) {
                    var e;
                    this.hasPrev ? e = [this.prev, t] : this.hasPrev = !0,
                    this.prev = t,
                    e && this.destination.next(e)
                }
                ,
                e
            }(mt);
            function ii(t, e) {
                return function(n) {
                    for (var r = n, i = 0; i < e; i++) {
                        var o = r[t[i]];
                        if (void 0 === o)
                            return;
                        r = o
                    }
                    return r
                }
            }
            var oi = function() {
                function t(t, e) {
                    this.count = t,
                    this.source = e
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new si(t,this.count,this.source))
                }
                ,
                t
            }()
              , si = function(t) {
                function e(e, n, r) {
                    var i = t.call(this, e) || this;
                    return i.count = n,
                    i.source = r,
                    i
                }
                return Object(v.c)(e, t),
                e.prototype.complete = function() {
                    if (!this.isStopped) {
                        var e = this.source
                          , n = this.count;
                        if (0 === n)
                            return t.prototype.complete.call(this);
                        n > -1 && (this.count = n - 1),
                        e.subscribe(this._unsubscribeAndRecycle())
                    }
                }
                ,
                e
            }(mt)
              , ui = function() {
                function t(t) {
                    this.notifier = t
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new ai(t,this.notifier,e))
                }
                ,
                t
            }()
              , ai = function(t) {
                function e(e, n, r) {
                    var i = t.call(this, e) || this;
                    return i.notifier = n,
                    i.source = r,
                    i.sourceIsBeingSubscribedTo = !0,
                    i
                }
                return Object(v.c)(e, t),
                e.prototype.notifyNext = function(t, e, n, r, i) {
                    this.sourceIsBeingSubscribedTo = !0,
                    this.source.subscribe(this)
                }
                ,
                e.prototype.notifyComplete = function(e) {
                    if (!1 === this.sourceIsBeingSubscribedTo)
                        return t.prototype.complete.call(this)
                }
                ,
                e.prototype.complete = function() {
                    if (this.sourceIsBeingSubscribedTo = !1,
                    !this.isStopped) {
                        if (this.retries || this.subscribeToRetries(),
                        !this.retriesSubscription || this.retriesSubscription.closed)
                            return t.prototype.complete.call(this);
                        this._unsubscribeAndRecycle(),
                        this.notifications.next()
                    }
                }
                ,
                e.prototype._unsubscribe = function() {
                    var t = this.notifications
                      , e = this.retriesSubscription;
                    t && (t.unsubscribe(),
                    this.notifications = null),
                    e && (e.unsubscribe(),
                    this.retriesSubscription = null),
                    this.retries = null
                }
                ,
                e.prototype._unsubscribeAndRecycle = function() {
                    var e = this._unsubscribe;
                    return this._unsubscribe = null,
                    t.prototype._unsubscribeAndRecycle.call(this),
                    this._unsubscribe = e,
                    this
                }
                ,
                e.prototype.subscribeToRetries = function() {
                    var e;
                    this.notifications = new Ct;
                    try {
                        e = (0,
                        this.notifier)(this.notifications)
                    } catch (e) {
                        return t.prototype.complete.call(this)
                    }
                    this.retries = e,
                    this.retriesSubscription = We(this, e)
                }
                ,
                e
            }(Pe)
              , ci = function() {
                function t(t, e) {
                    this.count = t,
                    this.source = e
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new li(t,this.count,this.source))
                }
                ,
                t
            }()
              , li = function(t) {
                function e(e, n, r) {
                    var i = t.call(this, e) || this;
                    return i.count = n,
                    i.source = r,
                    i
                }
                return Object(v.c)(e, t),
                e.prototype.error = function(e) {
                    if (!this.isStopped) {
                        var n = this.source
                          , r = this.count;
                        if (0 === r)
                            return t.prototype.error.call(this, e);
                        r > -1 && (this.count = r - 1),
                        n.subscribe(this._unsubscribeAndRecycle())
                    }
                }
                ,
                e
            }(mt)
              , hi = function() {
                function t(t, e) {
                    this.notifier = t,
                    this.source = e
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new fi(t,this.notifier,this.source))
                }
                ,
                t
            }()
              , fi = function(t) {
                function e(e, n, r) {
                    var i = t.call(this, e) || this;
                    return i.notifier = n,
                    i.source = r,
                    i
                }
                return Object(v.c)(e, t),
                e.prototype.error = function(e) {
                    if (!this.isStopped) {
                        var n = this.errors
                          , r = this.retries
                          , i = this.retriesSubscription;
                        if (r)
                            this.errors = null,
                            this.retriesSubscription = null;
                        else {
                            n = new Ct;
                            try {
                                r = (0,
                                this.notifier)(n)
                            } catch (e) {
                                return t.prototype.error.call(this, e)
                            }
                            i = We(this, r)
                        }
                        this._unsubscribeAndRecycle(),
                        this.errors = n,
                        this.retries = r,
                        this.retriesSubscription = i,
                        n.next(e)
                    }
                }
                ,
                e.prototype._unsubscribe = function() {
                    var t = this.errors
                      , e = this.retriesSubscription;
                    t && (t.unsubscribe(),
                    this.errors = null),
                    e && (e.unsubscribe(),
                    this.retriesSubscription = null),
                    this.retries = null
                }
                ,
                e.prototype.notifyNext = function(t, e, n, r, i) {
                    var o = this._unsubscribe;
                    this._unsubscribe = null,
                    this._unsubscribeAndRecycle(),
                    this._unsubscribe = o,
                    this.source.subscribe(this)
                }
                ,
                e
            }(Pe)
              , di = function() {
                function t(t) {
                    this.notifier = t
                }
                return t.prototype.call = function(t, e) {
                    var n = new pi(t)
                      , r = e.subscribe(n);
                    return r.add(We(n, this.notifier)),
                    r
                }
                ,
                t
            }()
              , pi = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.hasValue = !1,
                    e
                }
                return Object(v.c)(e, t),
                e.prototype._next = function(t) {
                    this.value = t,
                    this.hasValue = !0
                }
                ,
                e.prototype.notifyNext = function(t, e, n, r, i) {
                    this.emitValue()
                }
                ,
                e.prototype.notifyComplete = function() {
                    this.emitValue()
                }
                ,
                e.prototype.emitValue = function() {
                    this.hasValue && (this.hasValue = !1,
                    this.destination.next(this.value))
                }
                ,
                e
            }(Pe)
              , bi = function() {
                function t(t, e) {
                    this.period = t,
                    this.scheduler = e
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new vi(t,this.period,this.scheduler))
                }
                ,
                t
            }()
              , vi = function(t) {
                function e(e, n, r) {
                    var i = t.call(this, e) || this;
                    return i.period = n,
                    i.scheduler = r,
                    i.hasValue = !1,
                    i.add(r.schedule(mi, n, {
                        subscriber: i,
                        period: n
                    })),
                    i
                }
                return Object(v.c)(e, t),
                e.prototype._next = function(t) {
                    this.lastValue = t,
                    this.hasValue = !0
                }
                ,
                e.prototype.notifyNext = function() {
                    this.hasValue && (this.hasValue = !1,
                    this.destination.next(this.lastValue))
                }
                ,
                e
            }(mt);
            function mi(t) {
                var e = t.subscriber
                  , n = t.period;
                e.notifyNext(),
                this.schedule(t, n)
            }
            var yi = function() {
                function t(t, e) {
                    this.compareTo = t,
                    this.comparator = e
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new gi(t,this.compareTo,this.comparator))
                }
                ,
                t
            }()
              , gi = function(t) {
                function e(e, n, r) {
                    var i = t.call(this, e) || this;
                    return i.compareTo = n,
                    i.comparator = r,
                    i._a = [],
                    i._b = [],
                    i._oneComplete = !1,
                    i.destination.add(n.subscribe(new wi(e,i))),
                    i
                }
                return Object(v.c)(e, t),
                e.prototype._next = function(t) {
                    this._oneComplete && 0 === this._b.length ? this.emit(!1) : (this._a.push(t),
                    this.checkValues())
                }
                ,
                e.prototype._complete = function() {
                    this._oneComplete ? this.emit(0 === this._a.length && 0 === this._b.length) : this._oneComplete = !0,
                    this.unsubscribe()
                }
                ,
                e.prototype.checkValues = function() {
                    for (var t = this._a, e = this._b, n = this.comparator; t.length > 0 && e.length > 0; ) {
                        var r = t.shift()
                          , i = e.shift()
                          , o = !1;
                        try {
                            o = n ? n(r, i) : r === i
                        } catch (t) {
                            this.destination.error(t)
                        }
                        o || this.emit(!1)
                    }
                }
                ,
                e.prototype.emit = function(t) {
                    var e = this.destination;
                    e.next(t),
                    e.complete()
                }
                ,
                e.prototype.nextB = function(t) {
                    this._oneComplete && 0 === this._a.length ? this.emit(!1) : (this._b.push(t),
                    this.checkValues())
                }
                ,
                e.prototype.completeB = function() {
                    this._oneComplete ? this.emit(0 === this._a.length && 0 === this._b.length) : this._oneComplete = !0
                }
                ,
                e
            }(mt)
              , wi = function(t) {
                function e(e, n) {
                    var r = t.call(this, e) || this;
                    return r.parent = n,
                    r
                }
                return Object(v.c)(e, t),
                e.prototype._next = function(t) {
                    this.parent.nextB(t)
                }
                ,
                e.prototype._error = function(t) {
                    this.parent.error(t),
                    this.unsubscribe()
                }
                ,
                e.prototype._complete = function() {
                    this.parent.completeB(),
                    this.unsubscribe()
                }
                ,
                e
            }(mt);
            function _i() {
                return new Ct
            }
            var ki = function() {
                function t(t, e) {
                    this.predicate = t,
                    this.source = e
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new xi(t,this.predicate,this.source))
                }
                ,
                t
            }()
              , xi = function(t) {
                function e(e, n, r) {
                    var i = t.call(this, e) || this;
                    return i.predicate = n,
                    i.source = r,
                    i.seenValue = !1,
                    i.index = 0,
                    i
                }
                return Object(v.c)(e, t),
                e.prototype.applySingleValue = function(t) {
                    this.seenValue ? this.destination.error("Sequence contains more than one element") : (this.seenValue = !0,
                    this.singleValue = t)
                }
                ,
                e.prototype._next = function(t) {
                    var e = this.index++;
                    this.predicate ? this.tryNext(t, e) : this.applySingleValue(t)
                }
                ,
                e.prototype.tryNext = function(t, e) {
                    try {
                        this.predicate(t, e, this.source) && this.applySingleValue(t)
                    } catch (t) {
                        this.destination.error(t)
                    }
                }
                ,
                e.prototype._complete = function() {
                    var t = this.destination;
                    this.index > 0 ? (t.next(this.seenValue ? this.singleValue : void 0),
                    t.complete()) : t.error(new Se)
                }
                ,
                e
            }(mt)
              , Si = function() {
                function t(t) {
                    this.total = t
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new Mi(t,this.total))
                }
                ,
                t
            }()
              , Mi = function(t) {
                function e(e, n) {
                    var r = t.call(this, e) || this;
                    return r.total = n,
                    r.count = 0,
                    r
                }
                return Object(v.c)(e, t),
                e.prototype._next = function(t) {
                    ++this.count > this.total && this.destination.next(t)
                }
                ,
                e
            }(mt)
              , Ei = function() {
                function t(t) {
                    if (this._skipCount = t,
                    this._skipCount < 0)
                        throw new xe
                }
                return t.prototype.call = function(t, e) {
                    return 0 === this._skipCount ? e.subscribe(new mt(t)) : e.subscribe(new Oi(t,this._skipCount))
                }
                ,
                t
            }()
              , Oi = function(t) {
                function e(e, n) {
                    var r = t.call(this, e) || this;
                    return r._skipCount = n,
                    r._count = 0,
                    r._ring = new Array(n),
                    r
                }
                return Object(v.c)(e, t),
                e.prototype._next = function(t) {
                    var e = this._skipCount
                      , n = this._count++;
                    if (n < e)
                        this._ring[n] = t;
                    else {
                        var r = n % e
                          , i = this._ring
                          , o = i[r];
                        i[r] = t,
                        this.destination.next(o)
                    }
                }
                ,
                e
            }(mt)
              , ji = function() {
                function t(t) {
                    this.notifier = t
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new Ci(t,this.notifier))
                }
                ,
                t
            }()
              , Ci = function(t) {
                function e(e, n) {
                    var r = t.call(this, e) || this;
                    r.hasValue = !1;
                    var i = new Re(r,void 0,void 0);
                    r.add(i),
                    r.innerSubscription = i;
                    var o = We(r, n, void 0, void 0, i);
                    return o !== i && (r.add(o),
                    r.innerSubscription = o),
                    r
                }
                return Object(v.c)(e, t),
                e.prototype._next = function(e) {
                    this.hasValue && t.prototype._next.call(this, e)
                }
                ,
                e.prototype.notifyNext = function(t, e, n, r, i) {
                    this.hasValue = !0,
                    this.innerSubscription && this.innerSubscription.unsubscribe()
                }
                ,
                e.prototype.notifyComplete = function() {}
                ,
                e
            }(Pe)
              , Ni = function() {
                function t(t) {
                    this.predicate = t
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new Ti(t,this.predicate))
                }
                ,
                t
            }()
              , Ti = function(t) {
                function e(e, n) {
                    var r = t.call(this, e) || this;
                    return r.predicate = n,
                    r.skipping = !0,
                    r.index = 0,
                    r
                }
                return Object(v.c)(e, t),
                e.prototype._next = function(t) {
                    var e = this.destination;
                    this.skipping && this.tryCallPredicate(t),
                    this.skipping || e.next(t)
                }
                ,
                e.prototype.tryCallPredicate = function(t) {
                    try {
                        var e = this.predicate(t, this.index++);
                        this.skipping = Boolean(e)
                    } catch (t) {
                        this.destination.error(t)
                    }
                }
                ,
                e
            }(mt)
              , Ii = function(t) {
                function e(e, n, r) {
                    void 0 === n && (n = 0),
                    void 0 === r && (r = ve);
                    var i = t.call(this) || this;
                    return i.source = e,
                    i.delayTime = n,
                    i.scheduler = r,
                    (!en(n) || n < 0) && (i.delayTime = 0),
                    r && "function" == typeof r.schedule || (i.scheduler = ve),
                    i
                }
                return Object(v.c)(e, t),
                e.create = function(t, n, r) {
                    return void 0 === n && (n = 0),
                    void 0 === r && (r = ve),
                    new e(t,n,r)
                }
                ,
                e.dispatch = function(t) {
                    var e = t.source
                      , n = t.subscriber;
                    return this.add(e.subscribe(n))
                }
                ,
                e.prototype._subscribe = function(t) {
                    var n = this.delayTime
                      , r = this.source;
                    return this.scheduler.schedule(e.dispatch, n, {
                        source: r,
                        subscriber: t
                    })
                }
                ,
                e
            }(St)
              , Ai = function() {
                function t(t, e) {
                    this.scheduler = t,
                    this.delay = e
                }
                return t.prototype.call = function(t, e) {
                    return new Ii(e,this.delay,this.scheduler).subscribe(t)
                }
                ,
                t
            }();
            function Pi(t, e) {
                return "function" == typeof e ? function(n) {
                    return n.pipe(Pi((function(n, r) {
                        return ze(t(n, r)).pipe(Ee((function(t, i) {
                            return e(n, t, r, i)
                        }
                        )))
                    }
                    )))
                }
                : function(e) {
                    return e.lift(new Ri(t))
                }
            }
            var Ri = function() {
                function t(t) {
                    this.project = t
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new Di(t,this.project))
                }
                ,
                t
            }()
              , Di = function(t) {
                function e(e, n) {
                    var r = t.call(this, e) || this;
                    return r.project = n,
                    r.index = 0,
                    r
                }
                return Object(v.c)(e, t),
                e.prototype._next = function(t) {
                    var e, n = this.index++;
                    try {
                        e = this.project(t, n)
                    } catch (t) {
                        return void this.destination.error(t)
                    }
                    this._innerSub(e, t, n)
                }
                ,
                e.prototype._innerSub = function(t, e, n) {
                    var r = this.innerSubscription;
                    r && r.unsubscribe();
                    var i = new Re(this,e,n)
                      , o = this.destination;
                    o.add(i),
                    this.innerSubscription = We(this, t, void 0, void 0, i),
                    this.innerSubscription !== i && o.add(this.innerSubscription)
                }
                ,
                e.prototype._complete = function() {
                    var e = this.innerSubscription;
                    e && !e.closed || t.prototype._complete.call(this),
                    this.unsubscribe()
                }
                ,
                e.prototype._unsubscribe = function() {
                    this.innerSubscription = null
                }
                ,
                e.prototype.notifyComplete = function(e) {
                    this.destination.remove(e),
                    this.innerSubscription = null,
                    this.isStopped && t.prototype._complete.call(this)
                }
                ,
                e.prototype.notifyNext = function(t, e, n, r, i) {
                    this.destination.next(e)
                }
                ,
                e
            }(Pe)
              , Li = function() {
                function t(t) {
                    this.notifier = t
                }
                return t.prototype.call = function(t, e) {
                    var n = new Bi(t)
                      , r = We(n, this.notifier);
                    return r && !n.seenValue ? (n.add(r),
                    e.subscribe(n)) : n
                }
                ,
                t
            }()
              , Bi = function(t) {
                function e(e) {
                    var n = t.call(this, e) || this;
                    return n.seenValue = !1,
                    n
                }
                return Object(v.c)(e, t),
                e.prototype.notifyNext = function(t, e, n, r, i) {
                    this.seenValue = !0,
                    this.complete()
                }
                ,
                e.prototype.notifyComplete = function() {}
                ,
                e
            }(Pe)
              , Fi = function() {
                function t(t, e) {
                    this.predicate = t,
                    this.inclusive = e
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new Wi(t,this.predicate,this.inclusive))
                }
                ,
                t
            }()
              , Wi = function(t) {
                function e(e, n, r) {
                    var i = t.call(this, e) || this;
                    return i.predicate = n,
                    i.inclusive = r,
                    i.index = 0,
                    i
                }
                return Object(v.c)(e, t),
                e.prototype._next = function(t) {
                    var e, n = this.destination;
                    try {
                        e = this.predicate(t, this.index++)
                    } catch (t) {
                        return void n.error(t)
                    }
                    this.nextOrComplete(t, e)
                }
                ,
                e.prototype.nextOrComplete = function(t, e) {
                    var n = this.destination;
                    Boolean(e) ? n.next(t) : (this.inclusive && n.next(t),
                    n.complete())
                }
                ,
                e
            }(mt)
              , qi = function() {
                function t(t, e, n) {
                    this.nextOrObserver = t,
                    this.error = e,
                    this.complete = n
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new Ui(t,this.nextOrObserver,this.error,this.complete))
                }
                ,
                t
            }()
              , Ui = function(t) {
                function e(e, n, r, i) {
                    var o = t.call(this, e) || this;
                    return o._tapNext = ke,
                    o._tapError = ke,
                    o._tapComplete = ke,
                    o._tapError = r || ke,
                    o._tapComplete = i || ke,
                    st(n) ? (o._context = o,
                    o._tapNext = n) : n && (o._context = n,
                    o._tapNext = n.next || ke,
                    o._tapError = n.error || ke,
                    o._tapComplete = n.complete || ke),
                    o
                }
                return Object(v.c)(e, t),
                e.prototype._next = function(t) {
                    try {
                        this._tapNext.call(this._context, t)
                    } catch (t) {
                        return void this.destination.error(t)
                    }
                    this.destination.next(t)
                }
                ,
                e.prototype._error = function(t) {
                    try {
                        this._tapError.call(this._context, t)
                    } catch (t) {
                        return void this.destination.error(t)
                    }
                    this.destination.error(t)
                }
                ,
                e.prototype._complete = function() {
                    try {
                        this._tapComplete.call(this._context)
                    } catch (t) {
                        return void this.destination.error(t)
                    }
                    return this.destination.complete()
                }
                ,
                e
            }(mt)
              , Vi = {
                leading: !0,
                trailing: !1
            }
              , Hi = function() {
                function t(t, e, n) {
                    this.durationSelector = t,
                    this.leading = e,
                    this.trailing = n
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new zi(t,this.durationSelector,this.leading,this.trailing))
                }
                ,
                t
            }()
              , zi = function(t) {
                function e(e, n, r, i) {
                    var o = t.call(this, e) || this;
                    return o.destination = e,
                    o.durationSelector = n,
                    o._leading = r,
                    o._trailing = i,
                    o._hasValue = !1,
                    o
                }
                return Object(v.c)(e, t),
                e.prototype._next = function(t) {
                    this._hasValue = !0,
                    this._sendValue = t,
                    this._throttled || (this._leading ? this.send() : this.throttle(t))
                }
                ,
                e.prototype.send = function() {
                    var t = this._hasValue
                      , e = this._sendValue;
                    t && (this.destination.next(e),
                    this.throttle(e)),
                    this._hasValue = !1,
                    this._sendValue = null
                }
                ,
                e.prototype.throttle = function(t) {
                    var e = this.tryDurationSelector(t);
                    e && this.add(this._throttled = We(this, e))
                }
                ,
                e.prototype.tryDurationSelector = function(t) {
                    try {
                        return this.durationSelector(t)
                    } catch (t) {
                        return this.destination.error(t),
                        null
                    }
                }
                ,
                e.prototype.throttlingDone = function() {
                    var t = this._throttled
                      , e = this._trailing;
                    t && t.unsubscribe(),
                    this._throttled = null,
                    e && this.send()
                }
                ,
                e.prototype.notifyNext = function(t, e, n, r, i) {
                    this.throttlingDone()
                }
                ,
                e.prototype.notifyComplete = function() {
                    this.throttlingDone()
                }
                ,
                e
            }(Pe)
              , Ki = function() {
                function t(t, e, n, r) {
                    this.duration = t,
                    this.scheduler = e,
                    this.leading = n,
                    this.trailing = r
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new Ji(t,this.duration,this.scheduler,this.leading,this.trailing))
                }
                ,
                t
            }()
              , Ji = function(t) {
                function e(e, n, r, i, o) {
                    var s = t.call(this, e) || this;
                    return s.duration = n,
                    s.scheduler = r,
                    s.leading = i,
                    s.trailing = o,
                    s._hasTrailingValue = !1,
                    s._trailingValue = null,
                    s
                }
                return Object(v.c)(e, t),
                e.prototype._next = function(t) {
                    this.throttled ? this.trailing && (this._trailingValue = t,
                    this._hasTrailingValue = !0) : (this.add(this.throttled = this.scheduler.schedule($i, this.duration, {
                        subscriber: this
                    })),
                    this.leading ? this.destination.next(t) : this.trailing && (this._trailingValue = t,
                    this._hasTrailingValue = !0))
                }
                ,
                e.prototype._complete = function() {
                    this._hasTrailingValue ? (this.destination.next(this._trailingValue),
                    this.destination.complete()) : this.destination.complete()
                }
                ,
                e.prototype.clearThrottle = function() {
                    var t = this.throttled;
                    t && (this.trailing && this._hasTrailingValue && (this.destination.next(this._trailingValue),
                    this._trailingValue = null,
                    this._hasTrailingValue = !1),
                    t.unsubscribe(),
                    this.remove(t),
                    this.throttled = null)
                }
                ,
                e
            }(mt);
            function $i(t) {
                t.subscriber.clearThrottle()
            }
            var Gi = function(t, e) {
                this.value = t,
                this.interval = e
            };
            function Yi(t, e, n) {
                return void 0 === n && (n = me),
                function(r) {
                    var i = er(t)
                      , o = i ? +t - n.now() : Math.abs(t);
                    return r.lift(new Zi(o,i,e,n))
                }
            }
            var Zi = function() {
                function t(t, e, n, r) {
                    this.waitFor = t,
                    this.absoluteTimeout = e,
                    this.withObservable = n,
                    this.scheduler = r
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new Qi(t,this.absoluteTimeout,this.waitFor,this.withObservable,this.scheduler))
                }
                ,
                t
            }()
              , Qi = function(t) {
                function e(e, n, r, i, o) {
                    var s = t.call(this, e) || this;
                    return s.absoluteTimeout = n,
                    s.waitFor = r,
                    s.withObservable = i,
                    s.scheduler = o,
                    s.action = null,
                    s.scheduleTimeout(),
                    s
                }
                return Object(v.c)(e, t),
                e.dispatchTimeout = function(t) {
                    var e = t.withObservable;
                    t._unsubscribeAndRecycle(),
                    t.add(We(t, e))
                }
                ,
                e.prototype.scheduleTimeout = function() {
                    var t = this.action;
                    t ? this.action = t.schedule(this, this.waitFor) : this.add(this.action = this.scheduler.schedule(e.dispatchTimeout, this.waitFor, this))
                }
                ,
                e.prototype._next = function(e) {
                    this.absoluteTimeout || this.scheduleTimeout(),
                    t.prototype._next.call(this, e)
                }
                ,
                e.prototype._unsubscribe = function() {
                    this.action = null,
                    this.scheduler = null,
                    this.withObservable = null
                }
                ,
                e
            }(Pe)
              , Xi = function(t, e) {
                this.value = t,
                this.timestamp = e
            };
            function to(t, e, n) {
                return 0 === n ? [e] : (t.push(e),
                t)
            }
            var eo = function() {
                function t(t) {
                    this.windowBoundaries = t
                }
                return t.prototype.call = function(t, e) {
                    var n = new no(t)
                      , r = e.subscribe(n);
                    return r.closed || n.add(We(n, this.windowBoundaries)),
                    r
                }
                ,
                t
            }()
              , no = function(t) {
                function e(e) {
                    var n = t.call(this, e) || this;
                    return n.window = new Ct,
                    e.next(n.window),
                    n
                }
                return Object(v.c)(e, t),
                e.prototype.notifyNext = function(t, e, n, r, i) {
                    this.openWindow()
                }
                ,
                e.prototype.notifyError = function(t, e) {
                    this._error(t)
                }
                ,
                e.prototype.notifyComplete = function(t) {
                    this._complete()
                }
                ,
                e.prototype._next = function(t) {
                    this.window.next(t)
                }
                ,
                e.prototype._error = function(t) {
                    this.window.error(t),
                    this.destination.error(t)
                }
                ,
                e.prototype._complete = function() {
                    this.window.complete(),
                    this.destination.complete()
                }
                ,
                e.prototype._unsubscribe = function() {
                    this.window = null
                }
                ,
                e.prototype.openWindow = function() {
                    var t = this.window;
                    t && t.complete();
                    var e = this.destination
                      , n = this.window = new Ct;
                    e.next(n)
                }
                ,
                e
            }(Pe)
              , ro = function() {
                function t(t, e) {
                    this.windowSize = t,
                    this.startWindowEvery = e
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new io(t,this.windowSize,this.startWindowEvery))
                }
                ,
                t
            }()
              , io = function(t) {
                function e(e, n, r) {
                    var i = t.call(this, e) || this;
                    return i.destination = e,
                    i.windowSize = n,
                    i.startWindowEvery = r,
                    i.windows = [new Ct],
                    i.count = 0,
                    e.next(i.windows[0]),
                    i
                }
                return Object(v.c)(e, t),
                e.prototype._next = function(t) {
                    for (var e = this.startWindowEvery > 0 ? this.startWindowEvery : this.windowSize, n = this.destination, r = this.windowSize, i = this.windows, o = i.length, s = 0; s < o && !this.closed; s++)
                        i[s].next(t);
                    var u = this.count - r + 1;
                    if (u >= 0 && u % e == 0 && !this.closed && i.shift().complete(),
                    ++this.count % e == 0 && !this.closed) {
                        var a = new Ct;
                        i.push(a),
                        n.next(a)
                    }
                }
                ,
                e.prototype._error = function(t) {
                    var e = this.windows;
                    if (e)
                        for (; e.length > 0 && !this.closed; )
                            e.shift().error(t);
                    this.destination.error(t)
                }
                ,
                e.prototype._complete = function() {
                    var t = this.windows;
                    if (t)
                        for (; t.length > 0 && !this.closed; )
                            t.shift().complete();
                    this.destination.complete()
                }
                ,
                e.prototype._unsubscribe = function() {
                    this.count = 0,
                    this.windows = null
                }
                ,
                e
            }(mt)
              , oo = function() {
                function t(t, e, n, r) {
                    this.windowTimeSpan = t,
                    this.windowCreationInterval = e,
                    this.maxWindowSize = n,
                    this.scheduler = r
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new uo(t,this.windowTimeSpan,this.windowCreationInterval,this.maxWindowSize,this.scheduler))
                }
                ,
                t
            }()
              , so = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e._numberOfNextedValues = 0,
                    e
                }
                return Object(v.c)(e, t),
                e.prototype.next = function(e) {
                    this._numberOfNextedValues++,
                    t.prototype.next.call(this, e)
                }
                ,
                Object.defineProperty(e.prototype, "numberOfNextedValues", {
                    get: function() {
                        return this._numberOfNextedValues
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                e
            }(Ct)
              , uo = function(t) {
                function e(e, n, r, i, o) {
                    var s = t.call(this, e) || this;
                    s.destination = e,
                    s.windowTimeSpan = n,
                    s.windowCreationInterval = r,
                    s.maxWindowSize = i,
                    s.scheduler = o,
                    s.windows = [];
                    var u = s.openWindow();
                    if (null !== r && r >= 0) {
                        var a = {
                            subscriber: s,
                            window: u,
                            context: null
                        }
                          , c = {
                            windowTimeSpan: n,
                            windowCreationInterval: r,
                            subscriber: s,
                            scheduler: o
                        };
                        s.add(o.schedule(lo, n, a)),
                        s.add(o.schedule(co, r, c))
                    } else {
                        var l = {
                            subscriber: s,
                            window: u,
                            windowTimeSpan: n
                        };
                        s.add(o.schedule(ao, n, l))
                    }
                    return s
                }
                return Object(v.c)(e, t),
                e.prototype._next = function(t) {
                    for (var e = this.windows, n = e.length, r = 0; r < n; r++) {
                        var i = e[r];
                        i.closed || (i.next(t),
                        i.numberOfNextedValues >= this.maxWindowSize && this.closeWindow(i))
                    }
                }
                ,
                e.prototype._error = function(t) {
                    for (var e = this.windows; e.length > 0; )
                        e.shift().error(t);
                    this.destination.error(t)
                }
                ,
                e.prototype._complete = function() {
                    for (var t = this.windows; t.length > 0; ) {
                        var e = t.shift();
                        e.closed || e.complete()
                    }
                    this.destination.complete()
                }
                ,
                e.prototype.openWindow = function() {
                    var t = new so;
                    return this.windows.push(t),
                    this.destination.next(t),
                    t
                }
                ,
                e.prototype.closeWindow = function(t) {
                    t.complete();
                    var e = this.windows;
                    e.splice(e.indexOf(t), 1)
                }
                ,
                e
            }(mt);
            function ao(t) {
                var e = t.subscriber
                  , n = t.windowTimeSpan
                  , r = t.window;
                r && e.closeWindow(r),
                t.window = e.openWindow(),
                this.schedule(t, n)
            }
            function co(t) {
                var e = t.windowTimeSpan
                  , n = t.subscriber
                  , r = t.scheduler
                  , i = t.windowCreationInterval
                  , o = n.openWindow()
                  , s = {
                    action: this,
                    subscription: null
                }
                  , u = {
                    subscriber: n,
                    window: o,
                    context: s
                };
                s.subscription = r.schedule(lo, e, u),
                this.add(s.subscription),
                this.schedule(t, i)
            }
            function lo(t) {
                var e = t.subscriber
                  , n = t.window
                  , r = t.context;
                r && r.action && r.subscription && r.action.remove(r.subscription),
                e.closeWindow(n)
            }
            var ho, fo, po, bo, vo, mo, yo, go, wo = function() {
                function t(t, e) {
                    this.openings = t,
                    this.closingSelector = e
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new _o(t,this.openings,this.closingSelector))
                }
                ,
                t
            }(), _o = function(t) {
                function e(e, n, r) {
                    var i = t.call(this, e) || this;
                    return i.openings = n,
                    i.closingSelector = r,
                    i.contexts = [],
                    i.add(i.openSubscription = We(i, n, n)),
                    i
                }
                return Object(v.c)(e, t),
                e.prototype._next = function(t) {
                    var e = this.contexts;
                    if (e)
                        for (var n = e.length, r = 0; r < n; r++)
                            e[r].window.next(t)
                }
                ,
                e.prototype._error = function(e) {
                    var n = this.contexts;
                    if (this.contexts = null,
                    n)
                        for (var r = n.length, i = -1; ++i < r; ) {
                            var o = n[i];
                            o.window.error(e),
                            o.subscription.unsubscribe()
                        }
                    t.prototype._error.call(this, e)
                }
                ,
                e.prototype._complete = function() {
                    var e = this.contexts;
                    if (this.contexts = null,
                    e)
                        for (var n = e.length, r = -1; ++r < n; ) {
                            var i = e[r];
                            i.window.complete(),
                            i.subscription.unsubscribe()
                        }
                    t.prototype._complete.call(this)
                }
                ,
                e.prototype._unsubscribe = function() {
                    var t = this.contexts;
                    if (this.contexts = null,
                    t)
                        for (var e = t.length, n = -1; ++n < e; ) {
                            var r = t[n];
                            r.window.unsubscribe(),
                            r.subscription.unsubscribe()
                        }
                }
                ,
                e.prototype.notifyNext = function(t, e, n, r, i) {
                    if (t === this.openings) {
                        var o = void 0;
                        try {
                            o = (0,
                            this.closingSelector)(e)
                        } catch (t) {
                            return this.error(t)
                        }
                        var s = new Ct
                          , u = new pt
                          , a = {
                            window: s,
                            subscription: u
                        };
                        this.contexts.push(a);
                        var c = We(this, o, a);
                        c.closed ? this.closeWindow(this.contexts.length - 1) : (c.context = a,
                        u.add(c)),
                        this.destination.next(s)
                    } else
                        this.closeWindow(this.contexts.indexOf(t))
                }
                ,
                e.prototype.notifyError = function(t) {
                    this.error(t)
                }
                ,
                e.prototype.notifyComplete = function(t) {
                    t !== this.openSubscription && this.closeWindow(this.contexts.indexOf(t.context))
                }
                ,
                e.prototype.closeWindow = function(t) {
                    if (-1 !== t) {
                        var e = this.contexts
                          , n = e[t]
                          , r = n.window
                          , i = n.subscription;
                        e.splice(t, 1),
                        r.complete(),
                        i.unsubscribe()
                    }
                }
                ,
                e
            }(Pe), ko = function() {
                function t(t) {
                    this.closingSelector = t
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new xo(t,this.closingSelector))
                }
                ,
                t
            }(), xo = function(t) {
                function e(e, n) {
                    var r = t.call(this, e) || this;
                    return r.destination = e,
                    r.closingSelector = n,
                    r.openWindow(),
                    r
                }
                return Object(v.c)(e, t),
                e.prototype.notifyNext = function(t, e, n, r, i) {
                    this.openWindow(i)
                }
                ,
                e.prototype.notifyError = function(t, e) {
                    this._error(t)
                }
                ,
                e.prototype.notifyComplete = function(t) {
                    this.openWindow(t)
                }
                ,
                e.prototype._next = function(t) {
                    this.window.next(t)
                }
                ,
                e.prototype._error = function(t) {
                    this.window.error(t),
                    this.destination.error(t),
                    this.unsubscribeClosingNotification()
                }
                ,
                e.prototype._complete = function() {
                    this.window.complete(),
                    this.destination.complete(),
                    this.unsubscribeClosingNotification()
                }
                ,
                e.prototype.unsubscribeClosingNotification = function() {
                    this.closingNotification && this.closingNotification.unsubscribe()
                }
                ,
                e.prototype.openWindow = function(t) {
                    void 0 === t && (t = null),
                    t && (this.remove(t),
                    t.unsubscribe());
                    var e = this.window;
                    e && e.complete();
                    var n, r = this.window = new Ct;
                    this.destination.next(r);
                    try {
                        n = (0,
                        this.closingSelector)()
                    } catch (t) {
                        return this.destination.error(t),
                        void this.window.error(t)
                    }
                    this.add(this.closingNotification = We(this, n))
                }
                ,
                e
            }(Pe), So = function() {
                function t(t, e) {
                    this.observables = t,
                    this.project = e
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new Mo(t,this.observables,this.project))
                }
                ,
                t
            }(), Mo = function(t) {
                function e(e, n, r) {
                    var i = t.call(this, e) || this;
                    i.observables = n,
                    i.project = r,
                    i.toRespond = [];
                    var o = n.length;
                    i.values = new Array(o);
                    for (var s = 0; s < o; s++)
                        i.toRespond.push(s);
                    for (s = 0; s < o; s++) {
                        var u = n[s];
                        i.add(We(i, u, u, s))
                    }
                    return i
                }
                return Object(v.c)(e, t),
                e.prototype.notifyNext = function(t, e, n, r, i) {
                    this.values[n] = e;
                    var o = this.toRespond;
                    if (o.length > 0) {
                        var s = o.indexOf(n);
                        -1 !== s && o.splice(s, 1)
                    }
                }
                ,
                e.prototype.notifyComplete = function() {}
                ,
                e.prototype._next = function(t) {
                    if (0 === this.toRespond.length) {
                        var e = [t].concat(this.values);
                        this.project ? this._tryProject(e) : this.destination.next(e)
                    }
                }
                ,
                e.prototype._tryProject = function(t) {
                    var e;
                    try {
                        e = this.project.apply(this, t)
                    } catch (t) {
                        return void this.destination.error(t)
                    }
                    this.destination.next(e)
                }
                ,
                e
            }(Pe), Eo = Object.freeze({
                __proto__: null,
                audit: Sn,
                auditTime: function(t, e) {
                    return void 0 === e && (e = me),
                    Sn((function() {
                        return bn(t, e)
                    }
                    ))
                },
                buffer: function(t) {
                    return function(e) {
                        return e.lift(new On(t))
                    }
                },
                bufferCount: function(t, e) {
                    return void 0 === e && (e = null),
                    function(n) {
                        return n.lift(new Cn(t,e))
                    }
                },
                bufferTime: function(t) {
                    var e = arguments.length
                      , n = me;
                    Yt(arguments[arguments.length - 1]) && (n = arguments[arguments.length - 1],
                    e--);
                    var r = null;
                    e >= 2 && (r = arguments[1]);
                    var i = Number.POSITIVE_INFINITY;
                    return e >= 3 && (i = arguments[2]),
                    function(e) {
                        return e.lift(new In(t,r,i,n))
                    }
                },
                bufferToggle: function(t, e) {
                    return function(n) {
                        return n.lift(new Bn(t,e))
                    }
                },
                bufferWhen: function(t) {
                    return function(e) {
                        return e.lift(new Wn(t))
                    }
                },
                catchError: function(t) {
                    return function(e) {
                        var n = new Un(t)
                          , r = e.lift(n);
                        return n.caught = r
                    }
                },
                combineAll: function(t) {
                    return function(e) {
                        return e.lift(new Ue(t))
                    }
                },
                combineLatest: function() {
                    for (var t = [], e = 0; e < arguments.length; e++)
                        t[e] = arguments[e];
                    var n = null;
                    return "function" == typeof t[t.length - 1] && (n = t.pop()),
                    1 === t.length && ht(t[0]) && (t = t[0].slice()),
                    function(e) {
                        return e.lift.call(ze([e].concat(t)), new Ue(n))
                    }
                },
                concat: function() {
                    for (var t = [], e = 0; e < arguments.length; e++)
                        t[e] = arguments[e];
                    return function(e) {
                        return e.lift.call(Ze.apply(void 0, [e].concat(t)))
                    }
                },
                concatAll: Ye,
                concatMap: Hn,
                concatMapTo: function(t, e) {
                    return Hn((function() {
                        return t
                    }
                    ), e)
                },
                count: function(t) {
                    return function(e) {
                        return e.lift(new zn(t,e))
                    }
                },
                debounce: function(t) {
                    return function(e) {
                        return e.lift(new Jn(t))
                    }
                },
                debounceTime: function(t, e) {
                    return void 0 === e && (e = me),
                    function(n) {
                        return n.lift(new Gn(t,e))
                    }
                },
                defaultIfEmpty: Qn,
                delay: function(t, e) {
                    void 0 === e && (e = me);
                    var n = er(t) ? +t - e.now() : Math.abs(t);
                    return function(t) {
                        return t.lift(new nr(n,e))
                    }
                },
                delayWhen: function(t, e) {
                    return e ? function(n) {
                        return new ur(n,e).lift(new or(t))
                    }
                    : function(e) {
                        return e.lift(new or(t))
                    }
                },
                dematerialize: function() {
                    return function(t) {
                        return t.lift(new cr)
                    }
                },
                distinct: function(t, e) {
                    return function(n) {
                        return n.lift(new hr(t,e))
                    }
                },
                distinctUntilChanged: dr,
                distinctUntilKeyChanged: function(t, e) {
                    return dr((function(n, r) {
                        return e ? e(n[t], r[t]) : n[t] === r[t]
                    }
                    ))
                },
                elementAt: function(t, e) {
                    if (t < 0)
                        throw new xe;
                    var n = arguments.length >= 2;
                    return function(r) {
                        return r.pipe(an((function(e, n) {
                            return n === t
                        }
                        )), wr(1), n ? Qn(e) : vr((function() {
                            return new xe
                        }
                        )))
                    }
                },
                endWith: function() {
                    for (var t = [], e = 0; e < arguments.length; e++)
                        t[e] = arguments[e];
                    return function(e) {
                        return Ze(e, ee.apply(void 0, t))
                    }
                },
                every: function(t, e) {
                    return function(n) {
                        return n.lift(new xr(t,e,n))
                    }
                },
                exhaust: function() {
                    return function(t) {
                        return t.lift(new Mr)
                    }
                },
                exhaustMap: function t(e, n) {
                    return n ? function(r) {
                        return r.pipe(t((function(t, r) {
                            return ze(e(t, r)).pipe(Ee((function(e, i) {
                                return n(t, e, r, i)
                            }
                            )))
                        }
                        )))
                    }
                    : function(t) {
                        return t.lift(new Or(e))
                    }
                },
                expand: function(t, e, n) {
                    return void 0 === e && (e = Number.POSITIVE_INFINITY),
                    void 0 === n && (n = void 0),
                    e = (e || 0) < 1 ? Number.POSITIVE_INFINITY : e,
                    function(r) {
                        return r.lift(new Cr(t,e,n))
                    }
                },
                filter: an,
                finalize: function(t) {
                    return function(e) {
                        return e.lift(new Tr(t))
                    }
                },
                find: function(t, e) {
                    if ("function" != typeof t)
                        throw new TypeError("predicate is not a function");
                    return function(n) {
                        return n.lift(new Ar(t,n,!1,e))
                    }
                },
                findIndex: function(t, e) {
                    return function(n) {
                        return n.lift(new Ar(t,n,!0,e))
                    }
                },
                first: function(t, e) {
                    var n = arguments.length >= 2;
                    return function(r) {
                        return r.pipe(t ? an((function(e, n) {
                            return t(e, n, r)
                        }
                        )) : _t, wr(1), n ? Qn(e) : vr((function() {
                            return new Se
                        }
                        )))
                    }
                },
                groupBy: function(t, e, n, r) {
                    return function(i) {
                        return i.lift(new Lt(t,e,n,r))
                    }
                },
                ignoreElements: function() {
                    return function(t) {
                        return t.lift(new Rr)
                    }
                },
                isEmpty: function() {
                    return function(t) {
                        return t.lift(new Lr)
                    }
                },
                last: function(t, e) {
                    var n = arguments.length >= 2;
                    return function(r) {
                        return r.pipe(t ? an((function(e, n) {
                            return t(e, n, r)
                        }
                        )) : _t, Fr(1), n ? Qn(e) : vr((function() {
                            return new Se
                        }
                        )))
                    }
                },
                map: Ee,
                mapTo: function(t) {
                    return function(e) {
                        return e.lift(new Ur(t))
                    }
                },
                materialize: function() {
                    return function(t) {
                        return t.lift(new Hr)
                    }
                },
                max: function(t) {
                    return Gr("function" == typeof t ? function(e, n) {
                        return t(e, n) > 0 ? e : n
                    }
                    : function(t, e) {
                        return t > e ? t : e
                    }
                    )
                },
                merge: function() {
                    for (var t = [], e = 0; e < arguments.length; e++)
                        t[e] = arguments[e];
                    return function(e) {
                        return e.lift.call(rn.apply(void 0, [e].concat(t)))
                    }
                },
                mergeAll: Ge,
                mergeMap: Ke,
                flatMap: Ke,
                mergeMapTo: function(t, e, n) {
                    return void 0 === n && (n = Number.POSITIVE_INFINITY),
                    "function" == typeof e ? Ke((function() {
                        return t
                    }
                    ), e, n) : ("number" == typeof e && (n = e),
                    Ke((function() {
                        return t
                    }
                    ), n))
                },
                mergeScan: function(t, e, n) {
                    return void 0 === n && (n = Number.POSITIVE_INFINITY),
                    function(r) {
                        return r.lift(new Yr(t,e,n))
                    }
                },
                min: function(t) {
                    return Gr("function" == typeof t ? function(e, n) {
                        return t(e, n) < 0 ? e : n
                    }
                    : function(t, e) {
                        return t < e ? t : e
                    }
                    )
                },
                multicast: Qr,
                observeOn: function(t, e) {
                    return void 0 === e && (e = 0),
                    function(n) {
                        return n.lift(new oe(t,e))
                    }
                },
                onErrorResumeNext: function() {
                    for (var t = [], e = 0; e < arguments.length; e++)
                        t[e] = arguments[e];
                    return 1 === t.length && ht(t[0]) && (t = t[0]),
                    function(e) {
                        return e.lift(new ti(t))
                    }
                },
                pairwise: function() {
                    return function(t) {
                        return t.lift(new ni)
                    }
                },
                partition: function(t, e) {
                    return function(n) {
                        return [an(t, e)(n), an(un(t, e))(n)]
                    }
                },
                pluck: function() {
                    for (var t = [], e = 0; e < arguments.length; e++)
                        t[e] = arguments[e];
                    var n = t.length;
                    if (0 === n)
                        throw new Error("list of properties cannot be empty.");
                    return function(e) {
                        return Ee(ii(t, n))(e)
                    }
                },
                publish: function(t) {
                    return t ? Qr((function() {
                        return new Ct
                    }
                    ), t) : Qr(new Ct)
                },
                publishBehavior: function(t) {
                    return function(e) {
                        return Qr(new Ut(t))(e)
                    }
                },
                publishLast: function() {
                    return function(t) {
                        return Qr(new le)(t)
                    }
                },
                publishReplay: function(t, e, n, r) {
                    n && "function" != typeof n && (r = n);
                    var i = "function" == typeof n ? n : void 0
                      , o = new ae(t,e,r);
                    return function(t) {
                        return Qr((function() {
                            return o
                        }
                        ), i)(t)
                    }
                },
                race: function() {
                    for (var t = [], e = 0; e < arguments.length; e++)
                        t[e] = arguments[e];
                    return function(e) {
                        return 1 === t.length && ht(t[0]) && (t = t[0]),
                        e.lift.call(hn.apply(void 0, [e].concat(t)))
                    }
                },
                reduce: Gr,
                repeat: function(t) {
                    return void 0 === t && (t = -1),
                    function(e) {
                        return 0 === t ? Gt() : t < 0 ? e.lift(new oi(-1,e)) : e.lift(new oi(t - 1,e))
                    }
                },
                repeatWhen: function(t) {
                    return function(e) {
                        return e.lift(new ui(t))
                    }
                },
                retry: function(t) {
                    return void 0 === t && (t = -1),
                    function(e) {
                        return e.lift(new ci(t,e))
                    }
                },
                retryWhen: function(t) {
                    return function(e) {
                        return e.lift(new hi(t,e))
                    }
                },
                refCount: Tt,
                sample: function(t) {
                    return function(e) {
                        return e.lift(new di(t))
                    }
                },
                sampleTime: function(t, e) {
                    return void 0 === e && (e = me),
                    function(n) {
                        return n.lift(new bi(t,e))
                    }
                },
                scan: Kr,
                sequenceEqual: function(t, e) {
                    return function(n) {
                        return n.lift(new yi(t,e))
                    }
                },
                share: function() {
                    return function(t) {
                        return Tt()(Qr(_i)(t))
                    }
                },
                shareReplay: function(t, e, n) {
                    var r;
                    return r = t && "object" == typeof t ? t : {
                        bufferSize: t,
                        windowTime: e,
                        refCount: !1,
                        scheduler: n
                    },
                    function(t) {
                        return t.lift(function(t) {
                            var e, n, r = t.bufferSize, i = void 0 === r ? Number.POSITIVE_INFINITY : r, o = t.windowTime, s = void 0 === o ? Number.POSITIVE_INFINITY : o, u = t.refCount, a = t.scheduler, c = 0, l = !1, h = !1;
                            return function(t) {
                                c++,
                                e && !l || (l = !1,
                                e = new ae(i,s,a),
                                n = t.subscribe({
                                    next: function(t) {
                                        e.next(t)
                                    },
                                    error: function(t) {
                                        l = !0,
                                        e.error(t)
                                    },
                                    complete: function() {
                                        h = !0,
                                        n = void 0,
                                        e.complete()
                                    }
                                }));
                                var r = e.subscribe(this);
                                this.add((function() {
                                    c--,
                                    r.unsubscribe(),
                                    n && !h && u && 0 === c && (n.unsubscribe(),
                                    n = void 0,
                                    e = void 0)
                                }
                                ))
                            }
                        }(r))
                    }
                },
                single: function(t) {
                    return function(e) {
                        return e.lift(new ki(t,e))
                    }
                },
                skip: function(t) {
                    return function(e) {
                        return e.lift(new Si(t))
                    }
                },
                skipLast: function(t) {
                    return function(e) {
                        return e.lift(new Ei(t))
                    }
                },
                skipUntil: function(t) {
                    return function(e) {
                        return e.lift(new ji(t))
                    }
                },
                skipWhile: function(t) {
                    return function(e) {
                        return e.lift(new Ni(t))
                    }
                },
                startWith: function() {
                    for (var t = [], e = 0; e < arguments.length; e++)
                        t[e] = arguments[e];
                    var n = t[t.length - 1];
                    return Yt(n) ? (t.pop(),
                    function(e) {
                        return Ze(t, e, n)
                    }
                    ) : function(e) {
                        return Ze(t, e)
                    }
                },
                subscribeOn: function(t, e) {
                    return void 0 === e && (e = 0),
                    function(n) {
                        return n.lift(new Ai(t,e))
                    }
                },
                switchAll: function() {
                    return Pi(_t)
                },
                switchMap: Pi,
                switchMapTo: function(t, e) {
                    return e ? Pi((function() {
                        return t
                    }
                    ), e) : Pi((function() {
                        return t
                    }
                    ))
                },
                take: wr,
                takeLast: Fr,
                takeUntil: function(t) {
                    return function(e) {
                        return e.lift(new Li(t))
                    }
                },
                takeWhile: function(t, e) {
                    return void 0 === e && (e = !1),
                    function(n) {
                        return n.lift(new Fi(t,e))
                    }
                },
                tap: function(t, e, n) {
                    return function(r) {
                        return r.lift(new qi(t,e,n))
                    }
                },
                throttle: function(t, e) {
                    return void 0 === e && (e = Vi),
                    function(n) {
                        return n.lift(new Hi(t,e.leading,e.trailing))
                    }
                },
                throttleTime: function(t, e, n) {
                    return void 0 === e && (e = me),
                    void 0 === n && (n = Vi),
                    function(r) {
                        return r.lift(new Ki(t,e,n.leading,n.trailing))
                    }
                },
                throwIfEmpty: vr,
                timeInterval: function(t) {
                    return void 0 === t && (t = me),
                    function(e) {
                        return Qe((function() {
                            return e.pipe(Kr((function(e, n) {
                                var r = e.current;
                                return {
                                    value: n,
                                    current: t.now(),
                                    last: r
                                }
                            }
                            ), {
                                current: t.now(),
                                value: void 0,
                                last: void 0
                            }), Ee((function(t) {
                                var e = t.current
                                  , n = t.last
                                  , r = t.value;
                                return new Gi(r,e - n)
                            }
                            )))
                        }
                        ))
                    }
                },
                timeout: function(t, e) {
                    return void 0 === e && (e = me),
                    Yi(t, ne(new Me), e)
                },
                timeoutWith: Yi,
                timestamp: function(t) {
                    return void 0 === t && (t = me),
                    Ee((function(e) {
                        return new Xi(e,t.now())
                    }
                    ))
                },
                toArray: function() {
                    return Gr(to, [])
                },
                window: function(t) {
                    return function(e) {
                        return e.lift(new eo(t))
                    }
                },
                windowCount: function(t, e) {
                    return void 0 === e && (e = 0),
                    function(n) {
                        return n.lift(new ro(t,e))
                    }
                },
                windowTime: function(t) {
                    var e = me
                      , n = null
                      , r = Number.POSITIVE_INFINITY;
                    return Yt(arguments[3]) && (e = arguments[3]),
                    Yt(arguments[2]) ? e = arguments[2] : en(arguments[2]) && (r = arguments[2]),
                    Yt(arguments[1]) ? e = arguments[1] : en(arguments[1]) && (n = arguments[1]),
                    function(i) {
                        return i.lift(new oo(t,n,r,e))
                    }
                },
                windowToggle: function(t, e) {
                    return function(n) {
                        return n.lift(new wo(t,e))
                    }
                },
                windowWhen: function(t) {
                    return function(e) {
                        return e.lift(new ko(t))
                    }
                },
                withLatestFrom: function() {
                    for (var t = [], e = 0; e < arguments.length; e++)
                        t[e] = arguments[e];
                    return function(e) {
                        var n;
                        "function" == typeof t[t.length - 1] && (n = t.pop());
                        var r = t;
                        return e.lift(new So(r,n))
                    }
                },
                zip: function() {
                    for (var t = [], e = 0; e < arguments.length; e++)
                        t[e] = arguments[e];
                    return function(e) {
                        return e.lift.call(mn.apply(void 0, [e].concat(t)))
                    }
                },
                zipAll: function(t) {
                    return function(e) {
                        return e.lift(new yn(t))
                    }
                }
            }), Oo = {}, jo = [], Co = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
            function No(t, e) {
                for (var n in e)
                    t[n] = e[n];
                return t
            }
            function To(t) {
                var e = t.parentNode;
                e && e.removeChild(t)
            }
            function Io(t, e, n) {
                var r, i = arguments, o = {};
                for (r in e)
                    "key" !== r && "ref" !== r && (o[r] = e[r]);
                if (arguments.length > 3)
                    for (n = [n],
                    r = 3; r < arguments.length; r++)
                        n.push(i[r]);
                if (null != n && (o.children = n),
                "function" == typeof t && null != t.defaultProps)
                    for (r in t.defaultProps)
                        void 0 === o[r] && (o[r] = t.defaultProps[r]);
                return Ao(t, o, e && e.key, e && e.ref, null)
            }
            function Ao(t, e, n, r, i) {
                var o = {
                    type: t,
                    props: e,
                    key: n,
                    ref: r,
                    __k: null,
                    __: null,
                    __b: 0,
                    __e: null,
                    __d: void 0,
                    __c: null,
                    constructor: void 0,
                    __v: i
                };
                return null == i && (o.__v = o),
                ho.vnode && ho.vnode(o),
                o
            }
            function Po(t) {
                return t.children
            }
            function Ro(t, e) {
                this.props = t,
                this.context = e
            }
            function Do(t, e) {
                if (null == e)
                    return t.__ ? Do(t.__, t.__.__k.indexOf(t) + 1) : null;
                for (var n; e < t.__k.length; e++)
                    if (null != (n = t.__k[e]) && null != n.__e)
                        return n.__e;
                return "function" == typeof t.type ? Do(t) : null
            }
            function Lo(t) {
                var e, n;
                if (null != (t = t.__) && null != t.__c) {
                    for (t.__e = t.__c.base = null,
                    e = 0; e < t.__k.length; e++)
                        if (null != (n = t.__k[e]) && null != n.__e) {
                            t.__e = t.__c.base = n.__e;
                            break
                        }
                    return Lo(t)
                }
            }
            function Bo(t) {
                (!t.__d && (t.__d = !0) && po.push(t) && !bo++ || mo !== ho.debounceRendering) && ((mo = ho.debounceRendering) || vo)(Fo)
            }
            function Fo() {
                for (var t; bo = po.length; )
                    t = po.sort((function(t, e) {
                        return t.__v.__b - e.__v.__b
                    }
                    )),
                    po = [],
                    t.some((function(t) {
                        var e, n, r, i, o, s, u;
                        t.__d && (s = (o = (e = t).__v).__e,
                        (u = e.__P) && (n = [],
                        (r = No({}, o)).__v = r,
                        i = zo(u, o, r, e.__n, void 0 !== u.ownerSVGElement, null, n, null == s ? Do(o) : s),
                        Ko(n, o),
                        i != s && Lo(o)))
                    }
                    ))
            }
            function Wo(t, e, n, r, i, o, s, u, a) {
                var c, l, h, f, d, p, b, v = n && n.__k || jo, m = v.length;
                if (u == Oo && (u = null != o ? o[0] : m ? Do(n, 0) : null),
                c = 0,
                e.__k = qo(e.__k, (function(n) {
                    if (null != n) {
                        if (n.__ = e,
                        n.__b = e.__b + 1,
                        null === (h = v[c]) || h && n.key == h.key && n.type === h.type)
                            v[c] = void 0;
                        else
                            for (l = 0; l < m; l++) {
                                if ((h = v[l]) && n.key == h.key && n.type === h.type) {
                                    v[l] = void 0;
                                    break
                                }
                                h = null
                            }
                        if (f = zo(t, n, h = h || Oo, r, i, o, s, u, a),
                        (l = n.ref) && h.ref != l && (b || (b = []),
                        h.ref && b.push(h.ref, null, n),
                        b.push(l, n.__c || f, n)),
                        null != f) {
                            var y;
                            if (null == p && (p = f),
                            void 0 !== n.__d)
                                y = n.__d,
                                n.__d = void 0;
                            else if (o == h || f != u || null == f.parentNode) {
                                t: if (null == u || u.parentNode !== t)
                                    t.appendChild(f),
                                    y = null;
                                else {
                                    for (d = u,
                                    l = 0; (d = d.nextSibling) && l < m; l += 2)
                                        if (d == f)
                                            break t;
                                    t.insertBefore(f, u),
                                    y = u
                                }
                                "option" == e.type && (t.value = "")
                            }
                            u = void 0 !== y ? y : f.nextSibling,
                            "function" == typeof e.type && (e.__d = u)
                        } else
                            u && h.__e == u && u.parentNode != t && (u = Do(h))
                    }
                    return c++,
                    n
                }
                )),
                e.__e = p,
                null != o && "function" != typeof e.type)
                    for (c = o.length; c--; )
                        null != o[c] && To(o[c]);
                for (c = m; c--; )
                    null != v[c] && $o(v[c], v[c]);
                if (b)
                    for (c = 0; c < b.length; c++)
                        Jo(b[c], b[++c], b[++c])
            }
            function qo(t, e, n) {
                if (null == n && (n = []),
                null == t || "boolean" == typeof t)
                    e && n.push(e(null));
                else if (Array.isArray(t))
                    for (var r = 0; r < t.length; r++)
                        qo(t[r], e, n);
                else
                    n.push(e ? e("string" == typeof t || "number" == typeof t ? Ao(null, t, null, null, t) : null != t.__e || null != t.__c ? Ao(t.type, t.props, t.key, null, t.__v) : t) : t);
                return n
            }
            function Uo(t, e, n) {
                "-" === e[0] ? t.setProperty(e, n) : t[e] = "number" == typeof n && !1 === Co.test(e) ? n + "px" : null == n ? "" : n
            }
            function Vo(t, e, n, r, i) {
                var o, s, u, a, c;
                if (i ? "className" === e && (e = "class") : "class" === e && (e = "className"),
                "style" === e)
                    if (o = t.style,
                    "string" == typeof n)
                        o.cssText = n;
                    else {
                        if ("string" == typeof r && (o.cssText = "",
                        r = null),
                        r)
                            for (a in r)
                                n && a in n || Uo(o, a, "");
                        if (n)
                            for (c in n)
                                r && n[c] === r[c] || Uo(o, c, n[c])
                    }
                else
                    "o" === e[0] && "n" === e[1] ? (s = e !== (e = e.replace(/Capture$/, "")),
                    u = e.toLowerCase(),
                    e = (u in t ? u : e).slice(2),
                    n ? (r || t.addEventListener(e, Ho, s),
                    (t.l || (t.l = {}))[e] = n) : t.removeEventListener(e, Ho, s)) : "list" !== e && "tagName" !== e && "form" !== e && "type" !== e && "size" !== e && !i && e in t ? t[e] = null == n ? "" : n : "function" != typeof n && "dangerouslySetInnerHTML" !== e && (e !== (e = e.replace(/^xlink:?/, "")) ? null == n || !1 === n ? t.removeAttributeNS("http://www.w3.org/1999/xlink", e.toLowerCase()) : t.setAttributeNS("http://www.w3.org/1999/xlink", e.toLowerCase(), n) : null == n || !1 === n && !/^ar/.test(e) ? t.removeAttribute(e) : t.setAttribute(e, n))
            }
            function Ho(t) {
                this.l[t.type](ho.event ? ho.event(t) : t)
            }
            function zo(t, e, n, r, i, o, s, u, a) {
                var c, l, h, f, d, p, b, v, m, y, g = e.type;
                if (void 0 !== e.constructor)
                    return null;
                (c = ho.__b) && c(e);
                try {
                    t: if ("function" == typeof g) {
                        if (v = e.props,
                        m = (c = g.contextType) && r[c.__c],
                        y = c ? m ? m.props.value : c.__ : r,
                        n.__c ? b = (l = e.__c = n.__c).__ = l.__E : ("prototype"in g && g.prototype.render ? e.__c = l = new g(v,y) : (e.__c = l = new Ro(v,y),
                        l.constructor = g,
                        l.render = Go),
                        m && m.sub(l),
                        l.props = v,
                        l.state || (l.state = {}),
                        l.context = y,
                        l.__n = r,
                        h = l.__d = !0,
                        l.__h = []),
                        null == l.__s && (l.__s = l.state),
                        null != g.getDerivedStateFromProps && (l.__s == l.state && (l.__s = No({}, l.__s)),
                        No(l.__s, g.getDerivedStateFromProps(v, l.__s))),
                        f = l.props,
                        d = l.state,
                        h)
                            null == g.getDerivedStateFromProps && null != l.componentWillMount && l.componentWillMount(),
                            null != l.componentDidMount && l.__h.push(l.componentDidMount);
                        else {
                            if (null == g.getDerivedStateFromProps && v !== f && null != l.componentWillReceiveProps && l.componentWillReceiveProps(v, y),
                            !l.__e && null != l.shouldComponentUpdate && !1 === l.shouldComponentUpdate(v, l.__s, y) || e.__v === n.__v && !l.__) {
                                for (l.props = v,
                                l.state = l.__s,
                                e.__v !== n.__v && (l.__d = !1),
                                l.__v = e,
                                e.__e = n.__e,
                                e.__k = n.__k,
                                l.__h.length && s.push(l),
                                c = 0; c < e.__k.length; c++)
                                    e.__k[c] && (e.__k[c].__ = e);
                                break t
                            }
                            null != l.componentWillUpdate && l.componentWillUpdate(v, l.__s, y),
                            null != l.componentDidUpdate && l.__h.push((function() {
                                l.componentDidUpdate(f, d, p)
                            }
                            ))
                        }
                        l.context = y,
                        l.props = v,
                        l.state = l.__s,
                        (c = ho.__r) && c(e),
                        l.__d = !1,
                        l.__v = e,
                        l.__P = t,
                        c = l.render(l.props, l.state, l.context),
                        e.__k = null != c && c.type == Po && null == c.key ? c.props.children : Array.isArray(c) ? c : [c],
                        null != l.getChildContext && (r = No(No({}, r), l.getChildContext())),
                        h || null == l.getSnapshotBeforeUpdate || (p = l.getSnapshotBeforeUpdate(f, d)),
                        Wo(t, e, n, r, i, o, s, u, a),
                        l.base = e.__e,
                        l.__h.length && s.push(l),
                        b && (l.__E = l.__ = null),
                        l.__e = !1
                    } else
                        null == o && e.__v === n.__v ? (e.__k = n.__k,
                        e.__e = n.__e) : e.__e = function(t, e, n, r, i, o, s, u) {
                            var a, c, l, h, f, d = n.props, p = e.props;
                            if (i = "svg" === e.type || i,
                            null != o)
                                for (a = 0; a < o.length; a++)
                                    if (null != (c = o[a]) && ((null === e.type ? 3 === c.nodeType : c.localName === e.type) || t == c)) {
                                        t = c,
                                        o[a] = null;
                                        break
                                    }
                            if (null == t) {
                                if (null === e.type)
                                    return document.createTextNode(p);
                                t = i ? document.createElementNS("http://www.w3.org/2000/svg", e.type) : document.createElement(e.type, p.is && {
                                    is: p.is
                                }),
                                o = null,
                                u = !1
                            }
                            if (null === e.type)
                                d !== p && t.data != p && (t.data = p);
                            else {
                                if (null != o && (o = jo.slice.call(t.childNodes)),
                                l = (d = n.props || Oo).dangerouslySetInnerHTML,
                                h = p.dangerouslySetInnerHTML,
                                !u) {
                                    if (d === Oo)
                                        for (d = {},
                                        f = 0; f < t.attributes.length; f++)
                                            d[t.attributes[f].name] = t.attributes[f].value;
                                    (h || l) && (h && l && h.__html == l.__html || (t.innerHTML = h && h.__html || ""))
                                }
                                (function(t, e, n, r, i) {
                                    var o;
                                    for (o in n)
                                        "children" === o || "key" === o || o in e || Vo(t, o, null, n[o], r);
                                    for (o in e)
                                        i && "function" != typeof e[o] || "children" === o || "key" === o || "value" === o || "checked" === o || n[o] === e[o] || Vo(t, o, e[o], n[o], r)
                                }
                                )(t, p, d, i, u),
                                e.__k = e.props.children,
                                h || Wo(t, e, n, r, "foreignObject" !== e.type && i, o, s, Oo, u),
                                u || ("value"in p && void 0 !== p.value && p.value !== t.value && (t.value = null == p.value ? "" : p.value),
                                "checked"in p && void 0 !== p.checked && p.checked !== t.checked && (t.checked = p.checked))
                            }
                            return t
                        }(n.__e, e, n, r, i, o, s, a);
                    (c = ho.diffed) && c(e)
                } catch (t) {
                    e.__v = null,
                    ho.__e(t, e, n)
                }
                return e.__e
            }
            function Ko(t, e) {
                ho.__c && ho.__c(e, t),
                t.some((function(e) {
                    try {
                        t = e.__h,
                        e.__h = [],
                        t.some((function(t) {
                            t.call(e)
                        }
                        ))
                    } catch (t) {
                        ho.__e(t, e.__v)
                    }
                }
                ))
            }
            function Jo(t, e, n) {
                try {
                    "function" == typeof t ? t(e) : t.current = e
                } catch (t) {
                    ho.__e(t, n)
                }
            }
            function $o(t, e, n) {
                var r, i, o;
                if (ho.unmount && ho.unmount(t),
                (r = t.ref) && (r.current && r.current !== t.__e || Jo(r, null, e)),
                n || "function" == typeof t.type || (n = null != (i = t.__e)),
                t.__e = t.__d = void 0,
                null != (r = t.__c)) {
                    if (r.componentWillUnmount)
                        try {
                            r.componentWillUnmount()
                        } catch (t) {
                            ho.__e(t, e)
                        }
                    r.base = r.__P = null
                }
                if (r = t.__k)
                    for (o = 0; o < r.length; o++)
                        r[o] && $o(r[o], e, n);
                null != i && To(i)
            }
            function Go(t, e, n) {
                return this.constructor(t, n)
            }
            function Yo(t, e, n) {
                var r, i, o;
                ho.__ && ho.__(t, e),
                i = (r = n === yo) ? null : n && n.__k || e.__k,
                t = Io(Po, null, [t]),
                o = [],
                zo(e, (r ? e : n || e).__k = t, i || Oo, Oo, void 0 !== e.ownerSVGElement, n && !r ? [n] : i ? null : jo.slice.call(e.childNodes), o, n || Oo, r),
                Ko(o, t)
            }
            ho = {
                __e: function(t, e) {
                    for (var n, r; e = e.__; )
                        if ((n = e.__c) && !n.__)
                            try {
                                if (n.constructor && null != n.constructor.getDerivedStateFromError && (r = !0,
                                n.setState(n.constructor.getDerivedStateFromError(t))),
                                null != n.componentDidCatch && (r = !0,
                                n.componentDidCatch(t)),
                                r)
                                    return Bo(n.__E = n)
                            } catch (e) {
                                t = e
                            }
                    throw t
                }
            },
            fo = function(t) {
                return null != t && void 0 === t.constructor
            }
            ,
            Ro.prototype.setState = function(t, e) {
                var n;
                n = this.__s !== this.state ? this.__s : this.__s = No({}, this.state),
                "function" == typeof t && (t = t(n, this.props)),
                t && No(n, t),
                null != t && this.__v && (e && this.__h.push(e),
                Bo(this))
            }
            ,
            Ro.prototype.forceUpdate = function(t) {
                this.__v && (this.__e = !0,
                t && this.__h.push(t),
                Bo(this))
            }
            ,
            Ro.prototype.render = Po,
            po = [],
            bo = 0,
            vo = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout,
            yo = Oo,
            go = 0;
            var Zo = Object.freeze({
                __proto__: null,
                render: Yo,
                hydrate: function(t, e) {
                    Yo(t, e, yo)
                },
                createElement: Io,
                h: Io,
                Fragment: Po,
                createRef: function() {
                    return {}
                },
                get isValidElement() {
                    return fo
                },
                Component: Ro,
                cloneElement: function(t, e) {
                    return e = No(No({}, t.props), e),
                    arguments.length > 2 && (e.children = jo.slice.call(arguments, 2)),
                    Ao(t.type, e, e.key || t.key, e.ref || t.ref, null)
                },
                createContext: function(t) {
                    var e = {}
                      , n = {
                        __c: "__cC" + go++,
                        __: t,
                        Consumer: function(t, e) {
                            return t.children(e)
                        },
                        Provider: function(t) {
                            var r, i = this;
                            return this.getChildContext || (r = [],
                            this.getChildContext = function() {
                                return e[n.__c] = i,
                                e
                            }
                            ,
                            this.shouldComponentUpdate = function(t) {
                                i.props.value !== t.value && r.some((function(e) {
                                    e.context = t.value,
                                    Bo(e)
                                }
                                ))
                            }
                            ,
                            this.sub = function(t) {
                                r.push(t);
                                var e = t.componentWillUnmount;
                                t.componentWillUnmount = function() {
                                    r.splice(r.indexOf(t), 1),
                                    e && e.call(t)
                                }
                            }
                            ),
                            t.children
                        }
                    };
                    return n.Consumer.contextType = n,
                    n
                },
                toChildArray: qo,
                _unmount: $o,
                get options() {
                    return ho
                }
            });
            function Qo(t) {
                var e, n, r = "";
                if (t)
                    if ("object" == typeof t)
                        if (Array.isArray(t))
                            for (e = 0; e < t.length; e++)
                                t[e] && (n = Qo(t[e])) && (r && (r += " "),
                                r += n);
                        else
                            for (e in t)
                                t[e] && (n = Qo(e)) && (r && (r += " "),
                                r += n);
                    else
                        "boolean" == typeof t || t.call || (r && (r += " "),
                        r += t);
                return r
            }
            function Xo() {
                for (var t, e = 0, n = ""; e < arguments.length; )
                    (t = Qo(arguments[e++])) && (n && (n += " "),
                    n += t);
                return n
            }
            var ts, es, ns, rs = [], is = ho.__r, os = ho.diffed, ss = ho.__c, us = ho.unmount;
            function as(t) {
                ho.__h && ho.__h(es);
                var e = es.__H || (es.__H = {
                    __: [],
                    __h: []
                });
                return t >= e.__.length && e.__.push({}),
                e.__[t]
            }
            function cs(t) {
                return ls(ms, t)
            }
            function ls(t, e, n) {
                var r = as(ts++);
                return r.__c || (r.__c = es,
                r.__ = [n ? n(e) : ms(void 0, e), function(e) {
                    var n = t(r.__[0], e);
                    r.__[0] !== n && (r.__[0] = n,
                    r.__c.setState({}))
                }
                ]),
                r.__
            }
            function hs(t, e) {
                var n = as(ts++);
                vs(n.__H, e) && (n.__ = t,
                n.__H = e,
                es.__h.push(n))
            }
            function fs(t, e) {
                var n = as(ts++);
                return vs(n.__H, e) ? (n.__H = e,
                n.__h = t,
                n.__ = t()) : n.__
            }
            function ds() {
                rs.some((function(t) {
                    if (t.__P)
                        try {
                            t.__H.__h.forEach(ps),
                            t.__H.__h.forEach(bs),
                            t.__H.__h = []
                        } catch (e) {
                            return t.__H.__h = [],
                            ho.__e(e, t.__v),
                            !0
                        }
                }
                )),
                rs = []
            }
            function ps(t) {
                t.t && t.t()
            }
            function bs(t) {
                var e = t.__();
                "function" == typeof e && (t.t = e)
            }
            function vs(t, e) {
                return !t || e.some((function(e, n) {
                    return e !== t[n]
                }
                ))
            }
            function ms(t, e) {
                return "function" == typeof e ? e(t) : e
            }
            ho.__r = function(t) {
                is && is(t),
                ts = 0,
                (es = t.__c).__H && (es.__H.__h.forEach(ps),
                es.__H.__h.forEach(bs),
                es.__H.__h = [])
            }
            ,
            ho.diffed = function(t) {
                os && os(t);
                var e = t.__c;
                if (e) {
                    var n = e.__H;
                    n && n.__h.length && (1 !== rs.push(e) && ns === ho.requestAnimationFrame || ((ns = ho.requestAnimationFrame) || function(t) {
                        var e, n = function() {
                            clearTimeout(r),
                            cancelAnimationFrame(e),
                            setTimeout(t)
                        }, r = setTimeout(n, 100);
                        "undefined" != typeof window && (e = requestAnimationFrame(n))
                    }
                    )(ds))
                }
            }
            ,
            ho.__c = function(t, e) {
                e.some((function(t) {
                    try {
                        t.__h.forEach(ps),
                        t.__h = t.__h.filter((function(t) {
                            return !t.__ || bs(t)
                        }
                        ))
                    } catch (n) {
                        e.some((function(t) {
                            t.__h && (t.__h = [])
                        }
                        )),
                        e = [],
                        ho.__e(n, t.__v)
                    }
                }
                )),
                ss && ss(t, e)
            }
            ,
            ho.unmount = function(t) {
                us && us(t);
                var e = t.__c;
                if (e) {
                    var n = e.__H;
                    if (n)
                        try {
                            n.__.forEach((function(t) {
                                return t.t && t.t()
                            }
                            ))
                        } catch (t) {
                            ho.__e(t, e.__v)
                        }
                }
            }
            ;
            var ys = Object.freeze({
                __proto__: null,
                useState: cs,
                useReducer: ls,
                useEffect: function(t, e) {
                    var n = as(ts++);
                    vs(n.__H, e) && (n.__ = t,
                    n.__H = e,
                    es.__H.__h.push(n))
                },
                useLayoutEffect: hs,
                useRef: function(t) {
                    return fs((function() {
                        return {
                            current: t
                        }
                    }
                    ), [])
                },
                useImperativeHandle: function(t, e, n) {
                    hs((function() {
                        "function" == typeof t ? t(e()) : t && (t.current = e())
                    }
                    ), null == n ? n : n.concat(t))
                },
                useMemo: fs,
                useCallback: function(t, e) {
                    return fs((function() {
                        return t
                    }
                    ), e)
                },
                useContext: function(t) {
                    var e = es.context[t.__c];
                    if (!e)
                        return t.__;
                    var n = as(ts++);
                    return null == n.__ && (n.__ = !0,
                    e.sub(es)),
                    e.props.value
                },
                useDebugValue: function(t, e) {
                    ho.useDebugValue && ho.useDebugValue(e ? e(t) : t)
                },
                useErrorBoundary: function(t) {
                    var e = as(ts++)
                      , n = cs();
                    return e.__ = t,
                    es.componentDidCatch || (es.componentDidCatch = function(t) {
                        e.__ && e.__(t),
                        n[1](t)
                    }
                    ),
                    [n[0], function() {
                        n[1](void 0)
                    }
                    ]
                }
            })
              , gs = Object(v.g)((function(t, e) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                e.default = '.-walletlink-css-reset .-walletlink-link-dialog{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center}.-walletlink-css-reset .-walletlink-link-dialog-backdrop{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.33);transition:opacity .25s}.-walletlink-css-reset .-walletlink-link-dialog-backdrop-hidden{opacity:0}.-walletlink-css-reset .-walletlink-link-dialog-box{display:flex;position:relative;flex-direction:column;background-color:#f6f6f6;border-radius:16px;box-shadow:0px 16px 24px rgba(0,0,0,.1),0px 0px 8px rgba(0,0,0,.05);transform:scale(1);transition:opacity .25s,transform .25s;overflow:hidden}.-walletlink-css-reset .-walletlink-link-dialog-box-hidden{opacity:0;transform:scale(0.85)}.-walletlink-css-reset .-walletlink-link-dialog-box-content{padding:24px;text-align:center}.-walletlink-css-reset .-walletlink-link-dialog-box-content h3{display:block;margin-bottom:24px;text-align:left;text-transform:uppercase;font-size:22px;font-weight:bold;line-height:1.2;color:#000}.-walletlink-css-reset .-walletlink-link-dialog-box-content-qrcode{position:relative;display:block;margin-bottom:24px;background-color:#f6f6f6;padding:16px;border-radius:16px;box-shadow:4px 4px 8px rgba(0,0,0,.15),-8px -8px 8px #fff;overflow:hidden}.-walletlink-css-reset .-walletlink-link-dialog-box-content-qrcode-wrapper{display:block;width:232px;height:232px;padding:4px;border-radius:4px;background:#f4f4f4;margin-bottom:16px}.-walletlink-css-reset .-walletlink-link-dialog-box-content-qrcode-wrapper img{display:block;width:224px;height:224px}.-walletlink-css-reset .-walletlink-link-dialog-box-content-qrcode>p{display:block;color:gray;font-weight:bold;font-size:12px;text-align:center}.-walletlink-css-reset .-walletlink-link-dialog-box-content-qrcode-connecting{position:absolute;top:0;left:0;right:0;bottom:0;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(246,246,246,.98)}.-walletlink-css-reset .-walletlink-link-dialog-box-content-qrcode-connecting p{margin-top:16px;color:#333;font-size:12px;font-weight:bold}.-walletlink-css-reset .-walletlink-link-dialog-box-content a{text-align:center;cursor:pointer;transition:color .1s;font-size:14px}.-walletlink-css-reset .-walletlink-link-dialog-box-content a,.-walletlink-css-reset .-walletlink-link-dialog-box-content a:link,.-walletlink-css-reset .-walletlink-link-dialog-box-content a:visited{color:#999}.-walletlink-css-reset .-walletlink-link-dialog-box-content a:hover,.-walletlink-css-reset .-walletlink-link-dialog-box-content a:active{color:#666;text-decoration:underline}.-walletlink-css-reset .-walletlink-link-dialog-box-cancel{position:absolute;-webkit-appearance:none;display:flex;align-items:center;justify-content:center;top:24px;right:24px;width:24px;height:24px;border-radius:12px;background-color:#e7e7e7;cursor:pointer}.-walletlink-css-reset .-walletlink-link-dialog-box-cancel-x{position:relative;display:block}.-walletlink-css-reset .-walletlink-link-dialog-box-cancel-x::before,.-walletlink-css-reset .-walletlink-link-dialog-box-cancel-x::after{content:"";position:absolute;display:block;top:-1px;left:-7px;width:14px;height:2px;background-color:#999;transition:background-color .2s}.-walletlink-css-reset .-walletlink-link-dialog-box-cancel-x::before{transform:rotate(45deg)}.-walletlink-css-reset .-walletlink-link-dialog-box-cancel-x::after{transform:rotate(135deg)}.-walletlink-css-reset .-walletlink-link-dialog-box-cancel:hover .-walletlink-link-dialog-box-cancel-x-a,.-walletlink-css-reset .-walletlink-link-dialog-box-cancel:hover .-walletlink-link-dialog-box-cancel-x-b{background-color:#000}.-walletlink-css-reset .-walletlink-link-dialog-container{display:block}.-walletlink-css-reset .-walletlink-link-dialog-container-hidden{display:none}.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box{background-color:#2a2a2a}.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-content h3{color:#ccc}.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-content-qrcode{background-color:#2a2a2a;box-shadow:4px 4px 8px rgba(0,0,0,.5),-8px -8px 8px #343434}.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-content-qrcode>p{color:#999}.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-content-qrcode-connecting{background:rgba(42,42,42,.98)}.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-content-qrcode-connecting p{color:#ddd}.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-content a,.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-content a:link,.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-content a:visited{color:#888}.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-content a:hover,.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-content a:active{color:#aaa}.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-cancel{background-color:#333}.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-cancel-x::before,.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-cancel-x::after{background-color:#aaa}.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-cancel:hover .-walletlink-link-dialog-box-cancel-x::before,.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-cancel:hover .-walletlink-link-dialog-box-cancel-x::after{background-color:#eee}'
            }
            ));
            function ws(t) {
                this.mode = ks.MODE_8BIT_BYTE,
                this.data = t,
                this.parsedData = [];
                for (var e = 0, n = this.data.length; e < n; e++) {
                    var r = []
                      , i = this.data.charCodeAt(e);
                    i > 65536 ? (r[0] = 240 | (1835008 & i) >>> 18,
                    r[1] = 128 | (258048 & i) >>> 12,
                    r[2] = 128 | (4032 & i) >>> 6,
                    r[3] = 128 | 63 & i) : i > 2048 ? (r[0] = 224 | (61440 & i) >>> 12,
                    r[1] = 128 | (4032 & i) >>> 6,
                    r[2] = 128 | 63 & i) : i > 128 ? (r[0] = 192 | (1984 & i) >>> 6,
                    r[1] = 128 | 63 & i) : r[0] = i,
                    this.parsedData.push(r)
                }
                this.parsedData = Array.prototype.concat.apply([], this.parsedData),
                this.parsedData.length != this.data.length && (this.parsedData.unshift(191),
                this.parsedData.unshift(187),
                this.parsedData.unshift(239))
            }
            function _s(t, e) {
                this.typeNumber = t,
                this.errorCorrectLevel = e,
                this.modules = null,
                this.moduleCount = 0,
                this.dataCache = null,
                this.dataList = []
            }
            Object(v.h)(gs),
            ws.prototype = {
                getLength: function(t) {
                    return this.parsedData.length
                },
                write: function(t) {
                    for (var e = 0, n = this.parsedData.length; e < n; e++)
                        t.put(this.parsedData[e], 8)
                }
            },
            _s.prototype = {
                addData: function(t) {
                    var e = new ws(t);
                    this.dataList.push(e),
                    this.dataCache = null
                },
                isDark: function(t, e) {
                    if (t < 0 || this.moduleCount <= t || e < 0 || this.moduleCount <= e)
                        throw new Error(t + "," + e);
                    return this.modules[t][e]
                },
                getModuleCount: function() {
                    return this.moduleCount
                },
                make: function() {
                    this.makeImpl(!1, this.getBestMaskPattern())
                },
                makeImpl: function(t, e) {
                    this.moduleCount = 4 * this.typeNumber + 17,
                    this.modules = new Array(this.moduleCount);
                    for (var n = 0; n < this.moduleCount; n++) {
                        this.modules[n] = new Array(this.moduleCount);
                        for (var r = 0; r < this.moduleCount; r++)
                            this.modules[n][r] = null
                    }
                    this.setupPositionProbePattern(0, 0),
                    this.setupPositionProbePattern(this.moduleCount - 7, 0),
                    this.setupPositionProbePattern(0, this.moduleCount - 7),
                    this.setupPositionAdjustPattern(),
                    this.setupTimingPattern(),
                    this.setupTypeInfo(t, e),
                    this.typeNumber >= 7 && this.setupTypeNumber(t),
                    null == this.dataCache && (this.dataCache = _s.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)),
                    this.mapData(this.dataCache, e)
                },
                setupPositionProbePattern: function(t, e) {
                    for (var n = -1; n <= 7; n++)
                        if (!(t + n <= -1 || this.moduleCount <= t + n))
                            for (var r = -1; r <= 7; r++)
                                e + r <= -1 || this.moduleCount <= e + r || (this.modules[t + n][e + r] = 0 <= n && n <= 6 && (0 == r || 6 == r) || 0 <= r && r <= 6 && (0 == n || 6 == n) || 2 <= n && n <= 4 && 2 <= r && r <= 4)
                },
                getBestMaskPattern: function() {
                    for (var t = 0, e = 0, n = 0; n < 8; n++) {
                        this.makeImpl(!0, n);
                        var r = xs.getLostPoint(this);
                        (0 == n || t > r) && (t = r,
                        e = n)
                    }
                    return e
                },
                createMovieClip: function(t, e, n) {
                    var r = t.createEmptyMovieClip(e, n);
                    this.make();
                    for (var i = 0; i < this.modules.length; i++)
                        for (var o = 1 * i, s = 0; s < this.modules[i].length; s++) {
                            var u = 1 * s;
                            this.modules[i][s] && (r.beginFill(0, 100),
                            r.moveTo(u, o),
                            r.lineTo(u + 1, o),
                            r.lineTo(u + 1, o + 1),
                            r.lineTo(u, o + 1),
                            r.endFill())
                        }
                    return r
                },
                setupTimingPattern: function() {
                    for (var t = 8; t < this.moduleCount - 8; t++)
                        null == this.modules[t][6] && (this.modules[t][6] = t % 2 == 0);
                    for (var e = 8; e < this.moduleCount - 8; e++)
                        null == this.modules[6][e] && (this.modules[6][e] = e % 2 == 0)
                },
                setupPositionAdjustPattern: function() {
                    for (var t = xs.getPatternPosition(this.typeNumber), e = 0; e < t.length; e++)
                        for (var n = 0; n < t.length; n++) {
                            var r = t[e]
                              , i = t[n];
                            if (null == this.modules[r][i])
                                for (var o = -2; o <= 2; o++)
                                    for (var s = -2; s <= 2; s++)
                                        this.modules[r + o][i + s] = -2 == o || 2 == o || -2 == s || 2 == s || 0 == o && 0 == s
                        }
                },
                setupTypeNumber: function(t) {
                    for (var e = xs.getBCHTypeNumber(this.typeNumber), n = 0; n < 18; n++) {
                        var r = !t && 1 == (e >> n & 1);
                        this.modules[Math.floor(n / 3)][n % 3 + this.moduleCount - 8 - 3] = r
                    }
                    for (n = 0; n < 18; n++)
                        r = !t && 1 == (e >> n & 1),
                        this.modules[n % 3 + this.moduleCount - 8 - 3][Math.floor(n / 3)] = r
                },
                setupTypeInfo: function(t, e) {
                    for (var n = this.errorCorrectLevel << 3 | e, r = xs.getBCHTypeInfo(n), i = 0; i < 15; i++) {
                        var o = !t && 1 == (r >> i & 1);
                        i < 6 ? this.modules[i][8] = o : i < 8 ? this.modules[i + 1][8] = o : this.modules[this.moduleCount - 15 + i][8] = o
                    }
                    for (i = 0; i < 15; i++)
                        o = !t && 1 == (r >> i & 1),
                        i < 8 ? this.modules[8][this.moduleCount - i - 1] = o : i < 9 ? this.modules[8][15 - i - 1 + 1] = o : this.modules[8][15 - i - 1] = o;
                    this.modules[this.moduleCount - 8][8] = !t
                },
                mapData: function(t, e) {
                    for (var n = -1, r = this.moduleCount - 1, i = 7, o = 0, s = this.moduleCount - 1; s > 0; s -= 2)
                        for (6 == s && s--; ; ) {
                            for (var u = 0; u < 2; u++)
                                if (null == this.modules[r][s - u]) {
                                    var a = !1;
                                    o < t.length && (a = 1 == (t[o] >>> i & 1)),
                                    xs.getMask(e, r, s - u) && (a = !a),
                                    this.modules[r][s - u] = a,
                                    -1 == --i && (o++,
                                    i = 7)
                                }
                            if ((r += n) < 0 || this.moduleCount <= r) {
                                r -= n,
                                n = -n;
                                break
                            }
                        }
                }
            },
            _s.PAD0 = 236,
            _s.PAD1 = 17,
            _s.createData = function(t, e, n) {
                for (var r = Os.getRSBlocks(t, e), i = new js, o = 0; o < n.length; o++) {
                    var s = n[o];
                    i.put(s.mode, 4),
                    i.put(s.getLength(), xs.getLengthInBits(s.mode, t)),
                    s.write(i)
                }
                var u = 0;
                for (o = 0; o < r.length; o++)
                    u += r[o].dataCount;
                if (i.getLengthInBits() > 8 * u)
                    throw new Error("code length overflow. (" + i.getLengthInBits() + ">" + 8 * u + ")");
                for (i.getLengthInBits() + 4 <= 8 * u && i.put(0, 4); i.getLengthInBits() % 8 != 0; )
                    i.putBit(!1);
                for (; !(i.getLengthInBits() >= 8 * u || (i.put(_s.PAD0, 8),
                i.getLengthInBits() >= 8 * u)); )
                    i.put(_s.PAD1, 8);
                return _s.createBytes(i, r)
            }
            ,
            _s.createBytes = function(t, e) {
                for (var n = 0, r = 0, i = 0, o = new Array(e.length), s = new Array(e.length), u = 0; u < e.length; u++) {
                    var a = e[u].dataCount
                      , c = e[u].totalCount - a;
                    r = Math.max(r, a),
                    i = Math.max(i, c),
                    o[u] = new Array(a);
                    for (var l = 0; l < o[u].length; l++)
                        o[u][l] = 255 & t.buffer[l + n];
                    n += a;
                    var h = xs.getErrorCorrectPolynomial(c)
                      , f = new Es(o[u],h.getLength() - 1).mod(h);
                    for (s[u] = new Array(h.getLength() - 1),
                    l = 0; l < s[u].length; l++) {
                        var d = l + f.getLength() - s[u].length;
                        s[u][l] = d >= 0 ? f.get(d) : 0
                    }
                }
                var p = 0;
                for (l = 0; l < e.length; l++)
                    p += e[l].totalCount;
                var b = new Array(p)
                  , v = 0;
                for (l = 0; l < r; l++)
                    for (u = 0; u < e.length; u++)
                        l < o[u].length && (b[v++] = o[u][l]);
                for (l = 0; l < i; l++)
                    for (u = 0; u < e.length; u++)
                        l < s[u].length && (b[v++] = s[u][l]);
                return b
            }
            ;
            for (var ks = {
                MODE_NUMBER: 1,
                MODE_ALPHA_NUM: 2,
                MODE_8BIT_BYTE: 4,
                MODE_KANJI: 8
            }, xs = {
                PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
                G15: 1335,
                G18: 7973,
                G15_MASK: 21522,
                getBCHTypeInfo: function(t) {
                    for (var e = t << 10; xs.getBCHDigit(e) - xs.getBCHDigit(xs.G15) >= 0; )
                        e ^= xs.G15 << xs.getBCHDigit(e) - xs.getBCHDigit(xs.G15);
                    return (t << 10 | e) ^ xs.G15_MASK
                },
                getBCHTypeNumber: function(t) {
                    for (var e = t << 12; xs.getBCHDigit(e) - xs.getBCHDigit(xs.G18) >= 0; )
                        e ^= xs.G18 << xs.getBCHDigit(e) - xs.getBCHDigit(xs.G18);
                    return t << 12 | e
                },
                getBCHDigit: function(t) {
                    for (var e = 0; 0 != t; )
                        e++,
                        t >>>= 1;
                    return e
                },
                getPatternPosition: function(t) {
                    return xs.PATTERN_POSITION_TABLE[t - 1]
                },
                getMask: function(t, e, n) {
                    switch (t) {
                    case 0:
                        return (e + n) % 2 == 0;
                    case 1:
                        return e % 2 == 0;
                    case 2:
                        return n % 3 == 0;
                    case 3:
                        return (e + n) % 3 == 0;
                    case 4:
                        return (Math.floor(e / 2) + Math.floor(n / 3)) % 2 == 0;
                    case 5:
                        return e * n % 2 + e * n % 3 == 0;
                    case 6:
                        return (e * n % 2 + e * n % 3) % 2 == 0;
                    case 7:
                        return (e * n % 3 + (e + n) % 2) % 2 == 0;
                    default:
                        throw new Error("bad maskPattern:" + t)
                    }
                },
                getErrorCorrectPolynomial: function(t) {
                    for (var e = new Es([1],0), n = 0; n < t; n++)
                        e = e.multiply(new Es([1, Ss.gexp(n)],0));
                    return e
                },
                getLengthInBits: function(t, e) {
                    if (1 <= e && e < 10)
                        switch (t) {
                        case ks.MODE_NUMBER:
                            return 10;
                        case ks.MODE_ALPHA_NUM:
                            return 9;
                        case ks.MODE_8BIT_BYTE:
                        case ks.MODE_KANJI:
                            return 8;
                        default:
                            throw new Error("mode:" + t)
                        }
                    else if (e < 27)
                        switch (t) {
                        case ks.MODE_NUMBER:
                            return 12;
                        case ks.MODE_ALPHA_NUM:
                            return 11;
                        case ks.MODE_8BIT_BYTE:
                            return 16;
                        case ks.MODE_KANJI:
                            return 10;
                        default:
                            throw new Error("mode:" + t)
                        }
                    else {
                        if (!(e < 41))
                            throw new Error("type:" + e);
                        switch (t) {
                        case ks.MODE_NUMBER:
                            return 14;
                        case ks.MODE_ALPHA_NUM:
                            return 13;
                        case ks.MODE_8BIT_BYTE:
                            return 16;
                        case ks.MODE_KANJI:
                            return 12;
                        default:
                            throw new Error("mode:" + t)
                        }
                    }
                },
                getLostPoint: function(t) {
                    for (var e = t.getModuleCount(), n = 0, r = 0; r < e; r++)
                        for (var i = 0; i < e; i++) {
                            for (var o = 0, s = t.isDark(r, i), u = -1; u <= 1; u++)
                                if (!(r + u < 0 || e <= r + u))
                                    for (var a = -1; a <= 1; a++)
                                        i + a < 0 || e <= i + a || 0 == u && 0 == a || s == t.isDark(r + u, i + a) && o++;
                            o > 5 && (n += 3 + o - 5)
                        }
                    for (r = 0; r < e - 1; r++)
                        for (i = 0; i < e - 1; i++) {
                            var c = 0;
                            t.isDark(r, i) && c++,
                            t.isDark(r + 1, i) && c++,
                            t.isDark(r, i + 1) && c++,
                            t.isDark(r + 1, i + 1) && c++,
                            0 != c && 4 != c || (n += 3)
                        }
                    for (r = 0; r < e; r++)
                        for (i = 0; i < e - 6; i++)
                            t.isDark(r, i) && !t.isDark(r, i + 1) && t.isDark(r, i + 2) && t.isDark(r, i + 3) && t.isDark(r, i + 4) && !t.isDark(r, i + 5) && t.isDark(r, i + 6) && (n += 40);
                    for (i = 0; i < e; i++)
                        for (r = 0; r < e - 6; r++)
                            t.isDark(r, i) && !t.isDark(r + 1, i) && t.isDark(r + 2, i) && t.isDark(r + 3, i) && t.isDark(r + 4, i) && !t.isDark(r + 5, i) && t.isDark(r + 6, i) && (n += 40);
                    var l = 0;
                    for (i = 0; i < e; i++)
                        for (r = 0; r < e; r++)
                            t.isDark(r, i) && l++;
                    return n + Math.abs(100 * l / e / e - 50) / 5 * 10
                }
            }, Ss = {
                glog: function(t) {
                    if (t < 1)
                        throw new Error("glog(" + t + ")");
                    return Ss.LOG_TABLE[t]
                },
                gexp: function(t) {
                    for (; t < 0; )
                        t += 255;
                    for (; t >= 256; )
                        t -= 255;
                    return Ss.EXP_TABLE[t]
                },
                EXP_TABLE: new Array(256),
                LOG_TABLE: new Array(256)
            }, Ms = 0; Ms < 8; Ms++)
                Ss.EXP_TABLE[Ms] = 1 << Ms;
            for (Ms = 8; Ms < 256; Ms++)
                Ss.EXP_TABLE[Ms] = Ss.EXP_TABLE[Ms - 4] ^ Ss.EXP_TABLE[Ms - 5] ^ Ss.EXP_TABLE[Ms - 6] ^ Ss.EXP_TABLE[Ms - 8];
            for (Ms = 0; Ms < 255; Ms++)
                Ss.LOG_TABLE[Ss.EXP_TABLE[Ms]] = Ms;
            function Es(t, e) {
                if (null == t.length)
                    throw new Error(t.length + "/" + e);
                for (var n = 0; n < t.length && 0 == t[n]; )
                    n++;
                this.num = new Array(t.length - n + e);
                for (var r = 0; r < t.length - n; r++)
                    this.num[r] = t[r + n]
            }
            function Os(t, e) {
                this.totalCount = t,
                this.dataCount = e
            }
            function js() {
                this.buffer = [],
                this.length = 0
            }
            Es.prototype = {
                get: function(t) {
                    return this.num[t]
                },
                getLength: function() {
                    return this.num.length
                },
                multiply: function(t) {
                    for (var e = new Array(this.getLength() + t.getLength() - 1), n = 0; n < this.getLength(); n++)
                        for (var r = 0; r < t.getLength(); r++)
                            e[n + r] ^= Ss.gexp(Ss.glog(this.get(n)) + Ss.glog(t.get(r)));
                    return new Es(e,0)
                },
                mod: function(t) {
                    if (this.getLength() - t.getLength() < 0)
                        return this;
                    for (var e = Ss.glog(this.get(0)) - Ss.glog(t.get(0)), n = new Array(this.getLength()), r = 0; r < this.getLength(); r++)
                        n[r] = this.get(r);
                    for (r = 0; r < t.getLength(); r++)
                        n[r] ^= Ss.gexp(Ss.glog(t.get(r)) + e);
                    return new Es(n,0).mod(t)
                }
            },
            Os.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]],
            Os.getRSBlocks = function(t, e) {
                var n = Os.getRsBlockTable(t, e);
                if (null == n)
                    throw new Error("bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + e);
                for (var r = n.length / 3, i = [], o = 0; o < r; o++)
                    for (var s = n[3 * o + 0], u = n[3 * o + 1], a = n[3 * o + 2], c = 0; c < s; c++)
                        i.push(new Os(u,a));
                return i
            }
            ,
            Os.getRsBlockTable = function(t, e) {
                switch (e) {
                case 1:
                    return Os.RS_BLOCK_TABLE[4 * (t - 1) + 0];
                case 0:
                    return Os.RS_BLOCK_TABLE[4 * (t - 1) + 1];
                case 3:
                    return Os.RS_BLOCK_TABLE[4 * (t - 1) + 2];
                case 2:
                    return Os.RS_BLOCK_TABLE[4 * (t - 1) + 3];
                default:
                    return
                }
            }
            ,
            js.prototype = {
                get: function(t) {
                    var e = Math.floor(t / 8);
                    return 1 == (this.buffer[e] >>> 7 - t % 8 & 1)
                },
                put: function(t, e) {
                    for (var n = 0; n < e; n++)
                        this.putBit(1 == (t >>> e - n - 1 & 1))
                },
                getLengthInBits: function() {
                    return this.length
                },
                putBit: function(t) {
                    var e = Math.floor(this.length / 8);
                    this.buffer.length <= e && this.buffer.push(0),
                    t && (this.buffer[e] |= 128 >>> this.length % 8),
                    this.length++
                }
            };
            var Cs = [[17, 14, 11, 7], [32, 26, 20, 14], [53, 42, 32, 24], [78, 62, 46, 34], [106, 84, 60, 44], [134, 106, 74, 58], [154, 122, 86, 64], [192, 152, 108, 84], [230, 180, 130, 98], [271, 213, 151, 119], [321, 251, 177, 137], [367, 287, 203, 155], [425, 331, 241, 177], [458, 362, 258, 194], [520, 412, 292, 220], [586, 450, 322, 250], [644, 504, 364, 280], [718, 560, 394, 310], [792, 624, 442, 338], [858, 666, 482, 382], [929, 711, 509, 403], [1003, 779, 565, 439], [1091, 857, 611, 461], [1171, 911, 661, 511], [1273, 997, 715, 535], [1367, 1059, 751, 593], [1465, 1125, 805, 625], [1528, 1190, 868, 658], [1628, 1264, 908, 698], [1732, 1370, 982, 742], [1840, 1452, 1030, 790], [1952, 1538, 1112, 842], [2068, 1628, 1168, 898], [2188, 1722, 1228, 958], [2303, 1809, 1283, 983], [2431, 1911, 1351, 1051], [2563, 1989, 1423, 1093], [2699, 2099, 1499, 1139], [2809, 2213, 1579, 1219], [2953, 2331, 1663, 1273]];
            function Ns(t) {
                if (this.options = {
                    padding: 4,
                    width: 256,
                    height: 256,
                    typeNumber: 4,
                    color: "#000000",
                    background: "#ffffff",
                    ecl: "M"
                },
                "string" == typeof t && (t = {
                    content: t
                }),
                t)
                    for (var e in t)
                        this.options[e] = t[e];
                if ("string" != typeof this.options.content)
                    throw new Error("Expected 'content' as string!");
                if (0 === this.options.content.length)
                    throw new Error("Expected 'content' to be non-empty!");
                if (!(this.options.padding >= 0))
                    throw new Error("Expected 'padding' value to be non-negative!");
                if (!(this.options.width > 0 && this.options.height > 0))
                    throw new Error("Expected 'width' or 'height' value to be higher than zero!");
                var n = this.options.content
                  , r = function(t, e) {
                    for (var n = function(t) {
                        var e = encodeURI(t).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
                        return e.length + (e.length != t ? 3 : 0)
                    }(t), r = 1, i = 0, o = 0, s = Cs.length; o <= s; o++) {
                        var u = Cs[o];
                        if (!u)
                            throw new Error("Content too long: expected " + i + " but got " + n);
                        switch (e) {
                        case "L":
                            i = u[0];
                            break;
                        case "M":
                            i = u[1];
                            break;
                        case "Q":
                            i = u[2];
                            break;
                        case "H":
                            i = u[3];
                            break;
                        default:
                            throw new Error("Unknwon error correction level: " + e)
                        }
                        if (n <= i)
                            break;
                        r++
                    }
                    if (r > Cs.length)
                        throw new Error("Content too long");
                    return r
                }(n, this.options.ecl)
                  , i = function(t) {
                    switch (t) {
                    case "L":
                        return 1;
                    case "M":
                        return 0;
                    case "Q":
                        return 3;
                    case "H":
                        return 2;
                    default:
                        throw new Error("Unknwon error correction level: " + t)
                    }
                }(this.options.ecl);
                this.qrcode = new _s(r,i),
                this.qrcode.addData(n),
                this.qrcode.make()
            }
            Ns.prototype.svg = function(t) {
                var e = this.options || {}
                  , n = this.qrcode.modules;
                void 0 === t && (t = {
                    container: e.container || "svg"
                });
                for (var r = void 0 === e.pretty || !!e.pretty, i = r ? "  " : "", o = r ? "\r\n" : "", s = e.width, u = e.height, a = n.length, c = s / (a + 2 * e.padding), l = u / (a + 2 * e.padding), h = void 0 !== e.join && !!e.join, f = void 0 !== e.swap && !!e.swap, d = void 0 === e.xmlDeclaration || !!e.xmlDeclaration, p = void 0 !== e.predefined && !!e.predefined, b = p ? i + '<defs><path id="qrmodule" d="M0 0 h' + l + " v" + c + ' H0 z" style="fill:' + e.color + ';shape-rendering:crispEdges;" /></defs>' + o : "", v = i + '<rect x="0" y="0" width="' + s + '" height="' + u + '" style="fill:' + e.background + ';shape-rendering:crispEdges;"/>' + o, m = "", y = "", g = 0; g < a; g++)
                    for (var w = 0; w < a; w++)
                        if (n[w][g]) {
                            var _ = w * c + e.padding * c
                              , k = g * l + e.padding * l;
                            if (f) {
                                var x = _;
                                _ = k,
                                k = x
                            }
                            if (h) {
                                var S = c + _
                                  , M = l + k;
                                _ = Number.isInteger(_) ? Number(_) : _.toFixed(2),
                                k = Number.isInteger(k) ? Number(k) : k.toFixed(2),
                                S = Number.isInteger(S) ? Number(S) : S.toFixed(2),
                                y += "M" + _ + "," + k + " V" + (M = Number.isInteger(M) ? Number(M) : M.toFixed(2)) + " H" + S + " V" + k + " H" + _ + " Z "
                            } else
                                m += p ? i + '<use x="' + _.toString() + '" y="' + k.toString() + '" href="#qrmodule" />' + o : i + '<rect x="' + _.toString() + '" y="' + k.toString() + '" width="' + c + '" height="' + l + '" style="fill:' + e.color + ';shape-rendering:crispEdges;"/>' + o
                        }
                h && (m = i + '<path x="0" y="0" style="fill:' + e.color + ';shape-rendering:crispEdges;" d="' + y + '" />');
                var E = "";
                switch (t.container) {
                case "svg":
                    d && (E += '<?xml version="1.0" standalone="yes"?>' + o),
                    E += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="' + s + '" height="' + u + '">' + o,
                    E += b + v + m,
                    E += "</svg>";
                    break;
                case "svg-viewbox":
                    d && (E += '<?xml version="1.0" standalone="yes"?>' + o),
                    E += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 ' + s + " " + u + '">' + o,
                    E += b + v + m,
                    E += "</svg>";
                    break;
                case "g":
                    E += '<g width="' + s + '" height="' + u + '">' + o,
                    E += b + v + m,
                    E += "</g>";
                    break;
                default:
                    E += (b + v + m).replace(/^\s+/, "")
                }
                return E
            }
            ;
            var Ts = Ns
              , Is = Object(v.g)((function(e, n) {
                var r = v.i && v.i.__importDefault || function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                ;
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var i = r(Ts);
                n.QRCode = function(e) {
                    var n = ys.useState("")
                      , r = Object(h.a)(n, 2)
                      , o = r[0]
                      , s = r[1];
                    return ys.useEffect((function() {
                        var n, r, o = new i.default({
                            content: e.content,
                            background: e.bgColor || "#ffffff",
                            color: e.fgColor || "#000000",
                            container: "svg",
                            ecl: "M",
                            width: null !== (n = e.width) && void 0 !== n ? n : 256,
                            height: null !== (r = e.height) && void 0 !== r ? r : 256,
                            padding: 0
                        }), u = t.from(o.svg(), "utf8").toString("base64");
                        s("data:image/svg+xml;base64,".concat(u))
                    }
                    )),
                    o ? Zo.h("img", {
                        src: o,
                        alt: "QR Code"
                    }) : null
                }
            }
            ));
            Object(v.h)(Is),
            Is.QRCode;
            var As = Object(v.g)((function(t, e) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                e.default = ".-walletlink-css-reset .-walletlink-spinner{display:inline-block}.-walletlink-css-reset .-walletlink-spinner svg{display:inline-block;animation:2s linear infinite -walletlink-spinner-svg}.-walletlink-css-reset .-walletlink-spinner svg circle{animation:1.9s ease-in-out infinite both -walletlink-spinner-circle;display:block;fill:transparent;stroke-dasharray:283;stroke-dashoffset:280;stroke-linecap:round;stroke-width:10px;transform-origin:50% 50%}@keyframes -walletlink-spinner-svg{0%{transform:rotateZ(0deg)}100%{transform:rotateZ(360deg)}}@keyframes -walletlink-spinner-circle{0%,25%{stroke-dashoffset:280;transform:rotate(0)}50%,75%{stroke-dashoffset:75;transform:rotate(45deg)}100%{stroke-dashoffset:280;transform:rotate(360deg)}}"
            }
            ));
            Object(v.h)(As);
            var Ps = Object(v.g)((function(t, e) {
                var n = v.i && v.i.__importDefault || function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                ;
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var r = n(As);
                e.Spinner = function(t) {
                    var e, n = null !== (e = t.size) && void 0 !== e ? e : 64, i = t.color || "#000";
                    return Zo.h("div", {
                        class: "-walletlink-spinner"
                    }, Zo.h("style", null, r.default), Zo.h("svg", {
                        viewBox: "0 0 100 100",
                        xmlns: "http://www.w3.org/2000/svg",
                        style: {
                            width: n,
                            height: n
                        }
                    }, Zo.h("circle", {
                        style: {
                            cx: 50,
                            cy: 50,
                            r: 45,
                            stroke: i
                        }
                    })))
                }
            }
            ));
            Object(v.h)(Ps),
            Ps.Spinner;
            var Rs = Object(v.g)((function(t, e) {
                var n = v.i && v.i.__importDefault || function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                ;
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var r = n(Xo)
                  , i = n(gs);
                e.LinkDialog = function(t) {
                    var e = ys.useState(!t.isOpen)
                      , n = Object(h.a)(e, 2)
                      , u = n[0]
                      , a = n[1]
                      , c = ys.useState(!t.isOpen)
                      , l = Object(h.a)(c, 2)
                      , f = l[0]
                      , d = l[1];
                    return ys.useEffect((function() {
                        var e = t.isOpen
                          , n = [window.setTimeout((function() {
                            d(!e)
                        }
                        ), 10)];
                        return e ? a(!1) : n.push(window.setTimeout((function() {
                            a(!0)
                        }
                        ), 360)),
                        function() {
                            n.forEach(window.clearTimeout)
                        }
                    }
                    ), [t.isOpen]),
                    Zo.h("div", {
                        class: r.default("-walletlink-link-dialog-container", t.darkMode && "-walletlink-link-dialog-container-dark", u && "-walletlink-link-dialog-container-hidden")
                    }, Zo.h("style", null, i.default), Zo.h("div", {
                        class: r.default("-walletlink-link-dialog-backdrop", f && "-walletlink-link-dialog-backdrop-hidden")
                    }), Zo.h("div", {
                        class: "-walletlink-link-dialog"
                    }, Zo.h("div", {
                        class: r.default("-walletlink-link-dialog-box", f && "-walletlink-link-dialog-box-hidden")
                    }, Zo.h(o, {
                        darkMode: t.darkMode,
                        version: t.version,
                        sessionId: t.sessionId,
                        sessionSecret: t.sessionSecret,
                        walletLinkUrl: t.walletLinkUrl,
                        isConnected: t.isConnected
                    }), t.onCancel && Zo.h(s, {
                        onClick: t.onCancel
                    }))))
                }
                ;
                var o = function(t) {
                    var e = window.encodeURIComponent(t.walletLinkUrl)
                      , n = "".concat(t.walletLinkUrl, "/#/link?id=").concat(t.sessionId, "&secret=").concat(t.sessionSecret, "&server=").concat(e, "&v=1");
                    return Zo.h("div", {
                        class: "-walletlink-link-dialog-box-content"
                    }, Zo.h("h3", null, "Scan to", Zo.h("br", null), " Connect"), Zo.h("div", {
                        class: "-walletlink-link-dialog-box-content-qrcode"
                    }, Zo.h("div", {
                        class: "-walletlink-link-dialog-box-content-qrcode-wrapper"
                    }, Zo.h(Is.QRCode, {
                        content: n,
                        width: 224,
                        height: 224,
                        fgColor: "#000",
                        bgColor: "transparent"
                    })), Zo.h("input", {
                        type: "hidden",
                        value: n
                    }), !t.isConnected && Zo.h("div", {
                        class: "-walletlink-link-dialog-box-content-qrcode-connecting"
                    }, Zo.h(Ps.Spinner, {
                        size: 128,
                        color: t.darkMode ? "#fff" : "#000"
                    }), Zo.h("p", null, "Connecting...")), Zo.h("p", {
                        title: "WalletLink v".concat(t.version)
                    }, "Powered by WalletLink")), Zo.h("a", {
                        href: "".concat(t.walletLinkUrl, "/#/wallets"),
                        target: "_blank",
                        rel: "noopener"
                    }, "Don\u2019t have a wallet app?"))
                }
                  , s = function(t) {
                    return Zo.h("button", {
                        class: "-walletlink-link-dialog-box-cancel",
                        onClick: t.onClick
                    }, Zo.h("div", {
                        class: "-walletlink-link-dialog-box-cancel-x"
                    }))
                }
            }
            ));
            Object(v.h)(Rs),
            Rs.LinkDialog;
            var Ds = Object(v.g)((function(t, e) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                e.LinkFlow = function() {
                    function t(e) {
                        Object(f.a)(this, t),
                        this.subscriptions = new xn.Subscription,
                        this.isConnected = !1,
                        this.isOpen = !1,
                        this.onCancel = null,
                        this.root = null,
                        this.darkMode = e.darkMode,
                        this.version = e.version,
                        this.sessionId = e.sessionId,
                        this.sessionSecret = e.sessionSecret,
                        this.walletLinkUrl = e.walletLinkUrl,
                        this.connected$ = e.connected$
                    }
                    return Object(d.a)(t, [{
                        key: "attach",
                        value: function(t) {
                            var e = this;
                            this.root = document.createElement("div"),
                            this.root.className = "-walletlink-link-flow-root",
                            t.appendChild(this.root),
                            this.render(),
                            this.subscriptions.add(this.connected$.subscribe((function(t) {
                                e.isConnected !== t && (e.isConnected = t,
                                e.render())
                            }
                            )))
                        }
                    }, {
                        key: "detach",
                        value: function() {
                            var t;
                            this.root && (this.subscriptions.unsubscribe(),
                            Zo.render(null, this.root),
                            null === (t = this.root.parentElement) || void 0 === t || t.removeChild(this.root))
                        }
                    }, {
                        key: "open",
                        value: function(t) {
                            this.isOpen = !0,
                            this.onCancel = t.onCancel,
                            this.render()
                        }
                    }, {
                        key: "close",
                        value: function() {
                            this.isOpen = !1,
                            this.onCancel = null,
                            this.render()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            this.root && Zo.render(Zo.h(Rs.LinkDialog, {
                                darkMode: this.darkMode,
                                version: this.version,
                                sessionId: this.sessionId,
                                sessionSecret: this.sessionSecret,
                                walletLinkUrl: this.walletLinkUrl,
                                isOpen: this.isOpen,
                                isConnected: this.isConnected,
                                onCancel: this.onCancel
                            }), this.root)
                        }
                    }]),
                    t
                }()
            }
            ));
            Object(v.h)(Ds),
            Ds.LinkFlow;
            var Ls = Object(v.g)((function(t, e) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                e.default = '.-walletlink-css-reset .-walletlink-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-walletlink-css-reset .-walletlink-snackbar-item{background-color:#fff;border-radius:8px;box-shadow:0px 16px 24px rgba(0,0,0,.06),0px 0px 8px rgba(0,0,0,.04);display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:hidden;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-walletlink-css-reset .-walletlink-snackbar-item-content{align-items:center;cursor:pointer;display:flex;flex-direction:row;justify-content:space-between;padding:8px 8px 8px 16px;user-select:none}.-walletlink-css-reset .-walletlink-snackbar-item-content-message{color:#000;font-size:14px;line-height:1.5}.-walletlink-css-reset .-walletlink-snackbar-item-content-chevron{position:relative;display:block;margin:0 8px;transition:transform .05s}.-walletlink-css-reset .-walletlink-snackbar-item-content-chevron::before{position:relative;top:-2px;content:"";display:block;border-top:2px solid #000;border-left:2px solid #000;width:8px;height:8px;transform:rotate(-135deg)}.-walletlink-css-reset .-walletlink-snackbar-item-progress-bar{display:block;height:2px;position:relative}.-walletlink-css-reset .-walletlink-snackbar-item-progress-bar::before{animation:-walletlink-snackbar-progressbar 2s linear infinite;background-image:linear-gradient(to right, rgba(22, 82, 240, 0) 0%, #1652f0 100%);content:"";height:100%;left:-100%;position:absolute;width:100%}.-walletlink-css-reset .-walletlink-snackbar-item-actions{display:none;flex-direction:column;border-top:1px solid #f5f7f8;padding:2px 16px 8px}.-walletlink-css-reset .-walletlink-snackbar-item-actions-item{margin:8px 0}.-walletlink-css-reset .-walletlink-snackbar-item-actions-item-info{color:#888;font-size:14px;margin:0 8px 0 0}.-walletlink-css-reset .-walletlink-snackbar-item-actions-item-button{-webkit-appearance:none;-webkit-text-fill-color:#1652f0;background:transparent;color:#1652f0;cursor:pointer;display:inline;font-size:14px;margin:0;padding:0;transition:opacity .25s}.-walletlink-css-reset .-walletlink-snackbar-item-actions-item-button:active{opacity:.6}.-walletlink-css-reset .-walletlink-snackbar-item-hidden{opacity:0;text-align:left;transform:translateX(25%)}.-walletlink-css-reset .-walletlink-snackbar-item-expanded .-walletlink-snackbar-item-content-chevron{transform:rotate(180deg)}.-walletlink-css-reset .-walletlink-snackbar-item-expanded .-walletlink-snackbar-item-actions{display:flex}.-walletlink-css-reset .-walletlink-snackbar-container-dark .-walletlink-snackbar-item{background-color:#2a2a2a}.-walletlink-css-reset .-walletlink-snackbar-container-dark .-walletlink-snackbar-item-content-message{color:#999}.-walletlink-css-reset .-walletlink-snackbar-container-dark .-walletlink-snackbar-item-content-chevron::before{border-top:2px solid #ccc;border-left:2px solid #ccc}.-walletlink-css-reset .-walletlink-snackbar-container-dark .-walletlink-snackbar-item-progress-bar::before{animation:-walletlink-snackbar-progressbar-dark 2s linear infinite;background-image:linear-gradient(to right, rgba(69, 120, 255, 0) 0%, #4578ff 100%)}.-walletlink-css-reset .-walletlink-snackbar-container-dark .-walletlink-snackbar-item-actions{border-top:1px solid #343434}.-walletlink-css-reset .-walletlink-snackbar-container-dark .-walletlink-snackbar-item-actions-item-button{-webkit-text-fill-color:#ccc;color:#ccc}@keyframes -walletlink-snackbar-progressbar{0%{left:0;width:0%;background-image:linear-gradient(to right, rgba(22, 82, 240, 0) 0%, #1652f0 100%)}25%{left:0;width:100%}50%{left:100%;width:0%;background-image:linear-gradient(to right, rgba(22, 82, 240, 0) 0%, #1652f0 100%)}50.01%{background-image:linear-gradient(to left, rgba(22, 82, 240, 0) 0%, #1652f0 100%)}75%{left:0;width:100%}100%{left:0;width:0%;background-image:linear-gradient(to left, rgba(22, 82, 240, 0) 0%, #1652f0 100%)}}@keyframes -walletlink-snackbar-progressbar-dark{0%{left:0;width:0%;background-image:linear-gradient(to right, rgba(69, 120, 255, 0) 0%, #4578ff 100%)}25%{left:0;width:100%}50%{left:100%;width:0%;background-image:linear-gradient(to right, rgba(69, 120, 255, 0) 0%, #4578ff 100%)}50.01%{background-image:linear-gradient(to left, rgba(69, 120, 255, 0) 0%, #4578ff 100%)}75%{left:0;width:100%}100%{left:0;width:0%;background-image:linear-gradient(to left, rgba(69, 120, 255, 0) 0%, #4578ff 100%)}}'
            }
            ));
            Object(v.h)(Ls);
            var Bs = Object(v.g)((function(t, e) {
                var n = v.i && v.i.__importDefault || function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                ;
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var r = n(Xo)
                  , i = n(Ls);
                e.Snackbar = function() {
                    function t(e) {
                        Object(f.a)(this, t),
                        this.items = new Map,
                        this.nextItemKey = 0,
                        this.root = null,
                        this.darkMode = e.darkMode
                    }
                    return Object(d.a)(t, [{
                        key: "attach",
                        value: function(t) {
                            this.root = document.createElement("div"),
                            this.root.className = "-walletlink-snackbar-root",
                            t.appendChild(this.root),
                            this.render()
                        }
                    }, {
                        key: "presentItem",
                        value: function(t) {
                            var e = this
                              , n = this.nextItemKey++;
                            return this.items.set(n, t),
                            this.render(),
                            function() {
                                e.items.delete(n),
                                e.render()
                            }
                        }
                    }, {
                        key: "clear",
                        value: function() {
                            this.items.clear(),
                            this.render()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            this.root && Zo.render(Zo.h(o, {
                                darkMode: this.darkMode
                            }, Array.from(this.items.entries()).map((function(t) {
                                var e = Object(h.a)(t, 2)
                                  , n = e[0]
                                  , r = e[1];
                                return Zo.h(s, Object.assign({}, r, {
                                    key: n
                                }))
                            }
                            ))), this.root)
                        }
                    }]),
                    t
                }();
                var o = function(t) {
                    return Zo.h("div", {
                        class: r.default("-walletlink-snackbar-container", t.darkMode && "-walletlink-snackbar-container-dark")
                    }, Zo.h("style", null, i.default), Zo.h("div", {
                        class: "-walletlink-snackbar"
                    }, t.children))
                }
                  , s = function(t) {
                    var e = t.message
                      , n = t.showProgressBar
                      , i = t.actions
                      , o = ys.useState(!0)
                      , s = Object(h.a)(o, 2)
                      , u = s[0]
                      , a = s[1]
                      , c = ys.useState(!1)
                      , l = Object(h.a)(c, 2)
                      , f = l[0]
                      , d = l[1];
                    return ys.useEffect((function() {
                        var t = [window.setTimeout((function() {
                            a(!1)
                        }
                        ), 1), window.setTimeout((function() {
                            d(!0)
                        }
                        ), 1e4)];
                        return function() {
                            t.forEach(window.clearTimeout)
                        }
                    }
                    )),
                    Zo.h("div", {
                        class: r.default("-walletlink-snackbar-item", u && "-walletlink-snackbar-item-hidden", f && "-walletlink-snackbar-item-expanded")
                    }, Zo.h("div", {
                        class: "-walletlink-snackbar-item-content",
                        onClick: function() {
                            d(!f)
                        }
                    }, Zo.h("div", {
                        class: "-walletlink-snackbar-item-content-message"
                    }, e), Zo.h("div", {
                        class: "-walletlink-snackbar-item-content-chevron",
                        title: "Expand"
                    })), n && Zo.h("div", {
                        class: "-walletlink-snackbar-item-progress-bar"
                    }), i && i.length > 0 && Zo.h("div", {
                        class: "-walletlink-snackbar-item-actions"
                    }, i.map((function(t, e) {
                        return Zo.h("div", {
                            class: "-walletlink-snackbar-item-actions-item",
                            key: e
                        }, Zo.h("span", {
                            class: "-walletlink-snackbar-item-actions-item-info"
                        }, t.info), Zo.h("button", {
                            class: "-walletlink-snackbar-item-actions-item-button",
                            onClick: t.onClick
                        }, t.buttonLabel))
                    }
                    ))))
                }
            }
            ));
            Object(v.h)(Bs),
            Bs.Snackbar;
            var Fs = Object(v.g)((function(t, e) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                e.ClientMessageHostSession = function(t) {
                    return Object.assign({
                        type: "HostSession"
                    }, t)
                }
                ,
                e.ClientMessageIsLinked = function(t) {
                    return Object.assign({
                        type: "IsLinked"
                    }, t)
                }
                ,
                e.ClientMessageGetSessionConfig = function(t) {
                    return Object.assign({
                        type: "GetSessionConfig"
                    }, t)
                }
                ,
                e.ClientMessageSetSessionConfig = function(t) {
                    return Object.assign({
                        type: "SetSessionConfig"
                    }, t)
                }
                ,
                e.ClientMessagePublishEvent = function(t) {
                    return Object.assign({
                        type: "PublishEvent"
                    }, t)
                }
            }
            ));
            Object(v.h)(Fs),
            Fs.ClientMessageHostSession,
            Fs.ClientMessageIsLinked,
            Fs.ClientMessageGetSessionConfig,
            Fs.ClientMessageSetSessionConfig,
            Fs.ClientMessagePublishEvent;
            var Ws = Object(v.g)((function(t, e) {
                var n;
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t) {
                    t[t.DISCONNECTED = 0] = "DISCONNECTED",
                    t[t.CONNECTING = 1] = "CONNECTING",
                    t[t.CONNECTED = 2] = "CONNECTED"
                }(n = e.ConnectionState || (e.ConnectionState = {})),
                e.RxWebSocket = function() {
                    function t(e) {
                        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WebSocket;
                        Object(f.a)(this, t),
                        this.WebSocketClass = r,
                        this.webSocket = null,
                        this.connectionStateSubject = new xn.BehaviorSubject(n.DISCONNECTED),
                        this.incomingDataSubject = new xn.Subject,
                        this.url = e.replace(/^http/, "ws")
                    }
                    return Object(d.a)(t, [{
                        key: "connect",
                        value: function() {
                            var t = this;
                            return this.webSocket ? xn.throwError(new Error("webSocket object is not null")) : new xn.Observable((function(e) {
                                var r;
                                try {
                                    t.webSocket = r = new t.WebSocketClass(t.url)
                                } catch (r) {
                                    return void e.error(r)
                                }
                                t.connectionStateSubject.next(n.CONNECTING),
                                r.onclose = function(r) {
                                    t.clearWebSocket(),
                                    e.error(new Error("websocket error ".concat(r.code, ": ").concat(r.reason))),
                                    t.connectionStateSubject.next(n.DISCONNECTED)
                                }
                                ,
                                r.onopen = function(r) {
                                    e.next(),
                                    e.complete(),
                                    t.connectionStateSubject.next(n.CONNECTED)
                                }
                                ,
                                r.onmessage = function(e) {
                                    t.incomingDataSubject.next(e.data)
                                }
                            }
                            )).pipe(Eo.take(1))
                        }
                    }, {
                        key: "disconnect",
                        value: function() {
                            var t = this.webSocket;
                            if (t) {
                                this.clearWebSocket(),
                                this.connectionStateSubject.next(n.DISCONNECTED);
                                try {
                                    t.close()
                                } catch (t) {}
                            }
                        }
                    }, {
                        key: "sendData",
                        value: function(t) {
                            var e = this.webSocket;
                            if (!e)
                                throw new Error("websocket is not connected");
                            e.send(t)
                        }
                    }, {
                        key: "clearWebSocket",
                        value: function() {
                            var t = this.webSocket;
                            t && (this.webSocket = null,
                            t.onclose = null,
                            t.onerror = null,
                            t.onmessage = null,
                            t.onopen = null)
                        }
                    }, {
                        key: "connectionState$",
                        get: function() {
                            return this.connectionStateSubject.asObservable()
                        }
                    }, {
                        key: "incomingData$",
                        get: function() {
                            return this.incomingDataSubject.asObservable()
                        }
                    }, {
                        key: "incomingJSONData$",
                        get: function() {
                            return this.incomingData$.pipe(Eo.flatMap((function(t) {
                                var e;
                                try {
                                    e = JSON.parse(t)
                                } catch (t) {
                                    return xn.empty()
                                }
                                return xn.of(e)
                            }
                            )))
                        }
                    }]),
                    t
                }()
            }
            ));
            Object(v.h)(Ws),
            Ws.ConnectionState,
            Ws.RxWebSocket;
            var qs = Object(v.g)((function(t, e) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                e.isServerMessageFail = function(t) {
                    return t && "Fail" === t.type && "number" == typeof t.id && "string" == typeof t.sessionId && "string" == typeof t.error
                }
            }
            ));
            Object(v.h)(qs),
            qs.isServerMessageFail;
            var Us = Object(v.g)((function(t, e) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                e.WalletLinkConnection = function() {
                    function e(t, n, r) {
                        var i = this
                          , o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : WebSocket;
                        Object(f.a)(this, e),
                        this.sessionId = t,
                        this.sessionKey = n,
                        this.subscriptions = new xn.Subscription,
                        this.destroyed = !1,
                        this.lastHeartbeatResponse = 0,
                        this.nextReqId = E.IntNumber(1),
                        this.connectedSubject = new xn.BehaviorSubject(!1),
                        this.linkedSubject = new xn.BehaviorSubject(!1),
                        this.sessionConfigSubject = new xn.ReplaySubject(1);
                        var s = new Ws.RxWebSocket(r + "/rpc",o);
                        this.ws = s,
                        this.subscriptions.add(s.connectionState$.pipe(Eo.skip(1), Eo.filter((function(t) {
                            return t === Ws.ConnectionState.DISCONNECTED && !i.destroyed
                        }
                        )), Eo.delay(5e3), Eo.filter((function(t) {
                            return !i.destroyed
                        }
                        )), Eo.flatMap((function(t) {
                            return s.connect()
                        }
                        )), Eo.retry()).subscribe()),
                        this.subscriptions.add(s.connectionState$.pipe(Eo.skip(2), Eo.switchMap((function(t) {
                            return xn.iif((function() {
                                return t === Ws.ConnectionState.CONNECTED
                            }
                            ), i.authenticate().pipe(Eo.tap((function(t) {
                                return i.sendIsLinked()
                            }
                            )), Eo.tap((function(t) {
                                return i.sendGetSessionConfig()
                            }
                            )), Eo.map((function(t) {
                                return !0
                            }
                            ))), xn.of(!1))
                        }
                        )), Eo.distinctUntilChanged(), Eo.catchError((function(t) {
                            return xn.of(!1)
                        }
                        ))).subscribe((function(t) {
                            return i.connectedSubject.next(t)
                        }
                        ))),
                        this.subscriptions.add(s.connectionState$.pipe(Eo.skip(1), Eo.switchMap((function(t) {
                            return xn.iif((function() {
                                return t === Ws.ConnectionState.CONNECTED
                            }
                            ), xn.timer(0, 1e4))
                        }
                        ))).subscribe((function(t) {
                            return 0 === t ? i.updateLastHeartbeat() : i.heartbeat()
                        }
                        ))),
                        this.subscriptions.add(s.incomingData$.pipe(Eo.filter((function(t) {
                            return "h" === t
                        }
                        ))).subscribe((function(t) {
                            return i.updateLastHeartbeat()
                        }
                        ))),
                        this.subscriptions.add(s.incomingJSONData$.pipe(Eo.filter((function(t) {
                            return ["IsLinkedOK", "Linked"].includes(t.type)
                        }
                        ))).subscribe((function(t) {
                            var e = t;
                            i.linkedSubject.next(e.linked || e.onlineGuests > 0)
                        }
                        ))),
                        this.subscriptions.add(s.incomingJSONData$.pipe(Eo.filter((function(t) {
                            return ["GetSessionConfigOK", "SessionConfigUpdated"].includes(t.type)
                        }
                        ))).subscribe((function(t) {
                            var e = t;
                            i.sessionConfigSubject.next({
                                webhookId: e.webhookId,
                                webhookUrl: e.webhookUrl,
                                metadata: e.metadata
                            })
                        }
                        )))
                    }
                    return Object(d.a)(e, [{
                        key: "connect",
                        value: function() {
                            if (this.destroyed)
                                throw new Error("instance is destroyed");
                            this.ws.connect().subscribe()
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.subscriptions.unsubscribe(),
                            this.ws.disconnect(),
                            this.destroyed = !0
                        }
                    }, {
                        key: "setSessionMetadata",
                        value: function(t, e) {
                            var n = this
                              , i = Fs.ClientMessageSetSessionConfig({
                                id: E.IntNumber(this.nextReqId++),
                                sessionId: this.sessionId,
                                metadata: Object(r.a)({}, t, e)
                            });
                            return this.onceConnected$.pipe(Eo.flatMap((function(t) {
                                return n.makeRequest(i)
                            }
                            )), Eo.map((function(t) {
                                if (qs.isServerMessageFail(t))
                                    throw new Error(t.error || "failed to set session metadata")
                            }
                            )))
                        }
                    }, {
                        key: "publishEvent",
                        value: function(t, e) {
                            var n = this
                              , r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                              , i = Fs.ClientMessagePublishEvent({
                                id: E.IntNumber(this.nextReqId++),
                                sessionId: this.sessionId,
                                event: t,
                                data: e,
                                callWebhook: r
                            });
                            return this.onceLinked$.pipe(Eo.flatMap((function(t) {
                                return n.makeRequest(i)
                            }
                            )), Eo.map((function(t) {
                                if (qs.isServerMessageFail(t))
                                    throw new Error(t.error || "failed to publish event");
                                return t.eventId
                            }
                            )))
                        }
                    }, {
                        key: "sendData",
                        value: function(t) {
                            this.ws.sendData(JSON.stringify(t))
                        }
                    }, {
                        key: "updateLastHeartbeat",
                        value: function() {
                            this.lastHeartbeatResponse = Date.now()
                        }
                    }, {
                        key: "heartbeat",
                        value: function() {
                            if (Date.now() - this.lastHeartbeatResponse > 2e4)
                                this.ws.disconnect();
                            else
                                try {
                                    this.ws.sendData("h")
                                } catch (t) {}
                        }
                    }, {
                        key: "makeRequest",
                        value: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6e4
                              , n = t.id;
                            try {
                                this.sendData(t)
                            } catch (t) {
                                return xn.throwError(t)
                            }
                            return this.ws.incomingJSONData$.pipe(Eo.timeoutWith(e, xn.throwError(new Error("request ".concat(n, " timed out")))), Eo.filter((function(t) {
                                return t.id === n
                            }
                            )), Eo.take(1))
                        }
                    }, {
                        key: "authenticate",
                        value: function() {
                            var t = Fs.ClientMessageHostSession({
                                id: E.IntNumber(this.nextReqId++),
                                sessionId: this.sessionId,
                                sessionKey: this.sessionKey
                            });
                            return this.makeRequest(t).pipe(Eo.map((function(t) {
                                if (qs.isServerMessageFail(t))
                                    throw new Error(t.error || "failed to authentcate")
                            }
                            )))
                        }
                    }, {
                        key: "sendIsLinked",
                        value: function() {
                            var t = Fs.ClientMessageIsLinked({
                                id: E.IntNumber(this.nextReqId++),
                                sessionId: this.sessionId
                            });
                            this.sendData(t)
                        }
                    }, {
                        key: "sendGetSessionConfig",
                        value: function() {
                            var t = Fs.ClientMessageGetSessionConfig({
                                id: E.IntNumber(this.nextReqId++),
                                sessionId: this.sessionId
                            });
                            this.sendData(t)
                        }
                    }, {
                        key: "connected$",
                        get: function() {
                            return this.connectedSubject.asObservable()
                        }
                    }, {
                        key: "onceConnected$",
                        get: function() {
                            return this.connected$.pipe(Eo.filter((function(t) {
                                return t
                            }
                            )), Eo.take(1), Eo.map((function() {}
                            )))
                        }
                    }, {
                        key: "linked$",
                        get: function() {
                            return this.linkedSubject.asObservable()
                        }
                    }, {
                        key: "onceLinked$",
                        get: function() {
                            return this.linked$.pipe(Eo.filter((function(t) {
                                return t
                            }
                            )), Eo.take(1), Eo.map((function() {}
                            )))
                        }
                    }, {
                        key: "sessionConfig$",
                        get: function() {
                            return this.sessionConfigSubject.asObservable()
                        }
                    }, {
                        key: "incomingEvent$",
                        get: function() {
                            return this.ws.incomingJSONData$.pipe(Eo.filter((function(t) {
                                if ("Event" !== t.type)
                                    return !1;
                                var e = t;
                                return "string" == typeof e.sessionId && "string" == typeof e.eventId && "string" == typeof e.event && "string" == typeof e.data
                            }
                            )), Eo.map((function(t) {
                                return t
                            }
                            )))
                        }
                    }]),
                    e
                }()
            }
            ));
            Object(v.h)(Us),
            Us.WalletLinkConnection;
            var Vs = Object(v.g)((function(t, e) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                e.ScopedLocalStorage = function() {
                    function t(e) {
                        Object(f.a)(this, t),
                        this.scope = e
                    }
                    return Object(d.a)(t, [{
                        key: "setItem",
                        value: function(t, e) {
                            localStorage.setItem(this.scopedKey(t), e)
                        }
                    }, {
                        key: "getItem",
                        value: function(t) {
                            return localStorage.getItem(this.scopedKey(t))
                        }
                    }, {
                        key: "removeItem",
                        value: function(t) {
                            localStorage.removeItem(this.scopedKey(t))
                        }
                    }, {
                        key: "clear",
                        value: function() {
                            for (var t = this.scopedKey(""), e = [], n = 0; n < localStorage.length; n++) {
                                var r = localStorage.key(n);
                                "string" == typeof r && r.startsWith(t) && e.push(r)
                            }
                            e.forEach((function(t) {
                                return localStorage.removeItem(t)
                            }
                            ))
                        }
                    }, {
                        key: "scopedKey",
                        value: function(t) {
                            return "".concat(this.scope, ":").concat(t)
                        }
                    }]),
                    t
                }()
            }
            ));
            Object(v.h)(Vs),
            Vs.ScopedLocalStorage;
            var Hs = Object(v.g)((function(e, n) {
                var r = v.i && v.i.__importDefault || function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                ;
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var i = r(k.a);
                n.encrypt = function(e, n) {
                    var r = i.default.randomBytes(12)
                      , o = i.default.createCipheriv("aes-256-gcm", t.from(n, "hex"), r)
                      , s = t.concat([o.update(t.from(e, "utf8")), o.final()]);
                    return t.concat([r, o.getAuthTag(), s]).toString("hex")
                }
                ,
                n.decrypt = function(e, n) {
                    var r = t.from(e, "hex")
                      , o = r.slice(0, 12)
                      , s = r.slice(12, 28)
                      , u = r.slice(28)
                      , a = i.default.createDecipheriv("aes-256-gcm", t.from(n, "hex"), o);
                    return a.setAuthTag(s),
                    t.concat([a.update(u), a.final()]).toString("utf8")
                }
            }
            ));
            Object(v.h)(Hs),
            Hs.encrypt,
            Hs.decrypt;
            var zs = Object(v.g)((function(t, e) {
                var n = v.i && v.i.__importDefault || function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                ;
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var r = n(k.a)
                  , i = function() {
                    function t(e, n, i, o) {
                        Object(f.a)(this, t),
                        this._storage = e,
                        this._id = n || r.default.randomBytes(16).toString("hex"),
                        this._secret = i || r.default.randomBytes(32).toString("hex"),
                        this._key = r.default.createHash("sha256").update("".concat(this._id, ", ").concat(this._secret, " WalletLink"), "ascii").digest("hex"),
                        this._linked = !!o
                    }
                    return Object(d.a)(t, [{
                        key: "save",
                        value: function() {
                            return this._storage.setItem("session:id", this._id),
                            this._storage.setItem("session:secret", this._secret),
                            this.persistLinked(),
                            this
                        }
                    }, {
                        key: "persistLinked",
                        value: function() {
                            this._storage.setItem("session:linked", this._linked ? "1" : "0")
                        }
                    }, {
                        key: "id",
                        get: function() {
                            return this._id
                        }
                    }, {
                        key: "secret",
                        get: function() {
                            return this._secret
                        }
                    }, {
                        key: "key",
                        get: function() {
                            return this._key
                        }
                    }, {
                        key: "linked",
                        get: function() {
                            return this._linked
                        },
                        set: function(t) {
                            this._linked = t,
                            this.persistLinked()
                        }
                    }], [{
                        key: "load",
                        value: function(e) {
                            var n = e.getItem("session:id")
                              , r = e.getItem("session:linked")
                              , i = e.getItem("session:secret");
                            return n && i ? new t(e,n,i,"1" === r) : null
                        }
                    }, {
                        key: "clear",
                        value: function(t) {
                            t.removeItem("session:secret"),
                            t.removeItem("session:id"),
                            t.removeItem("session:linked")
                        }
                    }, {
                        key: "persistedSessionIdChange$",
                        get: function() {
                            return xn.fromEvent(window, "storage").pipe(Eo.filter((function(t) {
                                return "session:id" === t.key
                            }
                            )), Eo.map((function(t) {
                                return {
                                    oldValue: t.oldValue || null,
                                    newValue: t.newValue || null
                                }
                            }
                            )))
                        }
                    }]),
                    t
                }();
                e.Session = i
            }
            ));
            Object(v.h)(zs),
            zs.Session;
            var Ks = Object(v.g)((function(t, e) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t) {
                    t.requestEthereumAccounts = "requestEthereumAccounts",
                    t.signEthereumMessage = "signEthereumMessage",
                    t.signEthereumTransaction = "signEthereumTransaction",
                    t.submitEthereumTransaction = "submitEthereumTransaction",
                    t.ethereumAddressFromSignedMessage = "ethereumAddressFromSignedMessage",
                    t.scanQRCode = "scanQRCode",
                    t.arbitrary = "arbitrary"
                }(e.Web3Method || (e.Web3Method = {}))
            }
            ));
            Object(v.h)(Ks),
            Ks.Web3Method;
            var Js = Object(v.g)((function(t, e) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t) {
                    t.SESSION_ID_REQUEST = "SESSION_ID_REQUEST",
                    t.SESSION_ID_RESPONSE = "SESSION_ID_RESPONSE",
                    t.LINKED = "LINKED",
                    t.UNLINKED = "UNLINKED",
                    t.WEB3_REQUEST = "WEB3_REQUEST",
                    t.WEB3_REQUEST_CANCELED = "WEB3_REQUEST_CANCELED",
                    t.WEB3_RESPONSE = "WEB3_RESPONSE"
                }(e.RelayMessageType || (e.RelayMessageType = {}))
            }
            ));
            Object(v.h)(Js),
            Js.RelayMessageType;
            var $s = Object(v.g)((function(t, e) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                e.Web3RequestCanceledMessage = function(t) {
                    return {
                        type: Js.RelayMessageType.WEB3_REQUEST_CANCELED,
                        id: t
                    }
                }
            }
            ));
            Object(v.h)($s),
            $s.Web3RequestCanceledMessage;
            var Gs = Object(v.g)((function(t, e) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                e.Web3RequestMessage = function(t) {
                    return Object.assign({
                        type: Js.RelayMessageType.WEB3_REQUEST
                    }, t)
                }
            }
            ));
            Object(v.h)(Gs),
            Gs.Web3RequestMessage;
            var Ys = Object(v.g)((function(t, e) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                e.ErrorResponse = function(t, e) {
                    return {
                        method: t,
                        errorMessage: e
                    }
                }
                ,
                e.RequestEthereumAccountsResponse = function(t) {
                    return {
                        method: Ks.Web3Method.requestEthereumAccounts,
                        result: t
                    }
                }
                ,
                e.isRequestEthereumAccountsResponse = function(t) {
                    return t && t.method === Ks.Web3Method.requestEthereumAccounts
                }
            }
            ));
            Object(v.h)(Ys),
            Ys.ErrorResponse,
            Ys.RequestEthereumAccountsResponse,
            Ys.isRequestEthereumAccountsResponse;
            var Zs = Object(v.g)((function(t, e) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                e.Web3ResponseMessage = function(t) {
                    return Object.assign({
                        type: Js.RelayMessageType.WEB3_RESPONSE
                    }, t)
                }
                ,
                e.isWeb3ResponseMessage = function(t) {
                    return t && t.type === Js.RelayMessageType.WEB3_RESPONSE
                }
            }
            ));
            Object(v.h)(Zs),
            Zs.Web3ResponseMessage,
            Zs.isWeb3ResponseMessage;
            var Qs = Object(v.g)((function(t, e) {
                var n = v.i && v.i.__decorate || function(t, e, n, r) {
                    var i, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                        s = Reflect.decorate(t, e, n, r);
                    else
                        for (var u = t.length - 1; u >= 0; u--)
                            (i = t[u]) && (s = (o < 3 ? i(s) : o > 3 ? i(e, n, s) : i(e, n)) || s);
                    return o > 3 && s && Object.defineProperty(e, n, s),
                    s
                }
                  , r = v.i && v.i.__importDefault || function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                  , i = v.i && v.i.__importStar || function(t) {
                    if (t && t.__esModule)
                        return t;
                    var e = {};
                    if (null != t)
                        for (var n in t)
                            Object.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    return e.default = t,
                    e
                }
                ;
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var o = r(ot)
                  , s = r(k.a)
                  , u = r(S.a)
                  , a = i(Hs)
                  , c = function() {
                    function t(e) {
                        Object(f.a)(this, t),
                        this.appName = "",
                        this.appLogoUrl = null,
                        this.attached = !1,
                        this.walletLinkUrl = e.walletLinkUrl;
                        var n = u.default.parse(this.walletLinkUrl);
                        this.walletLinkOrigin = "".concat(n.protocol, "//").concat(n.host),
                        this.storage = new Vs.ScopedLocalStorage("-walletlink:".concat(this.walletLinkOrigin)),
                        this.session = zs.Session.load(this.storage) || new zs.Session(this.storage).save(),
                        this.connection = new Us.WalletLinkConnection(this.session.id,this.session.key,this.walletLinkUrl),
                        this.connection.incomingEvent$.pipe(Eo.filter((function(t) {
                            return "Web3Response" === t.event
                        }
                        ))).subscribe({
                            next: this.handleIncomingEvent
                        }),
                        this.connection.sessionConfig$.pipe(Eo.filter((function(t) {
                            return !!t.metadata && "1" === t.metadata.__destroyed
                        }
                        ))).subscribe({
                            next: this.resetAndReload
                        }),
                        this.snackbar = new Bs.Snackbar({
                            darkMode: e.darkMode
                        }),
                        this.linkFlow = new Ds.LinkFlow({
                            darkMode: e.darkMode,
                            version: e.version,
                            sessionId: this.session.id,
                            sessionSecret: this.session.secret,
                            walletLinkUrl: this.walletLinkUrl,
                            connected$: this.connection.connected$
                        }),
                        this.connection.connect()
                    }
                    return Object(d.a)(t, [{
                        key: "resetAndReload",
                        value: function() {
                            var t = this;
                            this.connection.setSessionMetadata("__destroyed", "1").pipe(Eo.timeout(1e3), Eo.catchError((function(t) {
                                return xn.of(null)
                            }
                            ))).subscribe((function(e) {
                                t.connection.destroy(),
                                t.storage.clear(),
                                document.location.reload()
                            }
                            ))
                        }
                    }, {
                        key: "setAppInfo",
                        value: function(t, e) {
                            this.appName = t,
                            this.appLogoUrl = e
                        }
                    }, {
                        key: "attach",
                        value: function(t) {
                            if (this.attached)
                                throw new Error("WalletLinkRelay is already attached");
                            var e = document.createElement("div");
                            e.className = "-walletlink-css-reset",
                            t.appendChild(e),
                            this.linkFlow.attach(e),
                            this.snackbar.attach(e)
                        }
                    }, {
                        key: "getStorageItem",
                        value: function(t) {
                            return this.storage.getItem(t)
                        }
                    }, {
                        key: "setStorageItem",
                        value: function(t, e) {
                            this.storage.setItem(t, e)
                        }
                    }, {
                        key: "requestEthereumAccounts",
                        value: function() {
                            return this.sendRequest({
                                method: Ks.Web3Method.requestEthereumAccounts,
                                params: {
                                    appName: this.appName,
                                    appLogoUrl: this.appLogoUrl || null
                                }
                            })
                        }
                    }, {
                        key: "signEthereumMessage",
                        value: function(t, e, n, r) {
                            return this.sendRequest({
                                method: Ks.Web3Method.signEthereumMessage,
                                params: {
                                    message: O.hexStringFromBuffer(t, !0),
                                    address: e,
                                    addPrefix: n,
                                    typedDataJson: r || null
                                }
                            })
                        }
                    }, {
                        key: "ethereumAddressFromSignedMessage",
                        value: function(t, e, n) {
                            return this.sendRequest({
                                method: Ks.Web3Method.ethereumAddressFromSignedMessage,
                                params: {
                                    message: O.hexStringFromBuffer(t, !0),
                                    signature: O.hexStringFromBuffer(e, !0),
                                    addPrefix: n
                                }
                            })
                        }
                    }, {
                        key: "signEthereumTransaction",
                        value: function(t) {
                            return this.sendRequest({
                                method: Ks.Web3Method.signEthereumTransaction,
                                params: {
                                    fromAddress: t.fromAddress,
                                    toAddress: t.toAddress,
                                    weiValue: O.bigIntStringFromBN(t.weiValue),
                                    data: O.hexStringFromBuffer(t.data, !0),
                                    nonce: t.nonce,
                                    gasPriceInWei: t.gasPriceInWei ? O.bigIntStringFromBN(t.gasPriceInWei) : null,
                                    gasLimit: t.gasLimit ? O.bigIntStringFromBN(t.gasLimit) : null,
                                    chainId: t.chainId,
                                    shouldSubmit: !1
                                }
                            })
                        }
                    }, {
                        key: "signAndSubmitEthereumTransaction",
                        value: function(t) {
                            return this.sendRequest({
                                method: Ks.Web3Method.signEthereumTransaction,
                                params: {
                                    fromAddress: t.fromAddress,
                                    toAddress: t.toAddress,
                                    weiValue: O.bigIntStringFromBN(t.weiValue),
                                    data: O.hexStringFromBuffer(t.data, !0),
                                    nonce: t.nonce,
                                    gasPriceInWei: t.gasPriceInWei ? O.bigIntStringFromBN(t.gasPriceInWei) : null,
                                    gasLimit: t.gasLimit ? O.bigIntStringFromBN(t.gasLimit) : null,
                                    chainId: t.chainId,
                                    shouldSubmit: !0
                                }
                            })
                        }
                    }, {
                        key: "submitEthereumTransaction",
                        value: function(t, e) {
                            return this.sendRequest({
                                method: Ks.Web3Method.submitEthereumTransaction,
                                params: {
                                    signedTransaction: O.hexStringFromBuffer(t, !0),
                                    chainId: e
                                }
                            })
                        }
                    }, {
                        key: "scanQRCode",
                        value: function(t) {
                            return this.sendRequest({
                                method: Ks.Web3Method.scanQRCode,
                                params: {
                                    regExp: t
                                }
                            })
                        }
                    }, {
                        key: "arbitraryRequest",
                        value: function(t) {
                            return this.sendRequest({
                                method: Ks.Web3Method.arbitrary,
                                params: {
                                    data: t
                                }
                            })
                        }
                    }, {
                        key: "sendRequest",
                        value: function(e) {
                            var n = this;
                            return new Promise((function(r, i) {
                                var o = null
                                  , u = s.default.randomBytes(8).toString("hex")
                                  , a = function() {
                                    n.publishWeb3RequestCanceledEvent(u),
                                    n.handleWeb3ResponseMessage(Zs.Web3ResponseMessage({
                                        id: u,
                                        response: Ys.ErrorResponse(e.method, "User rejected request")
                                    })),
                                    null == o || o()
                                };
                                if (e.method === Ks.Web3Method.requestEthereumAccounts)
                                    n.linkFlow.open({
                                        onCancel: a
                                    }),
                                    t.accountRequestCallbackIds.add(u);
                                else {
                                    var c = {
                                        message: "Pushed a request to your wallet...",
                                        showProgressBar: !0,
                                        actions: [{
                                            info: "Made a mistake?",
                                            buttonLabel: "Cancel",
                                            onClick: a
                                        }, {
                                            info: "Not receiving requests?",
                                            buttonLabel: "Reset Connection",
                                            onClick: n.resetAndReload
                                        }]
                                    };
                                    o = n.snackbar.presentItem(c)
                                }
                                t.callbacks.set(u, (function(t) {
                                    if (n.linkFlow.close(),
                                    null == o || o(),
                                    t.errorMessage)
                                        return i(new Error(t.errorMessage));
                                    r(t)
                                }
                                )),
                                n.publishWeb3RequestEvent(u, e)
                            }
                            ))
                        }
                    }, {
                        key: "publishWeb3RequestEvent",
                        value: function(t, e) {
                            var n = this
                              , r = Gs.Web3RequestMessage({
                                id: t,
                                request: e
                            });
                            this.publishEvent("Web3Request", r, !0).subscribe({
                                error: function(t) {
                                    n.handleWeb3ResponseMessage(Zs.Web3ResponseMessage({
                                        id: r.id,
                                        response: {
                                            method: r.request.method,
                                            errorMessage: t.message
                                        }
                                    }))
                                }
                            })
                        }
                    }, {
                        key: "publishWeb3RequestCanceledEvent",
                        value: function(t) {
                            var e = $s.Web3RequestCanceledMessage(t);
                            this.publishEvent("Web3RequestCanceled", e, !1).subscribe()
                        }
                    }, {
                        key: "publishEvent",
                        value: function(t, e, n) {
                            var r = a.encrypt(JSON.stringify(Object.assign(Object.assign({}, e), {
                                origin: location.origin
                            })), this.session.secret);
                            return this.connection.publishEvent(t, r, n)
                        }
                    }, {
                        key: "handleIncomingEvent",
                        value: function(t) {
                            var e;
                            try {
                                e = JSON.parse(a.decrypt(t.data, this.session.secret))
                            } catch (t) {
                                return
                            }
                            var n = Zs.isWeb3ResponseMessage(e) ? e : null;
                            n && this.handleWeb3ResponseMessage(n)
                        }
                    }, {
                        key: "handleWeb3ResponseMessage",
                        value: function(e) {
                            var n = this
                              , r = e.response;
                            if (Ys.isRequestEthereumAccountsResponse(r))
                                return Array.from(t.accountRequestCallbackIds.values()).forEach((function(t) {
                                    return n.invokeCallback(Object.assign(Object.assign({}, e), {
                                        id: t
                                    }))
                                }
                                )),
                                void t.accountRequestCallbackIds.clear();
                            this.invokeCallback(e)
                        }
                    }, {
                        key: "invokeCallback",
                        value: function(e) {
                            var n = t.callbacks.get(e.id);
                            n && (n(e.response),
                            t.callbacks.delete(e.id))
                        }
                    }]),
                    t
                }();
                c.callbacks = new Map,
                c.accountRequestCallbackIds = new Set,
                n([o.default], c.prototype, "resetAndReload", null),
                n([o.default], c.prototype, "handleIncomingEvent", null),
                e.WalletLinkRelay = c
            }
            ));
            Object(v.h)(Qs),
            Qs.WalletLinkRelay;
            var Xs = ["cipher", "cipherbrowser", "coinbase", "coinbasewallet", "eth", "ether", "ethereum", "etherium", "injection", "toshi", "wallet", "walletlink", "web3"]
              , tu = "dist/index.js"
              , eu = "https://github.com/walletlink/walletlink.git"
              , nu = {
                tsc: "tsc --noEmit --pretty",
                test: "jest",
                "test:watch": "jest --watch",
                build: "node compile-assets.js && webpack --config webpack.config.js",
                "build-chrome": "webpack --config webpack.config.chrome.js",
                "build-npm": "tsc -p ./tsconfig.build.json",
                "build:dev": "export WALLETLINK_URL='http://localhost:3000'; yarn build && yarn build-chrome",
                "build:dev:watch": "nodemon -e 'ts,tsx,js,json,css,scss,svg' --ignore 'src/**/*-css.ts' --ignore 'src/**/*-svg.ts' --watch src/ --watch chrome/ --exec 'yarn build:dev'",
                "build:prod": "yarn build && yarn build-chrome && yarn build-npm && cp ./package.json ../README.md ../LICENSE build/npm && cp -a src/vendor-js build/npm/dist && sed -i '' 's|  \"private\": true,||g' build/npm/package.json",
                lint: "tslint -p . 'src/**/*.ts{,x}'",
                "lint:watch": "nodemon -e ts,tsx,js,json,css,scss,svg --watch src/ --exec 'yarn tsc && yarn lint'"
            }
              , ru = {
                "bind-decorator": "^1.0.11",
                "bn.js": "^5.1.1",
                clsx: "^1.1.0",
                preact: "^10.3.3",
                rxjs: "^6.5.4"
            }
              , iu = {
                "@types/bn.js": "^4.11.6",
                "@types/jest": "^25.1.3",
                "@types/node": "^13.7.7",
                "copy-webpack-plugin": "^5.1.1",
                "core-js": "^3.6.4",
                glob: "^7.1.6",
                jest: "^25.1.0",
                nodemon: "^2.0.2",
                "raw-loader": "^4.0.0",
                "regenerator-runtime": "^0.13.3",
                "rxjs-tslint": "^0.1.7",
                sass: "^1.26.2",
                svgo: "^1.3.2",
                "ts-jest": "^25.2.1",
                "ts-loader": "^6.2.1",
                tslib: "^1.11.1",
                tslint: "^6.0.0",
                "tslint-config-prettier": "^1.18.0",
                "tslint-config-security": "^1.16.0",
                "tslint-microsoft-contrib": "^6.2.0",
                typescript: "^3.8.3",
                webpack: "^4.42.0",
                "webpack-cli": "^3.3.11",
                "whatwg-fetch": "^3.0.0"
            }
              , ou = {
                node: ">= 10.0.0"
            }
              , su = {
                transform: {
                    "^.+\\.tsx?$": "ts-jest"
                },
                testEnvironment: "node",
                testPathIgnorePatterns: ["<rootDir>/dist/", "<rootDir>/node_modules/"],
                testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
                moduleFileExtensions: ["ts", "js", "json"]
            }
              , uu = {
                name: "walletlink",
                version: "2.0.2",
                description: "WalletLink JavaScript SDK",
                keywords: Xs,
                main: tu,
                types: "dist/index.d.ts",
                repository: eu,
                author: "Coinbase, Inc.",
                license: "Apache-2.0",
                scripts: nu,
                dependencies: ru,
                devDependencies: iu,
                engines: ou,
                jest: su
            }
              , au = Object(v.k)(Object.freeze({
                __proto__: null,
                name: "walletlink",
                version: "2.0.2",
                description: "WalletLink JavaScript SDK",
                keywords: Xs,
                main: tu,
                types: "dist/index.d.ts",
                repository: eu,
                author: "Coinbase, Inc.",
                license: "Apache-2.0",
                scripts: nu,
                dependencies: ru,
                devDependencies: iu,
                engines: ou,
                jest: su,
                default: uu
            }))
              , cu = Object(v.g)((function(t, e) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var n = Object({
                    NODE_ENV: "production",
                    PUBLIC_URL: "https://app.doveswap.finance",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0,
                    FAST_REFRESH: !0,
                    REACT_APP_CHAIN_ID: "56",
                    REACT_APP_NODE_1: "https://bsc-dataseed.binance.org",
                    REACT_APP_NODE_2: "https://bsc-dataseed.binance.org",
                    REACT_APP_NODE_3: "https://bsc-dataseed.binance.org"
                }).WALLETLINK_URL || "https://www.walletlink.org"
                  , r = Object({
                    NODE_ENV: "production",
                    PUBLIC_URL: "https://app.doveswap.finance",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0,
                    FAST_REFRESH: !0,
                    REACT_APP_CHAIN_ID: "56",
                    REACT_APP_NODE_1: "https://bsc-dataseed.binance.org",
                    REACT_APP_NODE_2: "https://bsc-dataseed.binance.org",
                    REACT_APP_NODE_3: "https://bsc-dataseed.binance.org"
                }).WALLETLINK_VERSION || au.version || "unknown"
                  , i = function() {
                    function t(e) {
                        Object(f.a)(this, t),
                        this._appName = "",
                        this._appLogoUrl = null,
                        this._relay = new Qs.WalletLinkRelay({
                            walletLinkUrl: e.walletLinkUrl || n,
                            version: r,
                            darkMode: !!e.darkMode
                        }),
                        this.setAppInfo(e.appName, e.appLogoUrl),
                        this._relay.attach(document.documentElement),
                        it.injectCssReset()
                    }
                    return Object(d.a)(t, [{
                        key: "makeWeb3Provider",
                        value: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                            return new nt.WalletLinkProvider({
                                relay: this._relay,
                                jsonRpcUrl: t,
                                chainId: e
                            })
                        }
                    }, {
                        key: "setAppInfo",
                        value: function(t, e) {
                            this._appName = t || "DApp",
                            this._appLogoUrl = e || O.getFavicon(),
                            this._relay.setAppInfo(this._appName, this._appLogoUrl)
                        }
                    }, {
                        key: "disconnect",
                        value: function() {
                            this._relay.resetAndReload()
                        }
                    }]),
                    t
                }();
                e.WalletLink = i,
                i.VERSION = r
            }
            ));
            Object(v.h)(cu),
            cu.WalletLink;
            var lu = Object(v.g)((function(t, e) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var n = nt;
                e.WalletLinkProvider = n.WalletLinkProvider;
                var r = cu;
                e.WalletLink = r.WalletLink,
                e.default = cu.WalletLink,
                "undefined" != typeof window && (window.WalletLink = cu.WalletLink,
                window.WalletLinkProvider = nt.WalletLinkProvider)
            }
            ))
              , hu = Object(v.h)(lu)
              , fu = lu.WalletLinkProvider
              , du = lu.WalletLink;
            e.default = hu
        }
        .call(this, n(10).Buffer)
    }
}]);
//# sourceMappingURL=19.ef480407.chunk.js.map
