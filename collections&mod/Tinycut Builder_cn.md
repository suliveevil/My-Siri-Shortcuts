# Tinycut Builder

## 快捷指令信息

快捷指令：	Tinycut Builder
动作数量：	162
文件大小：	47 KB

魔术变量数量 : 95
自定义变量数量 : 32

Glyph 编号 : 59749
Glyph 颜色 : 3679049983

快捷指令类型 : 

WatchKit
ActionExtension

## 内容类型 : 

GenericFile ,String 

## 依赖 :

- 

## URL :



## 注释内容:

```text
- This shortcut supports UpdateHub: https://routinehub.co/shortcut/2066
That is, you can check for updates of all UpdateHub-supported shortcuts by manually running the UpdateHub shortcut.

RoutineHubUpdate

Current Version: "1.3"
RoutineHub ID: "5217"

RoutineHubUpdate
- 𝗧𝗶𝗻𝘆𝗰𝘂𝘁 𝗕𝘂𝗶𝗹𝗱𝗲𝗿 converts programming-style text to shortcuts. Check the help menu or webpage below for the list of commands.
2020-05-31 	ⓥ1.3 	@gluebyte 	u/gluebyte
https://routinehub.co/shortcut/5217
- Clear Tinycut Text indentation
- Find 𝘪𝘯𝘴𝘦𝘳𝘵 𝘴𝘩𝘰𝘳𝘵𝘤𝘶𝘵 (<<) lines
- Found 𝘪𝘯𝘴𝘦𝘳𝘵 𝘴𝘩𝘰𝘳𝘵𝘤𝘶𝘵 (<<) line
- Same command exists
- Found unique command name
- Found exact match
- Found no match
- Found multiple matches
- Show All
- Read shortcut actions
- Refresh all UUIDs and GroupingItentifiers to avoid conflicts
- Insert other shortcut actions. Handle >2000 actions to prevent Combine Text from crashing
```

## 动作列表 : 

