import styled from "styled-components";

export const NavBarDiv = styled.div`
  width: 100%;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  box-sizing: border-box;
  color: ${(props) => props.themeColors.text};
  font-weight: 600;
  h1{
    font-size: 1.5rem;
  }
  a {
    text-decoration: none;
    color: ${(props) => props.themeColors.text};
  }
  svg {
    filter: invert(39%) sepia(71%) saturate(4033%) hue-rotate(5deg)
      brightness(102%) contrast(102%);
  }
  
  }
`;
