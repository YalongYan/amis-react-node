import { defineConfig } from 'umi';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  chainWebpack: (memo) => {
    memo.resolve.extensions.add('tsx');
  },
  nodeModulesTransform: {
    type: 'none',
  },
  hash: true,
  autoprefixer: {
    browsers: ['> 1%', 'last 2 versions', 'not ie <= 10'],
  },
  dynamicImport: {
    loading: '@/components/loading',
  },
  theme: {
    'primary-color': '#0052FE',
  },
  extraBabelPlugins: [['import', { libraryName: 'antd', style: 'css' }]],
  proxy: {
    '/shark/api/': {
      target: 'http://127.0.0.1:1753/',
      changeOrigin: true,
      // pathRewrite: {
      //   '^/igp': ''
      // }
    },
    '/node/': {
      target: 'http://127.0.0.1:1753/',
      changeOrigin: true,
    },
    '/ugp/': {
      target: 'http://127.0.0.1:1753/',
      changeOrigin: true,
    },
  },
  outputPath: './dist/igp/',
  publicPath: '/igp/',
  define: {
    APP_ENV: isProd ? 'production' : 'development',
  },
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: '@/pages/login' },
    {
      path: '/',
      component: '@/containers/layout',
      routes: [
        {
          path: '/editor',
          component: '@/pages/editor',
        },
        {
          path: '/chartList',
          component: '@/pages/chartList',
        },
        {
          path: '/view',
          component: '@/pages/view',
        },
      ],
    },
    { path: '*', component: '@/pages/404' },
    // {
    //   path: '/',
    //   component: '@/containers/layout',
    //   routes: [
    //     // {
    //     //   path: '/data/newer',
    //     //   component: '@/pages/data/newer',
    //     // },
    //     {
    //       path: '*',
    //       component: '@/pages/404',
    //     },
    //   ],
    // },
  ],
});
