import React, { Component } from "react";
import CategoryItem from "./CategoryItem";
import CategoryHeading from "./CategoryHeading";

class Category extends Component {
  state = {
    categoryChecked: []
  };

  // onCheckboxChange = e => {
  //   const categoryChecked = this.state.categoryChecked;
  //   if (e) {
  //     categoryChecked.push(+e.target.value);
  //   } else {
  //     console.log("error");
  //   }
  //   this.setState({ categoryChecked });
  // };

  render() {
    const { name, list } = this.props.details;

    return (
      <div className="category">
        <a id={`${name}`} />
        <CategoryHeading name={name} />
        <div className="category__table-titles">
          <h5>Guideline</h5>
          <h5>Implementation</h5>
          <h5>Impact</h5>
        </div>
        <div>
          {Object.keys(list).map(key => (
            <CategoryItem
              key={key}
              index={key}
              details={list[key]}
              onChange={this.onCheckboxChange}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Category;
