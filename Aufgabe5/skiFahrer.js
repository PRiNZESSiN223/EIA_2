var L06_Class;
(function (L06_Class) {
    var Ski = (function () {
        function Ski(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        Ski.prototype.update = function () {
            this.move();
            this.draw();
        };
        Ski.prototype.move = function () {
            this.x += 4; // hier experimentieren um
            this.y += 4; // andere Bewegungsmuster zu finden
        };
        Ski.prototype.draw = function () {
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.fillStyle = "red";
            crc2.fillRect(this.x, this.y - 50, 10, 50);
            crc2.fillRect(this.x + 10, this.y - 40, 10, 5);
            crc2.fillStyle = "black";
            crc2.fillRect(this.x - 10, this.y, 50, 5);
            crc2.fillRect(this.x + 20, this.y - 40, 3, 40);
            crc2.beginPath();
            crc2.arc(this.x + 10, this.y - 50, 10, 0, 2 * Math.PI);
            crc2.fillStyle = 'black';
            crc2.fill();
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