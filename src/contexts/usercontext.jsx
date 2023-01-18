import { createContext, useState } from "react";

export const UserContext = createContext({
  user: null,
  setUser: () => {},
  token: null,
  setToken: () => {},
  profileIsOpen: null,
  toggleProfileIsOpen: ()=>{},
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [profileIsOpen, setProfileIsOpen] = useState(false);

  const toggleProfileIsOpen = () => {
    setProfileIsOpen(!profileIsOpen);
  }
  const value = { user, setUser, token, setToken, profileIsOpen,toggleProfileIsOpen };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
