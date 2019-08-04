import React from "react";
import styled from "styled-components";
import { TagContainer, Tag } from "./Tag";

const ImplementationTag = props => (
  <TagContainer>
    <Tag details={props.details} checked={props.checked}>
      {props.details}
    </Tag>
  </TagContainer>
);

export default ImplementationTag;
