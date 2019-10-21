const proxy = [
  {
    context: '/api',
    target: 'http://localhost:8082/FindLogsBackEnd',
    pathRewrite: {'^/api' : ''}
  }
];
module.exports = proxy;
