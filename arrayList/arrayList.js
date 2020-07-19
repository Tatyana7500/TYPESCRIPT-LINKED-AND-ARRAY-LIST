var ArrayList = /** @class */ (function () {
    function ArrayList(initArray) {
        this.length = 0;
        this.array = initArray;
    }
    Object.defineProperty(ArrayList.prototype, "getArray", {
        get: function () {
            return this.array;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ArrayList.prototype, "getLength", {
        get: function () {
            return this.length;
        },
        enumerable: false,
        configurable: true
    });
    ArrayList.prototype.toString = function () {
        var string = '"[';
        for (var i = 0; i < this.length; i++) {
            string += "" + this.array[i];
            if (i !== this.length - 1) {
                string += ', ';
            }
        }
        string += ']"';
        return string;
    };
    ArrayList.prototype.push = function (value) {
        this.array[this.length] = value;
        return this.length++;
    };
    ;
    ArrayList.prototype.pop = function () {
        if (!this.length) {
            return 0;
        }
        return this.array.length = this.length--;
    };
    return ArrayList;
}());
var aList = new ArrayList([1, 2]);
aList.push(1);
aList.push(2);
aList.push(3);
aList.pop();
console.log(aList.toString());
