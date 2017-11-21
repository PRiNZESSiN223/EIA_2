namespace L06_Class {
    export let crc2: CanvasRenderingContext2D;

    let ski: Ski;
    //let Skis: Ski[] = [];
    window.addEventListener("load", init);

    function init(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        crc2 = canvas.getContext("2d");
        console.log(crc2);

        ski = new Ski(200, 100);


        /*
                for (let i: number = 0; i < 30; i++) {
                    let s: Ski = new Ski(200, 150);
                    s.setRandomStyle();
                    Skis[i] = s;
                }
        */

        animate();
    }

    function animate(): void {
        crc2.clearRect(0, 0, 800, 600); // hier Hintergrund restaurieren
        ski.update();
        /*
                for (let i: number = 0; i < Skis.length; i++) {
                    let s: Ski = Skis[i];
                    s.update();
                }
        */
        window.setTimeout(animate, 20);
    }
}