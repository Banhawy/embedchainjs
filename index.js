const { EmbedChainApp } = require('./embedchain/embedchain.ts');

async function App(appConfig = {}) {
  const app = new EmbedChainApp(appConfig);
  await app.initApp;
  return app;
}

module.exports = { App };
