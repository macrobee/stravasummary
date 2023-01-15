const Activity = ({ activity }) => {
  return (
    <div>
      <h2>{activity.name}</h2>
      <h3>{activity.type}</h3>
      <p>{activity.achievementCount} achievements</p>
      <p>average cadence: {activity.cadence}</p>
      <p>average heart rate: {activity.hr}</p>
      <p>average speed: {activity.speed}</p>
      <p>average power: {activity.watts}</p>
      <p>Energy burn: {activity.kj}Kj</p>
    </div>
  );
};
export default Activity;
