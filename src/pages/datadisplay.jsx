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
  const {
    displayedDataList,
    setDisplayedDataList,
    fetchedData,
    addToFetchedData,
    resetFetchedData,
  } = useContext(DataContext);
  const [dateRange, setDateRange] = useState({ before: null, after: null });
  const [displayedDataRange, setDisplayedDataRange] = useState(10);

  const today = new Date();
  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

  //sets default date range
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

  //sets displayed data as first x entries of fetched data
  useEffect(() => {
    if (fetchedData.length > displayedDataRange) {
      setDisplayedDataList(fetchedData.slice(0, displayedDataRange));
    } else {
      setDisplayedDataList(fetchedData);
    }
  }, [fetchedData]);

  const handleGetActivities = async () => {
    let currentFetchedData = [];
    const beforeEpochDate = dateRange.before;
    const afterEpochDate = dateRange.after;
    console.log(`retrieving data from ${beforeEpochDate} to ${afterEpochDate}`);

    let pageCount = 1;
    let shouldFetchAgain = false;
    do {
      const newData = await getAthleteActivities(
        beforeEpochDate,
        afterEpochDate,
        token.accessToken,
        pageCount
      );
      //add loading
      currentFetchedData = [...currentFetchedData, ...newData.data];
      pageCount = pageCount + 1;

      if (newData.data.length === 200) {
        shouldFetchAgain = true;
      } else {
        shouldFetchAgain = false;
      }
    } while (shouldFetchAgain === true);
    addToFetchedData(currentFetchedData);
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

  const changeDisplayPage = (e) => {
    const direction = e.target.id;
    console.log(direction);
    if (direction === "next" && displayedDataRange < fetchedData.length - 25) {
      console.log("increasing display range");
      setDisplayedDataRange(displayedDataRange + 25);
    } else if (direction === "prev" && displayedDataRange >= 26) {
      console.log("decreasing display range");
      setDisplayedDataRange(displayedDataRange - 25);
    }
  };

  return (
    <PageDiv themeColors={currentThemeColors}>
      <form onSubmit={handleSubmit}>
        Retrieve activity data
        <label htmlFor="after">From:</label>
        <input
          type="date"
          name="after"
          id="after"
          defaultValue={oneMonthAgo.toISOString().slice(0, 10)}
          onChange={formInputChangeHandler}
        />
        <label htmlFor="before">To:</label>
        <input
          type="date"
          name="before"
          id="before"
          defaultValue={today.toISOString().slice(0, 10)}
          onChange={formInputChangeHandler}
        />
        <button type="submit">Get activities</button>
      </form>
      <button className="p-4 flex justify-center items-center rounded-sm border-current">
        Calendar view
      </button>
      <div className="flex flex-col gap-1 overflow-y-auto h-screen w-full">
        {displayedDataList &&
          displayedDataList.map((activity) => {
            const activityData = collectActivityData(activity);
            return (
              <Activity
                activity={activityData}
                key={activityData.id}
                id={activityData.id}
              />
            );
          })}
        <button onClick={changeDisplayPage} id="prev">
          Prev
        </button>
        <button onClick={changeDisplayPage} id="next">
          Next
        </button>
      </div>
    </PageDiv>
  );
};
export default DataDisplay;
