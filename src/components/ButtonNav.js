import React from "react";

const ButtonNav = props => {
  return (
    <a className="button-nav" href={`#${props.details}`}>
      {props.details}
    </a>
  );
};

export default ButtonNav;
