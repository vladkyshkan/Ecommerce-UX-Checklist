import React from "react";
import styled from "styled-components";

const ImageContainer = styled.div`
  img {
    max-width: 100%;
    height: auto;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 24px;
  }
`;

const Image = props => (
  <ImageContainer>
    <img src={props.src} alt="" />
  </ImageContainer>
);

export default Image;
