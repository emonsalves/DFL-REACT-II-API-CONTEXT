import React from "react"
import Heart from "../Heart/Heart"
import style from "./Card.css"

function Card() {
  const picture =
    "https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg"
  return (
    <div className="shadow-xl">
      <div
        className="shadow-lg group container rounded-md bg-white min-w-sm max-w-sm flex justify-center items-center mx-auto content-div"
        style={{ backgroundImage: `url(${picture}) ` }}
      >
        <div className="min-w-full">
          <div className="min-w-full image-cover rounded-t-md">
            <div className="mr-3 mt-2 float-right">
              <Heart />
            </div>
          </div>
          <div className="min-w-full py-1 bg-white rounded-b-md group-hover:opacity-5">
            <span className="block text-gray-600 font-bold text-md text-center">
              Title
            </span>
            <span className="block text-gray-600 text-sm text-center m-2 ">
              "Person Walking Between Green Forest Trees"
            </span>
          </div>
        </div>
        <div className="absolute opacity-0 fd-sh group-hover:opacity-100">
          <div className="flex flex-col justify-center items-center">
            <span className="text-xl font-bold text-white tracking-wider leading-relaxed font-sans bg-white backdrop-filter backdrop-blur-md bg-opacity-25 rounded-lg px-4 m-1">
              By: Luis del Río
            </span>
            <span className="text-xl font-bold text-white tracking-wider leading-relaxed font-sans bg-white backdrop-filter backdrop-blur-md bg-opacity-25 rounded-lg px-3 m-1">
              Link
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
