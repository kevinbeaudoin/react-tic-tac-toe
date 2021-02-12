import React from "react";

// Models
import { SquareValue } from "../square/model";

// Components
import Square from "../square/Square";

// Logic
import { getWinner } from "./logic";

// Style
import styled, { css } from "styled-components";

const StyledBoard = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 20px;
`;

const SquareContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex: 0 0 auto;
    max-width: 93px;
`;

const Title = styled.h1<{ won: boolean }>(
    ({ won }) => css`
        color: ${won ? "red" : "black"};
    `,
);

const Reset = styled.button`
    margin-top: 20px;
`;

interface IProps {}
interface IState {
    squares: SquareValue[];
    nextValue: SquareValue;
    won: boolean;
}

export default class Board extends React.PureComponent<IProps, IState> {
    public state: IState = {
        squares: new Array<SquareValue>(9).fill(null),
        nextValue: "X",
        won: false,
    };

    private handleSquareClick(index: number) {
        if (this.state.squares[index] || this.state.won) {
            return;
        }
        const { nextValue } = this.state;
        const squares = [...this.state.squares];
        squares[index] = nextValue;
        const winner = getWinner(squares);
        const newNextValue = nextValue === "O" ? "X" : "O";
        this.setState({
            squares,
            nextValue: winner ? nextValue : newNextValue,
            won: !!winner,
        });
    }

    private handleReset() {
        this.setState({
            squares: new Array<SquareValue>(9).fill(null),
            nextValue: "X",
            won: false,
        });
    }

    private buildTitle() {
        const { nextValue, won } = this.state;
        const message = won ? `Player ${nextValue} Won!!!` : `Next Player: ${nextValue}`;
        return <Title won={won}>{message}</Title>;
    }

    public render() {
        return (
            <StyledBoard>
                {this.buildTitle()}
                <SquareContainer>
                    {this.state.squares.map((value, index) => (
                        <Square
                            key={index}
                            id={`square-${index}`}
                            value={value}
                            onSquareClick={this.handleSquareClick.bind(this, index)}
                        />
                    ))}
                </SquareContainer>
                <Reset onClick={this.handleReset.bind(this)}>Reset</Reset>
            </StyledBoard>
        );
    }
}
