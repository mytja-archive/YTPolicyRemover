// Here is our remover script


setTimeout(removeLogin, 5000);
setTimeout(removeToS, 7000);

function removeLogin(){
  try {
    var element = document.querySelector('ytd-popup-container');
    element.remove();
    console.log("Popup container removed succesfully!");
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
  }
  catch {
    console.log("ToS container not found!");
  }
}
