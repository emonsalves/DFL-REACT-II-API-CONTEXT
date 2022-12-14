import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import Main from "./Main"

function PageLayout() {
  return (
    <div className="min-h-screen">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default PageLayout
