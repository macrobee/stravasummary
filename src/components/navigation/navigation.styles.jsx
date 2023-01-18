import styled from "styled-components";

export const NavBarDiv = styled.div`
  position: relative;
  width: 100%;
  height: 12vh;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  box-sizing: border-box;
  color: ${(props) => props.themeColors.text};
  background-color: ${props=>props.themeColors.background};
  font-weight: 600;
  border-bottom: 1px solid ${props=>props.themeColors.text};
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
