import "./card.css"

interface Props{
    nombre:string,
    imagen:string,
    descripcion:string
}
function Card({nombre, imagen, descripcion}:Props){
    return(
        <>
        <div className="card">
            <img src={imagen} alt={nombre}/>
            <div className="info">
                <h3>{nombre}</h3>
                <p>{descripcion}</p>
            </div>
        </div>
        </>
    )
}
export default Card