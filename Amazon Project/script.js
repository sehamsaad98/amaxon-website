function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0";
}

function openNav2() {
    document.getElementById("myNav2").style.width = "100%";
}

function closeNav2() {
    document.getElementById("myNav2").style.width = "0";
}

function openNav3() {
    document.getElementById("myNav3").style.width = "100%";
}

function closeNav3() {
    document.getElementById("myNav3").style.width = "0";
}

function openNav4() {
    document.getElementById("myNav4").style.width = "100%";
}

function closeNav4() {
    document.getElementById("myNav4").style.width = "0";
}

function openNav5() {
    document.getElementById("myNav5").style.width = "100%";
}

function closeNav5() {
    document.getElementById("myNav5").style.width = "0";
}

function openNav6() {
    document.getElementById("myNav6").style.width = "100%";
}

function closeNav6() {
    document.getElementById("myNav6").style.width = "0";
}

//////   cart

// var imageElement = document.createElement("img");

var array = [];

function add(order) {
    array.push(order);
}

var arrayone = [];

function setLocalStorage() {
    localStorage.setItem('myArray', JSON.stringify(array));
}

function getLocalStorage() {
    var array = localStorage.getItem('myArray');
    arrayone = JSON.parse(array);

    for (var i = 0; i < arrayone.length; i++) {
        var imageElement = document.createElement("img");
        imageElement.setAttribute('src', arrayone[i]);
        document.getElementById("dev1").appendChild(imageElement);

    }

}



//// login


var userName = false;
var userPass = false;

function focusFunc() {
    document.getElementById("fullName").style.border = " 1px solid  black";
}

function firstBlurFunc() {
    secondBlurFunc();
}

function secondBlurFunc() {
    var fullNameVar = document.getElementById("fullName").value;
    var pattern_name = /^[a-z]{3,}$/i;
    var test_name = pattern_name.test(fullNameVar);

    if (test_name != true) {
        userName = false;
    } else {
        
        userName = true;


    }
}



function passFunc() {
    var firstPass = document.getElementById("pass").value;
    var secondPass = document.getElementById("repass").value;
    var secondPa = document.getElementById("repass");
    if (firstPass != secondPass) {
       
        userPass = false;

    } else {

        userPass = true;
    }
}


function Submit(event) {
    var myName = document.getElementById("fullName").value;
    // console.log(one + two);
    if (userName == false || userPass == false) {
        event.preventDefault();
        alert("Please correct the validation errors first !")
    } else {
        window.open('file:///C:/Users/%D8%A7%D9%84%D9%85%D8%AA%D8%AD%D8%AF%D9%87%20%D8%AC%D8%B1%D9%88%D8%A8/Desktop/New%20folder%20(2)/navigation&footer.html', '#');
        
    }

}

