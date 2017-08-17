module.exports = function(application){
    application.get('/', function(req, res){
        application.src.controllers.indexController.index(application, req, res);
    })

    application.post('/process-input/', function(req, res){
        application.src.controllers.indexController.processInput(application, req, res);
    })
}