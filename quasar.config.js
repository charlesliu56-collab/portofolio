/* eslint-env node */

const { configure } = require('quasar/wrappers');

module.exports = configure(function (/* ctx */) {
  return {
    boot: ['vueParticles', 'aos'],

    css: ['app.scss'],

    extras: ['roboto-font', 'material-icons'],

    build: {
      target: {
        browser: ['es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1'],
        node: 'node20',
      },

      vueRouterMode: 'hash',

      // 1. Arahkan hasil build ke folder 'docs' agar tidak mengotori root
      distDir: 'docs',

      // 2. Gunakan './' agar path aset fleksibel dan tidak blank
      publicPath: process.env.NODE_ENV === 'production' ? './' : '/',

      vitePlugins: [
        [
          'vite-plugin-checker',
          {
            vueTsc: {
              tsconfigPath: 'tsconfig.vue-tsc.json',
            },
            eslint: {
              lintCommand: 'eslint "./**/*.{js,ts,mjs,cjs,vue}"',
            },
          },
          { server: false },
        ],
      ],
    },

    devServer: {
      open: true,
    },

    framework: {
      config: {},
      plugins: [],
    },

    animations: 'all',

    ssr: {
      pwa: false,
      prodPort: 3000,
      middlewares: ['render'],
    },

    pwa: {
      workboxMode: 'generateSW',
      injectPwaMetaTags: true,
      swFilename: 'sw.js',
      manifestFilename: 'manifest.json',
      useCredentialsForManifestTag: false,
    },

    cordova: {},

    capacitor: {
      hideSplashscreen: true,
    },

    electron: {
      inspectPort: 5858,
      bundler: 'packager',
      packager: {},
      builder: {
        appId: 'template',
      },
    },

    bex: {
      contentScripts: ['my-content-script'],
    },
  };
});
