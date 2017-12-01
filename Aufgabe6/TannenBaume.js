var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var L07_Class;
(function (L07_Class) {
    var Baume = (function (_super) {
        __extends(Baume, _super);
        function Baume(_x, _y) {
            _super.call(this, _x, _y);
        }
        Baume.prototype.draw = function () {
            //Stamm
            L07_Class.crc3.fillStyle = "#604629";
            L07_Class.crc3.fillRect(this.x, this.y, 20, 12);
            //Krone von unten nach oben
            L07_Class.crc3.fillStyle = "#517a17";
            L07_Class.crc3.beginPath();
            L07_Class.crc3.moveTo(this.x - 30, this.y);
            L07_Class.crc3.lineTo(this.x + 50, this.y);
            L07_Class.crc3.lineTo(this.x + 10, this.y - 70);
            L07_Class.crc3.fill();
            L07_Class.crc3.closePath();
            L07_Class.crc3.fillStyle = "#517a17";
            L07_Class.crc3.beginPath();
            L07_Class.crc3.moveTo(this.x - 25, this.y - 20);
            L07_Class.crc3.lineTo(this.x + 45, this.y - 20);
            L07_Class.crc3.lineTo(this.x + 10, this.y - 100);
            L07_Class.crc3.fill();
            L07_Class.crc3.closePath();
        };
        return Baume;
    }(L07_Class.MoveObj));
    L07_Class.Baume = Baume;
})(L07_Class || (L07_Class = {}));
//# sourceMappingURL=TannenBaume.js.map