module.exports = function indexRoute(application) {
  application.get('/', (req, res) => {
    application.src.controllers.indexController.index(application, req, res);
  });

  application.post('/process-input/', (req, res) => {
    application.src.controllers.indexController.processInput(application, req, res);
  });
};
