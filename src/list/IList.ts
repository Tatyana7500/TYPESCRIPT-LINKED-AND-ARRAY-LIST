export default interface IList {
    init(array: number[]),
    size(): number,
    clear(): void,
    toArray(): number[],
    toString(): string,
    addToEnd(value: number): number,
    addToStart(value: number): number,
    deleteFromEnd(): number,
    deleteFromStart(): number,
}
