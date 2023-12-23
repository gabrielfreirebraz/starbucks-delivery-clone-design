import { createContext } from "react";

const AppProvider = createContext({} as IAppContext);
const CardProvider = createContext({} as any);
const CheckoutProvider = createContext({} as any);

export { AppProvider, CardProvider, CheckoutProvider };
