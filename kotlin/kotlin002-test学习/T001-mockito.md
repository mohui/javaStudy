## 捕获参数
```
val param: ArgumentCaptor<AddOperationLogParam> = ArgumentCaptor.forClass(AddOperationLogParam::class.java)
Mockito.verify(operationLogClient).saveLog(capture(param))
Assertions.assertEquals(request.orgId, param.value.orgId)
Assertions.assertEquals(request.content, param.value.content)
```

## mock远程服务
```
Mockito.doReturn(
    PatientInfoResponse(
        id = personId,
        name = "name",
        gender = Gender.MAN,
        phone = "13111256325",
        idCard = "233265956415115465",
        birthday = LocalDateTime.now(),
        age = 18,
        hypertensionDiseaseTag = PatientTag.EXISTS,
        diabetesDiseaseTag = PatientTag.EXISTS,
        acuteCoronaryDiseaseTag = PatientTag.EXISTS,
        cerebralStrokeDiseaseTag = PatientTag.EXISTS,
        copdDiseaseTag = PatientTag.EXISTS
    )
).`when`(patientClient).getPatientInfo(personId)
```