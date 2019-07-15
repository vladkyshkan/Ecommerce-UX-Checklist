import React, { Component } from "react";
import ImplementationTag from "./ImplementationTag";
import ImpactTag from "./ImpactTag";

class CategoryItem extends Component {
  handleCheckboxChange = event => {
    this.props.onChange(event.target.checked);
  };

  render() {
    const { text, implementation, impact, isChecked } = this.props.details;

    return (
      <div className="category-item">
        <label className="category-checkbox">
          <input
            type="checkbox"
            className="checkbox-hidden"
            onChange={this.handleCheckboxChange}
            // checked={}
          />
          <span className="checkbox-visible" />
          <span className="category-item__description">{text}</span>
        </label>
        <ImplementationTag details={implementation} />
        <ImpactTag details={impact} />
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
      </div>
    );
  }
}

export default CategoryItem;
