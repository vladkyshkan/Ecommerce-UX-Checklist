import styled from "styled-components";

const handleColor = details => {
  switch (details) {
    case "high":
      return "rgba(111, 207, 151, 1)";
    case "easy":
      return "rgba(111, 207, 151, 1)";
    case "medium":
      return "rgba(242, 201, 76, 1)";
    default:
      return "rgba(235, 87, 87, 1)";
  }
};

const handleBackground = details => {
  switch (details) {
    case "high":
      return "rgba(111, 207, 151, 0.2)";
    case "easy":
      return "rgba(111, 207, 151, 0.2)";
    case "medium":
      return "rgba(242, 201, 76, 0.2)";
    default:
      return "rgba(235, 87, 87, 0.2)";
  }
};

const TagContainer = styled.div`
  display: block;
  width: 89px;
  margin-right: 96px;

  @media only screen and (max-width: 1024px) {
    margin-right: 64px;
  }

  @media only screen and (max-width: 910px) {
    margin-right: 48px;
  }

  @media only screen and (max-width: 820px) {
    display: ${props => (props.hide ? "none" : "block")};
    margin-right: 0;
  }
`;

const Tag = styled.div`
  display: inline-block;
  font-size: 12px;
  line-height: 18px;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 4px;
  padding: 2px 8px;
  color: ${props =>
    props.checked
      ? "rgba(196, 196, 196, 1)"
      : ({ details }) => handleColor(details)};
  background-color: ${props =>
    props.checked
      ? "rgba(196, 196, 196, 0.1)"
      : ({ details }) => handleBackground(details)};
`;

export { TagContainer, Tag };
