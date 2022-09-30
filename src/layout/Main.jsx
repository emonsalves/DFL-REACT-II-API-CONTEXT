import { Routes, Route } from "react-router-dom"
import Favorites from "../pages/Favorites"
import Home from "../pages/Home"
import NotFound from "../pages/NotFound"

function Main() {
  
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default Main
