import "./Title.css";

interface Props{
    texto:string;
}

function Title({texto}:Props){
    return(
        <>
        <h1 className="custom-title">
            {texto}
        </h1>
        </>
    )
}

export default Title