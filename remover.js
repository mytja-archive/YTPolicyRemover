// Here is our remover script
removeLogin();
var logininterval = setInterval(removeLogin, 50);

removeToS();
var tosinterval = setInterval(removeToS, 50);

removePaper();
var paperinterval = setInterval(removePaper, 50);

removeGoogleToS();
var gtosinterval = setInterval(removeGoogleToS, 50);

removeTwSL();
var twslinterval = setInterval(removeTwSL, 50);

//removeAENewUser();
//var aenucinterval = setInterval(removeAENewUser, 50);

function removeLogin(){
  var getUrl = window.location;
  console.log(getUrl.host);
  if (getUrl.host=="youtube.com"){
    try {
      var element = document.querySelector('ytd-popup-container');
      element.remove();
      console.log("Popup container removed succesfully!");
      clearInterval(logininterval);
    }
    catch {
      console.log("Popup container not found!");
    }
  }
}
  
function removeToS(){
  var getUrl = window.location;
  console.log(getUrl.host);
  if (getUrl.host=="youtube.com"){
    try {
      var element = document.querySelector('ytd-consent-bump-lightbox');
      element.remove();
      console.log("ToS container removed succesfully!");
      clearInterval(tosinterval);
    }
    catch {
      console.log("ToS container not found!");
    }
  }
}

function removePaper(){
  var getUrl = window.location;
  console.log(getUrl.host);
  if (getUrl.host=="youtube.com"){
    try {
      var element = document.querySelector('paper-dialog');
      element.remove();
      console.log("Paper dialog container removed succesfully!");
      clearInterval(paperinterval);
    }
    catch {
      console.log("Paper dialog container not found!");
    }
  }
}

function removeGoogleToS(){
  try {
    var element = document.querySelector('div.gTMtLb fp-nh');
    element.remove();
    console.log("Google ToS container removed succesfully!");
    clearInterval(gtosinterval);
  }
  catch {
    console.log("Google ToS dialog container not found!");
  }
}

function removeAENewUser(){
  try {
    var element = document.querySelector('div.next-overlay-wrapper.opened');
    element.remove();
    console.log("AE New user coupon dialog removed succesfully!");
    clearInterval(aenucinterval);
  }
  catch {
    console.log("AliExpress New user coupon dialog container not found!");
  }
}

function removeTwSL(){ // TWitter Small bottom Login
  var getUrl = window.location;
  console.log(getUrl.host);
  if (getUrl.host=="twitter.com"){
    try {
      var element = document.getElementById("layers");
      element.remove();
      console.log("Twitter Small Bottom Login dialog removed successfully!")
      clearInterval(twslinterval);
    }
    catch {
      console.log("Twitter Small Bottom Login dialog container not found!");
    }
  }
}
