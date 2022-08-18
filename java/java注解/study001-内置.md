# 注解 Annotation
- 内置注解
- 元注解

## 内置注解
- @Override 重写
- @Deprecated 已过时
- @SuppressWarnings 压制警告

### @Override
- 重写
- 检测被该注解标注的方法是否是继承父类(接口)的

### @Deprecated
- 该注解标注的内容,表示已过时
- 此注解可以用在方法，属性，类上，表示不推荐程序员使用，但是还可以使用

### @SuppressWarnings
- 压制警告

## 元注解
- Target
- Retention
- Document
- Inherited

### Target
- 用于描述注解的使用范围(即: 被描述的注解可以用在什么地方)
### Retention
- 表示需要什么级别保存该注解信息, 用于描述注解的生命周期
- SOURCE < CLASS < RUNTIME
### Document
- 说明该注解将被包含在 javadoc 中
### Inherited
- 说明子类可以继承父类中的该注解