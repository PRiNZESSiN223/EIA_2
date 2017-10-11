var name :string = prompt("Name");

function init():void{
      let node = document.getElementById("inhalt");
    if(name.length < 1){
    node.innerHTML = "Weißt du nicht wie du heißt ?";
}
        if(name.length >= 1){
    node.innerHTML = "WOW respekt an dich "+name+" du kannst deinen Namen schreiben.";
}
  
}

window.addEventListener("load",init);