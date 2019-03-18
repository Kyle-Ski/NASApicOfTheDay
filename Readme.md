# Random NASA Picture of the day

## Purpose

This is a small server to randomly serve a picture from NASA's [Picture of the Day](https://api.nasa.gov/api.html#apod) archive.
I used this API to create a theme on Google Chrome. When you open a new tab on Chrome, you will be greeted with the random picture of the day, and a description. You also have the option to download the HD version of the picture. You can find the Chrome extention on the (Chrome Web Store)[https://chrome.google.com/webstore/category/extensions?_feature=google] under the title (Random NASA Pic of the Day)[https://chrome.google.com/webstore/detail/random-nasa-pic-of-the-da/omhdoabhgjjhaecjkccomlimagpbfben].

## Use

_To Run locally:_

1. Fork and clone this reop
2. In your CLI run `npm install`
3. In your CLI run `npm run dev`
4. The endpoint [`http://localhost:3222/pod`](http://localhost:3222/pod) will serve you a picture from a random date in JSON format

A _live version_ can be found at (`https://random-nasa-pod.herokuapp.com/pod`)[https://random-nasa-pod.herokuapp.com/pod]
