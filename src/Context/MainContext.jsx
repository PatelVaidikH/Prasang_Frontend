import React, { createContext } from 'react';

export const MainContext = createContext();

const MainContextProvider = (props) => {
  const currency = '₹';

  return (
    <MainContext.Provider value={{ currency }}>
      {props.children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
