# 单词拆分

## 快捷指令信息

快捷指令：	单词拆分
动作数量：	53
文件大小：	7 KB

魔术变量数量 : 36
自定义变量数量 : 13

Glyph 编号 : 59675
Glyph 颜色 : 463140863

快捷指令类型 : 

WatchKit
ActionExtension
NCWidget

## 内容类型 : 

String 

## 依赖 :



## URL :



## 注释内容:

```text
- 作者：无良的北极
来源：捷径盒 © 版权归作者所有
发布时间：2020-05-15 12:15
作品网址：https://jiejinghe.com/shortcuts/7317405988
```

## 动作列表 : 

```text
1: 注释 (作者：无良的北极⏎来源：捷径盒 © 版权归作者所有⏎发布时间：2020-05-15 12:15⏎作品网址：https://jiejinghe.com/shortcuts/7317405988)
2: com.jiejinghe.luke.ShortcutUpdateCheckIntent
3: 如果 (101 )
4: 获取剪贴板
5: 如果 (101 )
6: 要求输入 (Q: "请输入要拆分的文字", Default: "", Ask for )
7 (5, 101 ): 如果
8: 从菜单中选取
9 (8, ): 从菜单中选取 (拆分剪贴板)
10: 文本 (☯️💲剪贴板💲☯️)
11 (8, ): 从菜单中选取 (输入文字)
12: 要求输入 (Q: "请输入要拆分的文字", Default: "", Ask for )
13 (8, ): 从菜单中选取
14 (5, 101 ): 如果
15 (3, 101 ): 如果
16: 文本 (☯️💲Workflow Input💲☯️)
17 (3, 101 ): 如果
18: 文本 (☯️💲如果的结果💲☯️)
19: 拆分文本
20: 为每个项目重复
21: 文本 (☯️💲Repeat Item💲☯️ )
22: 计数 (Words)
23: 设定变量 (num)
24: 数字 (1)
25: 设定变量 (last)
26: 拆分文本 (Separator: "Every Character")
27: 为每个项目重复
28: 从列表中获取项目 (Items in Range, ☯️💲Repeat Index 2💲☯️ to End)
29: 文本 (☯️💲来自列表的项目💲☯️)
30: 替换文本 (Replace \n with , Regex: Yes, Case Sensitive: Yes)
31: 计数 (Words)
32: 如果 (0 )
33: 计算 (- 1)
34: 从列表中获取项目 (Items in Range, ☯️💲last💲☯️ to ☯️💲计算结果💲☯️)
35: 文本 (☯️💲来自列表的项目💲☯️)
36: 替换文本 (Replace \n with , Regex: Yes, Case Sensitive: Yes)
37: 替换文本 (Replace [\p{P}*] with , Regex: Yes, Case Sensitive: Yes)
38: 添加到变量 (words)
39: 设定变量 (last)
40: 设定变量 (num)
41 (32, 0 ): 如果
42: 文本 (☯️💲更新后的文本💲☯️-单词：☯️💲数量💲☯️-last：☯️💲last💲☯️-num：☯️💲num💲☯️)
43: 添加到变量 (log)
44 (27, ): 为每个项目重复
45: 添加到变量 (result)
46: 文本
47: 设定变量 (log)
48: 设定变量 (num)
49: 设定变量 (last)
50: 设定变量 (words)
51 (20, ): 为每个项目重复
52: 显示结果
53: 设定变量 (result)
```

