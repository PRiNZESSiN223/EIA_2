var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var RPG;
(function (RPG) {
    var Dog = (function (_super) {
        __extends(Dog, _super);
        function Dog(_xPos, _yPos, _speed, _color, _ground, _gravity, _personChar, _objCol, _mag, _person) {
            _super.call(this, _xPos, _yPos, _speed, _color, _ground, _gravity, _objCol, _personChar, _mag);
            this.attackI = 0;
            this.person = _person;
        }
        Dog.prototype.attackPerson = function (_person) {
            if (_super.prototype.getLeben.call(this) > 0) {
                if (this.attackI >= 10) {
                    if ((_super.prototype.getXPos.call(this) + 22 >= _person.getXPos() && _super.prototype.getXPos.call(this) <= _person.getXPos()) || (_super.prototype.getXPos.call(this) - 22 <= _person.getXPos() && _super.prototype.getXPos.call(this) >= _person.getXPos())) {
                        _person.schaden(5);
                    }
                    this.attackI = 0;
                }
                this.attackI += 0.2;
            }
        };
        Dog.prototype.magieSchaden = function () {
            if (_super.prototype.getLeben.call(this) >= 0) {
                if (this.person.getMagicTrue() == true) {
                    if (this.person.getMagicxPos() - 5 < _super.prototype.getXPos.call(this) && this.person.getMagicxPos() + 5 > _super.prototype.getXPos.call(this) && this.person.getMagicyPos() - 5 < _super.prototype.getyPos.call(this) && this.person.getMagicyPos() + 5 > _super.prototype.getyPos.call(this)) {
                        _super.prototype.schaden.call(this, 10);
                    }
                }
            }
        };
        Dog.prototype.movetotarget = function (_person) {
            if (_super.prototype.getLeben.call(this) >= 0) {
                this.drawlebenEnemy();
                var xPosSave = _super.prototype.getXPos.call(this);
                if (_super.prototype.getStatus.call(this) >= 0) {
                    if (_super.prototype.getXPos.call(this) > _person.getXPos()) {
                        _super.prototype.setxPos.call(this, _super.prototype.getXPos.call(this) - _super.prototype.getSpeed.call(this));
                        _super.prototype.setChar.call(this, "Assats/img/hundIdle.png");
                    }
                    if (_super.prototype.getXPos.call(this) < _person.getXPos()) {
                        _super.prototype.setxPos.call(this, _super.prototype.getXPos.call(this) + _super.prototype.getSpeed.call(this));
                        _super.prototype.setChar.call(this, "Assats/img/hundIdleL.png");
                    }
                    if ((_super.prototype.getXPos.call(this) + 20 >= _person.getXPos() && _super.prototype.getXPos.call(this) <= _person.getXPos()) || (_super.prototype.getXPos.call(this) - 20 <= _person.getXPos() && _super.prototype.getXPos.call(this) >= _person.getXPos())) {
                        _super.prototype.setxPos.call(this, xPosSave);
                    }
                }
                if (_super.prototype.getStatus.call(this) >= 5) {
                    if (_super.prototype.getXPos.call(this) > _person.getXPos()) {
                        _super.prototype.setxPos.call(this, _super.prototype.getXPos.call(this) - _super.prototype.getSpeed.call(this));
                        _super.prototype.setChar.call(this, "Assats/img/hundIdleLaufenL.png");
                    }
                    if (_super.prototype.getXPos.call(this) < _person.getXPos()) {
                        _super.prototype.setxPos.call(this, _super.prototype.getXPos.call(this) + _super.prototype.getSpeed.call(this));
                        _super.prototype.setChar.call(this, "Assats/img/hundIdleLaufenR.png");
                    }
                    if ((_super.prototype.getXPos.call(this) + 20 >= _person.getXPos() && _super.prototype.getXPos.call(this) <= _person.getXPos()) || (_super.prototype.getXPos.call(this) - 20 <= _person.getXPos() && _super.prototype.getXPos.call(this) >= _person.getXPos())) {
                        _super.prototype.setxPos.call(this, xPosSave);
                    }
                }
                if (_super.prototype.getStatus.call(this) >= 10) {
                    if (_super.prototype.getXPos.call(this) > _person.getXPos()) {
                        _super.prototype.setxPos.call(this, _super.prototype.getXPos.call(this) - _super.prototype.getSpeed.call(this));
                        _super.prototype.setChar.call(this, "Assats/img/hundIdle.png");
                    }
                    if (_super.prototype.getXPos.call(this) < _person.getXPos()) {
                        _super.prototype.setxPos.call(this, _super.prototype.getXPos.call(this) + _super.prototype.getSpeed.call(this));
                        _super.prototype.setChar.call(this, "Assats/img/hundIdleL.png");
                    }
                    if ((_super.prototype.getXPos.call(this) + 20 >= _person.getXPos() && _super.prototype.getXPos.call(this) <= _person.getXPos()) || (_super.prototype.getXPos.call(this) - 20 <= _person.getXPos() && _super.prototype.getXPos.call(this) >= _person.getXPos())) {
                        _super.prototype.setxPos.call(this, xPosSave);
                    }
                }
                if (_super.prototype.getStatus.call(this) >= 15) {
                    if (_super.prototype.getXPos.call(this) > _person.getXPos()) {
                        _super.prototype.setxPos.call(this, _super.prototype.getXPos.call(this) - _super.prototype.getSpeed.call(this));
                        _super.prototype.setChar.call(this, "Assats/img/hundIdleLaufenR2.png");
                    }
                    if (_super.prototype.getXPos.call(this) < _person.getXPos()) {
                        _super.prototype.setxPos.call(this, _super.prototype.getXPos.call(this) + _super.prototype.getSpeed.call(this));
                        _super.prototype.setChar.call(this, "Assats/img/hundIdleLaufenL2.png");
                    }
                    if ((_super.prototype.getXPos.call(this) + 20 >= _person.getXPos() && _super.prototype.getXPos.call(this) <= _person.getXPos()) || (_super.prototype.getXPos.call(this) - 20 <= _person.getXPos() && _super.prototype.getXPos.call(this) >= _person.getXPos())) {
                        _super.prototype.setxPos.call(this, xPosSave);
                    }
                }
                if (_super.prototype.getStatus.call(this) >= 20) {
                    _super.prototype.setStatus.call(this, 0);
                }
                _super.prototype.setStatus.call(this, _super.prototype.getStatus.call(this) + 1);
            }
        };
        Dog.prototype.move = function () {
        };
        Dog.prototype.drawlebenEnemy = function () {
            RPG.crc2.fillStyle = "red";
            RPG.crc2.fillRect(_super.prototype.getXPos.call(this) + 20, _super.prototype.getyPos.call(this), _super.prototype.getLeben.call(this) / 10, 2);
        };
        return Dog;
    }(RPG.Person));
    RPG.Dog = Dog;
})(RPG || (RPG = {}));
//# sourceMappingURL=Dog.js.map