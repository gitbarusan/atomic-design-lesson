import React, { createContext } from "react";

// 空のオブジェクトを初期値で設定
export const UserContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;
  const contextName = "じゃけぇ";
  return (
    <UserContext.Provider value={{ contextName }}>
      {children}
    </UserContext.Provider>
  );
};
