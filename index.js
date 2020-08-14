var bg = document.getElementById('particles-js');
document.addEventListener("keydown",function(event){ //notre but est de changer le background à chq fois que l'on appuie sur une lettre
    bg.style.backgroundColor = getRandomColor();
    var key = event.key; // récupérer la lettre sur laquelle je vais appuyé
    playMusic(key);
    console.log(event); // nous donnes les evenement précisément
}) ; //click  keydown 

function playMusic(key){ //clé en paramètre
    switch(key){
        case "b":
            var audio = new Audio("Kick1.wav");
            audio.play();                             //objet Audio Javascript {play: function()joue moi la musique}
            break;
        case "e":
            var audio = new Audio("kick2.mp3");
            audio.play();                             //objet Audio Javascript {play: function()joue moi la musique}
            break;
        case "a":
            var audio = new Audio("kick.mp3");
            audio.play();                             //objet Audio Javascript {play: function()joue moi la musique}
            break;
        case "t":
            var audio = new Audio("Clap1.wav");
            audio.play();                             //objet Audio Javascript {play: function()joue moi la musique}
            break;
    }
}

function getRandomColor(){ // function des couleurs automatique
    var letters = "0123456789ABCDEF"; //letters.length
    var color ="#";
    for(var i=0; i<6; i++ ){ // code Héxadécimal c'est 6 caractères + # 
        color= color + letters[Math.floor(Math.random()*letters.length)];
    }
    return color;
} 