# 排序
## 对象数组
### 按照某个字段排序
```
val todayClockResult2 = todayClockResult1
.sortedBy {
    if (it.type == HealthPlanType.DRUG) 1
    else {
        it.subFrequency?.let { _it ->
            if (_it.frequencyTimeUnit == TimeServiceUnit.DAYS && _it.frequencyTimeUnit == TimeServiceUnit.SEQUENCE)
                2
            else
                3
        }?: 4
    }
}
```