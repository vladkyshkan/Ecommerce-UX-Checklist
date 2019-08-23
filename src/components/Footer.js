import React, { Component } from "react";
import styled from "styled-components";

const FooterStyle = styled.div`
  background-color: ${props => props.theme.colors.footer};
  padding: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media only screen and (max-width: 400px) {
    padding: 64px 32px;
  }
`;

const H2 = styled.h2`
  font-size: 21px;
  line-height: 29px;
  font-weight: 700;
  margin: 0;
  text-align: center;
  max-width: 500px;
  margin-bottom: 24px;
  color: #fff;

  @media only screen and (max-width: 600px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const ButtonFooter = styled.button`
  margin-bottom: 48px;
  width: 156px;
  height: 40px;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 193, 147, 1);
  color: white;
  border: none;

  svg {
    margin-right: 6px;
  }

  :hover {
    cursor: pointer;
    color: white;
    opacity: 0.9;
  }
`;

const Captcha = styled.p`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);

  /* @media only screen and (max-width: 400px) {
    font-size: 12px;
  } */
`;

class Footer extends Component {
  render() {
    return (
      <FooterStyle>
        <H2>
          If you have any suggestions or questions, don’t hesitate to reach me
        </H2>
        <a href="mailto:vladkyshkan@gmail.com">
          <ButtonFooter>
            <svg
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
          </ButtonFooter>
        </a>
        <Captcha>
          Designed and coded by{" "}
          <a href="https://vladkyshkan.io">Vlad Kyshkan</a>
        </Captcha>
      </FooterStyle>
    );
  }
}

export default Footer;
