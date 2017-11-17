namespace L05_Class {
    export class SkiFahrer {
        x: number;
        y: number;
        size : number;
        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;

        }


        
        update(): void {
        this.drawSki();
            this.gravity();
        }
    

        drawSki(): void {
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
        
        jump(){
            this.y -=100;
        }
        gravity(){
            this.y +=5;
            if(this.y >= 300){
              this.y =300;  
            }
        }

    }
}




