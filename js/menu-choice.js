// MENU arrays

var menuBreakfast_1 = [
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

var menuBreakfast_2 = [
    "Breakfast-6",
    "Breakfast-5",
    "Breakfast-4",
    "Breakfast-3",
    "Breakfast-2",
    "Breakfast-1"
];

var menuBreakfast_3 = [
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

var menuMainCourse_1 = [
    "MainCourse-5",
    "MainCourse-4",
    "MainCourse-3",
    "MainCourse-2",
    "MainCourse-1"
];

var menuMainCourse_2 = [
    "MainCourse-2",
    "MainCourse-1"
];

var menuMainCourse_3 = [
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



// DISH-BLOCK FOR CLONING

var dishBlock = $('<div class="dish-block"><button class="waves-effect waves-light btn dish-plus">+</button><button class="dish waves-effect waves-light btn"><div class="dish-name"></div><div class="dish-quantity"></div></button><button class="waves-effect waves-light btn dish-minus">-</button></div>');

var menuSection = $(".menu-section");
var a = 0;
var menuDish = [];

menuSection.click(function (e) {
    $(".dish-block").remove();

    if ( $(this).parent("li").children(".submenu") ) {

        $(this).toggleClass("test");

            if ( $(this).hasClass("test") ) {
                $(".menu-section").hide();
                $(this).show();
                $(this).parent("li").children(".submenu").show();
                $(this).parent("li").children(".submenu").children("li").children(".menu-section").show();
                $(this).parent("li").css("height", "100%");
                $(this).parent("li").css("justify-content", "flex-start");
            } else {
                $(this).parent("li").css("height", "auto");
                $(this).parent("li").children(".submenu").children("li").children(".menu-section").hide();
                $(this).parent("li").children(".submenu").hide();
                $(".menu-section").show();
                $(".dish-block").remove();
            }

            if ( $(this).parent("li").children(".submenu").length <= 0 ) {
                $(".menu-section").show();
                $(this).parent("li").css("height", "auto");
            }


            if ( $(this).is(".submenu .menu-section") ) {
                console.log( $(this).is(".submenu .menu-section") );
                $(".menu-section").hide();
                $(this).show();
                $(this).parent("li").siblings("li").children().show();
                $(this).parent("li").parent(".submenu").prev().show();
            }
    }

// CHANGING DISHES FROM ARRAYS

    var e = event.target.id;

    switch(e) {
        case "menuBreakfastLuni-1":
            menuDish = menuBreakfast_1;
            break;
        case "menuBreakfastLuni-2":
            menuDish = menuBreakfast_2;
            break;
        case "menuBreakfastLuni-3":
            menuDish = menuBreakfast_3;
            break;
        case "menuUrban":
            menuDish = menuUrban;
            break;
        case "menuStarters":
            menuDish = menuStarters;
            break;
        case "menuSoups":
            menuDish = menuSoups;
            break;
        case "menuMainCourse_1":
            menuDish = menuMainCourse_1;
            break;
        case "menuMainCourse_2":
            menuDish = menuMainCourse_2;
            break;
        case "menuMainCourse_3":
            menuDish = menuMainCourse_3;
            break;
        case "menuSalads":
            menuDish = menuSalads;
            break;
        case "menuSides":
            menuDish = menuSides;
            break;
        case "menuPizza":
            menuDish = menuPizza;
            break;
        case "menuPizzaGigant":
            menuDish = menuPizzaGigant;
            break;
        case "menuDessert":
            menuDish = menuDessert;
            break;
        case "menuWines":
            menuDish = menuWines;
            break;
        case "menuDrinks":
            menuDish = menuDrinks;
            break;
    }


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
           // removeDishBlock ();
       }

        $(".dish-name").first().text(menuDish[i]);
       // console.log(a);


// COLOR FUNCTIONS

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

// BUTTONS + and -

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


