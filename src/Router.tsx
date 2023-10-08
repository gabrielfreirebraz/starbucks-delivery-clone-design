import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { DefaultLayout } from "./layouts/DefaultLayout"

export const Router = () => {
  return (
    <Routes>
      <Route element={<DefaultLayout/>} path="/">
        <Route element={<Home />} path="/home" />
      </Route>
    </Routes>
  )
}