//init, size, array?, root?, getSize, clear, toString, addToEnd, addToStart, deleteFromEnd, deleteFromStart, set?

interface ArrayList {
    array: number [],
    size: number,
}

const list: ArrayList = {
    array: [],
    size: 0,
};

function init(array: number []): void {
    list.array = array;
    list.size = array.length;
}

function getSize(): number {
    return list.size;
}

function clearList(): void {
    list.array.length = 0;
}

function toStringMethod(): string  {
    return `${list.array}`;
}

function toStringMethod2(): string {
    return list.array.join(',')
}

function toStringMethod3(): string {
    let numToString: string = '';
    list.array.forEach((num :number, index: number) => index !== -1 ? numToString += num + ', ' :  numToString += num);

    return numToString;
}

function popMethod(): number {
    const currentArray: number[] = list.array;
    const lastNumber: number = currentArray[currentArray.length - 1];
    currentArray.length = currentArray.length - 1;
    --list.size;

    return lastNumber;
}

function unshiftMethod(numeric: number): number {
    let currentArray: number[] = list.array;
    currentArray = [numeric, ...currentArray];
    ++list.size;

    return currentArray.length;
}

function shiftMethod(): number {
    let currentArray: number[] = list.array;
    const firstNumber: number = currentArray[0];
    currentArray.filter((number, index) => index !== 0);
    --list.size;

    return firstNumber;
}

function pushMethod(numeric: number): number {
    let currentArray: number[] = list.array;
    currentArray = [...currentArray, numeric];
    ++list.size;

    return currentArray.length;
}