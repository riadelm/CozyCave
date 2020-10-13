
/*
 * Copyright (C) 2020 Riad El Mahmoudy
 * This file is subject to the terms and conditions defined in
 * file "LICENSE.txt", which is part of this source code package.
 */

/* ATTRIBUTIONS FOR ICONS
Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
<div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
*/

/* ATTRIBUTIONS FOR SOUNDS
Credit for the sounds goes to user Alexander from orange
*/


 /*
  let next = document.getElementById('goNextDay');
  var form = document.getElementById('myForm');*/
  let btn = document.getElementById('btn');
console.log(btn);
  let green = document.querySelectorAll(".green");
  let blue = document.querySelectorAll(".brown");
  let square = document.querySelectorAll(".square");
  let slider = document.querySelectorAll(".slider");

  let rain = document.getElementById("square1");
  let thunder = document.getElementById("square2");
  let train = document.getElementById("square3");
  let cafe = document.getElementById("square4");
  let snowstorm = document.getElementById("square5");
  let fireplace = document.getElementById("square6");

  let rainSlider = document.getElementById("myRange1");
  let thunderSlider = document.getElementById("myRange2");
  let trainSlider = document.getElementById("myRange3");
  let cafeSlider = document.getElementById("myRange4");
  let snowstormSlider = document.getElementById("myRange5");
  let fireplaceSlider = document.getElementById("myRange6");

 //for color change when clicked:
  let rainBox = document.getElementById("box1");
  let thunderBox = document.getElementById("box2");
  let trainBox = document.getElementById("box3");
  let cafeBox = document.getElementById("box4");
  let snowstormBox = document.getElementById("box5");
  let fireplaceBox = document.getElementById("box6");
  //output.innerHTML = slider.value; // Display the default slider value

  let seasonChanger = document.getElementById("changeUp");

// Update the current slider value (each time you drag the slider handle)
//reload is weird 

//toggle click

//if click down button => change to spring 
// what changes are the icons, colors, music tracks, every volume resets, every play resets



var musicToggle1 = false; //rain
var musicToggle2 = false; //thunder
var musicToggle3 = false; //snowstorm
var musicToggle4 = false; //fireplace
var musicToggle5 = false; //cafe
var musicToggle6 = false; //train
var seasonToggle = false;
//if allll is closed, and no sound => reset volume to 50

