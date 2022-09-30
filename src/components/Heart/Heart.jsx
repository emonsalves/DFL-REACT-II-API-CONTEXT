import React from "react"
import style from "./Heart.css"

function Heart({ like }) {
  return (
    <>
      {like === true ? (
          <i className="fas fa-heart heartOn"></i>
      ) : (
          <i className="fas fa-heart heartOff"></i>
      )}
    </>
  )
}

export default Heart
