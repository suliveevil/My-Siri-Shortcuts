dict_1234 = {
    "menu":{
        "quit":{"title":"quit","content":"退出快捷指令","icon":""},
        "zip":{"title":"zip","content":"压缩 & 解压缩","icon":""},
        "hash":{"title":"哈希值","content":"文件哈希值","icon":""},
        "base64":{"title":"Base64","content":"媒体与文本互转","icon":""}
    },
    "menu_base64":{
        "back":{"title":"返回","content":"返回","icon":""},
        "base64_encode":{"title":"Base64编码","content":"编码","icon":"解码"},
        "base64_decode":{"title":"Base64解码","content":"","icon":""}
    },
    "menu_zip":{
        "back":{"title":"返回","content":"返回","icon":""},
        "zip":{"title":"压缩","content":"压缩","icon":""},
        "unzip":{"title":"解压缩","content":"解压缩","icon":""}
    }
}

menus = {}
menu_main = {}
menu_base64 = {}
menu_hash = {}
menu_zip = {}

def vCard(dict_obj):
	for x in dict_obj:
		menus = menus.append(x)

print(menus)
