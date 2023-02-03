import axios from "axios";

export const getAthleteActivities = async (
  before = 56,
  after = 56,
  accessToken, page=1
) => {
  //before and after are received as epoch times in milliseconds and must be converted to seconds for Strava's API
  let urlString;
  if (before > after) {
    urlString =
      `https://www.strava.com/api/v3/athlete/activities?` +
      `before=` +
      Math.floor(before / 1000) +
      `&after=` +
      Math.floor(after / 1000) +
      `&page=${page}&per_page=200`;
  } else {
    urlString =
      `https://www.strava.com/api/v3/athlete/activities?` +
      `before=` +
      after +
      `&after=` +
      before +
      `&page=${page}&per_page=200`;
  }
  try {
    console.log(urlString);
    const response = await axios.get(urlString, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    return response;
  } catch (e) {
    console.log(e);
  }
};

export const getEpochTime = (year, month, day) => {
  const date = new Date(year, month, day);
  const epochTime = Date.parse(date);
  return epochTime;
};
export const epochToSeconds = (epochTime) => {
  return Math.floor(epochTime / 1000);
};

export const fetchedDateStringToObject = (dateString) => {
  const dateDashForm = dateString.split("T")[0];
  const dateArray = dateDashForm.split("-");
  const [year, month, day] = dateArray;
  const dateObject = new Date(year, month, day);
  dateObject.setMonth(dateObject.getMonth() - 1);
  return dateObject;
  // exampleString: 2023-01-27T01:42:53Z
  //returns date Object for 2023-01-27
};
export const epochToDateObject = (epochDate) => {
  const newDate = new Date(epochDate);
  return newDate;
};

export const filterActivitiesInFetchedData = (before, after, activityList) => {
  const filteredActivityList = activityList.filter((activity) => {
    const activityDate = fetchedDateStringToObject(activity.start_date_local);
    const activityEpoch = getEpochTime(activityDate);
    // console.log(activityDate);
    // console.log(activityEpoch < before);
    // console.log(activityEpoch> after);
    // console.table([before, activityEpoch, after])
    if (before > after) {
      return activityEpoch < before && activityEpoch > after;
    } else {
      return activityEpoch > before && activityEpoch < after;
    }
  });
  return filteredActivityList;
};
