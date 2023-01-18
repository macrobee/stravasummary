import styled from "styled-components";

export const OrangeButton = styled.button`
  background-color: ${(props) => props.themeColors.main};
  padding: 5px 10px;
  border: none;
  border-radius: 3px;
  color: ${(props) => props.themeColors.background};
  font-weight: 600;
  :hover {
    background-color: ${(props) => props.themeColors.buttonClicked};
  }
`;
