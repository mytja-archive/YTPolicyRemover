// Here is our remover script


try {
  var element = document.querySelector('ytd-popup-container');
  element.remove();
}
catch {
  console.log("Popup container not found!");
}

try {
  var element = document.querySelector('ytd-consent-bump-lightbox');
  element.remove();
}
catch {
  console.log("ToS container not found!");
}
  

function removeToS(){
  // Here will be it!
}
