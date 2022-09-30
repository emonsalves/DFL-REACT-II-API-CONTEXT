import React, { useState } from "react"
import PageLayout from "./layout/PageLayout"

function App() {
  const [dataTest, setDataTest] = useState([])

  return (
    <div>
      <PageLayout />
    </div>
  )
}

export default App
