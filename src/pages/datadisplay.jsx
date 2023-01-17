import { useContext, useEffect, useState } from "react";

import { UserContext } from "../contexts/usercontext";

import { getAthleteActivities } from "../utils/getathleteactivities";

import Activity from "../components/activity/activity.component";
import UserSummary from "../components/usersummary/usersummary.component";

const DataDisplay = () => {
  const { user, token } = useContext(UserContext);
  const [dataList, setDataList] = useState(null);
  const [dateRange, setDateRange] = useState({ start: null, end: null });

  const today = new Date();
  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

  useEffect(() => {
    setDateRange({
      start: Date.parse(today).toString().slice(0, 10),
      end: Date.parse(oneMonthAgo).toString().slice(0, 10),
    });
  }, []);

  const handleGetActivities = async () => {
    console.log(token);
    console.log(token.accessToken);
    const newData = await getAthleteActivities(
      dateRange.start,
      dateRange.end,
      token.accessToken
    );
    setDataList(newData.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleGetActivities();
  };
  const formInputChangeHandler = (e) => {
    const { name, value } = e.target;
    setDateRange({ ...dateRange, [name]: value });
    console.log(dateRange.start, dateRange.end);
  };
  return (
    <div>
      {user ? <UserSummary user={user} /> : <p>error loading data</p>}
      <form onSubmit={handleSubmit}>
        Retrieve activity data
        <label htmlFor="startdate">Before:</label>
        <input
          type="date"
          name="startdate"
          id="startdate"
          defaultValue={today.toISOString().slice(0, 10)}
          onChange={formInputChangeHandler}
        />
        <label htmlFor="enddate">After</label>
        <input
          type="date"
          name="enddate"
          id="enddate"
          defaultValue={oneMonthAgo.toISOString().slice(0, 10)}
          onChange={formInputChangeHandler}
        />
        <button type="submit">Get activities</button>
      </form>
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

              return <Activity activity={activityData} key={upload_id} />;
            })
          : null}
      </div>
    </div>
  );
};
export default DataDisplay;
