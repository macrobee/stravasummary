import { useContext } from "react";

import {ThemeContext} from '../contexts/themecontext';

import { PageDiv } from "./page.styles";

const Graphics = () => {
  const {currentThemeColors} = useContext(ThemeContext);
  return (
    <PageDiv themeColors={currentThemeColors}>
      <h1>Graphics</h1>
<p>Your current data</p>
<div className="border-solid">
    <h2>Date to date</h2>
    <p>total kilometers: xxxx</p>
    <p>total elevation</p>
    <p>average power </p>
    <p>hr zones: (graph)</p>
    <ul>
        <li>Longest ride</li>
        <li>hilliest ride</li>
        <li>Fastest ride</li>
    </ul>
</div>
    </PageDiv>
  );
};
export default Graphics;
