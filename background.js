/*
 * Copyright (C) 2020 Riad El Mahmoudy
 * This file is subject to the terms and conditions defined in
 * file "LICENSE.txt", which is part of this source code package.
 */

var oldRainVolume = 0;

  chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#3aa757'}, function() {
      console.log('The color is purple.');

    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostEquals: 'developer.chrome.com'},
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
  });

  
var rainAudio = new Audio();   
rainAudio.src = chrome.extension.getURL("rain1.mp3");
rainAudio.loop="loop";
rainAudio.volume = oldRainVolume/100;

var thunderAudio = new Audio();   
thunderAudio.src = chrome.extension.getURL("thunder.mp3");
thunderAudio.loop="loop";

var snowstormAudio = new Audio();   
snowstormAudio.src = chrome.extension.getURL("snowstorm.mp3");
snowstormAudio.loop="loop";

var fireplaceAudio = new Audio();   
fireplaceAudio.src = chrome.extension.getURL("fireplace.mp3");
fireplaceAudio.loop="loop";

var trainAudio = new Audio();   
trainAudio.src = chrome.extension.getURL("train.mp3");
trainAudio.loop="loop";

var cafeAudio = new Audio();   
cafeAudio.src = chrome.extension.getURL("cafe.mp3");
cafeAudio.loop="loop";
//===========================================================================
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
	console.log(message);
	if(message.season==="springCng"){
		console.log("spring time");
		rainAudio.src = chrome.extension.getURL("birds.mp3");
		thunderAudio.src = chrome.extension.getURL("springrain.mp3");
		trainAudio.src = chrome.extension.getURL("beach.mp3");
		cafeAudio.src = chrome.extension.getURL("river.mp3");
		snowstormAudio.src = chrome.extension.getURL("breeze.mp3");
		fireplaceAudio.src = chrome.extension.getURL("bugs.mp3");
		thunderAudio.load();
		trainAudio.load();
		cafeAudio.load();
		snowstormAudio.load();
		fireplaceAudio.load();
		rainAudio.load();
	}else if(message.season==="fallCng"){
		console.log("spooky time");
		rainAudio.src = chrome.extension.getURL("rain1.mp3");
		thunderAudio.src = chrome.extension.getURL("thunder.mp3");
		trainAudio.src = chrome.extension.getURL("train.mp3");
		cafeAudio.src = chrome.extension.getURL("cafe.mp3");
		snowstormAudio.src = chrome.extension.getURL("snowstorm.mp3");
		fireplaceAudio.src = chrome.extension.getURL("fireplace.mp3");
		thunderAudio.load();
		trainAudio.load();
		cafeAudio.load();
		snowstormAudio.load();
		fireplaceAudio.load();
		rainAudio.load();
	}
	switch(message.file){
		case "rain":
			rainAudio.volume = message.volume/100;
			if (message.rainMusic == 'on') {
      			rainAudio.play();
    		} else if (message.rainMusic == 'off') {
      			rainAudio.pause();
			}
			break;
		case "thunder":
			thunderAudio.volume = message.volume/100;
			if (message.thunderMusic == 'on') {
      			thunderAudio.play();
    		} else if (message.thunderMusic == 'off') {
      			thunderAudio.pause();
			}
			break;
		case "snowstorm":
			snowstormAudio.volume = message.volume/100;
			if (message.snowstormMusic == 'on') {
      			snowstormAudio.play();
    		} else if (message.snowstormMusic == 'off') {
      			snowstormAudio.pause();
			}
			break;
		case "fireplace":
			fireplaceAudio.volume = message.volume/100;
			if (message.fireplaceMusic == 'on') {
      			fireplaceAudio.play();
    		} else if (message.fireplaceMusic == 'off') {
      			fireplaceAudio.pause();
			}
			break;
		case "train":
			trainAudio.volume = message.volume/100;
			if (message.trainMusic == 'on') {
      			trainAudio.play();
    		} else if (message.trainMusic == 'off') {
      			trainAudio.pause();
			}
			break;
		case "cafe":
			cafeAudio.volume = message.volume/100;
			if (message.cafeMusic == 'on') {
      			cafeAudio.play();
    		} else if (message.cafeMusic == 'off') {
      			cafeAudio.pause();
			}
			break;
	}

  });


