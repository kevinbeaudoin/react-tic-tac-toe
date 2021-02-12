import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

const MOUSE_CLICK_OPTIONS = { bubbles: true, cancelable: true };
function fireMouseClick(element: Element | null) {
    if (!element) {
        throw new Error("Can't fire mouse click on missing element");
    }
    fireEvent(element, new MouseEvent("click", MOUSE_CLICK_OPTIONS));
}

test("renders the board without errors", () => {
    const app = render(<App />);
    const title = screen.getByText(/Next Player:/i);
    const firstSquare = app.container.querySelector("#square-0");
    const lastSquare = app.container.querySelector("#square-8");
    const outOfBoundSquare = app.container.querySelector("#square-9");
    const resetButton = screen.getByText(/Reset/i);

    expect(title).toBeInTheDocument();
    expect(title.textContent).toBe("Next Player: X");
    expect(firstSquare).toBeInTheDocument();
    expect(lastSquare).toBeInTheDocument();
    expect(outOfBoundSquare).not.toBeInTheDocument();
    expect(resetButton).toBeInTheDocument();
});

test("Title should show next whose turn it is", () => {
    const app = render(<App />);
    const title = screen.getByText(/Next Player:/i);
    const firstSquare = app.container.querySelector("#square-0") as Element;

    fireMouseClick(firstSquare);

    expect(title.textContent).toBe("Next Player: O");
});

test("Reset should clear board", () => {
    const app = render(<App />);
    const firstSquare = app.container.querySelector("#square-0") as Element;
    const resetButton = screen.getByText(/Reset/i);

    fireMouseClick(firstSquare);
    fireMouseClick(resetButton);

    expect(firstSquare.textContent).toBe("");
});

test("Clicking on an already marked square should have no impact", () => {
    const app = render(<App />);
    const title = screen.getByText(/Next Player:/i);
    const firstSquare = app.container.querySelector("#square-0") as Element;

    fireMouseClick(firstSquare);
    fireMouseClick(firstSquare);

    expect(firstSquare.textContent).toBe("X");
    expect(title.textContent).toBe("Next Player: O");
});

test("App should display who won", () => {
    const app = render(<App />);
    const title = screen.getByText(/Next Player:/i);
    const square0 = app.container.querySelector("#square-0") as Element;
    const square1 = app.container.querySelector("#square-1") as Element;
    const square2 = app.container.querySelector("#square-2") as Element;
    const square3 = app.container.querySelector("#square-3") as Element;
    const square4 = app.container.querySelector("#square-4") as Element;

    fireMouseClick(square0);
    fireMouseClick(square3);
    fireMouseClick(square1);
    fireMouseClick(square4);
    fireMouseClick(square2);

    expect(title.textContent).toBe("Player X Won!!!");
});
