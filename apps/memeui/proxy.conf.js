const port=process.env.PORT;
const PROXY_CONFIG = {
  '/api': {
    target: `http://localhost:${port}`,
    secure: false,
  },
};

module.exports = PROXY_CONFIG;
