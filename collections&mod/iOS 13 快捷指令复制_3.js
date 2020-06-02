var _0x82e3 = [" ", "", "length", "true", "false", "integer", "array", "<", "></", ">", "g", "/>", "replace", "$1
$2$3", "match", "	", "
", "forEach", "
", "split", "%EF%BF%BC", "parseActions", "getWflowActions", "getDict", "		", "map", "actionsToPlist", "parse", "WFWorkflowActions", "toPlist", "<key>WFWorkflowActions</key>", "<key>WFWorkflowActions</key>
	<array>
", "
	</array>", "@VERITAS@2019", "XML", "undefined", "parseString", "text/xml", "parseFromString", "item", "plist", "getElementsByTagName", "_xml_to_json", "nodeName", "childNodes", "#text", "push", "key", "firstChild", "dict", "string", "date", "real", "data", "_textValue", "text", "textContent", "_parseDate", "exec", "<?xml version="1.0" encoding="UTF-8"?>", "<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">", "xml", "createElement", "version", "1.0", "setAttribute", "appendChild", "0", "getUTCFullYear", "-", "getUTCMonth", "getUTCDate", "T", "getUTCHours", ":", "getUTCMinutes", "getUTCSeconds", "Z", "innerHTML", "[object Object]", "[object Boolean]", "[object Number]", "[object String]", "[object Array]", "call", "toString", "prototype", "%E2%80%AD", "indexOf", "filter", "i", "h", "slice", "concat", "body"];

function e(e, t = _0x82e3[0]) {
    let r = _0x82e3[1];
    if (e[_0x82e3[2]]) {
        r = e[0].toString();
        for (let n = 1; n < e[_0x82e3[2]]; n++) {
            r += (_0x82e3[1] + t + _0x82e3[1] + (e[n]) + _0x82e3[1])
        }
    } else {
        r = _0x82e3[1]
    };
    return r
}

function t(e) {
    const t = [_0x82e3[3], _0x82e3[4], _0x82e3[5], _0x82e3[6]];
    for (let r of t) {
        e = e[_0x82e3[12]](new RegExp((_0x82e3[7] + r + _0x82e3[8] + r + _0x82e3[9]), _0x82e3[10]), (_0x82e3[7] + r + _0x82e3[11]))
    };
    var r = _0x82e3[1];
    var n = /(>)(<)(\/*)/g;
    e = e[_0x82e3[12]](n, _0x82e3[13]);
    var a = 0;
    e[_0x82e3[19]](_0x82e3[18])[_0x82e3[17]]((e) => {
        var t = 0;
        if (e[_0x82e3[14]](/.+<\/\w[^>]*>$/)) {
            t = 0
        } else {
            if (e[_0x82e3[14]](/^<\/\w/)) {
                if (a != 0) {
                    a -= 1
                }
            } else {
                if (e[_0x82e3[14]](/^<\w[^>]*[^\/]>.*$/)) {
                    t = 1
                } else {
                    t = 0
                }
            }
        };
        var n = _0x82e3[1];
        for (var i = 0; i < a - 1; i++) {
            n += _0x82e3[15]
        };
        r += n + e + _0x82e3[16];
        a += t
    });
    return r
}
var r = {};
var n = decodeURI(_0x82e3[20]);
r[_0x82e3[21]] = function(e) {
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
    let r = e[_0x82e3[14]](t[_0x82e3[22]]);
    r = r[1][_0x82e3[14]](t[_0x82e3[23]]);
    return r[_0x82e3[25]]((e) => _0x82e3[24] + e)
};
r[_0x82e3[26]] = function(t, n) {
    let a = r[_0x82e3[27]](t);
    a[_0x82e3[28]] = null;
    let i = r[_0x82e3[29]](a);
    i = i[_0x82e3[12]](_0x82e3[30], (_0x82e3[31] + (e(n, _0x82e3[16])) + _0x82e3[32]));
    return i
};
r[_0x82e3[27]] = function(e) {
    e = e[_0x82e3[12]](new RegExp(n, _0x82e3[10]), _0x82e3[33]);
    try {
        if (typeof Titanium[_0x82e3[34]] != _0x82e3[35]) {
            e = Titanium[_0x82e3[34]][_0x82e3[36]](e)
        }
    } catch (r) {
        var t = new DOMParser;
        e = t[_0x82e3[38]](e, _0x82e3[37])
    };
    var r = this._xml_to_json(e[_0x82e3[41]](_0x82e3[40])[_0x82e3[39]](0));
    return r
};
r[_0x82e3[42]] = function(e) {
    var t = this;
    var n = e;
    var a = n[_0x82e3[43]];
    var i = [];
    for (var o = 0; o < n[_0x82e3[44]][_0x82e3[2]]; ++o) {
        var s = n[_0x82e3[44]][_0x82e3[39]](o);
        if (s[_0x82e3[43]] != _0x82e3[45]) {
            i[_0x82e3[46]](s)
        }
    };
    switch (a) {
        case _0x82e3[40]:
            if (i[_0x82e3[2]] > 1) {
                var c = [];
                for (var o = 0; o < i[_0x82e3[2]]; ++o) {
                    c[_0x82e3[46]](t._xml_to_json(i[o]))
                };
                return c
            } else {
                return t._xml_to_json(i[0])
            };
            break;
        case _0x82e3[49]:
            var l = {};
            var u;
            var d;
            for (var o = 0; o < i[_0x82e3[2]]; ++o) {
                var s = i[o];
                if (s[_0x82e3[43]] == _0x82e3[45]) {} else {
                    if (s[_0x82e3[43]] == _0x82e3[47]) {
                        u = r._textValue(s[_0x82e3[48]])
                    } else {
                        d = t._xml_to_json(s);
                        l[u] = d
                    }
                }
            };
            return l;
        case _0x82e3[6]:
            var p = [];
            for (var o = 0; o < i[_0x82e3[2]]; ++o) {
                var s = i[o];
                p[_0x82e3[46]](t._xml_to_json(s))
            };
            return p;
        case _0x82e3[50]:
            return r._textValue(n);
        case _0x82e3[51]:
            var _0x465fxe = r._parseDate(r._textValue(n));
            return _0x465fxe.toString();
        case _0x82e3[5]:
            return parseInt(r._textValue(n), 10);
        case _0x82e3[52]:
            return parseFloat(r._textValue(n));
        case _0x82e3[53]:
            return r._textValue(n);
        case _0x82e3[3]:
            return true;
        case _0x82e3[4]:
            return false;
        case _0x82e3[45]:
            break
    }
};
r[_0x82e3[54]] = function(e) {
    if (e[_0x82e3[55]]) {
        return e[_0x82e3[55]]
    } else {
        return e[_0x82e3[56]]
    }
};
r[_0x82e3[57]] = function(e) {
    var t = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/;
    var r = t[_0x82e3[58]](e);
    if (r) {
        return new Date(Date.UTC(+r[1], +r[2] - 1, +r[3], +r[4], +r[5], +r[6]))
    }
};
r[_0x82e3[29]] = function(e) {
    var r = _0x82e3[59];
    r += _0x82e3[60];
    var a = document[_0x82e3[62]](_0x82e3[61]);
    var i = document[_0x82e3[62]](_0x82e3[40]);
    i[_0x82e3[65]](_0x82e3[63], _0x82e3[64]);
    a[_0x82e3[66]](i);
    var o = document[_0x82e3[62]](_0x82e3[49]);
    i[_0x82e3[66]](o);
    var s = function(e) {
        function t(e) {
            return e < 10 ? _0x82e3[67] + e : e
        }
        return e[_0x82e3[68]]() + _0x82e3[69] + t(e[_0x82e3[70]]() + 1) + _0x82e3[69] + t(e[_0x82e3[71]]()) + _0x82e3[72] + t(e[_0x82e3[73]]()) + _0x82e3[74] + t(e[_0x82e3[75]]()) + _0x82e3[74] + t(e[_0x82e3[76]]()) + _0x82e3[77]
    };
    var c = function(e, t, r, n = false) {
        for (var a in t) {
            r(e, a, t[a], n)
        }
    };
    var l = function(e, t, r, n = false) {
        if (!n) {
            var a = document[_0x82e3[62]](_0x82e3[47]);
            a[_0x82e3[78]] = t;
            e[_0x82e3[66]](a)
        };
        switch (Object[_0x82e3[86]][_0x82e3[85]][_0x82e3[84]](r)) {
            case _0x82e3[79]:
                if (r instanceof Date) {
                    var i = document[_0x82e3[62]](_0x82e3[51]);
                    i[_0x82e3[78]] = s(r);
                    e[_0x82e3[66]](i)
                } else {
                    var o = document[_0x82e3[62]](_0x82e3[49]);
                    c(o, r, l);
                    e[_0x82e3[66]](o)
                };
                break;
            case _0x82e3[80]:
                var u = document[_0x82e3[62]](r.toString());
                e[_0x82e3[66]](u);
                break;
            case _0x82e3[81]:
                var d = document[_0x82e3[62]](_0x82e3[5]);
                d[_0x82e3[78]] = r;
                e[_0x82e3[66]](d);
                break;
            case _0x82e3[82]:
                var p = document[_0x82e3[62]](_0x82e3[50]);
                p[_0x82e3[78]] = r;
                e[_0x82e3[66]](p);
                break;
            case _0x82e3[83]:
                var _0x465fxe = document[_0x82e3[62]](_0x82e3[6]);
                c(_0x465fxe, r, l, n = true);
                e[_0x82e3[66]](_0x465fxe);
                break
        }
    };
    c(o, e, l);
    return t(r + a[_0x82e3[78]][_0x82e3[12]](new RegExp(_0x82e3[33], _0x82e3[10]), n))
};
let a = 文本;
let i = 词典;
let o = r[_0x82e3[21]](i[_0x82e3[10]]);
let s = decodeURI(_0x82e3[87]);
let c = new RegExp(s, _0x82e3[10]);
let l = [];
for (let e of a) {
    const t = e[_0x82e3[14]](c);
    count = !t ? 0 : t[_0x82e3[2]];
    l[_0x82e3[46]](count - 1)
};
o = o[_0x82e3[89]]((e, t) => l[_0x82e3[88]](t) != -1);
insert_result = i[_0x82e3[90]][_0x82e3[14]](c);
insert_count = !insert_result ? 0 : insert_result[_0x82e3[2]];
insert_position = insert_count - 1;
const u = r[_0x82e3[21]](i[_0x82e3[91]]);
let d = [];
for (let e = 0; e < 2 * u[_0x82e3[2]] + 1; e++) {
    if (e % 2 == 1) {
        d[_0x82e3[46]](u[(e - 1) / 2])
    } else {
        d[_0x82e3[46]](_0x82e3[1])
    }
};
d = d[_0x82e3[92]](0, insert_position)[_0x82e3[93]](o)[_0x82e3[93]](d[_0x82e3[92]](insert_position + 1));
d = d[_0x82e3[89]]((e) => e != _0x82e3[1]);
const p = r[_0x82e3[26]](i[_0x82e3[91]], d);
document[_0x82e3[94]][_0x82e3[78]] = `<xmp>${encodeURI(p)}</xmp>`;