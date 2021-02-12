import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the board without errors", () => {
    const app = render(<App />);

    //Reset Button
    const resetButton = screen.getByText(/Reset/i);
    expect(resetButton).toBeInTheDocument();

    //Title
    const title = screen.getByText(/Next Player:/i);
    expect(title).toBeInTheDocument();

    //Board
    const firstSquare = app.container.querySelector("#square-0");
    expect(firstSquare).toBeInTheDocument();

    const lastSquare = app.container.querySelector("#square-8");
    expect(lastSquare).toBeInTheDocument();

    const outOfBoundSquare = app.container.querySelector("#square-9");
    expect(outOfBoundSquare).not.toBeInTheDocument();
});
