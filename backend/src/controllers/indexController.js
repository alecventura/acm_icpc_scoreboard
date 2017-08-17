module.exports.index = function (application, req, res) {
  res.send('Hello devgrid =)');
};

module.exports.processInput = function (application, req, res) {
  const data = req.body;
  const input = data.input;
  if (!input) {
    res.send('');
    return;
  }

  const processInputService = new application.src.services.ProcessInputService();
  let result = processInputService.getTestCasesArray(input);
  result = processInputService.parseTestCases(result);
  let outputString = result.array && result.array.length > 0 ? `${result.array.join('\n')}\n` : '';
  // Add the errors at the end of the string:
  outputString += result.error || '';

  res.send(outputString);
};
