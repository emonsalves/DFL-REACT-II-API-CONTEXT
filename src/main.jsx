import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import { BrowserRouter } from "react-router-dom"
import MyContext from "./context/MyProvider"
import axios from "axios"

axios.interceptors.request.use((request) => {
  return request
})

axios.interceptors.response.use((response) => {
  return response
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MyContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MyContext>
  </React.StrictMode>
)
