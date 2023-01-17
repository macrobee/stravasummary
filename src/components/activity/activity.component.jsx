import {ReactComponent as AchievementIcon} from "../../assets/achievements.svg";
import {ReactComponent as CadenceIcon} from "../../assets/cadence.svg";
import {ReactComponent as EnergyIcon} from "../../assets/energy.svg";
import {ReactComponent as HeartRateIcon} from "../../assets/heartrate.svg";
import {ReactComponent as PowerIcon} from "../../assets/power.svg";
import {ReactComponent as SpeedIcon} from "../../assets/speed.svg";

import { ActivityDiv } from "./activity.styles";


const Activity = ({ activity }) => {
  return (
    <ActivityDiv>
      <h2>{activity.name}</h2>
      <h3>{activity.type}</h3>
      <div className="icon-container">
        <p><AchievementIcon height={20} width={20}/> {activity.achievementCount} </p>
        <p><CadenceIcon height={20} width={20}/> {activity.cadence}rpm</p>
        <p><HeartRateIcon height={20} width={20}/> {activity.hr}bpm</p>
        <p><SpeedIcon height={20} width={20}/> {activity.speed}kph</p>
        <p><PowerIcon height={20} width={20}/> {activity.watts}watts</p>
        <p><EnergyIcon height={20} width={20}/> {activity.kj}Kj</p>
      </div>
    </ActivityDiv>
  );
};
export default Activity;
