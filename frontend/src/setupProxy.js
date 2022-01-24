const { createProxyMiddleware } = require('http-proxy-middleware');

// AI STUDIOS CORS 에러 방지용 프록시 설정
module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://dev.aistudios.com',
      changeOrigin: true,
    }),
  );
};
