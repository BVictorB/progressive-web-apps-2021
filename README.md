# Stonks
A web application made for the Progressive Web Apps course during the Web Design and Development minor.

## Description
During this course I have made this web application (called Stonks). In this web application you can get live prices of stocks. You can also look up news on companies (based on date), add stocks to your favorites, get notifications if a stock price drops below your desired price and more.

## API
For this project I have used the [Finnhub API](https://finnhub.io/docs/api), a lot of the features of this API are free to use. The documentation is great, and the usage of the API is really simple. For the live price data I have used the 'Trades - Last Price Updates' websocket, Finnhub made this really easy to setup. I only had to connect to a websocket using my API key, and then 'subscribe' to a symbol using the send method on the socket. For all the other data I just did regular API fetches from my backend code, so for the news, static price data and everything else about the company/symbol.  

![Finnhub API screenshot](https://user-images.githubusercontent.com/10921830/113425863-dd4a9580-93d2-11eb-9b0e-3bf0658a2be4.png)

## Features
- Notifications: get a web-push notification when a stock drops below the price that you have requested. If you click on this notification you go to the stock detail page on the website.
- Websockets: get live stock pricing on the stock detail page (if available). 
- Installable: you can install this web application, so its more convenient to use.
- Favorites: add stocks to your favories to quickly find them and get information about them.

The symbol lookup page.  

![Symbol lookup page](https://user-images.githubusercontent.com/10921830/113425873-e0458600-93d2-11eb-91e4-44aca2d62590.png)  

The favorites page.  

![Favorites page](https://user-images.githubusercontent.com/10921830/113425924-fa7f6400-93d2-11eb-806a-1fbacf2d7770.png)  

The news page.  

![News page](https://user-images.githubusercontent.com/10921830/113425943-ff441800-93d2-11eb-8da2-966eb17d1519.png)  

## Optimizations
To make the app faster I have done a few optimizations. I wrote SCSS that compiles and minifies to a single CSS file. This file is only 2kb, which is very small compared to the 45kb of SCSS that was written. I have also used the Uglify dependency (the uglify-folder to be exact) to minify my JavaScript aswell. This just makes your client-side JavaScript a lot compacter, for example the 'subscribe.js' file, before it gets minified it is about 1300 bytes, and after being minified it is only 900 bytes. This is not that important because this project is so small, but you would notice the different if there was be a lot more client-side JavaScript.
I have also used the compression dependency to compress everything that gets served by Express. This was just a single line of code so there is not a single reason not to add it to your project. I have also preloaded the Google font that I use, because this was causing some performance issues. And finally I also lazy load all the images on the news posts (since it can get quite a long list if you want to receive a lot of news). I also noticed the difference here using the Lighthouse test.

The result of the lighthouse test:  

![Lighthouse test](https://user-images.githubusercontent.com/10921830/113428186-a24a6100-93d6-11eb-9128-36256ec40dcf.png)  

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
