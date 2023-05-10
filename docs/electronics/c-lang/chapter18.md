---
title: 共用体(union)
---

# 共用体(union)

共用体是一种特殊的数据类型，允许**在相同的内存位置存储不同的数据类型**。我们可以定义一个带有多成员的共用体，但是任何时候只能有一个成员带有值。共用体提供了一种使用相同的内存位置的有效方式。

我们可以使用 union 定义共用体，定义方式与定义结构类似。union 语句定义了一个新的数据类型，带有多个成员。

union 定义方式如下：

```c
union [union tag]
{
   member definition;
   member definition;
   ...
   member definition;
} [one or more union variables];
```

union tag 是可选的，每个 member definition 是标准的变量定义，比如 int i; 或者 float f; 或者其他有效的变量定义。在共用体定义的末尾，最后一个分号之前，您可以指定一个或多个共用体变量，这是可选的。

下面定义一个名为 Data 的共用体类型，有三个成员 i、f 和 str：

```c
union Data
{
   int i;
   float f;
   char  str[20];
} data;
```

现在，Data 类型的变量可以存储一个整数、一个浮点数，或者一个字符串。这意味着一个变量（相同的内存位置）可以存储多个多种类型的数据。

共用体占用的内存应足够存储共用体中最大的成员。例如，在上面的实例中，Data 将占用 20 个字节的内存空间，因为在各个成员中，**字符串所占用的空间是最大的**。

下面的是一个显示共用体占用的总内存大小的实例：

```c
#include <stdio.h>

union Data {
    int i;
    float f;
    char str[20];
};

int main() {
    union Data data;
    printf("Memory size occupied by data is %d.\n", sizeof(data));
    return 0;
}
```

输出的结果为：

```plaintext
Memory size occupied by data is 20.
```

这里对共用体仅作简单介绍，更多内容可自行学习。
