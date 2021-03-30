# Stonks
A web application made for the Progressive Web Apps course during the Web Design and Development minor.

## Description
During this course I have made this web application (called Stonks). In this web application you can get live prices of stocks. You can also look up news on companies (based on date), add stocks to your favorites, get notifications if a stock price drops below your desired price and more.

## Features
- Notifications: get a web-push notification when a stock drops below the price that you have requested. If you click on this notification you go to the stock detail page on the website.
- Websockets: get live stock pricing on the stock detail page (if available). 
- Installable: you can install this web application, so its more convenient to use.
- Favorites: add stocks to your favories to quickly find them and get information about them.

## Install

- Clone this repo
```
git clone https://github.com/BVictorB/progressive-web-apps.git .
```
- Install all NPM packages
```
npm i
```
- Run the application (go to http://localhost:3000/ in your browser).
```
npm start
```