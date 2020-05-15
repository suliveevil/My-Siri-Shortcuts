# 文件Diff

## 快捷指令信息

快捷指令：	文件Diff
动作数量：	18
文件大小：	9 KB

魔术变量数量 : 11
自定义变量数量 : 3

Glyph 编号 : 59771
Glyph 颜色 : 4292093695

快捷指令类型 : 

WatchKit
NCWidget

## 内容类型 : 

AppStoreApp ,Article ,Contact ,Date ,EmailAddress ,GenericFile ,Image ,iTunesProduct ,Location ,DCMapsLink ,AVAsset ,PDF ,PhoneNumber ,RichText ,SafariWebPage ,String ,URL 

## 依赖 :



## URL :



## 注释内容:

```text
- 来源：捷径盒 © 版权归作者所有
发布时间：2020-05-12 18:37
作品网址：https://jiejinghe.com/shortcuts/4120762331
```

## 动作列表 : 

```text
1: 注释 (来源：捷径盒 © 版权归作者所有⏎发布时间：2020-05-12 18:37⏎作品网址：https://jiejinghe.com/shortcuts/4120762331)
2: com.jiejinghe.luke.ShortcutUpdateCheckIntent
3: 词典
4: 文本 (/*  * Javascript Diff Algorithm  *  By John Resig (http://ejohn.org/)  *  Modified by Chu Alan "sprite"  *  * Released under the MIT license.  *  * More Info:  *  http://ejohn.org/projects/javascript-diff-algorithm/  */  function escape(s) {     var n = s;     n = n.replace(/&/g, "&amp;");     n = n.replace(/</g, "&lt;");     n = n.replace(/>/g, "&gt;");     n = n.replace(/"/g, "&quot;");      return n; }  function diffString( o, n ) {   o = o.replace(/\s+$/, '');   n = n.replace(/\s+$/, '');    var out = diff(o == "" ? [] : o.split(/\s+/), n == "" ? [] : n.split(/\s+/) );   var str = "";    var oSpace = o.match(/\s+/g);   if (oSpace == null) {     oSpace = ["\n"];   } else {     oSpace.push("\n");   }   var nSpace = n.match(/\s+/g);   if (nSpace == null) {     nSpace = ["\n"];   } else {     nSpace.push("\n");   }    if (out.n.length == 0) {       for (var i = 0; i < out.o.length; i++) {         str += '<del>' + escape(out.o[i]) + oSpace[i] + "</del>";       }   } else {     if (out.n[0].text == null) {       for (n = 0; n < out.o.length && out.o[n].text == null; n++) {         str += '<del>' + escape(out.o[n]) + oSpace[n] + "</del>";       }     }      for ( var i = 0; i < out.n.length; i++ ) {       if (out.n[i].text == null) {         str += '<ins>' + escape(out.n[i]) + nSpace[i] + "</ins>";       } else {         var pre = "";          for (n = out.n[i].row + 1; n < out.o.length && out.o[n].text == null; n++ ) {           pre += '<del>' + escape(out.o[n]) + oSpace[n] + "</del>";         }         str += " " + out.n[i].text + nSpace[i] + pre;       }     }   }      return str; }  function randomColor() {     return "rgb(" + (Math.random() * 100) + "%, " +                      (Math.random() * 100) + "%, " +                      (Math.random() * 100) + "%)"; } function diffString2( o, n ) {   o = o.replace(/\s+$/, '');   n = n.replace(/\s+$/, '');    var out = diff(o == "" ? [] : o.split(/\s+/), n == "" ? [] : n.split(/\s+/) );    var oSpace = o.match(/\s+/g);   if (oSpace == null) {     oSpace = ["\n"];   } else {     oSpace.push("\n");   }   var nSpace = n.match(/\s+/g);   if (nSpace == null) {     nSpace = ["\n"];   } else {     nSpace.push("\n");   }    var os = "";   var colors = new Array();   for (var i = 0; i < out.o.length; i++) {       colors[i] = randomColor();        if (out.o[i].text != null) {           os += '<span style="background-color: ' +colors[i]+ '">' +                  escape(out.o[i].text) + oSpace[i] + "</span>";       } else {           os += "<del>" + escape(out.o[i]) + oSpace[i] + "</del>";       }   }    var ns = "";   for (var i = 0; i < out.n.length; i++) {       if (out.n[i].text != null) {           ns += '<span style="background-color: ' +colors[out.n[i].row]+ '">' +                  escape(out.n[i].text) + nSpace[i] + "</span>";       } else {           ns += "<ins>" + escape(out.n[i]) + nSpace[i] + "</ins>";       }   }    return { o : os , n : ns }; }  function diff( o, n ) {   var ns = new Object();   var os = new Object();      for ( var i = 0; i < n.length; i++ ) {     if ( ns[ n[i] ] == null )       ns[ n[i] ] = { rows: new Array(), o: null };     ns[ n[i] ].rows.push( i );   }      for ( var i = 0; i < o.length; i++ ) {     if ( os[ o[i] ] == null )       os[ o[i] ] = { rows: new Array(), n: null };     os[ o[i] ].rows.push( i );   }      for ( var i in ns ) {     if ( ns[i].rows.length == 1 && typeof(os[i]) != "undefined" && os[i].rows.length == 1 ) {       n[ ns[i].rows[0] ] = { text: n[ ns[i].rows[0] ], row: os[i].rows[0] };       o[ os[i].rows[0] ] = { text: o[ os[i].rows[0] ], row: ns[i].rows[0] };     }   }      for ( var i = 0; i < n.length - 1; i++ ) {     if ( n[i].text != null && n[i+1].text == null && n[i].row + 1 < o.length && o[ n[i].row + 1 ].text == null &&           n[i+1] == o[ n[i].row + 1 ] ) {       n[i+1] = { text: n[i+1], row: n[i].row + 1 };       o[n[i].row+1] = { text: o[n[i].row+1], row: i + 1 };     }   }      for ( var i = n.length - 1; i > 0; i-- ) {     if ( n[i].text != null && n[i-1].text == null && n[i].row > 0 && o[ n[i].row - 1 ].text == null &&           n[i-1] == o[ n[i].row - 1 ] ) {       n[i-1] = { text: n[i-1], row: n[i].row - 1 };       o[n[i].row-1] = { text: o[n[i].row-1], row: i - 1 };     }   }      return { o: o, n: n }; } )
5: 设定变量 (diff)
6: 获取文件
7: 设定变量 (old)
8: 从输入中获取文本
9: 替换文本 (Replace ` with \`, Regex: No, Case Sensitive: Yes)
10: 设定变量 (old_esc)
11: 获取文件
12: 设定变量 (new)
13: 从输入中获取文本
14: 替换文本 (Replace ` with \`, Regex: No, Case Sensitive: Yes)
15: 设定变量 (new_esc)
16: 文本 (<!DOCTYPE html><head><meta http-equiv="content-type" content="text/html; charset=UTF-16">⏎<script>⏎☯️💲diff💲☯️⏎function htmlEntities(str) {⏎    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');⏎}⏎var oldText =(`☯️💲old_esc💲☯️`);⏎var newText =(`☯️💲new_esc💲☯️`);⏎var result = diffString(htmlEntities(oldText), htmlEntities(newText));⏎result = result.replace(/&amp;lt;/g, '&lt;').replace(/&amp;gt;/g, '&gt;');⏎var html = `<!DOCTYPE html>⏎<head>⏎<meta http-equiv="content-type" content="text/html; charset=UTF-16">⏎<meta name="viewport" content="width=device-width">⏎<style>⏎	del {⏎		background: #ffe6e6;⏎		text-decoration: strikethrough;⏎	}⏎	ins {⏎		background: #e6ffe6;⏎	}⏎	pre {⏎		font-size: 12px;⏎		line-height: 16px;⏎	}⏎</style>⏎</head>⏎<body><pre>${result}</pre></body>⏎</html>⏎`⏎document.write(html);⏎</script></head><body></body></html>)
17: 设定名称 (diff.html, with File Extension)
18: 显示网页
```

