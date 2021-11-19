// Energy and round functions
var counter = document.getElementById("actualEnergy");
counter = 3;
var round = document.getElementById("roundNumber");
roundNumber = 1;

function subtract(){
  counter -= 1;
  if (counter <= 0) {
    counter = 0;
  }
  
  document.getElementById("actualEnergy").innerHTML = counter;
}

function add(){
  counter += 1;
  if (counter >= 10) {
    counter = 10;
  }
  document.getElementById("actualEnergy").innerHTML = counter;
}

function reset(){
  counter = 3;
  roundNumber = 1;
  document.getElementById("actualEnergy").innerHTML = counter;
  document.getElementById("roundNumber").innerHTML = roundNumber;
  
  resetA1Parts();
  resetA2Parts();
  resetA3Parts();
}

function nextRound(){
  roundNumber += 1;
  counter += 2;
  if (counter >= 10) {
    counter = 10;
  }
  
  document.getElementById("roundNumber").innerHTML = roundNumber;
  document.getElementById("actualEnergy").innerHTML = counter;
}

/**
 * Axie parts functions
 */

// Changes axie grid background color
function changeAxieGridColor() {
  axie1ColorAndParts();
  axie2ColorAndParts();
  axie3ColorAndParts();
}

function axie1ColorAndParts() {
  let axie1Selection = document.getElementById("axie1Select").value;
  
  switch (axie1Selection) {
    case "plant":
      document.getElementById("axie1Grid").style.backgroundColor = "#58c02d";
      document.getElementById("a1m").src = "assets/img/parts/plant/mouth.svg";
      document.getElementById("a1h").src = "assets/img/parts/plant/horn.svg";
      document.getElementById("a1b").src = "assets/img/parts/plant/back.svg";
      document.getElementById("a1t").src = "assets/img/parts/plant/tail.svg";
      break;
    case "aqua":
      document.getElementById("axie1Grid").style.backgroundColor = "#00b7cc";
      document.getElementById("a1m").src = "assets/img/parts/aqua/mouth.svg";
      document.getElementById("a1h").src = "assets/img/parts/aqua/horn.svg";
      document.getElementById("a1b").src = "assets/img/parts/aqua/back.svg";
      document.getElementById("a1t").src = "assets/img/parts/aqua/tail.svg";
      break;
    case "beast":
      document.getElementById("axie1Grid").style.backgroundColor = "#ffb838";
      document.getElementById("a1m").src = "assets/img/parts/beast/mouth.svg";
      document.getElementById("a1h").src = "assets/img/parts/beast/horn.svg";
      document.getElementById("a1b").src = "assets/img/parts/beast/back.svg";
      document.getElementById("a1t").src = "assets/img/parts/beast/tail.svg";
      break;
    case "bird":
      document.getElementById("axie1Grid").style.backgroundColor = "#ff8cbc";
      document.getElementById("a1m").src = "assets/img/parts/bird/mouth.svg";
      document.getElementById("a1h").src = "assets/img/parts/bird/horn.svg";
      document.getElementById("a1b").src = "assets/img/parts/bird/back.svg";
      document.getElementById("a1t").src = "assets/img/parts/bird/tail.svg";
      break;
    case "bug":
      document.getElementById("axie1Grid").style.backgroundColor = "#ff5549";
      document.getElementById("a1m").src = "assets/img/parts/bug/mouth.svg";
      document.getElementById("a1h").src = "assets/img/parts/bug/horn.svg";
      document.getElementById("a1b").src = "assets/img/parts/bug/back.svg";
      document.getElementById("a1t").src = "assets/img/parts/bug/tail.svg";
      break;
    case "dawn":
      document.getElementById("axie1Grid").style.backgroundColor = "#009091";
      document.getElementById("a1m").src = "assets/img/parts/aqua/mouth.svg";
      document.getElementById("a1h").src = "assets/img/parts/aqua/horn.svg";
      document.getElementById("a1b").src = "assets/img/parts/aqua/back.svg";
      document.getElementById("a1t").src = "assets/img/parts/aqua/tail.svg";
      break;
    case "dusk":
      document.getElementById("axie1Grid").style.backgroundColor = "#b9cefc";
      document.getElementById("a1m").src = "assets/img/parts/reptile/mouth.svg";
      document.getElementById("a1h").src = "assets/img/parts/reptile/horn.svg";
      document.getElementById("a1b").src = "assets/img/parts/reptile/back.svg";
      document.getElementById("a1t").src = "assets/img/parts/reptile/tail.svg";
      break;
    case "mech":
      document.getElementById("axie1Grid").style.backgroundColor = "#c7bdd3";
      document.getElementById("a1m").src = "assets/img/parts/beast/mouth.svg";
      document.getElementById("a1h").src = "assets/img/parts/beast/horn.svg";
      document.getElementById("a1b").src = "assets/img/parts/beast/back.svg";
      document.getElementById("a1t").src = "assets/img/parts/beast/tail.svg";
      break;
    case "reptile":
      document.getElementById("axie1Grid").style.backgroundColor = "#e58be1";
      document.getElementById("a1m").src = "assets/img/parts/reptile/mouth.svg";
      document.getElementById("a1h").src = "assets/img/parts/reptile/horn.svg";
      document.getElementById("a1b").src = "assets/img/parts/reptile/back.svg";
      document.getElementById("a1t").src = "assets/img/parts/reptile/tail.svg";
      break;
    default:
      document.getElementById("axie1Grid").style.backgroundColor = "#ffffff";
      break;
  }
}

