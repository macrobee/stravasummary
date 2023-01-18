import styled from "styled-components";

export const AuthenticationDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: max(400px, 50vh);
  div{
    display: flex;
    width: clamp(250px, 30%, 400px);
    flex-direction: column;
    gap: 20px;
    padding: 20px 30px;
    border: 1px solid ${(props) => props.themeColors.text};
  
  }
`;
