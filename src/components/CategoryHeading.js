import React, { Component } from "react";
import CategoryProgress from "./CategoryProgress";

class CategoryHeading extends Component {
  render() {
    return (
      <div
        className={
          this.props.expanded ? "category-heading" : "category-heading__round"
        }
      >
        <div className="category-heading__title">
          <img
            src={`images/${this.props.name}.svg`}
            className="category-heading__icon"
            alt={`${this.props.name} icon`}
          />
          <h3>{this.props.name}</h3>
          <CategoryProgress
            allNumber={this.props.allNumber}
            checkedNumber={this.props.checkedNumber}
          />
        </div>
        <div className="category-heading__buttons">
          <button className="round-button" onClick={this.props.checkAll}>
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
          <button className="round-button" onClick={this.props.uncheckAll}>
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
                this.props.expanded ? "round-button__icon--hide" : null
              }
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 10C19 10 14.9706 16 10 16C5.02944 16 1 10 1 10"
                stroke="#00C193"
                strokeLinecap="round"
              />
              <rect
                x="7.81699"
                y="14.951"
                width="1"
                height="3"
                rx="0.5"
                transform="rotate(30 7.81699 14.951)"
                fill="#00C193"
              />
              <rect
                x="11.317"
                y="15.451"
                width="1"
                height="3"
                rx="0.5"
                transform="rotate(-30 11.317 15.451)"
                fill="#00C193"
              />
              <rect
                x="16"
                y="12.7214"
                width="1"
                height="3"
                rx="0.5"
                transform="rotate(-40 16 12.7214)"
                fill="#00C193"
              />
              <rect
                x="2.92836"
                y="12.0786"
                width="1"
                height="3"
                rx="0.5"
                transform="rotate(40 2.92836 12.0786)"
                fill="#00C193"
              />
            </svg>

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
                d="M1.15757 10.6031C0.939197 10.3604 0.764508 10.154 0.63815 10C0.764508 9.84604 0.939197 9.63964 1.15757 9.3969C1.65168 8.84765 2.36638 8.11573 3.24801 7.38495C5.02546 5.91164 7.41264 4.5 10 4.5C12.5874 4.5 14.9745 5.91164 16.752 7.38495C17.6336 8.11573 18.3483 8.84765 18.8424 9.3969C19.0608 9.63964 19.2355 9.84604 19.3618 10C19.2355 10.154 19.0608 10.3604 18.8424 10.6031C18.3483 11.1523 17.6336 11.8843 16.752 12.6151C14.9745 14.0884 12.5874 15.5 10 15.5C7.41264 15.5 5.02546 14.0884 3.24801 12.6151C2.36638 11.8843 1.65168 11.1523 1.15757 10.6031Z"
                stroke="#00C193"
                strokeLinecap="round"
              />
              <circle cx="10" cy="10" r="3" fill="#00C193" />
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