function axie2ColorAndParts() {
  let axie2Selection = document.getElementById("axie2Select").value;
  
  switch (axie2Selection) {
    case "plant":
      document.getElementById("axie2Grid").style.backgroundColor = "#58c02d";
      document.getElementById("a2m").src = "assets/img/parts/plant/mouth.svg";
      document.getElementById("a2h").src = "assets/img/parts/plant/horn.svg";
      document.getElementById("a2b").src = "assets/img/parts/plant/back.svg";
      document.getElementById("a2t").src = "assets/img/parts/plant/tail.svg";
      break;
    case "aqua":
      document.getElementById("axie2Grid").style.backgroundColor = "#00b7cc";
      document.getElementById("a2m").src = "assets/img/parts/aqua/mouth.svg";
      document.getElementById("a2h").src = "assets/img/parts/aqua/horn.svg";
      document.getElementById("a2b").src = "assets/img/parts/aqua/back.svg";
      document.getElementById("a2t").src = "assets/img/parts/aqua/tail.svg";
      break;
    case "beast":
      document.getElementById("axie2Grid").style.backgroundColor = "#ffb838";
      document.getElementById("a2m").src = "assets/img/parts/beast/mouth.svg";
      document.getElementById("a2h").src = "assets/img/parts/beast/horn.svg";
      document.getElementById("a2b").src = "assets/img/parts/beast/back.svg";
      document.getElementById("a2t").src = "assets/img/parts/beast/tail.svg";
      break;
    case "bird":
      document.getElementById("axie2Grid").style.backgroundColor = "#ff8cbc";
      document.getElementById("a2m").src = "assets/img/parts/bird/mouth.svg";
      document.getElementById("a2h").src = "assets/img/parts/bird/horn.svg";
      document.getElementById("a2b").src = "assets/img/parts/bird/back.svg";
      document.getElementById("a2t").src = "assets/img/parts/bird/tail.svg";
      break;
    case "bug":
      document.getElementById("axie2Grid").style.backgroundColor = "#ff5549";
      document.getElementById("a2m").src = "assets/img/parts/bug/mouth.svg";
      document.getElementById("a2h").src = "assets/img/parts/bug/horn.svg";
      document.getElementById("a2b").src = "assets/img/parts/bug/back.svg";
      document.getElementById("a2t").src = "assets/img/parts/bug/tail.svg";
      break;
    case "dawn":
      document.getElementById("axie2Grid").style.backgroundColor = "#009091";
      document.getElementById("a2m").src = "assets/img/parts/aqua/mouth.svg";
      document.getElementById("a2h").src = "assets/img/parts/aqua/horn.svg";
      document.getElementById("a2b").src = "assets/img/parts/aqua/back.svg";
      document.getElementById("a2t").src = "assets/img/parts/aqua/tail.svg";
      break;
    case "dusk":
      document.getElementById("axie2Grid").style.backgroundColor = "#b9cefc";
      document.getElementById("a2m").src = "assets/img/parts/reptile/mouth.svg";
      document.getElementById("a2h").src = "assets/img/parts/reptile/horn.svg";
      document.getElementById("a2b").src = "assets/img/parts/reptile/back.svg";
      document.getElementById("a2t").src = "assets/img/parts/reptile/tail.svg";
      break;
    case "mech":
      document.getElementById("axie2Grid").style.backgroundColor = "#c7bdd3";
      document.getElementById("a2m").src = "assets/img/parts/beast/mouth.svg";
      document.getElementById("a2h").src = "assets/img/parts/beast/horn.svg";
      document.getElementById("a2b").src = "assets/img/parts/beast/back.svg";
      document.getElementById("a2t").src = "assets/img/parts/beast/tail.svg";
      break;
    case "reptile":
      document.getElementById("axie2Grid").style.backgroundColor = "#e58be1";
      document.getElementById("a2m").src = "assets/img/parts/reptile/mouth.svg";
      document.getElementById("a2h").src = "assets/img/parts/reptile/horn.svg";
      document.getElementById("a2b").src = "assets/img/parts/reptile/back.svg";
      document.getElementById("a2t").src = "assets/img/parts/reptile/tail.svg";
      break;
    default:
      document.getElementById("axie2Grid").style.backgroundColor = "#ffffff";
      break;
  }
}

