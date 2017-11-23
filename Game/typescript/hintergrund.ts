namespace L05_Class {
    export class Hintergrund {
        x: number;
        y: number;
        size : number;
        color:number;
        constructor(_x: number, _y: number,_c:number) {
            this.x = _x;
            this.y = _y;
            this.color = _c;
        }


        
        update(): void {

        }
    
        move(x:number): void {
            this.x += x; // hier experimentieren um
            
        }
        drawHintergrund(){
            this.drawSky();
            this.drawMountain();
            this.drawPiste();
        }
        drawSky(){
        crc2.fillStyle = "#A9E2F3";
        crc2.fillRect(this.x-20,this.y,900,600);    
        }
        drawPiste(){
            crc2.fillStyle = "#FFF";
            crc2.fillRect(this.x-300,this.y+300,1200,600); 
        }
        drawMountain(): void {
            
            for(let i:number = 0; i<5;i++){
                this.setRandomStyle();
        crc2.beginPath();
        crc2.moveTo(this.x+(i*180),this.y + (this.size/10));
        crc2.lineWidth = 1;
        crc2.lineTo(this.x+(i*180) + this.size/3, this.y + this.size);
        crc2.lineTo(this.x+ (i*180) - this.size/3, this.y + this.size);
                if(this.color ==0){
        crc2.fillStyle = "#666";
                    }
                else{
                 crc2.fillStyle = "red";    
                }
        crc2.fill();

            }
        }
        
        setRandomStyle(): void {
            this.size = 200+300 ;
        }
        
      setPosR(){
      this.x=800;    
      }
        setPosL(){
      this.x=-800;    
      }

    }
}




