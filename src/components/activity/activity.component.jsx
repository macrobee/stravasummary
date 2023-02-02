import { useContext } from "react";

import { DataContext } from "../../contexts/datacontext";

import { ReactComponent as AchievementIcon } from "../../assets/achievements.svg";
import { ReactComponent as CadenceIcon } from "../../assets/cadence.svg";
import { ReactComponent as EnergyIcon } from "../../assets/energy.svg";
import { ReactComponent as HeartRateIcon } from "../../assets/heartrate.svg";
import { ReactComponent as PowerIcon } from "../../assets/power.svg";
import { ReactComponent as SpeedIcon } from "../../assets/speed.svg";

import { ActivityDiv } from "./activity.styles";

const Activity = ({ activity, id }) => {
  const {removeEntryFromList} = useContext(DataContext);
  const handleRemoveClick = () => {
    console.log(id);
    removeEntryFromList(id);
  };
  return (
    <ActivityDiv>
      <h2>{activity.name}</h2>
      <h3>{activity.type}</h3>
      <p>
        {activity.date}, {activity.startTime}
      </p>
      <div className="icon-container">
        <p className="flex">
          <AchievementIcon height={20} width={20} /> {activity.achievementCount}{" "}
        </p>
        <p className="flex">
          <CadenceIcon height={20} width={20} /> {activity.cadence}rpm
        </p>
        <p className="flex">
          <HeartRateIcon height={20} width={20} /> {activity.hr}bpm
        </p>
        <p className="flex">
          <SpeedIcon height={20} width={20} /> {activity.speed}kph
        </p>
        <p className="flex">
          <PowerIcon height={20} width={20} /> {activity.watts}watts
        </p>
        <p className="flex">
          <EnergyIcon height={20} width={20} /> {activity.kj}Kj
        </p>
        <button onClick={handleRemoveClick}>Remove</button>
      </div>
    </ActivityDiv>
  );
};
export default Activity;