function axie3ColorAndParts() {
  let axie3Selection = document.getElementById("axie3Select").value;
  
  switch (axie3Selection) {
    case "plant":
      document.getElementById("axie3Grid").style.backgroundColor = "#58c02d";
      document.getElementById("a3m").src = "assets/img/parts/plant/mouth.svg";
      document.getElementById("a3h").src = "assets/img/parts/plant/horn.svg";
      document.getElementById("a3b").src = "assets/img/parts/plant/back.svg";
      document.getElementById("a3t").src = "assets/img/parts/plant/tail.svg";
      break;
    case "aqua":
      document.getElementById("axie3Grid").style.backgroundColor = "#00b7cc";
      document.getElementById("a3m").src = "assets/img/parts/aqua/mouth.svg";
      document.getElementById("a3h").src = "assets/img/parts/aqua/horn.svg";
      document.getElementById("a3b").src = "assets/img/parts/aqua/back.svg";
      document.getElementById("a3t").src = "assets/img/parts/aqua/tail.svg";
      break;
    case "beast":
      document.getElementById("axie3Grid").style.backgroundColor = "#ffb838";
      document.getElementById("a3m").src = "assets/img/parts/beast/mouth.svg";
      document.getElementById("a3h").src = "assets/img/parts/beast/horn.svg";
      document.getElementById("a3b").src = "assets/img/parts/beast/back.svg";
      document.getElementById("a3t").src = "assets/img/parts/beast/tail.svg";
      break;
    case "bird":
      document.getElementById("axie3Grid").style.backgroundColor = "#ff8cbc";
      document.getElementById("a3m").src = "assets/img/parts/bird/mouth.svg";
      document.getElementById("a3h").src = "assets/img/parts/bird/horn.svg";
      document.getElementById("a3b").src = "assets/img/parts/bird/back.svg";
      document.getElementById("a3t").src = "assets/img/parts/bird/tail.svg";
      break;
    case "bug":
      document.getElementById("axie3Grid").style.backgroundColor = "#ff5549";
      document.getElementById("a3m").src = "assets/img/parts/bug/mouth.svg";
      document.getElementById("a3h").src = "assets/img/parts/bug/horn.svg";
      document.getElementById("a3b").src = "assets/img/parts/bug/back.svg";
      document.getElementById("a3t").src = "assets/img/parts/bug/tail.svg";
      break;
    case "dawn":
      document.getElementById("axie3Grid").style.backgroundColor = "#009091";
      document.getElementById("a3m").src = "assets/img/parts/aqua/mouth.svg";
      document.getElementById("a3h").src = "assets/img/parts/aqua/horn.svg";
      document.getElementById("a3b").src = "assets/img/parts/aqua/back.svg";
      document.getElementById("a3t").src = "assets/img/parts/aqua/tail.svg";
      break;
    case "dusk":
      document.getElementById("axie3Grid").style.backgroundColor = "#b9cefc";
      document.getElementById("a3m").src = "assets/img/parts/reptile/mouth.svg";
      document.getElementById("a3h").src = "assets/img/parts/reptile/horn.svg";
      document.getElementById("a3b").src = "assets/img/parts/reptile/back.svg";
      document.getElementById("a3t").src = "assets/img/parts/reptile/tail.svg";
      break;
    case "mech":
      document.getElementById("axie3Grid").style.backgroundColor = "#c7bdd3";
      document.getElementById("a3m").src = "assets/img/parts/beast/mouth.svg";
      document.getElementById("a3h").src = "assets/img/parts/beast/horn.svg";
      document.getElementById("a3b").src = "assets/img/parts/beast/back.svg";
      document.getElementById("a3t").src = "assets/img/parts/beast/tail.svg";
      break;
    case "reptile":
      document.getElementById("axie3Grid").style.backgroundColor = "#e58be1";
      document.getElementById("a3m").src = "assets/img/parts/reptile/mouth.svg";
      document.getElementById("a3h").src = "assets/img/parts/reptile/horn.svg";
      document.getElementById("a3b").src = "assets/img/parts/reptile/back.svg";
      document.getElementById("a3t").src = "assets/img/parts/reptile/tail.svg";
      break;
    default:
      document.getElementById("axie3Grid").style.backgroundColor = "#ffffff";
      break;
  }
}

