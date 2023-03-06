import React, { createContext, useState } from "react";

// 空のオブジェクトを初期値で設定
export const UserContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;

  //globalなstate
  const [userInfo, setUserInfo] = useState(null);

  //const contextName = "じゃけぇ";
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
