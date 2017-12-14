var L07_Class;
(function (L07_Class) {
    var MoveObj = (function () {
        function MoveObj(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        MoveObj.prototype.update = function () {
            this.move();
            this.draw();
        };
        MoveObj.prototype.move = function () {
        };
        MoveObj.prototype.draw = function () {
        };
        return MoveObj;
    }());
    L07_Class.MoveObj = MoveObj;
})(L07_Class || (L07_Class = {}));
//# sourceMappingURL=moveObj.js.map