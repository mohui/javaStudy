# java 环境
- JVM
- JRE

## JVM
1. JVM是JavaVirtualMachine（Java虚拟机）的缩写
2. JVM是一种用于计算设备的规范
3. 它是一个虚构出来的计算机，是通过在实际的计算机上仿真模拟各种计算机功能来实现的 主流虚拟机
4. 为什么要在程序和操作系统中间添加一个JVM？
5. Java是一门抽象程度特别高的语言，提供了自动内存管理等一系列的特性。
6. 这些特性直接在操作系统上实现是不太可能的，所以就需要JVM进行一番转换。
```
java程序(通常是.java后缀) ->
java字节码(通常是 .class, .jar等) ->
JVM ->
操作系统函数(Linux, Windows, MacOS 等平台)
```

## JRE
```
JRE = JVM + 核心类库和相关文件
```
