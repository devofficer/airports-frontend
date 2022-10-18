const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/aeroapi',
    createProxyMiddleware({
      target: 'https://montauk-cors.herokuapp.com/https://aeroapi.flightaware.com/',
      changeOrigin: true,
    })
  );
  app.use(
    '/aviationstack',
    createProxyMiddleware({
      target: 'http://api.aviationstack.com/',
      changeOrigin: true,
      pathRewrite: {
        '^/aviationstack/v1': '/v1'
      }
    })
  );
};