/**
 * "Kills" axie, adds and resets parts used
 */
var axie1mouth = document.getElementById("a1mCounter");
var axie1horn = document.getElementById("a1hCounter");
var axie1back = document.getElementById("a1bCounter");
var axie1tail = document.getElementById("a1tCounter");
axie1mouth = 0;
axie1horn = 0;
axie1back = 0;
axie1tail = 0;

var axie2mouth = document.getElementById("a2mCounter");
var axie2horn = document.getElementById("a2hCounter");
var axie2back = document.getElementById("a2bCounter");
var axie2tail = document.getElementById("a2tCounter");
axie2mouth = 0;
axie2horn = 0;
axie2back = 0;
axie2tail = 0;

var axie3mouth = document.getElementById("a3mCounter");
var axie3horn = document.getElementById("a3hCounter");
var axie3back = document.getElementById("a3bCounter");
var axie3tail = document.getElementById("a3tCounter");
axie3mouth = 0;
axie3horn = 0;
axie3back = 0;
axie3tail = 0;

function usePartA1M() {
  axie1mouth += 1;
  
  if (axie1mouth >= 2) {
    axie1mouth = 2;
  }
  
  document.getElementById("a1mCounter").innerHTML = axie1mouth;
}

function substractPartA1M() {
  axie1mouth -= 1;
  
  if (axie1mouth <= 0) {
    axie1mouth = 0;
  }
  
  document.getElementById("a1mCounter").innerHTML = axie1mouth;
}

function usePartA1H() {
  axie1horn += 1;
  
  if (axie1horn >= 2) {
    axie1horn = 2;
  }
  
  document.getElementById("a1hCounter").innerHTML = axie1horn;
}

function substractPartA1H() {
  axie1mouth -= 1;
  
  if (axie1mouth <= 0) {
    axie1mouth = 0;
  }
  
  document.getElementById("a1hCounter").innerHTML = axie1mouth;
}

function usePartA1B() {
  axie1back += 1;
  
  if (axie1back >= 2) {
    axie1back = 2;
  }
  
  document.getElementById("a1bCounter").innerHTML = axie1back;
}

function substractPartA1B() {
  axie1mouth -= 1;
  
  if (axie1mouth <= 0) {
    axie1mouth = 0;
  }
  
  document.getElementById("a1bCounter").innerHTML = axie1mouth;
}

function usePartA1T() {
  axie1tail += 1;
  
  if (axie1tail >= 2) {
    axie1tail = 2;
  }
  
  document.getElementById("a1tCounter").innerHTML = axie1tail;
}

function substractPartA1T() {
  axie1mouth -= 1;
  
  if (axie1mouth <= 0) {
    axie1mouth = 0;
  }
  
  document.getElementById("a1tCounter").innerHTML = axie1mouth;
}

function resetA1Parts() {
  document.getElementById("a1mButton").classList.remove("disabled");
  document.getElementById("a1mLabel").classList.remove("disabled");
  document.getElementById("a1hButton").classList.remove("disabled");
  document.getElementById("a1hLabel").classList.remove("disabled");
  document.getElementById("a1bButton").classList.remove("disabled");
  document.getElementById("a1bLabel").classList.remove("disabled");
  document.getElementById("a1tButton").classList.remove("disabled");
  document.getElementById("a1tLabel").classList.remove("disabled");
  document.getElementById("a1DeadButton").classList.remove("disabled");
  
  axie1mouth = 0;
  axie1horn = 0;
  axie1back = 0;
  axie1tail = 0;

  document.getElementById("a1mCounter").innerHTML = axie1mouth;
  document.getElementById("a1hCounter").innerHTML = axie1horn;
  document.getElementById("a1bCounter").innerHTML = axie1back;
  document.getElementById("a1tCounter").innerHTML = axie1tail;
}

