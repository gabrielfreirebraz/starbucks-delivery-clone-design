// import { ThemeProvider } from "styled-components"
import { ThemeProvider } from "styled-components"
import { Router } from "./Router"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { AppProvider } from "./contexts/defaultContext"
import { useState } from "react"
import { products } from "./api/products"

function App() {

  const [cartItems, setCartItems] = useState<TProduct[]>([]);
  const [cartOn, setCartOn] = useState<boolean>(false);

  const onClickAddCart = (newItem: TProduct): void => {
    setCartItems((items) => [...items, newItem], );
    setCartOn((c) => !c);
    console.log([...cartItems, newItem]);
  }

  const providerProps: IAppContext = {
    products,
    cartItems,
    onClickAddCart,
    cartOn,
    setCartOn
  };

  return (    
    <ThemeProvider theme={defaultTheme}>      
      <AppProvider.Provider value={providerProps}>
        <Router />
        <GlobalStyle />
      </AppProvider.Provider>
    </ThemeProvider>
  )
}

export default App