chrome.storage.onChanged.addListener(function(changes, namespace) {
        for (var key in changes) {
        	console.log(key);
          var storageChange = changes[key];
          console.log('Storage key "%s" in namespace "%s" changed. ' +
                      'Old value was "%s", new value is "%s".',
                      key,
                      namespace,
                      storageChange.oldValue,
                      storageChange.newValue);
          if(key==="rainVolume"){
          	var newRainVolume = storageChange.newValue;
          		chrome.storage.local.set({lastRainVol : newRainVolume},function(){
          			console.log('-$$$$$$$$$$$$$-');
          			console.log(key);
         		 });
     	 } else if(key==="thunderVolume"){
          	var newThunderVolume = storageChange.newValue;
          		chrome.storage.local.set({lastThunderVol : newThunderVolume},function(){
          			console.log('-$$$$$$$$$$$$$-');
          			console.log(key);
         		 });
     	 } else if(key==="snowstormVolume"){
          	var newSnowstormVolume = storageChange.newValue;
          		chrome.storage.local.set({lastSnowstormVol : newSnowstormVolume},function(){
          			console.log('-$$$$$$$$$$$$$-');
          			console.log(key);
         		 });
     	 } else if(key==="fireplaceVolume"){
          	var newFireplaceVolume = storageChange.newValue;
          		chrome.storage.local.set({lastFireplaceVol : newFireplaceVolume},function(){
          			console.log('-$$$$$$$$$$$$$-');
          			console.log(key);
         		 });
     	 } else if(key==="cafeVolume"){
          	var newCafeVolume = storageChange.newValue;
          		chrome.storage.local.set({lastCafeVol : newCafeVolume},function(){
          			console.log('-$$$$$$$$$$$$$-');
          			console.log(key);
         		 });
     	 } else if(key==="trainVolume"){
          	var newTrainVolume = storageChange.newValue;
          		chrome.storage.local.set({lastTrainVol : newTrainVolume},function(){
          			console.log('-$$$$$$$$$$$$$-');
          			console.log(key);
         		 });
     	 }

          if(key==="rainMusic"){
     	 	chrome.storage.local.set({isRainOn: storageChange.newValue},function(){
     	 		console.log("stored");
     	 	});
     	 } else  if(key==="thunderMusic"){
     	 	chrome.storage.local.set({isThunderOn: storageChange.newValue},function(){
     	 		console.log("stored");
     	 	});
     	 } else  if(key==="snowstormMusic"){
     	 	chrome.storage.local.set({isSnowstormOn: storageChange.newValue},function(){
     	 		console.log("stored");
     	 	});
     	 } else  if(key==="fireplaceMusic"){
     	 	chrome.storage.local.set({isFireplaceOn: storageChange.newValue},function(){
     	 		console.log("stored");
     	 	});
     	 } else  if(key==="cafeMusic"){
     	 	chrome.storage.local.set({isCafeOn: storageChange.newValue},function(){
     	 		console.log("stored");
     	 	});
     	 } else  if(key==="trainMusic"){
     	 	chrome.storage.local.set({isTrainOn: storageChange.newValue},function(){
     	 		console.log("stored");
     	 	});
     	 } 
         /* chrome.runtime.sendMessage({sliderValue: newRainVolume},function(response){
          	console.log("-----------------");
          	console.log(newRainVolume);
          	//console.log(response);
          	console.log("-----------------");
          });*/
        }
      });
  
/*chrome.storage.onChanged.addListener(function(){
chrome.storage.local.get(['rainVolume'],function(result){
console.log(result);
  });
   chrome.storage.local.get(['rainMusic'],function(result){
console.log(result);
  });
});*/

