// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AuroraHosts docs',
  tagline: 'Dinosaurs are cool',
  url: 'https://condescending-bhaskara-801879.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'AuroraHosts', // Usually your GitHub org/user name.
  projectName: 'AuroraHosts Documentation', // Usually your repo name.
  

  scripts: [{src: 'https://analytics.aurorahosts.net/js/plausible.js', defer: true, 'data-domain': 'docs.aurorahosts.com'}],


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
          src: 'img/Aurora_blue.svg',
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
