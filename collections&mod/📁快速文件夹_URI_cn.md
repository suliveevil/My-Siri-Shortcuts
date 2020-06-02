# 📁快速文件夹_URI

## 快捷指令信息

快捷指令：	📁快速文件夹_URI
动作数量：	53
文件大小：	17 KB

魔术变量数量 : 34
自定义变量数量 : 16

Glyph 编号 : 59836
Glyph 颜色 : 463140863

快捷指令类型 : 

WatchKit
ActionExtension

## 内容类型 : 

String 

## 依赖 :



## URL :



## 注释内容:

```text
- 来源：捷径盒 © 版权归作者所有
发布时间：2020-05-27 19:56
作品网址：https://jiejinghe.com/shortcuts/9444206601
- * checking if a the Stifmeister.json file exists. If it does not, assume it's the first time this shortcut is run. Create the file and prompt to import the Scriptable script. 
- * troubleshooting: 
if you accidentally tapped Proceed to Import without scriptable installed,
- * if there's no input passed, use the Scriptable script to pick a folder. 
- * generate a random color for the shortcut
- * update the plist template with the path to the folder and color. 
```

## 动作列表 : 

```text
1: 注释 (来源：捷径盒 © 版权归作者所有⏎发布时间：2020-05-27 19:56⏎作品网址：https://jiejinghe.com/shortcuts/9444206601)
2: com.jiejinghe.luke.ShortcutUpdateCheckIntent
3: 词典
4: 获取词典值 (Key: Shortcut_mod)
5: 设定变量 (self)
6: 获取词典值 (Key: settings.companion)
7: 设定变量 (script_name)
8: 注释 (* checking if a the Stifmeister.json file exists. If it does not, assume it's the first time this shortcut is run. Create the file and prompt to import the Scriptable script. )
9: 注释 (* troubleshooting: ⏎if you accidentally tapped Proceed to Import without scriptable installed,)
10: 获取文件 (☯️💲self💲☯️.json)
11: 如果 (101 )
12: 文本 (This shortcut requires a script to be imported to the Scriptable app.  ⏎After importing the script, go back and run this shortcut again. ⏎)
13: 从菜单中选取 (☯️💲Text💲☯️)
14 (13, ☯️💲Text...): 从菜单中选取 (选取文件夹)
15: 无
16 (13, ☯️💲Text...): 从菜单中选取 (下载 Scriptable)
17: URL (https://scriptable.app)
18: 打开 URL
19: 退出快捷指令
20 (13, ☯️💲Text...): 从菜单中选取
21: 存储文件 (☯️💲self💲☯️.json)
22: 文本 (⏎{⏎  "always_run_in_app" : false,⏎  "icon" : {⏎    "color" : "orange",⏎    "glyph" : "folder"⏎  },⏎  "name" : "☯️💲词典值💲☯️",⏎  "script" : "\n\/\/ This script is a companion script to \n\/\/ Stifmeister. To know more, visit\n\/\/ https:\/\/routinehub.co\/shortcut\/3636\n\/\/ by @supermamon\n\nconst CALLER     = '☯️💲词典值💲☯️'\nconst CALLER_ENC = encodeURIComponent(CALLER)\n\nconst dir     = await DocumentPicker.openFolder()\nconst dir_enc = encodeURIComponent(dir)\n\nSafari.open(`shortcuts:\/\/run-shortcut?name=${CALLER_ENC}&input=text&text=${dir_enc}`)\n\nScript.complete()",⏎  "share_sheet_inputs" : [⏎  ⏎  ]⏎}⏎)
23: 设定名称 (☯️💲script_name💲☯️.scriptable, with0 File Extension)
24: 显示提醒 (Title: 即将打开 Scriptable, Message: 请保存`☯️💲script_name💲☯️`脚本,  Cancel Button)
25: 打开方式...
26: 退出快捷指令
27 (11, 101 ): 如果
28: 如果 (101 )
29: 注释 (* if there's no input passed, use the Scriptable script to pick a folder. )
30: 运行脚本
31: 退出快捷指令
32 (28, 101 ): 如果
33: 注释 (* generate a random color for the shortcut)
34: 词典
35: 获取词典值 (Key: colors)
36: 获取词典值 (All Values)
37: 从列表中获取项目 (Random Item)
38: 注释 (* update the plist template with the path to the folder and color. )
39: 编码 URL
40: 从菜单中选取
41 (40, ): 从菜单中选取 (拷贝到剪贴板)
42: 拷贝至剪贴板
43: 显示通知 (Title: URI 路径已拷贝, Message: ☯️💲URL编码后的文本💲☯️, Play Sound: )
44 (40, ): 从菜单中选取 (生成快捷指令)
45: 文本 (<?xml version="1.0" encoding="UTF-8"?>⏎<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">⏎<plist version="1.0">⏎<dict>⏎	<key>WFWorkflowActions</key>⏎	<array>⏎		<dict>⏎			<key>WFWorkflowActionIdentifier</key>⏎			<string>is.workflow.actions.url</string>⏎			<key>WFWorkflowActionParameters</key>⏎			<dict>⏎				<key>UUID</key>⏎				<string>3946DECF-E08E-43A1-8AB7-F08F4E3FFC3C</string>⏎				<key>WFURLActionURL</key>⏎				<string>shareddocuments://☯️💲URL Encoded Text💲☯️</string>⏎			</dict>⏎		</dict>⏎		<dict>⏎			<key>WFWorkflowActionIdentifier</key>⏎			<string>is.workflow.actions.openurl</string>⏎			<key>WFWorkflowActionParameters</key>⏎			<dict>⏎				<key>WFInput</key>⏎				<dict>⏎					<key>Value</key>⏎					<dict>⏎						<key>OutputName</key>⏎						<string>URL</string>⏎						<key>OutputUUID</key>⏎						<string>3946DECF-E08E-43A1-8AB7-F08F4E3FFC3C</string>⏎						<key>Type</key>⏎						<string>ActionOutput</string>⏎					</dict>⏎					<key>WFSerializationType</key>⏎					<string>WFTextTokenAttachment</string>⏎				</dict>⏎			</dict>⏎		</dict>⏎	</array>⏎	<key>WFWorkflowClientRelease</key>⏎	<string>3.0</string>⏎	<key>WFWorkflowClientVersion</key>⏎	<string>1050</string>⏎	<key>WFWorkflowIcon</key>⏎	<dict>⏎		<key>WFWorkflowIconGlyphNumber</key>⏎		<integer>59737</integer>⏎		<key>WFWorkflowIconStartColor</key>⏎		<integer>☯️💲Item from List💲☯️</integer>⏎	</dict>⏎	<key>WFWorkflowImportQuestions</key>⏎	<array/>⏎	<key>WFWorkflowInputContentItemClasses</key>⏎	<array>⏎		<string>WFAppStoreAppContentItem</string>⏎		<string>WFArticleContentItem</string>⏎		<string>WFContactContentItem</string>⏎		<string>WFDateContentItem</string>⏎		<string>WFEmailAddressContentItem</string>⏎		<string>WFGenericFileContentItem</string>⏎		<string>WFImageContentItem</string>⏎		<string>WFiTunesProductContentItem</string>⏎		<string>WFLocationContentItem</string>⏎		<string>WFDCMapsLinkContentItem</string>⏎		<string>WFAVAssetContentItem</string>⏎		<string>WFPDFContentItem</string>⏎		<string>WFPhoneNumberContentItem</string>⏎		<string>WFRichTextContentItem</string>⏎		<string>WFSafariWebPageContentItem</string>⏎		<string>WFStringContentItem</string>⏎		<string>WFURLContentItem</string>⏎	</array>⏎	<key>WFWorkflowMinimumClientVersion</key>⏎	<integer>900</integer>⏎	<key>WFWorkflowMinimumClientVersionString</key>⏎	<string>900</string>⏎	<key>WFWorkflowTypes</key>⏎	<array>⏎		<string>WatchKit</string>⏎	</array>⏎</dict>⏎</plist>⏎)
46: 要求输入 (Q: "What do you want to name your folder shortcut?", Default: "", Ask for )
47: 设定名称 (☯️💲ShortcutName💲☯️.shortcut, with File Extension)
48: 获取文件链接
49: 匹配文本 (Case Sensitive: Yes, Pattern: [^\/]+$)
50: 文本 (☯️💲Matches💲☯️)
51: URL (workflow://shortcuts/☯️💲uuid💲☯️)
52: 打开 URL
53 (40, ): 从菜单中选取
```

