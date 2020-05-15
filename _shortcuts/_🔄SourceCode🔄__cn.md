# _🔄SourceCode🔄_

## 快捷指令信息

快捷指令：	_🔄SourceCode🔄_
动作数量：	74
文件大小：	12 KB

魔术变量数量 : 47
自定义变量数量 : 19

Glyph 编号 : 59826
Glyph 颜色 : 3679049983

快捷指令类型 : 

WatchKit

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
8: 打开 URL
9 (3, ): 从菜单中选取 (✅Export One (Plist)   🔘)
10: 获取我的快捷指令
11: 从列表中选取 (Q: "Export One", Select One)
12: 设定名称 (☯️💲选取的项目|Name💲☯️.plist, without File Extension)
13: 从输入中获取文本
14: 设定名称 (☯️💲选取的项目|Name💲☯️.txt, without File Extension)
15: 存储文件
16 (3, ): 从菜单中选取 (✅Export All   (Plist)    ✅)
17: 设定变量 (init_time)
18: 文本 (☯️💲init_time💲☯️)
19: 替换文本 (Replace [^\w] with -, Regex: Yes, Case Sensitive: Yes)
20: 设定变量 (foldername)
21: 创建文件夹 (Path: "0_source_code/☯️💲foldername💲☯️")
22: 获取我的快捷指令
23: 计数
24: 设定变量 (numbers)
25: 计算 (÷ 10)
26: 为数字取整
27: 设定变量 (step)
28: 数字 (0)
29: 设定变量 (zero)
30: 为每个项目重复
31: 设定名称 (☯️💲Repeat Item|Name💲☯️.plist, without File Extension)
32: 从输入中获取文本
33: 设定名称 (☯️💲Repeat Item|Name💲☯️.txt, without File Extension)
34: 存储文件 (0_source_code/☯️💲foldername💲☯️/)
35: 计算 (Modulus ☯️💲step💲☯️)
36: 如果 (4 )
37: 计算 (÷ ☯️💲numbers💲☯️)
38: 计算 (× 100)
39: 为数字取整
40: 设定变量 (percent)
41: 设定变量 (time_now)
42: is.workflow.actions.gettimebetweendates (between  in Seconds)
43: 设定变量 (time_spend)
44: 显示通知 (Title: Progressing: ☯️💲percent💲☯️ %, Message: Count: ☯️💲Repeat Index💲☯️, TimeSpend: ☯️💲time_spend💲☯️ s, Play Sound: No)
45 (36, 4 ): 如果
46: 无
47 (36, 4 ): 如果
48 (30, ): 为每个项目重复
49: 设定变量 (time_now)
50: is.workflow.actions.gettimebetweendates (between  in Seconds)
51: 设定变量 (time_spend)
52: 显示通知 (Title: Done! 100%, Message: Count: ☯️💲numbers💲☯️, TimeSpend: ☯️💲time_spend💲☯️ s, Play Sound: No)
53 (3, ): 从菜单中选取 (☯️Export One (BPlist) 🔘)
54: 获取我的快捷指令
55: 从列表中选取
56: 存储文件
57 (3, ): 从菜单中选取 (☯️Export All   (BPlist)  ☯️)
58: 设定变量 (init_time)
59: 从输入中获取文本
60: 替换文本 (Replace [^\d] with -, Regex: Yes, Case Sensitive: Yes)
61: 设定变量 (foldername)
62: 创建文件夹 (Path: "0_source_code/☯️💲foldername💲☯️")
63: 获取我的快捷指令
64: 计数
65: 设定变量 (numbers)
66: 显示通知 (Title: Backup Started, Message: , Play Sound: No)
67: 为每个项目重复
68: 存储文件 (0_source_code/☯️💲foldername💲☯️)
69 (67, ): 为每个项目重复
70: 设定变量 (time_now)
71: is.workflow.actions.gettimebetweendates (between  in Seconds)
72: 设定变量 (time_spend)
73: 显示通知 (Title: Done! 100%, Message: Count: ☯️💲numbers💲☯️, TimeSpend: ☯️💲time_spend💲☯️ s, Play Sound: No)
74 (3, ): 从菜单中选取
```

