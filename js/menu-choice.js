
$(".menu-section").click(function () {
    var menuSectionHeading = $(this).text();
    $(".footer-block").css("opacity", "1");
    if ( menuSectionHeading == "Breakfast Luni" ) {
        $(".menu-section").css("backgroundColor", "#c0ca33");
        $(".menu-dishes").css("display", "none");
        $("#menuBreakfast").css("display", "flex");
        $(this).css("backgroundColor", "#827717");
    } else if ( menuSectionHeading == "Urban" ) {
        $(".menu-section").css("backgroundColor", "#c0ca33");
        $(".menu-dishes").css("display", "none");
        $("#menuUrban").css("display", "flex");
        $(this).css("backgroundColor", "#827717");
    } else if ( menuSectionHeading == "Starters" ) {
        $(".menu-section").css("backgroundColor", "#c0ca33");
        $(".menu-dishes").css("display", "none");
        $("#menuStarters").css("display", "flex");
        $(this).css("backgroundColor", "#827717");
    } else if ( menuSectionHeading == "Soups" ) {
        $(".menu-section").css("backgroundColor", "#c0ca33");
        $(".menu-dishes").css("display", "none");
        $("#menuSoups").css("display", "flex");
        $(this).css("backgroundColor", "#827717");
    } else if ( menuSectionHeading == "Main Course" ) {
        $(".menu-section").css("backgroundColor", "#c0ca33");
        $(".menu-dishes").css("display", "none");
        $("#menuMainCourse").css("display", "flex");
        $(this).css("backgroundColor", "#827717");
    } else if ( menuSectionHeading == "Salads" ) {
        $(".menu-section").css("backgroundColor", "#c0ca33");
        $(".menu-dishes").css("display", "none");
        $("#menuSalads").css("display", "flex");
        $(this).css("backgroundColor", "#827717");
    } else if ( menuSectionHeading == "Sides" ) {
        $(".menu-section").css("backgroundColor", "#c0ca33");
        $(".menu-dishes").css("display", "none");
        $("#menuSides").css("display", "flex");
        $(this).css("backgroundColor", "#827717");
    } else if ( menuSectionHeading == "Pizza" ) {
        $(".menu-section").css("backgroundColor", "#c0ca33");
        $(".menu-dishes").css("display", "none");
        $("#menuPizza").css("display", "flex");
        $(this).css("backgroundColor", "#827717");
    } else if ( menuSectionHeading == "Pizza Gigant" ) {
        $(".menu-section").css("backgroundColor", "#c0ca33");
        $(".menu-dishes").css("display", "none");
        $("#menuPizzaGigant").css("display", "flex");
        $(this).css("backgroundColor", "#827717");
    } else if ( menuSectionHeading == "Dessert" ) {
        $(".menu-section").css("backgroundColor", "#c0ca33");
        $(".menu-dishes").css("display", "none");
        $("#menuDessert").css("display", "flex");
        $(this).css("backgroundColor", "#827717");
    } else if ( menuSectionHeading == "Wines" ) {
        $(".menu-section").css("backgroundColor", "#c0ca33");
        $(".menu-dishes").css("display", "none");
        $("#menuWines").css("display", "flex");
        $(this).css("backgroundColor", "#827717");
    } else if ( menuSectionHeading == "Drinks" ) {
        $(".menu-section").css("backgroundColor", "#c0ca33");
        $(".menu-dishes").css("display", "none");
        $("#menuDrinks").css("display", "flex");
        $(this).css("backgroundColor", "#827717");
    }
});

