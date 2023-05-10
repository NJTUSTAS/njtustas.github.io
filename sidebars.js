/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: "category",
      label: "电子组文档",
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "electronics/intro",
          label: "说明",
        },
        {
          type: "category",
          label: "Arduino",
          items: [
            {
              type: "doc",
              id: "electronics/arduino/intro",
              label: "Arduino简介",
            },
            {
              type: "doc",
              id: "electronics/arduino/chapter1",
              label: "Arduino和Arduino IDE",
            },
            {
              type: "doc",
              id: "electronics/arduino/chapter2",
              label: "第一个程序Blink",
            },
            {
              type: "doc",
              id: "electronics/arduino/chapter3",
              label: "使用按钮",
            },
            {
              type: "doc",
              id: "electronics/arduino/chapter4",
              label: "中断Interrupt",
            },
            {
              type: "doc",
              id: "electronics/arduino/chapter5",
              label: "定时器Timer",
            },
            {
              type: "doc",
              id: "electronics/arduino/chapter6",
              label: "脉冲宽度调制PWM",
            },
            {
              type: "doc",
              id: "electronics/arduino/chapter7",
              label: "模数转换ADC",
            },
            {
              type: "doc",
              id: "electronics/arduino/chapter8",
              label: "串口通信UART",
            },
            {
              type: "doc",
              id: "electronics/arduino/chapter9",
              label: "单片机的存储器和EEPROM",
            },
          ],
        },
        {
          type: "category",
          label: "C语言",
          items: [
            {
              type: "doc",
              id: "electronics/c-lang/intro",
              label: "C语言简介",
            },
            {
              type: "doc",
              id: "electronics/c-lang/chapter1",
              label: "C语言基本语法",
            },
            {
              type: "doc",
              id: "electronics/c-lang/chapter2",
              label: "数据类型",
            },
            {
              type: "doc",
              id: "electronics/c-lang/chapter3",
              label: "变量和常量",
            },
            {
              type: "doc",
              id: "electronics/c-lang/chapter4",
              label: "运算符",
            },
            {
              type: "doc",
              id: "electronics/c-lang/chapter5",
              label: "条件判断if和switch",
            },
            {
              type: "doc",
              id: "electronics/c-lang/chapter6",
              label: "循环while和do/while",
            },
            {
              type: "doc",
              id: "electronics/c-lang/chapter7",
              label: "循环for",
            },
            {
              type: "doc",
              id: "electronics/c-lang/chapter8",
              label: "函数",
            },
            {
              type: "doc",
              id: "electronics/c-lang/chapter9",
              label: "函数的作用域规则",
            },
            {
              type: "doc",
              id: "electronics/c-lang/chapter10",
              label: "数组",
            },
            {
              type: "doc",
              id: "electronics/c-lang/chapter11",
              label: "多维数组",
            },
            {
              type: "doc",
              id: "electronics/c-lang/chapter12",
              label: "字符串",
            },
            {
              type: "doc",
              id: "electronics/c-lang/chapter13",
              label: "指针",
            },
            {
              type: "doc",
              id: "electronics/c-lang/chapter14",
              label: "指针的算数运算",
            },
            {
              type: "doc",
              id: "electronics/c-lang/chapter15",
              label: "指针和数组、函数",
            },
            {
              type: "doc",
              id: "electronics/c-lang/chapter16",
              label: "枚举(enum)",
            },
            {
              type: "doc",
              id: "electronics/c-lang/chapter17",
              label: "结构体(struct)",
            },
            {
              type: "doc",
              id: "electronics/c-lang/chapter18",
              label: "共用体(union)",
            },
          ],
        },
        {
          type: "category",
          label: "通信专题",
          items: [
            {
              type: "doc",
              id: "electronics/communication/intro",
              label: "通信专题",
            },
            {
              type: "category",
              label: "One-Wire",
              items: [
                {
                  type: "doc",
                  id: "electronics/communication/serial/one-wire/intro",
                  label: "One-Wire简介",
                },
                {
                  type: "doc",
                  id: "electronics/communication/serial/one-wire/chapter1",
                  label: "One-Wire通信原理",
                },
                {
                  type: "doc",
                  id: "electronics/communication/serial/one-wire/chapter2",
                  label: "DHT11数据手册速览",
                },
                {
                  type: "doc",
                  id: "electronics/communication/serial/one-wire/chapter3",
                  label: "代码逻辑分析",
                },
                {
                  type: "doc",
                  id: "electronics/communication/serial/one-wire/chapter4",
                  label: "整合打包代码",
                },
                {
                  type: "doc",
                  id: "electronics/communication/serial/one-wire/chapter5",
                  label: "总结和拓展",
                },
              ],
            },
            {
              type: "category",
              label: "UART",
              items: [
                {
                  type: "doc",
                  id: "electronics/communication/serial/uart/intro",
                  label: "UART简介",
                },
                {
                  type: "doc",
                  id: "electronics/communication/serial/uart/chapter1",
                  label: "UART通信原理",
                },
                {
                  type: "doc",
                  id: "electronics/communication/serial/uart/chapter2",
                  label: "HC-05数据手册速览",
                },
                {
                  type: "doc",
                  id: "electronics/communication/serial/uart/chapter3",
                  label: "HC-05蓝牙的使用",
                },
                {
                  type: "doc",
                  id: "electronics/communication/serial/uart/chapter4",
                  label: "总结和拓展",
                },
              ],
            },
            {
              type: "category",
              label: "I2C",
              items: [
                {
                  type: "doc",
                  id: "electronics/communication/serial/i2c/intro",
                  label: "I2C简介",
                },
                {
                  type: "doc",
                  id: "electronics/communication/serial/i2c/chapter1",
                  label: "I2C通信原理",
                },
                {
                  type: "doc",
                  id: "electronics/communication/serial/i2c/chapter2",
                  label: "DS3231数据手册速览",
                },
                {
                  type: "doc",
                  id: "electronics/communication/serial/i2c/chapter3",
                  label: "代码逻辑分析",
                },
                {
                  type: "doc",
                  id: "electronics/communication/serial/i2c/chapter4",
                  label: "整合打包代码",
                },
                {
                  type: "doc",
                  id: "electronics/communication/serial/i2c/chapter5",
                  label: "总结和拓展",
                },
              ],
            },
            {
              type: "category",
              label: "SPI",
              items: [
                {
                  type: "doc",
                  id: "electronics/communication/serial/spi/intro",
                  label: "SPI简介",
                },
                {
                  type: "doc",
                  id: "electronics/communication/serial/spi/chapter1",
                  label: "SPI通信原理",
                },
                {
                  type: "doc",
                  id: "electronics/communication/serial/spi/chapter2",
                  label: "MPU9250数据手册速览",
                },
                {
                  type: "doc",
                  id: "electronics/communication/serial/spi/chapter3",
                  label: "代码逻辑分析",
                },
                {
                  type: "doc",
                  id: "electronics/communication/serial/spi/chapter4",
                  label: "整合打包代码",
                },
                {
                  type: "doc",
                  id: "electronics/communication/serial/spi/chapter5",
                  label: "总结和拓展",
                },
              ],
            },
            {
              type: "category",
              label: "并行通信",
              items: [
                {
                  type: "doc",
                  id: "electronics/communication/parallel/intro",
                  label: "并行通信简介",
                },
                {
                  type: "doc",
                  id: "electronics/communication/parallel/chapter1",
                  label: "并行通信原理",
                },
                {
                  type: "doc",
                  id: "electronics/communication/parallel/chapter2",
                  label: "LCD1602数据手册速览",
                },
                {
                  type: "doc",
                  id: "electronics/communication/parallel/chapter3",
                  label: "代码逻辑分析",
                },
                {
                  type: "doc",
                  id: "electronics/communication/parallel/chapter4",
                  label: "整合打包代码",
                },
                {
                  type: "doc",
                  id: "electronics/communication/parallel/chapter5",
                  label: "总结和拓展",
                },
              ],
            },
          ],
        },

        {
          type: "category",
          label: "项目制作",
          items: [
            {
              type: "doc",
              id: "electronics/projects/intro",
              label: "项目制作",
            },
            {
              type: "category",
              label: "NFC",
              items: [
                {
                  type: "doc",
                  id: "electronics/projects/nfc/intro",
                  label: "办公室门禁历史",
                },
                {
                  type: "doc",
                  id: "electronics/projects/nfc/chapter1",
                  label: "初代门禁版本",
                },
                {
                  type: "doc",
                  id: "electronics/projects/nfc/chapter2",
                  label: "目前门禁版本",
                },
                {
                  type: "doc",
                  id: "electronics/projects/nfc/chapter3",
                  label: "未来的改进",
                },
              ],
            },
            {
              type: "category",
              label: "LED-Board",
              items: [
                {
                  type: "doc",
                  id: "electronics/projects/led-board/intro",
                  label: "LED Board简介",
                },
                {
                  type: "doc",
                  id: "electronics/projects/led-board/chapter1",
                  label: "制作步骤",
                },
                {
                  type: "doc",
                  id: "electronics/projects/led-board/chapter2",
                  label: "代码及使用",
                },
                {
                  type: "doc",
                  id: "electronics/projects/led-board/chapter3",
                  label: "总结和拓展",
                },
              ],
            },
            {
              type: "category",
              label: "激光雕刻机",
              items: [
                {
                  type: "doc",
                  id: "electronics/projects/cnc-engraver/intro",
                  label: "激光雕刻机简介",
                },
                {
                  type: "doc",
                  id: "electronics/projects/cnc-engraver/chapter1",
                  label: "什么是CNC",
                },
                {
                  type: "doc",
                  id: "electronics/projects/cnc-engraver/chapter2",
                  label: "雕刻机硬件搭建",
                },
                {
                  type: "doc",
                  id: "electronics/projects/cnc-engraver/chapter3",
                  label: "雕刻机控制软件",
                },
                {
                  type: "doc",
                  id: "electronics/projects/cnc-engraver/chapter4",
                  label: "总结和拓展",
                },
              ],
            },
          ],
        },

        {
          type: "category",
          label: "半小时入门",
          items: [
            {
              type: "doc",
              id: "electronics/tutorial/intro",
              label: "半小时入门",
            },
            {
              type: "category",
              label: "Git",
              items: [
                {
                  type: "doc",
                  id: "electronics/tutorial/git/intro",
                  label: "Git简介",
                },
                {
                  type: "doc",
                  id: "electronics/tutorial/git/chapter1",
                  label: "集中式VS分布式",
                },
                {
                  type: "doc",
                  id: "electronics/tutorial/git/chapter2",
                  label: "Git的安装与配置",
                },
                {
                  type: "doc",
                  id: "electronics/tutorial/git/chapter3",
                  label: "Git的常用命令",
                },
              ],
            },
            {
              type: "category",
              label: "EDA",
              items: [
                {
                  type: "doc",
                  id: "electronics/tutorial/eda/intro",
                  label: "EDA入门简介",
                },
                {
                  type: "doc",
                  id: "electronics/tutorial/eda/chapter1",
                  label: "555计时器",
                },
                {
                  type: "doc",
                  id: "electronics/tutorial/eda/chapter2",
                  label: "绘制符号和封装",
                },
                {
                  type: "doc",
                  id: "electronics/tutorial/eda/chapter3",
                  label: "设计原理图",
                },
                {
                  type: "doc",
                  id: "electronics/tutorial/eda/chapter4",
                  label: "设计PCB",
                },
              ],
            },
            {
              type: "category",
              label: "Markdown",
              items: [
                {
                  type: "doc",
                  id: "electronics/tutorial/markdown/intro",
                  label: "Markdown简介",
                },
                {
                  type: "doc",
                  id: "electronics/tutorial/markdown/chapter1",
                  label: "Markdown语法(1)",
                },
                {
                  type: "doc",
                  id: "electronics/tutorial/markdown/chapter2",
                  label: "Markdown语法(2)",
                },
              ],
            },
            {
              type: "category",
              label: "前端基础",
              items: [
                {
                  type: "doc",
                  id: "electronics/tutorial/web/intro",
                  label: "前端基础",
                },
                {
                  type: "doc",
                  id: "electronics/tutorial/web/chapter1",
                  label: "前端三语言",
                },
                {
                  type: "doc",
                  id: "electronics/tutorial/web/chapter2",
                  label: "HTML基础",
                },
                {
                  type: "doc",
                  id: "electronics/tutorial/web/chapter3",
                  label: "CSS基础",
                },
                {
                  type: "doc",
                  id: "electronics/tutorial/web/chapter4",
                  label: "自我介绍",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
