import axios from "axios";

export const getAthleteActivities = async (before="", after="", accessToken) => {
  
    try {
    const urlString =
      `https://www.strava.com/api/v3/athlete/activities?` +
      `before=` +
      before +
      `&after=` +
      after +
      `&page=1&per_page=100`;
      const response = await axios.get(urlString, { headers: { Authorization: `Bearer ${accessToken}` } }
      );
    console.log(response);
    return response;
  } catch (e) {
    console.log(e);
  }
};
