import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Board from "./Board";

test("Board Should load as empty", () => {
    const board = render(<Board />);
    const firstSquare = board.container.querySelector("#square-0");

    expect(firstSquare.textContent).toBe("");
});

test("Squares should update when clicked", () => {
    const board = render(<Board />);
    const firstSquare = board.container.querySelector("#square-0");
    const secondSquare = board.container.querySelector("#square-1");

    fireEvent(firstSquare, new MouseEvent("click", { bubbles: true, cancelable: true }));
    fireEvent(secondSquare, new MouseEvent("click", { bubbles: true, cancelable: true }));

    expect(firstSquare.textContent).toBe("X");
    expect(secondSquare.textContent).toBe("O");
});
