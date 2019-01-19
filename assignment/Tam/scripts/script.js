var person = new Person();
$(document).ready(function () {
    $("#showText").html(person.work());
});

// https://www.w3schools.com/jquery/jquery_events.asp
// https://www.w3schools.com/jquery/jquery_ref_events.asp
$("a").click(function () {
    alert("clicked a");
});

$("#inputEnterButton").click(function () {
    alert($("#inputText").val());
});

var currentStep = 1;

function getRemoveClass() {
    r = currentStep - 1;
    if (r < 1) {
        r = 3;
    }
    return "step" + r;
}

function getAddClass() {
    return "step" + currentStep;
}

// currentStep = 1 -> remove: 3; add: step
// currentStep = 2 -> remove: 1; add: step
// currentStep = 3 -> remove: 2; add: step

$("#btnChangeColor").mouseenter(function () {
    divObj = $(".changeColor");
    $("[name='changeName']")
    $("[name^='change']")
    divObj.removeClass(getRemoveClass());
    divObj.addClass(getAddClass());
    currentStep = (currentStep + 1) % 3 + 1;
});

// element - <name>
// class - .<name>
// id - #<name></name>


function navBar_Function() {
    var x = document.getElementById("navMenu");
    if (x.className == "navMenu") {
        x.className += " responsive";
    } else {
        x.className = "navMenu";
    }
}