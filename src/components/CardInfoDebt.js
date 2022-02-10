import { useEffect, useState } from "react"

export default function CardInfoDebt({ totalAmount, dateOfIssue, dateOfExpiration, cardState }) {
    const [cardData, setCardData] = useState({
        totalAmount: totalAmount,
        dateOfIssue: dateOfIssue,
        dateOfExpiration: dateOfExpiration,
        cardState: cardState
    });

    useEffect(() => {
    
    }, [totalAmount, dateOfIssue, dateOfExpiration, cardState]);
    

    return <>
        <div className="card-item" style={{display:"flex"}}>
            <div className="card-info" style={{borderRadius:"10px 0px 0px 10px", backgroundColor:"red"}}>
                <div className="card-info-left">
                    <div className="card-info-left_title">
                        TITULO
                    </div>
                    <div className="card-info-left_totalAmount">
                        {cardData.totalAmount}
                    </div>
                </div>
                <div className="card-info-right">
                    <div className="card-info-right__dateOfIssue">
                        <div className="">Fecha de Emisiòn</div>
                        <div className="">{cardData.dateOfIssue}</div>

                    </div>
                    <div className="card-info-right__dateOfExpiration">
                        <div className="">Fecha de Expiraciòn</div>
                        <div className="">{cardData.dateOfExpiration}</div>
                    </div>
                </div>
            </div>
            <div className="card-button">
                <div className="">
                    Pagar
                </div>
            </div>
        </div>
    </>
}
