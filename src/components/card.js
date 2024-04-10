
function Card({name, descripcion}){

    const url = "https://robohash.org/" + name + "?size=100x100";

    return(
        <div className="grid place-items-center p-8 border-slate-950 border-2">
            <img src={url} alt="Robot" className="" />
            <h2 className="text-black font-mono text-center" >{name}</h2>
            <span className="text-black font-mono text-pretty" >{descripcion}</span>
        </div>
    );
}

export default Card;