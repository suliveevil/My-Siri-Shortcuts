# ✅SourceCode_Export.shortcut

## 快捷指令信息

快捷指令：✅SourceCode_Export
动作数量：48
文件大小：9 KB

魔术变量数量：    32
自定义变量数量：14

Glyph 编号 : 59826
Glyph 颜色 : 3679049983

快捷指令类型 : 

WatchKit

## 依赖 :



## URLs :



## 动作列表 : 

```
1: 词典
2: 从菜单中选取
3 (2, ): 从菜单中选取 (Export One)
4: 获取我的快捷指令
5: 从列表中选取 (Q: "Choose Shortcut then export it", Select One)
6: 设定名称 (☯️💲选取的项目|Name💲☯️.plist, without File Extension)
7: 从输入中获取文本
8: 设定名称 (☯️💲选取的项目|Name💲☯️.txt, without File Extension)
9: 存储文件
10 (2, ): 从菜单中选取 (Export All Shortcuts)
11: 设定变量 (init_time)
12: 文本 (☯️💲init_time💲☯️)
13: 替换文本 (Replace [^\w] with -, Regex: Yes, Case Sensitive: Yes)
14: 设定变量 (foldername)
15: 创建文件夹 (Path: "0_source_code/☯️💲foldername💲☯️")
16: 获取我的快捷指令
17: 计数
18: 设定变量 (numbers)
19: 计算 (÷ 10)
20: 为数字取整
21: 设定变量 (step)
22: 数字 (0)
23: 设定变量 (zero)
24: 显示通知 (Title: Backup Start !, Message: , Play Sound: No)
25: 为每个项目重复
26: 设定名称 (☯️💲Repeat Item|Name💲☯️.plist, without File Extension)
27: 从输入中获取文本
28: 设定名称 (☯️💲Repeat Item|Name💲☯️.txt, without File Extension)
29: 存储文件 (0_source_code/☯️💲foldername💲☯️/)
30: 计算 (Modulus ☯️💲step💲☯️)
31: 如果 (4 )
32: 计算 (÷ ☯️💲numbers💲☯️)
33: 计算 (× 100)
34: 为数字取整
35: 设定变量 (percent)
36: 设定变量 (time_now)
37: is.workflow.actions.gettimebetweendates (between  in Seconds)
38: 设定变量 (time_spend)
39: 显示通知 (Title: Progressing: ☯️💲percent💲☯️ %, Message: Count: ☯️💲Repeat Index💲☯️, TimeSpend: ☯️💲time_spend💲☯️ s, Play Sound: No)
40 (31, 4 ): 如果
41: 无
42 (31, 4 ): 如果
43 (25, ): 为每个项目重复
44: 设定变量 (time_now)
45: is.workflow.actions.gettimebetweendates (between  in Seconds)
46: 设定变量 (time_spend)
47: 显示通知 (Title: Done! 100%, Message: Count: ☯️💲numbers💲☯️, TimeSpend: ☯️💲time_spend💲☯️ s, Play Sound: No)
48 (2, ): 从菜单中选取
```

## Content Classes : 

AppStoreApp ,Article ,Contact ,Date ,EmailAddress ,GenericFile ,Image ,iTunesProduct ,Location ,DCMapsLink ,AVAsset ,PDF ,PhoneNumber ,RichText ,SafariWebPage ,String ,URL 

## 注释:

```

```