namespace L06_Class {
    export class Wolke {
        private x: number;
        private y: number;
        private speed: number;


        constructor(_x: number, _y: number, _s: number) {
            this.x = _x;
            this.y = _y;
            this.speed = _s;
        }


        public update(): void {
            this.move();
            this.draw();
        }

        public move(): void {
            this.x += this.speed; // hier experimentieren um
            // andere Bewegungsmuster zu finden
            if (this.x >= 800) {
                this.x = -100;

            }
        }

        public draw(): void {
            crc3.beginPath();
            crc3.fillStyle = "blue";
            crc3.arc(this.x, this.y, 50, 0, 2 * Math.PI);
            crc3.arc(this.x + 50, this.y, 50, 0, 2 * Math.PI);
            crc3.fill();
        }

    }
}