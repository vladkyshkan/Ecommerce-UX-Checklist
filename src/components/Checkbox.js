import React from "react";
import styled from "styled-components";

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 1px solid
    ${props =>
      props.checked ? "rgba(0, 193, 147, 1)" : "rgba(196, 196, 196, 1)"};
  border-radius: 4px;
  background-image: ${props =>
    props.checked ? "url(../icons/checked.svg)" : null};

  :hover {
    cursor: pointer;
  }
`;

const CheckboxContainer = styled.div`
  position: relative;
  top: 2px;
`;

const Checkbox = ({ checked, ...props }) => (
  <CheckboxContainer>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked} />
  </CheckboxContainer>
);

export default Checkbox;
