import React, { Component } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemPanel
} from "react-accessible-accordion";
import Checkbox from "./Checkbox";
import ImplementationTag from "./ImplementationTag";
import ImpactTag from "./ImpactTag";
import styled from "styled-components";

const CategoryItemStyle = styled.div`
  display: flex;
  align-items: center;
  max-width: 980px;
  padding: 24px 32px;
  border-top: 1px solid ${props => props.theme.colors.categoryItemBorder};
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: baseline;
`;

const CategoryItemDescription = styled.span`
  margin-left: 16px;
  margin-right: 96px;
  display: inline-block;
  width: 400px;
  line-height: 150%;
  text-decoration: ${props => (props.checked ? "line-through" : null)};
  opacity: ${props => (props.checked ? "0.5" : null)};

  :hover {
    cursor: pointer;
  }

  @media only screen and (max-width: 1024px) {
    width: 300px;
  }
`;

const AccordionItemButtonStyle = styled(AccordionItemButton)`
  width: 24px;
  height: 24px;
  background-image: ${props => props.theme.icons.categoryArrow};
  background-position: 50% 50%;
  background-repeat: no-repeat;

  /* [aria-expanded="true"] {
    transform: rotate(180deg);
  } */

  :hover {
    cursor: pointer;
  }

  :focus {
    outline: 0;
  }
`;

const AccordionItemPanelStyle = styled(AccordionItemPanel)`
  background: ${props => props.theme.colors.categoryDescriptionBg};
  color: ${props => props.theme.colors.categoryDescription};
  padding: 16px 64px;
  font-size: 14px;
  line-height: 21px;
`;

class CategoryItem extends Component {
  handleCheckboxChange = e => {
    this.props.onChange(e);
  };

  render() {
    const {
      text,
      implementation,
      impact,
      description,
      link
    } = this.props.details;

    return (
      <Accordion allowZeroExpanded="true">
        <AccordionItem>
          <CategoryItemStyle>
            <CheckboxLabel>
              <Checkbox
                name={this.props.index}
                checked={this.props.isChecked}
                onChange={this.handleCheckboxChange}
              />
              <CategoryItemDescription checked={this.props.isChecked}>
                {text}
              </CategoryItemDescription>
            </CheckboxLabel>
            <ImplementationTag
              details={implementation}
              checked={this.props.isChecked}
            />
            <ImpactTag details={impact} checked={this.props.isChecked} />
            <AccordionItemButtonStyle />
          </CategoryItemStyle>
          <AccordionItemPanelStyle>
            {description}
            <a href={link} target="_blank" rel="noopener noreferrer">
              Read more.
            </a>
          </AccordionItemPanelStyle>
        </AccordionItem>
      </Accordion>
    );
  }
}

export default CategoryItem;
