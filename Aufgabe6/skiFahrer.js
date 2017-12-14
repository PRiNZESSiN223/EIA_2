var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var L07_Class;
(function (L07_Class) {
    var Ski = (function (_super) {
        __extends(Ski, _super);
        function Ski(_x, _y) {
            _super.call(this, _x, _y);
            this.speed = Math.random() + 4;
        }
        Ski.prototype.update = function () {
            this.move();
            this.draw();
        };
        Ski.prototype.move = function () {
            this.x += this.speed; // hier experimentieren um
            this.y += this.speed / 1.5; // andere Bewegungsmuster zu finden
            if (this.x > 800) {
                this.x = -30;
                this.y = 100 * Math.random() + 100;
            }
        };
        Ski.prototype.draw = function () {
            L07_Class.crc3.beginPath();
            L07_Class.crc3.moveTo(this.x, this.y);
            L07_Class.crc3.fillStyle = "red";
            L07_Class.crc3.fillRect(this.x, this.y - 50, 10, 50);
            L07_Class.crc3.fillRect(this.x + 10, this.y - 40, 10, 5);
            L07_Class.crc3.fillStyle = "black";
            L07_Class.crc3.fillRect(this.x - 10, this.y, 50, 5);
            L07_Class.crc3.fillRect(this.x + 20, this.y - 40, 3, 40);
            L07_Class.crc3.beginPath();
            L07_Class.crc3.arc(this.x + 10, this.y - 50, 10, 0, 2 * Math.PI);
            L07_Class.crc3.fillStyle = 'black';
            L07_Class.crc3.fill();
        };
        return Ski;
    }(L07_Class.MoveObj));
    L07_Class.Ski = Ski;
})(L07_Class || (L07_Class = {}));
//# sourceMappingURL=skiFahrer.js.map