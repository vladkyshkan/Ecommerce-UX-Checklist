import React, { Component } from "react";

class CategoryProgress extends Component {
  render() {
    return (
      <div className="category-progress">
        <div className="category-progress_bar">
          <span style={{ width: "25%" }} />
        </div>
        2/15 completed
      </div>
    );
  }
}

export default CategoryProgress;
