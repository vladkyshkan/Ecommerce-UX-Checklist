import React from "react";
import { TagContainer, Tag } from "./Tag";

const ImpactTag = props => (
  <TagContainer>
    <Tag details={props.details} checked={props.checked}>
      {props.details}
    </Tag>
  </TagContainer>
);

export default ImpactTag;
