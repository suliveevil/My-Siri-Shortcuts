# _🔄SourceCode🔄_

## 快捷指令信息

快捷指令：	_🔄SourceCode🔄_
动作数量：	76
文件大小：	12 KB

魔术变量数量 : 49
自定义变量数量 : 20

Glyph 编号 : 59826
Glyph 颜色 : 2071128575

快捷指令类型 : 

WatchKit
NCWidget

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
3: 从菜单中选取
4 (3, ): 从菜单中选取 (➕          Import            ➕)
5: 获取文件
6: 设定名称 (☯️💲文件|Name💲☯️.shortcut, without File Extension)
7: 获取文件链接
8: 获取 URL 组件 (Path)
9: URL (workflow:/☯️💲URL的组件💲☯️)
10: 打开 URL
11 (3, ): 从菜单中选取 (✅Export One (Plist)   🔘)
12: 获取我的快捷指令
13: 从列表中选取 (Q: "Export One", Select One)
14: 设定名称 (☯️💲选取的项目|Name💲☯️.plist, without File Extension)
15: 从输入中获取文本
16: 设定名称 (☯️💲选取的项目|Name💲☯️.txt, without File Extension)
17: 存储文件
18 (3, ): 从菜单中选取 (✅Export All   (Plist)    ✅)
19: 设定变量 (init_time)
20: 文本 (☯️💲init_time💲☯️)
21: 替换文本 (Replace [^\w] with -, Regex: Yes, Case Sensitive: Yes)
22: 设定变量 (foldername)
23: 创建文件夹 (Path: "0_source_code/☯️💲foldername💲☯️")
24: 获取我的快捷指令
25: 计数
26: 设定变量 (numbers)
27: 计算 (÷ 10)
28: 为数字取整
29: 设定变量 (step)
30: 数字 (0)
31: 设定变量 (zero)
32: 为每个项目重复
33: 设定名称 (☯️💲Repeat Item|Name💲☯️.plist, without File Extension)
34: 从输入中获取文本
35: 设定名称 (☯️💲Repeat Item|Name💲☯️.txt, without File Extension)
36: 存储文件 (0_source_code/☯️💲foldername💲☯️/)
37: 计算 (Modulus ☯️💲step💲☯️)
38: 如果 (4 )
39: 计算 (÷ ☯️💲numbers💲☯️)
40: 计算 (× 100)
41: 为数字取整
42: 设定变量 (percent)
43: 设定变量 (time_now)
44: is.workflow.actions.gettimebetweendates (between  in Seconds)
45: 设定变量 (time_spend)
46: 显示通知 (Title: Progressing: ☯️💲percent💲☯️ %, Message: Count: ☯️💲Repeat Index💲☯️, TimeSpend: ☯️💲time_spend💲☯️ s, Play Sound: No)
47 (38, 4 ): 如果
48: 无
49 (38, 4 ): 如果
50 (32, ): 为每个项目重复
51: 设定变量 (time_now)
52: is.workflow.actions.gettimebetweendates (between  in Seconds)
53: 设定变量 (time_spend)
54: 显示通知 (Title: Done! 100%, Message: Count: ☯️💲numbers💲☯️, TimeSpend: ☯️💲time_spend💲☯️ s, Play Sound: No)
55 (3, ): 从菜单中选取 (☯️Export One (BPlist) 🔘)
56: 获取我的快捷指令
57: 从列表中选取
58: 存储文件
59 (3, ): 从菜单中选取 (☯️Export All   (BPlist)  ☯️)
60: 设定变量 (init_time)
61: 从输入中获取文本
62: 替换文本 (Replace [^\d] with -, Regex: Yes, Case Sensitive: Yes)
63: 设定变量 (foldername)
64: 创建文件夹 (Path: "0_source_code/☯️💲foldername💲☯️")
65: 获取我的快捷指令
66: 计数
67: 设定变量 (numbers)
68: 显示通知 (Title: Backup Started, Message: , Play Sound: No)
69: 为每个项目重复
70: 存储文件 (0_source_code/☯️💲foldername💲☯️)
71 (69, ): 为每个项目重复
72: 设定变量 (time_now)
73: is.workflow.actions.gettimebetweendates (between  in Seconds)
74: 设定变量 (time_spend)
75: 显示通知 (Title: Done! 100%, Message: Count: ☯️💲numbers💲☯️, TimeSpend: ☯️💲time_spend💲☯️ s, Play Sound: No)
76 (3, ): 从菜单中选取
```

