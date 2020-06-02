# JSON_缩进

## 快捷指令信息

快捷指令：	JSON_缩进
动作数量：	33
文件大小：	5 KB

魔术变量数量 : 16
自定义变量数量 : 6

Glyph 编号 : 59445
Glyph 颜色 : 463140863

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
1: 如果 (101 )
2: 从菜单中选取
3 (2, ): 从菜单中选取 (文件)
4: 获取文件
5 (2, ): 从菜单中选取 (剪贴板)
6: 获取剪贴板
7 (2, ): 从菜单中选取 (手动输入)
8: 要求输入 (Q: "输入 JSON 内容", Default: "", Ask for )
9 (2, ): 从菜单中选取
10 (1, 101 ): 如果
11: 从输入中获取文本
12 (1, 101 ): 如果
13: 从输入中获取词典
14: 设定变量 (json)
15: 如果 (101 )
16: 显示结果
17 (15, 101 ): 如果
18: 文本 (制表符)
19: 列表
20: 从列表中选取 (Q: "缩进", Select One)
21: 如果 (4 ☯️💲Tab Menu Item💲☯️)
22: 文本 ('\t')
23 (21, 4 ☯️💲Ta...): 如果
24: 从输入中获取数字
25 (21, 4 ☯️💲Ta...): 如果
26: 设定变量 (indent)
27 (15, 101 ): 如果
28: 文本 (data:text/html;charset=utf-8,<script>document.write(encodeURIComponent(JSON.stringify(☯️💲json💲☯️,null,☯️💲indent💲☯️)));</script>)
29: URL (☯️💲文本💲☯️)
30: 获取网页内容
31: 编码 URL (Decode)
32: 设定名称 (json_indent.json, without File Extension)
33: 存储文件
```

