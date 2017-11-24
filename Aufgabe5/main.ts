namespace L06_Class {
    export let crc3: CanvasRenderingContext2D;
    
    let hintergrund: Hintergrund;
    let skis: Ski[]=[];
    let wolken: Wolke[]=[];
    let baumen: Baume[]=[];

    //let skis: Ski[] = [];
    window.addEventListener("load", init);

    function init(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        crc3 = canvas.getContext("2d");
         for (let i: number = 0; i < 5; i++) {
             let s : Ski = new Ski(-i*20,i*10+100,(i*Math.random())+4);
                    skis[i] = s;
                }
        
       for (let i: number = 0; i < 5; i++) {
             let w : Wolke = new Wolke(i*200+200,i*10+100,(i*Math.random())+2);
                    wolken[i] = w;
                }
        for (let i: number = 0; i < 5; i++) {
             let t : Baume = new Baume(((i+1)*Math.random())*100+50,((i+1)*Math.random())*100+200);
                    baumen[i] = t;
                }
        hintergrund = new Hintergrund(0, 0,0);
        hintergrund.setRandomStyle();
        
        /*
                for (let i: number = 0; i < 30; i++) {
                    let s: Ski = new Ski(200, 150);
                    s.setRandomStyle();
                    skis[i] = s;
                }
        */

        animate();
    }

    function animate(): void {
        crc3.clearRect(0, 0, 800, 600); // hier Hintergrund restaurieren
        
        hintergrund.drawHintergrund();
        for (let i: number = 0; i < 5; i++) {
                 let s: Ski = skis[i];
                 s.update();
                }
         for (let i: number = 0; i < 5; i++) {
                 let w: Wolke = wolken[i];
                 w.update();
                }
        for (let i: number = 0; i < 5; i++) {
                 let t: Baume = baumen[i];
                 t.draw();
                }


        /*
                for (let i: number = 0; i < skis.length; i++) {
                    let s: Ski = skis[i];
                    s.update();
                }
        */
        window.setTimeout(animate, 20);
    }
}