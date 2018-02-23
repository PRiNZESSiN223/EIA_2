var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var RPG;
(function (RPG) {
    var Enemy = (function (_super) {
        __extends(Enemy, _super);
        function Enemy(_xPos, _yPos, _speed, _color, _ground, _gravity, _personChar, _objCol, _mag, _person) {
            _super.call(this, _xPos, _yPos, _speed, _color, _ground, _gravity, _objCol, _personChar, _mag);
            this.attackI = 0;
            this.person = _person;
        }
        Enemy.prototype.attackPerson = function (_person) {
            if (_super.prototype.getLeben.call(this) > 0) {
                if (this.attackI >= 10) {
                    if ((_super.prototype.getXPos.call(this) + 22 >= _person.getXPos() && _super.prototype.getXPos.call(this) <= _person.getXPos()) || (_super.prototype.getXPos.call(this) - 22 <= _person.getXPos() && _super.prototype.getXPos.call(this) >= _person.getXPos())) {
                        _person.schaden(20);
                    }
                    this.attackI = 0;
                }
                this.attackI += 0.2;
            }
        };
        Enemy.prototype.magieSchaden = function () {
            if (_super.prototype.getLeben.call(this) >= 0) {
                if (this.person.getMagicTrue() == true) {
                    if (this.person.getMagicxPos() - 5 < _super.prototype.getXPos.call(this) && this.person.getMagicxPos() + 5 > _super.prototype.getXPos.call(this) && this.person.getMagicyPos() - 5 < _super.prototype.getyPos.call(this) && this.person.getMagicyPos() + 5 > _super.prototype.getyPos.call(this)) {
                        _super.prototype.schaden.call(this, 10);
                    }
                }
            }
        };
        Enemy.prototype.magieAttack = function (_person) {
            if (_super.prototype.getLeben.call(this) > 0) {
                if (this.attackI >= 10) {
                    if (Math.random() > 0.9) {
                        if ((_super.prototype.getXPos.call(this) + 150 >= _person.getXPos() && _super.prototype.getXPos.call(this) <= _person.getXPos()) || (_super.prototype.getXPos.call(this) - 150 <= _person.getXPos() && _super.prototype.getXPos.call(this) >= _person.getXPos())) {
                            _super.prototype.setMagicTrue.call(this, true);
                        }
                    }
                    this.attackI = 0;
                }
                this.attackI += 0.2;
            }
        };
        Enemy.prototype.getLookL = function () {
            return _super.prototype.getLookL.call(this);
        };
        Enemy.prototype.movetotarget = function (_person) {
            if (_super.prototype.getLeben.call(this) >= 0) {
                this.drawlebenEnemy();
                var xPosSave = _super.prototype.getXPos.call(this);
                if (_super.prototype.getStatus.call(this) >= 0) {
                    if (_super.prototype.getXPos.call(this) > _person.getXPos()) {
                        _super.prototype.setxPos.call(this, _super.prototype.getXPos.call(this) - 0.5);
                        _super.prototype.setChar.call(this, "Assats/img/CharL.png");
                        _super.prototype.setLookL.call(this, true);
                    }
                    if (_super.prototype.getXPos.call(this) < _person.getXPos()) {
                        _super.prototype.setxPos.call(this, _super.prototype.getXPos.call(this) + 0.5);
                        _super.prototype.setChar.call(this, "Assats/img/Char.png");
                        _super.prototype.setLookL.call(this, false);
                    }
                    if ((_super.prototype.getXPos.call(this) + 20 >= _person.getXPos() && _super.prototype.getXPos.call(this) <= _person.getXPos()) || (_super.prototype.getXPos.call(this) - 20 <= _person.getXPos() && _super.prototype.getXPos.call(this) >= _person.getXPos())) {
                        _super.prototype.setxPos.call(this, xPosSave);
                    }
                }
                if (_super.prototype.getStatus.call(this) >= 5) {
                    if (_super.prototype.getXPos.call(this) > _person.getXPos()) {
                        _super.prototype.setxPos.call(this, _super.prototype.getXPos.call(this) - 0.5);
                        _super.prototype.setChar.call(this, "Assats/img/CharMoveL.png");
                    }
                    if (_super.prototype.getXPos.call(this) < _person.getXPos()) {
                        _super.prototype.setxPos.call(this, _super.prototype.getXPos.call(this) + 0.5);
                        _super.prototype.setChar.call(this, "Assats/img/CharMove.png");
                    }
                    if ((_super.prototype.getXPos.call(this) + 20 >= _person.getXPos() && _super.prototype.getXPos.call(this) <= _person.getXPos()) || (_super.prototype.getXPos.call(this) - 20 <= _person.getXPos() && _super.prototype.getXPos.call(this) >= _person.getXPos())) {
                        _super.prototype.setxPos.call(this, xPosSave);
                    }
                }
                if (_super.prototype.getStatus.call(this) >= 10) {
                    _super.prototype.setStatus.call(this, 0);
                }
                _super.prototype.setStatus.call(this, _super.prototype.getStatus.call(this) + 1);
            }
        };
        Enemy.prototype.move = function () {
        };
        Enemy.prototype.drawlebenEnemy = function () {
            RPG.crc2.fillStyle = "red";
            RPG.crc2.fillRect(_super.prototype.getXPos.call(this) + 20, _super.prototype.getyPos.call(this), _super.prototype.getLeben.call(this) / 10, 2);
        };
        return Enemy;
    }(RPG.Person));
    RPG.Enemy = Enemy;
})(RPG || (RPG = {}));
//# sourceMappingURL=Enemy.js.map