// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "AGou's Docsv4",
  tagline: "Welcome to AGou's Docs.",
  url: "https://docs.agou-ops.cn",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "AGou-ops", // Usually your GitHub org/user name.
  projectName: "/", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    require.resolve("docusaurus-plugin-image-zoom"),
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        indexBlog: false,
        language: ["en", "zh"],
      },
    ],
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/AGou-ops/myDocsv4/edit/main/",
        },
        blog: false, // 暂时禁用。
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        googleAnalytics: {
          trackingID: "G-KQED41RW95",
          anonymizeIP: true,
        },
        pages: {
          // path: 'src/pages',
          // routeBasePath: '',
          // include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],
          // exclude: [
          //   '**/_*.{js,jsx,ts,tsx,md,mdx}',
          //   '**/_*/**',
          //   '**/*.test.{js,jsx,ts,tsx}',
          //   '**/__tests__/**',
          // ],
          // mdxPageComponent: '@theme/MDXPage',
          // remarkPlugins: [require('remark-math')],
          // rehypePlugins: [],
          // beforeDefaultRemarkPlugins: [],
          // beforeDefaultRehypePlugins: [],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        hideOnScroll: true,
        title: "AGou's Docsv4",
        logo: {
          alt: "Welcome to AGou's Docs!",
          src: "img/logo.png",
        },
        items: [
          {
            label: "✨ 我的博客",
            href: "https://agou-ops.cn",
          },
          {
            type: "dropdown",
            label: " 📖 目录",
            position: "right",
            items: [
              {
                href: "/docs",
                label: "🌲 目录树",
              },
              {
                type: "html",
                value: '<hr style="margin: 0.3rem 0;">',
              },
              {
                type: "docSidebar",
                sidebarId: "cloudNative",
                label: "☁️ 云原生相关",
              },
              {
                type: "docSidebar",
                sidebarId: "linuxBasics",
                label: "😊 Linux基础",
              },
              {
                type: "docSidebar",
                sidebarId: "programLang",
                label: "♨️ 编程语言",
              },
              {
                type: "docSidebar",
                sidebarId: "scripts",
                label: "🕹️ 脚本相关",
              },
              {
                type: "docSidebar",
                sidebarId: "interview",
                label: "👨‍⚖️ 面试相关",
              },
            ],
          },
          {
            type: "dropdown",
            label: "版本",
            position: "right",
            items: [
              {
                label: "Ver1.0",
                href: "https://agou-ops.cn/myDocs",
              },
              {
                label: "Ver2.0",
                href: "https://agou-ops.cn/myDocsv2",
              },
              {
                label: "Ver3.0",
                href: "https://agou-ops.cn/myDocsv3",
              },
            ],
          },
          {
            href: "https://github.com/AGou-ops",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub 仓库",
          },
        ],
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      zoom: {
        selector: ".markdown :not(em) > img",
        background: {
          light: "rgb(255, 255, 255)",
          dark: "rgb(50, 50, 50)",
        },
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        config: {},
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs Releases",
            items: [
              {
                label: "Version 1.0",
                href: "https://agou-ops.cn/myDocs",
              },
              {
                label: "Version 2.0",
                href: "https://agou-ops.cn/myDocsv2",
              },
              {
                label: "Version 3.0",
                href: "https://agou-ops.cn/myDocsv3",
              },
              {
                label: "⭐️Version 4.0",
                href: "https://agou-ops.cn/myDocsv4",
              },
            ],
          },
          {
            title: "Social",
            items: [
              {
                label: "⭐️我的博客",
                href: "https://agou-ops.cn",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/AGou-ops",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AGou-ops' Documetation v4.`,
      },
      prism: {
        theme: lightCodeTheme,
        // dracula,  nightOwl, okaidia
        // oceanicNext, palenight, synthwave84,
        // vsDark, duotoneDark, github, nightOwlLight, `okaidia, shadesOfPurple, ultramin, vsLight
        // theme: require('prism-react-renderer/themes/nightOwl'),
        // darkTheme: darkCodeTheme,
        darkTheme: require("prism-react-renderer/themes/nightOwl"),
      },
    }),
};

module.exports = config;
