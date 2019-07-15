import React from "react";

const ImpactTag = props => (
  <div className="impact-tag">
    <div className={`impact-tag-${props.details}`}>{props.details}</div>
  </div>
);

export default ImpactTag;
