namespace RPG {

    export class Background {
        background: any = new Image();
        xWolke: number;
        yWolke: number;
        wdx: number = -0.3;

        constructor(bg: String, _xWolke: number, _yWolke: number) {
            this.background.src = bg;
            this.xWolke = _xWolke;
            this.yWolke = _yWolke;
        }



        public update(): void { //wird immer wieder aufgerufen
            this.draw();

        }


        public drawWolken(): void {
            crc2.beginPath();
            crc2.fillStyle = "black";

            this.xWolke += this.wdx;
            crc2.arc(this.xWolke, this.yWolke, 5, 0, 2 * Math.PI);
            crc2.arc(this.xWolke + 7, this.yWolke, 5, 0, 2 * Math.PI);
            crc2.arc(this.xWolke + 3.5, this.yWolke + 2.5, 5, 0, 2 * Math.PI);
            crc2.arc(this.xWolke + 3.5, this.yWolke - 2.5, 5, 0, 2 * Math.PI);
            crc2.fill();
            if (this.xWolke < -20) {
                this.xWolke = 820;
            }
        }

        draw(): void {
            crc2.drawImage(this.background, 0, 0);
            
            //            let sky = crc2.createLinearGradient(0, 0, 0, 350);
            //            sky.addColorStop(0, "orange");
            //            sky.addColorStop(1, "white");
            //
            //            crc2.fillStyle = sky;
            //            crc2.fillRect(0, 0, 800, 600);
            //            
            //            let ground = crc2.createLinearGradient(0, 350, 0, 600);
            //            ground.addColorStop(0, "green");
            //            ground.addColorStop(1, "#3B170B");
            //
            //            crc2.fillStyle = ground;
            //            crc2.fillRect(0, 335, 800, 600);

        }

    }



}