import { useEffect, useState } from "react"
import { dataItems } from "../../mockdata/fakedata"
import ItemDetail from "./ItemDetail"

export default function ItemListContainer({items}){

    const [state, setState] = useState(null)

    const getMockdata =()=>{
        return new Promise((resolver) => {
            setTimeout(() => { resolver(dataItems) }, 3000)
        })
    }
    
    useEffect(() => {
        const callService=async ()=>{
            const result=await getMockdata();
            setState(result)
        }
        callService();
    }, [])

    const increaseQtyItems = (itemId, value) => {
        const result = state.map(
            (item) => {
                if (item.id === itemId) {
                    item.qty = item.qty + value;
                }
                return item;
            }
        )
        setState(result)
    }

    const decreaseQtyItems = (itemId, value) => {
        const result = state.map(
            (item) => {
                if (item.id === itemId) {
                    item.qty = item.qty === 0 ? 0 : item.qty - value;
                }
                return item;
            }
        )
        setState(result)
    }




    return (
        <div className="container" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>

            {
                state ? state.map(
                    (item) => {
                        return <ItemDetail detail={item.detail} name={item.name} imgUrl={item.url} defaultQty={item.qty} addItem={increaseQtyItems} lessItem={decreaseQtyItems} idItem={item.id} key={item.id} />
                    }
                ) :
                    <></>
            }
        </div>
    );

}