# java study

## database

## java

## kotlin

## php

## 翻墙
1. 查看列表
```
curl -X POST http://localhost:13147/all 
```
```
["HK","USA2","USA","JP","KR"]% 
```
2. 当前
```
curl -X POST http://localhost:13147/current
```
3. 修改为HK
```
curl -X POST http://localhost:13147/switch/HK
```