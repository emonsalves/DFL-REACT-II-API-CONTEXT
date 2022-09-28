import { useState, useEffect } from "react"

import MyContext from "./MyContext"

const MyContextProvider = ({ children }) => {
  const [data, setData] = useState([])
  const apiUrl = "https://digimon-api.vercel.app/api/digimon"
  const [test, setTest] = useState("test ok")

  useEffect(() => {
    ;(async function () {
      let data = await fetch(apiUrl)
        .then((response) => response.json())
        .catch((error) => error)
      let data2 = await data.map((x) => ({ ...x, like: false }))
      setData(data2)
    })()
  }, [])

  setData

  return (
    <MyContext.Provider value={{ test, setTest, data, setData, apiUrl }}>
      {children}
    </MyContext.Provider>
  )
}

export default MyContextProvider
