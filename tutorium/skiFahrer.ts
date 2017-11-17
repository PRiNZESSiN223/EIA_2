namespace L06_Class {
    export class Ski {
        x: number;
        y: number;
        size: number;
        color: string;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }

        
        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            this.x += 4; // hier experimentieren um
            this.y += 4; // andere Bewegungsmuster zu finden
        }

        draw(): void {
        crc2.beginPath();
        crc2.moveTo(this.x, this.y);

        crc2.fillStyle = "red";
        crc2.fillRect(this.x, this.y - 50, 10, 50);
        crc2.fillRect(this.x + 10, this.y - 40, 10, 5);
        crc2.fillStyle = "black";
        crc2.fillRect(this.x - 10, this.y, 50, 5);
        crc2.fillRect(this.x + 20, this.y - 40, 3, 40);

        crc2.beginPath();
        crc2.arc(this.x + 10, this.y - 50, 10, 0, 2 * Math.PI);
        crc2.fillStyle = 'black';
        crc2.fill();
        }

        setRandomStyle(): void {
            this.size = Math.random() * 30 + 10;
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }
    }
}