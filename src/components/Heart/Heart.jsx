import React from "react"
import style from "./Heart.css"

function Heart({ like }) {
  return (
    <>
    
      {like === true ? (
        <h1 className="heartOn">
          <i className="fas fa-heart"></i>
        </h1>
      ) : (
        <h1 className="heartOff">
          <i className="fas fa-heart"></i>
        </h1>
      )}
    </>
  )
}

export default Heart
