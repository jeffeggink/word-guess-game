//JS!DOCUMENT
var $ = function (id) {
    return document.getElementById(id);
}

//Declare and initialized array
    var game = ["January", "February", "March", "April", "May," "June", "July", "August", "September",
                "October", "November", "December"]
    var choice = Math.floor(Math.random()*12);
    var answer = game[choice];
    var myLength = answer.Length;
    var display =[myLength]
    var win = myLength;
    var letters = answer.split('');
    var attempts = 3;
    var output = "";
    var userLetter = "";


var setup = function()
{
    for (var i=0; i < answer.length; i++)
    { 
        display[i] = "_ ";
        output = output + display[i];
    }
    document.getElementById("game").innerHTML = output;
    output ="";

}

var submit = function()
{
    output = "";
    userLetter = $("letter").value;
    $("letter").value = "";

    for (var c= 0; c < )answer.length; c++)
    {
        aler(letters[c]);
        if (userLetter.toUpperCase() == letters[c])
        {

            display[c] = userLetter.toUpperCase();
            win--;
        }
            output = output + display[c] + " ";

    }
    document.getElementById("game").innerHTML = output;
    output = "";
    attemptsLeft--;

    if (win < 1)
    {
        document.getElementById("guesses").innerHTML = "You Win!";
    }
    else if (attemptsLeft < 1)
    {
        document.getElementById("guesses").innerHTML = "LOSER! Haha!";
    }
    else
    {

        document.getElementById("guesses").innerHTML = "Only " =
    attemptsLeft + " guesses left";
    }

}

window.onload = function()
{
    setup();
    $("submit").onclick = submit;
}