import { getWinner } from "./logic";
import { SquareValue } from "../square/model";

const EMPTY_BOARD = new Array<SquareValue>(9).fill(null);

test("Should Return Winner on lines", () => {
    for (let row = 0; row < 3; row++) {
        const board = [...EMPTY_BOARD].fill("X", row * 3, row * 3 + 3);
        expect(getWinner(board)).toBe("X");
    }
});

test("Should Return Winner on columns", () => {
    for (let col = 0; col < 3; col++) {
        const board = [...EMPTY_BOARD];
        board[col] = board[col + 3] = board[col + 6] = "X";
        expect(getWinner(board)).toBe("X");
    }
});

test("Should Return Winner on diagonals", () => {
    const firstDiagonal = [...EMPTY_BOARD];
    firstDiagonal[0] = firstDiagonal[4] = firstDiagonal[8] = "X";
    const secondDiagonal = [...EMPTY_BOARD];
    secondDiagonal[2] = secondDiagonal[4] = secondDiagonal[6] = "X";
    expect(getWinner(secondDiagonal)).toBe("X");
});

test("Should Return undefined when no winner", () => {
    const board = [...EMPTY_BOARD];
    board[0] = board[4] = board[5] = "X";
    board[1] = board[2] = board[6] = "O";

    expect(getWinner(EMPTY_BOARD)).toBeUndefined();
    expect(getWinner(board)).toBeUndefined();
});
