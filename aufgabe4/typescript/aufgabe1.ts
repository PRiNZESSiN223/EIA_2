namespace L05_Class {
    export let crc2: CanvasRenderingContext2D;

     
    let hintergrund: Hintergrund;
    let hintergrund1: Hintergrund;
    let ski: SkiFahrer;
    let hi1 : boolean = true;
    let pos:number = 0;
    //let hintergrunds: hintergrund[] = [];
    window.addEventListener("load", init);
    
    function init(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        crc2 = canvas.getContext("2d");
        console.log(crc2);
        
        hintergrund = new Hintergrund(0, 0,0);
        hintergrund1 = new Hintergrund(800, 0,0);
        ski = new SkiFahrer(400, 300);
        hintergrund.setRandomStyle();

        /*
                for (let i: number = 0; i < 30; i++) {
                    let s: hintergrund = new hintergrund(200, 150);
                    s.setRandomStyle();
                    hintergrunds[i] = s;
                }
        */
       
        animate();
    }

    function animate(): void {
        crc2.clearRect(0, 0, 800, 600); // hier Hintergrund restaurieren
        
        hintergrund.move(-10);
            hintergrund1.move(-10);
            pos+=10;
        
         hintergrund.drawHintergrund();
        hintergrund1.drawHintergrund();
        if(pos>800 && hi1==true){
            pos=0;
           hintergrund.setPosR();
            hi1=false;
        }
        else if(pos>800 && hi1==false){
            pos=0;
            hintergrund1.setPosR();
            hi1=true;
        }
         else if(pos<0 && hi1==false){
            pos=800;
           hintergrund.setPosL();
            hi1=true;
        }
        else if(pos<0 && hi1==true){
            pos=800;
            hintergrund1.setPosL();
        }
        ski.update();

        /*
                for (let i: number = 0; i < hintergrunds.length; i++) {
                    let s: hintergrund = hintergrunds[i];
                    s.update();
                }
        */
        window.setTimeout(animate, 20);
    }
    document.addEventListener('keydown', keyboardInput);
    
   function keyboardInput(event: KeyboardEvent) {
        // PRESS LEFT ARROW
        if (event.keyCode == 37) {
            hintergrund.move(20);
            hintergrund1.move(20);
            pos-=20;
        }
        // PRESS UP ARROW
        else if (event.keyCode == 38) {
            if(ski.y >= 300){
            ski.jump();
               }
        }
        // PRESS RIGHT ARROW
        else if (event.keyCode == 39) {
            hintergrund.move(-20);
            hintergrund1.move(-20);
            pos+=20;
        }
        // PRESS DOWN ARROW
        else if (event.keyCode == 40) {
            window.alert("Down Key Pressed");
        }
        // PRESS SPACE BAR
        else if (event.keyCode == 32) {
            if(ski.y >= 300){
            ski.jump();
               }
        }
    }

}