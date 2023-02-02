const getLocalStartTime = (startDateLocal) => {
  const startTime = startDateLocal.slice(11, -1);
  return startTime;
}
const getActivityDate = (startDateString) =>{
  const startDate = startDateString.slice(0,10);
  return startDate;
}
const getLongDateFromString = (dateString)=>{
  const date = new Date(dateString);

  const options = {weekday: 'short', day: 'numeric', month: 'short'};
  const longDate = date.toLocaleDateString('en-US', options);
  return longDate;
}
const getDateTimeArray = (dateString)=>{
  const dateTime = dateString.split("T");
}
const toRegularTime = (militaryTime) => {
  const [hours, minutes, seconds] = militaryTime.split(':');
  return `${(hours > 12) ? hours - 12 : hours}:${minutes}${(hours >= 12) ? 'PM' : 'AM'}`;
}
export const getEpochTimeSeconds = (date) => {
  const newDate = new Date(date);
  const epochTime = Math.floor(Date.parse(newDate) / 1000);
  return epochTime;
};
export const collectActivityData = (activity)=>{
    const {
        name,
        type,
        achievement_count,
        average_cadence,
        average_heartrate,
        average_speed,
        average_watts,
        kilojoules,
        map,
        start_date,
        start_date_local,
        upload_id,
      } = activity;
      const localStartTime = getLocalStartTime(start_date_local);
      const localEpochStartTime = getEpochTimeSeconds(getLocalStartTime(start_date_local));
      const centralEpochStartTime = getEpochTimeSeconds(getLocalStartTime(start_date));
      const timeZoneDifference = localStartTime - centralEpochStartTime;
      const activityData = {
        name,
        type,
        achievementCount: achievement_count,
        cadence: Math.round(average_cadence),
        hr: Math.round(average_heartrate),
        speed: Math.round(average_speed),
        watts: Math.round(average_watts),
        kj: Math.round(kilojoules),
        map: map,
        date: getLongDateFromString(getActivityDate(start_date_local)),
        startTime: toRegularTime(localStartTime),
        offset: timeZoneDifference,
        id: upload_id,

      };
      return activityData;
}