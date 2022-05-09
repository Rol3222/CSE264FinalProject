/*
 * This files holds all the code to for your card game
 */

//Run once broswer has loaded everything
window.onload = function () {

};
 
var balance = 0;

fetch("https://api.nomics.com/v1/currencies/ticker?70c6f8db2e19eed0773985636110fb26690097d0&ids=BTC,ETH,XRP&interval=1d,30d&convert=EUR&platform-currency=ETH&per-page=100&page=1")
  .then(response => response.json())
  .then(data => console.log(data))

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
        if (document.URL.includes("investPage.html")) {
            computePriceBTC();
            computePriceETH();
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
    computePriceBTC();
    computePriceETH();
    //let bitcoin = await fetch ("https://api.nomics.com/v1/currencies/ticker?key=70c6f8db2e19eed0773985636110fb26690097d0&ids=BTC&interval=1d,30d&convert=EUR&platform-currency=ETH&per-page=100&page=1", {method:"GET"})
    //let bitcoin_data = await bitcoin.json();
    //var price = bitcoin_data.price;
    //price_label_BTC = document.getElementById("BTCprice");
    //price_label_BTC.textContent = "Price: " + price; 

}

async function computePriceBTC() {
    //let bitcoin = fetch("https://api.nomics.com/v1/currencies/ticker?key=70c6f8db2e19eed0773985636110fb26690097d0&ids=BTC&interval=1d,30d&page=1", {method: "GET"})
    //let bitcoin_data = await bitcoin.json;
    //var price = bitcoin_data.price;
    var priceBTC;
    //fetch("https://api.nomics.com/v1/currencies/ticker?key=70c6f8db2e19eed0773985636110fb26690097d0&ids=BTC&interval=1d,30d&page=1")
        //.then(response => response.json())
        //.then(data => price = data.price)
    let bitcoin = fetch("https://api.nomics.com/v1/currencies/ticker?key=70c6f8db2e19eed0773985636110fb26690097d0&ids=BTC&interval=1d,30d&page=1", {method: "GET"})
    let bitcoin_data = await bitcoin.json;
    //priceBTC = bitcoin_data.price;
    //price_label_BTC = document.getElementById("BTCprice");
    //price_label_BTC.textContent = "Price: " + priceBTC; 
} 

async function computePriceETH() {

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
