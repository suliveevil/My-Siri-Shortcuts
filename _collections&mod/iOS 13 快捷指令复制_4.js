var _0xb0bd = [" ", "", "length", "true", "false", "integer", "array", "<", "></", ">", "g", "/>", "replace", "$1
$2$3", "match", "	", "
", "forEach", "
", "split", "%EF%BF%BC", "parseActions", "getWflowActions", "getDict", "		", "map", "actionsToPlist", "parse", "WFWorkflowActions", "toPlist", "<key>WFWorkflowActions</key>", "<key>WFWorkflowActions</key>
	<array>
", "
	</array>", "@VERITAS@2019", "XML", "undefined", "parseString", "text/xml", "parseFromString", "item", "plist", "getElementsByTagName", "_xml_to_json", "nodeName", "childNodes", "#text", "push", "key", "firstChild", "dict", "string", "date", "real", "data", "_textValue", "text", "textContent", "_parseDate", "exec", "<?xml version="1.0" encoding="UTF-8"?>", "<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">", "xml", "createElement", "version", "1.0", "setAttribute", "appendChild", "0", "getUTCFullYear", "-", "getUTCMonth", "getUTCDate", "T", "getUTCHours", ":", "getUTCMinutes", "getUTCSeconds", "Z", "innerHTML", "[object Object]", "[object Boolean]", "[object Number]", "[object String]", "[object Array]", "call", "toString", "prototype", "%E2%80%AD", "indexOf", "filter", "body"];

function e(e, t = _0xb0bd[0]) {
    let r = _0xb0bd[1];
    if (e[_0xb0bd[2]]) {
        r = e[0].toString();
        for (let n = 1; n < e[_0xb0bd[2]]; n++) {
            r += (_0xb0bd[1] + t + _0xb0bd[1] + (e[n]) + _0xb0bd[1])
        }
    } else {
        r = _0xb0bd[1]
    };
    return r
}

function t(e) {
    const t = [_0xb0bd[3], _0xb0bd[4], _0xb0bd[5], _0xb0bd[6]];
    for (let r of t) {
        e = e[_0xb0bd[12]](new RegExp((_0xb0bd[7] + r + _0xb0bd[8] + r + _0xb0bd[9]), _0xb0bd[10]), (_0xb0bd[7] + r + _0xb0bd[11]))
    };
    var r = _0xb0bd[1];
    var n = /(>)(<)(\/*)/g;
    e = e[_0xb0bd[12]](n, _0xb0bd[13]);
    var a = 0;
    e[_0xb0bd[19]](_0xb0bd[18])[_0xb0bd[17]]((e) => {
        var t = 0;
        if (e[_0xb0bd[14]](/.+<\/\w[^>]*>$/)) {
            t = 0
        } else {
            if (e[_0xb0bd[14]](/^<\/\w/)) {
                if (a != 0) {
                    a -= 1
                }
            } else {
                if (e[_0xb0bd[14]](/^<\w[^>]*[^\/]>.*$/)) {
                    t = 1
                } else {
                    t = 0
                }
            }
        };
        var n = _0xb0bd[1];
        for (var o = 0; o < a - 1; o++) {
            n += _0xb0bd[15]
        };
        r += n + e + _0xb0bd[16];
        a += t
    });
    return r
}
var r = {};
var n = decodeURI(_0xb0bd[20]);
r[_0xb0bd[21]] = function(e) {
    const t = {
        getIndex: /^(\d+)(?:\s*-\s*(\d+))?/,
        getDict: /<dict>[\s\S]*?(?:\r\n|\r|\n)\t\t<\/dict>/g,
        getWflowActions: /<key>WFWorkflowActions<\/key>(?:\r\n|\r|\n)\t<array>(?:\r\n|\r|\n)\t\t([\s\S]*?)(?:\r\n|\r|\n)\t<\/array>(?:\r\n|\r|\n)/,
        hasSelection: /^\d/m,
        getPlist: {
            start: /^[\s\S]*?(?:\r\n|\r|\n)\t<array>/,
            end: /(?:\r\n|\r|\n)\t<\/array>[\s\S]*$/
        }
    };
    let r = e[_0xb0bd[14]](t[_0xb0bd[22]]);
    r = r[1][_0xb0bd[14]](t[_0xb0bd[23]]);
    return r[_0xb0bd[25]]((e) => _0xb0bd[24] + e)
};
r[_0xb0bd[26]] = function(t, n) {
    const a = r[_0xb0bd[27]](t);
    a[_0xb0bd[28]] = null;
    let o = r[_0xb0bd[29]](a);
    o = o[_0xb0bd[12]](_0xb0bd[30], (_0xb0bd[31] + (e(n, _0xb0bd[16])) + _0xb0bd[32]));
    return o
};
r[_0xb0bd[27]] = function(e) {
    e = e[_0xb0bd[12]](new RegExp(n, _0xb0bd[10]), _0xb0bd[33]);
    try {
        if (typeof Titanium[_0xb0bd[34]] != _0xb0bd[35]) {
            e = Titanium[_0xb0bd[34]][_0xb0bd[36]](e)
        }
    } catch (r) {
        var t = new DOMParser;
        e = t[_0xb0bd[38]](e, _0xb0bd[37])
    };
    var r = this._xml_to_json(e[_0xb0bd[41]](_0xb0bd[40])[_0xb0bd[39]](0));
    return r
};
r[_0xb0bd[42]] = function(e) {
    var t = this;
    var n = e;
    var a = n[_0xb0bd[43]];
    var o = [];
    for (var c = 0; c < n[_0xb0bd[44]][_0xb0bd[2]]; ++c) {
        var i = n[_0xb0bd[44]][_0xb0bd[39]](c);
        if (i[_0xb0bd[43]] != _0xb0bd[45]) {
            o[_0xb0bd[46]](i)
        }
    };
    switch (a) {
        case _0xb0bd[40]:
            if (o[_0xb0bd[2]] > 1) {
                var l = [];
                for (var c = 0; c < o[_0xb0bd[2]]; ++c) {
                    l[_0xb0bd[46]](t._xml_to_json(o[c]))
                };
                return l
            } else {
                return t._xml_to_json(o[0])
            };
            break;
        case _0xb0bd[49]:
            var s = {};
            var u;
            var _0x13c6xc;
            for (var c = 0; c < o[_0xb0bd[2]]; ++c) {
                var i = o[c];
                if (i[_0xb0bd[43]] == _0xb0bd[45]) {} else {
                    if (i[_0xb0bd[43]] == _0xb0bd[47]) {
                        u = r._textValue(i[_0xb0bd[48]])
                    } else {
                        _0x13c6xc = t._xml_to_json(i);
                        s[u] = _0x13c6xc
                    }
                }
            };
            return s;
        case _0xb0bd[6]:
            var _0x13c6xd = [];
            for (var c = 0; c < o[_0xb0bd[2]]; ++c) {
                var i = o[c];
                _0x13c6xd[_0xb0bd[46]](t._xml_to_json(i))
            };
            return _0x13c6xd;
        case _0xb0bd[50]:
            return r._textValue(n);
        case _0xb0bd[51]:
            var _0x13c6xe = r._parseDate(r._textValue(n));
            return _0x13c6xe.toString();
        case _0xb0bd[5]:
            return parseInt(r._textValue(n), 10);
        case _0xb0bd[52]:
            return parseFloat(r._textValue(n));
        case _0xb0bd[53]:
            return r._textValue(n);
        case _0xb0bd[3]:
            return true;
        case _0xb0bd[4]:
            return false;
        case _0xb0bd[45]:
            break
    }
};
r[_0xb0bd[54]] = function(e) {
    if (e[_0xb0bd[55]]) {
        return e[_0xb0bd[55]]
    } else {
        return e[_0xb0bd[56]]
    }
};
r[_0xb0bd[57]] = function(e) {
    var t = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/;
    var r = t[_0xb0bd[58]](e);
    if (r) {
        return new Date(Date.UTC(+r[1], +r[2] - 1, +r[3], +r[4], +r[5], +r[6]))
    }
};
r[_0xb0bd[29]] = function(e) {
    var r = _0xb0bd[59];
    r += _0xb0bd[60];
    var a = document[_0xb0bd[62]](_0xb0bd[61]);
    var o = document[_0xb0bd[62]](_0xb0bd[40]);
    o[_0xb0bd[65]](_0xb0bd[63], _0xb0bd[64]);
    a[_0xb0bd[66]](o);
    var c = document[_0xb0bd[62]](_0xb0bd[49]);
    o[_0xb0bd[66]](c);
    var i = function(e) {
        function t(e) {
            return e < 10 ? _0xb0bd[67] + e : e
        }
        return e[_0xb0bd[68]]() + _0xb0bd[69] + t(e[_0xb0bd[70]]() + 1) + _0xb0bd[69] + t(e[_0xb0bd[71]]()) + _0xb0bd[72] + t(e[_0xb0bd[73]]()) + _0xb0bd[74] + t(e[_0xb0bd[75]]()) + _0xb0bd[74] + t(e[_0xb0bd[76]]()) + _0xb0bd[77]
    };
    var l = function(e, t, r, n = false) {
        for (var a in t) {
            r(e, a, t[a], n)
        }
    };
    var s = function(e, t, r, n = false) {
        if (!n) {
            var a = document[_0xb0bd[62]](_0xb0bd[47]);
            a[_0xb0bd[78]] = t;
            e[_0xb0bd[66]](a)
        };
        switch (Object[_0xb0bd[86]][_0xb0bd[85]][_0xb0bd[84]](r)) {
            case _0xb0bd[79]:
                if (r instanceof Date) {
                    var o = document[_0xb0bd[62]](_0xb0bd[51]);
                    o[_0xb0bd[78]] = i(r);
                    e[_0xb0bd[66]](o)
                } else {
                    var c = document[_0xb0bd[62]](_0xb0bd[49]);
                    l(c, r, s);
                    e[_0xb0bd[66]](c)
                };
                break;
            case _0xb0bd[80]:
                var u = document[_0xb0bd[62]](r.toString());
                e[_0xb0bd[66]](u);
                break;
            case _0xb0bd[81]:
                var _0x13c6xc = document[_0xb0bd[62]](_0xb0bd[5]);
                _0x13c6xc[_0xb0bd[78]] = r;
                e[_0xb0bd[66]](_0x13c6xc);
                break;
            case _0xb0bd[82]:
                var _0x13c6xd = document[_0xb0bd[62]](_0xb0bd[50]);
                _0x13c6xd[_0xb0bd[78]] = r;
                e[_0xb0bd[66]](_0x13c6xd);
                break;
            case _0xb0bd[83]:
                var _0x13c6xe = document[_0xb0bd[62]](_0xb0bd[6]);
                l(_0x13c6xe, r, s, n = true);
                e[_0xb0bd[66]](_0x13c6xe);
                break
        }
    };
    l(c, e, s);
    return t(r + a[_0xb0bd[78]][_0xb0bd[12]](new RegExp(_0xb0bd[33], _0xb0bd[10]), n))
};
var a = 文本;
var o = 词典;
var c = r[_0xb0bd[21]](o[_0xb0bd[10]]);
var i = decodeURI(_0xb0bd[87]);
var l = new RegExp(i, _0xb0bd[10]);
var s = [];
for (let e of a) {
    result = e[_0xb0bd[14]](l);
    count = !result ? 0 : result[_0xb0bd[2]];
    s[_0xb0bd[46]](count - 1)
};
c = c[_0xb0bd[89]]((e, t) => s[_0xb0bd[88]](t) != -1);
var u = r[_0xb0bd[26]](o[_0xb0bd[10]], c);
document[_0xb0bd[90]][_0xb0bd[78]] = `<xmp>${encodeURI(u)}</xmp>`;