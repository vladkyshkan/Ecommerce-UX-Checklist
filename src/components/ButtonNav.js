import React from "react";

const ButtonNav = props => {
  return (
    <a className="button-nav" href={`#${props.details}`}>
      <img
        src={`images/${props.details}.svg`}
        className="button-nav__icon"
        alt={`${props.details} icon`}
      />
      {props.details}
    </a>
  );
};

export default ButtonNav;
