var L06_Class;
(function (L06_Class) {
    var ski;
    //let Skis: Ski[] = [];
    window.addEventListener("load", init);
    function init() {
        var canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        L06_Class.crc2 = canvas.getContext("2d");
        console.log(L06_Class.crc2);
        ski = new L06_Class.Ski(200, 100);
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
        L06_Class.crc2.clearRect(0, 0, 800, 600); // hier Hintergrund restaurieren
        ski.update();
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