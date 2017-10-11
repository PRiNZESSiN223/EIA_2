var name = prompt("Name");

function init():void{
  let node = document.getElementById("inhalt");
    node.innerHTML = "WOW respekt an dich "+name+" du kannst deinen Namen schreiben.";

  
}

window.addEventListener("load",init);