window.onload = function() {


    //popup was opened, reload everything
    var checkSilence = "isOn";
    
    chrome.storage.local.get(["isRainOn"],function(result){
       if(result.isRainOn==="on"){
       	rainBox.style.backgroundColor="#c4815c";
       	//alert("ON");
       	musicToggle1 = true;
       chrome.storage.local.get(["lastRainVol"],function(result){
    	rainSlider.value = result.lastRainVol;
    });
       }else{
       	rainSlider.value = 50;
       }
    });

    chrome.storage.local.get(["isThunderOn"],function(result){
       if(result.isThunderOn==="on"){
       	//alert("ON");
       	thunderBox.style.backgroundColor="#bf6b56";
       	musicToggle2 = true;
 		 chrome.storage.local.get(["lastThunderVol"],function(result){
    	thunderSlider.value = result.lastThunderVol;
    });
       }else{
       	thunderSlider.value = 50;
       }
    });

    chrome.storage.local.get(["isSnowstormOn"],function(result){
       if(result.isSnowstormOn==="on"){
       	//alert("ON");
       	snowstormBox.style.backgroundColor="#2c2438";
       	musicToggle3 = true;
  
        chrome.storage.local.get(["lastSnowstormVol"],function(result){
    	snowstormSlider.value = result.lastSnowstormVol;
    });
       }else{
       	snowstormSlider.value = 50;
       }
    });

    chrome.storage.local.get(["isFireplaceOn"],function(result){
       if(result.isFireplaceOn==="on"){
       	//alert("ON");
       	fireplaceBox.style.backgroundColor="#23202e";
       	musicToggle4 = true;
   
        chrome.storage.local.get(["lastFireplaceVol"],function(result){
    	fireplaceSlider.value = result.lastFireplaceVol;
    });
       }else{
       	fireplaceSlider.value = 50;
       }
    });

    chrome.storage.local.get(["isCafeOn"],function(result){
       if(result.isCafeOn==="on"){
       	//alert("ON");
       	cafeBox.style.backgroundColor="#753240";
       	musicToggle5 = true;

        chrome.storage.local.get(["lastCafeVol"],function(result){
    	cafeSlider.value = result.lastCafeVol;
    });
       }else{
       	cafeSlider.value = 50;
       }
    });

    chrome.storage.local.get(["isTrainOn"],function(result){
       if(result.isTrainOn==="on"){
       //	alert("ON");
       	trainBox.style.backgroundColor="#b5575a";
       	musicToggle6 = true;

        chrome.storage.local.get(["lastTrainVol"],function(result){
    	trainSlider.value = result.lastTrainVol;
    });
       }else{
       	trainSlider.value = 50;
       }
    });

/*if(checkSilence==="nothing"){
	alert("checkSilence is 0; it was NOT on");
	rainSlider.value = 50;
	thunderSlider.value = 50;
	snowstormSlider.value = 50;
	fireplaceSlider.value = 50;
	trainSlider.value = 50;
	cafeSlider.value = 50;
}else{
 alert("else, it was on");
 chrome.storage.local.get(["lastRainVol"],function(result){
    	rainSlider.value = result.lastRainVol;
    });

    chrome.storage.local.get(["lastThunderVol"],function(result){
    	thunderSlider.value = result.lastThunderVol;
    });

    chrome.storage.local.get(["lastSnowstormVol"],function(result){
    	snowstormSlider.value = result.lastSnowstormVol;
    });

    chrome.storage.local.get(["lastFireplaceVol"],function(result){
    	fireplaceSlider.value = result.lastFireplaceVol;
    });

    chrome.storage.local.get(["lastCafeVol"],function(result){
    	cafeSlider.value = result.lastCafeVol;
    });

    chrome.storage.local.get(["lastTrainVol"],function(result){
    	trainSlider.value = result.lastTrainVol;
    });
    // = lastRainVol;
}*/
};

