$("#otherButton").click(function () {
    $(".other").show();
    $(".cakes").hide();
    $("#otherButton").addClass("otherButtonOn");
    $("#otherButton").removeClass("otherButtonOff");
    $("#cakeButton").addClass("cakeButtonOff");
    $("#cakeButton").removeClass("cakeButtonOn");
});

$("#cakeButton").click(function () {
    $(".cakes").show();
    $(".other").hide();
    $("#cakeButton").removeClass("cakeButtonOff");
    $("#cakeButton").addClass("cakeButtonOn");
    $("#otherButton").removeClass("otherButtonOn");
    $("#otherButton").addClass("otherButtonOff");
});