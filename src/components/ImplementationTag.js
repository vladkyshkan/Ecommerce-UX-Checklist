import React from "react";

const ImplementationTag = props => (
  <div className="implementation-tag">
    <div
      className={
        props.checked
          ? "implementation-tag-checked"
          : `implementation-tag-${props.details}`
      }
    >
      {props.details}
    </div>
  </div>
);

export default ImplementationTag;
