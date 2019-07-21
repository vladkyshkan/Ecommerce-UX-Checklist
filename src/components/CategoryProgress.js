import React, { Component } from "react";

class CategoryProgress extends Component {
  render() {
    return (
      <div className="category-progress">
        <div className="category-progress_bar">
          <span
            className="category-progress_bar--animation"
            style={{
              width:
                (100 / Object.keys(this.props.allNumber).length) *
                Object.keys(this.props.checkedNumber).length
            }}
          />
        </div>
        {Object.keys(this.props.checkedNumber).length}/
        {Object.keys(this.props.allNumber).length} completed
      </div>
    );
  }
}

export default CategoryProgress;
