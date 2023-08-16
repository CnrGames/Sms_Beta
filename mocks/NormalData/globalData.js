import React, { createContext, useContext, useState } from 'react';

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [data, setData] = useState(null);

  const [cur_User, setCur_User] = useState(null);
  const [cli_User, setCli_User] = useState("tomas");
  const [cur_Chat, setChat] = useState();

  return (
    <GlobalContext.Provider value={{
      getMe: cur_User, cli: cli_User, setCli: setCli_User, setMe: setCur_User,
      setChat: setChat, getChat: cur_Chat
    }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const getGlobal_Dt = () => {
  return useContext(GlobalContext);
};

