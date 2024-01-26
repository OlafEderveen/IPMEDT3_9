
//toNextScene
function toNextScene(){
  location.href = "zaal.html";
}

document.addEventListener('DOMContentLoaded', () => {
const places = document.getElementsByClassName('js--place');
const camera = document.getElementById('js--camera');
const sound = document.getElementById('music');


//Places
for (let i = 0; i < places.length; i++) {
    places[i].addEventListener('click', function(evt){
    let att = document.createAttribute("animation");
    att.value = "property: position; easing: linear; dur: 2000; to: " + this.getAttribute('position').x  + ' ' + this.getAttribute('position').y  + ' ' + this.getAttribute('position').z;
    camera.setAttribute('animation', att.value);
    sound.play();
    });   
}

// Example: Call toNextScene on button click
const nextSceneButton = document.getElementById('toNextSceneButton');
if (nextSceneButton) {
    nextSceneButton.addEventListener('click', toNextScene);
}



















});