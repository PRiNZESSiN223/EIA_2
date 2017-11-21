namespace L06_Class {
    export class Hintergrund {
        x: number;
        y: number;
        size : number[] =[];
        color:number;
        constructor(_x: number, _y: number,_c:number) {
            this.x = _x;
            this.y = _y;
            this.color = _c;
        }



        drawHintergrund(){
            this.drawSky();
            this.drawMountain();
            this.drawPiste();
            this.drawLift();
        }
        drawSky(){
        crc3.fillStyle = "#A9E2F3";
        crc3.fillRect(this.x-20,this.y,900,600);    
        }
        drawPiste(){
            crc3.fillStyle = "#FFF";
            crc3.beginPath();
            crc3.moveTo(this.x,this.y+100);
            crc3.lineTo(800,600);
             crc3.lineTo(0,600);
            crc3.fill();
        }
        drawLift():void{
        crc3.beginPath();
        crc3.moveTo(this.x, this.y);
        crc3.lineTo(800, 550);
        crc3.lineWidth = 2;

        crc3.strokeStyle = 'black';
        crc3.stroke();
        crc3.fillStyle = "grey";
        crc3.fillRect(this.x + 250, this.y + 170, 10, 100);
        crc3.fillRect(this.x + 200, this.y + 200, 100, 100);
        crc3.fillStyle = "white";
        crc3.fillRect(this.x + 210, this.y + 210, 80, 80);

        }
        
        drawMountain(): void {
            
            for(let i:number = 0; i<5;i++){
    
        crc3.beginPath();
        crc3.moveTo(this.x+(i*180),this.y + (this.size[i]/2));
        crc3.lineWidth = 1;
        crc3.lineTo(this.x+(i*180) + this.size[i]*2, this.y + this.size[i]+500);
        crc3.lineTo(this.x+ (i*180) - this.size[i]*2, this.y + this.size[i]+500);
                if(this.color ==0){
        crc3.fillStyle = "#666";
                    }
                else{
                 crc3.fillStyle = "red";    
                }
        crc3.fill();

            }
        }
        
        setRandomStyle(): void {
            
            for(let i:number = 0; i<5;i++){
            this.size[i] = Math.random()*200+50 ;
                }
        }


    }
}




