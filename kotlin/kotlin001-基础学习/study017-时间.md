# 时间格式

## 当天时间
- 前闭后开
```
// 开始时间
val start = LocalDateTime.now().toLocalDate().atStartOfDay()
// 结束时间
val end = LocalDateTime.now().toLocalDate().plusDays(1).atStartOfDay()
```

## 日期时间
### 获取当前日期时间
```
val current = LocalDateTime.now()

val formatter1 = DateTimeFormatter.ofPattern("HH:mm:00")
val formatter2 = DateTimeFormatter.ofPattern("HH:mm:59")
val startTime = current.format(formatter1)
val endTime = current.format(formatter2)

val current = LocalDateTime.now() // 2022-07-20T13:37:56.979110
```

## 时间
### 获取当前时间
```
// 精度到毫秒
val currentTime = LocalTime.now() // 13:37:56.997693

// 精度到分钟
val currentTimeStart = LocalTime.now().truncatedTo(ChronoUnit.MINUTES) // 13:37

// 精度到分钟,但是会受到毫秒的影响, 毫秒可能会四舍五入到秒中,存在风险
LocalDateTime.now().withSecond(0).toLocalTime() // 13:37:00.997693
```

### 获取当前时间是周几
```
val week = LocalDateTime.now().dayOfWeek.name // 星期的大写英语字母 THURSDAY
val week = LocalDateTime.now().dayOfWeek.value // 数字 4
```

### 字符串时间转为时间格式
```
val time = DateUtil.parseTime("12:11:12").toLocalDateTime().toLocalTime()
```

### 时间运算-加法
```
当前时间
val currentTime = LocalTime.now() // 12:00:00.000000

// 分钟的加法 -> 加一分钟
val lastMinutesTime = LocalTime.now().plusMinutes(1) // 12:00
// 秒的加法 -> 加59秒
val lastMinutesTime = LocalTime.now().plusSeconds(59)  // 12:00:59
```

#### 当前时间转为当前分钟的开始时间和结束时间
- 第一种方法
```
val currentTime = current.toLocalTime()
// 当前分钟的开始时间
val start = currentTime.truncatedTo(ChronoUnit.MINUTES)
// 当前分钟的结束时间
val end = start.plusSeconds(59)
```
- 第二种方法
```
// 获取当前时间
val current = LocalDateTime.now()

// 时间
val startTime = current.format(DateTimeFormatter.ofPattern("HH:mm:00"))
val endTime = current.format(DateTimeFormatter.ofPattern("HH:mm:59"))
// 转为时间格式
val start = DateUtil.parseTime(startTime).toLocalDateTime().toLocalTime()
val end = DateUtil.parseTime(endTime).toLocalDateTime().toLocalTime()
```

## 时间周期
```
private fun calculationCycle(chronoNum: Int, chronoUnit: ChronoUnit, startDateTime: LocalDateTime?) {
    var start: LocalDateTime? = null
    var end: LocalDateTime? = null
    var between: Long

    val now = LocalDateTime.now()
    between = chronoUnit.between(startDateTime, now) / chronoNum
    val temp = chronoUnit.addTo(startDateTime, between * chronoNum)
    if (temp != null) {
        if (temp.isAfter(now)) {
            start = chronoUnit.addTo(startDateTime, between * chronoNum - chronoNum)
            end = temp
        } else {
            start = temp
            end = chronoUnit.addTo(startDateTime, between * chronoNum + chronoNum)
        }
    }

    println(start)
    println(end)
    println(between)
}
```