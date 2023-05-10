---
title: 脉冲宽度调制PWM
---

# 脉冲宽度调制 PWM

## 1. 什么是 PWM

PWM(Pulse Width Modulation)指的是**脉冲宽度调制**，它是一种可以用于控制 LED 亮度、直流电机速度控制、控制伺服电机或必须通过数字方式获得模拟输出的技术。

Arduino 数字引脚只能输出 5V（当变为高电平时）或 0V（当变为低电平时），并且输出是方波信号。因此，如果我们想调暗 LED，我们无法从数字引脚获得 0 到 5V 之间的电压，但我们可以改变信号的 ON 和 OFF 时间。如果我们足够快地改变 ON 和 OFF 时间，那么 LED 的亮度就会改变。

下面是一些与 PWM 相关的术语:

- **\\(T\_{on}\\)**：信号为高电平的时间
- **\\(T\_{off}\\)**：是信号为低电平的时间
- **周期**：是开启时间和关闭时间的总和
- **占空比**：它是在一段时间内信号为高电平的时间百分比

因此，在 50%占空比和 1Hz 频率下，LED 将在半秒内保持高电平，另外半秒内保持低电平。如果我们将频率提高到 50Hz（每秒开启和关闭 50 次），那么人眼将看到 LED 以一半亮度发光。

下面是 PWM 原理的示意图：

![PWM](./images/6-1.png)

## 2. 使用 PWM

在 Arduino Uno 开发板上，可以使用`analogWrite()`输出 PWM。

语法：

```cpp
analogWrite(pin, value);
```

pin 参数：你可以使用引脚号前**有~标记**的引脚作为 PWM 的输出引脚，也就是**3，5，6，9，10，11**六个引脚。其中，3，9，10，11 号引脚默认的输出频率是**490Hz**，5，6 号引脚的默认输出频率是**980Hz**。

value 参数：Arduino 默认所有模拟输出的分辨率是 8 位，也就是你可以输出 0-255。某些单片机芯片支持更高的 12 位/16 位分辨率，你可以通过`analogWriteResolution()`来改变 PWM 的分辨率。更多相关详细信息可以参考以下内容：[analogWriteResolution](https://www.arduino.cc/reference/en/language/functions/zero-due-mkr-family/analogwriteresolution/)。

下面是一个使用 PWM 实现呼吸灯的实例：

```cpp
int led = 3;

// 逐渐变亮
void fadedOn(unsigned int time, int increament) {
  for (byte value = 0 ; value < 255; value += increament) {
    analogWrite(led, value);
    delay(time / (255 / increament));
  }
}

//逐渐变暗
void fadedOff(unsigned int time, int decreament) {
  for (byte value = 255; value > 0; value -= decreament) {
    analogWrite(led, value);
    delay(time / (255 / increament));
  }
}

void setup() {
  pinMode(led, OUTPUT);
}

void loop() {
  fadedOn(1000, 5);
  fadedOff(1000, 5);
}
```

## 3. 调整 PWM 的频率

由于 Arduino 在 3，9，10，11 号引脚默认的输出频率是 490Hz，5，6 号引脚的默认输出频率是 980Hz，尤其是通过电机驱动板调节电机速度的时候，电机会发出嗡嗡的声音，就是由于频率太低导致的，下面是可以使用的调整 PWM 频率的寄存器操作。

适用于 3，11 号引脚：

```cpp
TCCR2B = TCCR2B & B11111000 | B00000001; // for PWM frequency of 31372.55 Hz
TCCR2B = TCCR2B & B11111000 | B00000010; // for PWM frequency of 3921.16 Hz
TCCR2B = TCCR2B & B11111000 | B00000011; // for PWM frequency of 980.39 Hz
TCCR2B = TCCR2B & B11111000 | B00000100; // for PWM frequency of 490.20 Hz (The DEFAULT)
TCCR2B = TCCR2B & B11111000 | B00000101; // for PWM frequency of 245.10 Hz
TCCR2B = TCCR2B & B11111000 | B00000110; // for PWM frequency of 122.55 Hz
TCCR2B = TCCR2B & B11111000 | B00000111; // for PWM frequency of 30.64 Hz
```

适用于 9，10 号引脚：

```cpp
TCCR1B = TCCR1B & B11111000 | B00000001; // for PWM frequency of 31372.55 Hz
TCCR1B = TCCR1B & B11111000 | B00000010; // for PWM frequency of 3921.16 Hz
TCCR1B = TCCR1B & B11111000 | B00000011; // for PWM frequency of 490.20 Hz (The DEFAULT)
TCCR1B = TCCR1B & B11111000 | B00000100; // for PWM frequency of 122.55 Hz
TCCR1B = TCCR1B & B11111000 | B00000101; // for PWM frequency of 30.64 Hz
```

适用于 5，6 号引脚：

```cpp
TCCR0B = TCCR0B & B11111000 | B00000001; // for PWM frequency of 62500.00 Hz
TCCR0B = TCCR0B & B11111000 | B00000010; // for PWM frequency of 7812.50 Hz
TCCR0B = TCCR0B & B11111000 | B00000011; // for PWM frequency of 976.56 Hz (The DEFAULT)
TCCR0B = TCCR0B & B11111000 | B00000100; // for PWM frequency of 244.14 Hz
TCCR0B = TCCR0B & B11111000 | B00000101; // for PWM frequency of 61.04 Hz
```
