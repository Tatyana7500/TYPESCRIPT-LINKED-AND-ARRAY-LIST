var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.length = 0;
    }
    Object.defineProperty(LinkedList.prototype, "getLength", {
        get: function () {
            return this.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LinkedList.prototype, "getFirstItem", {
        get: function () {
            return this.head;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LinkedList.prototype, "getLastItem", {
        get: function () {
            var node = this.head;
            while (node) {
                node = node.next;
            }
            return node;
        },
        enumerable: false,
        configurable: true
    });
    LinkedList.prototype.push = function (value) {
        var node = {
            value: value,
            next: null,
        };
        var current;
        if (this.head === null) {
            this.head = node;
        }
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        return this.length++;
    };
    LinkedList.prototype.pop = function () {
        var node = this.head;
        if (!node) {
            return 0;
        }
        while (node.next) {
            if (!node.next.next) {
                node.next = null;
                return this.length--;
            }
            node = node.next;
        }
        return this.length--;
    };
    LinkedList.prototype.insert = function (value, index) {
        if (index > -1 && index < this.length) {
            var current = this.head;
            var newIndex = 0;
            var prevNode = void 0;
            var node = {
                value: value,
                next: null,
            };
            if (!index) {
                node.next = current;
                this.head = node;
            }
            else {
                while (newIndex++ < index) {
                    prevNode = current;
                    current = current.next;
                }
                node.next = current;
                prevNode.next = node;
            }
            this.length++;
            return true;
        }
        return false;
    };
    LinkedList.prototype.removeAt = function (index) {
        if (index > -1 && index < this.length) {
            var current = this.head;
            var prevNode = void 0;
            var newIndex = 0;
            if (index === 0) {
                this.head = current.next;
            }
            else {
                while (newIndex++ < index) {
                    prevNode = current;
                    current = current.next;
                }
                prevNode.next = current.next;
            }
            this.length--;
            return current.value;
        }
        return null;
    };
    LinkedList.prototype.reset = function () {
        return this.head = null;
    };
    LinkedList.prototype.toString = function (separator) {
        if (separator === void 0) { separator = ', '; }
        var node = this.head;
        var stringArray = [];
        while (node) {
            if (node.value) {
                stringArray.push(node.value.toString());
            }
            node = node.next;
        }
        return stringArray.join(separator);
    };
    return LinkedList;
}());
