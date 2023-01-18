import { useContext, useEffect, useState } from "react";

import { UserContext } from "../contexts/usercontext";

import { getAthleteActivities } from "../utils/getathleteactivities";
import { collectActivityData } from "../utils/collectActivityData";

import Activity from "../components/activity/activity.component";
import UserSummary from "../components/usersummary/usersummary.component";

import { PageDiv } from "./page.styles";
import { ThemeContext } from "../contexts/themecontext";

const DataDisplay = () => {
  const { user, token } = useContext(UserContext);
  const {currentThemeColors} = useContext(ThemeContext);
  const [dataList, setDataList] = useState(null);
  const [dateRange, setDateRange] = useState({ before: null, after: null });

  const today = new Date();
  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

  useEffect(() => {
    setDateRange({
      before: Date.parse(today).toString().slice(0, 10),
      after: Date.parse(oneMonthAgo).toString().slice(0, 10),
    });
  }, []);

  const handleGetActivities = async () => {
    console.log(token);
    console.log(token.accessToken);
    const newData = await getAthleteActivities(
      // 1672425017//dec 30,
      1671129017,//dec15 //this one is working??? returns data before this date
      56,
      token.accessToken
    );
    await setDataList(newData.data);
    console.log(dataList);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleGetActivities();
  };
  const formInputChangeHandler = (e) => {
    const { name, value } = e.target;
    setDateRange({ ...dateRange, [name]: value });
    console.log(dateRange.before, dateRange.after);
  };
  return (
    <PageDiv themeColors={currentThemeColors}>
      
      <form onSubmit={handleSubmit}>
        Retrieve activity data
        <label htmlFor="beforedate">Before:</label>
        <input
          type="date"
          name="beforedate"
          id="beforedate"
          defaultValue={today.toISOString().slice(0, 10)}
          onChange={formInputChangeHandler}
        />
        <label htmlFor="afterdate">After</label>
        <input
          type="date"
          name="afterdate"
          id="afterdate"
          defaultValue={oneMonthAgo.toISOString().slice(0, 10)}
          onChange={formInputChangeHandler}
        />
        <button type="submit">Get activities</button>
      </form>
      <div>
        {dataList
          ? dataList.map((activity) => {
            const activityData = collectActivityData(activity);
              return <Activity activity={activityData} key={activityData.id} />;
            })
          : null}
      </div>
    </PageDiv>
  );
};
export default DataDisplay;
