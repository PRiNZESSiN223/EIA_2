namespace L07_Class {
    export class Snow extends MoveObj {
        speed: number;


        constructor(_x: number, _y: number) {
            super(_x, _y);
            this.speed=Math.random()+3;
        }


        update(): void { //wird immer wieder aufgerufen
            this.move();
            this.draw();
        }

        move(): void {
           
            this.y += this.speed / 1.5; // andere Bewegungsmuster zu finden
            if (this.y > 600) {
                this.y = 0;
            }
        }

        draw(): void {
            crc3.fillStyle = "#000000";
            crc3.fillRect(this.x, this.y, 1, 1);
            
        }

    }
}