interface IListItem<T> {
    value: T;
    next: IListItem<T> | null;
}

class LinkedList<T> {
    private head: IListItem<T> | null = null;
    private length: number = 0;

    get getLength(): number {
        return this.length;
    }

    get getFirstItem(): IListItem<T> | null {
        return this.head;
    }

    get getLastItem(): IListItem<T> | null {
        let node: IListItem<T> | null = this.head;

        while (node) {
            node = node.next;
        }

        return node;
    }

    public push(value: T): number {
        const node: IListItem<T> = {
            value,
            next: null,
        };
        let current: IListItem<T> | null;

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
        let node: IListItem<T> | null = this.head;

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

    public insert(value: T, index: number): boolean {
        if (index > -1 && index < this.length) {
            let current: IListItem<T> | null = this.head;
            let newIndex: number = 0;
            let prevNode: IListItem<T>;

            let node: IListItem<T> = {
                value,
                next: null,
            };

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

    public removeAt(index: number): T {
        if (index > -1 && index < this.length) {
            let current: IListItem<T> | null = this.head;
            let prevNode: IListItem<T> | null;
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
        let node: IListItem<T> | null = this.head;
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