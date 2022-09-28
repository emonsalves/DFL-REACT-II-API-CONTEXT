import React from "react"
import Heart from "../Heart/Heart"
import style from "./Card.css"

function Card({ name, image, like }) {
  return (
    <div className="shadow-xl">
      <div
        className="shadow-lg group container rounded-md bg-white min-w-sm max-w-sm flex justify-center items-center mx-auto content-div"
        style={{ backgroundImage: `url(${image}) ` }}
      >
        <div className="min-w-full">
          <div className="min-w-full image-cover rounded-t-md">
            <div className="mr-3 mt-2 float-right">
              <Heart like={like} />
            </div>
          </div>
          <div className="min-w-full py-1 bg-white rounded-b-md group-hover:opacity-5">
            <span className="block text-gray-600 font-bold text-md text-center">
              {name}
            </span>
          </div>
        </div>
        <div className="absolute opacity-0 fd-sh group-hover:opacity-100"></div>
      </div>
    </div>
  )
}

export default Card
