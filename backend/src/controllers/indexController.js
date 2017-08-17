module.exports.index = function(application, req, res){    
    res.send('Hello devgrid =)');
}

module.exports.processInput = function(application, req, res){    
    var data = req.body;    
    var input = data.input;
    if (!input) {
        res.send('');
        return;
    }

    var processInputService = new application.src.services.processInputService();
    var result = processInputService.getTestCasesArray(input);
    result = processInputService.parseTestCases(result);
    var outputString = result.array && result.array.length > 0 ? result.array.join('\n')+'\n' : '';
    // Add the errors at the end of the string:
    outputString += result.error || '';

    res.send(outputString);
}