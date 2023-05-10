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
          label: "说明"
        },
        {
          type: "category",
          label: "Arduino",
          items: [
            {
              type: "doc",
              id: "electronics/arduino/intro",
              label: "Arduino简介"
            },
            {
              type: "doc",
              id: "electronics/arduino/chapter1",
              label: "Arduino和Arduino IDE"
            },
            {
              type: "doc",
              id: "electronics/arduino/chapter2",
              label: "第一个程序Blink"
            },
            {
              type: "doc",
              id: "electronics/arduino/chapter3",
              label: "使用按钮"
            },
            {
              type: "doc",
              id: "electronics/arduino/chapter4",
              label: "中断Interrupt"
            },
            {
              type: "doc",
              id: "electronics/arduino/chapter5",
              label: "定时器Timer"
            },
            {
              type: "doc",
              id: "electronics/arduino/chapter6",
              label: "脉冲宽度调制PWM"
            },
            {
              type: "doc",
              id: "electronics/arduino/chapter7",
              label: "模数转换ADC"
            },
            {
              type: "doc",
              id: "electronics/arduino/chapter8",
              label: "串口通信UART"
            },
            {
              type: "doc",
              id: "electronics/arduino/chapter9",
              label: "单片机的存储器和EEPROM"
            }
          ]
        }
      ]
    }
  ],

};

module.exports = sidebars;
