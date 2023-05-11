// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "技术部文档",
  tagline: "热情，投入，技术",
  favicon: "favicon.ico",

  url: "https://njtustas.github.io",
  baseUrl: "/",

  organizationName: "NJTUSTAS",
  projectName: "njtustas.github.io",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",

  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"]
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js")
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: "所有文章",
          blogSidebarCount: "ALL"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "技术开发部",
        logo: {
          alt: "logo",
          src: "favicon.ico"
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "docs",
            position: "left",
            label: "部门文档"
          },
          {
            to: "/blog",
            label: "动态文章",
            position: "left"
          },
          {
            href: "https://github.com/NJTUSTAS/njtustas.github.io",
            label: "GitHub",
            position: "right"
          }
        ]
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "文档",
            items: [
              {
                label: "电子组文档",
                to: "/docs/electronics/intro"
              }
            ]
          },
          {
            title: "资源",
            items: [
              {
                label: "南工OJ",
                href: "https://acm.online.njtech.edu.cn"
              },
              {
                label: "值班笔记",
                href: "https://punch.mraddict.top"
              }
            ]
          },
          {
            title: "友链",
            items: [
              {
                label: "远景实验室",
                href: "https://www.vistalab.top"
              },
              {
                label: "Mars工作室",
                href: "https://studio.online.njtech.edu.cn"
              }
            ]
          }
        ],
        copyright: `Copyright &copy; ${new Date().getFullYear()} 校大学生科协. All rights reversed.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      }
    })
};

module.exports = config;
