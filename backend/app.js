const app = require('./config/server');

app.listen(3002, () => {
  console.warn('Server initialized');
});
