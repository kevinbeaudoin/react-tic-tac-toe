import React from "react";

// model
import { SquareValue } from "./model";

// style
import styled from "styled-components";

const SQUARE_SIZE = "30px";
const StyledSquare = styled.div`
    background: #fff;
    border: 1px solid #ccc;
    float: left;
    font-size: 24px;
    font-weight: bold;
    margin-right: -1px;
    margin-top: -1px;
    padding: 0;
    text-align: center;
    height: ${SQUARE_SIZE};
    width: ${SQUARE_SIZE};
`;

interface IProps {
    id: string;
    value: SquareValue;
    onSquareClick: () => void;
}
interface IState {}

export default class Square extends React.Component<IProps, IState> {
    public render() {
        const { id, value } = this.props;
        return (
            <StyledSquare id={id} onClick={this.props.onSquareClick}>
                {value}
            </StyledSquare>
        );
    }
}
