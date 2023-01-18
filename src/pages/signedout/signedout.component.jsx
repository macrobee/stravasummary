import { useContext } from "react";

import { ThemeContext } from "../../contexts/themecontext";

import { PageDiv } from "../page.styles";

const SignedOutPage = () => {
const {currentThemeColors} = useContext(ThemeContext);

    return <PageDiv themeColors={currentThemeColors}>You have been signed out</PageDiv>
}

export default SignedOutPage;