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
import Image from "./Image";
import styled from "styled-components";

const H5 = styled.h5`
  font-size: 12px;
  line-height: 18px;
  font-weight: 500;
  color: ${props => props.theme.colors.h5};
  margin: 8px 8px 8px 0;
  width: 100px;
`;

const CategoryItemStyle = styled.div`
  display: flex;
  align-items: center;
  max-width: 980px;
  padding: 24px 32px;
  border-top: 1px solid ${props => props.theme.colors.categoryItemBorder};

  @media only screen and (max-width: 820px) {
    align-items: flex-start;
  }

  @media only screen and (max-width: 620px) {
    padding: 16px 24px;
  }
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

  @media only screen and (max-width: 875px) {
    margin-right: 48px;
  }

  @media only screen and (max-width: 820px) {
    width: 90%;
  }

  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

const AccordionItemButtonStyle = styled(AccordionItemButton)`
  width: 24px;
  height: 24px;
  background-image: ${props => props.theme.icons.categoryArrow};
  background-position: 50% 50%;
  background-repeat: no-repeat;
  margin-left: auto;

  &[aria-expanded="true"] {
    transform: rotate(180deg);
  }

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
  padding: 32px 64px;
  font-size: 15px;
  line-height: 23px;

  @media only screen and (max-width: 620px) {
    padding: 24px 56px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 13px;
    line-height: 20px;
  }
`;

const TagsMobile = styled.div`
  display: none;

  @media only screen and (max-width: 820px) {
    display: block;
    padding: 0 64px 24px;

    div {
      display: flex;
      align-items: center;
    }
  }

  @media only screen and (max-width: 620px) {
    padding: 0 56px 16px;
  }
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
      image,
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
          <TagsMobile>
            <div>
              <H5>Implementation:</H5>
              <ImplementationTag
                details={implementation}
                checked={this.props.isChecked}
              />
            </div>
            <div>
              <H5>Impact:</H5>
              <ImpactTag details={impact} checked={this.props.isChecked} />
            </div>
          </TagsMobile>
          <AccordionItemPanelStyle>
            {image ? <Image src={image} /> : null}
            {description}
            {link ? (
              <a href={link} target="_blank" rel="noopener noreferrer">
                Read more.
              </a>
            ) : null}
          </AccordionItemPanelStyle>
        </AccordionItem>
      </Accordion>
    );
  }
}

export default CategoryItem;
