import { useContext } from "react";

import { ThemeContext } from "../../contexts/themecontext";

import { OrangeButton } from "../../components/button/button.styles";
import { AuthenticationDiv } from "./authentication.styles";

const { REACT_APP_CLIENT_ID } = process.env;
const redirectUrl = "http://localhost:3000/redirect";

const goToAuthPage = () => {
  window.location = `http://www.strava.com/oauth/authorize?client_id=${REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${redirectUrl}/exchange_token&approval_prompt=force&scope=read,activity:read`;
};

const Authentication = () => {
  const { currentThemeColors } = useContext(ThemeContext);

  return (
    <AuthenticationDiv themeColors={currentThemeColors}>
      <div>
        Before we can retrieve your data, we need to connect your Strava account
        <OrangeButton onClick={goToAuthPage} themeColors={currentThemeColors}>
          Sign in with Strava
        </OrangeButton>
      </div>
    </AuthenticationDiv>
  );
};
export default Authentication;
