import { Layout } from "./pages/Layout/Layout"
import { Home } from "./pages/Home/Home"
import { ErrorPage } from "./pages/ErrorPage/ErrorPage"
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"

import { GlobalStyles } from "./style/GlobalStyles"


const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout />} errorElement={<ErrorPage />}>
    <Route path="/" element={<Home />} />
  </Route>

))


function App() {
  return (
    <>
    <RouterProvider router={router} />

    <GlobalStyles />
    </>
  )
}

export default App
