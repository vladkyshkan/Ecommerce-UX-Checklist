import React, { Component } from "react";
import CategoryItem from "./CategoryItem";
import CategoryHeading from "./CategoryHeading";

class Category extends Component {
  state = {
    expanded: true,
    categoryChecked: []
  };

  toogleClass = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  onCheckboxChange = (e, index) => {
    const checkedItem = {
      index,
      status: e
    };
    const categoryChecked = this.state.categoryChecked;
    if (e) {
      categoryChecked.push(checkedItem);
    } else {
      let key = categoryChecked.indexOf(checkedItem);
      categoryChecked.splice(key, 1);
    }
    this.setState({ categoryChecked });
  };

  render() {
    const { name, list } = this.props.details;

    return (
      <div className="category">
        <a id={`${name}`} href={`#${this.props.name}`} />
        <CategoryHeading
          name={name}
          expanded={this.state.expanded}
          hideSection={this.toogleClass}
          allNumber={this.props.details.list}
          checkedNumber={this.state.categoryChecked}
        />
        <div
          className={this.state.expanded ? null : "category__content--hidden"}
        >
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
      </div>
    );
  }
}

export default Category;
