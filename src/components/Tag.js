import styled from "styled-components";

const handleColor = details => {
  switch (details) {
    case "easy" || "high":
      return "rgba(111, 207, 151, 1)";
    case "medium":
      return "rgba(242, 201, 76, 1)";
    default:
      return "rgba(235, 87, 87, 1)";
  }
};

const handleBackground = details => {
  switch (details) {
    case "easy" || "high":
      return "rgba(111, 207, 151, 0.2)";
    case "medium":
      return "rgba(242, 201, 76, 0.2)";
    default:
      return "rgba(235, 87, 87, 0.2)";
  }
};

const TagContainer = styled.div`
  display: block;
  width: 185px;
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
