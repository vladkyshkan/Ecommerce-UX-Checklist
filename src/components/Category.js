import React, { Component } from "react";
import CategoryItem from "./CategoryItem";
import CategoryHeading from "./CategoryHeading";
import styled from "styled-components";

const CategoryStyle = styled.div`
  margin-bottom: 80px;
  background-color: ${props => props.theme.colors.categoryBg};
  border-radius: 10px;
  box-shadow: 0px 15px 20px ${props => props.theme.colors.shadow};

  @media only screen and (max-width: 600px) {
    margin-bottom: 64px;
  }
`;

const H5 = styled.h5`
  font-size: 12px;
  line-height: 18px;
  font-weight: 500;
  color: ${props => props.theme.colors.h5};
`;

const CategoryContent = styled.div`
  display: ${props => (props.expanded ? "block" : "none")};
`;

const CategoryTableTitles = styled.div`
  display: flex;

  @media only screen and (max-width: 820px) {
    display: none;
  }

  ${H5}:first-child {
    width: 432px;
    margin-right: 96px;
    margin-left: 32px;

    @media only screen and (max-width: 1024px) {
      width: 380px;
      margin-right: 48px;
    }

    @media only screen and (max-width: 875px) {
      width: 332px;
    }
  }

  // prettier-ignore
  ${H5}:nth-child(2) {
    margin-right: 96px;

    @media only screen and (max-width: 1024px) {
      margin-right: 64px;
    }

    @media only screen and (max-width: 910px) {
      margin-right: 48px;
    }
  }
`;

class Category extends Component {
  state = {
    expanded: true,
    checkboxes: Object.keys(this.props.details.list).reduce(
      (options, key) => ({
        ...options,
        [key]: false
      }),
      {}
    )
  };

  handleCheckboxChange = changeEvent => {
    const { name } = changeEvent.target;
    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name]
      }
    }));
  };

  selectAllCheckboxes = isSelected => {
    Object.keys(this.state.checkboxes).forEach(checkbox => {
      this.setState(prevState => ({
        checkboxes: {
          ...prevState.checkboxes,
          [checkbox]: isSelected
        }
      }));
    });
  };

  selectAll = () => this.selectAllCheckboxes(true);

  deselectAll = () => this.selectAllCheckboxes(false);

  toggleClass = () => {
    this.setState(prevState => ({
      expanded: !prevState.expanded
    }));
  };

  render() {
    const { name, list } = this.props.details;

    return (
      <CategoryStyle>
        <a id={`${name}`} href={`#${this.props.name}`} />
        <CategoryHeading
          name={name}
          expanded={this.state.expanded}
          allNumber={list}
          checkedNumber={this.state.checkboxes}
          selectAll={this.selectAll}
          deselectAll={this.deselectAll}
          hideSection={this.toggleClass}
        />
        <CategoryContent expanded={this.state.expanded}>
          <CategoryTableTitles>
            <H5>Guideline</H5>
            <H5>Implementation</H5>
            <H5>Impact</H5>
          </CategoryTableTitles>
          <div>
            {Object.keys(list).map(key => (
              <CategoryItem
                key={key}
                index={key}
                details={list[key]}
                isChecked={this.state.checkboxes[key]}
                onChange={this.handleCheckboxChange}
              />
            ))}
          </div>
        </CategoryContent>
      </CategoryStyle>
    );
  }
}

export default Category;
