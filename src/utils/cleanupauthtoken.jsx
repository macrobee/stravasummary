export const cleanUpAuthToken = (string) => {
    console.log(string);
  const authCode = string.split("&")[1].slice(5);
  console.log(authCode);
  return authCode;
  //returns code returned by strava
};
