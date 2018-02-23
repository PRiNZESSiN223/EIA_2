var RPG;
(function (RPG) {
    var House = (function () {
        function House(_xPos, _yPos) {
            this.xPos = _xPos;
            this.yPos = _yPos;
        }
        House.prototype.update = function () {
            this.draw();
        };
        House.prototype.getxDoor = function () {
            return this.xDoor;
        };
        House.prototype.draw = function () {
            RPG.crc2.beginPath();
            RPG.crc2.fillStyle = "grey";
            RPG.crc2.moveTo(this.xPos, this.yPos + 35);
            RPG.crc2.fillRect(this.xPos, this.yPos + 35, -100, -50);
            //Turm
            RPG.crc2.fillStyle = "grey";
            RPG.crc2.fillRect(this.xPos, this.yPos + 35, 110, -100);
            RPG.crc2.fillRect(this.xPos, this.yPos - 65, 10, -10);
            RPG.crc2.fillRect(this.xPos + 20, this.yPos - 65, 10, -10);
            RPG.crc2.fillRect(this.xPos + 40, this.yPos - 65, 10, -10);
            RPG.crc2.fillRect(this.xPos + 60, this.yPos - 65, 10, -10);
            RPG.crc2.fillRect(this.xPos + 80, this.yPos - 65, 10, -10);
            RPG.crc2.fillRect(this.xPos + 100, this.yPos - 65, 10, -10);
            RPG.crc2.fillStyle = "black";
            RPG.crc2.fillRect(this.xPos + 40, this.yPos + 30, 25, -30);
            //Turm
            RPG.crc2.fillStyle = "grey";
            RPG.crc2.fillRect(this.xPos - 200, this.yPos + 35, 110, -100);
            RPG.crc2.fillRect(this.xPos - 200, this.yPos - 65, 10, -10);
            RPG.crc2.fillRect(this.xPos - 180, this.yPos - 65, 10, -10);
            RPG.crc2.fillRect(this.xPos - 160, this.yPos - 65, 10, -10);
            RPG.crc2.fillRect(this.xPos - 140, this.yPos - 65, 10, -10);
            RPG.crc2.fillRect(this.xPos - 120, this.yPos - 65, 10, -10);
            RPG.crc2.fillRect(this.xPos - 100, this.yPos - 65, 10, -10);
            RPG.crc2.fillStyle = "black";
            RPG.crc2.fillRect(this.xPos - 160, this.yPos + 30, 25, -30);
        };
        return House;
    }());
    RPG.House = House;
})(RPG || (RPG = {}));
//# sourceMappingURL=House.js.map