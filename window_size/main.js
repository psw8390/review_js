const content = document.querySelector(".content");

function changeScreenSize() {
  content.innerHTML = 
    "window.screen: " + window.screen.width + ", " +window.screen.height + "<br>" +
    "window.outer: " + window.outerWidth + ", " +window.outerHeight + "<br>" +
    "window.inner: " + window.innerWidth + ", " +window.innerHeight + "<br>" +
    "documentElement.clientWidth: " + content.clientWidth + ", " + content.clientHeight
  ;
}

changeScreenSize();
window.addEventListener('resize', changeScreenSize);