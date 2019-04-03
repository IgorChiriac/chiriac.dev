const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/',

  siteTitle: 'Igor Chiriac - Personal Website',
  siteTitleAlt: 'Igor Chiriac',
  siteTitleShort: 'chiriac',
  siteHeadline: '',
  siteUrl: 'https://chiriac.dev',
  siteLanguage: 'en',
  siteLogo: '/logo.png',
  siteDescription: '',
  author: 'IgorChiriac',

  userTwitter: '@Igor_Chiriac', // Twitter Username
  ogSiteName: 'cara', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-47519312-5',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
