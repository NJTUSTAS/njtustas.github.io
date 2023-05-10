---
title: 枚举(enum)
---

# 枚举(enum)

## 1. 枚举

枚举是 C 语言中的一种基本数据类型，它可以让数据更简洁，更易读。

枚举语法定义格式为：

```plaintext
enum　枚举名　{枚举元素1,枚举元素2,……};
```

接下来我们举个例子，比如：一星期有 7 天，如果不用枚举，我们需要使用 #define 来为每个整数定义一个别名：

```c
#define MON  1
#define TUE  2
#define WED  3
#define THU  4
#define FRI  5
#define SAT  6
#define SUN  7
```

这个看起来代码量就比较多，接下来我们看看使用枚举的方式：

```c
enum DAY { MON = 1, TUE, WED, THU, FRI, SAT, SUN };
```

注意：第一个枚举成员的默认值为整型的 0，后续枚举成员的值在前一个成员上加 1。我们在这个实例中把第一个枚举成员的值定义为 1，第二个就为 2，以此类推。

可以在定义枚举类型时改变枚举元素的值：

```c
enum season {spring, summer=3, autumn, winter};
```

没有指定值的枚举元素，其值为前一元素加 1。

也就说 spring 的值为 0，summer 的值为 3，autumn 的值为 4，winter 的值为 5。

## 2. 枚举变量的定义

前面我们只是声明了枚举类型，接下来我们看看如何定义枚举变量。

我们可以通过以下三种方式来定义枚举变量：

1、先定义枚举类型，再定义枚举变量：

```c
enum DAY { MON = 1, TUE, WED, THU, FRI, SAT, SUN };
enum DAY day;
```

2、定义枚举类型的同时定义枚举变量：

```c
enum DAY { MON = 1, TUE, WED, THU, FRI, SAT, SUN } day;
```

3、省略枚举名称，直接定义枚举变量：

```c
enum { MON = 1, TUE, WED, THU, FRI, SAT, SUN } day;
```

下面是一个使用枚举的实例：

```c
#include <stdio.h>

enum DAY { MON = 1, TUE, WED, THU, FRI, SAT, SUN } day;

int main() {
    // 遍历枚举元素
    for (day = MON; day <= SUN; day++) {
        printf("The element is %d.\n", day);
    }
}
```

这里仅对枚举作简单介绍，更多内容可自行学习。
