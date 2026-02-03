// import { useState } from 'react'
// import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
import ProductsPage from "./pages/ProductsPage"
import Navbar from "./components/Navbar"
import AboutUs from "./pages/AboutUsPage"
import DefaultLayout from "./components/DefaultLayout"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={Homepage}></Route>
            <Route path="/Products" Component={ProductsPage}></Route>
            <Route path="/AboutUs" Component={AboutUs}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
