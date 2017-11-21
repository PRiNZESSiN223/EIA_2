namespace L06_Class {
    export class Ski {
        x: number;
        y: number;
        speed:number;
        size: number;
        color: string;

        constructor(_x: number, _y: number, _s:number) {
            this.x = _x;
            this.y = _y;
            this.speed = _s;
        }

        
        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            this.x += this.speed; // hier experimentieren um
            this.y += this.speed/1.5; // andere Bewegungsmuster zu finden
            if(this.x>=800){
                this.x = -100;
                this.y = 100*Math.random()+100;
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

        setRandomStyle(): void {
            this.size = Math.random() * 30 + 10;
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }
    }
}