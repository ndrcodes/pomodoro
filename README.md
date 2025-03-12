
# Pomodoro

Pomodoro is one of a method to balance focus with deliberate breaks. This technique has 25 minutes work time, 5 minutes short-break time, and 15 minutes long-break time. 

One cycle of Pomodoro is 25 minutes work time & 5 minutes short-break. Repeat this cycle 4 times and then take long-break time.

## About

This app will help you to countdown the timer of work & break period. It also show the *cute GIF*😂 as follows

![How To](https://s3.gifyu.com/images/bbfZi.gif)

## Tech Stack

This Desktop App is only using HTML, CSS, and JavaScript; bundled using ElectronJs.

It requires Node version `v18.20.4` or later, and NPM version `10.7.0` or later.

## Installation and Packaging

After clone this repository, open Terminal and follow these steps to install and packaging the application.

```bash
npm install
npm install --save-dev @electron-forge/cli
npx electron-forge import           
npm run make
```
After that, the application should be visible in `out` folder. Open the app in your Desktop and it is ready to serve!