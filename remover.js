// Here is our remover script


setTimeout(removeLogin, 5000);
setTimeout(removeToS, 5000);

function removeLogin(){
  try {
    var element = document.querySelector('ytd-popup-container');
    element.remove();
  }
  catch {
    console.log("Popup container not found!");
  }
}
  
function removeToS(){
  try {
    var element = document.querySelector('ytd-consent-bump-lightbox');
    element.remove();
  }
  catch {
    console.log("ToS container not found!");
  }
}
