import React, { Component } from "react";
import styled from "styled-components";

const CategoryProgressStyle = styled.div`
  color: ${props => props.theme.colors.body};
  font-weight: 500;
`;

const CategoryProgressBarStyle = styled.div`
  width: 100px;
  height: 4px;
  background-color: ${props => props.theme.colors.progressBarBg};
  border-radius: 10px;
  display: inline-block;
  margin-right: 12px;
  position: relative;
  bottom: 3px;

  span {
    display: block;
    background-color: ${props => props.theme.colors.body};
    height: 100%;
    border-radius: 10px;
    transition: 0.3s;
  }
`;

class CategoryProgress extends Component {
  render() {
    return (
      <CategoryProgressStyle>
        <CategoryProgressBarStyle>
          <span
            style={{
              width:
                (100 / Object.keys(this.props.allNumber).length) *
                Object.values(this.props.checkedNumber).reduce(
                  (a, item) => a + item,
                  0
                )
            }}
          />
        </CategoryProgressBarStyle>
        {Object.values(this.props.checkedNumber).reduce(
          (a, item) => a + item,
          0
        )}
        /{Object.keys(this.props.allNumber).length} completed
      </CategoryProgressStyle>
    );
  }
}

export default CategoryProgress;
