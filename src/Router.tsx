import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { DefaultLayout } from "./layouts/DefaultLayout"
import { Checkout } from "./pages/Checkout"
import { Success } from "./pages/Success"

export const Router = () => {
  return (
    <Routes>
      <Route element={<DefaultLayout/>} path="/">
        <Route element={<Home />} path="/home" />
        <Route element={<Success />} path="/success" />
        <Route element={<Checkout />} path="/checkout" />
      </Route>
    </Routes>
  )
}