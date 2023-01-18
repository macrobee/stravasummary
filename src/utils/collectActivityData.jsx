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
const toRegularTime = (militaryTime) => {
  const [hours, minutes] = militaryTime.split(':');
  return `${(hours > 12) ? hours - 12 : hours}:${minutes}${(hours >= 12) ? 'PM' : 'AM'}`;
}

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
      const activityData = {
        name,
        type,
        achievementCount: achievement_count,
        cadence: average_cadence,
        hr: average_heartrate,
        speed: average_speed,
        watts: average_watts,
        kj: kilojoules,
        map: map,
        date: getLongDateFromString(getActivityDate(start_date)),
        startTime: toRegularTime(getLocalStartTime(start_date_local)),
        id: upload_id,

      };
      return activityData;
}