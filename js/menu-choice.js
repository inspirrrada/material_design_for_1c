
/*
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
*/

var menuBreakfast = [
    "Breakfast-9",
    "Breakfast-8",
    "Breakfast-7",
    "Breakfast-6",
    "Breakfast-5",
    "Breakfast-4",
    "Breakfast-3",
    "Breakfast-2",
    "Breakfast-1"
];

var menuUrban = [
    "Urban-12",
    "Urban-11",
    "Urban-10",
    "Urban-9",
    "Urban-8",
    "Urban-7",
    "Urban-6",
    "Urban-5",
    "Urban-4",
    "Urban-3",
    "Urban-2",
    "Urban-1"
];

var menuStarters = [
    "Starters-10",
    "Starters-9",
    "Starters-8",
    "Starters-7",
    "Starters-6",
    "Starters-5",
    "Starters-4",
    "Starters-3",
    "Starters-2",
    "Starters-1"
];

var menuSoups = [
    "Soups-8",
    "Soups-7",
    "Soups-6",
    "Soups-5",
    "Soups-4",
    "Soups-3",
    "Soups-2",
    "Soups-1"
];

var menuMainCourse = [
    "MainCourse-12",
    "MainCourse-11",
    "MainCourse-10",
    "MainCourse-9",
    "MainCourse-8",
    "MainCourse-7",
    "MainCourse-6",
    "MainCourse-5",
    "MainCourse-4",
    "MainCourse-3",
    "MainCourse-2",
    "MainCourse-1"
];

var menuSalads = [
    "Salads-6",
    "Salads-5",
    "Salads-4",
    "Salads-3",
    "Salads-2",
    "Salads-1"
];

var menuSides = [
    "Sides-9",
    "Sides-8",
    "Sides-7",
    "Sides-6",
    "Sides-5",
    "Sides-4",
    "Sides-3",
    "Sides-2",
    "Sides-1"
];

var menuPizza = [
    "Pizza-11",
    "Pizza-10",
    "Pizza-9",
    "Pizza-8",
    "Pizza-7",
    "Pizza-6",
    "Pizza-5",
    "Pizza-4",
    "Pizza-3",
    "Pizza-2",
    "Pizza-1"
];

var menuPizzaGigant = [
    "PizzaGigant-5",
    "PizzaGigant-4",
    "PizzaGigant-3",
    "PizzaGigant-2",
    "PizzaGigant-1"
];

var menuDessert = [
    "Dessert-3",
    "Dessert-2",
    "Dessert-1"
];

var menuWines = [
    "Wines-4",
    "Wines-3",
    "Wines-2",
    "Wines-1"
];

var menuDrinks = [
    "Drinks-6",
    "Drinks-5",
    "Drinks-4",
    "Drinks-3",
    "Drinks-2",
    "Drinks-1"
];


//
// var menu = [
//     menuBreakfast,
//     menuWines,
//     menuDessert
// ]


var dishBlock = $('<div class="dish-block"><button class="waves-effect waves-light btn dish-plus">+</button><button class="dish waves-effect waves-light btn"><div class="dish-name"></div><div class="dish-quantity"></div></button><button class="waves-effect waves-light btn dish-minus">-</button></div>');

var menuSection = $(".menu-section");
// console.log(menuSection);
// for (var z = 0; z < menuSection.length; z++) {
//     menuSection[z];
//     console.log(menuSection[z]);
// }

var a = 0;
var menuDish = [];


menuSection.click(function (e) {


    var e = event.target.id;
    // console.log(e);
    if (e === "menuBreakfastLuni") {
        menuDish = menuBreakfast;
    } else if (e === "menuUrban") {
        menuDish = menuUrban;
    } else if (e === "menuStarters") {
        menuDish = menuStarters;
    } else if (e === "menuSoups") {
        menuDish = menuSoups;
    } else if (e === "menuMainCourse") {
        menuDish = menuMainCourse;
    } else if (e === "menuSalads") {
        menuDish = menuSalads;
    } else if (e === "menuSides") {
        menuDish = menuSides;
    } else if (e === "menuPizza") {
        menuDish = menuPizza;
    } else if (e === "menuPizzaGigant") {
        menuDish = menuPizzaGigant;
    } else if (e === "menuDessert") {
        menuDish = menuDessert;
    } else if (e === "menuWines") {
        menuDish = menuWines;
    } else if (e === "menuDrinks") {
        menuDish = menuDrinks;
    };

    function removeDishBlock () {
        $(".dish-block").remove();
    }


    for (var i = 0; i < menuDish.length; i++) {
       if ($(".dish-block").length < menuDish.length) {
           dishBlock.clone().prependTo(".central-block");
           console.log();
           a++;
       } else {
           // $(".dish-block").remove();
           removeDishBlock ();
       }


        $(".dish-name").first().text(menuDish[i]);
       // console.log(a);

       var currentColor = $(this).css("background-color");
       $(".dish-block").css("background-color", ColorLuminance(currentColorHex, 0.2));



       $(".dish").click(function() {
           $(".dish").css("background-color", ColorLuminance(currentColorHex, 0.2));
           $(".dish-plus").css("background-color", ColorLuminance(currentColorHex, 0.2));
           $(".dish-minus").css("background-color", ColorLuminance(currentColorHex, 0.2));
           $(this).css("background-color", currentColor);
           var colorTest = $(this).css("background-color");
           console.log(colorTest);
            if (colorTest == currentColor) {
                $(".dish").css("background-color", ColorLuminance(currentColorHex, 0.2));
            };
       });




       function rgb2hex(rgb) {
           if (  rgb.search("rgb") == -1 ) {
               return rgb;
           } else {
               rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);
               function hex(x) {
                   return ("0" + parseInt(x).toString(16)).slice(-2);
               }
               return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
           }
       };


       var currentColorHex = rgb2hex(currentColor);
       // console.log(currentColorHex);

       function ColorLuminance(hex, lum) {
           // validate hex string
           hex = String(hex).replace(/[^0-9a-f]/gi, '');
           if (hex.length < 6) {
               hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
           }
           lum = lum || 0;
           // convert to decimal and change luminosity
           var rgb = "#", c, i;
           for (i = 0; i < 3; i++) {
               c = parseInt(hex.substr(i*2,2), 16);
               c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
               rgb += ("00"+c).substr(c.length);
           }
           return rgb;
       };
   }

    var b = 0;

    $(".dish-plus").click(function () {
        b++;
        $(this);
        $(this).siblings(".dish:eq(0)").children(".dish-quantity:eq(0)").text(b);
        $(".dish-plus").css("background-color", ColorLuminance(currentColorHex, 0.2));
        $(".dish-minus").css("background-color", ColorLuminance(currentColorHex, 0.2));
        $(".dish").css("background-color", ColorLuminance(currentColorHex, 0.2));
        $(this).siblings(".dish:eq(0)").css("background-color", currentColor);
        $(this).css("background-color", currentColor);
    });

    $(".dish-minus").click(function () {
        if (b > 0) {
            b--;
            $(this);
            $(this).siblings(".dish:eq(0)").children(".dish-quantity:eq(0)").text(b);
        } else if (b === 0) {
            $(this).siblings(".dish:eq(0)").children(".dish-quantity:eq(0)").text("");
        }
        $(".dish-minus").css("background-color", ColorLuminance(currentColorHex, 0.2));
        $(".dish-plus").css("background-color", ColorLuminance(currentColorHex, 0.2));
        $(".dish").css("background-color", ColorLuminance(currentColorHex, 0.2));
        $(this).siblings(".dish:eq(0)").css("background-color", currentColor);
        $(this).css("background-color", currentColor);
    });



});


