// import { ThemeProvider } from "styled-components"
import { ThemeProvider } from "styled-components"
import { Router } from "./Router"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { AppProvider } from "./contexts/defaultContext"

function App() {

  return (    
    <ThemeProvider theme={defaultTheme}>      
      <AppProvider.Provider value={{}}>
        <Router />
        <GlobalStyle />
      </AppProvider.Provider>
    </ThemeProvider>
    
  )
}

export default App
