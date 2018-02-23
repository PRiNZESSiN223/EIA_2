namespace RPG {

    export class Boss {
        private xPos: number;
        private yPos: number;
        private attackSt: number;
        private bossImage: any = new Image();
        private person: Person;
        private leben : number = 600;
        private speed : number =0.4;
        constructor(_xPos: number, _yPos: number, _bossImage: string, _person: Person) {

            this.xPos = _xPos;
            this.yPos = _yPos;
            this.bossImage.src = _bossImage;
            this.person = _person;

        }


        public update(): void {
            if(this.leben > 0){
            this.draw();
            this.move();
                
                }
        }
        public move(){
            this.xPos+= this.speed;
            if(this.xPos > 200){
                this.xPos  = 200;
                this.speed *=-1;
            }
            else if(this.xPos < 10){
                this.xPos  = 10;
                this.speed *=-1;
            }
            
        }
        public attack(): void {

        }
        public attackEnd(): void {
         
        }
        public followObj(_xPos: number, _yPos: number): void {
        }
        public setChar(setChar: string) {
            this.bossImage.src = setChar;
        }

        public setSchaden(){
            this.leben -=200;    
        }
        public getXpos():number{
            return this.xPos;
        }
        public getYpos():number{
            return this.yPos;
        }
        public getLeben():number{
            return this.leben;
        }
        public drawLeben():void{
            crc2.fillStyle = "#6A0606";
            crc2.fillRect(100, 420, 600, 5);      
            crc2.fillStyle = "red";
            crc2.fillRect(100, 420, this.leben, 5);  
            crc2.fillStyle = "black";
            crc2.fillRect(this.leben+100, 415,2 , 15);     
            }
        
        public draw(): void {
            crc2.scale(2, 2);
            crc2.drawImage(this.bossImage, this.xPos, this.yPos);
            crc2.scale(0.5,0.5);
        }

    }



}