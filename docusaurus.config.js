// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// load `.env` file under the current dirctory
require('dotenv').config()

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const { default: remarkEmbedder } = require('@remark-embedder/core')
const { default: oembedTransformer } = require('@remark-embedder/transformer-oembed')
const pattern_twitter = /^https:\/\/twitter\.com\/[a-zA-Z0-9_-]+\/status\/[a-zA-Z0-9?=&]+$/
const isTweetUrl = (url) => {
  return pattern_twitter.test(url)
}
const admonitionIcon = `<span class="admonition-icon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16"><path fill-rule="evenodd" d="M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"></path></svg></span>`
const getFailureAdmonition = (url) => `
<div class="admonition admonition-danger alert alert--danger">
  <div class="admonition-heading"><h5>${admonitionIcon}ツイートの埋め込みに失敗しました</h5></div>
  <div class="admonition-content">
    <p>
      <ul><li><a href="${url}" target="_blank" rel="noopener noreferrer"><em>${url}</em></a></li></ul>
      指定されたリンクが間違っている、またはツイートが削除されています😢
      <hr />
      <ul>
        <li><a href="https://gyo.tc/${url}" target="_blank" rel="noopener noreferrer">Web 魚拓</a>で探す</li>
        <li><a href="https://web.archive.org/web/*/${url}" target="_blank" rel="noopener noreferrer">Internet Archive</a> で探す</li>
      </ul>
    </p>
  </div>
</div>`
const handleEmbedError = ({ error, url, transformer }) => {
  if (transformer.name !== '@remark-embedder/transformer-oembed' || !isTweetUrl(url)) {
    // we're only handling errors from this specific transformer and the twitter URL
    // so we'll rethrow errors from any other transformer/url
    throw error
  }
  return getFailureAdmonition(url)
}

const remarkOembedderPlugin = [
  remarkEmbedder,
  {
    transformers: [
      [
        oembedTransformer,
        // cf. https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/get-statuses-oembed
        { params: { maxwidth: 550, omit_script: true, align: 'center', lang: 'ja', dnt: true } }
      ]
    ],
    handleError: handleEmbedError
  }
]

const username = process.env.USERNAME || 'Ningensei848'
const domainName = process.env.DOMAIN_NAME || 'ningensei848.github.io'
const repositoryName = process.env.REPOSITORY_NAME || 'laom' // Usually your repo name.

const protocol = process.env.FORCE_HTTP ? 'http' : 'https'
const siteUrl = `${protocol}://${domainName}`


/** @type {import('@docusaurus/types').Config} */
const config = {
  // required ---------------------
  title: process.env.SITE_TITLE,
  url: process.env.SITE_URL || siteUrl,
  baseUrl: process.env.BASEPATH_NAME ? `/${process.env.BASEPATH_NAME}/` : '/',
  // ------------------------------
  tagline: process.env.TAGLINE,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: username, // Usually your GitHub org/user name.
  projectName: repositoryName, // Usually your repo name.
  trailingSlash: false,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // Blog-only mode
        // cf. https://docusaurus.io/docs/blog#blog-only-mode
        docs: false,
        // docs: {
        //   sidebarPath: require.resolve('./sidebars.js'),
        //   // Please change this to your repo.
        //   editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        blog: {
          path: 'content/blogs', // Path to the blog content directory on the filesystem, relative to site dir.
          routeBasePath: '/',
          // Please change this to your repo.
          editUrl: `https://github.com/${username}/${repositoryName}/edit/main/`,
          showReadingTime: false,
          blogTitle: process.env.BLOG_TITLE || 'Blog',
          blogDescription: process.env.BLOG_DESCRIPTION || `${username}'s Blog`,
          blogSidebarCount: process.env.SIDEBAR_COUNT || 'ALL',
          blogSidebarTitle: process.env.SIDEBAR_TITLE || 'All our posts',
          beforeDefaultRemarkPlugins: [remarkOembedderPlugin],
          feedOptions: {
            type: 'all',
            title: process.env.FEED_TITLE || process.env.BLOG_TITLE || 'Blog',
            description: process.env.FEED_DESCRIPTION || process.env.BLOG_DESCRIPTION || `${username}'s Blog`,
            copyright: process.env.FEED_COPYRIGHT || `Copyright © ${username}, ${new Date().getFullYear()}`,
            language: process.env.FEED_LANGUAGE || 'ja-JP'
          }
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  stylesheets: [
    'https://fonts.googleapis.com/css?family=Noto+Sans+JP',
    // 'https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c',
    // 'https://fonts.googleapis.com/css?family=Sawarabi+Mincho'
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: process.env.LOGO_TITLE || process.env.SITE_TITLE || 'My Site',
        logo: {
          alt: process.env.LOGO_TITLE || process.env.SITE_TITLE || 'My Site Logo',
          src: (() => `img/logo.${process.env.LOGO_EXTENSION || 'svg'}`)(),  // IIFE
          srcDark: (() => `img/logo_dark.${process.env.LOGO_EXTENSION || 'svg'}`)()
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          // { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: `https://github.com/${username}/${repositoryName}`,
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: 'Docs',
        //     items: [
        //       {
        //         label: 'Tutorial',
        //         to: '/docs/intro',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Community',
        //     items: [
        //       {
        //         label: 'Stack Overflow',
        //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //       },
        //       {
        //         label: 'Discord',
        //         href: 'https://discordapp.com/invite/docusaurus',
        //       },
        //       {
        //         label: 'Twitter',
        //         href: 'https://twitter.com/docusaurus',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'Blog',
        //         to: '/blog',
        //       },
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/facebook/docusaurus',
        //       },
        //     ],
        //   },
        // ],]

        logo: {
          alt: process.env.LOGO_TITLE || process.env.SITE_TITLE || 'My Site Logo',
          src: (() => `img/logo.${process.env.LOGO_EXTENSION || 'svg'}`)(),  // IIFE
          srcDark: (() => `img/logo_dark.${process.env.LOGO_EXTENSION || 'svg'}`)(),  // IIFE
          // Logo URL is set to base URL of your site by default (siteConfig.baseUrl).
          // Although you can specify your own URL for the logo,
          // if it is an external link, it will open in a new tab.
          // href: `${siteUrl}/${repositoryName}`,
          width: 50,
          height: 50
        },
        copyright: process.env.FEED_COPYRIGHT || `Copyright © ${new Date().getFullYear()} ${username}, Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      metadata: [
        { name: 'twitter:title', content: process.env.SITE_TITLE }
      ]
    }),
  plugins: [
    // [
    //   require.resolve('@cmfcmf/docusaurus-search-local'),
    //   {
    //     language: ['ja', 'en']
    //   }
    // ],
    // local plugins ----------------------------------------------------------
    [
      // load GTM, Adsense, Twitter widget
      `${__dirname}/src/plugins/injectHeadTag`,
      {
        GTM_ID: process.env.GOOGLE_TAG_MANAGER_ID || 'GTM-XXXXXX',
        AD_ID: process.env.GOOGLE_ADSENSE_ID || 'ca-pub-xxxxxxxxxx'
      }
    ],
  ]
};

module.exports = config;
