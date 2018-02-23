
namespace RPG {

    export class Kronleuchter {
        private xPos: number;
        private yPos: number;
        private yPosK: number;
        private kroneImage: any = new Image();
        private halterImage: any = new Image();
        private person: Person;
        private fall :boolean = false;
        constructor(_xPos: number, _yPos: number, _kroneImage: string, _halterImage: string, _person: Person) {

            this.xPos = _xPos;
            this.yPos = _yPos;
            this.yPosK = _yPos
            this.kroneImage.src = _kroneImage;
            this.halterImage.src = _halterImage;
            this.person = _person;

        }


        public update(): void {
            this.drawHalter();
            this.drawKron();
            this.move();
        }
        public move(){
            if(this.fall == true){
           this.yPosK += 2;
            
        }
            }

        public setFall(n:boolean){
            this.fall = n;    
        }

        public getXpos():number{
            return this.xPos;
        }
        public getYposK():number{
            return this.yPosK;
        }
         public getFall():boolean{
            return this.fall;
        }
        public drawHalter():void{

              crc2.drawImage(this.halterImage, this.xPos, this.yPos);
            }
        
        public drawKron(): void {
            crc2.drawImage(this.kroneImage, this.xPos, this.yPosK);           
        }

    }



}