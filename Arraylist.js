"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var Arraylist = /** @class */ (function () {
    function Arraylist(data) {
        var _this = this;
        this.getSize = function () { return _this.size; };
        this.size = 0;
        this.array = [];
        this.init(data);
    }
    Arraylist.prototype.set = function (index, value) {
        var result = 0;
        for (var i = 0; i < this.array.length; i++) {
            if (i === index) {
                this.array[i] = value;
            }
            ;
        }
        ;
        return this.array;
    };
    Arraylist.prototype.init = function (data) {
        if (null) {
            return [];
        }
        ;
        if (data) {
            for (var i = 0; i < data.length; i++) {
                this.addToEnd(data[i]);
            }
            ;
        }
        ;
        return this.array;
    };
    Arraylist.prototype.clear = function () {
        this.size = 0;
        this.array.length = this.size;
    };
    Arraylist.prototype.addToEnd = function (value) {
        if (!value && value !== 0) {
            return this.size;
        }
        this.array[this.array.length] = value;
        this.size++;
        return this.size;
    };
    Arraylist.prototype.addToStart = function (value) {
        if (!value) {
            return this.size;
        }
        this.array = __spreadArrays([value], this.array);
        this.size = this.array.length;
        return this.size;
    };
    Arraylist.prototype.deleteFromEnd = function () {
        var popedElement = this.array[this.array.length - 1];
        if (!this.array || this.array.length === 0) {
            return undefined;
        }
        ;
        this.size--;
        this.array.length = this.size;
        return popedElement;
    };
    Arraylist.prototype.deleteFromStart = function () {
        var element = this.array[0];
        if (this.array.length === 0) {
            return undefined;
        }
        ;
        for (var i = 0; i < this.array.length; i++) {
            this.array[i] = this.array[i + 1];
        }
        ;
        this.size = this.array.length--;
        return element;
    };
    return Arraylist;
}());
exports["default"] = Arraylist;
