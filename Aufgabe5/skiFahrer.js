var L06_Class;
(function (L06_Class) {
    var Ski = (function () {
        function Ski(_x, _y, _s) {
            this.x = _x;
            this.y = _y;
            this.speed = _s;
        }
        Ski.prototype.update = function () {
            this.move();
            this.draw();
        };
        Ski.prototype.move = function () {
            this.x += this.speed; // hier experimentieren um
            this.y += this.speed / 1.5; // andere Bewegungsmuster zu finden
            if (this.x >= 800) {
                this.x = -100;
                this.y = 100 * Math.random() + 100;
            }
        };
        Ski.prototype.draw = function () {
            L06_Class.crc3.beginPath();
            L06_Class.crc3.moveTo(this.x, this.y);
            L06_Class.crc3.fillStyle = "red";
            L06_Class.crc3.fillRect(this.x, this.y - 50, 10, 50);
            L06_Class.crc3.fillRect(this.x + 10, this.y - 40, 10, 5);
            L06_Class.crc3.fillStyle = "black";
            L06_Class.crc3.fillRect(this.x - 10, this.y, 50, 5);
            L06_Class.crc3.fillRect(this.x + 20, this.y - 40, 3, 40);
            L06_Class.crc3.beginPath();
            L06_Class.crc3.arc(this.x + 10, this.y - 50, 10, 0, 2 * Math.PI);
            L06_Class.crc3.fillStyle = 'black';
            L06_Class.crc3.fill();
        };
        Ski.prototype.setRandomStyle = function () {
            this.size = Math.random() * 30 + 10;
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        };
        return Ski;
    }());
    L06_Class.Ski = Ski;
})(L06_Class || (L06_Class = {}));
//# sourceMappingURL=skiFahrer.js.map