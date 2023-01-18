import { useContext } from "react";

import { UserContext } from "../../contexts/usercontext";

import UserSummary from "../usersummary/usersummary.component";

import { DropdownDiv } from "./profiledropdown.styles";
import { OrangeButton } from "../button/button.styles";
import { ThemeContext } from "../../contexts/themecontext";

const ProfileDropdown = () => {
    const {user} = useContext(UserContext);
    const {currentThemeColors} = useContext(ThemeContext);
    return <DropdownDiv themeColors={currentThemeColors}>
        <UserSummary user={user}/>
        <OrangeButton themeColors={currentThemeColors}>Sign Out</OrangeButton>
    </DropdownDiv>
}

export default ProfileDropdown;