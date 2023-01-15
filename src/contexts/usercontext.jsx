import { createContext, useState } from "react";

export const UserContext = createContext({
  user: null,
  setUser: () => {},
  token: null,
  setToken: () => {},
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const value = { user, setUser, token, setToken };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
