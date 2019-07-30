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
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="3.5"
              y="5.5"
              width="17"
              height="13"
              rx="1.5"
              stroke="white"
            />
            <path
              d="M6 8L11.3598 12.4665C11.7307 12.7756 12.2693 12.7756 12.6402 12.4665L18 8"
              stroke="white"
              strokeLinecap="round"
            />
          </svg>
          Contact me
        </button>
        <p className="captcha">
          Designed and coded by{" "}
          <a href="https://vladkyshkan.io">Vlad Kyshkan</a>
        </p>
      </div>
    );
  }
}

export default Footer;
