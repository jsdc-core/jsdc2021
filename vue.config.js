module.exports = {
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap((args) => {
        args[0].title = process.env.npm_package_title;
        args[0].meta = [
          { charset: 'utf-8' },
          { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
          { name: 'viewport', content: 'width=device-width,initial-scale=1.0,user-scalable=no' },
          { name: 'name', content: process.env.npm_package_title },
          { name: 'description', content: process.env.npm_package_description },
          { name: 'keywords', content: 'website, javascript, conference, developers, js, JSDC, 2021' },
          { name: 'author', content: 'JSDC Member' },
          // Facebook meta data
          { property: 'og:title', content: process.env.npm_package_title },
          { property: 'og:description', content: process.env.npm_package_description },
          { property: 'og:site_name', content: process.env.npm_package_title },
          // Twitter meta data
          { name: 'twitter:card', content: 'summary' },
          { name: 'ttwitter:creator', content: 'JSDC Member' },
          { name: 'twitter:title', content: process.env.npm_package_title },
          { name: 'twitter:card', content: process.env.npm_package_description },
          { name: 'twitter:site', content: '@jsdc_tw' },
        ];
        return args;
      });
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/assets/styles/main.scss";',
      },
    },
  },
};
