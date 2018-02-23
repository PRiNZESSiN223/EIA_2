var RPG;
(function (RPG) {
    var Person = (function () {
        function Person(_xPos, _yPos, _speed, _color, _ground, _gravity, _objCol, _personChar, _drawMagicSrc) {
            this.jumpHeight = 40;
            this.personchar = new Image();
            this.drawMagic = new Image();
            this.lookL = false;
            this.status = 0;
            this.objCol = [];
            this.leben = 100;
            this.magicPos = 0;
            this.magicStartPos = [0, 0];
            this.magicTrue = false;
            this.magicL = false;
            this.magicR = false;
            this.mana = 100;
            this.xPos = _xPos;
            this.yPos = _yPos;
            this.speed = _speed;
            this.color = _color;
            this.right = false;
            this.left = false;
            this.ground = _ground;
            this.gravity = _gravity;
            this.personchar.src = _personChar;
            this.drawMagic.src = _drawMagicSrc;
            this.objCol = _objCol;
        }
        Person.prototype.update = function () {
            if (this.leben >= 0) {
                this.draw();
                this.move();
                this.gravitation();
                this.collision();
                this.magic();
                this.fillMana();
            }
        };
        Person.prototype.schaden = function (_schaden) {
            this.leben -= _schaden;
        };
        Person.prototype.collision = function () {
            for (var i = 0; i < this.objCol.length; i++) {
                if (this.xPos >= this.objCol[i][0] && this.xPos <= this.objCol[i][0] + this.objCol[i][1] - 3) {
                    this.xPos = this.objCol[i][0];
                }
                else if (this.xPos >= this.objCol[i][0] + 2 && this.xPos <= this.objCol[i][0] + this.objCol[i][1]) {
                    this.xPos = this.objCol[i][0] + this.objCol[i][1];
                }
            }
        };
        Person.prototype.magic = function () {
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
                        RPG.crc2.drawImage(this.drawMagic, this.magicStartPos[0] + this.magicPos, this.magicStartPos[1]);
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
                        RPG.crc2.drawImage(this.drawMagic, this.magicStartPos[0] + this.magicPos, this.magicStartPos[1]);
                    }
                    this.magicPos -= 5;
                    if (this.magicPos < -200) {
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
        };
        Person.prototype.magieSchaden = function (person) {
            if (this.getLeben() >= 0) {
                if (person.getMagicTrue() == true && person.getLeben() > 0) {
                    if (person.getMagicxPos() - 5 < this.getXPos() && person.getMagicxPos() + 5 > this.getXPos() && person.getMagicyPos() - 5 < this.getyPos() && person.getMagicyPos() + 5 > this.getyPos()) {
                        this.schaden(20);
                    }
                }
            }
        };
        Person.prototype.fillMana = function () {
            if (this.mana <= 0) {
                this.mana = 0;
            }
            if (this.mana <= 100) {
                this.mana += 0.2;
            }
        };
        Person.prototype.gravitation = function () {
            this.yPos += this.gravity;
            if (this.yPos > this.ground) {
                this.yPos = this.ground;
            }
            if (this.yPos <= this.ground - this.jumpHeight) {
                this.setGravity((this.gravity * (-1)));
            }
        };
        Person.prototype.move = function () {
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
        };
        Person.prototype.setGround = function (n) {
            this.ground = n;
        };
        Person.prototype.getGround = function () {
            return this.ground;
        };
        Person.prototype.getRight = function () {
            return this.right;
        };
        Person.prototype.getLeft = function () {
            return this.left;
        };
        Person.prototype.setGravity = function (setNumber) {
            this.gravity = setNumber;
        };
        Person.prototype.setRight = function (setBoolean) {
            this.right = setBoolean;
        };
        Person.prototype.setLeft = function (setBoolean) {
            this.left = setBoolean;
        };
        Person.prototype.setChar = function (setChar) {
            this.personchar.src = setChar;
        };
        Person.prototype.getLeben = function () {
            return this.leben;
        };
        Person.prototype.getLookL = function () {
            return this.lookL;
        };
        Person.prototype.getXPos = function () {
            return this.xPos;
        };
        Person.prototype.getyPos = function () {
            return this.yPos;
        };
        Person.prototype.getStatus = function () {
            return this.status;
        };
        Person.prototype.setStatus = function (_status) {
            this.status = _status;
        };
        Person.prototype.setxPos = function (_xPos) {
            this.xPos = _xPos;
        };
        Person.prototype.setMagicTrue = function (_magicTrue) {
            this.magicTrue = _magicTrue;
        };
        Person.prototype.getMagicxPos = function () {
            var magpos = this.magicPos + this.magicStartPos[0];
            return magpos;
        };
        Person.prototype.getMagicyPos = function () {
            var magpos = this.magicStartPos[1];
            return magpos;
        };
        Person.prototype.getMana = function () {
            return this.mana;
        };
        Person.prototype.getMagicTrue = function () {
            return this.magicTrue;
        };
        Person.prototype.getSpeed = function () {
            return this.speed;
        };
        Person.prototype.setLookL = function (n) {
            this.lookL = n;
        };
        Person.prototype.draw = function () {
            RPG.crc2.drawImage(this.personchar, this.xPos, this.yPos);
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
        };
        return Person;
    }());
    RPG.Person = Person;
})(RPG || (RPG = {}));
//# sourceMappingURL=Person.js.map