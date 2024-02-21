import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import StartPage from "./SignIn_SignUp/StartPage"
import Home from "./Home"

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