//volume is relate to storage, for on or off either musicToggle will make that work or another msg will have to be sent
seasonChanger.addEventListener("click", function(){
	if(seasonToggle===false){
		alert('clicked season');
		//chrome.runtime({season:"spring"})
		rainBox.style.backgroundColor = "green";
		seasonToggle=true;
		chrome.runtime.sendMessage({rainMusic: "off",rainVolume:50,file:"rain", season:"springCng"}, function(response){
			console.log("resettoggle");
		   });
		   chrome.runtime.sendMessage({thunderMusic: "off",thunderVolume:50, file:"thunder", season:"springCng"}, function(response){
			   console.log("resettoggle");
			  });
			  chrome.runtime.sendMessage({trainMusic: "off",trainVolume:50, file:"train", season:"springCng"}, function(response){
			   console.log("resettoggle");
			  });
			  chrome.runtime.sendMessage({fireplaceMusic: "off",fireVolume:50, file:"fireplace", season:"springCng"}, function(response){
			   console.log("resettoggle");
			  });
			  chrome.runtime.sendMessage({snowstormMusic: "off",snowstormVolume:50, file:"snowstorm", season:"springCng"}, function(response){
			   console.log("resettoggle");
			  });
			  chrome.runtime.sendMessage({cafeMusic: "off",cafeVolume:50, file:"cafe", season:"springCng"}, function(response){
			   console.log("resettoggle");
			  });
			  chrome.storage.local.set({rainMusic:"off"}, function() {
			});
	
					   chrome.storage.local.set({rainVolume: 50}, function() {
			});
			chrome.storage.local.set({fireplaceMusic:"off"}, function() {
			});
	
					   chrome.storage.local.set({fireplaceVolume: 50}, function() {
			});
			chrome.storage.local.set({thunderMusic:"off"}, function() {
			});
	
					   chrome.storage.local.set({thunderVolume: 50}, function() {
			});
			chrome.storage.local.set({cafeMusic:"off"}, function() {
			});
	
					   chrome.storage.local.set({cafeVolume: 50}, function() {
			});
			chrome.storage.local.set({snowstormMusic:"off"}, function() {
			});
	
					   chrome.storage.local.set({snowstormVolume: 50}, function() {
			});
			chrome.storage.local.set({trainMusic:"off"}, function() {
			});
	
					   chrome.storage.local.set({trainVolume: 50}, function() {
			});
			musicToggle1=false;
			musicToggle2=false;
			musicToggle3=false;
			musicToggle4=false;
			musicToggle5=false;
			musicToggle6=false;
	}else if(seasonToggle===true){
		alert('clicked season');
		//chrome.runtime({season:"fall"})
		rainBox.style.backgroundColor = "red";
		seasonToggle=false;
		chrome.runtime.sendMessage({rainMusic: "off",volume:50,file:"rain", season:"fallCng"}, function(response){
			console.log("resettoggle");
		   });
		   chrome.runtime.sendMessage({thunderMusic: "off",volume:50, file:"thunder", season:"fallCng"}, function(response){
			   console.log("resettoggle");
			  });
			  chrome.runtime.sendMessage({trainMusic: "off",volume:50, file:"train", season:"fallCng"}, function(response){
			   console.log("resettoggle");
			  });
			  chrome.runtime.sendMessage({fireplaceMusic: "off",volume:50, file:"fireplace", season:"fallCng"}, function(response){
			   console.log("resettoggle");
			  });
			  chrome.runtime.sendMessage({snowstormMusic: "off",volume:50, file:"snowstorm", season:"fallCng"}, function(response){
			   console.log("resettoggle");
			  });
			  chrome.runtime.sendMessage({cafeMusic: "off",volume:50, file:"cafe", season:"fallCng"}, function(response){
			   console.log("resettoggle");
			  });
			  chrome.storage.local.set({rainMusic:"off"}, function() {
			});
	
					   chrome.storage.local.set({rainVolume: 50}, function() {
			});
			chrome.storage.local.set({fireplaceMusic:"off"}, function() {
			});
	
					   chrome.storage.local.set({fireplaceVolume: 50}, function() {
			});
			chrome.storage.local.set({thunderMusic:"off"}, function() {
			});
	
					   chrome.storage.local.set({thunderVolume: 50}, function() {
			});
			chrome.storage.local.set({cafeMusic:"off"}, function() {
			});
	
					   chrome.storage.local.set({cafeVolume: 50}, function() {
			});
			chrome.storage.local.set({snowstormMusic:"off"}, function() {
			});
	
					   chrome.storage.local.set({snowstormVolume: 50}, function() {
			});
			chrome.storage.local.set({trainMusic:"off"}, function() {
			});
	
					   chrome.storage.local.set({trainVolume: 50}, function() {
			});

	}
});



rainSlider.addEventListener("click",function(){
		var currentRainSliderVolume = rainSlider.value;
		if(seasonToggle===true){
			chrome.runtime.sendMessage({rainMusic:"on", volume: currentRainSliderVolume, file:"rain"}, function(response) {
				rainBox.style.backgroundColor="#c4815c";
				musicToggle1 = true;
				
			 console.log(response);
		 });
		}else{
			chrome.runtime.sendMessage({rainMusic:"on", volume: currentRainSliderVolume, file:"rain"}, function(response) {
				rainBox.style.backgroundColor="#c4815c";
				musicToggle1 = true;
				
			 console.log(response);
		 });
		}
		
			   chrome.storage.local.set({rainMusic:"on"}, function() {
        });

			   	chrome.storage.local.set({rainVolume: currentRainSliderVolume}, function() {
        });

	});

thunderSlider.addEventListener("click",function(){
		var currentThunderSliderVolume = thunderSlider.value;
		if(seasonToggle===true){
			   chrome.runtime.sendMessage({thunderMusic:"on", volume: currentThunderSliderVolume, file:"thunder", season:"spring"}, function(response) {
			   	thunderBox.style.backgroundColor="#bf6b56";
			   	musicToggle2 = true;
			   	//alert("msg sent");
				console.log(response);
			});
		}else{
			chrome.runtime.sendMessage({thunderMusic:"on", volume: currentThunderSliderVolume, file:"thunder", season:"fall"}, function(response) {
				thunderBox.style.backgroundColor="#bf6b56";
				musicToggle2 = true;
				//alert("msg sent");
			 console.log(response);
		 });

		}
			   chrome.storage.local.set({thunderMusic:"on"}, function() {
        });
			   	chrome.storage.local.set({thunderVolume: currentThunderSliderVolume}, function() {
        });
	});

