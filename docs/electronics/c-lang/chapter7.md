---
title: 循环for
---

# 循环 for

## 1. for 语句

for 循环可以方便地执行指定次数的循环。

语法：

```c
for ( init; condition; increment )
{
   statement(s);
}
```

- **init 会首先被执行，且只会执行一次。这一步允许声明并初始化任何循环控制变量。也可以不在这里写任何语句，只要有一个分号出现即可。**
- **接下来，会判断 condition。如果为真，则执行循环主体。如果为假，则不执行循环主体，且控制流会跳转到紧接着 for 循环的下一条语句。**
- **接下来，会判断 condition。如果为真，则执行循环主体。如果为假，则不执行循环主体，且控制流会跳转到紧接着 for 循环的下一条语句。**
- **条件再次被判断。如果为真，则执行循环，这个过程会不断重复（循环主体，然后增加步值，再然后重新判断条件）。在条件变为假时，for 循环终止。**

下面我们用 for 循环重新编写前面求 0-10 中偶数的程序，代码如下：

```c
#include <stdio.h>

int main() {
    for (int i = 0; i < 10; i++) {
        if (i % 2 == 0)
            printf("%d\n", i);
    }
    return 0;
}
```

可以发现，使用 for 循环编写循环非常之简介明了。

请大家尝试编写求`0+1+2+...+10`之和的程序代码。

参考代码如下：

```c
#include <stdio.h>

int main() {
    int sum = 0;
    for (int i = 0; i < 11; i++) {
        sum = sum + i;
        // sum += i;
    }
    printf("The sum is %d", sum);
    return 0;
}
```

## 2. for 循环嵌套

我们可以在 for 循环内使用一个或多个 for 循环。

下面请大家通过两层 for 循环打印如下 4\*4 的直角三角形。

```plaintext
*
**
***
****
```

参考代码如下：

```c
#include <stdio.h>

int main() {
    for (int i = 1; i <= 4; i++) {
        for (int j = 1; j <= i; j++) {
            putchar('*');
        }
        putchar('\n');
    }
    return 0;
}
```

下面我们编写一个求 0-100 类所有质数的程序。

质数是指在大于 1 的自然数中，除了 1 和它本身以外不再有其他因数的自然数。

参考代码如下：

```c
#include <stdio.h>

int main() {
    for (int i = 2, j; i <= 100; i++) {
        for (j = 2; j <= i; j++) {
            //遇到第一个因数则跳出循环
            if (i % j == 0)
                break;
        }
        //如果该因数等于这个数本身则表明为质数，输出
        if (j == i)
            printf("%d\n", i);
    }
    return 0;
}
```

如果改成每行最多 5 个质数就换行，则代码如下：

```c
#include <stdio.h>

int main() {
    for (int i = 2, j, count = 0; i <= 100; i++) {
        for (j = 2; j <= i; j++) {
            //遇到第一个因数则跳出循环
            if (i % j == 0)
                break;
        }
        //如果该因数等于这个数本身则表明为质数，输出
        if (j == i) {
            printf("%-3d", i);
            count++;
            //判断质数的个数，五个质数就换行
            if (count % 5 == 0)
                putchar('\n');
        }
    }
    return 0;
}
```

输出的结果如下：

```plaintext
2  3  5  7  11
13 17 19 23 29
31 37 41 43 47
53 59 61 67 71
73 79 83 89 97
```

## 3. 小测试

- **输入一个整数，求其阶乘。**
- **输入两个整数，求其最大公约数和最小公倍数。**
