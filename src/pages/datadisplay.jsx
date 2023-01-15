import { useContext, useState } from "react";

import { UserContext } from "../contexts/usercontext";

import { getAthleteActivities } from "../utils/getathleteactivities";

import Activity from "../components/activity.component";

const DataDisplay = () => {
  const { user, token } = useContext(UserContext);
  const [dataList, setDataList] = useState(null);

  const handleGetActivities = async () => {
    console.log(token);
    console.log(token.accessToken);
    const newData = await getAthleteActivities(
      1673743613,
      1642207613,
      token.accessToken
    );
    setDataList(newData.data);
  };
  return (
    <div>
      Here's your data
      <h2>User #{user.id}</h2>
      <p>
        Name: {user.firstname} {user.lastname}
      </p>
      <p>Gender: {user.sex}</p>
      <img src={user.profile} alt="your profile" />
      <button onClick={handleGetActivities}>Get activities</button>
      <div>
        {dataList
          ? dataList.map((activity) => {
              const {
                name,
                type,
                achievement_count,
                average_cadence,
                average_heartrate,
                average_speed,
                average_watts,
                kilojoules, 
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
              };

              return <Activity activity={activityData} key={upload_id}/>;
            })
          : null}
      </div>
    </div>
  );
};
export default DataDisplay;
