var RPG;
(function (RPG) {
    var Boss = (function () {
        function Boss(_xPos, _yPos, _bossImage, _person) {
            this.bossImage = new Image();
            this.leben = 600;
            this.speed = 0.4;
            this.xPos = _xPos;
            this.yPos = _yPos;
            this.bossImage.src = _bossImage;
            this.person = _person;
        }
        Boss.prototype.update = function () {
            if (this.leben > 0) {
                this.draw();
                this.move();
            }
        };
        Boss.prototype.move = function () {
            this.xPos += this.speed;
            if (this.xPos > 200) {
                this.xPos = 200;
                this.speed *= -1;
            }
            else if (this.xPos < 10) {
                this.xPos = 10;
                this.speed *= -1;
            }
        };
        Boss.prototype.attack = function () {
        };
        Boss.prototype.attackEnd = function () {
        };
        Boss.prototype.followObj = function (_xPos, _yPos) {
        };
        Boss.prototype.setChar = function (setChar) {
            this.bossImage.src = setChar;
        };
        Boss.prototype.setSchaden = function () {
            this.leben -= 200;
        };
        Boss.prototype.getXpos = function () {
            return this.xPos;
        };
        Boss.prototype.getYpos = function () {
            return this.yPos;
        };
        Boss.prototype.getLeben = function () {
            return this.leben;
        };
        Boss.prototype.drawLeben = function () {
            RPG.crc2.fillStyle = "#6A0606";
            RPG.crc2.fillRect(100, 420, 600, 5);
            RPG.crc2.fillStyle = "red";
            RPG.crc2.fillRect(100, 420, this.leben, 5);
            RPG.crc2.fillStyle = "black";
            RPG.crc2.fillRect(this.leben + 100, 415, 2, 15);
        };
        Boss.prototype.draw = function () {
            RPG.crc2.scale(2, 2);
            RPG.crc2.drawImage(this.bossImage, this.xPos, this.yPos);
            RPG.crc2.scale(0.5, 0.5);
        };
        return Boss;
    }());
    RPG.Boss = Boss;
})(RPG || (RPG = {}));
//# sourceMappingURL=Boss.js.map