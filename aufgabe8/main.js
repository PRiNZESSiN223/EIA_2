var L07_DOM;
(function (L07_DOM) {
    window.addEventListener("load", init);
    function init() {
        var seite = 5;
        var colorArray = [];
        for (var i = 0; i < 10; i++) {
            colorArray[i] = "hsl( " + Math.random() * 360 + ",100%,20%)";
        }
        var qua = prompt("Wie viel Quadrate ? (min 10 - max 100)");
        for (var i = 0; i < parseInt(qua); i++) {
            console.log(parseInt(qua));
            var pos = [];
            pos[0] = Math.random() * window.innerHeight;
            pos[1] = Math.random() * window.innerWidth;
            draw(colorArray, seite, pos);
        }
    }
    function draw(_colorArray, _seite, _pos) {
        var color = Math.floor(Math.random() * 10);
        console.log(color);
        var div = document.createElement("div");
        div.style.width = "" + _seite + "em";
        div.style.height = "" + _seite + "em";
        div.style.top = "" + _pos[0];
        div.style.left = "" + _pos[1];
        switch (color) {
            case 0:
                div.style.backgroundColor = _colorArray[0];
                break;
            case 1:
                div.style.backgroundColor = _colorArray[1];
                break;
            case 2:
                div.style.backgroundColor = _colorArray[2];
                break;
            case 3:
                div.style.backgroundColor = _colorArray[3];
                break;
            case 4:
                div.style.backgroundColor = _colorArray[4];
                break;
            case 5:
                div.style.backgroundColor = _colorArray[5];
                break;
            case 6:
                div.style.backgroundColor = _colorArray[6];
                break;
            case 7:
                div.style.backgroundColor = _colorArray[7];
                break;
            case 8:
                div.style.backgroundColor = _colorArray[8];
                break;
            case 9:
                div.style.backgroundColor = _colorArray[9];
                break;
            case 10:
                div.style.backgroundColor = _colorArray[10];
                break;
        }
        document.body.appendChild(div);
    }
})(L07_DOM || (L07_DOM = {}));
//# sourceMappingURL=main.js.map