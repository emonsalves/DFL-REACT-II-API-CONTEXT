import { useContext } from "react"
import MyContext from "../context/MyContext"
import Card from "../components/Card/Card"

function Home() {
  const { data } = useContext(MyContext)

  return (
    <div className="Container flex flex-wrap gap-8 justify-center my-4">
      {data &&
        data.map((dato, id) => (
          <Card
            key={`${dato.name}-${id}`}
            name={dato.name}
            image={dato.img}
            like={dato.like}
          />
        ))}
    </div>
  )
}

export default Home