trainSlider.addEventListener("click",function(){
		var currentTrainSliderVolume = trainSlider.value;
		if(seasonToggle===true){
			chrome.runtime.sendMessage({trainMusic:"on", volume: currentTrainSliderVolume, file:"train", season:"spring"}, function(response) {
				trainBox.style.backgroundColor="#b5575a";
				musicToggle6 = true;
				//alert("msg sent");
			 console.log(response);
		 });
		}else{
			chrome.runtime.sendMessage({trainMusic:"on", volume: currentTrainSliderVolume, file:"train", season:"fall"}, function(response) {
				trainBox.style.backgroundColor="#b5575a";
				musicToggle6 = true;
				//alert("msg sent");
			 console.log(response);
		 });
		}
			   
			   chrome.storage.local.set({trainMusic:"on"}, function() {
        });
			   	chrome.storage.local.set({trainVolume: currentTrainSliderVolume}, function() {
        });
	});

cafeSlider.addEventListener("click",function(){
		var currentCafeSliderVolume = cafeSlider.value;
		if(seasonToggle===true){
			chrome.runtime.sendMessage({cafeMusic:"on", volume: currentCafeSliderVolume, file:"cafe", season:"spring"}, function(response) {
				cafeBox.style.backgroundColor="#753240";
				musicToggle5 = true;
				//alert("msg sent");
			 console.log(response);
		 });
		}else{
			chrome.runtime.sendMessage({cafeMusic:"on", volume: currentCafeSliderVolume, file:"cafe", season:"fall"}, function(response) {
				cafeBox.style.backgroundColor="#753240";
				musicToggle5 = true;
				//alert("msg sent");
			 console.log(response);
		 });
		}
			   
			   chrome.storage.local.set({cafeMusic:"on"}, function() {
        });
			   	chrome.storage.local.set({cafeVolume: currentCafeSliderVolume}, function() {
        });
	});

snowstormSlider.addEventListener("click",function(){
		var currentSnowstormSliderVolume = snowstormSlider.value;
		if(seasonToggle===true){
			chrome.runtime.sendMessage({snowstormMusic:"on", volume: currentSnowstormSliderVolume, file:"snowstorm", season:"spring"}, function(response) {
				snowstormBox.style.backgroundColor="#2c2438";
				musicToggle3 = true;
				//alert("msg sent");
			 console.log(response);
		 });
		}else{
			chrome.runtime.sendMessage({snowstormMusic:"on", volume: currentSnowstormSliderVolume, file:"snowstorm", season:"fall"}, function(response) {
				snowstormBox.style.backgroundColor="#2c2438";
				musicToggle3 = true;
				//alert("msg sent");
			 console.log(response);
		 });
		}
			   
			   chrome.storage.local.set({snowstormMusic:"on"}, function() {
        });
			   	chrome.storage.local.set({snowstormVolume: currentSnowstormSliderVolume}, function() {
        });
	});

fireplaceSlider.addEventListener("click",function(){
		var currentFireplaceSliderVolume = fireplaceSlider.value;
		if(seasonToggle===true){
			chrome.runtime.sendMessage({fireplaceMusic:"on", volume: currentFireplaceSliderVolume, file:"fireplace", season:"spring"}, function(response) {
				fireplaceBox.style.backgroundColor="#23202e";
				musicToggle4 = true;
				//alert("msg sent");
			 console.log(response);
		 });
		}else{
			chrome.runtime.sendMessage({fireplaceMusic:"on", volume: currentFireplaceSliderVolume, file:"fireplace", season:"fall"}, function(response) {
				fireplaceBox.style.backgroundColor="#23202e";
				musicToggle4 = true;
				//alert("msg sent");
			 console.log(response);
		 });
		}
			   
			   chrome.storage.local.set({fireplaceMusic:"on"}, function() {
        });
			   	chrome.storage.local.set({fireplaceVolume: currentFireplaceSliderVolume}, function() {
        });
	});

