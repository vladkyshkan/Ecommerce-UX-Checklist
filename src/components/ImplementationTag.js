import React from "react";
import { TagContainer, Tag } from "./Tag";

const ImplementationTag = props => (
  <TagContainer>
    <Tag details={props.details} checked={props.checked}>
      {props.details}
    </Tag>
  </TagContainer>
);

export default ImplementationTag;
