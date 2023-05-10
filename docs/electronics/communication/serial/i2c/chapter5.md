---
title: 总结和拓展
---

# 总结和拓展

## 1. 总结

就像前面提到的，UART 通信最为直接，通信过程就像正常的命令行读写一样，而下面的三种通信方式(I2C,SPI,并口通信)都涉及相对来说复杂的数据读写。

因此，一般在通信前，我们都要完成以下三个函数：

```cpp
void write_cmd(uint8_t cmd);
void write_data(uint8_t data);
uint8_t read_data(uint8_t data);
```

有时候我们为了提高效率，一次性连续读写多个数据，就要将这三个函数扩展到下面六个：

```cpp
void write_cmd(uint8_t cmd);
void write_cmd(uint8_t* cmd, uint8_t length);
void write_data(uint8_t data);
void write_data(uint8_t* data, uint8_t length);
uint8_t read_data(uint8_t data);
void read_data(uint8_t* data, uint8_t length);
```

我们要根据情况进行取舍，DS3231 由于没有命令和数据的区分，所以只需要 4 个函数。在后面的学习中，我们会逐渐发现这几个函数的重要性。

## 2. 拓展 1

我们之所以在 I2C 专题学习 DS3231 的使用，是因为**DS3231 的使用包含了数据的读和写**，而**MPU6050 只包含数据读**，**OLED 只包含数据写**。

MPU6050 是在运动机构中很常用的一个元器件，相比较而言，MPU6050 的使用要比 DS3231 的使用简单得多，因为它只有数据的读操作。有能力、由余力的同学可自行阅读 MPU6050 的数据手册，尝试通过 I2C 读取数据。

至于 OLED，虽然它只有数据写操作，但是其数据手册比较长，还有复杂的寄存器操作，点亮屏幕后还需要手动编写图形函数，字符库函数，所以说后面应该是不会做详细介绍了，有兴趣有能力的同学可以自行学习。

实在不行还可以调库。

## 3. 拓展 2

在前面的 UART 章节讲到，除了使用硬件支持的 Serial 库，还可以使用软串口库，也就是`SoftwareSerial.h`库。同理，在我们学习完 I2C 的原理后，也是可以自己手动编写一个 I2C 的软驱动库。

在 Arduino 中，也有一个官方的软 I2C 库，也就是`SoftI2CMaster.h`库，这个库同样可以让你使用任何引脚作为 I2C 引脚，但是这个需要自己手动下载安装。

官方资料在这里 [SoftI2CMaster](https://github.com/felias-fogg/SoftI2CMaster)
