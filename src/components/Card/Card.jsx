import { useContext } from "react"
import Heart from "../Heart/Heart"
import MyContext from "../../context/MyContext"

function Card({ name, image, like }) {
  const { data, setData, setFav } = useContext(MyContext)

  const dataUpdate = data

  const clickLike = (e) => {
    const index = data.findIndex((item) => item.name === name)
    e.target.className === "fas fa-heart heartOff"
      ? (dataUpdate.splice(index, 1, { name: name, img: image, like: true }),
        setData(dataUpdate),
        setFav(`true${index}`),
        (e.target.className = "fas fa-heart heartOn"))
      : (dataUpdate.splice(index, 1, { name: name, img: image, like: false }),
        setData(dataUpdate),
        setFav(`false${index}`),
        (e.target.className = "fas fa-heart heartOff"))
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
        <h2 className="card-title text-center font-bold">{name}</h2>
      </div>
    </div>
  )
}

export default Card
