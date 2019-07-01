import React, { Component } from "react";
import CategoryItem from "./CategoryItem";
import CategoryHeading from "./CategoryHeading";

class Category extends Component {
  render() {
    return (
      <div className="category">
        <a id={`${this.props.details.name}`} />
        <CategoryHeading name={this.props.details.name} />
        <div className="category__table-titles">
          <h5>Guideline</h5>
          <h5>Implementation</h5>
          <h5>Impact</h5>
        </div>
        <div>
          {Object.keys(this.props.details.list).map(key => (
            <CategoryItem
              key={key}
              itemDetails={this.props.details.list[key]}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Category;
