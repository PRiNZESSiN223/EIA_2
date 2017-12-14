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
            L07_Class.crc3.fillStyle = "brown";
            L07_Class.crc3.fillRect(this.x, this.y, 50, 100);
            L07_Class.crc3.beginPath();
            L07_Class.crc3.arc(this.x + 25, this.y - 20, 50, 0, 2 * Math.PI);
            L07_Class.crc3.fillStyle = "green";
            L07_Class.crc3.fill();
        };
        return Baume;
    }(L07_Class.MoveObj));
    L07_Class.Baume = Baume;
})(L07_Class || (L07_Class = {}));
//# sourceMappingURL=TannenBaume.js.map