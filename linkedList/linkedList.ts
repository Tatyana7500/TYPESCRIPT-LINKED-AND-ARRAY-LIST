class ListItem {
    public value: any;
    public next: ListItem | null;

    constructor(value: any) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    private head: ListItem | null = null;
    private length: number = 0;

    get getLength(): number {
        return this.length;
    }

    get getFirstItem(): ListItem | null {
        return this.head;
    }

    get getLastItem(): ListItem | null {
        let node: ListItem | null = this.head;

        while (node) {
            node = node.next;
        }

        return node;
    }

    public push(value: any): number {
        const node: ListItem = new ListItem(value);
        let current: ListItem | null;

        if (this.head === null) {
            this.head = node;
        } else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }

        return this.length++;
    }

    public pop(): number {
        let node: ListItem | null = this.head;

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
    }

    public insert(value: any, index: number): boolean {
        if (index > -1 && index < this.length) {
            let current: ListItem | null = this.head;
            let newIndex: number = 0;
            let prevNode: ListItem;

            let node: ListItem = new ListItem(value);

            if (!index) {
                node.next = current;
                this.head = node;
            } else {
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
    }

    public removeAt(index: number): any {
        if (index > -1 && index < this.length) {
            let current: ListItem | null = this.head;
            let prevNode: ListItem | null;
            let newIndex: number = 0;

            if (index === 0) {
                this.head = current.next;
            } else {
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
    }

    public reset(): null {
        return this.head = null;
    }

    public toString(separator: string = ', '): string {
        let node: ListItem | null = this.head;
        const stringArray: string[] = [];

        while (node) {
            if (node.value) {
                stringArray.push(node.value.toString());
            }

            node = node.next;
        }

        return stringArray.join(separator);
    }
}