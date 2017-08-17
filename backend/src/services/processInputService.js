var firstBy = require('thenby');
function ProcessInputService(){
}

ProcessInputService.prototype.getTestCasesArray = function(input){
    var result = {
        array: [],
        error: null
    }
    try {
        var numTestsCases = parseInt(input.split('\n')[0]);
    } catch (error) {
        result.error = 'First line should be a integer and specify the number of cases.';
        return result;
    }
    // remove the first line because it contains the number of tests only and its not part of the case itself:
    input = input.replace(/^.*/,'');

    var testsCasesArray = input.split('\n\n');

    if(testsCasesArray.length < numTestsCases){
        result.error = 'There are fewer tests cases that what was specified on the first line. It processed the ones available.';
    } else if(testsCasesArray.length > numTestsCases){
        result.error = 'There are more tests cases that what was specified on the first line. It processed only the specified number.';
        testsCasesArray = testsCasesArray.splice(0, numTestsCases);
    }
    result.array = testsCasesArray;
    return result;
}

ProcessInputService.prototype.parseTestCases = function(data){
    var result = {
        error: data.error || null,
        array: []
    };
    for (var i = 0; i < data.array.length; i++) {
        var testCaseString = data.array[i];
        try {
            result.array.push(internalBuildScoreBoards(testCaseString));
        } catch (error) {
            result.error = result.error != null ? result.error+'\n'+error : error;        
        }
    }
    return result;
}

var internalBuildScoreBoards = function(testCaseString){
    // console.log(testCaseString);
    var submissionsArray = testCaseString.split('\n');

    // For each incorrect result we will check if there is a correct of the same team/problem, and if there is we add 20min penalty to the correct one.
    for (var i = 0; i < submissionsArray.length; i++) {
        if(/.*I/.test(submissionsArray[i])){ // If the line ends with the I letter:
            var incorrectSubmission = submissionsArray[i].split(' ');
            var correctSubmissionIndex = submissionsArray.findIndex(function(findItem){
                var findItemSplited = findItem.split(' ');
                return findItemSplited[3] == 'C' && findItemSplited[0] == incorrectSubmission[0] && findItemSplited[1] == incorrectSubmission[1];
            })
            if(correctSubmissionIndex && correctSubmissionIndex > -1){
                var correctSubmission = submissionsArray[correctSubmissionIndex].split(' ');
                correctSubmission[2] = parseInt(correctSubmission[2]) + 20;
                submissionsArray[correctSubmissionIndex] = correctSubmission.join(' ');
            }
        }
    }

    // Then we group every correct into an object where the key will be the team number:
    var teams = [];
    for (var i = 0; i < submissionsArray.length; i++) {
        if(/.*C/.test(submissionsArray[i])){ // If the line ends with the C letter:
            var submission = submissionsArray[i].split(' ');
            var team = teams.find(function(item){return item.teamNumber == submission[0]});
            if (!team) {
                var newTeam = {
                    teamNumber: submission[0],
                    problemsSolved: 1,
                    penaltyTime: parseInt(submission[2])
                };
                teams.push(newTeam);
            } else {
                team.problemsSolved = team.problemsSolved + 1;                
                team.penaltyTime = team.penaltyTime + parseInt(submission[2]);
            }
        }
    }
    // Sort the result, first by number of resolved problems, then for the same number of resolved problems by time, and for the same resolved problems and time, by team number    
    teams = teams.sort(
        firstBy("problemsSolved", -1) // the -1 parameter indicates an ascending order.
        .thenBy("penaltyTime")
        .thenBy("teamNumber")
    );
    
    var resultString = "";
    for (var i = 0; i < teams.length; i++) {
        var element = teams[i];
        resultString += element.teamNumber+' '+element.problemsSolved+' '+element.penaltyTime+'\n';
    }
    return resultString;
}

module.exports = function(){
    return ProcessInputService;
}