var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var L07_Class;
(function (L07_Class) {
    var Wolke = (function (_super) {
        __extends(Wolke, _super);
        function Wolke(_x, _y) {
            _super.call(this, _x, _y);
            this.speed = Math.random() + 1;
        }
        Wolke.prototype.update = function () {
            this.move();
            this.draw();
        };
        Wolke.prototype.move = function () {
            this.x += this.speed; // hier experimentieren um
            // andere Bewegungsmuster zu finden
            if (this.x >= 800) {
                this.x = -100;
            }
        };
        Wolke.prototype.draw = function () {
            L07_Class.crc3.beginPath();
            L07_Class.crc3.arc(this.x, 70, 30, 0, 2 * Math.PI);
            L07_Class.crc3.fillStyle = "#FAFAFA";
            L07_Class.crc3.fill();
            L07_Class.crc3.beginPath();
            L07_Class.crc3.arc(this.x + 60, 70, 30, 0, 2 * Math.PI);
            L07_Class.crc3.fillStyle = "#FAFAFA";
            L07_Class.crc3.fill();
            L07_Class.crc3.beginPath();
            L07_Class.crc3.arc(this.x + 30, 55, 30, 0, 2 * Math.PI);
            L07_Class.crc3.fillStyle = "#FAFAFA";
            L07_Class.crc3.fill();
            L07_Class.crc3.beginPath();
            L07_Class.crc3.arc(this.x + 30, 85, 30, 0, 2 * Math.PI);
            L07_Class.crc3.fillStyle = "#FAFAFA";
            L07_Class.crc3.fill();
        };
        return Wolke;
    }(L07_Class.MoveObj));
    L07_Class.Wolke = Wolke;
})(L07_Class || (L07_Class = {}));
//# sourceMappingURL=wolken.js.map