import React, { Component } from "react";
import CategoryProgress from "./CategoryProgress";

class CategoryHeading extends Component {
  render() {
    return (
      <div className="category-heading">
        <div className="category-heading__title">
          <h3>
            Homepage{" "}
            <span role="img" aria-label="home">
              🏠
            </span>
          </h3>
          <CategoryProgress />
        </div>
        <div className="category-heading__buttons">
          <button className="round-button">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="15"
                height="15"
                rx="3.5"
                stroke="#00756A"
              />
              <g clip-path="url(#clip0)">
                <path
                  d="M6.50001 10.1L4.40001 7.99999L3.70001 8.69999L6.50001 11.5L12.5 5.49999L11.8 4.79999L6.50001 10.1Z"
                  fill="#00756A"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect
                    width="12"
                    height="12"
                    fill="white"
                    transform="translate(2 2)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    );
  }
}

export default CategoryHeading;
