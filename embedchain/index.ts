import { EmbedChainApp } from './embedchain';

export const App = async (config?: EmbedChainApp) => {
  const appConfig = config || {};
  const app = new EmbedChainApp(appConfig);
  await app.initApp;
  return app;
};
