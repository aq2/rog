"use strict";var open=document.getElementById("open"),close=document.getElementById("close"),mymain=document.getElementById("mymain"),circle=document.getElementById("circle"),nav=document.getElementById("nav");open.addEventListener("click",function(){mymain.classList.add("show-nav"),circle.classList.add("show-nav"),nav.classList.add("show-nav")}),close.addEventListener("click",function(){mymain.classList.remove("show-nav"),circle.classList.remove("show-nav"),nav.classList.remove("show-nav")});var w=window.innerWidth,h=window.innerHeight,imgs=document.getElementById("imgs"),img=document.querySelectorAll("#imgs img"),idx=0,interval=setInterval(run,2e3);function run(){idx++,changeImage()}function changeImage(){idx>img.length-1?idx=0:idx<0&&(idx=img.length-1),imgs.style.transform="translateX(".concat(800*-idx,"px)")}