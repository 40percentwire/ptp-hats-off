// ==UserScript==
// @name         PTP Hats Off
// @version      0.1
// @description  Remove hats for users on PTP
// @author       40percentwire
// @include      http*://passthepopcorn.me/*
// @grant        none
// ==/UserScript==

var hats = document.getElementsByClassName("forum-post__avatar__partyhat")

for (var i = 0; i < hats.length; i++) {
    hats[i].style.display = "none";
}