import React from "react";
import styled from "styled-components";

const NavButton = styled.a`
  padding: 16px 24px;
  background-color: ${props => props.theme.colors.navButton};
  box-shadow: 0px 15px 20px ${props => props.theme.colors.shadow};
  border: 2px solid rgba(0, 117, 106, 0);
  border-radius: 10px;
  text-decoration: none;
  color: ${props => props.theme.colors.body};
  font-weight: 500;
  margin: 8px;
  display: flex;
  align-items: center;

  :hover {
    border: 2px solid rgba(0, 193, 147, 1);
    color: rgba(0, 193, 147, 1);
  }
`;

const NavButtonIcon = styled.img`
  padding-right: 4px;
`;

const ButtonNav = props => {
  return (
    <NavButton href={`#${props.details}`}>
      <NavButtonIcon
        src={`icons/${props.details}.svg`}
        alt={`${props.details} icon`}
      />
      {props.details}
    </NavButton>
  );
};

export default ButtonNav;
