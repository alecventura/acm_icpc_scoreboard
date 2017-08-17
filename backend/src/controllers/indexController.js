module.exports.index = function index(application, req, res) {
  res.send('Hello devgrid =)');
};

module.exports.processInput = function processInput(application, req, res) {
  const data = req.body;
  const input = data.input;
  if (!input) {
    res.send('');
    return;
  }

  const processInputService = application.src.services.ProcessInputService;
  let result = processInputService.getTestCasesArray(input);
  result = processInputService.parseTestCases(result);
  let outputString = result.array && result.array.length > 0 ? `${result.array.join('\n')}\n` : '';
  // Add the errors at the end of the string:
  outputString += result.error || '';

  res.send(outputString);
};
