var L06_Class;
(function (L06_Class) {
    var Baume = (function () {
        function Baume(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        Baume.prototype.draw = function () {
            L06_Class.crc3.fillStyle = "brown";
            L06_Class.crc3.fillRect(this.x, this.y, 50, 100);
            L06_Class.crc3.beginPath();
            L06_Class.crc3.arc(this.x + 25, this.y - 20, 50, 0, 2 * Math.PI);
            L06_Class.crc3.fillStyle = "green";
            L06_Class.crc3.fill();
        };
        return Baume;
    }());
    L06_Class.Baume = Baume;
})(L06_Class || (L06_Class = {}));
//# sourceMappingURL=TannenBaume.js.map