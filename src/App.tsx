// import { ThemeProvider } from "styled-components"
import { ThemeProvider } from "styled-components"
import { Router } from "./Router"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { AppProvider } from "./contexts/defaultContext"
import { useState } from "react"
import { products } from "./api/products"
import { v4 as uuidv4 } from "uuid"

function App() {

  const [cartItems, setCartItems] = useState<ICartItem[]>([]);
  const [cartOn, setCartOn] = useState<boolean>(false);

  const onClickAddCart = (newItem: ICartItem): void => {
    const newProductItem = {...newItem, itemId: uuidv4()};

    setCartItems((items) => [...items, newProductItem], );
    setCartOn(true);
    console.log([...cartItems, newProductItem]);
  }
  const onClickRemoveCart = (id: string | null) => {

    if (id === null) {
      setCartItems([]);
    } else {
      setCartItems((items) => items.filter((item) => item.itemId !== id));
    }    
  }

  const providerProps: IAppContext = {
    products,
    cartItems,
    onClickAddCart,
    onClickRemoveCart,
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
