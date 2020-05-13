# ☯️0_Shortcut_Editor.shortcut

## 快捷指令信息

快捷指令：☯️0_Shortcut_Editor
动作数量：89
文件大小：19 KB

Glyph 编号 : 59758
Glyph 颜色 : 3679049983

快捷指令类型 : 

WatchKit
ActionExtension

## 依赖 :



## URLs :



## 动作列表 : 

```
1: 词典
2: 文本 (		<dict>⏎			<key>WFWorkflowActionIdentifier</key>⏎			<string>is.workflow.actions.comment</string>⏎			<key>WFWorkflowActionParameters</key>⏎			<dict>⏎				<key>WFCommentActionText</key>⏎				<string>⊲☯️词典|comment☯️⊳</string>⏎			</dict>⏎		</dict>)
3: 词典
4: 文本 (⊲☯️词典|escape☯️⊳)
5: 文本 (.⏎-⏎\)
6: 拆分文本
7: 为每个项目重复
8: 替换文本 (Replace ⊲☯️Repeat Item☯️⊳ with \⊲☯️Repeat Item☯️⊳, Regex: No, Case Sensitive: Yes)
9 (7, ): 为每个项目重复
10: 设定变量 (regex_comment)
11: 文本 (^[\s\S]*?<array>|</array>\s*<key>WFWorkflowClientRelease</key>[\s\S]*)
12: 设定变量 (regex_sc_info)
13: 文本 ((?<=⊲☯️regex_comment☯️⊳)[\s\S]*(?=⊲☯️regex_comment☯️⊳))
14: 设定变量 (regex_content)
15: 注释 (from source file get content)
16: 从菜单中选取
17: 显示提醒 (Title: Choose Shortcut with 2 ⊲☯️sc_data|raw_comment☯️⊳ Comments, Message: ,  Cancel Button)
18 (16, ): 从菜单中选取 (from ☯️Shortcut☯️)
19: 获取我的快捷指令
20: 从列表中选取
21: 设定名称 (⊲☯️选取的项目|Name☯️⊳.plist, without File Extension)
22: 设定名称 (⊲☯️选取的项目|Name☯️⊳.txt, with File Extension)
23: 从输入中获取文本
24: 设定变量 (source_file)
25 (16, ): 从菜单中选取 (from📃    Plist   📃)
26: 获取文件
27: 从输入中获取文本
28: 设定变量 (source_file)
29 (16, ): 从菜单中选取 (from 🗃Snippet🗃)
30: 获取文件 (0_source_code/snippet)
31: 过滤文件
32: 从列表中选取
33: 从输入中获取文本
34: 设定变量 (source_file)
35 (16, ): 从菜单中选取
36: 从输入中获取文本
37: 匹配文本 (Case Sensitive: Yes, Pattern: ⊲☯️regex_content☯️⊳)
38: 设定变量 (snippet)
39: 如果 (101 )
40: 显示提醒 (Title: Special Comments Not Found, Message: ,  Cancel Button)
41 (39, 101 ): 如果
42 (39, 101 ): 如果
43: 注释 (from source file get content)
44: 注释 (replace comment in target)
45: 从菜单中选取
46 (45, ): 从菜单中选取 (New        ☯️ Shortcut)
47: 要求输入 (Q: "Snippet Name", Default: "", Ask for )
48: 文本 (<?xml version="1.0" encoding="UTF-8"?>⏎<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">⏎<plist version="1.0">⏎<dict>⏎	<key>WFWorkflowActions</key>⏎	<array>⏎	⊲☯️snippet☯️⊳⏎	</array>⏎	<key>WFWorkflowMinimumClientVersion</key>⏎	<integer>900</integer>⏎	<key>WFWorkflowMinimumClientVersionString</key>⏎	<string>900</string>⏎	<key>WFWorkflowTypes</key>⏎	<array>⏎		<string>WatchKit</string>⏎	</array>⏎</dict>⏎</plist>⏎)
49: 设定名称 (⊲☯️提供的输入☯️⊳.plist, without File Extension)
50: 设定名称 (⊲☯️提供的输入☯️⊳.shortcut, with File Extension)
51: 获取文件链接
52: 获取 URL 组件 (Path)
53: URL (shortcuts:/⊲☯️URL的组件☯️⊳)
54: 打开 URL
55 (45, ): 从菜单中选取 (Save as   🗃 Snippet)
56: 要求输入 (Q: "Snippet Name", Default: "", Ask for )
57: 文本 (<?xml version="1.0" encoding="UTF-8"?>⏎<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">⏎<plist version="1.0">⏎<dict>⏎	<key>WFWorkflowActions</key>⏎	<array>⏎		<dict>⏎			<key>WFWorkflowActionIdentifier</key>⏎			<string>is.workflow.actions.comment</string>⏎			<key>WFWorkflowActionParameters</key>⏎			<dict>⏎				<key>WFCommentActionText</key>⏎				<string>⊲☯️sc_data|comment☯️⊳</string>⏎			</dict>⏎		</dict>⏎		⊲☯️snippet☯️⊳⏎		<dict>⏎			<key>WFWorkflowActionIdentifier</key>⏎			<string>is.workflow.actions.comment</string>⏎			<key>WFWorkflowActionParameters</key>⏎			<dict>⏎				<key>WFCommentActionText</key>⏎				<string>⊲☯️sc_data|comment☯️⊳</string>⏎			</dict>⏎		</dict>⏎	</array>⏎	<key>WFWorkflowMinimumClientVersion</key>⏎	<integer>900</integer>⏎	<key>WFWorkflowMinimumClientVersionString</key>⏎	<string>900</string>⏎	<key>WFWorkflowTypes</key>⏎	<array>⏎		<string>WatchKit</string>⏎	</array>⏎</dict>⏎</plist>⏎)
58: 设定名称 (⊲☯️提供的输入☯️⊳.plist, without File Extension)
59: 存储文件 (0_source_code/snippet)
60: 退出快捷指令
61 (45, ): 从菜单中选取 (Merge to 📃Plist)
62: 获取文件
63: 设定变量 (target_file)
64: 获取名称
65: 设定变量 (target_file_name)
66 (45, ): 从菜单中选取 (Merge to ☯️ Shortcut)
67: 获取我的快捷指令
68: 从列表中选取
69: 设定名称 (⊲☯️选取的项目|Name☯️⊳.plist, without File Extension)
70: 从输入中获取文本
71: 设定名称 (⊲☯️选取的项目|Name☯️⊳.txt, with File Extension)
72: 设定变量 (target_file)
73 (45, ): 从菜单中选取
74: 从输入中获取文本
75: 替换文本 (Replace ⊲☯️regex_sc_info☯️⊳ with , Regex: Yes, Case Sensitive: Yes)
76: 设定变量 (target_file)
77: 替换文本 (Replace ⊲☯️regex_comment|Values☯️⊳ with ⊲☯️snippet☯️⊳, Regex: Yes, Case Sensitive: Yes)
78: 设定变量 (merged)
79: 文本 (<?xml version="1.0" encoding="UTF-8"?>⏎<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">⏎<plist version="1.0">⏎<dict>⏎	<key>WFWorkflowActions</key>⏎	<array>⏎	⊲☯️merged☯️⊳⏎	</array>⏎	<key>WFWorkflowMinimumClientVersion</key>⏎	<integer>900</integer>⏎	<key>WFWorkflowMinimumClientVersionString</key>⏎	<string>900</string>⏎	<key>WFWorkflowTypes</key>⏎	<array>⏎		<string>WatchKit</string>⏎	</array>⏎</dict>⏎</plist>⏎)
80: 设定变量 (result)
81: 注释 (replace comment in target)
82: 设定名称 (⊲☯️target_file_name☯️⊳.shortcut, with File Extension)
83: 设定变量 (result)
84: 注释 (import)
85: 获取文件链接
86: 获取 URL 组件 (Path)
87: URL (shortcuts:/⊲☯️URL的组件☯️⊳)
88: 打开 URL
89: 注释 (import)
```

## Content Classes : 

GenericFile 

## 注释:

```
- 
- from source file get content
- from source file get content
- replace comment in target
- 
- replace comment in target
- import
- import
```