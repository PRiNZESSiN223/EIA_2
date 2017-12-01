var L07_Class;
(function (L07_Class) {
    var hintergrund;
    var moveObj = [];
    //let skis: Ski[] = [];
    window.addEventListener("load", init);
    function init() {
        var canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        L07_Class.crc3 = canvas.getContext("2d");
        hintergrund = new L07_Class.Hintergrund(0, 0, 0); //übergabe von werten + farbe (farbe war test wegen problemen)
        for (var i = 0; i < 5; i++) {
            var s = new L07_Class.Ski(Math.random() * 30 + 800, Math.random() * 30);
            moveObj.push(s);
            var b = new L07_Class.Baume(Math.random() * 400 + 400, Math.random() * 200 + 300);
            moveObj.push(b);
            var w = new L07_Class.Wolke(Math.random() * 800, Math.random() * 600);
            moveObj.push(w);
            for (var i_1 = 0; i_1 < 20; i_1++) {
                var sf = new L07_Class.Snow(Math.random() * 800, Math.random() * 600);
                moveObj.push(sf); //sf Schneeflocke
            }
        }
        /*   hintergrund.setRandomStyle(); */
        /*
                for (let i: number = 0; i < 30; i++) {
                    let s: Ski = new Ski(200, 150);
                    s.setRandomStyle();
                    skis[i] = s;
                }
        */
        animate();
    }
    function animate() {
        L07_Class.crc3.clearRect(0, 0, 800, 600); // hier Hintergrund restaurieren
        hintergrund.drawHintergrund(); //hintergrund wird gezeichnet
        for (var i = 0; i < moveObj.length; i++) {
            var m = moveObj[i];
            m.update();
        }
        /*
                for (let i: number = 0; i < skis.length; i++) {
                    let s: Ski = skis[i];
                    s.update();
                }
        */
        window.setTimeout(animate, 20);
    }
})(L07_Class || (L07_Class = {}));
//# sourceMappingURL=main.js.map