var L05_Class;
(function (L05_Class) {
    var SkiFahrer = (function () {
        function SkiFahrer(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        SkiFahrer.prototype.update = function () {
            this.drawSki();
            this.gravity();
        };
        SkiFahrer.prototype.drawSki = function () {
            L05_Class.crc2.beginPath();
            L05_Class.crc2.moveTo(this.x, this.y);
            L05_Class.crc2.fillStyle = "red";
            L05_Class.crc2.fillRect(this.x, this.y - 50, 10, 50);
            L05_Class.crc2.fillRect(this.x + 10, this.y - 40, 10, 5);
            L05_Class.crc2.fillStyle = "black";
            L05_Class.crc2.fillRect(this.x - 10, this.y, 50, 5);
            L05_Class.crc2.fillRect(this.x + 20, this.y - 40, 3, 40);
            L05_Class.crc2.beginPath();
            L05_Class.crc2.arc(this.x + 10, this.y - 50, 10, 0, 2 * Math.PI);
            L05_Class.crc2.fillStyle = 'black';
            L05_Class.crc2.fill();
        };
        SkiFahrer.prototype.jump = function () {
            this.y -= 100;
        };
        SkiFahrer.prototype.gravity = function () {
            this.y += 5;
            if (this.y >= 300) {
                this.y = 300;
            }
        };
        return SkiFahrer;
    }());
    L05_Class.SkiFahrer = SkiFahrer;
})(L05_Class || (L05_Class = {}));
//# sourceMappingURL=skiFahrer.js.map