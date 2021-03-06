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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9iYXNpYy9CYXNlLnRzIiwic3JjL2Jhc2ljL1BvaW50LnRzIiwic3JjL2Jhc2ljL1JlY3RhbmdsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLElBQUk7SUFDUixTQUFTO1FBQ1AsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO1FBQzNCLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNsQyxPQUFPLEdBQUcsQ0FBQTtJQUNaLENBQUM7SUFDRCxVQUFVO1FBQ1IsT0FBTyxFQUFFLENBQUE7SUFDWCxDQUFDO0NBQ0Y7QUNURCxNQUFNLEtBQU0sU0FBUSxJQUFJO0lBTXRCLFlBQVksSUFBVSxFQUFFLElBQVU7UUFDaEMsS0FBSyxFQUFFLENBQUE7UUFDUCxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFBO1NBQzVDO2FBQU0sSUFBSSxDQUFDLElBQUksRUFBRTtZQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtTQUNoQjthQUFNO1lBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7U0FDNUI7SUFDSCxDQUFDO0lBRUQsSUFBSSxDQUFDLENBQVMsRUFBRSxDQUFTO1FBQ3ZCLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ1YsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDWixDQUFDO0lBRUQsU0FBUztRQUNQLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUN6QixDQUFDO0NBQ0Y7QUN6QkQsTUFBTSxTQUFVLFNBQVEsSUFBSTtJQUsxQixTQUFTO1FBQ1AsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUNsRCxDQUFDO0lBQ0QsUUFBUTtRQUNOLE9BQU8sSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDbEMsQ0FBQztDQUNGIiwiZmlsZSI6InBhcGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQmFzZSB7XHJcbiAgc2VyaWFsaXplKCk6IGFueVtdIHtcclxuICAgIHZhciBhcnIgPSB0aGlzLl9zZXJpYWxpemUoKVxyXG4gICAgYXJyLnVuc2hpZnQodGhpcy5jb25zdHJ1Y3Rvci5uYW1lKVxyXG4gICAgcmV0dXJuIGFyclxyXG4gIH1cclxuICBfc2VyaWFsaXplKCk6IGFueVtdIHtcclxuICAgIHJldHVybiBbXVxyXG4gIH1cclxufVxyXG4iLCJjbGFzcyBQb2ludCBleHRlbmRzIEJhc2Uge1xyXG4gIHg6IG51bWJlclxyXG4gIHk6IG51bWJlclxyXG5cclxuICBjb25zdHJ1Y3Rvcih4PzogbnVtYmVyLCB5PzogbnVtYmVyKTtcclxuICBjb25zdHJ1Y3RvcihhcnI6IG51bWJlcltdKTtcclxuICBjb25zdHJ1Y3RvcihhcmcxPzogYW55LCBhcmcyPzogYW55KSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICBpZiAodHlwZW9mIGFyZzEgPT09ICdudW1iZXInKSB7XHJcbiAgICAgIHRoaXMuX3NldChhcmcxLCBhcmcyID09IG51bGwgPyBhcmcxIDogYXJnMilcclxuICAgIH0gZWxzZSBpZiAoIWFyZzEpIHtcclxuICAgICAgdGhpcy5fc2V0KDAsIDApXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9zZXQoYXJnMVswXSwgYXJnMVsxXSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9zZXQoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgIHRoaXMueCA9IHhcclxuICAgIHRoaXMueSA9IHlcclxuICB9XHJcblxyXG4gIHNlcmlhbGl6ZSgpIHtcclxuICAgIHJldHVybiBbdGhpcy54LCB0aGlzLnldXHJcbiAgfVxyXG59XHJcbiIsImNsYXNzIFJlY3RhbmdsZSBleHRlbmRzIEJhc2Uge1xyXG4gIHg6IG51bWJlclxyXG4gIHk6IG51bWJlclxyXG4gIHdpZHRoOiBudW1iZXJcclxuICBoZWlnaHQ6IG51bWJlclxyXG4gIHNlcmlhbGl6ZSgpIHtcclxuICAgIHJldHVybiBbdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0XVxyXG4gIH1cclxuICBnZXRQb2ludCgpIHtcclxuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54LCB0aGlzLnkpXHJcbiAgfVxyXG59XHJcblxyXG4iXX0=
