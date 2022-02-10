export default function Card({number, actionReturn}){

    const buttonAction=({typeAction})=>{
        actionReturn(typeAction)
    }
    return <>
    <div className="card">
        <h3>{number}</h3>
        <button onClick={buttonAction({typeAction:"plus"})}>+</button>
        <button onClick={buttonAction({typeAction:"less"})}>-</button>
    </div>
    </>

}