import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border-style: solid;
  border-width: 1px;
  border-color: blue;
  width: 7rem;
  padding: 10px;
  border-radius: 18px;
  background: #eeeeee;
`;
const Button = ({ name }) => {
  return <StyledButton>{name}</StyledButton>;
};

export default Button;
