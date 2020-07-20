import IList from "./Interfaces/IList";

class Arraylist implements IList {
    size: number;
    array: number[];
    constructor(data?: any[]) {
        this.size = 0;
        this.array = [];

        this.init(data);
    }

    set(index: number, value: number): number[] {
        let result: number = 0;

        for (let i: number = 0; i < this.array.length; i++) {
            if (i === index) {
                this.array[i] = value;
            };
        };

        return this.array;
    }

    init(data: number[]): number[] {
        if(null) {
            return [];
        };

        if(data) {
            for(let i: number = 0; i < data.length; i++) {
                this.addToEnd(data[i]);
            };
        };

        return this.array;
    }

    clear(): void {
        this.size = 0;
        this.array.length = this.size;
    }

    getSize = (): number => this.size;

    addToEnd(value: any): number {
        if(!value && value !== 0) {
            return this.size;
        }

        this.array[this.array.length] = value;
        this.size++;

        return this.size;
    }

    addToStart(value: number): number {
        if (!value) {
            return this.size;
        }

        this.array = [value, ...this.array];
        this.size = this.array.length;

        return this.size;
    }

    deleteFromEnd(): number {
        let popedElement: number = this.array[this.array.length - 1];

        if (!this.array || this.array.length === 0) {
            return undefined;
        };

        this.size--;
        this.array.length = this.size;

        return popedElement;
    }

    deleteFromStart(): number {
        let element: number = this.array[0];

        if (this.array.length === 0) {
            return undefined;
        };

        for (let i: number = 0; i < this.array.length; i++) {
            this.array[i] = this.array[i + 1];
        };

        this.size = this.array.length--;

        return element;
    }
}

export default Arraylist;