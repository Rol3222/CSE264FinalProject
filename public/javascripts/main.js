/*
 * This files holds all the code to for your card game
 */

//Run once broswer has loaded everything
window.onload = function () {

};

var balance = 0;

document.addEventListener('readystatechange', event => { 
    // When HTML is ready
    if (event.target.readyState === "interactive") { 

    }
    // When windows loaded
    if (event.target.readyState === "complete") {
        if (document.URL.includes("mainPage.html")) {
        userBalance = document.getElementById("balance");
        userBalance.textContent = "Balance: " + balance;
        }
    }
});

function add100() {
    balance += 100;
}

function add1000() {
    balance += 1000;
}

function add10000() {
    balance += 10000;
}

function addCustom() {
    balance += document.getElementById("customFund").value;
}

function login() {
    location.href='./login.html';
}

function register() {
    location.href='./register.html';
}

function mainPage() {
    location.href='./mainPage.html';
}

function portfolioPage() {
    location.href='./portfolioPage.html';
}

function investPage() {
    location.href='./investPage.html';
}

function fundsPage() {
    location.href='./fundsPage.html';
}

function back() {
    location.href='./mainPage.html';
}

function signout() {
    location.href='./index.html';
}
