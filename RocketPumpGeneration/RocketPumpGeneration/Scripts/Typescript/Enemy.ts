namespace RPG {

    export class Enemy extends Person {
        private person: Person;
        private attackI: number = 0;
        constructor(_xPos: number, _yPos: number, _speed: number, _color: string, _ground: number, _gravity: number, _personChar: string, _objCol: number[][], _mag: string, _person: Person) {

            super(_xPos, _yPos, _speed, _color, _ground, _gravity, _objCol, _personChar, _mag);
            this.person = _person;
        }


        public attackPerson(_person: Person): void {
            if (super.getLeben() > 0) {
                if (this.attackI >= 10) {
                    if ((super.getXPos() + 22 >= _person.getXPos() && super.getXPos() <= _person.getXPos()) || (super.getXPos() - 22 <= _person.getXPos() && super.getXPos() >= _person.getXPos())) {
                        _person.schaden(20);
                    }

                    this.attackI = 0;

                }
                this.attackI += 0.2;
            }
        }
        public magieSchaden(): void {
            if (super.getLeben() >= 0) {
                if (this.person.getMagicTrue() == true) {
                    if (this.person.getMagicxPos() - 5 < super.getXPos() && this.person.getMagicxPos() + 5 > super.getXPos()&&this.person.getMagicyPos() - 5 < super.getyPos() && this.person.getMagicyPos() + 5 > super.getyPos()) {
                        super.schaden(10);
                    }
                }
            }
        }
        public magieAttack(_person: Person):void{
             if (super.getLeben() > 0) {
                if (this.attackI >= 10) {
                    if(Math.random() > 0.9){
                    if ((super.getXPos() + 150 >= _person.getXPos() && super.getXPos() <= _person.getXPos()) || (super.getXPos() - 150 <= _person.getXPos() && super.getXPos() >= _person.getXPos())) {
                        super.setMagicTrue(true);   
                    }
}
                    this.attackI = 0;

                }
                this.attackI += 0.2;
            }
             
        }
        getLookL():boolean{          
            return super.getLookL();  
        }
        public movetotarget(_person: Person): void {
            if (super.getLeben() >= 0) {
                this.drawlebenEnemy();
                let xPosSave: number = super.getXPos();
                if (super.getStatus() >= 0) {

                    if (super.getXPos() > _person.getXPos()) {
                        super.setxPos(super.getXPos() - 0.5);
                        super.setChar("Assats/img/CharL.png");
                        super.setLookL(true);
                    }

                    if (super.getXPos() < _person.getXPos()) {
                        super.setxPos(super.getXPos() + 0.5);
                        super.setChar("Assats/img/Char.png");
                        super.setLookL(false);

                    }
                    if ((super.getXPos() + 20 >= _person.getXPos() && super.getXPos() <= _person.getXPos()) || (super.getXPos() - 20 <= _person.getXPos() && super.getXPos() >= _person.getXPos())) {
                        super.setxPos(xPosSave);


                    }

                }
                if (super.getStatus() >= 5) {

                    if (super.getXPos() > _person.getXPos()) {
                        super.setxPos(super.getXPos() - 0.5);
                        super.setChar("Assats/img/CharMoveL.png");
                    }

                    if (super.getXPos() < _person.getXPos()) {
                        super.setxPos(super.getXPos() + 0.5);
                        super.setChar("Assats/img/CharMove.png");

                    }
                    if ((super.getXPos() + 20 >= _person.getXPos() && super.getXPos() <= _person.getXPos()) || (super.getXPos() - 20 <= _person.getXPos() && super.getXPos() >= _person.getXPos())) {
                        super.setxPos(xPosSave);


                    }
                }
                if (super.getStatus() >= 10) {
                    super.setStatus(0);
                }
                super.setStatus(super.getStatus() + 1);
            }
        }
        public move(): void {

        }
        drawlebenEnemy(): void {
            crc2.fillStyle = "red";
            crc2.fillRect(super.getXPos() + 20, super.getyPos(), super.getLeben() / 10, 2);
        }

    }
}