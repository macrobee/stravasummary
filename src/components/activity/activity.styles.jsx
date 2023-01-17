import styled from 'styled-components';

export const ActivityDiv = styled.div`
padding: 15px;
border: 1px solid black;
display:flex;
flex-direction: column;
justify-content: space-evenly;
width: 400px;
.icon-container{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 15px;
    grid-template-rows: repeat(2, 1fr);
    row-gap: 15px;

}
`