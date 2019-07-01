import React from "react";

const ImplementationTag = props => (
  <div className="implementation-tag">
    <div className={`implementation-tag-${props.details}`}>{props.details}</div>
  </div>
);

export default ImplementationTag;
