var L05_Class;
(function (L05_Class) {
    var Hintergrund = (function () {
        function Hintergrund(_x, _y, _c) {
            this.x = _x;
            this.y = _y;
            this.color = _c;
        }
        Hintergrund.prototype.update = function () {
        };
        Hintergrund.prototype.move = function (x) {
            this.x += x; // hier experimentieren um
        };
        Hintergrund.prototype.drawHintergrund = function () {
            this.drawSky();
            this.drawMountain();
            this.drawPiste();
        };
        Hintergrund.prototype.drawSky = function () {
            L05_Class.crc2.fillStyle = "#A9E2F3";
            L05_Class.crc2.fillRect(this.x - 20, this.y, 900, 600);
        };
        Hintergrund.prototype.drawPiste = function () {
            L05_Class.crc2.fillStyle = "#FFF";
            L05_Class.crc2.fillRect(this.x - 300, this.y + 300, 1200, 600);
        };
        Hintergrund.prototype.drawMountain = function () {
            for (var i = 0; i < 5; i++) {
                this.setRandomStyle();
                L05_Class.crc2.beginPath();
                L05_Class.crc2.moveTo(this.x + (i * 180), this.y + (this.size / 10));
                L05_Class.crc2.lineWidth = 1;
                L05_Class.crc2.lineTo(this.x + (i * 180) + this.size / 3, this.y + this.size);
                L05_Class.crc2.lineTo(this.x + (i * 180) - this.size / 3, this.y + this.size);
                if (this.color == 0) {
                    L05_Class.crc2.fillStyle = "#666";
                }
                else {
                    L05_Class.crc2.fillStyle = "red";
                }
                L05_Class.crc2.fill();
            }
        };
        Hintergrund.prototype.setRandomStyle = function () {
            this.size = 200 + 300;
        };
        Hintergrund.prototype.setPosR = function () {
            this.x = 800;
        };
        Hintergrund.prototype.setPosL = function () {
            this.x = -800;
        };
        return Hintergrund;
    }());
    L05_Class.Hintergrund = Hintergrund;
})(L05_Class || (L05_Class = {}));
//# sourceMappingURL=hintergrund.js.map