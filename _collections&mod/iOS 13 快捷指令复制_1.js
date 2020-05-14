var _0x87ed = ["%EF%BF%BC", "parse", "g", "@VERITAS@2019", "replace", "XML", "parseString", "text/xml", "parseFromString", "item", "plist", "getElementsByTagName", "_xml_to_json", "nodeName", "length", "childNodes", "#text", "push", "key", "firstChild", "dict", "array", "string", "date", "integer", "real", "data", "true", "false", "_textValue", "text", "textContent", "_parseDate", "exec", "%E2%80%AD", "	", "WFWorkflowActions", "从菜单中选取", "菜单选项：", "WFMenuItemTitle", "WFWorkflowActionParameters", "", "结束菜单", "WFControlFlowMode", "is.workflow.actions.choosefrommenu", "如果", "否则", "结束如果", "is.workflow.actions.conditional", "为每个项目重复", "结束重复", "is.workflow.actions.repeat.each", "重复", "is.workflow.actions.repeat.count", "WFWorkflowActionIdentifier"];
var e = {},
    t = decodeURI(_0x87ed[0]);
e[_0x87ed[1]] = function(e) {
    e = e[_0x87ed[4]](new RegExp(t, _0x87ed[2]), _0x87ed[3]);
    try {
        void(0) !== Titanium[_0x87ed[5]] && (e = Titanium[_0x87ed[5]][_0x87ed[6]](e))
    } catch (t) {
        e = (new DOMParser)[_0x87ed[8]](e, _0x87ed[7])
    };
    return this._xml_to_json(e[_0x87ed[11]](_0x87ed[10])[_0x87ed[9]](0))
}, e[_0x87ed[12]] = function(t) {
    for (var r = t, o = r[_0x87ed[13]], a = [], s = 0; s < r[_0x87ed[15]][_0x87ed[14]]; ++s) {
        _0x87ed[16] != (_0xe900xc = r[_0x87ed[15]][_0x87ed[9]](s))[_0x87ed[13]] && a[_0x87ed[17]](_0xe900xc)
    };
    switch (o) {
        case _0x87ed[10]:
            if (a[_0x87ed[14]] > 1) {
                var n = [];
                for (s = 0; s < a[_0x87ed[14]]; ++s) {
                    n[_0x87ed[17]](this._xml_to_json(a[s]))
                };
                return n
            };
            return this._xml_to_json(a[0]);
        case _0x87ed[20]:
            var c, i, l = {};
            for (s = 0; s < a[_0x87ed[14]]; ++s) {
                _0x87ed[16] == (_0xe900xc = a[s])[_0x87ed[13]] || (_0x87ed[18] == _0xe900xc[_0x87ed[13]] ? c = e._textValue(_0xe900xc[_0x87ed[19]]) : (i = this._xml_to_json(_0xe900xc), l[c] = i))
            };
            return l;
        case _0x87ed[21]:
            var _0xe900xb = [];
            for (s = 0; s < a[_0x87ed[14]]; ++s) {
                var _0xe900xc = a[s];
                _0xe900xb[_0x87ed[17]](this._xml_to_json(_0xe900xc))
            };
            return _0xe900xb;
        case _0x87ed[22]:
            return e._textValue(r);
        case _0x87ed[23]:
            return e._parseDate(e._textValue(r)).toString();
        case _0x87ed[24]:
            return parseInt(e._textValue(r), 10);
        case _0x87ed[25]:
            return parseFloat(e._textValue(r));
        case _0x87ed[26]:
            return e._textValue(r);
        case _0x87ed[27]:
            return !0;
        case _0x87ed[28]:
            return !1
    }
}, e[_0x87ed[29]] = function(e) {
    return e[_0x87ed[30]] ? e[_0x87ed[30]] : e[_0x87ed[31]]
}, e[_0x87ed[32]] = function(e) {
    var t = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/ [_0x87ed[33]](e);
    if (t) {
        return new Date(Date.UTC(+t[1], +t[2] - 1, +t[3], +t[4], +t[5], +t[6]))
    }
};
var r = 词典,
    o = map,
    a = decodeURI(_0x87ed[34]),
    s = e[_0x87ed[1]](r[_0x87ed[2]]),
    n = [],
    c = 0,
    i = 0;

function l(e) {
    opt = a;
    for (let e = 0; e < c; e++) {
        opt += _0x87ed[35]
    };
    opt += e;
    for (let e = 0; e < i; e++) {
        opt += a
    };
    return opt
}
for (let e of s[_0x87ed[36]]) {
    switch (e[_0x87ed[54]]) {
        case _0x87ed[44]:
            switch (e[_0x87ed[40]][_0x87ed[43]]) {
                case 0:
                    n[_0x87ed[17]](l(_0x87ed[37])), c += 1;
                    break;
                case 1:
                    c -= 1, n[_0x87ed[17]](l((_0x87ed[38] + (e[_0x87ed[40]][_0x87ed[39]]) + _0x87ed[41]))), c += 1;
                    break;
                case 2:
                    c -= 1, n[_0x87ed[17]](l(_0x87ed[42]))
            };
            break;
        case _0x87ed[48]:
            switch (e[_0x87ed[40]][_0x87ed[43]]) {
                case 0:
                    n[_0x87ed[17]](l(_0x87ed[45])), c += 1;
                    break;
                case 1:
                    c -= 1, n[_0x87ed[17]](l(_0x87ed[46])), c += 1;
                    break;
                case 2:
                    c -= 1, n[_0x87ed[17]](l(_0x87ed[47]))
            };
            break;
        case _0x87ed[51]:
            switch (e[_0x87ed[40]][_0x87ed[43]]) {
                case 0:
                    n[_0x87ed[17]](l(_0x87ed[49])), c += 1;
                    break;
                case 2:
                    c -= 1, n[_0x87ed[17]](l(_0x87ed[50]))
            };
            break;
        case _0x87ed[53]:
            switch (e[_0x87ed[40]][_0x87ed[43]]) {
                case 0:
                    n[_0x87ed[17]](l(_0x87ed[52])), c += 1;
                    break;
                case 2:
                    c -= 1, n[_0x87ed[17]](l(_0x87ed[50]))
            };
            break;
        default:
            n[_0x87ed[17]](l(o[e[_0x87ed[54]]]))
    };
    i += 1
};
completion({
    actions: n
})