interface IList {
    set?: (index: number, value: number) => number[]
    init: (data: object) => object | void
    size: number
    array?: number[]
    root?: object | null
    clear: () => void
    getSize: () => number
    toString: (data: number[]) => string
    addToEnd: (data: number) => number
    addToStart: (data: number) => number | void
    deleteFromEnd?: () => number
    deleteFromStart: () => number
};

export default IList;
