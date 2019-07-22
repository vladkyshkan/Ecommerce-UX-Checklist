import React, { Component } from "react";
import ButtonNav from "./ButtonNav";
import Category from "./Category";
import Form from "./Form";
import Footer from "./Footer";
import guidelines from "../guidelines";

class App extends Component {
  state = {
    guidelines
  };

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="hero-screen">
            <div className="hero-title">
              <h4>Best practices</h4>
              <h1>
                <span className="highlite">E-commerce</span> project UX
                checklist
              </h1>
              <p className="hero-text">
                Improve shopping experience, delight customers and bring more
                revenue to business with these universal UX elements. But don't
                forget that all solutions should be tested.
              </p>
            </div>
            <Form />
          </div>
          <div className="navigation">
            {Object.keys(this.state.guidelines).map(key => (
              <ButtonNav key={key} details={this.state.guidelines[key].name} />
            ))}
          </div>
          <ul className="categories-list">
            {Object.keys(this.state.guidelines).map(key => (
              <Category
                key={key}
                index={key}
                details={this.state.guidelines[key]}
              />
            ))}
          </ul>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
