import styled from 'styled-components';

export const DropdownDiv = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
padding: 20px;
position: absolute;
top: 12vh;
right: 0;
box-sizing: border-box;
background-color: ${props=>props.themeColors.background};
border: 1px solid ${props=>props.themeColors.text};
`