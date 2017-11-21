var L06_Class;
(function (L06_Class) {
    var hintergrund;
    var Skis = [];
    var Wolken = [];
    var Baumen = [];
    //let Skis: Ski[] = [];
    window.addEventListener("load", init);
    function init() {
        var canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        L06_Class.crc3 = canvas.getContext("2d");
        for (var i = 0; i < 5; i++) {
            var s = new L06_Class.Ski(-i * 20, i * 10 + 100, (i * Math.random()) + 4);
            Skis[i] = s;
        }
        for (var i = 0; i < 5; i++) {
            var w = new L06_Class.Wolke(i * 200 + 200, i * 10 + 100, (i * Math.random()) + 2);
            Wolken[i] = w;
        }
        for (var i = 0; i < 5; i++) {
            var t = new L06_Class.Baume(((i + 1) * Math.random()) * 100 + 50, ((i + 1) * Math.random()) * 100 + 200);
            Baumen[i] = t;
        }
        hintergrund = new L06_Class.Hintergrund(0, 0, 0);
        hintergrund.setRandomStyle();
        /*
                for (let i: number = 0; i < 30; i++) {
                    let s: Ski = new Ski(200, 150);
                    s.setRandomStyle();
                    Skis[i] = s;
                }
        */
        animate();
    }
    function animate() {
        L06_Class.crc3.clearRect(0, 0, 800, 600); // hier Hintergrund restaurieren
        hintergrund.drawHintergrund();
        for (var i = 0; i < 5; i++) {
            var s = Skis[i];
            s.update();
        }
        for (var i = 0; i < 5; i++) {
            var w = Wolken[i];
            w.update();
        }
        for (var i = 0; i < 5; i++) {
            var t = Baumen[i];
            t.draw();
        }
        /*
                for (let i: number = 0; i < Skis.length; i++) {
                    let s: Ski = Skis[i];
                    s.update();
                }
        */
        window.setTimeout(animate, 20);
    }
})(L06_Class || (L06_Class = {}));
//# sourceMappingURL=main.js.map