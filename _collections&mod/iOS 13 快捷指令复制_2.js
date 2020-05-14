var _0x450c = ["%EF%BF%BC", "parse", "g", "@VERITAS@2019", "replace", "XML", "parseString", "text/xml", "parseFromString", "item", "plist", "getElementsByTagName", "_xml_to_json", "nodeName", "length", "childNodes", "#text", "push", "key", "firstChild", "dict", "array", "string", "date", "integer", "real", "data", "true", "false", "_textValue", "text", "textContent", "_parseDate", "exec", "%E2%80%AD", "	", "WFWorkflowActions", "is.veritas.actions.spaces", "从菜单中选取", "菜单选项：", "WFMenuItemTitle", "WFWorkflowActionParameters", "", "结束菜单", "WFControlFlowMode", "is.workflow.actions.choosefrommenu", "如果", "否则", "结束如果", "is.workflow.actions.conditional", "为每个项目重复", "结束重复", "is.workflow.actions.repeat.each", "重复", "is.workflow.actions.repeat.count", "WFWorkflowActionIdentifier"];
var e = {},
    t = decodeURI(_0x450c[0]);
e[_0x450c[1]] = function(e) {
    e = e[_0x450c[4]](new RegExp(t, _0x450c[2]), _0x450c[3]);
    try {
        void(0) !== Titanium[_0x450c[5]] && (e = Titanium[_0x450c[5]][_0x450c[6]](e))
    } catch (t) {
        e = (new DOMParser)[_0x450c[8]](e, _0x450c[7])
    };
    return this._xml_to_json(e[_0x450c[11]](_0x450c[10])[_0x450c[9]](0))
}, e[_0x450c[12]] = function(t) {
    for (var r = t, o = r[_0x450c[13]], a = [], s = 0; s < r[_0x450c[15]][_0x450c[14]]; ++s) {
        _0x450c[16] != (_0x5b74xc = r[_0x450c[15]][_0x450c[9]](s))[_0x450c[13]] && a[_0x450c[17]](_0x5b74xc)
    };
    switch (o) {
        case _0x450c[10]:
            if (a[_0x450c[14]] > 1) {
                var n = [];
                for (s = 0; s < a[_0x450c[14]]; ++s) {
                    n[_0x450c[17]](this._xml_to_json(a[s]))
                };
                return n
            };
            return this._xml_to_json(a[0]);
        case _0x450c[20]:
            var i, c, l = {};
            for (s = 0; s < a[_0x450c[14]]; ++s) {
                _0x450c[16] == (_0x5b74xc = a[s])[_0x450c[13]] || (_0x450c[18] == _0x5b74xc[_0x450c[13]] ? i = e._textValue(_0x5b74xc[_0x450c[19]]) : (c = this._xml_to_json(_0x5b74xc), l[i] = c))
            };
            return l;
        case _0x450c[21]:
            var u = [];
            for (s = 0; s < a[_0x450c[14]]; ++s) {
                var _0x5b74xc = a[s];
                u[_0x450c[17]](this._xml_to_json(_0x5b74xc))
            };
            return u;
        case _0x450c[22]:
            return e._textValue(r);
        case _0x450c[23]:
            return e._parseDate(e._textValue(r)).toString();
        case _0x450c[24]:
            return parseInt(e._textValue(r), 10);
        case _0x450c[25]:
            return parseFloat(e._textValue(r));
        case _0x450c[26]:
            return e._textValue(r);
        case _0x450c[27]:
            return !0;
        case _0x450c[28]:
            return !1
    }
}, e[_0x450c[29]] = function(e) {
    return e[_0x450c[30]] ? e[_0x450c[30]] : e[_0x450c[31]]
}, e[_0x450c[32]] = function(e) {
    var t = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/ [_0x450c[33]](e);
    if (t) {
        return new Date(Date.UTC(+t[1], +t[2] - 1, +t[3], +t[4], +t[5], +t[6]))
    }
};
var r = 词典,
    o = map,
    a = decodeURI(_0x450c[34]),
    s = e[_0x450c[1]](r[_0x450c[2]]),
    n = [],
    i = 0,
    c = 0;

function l(e) {
    opt = a;
    for (let e = 0; e < i; e++) {
        opt += _0x450c[35]
    };
    opt += e;
    for (let e = 0; e < c; e++) {
        opt += a
    };
    return opt
}
var u = [];
for (let e = 0; e < 2 * s[_0x450c[36]][_0x450c[14]] + 1; e++) {
    e % 2 == 1 ? u[_0x450c[17]](s[_0x450c[36]][(e - 1) / 2]) : u[_0x450c[17]]({
        WFWorkflowActionIdentifier: _0x450c[37]
    })
};
for (let e of u) {
    switch (e[_0x450c[55]]) {
        case _0x450c[45]:
            switch (e[_0x450c[41]][_0x450c[44]]) {
                case 0:
                    n[_0x450c[17]](l(_0x450c[38])), i += 1;
                    break;
                case 1:
                    i -= 1, n[_0x450c[17]](l((_0x450c[39] + (e[_0x450c[41]][_0x450c[40]]) + _0x450c[42]))), i += 1;
                    break;
                case 2:
                    i -= 1, n[_0x450c[17]](l(_0x450c[43]))
            };
            break;
        case _0x450c[49]:
            switch (e[_0x450c[41]][_0x450c[44]]) {
                case 0:
                    n[_0x450c[17]](l(_0x450c[46])), i += 1;
                    break;
                case 1:
                    i -= 1, n[_0x450c[17]](l(_0x450c[47])), i += 1;
                    break;
                case 2:
                    i -= 1, n[_0x450c[17]](l(_0x450c[48]))
            };
            break;
        case _0x450c[52]:
            switch (e[_0x450c[41]][_0x450c[44]]) {
                case 0:
                    n[_0x450c[17]](l(_0x450c[50])), i += 1;
                    break;
                case 2:
                    i -= 1, n[_0x450c[17]](l(_0x450c[51]))
            };
            break;
        case _0x450c[54]:
            switch (e[_0x450c[41]][_0x450c[44]]) {
                case 0:
                    n[_0x450c[17]](l(_0x450c[53])), i += 1;
                    break;
                case 2:
                    i -= 1, n[_0x450c[17]](l(_0x450c[51]))
            };
            break;
        case _0x450c[37]:
            n[_0x450c[17]](l(_0x450c[42]));
            break;
        default:
            n[_0x450c[17]](l(o[e[_0x450c[55]]]))
    };
    c += 1
};
completion({
    actions: n
})