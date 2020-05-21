# Dictionary Action Builder.shortcut

## 快捷指令信息

快捷指令：Dictionary Action Builder
动作数量：33
文件大小：19 KB

魔术变量数量：    17
自定义变量数量：4

Glyph 编号 : 59748
Glyph 颜色 : 4292093695

快捷指令类型 : 

WatchKit
ActionExtension
NCWidget

## 依赖 :



## URLs :



## 动作列表 : 

```
1: 注释 (This shortcut supports UpdateHub: https://routinehub.co/shortcut/2066⏎That is, you can check for updates of all UpdateHub-supported shortcuts by manually running the UpdateHub shortcut. Auto update check is also supported.⏎RoutineHubUpdate⏎Current Version: "1.31"⏎RoutineHub ID: "4626"⏎RoutineHubUpdate)
2: 注释 (Text dictionary to action conversion tool for shortcut developers. Converts dictionary or array text (json) to shortcut-native dictionary or list actions. Supports multiple json objects through share (as text selection or file) or clipboard.⏎2020-05-05 	ⓥ1.31 	@gluebyte 	u/gluebyte⏎https://routinehub.co/shortcut/4626)
3: 如果 (101 )
4: 匹配文本 (Case Sensitive: Yes, Pattern: [\[\{])
5: 计数
6: 如果 (2 )
7: 从菜单中选取 (𝑪𝑳𝑰𝑷𝑩𝑶𝑨𝑹𝑫⏎☯️💲Get Clipboard💲☯️)
8 (7, 𝑪𝑳𝑰𝑷...): 从菜单中选取 (Use Clipboard)
9: 获取剪贴板
10 (7, 𝑪𝑳𝑰𝑷...): 从菜单中选取 (Choose File)
11: 获取文件
12 (7, 𝑪𝑳𝑰𝑷...): 从菜单中选取
13 (6, 2 ): 如果
14: 获取文件
15 (6, 2 ): 如果
16 (3, 101 ): 如果
17: 合并文本
18: 编码 URL
19: 替换文本 (Replace \ with \\, Regex: No, Case Sensitive: Yes)
20: 替换文本 (Replace " with \", Regex: No, Case Sensitive: Yes)
21: 文本 (<pre><script>⏎var buffer = unescape(decodeURIComponent("☯️💲Updated Text💲☯️"))⏎var mode = 0⏎var stack = []⏎var output = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><!DOCTYPE plist PUBLIC \"-//Apple//DTD PLIST 1.0//EN\" \"http://www.apple.com/DTDs/PropertyList-1.0.dtd\"><plist version=\"1.0\"><dict><key>WFWorkflowActions</key><array>"⏎var action = ""⏎var actioncount = 0⏎var match = []⏎while (buffer != "") {⏎    if (mode == 0) {⏎        match = buffer.match(/^[\d\D]*?(([\[\{])[\d\D]*)$/)⏎        buffer = match[1]⏎        var ch1 = match[2]⏎        switch (ch1) {⏎            case "{":⏎                mode = 1⏎                action = "<dict><key>WFWorkflowActionIdentifier</key><string>is.workflow.actions.dictionary</string><key>WFWorkflowActionParameters</key><dict><key>WFItems</key><dict><key>Value</key><dict><key>WFDictionaryFieldValueItems</key><array>"⏎                break⏎            case "[":⏎                mode = 2⏎                action = "<dict><key>WFWorkflowActionIdentifier</key><string>is.workflow.actions.list</string><key>WFWorkflowActionParameters</key><dict><key>WFItems</key><array>"⏎                break⏎            default:⏎                buffer = ""⏎        }⏎    }⏎    match = buffer.match(/^(.)\s*([\d\D]*)$/)⏎    buffer = match[2]⏎    var ch1 = match[1]⏎    if (ch1 == "]" || ch1 == "}") {⏎        if ((mode == 1 && ch1 == "}") || (mode == 2 && ch1 == "]")) {⏎            if (stack.length == 0) {⏎                    output += action + ((mode == 1) ? "</array></dict><key>WFSerializationType</key><string>WFDictionaryFieldValue</string></dict></dict></dict>" : "</array></dict></dict>")⏎                    mode = 0⏎                    action = ""⏎                    actioncount++⏎            } else {⏎                action += ((mode == 1) ? "</array></dict><key>WFSerializationType</key><string>WFDictionaryFieldValue</string></dict><key>WFSerializationType</key><string>WFDictionaryFieldValue</string></dict></dict>" : "</array><key>WFSerializationType</key><string>WFArrayParameterState</string></dict></dict>")⏎                mode = stack.pop()⏎            }⏎        } else {⏎            buffer = ""⏎        }⏎    } else {⏎        var ch2 = buffer[0]⏎        var key = ""⏎        if (!"]},".includes(ch2)) {⏎            if (mode == 1) {⏎                match = buffer.match(/^"([^"\\]*(?:\\.[^"\\]*)*)"\s*:\s*([\d\D]*)$/)⏎                buffer = match[2]⏎                key = match[1].replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")⏎                key = "<key>WFKey</key><dict><key>Value</key><dict><key>attachmentsByRange</key><dict/><key>string</key><string>" + key + "</string></dict><key>WFSerializationType</key><string>WFTextTokenString</string></dict>"⏎                ch2 = buffer[0]⏎            }⏎            switch (ch2) {⏎                case "[":⏎                case "{":⏎                    stack.push(mode)⏎                    if (ch2 == "{") {⏎                        mode = 1⏎                        action += "<dict><key>WFItemType</key><integer>1</integer>" + key + "<key>WFValue</key><dict><key>Value</key><dict><key>Value</key><dict><key>WFDictionaryFieldValueItems</key><array>"⏎                    } else {⏎                        mode = 2⏎                        action += "<dict><key>WFItemType</key><integer>2</integer>" + key + "<key>WFValue</key><dict><key>Value</key><array>"⏎                    }⏎                    break⏎                case "\"":⏎                    match = buffer.match(/^"([^"\\]*(?:\\.[^"\\]*)*)"\s*([\s\S]*)$/)⏎                    buffer = match[2]⏎                    value = match[1].replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")⏎                    action += ((mode == 1) ? "<dict><key>WFItemType</key><integer>0</integer>"+key+"<key>WFValue</key><dict><key>Value</key><dict><key>attachmentsByRange</key><dict/><key>string</key><string>"+value+"</string></dict><key>WFSerializationType</key><string>WFTextTokenString</string></dict></dict>" : "<string>"+value+"</string>")⏎                    break⏎                default:⏎                    match = buffer.match(/^(.+?)\s*([,\]}][\d\D]*)$/)⏎                    buffer = match[2]⏎                    value = match[1]⏎                    switch (value) {⏎                        case "true":⏎                            action += "<dict><key>WFItemType</key><integer>4</integer>" + key + "<key>WFValue</key><dict><key>Value</key><true/><key>WFSerializationType</key><string>WFNumberSubstitutableState</string></dict></dict>"⏎                            break⏎                        case "false":⏎                        action += "<dict><key>WFItemType</key><integer>4</integer>" + key + "<key>WFValue</key><dict><key>Value</key><false/><key>WFSerializationType</key><string>WFNumberSubstitutableState</string></dict></dict>"⏎                            break⏎                        case "null":⏎                            action += ((mode == 1) ? "<dict><key>WFItemType</key><integer>0</integer>"+key+"<key>WFValue</key><dict><key>Value</key><dict><key>attachmentsByRange</key><dict/><key>string</key><string></string></dict><key>WFSerializationType</key><string>WFTextTokenString</string></dict></dict>" : "<string></string>")⏎                            break⏎                        default:⏎                            action += "<dict><key>WFItemType</key><integer>3</integer>" + key + "<key>WFValue</key><dict><key>Value</key><dict><key>attachmentsByRange</key><dict/><key>string</key><string>" + value + "</string></dict><key>WFSerializationType</key><string>WFTextTokenString</string></dict></dict>"⏎                    }⏎            }⏎        }⏎    }⏎}⏎output += "</array><key>WFWorkflowIcon</key><dict><key>WFWorkflowIconStartColor</key><integer>4292093695</integer></dict></dict></plist>"⏎document.write((actioncount > 0) ? output.split("\\\\").map(x => x.replace(/\\t/g,"\t").replace(/\\n/g,"\n").replace(/\\"/g,"\"")).join("\\").replace(/\\\//g,"/").replace(/&/g,'&amp;').replace(/</g, "&lt;") : "")⏎</script></pre>)
22: Base64 编码 (Encode, Line Breaks None)
23: URL (data:text/html;charset=utf-8;base64,☯️💲Base64 Encoded💲☯️)
24: 获取网页内容
25: 从输入中获取文本
26: 如果 (8 <)
27: 要求输入 (Q: "Enter Name", Default: "", Ask for )
28: 设定名称 (☯️💲Provided Input💲☯️.shortcut, with0 File Extension)
29: 获取文件链接
30: 打开 URL
31 (26, 8 <): 如果
32: 显示提醒 (Title: Data Error, Message: Input does not contain valid dictionary or array text., Hide Cancel Button)
33 (26, 8 <): 如果
```

## Content Classes : 

GenericFile ,String 

## 注释:

```
- This shortcut supports UpdateHub: https://routinehub.co/shortcut/2066
That is, you can check for updates of all UpdateHub-supported shortcuts by manually running the UpdateHub shortcut. Auto update check is also supported.


RoutineHubUpdate

Current Version: "1.31"
RoutineHub ID: "4626"

RoutineHubUpdate
- Text dictionary to action conversion tool for shortcut developers. Converts dictionary or array text (json) to shortcut-native dictionary or list actions. Supports multiple json objects through share (as text selection or file) or clipboard.
2020-05-05 	ⓥ1.31 	@gluebyte 	u/gluebyte
https://routinehub.co/shortcut/4626
```