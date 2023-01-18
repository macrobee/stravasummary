import { useContext } from "react";

import {ThemeContext} from '../contexts/themecontext';

import { PageDiv } from "./page.styles";

const Home = () => {
  const {currentThemeColors} = useContext(ThemeContext);
  return (
    <PageDiv themeColors={currentThemeColors}>
      <h1>Home</h1>
    </PageDiv>
  );
};
export default Home;
