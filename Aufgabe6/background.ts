namespace L07_Class {
    export class Hintergrund {
        x: number;
        y: number;
        size: number[] = [];
        color: number;
        constructor(_x: number, _y: number, _c: number) { //Übergabe x-y Werte
            this.x = _x; //this definiert innerhalb einer klasse 
            this.y = _y;
            this.color = _c;
        }



        drawHintergrund(): void {
            this.drawSky();
            this.drawMountain();
            this.drawPiste();
            this.drawLift();
        }
        drawSky(): void {
            //Himmel
            crc3.fillStyle = "#42b6f4"; //2Dimensionaler Befehl für canvas
            crc3.fillRect(0, 0, 800, 600);
        }
        drawPiste(): void {
            //Piste
            crc3.beginPath();
            crc3.moveTo(0, 450);
            crc3.lineTo(800, 0);
            crc3.lineTo(800, 600);
            crc3.lineTo(0, 600);
            crc3.closePath();
            crc3.stroke();
            crc3.fillStyle = "#E8EEEE";
            crc3.fill();
        }
        drawLift(): void {
            //Lift
            crc3.beginPath();
            crc3.moveTo(0, 400);
            crc3.lineTo(725, 0);
            crc3.closePath();
            crc3.stroke(); // Zeichne Linie 
            crc3.beginPath();
            crc3.moveTo(250, 261);
            crc3.lineTo(250, 300);
            crc3.stroke();
            //horizontal
            crc3.beginPath();
            crc3.moveTo(240, 300);
            crc3.lineTo(260, 300);
            crc3.stroke();
        }

        drawMountain(): void {

            //Berg 1
            crc3.fillStyle = "#a9a9a9"; //Farbe
            crc3.beginPath(); //Starte
            crc3.moveTo(175, 100); //Beweg dich zu dem Startpunkt
            crc3.lineTo(350, 550); //Beweg dich zu den Koordinaten
            crc3.lineTo(0, 550); // Beweg dich nochmal zu den Koordinaten
            crc3.fill(); // Fülle aus mit Fillstyle
            //Berg 2
            crc3.fillStyle = "#a9a9a9";
            crc3.beginPath();
            crc3.moveTo(300, 30); //hoehe
            crc3.lineTo(500, 500);
            crc3.lineTo(100, 500);
            crc3.fill();

            //Berg 3
            crc3.fillStyle = "#a9a9a9";
            crc3.beginPath();
            crc3.moveTo(400, 130); //hoehe
            crc3.lineTo(600, 500);
            crc3.lineTo(200, 500);
            crc3.fill();
        }

    /*    setRandomStyle(): void { 
            for (let i: number = 0; i < 5; i++) {
                this.size[i] = Math.random() * 200 + 50;
            }
        }    Für size (Berge o.ä.)                           */


    }
}





