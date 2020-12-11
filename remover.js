// Here is our remover script
removeLogin();
var logininterval = setInterval(removeLogin, 50);

removeToS();
var tosinterval = setInterval(removeToS, 50);

removePaper();
var paperinterval = setInterval(removePaper, 50);

var paperint = 0;
var tosint = 0;
var loginint = 0;

var strict = 300;

function removeLogin(){
  try {
    var element = document.querySelector('ytd-popup-container');
    element.remove();
    console.log("Popup container removed succesfully!");
    clearInterval(logininterval);
  }
  catch {
    if (popupint<strict){
      console.log("Popup container not found!");
      popupint = popupint + 1;
    else {
      console.log("Stopping search for popup container");
      clearInterval(logininterval);
    }
  }
}
  
function removeToS(){
  try {
    var element = document.querySelector('ytd-consent-bump-lightbox');
    element.remove();
    console.log("ToS container removed succesfully!");
    clearInterval(tosinterval);
  }
  catch {
    if (tosint<strict){
      console.log("ToS container not found!");
      tosint = tosint + 1;
    else {
      console.log("Stopping search for ToS container");
      clearInterval(tosinterval);
    }
  }
}

function removePaper(){
  try {
    var element = document.querySelector('paper-dialog');
    element.remove();
    console.log("Paper dialog container removed succesfully!");
    clearInterval(paperinterval);
  }
  catch {
    if (paperint<strict){
      console.log("Paper dialog container not found!");
      paperint = paperint + 1;
    else {
      console.log("Stopping search for paper dialog container");
      clearInterval(paperinterval);
    }
  }
}
