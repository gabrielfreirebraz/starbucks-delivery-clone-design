import { createContext } from "react";

const AppProvider = createContext({} as IAppContext);
const CardProvider = createContext({} as any);

export { AppProvider, CardProvider };
