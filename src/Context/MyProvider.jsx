import axios from "axios"
import { useState, useEffect } from "react"
import MyContext from "./MyContext"

const MyContextProvider = ({ children }) => {
  const [data, setData] = useState([])
  const apiUrl = "https://digimon-api.vercel.app/api/digimon"
  const [test, setTest] = useState("test ok")

  useEffect(() => {
    ;(async function () {
      let datos = await axios.get(apiUrl)
      let data2 = await datos.data.map((x) => ({ ...x, like: false }))
      setData(data2)
    })()
  }, [])

  return (
    <MyContext.Provider value={{ test, setTest, data, setData, apiUrl }}>
      {children}
    </MyContext.Provider>
  )
}

export default MyContextProvider
