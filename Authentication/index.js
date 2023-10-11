var text="";
const fullText1 = "Find Trains Quickly...";
const fullText2 = "Book your tickets...";
const texts=[""];
for (let i = 1; i <= fullText1.length; i++) {
    text=fullText1.slice(0,i);
    texts.push(text);
}
for (let i = 0; i < 10; i++) {
    texts.push(fullText1);
}
for (let i = fullText1.length; i >= 0; i=i-2) {
    text=fullText1.slice(0,i);
    texts.push(text);
}
for (let i = 1; i <= fullText2.length; i++) {
    text=fullText2.slice(0,i);
    texts.push(text);
}
for (let i = 0; i < 10; i++) {
    texts.push(fullText2);
}
for (let i = fullText2.length; i >= 0; i=i-2) {
    text=fullText2.slice(0,i);
    texts.push(text);
}



var i=0,j=0, j2=0;
const arrayLen = texts.length;
function Screen() {
   setInterval(function () {
       if (i==arrayLen) {
           i=0;
       }
       text = texts[i++];
        document.getElementById("text").innerHTML=text;
   },100)
}
Screen();

// // FOR LOADER

// function loaded(){
//     document.getElementById("loading").style.display = "none";
//  }



// registration button alert
var passText="";
function check() {
    passText = document.getElementById("password").value;
    if (passText.length>=8) {
        document.querySelector(".eight").classList.remove("red");
        document.querySelector(".eight").classList.add("green");
    }
    else{
        document.querySelector(".eight").classList.remove("green");
        document.querySelector(".eight").classList.add("red");
    }
    var lowerCaseLetters = /[a-z]/g;
    if (passText.match(lowerCaseLetters)) {
        document.querySelector(".lowercase").classList.remove("red");
        document.querySelector(".lowercase").classList.add("green");
    }
    else{
        document.querySelector(".lowercase").classList.remove("green");
        document.querySelector(".lowercase").classList.add("red");
    }
    var UpperCaseLetters = /[A-Z]/g;
    if (passText.match(UpperCaseLetters)) {
        document.querySelector(".uppercase").classList.remove("red");
        document.querySelector(".uppercase").classList.add("green");
    }
    else{
        document.querySelector(".uppercase").classList.remove("green");
        document.querySelector(".uppercase").classList.add("red");
    }
    var numericalValue = /[0-9]/g;
    if (passText.match(numericalValue)) {
        document.querySelector(".number").classList.remove("red");
        document.querySelector(".number").classList.add("green");
    }
    else{
        document.querySelector(".number").classList.remove("green");
        document.querySelector(".number").classList.add("red");
    }
}

// checking all conditions
var passEntered = "";
function okOrNot(){
    var numericalValue = /[0-9]/g;
    var lowerCaseLetters = /[a-z]/g;
    var UpperCaseLetters = /[A-Z]/g;
    passEntered = document.getElementById("password").value;
    if(passEntered.length>=8 && passEntered.match(lowerCaseLetters) && passEntered.match(UpperCaseLetters) && passEntered.match(numericalValue)){
        console.log("password ok");
    }
    else{
        console.log("Re-Enter Password");
    }
}


