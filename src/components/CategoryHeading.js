import React, { Component } from "react";
import CategoryProgress from "./CategoryProgress";

class CategoryHeading extends Component {
  render() {
    return (
      <div className="category-heading">
        <div className="category-heading__title">
          <h3>{this.props.name}</h3>
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
            </svg>
          </button>
          <button className="round-button">
            <svg width="19" height="18" viewBox="0 0 19 18">
              <path
                fill="#00756A"
                d="M9.00005,4.1001 C11.1528,4.1001 12.9,5.8473 12.9,8.00011 C12.9,8.50711 12.7986,8.98291 12.6192,9.4275 L14.8968,11.7051 C16.0747,10.7223 17.0029,9.4509 17.5723,8.00011 C16.2229,4.5759 12.8922,2.1501 8.99225,2.1501 C7.90025,2.1501 6.85505,2.3451 5.88785,2.6961 L7.57265,4.3809 C8.01725,4.2015 8.49305,4.1001 9.00005,4.1001 L9.00005,4.1001 Z M1.20004,1.9707 L2.97845,3.7491 L3.33725,4.1079 C2.04244,5.1141 1.02844,6.4557 0.420044,8.00011 C1.76944,11.4243 5.10005,13.8501 9.00005,13.8501 C10.209,13.8501 11.3634,13.6161 12.4164,13.1949 L12.744,13.5225 L15.0295,15.8001 L16.0201,14.8095 L2.19064,0.9801 L1.20004,1.9707 L1.20004,1.9707 Z M5.51345,6.28411 L6.72245,7.49311 C6.68345,7.65691 6.66005,7.82851 6.66005,8.00011 C6.66005,9.2949 7.70525,10.3401 9.00005,10.3401 C9.17165,10.3401 9.34325,10.3167 9.50705,10.2777 L10.716,11.4867 C10.1934,11.7441 9.61625,11.9001 9.00005,11.9001 C6.84725,11.9001 5.10005,10.1529 5.10005,8.00011 C5.10005,7.38391 5.25605,6.80671 5.51345,6.28411 L5.51345,6.28411 Z M8.87525,5.6757 L11.3322,8.13271 L11.3478,8.00791 C11.3478,6.71311 10.3026,5.6679 9.00785,5.6679 L8.87525,5.6757 Z"
                transform="translate(0 1)"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  }
}

export default CategoryHeading;
