import React from "react"
import Heart from "../Heart/Heart"

function Card({ name, image, like, id }) {
  const clickLike = (e) => {
    console.log(name, like)
  }

  return (
    <div className="card w-[250px] shadow-xl bg-white rounded-lg hover:scale-105 duration-300">
      <img src={image} alt={name} className="rounded-lg" />
      <div
        className="flex -translate-y-64 mr-3 mt-2 float-right"
        onClick={clickLike}
      >
        <Heart like={like} />
      </div>
      <div className="card-body">
        <h2 className="card-title text-center font-bold">
          {name}
          {id}
        </h2>
      </div>
    </div>
  )
}

export default Card
