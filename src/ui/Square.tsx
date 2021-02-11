import React from "react";
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

export type SquareValue = "X" | "O" | null;

interface IProps {
  value: SquareValue;
  onSquareClick: () => void;
}
interface IState {}

export default class Square extends React.Component<IProps, IState> {
  public render() {
    const { value } = this.props;
    return (
      <StyledSquare onClick={this.props.onSquareClick}>{value}</StyledSquare>
    );
  }
}