function usePartA2M() {
  axie2mouth += 1;
  
  if (axie2mouth >= 2) {
    axie2mouth = 2;
  }
  
  document.getElementById("a2mCounter").innerHTML = axie2mouth;
}

function substractPartA2M() {
  axie1mouth -= 1;
  
  if (axie1mouth <= 0) {
    axie1mouth = 0;
  }
  
  document.getElementById("a2mCounter").innerHTML = axie1mouth;
}

function usePartA2H() {
  axie2horn += 1;
  
  if (axie2horn >= 2) {
    axie2horn = 2;
  }
  
  document.getElementById("a2hCounter").innerHTML = axie2horn;
}

function substractPartA2H() {
  axie1mouth -= 1;
  
  if (axie1mouth <= 0) {
    axie1mouth = 0;
  }
  
  document.getElementById("a2hCounter").innerHTML = axie1mouth;
}

function usePartA2B() {
  axie2back += 1;
  
  if (axie2back >= 2) {
    axie2back = 2;
  }
  
  document.getElementById("a2bCounter").innerHTML = axie2back;
}

function substractPartA2B() {
  axie1mouth -= 1;
  
  if (axie1mouth <= 0) {
    axie1mouth = 0;
  }
  
  document.getElementById("a2bCounter").innerHTML = axie1mouth;
}

function usePartA2T() {
  axie2tail += 1;
  
  if (axie2tail >= 2) {
    axie2tail = 2;
  }
  
  document.getElementById("a2tCounter").innerHTML = axie2tail;
}

function substractPartA2T() {
  axie1mouth -= 1;
  
  if (axie1mouth <= 0) {
    axie1mouth = 0;
  }
  
  document.getElementById("a2tCounter").innerHTML = axie1mouth;
}

function resetA2Parts() {
  document.getElementById("a2mButton").classList.remove("disabled");
  document.getElementById("a2mLabel").classList.remove("disabled");
  document.getElementById("a2hButton").classList.remove("disabled");
  document.getElementById("a2hLabel").classList.remove("disabled");
  document.getElementById("a2bButton").classList.remove("disabled");
  document.getElementById("a2bLabel").classList.remove("disabled");
  document.getElementById("a2tButton").classList.remove("disabled");
  document.getElementById("a2tLabel").classList.remove("disabled");
  document.getElementById("a2DeadButton").classList.remove("disabled");
  
  axie2mouth = 0;
  axie2horn = 0;
  axie2back = 0;
  axie2tail = 0;

  document.getElementById("a2mCounter").innerHTML = axie2mouth;
  document.getElementById("a2hCounter").innerHTML = axie2horn;
  document.getElementById("a2bCounter").innerHTML = axie2back;
  document.getElementById("a2tCounter").innerHTML = axie2tail;
}

function usePartA3M() {
  axie3mouth += 1;
  
  if (axie3mouth >= 2) {
    axie3mouth = 2;
  }
  
  document.getElementById("a3mCounter").innerHTML = axie3mouth;
}

function substractPartA3M() {
  axie1mouth -= 1;
  
  if (axie1mouth <= 0) {
    axie1mouth = 0;
  }
  
  document.getElementById("a3mCounter").innerHTML = axie1mouth;
}

function usePartA3H() {
  axie3horn += 1;
  
  if (axie3horn >= 2) {
    axie3horn = 2;
  }
  
  document.getElementById("a3hCounter").innerHTML = axie3horn;
}

function substractPartA3H() {
  axie1mouth -= 1;
  
  if (axie1mouth <= 0) {
    axie1mouth = 0;
  }
  
  document.getElementById("a3hCounter").innerHTML = axie1mouth;
}

function usePartA3B() {
  axie3back += 1;
  
  if (axie3back >= 2) {
    axie3back = 2;
  }
  
  document.getElementById("a3bCounter").innerHTML = axie3back;
}

function substractPartA3B() {
  axie1mouth -= 1;
  
  if (axie1mouth <= 0) {
    axie1mouth = 0;
  }
  
  document.getElementById("a3bCounter").innerHTML = axie1mouth;
}

