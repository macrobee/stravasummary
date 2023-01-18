import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../../contexts/usercontext";

import UserSummary from "../usersummary/usersummary.component";

import { DropdownDiv } from "./profiledropdown.styles";
import { OrangeButton } from "../button/button.styles";
import { ThemeContext } from "../../contexts/themecontext";

const ProfileDropdown = () => {
  const { user, setUser, toggleProfileIsOpen } = useContext(UserContext);
  const { currentThemeColors, toggleThemeColors } = useContext(ThemeContext);
  const navigate = useNavigate();

  const logOutUser = () => {
    toggleProfileIsOpen();
    navigate("/");
    setUser(null);
    
  };
  return (
    <DropdownDiv themeColors={currentThemeColors}>
      <UserSummary user={user} />
      <button onClick={toggleThemeColors}>Night mode</button>
      <OrangeButton onClick={logOutUser} themeColors={currentThemeColors}>
        Sign Out
      </OrangeButton>
    </DropdownDiv>
  );
};

export default ProfileDropdown;
