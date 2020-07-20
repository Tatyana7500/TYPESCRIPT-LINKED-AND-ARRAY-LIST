import IList from "./Interfaces/IList";
import Node from "./Node";

class Linkedlist implements IList {
    array: number[];
    size: number;
    root: {value?: number, next?: object} | null;

    constructor(array: number[]) {
        this.size = 0;
        this.root = null;

        this.init(array);
    }

    clear(): void {
        this.root = null;
        this.size = 0;
    }

    init(array: number[]): void {
        this.clear();

        if (!array || !array.length) {
            return;
        }

        for (let i = array.length - 1; i >= 0; i--) {
            this.addToStart(array[i]);
        };
    }

    getSize= (): number => this.size;

    addToEnd(value: number): number {
        let node: {value: number, next: object} = new Node(value);
        let tempNode = this.root;

        if (!value && value !== 0) {
            return this.size;
        };

        if (!this.root) {
            this.root = node;
            this.size++;

            return this.size;
        };

        while (tempNode.next !== null) {
            tempNode = tempNode.next;
        };

        tempNode.next = node;
        this.size++;

        return this.size;
    }

    addToStart(value: number): void {
        const node = new Node(value);

        node.next = this.root;
        this.root = node;
        this.size++;
    }

    deleteFromStart(): number {
        let tempNode: { value?: number; next?: object } = this.root;
        let element: number;

        if (tempNode) {
            element = tempNode.value;
            this.root = tempNode.next;
        };

        return element;
    }
}

export default Linkedlist;