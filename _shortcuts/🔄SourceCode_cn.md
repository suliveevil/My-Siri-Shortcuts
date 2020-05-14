# 🔄SourceCode

## 快捷指令信息

快捷指令：		🔄SourceCode
动作数量：	94
文件大小：	15 KB

魔术变量数量：	62
自定义变量数量：	23

Glyph 编号 : 	59821
Glyph 颜色 : 	3679049983

快捷指令类型 : 

WatchKit
ActionExtension

## 内容类型 : 

GenericFile ,String 

## 依赖 :



## URL :



## 注释内容:

```text

```

## 动作列表 : 

```text
1: 词典
2: 从菜单中选取
3 (2, ): 从菜单中选取 (✳️          Import           ✳️)
4: 获取文件
5: 获取文件的详细信息 (Name)
6: 设定变量 (file_name)
7: 获取文件的详细信息 (File Extension)
8: 如果 (99 shortcut)
9: 设定变量 (file)
10 (8, 99 short...): 如果
11: 文本 (plist⏎txt⏎xml)
12: 如果 (99 ☯️💲文件扩展名💲☯️)
13: 设定名称 (☯️💲file_name💲☯️.plist, without File Extension)
14: Base64 编码
15: 设定名称 (☯️💲file_name💲☯️.shortcut, with File Extension)
16: 设定变量 (file)
17 (12, 99 ☯️💲文...): 如果
18 (8, 99 short...): 如果
19: 获取文件链接
20: 获取 URL 组件 (Path)
21: URL (shortcuts:/☯️💲URL的组件💲☯️)
22: 打开 URL
23 (2, ): 从菜单中选取 (✅       Export One      ⚠️)
24: 获取我的快捷指令
25: 从列表中选取 (Q: "Choose One Shortcut then export it", Select One)
26: 设定变量 (sc)
27: 文本 (⚠️          Both         ✅⏎✅          Plist          ✅⏎⚠️shortcut (BPlist)⚠️)
28: 拆分文本
29: 从列表中选取
30: 设定变量 (choose)
31: 如果 (99 ⚠️)
32: 添加到变量 (one)
33 (31, 99 ⚠️): 如果
34: 如果 (99 ✅)
35: 设定名称 (☯️💲sc|Name💲☯️.plist, without File Extension)
36: 从输入中获取文本
37: 设定名称 (☯️💲sc|Name💲☯️.txt, without File Extension)
38: 添加到变量 (one)
39 (34, 99 ✅): 如果
40: 存储文件
41 (2, ): 从菜单中选取 (✅Export All   (Plist)   ✅)
42: 设定变量 (init_time)
43: 文本 (☯️💲init_time💲☯️)
44: 替换文本 (Replace [^\w] with -, Regex: Yes, Case Sensitive: Yes)
45: 设定变量 (foldername)
46: 创建文件夹 (Path: "0_source_code/☯️💲foldername💲☯️")
47: 获取我的快捷指令
48: 计数
49: 设定变量 (numbers)
50: 计算 (÷ 10)
51: 为数字取整
52: 设定变量 (step)
53: 数字 (0)
54: 设定变量 (zero)
55: 为每个项目重复
56: 设定名称 (☯️💲Repeat Item|Name💲☯️.plist, without File Extension)
57: 从输入中获取文本
58: 设定名称 (☯️💲Repeat Item|Name💲☯️.txt, without File Extension)
59: 存储文件 (0_source_code/☯️💲foldername💲☯️/)
60: 计算 (Modulus ☯️💲step💲☯️)
61: 如果 (4 )
62: 计算 (÷ ☯️💲numbers💲☯️)
63: 计算 (× 100)
64: 为数字取整
65: 设定变量 (percent)
66: 设定变量 (time_now)
67: is.workflow.actions.gettimebetweendates (between  in Seconds)
68: 设定变量 (time_spend)
69: 显示通知 (Title: Progressing: ☯️💲percent💲☯️ %, Message: Count: ☯️💲Repeat Index💲☯️, TimeSpend: ☯️💲time_spend💲☯️ s, Play Sound: No)
70 (61, 4 ): 如果
71: 无
72 (61, 4 ): 如果
73 (55, ): 为每个项目重复
74: 设定变量 (time_now)
75: is.workflow.actions.gettimebetweendates (between  in Seconds)
76: 设定变量 (time_spend)
77: 显示通知 (Title: Done! 100%, Message: Count: ☯️💲numbers💲☯️, TimeSpend: ☯️💲time_spend💲☯️ s, Play Sound: No)
78 (2, ): 从菜单中选取 (⚠️Export All   (BPlist) ⚠️)
79: 设定变量 (init_time)
80: 从输入中获取文本
81: 替换文本 (Replace [^\d] with -, Regex: Yes, Case Sensitive: Yes)
82: 设定变量 (foldername)
83: 创建文件夹 (Path: "0_source_code/☯️💲foldername💲☯️")
84: 获取我的快捷指令
85: 计数
86: 设定变量 (numbers)
87: 为每个项目重复
88: 存储文件 (0_source_code/☯️💲foldername💲☯️)
89 (87, ): 为每个项目重复
90: 设定变量 (time_now)
91: is.workflow.actions.gettimebetweendates (between  in Seconds)
92: 设定变量 (time_spend)
93: 显示通知 (Title: Done! 100%, Message: Count: ☯️💲numbers💲☯️, TimeSpend: ☯️💲time_spend💲☯️ s, Play Sound: No)
94 (2, ): 从菜单中选取
```

