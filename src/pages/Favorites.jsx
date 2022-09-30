import { useContext } from "react"
import MyContext from "../context/MyContext"
import Card from "../components/Card/Card"

function Favorites() {
  const { array } = useContext(MyContext)

  return (
    <div className="Container flex flex-wrap gap-8 justify-center my-4">
      {array &&
        array.map(
          (dato, id) =>
            dato.like === true && (
              <Card
                key={`${dato.name}-${id}`}
                name={dato.name}
                image={dato.img}
                like={dato.like}
              />
            )
        )}
    </div>
  )
}

export default Favorites
