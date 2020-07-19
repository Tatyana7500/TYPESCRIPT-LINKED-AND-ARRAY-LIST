import IList from "./IList";

class Entry {
    value: number | null;
    prev: Entry | null;
    next: Entry | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }

    setPrev(prev: Entry | null) {
        this.prev = prev;
    }

    setNext(next: Entry | null) {
        this.next = next;
    }
}

export default class LinkedList implements IList {
    private _root: Entry | null;
    private _tail: Entry | null;
    private _size: number;

    constructor() {
        this._root = null;
        this._tail = null;
        this._size = 0;
    }

    addToEnd(value: number): number {
        const entry = new Entry(value);
        this._size++;

        if (this._root === null) {
            this._root = entry;
            this._tail = entry;
        } else {
            this._tail.setNext(entry);
            entry.setPrev(this._tail);
            this._tail = entry;
        }

        return value;
    }

    addToStart(value: number): number {
        const entry = new Entry(value);
        this._size++;

        if (this._root === null) {
            this._root = entry;
            this._tail = entry;
        } else {
            this._root.setPrev(entry);
            entry.setNext(this._root);
            this._root = entry;
        }

        return value;
    }

    clear(): void {
        this._size = 0;
        this._root = null;
        this._tail = null;
    }

    deleteFromEnd(): number {
        if (this._size === 0) {
            return null;
        }

        const { value } = this._tail;

        if (this._size === 1) {
            this.clear();
        } else {
            const { prev } = this._tail;
            prev.setNext(null);
            this._tail = prev;
        }

        return value;
    }

    deleteFromStart(): number {
        if (this._size === 0) {
            return null;
        }

        const { value } = this._root;

        if (this._size === 1) {
            this.clear();
        } else {
            const { next } = this._root;
            next.setPrev(null);
            this._root = next;
        }

        return value;
    }

    init(array: number[]): void {
        array.forEach(value => this.addToEnd(value));
    }

    size(): number {
        return this._size;
    }

    toArray(): number[] {
        if (this._size === 0) {
            return [];
        }

        const result = [];
        let current = this._root;

        while (current) {
            const { value, next } = current;

            result.push(value);
            current = next;
        }

        return  result;
    }

    toString(): string {
        return  `{${this.toArray().join(', ')}}`;
    }
}
