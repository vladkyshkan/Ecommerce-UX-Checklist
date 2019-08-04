import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./themes/globalStyle";
import light from "./themes/light";
import dark from "./themes/dark";
import ButtonNav from "./ButtonNav";
import Category from "./Category";
import Footer from "./Footer";
import guidelines from "../guidelines";

const H1 = styled.h1`
  font-size: 48px;
  line-height: 57px;
  font-weight: 700;
  margin: 0;
  span {
    color: rgba(0, 193, 147, 1);
  }
`;

const H4 = styled.h4`
  font-size: 12px;
  line-height: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: ${props => props.theme.colors.h4};
`;

const Text = styled.p`
  line-height: 24px;
  color: ${props => props.theme.colors.description};
  margin: 16px 0 0 0;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 61.25rem;
`;

const HeroScreen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
`;

const HeroTitle = styled.div`
  width: 50%;
  text-align: center;
`;

const Navigation = styled.div`
  margin: 80px 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const CategoriesList = styled.ul`
  padding: 0;
`;

const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 48px;
`;

const Toggle = styled.label`
  height: 28px;
  cursor: pointer;
  input {
    display: none;
    & + span {
      padding-left: 50px;
      min-height: 28px;
      line-height: 28px;
      display: block;
      position: relative;
      white-space: nowrap;
      transition: color 0.5s ease;
      &:before,
      &:after {
        content: "";
        display: block;
        position: absolute;
        border-radius: 20px;
      }
      &:before {
        top: 0;
        left: 0;
        width: 52px;
        height: 28px;
        background: rgba(46, 54, 66, 1);
        transition: all 0.5s ease;
        background-image: url("./icons/night.svg");
        background-position: 80% 50%;
        background-repeat: no-repeat;
      }
      &:after {
        width: 24px;
        height: 24px;
        background: rgba(250, 250, 250, 1);
        top: 2px;
        left: 2px;
        box-shadow: 0 1px 3px rgba(#121621, 0.1);
        transition: all 0.5s ease;
      }
    }
    &:checked {
      & + span {
        &:before {
          background: rgba(46, 54, 66, 1);
          background-image: url("./icons/day.svg");
          background-position: 20% 50%;
          background-repeat: no-repeat;
        }
        &:after {
          background: rgba(250, 250, 250, 1);
          transform: translate(24px, 0);
        }
      }
    }
  }
`;

class App extends Component {
  state = {
    guidelines,
    darkMode: false
  };

  toggleDarkMode = () => {
    this.setState(prevState => ({
      darkMode: !prevState.darkMode
    }));
  };

  render() {
    return (
      <ThemeProvider theme={this.state.darkMode ? dark : light}>
        <>
          <GlobalStyle />
          <Wrapper>
            <HeroScreen>
              <HeroTitle>
                <ToggleContainer>
                  <Toggle onChange={this.toggleDarkMode}>
                    <input type="checkbox" />
                    <span />
                  </Toggle>
                </ToggleContainer>
                <H4>Best practices</H4>
                <H1>
                  <span>E-commerce</span>
                  <br />
                  project UX checklist
                </H1>
                <Text>
                  Improve shopping experience, delight customers and bring more
                  revenue to business with these universal UX elements
                </Text>
              </HeroTitle>
            </HeroScreen>
            <Navigation>
              {Object.keys(this.state.guidelines).map(key => (
                <ButtonNav
                  key={key}
                  details={this.state.guidelines[key].name}
                />
              ))}
            </Navigation>
            <CategoriesList>
              {Object.keys(this.state.guidelines).map(key => (
                <Category
                  key={key}
                  index={key}
                  details={this.state.guidelines[key]}
                />
              ))}
            </CategoriesList>
          </Wrapper>
          <Footer />
        </>
      </ThemeProvider>
    );
  }
}

export default App;
