import React, { Component } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemPanel
} from "react-accessible-accordion";

import ImplementationTag from "./ImplementationTag";
import ImpactTag from "./ImpactTag";

class CategoryItem extends Component {
  // handleCheckboxChange = e => {
  //   this.props.onChange(e.target.checked, this.props.index);
  // };

  render() {
    const {
      text,
      implementation,
      impact,
      isChecked,
      description,
      link
    } = this.props.details;

    return (
      <Accordion allowZeroExpanded="true">
        <AccordionItem>
          <div className="category-item">
            <label className="category-checkbox">
              <input
                type="checkbox"
                className="checkbox-hidden"
                checked={isChecked}
                value={text}
                onChange={this.props.onChange}
              />
              <span className="checkbox-visible" />
              <span className="category-item__description">{text}</span>
            </label>
            <ImplementationTag details={implementation} />
            <ImpactTag details={impact} />
            <AccordionItemButton className="accordion__button">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="category-item__expand"
              >
                <g opacity="0.8">
                  <path
                    d="M7.415 8.21002L12 12.795L16.585 8.21002L18 9.62502L12 15.625L6 9.62502L7.415 8.21002Z"
                    fill="#3A3A3A"
                  />
                </g>
              </svg>
            </AccordionItemButton>
          </div>
          <AccordionItemPanel className="accordion__panel">
            <p>
              {description}
              <a href={link} target="_blank" rel="noopener noreferrer">
                Read more.
              </a>
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    );
  }
}

export default CategoryItem;
