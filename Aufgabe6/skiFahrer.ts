namespace L07_Class {
    export class Ski extends MoveObj {
        speed: number;


        constructor(_x: number, _y: number) {
            super(_x, _y);
            this.speed=Math.random()+4;
        }


        update(): void { //wird immer wieder aufgerufen
            this.move();
            this.draw();
        }

        move(): void {
            this.x -= this.speed; // hier experimentieren um
            this.y += this.speed / 1.5; // andere Bewegungsmuster zu finden
            if (this.x <= 0) {
                this.x = 820;
                this.y = 100 * Math.random() + 100;
            }
        }

        draw(): void {
            crc3.fillStyle = "#000000";
            crc3.fillRect(this.x, this.y, 10, -23);
            crc3.fillStyle = "#000000";
            crc3.beginPath();
            crc3.arc(this.x + 5, this.y - 23, 7, 0, 2 * Math.PI);
            crc3.fill();
            crc3.stroke();
            crc3.fillStyle = "#000000";
            crc3.beginPath();
            crc3.moveTo(this.x + 20, this.y - 4);
            crc3.lineTo(this.x - 20, this.y + 4);
            crc3.stroke();
        }

    }
}