function LinkedList() {
    this._root = null;
    this._size = 0;
}

function createNode(value: number) {
    this.value = value;
    this.next = null;
}

LinkedList.prototype.clear = function(): void {
    this._root = null;
    this._size = 0;
};

LinkedList.prototype.unshift = function(value: number) {
    const node = new createNode(value);

    node.next = this._root;
    this._root = node;
    this._size++;
};

LinkedList.prototype.init = function(array: number[]) {
    this.clear();

    if (!array || !array.length) {
        return;
    }

    array.reduceRight((accumulator, currentValue) => this.unshift(currentValue), -1)
};

LinkedList.prototype.toStringMethod = function(): string {
    let result: string = '';

    let tempNode = this._root;

    while (tempNode) {
        result += `${tempNode.value}`;

        tempNode.next && (result += ', ');
        tempNode = tempNode.next;
    }

    return result;
};

LinkedList.prototype.toArray = function():number[] {
    let result: number[] = [];
    let tempNode: any = this._root;
    let i: number = 0;

    while(tempNode) {
        result[i] = tempNode.value;
        i++;
        tempNode = tempNode.next;
    }

    return result;
};

LinkedList.prototype.shift = function(): number {
    let tempNode = this._root;
    let element;

    if (tempNode) {
        element = tempNode.value;
        this._root = tempNode.next;
    }

    return element;
};

LinkedList.prototype.getSize = function(): number {
    return this._size;
};

LinkedList.prototype.pushMethod = function(value: number): number {
    let node: object = new createNode(value);
    let tempNode = this._root;

    if (!value && value !== 0) {
        return this._size;
    }

    if (!this._root) {
        this._root = node;
        this._size++;

        return this._size;
    }

    while (tempNode.next !== null) {
        tempNode = tempNode.next;
    }

    tempNode.next = node;
    this._size++;

    return this._size;
}