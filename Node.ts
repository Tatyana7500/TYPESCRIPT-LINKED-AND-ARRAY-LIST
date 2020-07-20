import INode from "./Interfaces/INode";

class Node implements INode {
    next: object | null;
    value: number;

    constructor(value: number) {
        this.next = null;
        this.value = value;
    }
}

export default Node;