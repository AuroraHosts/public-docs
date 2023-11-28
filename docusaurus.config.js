const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AuroraHosts docs',
  tagline: 'Documentation for Aurorahosts',
  url: 'https://docs.aurorahosts.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'AuroraHosts',
  projectName: 'public-docs', //

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/AuroraHosts/public-docs/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Aurorahosts docs',
        logo: {
          alt: 'My Site Logo',
          src: 'img/Aurora_blue.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
        ],
      },
      colorMode: {
        defaultMode: "dark",
      },
      prism: {
        darkTheme: darkCodeTheme,
        theme: lightCodeTheme,
      },
    }),
};

module.exports = config;
