import styled from "styled-components"
export const Marker = styled.div`
border-radius: 2px;
height: 5px;
width: ${props=>props.length}px;
background-color: red;
transform: rotate(${props=>props.rotate}deg);`