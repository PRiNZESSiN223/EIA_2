var RPG;
(function (RPG) {
    var Background = (function () {
        function Background(bg, _xWolke, _yWolke) {
            this.background = new Image();
            this.wdx = -0.3;
            this.background.src = bg;
            this.xWolke = _xWolke;
            this.yWolke = _yWolke;
        }
        Background.prototype.update = function () {
            this.draw();
        };
        Background.prototype.drawWolken = function () {
            RPG.crc2.beginPath();
            RPG.crc2.fillStyle = "black";
            this.xWolke += this.wdx;
            RPG.crc2.arc(this.xWolke, this.yWolke, 5, 0, 2 * Math.PI);
            RPG.crc2.arc(this.xWolke + 7, this.yWolke, 5, 0, 2 * Math.PI);
            RPG.crc2.arc(this.xWolke + 3.5, this.yWolke + 2.5, 5, 0, 2 * Math.PI);
            RPG.crc2.arc(this.xWolke + 3.5, this.yWolke - 2.5, 5, 0, 2 * Math.PI);
            RPG.crc2.fill();
            if (this.xWolke < -20) {
                this.xWolke = 820;
            }
        };
        Background.prototype.draw = function () {
            RPG.crc2.drawImage(this.background, 0, 0);
            //            let sky = crc2.createLinearGradient(0, 0, 0, 350);
            //            sky.addColorStop(0, "orange");
            //            sky.addColorStop(1, "white");
            //
            //            crc2.fillStyle = sky;
            //            crc2.fillRect(0, 0, 800, 600);
            //            
            //            let ground = crc2.createLinearGradient(0, 350, 0, 600);
            //            ground.addColorStop(0, "green");
            //            ground.addColorStop(1, "#3B170B");
            //
            //            crc2.fillStyle = ground;
            //            crc2.fillRect(0, 335, 800, 600);
        };
        return Background;
    }());
    RPG.Background = Background;
})(RPG || (RPG = {}));
//# sourceMappingURL=Background.js.map