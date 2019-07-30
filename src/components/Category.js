import React, { Component } from "react";
import CategoryItem from "./CategoryItem";
import CategoryHeading from "./CategoryHeading";

class Category extends Component {
  state = {
    expanded: true,
    checkedItems: {}
  };

  // onCheckboxChange = (e, index) => {
  //   const checkedItem = {
  //     index,
  //     checked: e
  //   };
  //   const checkedItems = this.state.checkedItems;
  //   if (e) {
  //     checkedItems[index] = checkedItem;
  //   } else {
  //     delete checkedItems[index];
  //   }
  //   this.setState({ checkedItems });
  // };

  // checkAll = e => {
  //   let categoryDetails = this.state.categoryDetails;
  //   Object.keys(categoryDetails).forEach(
  //     item => (item.isChecked = e.target.checked)
  //   );
  //   this.setState({ categoryDetails });
  // };

  // uncheckAll = e => {
  //   this.setState({
  //     checkedItems: {}
  //   });
  // };

  toogleClass = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { name, list } = this.props.details;

    return (
      <div className="category">
        <a id={`${name}`} href={`#${this.props.name}`} />
        <CategoryHeading
          name={name}
          expanded={this.state.expanded}
          allNumber={list}
          checkedNumber={this.state.checkedItems}
          checkAll={this.checkAll}
          uncheckAll={this.uncheckAll}
          hideSection={this.toogleClass}
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
