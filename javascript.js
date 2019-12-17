var score = 0;
var question = 0;
var q1 = "";
var q2 = "";
var q3 = "";
var q4 = "";
var q5 = "";
var q6 = "";
var q7 = "";
var q8 = "";
var q9 = "";
var q10 = "";
var a1 = "";
var a2 = "";
var a3 = "";
var a4 = "";
var a5 = "";
var a6 = "";
var a7 = "";
var a8 = "";
var a9 = "";
var a10 = "";
var answer = "";

$(document).ready(function(){
    $(body).ready(function(){
        $.ajax({url: "https://opentdb.com/api.php?amount=10&type=boolean", success: function(result){
          console.log("loading questions");  
          q1 = result.results[0].question
          q2 = result.results[1].question
          q3 = result.results[2].question
          q4 = result.results[3].question
          q5 = result.results[4].question
          q6 = result.results[5].question
          q7 = result.results[6].question
          q8 = result.results[7].question
          q9 = result.results[8].question
          q10 = result.results[9].question
          a1 = result.results[0].correct_answer
          a2 = result.results[1].correct_answer
          a3 = result.results[2].correct_answer
          a4 = result.results[3].correct_answer
          a5 = result.results[4].correct_answer
          a6 = result.results[5].correct_answer
          a7 = result.results[6].correct_answer
          a8 = result.results[7].correct_answer
          a9 = result.results[8].correct_answer
          a10 = result.results[9].correct_answer
          if (a1 == "True") {
              a1 = "true"
          } else if (a1 == "False") {
              a1 = "false"
          }
          if (a2 == "True") {
            a2 = "true"
        } else if (a2 == "False") {
            a2 = "false"
        }
        if (a3 == "True") {
            a3 = "true"
        } else if (a3 == "False") {
            a3 = "false"
        }
        if (a4 == "True") {
            a4 = "true"
        } else if (a4 == "False") {
            a4 = "false"
        }
        if (a5 == "True") {
            a5 = "true"
        } else if (a5 == "False") {
            a5 = "false"
        }
        if (a6 == "True") {
            a6 = "true"
        } else if (a6 == "False") {
            a6 = "false"
        }
        if (a7 == "True") {
            a7 = "true"
        } else if (a7 == "False") {
            a7 = "false"
        }
        if (a8 == "True") {
            a8 = "true"
        } else if (a8 == "False") {
            a8 = "false"
        }
        if (a9 == "True") {
            a9 = "true"
        } else if (a9 == "False") {
            a9 = "false"
        }
        if (a10 == "True") {
            a10 = "true"
        } else if (a10 == "False") {
            a10 = "false"
        }
          console.log(a1)
          console.log(a2)
          console.log(a3)
          console.log(a4)
          console.log(a5)
          console.log(a6)
          console.log(a7)
          console.log(a8)
          console.log(a9)
          console.log(a10)
          question = 1
          $('#output').text(q1)
          $('#nextButton').prop("disabled", true)
        }});
    });
});
function setQuestion() {
    $('#output').text(q1)
}
$('#guessButton').click(function(){
    answer=$('input[name=trueFalseRadio]:checked', '#quiz').val()
    if (question == 1) {
        if (answer == a1) {
            score += 1;
            $('#resultOut').text("Correct")
        }
        else {
            $('#resultOut').text("Incorrect")
        }
    } else if (question == 2) {
        if (answer == a2) {
            score += 1;
            $('#resultOut').text("Correct")
        }
        else {
            $('#resultOut').text("Incorrect")
        }
    } else if (question == 3) {
        if (answer == a3) {
            score += 1;
            $('#resultOut').text("Correct")
        }
        else {
            $('#resultOut').text("Incorrect")
        }
    } else if (question == 4) {
        if (answer == a4) {
            score += 1;
            $('#resultOut').text("Correct")
        }
        else {
            $('#resultOut').text("Incorrect")
        }
    } else if (question == 5) {
        if (answer == a5) {
            score += 1;
            $('#resultOut').text("Correct")
        }
        else {
            $('#resultOut').text("Incorrect")
        }
    } else if (question == 6) {
        if (answer == a6) {
            score += 1;
            $('#resultOut').text("Correct")
        }
        else {
            $('#resultOut').text("Incorrect")
        }
    } else if (question == 7) {
        if (answer == a7) {
            score += 1;
            $('#resultOut').text("Correct")
        }
        else {
            $('#resultOut').text("Incorrect")
        }
    } else if (question == 8) {
        if (answer == a8) {
            score += 1;
            $('#resultOut').text("Correct")
        }
        else {
            $('#resultOut').text("Incorrect")
        }
    } else if (question == 9) {
        if (answer == a9) {
            score += 1;
            $('#resultOut').text("Correct")
        }
        else {
            $('#resultOut').text("Incorrect")
        }
    } else if (question == 10) {
        if (answer == a10) {
            score += 1;
            $('#resultOut').text("Correct")
        }
        else {
            $('#resultOut').text("Incorrect")
        }
    }
    $('#guessButton').prop("disabled", true)
    $('#nextButton').prop("disabled", false)
})
$('#nextButton').click(function(){
    if (question == 1) {
        $('#output').text(q2)
    } else if (question == 2) {
        $('#output').text(q3)
    } else if (question == 3) {
        $('#output').text(q4)
    } else if (question == 4) {
        $('#output').text(q5)
    } else if (question == 5) {
        $('#output').text(q6)
    } else if (question == 6) {
        $('#output').text(q7)
    } else if (question == 7) {
        $('#output').text(q8)
    } else if (question == 8) {
        $('#output').text(q9)
    } else if (question == 9) {
        $('#output').text(q10)
    } else {
        $('#output').text("Game Over")
        $('#resultOut').text("Score: " + score)
    }
    if (question != 10) {
        question += 1
        $('#guessButton').prop("disabled", false)
        $('#resultOut').text("")
    }
    $('#nextButton').prop("disabled", true)
})