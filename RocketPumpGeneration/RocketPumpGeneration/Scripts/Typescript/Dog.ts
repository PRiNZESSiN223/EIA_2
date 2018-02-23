namespace RPG {

    export class Dog extends Person {
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
                        _person.schaden(5);
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
        
        public movetotarget(_person: Person): void {
            if (super.getLeben() >= 0) {
                this.drawlebenEnemy();
                let xPosSave: number = super.getXPos();
                if (super.getStatus() >= 0) {

                    if (super.getXPos() > _person.getXPos()) {
                        super.setxPos(super.getXPos() - super.getSpeed());
                        super.setChar("Assats/img/hundIdle.png");
                    }

                    if (super.getXPos() < _person.getXPos()) {
                        super.setxPos(super.getXPos() +super.getSpeed());
                        super.setChar("Assats/img/hundIdleL.png");

                    }
                    if ((super.getXPos() + 20 >= _person.getXPos() && super.getXPos() <= _person.getXPos()) || (super.getXPos() - 20 <= _person.getXPos() && super.getXPos() >= _person.getXPos())) {
                        super.setxPos(xPosSave);


                    }

                }
                if (super.getStatus() >= 5) {

                    if (super.getXPos() > _person.getXPos()) {
                        super.setxPos(super.getXPos() - super.getSpeed());
                        super.setChar("Assats/img/hundIdleLaufenL.png");
                    }

                    if (super.getXPos() < _person.getXPos()) {
                        super.setxPos(super.getXPos() + super.getSpeed());
                        super.setChar("Assats/img/hundIdleLaufenR.png");

                    }
                    if ((super.getXPos() + 20 >= _person.getXPos() && super.getXPos() <= _person.getXPos()) || (super.getXPos() - 20 <= _person.getXPos() && super.getXPos() >= _person.getXPos())) {
                        super.setxPos(xPosSave);


                    }
                }
                 if (super.getStatus() >= 10) {

                    if (super.getXPos() > _person.getXPos()) {
                        super.setxPos(super.getXPos() - super.getSpeed());
                        super.setChar("Assats/img/hundIdle.png");
                    }

                    if (super.getXPos() < _person.getXPos()) {
                        super.setxPos(super.getXPos() + super.getSpeed());
                        super.setChar("Assats/img/hundIdleL.png");

                    }
                    if ((super.getXPos() + 20 >= _person.getXPos() && super.getXPos() <= _person.getXPos()) || (super.getXPos() - 20 <= _person.getXPos() && super.getXPos() >= _person.getXPos())) {
                        super.setxPos(xPosSave);


                    }

                }
                 if (super.getStatus() >= 15) {

                    if (super.getXPos() > _person.getXPos()) {
                        super.setxPos(super.getXPos() - super.getSpeed());
                        super.setChar("Assats/img/hundIdleLaufenR2.png");
                    }

                    if (super.getXPos() < _person.getXPos()) {
                        super.setxPos(super.getXPos() + super.getSpeed());
                        super.setChar("Assats/img/hundIdleLaufenL2.png");

                    }
                    if ((super.getXPos() + 20 >= _person.getXPos() && super.getXPos() <= _person.getXPos()) || (super.getXPos() - 20 <= _person.getXPos() && super.getXPos() >= _person.getXPos())) {
                        super.setxPos(xPosSave);


                    }
                }
                if (super.getStatus() >= 20) {
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