import React, { Component } from "react";
import CategoryProgress from "./CategoryProgress";
import styled from "styled-components";

const CategoryHeadingStyle = styled.div`
  background-color: ${props => props.theme.colors.categoryHeading};
  padding: 24px 32px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: ${props => (props.expanded ? "10px 10px 0 0" : "10px")};
  img {
    padding-right: 8px;
    position: relative;
    top: 4px;
  }
`;

const H3 = styled.h3`
  font-size: 21px;
  line-height: 25px;
  font-weight: 500;
  color: rgba(0, 193, 147, 1);
  margin: 0;
  padding-right: 24px;
`;

const CategoryHeadingTitle = styled.div`
  display: flex;
  align-items: baseline;
`;

const Tooltip = styled.span`
  visibility: hidden;
  width: 100px;
  background-color: ${props => props.theme.colors.tooltip};
  color: ${props => props.theme.colors.tooltipText};
  text-align: center;
  border-radius: 4px;
  padding: 12px 0;
  position: absolute;
  z-index: 1;
  bottom: 160%;
  left: 50%;
  margin-left: -50px;

  ::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: ${props => props.theme.colors.tooltip} transparent transparent
      transparent;
  }
`;

const CategoryButton = styled.button`
  width: 30px;
  height: 30px;
  border: 0;
  border-radius: 100%;
  background-color: rgba(0, 193, 147, 0.1);
  background-image: ${props =>
    props.checkAll
      ? "url(./icons/checkbox-checked.svg)"
      : "url(./icons/checkbox-empty.svg)"};
  background-position: 50% 50%;
  background-repeat: no-repeat;
  margin-left: 24px;
  line-height: 50%;
  position: relative;

  :hover {
    background-color: rgba(0, 193, 147, 0.2);
  }

  :hover ${Tooltip} {
    visibility: visible;
  }

  :focus {
    outline: 0;
  }
`;

const CategoryButtonHide = styled(CategoryButton)`
  background-image: ${props =>
    props.expanded ? "url(./icons/eye.svg)" : "url(./icons/eye-closed.svg)"};
`;

class CategoryHeading extends Component {
  render() {
    return (
      <CategoryHeadingStyle expanded={this.props.expanded}>
        <CategoryHeadingTitle>
          <img
            src={`icons/${this.props.name}.svg`}
            alt={`${this.props.name} icon`}
          />
          <H3>{this.props.name}</H3>
          <CategoryProgress
            allNumber={this.props.allNumber}
            checkedNumber={this.props.checkedNumber}
          />
        </CategoryHeadingTitle>
        <div>
          <CategoryButton checkAll onClick={this.props.selectAll}>
            <Tooltip>Check all</Tooltip>
          </CategoryButton>
          <CategoryButton onClick={this.props.deselectAll}>
            <Tooltip>Uncheck all</Tooltip>
          </CategoryButton>
          <CategoryButtonHide
            expanded={this.props.expanded}
            onClick={this.props.hideSection}
          >
            <Tooltip>{this.props.expanded ? "Hide" : "Show"} category</Tooltip>
          </CategoryButtonHide>
        </div>
      </CategoryHeadingStyle>
    );
  }
}

export default CategoryHeading;
