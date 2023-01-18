import styled from 'styled-components';

export const DropdownDiv = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
padding: 20px;
position: absolute;
top: 50px;
right: 0;
background-color: ${props=>props.themeColors.background};
border: 1px solid ${props=>props.themeColors.text};
`