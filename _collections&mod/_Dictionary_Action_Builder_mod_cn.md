# _Dictionary_Action_Builder_mod

## 快捷指令信息

快捷指令：	_Dictionary_Action_Builder_mod
动作数量：	31
文件大小：	18 KB

魔术变量数量 : 16
自定义变量数量 : 5

Glyph 编号 : 59748
Glyph 颜色 : 3679049983

快捷指令类型 : 

WatchKit
ActionExtension

## 内容类型 : 

GenericFile ,String 

## 依赖 :



## URL :



## 注释内容:

```text
- LaunchCutsTags
shortcut
```

## 动作列表 : 

```text
1: 词典
2: 注释 (LaunchCutsTags⏎shortcut)
3: 计数
4: 如果 (101 )
5: 从菜单中选取
6 (5, ): 从菜单中选取 (剪贴板)
7: 从菜单中选取
8 (7, ): 从菜单中选取 (直接生成)
9: 获取剪贴板
10 (7, ): 从菜单中选取 (加外套)
11: 文本 ({☯️💲剪贴板💲☯️})
12 (7, ): 从菜单中选取
13 (5, ): 从菜单中选取 (JSON文件)
14: 获取文件
15: 从输入中获取文本
16 (5, ): 从菜单中选取
17 (4, 101 ): 如果
18: 文本 (☯️💲Workflow Input💲☯️)
19 (4, 101 ): 如果
20: 合并文本
21: 编码 URL
22: 替换文本 (Replace \ with \\, Regex: No, Case Sensitive: Yes)
23: 替换文本 (Replace " with \", Regex: No, Case Sensitive: Yes)
24: 文本 (<pre><script>⏎var buffer = unescape(decodeURIComponent("☯️💲Aktualisierter Text💲☯️"));⏎var mode = 0;⏎var stack = [];⏎var output = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><!DOCTYPE plist PUBLIC \"-//Apple//DTD PLIST 1.0//EN\" \"http://www.apple.com/DTDs/PropertyList-1.0.dtd\"><plist version=\"1.0\"><dict><key>WFWorkflowActions</key><array>";⏎var action = "";⏎var actioncount = 0;⏎var match = [];⏎while (buffer !== "") {⏎    if (mode == 0) {⏎        match = buffer.match(/^[\d\D]*?(([\[\{])[\d\D]*)$/);⏎        buffer = match[1];⏎        var ch1 = match[2];⏎        switch (ch1) {⏎            case "{":⏎                mode = 1;⏎                action = "<dict><key>WFWorkflowActionIdentifier</key><string>is.workflow.actions.dictionary</string><key>WFWorkflowActionParameters</key><dict><key>WFItems</key><dict><key>Value</key><dict><key>WFDictionaryFieldValueItems</key><array>";⏎                break;⏎            case "[":⏎                mode = 2;⏎                action = "<dict><key>WFWorkflowActionIdentifier</key><string>is.workflow.actions.list</string><key>WFWorkflowActionParameters</key><dict><key>WFItems</key><array>";⏎                break;⏎            default:⏎                buffer = "";⏎        }⏎    }⏎    match = buffer.match(/^(.)\s*([\d\D]*)$/);⏎    buffer = match[2];⏎    var ch1 = match[1];⏎    if (ch1 === "]" || ch1 === "}") {⏎        if ((mode == 1 && ch1 === "}") || (mode == 2 && ch1 === "]")) {⏎            if (stack.length == 0) {⏎                output += action + ((mode == 1) ? "</array></dict><key>WFSerializationType</key><string>WFDictionaryFieldValue</string></dict></dict></dict>" : "</array></dict></dict>");⏎                mode = 0;⏎                action = "";⏎                actioncount++;⏎            } else {⏎                action += (mode == 1) ? "</array></dict><key>WFSerializationType</key><string>WFDictionaryFieldValue</string></dict><key>WFSerializationType</key><string>WFDictionaryFieldValue</string></dict></dict>" : "</array><key>WFSerializationType</key><string>WFArrayParameterState</string></dict></dict>";⏎                mode = stack.pop();⏎            }⏎        } else {⏎            buffer = "";⏎        }⏎    } else {⏎        var ch2 = buffer[0];⏎        var key = "";⏎        if (!"]},".includes(ch2)) {⏎            if (mode == 1) {⏎                match = buffer.match(/^"([^"\\]*(?:\\.[^"\\]*)*)"\s*:\s*([\d\D]*)$/);⏎                buffer = match[2];⏎                key = match[1].replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");⏎                key = "<key>WFKey</key><dict><key>Value</key><dict><key>attachmentsByRange</key><dict/><key>string</key><string>" + key + "</string></dict><key>WFSerializationType</key><string>WFTextTokenString</string></dict>";⏎                ch2 = buffer[0];⏎            }⏎            switch (ch2) {⏎                case "[":⏎                case "{":⏎                    stack.push(mode);⏎                    if (ch2 === "{") {⏎                        mode = 1;⏎                        action += "<dict><key>WFItemType</key><integer>1</integer>" + key + "<key>WFValue</key><dict><key>Value</key><dict><key>Value</key><dict><key>WFDictionaryFieldValueItems</key><array>";⏎                    } else {⏎                        mode = 2;⏎                        action += "<dict><key>WFItemType</key><integer>2</integer>" + key + "<key>WFValue</key><dict><key>Value</key><array>";⏎                    }⏎                    break⏎                case "\"":⏎                    match = buffer.match(/^"([^"\\]*(?:\\.[^"\\]*)*)"\s*([\s\S]*)$/);⏎                    buffer = match[2];⏎                    value = match[1].replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");⏎                    action += (mode == 1) ? "<dict><key>WFItemType</key><integer>0</integer>"+key+"<key>WFValue</key><dict><key>Value</key><dict><key>attachmentsByRange</key><dict/><key>string</key><string>"+value+"</string></dict><key>WFSerializationType</key><string>WFTextTokenString</string></dict></dict>" : "<string>"+value+"</string>";⏎                    break;⏎                default:⏎                    match = buffer.match(/^(.+?)\s*([,\]}][\d\D]*)$/);⏎                    buffer = match[2];⏎                    value = match[1];⏎                    if (value === "true") {⏎                        action += "<dict><key>WFItemType</key><integer>4</integer>" + key + "<key>WFValue</key><dict><key>Value</key><true/><key>WFSerializationType</key><string>WFNumberSubstitutableState</string></dict></dict>";⏎                    } else if (value === "false") {⏎                        action += "<dict><key>WFItemType</key><integer>4</integer>" + key + "<key>WFValue</key><dict><key>Value</key><false/><key>WFSerializationType</key><string>WFNumberSubstitutableState</string></dict></dict>";⏎                    } else if (value === "null") {⏎                        action += (mode == 1) ? "<dict><key>WFItemType</key><integer>0</integer>"+key+"<key>WFValue</key><dict><key>Value</key><dict><key>attachmentsByRange</key><dict/><key>string</key><string></string></dict><key>WFSerializationType</key><string>WFTextTokenString</string></dict></dict>" : "<string></string>";⏎                    } else {⏎                        var numStr = parseFloat(value).toString();⏎                        match = numStr.match(/(-?\d+)\.(\d+)/);⏎                        value = match ? parseInt(match[1]+match[2])+"E-"+match[2].length : numStr;⏎                        action += "<dict><key>WFItemType</key><integer>3</integer>" + key + "<key>WFValue</key><dict><key>Value</key><dict><key>attachmentsByRange</key><dict/><key>string</key><string>" + value + "</string></dict><key>WFSerializationType</key><string>WFTextTokenString</string></dict></dict>";⏎                    }⏎            }⏎        }⏎    }⏎}⏎output += "</array><key>WFWorkflowIcon</key><dict><key>WFWorkflowIconStartColor</key><integer>4292093695</integer></dict></dict></plist>"⏎document.write((actioncount > 0) ? encodeURIComponent(output.split("\\\\").map(x => x.replace(/\\t/g,"\t").replace(/\\n/g,"\n").replace(/\\"/g,"\"")).join("\\").replace(/\\\//g,"/")) : "");⏎</script></pre>)
25: Base64 编码 (Encode, Line Breaks None)
26: URL (data:text/html;charset=utf-8;base64,☯️💲Base64 Encoded💲☯️)
27: 编码 URL (Decode)
28: 要求输入 (Q: "Enter Name", Default: "", Ask for )
29: 设定名称 (☯️💲Provided Input💲☯️.shortcut, without File Extension)
30: 获取文件链接
31: 打开 URL
```

