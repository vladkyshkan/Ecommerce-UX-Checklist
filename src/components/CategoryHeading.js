import React, { Component } from "react";
import CategoryProgress from "./CategoryProgress";

class CategoryHeading extends Component {
  render() {
    return (
      <div className="category-heading">
        <div className="category-heading__title">
          <h3>{this.props.name}</h3>
          <CategoryProgress
            allNumber={this.props.allNumber}
            checkedNumber={this.props.checkedNumber}
          />
        </div>
        <div className="category-heading__buttons">
          <button className="round-button">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="15"
                height="15"
                rx="3.5"
                stroke="#00C193"
              />
              <g clipPath="url(#clip0)">
                <path
                  d="M6.50001 10.1L4.40001 7.99999L3.70001 8.69999L6.50001 11.5L12.5 5.49999L11.8 4.79999L6.50001 10.1Z"
                  fill="#00C193"
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
            <span className="tooltiptext">Check all</span>
          </button>
          <button className="round-button">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="15"
                height="15"
                rx="3.5"
                stroke="#00C193"
              />
            </svg>
            <span className="tooltiptext">Uncheck all</span>
          </button>
          <button
            className="round-button round-button__hide"
            onClick={this.props.hideSection}
          >
            <svg
              className={
                this.props.expanded ? null : "round-button__icon--hide"
              }
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 5.83333C12.3 5.83333 14.1667 7.7 14.1667 10C14.1667 10.5417 14.0584 11.05 13.8667 11.525L16.3 13.9583C17.5584 12.9083 18.55 11.55 19.1584 10C17.7167 6.34167 14.1584 3.75 9.99171 3.75C8.82504 3.75 7.70837 3.95833 6.67504 4.33333L8.47504 6.13333C8.95004 5.94167 9.45837 5.83333 10 5.83333V5.83333ZM1.66671 3.55833L3.56671 5.45833L3.95004 5.84167C2.56671 6.91667 1.48337 8.35 0.833374 10C2.27504 13.6583 5.83337 16.25 10 16.25C11.2917 16.25 12.525 16 13.65 15.55L14 15.9L16.4417 18.3333L17.5 17.275L2.72504 2.5L1.66671 3.55833V3.55833ZM6.27504 8.16667L7.56671 9.45833C7.52504 9.63333 7.50004 9.81667 7.50004 10C7.50004 11.3833 8.61671 12.5 10 12.5C10.1834 12.5 10.3667 12.475 10.5417 12.4333L11.8334 13.725C11.275 14 10.6584 14.1667 10 14.1667C7.70004 14.1667 5.83337 12.3 5.83337 10C5.83337 9.34167 6.00004 8.725 6.27504 8.16667V8.16667ZM9.86671 7.51667L12.4917 10.1417L12.5084 10.0083C12.5084 8.625 11.3917 7.50833 10.0084 7.50833L9.86671 7.51667Z"
                fill="#00C193"
              />
            </svg>
            <svg
              className={
                this.props.expanded ? "round-button__icon--hide" : null
              }
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 3.75C5.83337 3.75 2.27504 6.34167 0.833374 10C2.27504 13.6583 5.83337 16.25 10 16.25C14.1667 16.25 17.725 13.6583 19.1667 10C17.725 6.34167 14.1667 3.75 10 3.75ZM10 14.1667C7.70004 14.1667 5.83337 12.3 5.83337 10C5.83337 7.7 7.70004 5.83333 10 5.83333C12.3 5.83333 14.1667 7.7 14.1667 10C14.1667 12.3 12.3 14.1667 10 14.1667ZM10 7.5C8.61671 7.5 7.50004 8.61667 7.50004 10C7.50004 11.3833 8.61671 12.5 10 12.5C11.3834 12.5 12.5 11.3833 12.5 10C12.5 8.61667 11.3834 7.5 10 7.5Z"
                fill="#00C193"
              />
            </svg>

            <span className="tooltiptext">
              {this.props.expanded ? "Hide" : "Show"} category
            </span>
          </button>
        </div>
      </div>
    );
  }
}

export default CategoryHeading;
