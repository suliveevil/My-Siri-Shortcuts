# 🔄SourceCode

## Shortcut Info

Shortcut：	🔄SourceCode
Action Count：	94
File Size：	15 KB

Magic  Variable : 62
Custom Variable : 23

Glyph Number : 59821
Glyph  Color : 3679049983

Shortcut Type : 

WatchKit
ActionExtension

## Content Class : 

GenericFile ,String 

## Dependencies :



## URL :



## Comments:

```text

```

## Action List : 

```text
1: Dictionary
2: Choose from Menu
3 (2, ): Choose (✳️          Import           ✳️)
4: Get File
5: Get Details of Files (Name)
6: Set Variable (file_name)
7: Get Details of Files (File Extension)
8: If (99 shortcut)
9: Set Variable (file)
10 (8, 99 short...): Otherwise
11: Text (plist⏎txt⏎xml)
12: If (99 ☯️💲文件扩展名💲☯️)
13: Set Name (☯️💲file_name💲☯️.plist, without File Extension)
14: Base64 Encode
15: Set Name (☯️💲file_name💲☯️.shortcut, with File Extension)
16: Set Variable (file)
17 (12, 99 ☯️💲文...): End If
18 (8, 99 short...): End If
19: Get Link to File
20: Get Component of URL (Path)
21: URL (shortcuts:/☯️💲URL的组件💲☯️)
22: Open URLs
23 (2, ): Choose (✅       Export One      ⚠️)
24: Get My Workflows
25: Choose from List (Q: "Choose One Shortcut then export it", Select One)
26: Set Variable (sc)
27: Text (⚠️          Both         ✅⏎✅          Plist          ✅⏎⚠️shortcut (BPlist)⚠️)
28: Split Text
29: Choose from List
30: Set Variable (choose)
31: If (99 ⚠️)
32: Add to Variable (one)
33 (31, 99 ⚠️): End If
34: If (99 ✅)
35: Set Name (☯️💲sc|Name💲☯️.plist, without File Extension)
36: Get Text from Input
37: Set Name (☯️💲sc|Name💲☯️.txt, without File Extension)
38: Add to Variable (one)
39 (34, 99 ✅): End If
40: Save File
41 (2, ): Choose (✅Export All   (Plist)   ✅)
42: Set Variable (init_time)
43: Text (☯️💲init_time💲☯️)
44: Replace Text (Replace [^\w] with -, Regex: Yes, Case Sensitive: Yes)
45: Set Variable (foldername)
46: Create Folder (Path: "0_source_code/☯️💲foldername💲☯️")
47: Get My Workflows
48: Count
49: Set Variable (numbers)
50: Calculate (÷ 10)
51: Round Number
52: Set Variable (step)
53: Number (0)
54: Set Variable (zero)
55: Repeat with Each
56: Set Name (☯️💲Repeat Item|Name💲☯️.plist, without File Extension)
57: Get Text from Input
58: Set Name (☯️💲Repeat Item|Name💲☯️.txt, without File Extension)
59: Save File (0_source_code/☯️💲foldername💲☯️/)
60: Calculate (Modulus ☯️💲step💲☯️)
61: If (4 )
62: Calculate (÷ ☯️💲numbers💲☯️)
63: Calculate (× 100)
64: Round Number
65: Set Variable (percent)
66: Set Variable (time_now)
67: Get Time Between Dates (between  in Seconds)
68: Set Variable (time_spend)
69: is.workflow.actions.notification (Title: Progressing: ☯️💲percent💲☯️ %, Message: Count: ☯️💲Repeat Index💲☯️, TimeSpend: ☯️💲time_spend💲☯️ s, Play Sound: No)
70 (61, 4 ): Otherwise
71: Nothing
72 (61, 4 ): End If
73 (55, ): End Repeat with Each
74: Set Variable (time_now)
75: Get Time Between Dates (between  in Seconds)
76: Set Variable (time_spend)
77: is.workflow.actions.notification (Title: Done! 100%, Message: Count: ☯️💲numbers💲☯️, TimeSpend: ☯️💲time_spend💲☯️ s, Play Sound: No)
78 (2, ): Choose (⚠️Export All   (BPlist) ⚠️)
79: Set Variable (init_time)
80: Get Text from Input
81: Replace Text (Replace [^\d] with -, Regex: Yes, Case Sensitive: Yes)
82: Set Variable (foldername)
83: Create Folder (Path: "0_source_code/☯️💲foldername💲☯️")
84: Get My Workflows
85: Count
86: Set Variable (numbers)
87: Repeat with Each
88: Save File (0_source_code/☯️💲foldername💲☯️)
89 (87, ): End Repeat with Each
90: Set Variable (time_now)
91: Get Time Between Dates (between  in Seconds)
92: Set Variable (time_spend)
93: is.workflow.actions.notification (Title: Done! 100%, Message: Count: ☯️💲numbers💲☯️, TimeSpend: ☯️💲time_spend💲☯️ s, Play Sound: No)
94 (2, ): End Chose from Menu
```

