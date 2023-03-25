import React, { FC, ReactNode, createContext, useContext } from "react";
import { PetApi } from "../../api";

const petApi = new PetApi();
const ApiContext = createContext<{ petApi: PetApi } | null>(null);

export const ApiProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ApiContext.Provider value={{ petApi: petApi }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApiContext = () => {
  const context = useContext(ApiContext);

  if (context === null) {
    throw Error("useApiContext must be used inside of a ApiContext");
  }

  return context;
};
