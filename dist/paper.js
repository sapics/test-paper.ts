class Base {
    serialize() {
        var arr = this._serialize();
        arr.unshift(this.constructor.name);
        return arr;
    }
    _serialize() {
        return [];
    }
}
class Point extends Base {
    constructor(arg1, arg2) {
        super();
        if (typeof arg1 === 'number') {
            this._set(arg1, arg2 == null ? arg1 : arg2);
        }
        else if (!arg1) {
            this._set(0, 0);
        }
        else {
            this._set(arg1[0], arg1[1]);
        }
    }
    _set(x, y) {
        this.x = x;
        this.y = y;
    }
    serialize() {
        return [this.x, this.y];
    }
}
class Rectangle extends Base {
    serialize() {
        return [this.x, this.y, this.width, this.height];
    }
    getPoint() {
        return new Point(this.x, this.y);
    }
}
