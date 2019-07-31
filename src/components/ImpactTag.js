import React from "react";

const ImpactTag = props => (
  <div className="impact-tag">
    <div
      className={
        props.checked ? "impact-tag-checked" : `impact-tag-${props.details}`
      }
    >
      {props.details}
    </div>
  </div>
);

export default ImpactTag;
