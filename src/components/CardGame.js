import { useState } from "react"
import Card from "./Card";

export default function CardGame({cardsQty}){

    const [cardItems, setCardItems] = useState(createGame());

    const createGame=(cardsQty)=>{
        

        return [];
    }


    return
    <>
        <div className="container">
            {
                array.forEach(element => {
                    <Card></Card>
                })
            }

        </div>
    </>



}