class ArrayList<T> {
    private readonly array: T[];
    private length: number = 0;

    constructor(initArray: T[]) {
        this.array = initArray;
    }

    get getArray(): T[] {
        return this.array;
    }

    get getLength(): number {
        return this.length;
    }

    public toString(): string {
        let string: string = '"[';

        for (let i: number = 0; i < this.length; i++) {
            string += `${this.array[i]}`;

            if (i !== this.length - 1) {
                string += ', ';
            }
        }

        string += ']"';

        return string;
    }

    public push(value: T): number {
        this.array[this.length] = value;

        return this.length++;
    };

    public pop(): number {
        if (!this.length) {
            return 0;
        }

        return this.array.length = this.length --;
    }
}

const aList: ArrayList<any> = new ArrayList([1, 2]);

aList.push(1);
aList.push(2);
aList.push(3);
aList.pop();
console.log(aList.toString());