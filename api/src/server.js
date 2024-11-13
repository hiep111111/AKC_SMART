// server.js
import tAuthAPP from './core/tAuth/index.js';
import SERVICE_PORT from './utils/servicePort.js';

const apps = [
  { createApp: tAuthAPP, port: SERVICE_PORT.AUTH },
  // { createApp: createAuthApp2, port: SERVICE_PORT.AUTH2 },
];

apps.reduce((promise, { createApp, port }, index) => {
  return promise.then(() => {
    return createApp().then((app) => {
      app.listen(port, () => {
        console.log(`PORT AUTH${index + 1} ======${port}====== IS RUNNING`);
      });
    });
  });
}, Promise.resolve())
  .catch((error) => {
    console.log('Error starting apps:', error);
  });
