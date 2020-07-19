const each = require("jest-each").default;
import IList from "../IList";
import LinkedList from '../LinkedList';

describe("List", () => {
    let list: IList;

    beforeAll(() => {
        list = new LinkedList();
    });

    afterEach(() => {
        list.clear();
    });

    describe('init', () => {
        each([
            [0, []],
            [1, [1]],
            [2, [1, 2]],
        ]).it("should have size '%s' when initial array [%s]", (expected, array) => {
            list.init(array);

            const actual = list.size();

            expect(actual).toBe(expected);
        });
    });

    describe('toString', () => {
        each([
            ['{}', []],
            ['{1}', [1]],
            ['{1, 2}', [1, 2]],
        ]).it("should return %s when initial array [%s]", (expected, array) => {
            list.init(array);

            const actual = list.toString();

            expect(actual).toEqual(expected);
        });
    });

    describe('toArray', () => {
        each([
            [[], []],
            [[1], [1]],
            [[1, 2], [1, 2]],
        ]).it("should return [%s] when initial array [%s]", (expected, array) => {
            list.init(array);

            const actual = list.toArray();

            expect(actual).toEqual(expected);
        });
    });

    describe('addToStart', () => {
        each([
            [[1], [], 1],
            [[2, 1], [1], 2],
            [[3, 1, 2], [1, 2], 3],
        ]).it("should return [%s] when initial array [%s] and add value %s", (expected, array, value) => {
            list.init(array);

            list.addToStart(value);
            const actual = list.toArray();

            expect(actual).toEqual(expected);
        });
    });

    describe('addToEnd', () => {
        each([
            [[1], [], 1],
            [[1, 2], [1], 2],
            [[1, 2, 3], [1, 2], 3],
        ]).it("should return [%s] when initial array [%s] and add value %s", (expected, array, value) => {
            list.init(array);

            list.addToEnd(value);
            const actual = list.toArray();

            expect(actual).toEqual(expected);
        });
    });

    describe('deleteFromEnd', () => {
        each([
            [[], [], null],
            [[1], [], 1],
            [[1, 2], [1], 2],
            [[1, 2, 3], [1, 2], 3],
        ]).it("should return [%s] when initial array [%s] and add value %s and return value %s", (array, expectedArray, expectedValue) => {
            list.init(array);

            const actualValue = list.deleteFromEnd();
            const actualArray = list.toArray();

            expect(actualArray).toEqual(expectedArray);
            expect(actualValue).toBe(expectedValue);
        });
    });

    describe('deleteFromStart', () => {
        each([
            [[], [], null],
            [[1], [], 1],
            [[1, 2], [2], 1],
            [[1, 2, 3], [2, 3], 1],
        ]).it("should return [%s] when initial array [%s] and add value %s and return value %s", (array, expectedArray, expectedValue) => {
            list.init(array);

            const actualValue = list.deleteFromStart();
            const actualArray = list.toArray();

            expect(actualArray).toEqual(expectedArray);
            expect(actualValue).toBe(expectedValue);
        });
    });
});
