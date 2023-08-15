import React, { createContext, useContext, useState } from 'react';

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [data, setData] = useState(null);

  const [cur_User, setCur_User] = useState(null);
  const [cli_User, setCli_User] = useState("tomas");

  return (
    <GlobalContext.Provider value={{ cli: cli_User, setar: setCli_User }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const getGlobal_Dt = () => {
  return useContext(GlobalContext);
};