// music listeners

rain.addEventListener("click",function(){
	//alert("clicked rain");
	var currentRainSliderVolume = rainSlider.value;
if(seasonToggle===true){
			if(musicToggle1===false){
				chrome.runtime.sendMessage({rainMusic: "on",volume: currentRainSliderVolume, file:"rain"}, function(response) {
					rainBox.style.backgroundColor="#c4815c";
					musicToggle1=true;
  				console.log(response);
				});
					chrome.storage.local.set({rainMusic:"on"}, function() {
        });

			   	chrome.storage.local.set({rainVolume: currentRainSliderVolume}, function() {
        });
			}else if(musicToggle1===true){
				chrome.runtime.sendMessage({rainMusic: "off",volume:50, file:"rain"}, function(response) {
					rainBox.style.backgroundColor="#ffcdb2";
					musicToggle1=false;
  				console.log(response);
				});
					chrome.storage.local.set({rainMusic:"off"}, function() {
        });

			   	chrome.storage.local.set({rainVolume: 50}, function() {
        });
			}
		}else{
			if(musicToggle1===false){
				chrome.runtime.sendMessage({rainMusic: "on",volume: currentRainSliderVolume, file:"rain"}, function(response) {
					rainBox.style.backgroundColor="#c4815c";
					musicToggle1=true;
  				console.log(response);
				});
					chrome.storage.local.set({rainMusic:"on"}, function() {
        });

			   	chrome.storage.local.set({rainVolume: currentRainSliderVolume}, function() {
        });
			}else if(musicToggle1===true){
				chrome.runtime.sendMessage({rainMusic: "off",volume:50, file:"rain"}, function(response) {
					rainBox.style.backgroundColor="#ffcdb2";
					musicToggle1=false;
  				console.log(response);
				});
					chrome.storage.local.set({rainMusic:"off"}, function() {
        });

			   	chrome.storage.local.set({rainVolume: 50}, function() {
        });
			}
		}
	
    
	});
thunder.addEventListener("click",function(){
	//alert("clicked thunda");
	var currentThunderSliderVolume = thunderSlider.value;
	if(seasonToggle===true){
		if(musicToggle2===false){
			chrome.runtime.sendMessage({thunderMusic: "on",volume: currentThunderSliderVolume, file:"thunder",season:"spring"}, function(response) {
				thunderBox.style.backgroundColor="#bf6b56";
				musicToggle2=true;
			  console.log(response);
			});
			chrome.storage.local.set({thunderMusic:"on"}, function() {
	});

			   chrome.storage.local.set({thunderVolume: currentThunderSliderVolume}, function() {
	});
		}else if(musicToggle2===true){
			chrome.runtime.sendMessage({thunderMusic: "off",volume:currentThunderSliderVolume, file:"thunder",season:"spring"}, function(response) {
				thunderBox.style.backgroundColor="#ffb4a2";
				musicToggle2=false;
			  console.log(response);
			});
			chrome.storage.local.set({thunderMusic:"off"}, function() {
	});

			   chrome.storage.local.set({thunderVolume: currentThunderSliderVolume}, function() {
	});
		}
	}else{
		if(musicToggle2===false){
			chrome.runtime.sendMessage({thunderMusic: "on",volume: currentThunderSliderVolume, file:"thunder",season:"fall"}, function(response) {
				thunderBox.style.backgroundColor="#bf6b56";
				musicToggle2=true;
			  console.log(response);
			});
			chrome.storage.local.set({thunderMusic:"on"}, function() {
	});

			   chrome.storage.local.set({thunderVolume: currentThunderSliderVolume}, function() {
	});
		}else if(musicToggle2===true){
			chrome.runtime.sendMessage({thunderMusic: "off",volume:50, file:"thunder",season:"fall"}, function(response) {
				thunderBox.style.backgroundColor="#ffb4a2";
				musicToggle2=false;
			  console.log(response);
			});
			chrome.storage.local.set({thunderMusic:"off"}, function() {
	});

			   chrome.storage.local.set({thunderVolume: 50}, function() {
	});
		}
	}
			
	
    
	});

