import { useContext } from "react";
import { Link } from "react-router-dom";

import { ThemeContext } from "../../contexts/themecontext";

import { PageDiv } from "../page.styles";
import { OrangeButton } from "../../components/button/button.styles";

const SignedOutPage = () => {
  const { currentThemeColors } = useContext(ThemeContext);

  return (
    <PageDiv themeColors={currentThemeColors}>
      <p>You have been signed out</p>
      <Link to={"/"}>
          <OrangeButton themeColors={currentThemeColors}>
            Return to Home
          </OrangeButton>
      </Link>
    </PageDiv>
  );
};

export default SignedOutPage;
