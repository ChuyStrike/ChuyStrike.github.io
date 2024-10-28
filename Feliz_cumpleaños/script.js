
function playMusic() {
    var music = document.getElementById("music");
    var mariachis = document.getElementById("mariachis");
    
    if (music.paused) {
        music.play();
        mariachis.classList.remove("hidden");
    } else {
        music.pause();
        mariachis.classList.add("hidden");
    }
}
