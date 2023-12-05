const Curso = ({titulo,subtitulo,imagen}) =>{
    return(
    <div>
        <img src={imagen} alt={titulo} />
        <h2>{titulo}</h2>
        <p>{subtitulo }</p>
    </div>
    )
}
// function Curso(props){
//     return(
//     <div>
//         <img src={props.imagen} alt={props.titulo} />
//         <h2>{props.titulo}</h2>
//         <p>{props.subtitulo }</p>
//     </div>
//     )
// }

export default Curso