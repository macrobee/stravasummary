import styled from 'styled-components';

export const PageDiv = styled.div`
background-color: ${props=>props.themeColors.background};
color: ${props=>props.themeColors.text};
height: 88vh;
width: 100%;
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
`