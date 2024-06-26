// eslint-disable-next-line @typescript-eslint/no-var-requires -- не разрешает next писать конфиг на ts
const { UniversalFederationPlugin } = require('@module-federation/node');

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  transpilePackages: [
    '@colibrijs/core',
    '@ant-design',
    'antd',
    'rc-util',
    'rc-pagination',
    'rc-picker',
    'rc-table',
    'rc-tree',
  ],

  env: {
    COLIBRIJS_API_BASE_URL: process.env.COLIBRIJS_API_BASE_URL || 'http://localhost:3001/',
    EXAMPLE_URL: process.env.EXAMPLE_URL || 'https://colibrijs.github.io/colibrijs/main/example/',
  },

  webpack: (config, context) => {
    config.plugins.push(
      new UniversalFederationPlugin(
        {
          isServer: context.isServer,
          library: { name: 'application', type: 'commonjs-module' },
          remotes: {
            fake: 'promise new Promise((resolve) => {resolve({get:()=>Promise.resolve(()=>{}),init:()=>{}})})',
          },
          name: 'application',
          shared: {
            react: {
              eager: true,
              import: 'react',
              requiredVersion: '^18',
              shareKey: 'react',
              shareScope: 'default',
              singleton: true,
            },
          },
        },
        {}
      )
    );

    return config;
  },
};

module.exports = nextConfig;
