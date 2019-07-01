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
            {this.props.itemDetails.text}
          </span>
        </label>
        <ImplementationTag details={this.props.itemDetails.implementation} />
        <ImpactTag details={this.props.itemDetails.impact} />
      </div>
    );
  }
}

export default CategoryItem;
