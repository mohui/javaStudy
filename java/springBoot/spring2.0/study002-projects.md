# 项目
https://www.bilibili.com/video/BV1rv411k7RD?p=5&vd_source=39f266c622d872c7f9fb6ec3d2ad3a60

## 创建一个空项目
打开 IDE -> 点击 File -> 点击 New -> 选择 Project.. -> Empty Project
```
Name: 项目名称(IDEA-springboot-projects)
Location: 项目地址(/Users/wanghehui/projects/xzmProjects/java/IDEA-springboot-projects)
```

## 创建model
- 需要翻墙
1. 点击 New -> 选择Module.. -> 选择 Spring Initializr
2. 以下的几个可以看着改 eg:
```
Group: com.xzmh.springboot
Artifact: xzm
name: 会自动跟着 Artifact  改变
JDK: 根据 Java 版本改, 低版本的适用不了高版本的 java
Java: 可以改, 太高的版本适用不了低版本的 jdk
package: 包名, 通常不能出现数字
```
2. 需要翻墙, 否则会访问不了 https://start.spring.io/
3. Dependencies 选择依赖
4. web -> spring web