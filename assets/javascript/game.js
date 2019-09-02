var random_result;
var lost = 0;
var win = 0;
var previous = 0;

var resetAndStart = function (){
    $(".crystals").empty();
    random_result = Math.floor (Math.random () * 90) + 30;

    $("#result").html('Random Result: ' + random_result);

    for (var i = 0; i < 4; i++){
        var random = Math.floor(Math.random () * 12) + 1;

        var crystal = $("<div>");

            crystal.attr ({
                "class": 'crystal'
                "data-random": random
            });
                crystal.html (random);
            $(".crystals").append(crystal);
    }
}

resetAndStart ();

var reset = function () {
    $(document).on('click', ".crystal", function (){
        var num = parseInt ($(this).attr('data-random'));
        previous += num;
        console.log(previous);

        if (previous > random_result){
            lost--;
            $("#lost").html (lost);
            previous = 0
            resetAndStart ();
        }else if (previous===random_result){
            win++;
            $("#win").html(win);
            previous = 0;
            resetAndStart
        }
    })
}




// Computer select randomly generated number between 19 - 120
// Assign a randomly generated number to each of the four crystals between 1-12
// Add an on click to each crystal
// Print the sum of the clicked numbers
// If the sum is < randomly generated number, allow user to keep guessing
// If the sum is equal to the randomly generated number, add to wins 
// If the sum is greater than the randomly generated number, add to losses