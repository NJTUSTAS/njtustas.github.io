---
title: 整合打包代码
---

# 整合打包代码

完整的 DS3231 I2C 通信代码如下：

```cpp
#include <Wire.h>

#define DS3231_ADDRESS 0x68
#define SECOND_ADDRESS 0x00
#define ALARM1_SECOND_ADDRESS 0x07
#define ALARM2_MINUTE_ADDRESS 0x0B
#define STATUS_ADDRESS 0x0F
#define TEMPERATURE_ADDRESS 0x11

// 时间的结构体
struct Time {
  uint16_t year;  //年
  uint8_t mon;    //月
  uint8_t date;   //日
  uint8_t hour;   //时
  uint8_t min;    //分
  uint8_t sec;    //秒
  uint8_t day;    //星期
};

// 星期字符串
char weekofday[7][10] = {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"};

uint8_t bcd2dec(uint8_t);
uint8_t dec2bcd(uint8_t);
void write_data(uint8_t);
void write_data(uint8_t*, uint8_t);
uint8_t read_data();
void write_data(uint8_t*, uint8_t);
Time readTime();
void setTime(Time);
void setAlarm(uint8_t, uint8_t, bool choice = false);
bool readAlarmFlag(bool choice = false);
void turnAlarmOFF(bool choice = false);
int8_t readTemp();

void setup() {
  Wire.begin();// 初始化I2C
  Wire.setClock(100 * 1000);// 设置I2C频率为100KHz
  Serial.begin(115200);
  Time now = {2022, 2, 10, 12, 30, 0, 4}; // 2022-2-10 12:30:0 Thursday
  setTime(now);
  setAlarm(12, 31);
  turnAlarmOFF();
}

void loop() {
  char str[50];
  Time now = readTime();// 更新时间
  sprintf(// 格式化一段字符串数据
    str,
    "%d-%d-%d %d:%d:%d %s %d^C ",
    now.year, now.mon, now.date, now.hour, now.min, now.sec, weekofday[now.day], readTemp()
  );
  Serial.print(str);
  if (readAlarmFlag()) {
    Serial.println("Alarm ON!");
    turnAlarmOFF();
  }
  else Serial.println("Alarm OFF!");
  delay(1000);
}

// 将BCD数据转换成DEC格式
uint8_t bcd2dec(uint8_t bcd) {
  uint8_t ones = bcd % 0x10;
  uint8_t tens = bcd / 0x10;
  uint8_t dec = ones + tens * 10;
  return dec;
}

// 将DEC数据转换成BCD格式
uint8_t dec2bcd(uint8_t dec) {
  uint8_t ones = dec % 10;
  uint8_t tens = dec / 10;
  uint8_t bcd = ones + tens * 0x10;
  return bcd;
}

// 写入一个字节
void write_data(uint8_t data) {
  Wire.beginTransmission(DS3231_ADDRESS);
  Wire.write(data);
  Wire.endTransmission();
}

// 写入一个指定长度的数组
void write_data(uint8_t *data, uint8_t length) {
  Wire.beginTransmission(DS3231_ADDRESS);
  Wire.write(data, length);
  Wire.endTransmission();
}

// 读取一个字节
uint8_t read_data() {
  Wire.requestFrom(DS3231_ADDRESS, 1);
  return Wire.read();
}

// 读取一个指定长度的数组
void read_data(uint8_t* data, uint8_t length) {
  Wire.requestFrom(DS3231_ADDRESS, length);
  for (uint8_t i = 0; i < length; i++) {
    data[i] = Wire.read();
  }
}

// 连续读取整个时间
Time readTime() {
  Time now;
  uint8_t data[7];
  write_data(SECOND_ADDRESS);
  read_data(data, 7);
  // 读取后的数据需要转换格式
  now.sec = bcd2dec(data[0]);
  now.min = bcd2dec(data[1]);
  now.hour = bcd2dec(data[2]);
  now.day = bcd2dec(data[3]);
  now.date = bcd2dec(data[4]);
  now.mon = bcd2dec(data[5]);
  now.year = bcd2dec(data[6]) + 2000;
  return now;
}

// 连续设置整个时间
void setTime(Time now) {
  // 记得写入数据前先将DEC数据转换成BCD格式
  uint8_t data[] = {
    SECOND_ADDRESS,
    dec2bcd(now.sec),
    dec2bcd(now.min),
    dec2bcd(now.hour),
    dec2bcd(now.day),
    dec2bcd(now.date),
    dec2bcd(now.mon),
    dec2bcd(now.year % 100),
  };
  write_data(data, 8);
}

// 设置闹钟，hour：minute格式，每日闹铃，记得写入数据前先将DEC数据转换成BCD格式
void setAlarm(uint8_t hour, uint8_t minute, bool choice = false) {
  // 闹钟1
  if (!choice) {
    uint8_t data[] = {
      ALARM1_SECOND_ADDRESS,
      0,                        //秒，A1M1=0
      dec2bcd(minute),          //分，A1M2=0
      dec2bcd(hour),            //时，A1M3=0
      0x80,                     //天/星期，A1M4=1
    };
    write_data(data, 5);
  }
  // 闹钟2
  else {
    uint8_t data[] = {
      ALARM2_MINUTE_ADDRESS,
      dec2bcd(minute),          //分，A2M2=0
      dec2bcd(hour),            //时，A2M3=0
      0x80,                     //天/星期，A2M4=1
    };
    write_data(data, 4);
  }
}

bool readAlarmFlag(bool choice = false) {
  write_data(STATUS_ADDRESS);
  // 闹钟1Flag
  if (!choice) {
    bool flag = read_data() & 0x01;
    return flag;
  }
  // 闹钟2flag
  else {
    bool flag = (read_data() & 0x02) >> 1;
    return flag;
  }
}

// 关闭闹钟Flag
void turnAlarmOFF(bool choice = false) {
  write_data(STATUS_ADDRESS);
  uint8_t mask = 0xFE;
  if (choice)mask = 0xFD;
  uint8_t data[] = {STATUS_ADDRESS, read_data() & mask};
  write_data(data, 2);
}

// 读取温度，忽略温度的小数位，只读取整数位，从而温度在DS3231中的数据类型int8_t
int8_t readTemp() {
  write_data(TEMPERATURE_ADDRESS);
  int8_t temperature = read_data();
  return temperature;
}
```
