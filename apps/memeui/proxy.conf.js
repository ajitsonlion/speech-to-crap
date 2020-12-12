const PROXY_CONFIG = {
  '/api': {
    target: 'http://localhost:3333',
    secure: false,
  },
};

module.exports = PROXY_CONFIG;
