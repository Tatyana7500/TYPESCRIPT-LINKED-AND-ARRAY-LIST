"use strict";
exports.__esModule = true;
var Node_1 = require("./Node");
var Linkedlist = /** @class */ (function () {
    function Linkedlist(array) {
        var _this = this;
        this.getSize = function () { return _this.size; };
        this.size = 0;
        this.root = null;
        this.init(array);
    }
    Linkedlist.prototype.clear = function () {
        this.root = null;
        this.size = 0;
    };
    Linkedlist.prototype.init = function (array) {
        this.clear();
        if (!array || !array.length) {
            return;
        }
        for (var i = array.length - 1; i >= 0; i--) {
            this.addToStart(array[i]);
        }
        ;
    };
    Linkedlist.prototype.addToEnd = function (value) {
        var node = new Node_1["default"](value);
        var tempNode = this.root;
        if (!value && value !== 0) {
            return this.size;
        }
        ;
        if (!this.root) {
            this.root = node;
            this.size++;
            return this.size;
        }
        ;
        while (tempNode.next !== null) {
            tempNode = tempNode.next;
        }
        ;
        tempNode.next = node;
        this.size++;
        return this.size;
    };
    Linkedlist.prototype.addToStart = function (value) {
        var node = new Node_1["default"](value);
        node.next = this.root;
        this.root = node;
        this.size++;
    };
    Linkedlist.prototype.deleteFromStart = function () {
        var tempNode = this.root;
        var element;
        if (tempNode) {
            element = tempNode.value;
            this.root = tempNode.next;
        }
        ;
        return element;
    };
    return Linkedlist;
}());
exports["default"] = Linkedlist;
