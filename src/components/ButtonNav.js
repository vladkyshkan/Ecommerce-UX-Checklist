import React, { Component } from "react";

class ButtonNav extends Component {
  render() {
    return (
      <a class="button-nav" href={`#${this.props.details.name}`}>
        {this.props.details.name}
      </a>
    );
  }
}

export default ButtonNav;
