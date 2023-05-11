const electronics = require("./config/sidebar/electronics");

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: "doc",
      label: "说明",
      id: "intro"
    },
    ...electronics
  ]
};

module.exports = sidebars;
