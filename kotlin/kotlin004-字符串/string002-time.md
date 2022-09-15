```

data class ClockDayList(
    val start: LocalDateTime,
    val end: LocalDateTime,
    var clockIn: Int = 0,
    var clockInStatus: Boolean = false
) {
}


data class CalculationCycleResult(
    val start: java.time.LocalDateTime,
    val end: java.time.LocalDateTime,
    val between: kotlin.Long,
    val timeList: List<ClockDayList>
) {

}




fun calculationCycle(
    chronoNum: Int,
    chronoUnit: ChronoUnit,
    startDateTime: LocalDateTime
): CalculationCycleResult {
    val start: LocalDateTime
    val end: LocalDateTime
    val between: Long

    val now = LocalDateTime.now()
    between = chronoUnit.between(startDateTime, now) / chronoNum
    val temp = chronoUnit.addTo(startDateTime, between * chronoNum)
    if (temp.isAfter(now)) {
        start = chronoUnit.addTo(startDateTime, between * chronoNum - chronoNum)
        end = temp
    } else {
        start = temp
        end = chronoUnit.addTo(startDateTime, between * chronoNum + chronoNum)
    }

    // 把时间范围划分出来,比如3周,分别给出三周的开始时间和结束时间
    var i: Long = 0;
    val timeList = mutableListOf<ClockDayList>()
    while (i < chronoNum) {
        val clockDayTime = ClockDayList(
            start = chronoUnit.addTo(start, i),
            end = chronoUnit.addTo(start, i + 1)
        )
        timeList.add(clockDayTime)
        i++;
    }

    return CalculationCycleResult(
        start = start,
        end = end,
        between = between,
        timeList = timeList
    )
}
```