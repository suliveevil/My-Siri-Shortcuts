# ⚠️SourceCode_Import.shortcut

## 快捷指令信息

快捷指令：⚠️SourceCode_Import
动作数量：33
文件大小：6 KB

Glyph 编号 : 59722
Glyph 颜色 : 3679049983

快捷指令类型 : 

WatchKit
ActionExtension

## 依赖 :



## URLs :



## 动作列表 : 

```
1: 计数
2: 如果 (4 )
3: 获取文件
4: 设定变量 (source)
5 (2, 4 ): 如果
6: 设定变量 (source)
7 (2, 4 ): 如果
8: 注释 (core⬇️get source code)
9: 设定名称 (☯️💲source|Name💲☯️.plist, without File Extension)
10: 从输入中获取文本
11: 设定名称 (☯️💲source|Name💲☯️.shortcut, without File Extension)
12: 注释 (core⬆️get source code)
13: 从输入中获取词典
14: 如果 (100 WFWorkflowActionIdentifier)
15: 注释 (core⬇️get shortcut url)
16: 获取文件链接
17: 获取 URL 组件 (Path)
18: 注释 (core⬆️get shortcut url)
19: 匹配文本 (Case Sensitive: Yes, Pattern: /shortcuts/([a-z\d]{32}))
20: 获取匹配文本的组
21: 如果 (100 )
22: 注释 (core⬇️open in shortcut)
23: URL (shortcuts:/☯️💲URL的组件💲☯️)
24: 打开 URL
25: 注释 (core⬆️open in shortcut)
26 (21, 100 ): 如果
27: 文本 (No Source Code⏎in this file)
28: 显示结果
29 (21, 100 ): 如果
30 (14, 100 WFWo...): 如果
31: 文本 (No Source Code⏎in this file)
32: 显示结果
33 (14, 100 WFWo...): 如果
```

## Content Classes : 

GenericFile ,String 

## 注释:

```
- core⬇️get source code
- core⬆️get source code
- core⬇️get shortcut url
- core⬆️get shortcut url
- core⬇️open in shortcut
- core⬆️open in shortcut
```