namespace RPG {

    export class House {
        private xPos: number;
        private yPos: number;
        private xDoor: number;
        


        constructor(_xPos: number, _yPos: number) {
            this.xPos = _xPos;
            this.yPos = _yPos;

        }



        public update(): void { //wird immer wieder aufgerufen
            this.draw();
            
        }

        public getxDoor(){
            return this.xDoor;    
        }


        public draw(): void {
            
            crc2.beginPath();
            crc2.fillStyle = "grey";
            crc2.moveTo(this.xPos, this.yPos+35);
            crc2.fillRect(this.xPos, this.yPos+35, -100, -50);
            
            //Turm
            crc2.fillStyle = "grey";
            crc2.fillRect(this.xPos, this.yPos+35, 110, -100);
            crc2.fillRect(this.xPos, this.yPos-65, 10, -10);
            crc2.fillRect(this.xPos+20, this.yPos-65, 10, -10);
            crc2.fillRect(this.xPos+40, this.yPos-65, 10, -10);
            crc2.fillRect(this.xPos+60, this.yPos-65, 10, -10);
            crc2.fillRect(this.xPos+80, this.yPos-65, 10, -10);
            crc2.fillRect(this.xPos+100, this.yPos-65, 10, -10);
            crc2.fillStyle = "black";
            crc2.fillRect(this.xPos+40, this.yPos+30, 25, -30);
            //Turm
            crc2.fillStyle = "grey";
            crc2.fillRect(this.xPos-200, this.yPos+35, 110, -100);
            crc2.fillRect(this.xPos-200, this.yPos-65, 10, -10);
            crc2.fillRect(this.xPos-180, this.yPos-65, 10, -10);
            crc2.fillRect(this.xPos-160, this.yPos-65, 10, -10);
            crc2.fillRect(this.xPos-140, this.yPos-65, 10, -10);
            crc2.fillRect(this.xPos-120, this.yPos-65, 10, -10);
            crc2.fillRect(this.xPos-100, this.yPos-65, 10, -10);
            crc2.fillStyle = "black";
            crc2.fillRect(this.xPos-160, this.yPos+30, 25, -30);
           


        }

    }



}