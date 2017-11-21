var L06_Class;
(function (L06_Class) {
    var Hintergrund = (function () {
        function Hintergrund(_x, _y, _c) {
            this.size = [];
            this.x = _x;
            this.y = _y;
            this.color = _c;
        }
        Hintergrund.prototype.drawHintergrund = function () {
            this.drawSky();
            this.drawMountain();
            this.drawPiste();
            this.drawLift();
        };
        Hintergrund.prototype.drawSky = function () {
            L06_Class.crc3.fillStyle = "#A9E2F3";
            L06_Class.crc3.fillRect(this.x - 20, this.y, 900, 600);
        };
        Hintergrund.prototype.drawPiste = function () {
            L06_Class.crc3.fillStyle = "#FFF";
            L06_Class.crc3.beginPath();
            L06_Class.crc3.moveTo(this.x, this.y + 100);
            L06_Class.crc3.lineTo(800, 600);
            L06_Class.crc3.lineTo(0, 600);
            L06_Class.crc3.fill();
        };
        Hintergrund.prototype.drawLift = function () {
            L06_Class.crc3.beginPath();
            L06_Class.crc3.moveTo(this.x, this.y);
            L06_Class.crc3.lineTo(800, 550);
            L06_Class.crc3.lineWidth = 2;
            L06_Class.crc3.strokeStyle = 'black';
            L06_Class.crc3.stroke();
            L06_Class.crc3.fillStyle = "grey";
            L06_Class.crc3.fillRect(this.x + 250, this.y + 170, 10, 100);
            L06_Class.crc3.fillRect(this.x + 200, this.y + 200, 100, 100);
            L06_Class.crc3.fillStyle = "white";
            L06_Class.crc3.fillRect(this.x + 210, this.y + 210, 80, 80);
        };
        Hintergrund.prototype.drawMountain = function () {
            for (var i = 0; i < 5; i++) {
                L06_Class.crc3.beginPath();
                L06_Class.crc3.moveTo(this.x + (i * 180), this.y + (this.size[i] / 2));
                L06_Class.crc3.lineWidth = 1;
                L06_Class.crc3.lineTo(this.x + (i * 180) + this.size[i] * 2, this.y + this.size[i] + 500);
                L06_Class.crc3.lineTo(this.x + (i * 180) - this.size[i] * 2, this.y + this.size[i] + 500);
                if (this.color == 0) {
                    L06_Class.crc3.fillStyle = "#666";
                }
                else {
                    L06_Class.crc3.fillStyle = "red";
                }
                L06_Class.crc3.fill();
            }
        };
        Hintergrund.prototype.setRandomStyle = function () {
            for (var i = 0; i < 5; i++) {
                this.size[i] = Math.random() * 200 + 50;
            }
        };
        return Hintergrund;
    }());
    L06_Class.Hintergrund = Hintergrund;
})(L06_Class || (L06_Class = {}));
//# sourceMappingURL=background.js.map