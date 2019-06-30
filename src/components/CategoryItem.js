import React, { Component } from "react";
import Checkbox from "./Checkbox";
import ImplementationTag from "./ImplementationTag";
import ImpactTag from "./ImpactTag";

class CategoryItem extends Component {
  state = {
    checked: false
  };

  handleCheckboxChange = event => {
    this.setState({ checked: event.target.checked });
  };

  render() {
    return (
      <div className="category-item">
        <label>
          <Checkbox
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
          />
          <span className="category-item__description">
            Display clear CTA button above the fold
          </span>
        </label>
        <ImplementationTag />
        <ImpactTag />
      </div>
    );
  }
}

export default CategoryItem;
