const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/aeroapi',
    createProxyMiddleware({
      target: 'https://montauk-cors.herokuapp.com/https://aeroapi.flightaware.com/',
      changeOrigin: true,
    })
  );
};
