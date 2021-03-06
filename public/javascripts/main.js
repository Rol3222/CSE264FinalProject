/*
 * This files holds all the code to for your card game
 */

//Run once broswer has loaded everything
window.onload = function () {

};
 
var balance = 0;
var BTCprice = 0;
var ETHprice = 0;

//fetch("https://api.nomics.com/v1/currencies/ticker?70c6f8db2e19eed0773985636110fb26690097d0&ids=BTC,ETH,XRP&interval=1d,30d&convert=EUR&platform-currency=ETH&per-page=100&page=1")
  //.then(response => response.json())
  //.then(data => console.log(data))

document.addEventListener('readystatechange', event => { 
    // When HTML is ready
    if (event.target.readyState === "interactive") { 

    }
    // When windows loaded
    if (event.target.readyState === "complete") {
        if (document.URL.includes("/mainpage") || document.URL.includes("mainPage.html")) {
            userBalance = document.getElementById("balance");
            userBalance.textContent = "Balance: " + balance;
            //("#date").text(moment().format('ddd MMM Do, YYY'));
            date_field = document.getElementById("date")
            date_field.textContent = "" + moment().format('MMMM Do YYYY, h:mm:ss a'); 
        }
        if (document.URL.includes("/investpage") || document.URL.includes("investPage.html") ) {
            var millisecondsToWait = 1000;
                setTimeout(function() {
                    computePriceBTC();
                }, millisecondsToWait);
            //computePriceBTC();
            //computePriceETH();
            var millisecondsToWait2 = 1500;
                setTimeout(function() {
                    //computePriceETH();
                }, millisecondsToWait2);
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
    //computePriceBTC();
    //computePriceETH();
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
    //var priceBTC;
    //fetch("https://api.nomics.com/v1/currencies/ticker?key=70c6f8db2e19eed0773985636110fb26690097d0&ids=BTC&interval=1d,30d&page=1")
        //.then(response => response.json())
        //.then(data => price = data.price)
    //let bitcoin = fetch("https://api.nomics.com/v1/currencies/ticker?key=70c6f8db2e19eed0773985636110fb26690097d0&ids=BTC&interval=1d,30d&page=1", {method: "GET"})
    //let bitcoin_data = await bitcoin.json;
    //priceBTC = bitcoin_data.price;
    //price_label_BTC = document.getElementById("BTCprice");
    //price_label_BTC.textContent = "Price: " + priceBTC; 
   //let BTCarray = []; //stores all crypto data for BTC
    let price;

    let BTC_URL = "https://api.nomics.com/v1/currencies/ticker?key=70c6f8db2e19eed0773985636110fb26690097d0&ids=BTC,ETH&interval=1d,30d&page=1";
    fetch(BTC_URL)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            BTCprice = data[0].price
            ETHprice = data[1].price
            console.log(BTCprice);
            console.log(ETHprice);
            let price_label_BTC = document.getElementById("BTCprice");
            price_label_BTC.textContent = "Price: " + BTCprice; 
            let price_label_ETH = document.getElementById("ETHprice");
            price_label_ETH.textContent = "Price: " + ETHprice; 
        })
} 

async function computePriceETH() {
    let ETH_URL = "https://api.nomics.com/v1/currencies/ticker?key=70c6f8db2e19eed0773985636110fb26690097d0&ids=ETH&interval=1d&page=1";
    fetch(ETH_URL)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            price = data[0].price 
            console.log(price);
            let price_label_ETH = document.getElementById("ETHprice");
            price_label_ETH.textContent = "Price: " + price; 
        })
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
