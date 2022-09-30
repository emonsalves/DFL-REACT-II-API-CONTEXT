import axios from "axios"
import { useState, useEffect } from "react"
import MyContext from "./MyContext"

const MyContextProvider = ({ children }) => {
  const [data, setData] = useState([])
  const [array, setArray] = useState([])
  const [fav, setFav] = useState("try")
  const apiUrl = "https://digimon-api.vercel.app/api/digimon"

  const getFav = () => {
    console.log("UseEffect Data Modificada")
    setArray(data)
    console.log(array)
  }

  useEffect(() => {
    ;(async function () {
      let datos = await axios.get(apiUrl)
      let data2 = await datos.data.map((x) => ({ ...x, like: false }))
      setData(data2)
    })()
  }, [])

  useEffect(() => {
    getFav()
  }, [fav])

  return (
    <MyContext.Provider value={{ data, setData, apiUrl, setFav, fav, array }}>
      {children}
    </MyContext.Provider>
  )
}

export default MyContextProvider
