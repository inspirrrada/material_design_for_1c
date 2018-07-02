
$(document).ready(function(){
    $('.modal').modal();
});



var worker = document.querySelectorAll(".staff-btn");
console.log(worker.length);


for (var i = 0; i < worker.length; i++) {
    var workerActive = worker[i];
    $(workerActive).click(function(){
        var workerActiveName = $(this).text();
        console.log(workerActiveName);
        var text = "";
        $("#workerSelected").text(text);
        $("#workerSelected").append(workerActiveName);
        var workerActiveButton = $(this);


        var passwordField = $("#workerPassword").text();
        var numbers = document.querySelectorAll(".number-btn");
        console.log(numbers);

        for (var i = 0; i < numbers.length; i++) {
            var numberCurrent = numbers[i];
            $(numberCurrent).click(function () {
                $("#wrongPin").css("display", "none");
                passwordField += $(this).val();
                console.log(passwordField);
                $("#workerPassword").val(passwordField);
            });
        };

        $("#pinModalClose").click(function () {
            passwordField = "";
            $("#workerPassword").val("");
            $("#wrongPin").css("display", "none");
        })

        $("#number-clear").click(function () {
            passwordField = "";
            $("#workerPassword").val("");
        });


        $("#number-ok").click(function () {
            console.log("$(\"#workerPassword\").val(): " + $("#workerPassword").val());
            console.log("$(this).val(): " + $(workerActiveButton).val());

            if ( $("#workerPassword").val() == $(workerActiveButton).val() )  {
                console.log("Right PIN!");
                $(location).attr("href", "scr__table-choice.html");
            } else {
                console.log("Wrong PIN!");
                $("#wrongPin").css("display", "block");
            }
            passwordField = "";
            $("#workerPassword").val("");
        });




    });
};


