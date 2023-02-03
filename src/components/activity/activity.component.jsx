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
      <h2 className="font-bold text-lg">{activity.name}</h2>
      <h3 className="font-extralight text-sm">{activity.type}</h3>
      <p className="italic text-xs">
        {activity.date}, {activity.startTime}
      </p>
      <div className="grid grid-cols-3 grid-rows-2 gap-3">
        <p className="flex gap-2">
          <AchievementIcon height={20} width={20} /> {activity.achievementCount}{" "}
        </p>
        <p className="flex gap-2">
          <CadenceIcon height={20} width={20} /> {Number.isNaN(activity.cadence) ? "-" : activity.cadence}rpm
        </p>
        <p className="flex gap-2">
          <HeartRateIcon height={20} width={20} /> {Number.isNaN(activity.hr) ? "-" : activity.hr}bpm
        </p>
        <p className="flex gap-2">
          <SpeedIcon height={20} width={20} /> {activity.speed}kph
        </p>
        <p className="flex gap-2">
          <PowerIcon height={20} width={20} /> {Number.isNaN(activity.watts) ? "-" : activity.watts}watts
        </p>
        <p className="flex gap-2">
          <EnergyIcon height={20} width={20} /> {Number.isNaN(activity.kj) ? "-" : activity.kj}Kj
        </p>
        <button onClick={handleRemoveClick}>Remove</button>
      </div>
    </ActivityDiv>
  );
};
export default Activity;
