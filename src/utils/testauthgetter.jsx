import axios from "axios";
const { REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET } = process.env;

export const testAuthGetter = async (authTok) => {
  try {
    const urlString =
      `https://www.strava.com/oauth/token?` +
      `client_id=` +
      REACT_APP_CLIENT_ID +
      `&client_secret=` +
      REACT_APP_CLIENT_SECRET +
      `&code=` +
      authTok +
      `&grant_type=authorization_code`;
    const response = await axios.post(urlString);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
