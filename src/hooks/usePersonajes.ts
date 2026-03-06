import { useEffect, useState } from 'react'
import type { Personajes } from "../rm"

const usePersonajes=()=>{
    //manejo de estado
    //estos <Pokemon[]> es como un cadenero en un bar... controla los types o tipos de datos
    //que vamos a tener... recuerden que Pokemon fueron los types que nosotros creamos
    const [personajes,setPersonajes]=useState<Personajes[]>([])

    const traerPersonajes = async()=>{
      try{
        //mensajero que vaya por los datos, un rappi = fetch
        const respuesta = await fetch("https://rickandmortyapi.com/api/character")
        //paquete abrirlo convertir a JSON
        const datos = await respuesta.json()
        // usar map para seleccionar solo datos que quiero
        //index es la posición de cada elemento en el json
        
        setPersonajes(datos.results)
      }
      catch(error){
        console.error("Error al traer los datos", error)
      }
    }
    //use effect es un hook que actúa como un disparador o trigger
    //lo que hace es activar la función traerPokemon
    useEffect(()=>{
      traerPersonajes()
    },[]) //este corchete que pusimos es para que no se ejecute infinitamente, solo una vez
    
    
  return{
    personajes
  }
}
export default usePersonajes