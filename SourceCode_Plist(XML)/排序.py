import functools
import locale
import re


# locale.setlocale('locale.LC_COLLATE', 'zh_CN.UTF8')

str2sort = """😄
😂
⚠️
✅
哈哈
世界
你好
abcdefg
hijklmn
opqrst
uvwxyz
12345
678910
"""
str_update = str2sort.split('\n')
print("----------分割为列表----------\n%s" % str_update)
str_sort = sorted(str_update)
print("----------自动排序----------\n%s" % str_sort)
# str_sort_locale = sorted(str_update,key=locale.strcoll)
# str_sort_locale = str_update.sort(key=locale.strxfrm)
# str_sort_locale = str_update.sort(key=unicode.lower)
str_sort_locale = sorted(str_update,key=functools.cmp_to_key(locale.strcoll))
str_sort_encode = sorted(str_update,key = lambda x: x.encode('utf-8'))
sorted_a2z = []
sorted_number = []
sorted_emoji = []
sorted_char = []
str_sorted = []

for i in str_sort:
	print("----------重复项目：----------\n%s" % (i))
	first_char = re.search("^[.\.]", i)
	print("行首字符：\n", first_char)
	match_a2z = re.search("^[a-z]", i)
	print("匹配_a2z：\n", match_a2z)
	match_number = re.search("^\d", i)
	print("匹配_number：\n", match_number)
	match_emoji = re.search(
		"^[\ud83c-\udc00\ud83c-\udfff\ud83d-\udc00\ud83d-\udfff\u2600-\u27ff]", i)
	print("匹配_emoji：\n", match_emoji)
	match_char = re.search("^[u4E00-\u9FA5]|[^x00-xff]", i)
	print("匹配_char：\n", match_char)
	# match_a2z = re.search("[a-zA-Z]", i)
	# match_a2z = re.search("[a-zA-Z]", i)
	if match_emoji is not None:
		sorted_emoji.append(i)
		print("排序_emoji：\n", sorted_emoji)
	else:
		if match_number is not None:
			sorted_number.append(i)
			print("排序_number：\n", sorted_number)
		else:
			if match_a2z is not None:
				sorted_a2z.append(i)
				print("排序_a2z：\n", sorted_a2z)
			else:
				if match_char is not None:
					sorted_char.append(i)
					print("排序_char：\n", sorted_char)
				else:
					None
	str_sorted = sorted_emoji + sorted_number + sorted_a2z + sorted_char

print("----------自动排序----------\n%s" % str_sort)
print("----------locale 排序----------\n%s" % str_sort_locale)
print("----------指定 encode 排序----------\n%s" % str_sort_encode)
print("----------自定义排序----------\n%s" % str_sorted)



