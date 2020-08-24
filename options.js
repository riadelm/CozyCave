
var myAudio = new Audio();   
myAudio.src = chrome.extension.getURL("rain1.mp3");
myAudio.loop="loop";

function start(){
    myAudio.play();
}

function stop(){
    myAudio.pause();
}