import React, { Component } from "react";
import CategoryItem from "./CategoryItem";
import CategoryHeading from "./CategoryHeading";

class Category extends Component {
  state = {
    expanded: true,
    checkboxes: Object.keys(this.props.details.list).reduce(
      (options, key) => ({
        ...options,
        [key]: false
      }),
      {}
    )
  };

  handleCheckboxChange = changeEvent => {
    const { name } = changeEvent.target;
    console.log(name);

    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name]
      }
    }));
  };

  selectAllCheckboxes = isSelected => {
    Object.keys(this.state.checkboxes).forEach(checkbox => {
      this.setState(prevState => ({
        checkboxes: {
          ...prevState.checkboxes,
          [checkbox]: isSelected
        }
      }));
    });
  };

  selectAll = () => this.selectAllCheckboxes(true);

  deselectAll = () => this.selectAllCheckboxes(false);

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
          checkedNumber={this.state.checkboxes}
          selectAll={this.selectAll}
          deselectAll={this.deselectAll}
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
                isChecked={this.state.checkboxes[key]}
                onChange={this.handleCheckboxChange}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Category;
