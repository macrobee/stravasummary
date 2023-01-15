import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import _ from "lodash";

import { UserContext } from "../contexts/usercontext";
import { cleanUpAuthToken } from "../utils/cleanupauthtoken";
import { testAuthGetter } from "../utils/testauthgetter";

// import { getUserData } from "../utils/getuserdata";

const StravaRedirectPage = () => {
  const { user, setUser, setToken } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    const authenticate = async () => {
      const { location } = window;
      try {
        if (_.isEmpty(location)) {
          navigate("/");
        }
        const stravaAuthToken = cleanUpAuthToken(location.search);
        const data = await testAuthGetter(stravaAuthToken);
        if (data) {
          setUser(data.athlete);
          setToken({
            accessToken: data.access_token,
            expiresIn: data.expires_in,
            refreshToken: data.refresh_token,
          });
        }

        // const user = await getUserData(userID, accessToken);
        //     this.props.setUserActivities(user);
        // console.log(history, location);
        // console.log(data);

        navigate("/dashboard");
      } catch (error) {
        navigate("/");
      }
    };
    authenticate();
  });
  return <div>Loading...</div>;
};

export default StravaRedirectPage;