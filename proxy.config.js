// @ts-check
const { npm_package_config_port: PORT = 4200 } = process.env;

const PROXY_CONFIG = {
  '/api/github': {
    target: 'https://api.github.com',
    changeOrigin: true,
    secure: false,
    pathRewrite: {
      '^/api/github': '',
    },
  },

  '/api/': {
    target: `http://localhost:${~~PORT + 10}`,
    changeOrigin: true,
    secure: false,
  },

  '/api-pbe/': {
    target: 'https://10.160.182.225:6443',
    changeOrigin: true,
    secure: false,
    pathRewrite: {
      '^/api-pbe': '/api',
    },
  },
};

module.exports = PROXY_CONFIG;
