// Here is our remover script
removeLogin();
var logininterval = setInterval(removeLogin, 50);

removeToS();
var tosinterval = setInterval(removeToS, 50);

removePaper();
var paperinterval = setInterval(removePaper, 50);

function removeLogin(){
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
  
function removeToS(){
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

function removePaper(){
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
