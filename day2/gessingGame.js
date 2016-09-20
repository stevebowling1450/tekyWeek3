
var answer;

function setupGame() {

    $("#tbxGuess").val("");
    $("#message").val("");

    answer = parseInt(Math.random() * 10);
    console.log("Cheater!!" + answer);

    $("#intro").show();
    $("#game").hide();
    
        

function handleGuess() {
    var guess = $("#tbxGuess").val();
    if (+guess == answer) {
        $("#message").text("you are right");
        $("#tbxGuess").hide();
        
        

    }
    else {
        $("#message").text("Try again");
        $("#tbxGuess").val("");
        $("#tbxGuess").focus();
    }
}

function playGame() {
    $("#intro").hide();
    $("#game").show();
}
$(function () {
    $("#startGame").on("click", playGame);
    $("#btnGuess").on("click", handleGuess);
    setupGame();

});
function startOver() {
    location.reload();
};

