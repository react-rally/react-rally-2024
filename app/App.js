import React from "react";

import constants from "helpers/constants";
import organizers from "../api/organizers";
import schedule from "../api/schedule";
import speakers from "../api/speakers";
import sponsors from "../api/sponsors";
import tickets from "../api/tickets";

const AppContext = React.createContext({});
export const useAppContext = () => React.useContext(AppContext);

export const AppProvider = ({ children }) => (
  <AppContext.Provider
    value={{
      constants,
      organizers,
      schedule,
      speakers,
      sponsors,
      tickets,
    }}
  >
    {children}
  </AppContext.Provider>
);
