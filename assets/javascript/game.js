var random_result;
var lost = 0;
var win = 0;
var previous = 0;
var crystalCollected = 0;

var resetAndStart = function (){
    // $(".crystals").empty();
    random_result = Math.floor (Math.random () * 90) + 30;

    $("#crystalValue").html(random_result);

    // for (var i = 0; i < 4; i++){
        var random1 = Math.floor(Math.random () * 12) + 1;
        var random2 = Math.floor(Math.random () * 12) + 1;
        var random3 = Math.floor(Math.random () * 12) + 1;
        var random4 = Math.floor(Math.random () * 12) + 1;

        $("#image1").attr("data-value",random1);
        $("#image2").attr("data-value",random2);
        $("#image3").attr("data-value",random3);
        $("#image4").attr("data-value",random4);


    //     var crystal = $("<div>");

    //         crystal.attr ({
    //             "class": 'crystal'
    //             "data-random": random
    //         });
    //             crystal.html (random);
    //         $(".crystals").append(crystal);
    // }
}

resetAndStart ();

// var reset = function () {
    $("img").on('click', function (){
        var num = parseInt($(this).attr('data-value'));
        crystalCollected += num;
        console.log(crystalCollected);
        $("#crystalCollected").text(crystalCollected)
        
        if (crystalCollected == random_result){
            win++;
            $("#win").html(win);
            console.log("wins",win)
            crystalCollected = 0;
            resetAndStart();
        }
        else if (crystalCollected > random_result){
            lost++;
            $("#lost").html(lost);
            crystalCollected = 0
            resetAndStart();
        }
    })
// }




// Computer select randomly generated number between 19 - 120
// Assign a randomly generated number to each of the four crystals between 1-12
// Add an on click to each crystal
// Print the sum of the clicked numbers
// If the sum is < randomly generated number, allow user to keep guessing
// If the sum is equal to the randomly generated number, add to wins 
// If the sum is greater than the randomly generated number, add to losses