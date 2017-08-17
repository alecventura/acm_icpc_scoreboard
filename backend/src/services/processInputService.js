const firstBy = require('thenby');

function ProcessInputService() {
}

const internalBuildScoreBoards = function (testCaseString) {
  // console.log(testCaseString);
  const submissionsArray = testCaseString.split('\n');

  // For each incorrect result we will check if there is a correct 
  // of the same team/problem, and if there is we add 20min penalty 
  // to the correct one.
  for (let i = 0; i < submissionsArray.length; i += 1) {
    if (/.*I/.test(submissionsArray[i])) { // If the line ends with the I letter:
      const incorrectSubmission = submissionsArray[i].split(' ');
      const correctSubmissionIndex = submissionsArray.findIndex((findItem) => {
        const findItemSplited = findItem.split(' ');
        return findItemSplited[3] === 'C' && findItemSplited[0] === incorrectSubmission[0] && findItemSplited[1] === incorrectSubmission[1];
      });
      if (correctSubmissionIndex && correctSubmissionIndex > -1) {
        const correctSubmission = submissionsArray[correctSubmissionIndex].split(' ');
        correctSubmission[2] = parseInt(correctSubmission[2], 10) + 20;
        submissionsArray[correctSubmissionIndex] = correctSubmission.join(' ');
      }
    }
  }

  // Then we group every correct into an object where the key will be the team number:
  let teams = [];
  for (let i = 0; i < submissionsArray.length; i += 1) {
    if (/.*C/.test(submissionsArray[i])) { // If the line ends with the C letter:
      const submission = submissionsArray[i].split(' ');
      const team = teams.find(item => item.teamNumber === submission[0]);
      if (!team) {
        const newTeam = {
          teamNumber: submission[0],
          problemsSolved: 1,
          penaltyTime: parseInt(submission[2], 10),
        };
        teams.push(newTeam);
      } else {
        team.problemsSolved += 1;
        team.penaltyTime += parseInt(submission[2], 10);
      }
    }
  }
  // Sort the result, first by number of resolved problems, then for the same number of resolved 
  // problems by time, and for the same resolved problems and time, by team number    
  teams = teams.sort(
    firstBy('problemsSolved', -1) // the -1 parameter indicates an ascending order.
      .thenBy('penaltyTime')
      .thenBy('teamNumber'),
  );

  let resultString = '';
  for (let i = 0; i < teams.length; i += 1) {
    const element = teams[i];
    resultString += `${element.teamNumber} ${element.problemsSolved} ${element.penaltyTime}\n`;
  }
  return resultString;
};

ProcessInputService.prototype.getTestCasesArray = function (input) {
  const result = {
    array: [],
    error: null,
  };
  let numTestsCases = 0;
  try {
    numTestsCases = parseInt(input.split('\n')[0], 10);
  } catch (error) {
    result.error = 'First line should be a integer and specify the number of cases.';
    return result;
  }
  // remove the first line because it contains the number of 
  // tests only and its not part of the case itself:
  const testCases = input.replace(/^.*/, '');

  let testsCasesArray = testCases.split('\n\n');

  if (testsCasesArray.length < numTestsCases) {
    result.error = 'There are fewer tests cases that what was specified on the first line. It processed the ones available.';
  } else if (testsCasesArray.length > numTestsCases) {
    result.error = 'There are more tests cases that what was specified on the first line. It processed only the specified number.';
    testsCasesArray = testsCasesArray.splice(0, numTestsCases);
  }
  result.array = testsCasesArray;
  return result;
};

ProcessInputService.prototype.parseTestCases = function (data) {
  const result = {
    error: data.error || null,
    array: [],
  };
  for (let i = 0; i < data.array.length; i += 1) {
    const testCaseString = data.array[i];
    try {
      result.array.push(internalBuildScoreBoards(testCaseString));
    } catch (error) {
      result.error = result.error != null ? `${result.error}\n${error}` : error;
    }
  }
  return result;
};

module.exports = function () {
  return ProcessInputService;
};
