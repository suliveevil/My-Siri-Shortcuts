# plist to json

https://github.com/twardoch/yaplon

## 安装

```shell
pip3 install --user --upgrade yaplon
```

## 写入系统环境变量


```shell
vim /etc/profile
# /etc/local/bin

```


## 使用


```shell
plist22json -m -i input.plist > output.json

# 以下命令前需要加 yaplon
j2p  -i JSON  -o PLIST [-b] (make binary PLIST)
j2y  -i JSON  -o YAML  [-m] (minify)
p2j  -i PLIST -o JSON  [-m] (minify) [-b] (keep binary)
p2y  -i PLIST -o YAML  [-m] (minify)
y2j  -i YAML  -o JSON  [-m] (minify) [-b] (keep binary)
y2p  -i YAML  -o PLIST [-b] (make binary PLIST)
```
