// (function() {
  'use strict';

  //GREEN BUTTON CONTROL

  const goButton = document.getElementById("goButton");
  const goLight = document.getElementById("goLight");

  function turnGreen(event) {

    if (goLight.className === `bulb`) {
      goLight.className = `bulb go`;
      console.log(`${goButton.innerHTML} bulb on`)
    } else if (goLight.className === `bulb go`) {
      goLight.className = `bulb`;
      console.log(`${goButton.innerHTML} bulb off`)
    };//if stat.
    
  };//func.

  goButton.addEventListener("click", turnGreen);

  function enterGo(event) {
    console.log(`Entered ${goButton.innerHTML} button`);
  };

  goButton.addEventListener(`mouseover`, enterGo);

  function leftGo(event) {
    console.log(`Left ${goButton.innerHTML} button`);
  };

  goButton.addEventListener(`mouseleave`, leftGo);

  //--------------------------------------------------
  //YELLOW BUTTON CONTROL

  const slowButton = document.getElementById("slowButton");
  const slowLight = document.getElementById("slowLight");
  
  function turnYellow(event) {
    
    if (slowLight.className === 'bulb') {
      slowLight.className = `bulb slow`;
      console.log(`${slowButton.innerHTML} bulb on`)
    } else if (slowLight.className === `bulb slow`) {
      slowLight.className = `bulb`
      console.log(`${slowButton.innerHTML} bulb off`)
    };//if stat.

  };

  slowButton.addEventListener("click", turnYellow);
  
  function enterSlow(event) {
    console.log(`Entered ${slowButton.innerHTML} button`);
  };

  slowButton.addEventListener(`mouseover`, enterSlow);

  function leftSlow(event) {
    console.log(`Left ${slowButton.innerHTML} button`);
  };

  slowButton.addEventListener(`mouseleave`, leftSlow);

  //--------------------------------------------------
  //RED BUTTON CONTROL
  const stopButton = document.getElementById("stopButton");
  const stopLight = document.getElementById("stopLight");
  
  function turnRed(event) {
    
    if (stopLight.className === 'bulb') {
      stopLight.className = `bulb stop`;
      console.log(`${stopButton.innerHTML} bulb on`)
    } else if (stopLight.className === `bulb stop`) {
      stopLight.className = `bulb`
      console.log(`${stopButton.innerHTML} bulb off`)
    };//if stat.

  };
  
  stopButton.addEventListener("click", turnRed);

  function enterStop(event) {
    console.log(`Entered ${stopButton.innerHTML} button`);
  };

  stopButton.addEventListener(`mouseover`, enterStop);

  function leftStop(event) {
    console.log(`Left ${stopButton.innerHTML} button`);
  };

  stopButton.addEventListener(`mouseleave`, leftStop);

  // YOUR CODE HERE
// })();
