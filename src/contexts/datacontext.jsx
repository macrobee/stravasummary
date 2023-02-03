import { createContext, useState } from "react";

const removeActivity = (displayedDataList, activityToRemoveId) => {
  const newDataList = displayedDataList.filter((activity) => {
    console.log(activity.upload_id === activityToRemoveId);
    return activity.upload_id !== activityToRemoveId;
  });
  return newDataList;
};

export const DataContext = createContext({
  displayedDataList: [],
  fetchedData: [],
  addToFetchedData: () => {},
  setDisplayedDataList: () => {},
  filterDataList: () => {},
  resetFetchedData: () => {},
});

export const DataProvider = ({ children }) => {
  const [displayedDataList, setDisplayedDataList] = useState([]);
  const [fetchedData, setFetchedData] = useState([]);

  const removeEntryFromList = (itemToRemoveId) => {
    const newDataList = removeActivity(displayedDataList, itemToRemoveId);
    setDisplayedDataList(newDataList);
  };

  const addToFetchedData = (newData) => {
    setFetchedData([...newData]);
  };
  const resetFetchedData = () => {
    setFetchedData([]);
  };

  const value = {
    displayedDataList,
    setDisplayedDataList,
    fetchedData,
    addToFetchedData,
    removeEntryFromList,
    resetFetchedData,
  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
