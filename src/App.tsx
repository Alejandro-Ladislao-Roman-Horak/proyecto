import "./App.css"
import { Title, Card } from "./components"
import { usePersonajes } from "./hooks"

function App() {
  const { personajes } = usePersonajes()

  return (
    <>
      <Title texto="Rick and Morty API"/>

      {personajes.map(p => (
        <Card
          key={p.id}
          imagen={p.image}
          nombre={p.name}
          descripcion={`${p.species} - ${p.status}`}
        />
      ))}
    </>
  )
}

export default App