function usePartA3T() {
  axie3tail += 1;
  
  if (axie3tail >= 2) {
    axie3tail = 2;
  }
  
  document.getElementById("a3tCounter").innerHTML = axie3tail;
}

function substractPartA3T() {
  axie1mouth -= 1;
  
  if (axie1mouth <= 0) {
    axie1mouth = 0;
  }
  
  document.getElementById("a3tCounter").innerHTML = axie1mouth;
}

function resetA3Parts() {
  document.getElementById("a3mButton").classList.remove("disabled");
  document.getElementById("a3mLabel").classList.remove("disabled");
  document.getElementById("a3hButton").classList.remove("disabled");
  document.getElementById("a3hLabel").classList.remove("disabled");
  document.getElementById("a3bButton").classList.remove("disabled");
  document.getElementById("a3bLabel").classList.remove("disabled");
  document.getElementById("a3tButton").classList.remove("disabled");
  document.getElementById("a3tLabel").classList.remove("disabled");
  document.getElementById("a3DeadButton").classList.remove("disabled");
  
  axie3mouth = 0;
  axie3horn = 0;
  axie3back = 0;
  axie3tail = 0;

  document.getElementById("a3mCounter").innerHTML = axie3mouth;
  document.getElementById("a3hCounter").innerHTML = axie3horn;
  document.getElementById("a3bCounter").innerHTML = axie3back;
  document.getElementById("a3tCounter").innerHTML = axie3tail;
}

function killAxie1 () {
  document.getElementById("a1mButton").classList.add("disabled");
  document.getElementById("a1mLabel").classList.add("disabled");
  document.getElementById("a1hButton").classList.add("disabled");
  document.getElementById("a1hLabel").classList.add("disabled");
  document.getElementById("a1bButton").classList.add("disabled");
  document.getElementById("a1bLabel").classList.add("disabled");
  document.getElementById("a1tButton").classList.add("disabled");
  document.getElementById("a1tLabel").classList.add("disabled");
  document.getElementById("a1DeadButton").classList.add("disabled");
  
  var axie1mouth = "-";
  var axie1horn = "-";
  var axie1back = "-";
  var axie1tail = "-";

  document.getElementById("a1mCounter").innerHTML = axie1mouth;
  document.getElementById("a1hCounter").innerHTML = axie1horn;
  document.getElementById("a1bCounter").innerHTML = axie1back;
  document.getElementById("a1tCounter").innerHTML = axie1tail;
}

function killAxie2 () {
  document.getElementById("a2mButton").classList.add("disabled");
  document.getElementById("a2mLabel").classList.add("disabled");
  document.getElementById("a2hButton").classList.add("disabled");
  document.getElementById("a2hLabel").classList.add("disabled");
  document.getElementById("a2bButton").classList.add("disabled");
  document.getElementById("a2bLabel").classList.add("disabled");
  document.getElementById("a2tButton").classList.add("disabled");
  document.getElementById("a2tLabel").classList.add("disabled");
  document.getElementById("a2DeadButton").classList.add("disabled");
  
  var axie2mouth = "-";
  var axie2horn = "-";
  var axie2back = "-";
  var axie2tail = "-";

  document.getElementById("a2mCounter").innerHTML = axie2mouth;
  document.getElementById("a2hCounter").innerHTML = axie2horn;
  document.getElementById("a2bCounter").innerHTML = axie2back;
  document.getElementById("a2tCounter").innerHTML = axie2tail;
}

function killAxie3 () {
  document.getElementById("a3mButton").classList.add("disabled");
  document.getElementById("a3mLabel").classList.add("disabled");
  document.getElementById("a3hButton").classList.add("disabled");
  document.getElementById("a3hLabel").classList.add("disabled");
  document.getElementById("a3bButton").classList.add("disabled");
  document.getElementById("a3bLabel").classList.add("disabled");
  document.getElementById("a3tButton").classList.add("disabled");
  document.getElementById("a3tLabel").classList.add("disabled");
  document.getElementById("a3DeadButton").classList.add("disabled");
  
  var axie3mouth = "-";
  var axie3horn = "-";
  var axie3back = "-";
  var axie3tail = "-";

  document.getElementById("a3mCounter").innerHTML = axie3mouth;
  document.getElementById("a3hCounter").innerHTML = axie3horn;
  document.getElementById("a3bCounter").innerHTML = axie3back;
  document.getElementById("a3tCounter").innerHTML = axie3tail;
}