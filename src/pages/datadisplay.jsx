import { useContext, useEffect, useState } from "react";

import { UserContext } from "../contexts/usercontext";
import { DataContext } from "../contexts/datacontext";

import {
  getAthleteActivities,
  getEpochTime,
  epochToSeconds,
  filterActivitiesInFetchedData,
  fetchedDateStringToObject,
} from "../utils/getathleteactivities";
import { collectActivityData } from "../utils/collectActivityData";

import Activity from "../components/activity/activity.component";
import UserSummary from "../components/usersummary/usersummary.component";

import { PageDiv } from "./page.styles";
import { ThemeContext } from "../contexts/themecontext";

const DataDisplay = () => {
  const { token } = useContext(UserContext);
  const { currentThemeColors } = useContext(ThemeContext);
  const { dataList, setDataList } =
    useContext(DataContext);
  const [dateRange, setDateRange] = useState({ before: null, after: null });

  const today = new Date();
  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

  useEffect(() => {
    //set default date range to [today, one month ago]

    const todayDate = getEpochTime(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );
    const oneMonthAgoDate = getEpochTime(
      oneMonthAgo.getFullYear(),
      oneMonthAgo.getMonth(),
      oneMonthAgo.getDate()
    );
    setDateRange({
      before: todayDate,
      after: oneMonthAgoDate,
    });
    console.log(todayDate, oneMonthAgoDate);
  }, []);
  
  const handleGetActivities = async () => {
    const beforeEpochDate = dateRange.before;
    const afterEpochDate = dateRange.after;
    console.log(`retrieving data from ${beforeEpochDate} to ${afterEpochDate}`);
    const newData = await getAthleteActivities(
      beforeEpochDate,
      afterEpochDate,
      token.accessToken
    );
    console.log(newData.data);
    await setDataList(newData.data);
    console.log(dataList);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleGetActivities();
  };
  const formInputChangeHandler = (e) => {
    const { name, value } = e.target;
    const [year, month, day] = value.split("-");
    const newDateEpoch = getEpochTime(year, month - 1, day);
    setDateRange({ ...dateRange, [name]: newDateEpoch }); //set date range to epoch time (ms)
  };

  return (
    <PageDiv themeColors={currentThemeColors}>
      <form onSubmit={handleSubmit}>
        Retrieve activity data
        <label htmlFor="before">Before:</label>
        <input
          type="date"
          name="before"
          id="before"
          defaultValue={today.toISOString().slice(0, 10)}
          onChange={formInputChangeHandler}
        />
        <label htmlFor="after">After</label>
        <input
          type="date"
          name="after"
          id="after"
          defaultValue={oneMonthAgo.toISOString().slice(0, 10)}
          onChange={formInputChangeHandler}
        />
        <button type="submit">Get activities</button>
      </form>
      <button className="p-4 flex justify-center items-center rounded-sm border-current">
        Calendar view
      </button>
      <div className="flex flex-col gap-1">
        {dataList &&
          dataList.map((activity) => {
            const activityData = collectActivityData(activity);
            return (
              <Activity
                activity={activityData}
                key={activityData.id}
                id={activityData.id}
              />
            );
          })}
      </div>
    </PageDiv>
  );
};
export default DataDisplay;