snowstorm.addEventListener("click",function(){
	//alert("clicked snew");
	var currentSnowstormSliderVolume = snowstormSlider.value;
	if(seasonToggle===true){
		if(musicToggle3===false){
			chrome.runtime.sendMessage({snowstormMusic: "on",volume: currentSnowstormSliderVolume, file:"snowstorm",season:"spring"}, function(response) {
				snowstormBox.style.backgroundColor="#2c2438";
				musicToggle3=true;
			  console.log(response);
			});
			chrome.storage.local.set({snowstormMusic:"on"}, function() {
	});
			chrome.storage.local.set({snowstormVolume: currentSnowstormSliderVolume}, function() {
	});
		}else if(musicToggle3===true){
			chrome.runtime.sendMessage({snowstormMusic: "off",volume:50, file:"snowstorm",season:"spring"}, function(response) {
				snowstormBox.style.backgroundColor="#6d6875";
				musicToggle3=false;
			  console.log(response);
			});
			chrome.storage.local.set({snowstormMusic:"off"}, function() {
	});
			chrome.storage.local.set({snowstormVolume: 50}, function() {
	});
		}

	}else{
		if(musicToggle3===false){
			chrome.runtime.sendMessage({snowstormMusic: "on",volume: currentSnowstormSliderVolume, file:"snowstorm",season:"fall"}, function(response) {
				snowstormBox.style.backgroundColor="#2c2438";
				musicToggle3=true;
			  console.log(response);
			});
			chrome.storage.local.set({snowstormMusic:"on"}, function() {
	});
			chrome.storage.local.set({snowstormVolume: currentSnowstormSliderVolume}, function() {
	});
		}else if(musicToggle3===true){
			chrome.runtime.sendMessage({snowstormMusic: "off",volume:50, file:"snowstorm",season:"fall"}, function(response) {
				snowstormBox.style.backgroundColor="#6d6875";
				musicToggle3=false;
			  console.log(response);
			});
			chrome.storage.local.set({snowstormMusic:"off"}, function() {
	});
			chrome.storage.local.set({snowstormVolume: 50}, function() {
	});
		}

	}
			
    
	});

fireplace.addEventListener("click",function(){
	//alert("clicked faya");
	var currentFireplaceSliderVolume = fireplaceSlider.value;
	if(seasonToggle===true){
		if(musicToggle4===false){
			chrome.runtime.sendMessage({fireplaceMusic: "on", volume: currentFireplaceSliderVolume, file:"fireplace",season:"spring"}, function(response) {
				fireplaceBox.style.backgroundColor="#23202e";
				musicToggle4=true;
			  console.log(response);
			});
			chrome.storage.local.set({fireplaceMusic:"on"}, function() {
	});
			chrome.storage.local.set({fireplaceVolume: currentFireplaceSliderVolume}, function() {
	});
		}else if(musicToggle4===true){
			chrome.runtime.sendMessage({fireplaceMusic: "off", volume: 50, file:"fireplace",season:"spring"}, function(response) {
				fireplaceBox.style.backgroundColor="#565264";
				musicToggle4=false;
			  console.log(response);
			});
			chrome.storage.local.set({fireplaceMusic:"off"}, function() {
	});
			chrome.storage.local.set({fireplaceVolume: 50}, function() {
	});
		}
	}else{
		if(musicToggle4===false){
			chrome.runtime.sendMessage({fireplaceMusic: "on", volume: currentFireplaceSliderVolume, file:"fireplace",season:"fall"}, function(response) {
				fireplaceBox.style.backgroundColor="#23202e";
				musicToggle4=true;
			  console.log(response);
			});
			chrome.storage.local.set({fireplaceMusic:"on"}, function() {
	});
			chrome.storage.local.set({fireplaceVolume: currentFireplaceSliderVolume}, function() {
	});
		}else if(musicToggle4===true){
			chrome.runtime.sendMessage({fireplaceMusic: "off", volume: 50, file:"fireplace",season:"fall"}, function(response) {
				fireplaceBox.style.backgroundColor="#565264";
				musicToggle4=false;
			  console.log(response);
			});
			chrome.storage.local.set({fireplaceMusic:"off"}, function() {
	});
			chrome.storage.local.set({fireplaceVolume: 50}, function() {
	});
		}

	}
			
	
    
	});
