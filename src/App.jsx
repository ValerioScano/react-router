// import { useState } from 'react'
// import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
import ProductsPage from "./pages/ProductsPage"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Homepage}></Route>
          <Route path="/Products" Component={ProductsPage}></Route>
          <Route path="/AboutUs" Component={ProductsPage}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
