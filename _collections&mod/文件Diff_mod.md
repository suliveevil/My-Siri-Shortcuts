# 文件Diff_mod.shortcut

## 快捷指令信息

快捷指令：文件Diff_mod
动作数量：15
文件大小：9 KB

魔术变量数量：    9
自定义变量数量：3

Glyph 编号 : 59730
Glyph 颜色 : 3679049983

快捷指令类型 : 

WatchKit

## 依赖 :



## URLs :



## 动作列表 : 

```
1: 词典
2: 设定变量 (diff)
3: 获取文件
4: 设定变量 (old)
5: 从输入中获取文本
6: 替换文本 (Replace ` with \`, Regex: No, Case Sensitive: Yes)
7: 设定变量 (old_esc)
8: 获取文件
9: 设定变量 (new)
10: 从输入中获取文本
11: 替换文本 (Replace ` with \`, Regex: No, Case Sensitive: Yes)
12: 设定变量 (new_esc)
13: 文本 (<!DOCTYPE html>⏎<head>⏎<meta http-equiv="content-type" content="text/html; charset=UTF-16">⏎<script>⏎☯️💲diff💲☯️⏎function htmlEntities(str) {⏎    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');⏎}⏎var oldText =(`☯️💲old_esc💲☯️`);⏎var newText =(`☯️💲new_esc💲☯️`);⏎var result = diffString(htmlEntities(oldText), htmlEntities(newText));⏎result = result.replace(/&amp;lt;/g, '&lt;').replace(/&amp;gt;/g, '&gt;');⏎var html = `<!DOCTYPE html>⏎<head>⏎<meta http-equiv="content-type" content="text/html; charset=UTF-16">⏎<meta name="viewport" content="width=device-width">⏎<style>⏎	del {⏎		background: #ffe6e6;⏎		text-decoration: strikethrough;⏎	}⏎	ins {⏎		background: #e6ffe6;⏎	}⏎	pre {⏎		font-size: 12px;⏎		line-height: 16px;⏎	}⏎</style>⏎</head>⏎<body><pre>${result}</pre></body>⏎</html>⏎`⏎document.write(html);⏎</script>⏎</head>⏎<body>⏎</body>⏎</html>)
14: 设定名称 (diff.html, with File Extension)
15: 显示网页
```

## Content Classes : 

AppStoreApp ,Article ,Contact ,Date ,EmailAddress ,GenericFile ,Image ,iTunesProduct ,Location ,DCMapsLink ,AVAsset ,PDF ,PhoneNumber ,RichText ,SafariWebPage ,String ,URL 

## 注释:

```

```