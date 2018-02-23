namespace RPG {

    export class Follower {
        private xPos: number;
        private yPos: number;
        private speed: number;
        private color: string;
       


        constructor(_xPos: number, _yPos: number, _speed: number, _color: string) {

            this.xPos = _xPos;
            this.yPos = _yPos;
            this.speed = _speed
            this.color = _color;

        }


       
        public update(): void { //wird immer wieder aufgerufen
            this.draw();
            this.move();
            this.gravitation();

        }
        public gravitation() {
            this.yPos += this.gravity;
            if (this.yPos > this.ground) {
                this.yPos = this.ground;
            }
            if(this.yPos <= this.ground-this.jumpHeight){
                    this.setGravity((this.gravity*(-1)));
                console.log(2222);
            }
            
            
        }

        public move(): void {
            if (this.left == true) {
                this.xPos += this.speed;
            }
            if (this.right == true) {
                this.xPos -= this.speed;
            }


            //            if(_event.key == "w"){
            //                this.yPos = this.yPos+1;   
            //            }
            //            if(_event.key == "s"){
            //    this.yPos = this.yPos-1;   
            //            }

        }
        setGravity(setNumber:number) {
            this.gravity = setNumber;
        }
        setRight(setBoolean: boolean) {
            this.right = setBoolean;
        }
        setLeft(setBoolean: boolean) {
            this.left = setBoolean;
        }
        public getXPos():number{
            return this.xPos;    
        }
        public getyPos():number{
            return this.yPos;    
        }

        draw(): void {
            crc2.beginPath();
            crc2.moveTo(this.xPos, this.yPos);

            crc2.fillStyle = this.color;
            crc2.fillRect(this.xPos, this.yPos - 50, 10, 50);
            crc2.fillRect(this.xPos + 10, this.yPos - 40, 20, 7);


            crc2.beginPath();
            crc2.arc(this.xPos + 10, this.yPos - 50, 10, 0, 2 * Math.PI);
            crc2.fill();
        }

    }



}