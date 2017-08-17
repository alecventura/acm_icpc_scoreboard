const ProcessInputService = require('./../../../src/services/ProcessInputService')();
const mocks = require('./__mocks__/inputs.mock');

describe('Test ProcessInputService service', () => {
  test('It should retrieve one test case result from input', () => {
    const mock = JSON.parse(JSON.stringify(mocks.oneTestCaseOk));
    const result = ProcessInputService.getTestCasesArray(mock);
    expect(result.array.length).toEqual(1);
  });

  test('It should retrieve one test case result WITH ERROR from input', () => {
    const mock = JSON.parse(JSON.stringify(mocks.oneTestCaseWithError));
    const result = ProcessInputService.getTestCasesArray(mock);
    expect(result.array.length).toEqual(1);
    expect(result.error).toEqual('There are fewer tests cases that what was specified on the first line. It processed the ones available.');
  });

  test('It should retrieve two test case results from input', () => {
    const mock = JSON.parse(JSON.stringify(mocks.twoTestCasesOk));
    const result = ProcessInputService.getTestCasesArray(mock);
    expect(result.array.length).toEqual(2);
  });

  test('It should correctly parse one test case', () => {
    const mock = JSON.parse(JSON.stringify(mocks.oneTestCaseOk));
    const mockResult = JSON.parse(JSON.stringify(mocks.oneTestCaseResult));
    let result = ProcessInputService.getTestCasesArray(mock);
    result = ProcessInputService.parseTestCases(result);

    expect(result.array.join('\n')).toEqual(mockResult);
  });
});
