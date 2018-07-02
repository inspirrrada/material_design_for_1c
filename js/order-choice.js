var a = 1,
    b = 1;
$("#commentEdit").click(function () {
        $('#commentField').prop('disabled', false);
        $("#commentSave").css("display", "block");
        $('#commentField').focus();
});

$("#commentSave").click(function () {
        $('#commentField').prop('disabled', true);
        $("#commentSave").css("display", "none");
});
