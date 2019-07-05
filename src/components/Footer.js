import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <h2>
          If you have any suggestions or questions, don’t hesitate to reach me
        </h2>
        <button className="button-generic button-main button-center">
          <svg
            className="button-icon"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.3333 2.66675H2.66665C1.93331 2.66675 1.33998 3.26675 1.33998 4.00008L1.33331 12.0001C1.33331 12.7334 1.93331 13.3334 2.66665 13.3334H13.3333C14.0667 13.3334 14.6667 12.7334 14.6667 12.0001V4.00008C14.6667 3.26675 14.0667 2.66675 13.3333 2.66675ZM13.3333 5.33342L7.99998 8.66675L2.66665 5.33342V4.00008L7.99998 7.33342L13.3333 4.00008V5.33342Z"
              fill="white"
            />
          </svg>
          Contact me
        </button>
        <p className="captcha">
          Icons by Google from <a href="https://material.io">www.material.io</a>{" "}
          is licensed under{" "}
          <a href="https://www.apache.org/licenses/LICENSE-2.0">
            Apache license version 2.0
          </a>
          .
        </p>
        <p className="captcha">
          Made by <a href="https://vladkyshkan.io">Vlad Kyshkan</a>
        </p>
      </div>
    );
  }
}

export default Footer;
