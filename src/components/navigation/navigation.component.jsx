import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import { ThemeContext } from "../../contexts/themecontext";
import { UserContext } from "../../contexts/usercontext";

import { ReactComponent as Run } from "../../assets/run.svg";
import { ReactComponent as Bike } from "../../assets/bike.svg";
import { ReactComponent as Swim } from "../../assets/swim.svg";

import { NavBarDiv } from "./navigation.styles";
import { OrangeButton } from "../button/button.styles";
import ProfileDropdown from "../profile/profiledropdown";

const Navigation = () => {
  const { currentThemeColors } = useContext(ThemeContext);
  const { profileIsOpen, toggleProfileIsOpen, user } = useContext(UserContext);
  return (
    <Fragment>
      <NavBarDiv themeColors={currentThemeColors}>
        <Link to={`/`}>
          <h1>Strava Summaries</h1>
        </Link>
        {user ? (
          <>
            <Link to={`/dashboard`}>Data</Link> |{" "}
            <Link to={`/summaries`}>Summaries</Link> | {" "}
            <Link to={`/graphics`}>Graphics</Link> | {" "}
          </>
        ) : null}
        <Bike width={20} height={20} /> | <Run width={20} height={20} /> |{" "}
        <Swim width={20} height={20} /> |{" "}
        {user ? (
          <OrangeButton onClick={toggleProfileIsOpen} themeColors={currentThemeColors}>Profile</OrangeButton>
        ) : (
          <Link to={`/authentication`}>
            <OrangeButton themeColors={currentThemeColors}>Log in</OrangeButton>
          </Link>
        )}
        {profileIsOpen && <ProfileDropdown/>}
      </NavBarDiv>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
