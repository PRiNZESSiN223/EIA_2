namespace RPG {

    export class Weapon {
        private xPos: number;
        private yPos: number;
        private attackSt: number;
        private color: string;
        private kugelXpos: number;
        private weaponsrc: any = new Image();
        private person: Person;
        constructor(_xPos: number, _yPos: number, _color: string, _weaponsrc: string, _person: Person) {

            this.xPos = _xPos;
            this.yPos = _yPos;
            this.color = _color;
            this.weaponsrc.src = _weaponsrc;
            this.person = _person;

        }


        shoot() {

        }
        public update(): void {
            if(this.person.getLeben() >= 0){
            this.draw();
                }
        }

        public attack(): void {
            if (this.person.getLookL() == true) {
                this.setChar("Assats/img/SwordAttackL.png");
            }

            else {
                this.setChar("Assats/img/SwordAttack.png");

            }
        }
        public attackEnd(): void {
            if (this.person.getLookL() == false) {
                this.setChar("Assats/img/Sword.png");
            }
            else {
                this.setChar("Assats/img/SwordL.png");
            }
        }
        public followObj(_xPos: number, _yPos: number): void {
            this.xPos = _xPos;
            this.yPos = _yPos;


            //            if(_event.key == "w"){
            //                this.yPos = this.yPos+1;   
            //            }
            //            if(_event.key == "s"){
            //    this.yPos = this.yPos-1;   
            //            }


        }
        public setChar(setChar: string) {
            this.weaponsrc.src = setChar;
        }




        public draw(): void {
            crc2.drawImage(this.weaponsrc, this.xPos, this.yPos);
            //            crc2.beginPath();
            //            crc2.moveTo(this.xPos, this.yPos);
            //
            //            crc2.fillStyle = this.color;
            //            crc2.fillRect(this.xPos, this.yPos -43, 50, 5);
            //            crc2.fillRect(this.xPos+25, this.yPos -43,           //            crc2.fillRect(this.xPos, this.yPos -43, 5, 10);

           
        }

    }



}