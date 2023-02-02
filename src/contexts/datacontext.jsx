import { createContext, useState } from "react";

const removeActivity = (dataList, activityToRemoveId) => {
  const newDataList = dataList.filter((activity) => {
    console.log(activity.upload_id === activityToRemoveId);
    return activity.upload_id !== activityToRemoveId;
  });
  return newDataList;
};

export const DataContext = createContext({
  dataList: [],
  setDataList: () => {},
  filterDataList: () => {},

});

export const DataProvider = ({ children }) => {
  const [dataList, setDataList] = useState([]);

  const removeEntryFromList = (itemToRemoveId) => {
    const newDataList = removeActivity(dataList, itemToRemoveId);
    setDataList(newDataList);
  };

  const value = { dataList, setDataList, removeEntryFromList };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
