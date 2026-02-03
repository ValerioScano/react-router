// import { useState } from 'react'
// import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
import ProductsPage from "./pages/ProductsPage"
import Navbar from "./pages/Navbar"
import AboutUs from "./pages/AboutUsPage"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" Component={Homepage}></Route>
          <Route path="/Products" Component={ProductsPage}></Route>
          <Route path="/AboutUs" Component={AboutUs}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