```text
1: 注释 (This shortcut supports UpdateHub: https://routinehub.co/shortcut/2066⏎That is, you can check for updates of all UpdateHub-supported shortcuts by manually running the UpdateHub shortcut.⏎RoutineHubUpdate⏎Current Version: "1.3"⏎RoutineHub ID: "5217"⏎RoutineHubUpdate)
2: 注释 (𝗧𝗶𝗻𝘆𝗰𝘂𝘁 𝗕𝘂𝗶𝗹𝗱𝗲𝗿 converts programming-style text to shortcuts. Check the help menu or webpage below for the list of commands.⏎2020-05-31 	ⓥ1.3 	@gluebyte 	u/gluebyte⏎https://routinehub.co/shortcut/5217)
3: 词典
4: 获取词典值 (Key: code)
5: 获取词典值 (Key: loop)
6: 如果 (101 )
7: 从菜单中选取 (CLIPBOARD CONTENT:⏎☯️💲Get Clipboard💲☯️)
8 (7, CLIPBOAR...): 从菜单中选取 (Use Clipboard)
9: 获取剪贴板
10 (7, CLIPBOAR...): 从菜单中选取 (Choose File)
11: 获取文件
12 (7, CLIPBOAR...): 从菜单中选取 (Show Commands)
13: 设定名称 (Command List, with0 File Extension)
14: 快速查看
15: 退出快捷指令
16 (7, CLIPBOAR...): 从菜单中选取
17 (6, 101 ): 如果
18: 设定变量
19 (6, 101 ): 如果
20: 注释 (Clear Tinycut Text indentation)
21: 替换文本 (Replace (?m)^(˙   )+ with , Regex: Yes, Case Sensitive: Yes)
22: 注释 (Find 𝘪𝘯𝘴𝘦𝘳𝘵 𝘴𝘩𝘰𝘳𝘵𝘤𝘶𝘵 (<<) lines)
23: 匹配文本 (Case Sensitive: Yes, Pattern: (?m)^\s*\<\<\s*\S)
24: 如果 (101 )
25: 设定变量
26 (24, 101 ): 如果
27: 获取我的快捷指令
28: 设定变量 (shortcuts)
29: 拆分文本
30: 为每个项目重复
31: 匹配文本 (Case Sensitive: Yes, Pattern: ^\s*\<\<\s*(\S(?:.*\S)?))
32: 获取匹配文本的组
33: 如果 (101 )
34: 设定变量
35 (33, 101 ): 如果
36: 注释 (Found 𝘪𝘯𝘴𝘦𝘳𝘵 𝘴𝘩𝘰𝘳𝘵𝘤𝘶𝘵 (<<) line)
37: 获取词典值 (All Keys)
38: 合并文本
39: 如果 (99 ☯️💲Combined Text💲☯️)
40: 注释 (Same command exists)
41: 文本 (Yes)
42: 设定变量 (contLoop)
43: 重复 (20 repetitions)
44: 如果 (4 )
45: 合并文本 (Separator: "-")
46: 合并文本
47: 如果 (99 ☯️💲Combined Text💲☯️)
48 (47, 99 ☯️💲C...): 如果
49: 注释 (Found unique command name)
50: 设定变量 (newKey)
51: 设定变量 (newCommand)
52: 文本 (No)
53: 设定变量 (contLoop)
54 (47, 99 ☯️💲C...): 如果
55 (44, 4 ): 如果
56 (43, 20 repet...): 重复
57 (39, 99 ☯️💲C...): 如果
58: 设定变量 (newKey)
59: 设定变量 (newCommand)
60 (39, 99 ☯️💲C...): 如果
61: 过滤文件
62: 如果 (4 ☯️💲Command💲☯️)
63: 注释 (Found exact match)
64: 设定变量
65 (62, 4 ☯️💲Co...): 如果
66: 计数
67: 如果 (4 )
68: 注释 (Found no match)
69: 文本 (Show All)
70 (67, 4 ): 如果
71: 注释 (Found multiple matches)
72: 如果 (2 )
73: 在“快捷指令” App 中继续
74 (72, 2 ): 如果
75: 列表
76: 从列表中选取
77 (67, 4 ): 如果
78 (62, 4 ☯️💲Co...): 如果
79: 如果 (5 Show All)
80: 如果 (8 Skip “)
81: 无
82 (80, 8 Skip “): 如果
83 (79, 5 Show All): 如果
84: 注释 (Show All)
85: 在“快捷指令” App 中继续
86: 过滤文件
87: 列表
88: 从列表中选取
89: 如果 (8 Skip “)
90: 无
91 (89, 8 Skip “): 如果
92 (79, 5 Show All): 如果
93: 如果 (100 )
94: 注释 (Read shortcut actions)
95: 替换文本 (Replace \.shortcut$ with , Regex: Yes, Case Sensitive: Yes)
96: 设定名称 (☯️💲Updated Text💲☯️.plist, without File Extension)
97: is.workflow.actions.gettypeaction
98: 注释 (Refresh all UUIDs and GroupingItentifiers to avoid conflicts)
99: 文本 (<script>⏎var src = JSON.stringify(☯️💲File of Type💲☯️);⏎// Find UUIDs⏎var match = src.match(/"UUID":"[0-9a-fA-F-]{36}"/g);⏎for (let m of match) {⏎  let oldid = m.substring(7, 45);⏎  let newid = ("\""+1e7+-1e3+-4e3+-8e3+-1e11+"\"").replace(/[018]/g,c=>(c^crypto.getRandomValues(new Uint8Array(1))[0]&15>>c/4).toString(16).toUpperCase());⏎  src = src.split(oldid).join(newid);⏎}⏎// Find unique GroupingIdentifiers⏎match = [...new Set(src.match(/"GroupingIdentifier":"[0-9a-fA-F-]{36}"/g))];⏎for (let m of match) {⏎  let oldid = m.substring(21, 59);⏎  let newid = ("\""+1e7+-1e3+-4e3+-8e3+-1e11+"\"").replace(/[018]/g,c=>(c^crypto.getRandomValues(new Uint8Array(1))[0]&15>>c/4).toString(16).toUpperCase());⏎  src = src.split(oldid).join(newid);⏎}⏎document.write(encodeURIComponent(src));⏎</script>)
100: Base64 编码
101: URL (data:text/html;charset=utf-8;base64,☯️💲Base64 Encoded💲☯️)
102: 编码 URL (Decode)
103: 设定词典值 (Key: ☯️💲newKey💲☯️, Value: ☯️💲URL Encoded Text|WFWorkflowActions💲☯️)
104: 设定变量 (shortcuts)
105 (93, 100 ): 如果
106: 合并文本 (Separator: "Spaces")
107 (33, 101 ): 如果
108 (30, ): 为每个项目重复
109: 合并文本
110 (24, 101 ): 如果
111: 获取词典值 (All Keys)
112: 替换文本 (Replace \ with \\, Regex: No, Case Sensitive: Yes)
113: 替换文本 (Replace " with \", Regex: No, Case Sensitive: Yes)
114: 替换文本 (Replace / with \/, Regex: No, Case Sensitive: Yes)
115: 合并文本 (Separator: "","")
116: 编码 URL
117: 文本 (<script>⏎let output = (function() {⏎	var tinycode = decodeURIComponent("☯️💲URL Encoded Text💲☯️");⏎	let code = ☯️💲code💲☯️;⏎	let loop = ☯️💲loop💲☯️;⏎	let keys = ["☯️💲keys💲☯️"];⏎	var uuidstack = [];⏎	var modestack = [];⏎	var menustack = [];⏎	var actions = [];⏎	var lines = tinycode.match(/\S(?:.*\S)?/g);⏎	for (let [index, line] of lines.entries()) {⏎		var action = {};⏎		var param = {};⏎		var match = line.match(/^\s*\<\<\s*(\S(?:.*\S)?)/);⏎		if (match) {⏎			// Insert Shortcut⏎			let key = "«"+match[1]+"«";⏎			if (keys.includes(key)) { actions.push(key) } else { match = null }⏎		}⏎		if (!match) {⏎			match = line.match(/([a-zA-Z\]][a-zA-Z ]*[a-zA-Z\[]).*/);⏎			var id = match ? code[match[1].toLowerCase()] : null;⏎			if (!id) {⏎				action["WFWorkflowActionIdentifier"] = code["comment"][0];⏎				param["WFCommentActionText"] = line;⏎			} else {⏎				action["WFWorkflowActionIdentifier"] = id[0];⏎				if (id.length > 1) {⏎					let loopmode = id[1];⏎					let loopstep = loopmode % 3;⏎					param["WFControlFlowMode"] = loopstep;⏎					if (loopstep == 0) {⏎						let uuid = ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,c=>(c^crypto.getRandomValues(new Uint8Array(1))[0]&15>>c/4).toString(16).toUpperCase());⏎						uuidstack.push(uuid);⏎						param["GroupingIdentifier"] = uuid;⏎						modestack.push(loopmode);⏎						if (loopmode == 9) {⏎							menustack.push(actions.length);⏎							menustack.push(1);⏎							action["WFWorkflowActionParameters"] = param;⏎							actions.push(JSON.parse(JSON.stringify(action)));⏎							param["WFControlFlowMode"] = 1;⏎							param["WFMenuItemTitle"] = "1";⏎						}⏎					} else {⏎						if (uuidstack.length == 0) { return "\"" + match[0] + "\" near line " + index + " has no matching loop." }⏎						let currentmode = modestack[modestack.length-1];⏎						if (loopmode - loopstep != currentmode) {⏎							return "Expected \"" + loop[currentmode+loopstep] + "\" but found \"" + match[0] + "\" near line " + index + ".";⏎						}⏎						param["GroupingIdentifier"] = uuidstack[uuidstack.length-1];⏎						if (loopstep == 2) { uuidstack.pop(); modestack.pop() }⏎						if (loopmode == 10) {⏎							menustack[menustack.length-1]++;⏎							param["WFMenuItemTitle"] = menustack[menustack.length-1].toString();⏎						}⏎					}⏎				}⏎			}⏎			action["WFWorkflowActionParameters"] = param;⏎			actions.push(action);⏎		}⏎	}⏎	if (uuidstack.length) { return "\"" + loop[modestack.pop()+2] + "\" missing." }⏎	while (menustack.length) {⏎		var menulist = [];⏎		let count = menustack.pop();⏎		for (i=1; i<=count; i++) { menulist.push(i.toString()) }⏎		index = menustack.pop();⏎		actions[index]["WFWorkflowActionParameters"]["WFMenuItems"] = menulist;⏎	}⏎	json = {"WFWorkflowActions":actions,"WFWorkflowIcon":{"WFWorkflowIconStartColor":4292093695}};⏎	return JSON.stringify(json,null,2);⏎})();⏎document.write(encodeURIComponent(output));⏎</script>)
118: Base64 编码 (Encode, Line Breaks None)
119: URL (data:text/html;charset=utf-8;base64,☯️💲Base64 Encoded💲☯️)
120: 编码 URL (Decode)
121: 如果 (8 {)
122: 设定变量 (source)
123: 获取词典值 (All Keys)
124: 为每个项目重复
125: 替换文本 (Replace \ with \\, Regex: No, Case Sensitive: Yes)
126: 替换文本 (Replace " with \", Regex: No, Case Sensitive: Yes)
127: 获取词典值 (Key: ☯️💲Repeat Item💲☯️)
128: 注释 (Insert other shortcut actions. Handle >2000 actions to prevent Combine Text from crashing)
129: 计数
130: 设定变量 (CTCount)
131: 数字 (2000)
132: 设定变量 (CTMax)
133: 计算 (÷ ☯️💲CTMax💲☯️)
134: 为数字取整
135: 重复 (☯️💲Rounded Number💲☯️ repetitions)
136: 计算 (× ☯️💲CTMax💲☯️)
137: 如果 (0 )
138: 设定变量 (CTHigh)
139 (137, 0 ): 如果
140: 设定变量 (CTHigh)
141 (137, 0 ): 如果
142: 计算 (- ☯️💲CTMax💲☯️)
143: 计算 ( 1)
144: 设定变量 (CTLow)
145: 从列表中获取项目 (Items in Range, ☯️💲CTLow💲☯️ to ☯️💲CTHigh💲☯️)
146: 合并文本 (Separator: ",")
147 (135, ☯️💲Roun...): 重复
148: 合并文本 (Separator: ",")
149: 替换文本 (Replace "☯️💲Updated Text💲☯️" with ☯️💲Combined Text💲☯️, Regex: No, Case Sensitive: Yes)
150: 设定变量 (source)
151 (124, ): 为每个项目重复
152: is.workflow.actions.gettypeaction
153: 要求输入 (Q: "Enter Name of Shortcut", Default: "", Ask for )
154: 如果 (101 )
155: 文本 (Tinycut)
156 (154, 101 ): 如果
157: 设定名称 (☯️💲If Result💲☯️.shortcut, with0 File Extension)
158: 获取文件链接
159: 打开 URL
160 (121, 8 {): 如果
161: 显示提醒 (Title: , Message: ☯️💲URL Encoded Text💲☯️, Hide Cancel Button)
162 (121, 8 {): 如果
```

