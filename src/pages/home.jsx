import { useContext, useRef } from "react";

import {ThemeContext} from '../contexts/themecontext';

import SimpleMap from "../components/map/googlemap.component";
import LeafletMap from "../components/map/leafletmap.component";

import { PageDiv } from "./page.styles";

const Home = () => {
  const {currentThemeColors} = useContext(ThemeContext);
  const mapDiv = useRef(null);
  return (
    <PageDiv themeColors={currentThemeColors} ref={mapDiv}>
      <h1>Home</h1>
      <SimpleMap />
      {/* <LeafletMap /> */}
    </PageDiv>
  );
};
export default Home;