cafe.addEventListener("click",function(){
	//alert("clicked cofi");
	var currentCafeSliderVolume = cafeSlider.value;
	if(seasonToggle===true){
		if(musicToggle5===false){
			chrome.runtime.sendMessage({cafeMusic: "on",volume: currentCafeSliderVolume, file:"cafe",season:"spring"}, function(response) {
				cafeBox.style.backgroundColor="#753240";
				musicToggle5=true;
			  console.log(response);
			});
			chrome.storage.local.set({cafeMusic:"on"}, function() {
	});
			chrome.storage.local.set({cafeVolume: currentCafeSliderVolume}, function() {
	});
		}else if(musicToggle5===true){
			chrome.runtime.sendMessage({cafeMusic: "off",volume:50, file:"cafe",season:"spring"}, function(response) {
				cafeBox.style.backgroundColor="#b5838d";
				musicToggle5=false;
			  console.log(response);
			});
			chrome.storage.local.set({cafeMusic:"off"}, function() {
	});
			chrome.storage.local.set({cafeVolume: 50}, function() {
	});
		}
	}else{
		if(musicToggle5===false){
			chrome.runtime.sendMessage({cafeMusic: "on",volume: currentCafeSliderVolume, file:"cafe",season:"fall"}, function(response) {
				cafeBox.style.backgroundColor="#753240";
				musicToggle5=true;
			  console.log(response);
			});
			chrome.storage.local.set({cafeMusic:"on"}, function() {
	});
			chrome.storage.local.set({cafeVolume: currentCafeSliderVolume}, function() {
	});
		}else if(musicToggle5===true){
			chrome.runtime.sendMessage({cafeMusic: "off",volume:50, file:"cafe",season:"fall"}, function(response) {
				cafeBox.style.backgroundColor="#b5838d";
				musicToggle5=false;
			  console.log(response);
			});
			chrome.storage.local.set({cafeMusic:"off"}, function() {
	});
			chrome.storage.local.set({cafeVolume: 50}, function() {
	});
		}
	}
			
	
    
	});

train.addEventListener("click",function(){
	//alert("clicked trrrrain");
	var currentTrainSliderVolume = trainSlider.value;
	if(seasonToggle===true){
		if(musicToggle6===false){
			chrome.runtime.sendMessage({trainMusic: "on",volume: currentTrainSliderVolume, file:"train",season:"spring"}, function(response) {
				trainBox.style.backgroundColor="#b5575a";
				musicToggle6=true;
			  console.log(response);
			});
			chrome.storage.local.set({trainMusic:"on"}, function() {
	});

			   chrome.storage.local.set({trainVolume: currentTrainSliderVolume}, function() {
	});
		}else if(musicToggle6===true){
			chrome.runtime.sendMessage({trainMusic: "off",volume:50, file:"train",season:"spring"}, function(response) {
				trainBox.style.backgroundColor="#e5989b";
				musicToggle6=false;
			  console.log(response);
			});
			chrome.storage.local.set({trainMusic:"off"}, function() {
	});
			   chrome.storage.local.set({trainVolume: 50}, function() {
	});
		}
	}else{
		if(musicToggle6===false){
			chrome.runtime.sendMessage({trainMusic: "on",volume: currentTrainSliderVolume, file:"train",season:"fall"}, function(response) {
				trainBox.style.backgroundColor="#b5575a";
				musicToggle6=true;
			  console.log(response);
			});
			chrome.storage.local.set({trainMusic:"on"}, function() {
	});

			   chrome.storage.local.set({trainVolume: currentTrainSliderVolume}, function() {
	});
		}else if(musicToggle6===true){
			chrome.runtime.sendMessage({trainMusic: "off",volume:50, file:"train",season:"fall"}, function(response) {
				trainBox.style.backgroundColor="#e5989b";
				musicToggle6=false;
			  console.log(response);
			});
			chrome.storage.local.set({trainMusic:"off"}, function() {
	});
			   chrome.storage.local.set({trainVolume: 50}, function() {
	});
		}
	}
			
	
    
	});

//function loadStorage(){


//}


function setVolume(val){
	var vol = val/100;
	console.log("val");
}

