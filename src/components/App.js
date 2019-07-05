import React, { Component } from "react";
import Category from "./Category";
import ButtonNav from "./ButtonNav";
import Form from "./Form";
import Footer from "./Footer";
import guidelines from "../guidelines";

class App extends Component {
  state = {
    guidelines: guidelines
  };

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="hero-screen">
            <div className="hero-title">
              <h4>best practices</h4>
              <h1>E-commerce project UX checklist</h1>
              <p>
                Improve shopping experience, delight customers and earn more
                with these universal UX elements
              </p>
            </div>
            <Form />
          </div>
          <div className="navigation">
            {Object.keys(this.state.guidelines).map(key => (
              <ButtonNav key={key} details={this.state.guidelines[key]} />
            ))}
          </div>
          <ul className="categories-list">
            {Object.keys(this.state.guidelines).map(key => (
              <Category key={key} details={this.state.guidelines[key]} />
            ))}
          </ul>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
