# 📃文件名+筛选+前后缀+排序

## 快捷指令信息

快捷指令：	📃文件名+筛选+前后缀+排序
动作数量：	117
文件大小：	13 KB

魔术变量数量 : 75
自定义变量数量 : 22

Glyph 编号 : 59445
Glyph 颜色 : 463140863

快捷指令类型 : 

WatchKit

## 内容类型 : 

AppStoreApp ,Article ,Contact ,Date ,EmailAddress ,GenericFile ,Image ,iTunesProduct ,Location ,DCMapsLink ,AVAsset ,PDF ,PhoneNumber ,RichText ,SafariWebPage ,String ,URL 

## 依赖 :



## URL :



## 注释内容:

```text
- 作者：suliveevil
来源：捷径盒 © 版权归作者所有
发布时间：2020-05-30 17:00
作品网址：https://jiejinghe.com/shortcuts/6755884505
- 获取文件夹内的文件名和文件扩展名
- 排序
- 可自定义顺序
- 排序
```

## 动作列表 : 

```text
1: 注释 (作者：suliveevil⏎来源：捷径盒 © 版权归作者所有⏎发布时间：2020-05-30 17:00⏎作品网址：https://jiejinghe.com/shortcuts/6755884505)
2: com.jiejinghe.luke.ShortcutUpdateCheckIntent
3: 文本
4: 设定变量 (file_type)
5: 获取文件
6: 为每个项目重复
7: 从输入中获取文本
8: 如果 (999 ☯️💲Repeat Item|File Extension💲☯️)
9: 添加到变量 (file_type)
10 (8, 999 ☯️💲...): 如果
11 (6, ): 为每个项目重复
12: 计数
13: 设定变量 (all)
14: 从菜单中选取 (筛选哪些文件)
15 (14, 筛选哪些文件): 从菜单中选取 (全部类型📁)
16: 数字 (0)
17: 设定变量 (type)
18 (14, 筛选哪些文件): 从菜单中选取 (🈯️定类型)
19: 从列表中选取 (Q: "选择指定类型", Select Multiple, Select all initially)
20: 设定变量 (include)
21: 数字 (1)
22: 设定变量 (type)
23 (14, 筛选哪些文件): 从菜单中选取 (排除类型❌)
24: 从列表中选取 (Q: "选择要排除的类型", Select Multiple, Select none initially)
25: 设定变量 (exclude)
26: 数字 (-1)
27: 设定变量 (type)
28 (14, 筛选哪些文件): 从菜单中选取
29: 从菜单中选取
30 (29, ): 从菜单中选取 (前缀后缀)
31: 要求输入 (Q: "输入前缀", Default: "☯️💲Get Clipboard💲☯️", Ask for )
32: 设定变量 (prefix)
33: 要求输入 (Q: "输入后缀", Default: "☯️💲Get Clipboard💲☯️", Ask for )
34: 设定变量 (postfix)
35 (29, ): 从菜单中选取 (1️⃣仅前缀)
36: 要求输入 (Q: "输入前缀", Default: "☯️💲Get Clipboard💲☯️", Ask for )
37: 设定变量 (prefix)
38: 文本
39: 设定变量 (postfix)
40 (29, ): 从菜单中选取 (仅后缀1️⃣)
41: 文本
42: 设定变量 (prefix)
43: 要求输入 (Q: "输入后缀", Default: "☯️💲Get Clipboard💲☯️", Ask for )
44: 设定变量 (postfix)
45 (29, ): 从菜单中选取
46: 为每个项目重复
47: 获取文件的详细信息 (Name)
48: 设定变量 (file_name)
49: 获取文件的详细信息 (File Extension)
50: 设定变量 (file_extension)
51: 文本 (☯️💲prefix💲☯️☯️💲file_name💲☯️.☯️💲file_extension💲☯️☯️💲postfix💲☯️)
52: 设定变量 (comb)
53: 从输入中获取数字
54: 如果 (4 )
55: 添加到变量 (names)
56 (54, 4 ): 如果
57: 如果 (4 )
58: 从输入中获取文本
59: 如果 (99 ☯️💲file_extension💲☯️)
60: 添加到变量 (names)
61 (59, 99 ☯️💲f...): 如果
62 (57, 4 ): 如果
63: 如果 (4 )
64: 从输入中获取文本
65: 如果 (999 ☯️💲file_extension💲☯️)
66: 添加到变量 (names)
67 (65, 999 ☯️💲...): 如果
68 (63, 4 ): 如果
69 (57, 4 ): 如果
70 (54, 4 ): 如果
71 (46, ): 为每个项目重复
72: 注释 (获取文件夹内的文件名和文件扩展名)
73: 注释 (排序)
74: 计数
75: 设定变量 (get)
76: 过滤文章
77: 为每个项目重复
78: 匹配文本 (Case Sensitive: Yes, Pattern: ^[\s\S])
79: 设定变量 (first_char)
80: 匹配文本 (Case Sensitive: Yes, Pattern: [a-zA-Z])
81: 设定变量 (match_a2z)
82: 匹配文本 (Case Sensitive: Yes, Pattern: [0-9])
83: 设定变量 (match_number)
84: 文本 ([\ud83c\udc00-\ud83c\udfff]|[\ud83d\udc00-\ud83d\udfff]|[\u2600-\u27ff])
85: 设定变量 (pattern)
86: 匹配文本 (Case Sensitive: Yes, Pattern: ☯️💲pattern💲☯️)
87: 设定变量 (match_emoji)
88: 匹配文本 (Case Sensitive: Yes, Pattern: [\u4e00-\u9fa5])
89: 设定变量 (match_chinese)
90: 如果 (100 )
91: 添加到变量 (sorted_a2z)
92 (90, 100 ): 如果
93: 如果 (100 )
94: 添加到变量 (sorted_emoji)
95 (93, 100 ): 如果
96: 如果 (100 )
97: 添加到变量 (sorted_number)
98 (96, 100 ): 如果
99: 如果 (100 )
100: 为每个项目重复
101: 过滤文章
102: 添加到变量 (sorted_chinese)
103 (100, ): 为每个项目重复
104 (99, 100 ): 如果
105: 添加到变量 (sorted_char)
106 (99, 100 ): 如果
107 (96, 100 ): 如果
108 (93, 100 ): 如果
109 (90, 100 ): 如果
110 (77, ): 为每个项目重复
111: 注释 (可自定义顺序)
112: 文本 (☯️💲sorted_emoji💲☯️⏎☯️💲sorted_number💲☯️⏎☯️💲sorted_a2z💲☯️⏎☯️💲sorted_chinese💲☯️⏎☯️💲sorted_char💲☯️)
113: 设定变量 (result)
114: 注释 (排序)
115: 拷贝至剪贴板
116: 显示通知 (Title: 文件夹内共☯️💲all💲☯️个文件，得到☯️💲get💲☯️个结果, Message: 结果已拷贝, Play Sound: )
117: 快速查看
```

