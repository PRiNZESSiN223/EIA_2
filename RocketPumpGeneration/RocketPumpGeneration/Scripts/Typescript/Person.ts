namespace RPG {

    export class Person {
        private xPos: number;
        private yPos: number;
        private speed: number;
        private attack: number;
        private text: string;
        private color: string;
        private right: boolean;
        private left: boolean;
        private ground: number;
        private gravity: number;
        private jumpHeight: number = 40;
        private personchar: any = new Image();
        private drawMagic: any = new Image();
        private lookL: boolean = false;
        private status: number = 0;
        private objCol: number[][] = [];
        private leben: number = 100;
        private magicPos: number = 0;
        private magicStartPos: number[] = [0, 0];
        private magicTrue: boolean = false;
        private magicL: boolean = false;
        private magicR: boolean = false;
        private mana: number = 100;

        constructor(_xPos: number, _yPos: number, _speed: number, _color: string, _ground: number, _gravity: number, _objCol: number[][], _personChar: string, _drawMagicSrc: string) {

            this.xPos = _xPos;
            this.yPos = _yPos;
            this.speed = _speed
            this.color = _color;
            this.right = false;
            this.left = false;
            this.ground = _ground;
            this.gravity = _gravity;
            this.personchar.src = _personChar;
            this.drawMagic.src = _drawMagicSrc;

            this.objCol = _objCol;
        }



        public update(): void { //wird immer wieder aufgerufen
            if (this.leben >= 0) {
                this.draw();
                this.move();
                this.gravitation();
                this.collision();
                this.magic();
                this.fillMana();
               
            }

        }
        public schaden(_schaden: number) {
            this.leben -= _schaden;
        }
        private collision(): void {
            for (let i: number = 0; i < this.objCol.length; i++) {
                if (this.xPos >= this.objCol[i][0] && this.xPos <= this.objCol[i][0] + this.objCol[i][1] - 3) {
                    this.xPos = this.objCol[i][0];
                }
                else if (this.xPos >= this.objCol[i][0] + 2 && this.xPos <= this.objCol[i][0] + this.objCol[i][1]) {
                    this.xPos = this.objCol[i][0] + this.objCol[i][1];
                }
            }
        }
        public magic() {

            if (this.magicTrue == true) {
                // if(this.mana >=50||this.magicL==true||this.magicR==true){  
                if (this.magicPos == 0) {
                    this.magicStartPos[0] = this.xPos;
                    this.magicStartPos[1] = this.yPos;
                    this.mana -= 50;

                }
                if ((this.lookL == false || this.magicL == true) && this.magicR == false) {
                    if (this.magicPos > 0 && this.magicPos <= 200) {
                        this.magicL = true;
                        this.drawMagic.src = "Assats/img/magieEis.png";
                        crc2.drawImage(this.drawMagic, this.magicStartPos[0] + this.magicPos, this.magicStartPos[1]);


                    }

                    this.magicPos += 5;
                    if (this.magicPos > 200) {
                        this.magicPos = 0;
                        this.magicTrue = false;
                        this.magicL = false;
                    }
                }

                if ((this.lookL == true || this.magicR == true) && this.magicL == false) {

                    if (this.magicPos < 0 && this.magicPos >= -200) {
                        this.magicR = true;
                        this.drawMagic.src = "Assats/img/magieEisL.png";
                        crc2.drawImage(this.drawMagic, this.magicStartPos[0] + this.magicPos, this.magicStartPos[1]);


                    }

                    this.magicPos -= 5;
                    if (this.magicPos < - 200) {
                        this.magicPos = 0;
                        this.magicTrue = false;
                        this.magicR = false;
                    }
                }
            }
            else {
                this.magicTrue = false;
            }
            // } 

        }
              public magieSchaden(person:Person): void {
            if (this.getLeben() >= 0) {
                if (person.getMagicTrue() == true&&person.getLeben()>0) {
                    if (person.getMagicxPos() - 5 < this.getXPos() && person.getMagicxPos() + 5 > this.getXPos()&&person.getMagicyPos() - 5 < this.getyPos() && person.getMagicyPos() + 5 > this.getyPos()) {
                        this.schaden(20);
                    }
                }
            }
        }

        public fillMana() {
            if (this.mana <= 0) {
                this.mana = 0;
            }
            if (this.mana <= 100) {
                this.mana += 0.2;
            }
        }
        
        public gravitation(): void {
            this.yPos += this.gravity;
            if (this.yPos > this.ground) {
                this.yPos = this.ground;
            }
            if (this.yPos <= this.ground - this.jumpHeight) {
                this.setGravity((this.gravity * (-1)));
            }


        }


        public move(): void {

            if (this.status < 5) {
                if (this.left == true) {
                    this.xPos += this.speed;
                    this.lookL = false;
                    this.personchar.src = "Assats/img/CharMove.png";
                    this.status += 1;

                }


                if (this.right == true) {
                    this.xPos -= this.speed;
                    this.lookL = true;
                    this.personchar.src = "Assats/img/CharMoveL.png";
                    this.status += 1;

                }
            }
            else if (this.status >= 5) {
                if (this.left == true) {
                    this.xPos += this.speed;
                    this.lookL = false;
                    this.personchar.src = "Assats/img/Char.png";
                    this.status += 1;
                }

                if (this.right == true) {
                    this.xPos -= this.speed;
                    this.lookL = true;
                    this.personchar.src = "Assats/img/CharL.png";
                    this.status += 1;
                }
                if (this.status >= 10) {
                    this.status = 0;
                }
            }




            //            if(_event.key == "w"){
            //                this.yPos = this.yPos+1;   
            //            }
            //            if(_event.key == "s"){
            //    this.yPos = this.yPos-1;   
            //            }

        }
        public setGround(n:number){
            this.ground = n;
            }
         public getGround():number{
            return this.ground;
            }
        public getRight():boolean{
            return this.right;
            }
        public getLeft():boolean{
            return this.left;
            }
        setGravity(setNumber: number) {
            this.gravity = setNumber;
        }
        setRight(setBoolean: boolean) {
            this.right = setBoolean;
        }
        setLeft(setBoolean: boolean) {
            this.left = setBoolean;
        }
        setChar(setChar: string) {
            this.personchar.src = setChar;
        }
        public getLeben(): number {
            return this.leben;
        }
        public getLookL(): boolean {
            return this.lookL;
        }
        public getXPos(): number {
            return this.xPos;
        }
        public getyPos(): number {
            return this.yPos;
        }
        public getStatus(): number {
            return this.status;
        }
        public setStatus(_status: number) {
            this.status = _status;
        }
        public setxPos(_xPos: number): void {
            this.xPos = _xPos;
        }
        public setMagicTrue(_magicTrue: boolean): void {
            this.magicTrue = _magicTrue;
        }
        public getMagicxPos(): number {
            let magpos: number = this.magicPos + this.magicStartPos[0];
            return magpos;
        }
        public getMagicyPos(): number {
            let magpos: number = this.magicStartPos[1];
            return magpos;
        }
        public getMana(): number {
            return this.mana;
        }
        public getMagicTrue(): boolean {
            return this.magicTrue;
        }
        public getSpeed(): number {
            return this.speed;
        }
        public setLookL(n:boolean){
            this.lookL=n;
        }

        draw(): void {

            crc2.drawImage(this.personchar, this.xPos, this.yPos);
            //            crc2.beginPath();
            //            crc2.moveTo(this.xPos, this.yPos);
            //
            //            crc2.fillStyle = this.color;
            //            crc2.fillRect(this.xPos, this.yPos - 50, 10, 50);
            //            crc2.fillRect(this.xPos + 10, this.yPos - 40, 20, 7);
            //
            //
            //            crc2.beginPath();
            //            crc2.arc(this.xPos + 10, this.yPos - 50, 10, 0, 2 * Math.PI);
            //            crc2.fill();
        }

    }



}