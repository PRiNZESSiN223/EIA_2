var RPG;
(function (RPG) {
    var Weapon = (function () {
        function Weapon(_xPos, _yPos, _color, _weaponsrc, _person) {
            this.weaponsrc = new Image();
            this.xPos = _xPos;
            this.yPos = _yPos;
            this.color = _color;
            this.weaponsrc.src = _weaponsrc;
            this.person = _person;
        }
        Weapon.prototype.shoot = function () {
        };
        Weapon.prototype.update = function () {
            if (this.person.getLeben() >= 0) {
                this.draw();
            }
        };
        Weapon.prototype.attack = function () {
            if (this.person.getLookL() == true) {
                this.setChar("Assats/img/SwordAttackL.png");
            }
            else {
                this.setChar("Assats/img/SwordAttack.png");
            }
        };
        Weapon.prototype.attackEnd = function () {
            if (this.person.getLookL() == false) {
                this.setChar("Assats/img/Sword.png");
            }
            else {
                this.setChar("Assats/img/SwordL.png");
            }
        };
        Weapon.prototype.followObj = function (_xPos, _yPos) {
            this.xPos = _xPos;
            this.yPos = _yPos;
            //            if(_event.key == "w"){
            //                this.yPos = this.yPos+1;   
            //            }
            //            if(_event.key == "s"){
            //    this.yPos = this.yPos-1;   
            //            }
        };
        Weapon.prototype.setChar = function (setChar) {
            this.weaponsrc.src = setChar;
        };
        Weapon.prototype.draw = function () {
            RPG.crc2.drawImage(this.weaponsrc, this.xPos, this.yPos);
            //            crc2.beginPath();
            //            crc2.moveTo(this.xPos, this.yPos);
            //
            //            crc2.fillStyle = this.color;
            //            crc2.fillRect(this.xPos, this.yPos -43, 50, 5);
            //            crc2.fillRect(this.xPos+25, this.yPos -43,           //            crc2.fillRect(this.xPos, this.yPos -43, 5, 10);
        };
        return Weapon;
    }());
    RPG.Weapon = Weapon;
})(RPG || (RPG = {}));
//# sourceMappingURL=Weapon.js.map