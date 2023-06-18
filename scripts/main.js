// let myHeading = document.querySelector('h1');
// myHeading.textContent = "hello world!";


let myImg = document.querySelector('img');

myImg.onclick = function() {
    let mySrc = myImg.getAttribute("src")
    if (mySrc === "images/Michael-Sowa-10.jpg"){
        myImg.setAttribute("src", "images/Michael-Sowa-11.jpg")
    } else {
        myImg.src = "images/Michael-Sowa-10.jpg"
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt("Input your name: ")
    if (!myName) {
        setUserName()
    } else {
        localStorage.setItem("name", myName)
        myHeading.textContent = "You website is AWESOME, " + myName
    }
}

if (!localStorage.getItem("name")) {
    setUserName()
} else {
    let storedName = localStorage.getItem("name")
    myHeading.textContent = "You website is AWESOME, " + storedName
}

myButton.onclick = function() {
    setUserName()
}