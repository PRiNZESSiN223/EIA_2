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
            this.x += this.speed; // hier experimentieren um
            this.y += this.speed / 1.5; // andere Bewegungsmuster zu finden
            if (this.x > 800) {
                this.x = -30;
                this.y = 100 * Math.random() + 100;
            }
        }

        draw(): void {
            crc3.beginPath();
            crc3.moveTo(this.x, this.y);

            crc3.fillStyle = "red";
            crc3.fillRect(this.x, this.y - 50, 10, 50);
            crc3.fillRect(this.x + 10, this.y - 40, 10, 5);
            crc3.fillStyle = "black";
            crc3.fillRect(this.x - 10, this.y, 50, 5);
            crc3.fillRect(this.x + 20, this.y - 40, 3, 40);

            crc3.beginPath();
            crc3.arc(this.x + 10, this.y - 50, 10, 0, 2 * Math.PI);
            crc3.fillStyle = 'black';
crc3.fill();
        }

    }
}