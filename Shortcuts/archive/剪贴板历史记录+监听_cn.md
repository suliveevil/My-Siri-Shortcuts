# 剪贴板历史记录+监听

## 快捷指令信息

快捷指令：	剪贴板历史记录+监听
动作数量：	128
文件大小：	17 KB

魔术变量数量 : 97
自定义变量数量 : 32

Glyph 编号 : 59454
Glyph 颜色 : 463140863

快捷指令类型 : 

WatchKit
NCWidget

## 内容类型 : 

AppStoreApp ,Article ,Contact ,Date ,EmailAddress ,GenericFile ,Image ,iTunesProduct ,Location ,DCMapsLink ,AVAsset ,PDF ,PhoneNumber ,RichText ,SafariWebPage ,String ,URL 

## 依赖 :

- 剪贴板历史记录+监听

## URL :



## 注释内容:

```text
- 作者：suliveevil
来源：捷径盒 © 版权归作者所有
发布时间：2020-06-02 16:03
作品网址：https://jiejinghe.com/shortcuts/1830865920
- 提醒
- 检查
- 配置
- 检查记录文件是否存在
- 处理历史记录和剪贴板
- 设置时间标签
设置提醒内容
```

## 动作列表 : 

```text
1: 注释 (作者：suliveevil⏎来源：捷径盒 © 版权归作者所有⏎发布时间：2020-06-02 16:03⏎作品网址：https://jiejinghe.com/shortcuts/1830865920)
2: com.jiejinghe.luke.ShortcutUpdateCheckIntent
3: 词典
4: 获取词典值 (Key: 记录文件的名称)
5: 设定变量 (file_name)
6: 注释 (提醒)
7: 文本 (⚠️剪贴板历史监听+记录⚠️⏎⚠️  快捷指令须前台运行  ⚠️⏎⚠️分屏模式或者浮动模式⚠️)
8: 设定变量 (title)
9: 文本 (⚠️ 即将开始监听和记录 ⚠️⏎------------------------------⏎剪贴板历史保存在⏎📁iCloud Drive/Shortcuts/⏎☯️💲file_name💲☯️.txt内⏎------------------------------⏎)
10: 设定变量 (content)
11: 注释 (检查)
12: 获取文件 (☯️💲file_name💲☯️.txt)
13: 如果 (101 ☯️💲类型💲☯️)
14: 文本
15: 设定名称 (☯️💲file_name💲☯️.txt, without File Extension)
16: 存储文件
17: 运行快捷指令 (Workflow "剪贴板历史记录+监听", Don’t Show When Run)
18 (13, 101 ☯️💲...): 如果
19: 注释 (配置)
20: 词典
21: 设定变量 (config)
22: 从菜单中选取 (☯️💲content💲☯️)
23 (22, ☯️💲cont...): 从菜单中选取 (⬇️    顺序合并   🗳)
24: 获取词典值 (Key: order.asc)
25: 设定变量 (order)
26: 获取词典值 (Key: option.merge)
27: 设定变量 (option)
28 (22, ☯️💲cont...): 从菜单中选取 (⬆️    逆序合并   🗳)
29: 获取词典值 (Key: order.desc)
30: 设定变量 (order)
31: 获取词典值 (Key: option.merge)
32: 设定变量 (option)
33 (22, ☯️💲cont...): 从菜单中选取 (⬇️ 顺序键值对 🗃)
34: 获取词典值 (Key: order.asc)
35: 设定变量 (order)
36: 获取词典值 (Key: option.kv)
37: 设定变量 (option)
38 (22, ☯️💲cont...): 从菜单中选取 (⬆️ 逆序键值对 🗃)
39: 获取词典值 (Key: order.desc)
40: 设定变量 (order)
41: 获取词典值 (Key: option.kv)
42: 设定变量 (option)
43 (22, ☯️💲cont...): 从菜单中选取
44: 要求输入 (Q: "设置监听时长（分钟）", Default: "", Ask for Number)
45: 设定变量 (minutes)
46: 文本
47: 设定变量 (clip_check)
48: 注释 (检查记录文件是否存在)
49: 注释 (处理历史记录和剪贴板)
50: 如果 (100 )
51: 从菜单中选取 (是否清空)
52 (51, 是否清空): 从菜单中选取 (✅   不清空，开始监听   ✅)
53: 无
54 (51, 是否清空): 从菜单中选取 (⚠️     清空当前剪贴板     ⚠️)
55: 拷贝至剪贴板
56 (51, 是否清空): 从菜单中选取 (❌       清空历史记录       📄)
57: 设定名称 (☯️💲file_name💲☯️.txt, without File Extension)
58: 存储文件
59 (51, 是否清空): 从菜单中选取 (❌清空历史记录和剪贴板❌)
60: 拷贝至剪贴板
61: 设定名称 (☯️💲file_name💲☯️.txt, without File Extension)
62: 存储文件
63 (51, 是否清空): 从菜单中选取
64 (50, 100 ): 如果
65: 注释 (设置时间标签⏎设置提醒内容)
66: 从输入中获取数字
67: 如果 (4 )
68: is.workflow.actions.date (Current Date)
69: 从输入中获取文本
70: 替换文本 (Replace [^a-zA-Z0-9] with -, Regex: Yes, Case Sensitive: Yes)
71: 文本 (☯️💲clip_check💲☯️⏎"☯️💲更新后的文本💲☯️":[⏎☯️💲clip_check💲☯️)
72: 设定变量 (history)
73: 追加到文件 (File: "☯️💲file_name💲☯️.txt")
74 (67, 4 ): 如果
75: 获取文件 (☯️💲file_name💲☯️.txt)
76: 获取文件的详细信息 (File Size)
77: 格式化文件大小 (Bytes)
78: 设定变量 (byte_init)
79: 数字 (0)
80: 设定变量 (times)
81: 数字 (.5)
82: 设定变量 (half_second)
83: 计算 (× 2)
84: 设定变量 (second)
85: 数字 (60)
86: 计算 (× ☯️💲数字💲☯️)
87: 计算 (× ☯️💲minutes💲☯️)
88: 设定变量 (repeat_an_hour)
89: 重复 (☯️💲repeat_an_hour💲☯️ repetitions)
90: 获取剪贴板
91: 如果 (5 ☯️💲clip_check💲☯️)
92: 计算 ( 1)
93: 设定变量 (times)
94: 显示通知 (Title: , Message: ☯️💲Get Clipboard💲☯️, Play Sound: No)
95: 词典
96: 获取词典值 (All Keys)
97: 设定变量 (key)
98: 获取词典值 (All Values)
99: 设定变量 (value)
100: 从输入中获取数字
101: 如果 (4 )
102: 文本 (	"☯️💲key💲☯️":⏎		"☯️💲value💲☯️",)
103: 拷贝至剪贴板
104: 设定变量 (clip_check)
105: 设定变量 (clip_log)
106: 追加到文件 (File: "cliphist.txt")
107 (101, 4 ): 如果
108: 拷贝至剪贴板
109: 设定变量 (clip_check)
110: 设定变量 (clip_log)
111: 追加到文件 (File: "☯️💲file_name💲☯️.txt")
112 (101, 4 ): 如果
113 (91, 5 ☯️💲cl...): 如果
114: 等待 (☯️💲half_second💲☯️ Seconds)
115 (89, ☯️💲repe...): 重复
116: 从输入中获取数字
117: 如果 (4 )
118: 文本 (],)
119: 追加到文件 (File: "cliphist.txt")
120 (117, 4 ): 如果
121: 追加到文件 (File: "cliphist.txt")
122 (117, 4 ): 如果
123: 获取文件的详细信息 (File Size)
124: 格式化文件大小 (Bytes)
125: 设定变量 (byte)
126: 计算 (- ☯️💲byte_init💲☯️)
127: 设定变量 (add)
128: 显示通知 (Title: 记录与监听已结束, Message: 已存储 ☯️💲times💲☯️条共☯️💲add💲☯️ 字节的文本, Play Sound: )
```

