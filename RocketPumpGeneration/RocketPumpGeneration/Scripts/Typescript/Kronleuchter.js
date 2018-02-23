var RPG;
(function (RPG) {
    var Kronleuchter = (function () {
        function Kronleuchter(_xPos, _yPos, _kroneImage, _halterImage, _person) {
            this.kroneImage = new Image();
            this.halterImage = new Image();
            this.fall = false;
            this.xPos = _xPos;
            this.yPos = _yPos;
            this.yPosK = _yPos;
            this.kroneImage.src = _kroneImage;
            this.halterImage.src = _halterImage;
            this.person = _person;
        }
        Kronleuchter.prototype.update = function () {
            this.drawHalter();
            this.drawKron();
            this.move();
        };
        Kronleuchter.prototype.move = function () {
            if (this.fall == true) {
                this.yPosK += 2;
            }
        };
        Kronleuchter.prototype.setFall = function (n) {
            this.fall = n;
        };
        Kronleuchter.prototype.getXpos = function () {
            return this.xPos;
        };
        Kronleuchter.prototype.getYposK = function () {
            return this.yPosK;
        };
        Kronleuchter.prototype.getFall = function () {
            return this.fall;
        };
        Kronleuchter.prototype.drawHalter = function () {
            RPG.crc2.drawImage(this.halterImage, this.xPos, this.yPos);
        };
        Kronleuchter.prototype.drawKron = function () {
            RPG.crc2.drawImage(this.kroneImage, this.xPos, this.yPosK);
        };
        return Kronleuchter;
    }());
    RPG.Kronleuchter = Kronleuchter;
})(RPG || (RPG = {}));
//# sourceMappingURL=Kronleuchter.js.map