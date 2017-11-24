namespace L06_Class {
    export class Baume {
      private  x: number;
      private  y: number;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;

        }


     public   draw(): void {
      crc3.fillStyle = "brown";
        crc3.fillRect(this.x, this.y, 50, 100);

        crc3.beginPath();
        crc3.arc(this.x + 25, this.y - 20, 50, 0, 2 * Math.PI);
        crc3.fillStyle = "green";
        crc3.fill();
        }

    }
}