SITE CAN BE FOUND HERE:
https://dunder-cryptlin.netlify.app/public/index.html

Can be run from desktop
- Go to folder
in terminal type: npm i
then type: npm run dev

- Go to localhost:3000 on a chrome browser

API key: 70c6f8db2e19eed0773985636110fb26690097d0
https://api.nomics.com/v1/markets?key=your-key-here


# Final Project

## Due Last day of Class
## First report due April 11th 2022

### Build a web app in a team of 4-5

### Requirements:
* Must have user accounts and different user roles (like user/Admin, free/paid, etc)
* Must use a database (you choose)
* Must have interactive UI (of any kind)
* Must use a library or framework not discussed/used in class
* Must use an outside REST API in some way (Outside as in external, like the Reddit API, etc)
* Must deploy your application in some publicly accessible way (Heroku, Digital Ocean, AWS, etc)

### Instructions
Build your team and write a document describing your application to me by Monday, April 11, 2022. I will approve your web application idea. In your paper, include:
* the name of your application
* name and roles of all your team members
* its functionality (how does it meet each of the crequierments listed above)
* user story/use case (what happens when a user visits your application, what can they do, etc)
* technical design (what is your tech stack)


### Final deliverable due end of semester:
* Codebase in Github Repo
* README describing your project, with all of the information outlined above (team members, application name, description, etc). You will also include detailed instructions of how to install and run your application, and what API keys, databases, etc are needed to run your application. You will also provide a link to a live demo of your application.
* Final Presentation and Demo
  * You will prepare a 5 minute presentation and demo of your application in class during the last week of classes


My Propoasal:

My idea is a Coinbase-esque crypto tracker that keeps real time data and uses external API’s to show tickers and track trends. 

Users can make accounts and a database on MongoDB would keep track of data for each user. Data tracked would include balances, currencies held and their amounts, and deposits/withdrawals. 

The user interface would allow users to buy, sell, and learn about different crypto currencies, as well as providing the most up-to-date news on them. 

The name of this application would be Dunder Cryptlin (still up for debate) as it serves as a paper trade for crypto currencies. Jared Lee and  myself (Ronan Leahy) and will act as the lead designers and coders. 

There are a lot of ways to take this project so the basic idea is that it would use external API calls to get access to crypto information and the users can interact with that data. Could act as a “bean economy” for crypto where you can buy and sell fake assets to play with the market without losing money. 

Technologically speaking, the users would be brought to a page with several different options to login, buy, sell, browse…etc. HTML, CSS, and JS are going to need to work together with a MongoDB server to keep track of changes made to the database. 

I was thinking of adding animations using Angular/Vue or some other framework. In terms of the stack I'm going to use node.js and connect to the Crypto Asset Tickers api to get ticket data and nomics.com to get historical data on each currency. I can also implement an actual exchange of funds by connecting to another exchange. 

Using HTML and CSS I plan on creating a few basic pages (login page, buy/sell, search, and information pages) and animating them using js. On the back-end I plan on using MongoDB to keep track of user data such as username, balance, and currencies. When the project is complete I want to host it on AWS servers for anyone to use.
